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

    hasOriginalHtml: true,
    html: `<div class="main_part">
		<div class="path">
			<p><a href="../index.php">首頁</a>  &gt; 全部</p>
		</div><!-- path -->
		<div class="show_content">
			
			<div class="subalbum-menu clearfix">
            	<h2 style="float:none; margin-bottom:20px;"><span class="block"></span>淋浴拉門</h2>
							<!--div class="album_descrip"><p>相簿分類描述</p></div-->
		        <ul class="show-list other_subalbum">
						
		        	<li class="item">
                    <a href="info.php?id=4107">
					<figure class="show_pic">
						<div class="overlay"></div>
						<img src="https://www.designpapa.com.tw/store_image/htshowerdoors/tmp_AS_20260813101303_7820.webp" alt="L型淋浴拉門" class="one-edge-shadow"></figure>
                    <p>L型淋浴拉門</p>
                    </a>
                    </li>
						
		        	<li class="item">
                    <a href="info.php?id=4106">
					<figure class="show_pic">
						<div class="overlay"></div>
						<img src="https://www.designpapa.com.tw/store_image/htshowerdoors/tmp_AS_20260813101113_9573.webp" alt="一字型淋浴拉門" class="one-edge-shadow"></figure>
                    <p>一字型淋浴拉門</p>
                    </a>
                    </li>
							        </ul>
			</div><!-- subalbum-menu -->
            
            <ul class="page">
						</ul>
					</div><!-- show_content -->
	</div>`,

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

    previewExtraCss: `body{background:#f9f9f9;}`,

    previewNote: 'Preview 直接執行案例的真實原始 HTML（2026/09 你提供的原始碼，hasOriginalHtml: true），透過 template-base.css（normalize.css + menu.css 逐字全文）重現正式網站的 cascade 順序，不再由 Preview 猜測基礎樣式。previewExtraCss 目前只剩背景色一項——正式網站的頁面背景是紙紋理圖檔，來源沒有提供，找不到就用純色代替，不是猜的排版數值。圖片是外部網址（hotlink），若來源網站更換圖檔或擋跨站引用，Preview 圖片可能無法顯示。',

    notes: '已對照真實頁面原始碼核對：CSS 裡的 <code>.show_name</code>（深藍漸層、Hover 右移的標題列）在這個頁面沒有任何元素帶這個 class，目前沒有作用，可能用在其他還沒提供的相簿頁型（例如主列表頁）。容器最大寬度、圖片 4:3 比例、自動欄數、<code>.overlay</code> 的基礎樣式都是 template-base.css（menu.css）提供，不是這份 custom.css 定義的。依賴模板既有 <code>.show-list</code>／<code>.item</code>／<code>.show_pic</code>／<code>.overlay</code>／<code>.other_subalbum</code> 結構。沒有 JS，沒有 <code>!important</code>。',

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

    previewExtraCss: `.banner h5::after{content:'小標文字示意（原始 CSS 未定義 content，由各功能頁自行設定文字）';}`,

    previewNote: '這個案例還沒有真實原始 HTML（hasOriginalHtml: false），previewHtml 是依 selector 建立的示意結構。背景圖使用原始 CSS 裡真正的圖片網址，在一般瀏覽器（GitHub Pages 環境）會正常載入。h5::after 的文字是 Preview 額外加上的示意內容，原始 CSS 沒有定義 content（各功能頁各自設定，例如相簿頁是 .banE h5::after，文章頁是 .banblog h5::after）。',

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

    hasOriginalHtml: true,
    html: `<div class="main_part">
	
		<div class="path">
			<p><a href="../index.php">首頁</a>   &gt; 實績分享</p>
		</div><!-- path -->
        
		<div class="show_content blog_box">
          
          <div class="blog_le fadeInLeft animated15">
            <h5 class="blog_le_t"><em>實績分享</em><span></span><a class="news_menu_toggle"><i class="fa-solid fa-caret-down"></i></a></h5>
<div class="blog_search"><form action="https://www.ht-showerdoors.com/news/index.php" method="get"><input type="search" name="keyword_a" value="" placeholder="搜尋"><input type="submit" name="" id="" value=""></form></div>
            
<ul id="accordion" class="accordion">
        <li>
        <div class="link"><a href="https://www.ht-showerdoors.com/news/index.php?gid=7007">常見問題</a> </div>
              </li>
  </ul>
          </div>
          
          <div class="blog_ri fadeInRight animated15">
            
            <h4 class="blog_category_title"></h4>
            
            <div class="blog_subbox">
              
                           <div class="subbox_item ">
              <a href="details.php?id=28266">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728162048_8994.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q1：淋浴拉門漏水怎麼辦？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>淋浴拉門使用多年後，若出現漏水情況，不一定需要立即更換整組拉門，許多問題都能透過檢查與維修改善。</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28265">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728162027_9994.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q2：淋浴拉門膠條多久需要更換一次？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>淋浴拉門膠條主要功能是阻擋水花外濺，長時間接觸水氣、清潔劑及日曬後，容易產生硬化、變黃、裂開等情形。</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28264">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728162002_9281.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q3：淋浴拉門可以舊換新嗎？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>當淋浴拉門玻璃霧化、五金生鏽、滑輪故障或款式老舊時，不一定需要重新裝修浴室，多數情況都可以直接進行淋浴拉門舊換新。</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28263">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728161948_2448.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q4：浴室矽利康發霉怎麼處理？需要全部重打嗎？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>浴室潮濕環境容易讓矽利康產生黑色霉斑，不僅影響美觀，也可能降低防水效果。</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28260">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728161741_6995.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q5：小坪數浴室適合安裝哪種淋浴拉門？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>小坪數浴室更需要善用空間，因此淋浴拉門的開門方式十分重要。</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28259">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728161712_4076.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q6：淋浴拉門玻璃會不會自爆？如何降低風險？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>目前市面上的淋浴拉門多採用強化玻璃，雖然耐衝擊性較高，但若受到邊角撞擊、安裝不當或玻璃本身存在瑕疵，仍有可能發生破裂。</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28258">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728161652_7706.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q7：淋浴拉門安裝需要多久？施工前要準備什麼？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>一般淋浴拉門安裝前，都會先由專人到府丈量尺寸，再依照浴室格局客製化製作。<br>
</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28257">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728161630_1537.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q8：淋浴拉門怎麼清潔？水垢與皂垢如何去除？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>玻璃容易因水垢與皂垢累積而變得霧白，因此建議養成日常保養習慣。</p>
                </div>
              </a>
              </div><!--subbox_item-->
                            <div class="subbox_item ">
              <a href="details.php?id=28255">
                <div class="blog_list_le"><img src="https://www.designpapa.com.tw/store_image/htshowerdoors/AT_20260728161610_9141.webp" alt="鴻圖淋浴拉門-淋浴拉門安裝,桃園淋浴拉門安裝,蘆竹區淋浴拉門安裝"></div>
                <div class="blog_list_ri">
                  <h5>Q9：淋浴拉門卡卡不好推？需要維修還是直接更換？</h5>
                  <em>發佈：2026/07/28</em>
                  <p>淋浴拉門推拉不順，大多與滑輪、軌道或五金零件有關。</p>
                </div>
              </a>
              </div><!--subbox_item-->
              
              
            </div><!--blog_subbox-->
            
            <ul class="page">
			              </ul>
            
          </div>
          
		</div><!-- show_content blog_box -->
        
	</div>`,

    js: `$(document).ready(function() {

	var winHref = window.location.href;
	var groupId = null;
	var secondId = null;
	let groupIdphp = "";
	let secondIdphp = "";

	if (typeof URLSearchParams !== "undefined") {
			var params = new URLSearchParams(winHref.split('?')[1]);
			groupId = params.get('gid');
			secondId = params.get('sid');
	}

	$('#accordion a').each(function() {
			var $this = $(this);
			var linkHref = $this.attr("href");

			if (linkHref && linkHref.includes('?')) {
				var linkParams = new URLSearchParams(linkHref.split('?')[1]);
				var linkGroupId = linkParams.get('gid');
				var linkSecondId = linkParams.get('sid');
				console.log(linkGroupId)
				console.log(groupIdphp)

				if (groupId === linkGroupId | groupIdphp === linkGroupId) {
					$this.parents("#accordion>li").addClass("on_this_category").siblings("li").removeClass("open").children('.submenu').hide();
					$this.parents(".link").siblings(".submenu").show().closest("li").siblings().children(".submenu").hide();
				}

				if (secondId === linkSecondId | secondIdphp === linkSecondId) {
						$this.parent("li").addClass("on_this_category").parent(".submenu").show();
				}
			}
	});

	$(".more_down").click(function(){
			let $this = $(this);
			let $parentLink = $this.parent(".link");
			let $submenu = $parentLink.siblings(".submenu");

			$submenu.slideToggle();
			$parentLink.parent("li").toggleClass("open").siblings("li").removeClass("open").find(".submenu").slideUp();
	});
});`,

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

    dependencies: { css: [], js: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js'] },

    breakpoints: [1024, 768, 425],
    mobileBreakpoint: 425,

    selectors: '.article_a .blog_subbox / .blog_list_le / .blog_list_ri / .accordion',
    techniques: 'grid／flex order／::before ::after／line-clamp／RWD',

    previewExtraCss: `body{background:#f9f9f9;}`,

    previewNote: 'Preview 直接執行案例的真實原始 HTML 與 JS（2026/09 你提供的原始碼，全部 9 筆，hasOriginalHtml: true）。透過 template-base.css（normalize.css + menu.css 逐字全文）重現正式網站的 cascade 順序，容器最大寬度、左右兩欄版型、accordion 樣式、768px 以下的堆疊與手風琴隱藏，全部都是套版本身的行為，不是 Preview 猜的。jQuery（1.11.3，跟真實網站同版本）透過 dependencies 載入，左側分類的高亮判斷是真的在跑，不是示意。previewExtraCss 只剩背景色一項——正式網站的頁面背景是紙紋理圖檔，來源沒有提供，找不到就用純色代替。',

    notes: '<code>.article_a .blog_le .accordion > li:hover / .on_this_category</code> 這條有使用 <code>!important</code>。左右兩欄寬度、accordion 圓角外框、768px 以下的隱藏/堆疊行為，都是 template-base.css（menu.css）提供，不是這份 custom.css 定義的。原始碼裡同時包含「實績案例內頁」的三個 selector（<code>.blog_back</code>／<code>.news_related</code>／<code>.news_related_b_box</code>），因缺少對應 HTML 結構，Preview 無法呈現，但程式碼已完整保留在上方。左側分類的「目前分類」高亮，是透過真實的 jQuery 腳本讀網址參數（<code>gid</code>/<code>sid</code>）動態加上 <code>on_this_category</code> class——這段 JS 現在已經收錄進本案例（見上方 JS 分頁），依賴 jQuery 1.11.3（已列在 dependencies）。因為 Preview 網址沒有 <code>?gid=</code> 參數，這段高亮判斷跑了但不會真的切換分類，這是正常的，不是壞掉。',

    suggestion: '',

    similarCases: [],
  },


  // ========================================
  // 相簿【Gallery】- 大圖作品集 Editorial Portfolio（Album B）
  // ========================================
  {
    id: 'gallery-editorial-b',
    title: '大圖作品集 Editorial Portfolio（相簿版型 B）',
    category: 'gallery',
    tags: ['Editorial', 'Overlay', 'ImagePan', 'RWD'],
    description: '桌機兩欄大圖，文字直接壓在圖片上，不用卡片陰影；Hover 用圖片橫向位移＋Overlay 漸層加深＋箭頭位移呈現，卡片本身不會浮起。適合建築、室內設計、攝影、婚紗、景觀、旅宿、高質感施工案例。',
    source: '樣式模板庫（通用版型，未綁定特定案件；沿用既有相簿頁後台輸出結構）',
    updated: '2026-09-18',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   功能頁【相簿類】- Editorial Portfolio
======================================== */

.album_class_page.album_a .other_subalbum {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
}


/* === 單張項目 === */

.album_class_page.album_a .other_subalbum .item {
    min-width: 0;
    margin: 0;
}

.album_class_page.album_a .other_subalbum .item > a {
    position: relative;

    display: block;

    overflow: hidden;

    background: #111;
}


/* === 圖片 === */

.album_class_page.album_a .other_subalbum .show_pic {
    position: relative;

    width: 100%;
    aspect-ratio: 4 / 3;

    margin: 0;

    overflow: hidden;
}

.album_class_page.album_a .other_subalbum .show_pic img {
    width: calc(100% + 20px);
    max-width: none;
    height: 100%;

    object-fit: cover;

    transform: translateX(0);

    transition: transform .7s cubic-bezier(.2, .65, .3, 1);
}


/* === Overlay === */

.album_class_page.album_a .other_subalbum .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, .62) 0%,
        rgba(0, 0, 0, .18) 45%,
        rgba(0, 0, 0, .02) 75%
    );

    transition: background .4s ease;
}


