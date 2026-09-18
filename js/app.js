/* ========================================
   App：讀取 cases.js 的資料，渲染首頁／分類頁，
   組裝 Preview iframe，處理搜尋、篩選、複製、收合展開。
   純 HTML/CSS/JS，不依賴任何 build 工具，可直接放上 GitHub Pages。
======================================== */

/* ---------- Viewport 預設尺寸（可以在這裡增減，全站都會套用） ---------- */
const VIEWPORT_PRESETS = [
  { key: '1920', label: '1920', w: 1920 },
  { key: '1440', label: '1440', w: 1440 },
  { key: '1024', label: '1024', w: 1024 },
  { key: '768',  label: '768',  w: 768  },
  { key: 'mobile', label: 'Mobile', w: null }, // w 由每個案例自己的 mobileBreakpoint 決定
];

/* ---------- 共用小工具 ---------- */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function catName(id) {
  const c = CATEGORIES.find(function (x) { return x.id === id; });
  return c ? c.name : id;
}

function countByCat(catId) {
  return CASES.filter(function (c) { return c.category === catId; }).length;
}

/* ---------- 組裝 Preview 用的完整 HTML ----------
   Cascade 順序刻意對齊正式網站：
   1. template-base.css（真實套版基礎樣式：normalize.css + menu.css，外部 <link> 載入，
      跟正式網站一樣是「先載入套版、custom.css 疊在最上面」）
   2. dependencies.css（案例自己宣告的額外套件，例如 Swiper／Fancybox）
   3. case.css（案例的原始 custom.css，逐字，不動）
   4. previewExtraCss（只允許放「正式網站真的沒有、但 Preview 展示必要」的東西，
      例如缺圖時的替代色塊；不可以拿來補套版樣式——那些應該進 template-base.css）
   不經過任何 HTML 屬性字串轉義，直接組字串再指派給 iframe.srcdoc。
------------------------------------------------------------------ */
function buildPreviewDoc(kase) {
  const depCss = (kase.dependencies && kase.dependencies.css || [])
    .map(function (u) { return '<link rel="stylesheet" href="' + u + '">'; })
    .join('\n');
  const depJs = (kase.dependencies && kase.dependencies.js || [])
    .map(function (u) { return '<script src="' + u + '"><\/script>'; })
    .join('\n');

  const bodyHtml = kase.hasOriginalHtml && kase.html ? kase.html : (kase.previewHtml || '');
  const bodyJs = kase.js || '';

  return '<!DOCTYPE html><html><head><meta charset="utf-8">\n' +
    '<link rel="stylesheet" href="css/template-base.css">\n' +
    depCss + '\n' +
    '<style>\n' + (kase.css || '') + '\n</style>\n' +
    (kase.previewExtraCss ? '<style>\n' + kase.previewExtraCss + '\n</style>\n' : '') +
    '</head><body>\n' +
    bodyHtml + '\n' +
    depJs + '\n' +
    (bodyJs ? '<script>\n' + bodyJs + '\n<\/script>' : '') +
    '</body></html>';
}

function missingDependencies(kase) {
  // 目前三個案例都沒有設定 dependencies，這裡先保留邏輯：
  // 之後案例若設定了 dependencies 但沒有對應網址（例如寫 "REQUIRED" 佔位），就會被視為缺少依賴
  const all = [].concat(kase.dependencies && kase.dependencies.css || [], kase.dependencies && kase.dependencies.js || []);
  return all.filter(function (u) { return !u || u.indexOf('http') !== 0; });
}

/* ---------- 產生「查看程式碼」用的分頁（沒有 JS 就不顯示 JS 分頁） ---------- */
function buildCodeTabs(kase, uid) {
  const tabs = [];
  if (kase.hasOriginalHtml && kase.html) tabs.push({ key: 'html', label: 'HTML', code: kase.html });
  if (kase.css) tabs.push({ key: 'css', label: 'CSS', code: kase.css });
  if (kase.js) tabs.push({ key: 'js', label: 'JS', code: kase.js });
  if (tabs.length === 0) return '';

  const tabBtns = tabs.map(function (t, i) {
    return '<button class="code-tab-btn" data-active="' + (i === 0) + '" data-tab="' + uid + '-' + t.key + '">' + t.label + '</button>';
  }).join('');

  const panels = tabs.map(function (t, i) {
    return '<div class="code-panel" data-active="' + (i === 0) + '" data-panel="' + uid + '-' + t.key + '"><pre id="code-' + uid + '-' + t.key + '">' + escapeHtml(t.code) + '</pre></div>';
  }).join('');

  const copyBtns = tabs.map(function (t) {
    return '<button class="copy-btn" data-copy="code-' + uid + '-' + t.key + '" data-label="' + t.label + '">複製 ' + t.label + '</button>';
  }).join('') + '<button class="copy-btn" data-copy-all="' + uid + '" data-label="全部">複製全部</button>';

  return '<div class="code-tabs">' + tabBtns + '</div>' +
    '<div class="code-panels">' + panels + '</div>' +
    '<div class="copy-row">' + copyBtns + '</div>';
}

