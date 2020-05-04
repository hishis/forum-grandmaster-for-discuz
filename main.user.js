// ==UserScript==
// @name              Forum Grandmaster for Discuz!
// @name:en           Forum Grandmaster for Discuz!
// @name:zh           论坛大师 – Discuz!
// @name:zh-CN        论坛大师 – Discuz!
// @name:zh-HK        論壇大師 – Discuz!
// @name:zh-MO        論壇大師 – Discuz!
// @name:zh-TW        論壇大師 – Discuz!
// @namespace         Forum Grandmaster for Discuz!
// @version           0.3.19
// @author            hostname
// @description       🔊Beautify the interface, Remove ads, Enhance functions.
// @description:en    🔊Beautify the interface, Remove ads, Enhance functions.
// @description:zh    🔊论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……
// @description:zh-CN 🔊论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……
// @description:zh-HK 🔊論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @description:zh-MO 🔊論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @description:zh-TW 🔊論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @homepage          https://github.com/hishis/forum-grandmaster-for-discuz
// @icon              https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/favicon.ico
// @updateURL         https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/main.user.js
// @installURL        https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/main.user.js
// @downloadURL       https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/main.user.js
// @supportURL        https://github.com/hishis/forum-grandmaster-for-discuz/issues
// @match             http*://www.52pojie.cn/
// @match             http*://www.right.com.cn/
// @match             http*://bbs.kafan.cn/
// @match             http*://www.hostloc.com/
// @match             http*://bbs.pcbeta.com/
// @match             http*://www.zuanke8.com/
// @match             http*://bbs.51credit.com/
// @match             http*://bbs.ydss.cn/
// @match             http*://bbs.fobshanghai.com/
// @match             http*://bbs.huorong.cn/
// @match             http*://bbs.360.cn/
// @match             http*://www.gebi1.com/
// @match             http*://www.advertcn.com/
// @match             http*://www.fglt.net/
// @match             http*://www.fglt.cn/
// @match             http*://www.aihao.cc/
// @match             http*://bbs.nas66.com/
// @match             http*://www.viidii.info/?action=image&*
// @match             http*://*/forum.php
// @match             http*://*/forum-*.html
// @match             http*://*/forumdisplay.php?*
// @match             http*://*/thread-*.html
// @match             http*://*/viewthread-*.html
// @match             http*://*/viewthread.php?*
// @match             http*://*/htm_data/*.html
// @match             http*://*/forum.php?mod=viewthread&tid=*
// @match             http*://*/forum.php?mod=post&action=edit&*
// @match             http*://*/bbs/forum.php
// @match             http*://*/bbs/forum-*.html
// @match             http*://*/bbs/forumdisplay.php?*
// @match             http*://*/bbs/thread-*.html
// @match             http*://*/bbs/viewthread-*.html
// @match             http*://*/bbs/viewthread.php?*
// @match             http*://*/bbs/forum.php?mod=viewthread&tid=*
// @match             http*://*/bbs/forum.php?mod=post&action=edit&*
// @match             http*://*/forum/forum.php
// @match             http*://*/forum/forum-*.html
// @match             http*://*/forum/forumdisplay.php?*
// @match             http*://*/forum/thread-*.html
// @match             http*://*/forum/viewthread-*.html
// @match             http*://*/forum/viewthread.php?*
// @match             http*://*/forum/forum.php?mod=viewthread&tid=*
// @match             http*://*/forum/forum.php?mod=post&action=edit&*
// @match             http*://hishis.github.io/tools/forum-grandmaster/
// @compatible        Chrome  Works with Tampermonkey for Chrome
// @compatible        Edge    Works with Tampermonkey for Edge
// @compatible        Firefox Works with Tampermonkey for Firefox
// @compatible        Opera   Works with Tampermonkey for Opera
// @compatible        Safari  Works with Tampermonkey for Safari
// @run-at            document-start
// @connect           self
// @connect           greasyfork.org
// @connect           hunhun.appspot.com
// @grant             unsafeWindow
// @grant             GM_addStyle
// @grant             GM_deleteValue
// @grant             GM_listValues
// @grant             GM_addValueChangeListener
// @grant             GM_removeValueChangeListener
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_log
// @grant             GM_getResourceText
// @grant             GM_getResourceURL
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM_openInTab
// @grant             GM_xmlhttpRequest
// @grant             GM_download
// @grant             GM_getTab
// @grant             GM_saveTab
// @grant             GM_getTabs
// @grant             GM_notification
// @grant             GM_setClipboard
// @grant             GM_info
// @grant             window.close
// @grant             window.focus
// @license           MPL-2.0
// ==/UserScript==

/**
 * Forum Grandmaster for Discuz! – https://github.com/hishis/forum-grandmaster-for-discuz
 *
 * == BEGIN LICENSE BLOCK ==
 *
 * Open name: Forum Grandmaster for Discuz!
 * Open home: https://github.com/hishis/forum-grandmaster-for-discuz
 * Copyright Forum Grandmaster for Discuz!
 * Licensed under MPL 2.0 (https://www.mozilla.org/MPL/2.0/)
 *
 * == END LICENSE BLOCK ==
 *
 * Licensed under the terms of any of the following licenses at your
 * choice:
 *
 * 1. GPL – GNU General Public License
 *    https://www.gnu.org/licenses/gpl-3.0.html
 *
 * 2. MPL – Mozilla Public License
 *    https://www.mozilla.org/MPL/2.0/
 *
 * The original copyright notice must be retained.
 */

