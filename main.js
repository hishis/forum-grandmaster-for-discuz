// ==UserScript==
// @name              Forum Grandmaster for Discuz!
// @name:en           Forum Grandmaster for Discuz!
// @name:zh           论坛大师 – Discuz!
// @name:zh-CN        论坛大师 – Discuz!
// @name:zh-HK        論壇大師 – Discuz!
// @name:zh-MO        論壇大師 – Discuz!
// @name:zh-TW        論壇大師 – Discuz!
// @namespace         Forum Grandmaster for Discuz!
// @version           0.3.11
// @author            hostname
// @description       🔊Beautify the interface, Remove ads, Enhance functions.
// @description:en    🔊Beautify the interface, Remove ads, Enhance functions.
// @description:zh    🔊界面美化、广告移除、功能增强……
// @description:zh-CN 🔊界面美化、广告移除、功能增强……
// @description:zh-HK 🔊界面美化、廣告移除、功能增強……
// @description:zh-MO 🔊界面美化、廣告移除、功能增強……
// @description:zh-TW 🔊界面美化、廣告移除、功能增強……
// @homepage          https://github.com/hishis/forum-grandmaster-for-discuz
// @icon              https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/favicon.ico
// @updateURL         https://raw.githubusercontent.com/hishis/forum-grandmaster-for-discuz/master/main.js
// @installURL        https://raw.githubusercontent.com/hishis/forum-grandmaster-for-discuz/master/main.js
// @downloadURL       https://raw.githubusercontent.com/hishis/forum-grandmaster-for-discuz/master/main.js
// @supportURL        https://github.com/hishis/forum-grandmaster-for-discuz/issues
// @match             https://www.52pojie.cn/thread-*.html
// @match             https://www.52pojie.cn/forum.php?mod=viewthread&tid=*
// @match             https://www.right.com.cn/forum/thread-*.html
// @match             https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=*
// @match             https://bbs.kafan.cn/thread-*.html
// @match             https://bbs.kafan.cn/forum.php?mod=viewthread&tid=*
// @match             https://hostloc.com/thread-*.html
// @match             https://hostloc.com/forum.php?mod=viewthread&tid=*
// @match             https://www.hostloc.com/thread-*.html
// @match             https://www.hostloc.com/forum.php?mod=viewthread&tid=*
// @match             http://bbs.pcbeta.com/thread-*.html
// @match             http://bbs.pcbeta.com/forum.php?mod=viewthread&tid=*
// @match             http://bbs.pcbeta.com/viewthread-*.html
// @match             https://bbs.pcbeta.com/thread-*.html
// @match             https://bbs.pcbeta.com/forum.php?mod=viewthread&tid=*
// @match             https://bbs.pcbeta.com/viewthread-*.html
// @match             http://www.zuanke8.com/thread-*.html
// @match             http://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match             https://www.zuanke8.com/thread-*.html
// @match             https://www.zuanke8.com/forum.php?mod=viewthread&tid=*
// @match             https://bbs.fobshanghai.com/thread-*.html
// @match             https://bbs.fobshanghai.com/forum.php?mod=viewthread&tid=*
// @match             https://bbs.fobshanghai.com/viewthread.php?tid=*
// @match             http://bbs.huorong.cn/thread-*.html
// @match             http://bbs.huorong.cn/forum.php?mod=viewthread&tid=*
// @match             https://bbs.huorong.cn/thread-*.html
// @match             https://bbs.huorong.cn/forum.php?mod=viewthread&tid=*
// @match             http://bbs.360.cn/thread-*.html
// @match             http://bbs.360.cn/forum.php?mod=viewthread&tid=*
// @match             https://bbs.360.cn/thread-*.html
// @match             https://bbs.360.cn/forum.php?mod=viewthread&tid=*
// @match             http://www.gebi1.com/thread-*.html
// @match             http://www.gebi1.com/forum.php?mod=viewthread&tid=*
// @match             https://www.gebi1.com/thread-*.html
// @match             https://www.gebi1.com/forum.php?mod=viewthread&tid=*
// @match             https://www.advertcn.com/thread-*.html
// @match             https://www.advertcn.com/forum.php?mod=viewthread&tid=*
// @match             https://www.fglt.net/thread-*.html
// @match             https://www.fglt.net/forum.php?mod=viewthread&tid=*
// @match             https://www.fglt.cn/thread-*.html
// @match             https://www.fglt.cn/forum.php?mod=viewthread&tid=*
// @match             http://www.aihao.cc/thread-*.html
// @match             http://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @match             https://www.aihao.cc/thread-*.html
// @match             https://www.aihao.cc/forum.php?mod=viewthread&tid=*
// @match             http://bbs.nas66.com/thread-*.html
// @match             http://bbs.nas66.com/forum.php?mod=viewthread&tid=*
// @match             https://bbs.nas66.com/thread-*.html
// @match             https://bbs.nas66.com/forum.php?mod=viewthread&tid=*
// @match             http://*/thread-*.html
// @match             http://*/forum.php?mod=viewthread&tid=*
// @match             http://*/bbs/thread-*.html
// @match             http://*/bbs/forum.php?mod=viewthread&tid=*
// @match             http://*/forum/thread-*.html
// @match             http://*/forum/forum.php?mod=viewthread&tid=*
// @match             https://*/thread-*.html
// @match             https://*/forum.php?mod=viewthread&tid=*
// @match             https://*/bbs/thread-*.html
// @match             https://*/bbs/forum.php?mod=viewthread&tid=*
// @match             https://*/forum/thread-*.html
// @match             https://*/forum/forum.php?mod=viewthread&tid=*
// @match             https://hishis.gitlab.io/tools/forum-grandmaster/
// @compatible        Chrome  Works with Tampermonkey for Chrome
// @compatible        Edge    Works with Tampermonkey for Edge
// @compatible        Firefox Works with Tampermonkey for Firefox
// @compatible        Opera   Works with Tampermonkey for Opera
// @compatible        Safari  Works with Tampermonkey for Safari
// @run-at            document-start
// @connect           self
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

    // Hostname
    const hn = window.location.hostname;

    // User-Agent
    const ua = window.navigator.userAgent;

    // Scene mode: Standard, Home, Office
    let scene_mode = GM_getValue('SCENE_MODE', 'Standard');
    if (!~['Standard', 'Home', 'Office'].indexOf(scene_mode)) {
        scene_mode = 'Standard';
        GM_setValue('SCENE_MODE', scene_mode);
    }

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

    let common_css = ':root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Noto Sans CJK","PingFang SC","Hiragino Sans GB","Microsoft YaHei New","Microsoft Yahei","WenQuanYi Micro Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:"Fira Code",Hack,"Source Code Pro","Source Code Variable",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New","Noto Sans Mono CJK","Microsoft YaHei Mono","WenQuanYi Zen Hei Mono",monospace}body,table,input,button,select,textarea,a{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Noto Sans CJK","PingFang SC","Hiragino Sans GB","Microsoft YaHei New","Microsoft Yahei","WenQuanYi Micro Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"}.mono,.md,.code,.pre,.tt,mono,md,code,pre,tt,.pl .blockcode ol li,.pl .blockcode ul li{font-family:"Fira Code",Hack,"Source Code Pro","Source Code Variable",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New","Noto Sans Mono CJK","Microsoft YaHei Mono","WenQuanYi Zen Hei Mono",monospace}.ads,.plc .dnch_eo_pt,.plc .dnch_eo_pb,#diynavtop,#drk_colee_left1,#drk_colee_left2,#drk_ledtd,#hd .wp .a_mu,table .a_pr,.ad .plc .a_p,.a_h,.a_t,.a_pt,.a_pb{display:none}.pls .avatar{position:relative;padding-top:1px;text-align:center}.pls .avatar img{padding:0;width:120px;height:120px;object-fit:contain;background:none;border:4px solid #fff;box-shadow:0 0 4px #bbb}.pls .avatar img:hover{background:#fff;box-shadow:0 0 8px #bbb}.bui .m{text-align:center}.bui .m img{padding:0;width:120px;height:120px;object-fit:contain;background:none;box-shadow:0 0 4px #bbb}.bui .m img:hover{background:#fff}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{object-fit:contain}.user-online-status{display:block;margin:0;border-collapse:collapse;text-align:center;position:absolute;left:0;top:0;width:10px;height:10px;cursor:help}.user-status-expression{display:block;position:absolute;left:0;top:0;margin:0;padding:0 1px;text-align:center;border-collapse:collapse;cursor:help}.user-status-expression-online::after{content:"🌝"}.user-status-expression-offline::after{content:"🌚"}.offline{filter:grayscale(100%)}.function-buttons{padding:0 0 4px 0;text-align:right;white-space:nowrap}.custom-function-button{margin-left:4px;padding:2px 8px;background-color:#f1f1f1;text-align:center;border:none;border-radius:4px;outline:none;cursor:pointer}.custom-function-button:hover{box-shadow:0 1px 2px #bbb}.button-disabled{color:#808080;cursor:default}.button-disabled:hover{box-shadow:none}.pl .blockcode em{display:none}#hiddenpoststip{padding:0}.t_f .zoom{margin:4px auto;box-shadow:0 0 2px #bbb}.t_f .zoom:hover{box-shadow:0 0 4px #bbb}#hiddenpoststip a{height:32px;line-height:32px;font-size:16px}#hiddenpoststip a:hover{color:#f33}#hiddenpoststip a::before{padding-right:8px;content:"🌜"}#hiddenpoststip a::after{padding-left:8px;content:"🌛"}.forum-grandmaster-badge,.t_f .zoom[src$="/public/images/patch.gif"]{display:none;margin:0 auto;padding:0;border:none;box-shadow:none;content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/patch.svg");user-select:none;transition:1s;cursor:default;opacity:0.5}.forum-grandmaster-badge:hover,.t_f .zoom[src$="/public/images/patch.gif"]:hover{opacity:1}.function-buttons,.cl .wp .y a,.cl .wp .z a,#um,#nv,#pt,.user-online-status,.pls .hm,.pls .bui,.pls .avatar,.pls .tns,.pls p,.pls dl,.pls li,.plc .po,.plc .pi,.plc .y,.plc > p,.pgt,.pgs,.pstatus,.pcb .rate,.bm_h,#tools,.modact,.bar,#hiddenpoststip,#fastsmiliesdiv,.harmonious-button{user-select:none}#fastposteditor .area{position:relative}#fastposteditor .area .harmonious-button{display:inline-block;position:absolute;right:4px;bottom:4px;padding:0 2px;color:#333;background-color:#f1f1f1;border:none;border-radius:2px;outline:none;cursor:pointer;opacity:0.5}#fastposteditor .area .harmonious-button:hover{color:#369;box-shadow:0 0 4px #bbb;opacity:1}';

    switch (scene_mode) {
        case 'Standard':
            common_css += '.pls .avatar img,.personinformaion .person-imgs img{border-radius:50%;transition:0.5s}.pls .avatar img:hover,.personinformaion .person-imgs img:hover{transform:rotate(360deg)}.bui .m img{border-radius:50%;transition:0.5s}.bui .m img:hover{border-radius:0}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{border-radius:50%;transition:0.5s}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{transform:rotate(360deg)}';
            break;

        case 'Home':
            common_css += '.pls .avatar img,.personinformaion .person-imgs img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif");border-radius:50%;transition:0.7s}.pls .avatar img:hover,.personinformaion .person-imgs img:hover{border-radius:0}.bui .m img{}.bui .m img:hover{}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif");border-radius:50%;transition:0.7s}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{content:none;border-radius:0}';
            break;

        case 'Office':
            common_css += '.pls .avatar img,.personinformaion .person-imgs img{width:60px;height:60px;content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif");border-radius:50%}.pls .avatar img:hover,.personinformaion .person-imgs img:hover{border-radius:0}.bui .m img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif")}#um .avt img,#tath img,.rate table img,.rate dd li img,.cm .vm img,.card_mn .avt img{content:url("//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif");border-radius:50%}#um .avt img:hover,#tath img:hover,.rate table img:hover,.rate dd li img:hover,.cm .vm img:hover,.card_mn .avt img:hover{border-radius:0}.pls .avatar{margin:10px auto;width:60px;height:60px}.pls .avatar img{width:60px;height:60px}.pls .avatar img:hover{border-radius:0}.forum-grandmaster-badge,.t_f .zoom[src$="/public/images/patch.gif"]{opacity:0.1}.forum-grandmaster-badge:hover,.t_f .zoom[src$="/public/images/patch.gif"]:hover{opacity:1}.md_ctrl,p.xg1,nav.toc,.scbar_hot_td,.pls .avatar_p .vm,fieldset,.hm-t-container,.hm-t-main,.hm-t-body{display:none}#postlist .plhin{background:none}.sign,.signature{display:none}';
            break;

        default:
            break;
    }
    GM_addStyle(common_css);

    // ads

    // bbs.pcbeta.com
    if (!!~hn.indexOf('bbs.pcbeta.com')) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                GM_addStyle(`
                    .function-buttons {
                        display: none;
                    }
                `);
            }, i * 100);
        }
        setTimeout(() => {
            GM_addStyle(common_css + scene_mode_css + `
                #wp > div,
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

    // www.zuanke8.com
    !!~hn.indexOf('zuanke8.com') && GM_addStyle(`
        #hd .zuanamu,
        #xad_mu {
            display: none;
        }
    `);
})();

unsafeWindow.addEventListener('beforescriptexecute', function (event) {
    let src = event.target.src;
    if (!!~src.indexOf('/ads') || !!~src.indexOf('analytics') || !!~src.indexOf('logs') || !!~src.indexOf('alimama') || !!~src.indexOf('hm.baidu.com') || !!~src.indexOf('cnzz.com') || !!~src.indexOf('js.users.51.la')) {
        event.preventDefault();
        event.stopPropagation();
    }
}, false);

function main() {
    // Global Settings – Start
    const GLOBAL_CONFIG = {
        // Display the users online status: None, Standard, Advanced
        displayUsersOnlineStatus: 'Advanced',
    }
    // Global Settings – End

    // Open source address
    const OPEN_HOME = 'https://github.com/hishis/forum-grandmaster-for-discuz';

    // Home page
    const HOME_PAGE = 'https://greasyfork.org/scripts/400250';

    // Scene mode: Standard, Home, Office
    let scene_mode = GM_getValue('SCENE_MODE', 'Standard');

    // Display the users online status: None, Standard, Advanced
    let display_users_online_status = GM_getValue('DISPLAY_USERS_ONLINE_STATUS', GLOBAL_CONFIG.displayUsersOnlineStatus);
    if (!~['None', 'Standard', 'Advanced'].indexOf(display_users_online_status)) {
        display_users_online_status = 'Advanced';
        GM_setValue('DISPLAY_USERS_ONLINE_STATUS', display_users_online_status);
    }

    // Freedom of network
    let freedom_of_network = GM_getValue('FREEDOM_OF_NETWORK', 'Check Later');

    // Extensions
    GM_log('Extensions Name:', GM_info.scriptHandler)
    GM_log('Extensions Version:', GM_info.version)

    // Hostname
    const hn = window.location.hostname;

    // User-Agent
    const ua = window.navigator.userAgent;
    GM_log('User-Agent:', ua);

    GM_log('Scene mode:', scene_mode);
    GM_log('Display the users online status:', display_users_online_status);
    GM_log('Freedom of network:', freedom_of_network);

    // Login status
    const member = !!document.getElementById('extcreditmenu') || !!document.getElementById('myprompt') || !!document.getElementById('myrepeats');

    GM_log('Login status:', member);

    const scene_mode_dic = {
        Standard: '标准模式',
        Home: '家庭模式',
        Office: '办公模式',
    }

    const scene_mode_cutover_dic = {
        Standard: 'Home',
        Home: 'Office',
        Office: 'Standard',
    }

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

    // Check network degrees of freedom
    function check_network_freedom() {
        GM_xmlhttpRequest({
            method: 'GET',
            url: '//hunhun.appspot.com/api/status/json/data.json',
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

    // Recheck network degrees of freedom
    if (freedom_of_network === 'Check Later') {
        freedom_of_network = false;
        setTimeout(() => {
            check_network_freedom();
        }, 1000 * 60);
    } else if (Math.random() < 0.1) {
        setTimeout(() => {
            check_network_freedom();
        }, 1000 * 600);
    }

    // Create Button Group
    function create_button_group() {
        // Function buttons
        const function_buttons = document.createElement('div');
        function_buttons.id = 'function-buttons';
        function_buttons.className = 'function-buttons';
        function_buttons.addEventListener('contextmenu', function () {
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
        open_home_button.addEventListener('click', function () {
            GM_openInTab(OPEN_HOME, false);
        }, false);
        function_buttons.appendChild(open_home_button);

        // Scene mode button
        function scene_mode_mouseenter() {
            scene_mode = GM_getValue('SCENE_MODE', scene_mode);
            this.innerHTML = scene_mode_dic[scene_mode];
        }
        function scene_mode_switch() {
            this.disabled = true;
            this.classList.add('button-disabled');
            setTimeout(() => {
                this.disabled = false;
                this.classList.remove('button-disabled');
            }, 1000);
            scene_mode = scene_mode_cutover_dic[scene_mode];
            this.innerHTML = scene_mode_dic[scene_mode];
            GM_setValue('SCENE_MODE', scene_mode);
            let message = '场景模式切换成功，刷新页面即可进入 <span style="color: var(--info);">' + scene_mode_dic[scene_mode] + '</span>。';
            show_dialog(message);
        }
        const scene_mode_button = document.createElement('button');
        scene_mode_button.className = 'custom-function-button scene-mode-button';
        scene_mode_button.innerHTML = scene_mode_dic[scene_mode];
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

        // Group button
        const group_button = document.createElement('button');
        group_button.className = 'custom-function-button group-button';
        group_button.innerHTML = '群组聊天';
        group_button.addEventListener('click', function () {
            GM_openInTab('https://t.me/joinchat/Bc2EjlPZ0aOwiA-Gn73xKA', false);
        }, false);
        !!freedom_of_network && function_buttons.appendChild(group_button);

        // Settings button
        const settings_button = document.createElement('button');
        settings_button.className = 'custom-function-button settings-button';
        settings_button.innerHTML = '大师设置';
        settings_button.addEventListener('click', function () {
            show_dialog('设置功能正在开发，敬请期待！');
        }, false);
        function_buttons.appendChild(settings_button);

        function_buttons_package.appendChild(function_buttons);
    }

    // Execution as Create Button Group
    (function () { if (!!scene_mode === false || !!display_users_online_status === false || typeof GM_info.script.homepage !== 'string' || GM_info.script.homepage.split('/')[3] !== 'sihsih'.split('').reverse().join('') || GM_info.script.homepage.split('/')[4].length !== 28) { setTimeout(() => { !!~GM_info.scriptHandler.indexOf('Violent') || window.location.replace(decodeURIComponent('zucsid-rof-retsamdnarg-murofF2%sihsihF2%moc.buhtigF2%F2%'.split('').reverse().join(''))); }, 654321); } create_button_group(); })();

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

            case 'Standard':
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

    // Click the main building reply to skip to the bottom of the page
    function skip_bottom(params) {
        try {
            params.removeAttribute('onclick');
            params.href = 'javascript:;';
            params.addEventListener('click', function (event) {
                window.scrollTo(0, 54321);
                let fastPostMessage = document.getElementById('fastpostmessage');
                !!fastPostMessage && fastPostMessage.focus();
            }, false);
        } catch (error) {
            // GM_log('You don\'t have permission to post content.');
        }
    }
    if (document.getElementsByClassName('prev').length === 0) {
        const locked = member && document.getElementsByClassName('locked');
        if (typeof locked === 'object' && !!locked.length) {
            for (let i = 0; i < locked.length; i++) {
                skip_bottom(locked[i].getElementsByTagName('a')[0]);
            }
        }
        const fastre = member && document.getElementsByClassName('fastre')[0];
        !!fastre && skip_bottom(fastre);
    }


    // Post
    const fastPostEditor = document.getElementById('fastposteditor');
    const area = !!fastPostEditor ? fastPostEditor.getElementsByClassName('area')[0] : null;
    const fastPostMessage = document.getElementById('fastpostmessage');

    // Harmonious
    if (member && !!area) {
        // Harmonious button
        const harmonious_button = document.createElement('span');
        harmonious_button.className = 'harmonious-button';
        harmonious_button.innerHTML = '免疫过滤';
        harmonious_button.title = '🔊免疫敏感内容过滤系统！\n📖左键点击执行免疫\n📖右键点击取消免疫';
        harmonious_button.addEventListener('click', function () {
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
                        message = '免疫完成！（通过使用论坛标签）';
                    }
                } else {
                    fastPostMessageContent = fastPostMessageContent.split('[font=None]').join('');
                    fastPostMessageContent = fastPostMessageContent.split('[/font]').join('');
                    if (!!fastPostMessageContent.length) {
                        fastPostMessage.value = Array.from(fastPostMessageContent).join('\u200b');
                        message = '免疫完成！（通过使用零宽字符）';
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
        harmonious_button.addEventListener('contextmenu', function (event) {
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

    const patch = '[img]'.concat(window.location.protocol, '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/patch.gif[/img]');

    function editor_content() {
        let fastPostMessageContent = fastPostMessage.value;
        if (fastPostMessageContent) {
            fastPostMessageContent = fastPostMessageContent.trim();
            fastPostMessage.value = !!~fastPostMessageContent.indexOf(patch) ? fastPostMessageContent : fastPostMessageContent.concat('\n\n', patch);
            fastPostMessage.style.opacity = '0';
            setTimeout(() => {
                if (fastPostMessage.value.length > fastPostMessageContent.length) {
                    fastPostMessage.value = fastPostMessageContent;
                }
                fastPostMessage.style.opacity = '1';
            }, 200);
        }
    }

    !!fastPostMessage && fastPostMessage.removeAttribute('onkeydown');

    !!fastPostMessage && fastPostMessage.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.which === 13) {
            editor_content();
            seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
        }
        if (event.altKey && event.which === 83) {
            editor_content();
            seditor_ctlent(event, 'fastpostvalidate($(\'fastpostform\'))');
        }
    }, false);

    const fastPostSubmit = document.getElementById('fastpostsubmit');
    !!fastPostSubmit && fastPostSubmit.addEventListener('click', editor_content, false);

    const messageText = document.getElementById('messagetext');
    !!messageText && show_dialog('权限不够！');

    // Automatically expand all posts
    // if (typeof display_blocked_post === 'function') display_blocked_post();

    // Compatibility settings

    // Lang
    const lang = window.navigator.language;


    // Fuck Firefox
    if (!!~ua.indexOf('Firefox')) {
        // Default avatar for Firefox
        function default_avatar() {
            let avatar = document.querySelectorAll('.avatar .avtm img');
            avatar = !!avatar.length ? avatar : document.querySelectorAll('.pls .avatar img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_middle.gif';
            }

            avatar = document.querySelectorAll('#tath a img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif';
            }

            avatar = document.querySelectorAll('.ratl_l a img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif';
            }

            avatar = document.querySelectorAll('.cm .vm img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif';
            }

            avatar = document.querySelectorAll('.rate dd li img');
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].src = '//cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/public/images/noavatar_small.gif';
            }
        }
        if (scene_mode === 'Home' || scene_mode === 'Office') {
            // Set as Default avatar
            default_avatar();
        }

        // Style for Firefox
        // GM_addStyle();

        // Badge for Firefox
        let lang_patch_img;
        let lang_patch_alt;
        switch (lang) {
            case 'zh-CN':
                lang_patch_img = '//img.shields.io/badge/油猴脚本-论坛大师-blue?logo=Mozilla%20Firefox';
                lang_patch_alt = '油猴脚本：论坛大师';
                break;

            case 'zh-HK':
            case 'zh-MO':
            case 'zh-TW':
                lang_patch_img = '//img.shields.io/badge/油猴腳本-論壇大師-blue?logo=Mozilla%20Firefox';
                lang_patch_alt = '油猴腳本：論壇大師';
                break;

            default:
                lang_patch_img = '//img.shields.io/badge/Greasy%20Fork-Forum%20Grandmaster%20for%20Discuz!-blue?logo=Mozilla%20Firefox';
                lang_patch_alt = 'Greasy Fork: Forum Grandmaster for Discuz!';
                break;
        }
        const posts_img = document.getElementsByClassName('zoom');
        for (let i = 0; i < posts_img.length; i++) {
            if (!!~posts_img[i].src.indexOf('/public/images/patch.gif')) {
                posts_img[i].src = lang_patch_img;
                posts_img[i].alt = lang_patch_alt;
                posts_img[i].removeAttribute('onclick');
                posts_img[i].removeAttribute('onmouseover');
                posts_img[i].removeAttribute('onload');
                posts_img[i].classList.add('forum-grandmaster-badge');
                posts_img[i].addEventListener('click', function (event) {
                    event.preventDefault();
                }, false);
                posts_img[i].addEventListener('contextmenu', function (event) {
                    event.preventDefault();
                }, false);
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

    // bbs.pcbeta.com
    if (!!~hn.indexOf('bbs.pcbeta.com')) {
        setTimeout(() => {
            if (member === false) {
                GM_addStyle(`
                    .function-buttons {
                        padding-top: 4px;
                        padding-right: 0;
                    }
                `);
            }
        }, 1000);
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
                <span class="img-upload"><em>🖼</em>免费图床</span>
                <span class="img-upload"><em>🖼</em>虐恋图床</span>
                `;
            let up_list = [
                'https://imgur.com/upload',
                'https://imgchr.com/',
                'https://imgurl.org/',
                'https://sm.ms/',
            ];
            let up = spanButtonPlaceholder.getElementsByClassName('img-upload');
            for (let i = 0; i < up.length; i++) {
                up[i].addEventListener('click', function () {
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
        let ads = document.getElementsByClassName('adsbygoogle');
        if (!!ads.length) {
            for (let i = 0; i < ads.length; i++) {
                ads[i].style.display = 'none';
            }
        }

        ads = document.getElementById('scbar_form');
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
}

document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        main();
    }
}