/* ---------- 產生一張案例卡片的完整 HTML ---------- */
function buildCaseCard(kase) {
  const uid = kase.id;
  const missingDeps = missingDependencies(kase);
  const hasPreview = !!(kase.previewHtml || (kase.hasOriginalHtml && kase.html));

  const tagline = ['<span>' + catName(kase.category) + '</span>']
    .concat(kase.tags.map(function (t) { return '<span>' + t + '</span>'; }))
    .concat(['<span>來源：' + escapeHtml(kase.source || '未命名') + '</span>'])
    .join('<span class="d">·</span>');

  const previewToolbar = hasPreview ? (
    '<div class="preview-wrap">' +
    '<div class="preview-toolbar">' +
    '<span class="viewport-label" data-viewport-label="' + uid + '">—</span>' +
    '<div class="preview-actions">' +
    '<button class="icon-btn" data-preview-open="' + uid + '">⤢ 新分頁開啟</button>' +
    '<div class="device-switch" data-preview="' + uid + '">' +
    VIEWPORT_PRESETS.map(function (p, i) {
      const w = p.w || kase.mobileBreakpoint;
      return '<button data-w="' + w + '" data-active="' + (i === 2) + '">' + p.label + '</button>';
    }).join('') +
    '</div></div></div>' +
    '<div class="preview-canvas"><iframe id="frame-' + uid + '" data-case-id="' + uid + '" style="width:1024px;height:200px"></iframe></div>' +
    (kase.previewNote ? '<div class="preview-flag">' + kase.previewNote + '</div>' : '') +
    '</div>'
  ) : (
    '<div class="preview-wrap"><div class="preview-missing">此案例缺少原始 HTML（或依賴原網站結構），尚無法產生 Preview，僅提供程式碼。</div></div>'
  );

  const codeInner = buildCodeTabs(kase, uid);

  return (
    '<article class="case-card" id="case-' + uid + '" data-cat="' + kase.category + '" ' +
    'data-tags="' + kase.tags.map(function (t) { return t.toLowerCase(); }).join(' ') + '" ' +
    'data-search="' + escapeHtml((kase.title + ' ' + kase.description + ' ' + kase.tags.join(' ') + ' ' + kase.selectors + ' ' + kase.source).toLowerCase()) + '">' +

    '<div class="case-top">' +
    '<div class="case-name">' + escapeHtml(kase.title) + '</div>' +
    '<div class="case-tagline">' + tagline + '</div>' +
    '<div class="case-desc">' + escapeHtml(kase.description) + '</div>' +
    '</div>' +

    '<div class="dep-warning" data-show="' + (missingDeps.length > 0) + '">⚠ Preview 可能不完整：缺少 ' + missingDeps.join(', ') + '</div>' +

    previewToolbar +

    '<div class="code-toggle-row"><button class="code-toggle-btn" data-toggle="' + uid + '">▾ 查看程式碼</button></div>' +
    '<div class="code-section" data-code-section="' + uid + '">' + codeInner +

    '<dl class="case-meta">' +
    '<div><dt>主要 Selector</dt><dd><code>' + escapeHtml(kase.selectors) + '</code></dd></div>' +
    '<div><dt>使用技術</dt><dd>' + escapeHtml(kase.techniques) + '</dd></div>' +
    '<div><dt>RWD breakpoint</dt><dd>' + kase.breakpoints.map(function (b) { return b + 'px'; }).join('、') + '（原始斷點，未更動）</dd></div>' +
    '</dl>' +
    (kase.notes ? '<div class="case-notes"><b>注意事項：</b>' + kase.notes + '</div>' : '') +
    (kase.suggestion ? '<div class="case-notes"><b>可選改善建議：</b>' + kase.suggestion + '</div>' : '') +

    '</div>' + // .code-section
    '</article>'
  );
}

/* ---------- Preview 互動：自動量高、viewport 切換、新分頁開啟 ---------- */
function autosizeFrame(frame) {
  try {
    const doc = frame.contentDocument;
    if (doc && doc.body) {
      const h = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
      frame.style.height = (h + 4) + 'px';
    }
  } catch (e) { /* ignore */ }
}