/* === 標題 === */

.album_class_page.album_a .other_subalbum li a p {
    position: absolute;

    left: 28px;
    right: 28px;
    bottom: 24px;

    z-index: 2;

    display: -webkit-box;

    margin: 0;
    padding: 0;

    overflow: hidden;

    color: #fff;
    background: transparent;

    font-family: "Noto Sans TC", sans-serif;
    font-size: 21px;
    font-weight: 600;
    line-height: 1.45;
    letter-spacing: 1px;

    text-align: left;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    transform: translateY(5px);

    transition: transform .35s ease;
}


/* === 箭頭 === */

.album_class_page.album_a .other_subalbum li a p::after {
    content: "↗";

    position: absolute;

    right: 0;
    bottom: 0;

    font-size: 18px;

    transition: transform .35s ease;
}


/* === Hover === */

.album_class_page.album_a .other_subalbum .item:hover .show_pic img {
    transform: translateX(-20px);
}

.album_class_page.album_a .other_subalbum .item:hover .overlay {
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, .7) 0%,
        rgba(0, 0, 0, .2) 45%,
        rgba(0, 0, 0, 0) 75%
    );
}

.album_class_page.album_a .other_subalbum .item:hover p {
    transform: translateY(0);
}

.album_class_page.album_a .other_subalbum .item:hover p::after {
    transform: translate(4px, -4px);
}