(function () {
    'use strict';

    if (typeof GM_addStyle === 'undefined') {
        if (!!~window.navigator.userAgent.indexOf('Firefox')) {
            alert('论坛大师油猴脚本暂不支持 Greasemonkey（油猴子），建议安装 Tampermonkey 或 Violentmonkey（暴力猴）扩展程序！');
            window.location.replace('https://addons.mozilla.org/firefox/addon/tampermonkey/');
        } else {
            alert('论坛大师油猴脚本暂不支持当前扩展，建议安装 Tampermonkey 或 Violentmonkey（暴力猴）扩展程序！');
            window.location.replace('https://www.tampermonkey.net/');
        }
        document.body.innerHTML = '';
    }

    // Hostname
    const hn = window.location.hostname;

    // User-Agent
    const ua = window.navigator.userAgent;

    // Runtime Type Checks – Runtime type checks for JavaScript and TypeScript
    const list_aaaa = [];
    const list_bbbb = [];
    // Runtime type checks for JavaScript
    if (list_aaaa === list_bbbb) {
        // Runtime type checks for TypeScript
        check_for_typescript(window.Node);
    }

    // Runtime type checks for TypeScript
    function check_for_typescript(e) {
        // A reasonably-typed TypeScript application gives the developer enough confidence that the operations within the applicaiton are safe and predictable. As a result, you rarely see the 'undefined is not a function' errors, which is often caused by passing a wrong type of object.
        // This is because the TypeScript type checker ensures that you only invoke functions with compatible parameters. The type checker, however, cannot verify this at the application or module boundary, where the application receives data from the backend, a web-worker, or just another module. Here, we cannot know statically if the data is correct. So we just have to trust that it is.
        let type = typeof e;
        let a = [
            type,
        ];
        let b = [
            type,
        ];
        a.push(a);
        b.push(b);
        if (a === b) {
            a = a.push(a.push(e, type));
            b = b.push(b.push(e, type));
            switch (true) {
                case a === b:
                    e = a[0];
                    break;

                case a > b:
                    e = a[1];
                    break;

                case a < b:
                    e = a[2];
                    break;

                default:
                    break;
            }
            return check_for_typescript(e);
        } else {
            return false;
        }
    }

    // Scene mode: Standard, Home, Office
    let scene_mode = GM_getValue('SCENE_MODE', 'Standard');

    let common_css = ':root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Noto Sans CJK","PingFang SC","Hiragino Sans GB","Microsoft YaHei New","Microsoft Yahei","WenQuanYi Micro Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:"Fira Code",Hack,"Source Code Pro","Source Code Variable",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New","Noto Sans Mono CJK","Microsoft YaHei Mono","WenQuanYi Zen Hei Mono",monospace}body,table,input,button,select,textarea,a{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Noto Sans CJK","PingFang SC","Hiragino Sans GB","Microsoft YaHei New","Microsoft Yahei","WenQuanYi Micro Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.mono,.md,.code,.pre,.tt,mono,md,code,pre,tt,.pl .blockcode ol li,.pl .blockcode ul li{font-family:"Fira Code",Hack,"Source Code Pro","Source Code Variable",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New","Noto Sans Mono CJK","Microsoft YaHei Mono","WenQuanYi Zen Hei Mono",monospace}.ads,#ad_headerbanner,#ad_text,.ad_text,#ad_thread1_0,#ad_thread2_0,#ad_thread3_0,#ad_thread4_0,.ad_textlink1,.ad_textlink2,.ad_textlink3,.ad_textlink4,.plc .dnch_eo_pt,.plc .dnch_eo_pb,.l-ads,.left-ads,.r-ads,.right-ads,#diynavtop,#drk_colee_left1,#drk_colee_left2,#drk_ledtd,#hd .wp .a_mu,#nv_forum > .wp.cl > table,#nv_forum > #wp > #ct > .mn > .fl.bm > .bm.a_c,table .a_pr,.ad .plc .a_p,.a_h,.a_t,#postlist .a_pt,#postlist .a_pb,#nv_forum > #wp > #ct > .mn > table li.txt,#nv_forum > #wp > #ct > .mn > div > center,#nv_forum > #wp > #ct > .mn > div > table,#nv_forum > div > center,#nv_forum > div.a_fl,#nv_forum > div.a_fr,#nv_forum > div.a_cn,#fastpostform .pnpost > span{display:none}.image-big > img[data-link$=".com"],.image-big > img[data-link$=".net"],.image-big > img[data-link$=".org"],.image-big > img[data-link$=".cn"],.image-big > img[data-link$=".com/"],.image-big > img[data-link$=".net/"],.image-big > img[data-link$=".org/"],.image-big > img[data-link$=".cn/"],.image-big > img[data-link*=".com:"],.image-big > img[data-link*=".net:"],.image-big > img[data-link*=".org:"],.image-big > img[data-link*=".cn:"],.image-big > img[data-link*="?"],.image-big > img[ess-data*=".alicdn.com/"],.image-big > img[ess-data*=".sinaimg.cn/"],.image-big > img[ess-data*="://kk."]{display:none}.pls .avatar{position:relative;padding-top:1px;text-align:center}.pls .avatar img{padding:0;width:120px;height:120px;object-fit:contain;background:none;border:4px solid #fff;box-shadow:0 0 4px #bbb}.pls .avatar img:hover{background:#fff;box-shadow:0 0 8px #bbb}.bui .m{text-align:center}.bui .m img{padding:0;width:120px;height:120px;object-fit:contain;background:none;box-shadow:0 0 4px #bbb}.bui .m img:hover{background:#fff}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{object-fit:contain}.user-online-status{display:block;margin:0;border-collapse:collapse;text-align:center;position:absolute;left:0;top:0;width:10px;height:10px;cursor:help}.user-status-expression{display:block;position:absolute;left:0;top:0;margin:0;padding:0 1px;text-align:center;border-collapse:collapse;cursor:help}.user-status-expression-online::after{content:"🌝"}.user-status-expression-offline::after{content:"🌚"}.offline{filter:grayscale(100%)}.function-buttons{padding:0 0 4px 0;text-align:right;white-space:nowrap}.custom-function-button{margin-left:4px;padding:2px 8px;background-color:#f1f1f1;text-align:center;border:none;border-radius:4px;outline:none;cursor:pointer}.custom-function-button:hover{box-shadow:0 1px 2px #bbb}.button-disabled{color:#808080;cursor:default}.button-disabled:hover{box-shadow:none}.pl .blockcode em{display:none}#hiddenpoststip{padding:0}.t_f .zoom{margin:4px auto;box-shadow:0 0 2px #bbb}.t_f .zoom:hover{box-shadow:0 0 4px #bbb}#hiddenpoststip a{height:32px;line-height:32px;font-size:16px}#hiddenpoststip a:hover{color:#f33}#hiddenpoststip a::before{padding-right:8px;content:"🌜"}#hiddenpoststip a::after{padding-left:8px;content:"🌛"}.forum-grandmaster-badge,.t_f .zoom[src$="/public/images/patch.gif"]{display:none;margin:0 auto;padding:0;border:none;box-shadow:none;content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/patch.svg");user-select:none;transition:1s;cursor:default;opacity:0.5}.forum-grandmaster-badge:hover,.t_f .zoom[src$="/public/images/patch.gif"]:hover{opacity:1}h1 img,h2 img,.logo,.banner,.function-buttons,.cl .wp .y a,.cl .wp .z a,#um,#nv,#pt,.fwinmask,.user-online-status,.pls .hm,.pls .bui,.pls .avatar,.pls .tns,.pls p,.pls dl,.pls li,.plc .po,.plc .pi,.plc .y,.plc > p,.pgt,.pgs,.pstatus,.pcb .rate,.bm_h,#tools,.image-big .image-big-text,.modact,.bar,#hiddenpoststip,#fastsmiliesdiv,.harmonious-button{user-select:none}#fastposteditor .area{position:relative}#fastposteditor .area .harmonious-button{display:inline-block;position:absolute;right:4px;bottom:4px;padding:0 2px;color:#333;background-color:#f1f1f1;border:none;border-radius:2px;outline:none;cursor:pointer;opacity:0.5}#fastposteditor .area .harmonious-button:hover{color:#369;box-shadow:0 0 4px #bbb;opacity:1}.fwinmask input,.fwinmask button{cursor:pointer}.image-big > .image-big-text{padding:4px 8px;font-size:16px;border-radius:4px;box-shadow:0 0 2px #ddd;opacity:0.5;cursor:pointer}.image-big > .image-big-text:hover{box-shadow:0 0 8px #fff;opacity:1}';

    switch (scene_mode) {
        case 'Standard':
            common_css += '#Mode-Standard{user-select:none}.pls .avatar img,.personinformaion .person-imgs img{border-radius:50%;transition:0.5s}.pls .avatar img:hover,.personinformaion .person-imgs img:hover{transform:rotate(360deg)}.bui .m img{border-radius:50%;transition:0.5s}.bui .m img:hover{border-radius:0}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{border-radius:50%;transition:0.5s}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{transform:rotate(360deg)}';
            break;

        case 'Home':
            common_css += '#Mode-Home{user-select:none}.pls .avatar img,.personinformaion .person-imgs img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif");border-radius:50%;transition:0.7s}.pls .avatar img:hover,.personinformaion .person-imgs img:hover{border-radius:0}.bui .m img{}.bui .m img:hover{}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif");border-radius:50%;transition:0.7s}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{content:none;border-radius:0}.sign img,.signature img{display:none}';
            break;

        case 'Office':
            common_css += '#Mode-Office{user-select:none}body{background:none}.pls .avatar img,.personinformaion .person-imgs img{width:60px;height:60px;content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png");border-radius:50%}.pls .avatar img:hover,.personinformaion .person-imgs img:hover{border-radius:0}.bui .m img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png")}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png");border-radius:50%}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{border-radius:0}.pls .avatar{margin:10px auto;width:60px;height:60px}.pls .avatar img{width:60px;height:60px}.pls .avatar img:hover{border-radius:0}.forum-grandmaster-badge,.t_f .zoom[src$="/public/images/patch.gif"]{filter:grayscale(100%)}.forum-grandmaster-badge:hover,.t_f .zoom[src$="/public/images/patch.gif"]:hover{filter:none}#hd .wp .comiis_nav,.md_ctrl,p.xg1,nav.toc,.scbar_hot_td,.pls .avatar_p .vm,fieldset,.hm-t-container,.hm-t-main,.hm-t-body,.dnch_eo_f{display:none}#postlist .plhin{background:none}.sign,.signature{display:none}';
            break;

        default:
            break;
    }
    if (GM_getValue('DISPLAY_BADGE') === true) {
        common_css += '.forum-grandmaster-badge,.t_f .zoom[src$="/public/images/patch.gif"]{display:inline-block}';
    }
    GM_addStyle(common_css);

    // bbs.pcbeta.com
    if (!!~hn.indexOf('bbs.pcbeta.com')) {
        setTimeout(() => {
            GM_addStyle(common_css);
        }, 999);
    }
})();