function wireCaseCard(kase) {
  const uid = kase.id;
  const frame = document.getElementById('frame-' + uid);
  if (frame) {
    frame.srcdoc = buildPreviewDoc(kase);
    frame.addEventListener('load', function () { autosizeFrame(frame); });

    const sw = document.querySelector('.device-switch[data-preview="' + uid + '"]');
    const label = document.querySelector('[data-viewport-label="' + uid + '"]');
    if (sw) {
      const initial = sw.querySelector('button[data-active="true"]');
      if (label && initial) label.textContent = initial.getAttribute('data-w') + 'px';
      sw.querySelectorAll('button').forEach(function (b) {
        b.addEventListener('click', function () {
          sw.querySelectorAll('button').forEach(function (x) { x.setAttribute('data-active', 'false'); });
          b.setAttribute('data-active', 'true');
          const w = b.getAttribute('data-w');
          frame.style.width = w + 'px';
          if (label) label.textContent = w + 'px';
          setTimeout(function () { autosizeFrame(frame); }, 90);
        });
      });
    }

    const openBtn = document.querySelector('[data-preview-open="' + uid + '"]');
    if (openBtn) {
      openBtn.addEventListener('click', function () {
        const blob = new Blob([buildPreviewDoc(kase)], { type: 'text/html' });
        window.open(URL.createObjectURL(blob), '_blank');
      });
    }
  }

  // 程式碼收合展開
  const toggleBtn = document.querySelector('[data-toggle="' + uid + '"]');
  const section = document.querySelector('[data-code-section="' + uid + '"]');
  if (toggleBtn && section) {
    toggleBtn.addEventListener('click', function () {
      const open = section.getAttribute('data-open') === 'true';
      section.setAttribute('data-open', String(!open));
      toggleBtn.textContent = !open ? '▴ 收合程式碼' : '▾ 查看程式碼';
    });
  }

  // 程式碼 Tab 切換
  const card = document.getElementById('case-' + uid);
  if (card) {
    card.querySelectorAll('.code-tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetKey = btn.getAttribute('data-tab');
        card.querySelectorAll('.code-tab-btn').forEach(function (b) { b.setAttribute('data-active', String(b.getAttribute('data-tab') === targetKey)); });
        card.querySelectorAll('.code-panel').forEach(function (p) { p.setAttribute('data-active', String(p.getAttribute('data-panel') === targetKey)); });
      });
    });

    // 複製
    card.querySelectorAll('.copy-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        let text = '';
        if (btn.hasAttribute('data-copy-all')) {
          text = Array.prototype.slice.call(card.querySelectorAll('.code-panel pre')).map(function (p) { return p.textContent; }).join('\n\n');
        } else {
          const el = document.getElementById(btn.getAttribute('data-copy'));
          text = el ? el.textContent : '';
        }
        const restore = btn.textContent;
        function done() {
          btn.textContent = '已複製 ✓';
          btn.setAttribute('data-copied', 'true');
          setTimeout(function () { btn.textContent = restore; btn.removeAttribute('data-copied'); }, 1400);
        }
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(done).catch(function () { fallbackCopy(text); done(); });
        } else {
          fallbackCopy(text); done();
        }
      });
    });
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
}

/* ---------- 分類頁：搜尋 + Tag 篩選 ---------- */
function wireCatFilters(catId) {
  const list = document.querySelector('[data-case-list="' + catId + '"]');
  if (!list) return;
  const searchInput = document.querySelector('[data-cat-search="' + catId + '"]');
  const chipRow = document.querySelector('[data-chip-group="' + catId + '"]');

  function apply() {
    const q = (searchInput && searchInput.value.trim().toLowerCase()) || '';
    const activeChip = chipRow ? chipRow.querySelector('.chip[data-active="true"]') : null;
    const tag = activeChip ? activeChip.getAttribute('data-chip') : 'all';
    list.querySelectorAll('.case-card').forEach(function (card) {
      const hay = card.getAttribute('data-search') || '';
      const tags = (card.getAttribute('data-tags') || '').split(' ');
      const matchQ = q === '' || hay.indexOf(q) !== -1;
      const matchTag = tag === 'all' || tags.indexOf(tag) !== -1;
      card.setAttribute('data-hidden', String(!(matchQ && matchTag)));
    });
  }

  if (searchInput) searchInput.addEventListener('input', apply);
  if (chipRow) {
    chipRow.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        chipRow.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('data-active', 'false'); });
        chip.setAttribute('data-active', 'true');
        apply();
      });
    });
  }
}