/* ========================================
   功能頁【相簿類】- Editorial Portfolio RWD
======================================== */

@media screen and (max-width: 768px) {

    .album_class_page.album_a .other_subalbum {
        grid-template-columns: 1fr;
        gap: 20px;
    }

}

@media screen and (max-width: 425px) {

    .album_class_page.album_a .other_subalbum li a p {
        left: 20px;
        right: 20px;
        bottom: 18px;

        font-size: 17px;
    }

}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [768, 425],
    mobileBreakpoint: 425,

    selectors: '.album_class_page.album_a .other_subalbum .item > a / .show_pic / .overlay / li a p',
    techniques: 'CSS Grid（minmax(0,1fr) 避免文字撐開欄寬）／aspect-ratio／object-fit／Overlay 漸層／transform: translateX（圖片位移，不是 zoom）／::after 箭頭偽元素／line-clamp 兩行標題',

    previewHtml: `<div class="album_class_page album_a"><div class="main_part"><div class="show_content"><div class="subalbum-menu clearfix">
  <ul class="show-list other_subalbum">
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='#8a8f98'/><text x='50%' y='50%' fill='#e5e5e5' font-size='20' text-anchor='middle' dy='.3em'>示意圖 1</text></svg>" alt=""></figure><p>案例標題示意 01</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='#6f7580'/><text x='50%' y='50%' fill='#e5e5e5' font-size='20' text-anchor='middle' dy='.3em'>示意圖 2</text></svg>" alt=""></figure><p>案例標題示意 02</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='#5c626c'/><text x='50%' y='50%' fill='#e5e5e5' font-size='20' text-anchor='middle' dy='.3em'>示意圖 3</text></svg>" alt=""></figure><p>案例標題示意 03，這裡故意寫長一點測試兩行截斷</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='#494e57'/><text x='50%' y='50%' fill='#e5e5e5' font-size='20' text-anchor='middle' dy='.3em'>示意圖 4</text></svg>" alt=""></figure><p>案例標題示意 04</p></a></li>
  </ul>
</div></div></div></div>`,

    previewExtraCss: ``,

    previewNote: '這是通用模板，沒有綁定特定案件，圖片與標題都是 Preview 額外建立的示意內容。結構沿用先前已核對過的真實後台輸出（figure.show_pic + div.overlay + img，標題為無 class 的 p），不是這次重新猜的。這個版型的 Overlay 預設隱藏（opacity:0、scale(0)）不是這份 CSS 自己設定的，是 template-base.css（menu.css）的 <code>.overlay</code> 基礎規則提供，這份 CSS 只覆蓋 Hover 時的漸層背景顏色——單獨把這份 CSS 抽走、不含套版基礎樣式的話，Overlay 不會有預設隱藏/淡入的效果。',

    notes: '這個版型的 Hover 語言是「Image Pan + Overlay + ↗」，刻意不用 Zoom / 卡片浮起 / Shadow，之後修改時要保留這個區別，不要跟其他相簿版型的 Hover 邏輯混在一起。Grid 用 <code>minmax(0,1fr)</code> 是為了避免長標題把欄寬撐開。Hover 動畫只用 <code>transform</code>／<code>opacity</code>／<code>background</code>／偽元素，沒有改 <code>width</code>／<code>height</code>／<code>margin</code>／<code>padding</code>，不會影響版面排列。沒有 JS，沒有 <code>!important</code>。',

    suggestion: '',

    similarCases: ['gallery-hover-01', 'gallery-catalog-c', 'gallery-directory-d'],
  },

  // ========================================
  // 相簿【Gallery】- 高密度產品目錄 Compact Catalog（Album C）
  // ========================================
  {
    id: 'gallery-catalog-c',
    title: '高密度產品目錄 Compact Catalog（相簿版型 C）',
    category: 'gallery',
    tags: ['Catalog', 'Numbering', 'RWD'],
    description: '桌機四欄、平板三欄、手機兩欄，自動產生 01、02、03… 編號，沒有卡片陰影；Hover 用編號變色、底線展開、文字位移呈現。適合製造業、工廠、不織布、五金、零件、建材、食品分類、設備等產品很多、需要保持易瀏覽的頁面。',
    source: '樣式模板庫（通用版型，未綁定特定案件；沿用既有相簿頁後台輸出結構）',
    updated: '2026-09-18',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   功能頁【相簿類】- Compact Catalog
======================================== */

.album_class_page.album_a .other_subalbum {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 45px 20px;

    counter-reset: album-item;
}


/* === 單張項目 === */

.album_class_page.album_a .other_subalbum .item {
    min-width: 0;
    margin: 0;

    counter-increment: album-item;
}

.album_class_page.album_a .other_subalbum .item > a {
    display: block;

    height: 100%;

    background: transparent;
    box-shadow: none;
}


/* === 圖片 === */

.album_class_page.album_a .other_subalbum .show_pic {
    position: relative;

    width: 100%;
    aspect-ratio: 4 / 3;

    margin: 0;

    overflow: hidden;
}

.album_class_page.album_a .other_subalbum .show_pic img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform .5s ease;
}


/* === 標題 === */

.album_class_page.album_a .other_subalbum li a p {
    position: relative;

    display: -webkit-box;

    min-height: 72px;

    margin: 15px 0 0;
    padding: 14px 0 0;

    overflow: hidden;

    border-top: 1px solid #d7d7d7;

    color: #222;
    background: transparent;

    font-family: "Noto Sans TC", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;

    text-align: left;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    transition:
        transform .3s ease,
        border-color .3s ease;
}