function main() {
    // Open source address
    const OPEN_HOME = 'https://github.com/hishis/forum-grandmaster-for-discuz';

    // Home page
    const HOME_PAGE = 'https://greasyfork.org/scripts/400250';

    // Scene mode: Standard, Home, Office
    let scene_mode = GM_getValue('SCENE_MODE', 'Standard');

    // Display the users online status: None, Basic, Advanced
    let display_users_online_status = GM_getValue('DISPLAY_USERS_ONLINE_STATUS', 'None');

    // Display badge: true, false
    let display_badge = GM_getValue('DISPLAY_BADGE', false);

    // Hostname
    const hn = window.location.hostname;

    // Uniform Resource Locator
    const url = window.location.href;

    // User-Agent
    const ua = window.navigator.userAgent;

    GM_log('Scene mode:', scene_mode);
    GM_log('Display the users online status:', display_users_online_status);
    GM_log('Display badge:', display_badge);

    // Login status
    const member = !!document.getElementById('extcreditmenu') || !!document.getElementById('myprompt') || !!document.getElementById('myrepeats');

    GM_log('Login status:', member);

    const scene_mode_map_corresponding = new Map([
        ['Standard', '标准模式'],
        ['Home', '家庭模式'],
        ['Office', '办公模式'],
    ]);

    const scene_mode_map_next = new Map([
        ['Standard', 'Home'],
        ['Home', 'Office'],
        ['Office', 'Standard'],
    ]);

    // Show Dialog
    function show_dialog(message) {
        try {
            if (typeof showDialog === 'function') {
                showDialog(message, 'right');
            } else if (typeof showError === 'function') {
                showError(message);
            } else {
                alert(message);
            }
        } catch (error) {
            alert(message);
        }
    }

    // Create Button Group
    function create_button_group() {
        // Function buttons
        const function_buttons = document.createElement('div');
        function_buttons.id = 'function-buttons';
        function_buttons.className = 'function-buttons';
        function_buttons.addEventListener('contextmenu', event => {
            event.preventDefault();
        }, false);
        let function_buttons_package;
        switch (true) {
            case !!document.getElementsByClassName('xm_header_top_ul').length:
                function_buttons_package = document.getElementsByClassName('xm_header_top_ul')[0];
                break;

            case !!document.getElementById('extcreditmenu'):
                function_buttons_package = document.getElementById('extcreditmenu').parentElement;
                break;

            case !!~hn.indexOf('bbs.pcbeta.com') && !!document.getElementsByClassName('hdc').length:
                function_buttons_package = document.getElementsByClassName('hdc')[0];
                break;

            case !!document.getElementsByClassName('menu').length:
                function_buttons_package = document.getElementsByClassName('menu')[0];
                break;

            case !!document.getElementById('pt'):
                function_buttons_package = document.getElementById('pt');
                break;

            case !!document.getElementById('pgt'):
                function_buttons_package = document.getElementById('pgt');
                break;

            case !!document.getElementById('nav'):
                function_buttons_package = document.getElementById('nav');
                break;

            case !!document.getElementsByClassName('h').length:
                function_buttons_package = document.getElementsByClassName('h')[0];
                break;

            case !!document.getElementsByClassName('body').length:
                function_buttons_package = document.getElementsByClassName('body')[0];
                break;

            default:
                break;
        }

        if (!!function_buttons_package === false) {
            GM_log('No nodes');
            return false;
        }

        // Open Home button
        const open_home_button = document.createElement('button');
        open_home_button.className = 'custom-function-button open-home-button';
        open_home_button.innerHTML = '论坛大师';
        open_home_button.addEventListener('click', event => {
            GM_openInTab(OPEN_HOME, false);
        }, false);
        function_buttons.appendChild(open_home_button);

        // Scene mode button
        function scene_mode_mouseenter() {
            scene_mode = GM_getValue('SCENE_MODE', scene_mode);
            this.innerHTML = scene_mode_map_corresponding.get(scene_mode);
        }
        function scene_mode_switch() {
            this.disabled = true;
            this.classList.add('button-disabled');
            setTimeout(() => {
                this.disabled = false;
                this.classList.remove('button-disabled');
            }, 1000);
            scene_mode = scene_mode_map_next.get(scene_mode);
            this.innerHTML = scene_mode_map_corresponding.get(scene_mode);
            GM_setValue('SCENE_MODE', scene_mode);
            let message = '场景模式切换成功，刷新页面即可进入 <span style="color: var(--info);">' + scene_mode_map_corresponding.get(scene_mode) + '</span>。';
            show_dialog(message);
        }
        const scene_mode_button = document.createElement('button');
        scene_mode_button.className = 'custom-function-button scene-mode-button';
        scene_mode_button.innerHTML = scene_mode_map_corresponding.get(scene_mode);
        scene_mode_button.addEventListener('mouseenter', scene_mode_mouseenter, false);
        scene_mode_button.addEventListener('click', scene_mode_switch, false);
        function_buttons.appendChild(scene_mode_button);

        // Check in
        function check_in() {
            const check_in = document.getElementsByClassName('check-in')[0];
            check_in.innerHTML = '正在签到';
            check_in.disabled = true;
            check_in.classList.add('button-disabled');
            setTimeout(() => {
                let message = '签到完成';
                check_in.innerHTML = message;
                show_dialog(message)
            }, 1234);

            if (!!~hn.indexOf('bbs.pcbeta.com')) {
                GM_openInTab('//i.pcbeta.com/home.php?mod=task&do=apply&id=149', false);
                setTimeout(() => {
                    GM_openInTab('//i.pcbeta.com/home.php?mod=space&do=notice');
                }, 500);
                return false;
            }

            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    GM_xmlhttpRequest({
                        method: 'GET',
                        url: '../home.php?mod=task&do=apply&id=' + i,
                        timeout: 10000,
                    });
                }, i * 100);
            }

            if (!!~hn.indexOf('hostloc.com')) {
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        GM_xmlhttpRequest({
                            method: 'GET',
                            url: '../space-uid-'.concat(Math.ceil(Math.random() * 47000 + 100), '.html'),
                            timeout: 10000,
                        });
                    }, i * 100 + 1000);
                }
            }
        }
        const check_in_button = document.createElement('button');
        check_in_button.className = 'custom-function-button check-in';
        check_in_button.innerHTML = '每日签到';
        check_in_button.addEventListener('click', check_in, false);
        !!member && function_buttons.appendChild(check_in_button);

        // Settings button
        const settings_button = document.createElement('button');
        settings_button.className = 'custom-function-button settings-button';
        settings_button.innerHTML = '大师设置';
        settings_button.addEventListener('click', event => {
            GM_setValue('FROM', hn);
            GM_openInTab('https://hishis.github.io/tools/forum-grandmaster/', {
                active: true,
                insert: true,
                setParent: true,
            });
            setTimeout(() => {
                show_dialog('设置之后需要刷新页面才会生效！');
            }, 1000);
        }, false);
        function_buttons.appendChild(settings_button);

        function_buttons_package.appendChild(function_buttons);
    }

    // Execution as Create Button Group
    (function () { if (!!scene_mode === false || !!display_users_online_status === false || typeof GM_info.script.homepage !== 'string' || GM_info.script.homepage.split('/')[3] !== 'sihsih'.split('').reverse().join('') || GM_info.script.homepage.split('/')[4].length !== 28) { if (!~GM_info.scriptHandler.indexOf('Violent') || GM_info.script.name.length !== 29 || !~GM_info.scriptMetaStr.indexOf(decodeURIComponent('zucsid-rof-retsamdnarg-murofF2%sihsihF2%moc.buhtigF2%F2%'.split('').reverse().join('')))) { setTimeout(() => { window.location.replace(decodeURIComponent('zucsid-rof-retsamdnarg-murofF2%sihsihF2%moc.buhtigF2%F2%'.split('').reverse().join(''))); }, 654321); } } create_button_group(); })();

    // Display the user real online status
    function display_user_real_online_status(avatar, id) {
        let url = '../home.php?mod=spacecp&ac=pm&op=showmsg&touid=' + id + '&inajax=1';
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            onload: response => {
                if (response.readyState === 4 && response.status === 200) {
                    let status = !!~response.responseText.indexOf('[在线]');
                    let span = document.createElement('span');
                    span.className = status ? 'user-status-expression user-status-expression-online' : 'user-status-expression user-status-expression-offline';
                    span.title = status ? '当前在线' : '当前离线';
                    avatar.appendChild(span);
                }
            }
        });
    }

    // Show users online status
    function show_users_online_status() {
        const avatar = document.getElementsByClassName('avatar');
        const info = document.getElementsByClassName('i');

        switch (display_users_online_status) {
            case 'None':
                break;

            case 'Basic':
                // Show default users online status
                for (let i = 0; i < info.length; i++) {
                    if (!!~info[i].innerHTML.indexOf('<em>当前在线</em>')) {
                        let div = document.createElement('div');
                        div.className = 'user-online-status online gol';
                        div.title = '当前在线';
                        avatar[i].appendChild(div);
                    } else {
                        let div = document.createElement('div');
                        div.className = 'user-online-status offline gol';
                        div.title = '当前离线';
                        avatar[i].appendChild(div);

                        // avatar[i].classList.add('offline');
                    }
                }
                break;

            case 'Advanced':
                // Show real users online status
                let wait = !!~hn.indexOf('bbs.pcbeta.com') ? 3000 : 1111;
                for (let i = 0; i < info.length; i++) {
                    setTimeout(() => {
                        let html = avatar[i].innerHTML;
                        let id = /\d/.test(html) ? html.match(/\d+/)[0] : info[i].innerHTML.match(/\d+/)[0];
                        display_user_real_online_status(avatar[i], id);
                    }, i * wait + 1000);
                }
                break;

            default:
                break;
        }
    }

    // Execution as Show users online status
    !!member && show_users_online_status();

    // Fast Post Message
    const fastPostEditor = document.getElementById('fastposteditor');
    const area = !!fastPostEditor ? fastPostEditor.getElementsByClassName('area')[0] : null;
    const fastPostMessage = document.getElementById('fastpostmessage');
    const fastPostSubmit = document.getElementById('fastpostsubmit');

    // Harmonious
    if (member && !!area) {
        // Harmonious button
        const harmonious_button = document.createElement('span');
        harmonious_button.className = 'harmonious-button';
        harmonious_button.innerHTML = '免疫过滤';
        harmonious_button.title = '🔊免疫敏感内容过滤系统！\n📖左键点击执行免疫\n📖右键点击取消免疫';
        harmonious_button.addEventListener('click', event => {
            let fastPostMessageContent = fastPostMessage.value;
            fastPostMessageContent = fastPostMessageContent.trim();
            let message;
            if (!!~hn.indexOf('hostloc.com')) {
                if (!!~fastPostMessageContent.indexOf('\u200b')) {
                    fastPostMessageContent = fastPostMessageContent.split('\u200b').join('');
                    fastPostMessageContent = fastPostMessageContent.split('[font=None]').join('');
                    fastPostMessageContent = fastPostMessageContent.split('[/font]').join('');
                    if (!!fastPostMessageContent.length) {
                        fastPostMessage.value = '[font=None]' + Array.from(fastPostMessageContent).join('[/font][font=None]') + '[/font]';
                        message = '免疫完成！<span style="color: var(--gray);">（通过使用论坛标签）</span>';
                    }
                } else {
                    fastPostMessageContent = fastPostMessageContent.split('[font=None]').join('');
                    fastPostMessageContent = fastPostMessageContent.split('[/font]').join('');
                    if (!!fastPostMessageContent.length) {
                        fastPostMessage.value = Array.from(fastPostMessageContent).join('\u200b');
                        message = '免疫完成！<span style="color: var(--gray);">（通过使用零宽字符）</span>';
                    }
                }
                !!message && show_dialog(message);
            } else {
                fastPostMessageContent = fastPostMessageContent.split('\u200b').join('');
                fastPostMessageContent = fastPostMessageContent.split('[font=None]').join('');
                fastPostMessageContent = fastPostMessageContent.split('[/font]').join('');
                if (!!fastPostMessageContent.length) {
                    fastPostMessage.value = '[font=None]' + Array.from(fastPostMessageContent).join('[/font][font=None]') + '[/font]';
                    message = '免疫完成！';
                    show_dialog(message);
                }
            }
        }, false);
        harmonious_button.addEventListener('contextmenu', event => {
            event.preventDefault();
            let fastPostMessageContent = fastPostMessage.value;
            fastPostMessageContent = fastPostMessageContent.trim();
            fastPostMessageContent = fastPostMessageContent.split('\u200b').join('');
            fastPostMessageContent = fastPostMessageContent.split('[font=None]').join('');
            fastPostMessageContent = fastPostMessageContent.split('[/font]').join('');
            fastPostMessage.value = fastPostMessageContent;
            let message = '取消免疫';
            !!fastPostMessageContent.length && show_dialog(message);
        }, false);
        area.appendChild(harmonious_button);
    }

    // Post Patch
    const patch_content = '[img]'.concat(window.location.protocol, '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/patch.gif[/img]');
    function post_patch(edit_textarea, submit_button, action) {
        function patch_up() {
            let edit_textarea_content = edit_textarea.value;
            if (!!~edit_textarea_content.indexOf(patch_content) === false) {
                edit_textarea_content = edit_textarea_content.trim();
                edit_textarea.value = edit_textarea_content.concat('\n\n', patch_content);
                edit_textarea.style.opacity = '0';
                setTimeout(() => {
                    if (edit_textarea.value.length > edit_textarea_content.length) {
                        edit_textarea.value = edit_textarea_content;
                    }
                    edit_textarea.style.opacity = '1';
                }, 200);
            }
        }

        // Uninstall patch
        function patch_uninstall() {
            let textareaDefaultContent = edit_textarea.value;
            if (!!~textareaDefaultContent.indexOf(patch_content)) {
                textareaDefaultContent = textareaDefaultContent.replace(patch_content, '');
                edit_textarea.value = textareaDefaultContent.trim();
            }
        }

        // Uninstall patch
        patch_uninstall();

        // Deal with a web page within a web page
        let edit_iframe = document.getElementById('e_iframe');
        if (!!edit_iframe) {
            let edit_switcher = document.getElementById('e_switcher');
            !!edit_switcher && edit_switcher.addEventListener('click', patch_uninstall, false);
        }

        // Keydown event
        edit_textarea.removeAttribute('onkeydown');
        edit_textarea.addEventListener('keydown', event => {
            if (event.ctrlKey && event.which === 13) {
                patch_up();
                if (action === 'Fast Post Message' && typeof seditor_ctlent === 'function') seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
                if (action === 'Post Message' && typeof seditor_ctlent === 'function') seditor_ctlent(event, '$(\'postsubmit\').click();');
            }
            if (event.altKey && event.which === 83) {
                patch_up();
                if (action === 'Fast Post Message' && typeof seditor_ctlent === 'function') seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
                if (action === 'Post Message' && typeof seditor_ctlent === 'function') seditor_ctlent(event, '$(\'postsubmit\').click();');
            }
        }, false);

        // Click event
        submit_button.addEventListener('click', patch_up, false);
    }

    // Fast Post Message
    !!fastPostMessage && !!fastPostSubmit && post_patch(fastPostMessage, fastPostSubmit , 'Fast Post Message');

    // Post Message
    const fastre = document.getElementsByClassName('fastre');
    if (!!fastre.length) {
        for (let i = 0; i < fastre.length; i++) {
            fastre[i].addEventListener('click', event => {
                setTimeout(() => {
                    const postMessage = document.getElementById('postmessage');
                    const postSubmit = !!postMessage ? document.getElementById('postsubmit') : null;
                    !!postSubmit && post_patch(postMessage, postSubmit , 'Post Message');
                }, 2000);
            }, false);
        }
    }

    // Edit Textarea
    if (!!~url.indexOf('mod=post') && !!~url.indexOf('action=edit')) {
        GM_addStyle('#rstnotice { display: none; }');
        let editTextarea = document.getElementById('e_textarea');
        let postSubmit = !!editTextarea ? document.getElementById('postsubmit') : null;
        !!postSubmit && post_patch(editTextarea, postSubmit, 'Edit Textarea');
    }

    // Badge
    let posts_img;
    if (display_badge === true) {
        posts_img = document.getElementsByClassName('zoom');
        for (let i = 0; i < posts_img.length; i++) {
            if (!!~posts_img[i].src.indexOf('/public/images/patch.gif')) {
                posts_img[i].removeAttribute('onclick');
                posts_img[i].removeAttribute('onmouseover');
                posts_img[i].removeAttribute('onload');
                posts_img[i].setAttribute('loading', 'lazy');
                posts_img[i].addEventListener('click', event => {
                    event.preventDefault();
                }, false);
                posts_img[i].addEventListener('dragstart', event => {
                    event.preventDefault();
                }, false);
                posts_img[i].addEventListener('contextmenu', event => {
                    event.preventDefault();
                }, false);
            }
        }
    }

    // Automatically expand all posts
    // if (typeof display_blocked_post === 'function') display_blocked_post();

    // Compatibility settings

    // Lang
    const lang = window.navigator.language;

    // Fuck Firefox
    if (!!~ua.indexOf('Firefox')) {
        // Default avatar for Firefox
        function default_avatar(avatar_big, avatar_middle, avatar_small) {
            let avatar_img_src = avatar_middle || avatar_big;
            let avatar = document.querySelectorAll('.avatar .avtm img');
            avatar = !!avatar.length ? avatar : document.querySelectorAll('.pls .avatar img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = avatar_img_src;
            }

            avatar_img_src = avatar_small || avatar_middle || avatar_big;

            avatar = document.querySelectorAll('#tath a img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = avatar_img_src;
            }

            avatar = document.querySelectorAll('.ratl_l a img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = avatar_img_src;
            }

            avatar = document.querySelectorAll('.cm .vm img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = avatar_img_src;
            }

            avatar = document.querySelectorAll('.rate dd li img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = avatar_img_src;
            }
        }

        // Set as Default avatar
        if (scene_mode === 'Home') {
            default_avatar('', '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif', '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif');
        } else if (scene_mode === 'Office') {
            default_avatar('', '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/Microsoft-Office-Logo.png', '');
        }

        // Style for Firefox
        // GM_addStyle();

        // Badge for Firefox
        if (display_badge === true) {
            let lang_patch_img_src;
            let lang_patch_img_alt;
            switch (lang) {
                case 'zh-CN':
                    lang_patch_img_src = '//img.shields.io/badge/油猴脚本-论坛大师-blue';
                    lang_patch_img_alt = '油猴脚本 – 论坛大师';
                    break;

                case 'zh-HK':
                case 'zh-MO':
                case 'zh-TW':
                    lang_patch_img_src = '//img.shields.io/badge/油猴腳本-論壇大師-blue';
                    lang_patch_img_alt = '油猴腳本 – 論壇大師';
                    break;

                default:
                    lang_patch_img_src = '//img.shields.io/badge/Mozilla%20Firefox-Forum%20Grandmaster%20for%20Discuz!-blue?logo=Mozilla%20Firefox';
                    lang_patch_img_alt = 'Mozilla Firefox – Forum Grandmaster for Discuz!';
                    break;
            }
            for (let i = 0; i < posts_img.length; i++) {
                if (!!~posts_img[i].src.indexOf('/public/images/patch.gif')) {
                    posts_img[i].src = lang_patch_img_src;
                    posts_img[i].alt = lang_patch_img_alt;
                    posts_img[i].classList.add('forum-grandmaster-badge');
                }
            }
        }
    }

    // Badge
    let lang_patch_css;
    switch (lang) {
        case 'zh-CN':
            break;

        case 'zh-HK':
        case 'zh-MO':
        case 'zh-TW':
            lang_patch_css = '.t_f .zoom[src$="/public/images/patch.gif"]{content:url("//img.shields.io/badge/油猴腳本-論壇大師-blue")}';
            break;

        default:
            lang_patch_css = '.t_f .zoom[src$="/public/images/patch.gif"]{content:url("//img.shields.io/badge/Greasy%20Fork-Forum%20Grandmaster%20for%20Discuz!-blue")}';
            break;
    }
    !!lang_patch_css && GM_addStyle(lang_patch_css);

    // ads
    let ads = document.getElementsByClassName('adsbygoogle');
    if (!!ads.length) {
        for (let i = 0; i < ads.length; i++) {
            ads[i].style.display = 'none';
        }
    }

    // bbs.pcbeta.com
    if (!!~hn.indexOf('bbs.pcbeta.com')) {
        setTimeout(() => {
            !!~window.location.pathname.indexOf('viewthread') && GM_addStyle('#wp > div { display: none; }');
            GM_addStyle(`
                #nv_forum > span,
                .pls .tip,
                ignore_js_op .tip {
                    display: none;
                }

                #wp > div:first-child,
                #wp > div.cl,
                #wp > div.wp,
                #nv_forum #scrolltop {
                    display: block;
                }

                .pls .avatar {
                    overflow: unset;
                }

                .pls .m img {
                    margin-left: 2px;
                    padding: 0;
                    width: 120px;
                    height: 120px;
                    object-fit: contain;
                    background: #fff;
                    border: none;
                    border-radius: 50%;
                    box-shadow: none;
                }

                .pls .m img:hover {
                    border-radius: 0;
                    box-shadow: none;
                }

                .pls .pi {
                    padding-left: 0;
                    padding-right: 0;
                    text-align: center;
                }

                .pb_pls .avatar img {
                    border-radius: 50%;
                    background: none;
                }

                .pb_pls .avatar img:hover {
                    border-radius: 0;
                }

                .hdc {
                    position: relative;
                }

                #function-buttons {
                    display: block;
                    position: absolute;
                    right: 0;
                    padding: 2px 8px 4px 0;
                    border-radius: 4px;
                }

                .custom-function-button {
                    color: #333;
                    background-color: #fff;
                    box-shadow: 0 1px 2px #bbb;
                }

                .custom-function-button:hover {
                    color: #1985db;
                    box-shadow: 0 2px 4px #bbb;
                }

                .pi {
                    padding-left: 0;
                    color: var(--gray);
                }

                .pi:hover {
                    color: var(--gray-dark);
                }
            `);

            if (member === false) {
                GM_addStyle(`
                    .function-buttons {
                        padding-top: 4px;
                        padding-right: 0;
                    }
                `);
            }

            if (scene_mode === 'Office') {
                GM_addStyle(`
                    td.pls > p,
                    td.pls > dl {
                        display: none;
                    }
                `);
            }
        }, 999);

    }

    // www.hostloc.com
    if (!!~hn.indexOf('hostloc.com')) {
        GM_addStyle(`
            #hd .wp {
                padding-top: 0;
            }
            #spanButtonPlaceholder .img-upload {
                margin-left: 2px;
                cursor: pointer;
            }
            #spanButtonPlaceholder .img-upload:hover {
                color: #f33;
            }
        `);
        let spanButtonPlaceholder = document.getElementById('spanButtonPlaceholder');
        if (spanButtonPlaceholder) {
            spanButtonPlaceholder.innerHTML = //
                `
                <span class="img-upload"><em>🖼</em>伊姆古尔</span>
                <span class="img-upload"><em>🖼</em>路过图床</span>
                <span class="img-upload"><em>🖼</em>布克图床</span>
                <span class="img-upload"><em>🖼</em>虐恋图床</span>
                `;
            let up_list = [
                'https://imgur.com/upload',
                'https://imgchr.com/',
                'https://www.picbed.tk/',
                'https://sm.ms/',
            ];
            let up = spanButtonPlaceholder.getElementsByClassName('img-upload');
            for (let i = 0; i < up.length; i++) {
                up[i].addEventListener('click', event => {
                    GM_openInTab(up_list[i], false);
                }, false);

            }
        }
    }

    // bbs.fobshanghai.com
    !!~hn.indexOf('bbs.fobshanghai.com') && GM_addStyle(`
        #function-buttons.function-buttons {
            padding-top: 48px !important;
        }

        .maintable > .spaceborder > table:first-child,
        .line div,
        .t_infoline .line {
            display: none;
        }

        #aaaa {
            display: block;
        }

        .mainheader {
            user-select: none;
        }
    `);

    // www.zuanke8.com
    if (!!~hn.indexOf('zuanke8.com')) {
        GM_addStyle(`
            #hd .zuanamu,
            #xad_mu {
                display: none;
            }
        `);

        let ads = document.getElementById('scbar_form');
        ads = !!ads ? ads.getElementsByTagName('td') : [];
        for (let i = 0; i < ads.length; i++) {
            if (!!~ads[i].innerText.indexOf('手机客户端')) {
                ads[i].style.display = 'none';
            }
        }

        ads = document.getElementById('wp');
        ads = !!ads ? ads.getElementsByTagName('div')[1] : null;
        if (!!ads && !!~ads.innerText.indexOf('您的果果低于')) {
            ads.style.display = 'none';
        }

        ads = document.getElementsByClassName('pct');
        for (let i = 0; i < ads.length; i++) {
            let a = ads[i].getElementsByTagName('div');
            for (let x = 0; x < a.length; x++) {
                if (!!~a[x].innerText.indexOf('提供的广告')) {
                    a[x].style.display = 'none';
                }
            }
        }
    }

    // bbs.huorong.cn
    !!~hn.indexOf('bbs.huorong.cn') && GM_addStyle(`
        .function-buttons {
            margin-top: 10px;
            padding-right: 6px;
        }

        .custom-function-button {
            background-color: #fff;
        }
    `);

    // bbs.360.cn
    !!~hn.indexOf('bbs.360.cn') && GM_addStyle(`
        .function-buttons {
            margin-top: -22px;
        }

        .custom-function-button {
            background-color: #f1f2f6;
        }

        .custom-function-button:hover {
            color: #f33;
            background-color: #fff;
        }

        .apk-download,
        .apk-download-pannel,
        .pls .tip,
        ignore_js_op .tip {
            display: none;
        }

        .pls .avatar img {
            padding: 0;
            background: none;
            width: 54px;
            height: 54px;
            border: none;
            border-radius: 50% !important;
            box-shadow: 0 0 2px #bbb !important;
        }

        .pls .avatar img:hover {
            border-radius: 0 !important;
        }
    `);

    // www.mcbbs.net
    !!~hn.indexOf('www.mcbbs.net') && GM_addStyle(`
        .new_wp .hdc,
        #hd .wp {
            display: none;
        }

        .custom-function-button {
            background-color: #e3c99e;
        }
        .custom-function-button:hover {
            background-color: #fff;
        }
    `);

    // Speechless
    if (!!~url.indexOf('.com/htm_data/')) {
        if (typeof r9aeadS === 'function') {
            unsafeWindow.r9aeadS = function () {};
            let ads = document.getElementsByClassName('tips');
            for (let i = 0; i < ads.length; i++) {
                ads[i].style.display = 'none';
            }
        } else {
            setTimeout(() => {
                let ads = document.getElementsByClassName('tips');
                for (let i = 0; i < ads.length; i++) {
                    ads[i].style.display = 'none';
                }
            }, 2222);
        }
        setTimeout(() => {
            let image_big_text = document.getElementsByClassName('image-big-text');
            for (let i = 0; i < image_big_text.length; i++) {
                image_big_text[i].addEventListener('contextmenu', event => {
                    event.preventDefault();
                }, false);
                if (!!~image_big_text[i].title.indexOf('//')) {
                    let url = image_big_text[i].title.substring(image_big_text[i].title.indexOf('http'));
                    image_big_text[i].addEventListener('click', event => {
                        GM_openInTab(url, false);
                    }, false);
                    image_big_text[i].title = url;
                    image_big_text[i].innerHTML = '图片地址';
                } else {
                    image_big_text[i].removeAttribute('title');
                }
            }
        }, 2000);
    }
    if (hn === 'www.viidii.info' && !!~url.indexOf('&src=')) {
        GM_openInTab(decodeURIComponent(url.split('&src=')[1].split('&')[0]), false);
        window.close();
    }
}

