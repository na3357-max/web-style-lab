/* ========================================
   案例資料（唯一資料來源）
   新增案例只需要在 CASES 陣列裡加一筆物件，
   首頁、分類頁、搜尋、詳情全部從這份資料產生。
======================================== */

const CATEGORIES = [
  { id: 'common',  name: '功能頁共用', tags: 'Banner / Title / Button / Pagination', accent: '#8A6D3B' },
  { id: 'gallery', name: '相簿',       tags: 'Grid / Hover / Lightbox / Masonry',     accent: '#227A63' },
  { id: 'video',   name: '影片',       tags: 'Youtube / iframe / 背景影片',           accent: '#3A5A8C' },
  { id: 'article', name: '文章',       tags: 'News / Article / List',                 accent: '#8C4A2F' },
  { id: 'faq',     name: 'FAQ',        tags: 'Accordion',                             accent: '#5B5B8C' },
];

const CASES = [

  // ========================================
  // 相簿【Gallery】- 相簿卡片 Hover 效果
  // ========================================
  {
    id: 'gallery-hover-01',
    title: '相簿卡片 Hover 效果（圖片放大＋遮罩變深）',
    category: 'gallery',
    tags: ['Hover', 'Transform', 'Overlay', 'RWD'],
    description: '相簿列表卡片，滑鼠移入時圖片微幅放大、遮罩加深、卡片上浮；下方標題是純文字置中（已對照真實頁面核對，CSS 裡的漸層標題列目前沒有對應元素在用）。',
    source: '鴻圖淋浴拉門',
    updated: '2026-09-17',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   相簿【Gallery】- 相簿卡片 Hover 效果
======================================== */

/* 單張項目 */
.album_a .show-list .item > a {
    display: block;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(15, 57, 95, 0.08);
    transition: transform .35s ease, box-shadow .35s ease;
}

/* 圖片區 */
.album_a .show-list .show_pic {
    position: relative;
    overflow: hidden;
}

/* 圖片 */
.album_a .show-list .show_pic img {
    width: 100%;
    display: block;
    transition: transform .6s ease;
}

/* 原本遮罩 */
.album_a .show-list .show_pic .overlay {
    background: rgba(9, 30, 63, 0);
    transition: background-color .4s ease;
}

/* 下方標題 */
.album_a .show-list .show_name {
    height: auto;
    margin: 0;
    padding: 12px 18px;

    color: #fff;
    background: linear-gradient(
        99deg,
        #164875 0.92%,
        #091E3F 100%
    );

    font-family: "Noto Sans TC", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: left;

    transition: padding-left .35s ease;
}

/* 卡片 Hover */
.album_a .show-list .item > a:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(15, 57, 95, 0.16);
}

/* Hover 圖片放大 */
.album_a .show-list .item > a:hover .show_pic img {
    transform: scale(1.04);
}

/* Hover 圖片加深 */
.album_a .show-list .item > a:hover .show_pic .overlay {
    background: rgba(9, 30, 63, 0.12);
}

/* Hover 標題微微右移 */
.album_a .show-list .item > a:hover .show_name {
    padding-left: 24px;
}

.other_subalbum li a p {
    padding: 5px 0;
    text-align: center;
}

/* === 分類內頁文字 === */
.album_class_page.album_a .other_subalbum li a p {
    padding: 5px 0;
    text-align: center;
    color: #1B3A5C;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 500;
}


/* ========================================
   相簿【Gallery】- 相簿卡片 Hover 效果 RWD
======================================== */
@media screen and (max-width: 1024px) {

    /* 相簿列表 */
    .album_page.album_a .show-list,
    .album_class_page.album_a .show-list {
        gap: 24px;
    }

    /* 相簿名稱 */
    .album_page.album_a .show_name,
    .album_class_page.album_a .subalbum-menu h2 {
        font-size: 20px;
    }

}

@media screen and (max-width: 768px) {

    /* 相簿列表 */
    .album_page.album_a .show-list,
    .album_class_page.album_a .show-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    /* 相簿名稱 */
    .album_page.album_a .show_name,
    .album_class_page.album_a .subalbum-menu h2 {
        font-size: 18px;
    }

    /* 卡片文字 */
    .album_class_page.album_a .other_subalbum li a p {
        font-size: 15px;
    }

}

@media screen and (max-width: 425px) {

    /* 內容左右間距 */
    .album_page.album_a .main_part,
    .album_class_page.album_a .main_part {
        max-width: calc(100% - 32px);
    }

    /* 相簿列表 */
    .album_page.album_a .show-list,
    .album_class_page.album_a .show-list {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    /* 相簿名稱 */
    .album_page.album_a .show_name,
    .album_class_page.album_a .subalbum-menu h2 {
        font-size: 16px;
    }

    /* 卡片文字 */
    .album_class_page.album_a .other_subalbum li a p {
        font-size: 14px;
        padding: 12px 16px;
    }

}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [1024, 768, 425],
    mobileBreakpoint: 425,

    selectors: '.album_a .show-list .item > a / .show_pic / .overlay / .other_subalbum li a p',
    techniques: 'transition／transform: scale／絕對定位遮罩／RWD grid',

    previewHtml: `<div class="main_part"><div class="path"><p><a href="#">首頁</a> &gt; 全部</p></div><div class="show_content"><div class="subalbum-menu clearfix">
  <ul class="show-list other_subalbum">
    <li class="item">
      <a href="#">
        <figure class="show_pic">
          <div class="overlay"></div>
          <img src="https://www.designpapa.com.tw/store_image/htshowerdoors/tmp_AS_20260813101303_7820.webp" alt="L型淋浴拉門" class="one-edge-shadow">
        </figure>
        <p>L型淋浴拉門</p>
      </a>
    </li>
    <li class="item">
      <a href="#">
        <figure class="show_pic">
          <div class="overlay"></div>
          <img src="https://www.designpapa.com.tw/store_image/htshowerdoors/tmp_AS_20260813101113_9573.webp" alt="一字型淋浴拉門" class="one-edge-shadow">
        </figure>
        <p>一字型淋浴拉門</p>
      </a>
    </li>
  </ul>
</div></div></div>`,

    previewExtraCss: `body{margin:0;font-family:"Microsoft JhengHei","微軟正黑體",sans-serif;background:#f9f9f9;}
ul{list-style:none;margin:0;padding:0;}
a{text-decoration:none;}
figure{margin:0;}
.path{padding:0 10px;}
.path p,.path p a{text-align:right;line-height:24px;font-size:13px;color:#666;}
/* 以下為套版 menu.css 裡實際確認過的基礎樣式（非猜測），custom.css 是疊在這之上的覆蓋層 */
.main_part{width:100%;max-width:1300px;margin:auto;padding:50px 20px;}
.show_content{margin:auto;padding:10px 10px;}
.show-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:20px;}
.show-list .show_pic{display:block;position:relative;overflow:hidden;text-align:center;line-height:0;height:auto;aspect-ratio:4/3;}
.overlay{position:absolute;content:'';width:100%;height:100%;display:block;background:rgba(0,0,0,.3);left:0;top:0;opacity:0;transform:scale(0);transition:all .4s 100ms cubic-bezier(.42,0,.58,1);}
.show-list .item:hover .overlay{opacity:1;transform:scale(1);}`,

    previewNote: 'Preview 使用真實頁面的圖片網址與文字內容（2026/09 你提供的原始碼），結構已核對過（figure.show_pic、overlay 在 img 之前、標題是無 class 的純文字 p）。容器最大寬度（1300px）、圖片 4:3 比例、自動欄數（auto-fill, minmax(300px,1fr)）、以及 .overlay 的基礎樣式，這些不是猜的，是從你提供的 menu.css（套版基礎樣式）裡確認的真實值，custom.css 只是疊加在這之上的覆蓋層。圖片是外部網址（hotlink），若來源網站更換圖檔或擋跨站引用，Preview 圖片可能無法顯示。',

    notes: '已對照真實頁面原始碼核對：CSS 裡的 <code>.show_name</code>（深藍漸層、Hover 右移的標題列）在這個頁面沒有任何元素帶這個 class，目前沒有作用，可能用在其他還沒提供的相簿頁型（例如主列表頁）。容器最大寬度、圖片 4:3 比例、自動欄數、<code>.overlay</code> 的基礎樣式都已從 menu.css（套版基礎樣式）確認，不是推測。依賴模板既有 <code>.show-list</code>／<code>.item</code>／<code>.show_pic</code>／<code>.overlay</code>／<code>.other_subalbum</code> 結構。沒有 JS，沒有 <code>!important</code>。',

    suggestion: '<code>.show_name</code> 這段規則目前沒有對應的 HTML 元素在用。如果確定這個頁型已經不再使用，可以考慮清掉以減少檔案雜訊；如果是要用在其他頁型，建議之後把那個頁面的原始 HTML 一起收錄進來核對。',

    similarCases: [],
  },

  // ========================================
  // 共用【Common】- 功能頁大圖與標題
  // ========================================
  {
    id: 'common-banner-01',
    title: '功能頁大圖與標題（Banner + H5 標題／小標）',
    category: 'common',
    tags: ['Banner', 'Title', 'RWD'],
    description: '內頁最上方的大圖 Banner，搭配標題（h5）與小標（h5::after），依螢幕寬度縮小高度並置中對齊，是相簿頁、文章頁、聯絡我們頁共用的頭圖樣式。',
    source: '鴻圖淋浴拉門',
    updated: '2026-09-15',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   共用【Common】- 功能頁大圖與標題
======================================== */

.banner {
    position: relative;
    height: 395px;
    background-image: url(https://pic03.eapple.com.tw/htshowerdoors/banner.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#page {
    background-image: url(https://pic03.eapple.com.tw/htshowerdoors/page.jpg);
}

/* 功能頁標題 */
.banner h5 {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    width: min(1090px, calc(100% - 40px));
    margin: 0;
    text-align: left;
    color: #14436E;
    font-family: "Noto Serif TC";
    font-size: clamp(32px, 2.92dvw, 56px);
    font-weight: 700;
    line-height: 110%;
    letter-spacing: -0.5px;
}

/* 功能頁小標 */
.banner h5::after {
    margin-top: 28px;
    color: #464646;
    font-family: "Noto Sans TC";
    font-size: clamp(14px, 0.94dvw, 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}


/* ========================================
   共用【Common】- 功能頁大圖與標題 RWD
======================================== */
@media screen and (max-width: 1024px) {

    /* 功能頁大圖 */
    .banner {
        height: 320px;
    }

    /* 功能頁標題 */
    .banner h5 {
        top: 95px;
        width: calc(100% - 80px);
    }

    /* 功能頁小標 */
    .banner h5::after {
        margin-top: 20px;
    }
}

@media screen and (max-width: 768px) {

    /* 功能頁大圖 */
    .banner {
        height: 280px;
    }

    /* 功能頁標題 */
    .banner h5 {
        top: 85px;
        width: calc(100% - 48px);
        text-align: center;
        align-items: center;
    }

    /* 功能頁小標 */
    .banner h5::after {
        margin-top: 16px;
        text-align: center;
    }
}

@media screen and (max-width: 375px) {

    /* 功能頁大圖 */
    .banner {
        height: 240px;
    }

    /* 功能頁標題 */
    .banner h5 {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 40px);
        text-align: center;
        align-items: center;
    }

    /* 功能頁小標 */
    .banner h5::after {
        display: none;
    }
}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [1024, 768, 375],
    mobileBreakpoint: 375,

    selectors: '.banner / #page / .banner h5 / .banner h5::after',
    techniques: 'position: absolute／transform／clamp()／RWD',

    previewHtml: `<div class="banner"><h5>功能頁標題示意</h5></div>`,

    previewExtraCss: `body{margin:0;font-family:"Microsoft JhengHei","微軟正黑體",sans-serif;}
.banner h5::after{content:'小標文字示意（原始 CSS 未定義 content，由各功能頁自行設定文字）';}`,

    previewNote: '背景圖使用原始 CSS 裡真正的圖片網址，在一般瀏覽器（GitHub Pages 環境）會正常載入。h5::after 的文字是 Preview 額外加上的示意內容，原始 CSS 沒有定義 content（各功能頁各自設定，例如相簿頁是 .banE h5::after，文章頁是 .banblog h5::after）。',

    notes: '<code>h5::after</code> 的實際文字由各功能頁自己另外設定。<code>#page</code> 是頁面容器 id，需要該 id 存在才會套用內頁背景圖。沒有使用 JS，沒有 <code>!important</code>。',

    suggestion: '',

    similarCases: [],
  },

  // ========================================
  // 文章【Article】- 實績分享 / 常見問題列表
  // ========================================
  {
    id: 'article-list-01',
    title: '實績分享／常見問題列表（左側分類手風琴＋右側 3 欄案例，Hover 顯示 MORE）',
    category: 'article',
    tags: ['List', 'Hover', 'RWD'],
    description: '左側為分類手風琴選單，右側為 3 欄案例卡片；滑鼠移入卡片時圖片下方底線展開、右下角淡出顯示「MORE +」按鈕。這份原始碼目前顯示的內容其實是「常見問題」，但跟「實績分享」共用同一套 article_a／blog_box 樣式模板。',
    source: '鴻圖淋浴拉門（/news/index.php）',
    updated: '2026-09-17',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   文章【Article】- 實績分享
======================================== */

.banblog h5::after {
    content: "每一次施工都用心對待，從細節到整體品質，透過實際案例呈現我們對專業與品質的堅持。";
}

/* 左側選單 */
.article_a .blog_le .accordion {
    border: none;
    border-radius: 0;
}

.blog_search {
    margin-bottom: 15px;
}

/* 選項分隔線 */
.article_a .accordion li .link {
    border-top: none;
    border-bottom: 1px solid #ccc;
}

.article_a .accordion li .link a {
    color: #444;
    font-size: 15px;
}

/* 選項 Hover、當前分類 */
.article_a .blog_le .accordion > li:hover,
.article_a .blog_le .accordion > li.on_this_category {
    background: #1B3A5C !important;
}

/* 右側案例列表 */
.article_a .blog_subbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
}

/* 單張案例 */
.article_a .blog_subbox .subbox_item > a {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
}

/* 關閉原本 Hover 遮罩 */
.article_a .blog_subbox .subbox_item > a::before,
.article_a .blog_subbox .subbox_item > a::after {
    display: none;
}

/* 圖片 */
.article_a .blog_list_le {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: visible;
    margin-bottom: 20px;
}

.article_a .blog_list_le img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 底線 */
.article_a .blog_list_le::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 100%;
    height: 2px;
    background: #14436E;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform .35s ease;
}

/* 原本的淡色線 */
.article_a .blog_list_le::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 100%;
    height: 2px;
    background: #9fb0bd;
}

/* Hover */
.article_a .subbox_item > a:hover .blog_list_le::after {
    transform: scaleX(1);
}

/* 文字區 */
.article_a .blog_list_ri {
    display: flex;
    flex-direction: column;
    padding-top: 0;
}

/* 標題 */
.article_a .blog_list_ri h5 {
    order: 1;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 135%;
    color: #14436E;
}

/* 內文 */
.article_a .blog_list_ri p {
    order: 2;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6;
    color: #1F1F1F;
    margin-bottom: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

/* 日期 */
.article_a .blog_list_ri em {
    order: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #1F1F1F;
    font-family: "Noto Sans TC", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0.3px;
}

/* MORE 按鈕 */
.article_a .blog_list_ri em::after {
    content: "MORE +";
    background: #123b63;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    letter-spacing: 1px;
    padding: 5px 14px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(4px);
    transition: opacity .3s ease, transform .3s ease;
}

/* 案例 Hover */
.article_a .subbox_item > a:hover .blog_list_ri em::after {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}


/* === 實績案例內頁 === */
.blog_back a.article_btn_back {
    background: #1B3A5C;
}

.news_related h6 span:before {
    color: #1B3A5C;
}

.news_related_b_box .lastPage {
    background: linear-gradient(99deg, #164875 0.92%, #091E3F 100%);
}


/* ========================================
   文章【Article】- 實績分享 RWD
======================================== */
@media screen and (max-width: 1024px) {

    /* 案例列表 */
    .article_a .blog_subbox {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    /* 標題 */
    .article_a .blog_list_ri h5 {
        font-size: 20px;
    }

    /* 內文 */
    .article_a .blog_list_ri p {
        font-size: 14px;
    }
}

@media screen and (max-width: 768px) {

    /* 左右區塊改上下排列 */
    .article_a .blog_box {
        grid-template-columns: 1fr;
    }

    /* 左側選單 */
    .article_a .blog_le {
        width: 100%;
    }

    /* 右側案例 */
    .article_a .blog_ri {
        width: 100%;
    }

    /* 案例列表 */
    .article_a .blog_subbox {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px 20px;
    }

    /* MORE 按鈕 */
    .article_a .blog_list_ri em::after {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
}

@media screen and (max-width: 425px) {
     /* 右側案例 */
    .article_a .blog_ri {
        padding: 0 20px;
    }

    /* 案例列表 */
    .article_a .blog_subbox {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    /* 標題 */
    .article_a .blog_list_ri h5 {
        font-size: 18px;
    }

    /* 內文 */
    .article_a .blog_list_ri p {
        font-size: 14px;
    }

    /* 日期 */
    .article_a .blog_list_ri em {
        font-size: 12px;
    }
}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [1024, 768, 425],
    mobileBreakpoint: 425,

    selectors: '.article_a .blog_subbox / .blog_list_le / .blog_list_ri / .accordion',
    techniques: 'grid／flex order／::before ::after／line-clamp／RWD',

    previewHtml: `<div class="article_a"><div class="main_part"><div class="path"><p><a href="#">首頁</a> &gt; 實績分享</p></div><div class="show_content blog_box">
  <div class="blog_le">
    <div class="blog_search"><input type="search" placeholder="搜尋"></div>
    <ul id="accordion" class="accordion">
      <li class="on_this_category"><div class="link"><a href="#">常見問題</a></div></li>
    </ul>
  </div>
  <div class="blog_ri">
    <div class="blog_subbox">
      <div class="subbox_item">
        <a href="#">
          <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728162048_8994.webp" alt="鴻圖淋浴拉門"></div>
          <div class="blog_list_ri">
            <h5>Q1：淋浴拉門漏水怎麼辦？</h5>
            <em>發佈：2026/07/28</em>
            <p>淋浴拉門使用多年後，若出現漏水情況，不一定需要立即更換整組拉門，許多問題都能透過檢查與維修改善。</p>
          </div>
        </a>
      </div>
      <div class="subbox_item">
        <a href="#">
          <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728162027_9994.webp" alt="鴻圖淋浴拉門"></div>
          <div class="blog_list_ri">
            <h5>Q2：淋浴拉門膠條多久需要更換一次？</h5>
            <em>發佈：2026/07/28</em>
            <p>淋浴拉門膠條主要功能是阻擋水花外濺，長時間接觸水氣、清潔劑及日曬後，容易產生硬化、變黃、裂開等情形。</p>
          </div>
        </a>
      </div>
      <div class="subbox_item">
        <a href="#">
          <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728162002_9281.webp" alt="鴻圖淋浴拉門"></div>
          <div class="blog_list_ri">
            <h5>Q3：淋浴拉門可以舊換新嗎？</h5>
            <em>發佈：2026/07/28</em>
            <p>當淋浴拉門玻璃霧化、五金生鏽、滑輪故障或款式老舊時，不一定需要重新裝修浴室，多數情況都可以直接進行淋浴拉門舊換新。</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</div></div></div>`,

    previewExtraCss: `body{margin:0;font-family:"Microsoft JhengHei","微軟正黑體",sans-serif;background:#f9f9f9;}
ul{list-style:none;margin:0;padding:0;}
a{text-decoration:none;}
.path{padding:0 10px;}
.path p,.path p a{text-align:right;line-height:24px;font-size:13px;color:#666;}
/* 以下為套版 menu.css 裡實際確認過的基礎樣式（非猜測），custom.css 是疊在這之上的覆蓋層 */
.main_part{width:100%;max-width:1300px;margin:auto;padding:50px 20px;}
.blog_box{min-height:20vw;padding:7px;}
.blog_le,.blog_ri{display:inline-block;vertical-align:top;margin-bottom:2vw;padding:7px;}
.blog_le{width:220px;}
.blog_ri{width:calc(100% - 240px);padding:0 0 0 20px;}
.blog_le .accordion{list-style-type:none;margin:auto;border-radius:15px;border:1px solid #ccc;overflow:hidden;}
.accordion li .link{position:relative;}
.accordion li+li .link{border-top:1px solid #ccc;}
.accordion li .link a{cursor:pointer;display:block;padding:15px 10px;color:#444;font-size:14px;font-weight:700;position:relative;}
.blog_le .accordion>li:hover .link a,
.blog_le .accordion>li.on_this_category .link a{color:#ffffff !important;}
.blog_search{position:relative;margin-bottom:10px;}
.blog_search input[type=search]{outline:none;box-sizing:border-box;width:100%;font-size:14px;color:#999;border:solid 1px #ccc;border-radius:30px;padding:10px 35px 10px 10px;}
@media screen and (max-width:768px){
  .blog_le .accordion{display:none;}
  .blog_le{width:100%;display:block;}
  .blog_ri{width:100%;display:block;padding:0;margin:auto;}
}`,

    previewNote: 'Preview 使用真實頁面的文字與圖片網址（2026/09 你提供的原始碼，只取前 3 筆示意）。左側手風琴目前真的只有「常見問題」一個分類（真實頁面就是這樣，不是 Preview 少放）。容器最大寬度（1300px）、左右兩欄版型（.blog_le 220px + .blog_ri 其餘寬度）、accordion 的圓角外框與 Hover 白字、768px 以下側欄變上下堆疊，這些不是猜的，是從 menu.css（套版基礎樣式）確認的真實值，custom.css 只是疊加在這之上的覆蓋層。已知落差：真實網站在 768px 以下手風琴會整個隱藏，改用一個「選單」切換按鈕（靠 JS 控制開合），這段 JS 沒有收錄進本案例，所以 Preview 在手機寬度時，左側分類選單會直接消失、看不到切換按鈕，這點跟真實網站不同。',

    notes: '<code>.article_a .blog_le .accordion > li:hover / .on_this_category</code> 這條有使用 <code>!important</code>。左右兩欄寬度（<code>.blog_le</code> 220px／<code>.blog_ri</code> 其餘寬度）已從 menu.css 確認，不是這份 custom.css 定義的。原始碼裡同時包含「實績案例內頁」的三個 selector（<code>.blog_back</code>／<code>.news_related</code>／<code>.news_related_b_box</code>），因缺少對應 HTML 結構，Preview 無法呈現，但程式碼已完整保留在上方。真實頁面上左側分類的「目前分類」高亮，是透過 jQuery 讀網址參數（<code>gid</code>/<code>sid</code>）動態加上 <code>on_this_category</code> class，這段 JS 行為沒有收錄進本案例（只收錄 CSS 呈現的樣式）。依賴 <code>.accordion</code>／<code>.link</code> 這種手風琴選單的既有 class 結構。',

    suggestion: '',

    similarCases: [],
  },

];