/* === 自動編號 === */

.album_class_page.album_a .other_subalbum li a p::before {
    content: "0" counter(album-item);

    display: block;

    margin-bottom: 5px;

    color: #999;

    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;

    transition:
        color .3s ease,
        letter-spacing .3s ease;
}


/* === 動態底線 === */

.album_class_page.album_a .other_subalbum li a p::after {
    content: "";

    position: absolute;

    left: 0;
    top: -1px;

    width: 100%;
    height: 1px;

    background: #14436E;

    transform: scaleX(0);
    transform-origin: left;

    transition: transform .35s ease;
}


/* === Hover === */

.album_class_page.album_a .other_subalbum .item:hover .show_pic img {
    transform: scale(1.02);
}

.album_class_page.album_a .other_subalbum .item:hover p {
    transform: translateX(6px);
}

.album_class_page.album_a .other_subalbum .item:hover p::before {
    color: #14436E;
    letter-spacing: 2px;
}

.album_class_page.album_a .other_subalbum .item:hover p::after {
    transform: scaleX(1);
}


/* ========================================
   功能頁【相簿類】- Compact Catalog RWD
======================================== */

@media screen and (max-width: 1024px) {

    .album_class_page.album_a .other_subalbum {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

}

@media screen and (max-width: 768px) {

    .album_class_page.album_a .other_subalbum {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 34px 16px;
    }

}

@media screen and (max-width: 425px) {

    .album_class_page.album_a .other_subalbum {
        gap: 28px 12px;
    }

    .album_class_page.album_a .other_subalbum li a p {
        min-height: 64px;

        font-size: 14px;
    }

}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [1024, 768, 425],
    mobileBreakpoint: 425,

    selectors: '.album_class_page.album_a .other_subalbum（counter-reset）／.item（counter-increment）／li a p::before（自動編號）／::after（底線）',
    techniques: 'CSS Grid 4→3→2 欄 RWD／counter-reset ＋ counter-increment 自動編號（不需要後台手動輸入編號）／aspect-ratio／::before 編號偽元素／::after 底線偽元素 transform:scaleX',

    previewHtml: `<div class="album_class_page album_a"><div class="main_part"><div class="show_content"><div class="subalbum-menu clearfix">
  <ul class="show-list other_subalbum">
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#c9cdd3'/><text x='50%' y='50%' fill='#555' font-size='16' text-anchor='middle' dy='.3em'>產品 1</text></svg>" alt=""></figure><p>產品名稱示意 01</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#bcc1c8'/><text x='50%' y='50%' fill='#555' font-size='16' text-anchor='middle' dy='.3em'>產品 2</text></svg>" alt=""></figure><p>產品名稱示意 02</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#afb4bc'/><text x='50%' y='50%' fill='#555' font-size='16' text-anchor='middle' dy='.3em'>產品 3</text></svg>" alt=""></figure><p>產品名稱示意 03</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#a2a8b0'/><text x='50%' y='50%' fill='#555' font-size='16' text-anchor='middle' dy='.3em'>產品 4</text></svg>" alt=""></figure><p>產品名稱示意 04，測試比較長的標題兩行截斷效果</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#959ca4'/><text x='50%' y='50%' fill='#fff' font-size='16' text-anchor='middle' dy='.3em'>產品 5</text></svg>" alt=""></figure><p>產品名稱示意 05</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#888f98'/><text x='50%' y='50%' fill='#fff' font-size='16' text-anchor='middle' dy='.3em'>產品 6</text></svg>" alt=""></figure><p>產品名稱示意 06</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#7b828c'/><text x='50%' y='50%' fill='#fff' font-size='16' text-anchor='middle' dy='.3em'>產品 7</text></svg>" alt=""></figure><p>產品名稱示意 07</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='#6e7580'/><text x='50%' y='50%' fill='#fff' font-size='16' text-anchor='middle' dy='.3em'>產品 8</text></svg>" alt=""></figure><p>產品名稱示意 08</p></a></li>
  </ul>
</div></div></div></div>`,

    previewExtraCss: ``,

    previewNote: '通用模板，圖片與品名是 Preview 額外建立的示意內容（8 筆，用來展示 4→3→2 欄 RWD 與自動編號效果）。結構沿用先前已核對過的真實後台輸出。編號（01、02…）是 CSS <code>counter</code> 自動產生，不是寫在 HTML 或圖片檔名裡，Preview 裡看到的數字也是即時算出來的，不是我手動打的。',

    notes: '這個版型的 Hover 語言是「Number + Border Draw + Text Slide」，跟 Editorial Portfolio（Album B）的 Overlay 語言不同，之後修改請保持這個區別。<code>counter-reset</code> 寫在 <code>.other_subalbum</code>（容器）、<code>counter-increment</code> 寫在 <code>.item</code>（每一列），編號才會正確遞增——這依賴 <code>.item</code> 必須是 <code>.other_subalbum</code> 的直接子層，跟真實後台輸出的 <code>ul > li.item</code> 結構一致。沒有 JS，沒有 <code>!important</code>。',

    suggestion: '',

    similarCases: ['gallery-hover-01', 'gallery-editorial-b', 'gallery-directory-d'],
  },

  // ========================================
  // 相簿【Gallery】- 無圖片文字分類 Text Directory（Album D）
  // ========================================
  {
    id: 'gallery-directory-d',
    title: '無圖片文字分類 Text Directory（相簿版型 D）',
    category: 'gallery',
    tags: ['TextOnly', 'Directory', 'RWD'],
    description: '完全不使用圖片的純文字列表，固定列高、編號固定左側、箭頭固定右側，文字長短不影響操作位置；Hover 時整列品牌色由左滑入。適合法律、會計、顧問、B2B、專業服務、醫療服務，或沒有好照片可用的品牌。',
    source: '樣式模板庫（通用版型，未綁定特定案件；沿用既有相簿頁後台輸出結構）',
    updated: '2026-09-18',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   功能頁【相簿類】- Text Directory
======================================== */

.album_class_page.album_a .other_subalbum {
    display: block;

    counter-reset: album-text;
}


/* === 單列 === */

.album_class_page.album_a .other_subalbum .item {
    margin: 0;

    counter-increment: album-text;
}


/* === 隱藏圖片 === */

.album_class_page.album_a .other_subalbum .show_pic {
    display: none;
}


/* === Link === */

.album_class_page.album_a .other_subalbum .item > a {
    position: relative;

    display: grid;
    grid-template-columns: 90px minmax(0, 1fr) 60px;
    align-items: center;

    min-height: 105px;

    padding: 0 10px;

    overflow: hidden;

    border-bottom: 1px solid #ddd;

    color: #222;
    background: transparent;

    isolation: isolate;
}


/* === Hover 背景 === */

.album_class_page.album_a .other_subalbum .item > a::before {
    content: "";

    position: absolute;
    inset: 0;

    z-index: -1;

    background: #183c5c;

    transform: translateX(-101%);

    transition: transform .45s cubic-bezier(.4, 0, .2, 1);
}


/* === 編號 === */

.album_class_page.album_a .other_subalbum .item > a::after {
    content: "0" counter(album-text);

    grid-column: 1;

    color: #999;

    font-size: 12px;
    letter-spacing: 1px;

    transition:
        color .3s ease,
        letter-spacing .3s ease;
}


/* === 標題 === */

.album_class_page.album_a .other_subalbum li a p {
    position: relative;

    grid-column: 2;
    grid-row: 1;

    display: -webkit-box;

    margin: 0;
    padding: 0;

    overflow: hidden;

    color: #222;
    background: transparent;

    font-family: "Noto Sans TC", sans-serif;
    font-size: 23px;
    font-weight: 500;
    line-height: 1.5;

    text-align: left;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    transition:
        color .3s ease,
        transform .35s ease;
}


/* === 固定右側箭頭 === */

.album_class_page.album_a .other_subalbum li a p::after {
    content: "→";

    position: absolute;

    right: -52px;
    top: 50%;

    font-size: 18px;

    transform: translateY(-50%);

    transition: transform .35s ease;
}


/* === Hover === */

.album_class_page.album_a .other_subalbum .item > a:hover::before {
    transform: translateX(0);
}

.album_class_page.album_a .other_subalbum .item > a:hover::after {
    color: rgba(255,255,255,.6);
    letter-spacing: 2px;
}

.album_class_page.album_a .other_subalbum .item > a:hover p {
    color: #fff;

    transform: translateX(8px);
}

.album_class_page.album_a .other_subalbum .item > a:hover p::after {
    transform: translate(6px, -50%);
}


/* ========================================
   功能頁【相簿類】- Text Directory RWD
======================================== */

@media screen and (max-width: 768px) {

    .album_class_page.album_a .other_subalbum .item > a {
        grid-template-columns: 55px minmax(0, 1fr) 45px;

        min-height: 85px;
    }

    .album_class_page.album_a .other_subalbum li a p {
        font-size: 18px;
    }

    .album_class_page.album_a .other_subalbum li a p::after {
        right: -38px;
    }

}

@media screen and (max-width: 425px) {

    .album_class_page.album_a .other_subalbum .item > a {
        grid-template-columns: 42px minmax(0, 1fr) 36px;
        min-height: 76px;

        padding: 0;
    }

    .album_class_page.album_a .other_subalbum li a p {
        font-size: 16px;
    }

}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [768, 425],
    mobileBreakpoint: 425,

    selectors: '.album_class_page.album_a .other_subalbum .item > a（Grid 三欄：編號／標題／箭頭）／::before（Hover 背景滑入）／li a p::after（固定箭頭）',
    techniques: '<code>display:none</code> 隱藏圖片（不刪除 HTML，只是不顯示）／CSS Grid 固定三欄寬度／counter 自動編號／::before 搭配 <code>isolation:isolate</code> + <code>z-index:-1</code> 做背景滑入，不會跑到其他元素下面／::after 固定右側箭頭',

    previewHtml: `<div class="album_class_page album_a"><div class="main_part"><div class="show_content"><div class="subalbum-menu clearfix">
  <ul class="show-list other_subalbum">
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></figure><p>分類項目示意 01：企業法律顧問</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></figure><p>分類項目示意 02：財務會計簽證</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></figure><p>分類項目示意 03：智慧財產權諮詢</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></figure><p>分類項目示意 04：稅務規劃服務，故意寫長一點測試兩行</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></figure><p>分類項目示意 05：勞資爭議處理</p></a></li>
    <li class="item"><a href="#"><figure class="show_pic"><div class="overlay"></div><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></figure><p>分類項目示意 06：合約審閱服務</p></a></li>
  </ul>
</div></div></div></div>`,

    previewExtraCss: ``,

    previewNote: '通用模板，分類名稱是 Preview 額外建立的示意內容。因為這個版型完全不顯示圖片，圖片本身用一個 1x1 透明色塊代替只是為了保持跟其他相簿版型一致的 HTML 結構（<code>figure.show_pic</code> 仍然存在，只是被 <code>display:none</code> 隱藏，沒有修改 HTML）。',

    notes: '這個版型的 Hover 語言是「Background Fill + Arrow」。<code>.show_pic{display:none}</code> 只是隱藏，後台輸出的圖片元素本身沒有被移除，符合「不修改 HTML」的前提。<code>isolation:isolate</code> 幫 <code>::before</code> 的 <code>z-index:-1</code> 建立新的堆疊環境，避免背景色滑入時跑到其他元素下方。沒有 JS，沒有 <code>!important</code>。',

    suggestion: '',

    similarCases: ['gallery-hover-01', 'gallery-editorial-b', 'gallery-catalog-c'],
  },

  // ========================================
  // 文章【Article】- 橫向圖文列表 Horizontal News List（Article B）
  // ========================================
  {
    id: 'article-horizontal-b',
    title: '橫向圖文列表 Horizontal News List（文章版型 B）',
    category: 'article',
    tags: ['Horizontal', 'ImagePan', 'RWD'],
    description: '圖片固定約 30% 寬，標題最多兩行、摘要最多兩行，箭頭固定右下，內容長短不影響按鈕位置；Hover 用圖片橫向位移（Image Pan），不是 Zoom。適合最新消息、公司新聞、醫療文章、技術文章、工業知識、專業文章。',
    source: '樣式模板庫（通用版型，未綁定特定案件；沿用既有文章頁後台輸出結構）',
    updated: '2026-09-18',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   功能頁【文章類】- Horizontal News List
======================================== */

.article_a .blog_subbox {
    display: flex;
    flex-direction: column;

    gap: 0;
}


/* === 單篇文章 === */

.article_a .blog_subbox .subbox_item > a {
    position: relative;

    display: grid;
    grid-template-columns: minmax(230px, 32%) minmax(0, 1fr);
    gap: 40px;

    min-height: 230px;

    padding: 32px 55px 32px 0;

    border-bottom: 1px solid #ddd;
}


/* === 圖片 === */

.article_a .blog_list_le {
    position: relative;

    width: 100%;
    aspect-ratio: 4 / 3;

    margin: 0;

    overflow: hidden;
}

.article_a .blog_list_le::before,
.article_a .blog_list_le::after {
    display: none;
}

.article_a .blog_list_le img {
    width: calc(100% + 18px);
    max-width: none;
    height: 100%;

    object-fit: cover;

    transform: translateX(0);

    transition: transform .55s ease;
}


/* === 文字區 === */

.article_a .blog_list_ri {
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 0;

    padding: 0;
}


/* === 日期 === */

.article_a .blog_list_ri em {
    order: 1;

    display: block;

    margin-bottom: 10px;

    color: #888;

    font-size: 12px;
    font-style: normal;
}


/* 關掉原本 MORE */
.article_a .blog_list_ri em::after {
    display: none;
}


/* === 標題 === */

.article_a .blog_list_ri h5 {
    order: 2;

    display: -webkit-box;

    min-height: 2.9em;

    margin: 0 0 14px;

    overflow: hidden;

    color: #222;

    font-size: 24px;
    line-height: 1.45;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    transition: color .3s ease;
}


/* === 摘要 === */

.article_a .blog_list_ri p {
    order: 3;

    display: -webkit-box;

    min-height: 3.2em;

    margin: 0;

    overflow: hidden;

    color: #555;

    font-size: 15px;
    line-height: 1.6;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}


/* === 固定箭頭 === */

.article_a .blog_subbox .subbox_item > a::after {
    content: "↗";

    position: absolute;

    right: 8px;
    bottom: 32px;

    color: #14436E;

    font-size: 19px;

    transition: transform .3s ease;
}


/* === Hover === */

.article_a .subbox_item > a:hover .blog_list_le img {
    transform: translateX(-18px);
}

.article_a .subbox_item > a:hover .blog_list_ri h5 {
    color: #14436E;
}

.article_a .blog_subbox .subbox_item > a:hover::after {
    transform: translate(4px, -4px);
}


/* ========================================
   功能頁【文章類】- Horizontal News List RWD
======================================== */

@media screen and (max-width: 768px) {

    .article_a .blog_subbox .subbox_item > a {
        grid-template-columns: 180px minmax(0, 1fr);
        gap: 22px;

        min-height: 180px;

        padding-right: 40px;
    }

    .article_a .blog_list_ri h5 {
        font-size: 19px;
    }

}

@media screen and (max-width: 520px) {

    .article_a .blog_subbox .subbox_item > a {
        grid-template-columns: 1fr;
        gap: 18px;

        padding: 25px 42px 25px 0;
    }

    .article_a .blog_list_le {
        aspect-ratio: 16 / 10;
    }

    .article_a .blog_subbox .subbox_item > a::after {
        right: 5px;
        bottom: 25px;
    }

}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [768, 520],
    mobileBreakpoint: 520,

    selectors: '.article_a .blog_subbox .subbox_item > a（Grid 圖文兩欄）／.blog_list_le／.blog_list_ri h5,em,p／::after（固定箭頭）',
    techniques: 'Flex 直向列表／CSS Grid 圖文兩欄／aspect-ratio／line-clamp 標題與摘要各限兩行／固定右下角箭頭（不隨內容長度移動）／transform:translateX 圖片橫向 Pan（不是 zoom）',

    previewHtml: `<div class="article_a"><div class="main_part"><div class="blog_subbox">
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='%23b7c4d1'/><text x='50%25' y='50%25' fill='%23334' font-size='18' text-anchor='middle' dy='.3em'>示意圖 1</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>文章標題示意 01：這裡示範標題兩行截斷會是什麼樣子</h5><em>2026.09.18</em><p>文章摘要示意文字，這裡是 Preview 用的假資料，用來呈現版型與 Hover 圖片位移效果，摘要同樣限制最多兩行顯示。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='%23a7b6c6'/><text x='50%25' y='50%25' fill='%23334' font-size='18' text-anchor='middle' dy='.3em'>示意圖 2</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>文章標題示意 02</h5><em>2026.09.10</em><p>文章摘要示意文字，內容較短，用來確認按鈕位置固定不受內容長短影響。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='400' height='300' fill='%2398a9bb'/><text x='50%25' y='50%25' fill='%23334' font-size='18' text-anchor='middle' dy='.3em'>示意圖 3</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>文章標題示意 03</h5><em>2026.09.01</em><p>文章摘要示意文字第三篇。</p></div>
  </a></div>
</div></div></div>`,

    previewExtraCss: `body{padding:20px;}`,

    previewNote: '通用模板，文章標題／摘要／圖片都是 Preview 額外建立的示意內容。結構沿用先前已核對過的真實文章頁後台輸出（<code>.subbox_item > a > .blog_list_le img + .blog_list_ri h5,em,p</code>）。CSS 裡把 <code>.blog_list_le::before/::after</code> 關掉，是原作者的防禦寫法（避免跟其他自訂樣式的底線偽元素衝突），在這個獨立案例裡沒有實際覆蓋對象，純粹保留原始碼原樣。',

    notes: '這個版型的 Hover 語言是「Image Pan + Title Color + ↗」，跟其他文章版型不同，請保持區別。只有一個 RWD 斷點在 768，另一個在 520（不是常見的 425），這是原始碼就這樣寫的，沒有更動。沒有 JS，沒有 <code>!important</code>。',

    suggestion: '',

    similarCases: ['article-list-01', 'article-featured-c', 'article-journal-d'],
  },

  // ========================================
  // 文章【Article】- 首篇主打文章 Featured Editorial（Article C）
  // ========================================
  {
    id: 'article-featured-c',
    title: '首篇主打文章 Featured Editorial（文章版型 C）',
    category: 'article',
    tags: ['Featured', 'Curtain', 'RWD'],
    description: '第一篇文章自動放大成左右 Editorial 排版，不需要修改 HTML（純靠 :first-child 選取器）；其餘文章維持兩欄。主打文章與一般文章的 Hover 效果不完全相同：主打用 Curtain 淡出＋固定 VIEW↗，其餘用一般圖文卡片。適合設計品牌、美妝、服飾、餐廳、攝影、生活風格、品牌 Journal。',
    source: '樣式模板庫（通用版型，未綁定特定案件；沿用既有文章頁後台輸出結構）',
    updated: '2026-09-18',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   功能頁【文章類】- Featured Editorial
======================================== */

.article_a .blog_subbox {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 55px 28px;
}


/* === 共用項目 === */

.article_a .blog_subbox .subbox_item {
    min-width: 0;
}

.article_a .blog_subbox .subbox_item > a {
    height: 100%;
}


/* ========================================
   第一篇主打
======================================== */

.article_a .blog_subbox .subbox_item:first-child {
    grid-column: 1 / -1;
}

.article_a .blog_subbox .subbox_item:first-child > a {
    position: relative;

    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
    gap: 50px;

    align-items: stretch;
}


/* === 第一篇圖片 === */

.article_a .blog_subbox .subbox_item:first-child .blog_list_le {
    position: relative;

    width: 100%;
    aspect-ratio: 16 / 10;

    margin: 0;

    overflow: hidden;
}

.article_a .blog_subbox .subbox_item:first-child .blog_list_le::before {
    content: "";

    display: block;

    position: absolute;
    inset: 0;

    z-index: 2;

    background: rgba(20, 67, 110, .18);

    transform: translateY(0);

    transition: transform .55s cubic-bezier(.4, 0, .2, 1);
}

.article_a .blog_subbox .subbox_item:first-child .blog_list_le::after {
    display: none;
}

.article_a .blog_subbox .subbox_item:first-child .blog_list_le img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}