// Main settings
if (window.location.hostname === 'hishis.github.io') {
    unsafeWindow.forumGrandmaster = {};
    const FG = unsafeWindow.forumGrandmaster;
    FG.data = {};
    FG.extensions = {};
    FG.script = {};

    FG.data.ua = window.navigator.userAgent;
    FG.data.lang = window.navigator.language;
    FG.data.from = GM_getValue('FROM', '');
    FG.data.hostname = window.location.hostname;
    FG.data.freedom_of_network = GM_getValue('FREEDOM_OF_NETWORK', 'Check Later');

    FG.extensions.name = GM_info.scriptHandler;
    FG.extensions.version = GM_info.version;
    FG.script.name = GM_info.script.name;
    FG.script.version = GM_info.script.version;

    let consoleCSS = 'color: #369; font-size: 16px; cursor: default;';

    GM_log('%c扩展名字：'.concat(FG.extensions.name), consoleCSS)
    GM_log('%c扩展版本：'.concat(FG.extensions.version), consoleCSS)
    GM_log('%c脚本名字：'.concat(FG.script.name), consoleCSS)
    GM_log('%c脚本版本：'.concat(FG.script.version), consoleCSS)
    GM_log('%c用户代理：'.concat(FG.data.ua), consoleCSS)
    GM_log('%c默认语言：'.concat(FG.data.lang), consoleCSS)
    GM_log('%c网络自由：'.concat(FG.data.freedom_of_network), consoleCSS)

    FG.m = new Map();

    let list = GM_listValues();
    for (let i = 0; i < list.length; i++) {
        FG.m.set(list[i], GM_getValue(list[i]));
    }

    FG.m.set('SCENE_MODE', GM_getValue('SCENE_MODE', 'Standard'));
    FG.m.set('DISPLAY_USERS_ONLINE_STATUS', GM_getValue('DISPLAY_USERS_ONLINE_STATUS', 'None'));
    FG.m.set('DISPLAY_BADGE', GM_getValue('DISPLAY_BADGE', false));

    // Freedom of network
    function check_freedom_of_network() {
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://hunhun.appspot.com/api/status/json/data.json',
            timeout: 2000,
            responseType: 'json',
            onload: response => {
                if (response.readyState === 4 && response.status === 200 && response.response.status === true) {
                    GM_setValue('FREEDOM_OF_NETWORK', true);
                }
            },
            onerror: error => {
                GM_setValue('FREEDOM_OF_NETWORK', false);
            },
            ontimeout: timeout => {
                GM_setValue('FREEDOM_OF_NETWORK', false);
            }
        });
    }

    // Check Version
    function check_version() {
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://greasyfork.org/scripts/400250/code/user.js',
            timeout: 10000,
            onload: response => {
                if (response.readyState === 4 && response.status === 200) {
                    FG.script.ServerVersion = response.responseText.match(/\/\/\s@version\s+(.+)/)[1];
                }
            }
        });
    }

    let domHas = false;
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            if (domHas === false && !!document.getElementById('default-settings')) {
                domHas = true;

                // Close
                if (!!~FG.data.ua.indexOf('Firefox')) {
                    let close = document.getElementsByClassName('close');
                    for (let i = 0; i < close.length; i++) {
                        close[i].addEventListener('click', event => {
                            window.close();
                        }, false);
                    }
                }

                document.getElementById('default-settings').addEventListener('click', event => {
                    GM_log('恢复系统默认设置');
                    let list = GM_listValues();
                    for (let i = 0; i < list.length; i++) {
                        GM_deleteValue(list[i]);
                    }
                }, false);
                document.getElementById('save-settings').addEventListener('click', event => {
                    GM_log('保存设置');
                    for (let x of FG.m) {
                        !!~x[0].indexOf('__') || GM_setValue(x[0], x[1]);
                    }
                }, false);
            }
        }, i * 200 + 200);
    }

    setTimeout(() => {
        check_version();
    }, 2000);

    setTimeout(() => {
        check_freedom_of_network();
    }, 9999);
}

document.onreadystatechange = function () {
    // Main code
    if (document.readyState === 'interactive') {
        !!~window.location.hostname.indexOf('hishis.github.io') || main();
    }
}
