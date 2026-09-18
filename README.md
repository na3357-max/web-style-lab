# 功能頁樣式資料庫

個人用的前端功能樣式資料庫（Pattern Library）。純 HTML／CSS／JS，不需要 Node、build 工具或任何 server，可以直接放上 GitHub Pages。

## 檔案結構

```
/
├─ index.html      首頁（Dashboard：搜尋、最近新增、分類卡片）
├─ common.html      共用分類頁
├─ gallery.html      相簿分類頁
├─ video.html        影片分類頁
├─ article.html      文章分類頁
├─ faq.html          FAQ 分類頁
├─ css/
│  └─ style.css      資料庫介面的 CSS（跟案例原始碼完全分開）
├─ js/
│  ├─ cases.js        案例資料，唯一資料來源
│  └─ app.js          渲染邏輯（首頁／分類頁／Preview／搜尋／篩選／複製都從這裡產生）
└─ README.md
```

所有路徑都是相對路徑，不管這個 repo 部署在 GitHub Pages 的根目錄還是子路徑（`https://username.github.io/repo-name/`）都能正常運作，重新整理任何一頁也不會 404。

## 怎麼新增一個案例

打開 `js/cases.js`，在 `CASES` 陣列裡加一筆物件，格式大致如下：

```js
{
  id: 'gallery-hover-02',              // 全站唯一，用來當網址錨點跟 DOM id
  title: '案例名稱',
  category: 'gallery',                  // 對應 CATEGORIES 裡的 id
  tags: ['Hover', 'RWD'],
  description: '一句話說明這個案例做什麼',
  source: '案件名稱',                    // 沒有就填 '來源未命名'
  updated: '2026-09-17',                // 用來排「最近新增」

  hasOriginalHtml: true,                // 這筆有沒有真正的原始 HTML
  html: `...`,                          // 有原始 HTML 就放這裡；沒有就是 null

  css: `...`,                           // 原始 CSS，逐字保留，不要重構
  js: '',                                // 原始 JS，沒有就是空字串

  dependencies: { css: [], js: [] },     // 例如 Swiper、Font Awesome 的 CDN 網址

  breakpoints: [1024, 768, 425],         // 從原始 CSS 抓出來的斷點，只是標註用
  mobileBreakpoint: 425,                 // Preview 的 Mobile 按鈕要用哪個寬度

  selectors: '主要 selector，逗號分隔',
  techniques: '用到的技術，例如 grid／transform／RWD',

  // 沒有原始 HTML 時，這兩個欄位用來建立「Preview 專用」的展示內容
  previewHtml: `...`,                    // 清楚跟 html 欄位分開，不會被複製按鈕拿去用
  previewExtraCss: `...`,                // Preview 額外需要的版面/reset，不是原始碼的一部分
  previewNote: '一行文字，說明 Preview 跟原始碼之間的差異（如果有）',

  notes: '注意事項，會顯示在卡片下方，可以用 <code> 標籤',
  suggestion: '可選改善建議，沒有就留空字串',
  similarCases: [],                       // 相似案例的 id 陣列
}
```

存檔後，`index.html`、對應的分類頁、搜尋結果都會自動抓到這筆資料，不需要改其他檔案。

## Preview 是怎麼運作的

`app.js` 的 `buildPreviewDoc()` 會把案例的 `html`（或 `previewHtml`）＋`css`＋`js`＋`dependencies` 組成一份完整的 HTML 字串，透過 `iframe.srcdoc` 指派進去。iframe 有自己獨立的 DOM／CSSOM，所以：

- 案例的 CSS 不會影響資料庫介面本身，資料庫的 CSS 也不會影響案例的呈現。
- Desktop／Tablet／Mobile（以及可以自訂的其他尺寸，見 `app.js` 最上面的 `VIEWPORT_PRESETS`）是真的改變 iframe 的 `width`，案例自己寫的 `@media` 會真的被觸發。
- iframe 高度會在內容載入完、以及每次切換尺寸之後自動重新量測（`autosizeFrame()`），避免手機版變高卻被固定高度裁切。
- 每個 Preview 都有「新分頁開啟」按鈕，用 Blob URL 產生一個獨立網址，在新分頁全螢幕檢視。

如果某個案例缺少對應的依賴套件網址，卡片上會顯示黃色警示「Preview 可能不完整：缺少 XXX」，不會假裝套用成功。

## 部署到 GitHub Pages

1. 把這個資料夾整個上傳到 GitHub repository（根目錄就是這些檔案，不要多包一層）。
2. Repository 設定 → Pages → Source 選這個分支（例如 `main`）、目錄選 `/ (root)`。
3. 存檔後會拿到一個 `https://你的帳號.github.io/repo名稱/` 網址，直接開啟即可。