/* === 第一篇文字 === */

.article_a .blog_subbox .subbox_item:first-child .blog_list_ri {
    position: relative;

    display: flex;
    flex-direction: column;

    min-width: 0;

    padding: 30px 0 45px;
}

.article_a .blog_subbox .subbox_item:first-child .blog_list_ri h5 {
    order: 2;

    display: -webkit-box;

    margin: 0 0 20px;

    overflow: hidden;

    font-size: 32px;
    line-height: 1.4;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.article_a .blog_subbox .subbox_item:first-child .blog_list_ri em {
    order: 1;

    margin-bottom: 15px;

    color: #999;

    font-size: 12px;
}

.article_a .blog_subbox .subbox_item:first-child .blog_list_ri em::after {
    display: none;
}

.article_a .blog_subbox .subbox_item:first-child .blog_list_ri p {
    order: 3;

    display: -webkit-box;

    margin: 0;

    overflow: hidden;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}


/* === 第一篇固定 VIEW === */

.article_a .blog_subbox .subbox_item:first-child > a::after {
    content: "VIEW  ↗";

    position: absolute;

    right: 0;
    bottom: 18px;

    color: #14436E;

    font-size: 11px;
    letter-spacing: 1.5px;

    transition: transform .3s ease;
}


/* === 第一篇 Hover === */

.article_a .blog_subbox .subbox_item:first-child > a:hover .blog_list_le::before {
    transform: translateY(-100%);
}

.article_a .blog_subbox .subbox_item:first-child > a:hover::after {
    transform: translate(4px, -4px);
}


/* ========================================
   其他文章
======================================== */

.article_a .blog_subbox .subbox_item:not(:first-child) > a {
    display: flex;
    flex-direction: column;
}


/* === 圖片 === */

.article_a .blog_subbox .subbox_item:not(:first-child) .blog_list_le {
    width: 100%;
    aspect-ratio: 4 / 3;

    margin-bottom: 20px;

    overflow: hidden;
}

.article_a .blog_subbox .subbox_item:not(:first-child) .blog_list_le img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}