/* ---------- 分類頁渲染入口：category.html 這幾份檔案會呼叫這個函式 ---------- */
function renderCategoryPage(catId) {
  const cat = CATEGORIES.find(function (c) { return c.id === catId; });
  const cases = CASES.filter(function (c) { return c.category === catId; });

  document.getElementById('pageTitle').textContent = cat.name;
  document.title = cat.name + ' – 功能頁樣式資料庫';
  document.getElementById('pageCount').textContent = cases.length + ' 個案例';

  // 動態產生分類內的 tag 篩選 chip
  const allTags = Array.from(new Set(cases.reduce(function (acc, c) { return acc.concat(c.tags); }, [])));
  const chipRow = document.getElementById('chipRow');
  chipRow.innerHTML = '<span class="chip" data-chip="all" data-active="true">全部</span>' +
    allTags.map(function (t) { return '<span class="chip" data-chip="' + t.toLowerCase() + '">' + t + '</span>'; }).join('');

  const listEl = document.getElementById('caseList');
  if (cases.length === 0) {
    listEl.innerHTML = '<div class="empty-note">尚無案例。</div>';
  } else {
    listEl.innerHTML = cases.map(buildCaseCard).join('');
    cases.forEach(wireCaseCard);
  }

  wireCatFilters(catId);

  // 如果網址帶了 #case-xxx，捲到那張卡並展開程式碼
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      setTimeout(function () {
        const toggleBtn = target.querySelector('.code-toggle-btn');
        if (toggleBtn) toggleBtn.click();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }
}

/* ---------- 首頁渲染 ---------- */
function renderHomePage() {
  // 分類卡片
  const catGrid = document.getElementById('catGrid');
  catGrid.innerHTML = CATEGORIES.map(function (cat) {
    return '<a class="cat-card" href="' + cat.id + '.html" style="--cat-accent:' + cat.accent + '">' +
      '<div><h3>' + cat.name + '</h3><div class="ct">' + cat.tags + '</div></div>' +
      '<div class="cf"><span class="n">' + countByCat(cat.id) + ' 個案例</span><span class="go">查看 →</span></div>' +
      '</a>';
  }).join('');

  // 最近新增（用同一份真正的 Preview 內容縮小當縮圖）
  const recentRow = document.getElementById('recentRow');
  const recent = CASES.slice().sort(function (a, b) { return (b.updated || '').localeCompare(a.updated || ''); }).slice(0, 6);
  recentRow.innerHTML = recent.map(function (c) {
    return '<a class="recent-card" href="' + c.category + '.html#case-' + c.id + '">' +
      '<div class="recent-thumb"><iframe tabindex="-1" data-thumb-of="' + c.id + '"></iframe></div>' +
      '<div class="recent-body"><div class="recent-name">' + escapeHtml(c.title) + '</div><div class="recent-meta">' + catName(c.category) + '</div></div>' +
      '</a>';
  }).join('');
  recent.forEach(function (c) {
    const el = document.querySelector('[data-thumb-of="' + c.id + '"]');
    if (el) el.srcdoc = buildPreviewDoc(c);
  });

  // 首頁搜尋
  const input = document.getElementById('heroSearchInput');
  const results = document.getElementById('heroResults');
  input.addEventListener('input', function () {
    const q = input.value.trim().toLowerCase();
    if (q === '') { results.classList.remove('show'); results.innerHTML = ''; return; }
    const matches = CASES.filter(function (c) {
      return (c.title + ' ' + c.description + ' ' + c.tags.join(' ') + ' ' + c.selectors + ' ' + c.source).toLowerCase().indexOf(q) !== -1;
    });
    results.innerHTML = matches.length === 0
      ? '<div class="empty">找不到符合的案例</div>'
      : matches.map(function (c) {
        return '<a href="' + c.category + '.html#case-' + c.id + '"><span>' + escapeHtml(c.title) + '</span><span class="rc">' + catName(c.category) + '</span></a>';
      }).join('');
    results.classList.add('show');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.hero-search')) results.classList.remove('show');
  });
}

/* ---------- 全站 header：標記目前頁面、掛上全站搜尋（導去首頁帶關鍵字） ---------- */
function wireHeader(currentPage) {
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    a.setAttribute('data-current', String(a.getAttribute('data-nav') === currentPage));
  });
  const headerInput = document.getElementById('headerSearchInput');
  if (headerInput) {
    headerInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && headerInput.value.trim()) {
        location.href = 'index.html?q=' + encodeURIComponent(headerInput.value.trim());
      }
    });
  }
  // 如果是帶著 ?q= 從別頁搜尋過來的首頁，自動帶入關鍵字
  if (currentPage === 'home') {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q) {
      setTimeout(function () {
        const input = document.getElementById('heroSearchInput');
        if (input) { input.value = q; input.dispatchEvent(new Event('input')); }
      }, 0);
    }
  }
}
