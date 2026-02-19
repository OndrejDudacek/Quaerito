import { Indexer } from "./indexer.ts";

(async () => {
	const indexer = new Indexer();
	await indexer.processPageData({
  url: 'https://www.sablik.eu/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-2-dil',
  content: '<!DOCTYPE html><html prefix="og: http://ogp.me/ns#" xmlns="http://www.w3.org/1999/xhtml" lang="cs-cz" dir="ltr" style="--vh: 6px;"><head>\n' +
    `<script type="text/javascript">  (function(){    function blockCookies(disableCookies, disableLocal, disableSession){    if(disableCookies == 1){    if(!document.__defineGetter__){    Object.defineProperty(document, 'cookie',{    get: function(){ return ''; },    set: function(){ return true;}    });    }else{    var oldSetter = document.__lookupSetter__('cookie');    if(oldSetter) {    Object.defineProperty(document, 'cookie', {    get: function(){ return ''; },    set: function(v){ if(v.match(/reDimCookieHint\\=/) || v.match(/0e0f4abbec715c06d4af6982c52d147f\\=/)) {    oldSetter.call(document, v);    }    return true;    }    });    }    }    var cookies = document.cookie.split(';');    for (var i = 0; i < cookies.length; i++) {    var cookie = cookies[i];    var pos = cookie.indexOf('=');    var name = '';    if(pos > -1){    name = cookie.substr(0, pos);    }else{    name = cookie;    } if(name.match(/reDimCookieHint/)) {    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';    }    }    }    if(disableLocal == 1){    window.localStorage.clear();    window.localStorage.__proto__ = Object.create(window.Storage.prototype);    window.localStorage.__proto__.setItem = function(){ return undefined; };    }    if(disableSession == 1){    window.sessionStorage.clear();    window.sessionStorage.__proto__ = Object.create(window.Storage.prototype);    window.sessionStorage.__proto__.setItem = function(){ return undefined; };    }    }    blockCookies(1,1,1);    }()); </script>\n` +
    '\n' +
    '\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
    '    <meta charset="utf-8">\n' +
    '\t<meta name="generator" content="Powered by Website Builder Gridbox">\n' +
    '\t<title>Šlechta a kardinálové - 2. díl</title>\n' +
    '<link href="/plugins/system/cookiehint/css/redimstyle.css?93c8a8" rel="stylesheet">\n' +
    '\t<link href="https://www.sablik.eu/components/com_gridbox/assets/css/storage/style-64.css?2025-01-23-04-28-39" rel="stylesheet">\n' +
    '\t<link href="https://www.sablik.eu/components/com_gridbox/assets/css/storage/post-2.css?2025-01-23-04-28-39" rel="stylesheet">\n' +
    '\t<link href="https://www.sablik.eu/components/com_gridbox/libraries/headline/css/animation.css" rel="stylesheet">\n' +
    '\t<link href="/templates/gridbox/css/gridbox.css?2.19.0.5" rel="stylesheet">\n' +
    '\t<link href="/templates/gridbox/css/storage/responsive.css?2025-01-22-10-38-18" rel="stylesheet">\n' +
    '\t<link href="https://www.sablik.eu/templates/gridbox/css/storage/style-10.css?2025-01-22-10-38-18" rel="stylesheet">\n' +
    '\t<link href="//fonts.googleapis.com/css?family=Playfair+Display:400,700,900,300,500&amp;subset=latin,cyrillic,greek,latin-ext,greek-ext,vietnamese,cyrillic-ext&amp;display=swap" rel="stylesheet">\n' +
    '\t<link href="https://www.sablik.eu/templates/gridbox/css/custom.css" rel="stylesheet">\n' +
    '\t<style>#redim-cookiehint-bottom {position: fixed; z-index: 99999; left: 0px; right: 0px; bottom: 0px; top: auto !important;}</style>\n' +
    '<script type="application/json" class="joomla-script-options new">{"system.paths":{"root":"","rootFull":"https:\\/\\/www.sablik.eu\\/","base":"","baseFull":"https:\\/\\/www.sablik.eu\\/"},"csrf.token":"05254f4a580429bd4d29ee2ec96d81fc"}</script>\n' +
    '\t<script src="/media/system/js/core.min.js?2cb912"></script>\n' +
    '\t<script src="/media/mod_menu/js/menu.min.js?93c8a8" type="module"></script>\n' +
    '\t<script src="/media/vendor/jquery/js/jquery.min.js"></script>\n' +
    '\t<script src="/components/com_gridbox/libraries/bootstrap/bootstrap.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/index.php?option=com_gridbox&amp;task=editor.loadModule&amp;module=gridboxLanguage&amp;2.19.0.5"></script>\n' +
    '\t<script src="/components/com_gridbox/assets/modules/ImportHelper.js?"></script>\n' +
    '\t<script src="/templates/gridbox/js/gridbox.js?2.19.0.5"></script>\n' +
    '\t<script src="/index.php?option=com_gridbox&amp;task=editor.getItems&amp;id=64&amp;theme=10&amp;edit_type=&amp;view=page&amp;menuitem=103&amp;2025-01-22-10-38-18"></script>\n' +
    '\t<script src="https://www.sablik.eu/templates/gridbox/js/storage/code-editor-10.js?2025-01-22-10-38-18"></script>\n' +
    "\t<script>(function() {  if (typeof gtag !== 'undefined') {       gtag('consent', 'denied', {         'ad_storage': 'denied',         'ad_user_data': 'denied',         'ad_personalization': 'denied',         'functionality_storage': 'denied',         'personalization_storage': 'denied',         'security_storage': 'denied',         'analytics_storage': 'denied'       });     } })();</script>\n" +
    '\n' +
    '\t<link href="https://www.sablik.eu/images/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon">\n' +
    `    <style type="text/css">/*/* Plugin Overlay Section*/.ba-item-overlay-section .ba-image-wrapper + .ba-button-wrapper { display: none;}.ba-item-overlay-section .ba-image-wrapper { cursor: pointer;}.ba-overlay-section-backdrop { padding: 0 !important;}.ba-overlay-section .animated { animation-fill-mode: both;}.ba-overlay-section-backdrop.lightbox.visible-section { left: 0;}.ba-overlay-section-backdrop .ba-overlay-section:not(.ba-container) > .ba-section { width: calc(100vw - 17px) !important;}.ba-overlay-section-backdrop .ba-section { flex-direction: column;}/* Overlay Section Button */.ba-overlay-section-backdrop.visible-section .ba-overlay-section { transform: none !important;}.ba-overlay-section-backdrop .ba-overlay-section { transition: transform .3s ease-in-out;}/* Overlay Section Lightbox */.ba-overlay-section-backdrop.lightbox .ba-overlay-section { align-items: center; display: flex; justify-content: center;}.ba-overlay-section-backdrop:not(.horizontal-bottom):not(.horizontal-top) .ba-section { height: auto !important; margin-left: auto; margin-right: auto;}.ba-overlay-section-backdrop.lightbox .ba-section { margin: 50px 0;}/* Overlay Section Vertical Right */.ba-overlay-section-backdrop.vertical-left > .ba-overlay-section >.ba-section,.ba-overlay-section-backdrop.vertical-right > .ba-overlay-section > .ba-section { min-height: 100vh !important;}.ba-overlay-section-backdrop.vertical-right { justify-content: flex-end;}.ba-overlay-section-backdrop.vertical-right > .ba-overlay-section { transform: translateX(100%);}/* Overlay Section Vertical Left */.ba-overlay-section-backdrop.vertical-left { justify-content: flex-start;}.ba-overlay-section-backdrop.vertical-left > .ba-overlay-section { transform: translateX(-100%);}/* Overlay Section Horizontal Top */.ba-overlay-section-backdrop.horizontal-bottom > .ba-overlay-section,.ba-overlay-section-backdrop.horizontal-top > .ba-overlay-section { margin: 0;}.ba-overlay-section-backdrop.horizontal-top > .ba-overlay-section { transform: translateY(-100%);}.ba-overlay-section-backdrop.horizontal-top { align-items: flex-start;}.ba-overlay-section-backdrop.horizontal-top .ba-container,.ba-overlay-section-backdrop.horizontal-bottom .ba-container { max-width: none;}.ba-overlay-section-backdrop.horizontal-top > .ba-overlay-section,.ba-overlay-section-backdrop.horizontal-top > .ba-overlay-section > .ba-section,.ba-overlay-section-backdrop.horizontal-bottom > .ba-overlay-section,.ba-overlay-section-backdrop.horizontal-bottom > .ba-overlay-section > .ba-section { width: 100% !important;}/* Overlay Section Horizontal Bottom */.ba-overlay-section-backdrop.horizontal-bottom { align-items: flex-end; justify-content: start;}.ba-overlay-section-backdrop.horizontal-bottom > .ba-overlay-section { transform: translateY(100%);}@media (-ms-high-contrast: active), (-ms-high-contrast: none){ .ba-overlay-section-backdrop.horizontal-bottom > .ba-overlay-section { margin-right: calc(0px - (100vw - 100%)); overflow-y: scroll; width: calc(100vw + (100vw - 100%))!important; }}@-moz-document url-prefix() { .ba-overlay-section-backdrop.horizontal-bottom > .ba-overlay-section { margin-right: calc(0px - (100vw - 100%)); overflow-y: scroll; width: calc(100vw + (100vw - 100%))!important; }}.ba-store-wishlist-backdrop,.ba-store-cart-backdrop,.ba-overlay-section-backdrop,.ba-lightbox-backdrop.lightbox-center { align-items: center; bottom: 0; box-sizing: border-box; display: flex; justify-content: center; left: 0; min-height: 100vh; opacity: 0; overflow: hidden; overflow-x: hidden; position: fixed; padding: 25px; right: 0; top: 0; transition: none; visibility: hidden; z-index: 99999999;}.ba-lightbox-backdrop.lightbox-center { padding: 50px 0; overflow-y: auto; right: -17px; }.ba-store-wishlist-backdrop,.ba-store-cart-backdrop { padding: 0;}.ba-store-wishlist-backdrop-out,.ba-store-cart-backdrop-out,.ba-overlay-section-backdrop.overlay-section-backdrop-out,.ba-lightbox-backdrop.lightbox-center.overlay-section-backdrop-out { transition: opacity .3s ease-in-out, visibility .1s .3s, left .1s .3s;}.ba-overlay-section-backdrop.lightbox:not(.visible-section).overlay-section-backdrop-out { left: 0!important; right: 0!important; transition: opacity .3s ease-in-out, visibility .1s .3s !important;}.ba-store-wishlist-backdrop,.ba-store-cart-backdrop,.ba-overlay-section-backdrop { align-items: baseline;}.ba-store-wishlist-opened .ba-store-wishlist-backdrop,.ba-store-cart-opened .ba-store-cart-backdrop,.lightbox-open .ba-lightbox-backdrop,.lightbox-open .ba-overlay-section-backdrop.visible-section { font-size: initial; letter-spacing: initial; line-height: initial; overflow: scroll; overflow-x: hidden;}.lightbox-open .ba-section:has(.row-with-intro-items) > .ba-overlay { z-index: 0;}.ba-not-default-header.ba-store-cart-opened .header,.ba-not-default-header.ba-store-wishlist-opened .header,.ba-store-wishlist-opened,.ba-store-cart-opened { width: calc(100% - var(--body-scroll-width));}.ba-wrapper.ba-lightbox.ba-container.sortabale-parent-node:before { bottom: 0; content: ""; cursor: move; left: 0; overflow: auto; position: absolute; right: 0; top: 0; z-index: 30;}.ba-store-wishlist-backdrop.ba-visible-store-wishlist,.ba-store-cart-backdrop.ba-visible-store-cart,.ba-overlay-section-backdrop.visible-section,.ba-lightbox-backdrop.visible-lightbox { font-size: initial; letter-spacing: initial; line-height: initial; opacity: 1; transition: opacity .3s ease-in-out; visibility: visible;}.ba-store-wishlist-backdrop.ba-visible-store-wishlist .ba-wishlist-checkout-row[data-exists="0"] { cursor: not-allowed;}.ba-store-wishlist-backdrop.ba-visible-store-wishlist .ba-wishlist-checkout-row[data-exists="0"] .ba-wishlist-add-all-btn { opacity: .25; pointer-events: none;}.ba-overlay-section-backdrop.lightbox:not(.visible-section) { left: 100% !important; pointer-events: none!important; right: auto!important;}.ba-overlay-section-backdrop .ba-overlay-section,.ba-lightbox-backdrop .ba-lightbox { margin: auto 0;}.ba-store-wishlist-close-wrapper,.ba-store-cart-close-wrapper,.close-overlay-section,.close-lightbox { height: 0; left: 15px; position: absolute; right: 10px; top: 0; z-index: 100;}.ba-store-wishlist-close-wrapper i,.ba-store-cart-close-wrapper i,.close-overlay-section i,.close-lightbox i { color: inherit; cursor: pointer; font-size: 2.25rem; margin-top: 10px;}.ba-store-wishlist-close-wrapper i,.ba-store-cart-close-wrapper i { color: var(--title);}.close-overlay-section i:hover,.close-lightbox i:hover,.ba-close-checkout-modal:hover,.ba-store-wishlist-close-wrapper i:hover,.ba-store-cart-close-wrapper i:hover,.ba-cart-product-quantity-cell i:hover { opacity: .5;}.ba-store-wishlist-backdrop > .ba-store-wishlist-close,.ba-modal-sm + .modal-backdrop,.ba-store-cart-backdrop > .ba-store-cart-close,.ba-overlay-section-backdrop > .ba-overlay-section-close,.ba-lightbox-backdrop > .ba-lightbox-close { bottom: 0; left: 0; position: fixed; right: 0; top: 0;}.ba-modal-sm + .modal-backdrop { background-color: var(--overlay); opacity: .05 !important; z-index: 999999 !important;}.ba-lightbox-backdrop:not(.visible-lightbox) .ba-lightbox,.ba-lightbox-backdrop:not(.visible-lightbox) .ba-cookies,.ba-overlay-section-backdrop.lightbox { left: 100% ;}/*/* Blog Plugin Search*/.ba-item-store-search,.ba-item-search { --shadow-horizontal: 0; --shadow-vertical: 0; --shadow-blur: 0; --shadow-spread: 0px; --shadow-color: rgba(0, 0, 0, 0);}.ba-item-store-search .ba-search-wrapper,.ba-item-search .ba-search-wrapper { align-items: center; box-sizing: border-box; box-shadow: var(--shadow-horizontal) var(--shadow-vertical) var(--shadow-blur) var(--shadow-spread) var(--shadow-color); display: inline-flex; width: 100%;}.ba-item-store-search .ba-search-wrapper:not(.after),.ba-item-search .ba-search-wrapper:not(.after) { flex-direction: row-reverse;}.ba-item-store-search .ba-search-wrapper input,.ba-item-search .ba-search-wrapper input { background: transparent !important; border: none !important; height: auto; margin: 0; outline: none !important; padding: 0; width: 100%;}.ba-item-store-search .ba-search-wrapper i,.ba-item-search .ba-search-wrapper i { pointer-events: none; margin: 0 10px;}.search-started .ba-item-search-result { opacity: 0;}.ba-search-wrapper input::placeholder { opacity: .5;}.ba-item-store-search-result .ba-blog-posts-wrapper p,.ba-item-search-result .ba-blog-posts-wrapper p { margin: 0 10px; }/* /* Live Search */.ba-live-search-results { background-color: #fff; border-radius: 6px; border: none; box-shadow: 0 25px 40px rgba(0,0,0,.15); box-sizing: border-box; display: none; left: var(--input-left); margin-left: 0; min-width: 700px; opacity: 0; overflow: hidden; padding: 0; position: absolute; top: var(--input-bottom); width: var(--input-width); z-index: 999999999 !important;}.ba-live-search-results .ba-live-search-body { box-sizing: border-box; display: flex; flex-direction: column; height: calc(var(--live-search-height) - 100px); justify-content: flex-start; max-height: 550px; min-height: 80px; overflow-y: auto; padding: 25px; scrollbar-color: #464646 transparent; scrollbar-width: thin;}.ba-live-search-show-all-btn { align-items: center; background: var(--primary) !important; color: #fff !important; cursor: pointer; display: flex; font-size: .875rem; font-weight: bold; justify-content: center; padding: 15px; transition: .3s;}@keyframes loading-spin { from { transform: rotate(0); } to { transform: rotate(360deg); }}.live-search-loading-data i { animation: loading-spin 1s linear infinite;}.live-search-loading-data i:before { content: '\\f1b9'; font-family: 'balbooa-family';}.live-search-data-loaded i { pointer-events: all !important; cursor: pointer;}.live-search-data-loaded i:before { content: '\\e04a'; font-family: 'balbooa-family';}.ba-live-search-product-title-cell { flex-grow: 1;}.ba-live-search-product-title-cell { padding-left: 15px;}.ba-live-search-product-row:first-child { padding-top: 0;}.ba-live-search-product-row:last-child { padding-bottom: 0;}.ba-live-search-product-price-cell { white-space: nowrap;}.ba-live-search-product-price-cell { white-space: nowrap;}.ba-live-search-product-row:first-child { padding-top: 0;}.ba-live-search-product-row:last-child { padding-bottom: 0;}.ba-live-search-body{ min-height: 255px;}.ba-live-search-product-price-cell { width: 80px;}@keyframes visible-live-search { from {transform: translateY(20px); opacity: 0;} to {transform: translateY(0);opacity: 1;}}.ba-live-search-results.visible-live-search-results { animation: visible-live-search .3s cubic-bezier(0.4,0,0.2,1) both;}@keyframes live-search-out { from {transform: translateY(0);opacity: 1;} to {transform: translateY(20px); opacity: 0;}}.ba-live-search-results.ba-live-search-out { animation: live-search-out .3s cubic-bezier(0.4,0,0.2,1) both;}.ba-live-search-results.ba-live-search-out,.ba-live-search-results.visible-live-search-results { animation: modal-sm-in .3s cubic-bezier(0.4,0,0.2,1) both; backface-visibility: hidden; display: block; line-height: initial;}.ba-wishlist-attachment,.ba-checkout-order-product-content-inner-cell + .ba-checkout-order-product-extra-options,.ba-live-search-product-content-inner-cell + .ba-live-search-product-content-inner-cell,.ba-wishlist-product-content-inner-cell + .ba-wishlist-product-extra-options,.ba-cart-product-content-inner-cell + .ba-cart-product-extra-options { margin-top: 20px;}.ba-wishlist-product-extra-options + .ba-wishlist-attachment{ margin-top: 0;}.ba-live-search-product-price-cell,.ba-store-cart-backdrop .ba-cart-product-price-cell { display: flex; flex-direction: column;}.ba-wishlist-product-price-cell { line-height: 3rem;}.ba-checkout-order-product-row,.ba-live-search-product-row,.ba-wishlist-product-row,.ba-cart-product-row { padding: 15px 0 ;}.ba-checkout-order-product-row:not(:last-child),.ba-live-search-product-row:not(:last-child),.ba-wishlist-product-row:not(:last-child),.ba-cart-product-row:not(:last-child) { border-bottom: 1px solid var(--border);}.ba-checkout-order-product-extra-option,.ba-checkout-order-product-row.row-fluid,.ba-checkout-order-product-content-inner-cell,.ba-live-search-product-content-inner-cell,.ba-live-search-product-row,.ba-wishlist-product-extra-option,.ba-wishlist-product-content-inner-cell,.ba-wishlist-product-row,.ba-cart-product-extra-option,.ba-cart-product-content-inner-cell,.ba-cart-product-row { align-items: flex-start; display: flex; }.ba-live-search-product-row[data-extra-count="0"],.ba-wishlist-product-row[data-extra-count="0"],.ba-cart-product-row[data-extra-count="0"] { align-items: center; }.ba-checkout-order-product-content-inner-cell,.ba-live-search-product-row,.ba-live-search-product-content-inner-cell,.ba-wishlist-product-content-inner-cell,.ba-cart-product-content-inner-cell { align-items: center;}.ba-checkout-order-product-content-cell,.ba-live-search-product-content-cell,.ba-wishlist-product-content-cell,.ba-cart-product-content-cell { align-items: center; display: flex; flex-wrap: wrap;}.ba-wishlist-attachment,.ba-checkout-order-product-extra-options-title,.ba-checkout-order-product-extra-options,.ba-checkout-order-product-extra-options-content,.ba-checkout-order-product-extra-option,.ba-checkout-order-product-extra-option-value,.ba-checkout-order-product-extra-options-title,.ba-checkout-order-product-content-inner-cell,.ba-live-search-product-content-inner-cell,.ba-wishlist-product-extra-options,.ba-wishlist-product-content-inner-cell,.ba-wishlist-product-extra-options-content,.ba-wishlist-product-extra-option,.ba-wishlist-product-extra-option-value,.ba-wishlist-product-extra-options-title,.ba-cart-product-extra-options,.ba-cart-product-content-inner-cell,.ba-cart-product-extra-options-content,.ba-cart-product-extra-option,.ba-cart-product-extra-option-value,.ba-cart-product-extra-options-title { width: 100%;}.ba-checkout-order-product-content-cell,.ba-live-search-product-content-cell,.ba-wishlist-product-content-cell,.ba-wishlist-product-extra-option-value,.ba-cart-product-extra-option-value,.ba-cart-product-content-cell { flex-grow: 1;}.ba-live-search-body,.ba-wishlist-products-list,.ba-cart-products-list { overflow: auto; padding: 0 50px; text-align: left;}.ba-live-search-results .ba-live-search-product-image-cell img,.ba-wishlist-product-image-cell img,.ba-checkout-order-product-image-cell img,.ba-cart-product-image-cell img { max-width: 75px; max-height: 75px;}.ba-live-search-results .ba-live-search-product-image-cell,.ba-wishlist-product-image-cell,.ba-cart-product-image-cell { position: relative;}.ba-live-search-results .ba-live-search-product-image-cell a,.ba-wishlist-product-image-cell a,.ba-cart-product-image-cell a { bottom: 0; left: 0; position: absolute; right: 0; top: 0;}.ba-empty-live-search,.ba-empty-cart-products-message,.ba-cart-product-row input[type="text"],.ba-cart-product-quantity-cell i,.ba-wishlist-price-wrapper,.ba-cart-price-wrapper { font-size: 1.125rem;}.ba-empty-live-search { align-items: center; display: flex; flex-grow: 1; font-size: .875rem; justify-content: center; text-align: center;}.ba-empty-live-search,.ba-empty-cart-products-message,.ba-cart-checkout-row.ba-cart-checkout-discount,.ba-wishlist-headline,.ba-cart-headline { line-height: 1.875rem;}.ba-checkout-order-form-section.ba-checkout-order-form-total-wrapper .ba-checkout-order-form-row-title > span,.ba-live-search-product-price-cell,.ba-live-search-price-wrapper,.ba-wishlist-sale-price-wrapper,.ba-cart-price-wrapper,.ba-cart-sale-price-wrapper,.ba-cart-product-title,.ba-wishlist-product-info,.ba-cart-product-info { line-height: normal;}.ba-live-search-sale-price-wrapper,.ba-cart-sale-price-wrapper,.ba-wishlist-sale-price-wrapper { text-decoration: line-through;}.ba-checkout-order-product-extra-options,.ba-wishlist-product-extra-options,.ba-cart-product-extra-options,.ba-live-search-product-title,.ba-checkout-order-product-title,.ba-wishlist-product-title,.ba-cart-product-title { display: flex;}.ba-checkout-order-product-info > span,.ba-live-search-price-currency,.ba-checkout-order-price-currency,.ba-cart-subtotal .store-currency-symbol,.ba-wishlist-price-currency,.ba-cart-price-currency,.ba-wishlist-product-info > span,.ba-cart-product-info > span { margin-right: 5px;}.ba-checkout-order-product-extra-options-title,.ba-checkout-order-product-extra-option-title,.ba-wishlist-product-extra-options-title,.ba-wishlist-product-extra-option-title,.ba-cart-product-extra-options-title,.ba-checkout-order-product-extra-option-title,.ba-wishlist-product-extra-option-title,.ba-cart-product-extra-option-title,.ba-empty-live-search,.ba-live-search-price-wrapper,.ba-live-search-product-title a,.ba-empty-cart-products-message,.ba-wishlist-checkout-title,.ba-cart-checkout-title,.ba-cart-product-title,.ba-wishlist-product-title a,.ba-cart-product-title a,.ba-wishlist-price-wrapper,.ba-cart-price-wrapper { color: var(--title); font-weight: bold;}.ba-live-search-product-price-cell,.ba-live-search-product-title a,.ba-live-search-price-wrapper,.ba-wishlist-product-title a,.ba-store-cart .ba-cart-product-title a { font-size: 1rem;}.ba-live-search-product-title a,.ba-wishlist-product-title a,.ba-store-cart .ba-cart-product-title a { color: var(--title); transition: opacity .3s;}.ba-live-search-product-category a:hover,.ba-live-search-product-category a { font-size: .875rem; color: var(--subtitle); transition: opacity .3s;}.ba-live-search-product-category a:hover,.ba-live-search-product-title a:hover,.ba-wishlist-product-title a:hover,.ba-store-cart .ba-cart-product-title a:hover { opacity: .5;}.ba-live-search-results .ba-live-search-product-image-cell,.ba-wishlist-product-image-cell,.ba-checkout-order-product-image-cell,.ba-cart-product-image-cell { align-items: center; display: flex; justify-content: center; margin-right: 10px; max-width: 85px; min-height: 75px; min-width: 85px;}.ba-live-search-product-title-cell,.ba-cart-product-title-cell { flex-grow: 1; width: 225px;}.ba-live-search-add-to-cart-cell > span:hover,.ba-wishlist-add-to-cart-cell > span:not(.ba-wishlist-empty-stock):hover,.ba-cart-checkout-row.ba-cart-checkout-promo-code .ba-cart-apply-promo-code:hover,.ba-wishlist-add-all-btn:hover,.ba-cart-checkout-btn:hover { background-color: var(--hover); color: var(--title-inverse);}.ba-live-search-show-all-btn:hover,.ba-live-search-add-to-cart-btn:hover,.ba-wishlist-add-to-cart-cell > span:not(.ba-wishlist-empty-stock):hover { background-color: var(--hover) !important;}.ba-live-search-results .ba-live-search-body::-webkit-scrollbar,.ba-wishlist-products-list::-webkit-scrollbar,.ba-cart-products-list::-webkit-scrollbar { width: 6px;}.ba-live-search-results .ba-live-search-body::-webkit-scrollbar-thumb,.ba-wishlist-products-list::-webkit-scrollbar-thumb,.ba-cart-products-list::-webkit-scrollbar-thumb { background: #ddd; border-radius: 6px;}.ba-cart-products-list { scrollbar-width: thin; scrollbar-color: #464646 transparent;}.ba-wishlist-attachment .post-intro-image { background-position: center; background-size: cover; border-radius: 3px; box-sizing: border-box; display: inline-block; height: 50px; margin: 0 15px 0 0; min-width: 50px; vertical-align: middle; width: 50px;}.ba-wishlist-attachment .attachment-title { color: var(--text); font-size: .75rem; line-height: 1.5rem;}.ba-wishlist-attachment { display: flex; align-items: center;}.ba-wishlist-attachment i { font-size: 1.5rem; margin-right: 10px; pointer-events: none; transition: all .3s;}/*/* Plugin Tabs*/.ba-item-tabs { position: relative;}.nav-tabs > li > a { border: 1px solid transparent;}.ba-tabs-wrapper .nav-tabs { border: none; display: flex; flex-flow: row wrap; justify-content: flex-start; margin: 0; overflow: hidden; padding: 0;}@media (-ms-high-contrast: active), (-ms-high-contrast: none){ .ba-tabs-wrapper.tabs-top .nav-tabs { display: block !important; }}.ba-tabs-wrapper .nav-tabs li { display: flex; margin: 0;}.ba-tabs-wrapper.tabs-top .nav-tabs li { display: inline-block; flex: 1;}.ba-tabs-wrapper .nav-tabs li a { border-radius: 0; box-sizing: border-box; display: flex; flex-direction: column; height: 100%; justify-content: center; margin: 0; outline-offset: -2px; padding: 20px; position: relative;}.ba-tabs-wrapper .nav-tabs li a,.ba-tabs-wrapper .nav-tabs li a:focus,.ba-tabs-wrapper .nav-tabs li a:hover { background-color: transparent;}.ba-tabs-wrapper.icon-position-top li a > span { display: inline-flex;}.ba-tabs-wrapper .nav-tabs li a:before { content: ""; position: absolute;}.ba-tabs-wrapper.tabs-top li a:before { height: 0; left: 0; right: 0; bottom: -1px; transition: height .3s;}.ba-tabs-wrapper.tabs-top li.active a:before { height: 4px;}.ba-tabs-wrapper.tabs-top li { border-color: inherit;}.ba-tabs-wrapper.tabs-top li a:focus,.ba-tabs-wrapper.tabs-top li a:hover,.ba-tabs-wrapper.tabs-top li a { border-width: 0; border-bottom-width: 1px; border-color: inherit;}.ba-tabs-wrapper.tabs-top li a > span { align-items: center;}.ba-tabs-wrapper li a > span > span { direction: ltr; word-break: break-word;}.ba-item-tabs .ba-tabs-wrapper .tab-content { box-sizing: border-box;}/* Tabs Left Position */.ba-tabs-wrapper.tabs-left,.ba-tabs-wrapper.tabs-right { display: flex; height: auto; width: auto;}.ba-tabs-wrapper.tabs-right > .nav-tabs,.ba-tabs-wrapper.tabs-left > .nav-tabs { flex-direction: column; width: 25%; position: relative;}.nav-tabs:before,.nav-tabs:after { display: table; content: ""; line-height: 0;}.ba-tabs-wrapper.tabs-right > .nav-tabs:before ,.ba-tabs-wrapper.tabs-left > .nav-tabs:before { border-left: 1px solid; border-color: inherit; bottom: 0; height: 100%; position: absolute; display: block; right: 0; top: 0; width: 1px;}.ba-tabs-wrapper.tabs-right .nav-tabs:before { left: 0; right: auto;}.ba-tabs-wrapper.tabs-right > .nav-tabs li,.ba-tabs-wrapper.tabs-left > .nav-tabs li { flex-direction: column;}.ba-tabs-wrapper.tabs-right > .nav-tabs li a,.ba-tabs-wrapper.tabs-left > .nav-tabs li a { align-items: center; display: flex; flex-grow: 1;}.ba-tabs-wrapper .tab-pane .ba-row-wrapper { width: 100%;}.ba-tabs-wrapper.tabs-left > .nav-tabs li:last-child.active a,.ba-tabs-wrapper.tabs-left > .nav-tabs li:last-child.active a:hover,.ba-tabs-wrapper.tabs-left > .nav-tabs li:last-child.active a:focus,.ba-tabs-wrapper.tabs-right > .nav-tabs li:last-child.active a,.ba-tabs-wrapper.tabs-right > .nav-tabs li:last-child.active a:hover,.ba-tabs-wrapper.tabs-right > .nav-tabs li:last-child.active a:focus,.ba-tabs-wrapper.tabs-right > .nav-tabs li a,.ba-tabs-wrapper.tabs-right > .nav-tabs li a:hover,.ba-tabs-wrapper.tabs-right > .nav-tabs li a:focus,.ba-tabs-wrapper.tabs-left > .nav-tabs li a:hover,.ba-tabs-wrapper.tabs-left > .nav-tabs li a:focus,.ba-tabs-wrapper.tabs-left > .nav-tabs li a { border-width: 0; border-right-width: 1px;}.ba-tabs-wrapper.tabs-right > .nav-tabs li a:before,.ba-tabs-wrapper.tabs-left > .nav-tabs li a:before { bottom: 0; right: -1px; top: 0; transition: width .3s; width: 0;}.ba-tabs-wrapper.tabs-left > .nav-tabs li.active a:before,.ba-tabs-wrapper.tabs-right > .nav-tabs li.active a:before { width: 4px;}.ba-tabs-wrapper.tabs-right.icon-position-left > .nav-tabs li a > span,.ba-tabs-wrapper.tabs-left.icon-position-left > .nav-tabs li a > span { display: inline-block; direction: rtl;}/* Tabs Right Position */.ba-tabs-wrapper.tabs-right { flex-direction: row-reverse;}.ba-tabs-wrapper.tabs-right li a:focus,.ba-tabs-wrapper.tabs-right li a:hover,.ba-tabs-wrapper.tabs-right li a { border-left-width: 1px; border-right-width: 0px !important;}.ba-tabs-wrapper.tabs-right li a:before { right: auto; left: -1px;}/*/* Tabs Icon Position*//* Tabs Icon Top Position */.icon-position-top .nav-tabs i { display: block; order: 1; margin: 10px 0;}/* Tabs Icon left Position */.ba-tabs-wrapper.icon-position-left > .nav-tabs li a span.tabs-title { display: inline-block; direction: ltr;}/* Tabs Fade Animation */.ba-item-tabs .tab-content .tab-pane.active { animation: tabs-fade .7s ease-in-out;}@keyframes tabs-fade { 0%{opacity: 0;} 100%{opacity: 1;}}/* Tab Animation */.active.left,.active.right,.out-left,.out-right { display: inline-block !important; box-sizing: border-box; overflow: auto; position: absolute; width: 480px;}@keyframes active-tab-left { from { transform: translateX(-100%);}}.active.left { animation: active-tab-left .5s cubic-bezier(.55,.085,.68,.53);}@keyframes active-tab-right { from { transform: translateX(100%);}}.active.right { animation: active-tab-right .5s cubic-bezier(.55,.085,.68,.53);}@keyframes out-right { to { transform: translateX(100%);}}.out-right { animation: out-right .5s cubic-bezier(.55,.085,.68,.53);}@keyframes out-left { to { transform: translateX(-100%);}}.out-left { animation: out-left .5s cubic-bezier(.55,.085,.68,.53) both;}.accordion-heading > a i,.ba-tabs-wrapper .nav-tabs li a i { color: inherit; line-height: 1em; margin: 0 10px; text-align: inherit; vertical-align: middle;}/*/* Plugin Social Sharing*/.ba-item-social { text-align: center;}.ba-social-classic > div:hover { background: #fafafa;}.ba-social > div { align-items: center; border-radius: .1875rem; cursor: pointer; display: inline-flex; justify-content: flex-start; margin: .3125rem .625rem .3125rem .625rem; overflow: hidden; white-space: nowrap;}.ba-social .social-button { color: #fff; display: inline-block; font-style: initial; font-weight: bold; text-align: left; text-transform: initial;}.ba-social-sidebar .social-button { border: 1px solid transparent; padding-left: 0;}.ba-social.ba-social-sm div { line-height: 1.375rem;}.ba-social.ba-social-sm .social-counter { width: 1.375rem;}.ba-social.ba-social-sm { font-size: .75rem;}.ba-social.ba-social-md div { line-height: 2.125rem;}.ba-social.ba-social-md .social-counter { width: 2.125rem;}.ba-social.ba-social-md { font-size: .9375rem;}.ba-social.ba-social-lg div { line-height: 2.75rem;}.ba-social.ba-social-lg .social-counter { width: 2.75rem;}.ba-social.ba-social-lg { font-size: 1.125rem;}.ba-social.ba-social-sm .social-button { min-width: 9.375rem;}.ba-social.ba-social-md .social-button { min-width: 12.5rem;}.ba-social.ba-social-lg .social-button { min-width: 15.625rem;}.ba-social.ba-social-md .social-button,.ba-social.ba-social-lg .social-button { font-size: .875rem;}.ba-social-sidebar .ba-social .social-button { border: none;}.ba-social .social-button i { color: #fff; text-align: center; vertical-align: middle; width: 1em;}.ba-social.ba-social-sm .social-button i { font-size: 1rem; padding: .9375rem;}.ba-social.ba-social-md .social-button i { font-size: 1.125rem; padding: .9375rem;}.ba-social.ba-social-lg .social-button i { font-size: 1.3125rem; padding: 1.25rem;}.social-counter { border-radius: 50%; color: #fff; display: inline-block; font-family: 'Roboto', sans-serif; font-size: .625rem; font-style: initial; font-weight: bold; margin-right: .9375rem; position: relative; text-transform: initial;}.ba-social.ba-social-sm .social-counter { font-size: .625rem;}/* Minimal */.ba-social-minimal.ba-social > div { margin: 0; overflow: visible; position: relative;}.ba-social-minimal .social-button i { color: var(--icon);}.ba-social-minimal.ba-social.ba-social-md .social-button i,.ba-social-minimal.ba-social.ba-social-sm .social-button i,.ba-social-minimal.ba-social.ba-social-lg .social-button i { border-radius: .1875rem; transition: .3s;}.ba-social-minimal.ba-social.ba-social-md .social-button,.ba-social-minimal.ba-social.ba-social-sm .social-button,.ba-social-minimal.ba-social.ba-social-lg .social-button { height: auto; min-width: auto;}.ba-social-minimal.ba-social.ba-social-sm .social-button { width: 2.75rem;}.ba-social-minimal.ba-social.ba-social-md .social-button { width: 3.8125rem;}.ba-social-minimal.ba-social.ba-social-lg .social-button { width: 4.875rem;}.ba-social-minimal .social-counter { font-size: .625rem; height: 1rem; line-height: 1.0625rem; margin: 0; position: absolute; right: -.1875rem; top: .0625rem; width: 1rem !important;}.ba-social-minimal.ba-social.ba-social-sm .social-counter { right: .0625rem; top: .0625rem;}.ba-social-minimal.ba-social.ba-social-md .social-counter { right: .3125rem; top: .3125rem;}.ba-social-minimal.ba-social.ba-social-lg .social-counter { right: .4375rem; top: .4375rem;}.ba-social-minimal.ba-social.ba-social-sm .social-button i { font-size: .875rem; padding: .9375rem;}.ba-social-minimal.ba-social.ba-social-md .social-button i { font-size: 1.3125rem; padding: 1.25rem;}.ba-social-minimal.ba-social.ba-social-lg .social-button i { font-size: 1.75rem; padding: 1.5625rem;}/* Flat */.ba-social-flat > div { border: none;}.ba-social-flat.ba-social .social-counter,.ba-social-flat.ba-social .social-button i { background: rgba(0, 0, 0, 0.25);}.ba-social-classic .social-button i,.ba-social-flat.ba-social .social-button i { margin-right: 1.25rem;}.ba-social-minimal.ba-social .social-button i:hover { color: #fff;}.ba-social-circle .vk .social-button,.ba-social-classic .vk .social-button i,.ba-social-minimal .vk .social-counter,.ba-social-minimal.ba-social .vk .social-button i:hover,.ba-social-flat.ba-social .vk { background: #5b7aa8;}.ba-social-circle .facebook .social-button,.ba-social-classic .facebook .social-button i,.ba-social-minimal .facebook .social-counter,.ba-social-minimal.ba-social .facebook .social-button i:hover,.ba-social-flat.ba-social .facebook { background: #3b5998;}.ba-social-minimal.ba-social .twitter .social-button i:hover,.ba-social-minimal .twitter .social-counter,.ba-social-classic .twitter .social-button i,.ba-social-circle .twitter .social-button,.ba-social-flat.ba-social .twitter { background: #000000;}.ba-social-circle .linkedin .social-button,.ba-social-classic .linkedin .social-button i,.ba-social-minimal .linkedin .social-counter,.ba-social-minimal.ba-social .linkedin .social-button i:hover,.ba-social-flat.ba-social .linkedin { background: #0077B5;}.ba-social-circle .pinterest .social-button,.ba-social-classic .pinterest .social-button i,.ba-social-minimal .pinterest .social-counter,.ba-social-minimal.ba-social .pinterest .social-button i:hover,.ba-social-flat.ba-social .pinterest { background: #cb2027;}.ba-item-social:not(.ba-social-sidebar) .ba-social-classic div:hover .social-button i:before,.ba-item-social:not(.ba-social-sidebar) .ba-social-flat.ba-social div:hover .social-button i:before { animation: social-button-to-right .3s forwards; display: block;}@keyframes social-button-to-right { 49% {transform: translate(100%);} 50% {opacity: 0;transform: translate(-100%);} 51% {opacity: 1;}}.ba-social-circle div:hover .social-button i:before { animation: social-button-to-bottom .3s forwards; display: block;}@keyframes social-button-to-bottom { 49% {transform: translateY(100%);} 50% {opacity: 0;transform: translateY(-100%);} 51% {opacity: 1;}}/* Classic */.ba-social-classic > div { background: var(--bg-secondary);}.ba-social-classic .social-button { color: #000;}.ba-social-classic .social-counter { background: rgba(0, 0, 0, 0.05); color: #000;}/* Social Circle */.ba-social-circle.ba-social > div { display: inline-block; line-height: normal; position: relative; vertical-align: top;}.ba-social-minimal .social-button,.ba-social-circle .social-button { color: transparent; display: block; overflow: hidden; padding: 0; width: 0;}.ba-social-circle .social-button i { border-radius: 50%; position: absolute; vertical-align: middle;}.ba-social-circle .social-counter { background-color: transparent; color: #333; margin: 0;}.ba-social-circle.ba-social .social-button { align-items: center; border-radius: 50%; box-sizing: border-box; display: flex; justify-content: center; margin: 0 auto;}.ba-social-sidebar .ba-social-circle.ba-social .social-button { border-width: 0; margin: .1875rem 0; padding: .3125rem .625rem;}.ba-social-sidebar .ba-social-circle { margin-top: .0625rem;}.ba-social-circle.ba-social .social-button i { font-size: 1rem !important; margin: 0;}.ba-social-circle.ba-social.ba-social-sm .social-button { height: 3.4375rem; min-width: 3.4375rem;}.ba-social-circle.ba-social.ba-social-md .social-button { height: 4.0625rem; min-width: 4.0625rem;}.ba-social-circle.ba-social.ba-social-lg .social-button { height: 4.6875rem; min-width: 4.6875rem;}.ba-social-circle.ba-social.ba-social-md .social-counter,.ba-social-circle.ba-social.ba-social-sm .social-counter,.ba-social-circle.ba-social.ba-social-lg .social-counter { font-size: .875rem; font-weight: bold; line-height: 2.25rem;}.ba-social-sidebar .ba-social-circle.ba-social .social-counter { padding: 0;}.ba-social-circle .social-counter:before,.ba-social-circle .social-counter:after { display: none;}.ba-social-sidebar .ba-social.ba-social-circle > div { max-width: none; min-width: auto;}.ba-social-sidebar .ba-social.ba-social-circle .social-counter { bottom: .625rem; color: #fff; font-size: .625rem; left: 50%; line-height: normal !important; position: absolute; transform: translateX(-50%);}/* Social Sidebar */.ba-social-sidebar { left: 100% !important; min-height: 3.125rem; position: fixed !important; top: 50% !important; transition: opacity .3s linear; z-index: 10000;}.ba-opened-menu .ba-social-sidebar { z-index: 5;}.ba-social-sidebar[data-size="ba-social-lg"][data-style="ba-social-minimal"] { transform: translateY(calc((-4.625rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-md"][data-style="ba-social-minimal"] { transform: translateY(calc((-3.875rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-sm"][data-style="ba-social-minimal"] { transform: translateY(calc((-3.6875rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-lg"][data-style="ba-social-flat"] { transform: translateY(calc((-4.625rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-md"][data-style="ba-social-flat"] { transform: translateY(calc((-3.875rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-sm"][data-style="ba-social-flat"] { transform: translateY(calc((-3.6875rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-lg"][data-style="ba-social-classic"] { transform: translateY(calc((-4.4375rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-md"][data-style="ba-social-classic"] { transform: translateY(calc((-3.625rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-sm"][data-style="ba-social-classic"] { transform: translateY(calc((-3.5rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-lg"][data-style="ba-social-circle"] { transform: translateY(calc((-5.75rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-md"][data-style="ba-social-circle"] { transform: translateY(calc((-5.125rem/2) * var(--social-count))) translateX(-100%);}.ba-social-sidebar[data-size="ba-social-sm"][data-style="ba-social-circle"] { transform: translateY(calc((-4.5rem/2) * var(--social-count))) translateX(-100%);}.lightbox-open .ba-social-sidebar { left: calc(100% - 1.0625rem) !important; opacity: 0; transition: opacity 0s linear;}.ba-social-sidebar .ba-social-lg > div,.ba-social-sidebar .ba-social-md > div,.ba-social-sidebar .ba-social-sm > div { max-width: 6.25rem;}.ba-social-sidebar .ba-social-classic { align-items: flex-end; display: flex; flex-direction: column;}.ba-social-sidebar .ba-social-classic > div { border-radius: 0;}.ba-social-sidebar .ba-social-classic .social-button { backface-visibility: hidden; border-width: 0;}.ba-social-sidebar .ba-social-lg:hover > div ,.ba-social-sidebar .ba-social-md:hover > div ,.ba-social-sidebar .ba-social-sm:hover > div { backface-visibility: hidden; max-width: 21.875rem;}.ba-social-sidebar .ba-social-minimal.ba-social-lg,.ba-social-sidebar .ba-social-minimal.ba-social-md,.ba-social-sidebar .ba-social-minimal.ba-social-sm { overflow: visible; text-align: center !important;}.ba-social-sidebar .ba-social-lg,.ba-social-sidebar .ba-social-md,.ba-social-sidebar .ba-social-sm { overflow: hidden; text-align: right !important;}.ba-social-sidebar .ba-social.ba-social-lg:not(.ba-social-circle):not(.ba-social-minimal) > div { transform: translateX(100%) translateX(-3.875rem);}.ba-social-sidebar .ba-social.ba-social-md:not(.ba-social-circle):not(.ba-social-minimal) > div { transform: translateX(100%) translateX(-3.0625rem);}.ba-social-sidebar .ba-social.ba-social-sm:not(.ba-social-circle):not(.ba-social-minimal) > div { transform: translateX(100%) translateX(-2.9375rem);}.ba-social-sidebar .ba-social.ba-social-sm:not(.ba-social-circle):not(.ba-social-minimal) > div:hover,.ba-social-sidebar .ba-social.ba-social-md:not(.ba-social-circle):not(.ba-social-minimal) > div:hover,.ba-social-sidebar .ba-social.ba-social-lg:not(.ba-social-circle):not(.ba-social-minimal) > div:hover { transform: translateX(.0625rem);}.ba-social-sidebar .ba-social > div { display: inline-block; margin: 0; text-align: center; transition: transform .3s linear;}.ba-social-sidebar .ba-social .social-counter { text-align: center;}/*/* Plugin Social Icons*/.ba-item-social-icons .ba-icon-wrapper a { display: inline-block; vertical-align: middle; margin-bottom: 5px;}.ba-item-social-icons .ba-icon-wrapper a:not(:last-child){ margin-right: 5px;}.ba-item-social-icons .ba-icon-wrapper i { text-align: center; box-shadow: none;}/*/* Main menu*/.main-menu > .add-new-item,.close-menu,.open-menu { display: none;}.mod-menu__sub,.nav-child { transition: all .5s ease;}.nav { margin: 0;}.main-menu .nav { font-size: 0; letter-spacing: 0; line-height: 0; list-style: none; margin-bottom: 0; padding-left: 0;}.main-menu .nav > li { display: inline-block; float: none; overflow: visible; text-decoration: none;}.vertical-menu .main-menu .nav > li { overflow: visible;}.main-menu .nav > li > a,.main-menu .nav > li > span { background: transparent; display: block;}.main-menu .nav > li > a:hover,.main-menu .nav > li > a:focus { background: transparent;}.mod-menu__sub,.nav-child { padding: 0; width: 250px;}li.deeper > span i.ba-icon-caret-right,li.deeper > a i.ba-icon-caret-right { color: inherit; font-size: inherit; line-height: inherit; padding: 0 5px;}.vertical-menu li.deeper > span i.ba-icon-caret-right,.vertical-menu li.deeper > a i.ba-icon-caret-right,.nav > li li.deeper > span i.ba-icon-caret-right,.nav > li li.deeper > a i.ba-icon-caret-right { float: right;}@-moz-document url-prefix() { .nav li.deeper > span i.ba-icon-caret-right, .nav li.deeper > a i.ba-icon-caret-right { float: right; } li.deeper > span i.ba-icon-caret-right, li.deeper > a i.ba-icon-caret-right { display: block; float: none; position: static; text-align: right; }}.deeper.parent > .mod-menu__sub,.deeper.parent > .nav-child { display: none;}.nav > .deeper.parent > .mod-menu__sub,.nav > .deeper.parent > .nav-child { padding: 0; position: absolute; z-index: 20;}.mod-menu__sub li > span,.mod-menu__sub li > a,.nav-child li > span,.nav-child li > a { display: block; padding: 10px 20px;}.mod-menu__sub > .deeper,.nav-child > .deeper { position: relative;}.mod-menu__sub li,.nav-child li { text-decoration: none; list-style: none;}.mod-menu__sub > .deeper > .mod-menu__sub.show-menu,.nav-child > .deeper > .nav-child.show-menu,.mod-menu__sub > .deeper > .mod-menu__sub.show-menu,.nav-child > .deeper > .nav-child.show-menu,.mod-menu__sub > .deeper:hover > .mod-menu__sub,.nav-child > .deeper:hover > .nav-child { left: 100%; position: absolute; top: 0px;}.mod-menu__sub > .deeper > .mod-menu__sub.show-menu,.nav-child > .deeper > .nav-child.show-menu,.nav > .deeper.parent > .mod-menu__sub.show-menu, .nav > .deeper.parent > .nav-child.show-menu,.nav li > .tabs-content-wrapper .ba-section { box-sizing: border-box !important;}.nav li.deeper > .mod-menu__sub.show-menu, .nav li.deeper > .nav-child.show-menu,.nav li > .tabs-content-wrapper.show-menu,.megamenu-editing.megamenu-item > .tabs-content-wrapper .ba-section,.nav li.deeper:hover > .mod-menu__sub, .nav li:hover > .tabs-content-wrapper .ba-section, .nav li.deeper:hover > .nav-child { animation-fill-mode: none; animation-delay: 0s; box-sizing: border-box; display: block;}.megamenu-item.megamenu-editing >.tabs-content-wrapper,.megamenu-item:hover >.tabs-content-wrapper, .megamenu-item > .tabs-content-wrapper.show-menu, .deeper.parent > .show-menu { display: block !important;}.megamenu-editing.megamenu-item > .tabs-content-wrapper .ba-section { box-sizing: border-box !important;}li.deeper >span,li.deeper > a { position: relative;}.ba-menu-backdrop { background-color: rgba(0,0,0, .1); bottom: 0; display: none; left: 0; position: fixed; right: 0; top: 0; z-index: 1;}.dropdown-left-direction { right: 0;}.child-dropdown-left-direction,.dropdown-left-direction ul { right: 100%; left: auto !important;}.dropdown-top-direction { transform: translateY(calc( 0px - var(--dropdown-top-diff) - 25px)); top: auto !important;}/* Menu With Icon */.ba-item-main-menu .nav li span i.ba-menu-item-icon,.ba-item-main-menu .nav li a i.ba-menu-item-icon,.menu li span i.ba-menu-item-icon,.menu li a i.ba-menu-item-icon { color: inherit; line-height: 0; margin-right: 10px; text-align: center; vertical-align: middle; width: 1em;}/* Megamenu */.megamenu-item .ba-section { max-width: 100%;}.megamenu-item > .mod-menu__sub,.ba-menu-wrapper > .tabs-content-wrapper,.megamenu-item > .tabs-content-wrapper,.megamenu-item > .nav-child { display: none !important; z-index: 999;}.row-with-megamenu .megamenu-editing.megamenu-item > .tabs-content-wrapper,.megamenu-item:hover >.tabs-content-wrapper,.megamenu-item >.tabs-content-wrapper.show-menu, { display: block !important;}.megamenu-item >.tabs-content-wrapper { position: absolute; top: 100%;}.vertical-menu .megamenu-item >.tabs-content-wrapper.ba-container { top: 0;}.megamenu-item >.tabs-content-wrapper:not(.ba-container) { max-width: none !important;}.megamenu-item >.tabs-content-wrapper:not(.ba-container) .ba-section { width: 100% !important;}.megamenu-item >.tabs-content-wrapper.ba-container:not(.megamenu-center) { margin: 0 !important;}.megamenu-item >.tabs-content-wrapper.ba-container { width: auto !important; max-width: none;}.mod-menu__sub > .megamenu-item .ba-icon-caret-right,.mod-menu__sub > .megamenu-item >.tabs-content-wrapper,.nav-child > .megamenu-item .ba-icon-caret-right,.nav-child > .megamenu-item >.tabs-content-wrapper { display: none !important;}.megamenu-item .ba-section { min-height: 50px;}/* Vertical layout menu */.vertical-menu .main-menu .nav > li { display: block; position: relative;}.vertical-menu .main-menu .nav > li.deeper.parent > .mod-menu__sub,.vertical-menu .megamenu-item > .tabs-content-wrapper.ba-container,.vertical-menu .main-menu .nav > li.deeper.parent > .nav-child { margin-left: 100% !important;}.vertical-menu .megamenu-item >.tabs-content-wrapper.ba-container.megamenu-center { padding: 0 !important; top: auto;}.vertical-menu .main-menu .nav > li.megamenu-item { align-items: center; display: flex;}.vertical-menu .main-menu .nav > li> span,.vertical-menu .main-menu .nav > li> a { width: 100%; box-sizing: border-box;}.vertical-menu .main-menu .nav > li .mod-menu__sub,.vertical-menu .main-menu .nav > li .nav-child { top: 0;}.megamenu-item > .tabs-content-wrapper { margin-left: calc(var(--menu-item-left-offset) * -1) !important;}.megamenu-item > .tabs-content-wrapper.ba-container { margin-left: 0 !important;}.megamenu-item > .tabs-content-wrapper.ba-container.megamenu-center { margin-left: calc(var(--menu-item-width) / 2 - var(--megamenu-width) / 2 - 50px) !important;}.ba-hamburger-menu >.main-menu .ba-overlay { z-index: -1;}.ba-menu-wrapper:not(.vertical-menu) .nav > li.deeper > span i.ba-icon-caret-right:before,.ba-menu-wrapper:not(.vertical-menu) .nav > li.deeper > a i.ba-icon-caret-right:before,.ba-menu-wrapper:not(.vertical-menu) .menu > li.deeper > span i.ba-icon-caret-right:before,.ba-menu-wrapper:not(.vertical-menu) .menu > li.deeper > a i.ba-icon-caret-right:before { display: block; transform: rotate(90deg);}.vertical-menu .nav > .megamenu-item > span:after,.vertical-menu .nav > .megamenu-item > a:after,.vertical-menu .nav > .deeper.parent > span:after,.vertical-menu .nav > .deeper.parent > a:after,.vertical-menu .menu > .megamenu-item > span:after,.vertical-menu .menu > .megamenu-item > a:after,.vertical-menu .menu > .deeper.parent > span:after,.vertical-menu .menu > .deeper.parent > a:after { transform: rotate(-90deg);}/* Collapsible Vertical Menu*/.collapsible-vertical-submenu.vertical-menu .main-menu .nav > li.deeper.parent > .mod-menu__sub,.collapsible-vertical-submenu.vertical-menu .main-menu .nav > .deeper.parent .mod-menu__sub,.collapsible-vertical-submenu.vertical-menu .main-menu .nav > .deeper.parent .nav-child, .collapsible-vertical-submenu.vertical-menu .main-menu .menu > .deeper.parent .mod-menu__sub, .collapsible-vertical-submenu.vertical-menu .main-menu .menu > .deeper.parent .nav-child { box-sizing: border-box; display: none!important; margin-left: 0 !important; margin-top: 0; position: static; transform: none !important; width: 100% !important;}@keyframes visible-nav-child { 0% {max-height: 0; overflow: hidden;opacity: 0;} 99%{max-height: 400vh; overflow: visible; opacity: 1;} 100%{max-height: 400vh; overflow: visible; opacity: 1;}}.collapsible-vertical-submenu.vertical-menu .main-menu .nav .deeper.parent:not(:hover) > .show-menu,.collapsible-vertical-submenu.vertical-menu .main-menu .menu .deeper.parent:not(:hover) > .show-menu,.collapsible-vertical-submenu.vertical-menu .main-menu .menu .deeper.parent.visible-nav-child >.mod-menu__sub, .collapsible-vertical-submenu.vertical-menu .main-menu .menu .deeper.parent.visible-nav-child > .nav-child,.collapsible-vertical-submenu.vertical-menu .main-menu .nav .deeper.parent.visible-nav-child > ul.mod-menu__sub, .collapsible-vertical-submenu.vertical-menu .main-menu .nav .deeper.parent.visible-nav-child > .tabs-content-wrapper, .collapsible-vertical-submenu.vertical-menu .main-menu .nav .deeper.parent.visible-nav-child > ul.nav-child { animation: visible-nav-child .5s linear both!important; display: block!important; overflow: visible;}.collapsible-vertical-submenu.vertical-menu .deeper.parent.hidden-nav-child > ul.mod-menu__sub, .collapsible-vertical-submenu.vertical-menu .deeper.parent.hidden-nav-child > .tabs-content-wrapper, .collapsible-vertical-submenu.vertical-menu .deeper.parent.hidden-nav-child > ul.nav-child,.collapsible-vertical-submenu.vertical-menu .deeper.parent:not(.visible-nav-child) > ul.mod-menu__sub, .collapsible-vertical-submenu.vertical-menu .deeper.parent:not(.visible-nav-child) > .tabs-content-wrapper, .collapsible-vertical-submenu.vertical-menu .deeper.parent:not(.visible-nav-child) > ul.nav-child { display: none!important;}.collapsible-vertical-submenu.vertical-menu .main-menu .nav .deeper.parent:not(:hover):has(.show-menu) > span i:not(.ba-menu-item-icon):before,.collapsible-vertical-submenu.vertical-menu .main-menu .nav .deeper.parent:not(:hover):has(.show-menu) > a i:not(.ba-menu-item-icon):before,.collapsible-vertical-submenu.vertical-menu .main-menu .menu .deeper.parent:not(:hover):has(.show-menu) > span i:not(.ba-menu-item-icon):before,.collapsible-vertical-submenu.vertical-menu .main-menu .menu .deeper.parent:not(:hover):has(.show-menu) > a i:not(.ba-menu-item-icon):before,.collapsible-vertical-submenu.vertical-menu .deeper.parent.visible-nav-child > span i:not(.ba-menu-item-icon):before, .collapsible-vertical-submenu.vertical-menu .deeper.parent.visible-nav-child > a i:not(.ba-menu-item-icon):before { transform: rotate(90deg);}.collapsible-vertical-submenu.vertical-menu .deeper.parent > span i:before, .collapsible-vertical-submenu.vertical-menu .deeper.parent > a i:before { align-items: center; display: inline-flex; justify-content: center; transition: all .15s linear; width: 1em;}/*/* Plugin Headline*/.ba-item-headline .headline-wrapper > * > span { display: inline-block; white-space: nowrap;}@keyframes notification-in { from {bottom: 0; transform: translateY(100%); opacity: 0;}}#system-message { animation: notification-in .4s cubic-bezier(.25,.98,.26,.99) both; border-radius: 6px; border: none; bottom: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); color: #fff; display: block; opacity: 1; overflow: hidden; padding: 0; position: fixed; right: 50px; text-shadow: none; visibility: visible; z-index: 1510;}#system-message-container .alert { background: #02adea; display: inline-block; padding: 40px 25px; width: 250px;}#system-message-container .alert.alert-warning,#system-message-container .alert.alert-danger,#system-message-container .alert.alert-error { background-color: #ff776f;;}#system-message .alert-heading { color: #fff; display: block; font-size: .875rem; font-weight: bold; letter-spacing: 0; line-height: 1rem; margin: 0 0 15px !important; text-align: left; text-decoration: none; text-transform: uppercase;}#system-message > div .alert-message { color: #fff; font-size: .875rem; font-weight: 500; line-height: 1.5rem; margin: 0; opacity: .6; word-break: break-word;}#system-message .alert:before,#system-message .close { color: #fff; opacity: 1; padding: 8px; position: absolute; right: 5px; text-shadow: none; top: 0; opacity: 0;}#system-message > .alert:before { content: '\\e04a'; display: inline-block; font: normal normal normal 24px/1 'balbooa-family'; opacity: 1; padding: 13px 10px;}/*/* Plugin Sticky Header*/.ba-sticky-header { display: none; position: fixed; top: 0;}.ba-sticky-header.visible-sticky-header { display: block; left: 0; max-width: 100%; right: 0; z-index: 45;}.ba-store-cart-opened .header:not(.sidebar-menu) .ba-sticky-header.visible-sticky-header,.ba-store-wishlist-opened .header:not(.sidebar-menu) .ba-sticky-header.visible-sticky-header { max-width: calc(100vw - var(--body-scroll-width));}.ba-store-cart-opened .sidebar-menu .ba-sticky-header.visible-sticky-header,.ba-store-wishlist-opened .sidebar-menu .ba-sticky-header.visible-sticky-header { max-width: calc(100vw - var(--sidebar-menu-width) - var(--body-scroll-width));}.sticky-header-opened .ba-sticky-header-parent { z-index: 999999 !important;}.sticky-header-opened .header.ba-sticky-header-parent { z-index: 9999999 !important;}.sticky-header-opened .ba-sticky-header-parent ~ .ba-comments-modal { z-index: 99999999;}/*/* Blog Plugin Tags*/.ba-item-tags .ba-button-wrapper a,.ba-item-post-tags .ba-button-wrapper a { margin: 0 5px 10px;}.ba-item-tags .ba-button-wrapper,.ba-item-post-tags .ba-button-wrapper { margin-left: -5px !important; margin-right: -5px !important; width: calc(100% + 10px) !important;}.content-text table { width: 100% !important;}.content-text * { word-break: normal;}.content-text pre { border: 1px solid var(--border); margin: 0; max-height: 400px; overflow-x: hidden; overflow-y: scroll; padding: 50px; text-decoration: none !important; text-transform: none !important; white-space: pre-wrap; word-break: break-all;}.content-text pre code { font-family: inherit;}.ba-copy-to-clipboard i,.ba-item-text a { transition: .3s}.ba-copy-to-clipboard:hover i { opacity: .5;}span.ba-copy-to-clipboard { bottom: 10px; cursor: pointer; font-size: 1.75rem; line-height: 0; position: absolute; right: 25px;}.intro-post-reviews a.ba-blog-post-rating-count,.ba-blog-post-reviews a.ba-blog-post-rating-count { margin-left: 10px; transition: color .3s;}.intro-post-wrapper .intro-post-info > span,.ba-blog-post-info-wrapper > span { align-items: center; position: relative;}.ba-blog-post-info-wrapper > .ba-blog-post-author ~ .ba-blog-post-author,.ba-item-post-intro .intro-post-info .intro-post-author ~ .intro-post-author { margin-left: 20px;}.intro-post-reviews a.ba-blog-post-rating-count,.ba-blog-post-reviews a.ba-blog-post-rating-count,.ba-blog-post-info-wrapper > span a:hover,.intro-post-wrapper .intro-post-info > span a:hover,.ba-blog-post-info-wrapper > span a,.intro-post-wrapper .intro-post-info > span a { color: inherit;}.ba-blog-post-info-wrapper .ba-author-avatar,.intro-post-wrapper .ba-author-avatar { margin: 5px 10px 5px 0;}.ba-blog-post-info-wrapper,.ba-blog-post-info-wrapper > span,.ba-blog-post-info-wrapper .ba-icons,.intro-post-wrapper .intro-post-info > span { cursor: default !important;}.ba-item-post-navigation .ba-blog-post-fields,.ba-item-post-intro .intro-post-info,.ba-blog-post-info-wrapper { align-items: center; display: flex; flex-wrap: wrap;}.ba-item-category-intro .intro-post-title-wrapper .ba-author-avatar,.ba-blog-post-info-wrapper .ba-author-avatar,.intro-post-info .ba-author-avatar { background-position: center; background-size: cover; border-radius: 50%; display: inline-block; vertical-align: middle;}.intro-post-info .ba-author-avatar,.ba-blog-post-info-wrapper .ba-author-avatar { height: 30px; width: 30px;}/* Author Social Link */.intro-category-author-social-wrapper a,.ba-post-author-social-wrapper a { font-size: 1rem; margin-right: 10px; padding: 10px;}.ba-blog-posts-pagination span.disabled a *,.ba-blog-posts-pagination span.disabled a,.intro-category-author-social-wrapper a:hover,.ba-post-author-social-wrapper a:hover { opacity: .5;}.intro-post-reviews,.ba-blog-post-reviews { align-items: center;}/* Multiple Nights */.add-to-cart-booking-calendar input { cursor: pointer !important; background: var(--bg-primary); border-color: var(--border); transition: border-color .3s;}.ba-add-to-cart-guests input:focus,.add-to-cart-booking-calendar input:focus { border-color: #f3f3f3 !important;}.add-to-cart-booking-calendar + .add-to-cart-booking-calendar { margin-left: 5px;}/* Single Day Private No Slot*/.ba-add-to-cart-guests,.ba-add-to-cart-guests input,.add-to-cart-booking-guests-wrapper .ba-add-to-cart-row-label,.add-to-cart-booking-hours-wrapper .ba-add-to-cart-row-label,.add-to-cart-booking-calendar-wrapper .ba-add-to-cart-row-label,.add-to-cart-booking-calendar input[data-type="single-date"] { width: 100%;}.add-to-cart-booking-calendar { position: relative;}.add-to-cart-booking-calendar .icons-cell ~ input { cursor: pointer; color: inherit; font-size: inherit; font-style: inherit; letter-spacing: inherit; line-height: inherit; margin: 0; padding: 0 0 0 2.7em; width: 100%;}.add-to-cart-booking-calendar .open-calendar-wrapper { position: relative;}.add-to-cart-booking-calendar .icons-cell { font-size: 1.5em; left: .5em; line-height: 1em; position: absolute; bottom: 50%; pointer-events: none; transform: translateY(0.5em);}.add-to-cart-booking-calendar-wrapper { min-width: 100%;}.add-to-cart-booking-calendar { flex-grow: 1; margin-bottom: 20px;}.add-to-cart-booking-calendar input.open-calendar-dialog { color: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; line-height: inherit; text-decoration: inherit; text-transform: inherit; width: 100%;}.add-to-cart-booking-guests-wrapper .ba-add-to-cart-row-label,.add-to-cart-booking-hours-wrapper .ba-add-to-cart-row-label,.add-to-cart-booking-calendar-wrapper .ba-add-to-cart-row-label { margin-bottom: 10px;}/*Single Day, Private, Slot*/.add-to-cart-booking-guests-wrapper,.add-to-cart-booking-hours-wrapper { flex-wrap: wrap;}.add-to-cart-booking-available-hours-wrapper { display: flex; flex-wrap: wrap; margin-bottom: 1.25rem; margin-left: -.625rem; width: 100%;}.add-to-cart-booking-available-hours { align-items: center; border: 2px solid var(--border); box-sizing: border-box; cursor: pointer; display: flex; justify-content: center; line-height: 1.5rem !important; margin: .625rem; padding: .625rem .9375rem; position: relative; transition: .3s; width: 7em;}.add-to-cart-booking-available-hours.active { border-color: var(--primary);}.add-to-cart-booking-calendar input:hover,.add-to-cart-booking-available-hours:hover { border-color: var(--hover);}/*Single Day, Group, Slot*/.ba-add-to-cart-guests input { background: transparent; border: none; color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; margin: 0; padding: 0; pointer-events: none; text-align: center; width: 30px;}.ba-add-to-cart-guests { align-items: center; border: 1px solid var(--border); display: flex; justify-content: space-between; padding: 5px; position: relative;}.ba-add-to-cart-guests i { cursor: pointer; font-size: 1.5rem; padding: 10px; text-align: center; transition: .3s; width: 24px;}.ba-add-to-cart-guests i:hover { opacity: .5;}.ba-add-to-cart-guests i.disabled { opacity: .3; cursor: not-allowed;}.ba-item-add-to-cart .ba-add-to-cart-extra-option .ba-add-to-cart-row-value[data-type="dropdown"] input { width: calc(100% + 5px);}.ba-item-add-to-cart .ba-add-to-cart-extra-options { margin-top: 30px;}.intro-post-wrapper .intro-post-image { background-position: 50%; background-repeat: no-repeat; background-size: cover; position: relative;}.intro-post-wrapper .intro-post-title { display: inline-block; max-width: 100%; text-align: inherit;}.fullscreen-post.intro-post-wrapper { display: flex; box-sizing: border-box; flex-direction: column; justify-content: center; overflow: hidden; position: relative;}.fullscreen-post .intro-post-image-wrapper { left: 0; position: absolute; right: 0; top: 0; z-index: 0;}.intro-post-wrapper .intro-category-author-social-wrapper,.intro-post-wrapper .intro-post-title-wrapper,.intro-post-wrapper .intro-post-info { backface-visibility: hidden; -webkit-backface-visibility: hidden; box-sizing: border-box; margin-left: auto; margin-right: auto; max-width: 100%; padding: 0 25px;}.intro-post-wrapper:not(.fullscreen-post) .intro-category-author-social-wrapper,.intro-post-wrapper:not(.fullscreen-post) .intro-post-title-wrapper,.intro-post-wrapper:not(.fullscreen-post) .intro-post-info { padding: 0;}.intro-category-author-social-wrapper,.fullscreen-post .intro-post-title-wrapper,.fullscreen-post .intro-post-info { box-sizing: border-box; z-index: 2;}.intro-post-wrapper .intro-post-info > span { display: inline-block;}.intro-post-wrapper .intro-post-info > span:last-child { margin-right: 0;}.intro-post-info .intro-post-info-wrapper { align-items: center; display: flex; flex-wrap: wrap; width: 100%;}.intro-category-description { display: inline-block;}.ba-item-category-intro .intro-post-title-wrapper .ba-author-avatar { height: 75px; margin: 0 25px 0 0; width: 75px;}.intro-post-image-wrapper { position: relative;}.intro-post-image-wrapper .ba-overlay { z-index: 1;}.lightbox-open .row-with-intro-items { position: static;}.blog-posts-sorting-wrapper select,.ba-comments-total-count-wrapper select { background: transparent!important; border-radius: 0!important; border: none!important; font-weight: bold !important; height: auto; outline-offset: -2px; padding: 0; width: auto;}.ba-blog-post-rating-stars,.ba-review-stars-wrapper { align-items: center; color: #ddd!important; display: flex; letter-spacing: initial !important; margin-bottom: 1px;}.ba-item-categories .ba-blog-post .ba-app-category-counter { white-space: nowrap;}.ba-item-categories .ba-blog-post a span.ba-app-category-counter { margin-left: 10px;}.ba-item-categories .ba-blog-post-title-wrapper + .ba-blog-post-info-wrapper { margin-left: 25px;}.ba-item-categories .ba-blog-post .ba-app-sub-category { margin-left: calc(25px * var(--sub-category-level));}.ba-item-categories .ba-blog-post .ba-app-sub-category a { color: inherit; flex-grow: 1; outline-offset: -2px;}.ba-item-categories .ba-classic-layout .ba-blog-post-image { margin-right: 40px;}.ba-item-categories .ba-classic-layout .ba-blog-post > .ba-blog-post-content { padding: 0;}.ba-collapsible-categories .ba-blog-post-content .ba-blog-post-info-wrapper,.ba-collapsible-categories .ba-app-sub-category-wrapper .ba-app-sub-category-childs { height: var(--categories-collapse-height); overflow: hidden; transition: .3s ease-in-out;}.ba-collapsible-categories .ba-blog-post-title i,.ba-collapsible-categories .ba-app-sub-category i { font-size: 1.125rem !important; letter-spacing: normal; line-height: 1.125rem !important; }.ba-collapsible-categories .ba-blog-post-title i { padding: 0 18px;}.ba-collapsible-categories .ba-blog-post-content .ba-blog-post-title-wrapper i:before,.ba-collapsible-categories .ba-app-sub-category-wrapper > span i:before { display: inline-block; transition: all .3s ease-in-out;}.ba-categories-wrapper:not(.ba-collapsible-categories) .ba-blog-post-content .ba-blog-post-title-wrapper i,.ba-categories-wrapper:not(.ba-collapsible-categories) .ba-app-sub-category-wrapper > span i { display: none !important;}.ba-collapsible-categories .ba-blog-post-content:not(.ba-categories-icon-rotated) .ba-blog-post-title-wrapper i:before,.ba-collapsible-categories .ba-app-sub-category-wrapper:not(.ba-categories-icon-rotated) > span i:before { transform: rotate(90deg);}.ba-app-sub-category { display: flex; justify-content: inherit; transition: color .3s ease-in-out;}.ba-item-categories .ba-blog-post-title { flex-wrap: nowrap;}.ba-collapsible-categories .ba-app-sub-category i,.ba-collapsible-categories .ba-blog-post-title i { align-items: center; cursor: pointer !important; display: flex; justify-content: flex-end;}.ba-item-categories .ba-classic-layout { flex-direction: row; flex-wrap: wrap; margin-left: -10px; margin-right: -10px;}.ba-item-categories .ba-classic-layout .ba-blog-post,.ba-item-categories .ba-classic-layout { align-items: flex-start; display: flex;}.ba-blog-post-info-wrapper > span { flex-wrap: nowrap; white-space: nowrap;}.ba-blog-post-info-wrapper .ba-blog-post-author > a { display: flex; align-items: center;}.ba-blog-post-button-wrapper a { display: inline-block;}.ba-blog-post-image { background-size: cover; backface-visibility: hidden; -webkit-backface-visibility: hidden; overflow: hidden; position: relative;}.ba-blog-post-image img { opacity: 0; width: 100%;}.ba-item-blog-posts .ba-grid-layout .ba-blog-post-image { margin: 0 auto;}.ba-blog-posts-content-loading { opacity: .5 !important;}.ba-item-recently-viewed-products .ba-store-app-product .ba-slideshow-img a,.ba-item-related-posts-slider .ba-store-app-product .ba-slideshow-img a,.ba-item-recent-posts-slider .ba-store-app-product .ba-slideshow-img a,.ba-item-categories .ba-blog-post-image a,.ba-blog-posts-wrapper .ba-blog-post-image a { background-attachment: scroll; background-position: center center; background-repeat: no-repeat; bottom: 0; left: 0; position: absolute; right: 0; top: 0;}.ba-item-categories .ba-grid-layout .ba-blog-post-content,.ba-item-author .ba-grid-layout .ba-post-author-content,.ba-item-search-result .ba-grid-layout .ba-blog-post-content,.ba-item-search-result .ba-one-column-grid-layout .ba-blog-post-content,.ba-item-related-posts .ba-grid-layout .ba-blog-post-content,.ba-item-recent-posts .ba-grid-layout .ba-blog-post-content,.ba-item-categories .ba-cover-layout .ba-blog-post-content,.ba-item-search-result .ba-cover-layout .ba-blog-post-content,.ba-item-related-posts .ba-cover-layout .ba-blog-post-content,.ba-item-recent-posts .ba-cover-layout .ba-blog-post-content,.ba-cover-layout .ba-blog-post-content,.ba-blog-post-content { padding: 0 20px; box-sizing: border-box;}.ba-cover-layout .ba-store-app-product .ba-blog-post-content > div > *:not(.ba-overlay-slideshow-button) { z-index: 10;}.ba-cover-layout .ba-blog-post-content > a { bottom: 0; left: 0; position: absolute; right: 0; top: 0;}.ba-cover-layout .ba-blog-post-content > div > *:not(.ba-overlay-slideshow-button) { position: relative;}.ba-blog-posts-wrapper.ba-cover-layout .ba-blog-post { background-color: transparent !important;}.ba-post-author-title a,.ba-blog-post-title a { display: inline-block; flex-grow: 1; outline-offset: -2px;}.ba-post-author-description p,.ba-post-author-description,.ba-post-author-title a,.ba-blog-post-title a { font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; letter-spacing: inherit; line-height: inherit; text-align: inherit; text-decoration: inherit; text-transform: inherit;}.ba-post-author-description p,.ba-post-author-description,.ba-post-author-title a,.ba-item:not(.ba-item-recent-comments):not(.ba-item-recent-reviews) .ba-blog-post-title a { color: inherit;}/* Blog Classic Layout*/.ba-item-author .ba-post-author,.ba-blog-post { backface-visibility: hidden; -webkit-backface-visibility: hidden; box-sizing: border-box; overflow: hidden; position: relative; z-index: 1;}.ba-grid-layout .ba-blog-post.ba-store-app-product:has(.ba-blog-post-product-options) { overflow: visible !important;}.ba-item-author .ba-posts-author-wrapper:not(.ba-grid-layout) .ba-post-author:last-child { margin-bottom: 0;}.ba-blog-post { margin-bottom: 0; margin-top: 20px;}.ba-cover-layout .ba-blog-post-intro-wrapper { position: relative; transform: translate(0); z-index: 1;}.ba-grid-layout .ba-post-author,.ba-grid-layout .ba-blog-post { margin-top: 30px; box-sizing: border-box;}.ba-one-column-grid-layout .ba-blog-post { width: calc(100% - 21px);}.ba-masonry-layout .ba-blog-post-image { width: 100% !important; height: auto !important;}.ba-item-author .ba-post-author-image a { display: block; height: 100%;}.ba-one-column-grid-layout .ba-blog-post:first-child,.ba-classic-layout .ba-blog-post:first-child { margin-top: 0;}.ba-item-categories .ba-classic-layout .ba-blog-post,.ba-posts-author-wrapper.ba-grid-layout .ba-post-author,.ba-one-column-grid-layout .ba-blog-post,.ba-grid-layout .ba-blog-post { box-sizing: border-box; margin-left: 10px; margin-right: 10px;}.ba-item-categories .ba-cover-layout .ba-blog-post-image,.ba-item-blog-posts .ba-cover-layout .ba-blog-post-image,.ba-item-search-result .ba-cover-layout .ba-blog-post-image,.ba-item-related-posts .ba-cover-layout .ba-blog-post-image,.ba-item-recent-posts .ba-cover-layout .ba-blog-post-image,.ba-cover-layout .ba-blog-post-image,.ba-classic-layout .ba-blog-post-image { bottom: 0; left: 0; position: absolute; top: 0; width:50%;}/* Blog Grid Layout */.ba-cover-layout,.ba-one-column-grid-layout,.ba-grid-layout { display: flex; flex-direction: row; flex-wrap: wrap; margin-left: -10px; margin-right: -10px;}.ba-cover-layout .empty-list,.ba-one-column-grid-layout .empty-list,.ba-grid-layout .empty-list { margin-left: 10px; margin-right: 10px;}/* Blog Masonry Layout */.ba-masonry-layout { display: grid !important; grid-row-gap: 20px; grid-column-gap: 20px; grid-auto-rows: 0px;}.ba-item-blog-posts .ba-blog-post-content,.ba-item-search-result .ba-blog-post-content,.ba-item-post-navigation .ba-blog-post-content,.ba-item-related-posts .ba-blog-post-content,.ba-item-recent-posts .ba-blog-post-content { overflow: hidden;}.ba-store-app-product .ba-blog-post-content,.ba-item-categories .ba-masonry-layout .ba-blog-post-content,.ba-item-blog-posts .ba-masonry-layout .ba-blog-post-content,.ba-item-search-result .ba-masonry-layout .ba-blog-post-content,.ba-item-post-navigation .ba-masonry-layout .ba-blog-post-content,.ba-item-related-posts .ba-masonry-layout .ba-blog-post-content,.ba-item-recent-posts .ba-masonry-layout .ba-blog-post-content { overflow: visible; flex-grow: 0;}.ba-masonry-layout .ba-blog-post { flex-direction: column; font-size: initial; letter-spacing: initial; line-height: initial; margin: 0 !important; width: 100% !important;}.ba-item-recent-reviews .ba-review-stars-wrapper i { position: relative;}.ba-item-recent-reviews .ba-masonry-layout .ba-blog-post { flex-direction: row;}.ba-item-categories .ba-blog-post-image,.ba-item-recent-reviews .ba-blog-post-image,.ba-item-recent-comments .ba-blog-post-image,.ba-item-author .ba-post-author-image,.ba-item-blog-posts .ba-blog-post-image,.ba-item-store-search-result .ba-blog-post-image,.ba-item-search-result .ba-blog-post-image,.ba-item-post-navigation .ba-blog-post-image,.ba-item-related-posts .ba-blog-post-image,.ba-item-recent-posts .ba-blog-post-image { backface-visibility: hidden; -webkit-backface-visibility: hidden; box-sizing: border-box; flex-shrink: 0; max-width: 100%; overflow: hidden; position: relative; transform: translate3d(0, 0, 0);}.ba-item-categories .ba-cover-layout .ba-store-app-product .ba-blog-post-image,.ba-item-search-result .ba-cover-layout .ba-store-app-product .ba-blog-post-image,.ba-item-related-posts .ba-cover-layout .ba-store-app-product .ba-blog-post-image,.ba-item-recent-posts .ba-cover-layout .ba-store-app-product .ba-blog-post-image { transform: none; z-index: auto;}.ba-item-categories .ba-blog-post-image a,.ba-item-recent-reviews .ba-blog-posts-wrapper .ba-blog-post-image a,.ba-item-recent-comments .ba-blog-posts-wrapper .ba-blog-post-image a,.ba-item-author .ba-post-author-image a,.ba-item-store-search-result .ba-blog-post-image a,.ba-item-search-result .ba-blog-post-image a,.ba-item-post-navigation .ba-blog-post-image a,.ba-item-related-posts .ba-blog-post-image a,.ba-item-recent-posts .ba-blog-post-image a{ -webkit-backface-visibility: hidden; backface-visibility: hidden; background-position: center; background-repeat: no-repeat; background-size: cover !important;}.ba-item-store-search-result .ba-blog-post-image a,.ba-item-related-posts-slider .ba-store-app-product .ba-slideshow-img a,.ba-item-recently-viewed-products .ba-store-app-product .ba-slideshow-img a,.ba-item-recent-posts-slider .ba-store-app-product .ba-slideshow-img a,.ba-item-categories .ba-blog-post-image a,.ba-blog-posts-wrapper .ba-blog-post-image a,.ba-item-search-result .ba-blog-post-image a,.ba-item-post-navigation .ba-blog-post-image a,.ba-item-related-posts .ba-blog-post-image a,.ba-item-recent-posts .ba-blog-post-image a { background-size: inherit !important;}.ba-item-categories .ba-blog-post-image a,.ba-item-recent-reviews .ba-blog-post-image a,.ba-item-recent-comments .ba-blog-post-image a,.ba-item-author .ba-post-author-image a,.ba-item-search-result .ba-blog-post-image a,.ba-item-post-navigation .ba-blog-post-image a,.ba-item-related-posts .ba-blog-post-image a,.ba-item-recent-posts .ba-blog-post-image a,.ba-item-blog-posts .ba-blog-post .ba-blog-post-image a { transform: scale(1.03) translateZ(0); transition: transform .35s cubic-bezier(.25,.46,.45,.94); will-change: transform;}.ba-item-related-posts-slider .ba-store-app-product .ba-slideshow-img a, .ba-item-recent-posts-slider .ba-store-app-product .ba-slideshow-img a,.ba-item-recently-viewed-products .ba-store-app-product .ba-slideshow-img a,.ba-blog-post.ba-store-app-product .ba-blog-post-image a { transition: transform .3s linear;}.ba-item-categories .ba-blog-post:hover .ba-blog-post-image a,.ba-item-recent-reviews .ba-blog-post:hover .ba-blog-post-image a,.ba-item-recent-comments .ba-blog-post:hover .ba-blog-post-image a,.ba-item-author .ba-post-author:hover .ba-post-author-image a,.ba-item-search-result .ba-blog-post:hover .ba-blog-post-image a,.ba-item-blog-posts .ba-blog-post:hover .ba-blog-post-image a,.ba-item-post-navigation .ba-blog-post:hover .ba-blog-post-image a,.ba-item-related-posts .ba-blog-post:hover .ba-blog-post-image a,.ba-item-recent-posts .ba-blog-post:hover .ba-blog-post-image a { transform: scale(1);}.ba-item-categories .ba-blog-post-content,.ba-item-recent-reviews .ba-blog-post-content,.ba-item-recent-comments .ba-blog-post-content,.ba-item-author .ba-post-author-content,.ba-item-blog-posts .ba-blog-post-content,.ba-item-search-result .ba-blog-post-content,.ba-item-post-navigation .ba-blog-post-content,.ba-item-related-posts .ba-blog-post-content,.ba-item-recent-posts .ba-blog-post-content { flex-grow: 1; margin: 0; padding: 0 20px; width: auto;}.ba-item-categories .ba-blog-post,.ba-item-recent-reviews .ba-blog-post,.ba-item-recent-comments .ba-blog-post,.ba-item-author .ba-post-author,.ba-item-blog-posts .ba-blog-posts-wrapper:not(.ba-grid-layout):not(.ba-one-column-grid-layout) .ba-blog-post,.ba-item-search-result .ba-blog-post,.ba-item-post-navigation .ba-blog-post,.ba-item-related-posts .ba-blog-post,.ba-item-recent-posts .ba-blog-post { align-items: center; backface-visibility: visible; display: flex; overflow: hidden; word-break: break-word; box-sizing: border-box;}.ba-item-recent-reviews .ba-blog-post,.ba-item-recent-comments .ba-blog-post { align-items: flex-start;}.ba-item-categories .ba-grid-layout .ba-blog-post,.ba-item-author .ba-grid-layout .ba-post-author,.ba-item-search-result .ba-grid-layout .ba-blog-post,.ba-item-search-result .ba-one-column-grid-layout .ba-blog-post,.ba-item-related-posts .ba-grid-layout .ba-blog-post,.ba-item-recent-posts .ba-grid-layout .ba-blog-post { flex-direction: column;}.ba-item-categories .ba-masonry-layout .ba-blog-post-content,.ba-item-blog-posts .ba-masonry-layout .ba-blog-post-content,.ba-item-author .ba-masonry-layout .ba-post-author-content,.ba-item-search-result .ba-masonry-layout .ba-blog-post-content,.ba-item-related-posts .ba-masonry-layout .ba-blog-post-content,.ba-item-recent-posts .ba-masonry-layout .ba-blog-post-content,.ba-item-categories .ba-grid-layout .ba-blog-post-content,.ba-item-author .ba-grid-layout .ba-post-author-content,.ba-item-search-result .ba-grid-layout .ba-blog-post-content,.ba-item-search-result .ba-one-column-grid-layout .ba-blog-post-content,.ba-item-related-posts .ba-grid-layout .ba-blog-post-content,.ba-item-recent-posts .ba-grid-layout .ba-blog-post-content { width: 100%;}.ba-item-categories .ba-grid-layout .ba-blog-post-image,.ba-item-author .ba-grid-layout .ba-post-author-image,.ba-item-search-result .ba-grid-layout .ba-blog-post-image,.ba-item-search-result .ba-one-column-grid-layout .ba-blog-post-image,.ba-item-related-posts .ba-grid-layout .ba-blog-post-image,.ba-item-recent-posts .ba-grid-layout .ba-blog-post-image { margin-right: 0;}/* Blog Cover Layout */.ba-item-categories .ba-cover-layout .ba-blog-post-image,.ba-item-search-result .ba-cover-layout .ba-blog-post-image,.ba-item-related-posts .ba-cover-layout .ba-blog-post-image,.ba-item-recent-posts .ba-cover-layout .ba-blog-post-image,.ba-cover-layout .ba-blog-post-image { height: 100% !important; width: 100% !important; z-index: -1;}.ba-item-categories .ba-categories-wrapper:not(.ba-cover-layout) .ba-blog-post-image .ba-overlay,.ba-item-author .ba-post-author-image .ba-overlay,.ba-item-search-result .ba-blog-posts-wrapper:not(.ba-cover-layout) .ba-blog-post-image .ba-overlay,.ba-item-related-posts .ba-blog-posts-wrapper:not(.ba-cover-layout) .ba-blog-post-image .ba-overlay,.ba-item-recent-posts .ba-blog-posts-wrapper:not(.ba-cover-layout) .ba-blog-post-image .ba-overlay,.ba-blog-posts-wrapper:not(.ba-cover-layout) .ba-blog-post-image .ba-overlay { display: none;}.ba-item-categories .ba-cover-layout .ba-blog-post-image .ba-overlay,.ba-item-search-result .ba-cover-layout .ba-blog-post-image .ba-overlay,.ba-item-related-posts .ba-cover-layout .ba-blog-post-image .ba-overlay,.ba-item-recent-posts .ba-cover-layout .ba-blog-post-image .ba-overlay,.ba-cover-layout .ba-blog-post-image .ba-overlay { pointer-events: none; z-index: 1;}/* Blog Pagination */.ba-item-recent-comments .ba-blog-posts-pagination,.ba-blog-posts-pagination-wrapper .ba-blog-posts-pagination { text-align: center; margin-top: 50px; width: 100%;}.ba-blog-posts-pagination span { display: inline;}.ba-blog-posts-pagination span a { background: transparent; display: inline-block; margin-left: 5px; min-width: 1em; padding: 4px 12px;}.ba-blog-posts-pagination span a i { color: inherit; font-size: 1rem; line-height: inherit; vertical-align: bottom;}.ba-blog-posts-pagination span.disabled a *,.ba-blog-posts-pagination span.disabled a { cursor: not-allowed !important;}.blog-posts-sorting-wrapper select { font-size: 1rem !important; font-weight: bold !important; letter-spacing: 0px !important; line-height: initial !important;}.ba-blog-post-product-options-wrapper .ba-blog-post-product-options > span:not(:hover) > span:not(.ba-tooltip):before { transform: scale(.5);}.ba-blog-post:not(.product-option-hovered) .ba-blog-post-product-options-wrapper .ba-blog-post-product-options[data-type="color"] > span.active > span:not(.ba-tooltip):before { transform: scale(1);}/*/* Blog Plugin Post Navigation*/.ba-item-post-navigation .ba-blog-posts-wrapper > * { display: inline-flex;}.ba-item-post-navigation .ba-blog-posts-wrapper { align-items: center; display: flex; justify-content: flex-start;}.ba-item-post-navigation .ba-blog-posts-wrapper .ba-blog-post:first-child { flex-direction: row; margin: 0 10px 0 0;}.ba-item-post-navigation .ba-blog-post { flex-direction: row-reverse; margin: 0 0 0 10px; width: calc(50% - 10px);}.ba-item-post-navigation .ba-blog-post + .ba-blog-post.post-navigation-next .ba-blog-post-info-wrapper > span { margin-right: 0px; margin-left: 15px;}.ba-item-post-navigation .ba-blog-post + .ba-blog-post.post-navigation-next .ba-blog-post-info-wrapper > span.ba-blog-post-views { margin: 0;}.ba-item-post-navigation .ba-store-app-product + .ba-store-app-product .ba-blog-post-add-to-cart-wrapper{ flex-direction: row-reverse;}.ba-item-post-navigation .ba-blog-post.post-navigation-next:first-child { margin-left: calc(50% + 10px) ; margin-right: 0 !important;}/*/* Plugin Carousel*/.ba-slideshow-caption > a { bottom: 0; left: 0; position: absolute; right: 0; top: 0;}.ba-slideshow-caption > div > *:not(.ba-overlay-slideshow-button) { position: relative;}ul.ba-slideset { margin: 0; overflow: hidden; padding: 0;}.ba-item:not(.ba-item-slideshow):not(.ba-item-feature-box) .empty-content:not(.slideshow-button):not(.ba-feature-button) { display: none;}.ba-item-recently-viewed-products .ba-slideset.carousel-type:not(.slideset-loaded) .slideshow-content > li:not(.active),.ba-item-related-posts-slider .ba-slideset.carousel-type:not(.slideset-loaded) .slideshow-content > li:not(.active),.ba-item-recent-posts-slider .ba-slideset.carousel-type:not(.slideset-loaded) .slideshow-content > li:not(.active),.ba-item-carousel .ba-slideset:not(.slideset-loaded) .slideshow-content > li:not(.active),.ba-item-slideset .ba-slideset:not(.slideset-loaded) .slideshow-content > li:not(.active) { display: none;}.ba-item-recently-viewed-products .ba-slideset.carousel-type .slideshow-content > li,.ba-item-related-posts-slider .ba-slideset.carousel-type .slideshow-content > li,.ba-item-recent-posts-slider .ba-slideset.carousel-type .slideshow-content > li,.ba-item-carousel .slideshow-content > li,.ba-item-slideset .slideshow-content > li { display: inline-block; line-height: 0; position: absolute; text-decoration: none;}.ba-slideset .slideshow-content { overflow: hidden; position: relative;}.ba-slideset .slideshow-content li { opacity: 1 !important; transition: left .75s linear; visibility: hidden;}.ba-item-recently-viewed-products .slideshow-type.ba-slideset .slideshow-content li,.ba-item-related-posts-slider .slideshow-type.ba-slideset .slideshow-content li,.ba-item-recent-posts-slider .slideshow-type.ba-slideset .slideshow-content li { visibility: visible;}.ba-item-recently-viewed-products .ba-slideset.carousel-type .slideshow-content > li.active,.ba-item-related-posts-slider .ba-slideset.carousel-type .slideshow-content > li.active,.ba-item-recent-posts-slider .ba-slideset.carousel-type .slideshow-content > li.active,.ba-item-carousel .slideset-out-animation,.ba-item-carousel .slideshow-content li.active,.ba-slideset .slideset-out-animation,.ba-slideset .slideshow-content li.active { visibility: visible;}.ba-slideset:not(.caption-over) li.active { z-index: 1;}.ba-item-recently-viewed-products ul.carousel-type .slideshow-content:not([style*="transition: none"]) li.item,.ba-item-related-posts-slider ul.carousel-type .slideshow-content:not([style*="transition: none"]) li.item,.ba-item-recent-posts-slider ul.carousel-type .slideshow-content:not([style*="transition: none"]) li.item { will-change: transform;}.ba-item-slideset .ba-slideset,.ba-item-carousel .ba-slideset { cursor: grab !important;}.ba-item-slideset ul:not(.slideset-loaded) li,.ba-item-carousel ul:not(.slideset-loaded) li,.ba-item-recent-posts-slider ul.carousel-type:not(.slideset-loaded) li,.ba-item-related-posts-slider ul.carousel-type:not(.slideset-loaded) li,.ba-item-recently-viewed-products ul.carousel-type:not(.slideset-loaded) li { position: relative; float:left;} /* Image */.ba-slideshow-img { background-position: 50% 50%; background-repeat: no-repeat;}.lightbox-enabled .ba-slideshow-img { cursor: zoom-in;}.ba-item-slideshow .ba-overlay,.ba-item-slideshow .lightbox-enabled .ba-slideshow-caption,.caption-over .lightbox-enabled .ba-slideshow-caption { pointer-events: none;}.item.active[tabindex="0"] { outline: none !important}.item.active[tabindex="0"]:focus .ba-slideshow-caption,.item.active[tabindex="0"]:focus .ba-slideshow-img { outline: 2px solid #0171e3; outline-offset: -2px;}/* Caption */.slideset-inner { position: relative;}.ba-slideshow-caption { background-repeat: no-repeat; display: flex; flex-direction: column; flex-grow: 1; justify-content: center;}.ba-item-recently-viewed-products .ba-slideset:not(.slideshow-type) .ba-slideshow-caption,.ba-item-related-posts-slider .ba-slideset:not(.slideshow-type) .ba-slideshow-caption,.ba-item-recent-posts-slider .ba-slideset:not(.slideshow-type) .ba-slideshow-caption { animation: none;}.ba-item-recently-viewed-products .ba-slideset:not(.caption-over):not(.slideshow-type) .ba-slideshow-caption,.ba-item-related-posts-slider .ba-slideset:not(.caption-over):not(.slideshow-type) .ba-slideshow-caption,.ba-item-carousel .ba-slideset:not(.caption-over) li .ba-slideshow-caption ,.ba-item-recent-posts-slider .ba-slideset:not(.caption-over):not(.slideshow-type) .ba-slideshow-caption { height: var(--carousel-caption-height); justify-content: flex-start;}.ba-item-recently-viewed-products .carousel-type .ba-slideshow-caption > *,.ba-item-related-posts-slider .carousel-type .ba-slideshow-caption > *,.ba-item-recent-posts-slider .carousel-type .ba-slideshow-caption > *,.ba-item-carousel .ba-slideshow-caption > *,.ba-item-slideset .ba-slideshow-caption > * { padding: 0 30px;}.slideshow-button { line-height: 0; font-size: 0;}.com_gridbox .slideshow-button a { line-height: initial;}/* Caption Over */.ba-item-recently-viewed-products .caption-over .ba-slideshow-caption,.ba-item-related-posts-slider .caption-over .ba-slideshow-caption,.ba-item-recent-posts-slider .caption-over .ba-slideshow-caption,.ba-item-slideset .caption-over .ba-slideshow-caption,.ba-item-carousel .caption-over .ba-slideshow-caption { bottom: 0; left: 0; overflow: hidden; position: absolute; right: 0; top: 0;}/* Caption hover */.ba-item-recently-viewed-products .caption-hover .ba-slideshow-caption,.ba-item-related-posts-slider .caption-hover .ba-slideshow-caption,.ba-item-recent-posts-slider .caption-hover .ba-slideshow-caption,.ba-item-slideset .caption-hover .ba-slideshow-caption,.ba-item-carousel .caption-hover.caption-over .ba-slideshow-caption { opacity: 0; visibility: hidden; transition: all .3s 0s ease-in-out;}.ba-item-recently-viewed-products .ba-slideset:not(.caption-over) li.active .ba-slideshow-caption,.ba-item-recently-viewed-products .caption-over.caption-hover li:hover .ba-slideshow-caption,.ba-item-related-posts-slider .ba-slideset:not(.caption-over) li.active .ba-slideshow-caption,.ba-item-related-posts-slider .caption-over.caption-hover li:hover .ba-slideshow-caption,.ba-item-recent-posts-slider .ba-slideset:not(.caption-over) li.active .ba-slideshow-caption,.ba-item-recent-posts-slider .caption-over.caption-hover li:hover .ba-slideshow-caption,.ba-item-slideset .ba-slideset:not(.caption-over) li.active .ba-slideshow-caption,.ba-item-slideset .caption-over.caption-hover li:hover .ba-slideshow-caption,.ba-item-carousel .caption-over.caption-hover li:hover .ba-slideshow-caption { opacity: 1; visibility: visible;}.ba-item-slideset .ba-slideset:not(.caption-over) li:not(.active) .ba-btn-transition { transition: none;}.ba-slideset .ba-slideset-dots { position: static; padding-top: 20px;}/*/* Plugin Recent Posts Slider*/.ba-item-recently-viewed-products .ba-blog-post-title a,.ba-item-related-posts-slider .ba-blog-post-title a,.ba-item-recent-posts-slider .ba-blog-post-title a { color: inherit; text-decoration: inherit;}.ba-item-recently-viewed-products .ba-slideshow-img,.ba-item-related-posts-slider .ba-slideshow-img,.ba-item-recent-posts-slider .ba-slideshow-img { position: relative; width: 100%;}.ba-item-recently-viewed-products .ba-slideshow-img a,.ba-item-related-posts-slider .ba-slideshow-img a,.ba-item-recent-posts-slider .ba-slideshow-img a { bottom: 0; left: 0; position: absolute; right: 0; top: 0;}/*/* Plugin Slideshow*/.ba-item-recently-viewed-products .slideshow-type,.ba-item-related-posts-slider .slideshow-type,.ba-item-recent-posts-slider .slideshow-type,ul.ba-slideshow { box-sizing: border-box; height: 100%; list-style: none; margin: 0; overflow: hidden; padding: 0; position: relative; width: 100%;}.ba-item-slideshow ul.ba-slideshow { overflow: visible;}.ba-item-content-slider ul.ba-slideshow .slideshow-content,.ba-item-slideshow ul.ba-slideshow,.ba-item-content-slider ul.ba-slideshow { min-height: inherit;}.ba-item-product-slideshow ul.ba-slideshow .slideshow-content,.ba-item-field-slideshow ul.ba-slideshow,.ba-item-field-slideshow ul.ba-slideshow .slideshow-content,.ba-item-slideshow ul.ba-slideshow .slideshow-content { min-height: inherit; overflow: hidden; position: relative;}.ba-item-product-slideshow .slideshow-wrapper.dots-position-outside:not(.ba-left-thumbnails-navigation) .ba-slideshow-dots,.ba-item-field-slideshow .slideshow-wrapper.dots-position-outside:not(.ba-left-thumbnails-navigation) .ba-slideshow-dots,.ba-item-slideshow .slideshow-wrapper.dots-position-outside:not(.ba-left-thumbnails-navigation) .ba-slideshow-dots { margin-top: 20px; overflow: hidden; position: static;}.ba-item-product-slideshow .slideshow-content .item,.ba-item-product-slideshow .slideshow-content,.ba-item-field-slideshow .slideshow-content .item,.ba-item-field-slideshow .slideshow-content,.ba-item-related-posts-slider .slideshow-type .slideshow-content .item,.ba-item-related-posts-slider .slideshow-type .slideshow-content,.ba-item-recently-viewed-products .slideshow-type .slideshow-content .item,.ba-item-recently-viewed-products .slideshow-type .slideshow-content,.ba-item-recent-posts-slider .slideshow-type .slideshow-content .item,.ba-item-recent-posts-slider .slideshow-type .slideshow-content,.ba-item-slideshow .slideshow-content .item,.ba-item-slideshow .slideshow-content { height: 100%; width: 100%;}.ba-item-recently-viewed-products .slideshow-type .slideshow-content .item:not(.active):not(.ba-next):not(.ba-prev):not(.ba-left):not(.ba-right),.ba-item-related-posts-slider .slideshow-type .slideshow-content .item:not(.active):not(.ba-next):not(.ba-prev):not(.ba-left):not(.ba-right),.ba-item-content-slider > .slideshow-wrapper > .ba-slideshow > .slideshow-content > .item:not(.active):not(.ba-next):not(.ba-prev):not(.ba-left):not(.ba-right),.ba-item-recent-posts-slider .slideshow-type .slideshow-content .item:not(.active):not(.ba-next):not(.ba-prev):not(.ba-left):not(.ba-right),.ba-item-slideshow .slideshow-content .item:not(.active):not(.ba-next):not(.ba-prev):not(.ba-left):not(.ba-right) { display: none;}.ba-item-product-slideshow .ba-slideshow-img,.ba-item-field-slideshow .ba-slideshow-img,.ba-item-related-posts-slider .slideshow-type .ba-slideshow-img,.ba-item-recently-viewed-products .slideshow-type .ba-slideshow-img,.ba-item-recent-posts-slider .slideshow-type .ba-slideshow-img,.ba-item-slideshow .ba-slideshow-img { align-items: center; background-position: 50% 50%; background-repeat: no-repeat; bottom: 0; display: flex; justify-content: center; left: 0; overflow: hidden; position: absolute; right: 0; top: 0; z-index: 1;}.ba-item-content-slider .ba-slideshow-img + .ba-grid-column,.ba-item-related-posts-slider .slideshow-type .ba-slideshow-caption,.ba-item-recently-viewed-products .slideshow-type .ba-slideshow-caption,.ba-item-recent-posts-slider .slideshow-type .ba-slideshow-caption,.ba-item-slideshow .ba-slideshow-caption { bottom: 0; box-sizing: border-box; display: none; flex-direction: column; justify-content: center; left: 0; width: 100%; max-width: 1170px; margin: 0 auto; overflow: visible; padding: 100px; position: absolute; right: 0; top: 0; z-index: 5;}.ba-item-related-posts-slider .slideshow-type .ba-slideshow-caption,.ba-item-recently-viewed-products .slideshow-type .ba-slideshow-caption,.ba-item-recent-posts-slider .slideshow-type .ba-slideshow-caption { background: transparent !important; backdrop-filter: none !important;}.ba-item-content-slider .ba-slideshow-img + .ba-grid-column { bottom: auto; max-width: none; min-height: 100%; top: auto;}.ba-item-related-posts-slider .slideshow-type .active > .ba-slideshow-caption,.ba-item-recently-viewed-products .slideshow-type .active > .ba-slideshow-caption,.ba-item-recent-posts-slider .slideshow-type .active > .ba-slideshow-caption,.ba-item-slideshow .active > .ba-slideshow-caption { display: flex;}.slideshow-description-wrapper .ba-slideshow-description,.slideshow-title-wrapper *,.slideshow-button a { display: inline-block;}.slideshow-description-wrapper .ba-slideshow-description,.slideshow-title-wrapper * { text-align: inherit; width: 100%;}.ba-slideset-nav,.ba-slideshow-nav { height: 0; position: absolute; top: 50%; width: 100%; z-index: 10;}.ba-slideset-nav a,.ba-slideshow-nav a { box-sizing: content-box; position: absolute; text-align: center; transform: translateY(-50%);}.slideset-btn-next,.slideshow-btn-next { margin: 0; right: 20px;}.slideset-btn-prev,.slideshow-btn-prev { left: 20px;}.ba-slideset-dots,.ba-slideshow-dots { bottom: 20px; box-sizing: border-box; color: #fff; display: flex; justify-content: center; padding: 5px; position: absolute; width: 100%; z-index: 9;}.ba-slideset-dots > div,.ba-slideshow-dots > div { transition: color .3s ;}.com_gridbox .ba-slideshow-dots { z-index: 7;}.ba-testimonials .ba-slideset-dots { position: static;}.ba-slideshow-dots.disabled-dots { display: none;}.show-hidden-elements .ba-slideset-dots,.show-hidden-elements .ba-slideshow-dots { display: flex;}.ba-slideset-dots > div:not(:first-child),.ba-slideshow-dots > div:not(:first-child) { margin-left: 1em;}.ba-slideset-dots > div,.ba-slideshow-dots > div { cursor: pointer; text-align: center; -webkit-tap-highlight-color: transparent;}.slideshow-type.ba-item-slideshow .ba-overlay { z-index: 4;}.ba-item-recently-viewed-products ul:not(.slideshow-type) + .ba-overlay,.ba-item-related-posts-slider ul:not(.slideshow-type) + .ba-overlay,.ba-item-recent-posts-slider ul:not(.slideshow-type) + .ba-overlay { display: none;}.ba-item-recently-viewed-products .slideshow-type + .ba-overlay,.ba-item-related-posts-slider .slideshow-type + .ba-overlay,.ba-item-recent-posts-slider .slideshow-type + .ba-overlay { z-index: 4}body:not(.gridbox) .slideset-wrapper .empty-list,body:not(.gridbox) .slideshow-wrapper .empty-list { display: none;}.ba-item-content-slider.ba-item .slideshow-wrapper .ba-slideshow:not(.ba-fade-in):not(.ba-ken-burns) li.ba-next > .ba-overlay,.ba-item-content-slider.ba-item .slideshow-wrapper .ba-slideshow:not(.ba-fade-in):not(.ba-ken-burns) li.ba-prev > .ba-overlay,.ba-item-content-slider.ba-item .slideshow-wrapper li.active > .ba-overlay,.slideshow-wrapper > .ba-overlay { min-height: inherit; z-index: 3}.ba-item-content-slider.ba-item .slideshow-wrapper li.active > .ba-overlay,.slideshow-wrapper > .ba-overlay { min-height: inherit; z-index: 3}.ba-item-content-slider.ba-item .slideshow-wrapper li > .ba-overlay { min-height: auto;}.ba-item-content-slider.ba-item .slideshow-wrapper li.active .ba-grid-column > .ba-overlay,.ba-item-content-slider.ba-item .slideshow-wrapper .ba-ken-burns li:not(.active) > .ba-overlay { z-index: 0;}/* Slideshow Thumbnails */.slideshow-wrapper:not(.ba-left-thumbnails-navigation) .ba-slideshow-dots.thumbnails-dots { grid-template-columns: repeat(var(--dots-count), calc((100% - (var(--thumbnails-count) - 1) * 20px) / var(--thumbnails-count))); height: var(--bottom-thumbnails-height);}.slideshow-wrapper:not(.ba-left-thumbnails-navigation):not(.dots-position-outside) .ba-slideshow-dots.thumbnails-dots { grid-template-columns: repeat(var(--dots-count), calc((100% - ((var(--thumbnails-count) - 1) * 20px + 40px)) / var(--thumbnails-count)));}.slideshow-wrapper.ba-left-thumbnails-navigation { --left-thumbnails-width: var(--left-thumbnails-width);}.slideshow-wrapper.ba-left-thumbnails-navigation .ba-slideshow-dots.thumbnails-dots { grid-template-rows: repeat(var(--dots-count), calc((100% - (var(--thumbnails-count) - 1) * 20px) / var(--thumbnails-count)));}.ba-left-thumbnails-navigation:not(.dots-position-outside) .ba-slideshow-dots.thumbnails-dots { grid-template-rows: repeat(var(--dots-count), calc((100% - ((var(--thumbnails-count) - 1) * 20px + 20px)) / var(--thumbnails-count)));}.ba-slideshow-dots.thumbnails-dots { display: grid; cursor: grab; grid-auto-flow: column; grid-column-gap: 20px; overflow: hidden; justify-content: normal; padding: 0;}.ba-slideshow-dots.thumbnails-dots.disable-move { cursor: default;}.ba-slideshow-dots.thumbnails-dots.disable-move.center-align:not(.count-matched) { justify-content: center;}.ba-slideshow-dots.thumbnails-dots.disable-move.right-align:not(.count-matched) { justify-content: end;}.ba-left-thumbnails-navigation .ba-slideshow-dots.thumbnails-dots.disable-move.center-align:not(.count-matched),.ba-left-thumbnails-navigation .ba-slideshow-dots.thumbnails-dots.disable-move.right-align:not(.count-matched) { justify-content: initial;}.ba-slideshow-dots.thumbnails-dots > div { background-position: center; background-repeat: no-repeat; line-height: 0; margin-left: 0!important; position: relative; will-change: transform; outline-offset: -2px;}.move-started > * { pointer-events: none;}.slideshow-wrapper:not(.dots-position-outside):not(.ba-left-thumbnails-navigation) .ba-slideshow-dots.thumbnails-dots > div { transform: translateX(20px);}.slideshow-wrapper:not(.dots-position-outside):not(.ba-left-thumbnails-navigation) .ba-slideshow-dots.thumbnails-dots.center-align.disable-move:not(.count-matched) > div { transform: translateX(0px);}.slideshow-wrapper:not(.dots-position-outside):not(.ba-left-thumbnails-navigation) .ba-slideshow-dots.thumbnails-dots.right-align.disable-move:not(.count-matched) > div { transform: translateX(-20px);}.slideshow-wrapper:not(.dots-position-outside).ba-left-thumbnails-navigation .ba-slideshow-dots.thumbnails-dots > div { transform: translateY(20px);}.ba-item-product-gallery .ba-gridbox-gallery-image:not(:hover) .ba-simple-gallery-image:after,.ba-slideshow-dots.thumbnails-dots > div.ba-icons:before { opacity: 0;}.ba-item-product-gallery .ba-simple-gallery-image:after,.ba-slideshow-dots.thumbnails-dots > div:after { background: #fff; bottom: 0; content: ""; left: 0; opacity: 0.3; position: absolute; right: 0; top: 0; transition: .3s; z-index: 1;}.ba-item-product-gallery .ba-simple-gallery-image:after { z-index: 0;}.ba-slideshow-dots.thumbnails-dots > div.active:after,.ba-slideshow-dots.thumbnails-dots > div:hover:after { opacity: 0;}.empty-content ~ .ba-slideshow-dots.thumbnails-dots { display: none;}/* Slideshow Thumbnails Left */.ba-left-thumbnails-navigation .ba-slideshow-dots.thumbnails-dots { bottom: 0; grid-auto-flow: row !important; grid-row-gap: 20px !important; left: 0; margin: 0 !important; position: absolute; top: 0; width: var(--left-thumbnails-width) !important;}.ba-left-thumbnails-navigation:not(.dots-position-outside) .ba-slideshow-dots.thumbnails-dots { left: 20px; bottom: 20px;}.ba-left-thumbnails-navigation .ba-slideshow { display: flex !important; flex-direction: row-reverse !important;}.ba-item-product-slideshow .ba-slideshow { min-height: inherit;}.ba-left-thumbnails-navigation .ba-slideshow-dots.thumbnails-dots > div { transform: translateX(0);}.ba-left-thumbnails-navigation.dots-position-outside .ba-slideshow-dots.thumbnails-dots .slideshow-content { margin-left: 20px !important;}.ba-left-thumbnails-navigation.dots-position-outside .ba-slideshow-dots.thumbnails-dots { width: var(--left-thumbnails-width) !important;}.ba-left-thumbnails-navigation.dots-position-outside .ba-slideshow-nav,.ba-left-thumbnails-navigation.dots-position-outside .ba-slideshow .ba-overlay { left: calc(var(--left-thumbnails-width) + 20px) !important;}.ba-left-thumbnails-navigation.dots-position-outside .ba-slideshow-nav { width: calc(100% - (calc(var(--left-thumbnails-width) + 20px))) !important;}.ba-left-thumbnails-navigation:not(.dots-position-outside) .ba-slideshow-nav { width: calc(100% - (calc(var(--left-thumbnails-width) + 40px))) !important;}.ba-left-thumbnails-navigation.dots-position-outside .ba-overlay { left: calc(var(--left-thumbnails-width) + 20px) !important;}.ba-left-thumbnails-navigation.dots-position-outside .slideshow-content { margin-left: calc(20px + var(--left-thumbnails-width)) !important; outline: none;}.ba-left-thumbnails-navigation.dots-position-outside .slideshow-content:focus li.active > .ba-slideshow-img { outline: 2px solid #0171e3; outline-offset: -2px;}@keyframes gridbox-gallery-out { to {opacity: 0;}}.carousel-modal.image-lightbox-out .gridbox-gallery-fade-animation { animation: gridbox-gallery-out .3s both ease-in-out !important; opacity: 1;}/*/* Plugin Button*/.ba-button-wrapper a { text-decoration: none;}.ba-item-categories .ba-blog-post .ba-app-sub-category a,.ba-blog-post-add-to-cart,.event-calendar-events-list a,.ba-post-navigation-info a,.intro-post-wrapper .intro-post-info > span a,.ba-item-icon-list .ba-icon-list-wrapper ul li a *,.ba-post-author-title a,.ba-item-one-page-menu a,.ba-item-main-menu a,.ba-item-main-menu .separator,.ba-item-tabs .nav-tabs a,.ba-blog-post-info-wrapper > span a,.intro-post-wrapper > span a,.ba-blog-post-title a,.ba-item-overlay-section .ba-button-wrapper .ba-btn-transition,.ba-btn-transition { cursor: pointer; transition: color .3s ease-in-out, background .3s ease-in-out;}.ba-item-main-menu .separator { cursor: default;}.ba-button-wrapper a { align-items: center; display: inline-flex; justify-content: center;}.ba-item-scroll-to .ba-btn-transition span + i,.ba-item-overlay-section .ba-btn-transition span + i,.ba-item-button .ba-btn-transition span + i { color: inherit; line-height: 1em; text-align: center; width: 1em;}.empty-textnode + i,.ba-item-overlay-section .empty-textnode + i,.ba-btn-transition .empty-textnode + i { margin: 0 !important;}@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; }}.ba-item-content-slider .active .fadeIn,.fadeIn { animation-name: fadeIn;}@keyframes fadeInBottom { 0% { opacity: 0; transform: translate3d(0,-10%,0); } 100% { opacity: 1; transform: none; }}.ba-item-content-slider .active .fadeInBottom,.fadeInBottom { animation-name: fadeInBottom;}</style>\n` +
    '\n' +
    '<script>\n' +
    '$(document).ready(function(){\n' +
    "    $(document).bind('keydown', function(e) { \n" +
    '        if (e.which == 27) {\n' +
    '   $( "div.ba-overlay-section-backdrop" ).removeClass( "lightbox visible-section" );\n' +
    '   $( "body" ).removeClass( "lightbox-open" );\n' +
    '        }\n' +
    '    }); \n' +
    '});\n' +
    '</script>\n' +
    '<script>\n' +
    '  $(document).ready(function() {\n' +
    `  $("#item-15476395270").on('click', function() {\n` +
    '    $(".lightbox.visible-section .searchLightbox .ba-search-wrapper input").focus();\n' +
    '});\n' +
    '  })\n' +
    '</script>\n' +
    '\n' +
    '<!-- Global site tag (gtag.js) - Google Analytics -->\n' +
    '<script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-71346478-1"></script>\n' +
    '<script>\n' +
    '  window.dataLayer = window.dataLayer || [];\n' +
    '  function gtag(){dataLayer.push(arguments);}\n' +
    "  gtag('js', new Date());\n" +
    '\n' +
    "  gtag('config', 'UA-71346478-1');\n" +
    '</script>\t<link href="https://www.sablik.eu/templates/gridbox/css/storage/code-editor-10.css?2025-01-22-10-38-18" rel="stylesheet" type="text/css">\n' +
    '    <script>\n' +
    "        var JUri = 'https://www.sablik.eu/',\n" +
    '            breakpoints = {"laptop":1200,"tablet":1024,"tablet-portrait":768,"phone":667,"phone-portrait":375},\n' +
    "            menuBreakpoint = '768' * 1,\n" +
    '            disableResponsive = false,\n' +
    '            google_fonts = 1,\n' +
    "            gridboxVersion = '2.19.0.5',\n" +
    '            themeData = {"id":"64","theme":"10","page":{"option":"com_gridbox","view":"page","id":"64"}};\n' +
    '    </script>\n' +
    '\t<meta property="og:type" content="article">\n' +
    '\t<meta property="og:title" content="Šlechta a kardinálové - 2. díl">\n' +
    '\t<meta property="og:url" content="https://www.sablik.eu/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-2-dil">\n' +
    '\t<meta property="og:image" content="https://www.sablik.eu/images/obrazky-clanky/francie/1-2.jpg">\n' +
    '\t<meta property="og:image:width" content="700">\n' +
    '\t<meta property="og:image:height" content="467">\n' +
    '\t<meta name="twitter:card" content="summary_large_image">\n' +
    '\t<link href="https://www.sablik.eu/templates/gridbox/library/icons/fontawesome/fontawesome.css" rel="stylesheet" type="text/css">\n' +
    '\t<link href="https://www.sablik.eu/templates/gridbox/library/icons/material/material.css" rel="stylesheet" type="text/css">\n' +
    '\t<link href="https://www.sablik.eu/templates/gridbox/library/icons/outline/flaticon.css" rel="stylesheet" type="text/css">\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initItems.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initText.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initmenu.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initheadline.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initMasonryBlog.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initoverlay-button.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initStoreSearch.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initCategories.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/inittabs.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/carousel/js/carousel.js?2.19.0.5"></script>\n' +
    '\t<script src="https://www.sablik.eu/components/com_gridbox/libraries/modules/initslideset.js?2.19.0.5"></script><script src="https://www.sablik.eu/components/com_gridbox/libraries/slideset/js/slideset.js"></script><script src="https://www.sablik.eu/components/com_gridbox/libraries/carousel/js/carousel.js"></script><link rel="stylesheet" href="https://www.sablik.eu/components/com_gridbox/libraries/slideshow/css/animation.css"></head>\n' +
    '<body class="com_gridbox page">\n' +
    '\n' +
    '    <div class="ba-overlay"></div>\n' +
    '    <header class="header ba-sticky-header-parent">\n' +
    '        \n' +
    '<div class="ba-wrapper ba-sticky-header">\n' +
    ' <div class="ba-section row-fluid visible" id="item-15477308280" data-effect="fadeInBottom">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    ' <div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid row-with-menu" id="item-15477308281">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-3 ba-sm-pt-6" data-span="3" style="">\n' +
    ' <div class="ba-grid-column column-content-align-middle" id="item-15477308282">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-text ba-item" id="item-15978392020">\n' +
    '\t<div class="content-text">\n' +
    '<p><strong>Ing. Radko Sáblík</strong></p>\n' +
    '</div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' \n' +
    ' <div class="ba-grid-column-wrapper ba-col-9 ba-sm-pt-6" data-span="9" style="">\n' +
    ' <div class="ba-grid-column column-content-align-middle" id="item-15477308283">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-main-menu ba-item" id="item-15477308626920" style="">\n' +
    '<div class="ba-menu-wrapper ba-hamburger-menu ba-collapse-submenu">\n' +
    '<div class="main-menu hide-menu" style="">\n' +
    '<div class="close-menu"><i class="zmdi zmdi-close"></i></div>\n' +
    '<div class="integration-wrapper">\n' +
    '<ul class="mod-menu mod-list nav ">\n' +
    '<li class="nav-item item-103 default current active"><a href="/" aria-current="location" tabindex="0"># Home</a></li>\n' +
    '<li class="nav-item item-110"><a href="/o-me-osobe" tabindex="0"># O mé osobě</a></li>\n' +
    '<li class="nav-item item-107"><a href="/contact-us" tabindex="0"># Kontakt</a></li>\n' +
    '</ul>\n' +
    '</div>\n' +
    '</div>\n' +
    '<div class="open-menu"><i class="zmdi zmdi-menu"></i></div>\n' +
    '<div class="ba-wrapper tabs-content-wrapper megamenu-center" data-id="item-15477308626925" data-megamenu="item-104" style="margin-left: -759.344px; width: 1903px; max-width: 1642.48px;"><div class="ba-section row-fluid fadeIn" id="item-15477308626925">\n' +
    '<div class="ba-overlay"></div>\n' +
    '<div class="ba-section-items"><div class="ba-row-wrapper ba-container" style=""><div class="ba-row row-fluid" id="item-15477308626926">\n' +
    '<div class="ba-overlay"></div>\n' +
    '<div class="column-wrapper">\n' +
    '<div class="ba-grid-column-wrapper ba-col-8 ba-tb-pt-12" data-span="8" style=""><div class="ba-grid-column" id="item-15477308626927">\n' +
    '<div class="ba-overlay"></div>\n' +
    '<div class="ba-item-headline ba-item" id="item-15477308626921" style=""><div class="headline-wrapper"><h6># Recent</h6></div></div>\n' +
    '<div class="ba-item-recent-posts ba-item" id="item-15477308626922" data-app="2" data-count="3" data-sorting="created" data-maximum="75" data-category="1" style=""><div class="ba-blog-posts-wrapper ba-grid-layout"></div></div>\n' +
    '</div></div>\n' +
    '<div class="ba-grid-column-wrapper ba-col-4 ba-tb-pt-12" data-span="4" style=""><div class="ba-grid-column" id="item-15477308626928">\n' +
    '<div class="ba-overlay"></div>\n' +
    '<div class="ba-item-headline ba-item" id="item-15477308626923" style=""><div class="headline-wrapper"><h6># Tags</h6></div></div>\n' +
    '<div class="ba-item-tags ba-item" id="item-15477308626924" data-category="" data-app="2" data-limit="10"><div class="ba-button-wrapper"><a href="/blog/tag/rozhovor" class="ba-btn-transition"><span>rozhovor</span></a><a href="/blog/tag/video" class="ba-btn-transition"><span>video</span></a><a href="/blog/tag/osvetim" class="ba-btn-transition"><span>osvětim</span></a><a href="/blog/tag/filip-rezabek" class="ba-btn-transition"><span>filip řežábek</span></a><a href="/blog/tag/maturitni-zkouska" class="ba-btn-transition"><span>maturitní zkouška</span></a><a href="/blog/tag/vzdelavani-4-0" class="ba-btn-transition"><span>vzdělávání 4.0</span></a><a href="/blog/tag/sikana" class="ba-btn-transition"><span>šikana</span></a><a href="/blog/tag/studensky-projekt" class="ba-btn-transition"><span>studenský projekt</span></a><a href="/blog/tag/busyman" class="ba-btn-transition"><span>busyman</span></a><a href="/blog/tag/sspstv" class="ba-btn-transition"><span>sspstv</span></a>\n' +
    '</div></div>\n' +
    '</div></div>\n' +
    '</div>\n' +
    '</div></div></div>\n' +
    '</div></div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ba-menu-backdrop"></div>\n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' </div>\n' +
    '</div>\n' +
    ' <div class="ba-wrapper">\n' +
    ' <div class="ba-section row-fluid" id="item-179497138800">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    ' \n' +
    ' \n' +
    '<div class="ba-row-wrapper" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-16024127750">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12">\n' +
    ' <div class="ba-grid-column" id="item-16024127751">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-16029503770">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-16029503771">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-overlay-section ba-item" id="item-15476395270" data-overlay="item-15476395271" style="">\n' +
    ' <div class="ba-button-wrapper">\n' +
    ' <a class="ba-btn-transition" tabindex="0">\n' +
    ' <span class="">Hledat...</span>\n' +
    ' \t<i class="zmdi zmdi-search"></i>\n' +
    ' </a>\n' +
    ' </div>\n' +
    ' \n' +
    ' \n' +
    '\n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-item-text ba-item" id="item-16029487550" style="">\n' +
    '\t<div class="content-text"><p><br></p></div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-text ba-item" id="item-16029515557780" style="">\n' +
    '\t<div class="content-text"><p><br></p></div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-headline ba-item text-shadow" id="item-16024128020" style="">\n' +
    '\t<div class="headline-wrapper rotate">\n' +
    ' <h1 style="">\n' +
    '<span><span style="animation-delay: 0s">I</span><span style="animation-delay: 0.01764705882352941s">n</span><span style="animation-delay: 0.03529411764705882s">g</span><span style="animation-delay: 0.052941176470588235s">.</span><span style="animation-delay: 0.07058823529411765s">&nbsp;</span></span><span><span style="animation-delay: 0.08823529411764705s">R</span><span style="animation-delay: 0.10588235294117646s">a</span><span style="animation-delay: 0.12352941176470586s">d</span><span style="animation-delay: 0.14117647058823526s">k</span><span style="animation-delay: 0.15882352941176467s">o</span><span style="animation-delay: 0.17647058823529407s">&nbsp;</span></span><span><span style="animation-delay: 0.19411764705882348s">S</span><span style="animation-delay: 0.21176470588235288s">á</span><span style="animation-delay: 0.2294117647058823s">b</span><span style="animation-delay: 0.2470588235294117s">l</span><span style="animation-delay: 0.2647058823529411s">í</span><span style="animation-delay: 0.28235294117647053s">k</span></span>\n' +
    '</h1>\n' +
    ' </div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-text ba-item text-shadow" id="item-16029485170">\n' +
    '\t<div class="content-text">\n' +
    '<p style="text-align: center;">Osobní stánky ředitele školy</p>\n' +
    '</div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-row-wrapper" style="">\n' +
    ' <div class="ba-row row-fluid row-with-menu" id="item-16029492336760">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12">\n' +
    ' <div class="ba-grid-column" id="item-16029492336762">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-main-menu ba-item" id="item-16029492336761" style="">\n' +
    '<div class="ba-menu-wrapper ba-hamburger-menu ba-collapse-submenu">\n' +
    '<div class="main-menu hide-menu" style="">\n' +
    '<div class="close-menu"><i class="zmdi zmdi-close"></i></div>\n' +
    '<div class="integration-wrapper">\n' +
    '<ul class="mod-menu mod-list nav ">\n' +
    '<li class="nav-item item-103 default current active"><a href="/" aria-current="location" tabindex="0"># Home</a></li>\n' +
    '<li class="nav-item item-110"><a href="/o-me-osobe" tabindex="0"># O mé osobě</a></li>\n' +
    '<li class="nav-item item-107"><a href="/contact-us" tabindex="0"># Kontakt</a></li>\n' +
    '</ul>\n' +
    '</div>\n' +
    '</div>\n' +
    '<div class="open-menu"><i class="zmdi zmdi-menu"></i></div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ba-menu-backdrop"></div>\n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '    </header>\n' +
    '    <div class="body">\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '        <div class="row-fluid main-body module-position">\n' +
    '\n' +
    '            <div class="ba-col-12">\n' +
    '                <div id="system-message-container">\n' +
    '\t</div>\n' +
    '\n' +
    '                <div class="row-fluid">\n' +
    '    <div class="ba-gridbox-page row-fluid">\n' +
    '<div class="ba-wrapper">\n' +
    ' <div class="ba-section row-fluid" id="item-14975226220">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    ' <div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478011260">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12">\n' +
    ' <div class="ba-grid-column" id="item-15478011261">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-row-wrapper ba-container">\n' +
    ' <div class="ba-row row-fluid" id="item-14975226221">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-8" data-span="8" style="">\n' +
    ' <div class="ba-grid-column" id="item-14975226225">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid row-with-intro-items" id="item-15477409720">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15477409721">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-post-intro ba-item" id="item-14975226224" style="">\n' +
    ' <div class="intro-post-wrapper fullscreen-post">\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    ' <div class="intro-post-image-wrapper">\n' +
    '<div class="ba-overlay"></div>\n' +
    '<div class="intro-post-image" style="background-image: url(/images/obrazky-clanky/francie/1-2.jpg);"></div>\n' +
    '</div>\n' +
    '<div class="intro-post-title-wrapper">\n' +
    ' <h1 class="intro-post-title">Šlechta a kardinálové - 2. díl</h1>\n' +
    ' </div>\n' +
    '<div class="intro-post-info">\n' +
    '<div class="intro-post-info-wrapper">\n' +
    '<span class="intro-post-date">24 červenec 2014</span>\n' +
    '<span class="intro-post-category"><a href="/ma-tvorba/slechta-a-kardinalove">Šlechta a kardinálové</a></span>\n' +
    '</div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' \n' +
    ' \n' +
    ' </div>\n' +
    '<div class="ba-item-blog-content ba-item empty-blog-content" id="item-14975226223" style="">\n' +
    ' <div class="blog-content-wrapper">\n' +
    ' <div class="ba-edit-section row-fluid" id="ba-edit-section"><div class="ba-wrapper">\n' +
    ' <div class="ba-section row-fluid" id="item-16039171500">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    ' <div class="ba-row-wrapper ba-container">\n' +
    ' <div class="ba-row row-fluid" id="item-16039171501">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12">\n' +
    ' <div class="ba-grid-column" id="item-16039171502">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-custom-html ba-item" id="item-16039193810">\n' +
    '\t<style scoped=""></style>\n' +
    ' <div class="custom-html"><object height="920" width="100%" type="application/pdf" data="/images/vlastni-tvorba/francie/1-serie/francie_s1e2_compressed.pdf?#scrollbar=1&amp;toolbar=1&amp;navpanes=1&amp;view=FitVB">\n' +
    ' <p>Váš prohlížeč nepodporuje zobrazení dokumentu PDF</p>\n' +
    '</object></div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div></div>\n' +
    ' </div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="blog-content-backdrop"></div>\n' +
    ' </div>\n' +
    '<div class="ba-item-headline ba-item" id="item-15478033300080" style="">\n' +
    '\t<div class="headline-wrapper">\n' +
    ' <h6># Tagy článku</h6>\n' +
    ' </div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-post-tags ba-item" id="item-15478022310">\n' +
    '\t<div class="ba-button-wrapper"></div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478026164960">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15478026164961">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-post-navigation ba-item" id="item-15478026240" data-maximum="50" style="">\n' +
    ' <div class="ba-blog-posts-wrapper ba-classic-layout"><div class="ba-blog-post post-navigation-previous" data-id="62">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1451187580459-43490279c0fa.jpg" alt="Světový řád" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/ma-tvorba/svetovy-rad" aria-label="Světový řád" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1451187580459-43490279c0fa.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/ma-tvorba/svetovy-rad" aria-label="Světový řád" tabindex="-1"></a><div class="ba-post-navigation-info"><a href="/ma-tvorba/svetovy-rad" aria-label="Světový řád" tabindex="-1">Předchozí</a></div>\n' +
    '<div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/svetovy-rad">Světový řád</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            \n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post post-navigation-next" data-id="69">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/obrazky-clanky/francie/1-7.jpg" alt="Šlechta a kardinálové - 7. díl" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-7-dil" aria-label="Šlechta a kardinálové - 7. díl" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/francie/1-7.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-7-dil" aria-label="Šlechta a kardinálové - 7. díl" tabindex="-1"></a><div class="ba-post-navigation-info"><a href="/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-7-dil" aria-label="Šlechta a kardinálové - 7. díl" tabindex="-1">Další</a></div>\n' +
    '<div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-7-dil">Šlechta a kardinálové - 7. díl</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            \n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' \n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478025060">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15478025061">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-headline ba-item" id="item-15478023436070" style="">\n' +
    '\t<div class="headline-wrapper">\n' +
    ' <h6># náhodný výběr</h6>\n' +
    ' </div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-recent-posts ba-item" id="item-15478049350" data-app="2" data-count="4" data-sorting="random" data-maximum="75" data-category="">\n' +
    ' <div class="ba-blog-posts-wrapper ba-grid-layout"><div class="ba-blog-post" data-id="39">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/obrazky-clanky/skolstvi/ruzne/praha-ocima-studentu-ssps-smichov-2-kveten-05_galerie-980.jpg" alt="Střední škola, z níž absolventi zapomínají odcházet" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/skolstvi/stredni-skola-z-niz-absolventi-zapominaji-odchazet" aria-label="Střední škola, z níž absolventi zapomínají odcházet" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/skolstvi/ruzne/praha-ocima-studentu-ssps-smichov-2-kveten-05_galerie-980.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/skolstvi/stredni-skola-z-niz-absolventi-zapominaji-odchazet" aria-label="Střední škola, z níž absolventi zapomínají odcházet" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/skolstvi/stredni-skola-z-niz-absolventi-zapominaji-odchazet">Střední škola, z níž absolventi zapomínají odcházet</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>24 říjen 2019</span></span>\n' +
    '            <span class="ba-blog-post-category"><a href="/skolstvi">Školství</a></span>\n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post" data-id="117">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/obrazky-clanky/videa/3.jpg" alt="Rozhovor - Odpolední vyučování by mohlo být online, říká student Smíchovské SPŠ a gymnázia Jiří Vojtěch" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/videa/rozhovor-odpoledni-vyucovani-by-mohlo-byt-online-rika-student-smichovske-sps-a-gymnazia-jiri-vojtech" aria-label="Rozhovor - Odpolední vyučování by mohlo být online, říká student Smíchovské SPŠ a gymnázia Jiří Vojtěch" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/videa/3.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/videa/rozhovor-odpoledni-vyucovani-by-mohlo-byt-online-rika-student-smichovske-sps-a-gymnazia-jiri-vojtech" aria-label="Rozhovor - Odpolední vyučování by mohlo být online, říká student Smíchovské SPŠ a gymnázia Jiří Vojtěch" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/videa/rozhovor-odpoledni-vyucovani-by-mohlo-byt-online-rika-student-smichovske-sps-a-gymnazia-jiri-vojtech">Rozhovor - Odpolední vyučování by mohlo být online, říká student Smíchovské SPŠ a gymnázia Jiří Vojtěch</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>29 leden 2021</span></span>\n' +
    '            <span class="ba-blog-post-category"><a href="/videa">Videa</a></span>\n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post" data-id="55">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/divoky_zapad_title-png.png" alt="Divoký západ - Rozcestník" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/ma-tvorba/divoky-zapad-rozcestnik" aria-label="Divoký západ - Rozcestník" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/divoky_zapad_title-png.png);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/ma-tvorba/divoky-zapad-rozcestnik" aria-label="Divoký západ - Rozcestník" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/divoky-zapad-rozcestnik">Divoký západ - Rozcestník</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>25 září 2015</span></span>\n' +
    '            <span class="ba-blog-post-category"><a href="/ma-tvorba">Má tvorba</a></span>\n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post" data-id="155">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/ssps_budova.jpg" alt="120 let existence smíchovské střední školy" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/skolstvi/120-let-existence-smichovske-stredni-skoly" aria-label="120 let existence smíchovské střední školy" style="background-image: url(https://www.sablik.eu/images/ssps_budova.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/skolstvi/120-let-existence-smichovske-stredni-skoly" aria-label="120 let existence smíchovské střední školy" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/skolstvi/120-let-existence-smichovske-stredni-skoly">120 let existence smíchovské střední školy</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>22 leden 2025</span></span>\n' +
    '            <span class="ba-blog-post-category"><a href="/skolstvi">Školství</a></span>\n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' \n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' \n' +
    ' <div class="ba-grid-column-wrapper ba-col-4" data-span="4" style="">\n' +
    ' <div class="ba-grid-column" id="item-14975226226">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478185090990">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15478185090993">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-headline ba-item" id="item-15478185090991" style="">\n' +
    '\t<div class="headline-wrapper">\n' +
    ' <h6># kategorie</h6>\n' +
    ' </div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-categories ba-item" id="item-15478185090992" data-app="2">\n' +
    ' <div class="ba-categories-wrapper ba-classic-layout"><div class="ba-blog-post" data-id="10"><div class="ba-blog-post-content"><a href="/skolstvi"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/skolstvi"><span>Školství</span></a></h3></div></div></div><div class="ba-blog-post" data-id="7"><div class="ba-blog-post-content"><a href="/ma-tvorba"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba"><span>Má tvorba</span></a></h3></div></div></div><div class="ba-blog-post" data-id="15"><div class="ba-blog-post-content"><a href="/videa"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/videa"><span>Videa</span></a></h3></div></div></div></div>\n' +
    ' \n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478185091130">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15478185091136">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-tabs ba-item" id="item-15478185091131">\n' +
    ' <div class="ba-tabs-wrapper tabs-top">\n' +
    ' <ul class="nav nav-tabs">\n' +
    '<li class="">\n' +
    ' <a href="#tab-15478185091132" data-toggle="tab" tabindex="0">\n' +
    ' <span>\n' +
    ' <span class="tabs-title">Populární</span>\n' +
    ' </span>\n' +
    ' </a>\n' +
    ' </li>\n' +
    ' <li class="active">\n' +
    ' <a href="#tab-15478185091133" data-toggle="tab" tabindex="0">\n' +
    ' <span>\n' +
    ' <span class="tabs-title">Nejnovější</span>\n' +
    ' </span>\n' +
    ' </a>\n' +
    ' </li>\n' +
    ' </ul>\n' +
    '<div class="tab-content">\n' +
    ' <div class="tab-pane" id="tab-15478185091132">\n' +
    '<div class="ba-wrapper tabs-content-wrapper">\n' +
    ' <div class="ba-section row-fluid" id="item-15478185091137">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478185091138">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15478185091139">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-recent-posts ba-item" id="item-15478185091134" data-app="2" data-count="3" data-sorting="hits" data-maximum="75" data-category="" style="">\n' +
    ' <div class="ba-blog-posts-wrapper ba-classic-layout"><div class="ba-blog-post" data-id="62">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1451187580459-43490279c0fa.jpg" alt="Světový řád" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/ma-tvorba/svetovy-rad" aria-label="Světový řád" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1451187580459-43490279c0fa.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/ma-tvorba/svetovy-rad" aria-label="Světový řád" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/svetovy-rad">Světový řád</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>24 červenec 2014</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post" data-id="145">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/ivan-aleksic-pdrfeednick-unsplash.jpg" alt="Hlavní problémy českého školství" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/skolstvi/hlavni-problemy-ceskeho-skolstvi" aria-label="Hlavní problémy českého školství" style="background-image: url(https://www.sablik.eu/images/ivan-aleksic-pdrfeednick-unsplash.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/skolstvi/hlavni-problemy-ceskeho-skolstvi" aria-label="Hlavní problémy českého školství" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/skolstvi/hlavni-problemy-ceskeho-skolstvi">Hlavní problémy českého školství</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>18 únor 2024</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post" data-id="51">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/line_pierces_solid.png" alt="Deskriptivní geometrie" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/ma-tvorba/deskriptivni-geometrie" aria-label="Deskriptivní geometrie" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/line_pierces_solid.png);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/ma-tvorba/deskriptivni-geometrie" aria-label="Deskriptivní geometrie" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/deskriptivni-geometrie">Deskriptivní geometrie</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>28 listopad 2011</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' \n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    ' </div>\n' +
    ' <div class="tab-pane active" id="tab-15478185091133">\n' +
    '<div class="ba-wrapper tabs-content-wrapper">\n' +
    ' <div class="ba-section row-fluid" id="item-15478185091140">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478185091141">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15478185091142">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-recent-posts ba-item" id="item-15478185091135" data-app="2" data-count="3" data-sorting="created" data-maximum="75" data-category="" style="">\n' +
    ' <div class="ba-blog-posts-wrapper ba-classic-layout"><div class="ba-blog-post" data-id="158">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/sablik-titulka.jpeg" alt="Rychlý a trochu neformální rozhovor" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/skolstvi/rychly-a-trochu-neformalni-rozhovor" aria-label="Rychlý a trochu neformální rozhovor" style="background-image: url(https://www.sablik.eu/images/sablik-titulka.jpeg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/skolstvi/rychly-a-trochu-neformalni-rozhovor" aria-label="Rychlý a trochu neformální rozhovor" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/skolstvi/rychly-a-trochu-neformalni-rozhovor">Rychlý a trochu neformální rozhovor</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>22 leden 2025</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post" data-id="157">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/tablet-1075790_640.jpg" alt="Studenti Smíchovské SPŠ a Gymnázia pomáhají učitelům základních škol s výukou informatiky" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/skolstvi/studenti-smichovske-sps-a-gymnazia-pomahaji-ucitelum-zakladnich-skol-s-vyukou-informatiky" aria-label="Studenti Smíchovské SPŠ a Gymnázia pomáhají učitelům základních škol s výukou informatiky" style="background-image: url(https://www.sablik.eu/images/tablet-1075790_640.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/skolstvi/studenti-smichovske-sps-a-gymnazia-pomahaji-ucitelum-zakladnich-skol-s-vyukou-informatiky" aria-label="Studenti Smíchovské SPŠ a Gymnázia pomáhají učitelům základních škol s výukou informatiky" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/skolstvi/studenti-smichovske-sps-a-gymnazia-pomahaji-ucitelum-zakladnich-skol-s-vyukou-informatiky">Studenti Smíchovské SPŠ a Gymnázia pomáhají učitelům základních škol s výukou informatiky</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>22 leden 2025</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ba-blog-post" data-id="156">\n' +
    '    <div class="ba-blog-post-image">\n' +
    '<img src="https://www.sablik.eu/images/student-849826_640.jpg" alt="Jak oslovit žáky a studenty a jak podporovat ty nadané" width="100" height="100"><div class="ba-overlay"></div>\n' +
    '<a tabindex="-1" href="/skolstvi/jak-oslovit-zaky-a-studenty-a-jak-podporovat-ty-nadane-2" aria-label="Jak oslovit žáky a studenty a jak podporovat ty nadané" style="background-image: url(https://www.sablik.eu/images/student-849826_640.jpg);"></a>\n' +
    '</div>\n' +
    '    <div class="ba-blog-post-content">\n' +
    '        <a href="/skolstvi/jak-oslovit-zaky-a-studenty-a-jak-podporovat-ty-nadane-2" aria-label="Jak oslovit žáky a studenty a jak podporovat ty nadané" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/skolstvi/jak-oslovit-zaky-a-studenty-a-jak-podporovat-ty-nadane-2">Jak oslovit žáky a studenty a jak podporovat ty nadané</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>22 leden 2025</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' \n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' \n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-row-wrapper ba-container" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15478185091210">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15478185091213">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-headline ba-item" id="item-15478185091211" style="">\n' +
    '\t<div class="headline-wrapper">\n' +
    ' <h6># Tagy</h6>\n' +
    ' </div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-tags ba-item" id="item-15478185091212" data-category="" data-app="2" data-limit="10">\n' +
    '\t<div class="ba-button-wrapper"><a href="/blog/tag/rozhovor" class="ba-btn-transition"><span>rozhovor</span></a><a href="/blog/tag/video" class="ba-btn-transition"><span>video</span></a><a href="/blog/tag/osvetim" class="ba-btn-transition"><span>osvětim</span></a><a href="/blog/tag/filip-rezabek" class="ba-btn-transition"><span>filip řežábek</span></a><a href="/blog/tag/maturitni-zkouska" class="ba-btn-transition"><span>maturitní zkouška</span></a><a href="/blog/tag/vzdelavani-4-0" class="ba-btn-transition"><span>vzdělávání 4.0</span></a><a href="/blog/tag/sikana" class="ba-btn-transition"><span>šikana</span></a><a href="/blog/tag/studensky-projekt" class="ba-btn-transition"><span>studenský projekt</span></a><a href="/blog/tag/busyman" class="ba-btn-transition"><span>busyman</span></a><a href="/blog/tag/sspstv" class="ba-btn-transition"><span>sspstv</span></a>\n' +
    '</div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' \n' +
    '</div>\n' +
    ' </div>\n' +
    '</div>    </div>\n' +
    '</div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '    </div>\n' +
    '    <footer class="footer">\n' +
    '        <div class="ba-wrapper">\n' +
    ' <div class="ba-section row-fluid" id="item-1494846679">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    ' \n' +
    '<div class="ba-row-wrapper">\n' +
    ' <div class="ba-row row-fluid" id="item-15476505490">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12">\n' +
    ' <div class="ba-grid-column" id="item-15476505491">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-row-wrapper" style="">\n' +
    ' <div class="ba-row row-fluid" id="item-15476517330">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12" style="">\n' +
    ' <div class="ba-grid-column" id="item-15476517331">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-headline ba-item" id="item-15478135701480" style="">\n' +
    '\t<div class="headline-wrapper">\n' +
    ' <h3>Má vlastní tvorba</h3>\n' +
    ' </div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-recent-posts-slider ba-item" id="item-15476412690" style="">\n' +
    ' <div class="slideset-wrapper">\n' +
    ' <ul class="ba-slideset carousel-type enabled-carousel-sliding slideset-loaded" style="--carousel-caption-height: 96px;">\n' +
    '<div class="slideshow-content" style="transition: transform 0.5s linear; height: 346px;" data-transform=""><li class="item active" data-id="59" data-position="0" style="left: calc(0% + 0px);">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1521412644187-c49fa049e84d.jpg);"><a href="/ma-tvorba/motolsky-zazrak" aria-label="Motolský zázrak" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/motolsky-zazrak" aria-label="Motolský zázrak" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/motolsky-zazrak">Motolský zázrak</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>17 duben 2010</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '<li class="item" data-id="62">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1451187580459-43490279c0fa.jpg);"><a href="/ma-tvorba/svetovy-rad" aria-label="Světový řád" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/svetovy-rad" aria-label="Světový řád" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/svetovy-rad">Světový řád</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>24 červenec 2014</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '<li class="item" data-id="52">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1515524738708-327f6b0037a7.jpg);"><a href="/ma-tvorba/historie-informacnich-technologii-v-kostce" aria-label="Historie informačních technologií v kostce" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/historie-informacnich-technologii-v-kostce" aria-label="Historie informačních technologií v kostce" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/historie-informacnich-technologii-v-kostce">Historie informačních technologií v kostce</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>21 leden 2016</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '<li class="item" data-id="55">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/divoky_zapad_title-png.png);"><a href="/ma-tvorba/divoky-zapad-rozcestnik" aria-label="Divoký západ - Rozcestník" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/divoky-zapad-rozcestnik" aria-label="Divoký západ - Rozcestník" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/divoky-zapad-rozcestnik">Divoký západ - Rozcestník</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>25 září 2015</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '<li class="item " data-id="47">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/child_survivors_of_auschwitz.jpeg);"><a href="/ma-tvorba/kdyz-prisel-cas-zabijeni-rozcestnik" aria-label="Když přišel čas zabíjení - Rozcestník" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/kdyz-prisel-cas-zabijeni-rozcestnik" aria-label="Když přišel čas zabíjení - Rozcestník" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/kdyz-prisel-cas-zabijeni-rozcestnik">Když přišel čas zabíjení - Rozcestník</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>16 prosinec 2015</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '<li class="item " data-id="95">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/photo-1516481605912-d34c1411504c.jpg);"><a href="/ma-tvorba/cesta-na-vecnost" aria-label="Cesta na věčnost" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/cesta-na-vecnost" aria-label="Cesta na věčnost" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/cesta-na-vecnost">Cesta na věčnost</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>18 duben 2011</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '<li class="item " data-id="54">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/svat-png.png);"><a href="/ma-tvorba/seminar-vedy-a-techniky" aria-label="Seminář vědy a techniky" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/seminar-vedy-a-techniky" aria-label="Seminář vědy a techniky" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/seminar-vedy-a-techniky">Seminář vědy a techniky</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>21 leden 2016</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '<li class="item " data-id="53">\n' +
    '    <div class="ba-slideshow-img" style="background-image: url(https://www.sablik.eu/images/obrazky-clanky/ma-tvorba/vat_uvod-png.png);"><a href="/ma-tvorba/osobnosti-vedy-a-techniky" aria-label="Osobnosti vědy a techniky" tabindex="-1"></a></div>\n' +
    '    <div class="ba-slideshow-caption">\n' +
    '        <a href="/ma-tvorba/osobnosti-vedy-a-techniky" aria-label="Osobnosti vědy a techniky" tabindex="-1"></a><div class="ba-blog-post-title-wrapper"><h3 class="ba-blog-post-title"><a href="/ma-tvorba/osobnosti-vedy-a-techniky">Osobnosti vědy a techniky</a></h3></div>\n' +
    '        <div class="ba-blog-post-info-wrapper">\n' +
    '            <span class="ba-blog-post-date"><span>21 leden 2016</span></span>\n' +
    '            \n' +
    '            \n' +
    '        </div>\n' +
    '        \n' +
    '        \n' +
    '    </div>\n' +
    '</li>\n' +
    '</div>\n' +
    ' \n' +
    ' \n' +
    ' </ul>\n' +
    '<div class="ba-overlay"></div>\n' +
    ' </div>\n' +
    ' \n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '<div class="ba-row-wrapper">\n' +
    ' <div class="ba-row row-fluid" id="item-15476505578710">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12">\n' +
    ' <div class="ba-grid-column" id="item-15476505578711">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' \n' +
    '<div class="ba-item-text ba-item" id="item-15978455270" style="">\n' +
    '\t<div class="content-text">\n' +
    '<p style="text-align: center;">Ing. Radko Sáblík</p>\n' +
    '<p style="text-align: center;"><small>osobní stránky ředitele školy</small></p>\n' +
    '</div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '<div class="ba-item-social-icons ba-item" id="item-16118395520">\n' +
    '\t<div class="ba-icon-wrapper">\n' +
    '<a href="https://www.linkedin.com/in/radko-s%C3%A1bl%C3%ADk-a3ab641a9/" target="_blank"><i class="zmdi zmdi-twitter ba-btn-transition"></i></a><a href="https://www.linkedin.com/in/radko-s%C3%A1bl%C3%ADk-a3ab641a9/" target="_blank"><i class="fab fa-linkedin-in ba-btn-transition"></i></a><a href="https://www.youtube.com/channel/UCeTaRJXGBiZAozrovUMT9rA" target="_blank"><i class="fab fa-youtube ba-btn-transition"></i></a><a href="mailto:radko.sablik@ssps.cz" target="_blank"><i class="zmdi zmdi-email ba-btn-transition"></i></a>\n' +
    '</div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    '</div>\n' +
    ' </div>\n' +
    '</div>    </footer>\n' +
    '\n' +
    `<script type="text/javascript">   function cookiehintsubmitnoc(obj) {     if (confirm("Odmítnutí ovlivní funkce webových stránek. Opravdu chcete odmítnout?")) {       document.cookie = 'reDimCookieHint=-1; expires=0; path=/';       cookiehintfadeOut(document.getElementById('redim-cookiehint-bottom'));       return true;     } else {       return false;     }   } </script> <div id="redim-cookiehint-bottom">   <div id="redim-cookiehint">     <div class="cookiehead">       <span class="headline">We use cookies</span>     </div>     <div class="cookiecontent">   <p>Na naší webové stránce používáme cookies. Některé z nich jsou nutné pro běh stránky, zatímco jiné nám pomáhají vylepšit vlastnosti stránky na základě uživatelských zkušeností (tracking cookies). Sami můžete rozhodnout, zda cookies povolíte. Mějte prosím na paměti, že při odmítnutí, nemusí být stránka zcela funkční.</p>    </div>     <div class="cookiebuttons">       <a id="cookiehintsubmit" onclick="return cookiehintsubmit(this);" href="https://www.sablik.eu/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-2-dil?rCH=2" class="btn">Ok</a>           <a id="cookiehintsubmitno" onclick="return cookiehintsubmitnoc(this);" href="https://www.sablik.eu/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-2-dil?rCH=-2" class="btn">Nesouhlasím</a>          <div class="text-center" id="cookiehintinfo">                     </div>      </div>     <div class="clr"></div>   </div> </div>     <script type="text/javascript">        document.addEventListener("DOMContentLoaded", function(event) {         if (!navigator.cookieEnabled){           document.getElementById('redim-cookiehint-bottom').remove();         }       });        function cookiehintfadeOut(el) {         el.style.opacity = 1;         (function fade() {           if ((el.style.opacity -= .1) < 0) {             el.style.display = "none";           } else {             requestAnimationFrame(fade);           }         })();       }         function cookiehintsubmit(obj) {         document.cookie = 'reDimCookieHint=1; expires=Thu, 18 Feb 2027 23:59:59 GMT;57; path=/';         cookiehintfadeOut(document.getElementById('redim-cookiehint-bottom'));         return true;       }        function cookiehintsubmitno(obj) {         document.cookie = 'reDimCookieHint=-1; expires=0; path=/';         cookiehintfadeOut(document.getElementById('redim-cookiehint-bottom'));         return true;       }     </script>  \n` +
    '\n' +
    '<div class="ba-overlay-section-backdrop lightbox" data-id="item-15476395271">\n' +
    ' <div class="ba-overlay-section-close" style="width: calc(100% - 17px);"></div>\n' +
    ' <div class="ba-wrapper ba-overlay-section" data-id="item-15476395271">\n' +
    ' <div class="ba-section row-fluid" id="item-15476395271">\n' +
    ' <div class="close-overlay-section">\n' +
    ' <i class="ba-icons ba-icon-close ba-overlay-section-close" tabindex="0"></i>\n' +
    ' </div>\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-section-items">\n' +
    ' <div class="ba-row-wrapper ba-container">\n' +
    ' <div class="ba-row row-fluid" id="item-15476395273">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="column-wrapper">\n' +
    ' <div class="ba-grid-column-wrapper ba-col-12" data-span="12">\n' +
    ' <div class="ba-grid-column" id="item-15476395274">\n' +
    ' <div class="ba-overlay"></div>\n' +
    ' \n' +
    ' \n' +
    ' <div class="ba-item-search ba-item searchLightbox" id="item-15476399151">\n' +
    '\t<div class="ba-search-wrapper">\n' +
    ' <input type="text" placeholder="Hledáte něco?" data-search-url="/search?query=" aria-label="Enter a search term"><i class="flaticon-search"></i>\n' +
    '</div>\n' +
    '\t\n' +
    ' \n' +
    '</div>\n' +
    '\n' +
    ' \n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '</div></body></html>'});
})();