/* === 文字 === */

.article_a .blog_subbox .subbox_item:not(:first-child) .blog_list_ri {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.article_a .blog_subbox .subbox_item:not(:first-child) .blog_list_ri h5 {
    display: -webkit-box;

    min-height: 2.8em;

    overflow: hidden;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.article_a .blog_subbox .subbox_item:not(:first-child) .blog_list_ri p {
    display: -webkit-box;

    min-height: 3.2em;

    overflow: hidden;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.article_a .blog_subbox .subbox_item:not(:first-child) .blog_list_ri em {
    margin-top: auto;
}


/* ========================================
   功能頁【文章類】- Featured Editorial RWD
======================================== */

@media screen and (max-width: 768px) {

    .article_a .blog_subbox {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .article_a .blog_subbox .subbox_item:first-child > a {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .article_a .blog_subbox .subbox_item:first-child .blog_list_ri {
        padding: 0 0 45px;
    }

    .article_a .blog_subbox .subbox_item:first-child .blog_list_ri h5 {
        font-size: 24px;
    }

}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [768],
    mobileBreakpoint: 425,

    selectors: '.article_a .blog_subbox .subbox_item:first-child（主打文章）／:not(:first-child)（其餘文章）／.blog_list_le::before（Curtain）',
    techniques: 'CSS Grid 兩欄／:first-child 選取器讓第一篇自動跨欄＋Editorial 左右排版（不需要額外 class）／:not(:first-child) 統一其餘卡片樣式／::before 布幕淡出（Curtain）／::after 固定 VIEW↗ 文字／line-clamp',

    previewHtml: `<div class="article_a"><div class="main_part"><div class="blog_subbox">
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='400'><rect width='640' height='400' fill='%23c4b8a6'/><text x='50%25' y='50%25' fill='%23443' font-size='22' text-anchor='middle' dy='.3em'>主打文章示意圖</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>主打文章標題示意：這是第一篇，會自動變成跨欄的 Editorial 排版</h5><em>2026.09.18</em><p>主打文章摘要示意文字，這裡是 Preview 用的假資料，用來呈現主打文章的排版與 Curtain Hover 效果。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='%23d6cdbd'/><text x='50%25' y='50%25' fill='%23443' font-size='16' text-anchor='middle' dy='.3em'>文章 2</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>一般文章標題示意 02</h5><em>2026.09.10</em><p>一般文章摘要示意文字第二篇。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='%23cfc5b3'/><text x='50%25' y='50%25' fill='%23443' font-size='16' text-anchor='middle' dy='.3em'>文章 3</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>一般文章標題示意 03</h5><em>2026.09.05</em><p>一般文章摘要示意文字第三篇。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='%23c8bdaa'/><text x='50%25' y='50%25' fill='%23443' font-size='16' text-anchor='middle' dy='.3em'>文章 4</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>一般文章標題示意 04</h5><em>2026.09.02</em><p>一般文章摘要示意文字第四篇。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='225'><rect width='300' height='225' fill='%23c1b6a1'/><text x='50%25' y='50%25' fill='%23443' font-size='16' text-anchor='middle' dy='.3em'>文章 5</text></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>一般文章標題示意 05</h5><em>2026.09.01</em><p>一般文章摘要示意文字第五篇。</p></div>
  </a></div>
</div></div></div>`,

    previewExtraCss: `body{padding:20px;}`,

    previewNote: '通用模板，5 篇示意內容（1 篇主打＋4 篇一般），用來展示 :first-child 自動變大的效果。內容都是 Preview 額外建立的示意資料，結構沿用先前已核對過的真實文章頁後台輸出。這個版型只在 768px 定義了一個 RWD 斷點，Mobile 按鈕（425px）會顯示跟 768px 相同的版面，因為原始碼本來就沒有再往下的斷點，不是 Preview 漏做。',

    notes: '這個版型的 Hover 語言是「Curtain + VIEW ↗ + Border」，主打文章跟其餘文章的 Hover 不完全相同（主打是 Curtain 淡出，其餘沒有額外 Hover 樣式，維持圖文卡片本身）。「不需要修改 HTML」這句話成立的原因：第一篇主打完全靠 <code>:first-child</code> 選取器判斷，後台輸出的第一篇本來就是 DOM 順序的第一個 <code>.subbox_item</code>，天生符合，不需要額外標記 class。沒有 JS，沒有 <code>!important</code>。',

    suggestion: '',

    similarCases: ['article-list-01', 'article-horizontal-b', 'article-journal-d'],
  },

  // ========================================
  // 文章【Article】- 純文字文章列表 Text Journal（Article D）
  // ========================================
  {
    id: 'article-journal-d',
    title: '純文字文章列表 Text Journal（文章版型 D）',
    category: 'article',
    tags: ['TextOnly', 'Journal', 'RWD'],
    description: '完全隱藏圖片與摘要，日期固定左側、標題固定中間、箭頭固定最右，標題再長也不會影響箭頭位置；Hover 非常簡潔（文字變色位移＋底線展開＋箭頭位移）。適合法律、會計、公告、協會、公司消息、專業知識，或沒有文章圖片的網站。',
    source: '樣式模板庫（通用版型，未綁定特定案件；沿用既有文章頁後台輸出結構）',
    updated: '2026-09-18',

    hasOriginalHtml: false,
    html: null,

    css: `/* ========================================
   功能頁【文章類】- Text Journal
======================================== */

.article_a .blog_subbox {
    display: block;
}


/* === 隱藏圖片 === */

.article_a .blog_list_le {
    display: none;
}


/* === 單篇 === */

.article_a .blog_subbox .subbox_item > a {
    position: relative;

    display: block;

    padding: 30px 55px 30px 0;

    border-bottom: 1px solid #ddd;
}


/* === 文字排列 === */

.article_a .blog_list_ri {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr);
    align-items: center;

    min-width: 0;

    padding: 0;
}


/* === 日期 === */

.article_a .blog_list_ri em {
    grid-column: 1;
    grid-row: 1;

    color: #999;

    font-size: 12px;
    font-style: normal;
}

.article_a .blog_list_ri em::after {
    display: none;
}


/* === 標題 === */

.article_a .blog_list_ri h5 {
    grid-column: 2;
    grid-row: 1;

    display: -webkit-box;

    margin: 0;

    overflow: hidden;

    color: #222;

    font-size: 21px;
    font-weight: 500;
    line-height: 1.5;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    transition:
        color .3s ease,
        transform .3s ease;
}


/* === 摘要隱藏 === */

.article_a .blog_list_ri p {
    display: none;
}


/* === 固定箭頭 === */

.article_a .subbox_item > a::after {
    content: "↗";

    position: absolute;

    right: 5px;
    top: 50%;

    color: #777;

    font-size: 18px;

    transform: translateY(-50%);

    transition:
        color .3s ease,
        transform .3s ease;
}


/* === 動態底線 === */

.article_a .subbox_item > a::before {
    content: "";

    position: absolute;

    left: 0;
    bottom: -1px;

    width: 100%;
    height: 1px;

    background: #14436E;

    transform: scaleX(0);
    transform-origin: left;

    transition: transform .4s ease;
}


/* === Hover === */

.article_a .subbox_item > a:hover h5 {
    color: #14436E;

    transform: translateX(6px);
}

.article_a .subbox_item > a:hover::after {
    color: #14436E;

    transform: translate(5px, -65%);
}

.article_a .subbox_item > a:hover::before {
    transform: scaleX(1);
}


/* ========================================
   功能頁【文章類】- Text Journal RWD
======================================== */

@media screen and (max-width: 600px) {

    .article_a .blog_subbox .subbox_item > a {
        padding: 24px 42px 24px 0;
    }

    .article_a .blog_list_ri {
        grid-template-columns: 1fr;
        gap: 8px;
    }

    .article_a .blog_list_ri em,
    .article_a .blog_list_ri h5 {
        grid-column: 1;
    }

    .article_a .blog_list_ri h5 {
        font-size: 18px;
    }

}`,

    js: '',

    dependencies: { css: [], js: [] },

    breakpoints: [600],
    mobileBreakpoint: 425,

    selectors: '.article_a .blog_list_ri（Grid：日期／標題固定欄寬）／.subbox_item > a::before（底線）／::after（固定箭頭）',
    techniques: '<code>display:none</code> 隱藏圖片與摘要／CSS Grid 固定日期＋標題欄寬（標題再長也不影響箭頭位置）／::before 底線 transform:scaleX／::after 固定右側箭頭／RWD 600px 以下改上下排列',

    previewHtml: `<div class="article_a"><div class="main_part"><div class="blog_subbox">
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>公告標題示意 01：這裡示範標題比較長的時候，箭頭位置依然固定在最右側</h5><em>2026.09.18</em><p>摘要在這個版型會被隱藏，不會顯示出來。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>公告標題示意 02</h5><em>2026.09.10</em><p>摘要隱藏示意。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>公告標題示意 03</h5><em>2026.09.05</em><p>摘要隱藏示意。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>公告標題示意 04</h5><em>2026.09.01</em><p>摘要隱藏示意。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>公告標題示意 05</h5><em>2026.08.28</em><p>摘要隱藏示意。</p></div>
  </a></div>
  <div class="subbox_item"><a href="#">
    <div class="blog_list_le"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><rect width='10' height='10' fill='%23ccc'/></svg>" alt=""></div>
    <div class="blog_list_ri"><h5>公告標題示意 06</h5><em>2026.08.20</em><p>摘要隱藏示意。</p></div>
  </a></div>
</div></div></div>`,

    previewExtraCss: `body{padding:20px;}`,

    previewNote: '通用模板，標題與日期是 Preview 額外建立的示意內容，圖片用 1x1 透明色塊代替（因為這個版型會把圖片隱藏，色塊本身不會顯示出來，只是保持 HTML 結構跟其他版型一致）。結構沿用先前已核對過的真實文章頁後台輸出。',

    notes: '這個版型的 Hover 語言是「Border Draw + Text Slide + ↗」，全部只用 <code>transform</code>／<code>color</code>／偽元素，沒有動 <code>width</code>／<code>height</code>／<code>margin</code>／<code>padding</code>，不會影響版面排列。RWD 只有一個 600px 斷點（不是常見的 768/425），這是原始碼就這樣寫的。沒有 JS，沒有 <code>!important</code>。',

    suggestion: '',

    similarCases: ['article-list-01', 'article-horizontal-b', 'article-featured-c'],
  },

];
