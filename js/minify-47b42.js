!function (a) {
    "use strict";

    function b() {
        mkd.scroll = a(window).scrollTop(), mkd.body.hasClass("mkd-dark-header") && (mkd.defaultHeaderStyle = "mkd-dark-header"), mkd.body.hasClass("mkd-light-header") && (mkd.defaultHeaderStyle = "mkd-light-header")
    }

    function c() {
    }

    function d() {
        mkd.windowWidth = a(window).width(), mkd.windowHeight = a(window).height()
    }

    function e() {
        mkd.scroll = a(window).scrollTop()
    }

    switch (window.mkd = {}, mkd.modules = {}, mkd.scroll = 0, mkd.window = a(window), mkd.document = a(document), mkd.windowWidth = a(window).width(), mkd.windowHeight = a(window).height(), mkd.body = a("body"), mkd.html = a("html, body"), mkd.htmlEl = a("html"), mkd.menuDropdownHeightSet = !1, mkd.defaultHeaderStyle = "", mkd.minVideoWidth = 1500, mkd.videoWidthOriginal = 1280, mkd.videoHeightOriginal = 720, mkd.videoRatio = 1280 / 720, mkd.transitionEnd = function () {
        var a = document.createElement("transitionDetector"),
            b = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", transition: "transitionend"};
        for (var c in b) if (void 0 !== a.style[c]) return b[c]
    }(), mkd.mkdOnDocumentReady = b, mkd.mkdOnWindowLoad = c, mkd.mkdOnWindowResize = d, mkd.mkdOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e), !0) {
        case mkd.body.hasClass("mkd-grid-1300"):
            mkd.boxedLayoutWidth = 1350;
            break;
        case mkd.body.hasClass("mkd-grid-1200"):
            mkd.boxedLayoutWidth = 1250;
            break;
        case mkd.body.hasClass("mkd-grid-1000"):
            mkd.boxedLayoutWidth = 1050;
            break;
        case mkd.body.hasClass("mkd-grid-800"):
            mkd.boxedLayoutWidth = 850;
            break;
        default:
            mkd.boxedLayoutWidth = 1150
    }
}(jQuery), function (a) {
    "use strict";

    function b() {
        F(), f(), h(), i(), l(), m(), o(), K().init(), r(), s(), j(), z(), C(), B(), E(), k(), G(), H(), I()
    }

    function c() {
        n(), D()
    }

    function d() {
        r(), z()
    }

    function e() {
        F()
    }

    function f() {
        g() && mkd.body.addClass("mkd-no-animations-on-touch")
    }

    function g() {
        return Modernizr.touch && !mkd.body.hasClass("mkd-no-animations-on-touch")
    }

    function h() {
        navigator.appVersion.toLowerCase().indexOf("mac") > -1 && mkd.body.hasClass("mkd-smooth-scroll") && mkd.body.removeClass("mkd-smooth-scroll")
    }

    function i() {
        fluidvids.init({selector: ["iframe"], players: ["www.youtube.com", "player.vimeo.com"]})
    }

    function j() {
        var b = a(".mkd-slick-slider");
        b.length && b.each(function () {
            var b = a(this);
            b.on("init", function () {
                b.css({opacity: "1"})
            }).slick({
                dots: !1,
                arrows: !0,
                fade: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                infinite: !0,
                speed: 800,
                cssEase: "cubic-bezier(0.23, 1, 0.32, 1)"
            })
        })
    }

    function k() {
        a(".wpcf7-select").length && a(".wpcf7-select").select2(), a(".mkd-footer-bottom-holder select") && a(".mkd-footer-bottom-holder select").select2(), a(".mkd-footer-top-holder select") && a(".mkd-footer-top-holder select").select2(), a("aside.mkd-sidebar select") && a("aside.mkd-sidebar select").select2(), a(".wpb_widgetised_column select") && a(".wpb_widgetised_column select").select2()
    }

    function l() {
        a(".mkd-preload-background").each(function () {
            var b = a(this);
            if ("" !== b.css("background-image") && "none" != b.css("background-image")) {
                var c = b.attr("style");
                if (c = c.match(/url\(["']?([^'")]+)['"]?\)/), c = c ? c[1] : "") {
                    var d = new Image;
                    d.src = c, a(d).load(function () {
                        b.removeClass("mkd-preload-background")
                    })
                }
            } else a(window).load(function () {
                b.removeClass("mkd-preload-background")
            })
        })
    }

    function m() {
        a("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: "data-rel",
            animation_speed: "normal",
            slideshow: !1,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            horizontal_padding: 0,
            default_width: 960,
            default_height: 540,
            counter_separator_label: "/",
            theme: "pp_default",
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            overlay_gallery: !1,
            keyboard_shortcuts: !0,
            deeplinking: !1,
            custom_markup: "",
            social_tools: !1,
            markup: '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>'
        })
    }

    function n() {
        if (a("[data-mkd_header_style]").length > 0 && mkd.body.hasClass("mkd-header-style-on-scroll")) {
            var b = a(".wpb_row.mkd-section"), c = function (a) {
                void 0 !== a.data("mkd_header_style") ? mkd.body.removeClass("mkd-dark-header mkd-light-header").addClass(a.data("mkd_header_style")) : mkd.body.removeClass("mkd-dark-header mkd-light-header").addClass("" + mkd.defaultHeaderStyle)
            };
            b.waypoint(function (b) {
                "down" === b && c(a(this.element))
            }, {offset: 0}), b.waypoint(function (b) {
                "up" === b && c(a(this.element))
            }, {
                offset: function () {
                    return -a(this.element).outerHeight()
                }
            })
        }
    }

    function o() {
        var b, c, d = a(".mkd-no-animations-on-touch"), e = !0,
            f = a(".mkd-grow-in, .mkd-fade-in-down, .mkd-element-from-fade, .mkd-element-from-left, .mkd-element-from-right, .mkd-element-from-top, .mkd-element-from-bottom, .mkd-flip-in, .mkd-x-rotate, .mkd-z-rotate, .mkd-y-translate, .mkd-fade-in, .mkd-fade-in-left-x-rotate");
        d.length && (e = !1), f.length > 0 && e && f.each(function () {
            a(this).appear(function () {
                void 0 !== (c = a(this).data("animation")) && "" !== c && (b = c, a(this).addClass(b + "-on"))
            }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
        })
    }

    function p() {
        a(".mkd-parallax-section-holder").length && a(".mkd-parallax-section-holder").each(function () {
            var b = a(this);
            b.hasClass("mkd-full-screen-height-parallax") && (b.height(mkd.windowHeight), b.find(".mkd-parallax-content-outer").css("padding", 0));
            var c = .4 * b.data("mkd-parallax-speed");
            b.parallax("50%", c)
        })
    }



    function r() {
        a(".mkd-section .mkd-video-wrap").each(function () {
            var b = a(this), c = b.closest(".mkd-section").outerWidth();
            b.width(c);
            var d = b.closest(".mkd-section").outerHeight();
            mkd.minVideoWidth = mkd.videoRatio * (d + 20), b.height(d);
            var e = c / mkd.videoWidthOriginal, f = d / mkd.videoHeightOriginal, g = f;
            e > f && (g = e), g * mkd.videoWidthOriginal < mkd.minVideoWidth && (g = mkd.minVideoWidth / mkd.videoWidthOriginal), b.find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(g * mkd.videoWidthOriginal + 2)), b.find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(g * mkd.videoHeightOriginal + 2)), b.scrollLeft((b.find("video").width() - c) / 2), b.find(".mejs-overlay, .mejs-poster").scrollTop((b.find("video").height() - d) / 2), b.scrollTop((b.find("video").height() - d) / 2)
        })
    }

    function s() {
        a(".mkd-footer-uncover").length && a(".mkd-content").css("margin-bottom", a(".mkd-footer-inner").height())
    }

    function t() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", v, !1), window.onmousewheel = document.onmousewheel = v, document.onkeydown = w, mkd.body.hasClass("mkd-smooth-scroll") && (window.removeEventListener("mousewheel", smoothScrollListener, !1), window.removeEventListener("DOMMouseScroll", smoothScrollListener, !1))
    }

    function u() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", v, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null, mkd.body.hasClass("mkd-smooth-scroll") && (window.addEventListener("mousewheel", smoothScrollListener, !1), window.addEventListener("DOMMouseScroll", smoothScrollListener, !1))
    }

    function v(a) {
        x(a)
    }

    function w(a) {
        for (var b = [37, 38, 39, 40], c = b.length; c--;) if (a.keyCode === b[c]) return void x(a)
    }

    function x(a) {
        a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1
    }



    function z() {
        a(".mkd-self-hosted-video-holder .mkd-video-wrap").each(function () {
            var b = a(this), c = b.closest(".mkd-self-hosted-video-holder").outerWidth(), d = c / mkd.videoRatio;
            navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (b.parent().width(c), b.parent().height(d)), b.width(c), b.height(d), b.find("video, .mejs-overlay, .mejs-poster").width(c), b.find("video, .mejs-overlay, .mejs-poster").height(d)
        })
    }

    function A(b) {
        var c = a("#mkd-back-to-top");
        c.removeClass("off on"), "on" === b ? c.addClass("on") : c.addClass("off")
    }

    function B() {
        mkd.window.scroll(function () {
            var b, c = a(this).scrollTop(), d = a(this).height();
            b = c > 0 ? c + d / 2 : 1, A(b < 1e3 ? "off" : "on")
        })
    }

    function C() {
        a("#mkd-back-to-top").on("click", function (a) {
            a.preventDefault(), mkd.html.animate({scrollTop: 0}, mkd.window.scrollTop() / 3, "easeInOutExpo")
        })
    }

    function D() {
        var b = a("body > .mkd-smooth-transition-loader.mkd-mimic-ajax"), c = function () {
            b.find("svg").length && !mkd.body.is('[class*="mkd-ms-ie"]') ? a(document).on("svgDrawn", function () {
                b.find("svg").remove(), b.slideUp(1e3, "easeInOutExpo")
            }) : b.fadeOut(800, "easeInOutQuint")
        };
        b.length && (c(), a(window).bind("pageshow", function (a) {
            a.originalEvent.persisted && c()
        }), a("a").on("click", function (c) {
            var d = a(this);
            1 == c.which && d.attr("href").indexOf(window.location.host) >= 0 && void 0 === d.data("rel") && void 0 === d.attr("rel") && (void 0 === d.attr("target") || "_self" === d.attr("target")) && d.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (c.preventDefault(), b.addClass("mkd-hide-spinner"), b.fadeIn(300, "easeInOutQuint", function () {
                window.location = d.attr("href")
            }))
        }))
    }

    function E() {
        var b, c, d = a(".mkd-sidebar .widget_nav_menu .menu");
        d.length && d.each(function () {
            c = a(this), b = c.find("li.menu-item-has-children > a"), b.length && b.each(function () {
                var b = a(this);
                b.on("click", function (a) {
                    a.preventDefault();
                    var c = b.parent().children(".sub-menu");
                    c.is(":visible") ? (c.slideUp(), b.removeClass("mkd-custom-menu-active")) : (c.slideDown(), b.addClass("mkd-custom-menu-active"))
                })
            })
        })
    }

    function F() {
        a.fn.preloader = function (b, c) {
            if (b && "destroy" == b) this.find(".mkd-preloader").remove(); else {
                var d = a('<div class="mkd-preloader"></div>');
                a('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="75" width="75" viewbox="0 0 75 75"><circle stroke-linecap="round" cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>').appendTo(d), d.appendTo(this), "function" == typeof c && c()
            }
            return this
        }, a('img[data-image][data-lazy="true"]:not(.lazyLoading)').each(function (b, c) {
            c = a(c), c.attr("data-ratio") && c.height(c.width() * c.data("ratio"));
            var d = c[0].getBoundingClientRect(), e = mkd.windowHeight || document.documentElement.clientHeight,
                f = mkd.windowWidth || document.documentElement.clientWidth, g = c.outerHeight(), h = c.outerWidth();
            if ((0 !== d.top || 0 !== d.right || 0 !== d.bottom || 0 !== d.left) && (d.top >= 0 || d.top + g >= 0) && d.bottom >= 0 && d.bottom - g - e <= 0 && (d.left >= 0 || d.left + h >= 0) && d.right >= 0 && d.right - h - f <= 0) {
                var i = c.parent();
                i && i.preloader("init"), c.addClass("lazyLoading");
                var j = new Image;
                a(j).on("load", function () {
                    i.preloader("destroy"), c.removeAttr("data-image").removeData("image").removeAttr("data-lazy").removeData("lazy").removeClass("lazyLoading"), c.attr("src", a(this).attr("src")), c.height("auto")
                }).attr("src", c.data("image"))
            }
        })
    }

    function G() {
        var a, b = window.navigator.userAgent, c = b.indexOf("MSIE ");
        if (c > 0 && (a = parseInt(b.substring(c + 5, b.indexOf(".", c)), 10)), b.indexOf("Trident/") > 0) {
            var d = b.indexOf("rv:");
            a = parseInt(b.substring(d + 3, b.indexOf(".", d)), 10)
        }
        var e = b.indexOf("Edge/");
        e > 0 && (a = parseInt(b.substring(e + 5, b.indexOf(".", e)), 10)), void 0 !== a && "" !== a && mkd.body.addClass("mkd-ms-ie-" + a)
    }

    function H() {
        if (a(".mkd-smooth-transition-loader path").length && !mkd.body.is('[class*="mkd-ms-ie"]')) {
            a(".mkd-smooth-transition-loader path").closest(".mkd-blink").one("animationiteration webkitAnimationIteration", function () {
                a(this).removeClass("mkd-blink")
            });
            var b = function () {
                var b = document.querySelector(".mkd-smooth-transition-loader path"), c = b.getTotalLength();
                b.style.transition = b.style.WebkitTransition = "none", b.style.strokeDasharray = c + " " + c, b.style.strokeDashoffset = c, b.style.opacity = "0", b.getBoundingClientRect(), b.style.transition = b.style.WebkitTransition = "all 4s ease-in-out", b.style.strokeDashoffset = "0", b.style.opacity = "1", setTimeout(function () {
                    a(document).trigger("svgDrawn")
                }, 4e3)
            };
            b(), setInterval(function () {
                a(".mkd-smooth-transition-loader svg").length && b()
            }, 4e3)
        }
    }

    function I() {
        window.requestNextAnimationFrame = function () {
            var a, b, c = navigator.userAgent, d = 0, e = this;
            return window.webkitRequestAnimationFrame && (b = function (a) {
                void 0 === a && (a = +new Date), e.callback(a)
            }, a = window.webkitRequestAnimationFrame, window.webkitRequestAnimationFrame = function (c, d) {
                e.callback = c, a(b, d)
            }), window.mozRequestAnimationFrame && (d = c.indexOf("rv:"), -1 != c.indexOf("Gecko") && "2.0" === c.substr(d + 3, 3) && (window.mozRequestAnimationFrame = void 0)), window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a, b) {
                var c, d;
                window.setTimeout(function () {
                    c = +new Date, a(c), d = +new Date, e.timeout = 1e3 / 60 - (d - c)
                }, e.timeout)
            }
        }()
    }

    var J = {};
    mkd.modules.common = J, J.mkdIsTouchDevice = g, J.mkdDisableSmoothScrollForMac = h, J.mkdFluidVideo = i, J.mkdPreloadBackgrounds = l, J.mkdPrettyPhoto = m, J.mkdCheckHeaderStyleOnScroll = n, J.mkdInitParallax = p, J.mkdEnableScroll = u, J.mkdDisableScroll = t, J.mkdWheel = v, J.mkdKeydown = w, J.mkdPreventDefaultValue = x, J.mkdSlickSlider = j, J.mkdSelfHostedVideoSize = z, J.mkdInitBackToTop = C, J.mkdBackButtonShowHide = B, J.mkdSmoothTransition = D, J.mkdInitCustomMenuDropdown = E, J.mkdInitSelect2 = k, J.mkdLazyImages = F, J.mkdRequestAnimationFrame = I, J.mkdOnDocumentReady = b, J.mkdOnWindowLoad = c, J.mkdOnWindowResize = d, J.mkdOnWindowScroll = e, J.mkdIsTouchDevice = g, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e);
    var K = mkd.modules.common.mkdInitAnchor = function () {
        var b = function (b) {
            a(".mkd-main-menu .mkd-active-item, .mkd-mobile-nav .mkd-active-item, .mkd-vertical-menu .mkd-active-item, .mkd-fullscreen-menu .mkd-active-item").removeClass("mkd-active-item"), b.parent().addClass("mkd-active-item"), a(".mkd-main-menu a, .mkd-mobile-nav a, .mkd-vertical-menu a, .mkd-fullscreen-menu a").removeClass("current"), b.addClass("current")
        }, c = function () {
            a("[data-mkd-anchor]").waypoint(function (c) {
                "down" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("mkd-anchor") + "']"))
            }, {offset: "50%"}), a("[data-mkd-anchor]").waypoint(function (c) {
                "up" === c && b(a("a[href='" + window.location.href.split("#")[0] + "#" + a(this.element).data("mkd-anchor") + "']"))
            }, {
                offset: function () {
                    return -(a(this.element).outerHeight() - 150)
                }
            })
        }, d = function () {
            var b = window.location.hash.split("#")[1];
            if ("" !== b && a('[data-mkd-anchor="' + b + '"]').length > 0) {
                var c = window.location.href.split("#")[0] + "#" + b;
                a("a[href='" + c + '"').trigger("click")
            }
        }, e = function (a) {
            return "mkd-sticky-header-on-scroll-down-up" == mkd.modules.header.behaviour && (a > mkd.modules.header.stickyAppearAmount ? mkd.modules.header.isStickyVisible = !0 : mkd.modules.header.isStickyVisible = !1), "mkd-sticky-header-on-scroll-up" == mkd.modules.header.behaviour && a > mkd.scroll && (mkd.modules.header.isStickyVisible = !1), mkd.modules.header.isStickyVisible ? mkdGlobalVars.vars.mkdStickyHeaderTransparencyHeight : mkdPerPageVars.vars.mkdHeaderTransparencyHeight
        }, f = function () {
            mkd.document.on("click", ".mkd-main-menu a, .mkd-vertical-menu a, .mkd-fullscreen-menu a, .mkd-btn, .mkd-anchor, .mkd-mobile-nav a", function () {
                var c, d = a(this), f = d.prop("hash").split("#")[1];
                if ("" !== f && a('[data-mkd-anchor="' + f + '"]').length > 0) {
                    var g = a('[data-mkd-anchor="' + f + '"]').offset().top;
                    return c = a('[data-mkd-anchor="' + f + '"]').offset().top - e(g), b(d), mkd.html.stop().animate({scrollTop: Math.round(c)}, 1e3, function () {
                        history.pushState && history.pushState(null, null, "#" + f)
                    }), !1
                }
            })
        };
        return {
            init: function () {
                a("[data-mkd-anchor]").length && (f(), c(), a(window).load(function () {
                    d()
                }))
            }
        }
    }
}(jQuery), function (a) {
    "use strict";

    function b() {
        g()
    }

    function c() {
    }

    function d() {
    }

    function e() {
    }

    function f(b, c, d) {
        function e(a, c) {
            b[a] = void 0 !== b[a] ? b[a] : c
        }

        c = void 0 !== c ? c : ".mkd-content", d = void 0 !== d ? d : ".mkd-content", b = void 0 !== b ? b : {}, e("url", window.location.href), e("type", "POST"), e("success", function (e) {
            var f = a(e), g = f.find(".mkd-meta");
            g.length && l(g);
            var h = f.find(d);
            if (!h.length) return p = !0, !1;
            m(b.url, h, c)
        }), e("ajaxReq", "yes"), a.ajax({url: b.url, type: b.type, data: {ajaxReq: b.ajaxReq}, success: b.success})
    }

    function g() {
        if (mkd.body.removeClass("page-not-loaded"), o.loader = a("body > .mkd-smooth-transition-loader.mkd-ajax"), o.loader.length) {
            if (o.loader.fadeOut(o.loaderTime), a(window).focus(function () {
                o.loader.fadeOut(o.loaderTime)
            }), mkd.body.hasClass("woocommerce") || mkd.body.hasClass("woocommerce-page")) return !1;
            h(), a(document).on("click", 'a[target!="_blank"]:not(.no-ajax):not(.no-link)', function (b) {
                var c = a(this);
                if (1 == b.ctrlKey) return window.open(c.attr("href"), "_blank"), !1;
                if (c.parents(".mkd-ptf-load-more").length) return !1;
                if (c.parents(".mkd-blog-load-more-button").length) return !1;
                if (c.parents("mkd-post-info-comments").length) {
                    var d = c.attr("href").split("#")[1];
                    return a("html, body").scrollTop(a("#" + d).offset().top), !1
                }
                if (window.location.href.split("#")[0] == c.attr("href").split("#")[0]) return !1;
                if (0 === c.closest(".mkd-no-animation").length) {
                    if (document.location.href.indexOf("?s=") >= 0) return !0;
                    if (c.attr("href").indexOf("wp-admin") >= 0) return !0;
                    if (c.attr("href").indexOf("wp-content") >= 0) return !0;
                    if (-1 !== jQuery.inArray(c.attr("href").split("#")[0], mkdGlobalVars.vars.no_ajax_pages)) return document.location.href = c.attr("href"), !1;
                    if ("http://#" === c.attr("href") || "#" === c.attr("href")) return !1;
                    if (0 === c.attr("href").indexOf(window.location.protocol + "//" + window.location.host)) {
                        if (!p) return !1;
                        b.preventDefault(), b.stopImmediatePropagation(), b.stopPropagation(), c.is(".current") || i(c)
                    }
                }
            })
        }
    }

    function h() {
        window.history.pushState && a(window).bind("popstate", function () {
            var a = location.href;
            !q && p && (p = !1, f({url: a}))
        })
    }

    function i(a) {
        p = !1, o.loader.fadeIn(o.loaderTime), f({url: a.attr("href")})
    }

    function j(b) {
        var c = a("nav a[href='" + b + "'], .widget_nav_menu a[href='" + b + "']");
        a(".mkd-main-menu a, .mkd-mobile-nav a, .mkd-mobile-nav h4, .mkd-vertical-menu a, .popup_menu a, .widget_nav_menu a").removeClass("current").parent().removeClass("mkd-active-item"), a(".widget_nav_menu ul.menu > li").removeClass("current-menu-item"), c.each(function () {
            var b = a(this);
            0 === b.closest(".second").length ? b.parent().addClass("mkd-active-item") : b.closest(".second").parent().addClass("mkd-active-item"), b.closest(".mkd-mobile-nav").length > 0 && (b.closest(".level0").addClass("mkd-active-item"), b.closest(".level1").addClass("mkd-active-item"), b.closest(".level2").addClass("mkd-active-item")), b.closest(".widget_nav_menu").length > 0 && b.closest(".widget_nav_menu").find(".menu-item").addClass("current-menu-item"), b.addClass("current")
        })
    }

    function k() {
        a(document).off(), a(window).off(), mkd.body.off().find("*").off(), mkd.mkdOnDocumentReady(), mkd.mkdOnWindowLoad(), mkd.mkdOnWindowResize(), mkd.mkdOnWindowScroll();
        for (var b = ["common", "ajax", "header", "title", "shortcodes", "woocommerce", "portfolio", "blog", "like"], c = 0; c < b.length; c++) mkd.modules[b[c]].mkdOnDocumentReady(), mkd.modules[b[c]].mkdOnWindowLoad(), mkd.modules[b[c]].mkdOnWindowResize(), mkd.modules[b[c]].mkdOnWindowScroll()
    }

    function l(b) {
        var c = b.find(".mkd-seo-title").text(), d = b.find(".mkd-page-transition").text(),
            e = b.find(".mkd-seo-description").text(), f = b.find(".mkd-seo-keywords").text();
        void 0 !== d && (o.type = d), a('head meta[name="description"]').length ? a('head meta[name="description"]').attr("content", e) : void 0 !== e && a('<meta name="description" content="' + e + '">').prependTo(a("head")), a('head meta[name="keywords"]').length ? a('head meta[name="keywords"]').attr("content", f) : void 0 !== f && a('<meta name="keywords" content="' + f + '">').prependTo(a("head")), document.title = c;
        var g = b.find(".mkd-body-classes").text(), h = g.split(",");
        mkd.body.removeClass();
        for (var i = 0; i < h.length; i++) "mkd-page-not-loaded" !== h[i] && mkd.body.addClass(h[i]);
        if (a("#wp-admin-bar-edit").length > 0) {
            var j = b.find("#mkd-page-id").text(), k = a("#wp-admin-bar-edit a").attr("href"),
                l = k.replace(/(post=).*?(&)/, "$1" + j + "$2");
            a("#wp-admin-bar-edit a").attr("href", l)
        }
    }

    function m(b, c, d) {
        d = void 0 !== d ? d : ".mkd-content";
        var e = mkd.body.find(d);
        c.height(e.height()).css({
            position: "absolute",
            opacity: 0,
            overflow: "hidden"
        }).insertBefore(e), c.waitForImages(function () {
            -1 !== b.indexOf("#") && a('<a class="mkd-temp-anchor mkd-anchor" href="' + b + '" style="display: none"></a>').appendTo("body"), k(), "fade" == o.type && (e.stop().fadeTo(o.time, 0, function () {
                e.remove(), window.history.pushState ? (b !== window.location.href && window.history.pushState({path: b}, "", b), "undefined" != typeof _gaq && _gaq.push(["_trackPageview", b])) : document.location.href = window.location.protocol + "//" + window.location.host + "#" + b.split(window.location.protocol + "//" + window.location.host)[1], j(b), mkd.body.animate({scrollTop: 0}, o.time, "swing")
            }), setTimeout(function () {
                c.css("position", "relative").height("").stop().fadeTo(o.time, 1, function () {
                    p = !0, q = !1, o.loader.fadeOut(o.loaderTime, function () {
                        var b = a(".mkd-temp-anchor");
                        b.length && b.trigger("click").remove()
                    })
                })
            }, !o.simultaneous * o.time))
        })
    }

    var n = {};
    mkd.modules.ajax = n;
    var o = {};
    n.animation = o, n.mkdFetchPage = f, n.mkdInitAjax = g, n.mkdHandleLinkClick = i, n.mkdInsertFetchedContent = m, n.mkdInitBackBehavior = h, n.mkdSetActiveState = j, n.mkdReinitiateAll = k, n.mkdHandleMeta = l, n.mkdOnDocumentReady = b, n.mkdOnWindowLoad = c, n.mkdOnWindowResize = d, n.mkdOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e);
    var p = !0, q = !0;
    o.type = null, o.time = 500, o.simultaneous = !0, o.loader = null, o.loaderTime = 500
}(jQuery), function (a) {
    "use strict";

    function b() {
        f(), g(), h(), i(), k(), l(), m(), n(), o(), p(), r().init()
    }

    function c() {
        n(), j()
    }

    function d() {
        o(), k(), j()
    }

    function e() {
    }

    function f() {
        var b, c = a(".mkd-page-header"), d = a(".mkd-sticky-header"), e = a(".mkd-fixed-wrapper"),
            f = a(".mkd-page-header").find(".mkd-fixed-wrapper").length ? a(".mkd-page-header").find(".mkd-fixed-wrapper").offset().top : null;
        switch (!0) {
            case mkd.body.hasClass("mkd-sticky-header-on-scroll-up"):
                mkd.modules.header.behaviour = "mkd-sticky-header-on-scroll-up";
                var g = a(document).scrollTop();
                b = mkdGlobalVars.vars.mkdTopBarHeight + mkdGlobalVars.vars.mkdLogoAreaHeight + mkdGlobalVars.vars.mkdMenuAreaHeight + mkdGlobalVars.vars.mkdStickyHeaderHeight;
                var h = function () {
                    var c = a(document).scrollTop();
                    c > g && c > b || c < b ? (mkd.modules.header.isStickyVisible = !1, d.removeClass("header-appear").find(".mkd-main-menu .second").removeClass("mkd-drop-down-start")) : (mkd.modules.header.isStickyVisible = !0, d.addClass("header-appear")), g = a(document).scrollTop()
                };
                h(), a(window).scroll(function () {
                    h()
                });
                break;
            case mkd.body.hasClass("mkd-sticky-header-on-scroll-down-up"):
                var i = function () {
                    var a = mkdPerPageVars.vars.mkdStickyScrollAmountFullScreen;
                    return void 0 !== a && !0 === a
                };
                mkd.modules.header.behaviour = "mkd-sticky-header-on-scroll-down-up", function () {
                    var a;
                    a = i() ? mkd.window.height() : 0 !== mkdPerPageVars.vars.mkdStickyScrollAmount ? mkdPerPageVars.vars.mkdStickyScrollAmount : mkdGlobalVars.vars.mkdTopBarHeight + mkdGlobalVars.vars.mkdLogoAreaHeight + mkdGlobalVars.vars.mkdMenuAreaHeight, b = a
                }(), mkd.modules.header.stickyAppearAmount = b;
                var h = function () {
                    mkd.scroll < b ? (mkd.modules.header.isStickyVisible = !1, d.removeClass("header-appear").find(".mkd-main-menu .second").removeClass("mkd-drop-down-start")) : (mkd.modules.header.isStickyVisible = !0, d.addClass("header-appear"))
                };
                h(), a(window).scroll(function () {
                    h()
                });
                break;
            case mkd.body.hasClass("mkd-fixed-on-scroll"):
                mkd.modules.header.behaviour = "mkd-fixed-on-scroll";
                var j = function () {
                    mkd.scroll < f ? (e.removeClass("fixed"), c.css("margin-bottom", 0)) : (e.addClass("fixed"), c.css("margin-bottom", e.height()))
                };
                j(), a(window).scroll(function () {
                    j()
                })
        }
    }

    function g() {
        var b, c = a(".mkd-wrapper"), d = a(".mkd-side-menu"), e = a("a.mkd-side-menu-button-opener"), f = !1, g = !1,
            h = !1;
        mkd.body.hasClass("mkd-side-menu-slide-from-right") ? (b = "mkd-right-side-menu-opened", c.prepend('<div class="mkd-cover"/>'), f = !0) : mkd.body.hasClass("mkd-side-menu-slide-with-content") ? (b = "mkd-side-menu-open", g = !0) : mkd.body.hasClass("mkd-side-area-uncovered-from-content") && (b = "mkd-right-side-menu-opened", h = !0), a("a.mkd-side-menu-button-opener, a.mkd-close-side-menu").click(function (i) {
            if (i.preventDefault(), e.hasClass("opened")) {
                if (e.removeClass("opened"), mkd.body.removeClass(b), h) var j = setTimeout(function () {
                    d.css({visibility: "hidden"}), clearTimeout(j)
                }, 400)
            } else {
                e.addClass("opened"), mkd.body.addClass(b), f && a(".mkd-wrapper .mkd-cover").click(function () {
                    mkd.body.removeClass("mkd-right-side-menu-opened"), e.removeClass("opened")
                }), h && d.css({visibility: "visible"});
                var k = a(window).scrollTop();
                a(window).scroll(function () {
                    if (Math.abs(mkd.scroll - k) > 400 && (mkd.body.removeClass(b), e.removeClass("opened"), h)) var a = setTimeout(function () {
                        d.css({visibility: "hidden"}), clearTimeout(a)
                    }, 400)
                })
            }
            g && (i.stopPropagation(), c.click(function () {
                i.preventDefault(), e.removeClass("opened"), mkd.body.removeClass("mkd-side-menu-open")
            }))
        })
    }

    function h() {
        var b = a(".mkd-side-menu");
        b.length && b.niceScroll({
            scrollspeed: 60,
            mousescrollstep: 40,
            cursorwidth: 0,
            cursorborder: 0,
            cursorborderradius: 0,
            cursorcolor: "transparent",
            autohidemode: !1,
            horizrailenabled: !1
        })
    }

    function i() {
        if (a("a.mkd-fullscreen-menu-opener").length) {
            var b, c = a("a.mkd-fullscreen-menu-opener"), d = a(".mkd-fullscreen-menu-holder-outer"), e = !1, f = !1,
                g = a(".mkd-fullscreen-above-menu-widget-holder"), h = a(".mkd-fullscreen-below-menu-widget-holder"),
                i = a(".mkd-fullscreen-menu-holder-outer nav > ul > li > a"),
                j = a(".mkd-fullscreen-menu > ul li.has_sub > a"), k = a(".mkd-fullscreen-menu ul li:not(.has_sub) a");
            d.height(mkd.windowHeight).niceScroll({
                scrollspeed: 30,
                mousescrollstep: 20,
                cursorwidth: 0,
                cursorborder: 0,
                cursorborderradius: 0,
                cursorcolor: "transparent",
                autohidemode: !1,
                horizrailenabled: !1
            }), a(window).resize(function () {
                d.height(mkd.windowHeight)
            }), mkd.body.hasClass("mkd-fade-push-text-right") ? (b = "mkd-push-nav-right", e = !0) : mkd.body.hasClass("mkd-fade-push-text-top") && (b = "mkd-push-text-top", f = !0), (e || f) && (g.length && g.children().css({
                "-webkit-animation-delay": "0ms",
                "-moz-animation-delay": "0ms",
                "animation-delay": "0ms"
            }), i.each(function (b) {
                a(this).css({
                    "-webkit-animation-delay": 70 * (b + 1) + "ms",
                    "-moz-animation-delay": 70 * (b + 1) + "ms",
                    "animation-delay": 70 * (b + 1) + "ms"
                })
            }), h.length && h.children().css({
                "-webkit-animation-delay": 70 * (i.length + 1) + "ms",
                "-moz-animation-delay": 70 * (i.length + 1) + "ms",
                "animation-delay": 70 * (i.length + 1) + "ms"
            })), c.on("click", function (d) {
                d.preventDefault();
                var e = function () {
                    c.removeClass("opened"), mkd.body.removeClass("mkd-fullscreen-menu-opened"), mkd.body.removeClass("mkd-fullscreen-fade-in").addClass("mkd-fullscreen-fade-out"), mkd.body.addClass(b), mkd.body.hasClass("page-template-full_screen-php") || mkd.modules.common.mkdEnableScroll(), a("nav.mkd-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                        a("nav.popup_menu").getNiceScroll().resize()
                    })
                };
                c.hasClass("opened") ? e() : (!function () {
                    c.addClass("opened"), mkd.body.addClass("mkd-fullscreen-menu-opened"), mkd.body.removeClass("mkd-fullscreen-fade-out").addClass("mkd-fullscreen-fade-in"), mkd.body.removeClass(b), mkd.body.hasClass("page-template-full_screen-php") || mkd.modules.common.mkdDisableScroll()
                }(), a(document).keyup(function (a) {
                    27 == a.keyCode && e()
                })), a(document).mouseup(function (b) {
                    var c = a(".mkd-fullscreen-menu, .mkd-fullscreen-menu-opener");
                    c.is(b.target) || 0 !== c.has(b.target).length || e()
                })
            }), j.on("tap click", function (b) {
                if (b.preventDefault(), a(this).parent().hasClass("has_sub")) {
                    var c = a(this).parent().find("> ul.sub_menu");
                    c.is(":visible") ? (c.slideUp(200, function () {
                        d.getNiceScroll().resize()
                    }), a(this).parent().removeClass("open_sub")) : (a(this).parent().addClass("open_sub"), c.slideDown(200, function () {
                        d.getNiceScroll().resize()
                    }))
                }
                return !1
            }), k.click(function (d) {
                if ("http://#" === a(this).attr("href") || "#" === a(this).attr("href")) return !1;
                1 == d.which && (c.removeClass("opened"), mkd.body.removeClass("mkd-fullscreen-menu-opened"), mkd.body.removeClass("mkd-fullscreen-fade-in").addClass("mkd-fullscreen-fade-out"), mkd.body.addClass(b), a("nav.mkd-fullscreen-menu ul.sub_menu").slideUp(200, function () {
                    a("nav.popup_menu").getNiceScroll().resize()
                }), mkd.modules.common.mkdEnableScroll())
            })
        }
    }

    function j() {
        if (mkd.body.hasClass("mkd-header-divided")) {
            var b = a(".mkd-menu-area"), c = a(".mkd-sticky-holder"), d = b.width(), e = c.width(),
                f = a(".mkd-main-menu > ul > li > a"), g = 0, h = b.find(".mkd-logo-wrapper .mkd-normal-logo"), i = 0;
            b.children(".mkd-grid").length && (d = b.children(".mkd-grid").outerWidth()), c.children(".mkd-grid").length && (e = c.children(".mkd-grid").outerWidth()), f.length && (g = parseInt(f.css("padding-left"))), h.length && (i = h.width() / 2);
            var j = Math.round(d / 2 - g - i), k = Math.round(e / 2 - g - i);
            a(".mkd-menu-area .mkd-position-left, .mkd-menu-area .mkd-position-right, .mkd-sticky-header .mkd-position-left, .mkd-sticky-header .mkd-position-right").removeAttr("style"), a(".mkd-menu-area .mkd-position-left").width(j), a(".mkd-menu-area .mkd-position-right").width(j), a(".mkd-sticky-header .mkd-position-left").width(k), a(".mkd-sticky-header .mkd-position-right").width(k), b.css("opacity", 1)
        }
    }

    function k() {
        if (mkd.body.hasClass("mkd-header-tabbed")) {
            var b = a(".mkd-page-header .mkd-position-center"), c = a(".mkd-position-left").width(),
                d = a(".mkd-position-right").width();
            b.width(mkd.windowWidth - c - d), b.css("opacity", 1)
        }
    }

    function l() {
        var b = a(".mkd-mobile-header .mkd-mobile-menu-opener"), c = a(".mkd-mobile-header .mkd-mobile-nav"),
            d = a('.mkd-mobile-nav .mobile_arrow, .mkd-mobile-nav h4, .mkd-mobile-nav a[href*="#"]');
        b.length && c.length && b.on("tap click", function (a) {
            a.stopPropagation(), a.preventDefault(), c.is(":visible") ? c.slideUp(200) : c.slideDown(200)
        }), d.length && d.each(function () {
            a(this).on("tap click", function (b) {
                var c = a(this).nextAll("ul").first();
                if (c.length) {
                    b.preventDefault(), b.stopPropagation();
                    var d = a(this).parent("li");
                    c.is(":visible") ? (c.slideUp(200), d.removeClass("mkd-opened")) : (c.slideDown(200), d.addClass("mkd-opened"))
                }
            })
        }), a(".mkd-mobile-nav a, .mkd-mobile-logo-wrapper a").on("click tap", function (b) {
            "http://#" !== a(this).attr("href") && "#" !== a(this).attr("href") && c.slideUp(200)
        })
    }

    function m() {
        if (mkd.body.hasClass("mkd-sticky-up-mobile-header")) {
            var b, c = a(".mkd-mobile-header"), d = a("#wpadminbar"), e = c.length ? c.height() : 0,
                f = d.length ? d.height() : 0, g = a(document).scrollTop();
            b = e + f, a(window).scroll(function () {
                var e = a(document).scrollTop();
                e > b ? c.addClass("mkd-animate-mobile-header") : c.removeClass("mkd-animate-mobile-header"), e > g && e > b || e < b ? (c.removeClass("mobile-header-appear"), c.css("margin-bottom", 0),
                d.length && c.find(".mkd-mobile-header-inner").css("top", 0)) : (c.addClass("mobile-header-appear"), c.css("margin-bottom", b)), g = a(document).scrollTop()
            })
        }
    }

    function n() {
        a(".mkd-drop-down > ul > li.narrow").each(function (b) {
            var c = mkd.windowWidth - 16, d = a(this).offset().left, e = a(this).find(".second .inner ul").width(),
                f = 0;
            f = mkd.body.hasClass("boxed") ? mkd.boxedLayoutWidth - (d - (c - mkd.boxedLayoutWidth) / 2) : c - d;
            var g;
            a(this).find("li.sub").length > 0 && (g = f - e), (f < e || g < e) && (a(this).find(".second").addClass("right"), a(this).find(".second .inner ul").addClass("right"))
        })
    }

    function o() {
        var b = a(".mkd-drop-down > ul > li");
        b.each(function (c) {
            if (a(b[c]).find(".second").length > 0) {
                var d = a(b[c]).find(".second");
                if (a(b[c]).hasClass("wide")) {
                    var e = a(this).find(".inner > ul"),
                        f = parseInt(e.css("padding-left").slice(0, -2)) + parseInt(e.css("padding-right").slice(0, -2)),
                        g = e.outerWidth();
                    a(this).hasClass("left_position") || a(this).hasClass("right_position") || d.css("left", 0);
                    var h = 0;
                    a(this).find(".second > .inner > ul > li").each(function () {
                        var b = a(this).height();
                        b > h && (h = b)
                    }), a(this).find(".second > .inner > ul > li").css("height", ""), a(this).find(".second > .inner > ul > li").height(h), mkd.body.hasClass("mkd-full-width-wide-menu") ? a(this).hasClass("left_position") || a(this).hasClass("right_position") || setTimeout(function () {
                        var a = e.offset().left;
                        d.css("left", -a), d.css("width", mkd.windowWidth)
                    }, 300) : a(this).hasClass("left_position") || a(this).hasClass("right_position") || setTimeout(function () {
                        var a = (mkd.windowWidth - 2 * (mkd.windowWidth - e.offset().left)) / 2 + (g + f) / 2;
                        d.css("left", -a)
                    }, 300)
                }
                if (mkd.menuDropdownHeightSet || (a(b[c]).data("original_height", d.height() + "px"), d.height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) a(b[c]).on("touchstart mouseenter", function () {
                    d.css({
                        height: a(b[c]).data("original_height"),
                        overflow: "visible",
                        visibility: "visible",
                        opacity: "1"
                    })
                }).on("mouseleave", function () {
                    d.css({height: "0px", overflow: "hidden", visibility: "hidden", opacity: "0"})
                }); else if (mkd.body.hasClass("mkd-dropdown-animate-height")) a(b[c]).mouseenter(function () {
                    d.css({
                        visibility: "visible",
                        height: "0px",
                        opacity: "0"
                    }), d.stop().animate({height: a(b[c]).data("original_height"), opacity: 1}, 200, function () {
                        d.css("overflow", "visible")
                    })
                }).mouseleave(function () {
                    d.stop().animate({height: "0px"}, 0, function () {
                        d.css({overflow: "hidden", visibility: "hidden"})
                    })
                }); else {
                    var i = {
                        interval: 0, over: function () {
                            setTimeout(function () {
                                d.addClass("mkd-drop-down-start"), d.stop().css({height: a(b[c]).data("original_height")})
                            }, 150)
                        }, timeout: 150, out: function () {
                            d.stop().css({height: "0px"}), d.removeClass("mkd-drop-down-start")
                        }
                    };
                    a(b[c]).hoverIntent(i)
                }
            }
        }), a(".mkd-drop-down ul li.wide ul li a").on("click", function (b) {
            if (1 == b.which) {
                var c = a(this);
                setTimeout(function () {
                    c.mouseleave()
                }, 500)
            }
        }), mkd.menuDropdownHeightSet = !0
    }

    function p() {
        var b, c, d = a("a.mkd-search-opener");
        if (a("html").hasClass("touch") && !0, d.length > 0 && (mkd.body.hasClass("mkd-fullscreen-search") ? function (b, c) {
            var e = a(".mkd-fullscreen-search-holder"),
                f = (a(".mkd-fullscreen-search-overlay"), e.find(".mkd-field-holder"));
            d.click(function (b) {
                function c() {
                    mkd.body.removeClass("mkd-fullscreen-search-opened"), e.removeClass("mkd-animate"), mkd.body.removeClass("mkd-search-fade-in"), mkd.body.addClass("mkd-search-fade-out"), mkd.body.hasClass("page-template-full_screen-php") || mkd.modules.common.mkdEnableScroll(), f.find(".mkd-search-field").blur().val("")
                }

                b.preventDefault(), e.hasClass("mkd-animate") ? c() : function () {
                    mkd.body.addClass("mkd-fullscreen-search-opened"), mkd.body.removeClass("mkd-search-fade-out"), mkd.body.addClass("mkd-search-fade-in"), e.addClass("mkd-animate"), mkd.body.hasClass("page-template-full_screen-php") || mkd.modules.common.mkdDisableScroll(), setTimeout(function () {
                        f.find(".mkd-search-field").focus()
                    }, 400)
                }(), a(document).mouseup(function (a) {
                    f.is(a.target) || 0 !== f.has(a.target).length || (a.preventDefault(), c())
                }), a(document).keyup(function (a) {
                    27 == a.keyCode && c()
                })
            }), a(".mkd-fullscreen-search-holder .mkd-search-field").focus(function () {
                a(".mkd-fullscreen-search-holder .mkd-field-holder .mkd-line").css("width", "100%")
            }), a(".mkd-fullscreen-search-holder .mkd-search-field").blur(function () {
                a(".mkd-fullscreen-search-holder .mkd-field-holder .mkd-line").css("width", "0")
            })
        }() : mkd.body.hasClass("mkd-search-slides-from-window-top") ? (c = a(".mkd-search-slide-window-top"), b = a(".mkd-search-close"), function () {
            d.click(function (d) {
                d.preventDefault();
                var e = 0;
                a(".title").hasClass("has_parallax_background") && (e = parseInt(a(".title.has_parallax_background").css("backgroundPosition").split(" ")[1])), 0 === c.height() ? (a('.mkd-search-slide-window-top input[type="text"]').focus(), mkd.body.addClass("mkd-search-open"), a(".title.has_parallax_background").animate({"background-position-y": e + 50 + "px"}, 150)) : (mkd.body.removeClass("mkd-search-open"), a(".title.has_parallax_background").animate({"background-position-y": e - 50 + "px"}, 150)), a(window).scroll(function () {
                    0 !== c.height() && mkd.scroll > 50 && (mkd.body.removeClass("mkd-search-open"), a(".title.has_parallax_background").css("backgroundPosition", "center " + e + "px"))
                }), b.click(function (b) {
                    b.preventDefault(), mkd.body.removeClass("mkd-search-open"), a(".title.has_parallax_background").animate({"background-position-y": e + "px"}, 150)
                })
            })
        }()) : mkd.body.hasClass("mkd-search-covers-header") && function () {
            d.click(function (b) {
                b.preventDefault();
                var c, d, e, f = a(".mkd-search-cover .mkd-form-holder-outer");
                a(this).closest(".mkd-grid").length ? (d = a(this).closest(".mkd-grid").children().first(), e = d.parent()) : (d = a(this).closest(".mkd-menu-area").children().first(), e = d), a(this).closest(".mkd-sticky-header").length > 0 && (d = a(this).closest(".mkd-sticky-header").children().first()), a(this).closest(".mkd-mobile-header").length > 0 && (d = a(this).closest(".mkd-mobile-header").children().children().first()), e.parent().hasClass("mkd-logo-area") ? c = mkdGlobalVars.vars.mkdLogoAreaHeight : e.parent().hasClass("mkd-top-bar") ? c = mkdGlobalVars.vars.mkdTopBarHeight : e.parent().hasClass("mkd-menu-area") ? c = mkdGlobalVars.vars.mkdMenuAreaHeight : e.hasClass("mkd-sticky-header") ? c = mkdGlobalVars.vars.mkdMenuAreaHeight : e.parent().hasClass("mkd-mobile-header") && (c = a(".mkd-mobile-header-inner").height()), f.height(c), d.stop(!0).fadeIn(600), a('.mkd-search-cover input[type="text"]').focus(), a(".mkd-search-close, .content, footer").click(function (a) {
                    a.preventDefault(), d.stop(!0).fadeOut(450)
                }), d.blur(function () {
                    d.stop(!0).fadeOut(450)
                })
            })
        }(), void 0 !== d.data("hover-color"))) {
            var e = function (a) {
                a.data.searchOpener.css("color", a.data.color)
            }, f = d.css("color"), g = d.data("hover-color");
            d.on("mouseenter", {searchOpener: d, color: g}, e), d.on("mouseleave", {searchOpener: d, color: f}, e)
        }
    }

    var q = {};
    mkd.modules.header = q, q.isStickyVisible = !1, q.stickyAppearAmount = 0, q.behaviour = "", q.mkdSideArea = g, q.mkdSideAreaScroll = h, q.mkdFullscreenMenu = i, q.mkdInitMobileNavigation = l, q.mkdMobileHeaderBehavior = m, q.mkdSetDropDownMenuPosition = n, q.mkdDropDownMenu = o, q.mkdSearch = p, q.mkdOnDocumentReady = b, q.mkdOnWindowLoad = c, q.mkdOnWindowResize = d, q.mkdOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e);
    var r = function () {
        var b = a(".mkd-vertical-menu-area"), c = function () {
            return b.hasClass("mkd-with-scroll")
        }, d = function () {
            var c = b.find(".mkd-vertical-menu");
            void 0 !== c.data("navigation-type") && c.data("navigation-type");
            !function () {
                var b = c.find("ul li.menu-item-has-children"), d = b.find(" > .second, > ul");
                b.each(function () {
                    var c = a(this).find(" > .second, > ul"), e = this;
                    Modernizr.touch ? a(this).find("> a").on("click tap", function (f) {
                        f.preventDefault(), f.stopPropagation(), c.hasClass("mkd-float-open") ? (c.removeClass("mkd-float-open"), a(e).removeClass("open")) : (a(this).parents("li").hasClass("open") || (b.removeClass("open"), d.removeClass("mkd-float-open")), c.addClass("mkd-float-open"), a(e).addClass("open"))
                    }) : a(this).hoverIntent({
                        over: function () {
                            c.addClass("mkd-float-open"), a(e).addClass("open")
                        }, out: function () {
                            c.removeClass("mkd-float-open"), a(e).removeClass("open")
                        }, timeout: 100
                    })
                })
            }()
        }, e = function () {
            if (c()) {
                var d = function (a) {
                        var b = 0;
                        a || (a = window.event), a.wheelDelta ? b = a.wheelDelta / 120 : a.detail && (b = -a.detail / 3), b && e(b), a.preventDefault && a.preventDefault(), a.returnValue = !1
                    }, e = function (b) {
                        b < 0 ? Math.abs(i) <= j && (i += 20 * b, a(g).css("margin-top", i)) : i <= -20 && (i += 20 * b, a(g).css("margin-top", i))
                    }, f = mkd.windowHeight, g = b.find(".mkd-vertical-menu-area-inner"),
                    h = g.outerHeight() + parseInt(g.css("padding-top")) + parseInt(g.css("padding-bottom")), i = 0,
                    j = h - f;
                a(b).on("mouseenter", function () {
                    mkd.modules.common.mkdDisableScroll(), window.addEventListener && (window.addEventListener("mousewheel", d, !1), window.addEventListener("DOMMouseScroll", d, !1)), window.onmousewheel = document.onmousewheel = d
                }), a(b).on("mouseleave", function () {
                    mkd.modules.common.mkdEnableScroll(), window.removeEventListener("mousewheel", d, !1), window.removeEventListener("DOMMouseScroll", d, !1)
                })
            }
        };
        return {
            init: function () {
                b.length && (d(), e())
            }
        }
    }
}(jQuery), function (a) {
    "use strict";

    function b() {
        f()
    }

    function c() {
    }

    function d() {
    }

    function e() {
    }

    function f() {
        if (a(".mkd-title.mkd-has-parallax-background").length > 0 && 0 === a(".touch").length) {
            var b = a(".mkd-title.mkd-has-parallax-background"),
                c = a(".mkd-title.mkd-has-parallax-background.mkd-zoom-out"),
                d = void 0 !== b.data("background-width") ? parseInt(b.data("background-width").match(/\d+/)) : 0,
                e = b.data("height"), f = e / 1e4 * 7, g = -mkd.scroll * f;
            b.css({"background-position": "center " + (g + mkdGlobalVars.vars.mkdAddForAdminBar) + "px"}), c.css({"background-size": d - mkd.scroll + "px auto"}), a(window).scroll(function () {
                g = -mkd.scroll * f, b.css({"background-position": "center " + (g + mkdGlobalVars.vars.mkdAddForAdminBar) + "px"}), c.css({"background-size": d - mkd.scroll + "px auto"})
            })
        }
    }

    var g = {};
    mkd.modules.title = g, g.mkdParallaxTitle = f, g.mkdOnDocumentReady = b, g.mkdOnWindowLoad = c, g.mkdOnWindowResize = d, g.mkdOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e)
}(jQuery), function (a) {
    "use strict";

    function b() {
        f(), g(), h(), l(), qa(), xa().init(), j(), k(), p(), r(), s(), t(), za().init(), Aa().init(), Ba().init(), u(), ia(), ja(), v(), A(), o(), W(), X(), V(), Y(), Z(), aa(), z(), w(), D(), G(), B(), I(), K(), Ca().init(), ya().init(), R().init(), S().init(), T().init(), U().init(), ca().init(), ba().init(), da(), m(), n(), fa(), ga(), ha(), $(), _(), Da().init(), Ea(), oa(), J(), ra(), sa(), ta(), ua(), va()
    }

    function c() {
        na(), Q(), Da().load(), O(), pa(), mkd.modules.common.mkdInitParallax()
    }

    function d() {
        v(), G(), mkd.modules.common.mkdInitParallax()
    }

    function e() {
    }

    function f() {
        var b = a(".mkd-item-showcase-holder");
        b.length && b.each(function () {
            function b(b) {
                c.find(b).each(function (b) {
                    var c = a(this);
                    setTimeout(function () {
                        c.addClass("mkd-appeared")
                    }, 150 * b)
                })
            }

            var c = a(this), d = c.find(".mkd-is-left"), e = c.find(".mkd-is-right"), f = c.find(".mkd-is-image");
            d.wrapAll("<div class='mkd-is-item-holder mkd-is-left-holder' />"), e.wrapAll("<div class='mkd-is-item-holder mkd-is-right-holder' />"), c.animate({opacity: 1}, 200);
            var g = c.find(".mkd-is-left-holder"), h = c.find(".mkd-is-right-holder");
            g.css({
                "background-color": c.data("left-holder-background"),
                padding: c.data("holder-padding")
            }), h.css({
                "background-color": c.data("right-holder-background"),
                padding: c.data("holder-padding")
            }), setTimeout(function () {
                c.appear(function () {
                    f.addClass("mkd-appeared"), mkd.windowWidth > 1200 ? (b(".mkd-is-left-holder .mkd-is-item"), b(".mkd-is-right-holder .mkd-is-item")) : b(".mkd-is-item")
                }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
            }, 100)
        })
    }

    function g() {
        var b = a(".mkd-counter");
        b.length && b.each(function () {
            var b = a(this);
            b.appear(function () {
                if (b.parent().css({opacity: 1}), b.hasClass("zero")) {
                    var a = parseFloat(b.text());
                    b.countTo({from: 0, to: a, speed: 1500, refreshInterval: 100})
                } else b.absoluteCounter({speed: 2e3, fadeInDelay: 1e3})
            }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
        })
    }

    function h() {
        var b = a(".mkd-progress-bar");
        b.length && b.each(function () {
            var b = a(this);
            b.appear(function () {
                if (i(b), 0 !== b.find(".mkd-floating.mkd-floating-inside")) {
                    var a = b.find(".mkd-progress-content").height();
                    a += parseFloat(b.find(".mkd-progress-title-holder").css("padding-bottom")), a += parseFloat(b.find(".mkd-progress-title-holder").css("margin-bottom")), b.find(".mkd-floating-inside").css("margin-bottom", -a + "px")
                }
                var c = b.find(".mkd-progress-content").data("percentage"), d = b.find(".mkd-progress-content"),
                    e = b.find(".mkd-progress-number");
                d.css("width", "0%"), d.animate({width: c + "%"}, 1500), e.css("left", "0%"), e.animate({left: c + "%"}, 1500)
            })
        })
    }

    function i(b) {
        var c = parseFloat(b.find(".mkd-progress-content").data("percentage")),
            d = b.find(".mkd-progress-number .mkd-percent");
        d.length && d.each(function () {
            var b = a(this);
            b.parents(".mkd-progress-number-wrapper").css("opacity", "1"), b.countTo({
                from: 0,
                to: c,
                speed: 1500,
                refreshInterval: 50
            })
        })
    }

    function j() {
        var b = a(".mkd-message");
        b.length && b.each(function () {
            a(this).find(".mkd-close").on("click", function (b) {
                b.preventDefault(), a(this).parent().parent().fadeOut(500)
            })
        })
    }

    function k() {
        var b = a(".mkd-message.mkd-with-icon");
        b.length && b.each(function () {
            var b = a(this), c = b.find(".mkd-message-text-holder").height(),
                d = b.find(".mkd-message-icon-holder").height();
            c > d ? b.find(".mkd-message-icon-holder").height(c) : b.find(".mkd-message-text-holder").height(d)
        })
    }

    function l() {
        var b, c, d, e, f, g, h, i, j, k, l, m = a(".mkd-countdown");
        m.length && m.each(function () {
            function m() {
                s.find(".countdown-amount").css({
                    "font-size": n + "px",
                    "line-height": n + "px",
                    color: o
                }), s.find(".countdown-period").css({"font-size": p + "px", color: q})
            }

            var n, o, p, q, r = a(this).attr("id"), s = a("#" + r);
            b = s.data("year"), c = s.data("month"), d = s.data("day"), e = s.data("hour"), f = s.data("minute"), g = s.data("timezone"), h = s.data("month-label"), i = s.data("day-label"), j = s.data("hour-label"), k = s.data("minute-label"), l = s.data("second-label"), n = s.data("digit-size"), o = s.data("digit-color"), p = s.data("label-size"), q = s.data("label-color");
            var t = s.hasClass("type-two");
            s.countdown({
                until: new Date(b, c - 1, d, e, f, 44),
                labels: ["Years", h, "Weeks", i, j, k, l],
                format: "yodHMS",
                timezone: g,
                padZeroes: !t,
                onTick: m
            })
        })
    }

    function m() {
        var b = a(".mkd-testimonials.testimonials-slider");
        b.length && b.each(function () {
            var b = a(this);
            b.appear(function () {
                b.css("visibility", "visible")
            }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount});
            var c = function () {
                var c = b.find(".slick-slide");
                c.removeClass("mkd-fade-in mkd-fade-out"), c.each(function () {
                    var c = a(this), d = b.find(".slick-list").offset().left, e = b.find(".slick-list").outerWidth(),
                        f = c.offset().left, g = c.outerWidth();
                    f >= d && f + g <= d + e && c.addClass("mkd-fade-out"), f < d && f + g > 0 && c.addClass("mkd-fade-in"), f > d && f < mkd.windowWidth && c.addClass("mkd-fade-in")
                })
            };
            b.on("beforeChange", function () {
                c()
            }), b.on("init", function () {
                b.css({opacity: "1"}), b.find(".slick-active").addClass("mkd-fade-in")
            }).slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                arrows: !0,
                dots: !1,
                speed: 800
            })
        });
        var c = a(".mkd-testimonials.testimonials-slider-boxed");
        c.length && c.each(function () {
            var b = a(this);
            b.addClass("slick-dots");
            var c = b.data("items-to-show");
            void 0 !== c && !1 !== c || (c = 3), b.waitForImages(function () {
                b.css("visibility", "visible")
            }), b.on("init", function () {
                b.css({opacity: "1"})
            }).slick({
                dots: !0,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 3e3,
                slidesToScroll: c,
                slidesToShow: c,
                speed: 800,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                responsive: [{
                    breakpoint: 1281,
                    settings: {slidesToShow: c > 3 ? 3 : c, slidesToScroll: c > 3 ? 3 : c}
                }, {breakpoint: 1025, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
                    breakpoint: 769,
                    settings: {slidesToShow: 2, slidesToScroll: 2}
                }, {breakpoint: 481, settings: {slidesToShow: 1, slidesToScroll: 1}}]
            })
        })
    }

    function n() {
        var b, c, d = a(".mkd-carousel-holder");
        d.length && d.each(function () {
            b = a(this).children(".mkd-carousel"), c = b.data("items");
            var d = b.data("navigation");
            d = void 0 !== d && "yes" === d, b.on("init", function () {
                b.addClass("appeared")
            }).slick({
                slidesToScroll: 1,
                slidesToShow: c,
                autoplay: !0,
                autoplaySpeed: 2e3,
                arrows: d,
                speed: 600,
                responsive: [{breakpoint: 1025, settings: {slidesToShow: 4}}, {
                    breakpoint: 769,
                    settings: {slidesToShow: 3}
                }, {breakpoint: 481, settings: {slidesToShow: 1}}]
            })
        })
    }

    function o() {
        var b = a(".mkd-twitter-slider-inner");
        b.length && b.each(function () {
            var b = a(this);
            b.on("init", function () {
                b.css({opacity: "1"})
            }).slick({
                slidesToShow: 1,
                arrows: !1,
                dots: !1,
                speed: 750,
                cssEase: "cubic-bezier(.19,1,.22,1)",
                swipeToSlide: !0,
                autoplay: !0,
                autoplaySpeed: 3e3
            })
        })
    }

    function p() {
        var b = a(".mkd-pie-chart-holder, .mkd-pie-chart-with-icon-holder");
        b.length && b.each(function () {
            var b, c, d = a(this), e = d.children(".mkd-percentage, .mkd-percentage-with-icon"), f = 194;
            void 0 !== e.data("size") && "" !== e.data("size") && (f = e.data("size")), void 0 !== d.data("bar-color") && "" !== d.data("bar-color") && (b = d.data("bar-color")), void 0 !== d.data("track-color") && "" !== d.data("track-color") && (c = d.data("track-color")), e.appear(function () {
                q(d), e.css("opacity", "1"), e.easyPieChart({
                    barColor: b,
                    trackColor: c,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: 8,
                    animate: 1500,
                    size: f
                })
            }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
        })
    }

    function q(a) {
        a.css("opacity", "1");
        var b = a.find(".mkd-to-counter"), c = parseFloat(b.text());
        b.countTo({from: 0, to: c, speed: 1500, refreshInterval: 50})
    }

    function r() {
        a(".mkd-pie-chart-doughnut-holder, .mkd-pie-chart-pie-holder").each(function () {
            for (var b = a(this), c = b.find("canvas"), d = c.attr("id"), e = document.getElementById(d).getContext("2d"), f = [], g = a(e.canvas), h = 1; h <= 10; h++) {
                var i, j = g.data("value-" + h), k = g.data("color-" + h);
                void 0 !== j && void 0 !== k && (i = {value: j, color: k}, f.push(i))
            }
            c.hasClass("mkd-pie") ? new Chart(e).Pie(f, {segmentStrokeColor: "transparent"}) : new Chart(e).Doughnut(f, {segmentStrokeColor: "transparent"})
        })
    }

    function s() {
        var b = a(".mkd-tabs");
        b.length && b.each(function () {
            var b = a(this);
            b.children(".mkd-tab-container").each(function (b) {
                b += 1;
                var c = a(this), d = c.attr("id"), e = c.parent().find(".mkd-tabs-nav li:nth-child(" + b + ") a"),
                    f = e.attr("href");
                d = "#" + d, d.indexOf(f) > -1 && e.attr("href", d)
            }), b.hasClass("mkd-horizontal") ? b.tabs() : b.hasClass("mkd-vertical") && (b.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"), b.find(".mkd-tabs-nav > ul >li").removeClass("ui-corner-top").addClass("ui-corner-left"))
        })
    }

    function t() {
        var b = a(".mkd-tab-container");
        b.length && b.each(function () {
            var b = a(this), c = b.attr("id"), d = "";
            void 0 === b.data("icon-html") && "false" === b.data("icon-html") || (d = b.data("icon-html"));
            var e = b.parents(".mkd-tabs").find('.mkd-tabs-nav > li > a[href="#' + c + '"]');
            void 0 !== e && e.children(".mkd-icon-frame").append(d)
        })
    }

    function u() {
        var b = a(".mkd-blog-list-holder.mkd-masonry");
        b.length && b.each(function () {
            var b = a(this);
            b.waitForImages(function () {
                b.css("visibility", "visible"), b.isotope({
                    itemSelector: "article",
                    masonry: {columnWidth: ".mkd-blog-masonry-grid-sizer"}
                })
            })
        })
    }

    function v() {
        var b = a(".mkd-custom-font-holder");
        b.length && b.each(function () {
            var b, c, d = a(this), e = 1, f = 1;
            mkd.windowWidth < 1200 && (e = .8), mkd.windowWidth < 1e3 && (e = .7), mkd.windowWidth < 768 && (e = .6, f = .7), mkd.windowWidth < 600 && (e = .5, f = .6), mkd.windowWidth < 480 && (e = .4, f = .5), void 0 !== d.data("font-size") && !1 !== d.data("font-size") && (b = parseInt(d.data("font-size")), b > 70 ? b = Math.round(b * e) : b > 35 && (b = Math.round(b * f)), d.css("font-size", b + "px")), void 0 !== d.data("line-height") && !1 !== d.data("line-height") && (c = parseInt(d.data("line-height")), c > 70 && mkd.windowWidth < 1200 ? c = "1.2em" : c > 35 && mkd.windowWidth < 768 ? c = "1.2em" : c += "px", d.css("line-height", c))
        })
    }

    function w() {
        a(".mkd-google-map").length && a(".mkd-google-map").each(function () {
            var b, c = a(this);
            void 0 !== c.data("custom-map-style") && (b = c.data("custom-map-style"));
            var d;
            void 0 !== c.data("color-overlay") && !1 !== c.data("color-overlay") && (d = c.data("color-overlay"));
            var e;
            void 0 !== c.data("saturation") && !1 !== c.data("saturation") && (e = c.data("saturation"));
            var f;
            void 0 !== c.data("lightness") && !1 !== c.data("lightness") && (f = c.data("lightness"));
            var g;
            void 0 !== c.data("zoom") && !1 !== c.data("zoom") && (g = c.data("zoom"));
            var h;
            void 0 !== c.data("pin") && !1 !== c.data("pin") && (h = c.data("pin"));
            var i;
            void 0 !== c.data("height") && !1 !== c.data("height") && (i = c.data("height"));
            var j;
            void 0 !== c.data("unique-id") && !1 !== c.data("unique-id") && (j = c.data("unique-id"));
            var k;
            void 0 !== c.data("scroll-wheel") && (k = c.data("scroll-wheel"));
            var l;
            void 0 !== c.data("addresses") && !1 !== c.data("addresses") && (l = c.data("addresses")), x(b, d, e, f, k, g, "mkd-map-" + j, i, h, "map_" + j, "geocoder_" + j, l)
        })
    }

    function x(a, b, c, d, e, f, g, h, i, j, k, l) {
        if ("object" == typeof google) {
            var m, n = [{stylers: [{hue: b}, {saturation: c}, {lightness: d}, {gamma: 1}]}];
            m = a ? "mkd-style" : google.maps.MapTypeId.ROADMAP;
            var o = new google.maps.StyledMapType(n, {name: "Mikado Google Map"});
            k = new google.maps.Geocoder;
            var p = new google.maps.LatLng(-34.397, 150.644);
            isNaN(h) || (h += "px");
            var q = {
                zoom: f,
                scrollwheel: e,
                center: p,
                zoomControl: !0,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
                scaleControl: !1,
                scaleControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                streetViewControl: !1,
                streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                panControl: !1,
                panControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER},
                mapTypeControl: !1,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkd-style"],
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                mapTypeId: m
            };
            j = new google.maps.Map(document.getElementById(g), q), j.mapTypes.set("mkd-style", o);
            var r;
            for (r = 0; r < l.length; ++r) y(l[r], i, j, k);
            document.getElementById(g).style.height = h
        }
    }

    function y(a, b, c, d) {
        if ("" !== a) {
            var e = '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' + a + "</p></div></div>",
                f = new google.maps.InfoWindow({content: e});
            d.geocode({address: a}, function (d, e) {
                if (e === google.maps.GeocoderStatus.OK) {
                    c.setCenter(d[0].geometry.location);
                    var g = new google.maps.Marker({
                        map: c,
                        position: d[0].geometry.location,
                        icon: b,
                        title: a.store_title
                    });
                    google.maps.event.addListener(g, "click", function () {
                        f.open(c, g)
                    }), google.maps.event.addDomListener(window, "resize", function () {
                        c.setCenter(d[0].geometry.location)
                    })
                }
            })
        }
    }

    function z() {
        var b = a(".mkd-accordion-holder");
        b.length && b.each(function () {
            var b = a(this);
            if (b.hasClass("mkd-accordion") && b.accordion({
                animate: "swing",
                collapsible: !1,
                active: 0,
                icons: "",
                heightStyle: "content"
            }), b.hasClass("mkd-toggle")) {
                var c = a(this), d = c.find(".mkd-title-holder"), e = d.next();
                c.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), d.addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom"), e.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), d.each(function () {
                    var b = a(this);
                    b.on("mouseenter mouseleave", function () {
                        b.toggleClass("ui-state-hover")
                    }), b.on("click", function () {
                        b.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), b.next().toggleClass("ui-accordion-content-active").slideToggle(400)
                    })
                })
            }
        })
    }

    function A() {
        var b = a(".mkd-image-gallery");
        b.length && b.each(function () {
            var b = a(this).children(".mkd-image-gallery-slider"), c = b.data("autoplay"),
                d = "yes" == b.data("arrows"), e = "yes" == b.data("dots");
            e && b.addClass("slick-dots"), b.on("init", function () {
                b.css({opacity: "1"})
            }).slick({
                singleItem: !0,
                autoplay: "disable" !== c,
                autoplaySpeed: 1e3 * c,
                arrows: d,
                dots: e,
                slideSpeed: 600
            })
        })
    }

    function B() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-standard, .mkd-portfolio-list-holder-outer.mkd-ptf-gallery, .mkd-portfolio-list-holder-outer.mkd-ptf-simple");
        b.length && b.each(function () {
            C(a(this))
        })
    }

    function C(a) {
        var b = "";
        a.hasClass("mkd-ptf-has-filter") && (b = a.find(".mkd-portfolio-filter-holder-inner ul li").data("class"), b = "." + b);
        var c = a.find(".mkd-portfolio-list-holder");
        c.mixItUp({
            callbacks: {
                onMixLoad: function () {
                    c.find("article").css("visibility", "visible"), mkd.modules.common.mkdInitParallax()
                }, onMixStart: function () {
                    c.find("article").css("visibility", "visible"), a.find(".mkd-ptf-list-load-more").css("visibility", "hidden")
                }, onMixBusy: function () {
                    c.find("article").css("visibility", "visible")
                }, onMixEnd: function () {
                    oa(), O(), a.find(".mkd-ptf-list-load-more").css("visibility", "visible")
                }
            }, selectors: {filter: b}, animation: {duration: 600, effects: "fade"}
        })
    }

    function D() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-masonry");
        b.length && b.each(function () {
            var b = a(this).children(".mkd-portfolio-list-holder");
            F(b), E(b), a(window).resize(function () {
                F(b), E(b)
            })
        })
    }

    function E(a) {
        a.animate({opacity: 1}), a.waitForImages(function () {
            a.isotope({
                itemSelector: ".mkd-portfolio-item",
                resizable: !1,
                layoutMode: "packery",
                packery: {columnWidth: ".mkd-portfolio-list-masonry-grid-sizer"}
            }), a.parent().find(".mkd-ptf-list-load-more").css("visibility", "visible"), a.addClass("mkd-appeared")
        })
    }

    function F(a) {
        var b = .75 * a.find(".mkd-portfolio-list-masonry-grid-sizer").width(), c = a.find(".mkd-default-masonry-item"),
            d = a.find(".mkd-large-width-masonry-item"), e = a.find(".mkd-large-height-masonry-item"),
            f = a.find(".mkd-large-width-height-masonry-item");
        c.css("height", b), e.css("height", Math.round(2 * b)), mkd.windowWidth > 768 ? (f.css("height", Math.round(2 * b)), e.css("height", Math.round(2 * b)), d.css("height", b)) : (f.css("height", b), e.css("height", b))
    }

    function G() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-pinterest");
        b.length && b.each(function () {
            var b = a(this).children(".mkd-portfolio-list-holder");
            H(b), a(window).resize(function () {
                H(b)
            })
        })
    }

    function H(a) {
        a.animate({opacity: 1}), a.waitForImages(function () {
            a.isotope({
                layoutMode: "packery",
                itemSelector: ".mkd-portfolio-item",
                packery: {columnWidth: ".mkd-portfolio-list-masonry-grid-sizer"}
            }), a.parent().find(".mkd-ptf-list-load-more").css("visibility", "visible")
        })
    }

    function I() {
        var b = a(".mkd-portfolio-filter-holder.mkd-masonry-filter");
        b.length && b.each(function () {
            var b = a(this), c = null;
            b.find("ul li").data("class");
            b.find(".filter:first").addClass("current"), b.find(".filter").on("click", function () {
                var d = a(this);
                clearTimeout(c), a(".isotope, .isotope .isotope-item").css("transition-duration", "0.8s"), c = setTimeout(function () {
                    a(".isotope, .isotope .isotope-item").css("transition-duration", "0s")
                }, 700);
                var e = a(this).attr("data-filter");
                return b.siblings(".mkd-portfolio-list-holder-outer").find(".mkd-portfolio-list-holder").isotope({filter: e}), b.find(".filter").removeClass("current"), d.addClass("current"), !1
            })
        })
    }

    function J() {
        var b = a(".mkd-portfolio-filter-holder");
        b.length && b.each(function () {
            var b = a(this), c = b.find(".parent-filter");
            c.on("click", function () {
                var b = a(this);
                c.each(function () {
                    a(this).removeClass("active")
                }), b.addClass("active");
                var d = b.data("group-id");
                a(this).siblings("ul").each(function () {
                    if (a(this).data("parent-id") == d) {
                        var b = a(this);
                        setTimeout(function () {
                            b.fadeIn()
                        }, 500)
                    } else a(this).fadeOut()
                })
            })
        })
    }

    function K() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-load-more");
        b.length && b.each(function () {
            var b, c, d = a(this), e = d.find(".mkd-portfolio-list-holder"), f = d.find(".mkd-ptf-list-load-more a"),
                g = f.text(), h = mkdGlobalVars.vars.mkdPtfLoadMoreMessage;
            void 0 !== d.data("max-num-pages") && !1 !== d.data("max-num-pages") && (c = d.data("max-num-pages")), f.on("click", function (i) {
                var j = M(d);
                if (b = j.nextPage, f.text(h), i.preventDefault(), i.stopPropagation(), b <= c) {
                    var k = N(j);
                    a.ajax({
                        type: "POST", data: k, url: mkdCoreAjaxUrl, success: function (c) {
                            b++, d.data("next-page", b);
                            var h = a.parseJSON(c), i = L(h.html);
                            d.waitForImages(function () {
                                setTimeout(function () {
                                    d.hasClass("mkd-ptf-masonry") || d.hasClass("mkd-ptf-pinterest") ? (e.isotope().append(i).isotope("appended", i).isotope("reloadItems"), d.hasClass("mkd-ptf-masonry") && (F(d), oa())) : e.mixItUp("append", i), f.text(g)
                                }, 400)
                            })
                        }
                    })
                }
                b === c && f.hide()
            })
        })
    }

    function L(b) {
        var c = a.trim(b), d = a(c), e = a();
        return d.each(function (a, b) {
            1 === b.nodeType && (e = e.add(this))
        }), e
    }

    function M(a) {
        var b = {};
        return b.type = "", b.columns = "", b.gridSize = "", b.orderBy = "", b.order = "", b.number = "", b.imageSize = "", b.customImageDimensions = "", b.filter = "", b.filterOrderBy = "", b.category = "", b.selectedProjects = "", b.showLoadMore = "", b.titleTag = "", b.showCategories = "", b.nextPage = "", b.maxNumPages = "", b.showExcerpt = "", b.shaderBackgroundStyle = "", b.shaderBackgroundColor = "", void 0 !== a.data("type") && !1 !== a.data("type") && (b.type = a.data("type")), void 0 !== a.data("grid-size") && !1 !== a.data("grid-size") && (b.gridSize = a.data("grid-size")), void 0 !== a.data("columns") && !1 !== a.data("columns") && (b.columns = a.data("columns")), void 0 !== a.data("order-by") && !1 !== a.data("order-by") && (b.orderBy = a.data("order-by")), void 0 !== a.data("order") && !1 !== a.data("order") && (b.order = a.data("order")), void 0 !== a.data("number") && !1 !== a.data("number") && (b.number = a.data("number")), void 0 !== a.data("image-size") && !1 !== a.data("image-size") && (b.imageSize = a.data("image-size")), void 0 !== a.data("custom-image-dimensions") && !1 !== a.data("custom-image-dimensions") && (b.customImageDimensions = a.data("custom-image-dimensions")), void 0 !== a.data("filter") && !1 !== a.data("filter") && (b.filter = a.data("filter")), void 0 !== a.data("filter-order-by") && !1 !== a.data("filter-order-by") && (b.filterOrderBy = a.data("filter-order-by")), void 0 !== a.data("category") && !1 !== a.data("category") && (b.category = a.data("category")), void 0 !== a.data("selected-projects") && !1 !== a.data("selected-projects") && (b.selectedProjects = a.data("selected-projects")), void 0 !== a.data("show-load-more") && !1 !== a.data("show-load-more") && (b.showLoadMore = a.data("show-load-more")), void 0 !== a.data("title-tag") && !1 !== a.data("title-tag") && (b.titleTag = a.data("title-tag")), void 0 !== a.data("show-categories") && !1 !== a.data("show-categories") && (b.showCategories = a.data("show-categories")), void 0 !== a.data("next-page") && !1 !== a.data("next-page") && (b.nextPage = a.data("next-page")), void 0 !== a.data("max-num-pages") && !1 !== a.data("max-num-pages") && (b.maxNumPages = a.data("max-num-pages")), void 0 !== a.data("show-excerpt") && !1 !== a.data("show-excerpt") && (b.showExcerpt = a.data("show-excerpt")), void 0 !== a.data("shader-background-style") && !1 !== a.data("shader-background-style") && (b.shaderBackgroundStyle = a.data("shader-background-style")), void 0 !== a.data("shader-background-color") && !1 !== a.data("shader-background-color") && (b.shaderBackgroundColor = a.data("shader-background-color")), b
    }

    function N(a) {
        return {
            action: "mkd_core_portfolio_ajax_load_more",
            type: a.type,
            columns: a.columns,
            gridSize: a.gridSize,
            orderBy: a.orderBy,
            order: a.order,
            number: a.number,
            imageSize: a.imageSize,
            customImageDimensions: a.customImageDimensions,
            filter: a.filter,
            filterOrderBy: a.filterOrderBy,
            category: a.category,
            selectedProjectes: a.selectedProjectes,
            showLoadMore: a.showLoadMore,
            titleTag: a.titleTag,
            showCategories: a.showCategories,
            nextPage: a.nextPage,
            showExcerpt: a.showExcerpt,
            shaderBackgroundStyle: a.shaderBackgroundStyle,
            shaderBackgroundColor: a.shaderBackgroundColor
        }
    }

    function O() {
        var b = a(".mkd-portfolio-list-holder-outer.mkd-appear-effect");
        b.length && !mkd.htmlEl.hasClass("touch") && b.each(function () {
            var b = a(this), c = b.find("article");
            if (b.hasClass("mkd-one-by-one")) {
                var d = 0;
                c.not("mkd-appeared").each(function () {
                    var b = a(this);
                    setTimeout(function () {
                        b.appear(function () {
                            d++, 5 == d && (d = 0), setTimeout(function () {
                                b.addClass("mkd-appeared")
                            }, 250 * d)
                        }, {accX: 0, accY: 0})
                    }, 30)
                })
            }
            if (b.hasClass("mkd-random")) {
                var e = c.length, f = function (a) {
                    for (var b = [], c = 0; c < e; c++) {
                        var d = Math.floor(Math.random() * e);
                        jQuery.inArray(d, b) > 0 ? --c : b.push(d)
                    }
                    return b
                }();
                c.not("mkd-appeared").each(function (b) {
                    var c = a(this);
                    c.appear(function () {
                        setTimeout(function () {
                            c.addClass("mkd-appeared")
                        }, 80 * f[b])
                    })
                })
            }
        })
    }

    function P(b, c) {
        if (a(".mkd-slider .carousel").not(".mkd-disable-slider-header-style-changing").length > 0) {
            var d = "";
            b.hasClass("light") && (d = "mkd-light-header"), b.hasClass("dark") && (d = "mkd-dark-header"), "" !== d ? c && mkd.body.removeClass("mkd-dark-header mkd-light-header").addClass(d) : c && mkd.body.removeClass("mkd-dark-header mkd-light-header").addClass(mkd.defaultHeaderStyle)
        }
    }

    function Q() {
        var b = a(".mkd-info-box-holder"), c = function (a) {
            return !!a.length && a.height()
        }, d = function () {
            if (b.length) {
                var d, e = 0;
                b.each(function () {
                    var b = a(this).find(".mkd-ib-bottom-holder"), f = a(this).find(".mkd-ib-top-holder"),
                        g = c(b) + f.height();
                    (e = Math.max(e, g)) <= g && (d = a(this), e = g)
                }), b.height(e)
            }
        }, e = function (a) {
            var b = new TimelineLite({paused: !0}), d = a.find(".mkd-ib-top-holder"),
                e = a.find(".mkd-ib-bottom-holder"), f = c(e);
            b.to(d, .6, {y: -f / 2, ease: Back.easeInOut.config(2)}), b.to(e, .4, {
                y: -f / 2,
                opacity: 1,
                ease: Back.easeOut
            }, "-=0.3"), a.on("mouseenter", function () {
                b.restart()
            }), a.on("mouseleave", function () {
                b.reverse()
            })
        };
        b.length && (d(), a(mkd.window).resize(function () {
            d()
        }), b.each(function () {
            var b = a(this);
            e(b), a(mkd.window).resize(function () {
                e(b)
            })
        }))
    }

    function R() {
        var b = a(".mkd-process-holder"), c = function (b) {
            if (!mkd.body.hasClass("mkd-no-animations-on-touch")) {
                b.find(".mkd-process-item-holder"), b.find(".mkd-process-bg-holder");
                b.appear(function () {
                    a(this).addClass("appeared"), b.find(".mkd-process-item-holder").each(function (b) {
                        var c = a(this);
                        setTimeout(function () {
                            c.addClass("item-appeared")
                        }, 250 * b)
                    })
                }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
            }
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this))
                })
            }
        }
    }

    function S() {
        var b = a(".mkd-comparision-pricing-tables-holder"), c = function (b) {
            var c = b.find(".mkd-cpt-features-item"), d = b.find(".mkd-comparision-table-holder");
            d.length && d.each(function () {
                var b = a(this), d = b.find(".mkd-cpt-table-content li");
                d.length && d.each(function (b) {
                    var d = c[b], e = this, f = e.innerHTML;
                    void 0 !== d && (e.innerHTML = '<span class="mkd-cpt-table-item-feature">' + a(d).text() + ": </span>" + f)
                })
            })
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this))
                })
            }
        }
    }

    function T() {
        var b = a(".mkd-vertical-progress-bar-holder"), c = function (a) {
            a.appear(function () {
                var b = a.find(".mkd-vpb-bar"), c = a.find(".mkd-vpb-active-bar"), d = b.data("percent");
                c.animate({height: d + "%"}, 1500)
            }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
        }, d = function (a) {
            a.appear(function () {
                var b = a.find(".mkd-vpb-bar"), c = b.data("percent");
                a.find(".mkd-vpb-percent-number").countTo({from: 0, to: c, speed: 1500, refreshInterval: 50})
            })
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this)), d(a(this))
                })
            }
        }
    }

    function U() {
        var b = a(".mkd-icon-progress-bar"), c = function (b) {
            var c = [];
            b.appear(function () {
                var e = parseInt(b.data("number-of-active-icons")), f = b.find(".mkd-ipb-icon"),
                    g = b.data("icon-active-color");
                void 0 !== e && f.each(function (b) {
                    if (b < e) {
                        var h = 150 * (b + 1), i = a(this);
                        c[b] = setTimeout(function () {
                            d(i, g), a(f[b]).addClass("active")
                        }, h)
                    }
                })
            }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
        }, d = function (a, b) {
            a.addClass("mkd-ipb-active"), void 0 !== b && "" !== b && a.find(".mkd-ipb-icon-elem").css("color", b)
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this))
                })
            }
        }
    }

    function V(b) {
        if (void 0 !== b && b.hasClass("masonry")) {
            var c = b.find("article"), d = b.find(".slick-track").height();
            c.length && (c.each(function () {
                var b = a(this), c = d - a(this).find(".mkd-post-info").outerHeight();
                b.hasClass("format-link") || b.hasClass("format-quote") ? b.find(".mkd-post-text-inner").css("height", c) : b.find(".mkd-post-text-inner").css("height", c - a(this).find(".mkd-post-image").outerHeight())
            }), a(window).resize(function () {
                this.resizeTO && clearTimeout(this.resizeTO), this.resizeTO = setTimeout(function () {
                    a(this).trigger("resizeEnd")
                }, 500)
            }), a(window).bind("resizeEnd", function () {
                c.each(function () {
                    a(this).find(".mkd-post-text-inner").css("height", "auto")
                }), d = b.find(".slick-track").height(), c.each(function () {
                    var b = a(this), c = d - a(this).find(".mkd-post-info").outerHeight();
                    b.hasClass("format-link") || b.hasClass("format-quote") ? b.find(".mkd-post-text-inner").css("height", c) : b.find(".mkd-post-text-inner").css("height", c - a(this).find(".mkd-post-image").outerHeight())
                })
            }))
        }
    }

    function W() {
        var b = a(".mkd-blog-slider-holder");
        b.length && b.each(function () {
            var b, c = a(this);
            (b = void 0 !== c.data("dots") && "yes" === c.data("dots")) && c.addClass("slick-dots"), c.on("init", function () {
                c.waitForImages(function () {
                    setTimeout(V(c), 400)
                }), c.addClass("appeared")
            }).slick({
                dots: b,
                arrows: !1,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: !1,
                responsive: [{breakpoint: 1025, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
                    breakpoint: 769,
                    settings: {slidesToShow: 1, slidesToScroll: 1}
                }]
            })
        })
    }

    function X() {
        var b = a(".mkd-latest-posts-widget .mkd-blog-list-holder.mkd-simple");
        b.length && b.each(function () {
            var b = a(this).data("number_of_visible_posts"), c = a(this).find(".mkd-blog-list");
            c.on("init", function () {
                c.addClass("appeared")
            }).slick({
                dots: !1,
                arrows: !0,
                vertical: !0,
                slidesToShow: b,
                slidesToScroll: b,
                verticalSwiping: !0,
                infinite: !1
            })
        })
    }

    function Y() {
        var b = a(".mkd-team-slider");
        b.length && b.each(function () {
            var b = a(this), c = "yes" == b.data("dots");
            c && b.addClass("slick-dots");
            var d = b.data("number_of_items");
            b.on("init", function () {
                b.addClass("appeared")
            }).slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                dots: c,
                arrows: !1,
                slidesToScroll: 1,
                slidesToShow: d,
                responsive: [{breakpoint: 1025, settings: {slidesToShow: 3, slidesToScroll: 3}}, {
                    breakpoint: 769,
                    settings: {slidesToShow: 2, slidesToScroll: 2}
                }, {breakpoint: 601, settings: {slidesToShow: 1, slidesToScroll: 1}}]
            })
        })
    }

    function Z() {
        var b = a(".mkd-card-slider");
        b.length && b.each(function () {
            var b = a(this), c = "yes" == b.data("dots");
            c && b.addClass("slick-dots");
            var d = b.data("number_of_items");
            b.on("init", function () {
                b.addClass("appeared")
            }).slick({
                dots: c,
                arrows: !1,
                slidesToScroll: d,
                slidesToShow: d,
                responsive: [{breakpoint: 1281, settings: {slidesToShow: 3, slidesToScroll: 3}}, {
                    breakpoint: 1025,
                    settings: {slidesToShow: 2, slidesToScroll: 2}
                }, {breakpoint: 769, settings: {slidesToShow: 1, slidesToScroll: 1}}]
            })
        })
    }

    function $() {
        var b = a(".mkd-device-slider");
        b.length && b.each(function () {
            var b = a(this);
            b.on("init", function () {
                b.addClass("appeared")
            }).slick({autoplay: !0, autoplaySpeed: 3e3})
        })
    }

    function _() {
        var b = a(".mkd-mobile-slider");
        b.length && b.each(function () {
            var b = a(this);
            b.on("init", function () {
                b.addClass("appeared")
            }).slick({
                infinite: !0,
                centerMode: !0,
                centerPadding: "20%",
                autoplay: !0,
                autoplaySpeed: 3e3,
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: !0,
                touchThreshold: 30,
                speed: 400,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        centerMode: !0,
                        centerPadding: "12%",
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        swipeToSlide: !0,
                        touchThreshold: 30
                    }
                }, {
                    breakpoint: 769,
                    settings: {
                        centerMode: !0,
                        centerPadding: "25%",
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: !0,
                        touchThreshold: 30
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        centerMode: !0,
                        centerPadding: "22%",
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: !0,
                        touchThreshold: 30
                    }
                }]
            })
        })
    }

    function aa() {
        var b = a(".mkd-centered-slider"), c = mkd.windowWidth / 3 + "px";
        b.length && b.each(function () {
            var b = a(this);
            b.width() >= mkd.windowWidth ? (b.on("init", function () {
                a(this).addClass("full-width"), b.css({opacity: "1"})
            }).slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                dots: !1,
                arrows: !1,
                centerMode: !0,
                centerPadding: c,
                slidesToShow: 1,
                speed: 800,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)",
                responsive: [{
                    breakpoint: 1025,
                    settings: {centerMode: !1, slidesToShow: 1, autoplay: !0}
                }, {breakpoint: 769, settings: {centerMode: !1, slidesToShow: 1, autoplay: !0}}, {
                    breakpoint: 481,
                    settings: {centerMode: !1, slidesToShow: 1, autoplay: !0}
                }]
            }), b.find(".slick-center").css({
                transform: "scale(1.2)",
                "z-index": "11"
            }), b.on("beforeChange", function () {
                a(this).find(".slick-center").css({transform: "scale(1)", "z-index": "10"})
            }), b.on("afterChange", function () {
                a(this).find(".slick-center").css({transform: "scale(1.2)", "z-index": "11"})
            })) : b.on("init", function () {
                b.css({opacity: "1"})
            }).slick({
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 3e3,
                dots: !1,
                arrows: !1,
                centerMode: !1,
                centerPadding: c,
                slidesToShow: 1,
                speed: 800,
                fade: !1,
                cssEase: "cubic-bezier(.38,.76,0,.87)"
            })
        })
    }

    function ba() {
        function b(b) {
            b.each(function () {
                var b = a(this), e = {};
                r = b.data("distance"), e.timelineWrapper = b.find(".mkd-horizontal-timeline-events-wrapper"), e.eventsWrapper = e.timelineWrapper.children(".mkd-horizontal-timeline-events"), e.fillingLine = e.eventsWrapper.children(".mkd-horizontal-timeline-filling-line"), e.timelineEvents = e.eventsWrapper.find("a"), e.timelineDates = n(e.timelineEvents), e.eventsMinLapse = p(e.timelineDates), e.timelineNavigation = b.find(".mkd-timeline-navigation"), e.eventsContent = b.children(".mkd-horizontal-timeline-events-content"), e.timelineEvents.first().addClass("selected"), e.eventsContent.find("li").first().addClass("selected"), h(e, r);
                var f = i(e, r);
                b.addClass("loaded"), a(window).resize(function () {
                    h(e, r), i(e, r)
                }), e.timelineNavigation.on("click", ".next", function (a) {
                    a.preventDefault(), c(e, f, "next")
                }), e.timelineNavigation.on("click", ".prev", function (a) {
                    a.preventDefault(), c(e, f, "prev")
                }), e.eventsWrapper.on("click", "a", function (b) {
                    b.preventDefault(), e.timelineEvents.removeClass("selected"), a(this).addClass("selected"), k(a(this)), g(a(this), e.fillingLine, f), j(a(this), e.eventsContent)
                }), e.eventsContent.on("swipeleft", function () {
                    d(e, f, "next")
                }), e.eventsContent.on("swiperight", function () {
                    d(e, f, "prev")
                }), a(document).keyup(function (a) {
                    "37" == a.which && q(b.get(0)) ? d(e, f, "prev") : "39" == a.which && q(b.get(0)) && d(e, f, "next")
                })
            })
        }

        function c(a, b, c) {
            var d = l(a.eventsWrapper), e = Number(a.timelineWrapper.css("width").replace("px", ""));
            "next" == c ? f(a, d - e + r, e - b) : f(a, d + e - r)
        }

        function d(a, b, c) {
            var d = a.eventsContent.find(".selected");
            if (("next" == c ? d.next() : d.prev()).length > 0) {
                var f = a.eventsWrapper.find(".selected"),
                    h = "next" == c ? f.parent("li").next("li").children("a") : f.parent("li").prev("li").children("a");
                g(h, a.fillingLine, b), j(h, a.eventsContent), h.addClass("selected"), f.removeClass("selected"), k(h), e(c, h, a)
            }
        }

        function e(a, b, c) {
            var d = window.getComputedStyle(b.get(0), null), e = Number(d.getPropertyValue("left").replace("px", "")),
                g = Number(c.timelineWrapper.css("width").replace("px", "")),
                h = Number(c.eventsWrapper.css("width").replace("px", "")), i = l(c.eventsWrapper);
            ("next" == a && e > g - i || "prev" == a && e < -i) && f(c, g / 2 - e, g - h)
        }

        function f(a, b, c) {
            var d = a.eventsWrapper.get(0);
            b = b > 0 ? 0 : b, b = void 0 !== c && b < c ? c : b, m(d, "translateX", b + "px"), 0 === b ? a.timelineNavigation.find(".prev").addClass("inactive") : a.timelineNavigation.find(".prev").removeClass("inactive"), b == c ? a.timelineNavigation.find(".next").addClass("inactive") : a.timelineNavigation.find(".next").removeClass("inactive")
        }

        function g(a, b, c) {
            var d = window.getComputedStyle(a.get(0), null), e = d.getPropertyValue("left"),
                f = d.getPropertyValue("width");
            e = Number(e.replace("px", "")) + Number(f.replace("px", "")) / 2;
            var g = e / c;
            m(b.get(0), "scaleX", g)
        }

        function h(a, b) {
            var c = 1;
            mkd.windowWidth < 600 && (c = .5);
            for (var d = 0; d < a.timelineDates.length; d++) {
                var e = o(a.timelineDates[0], a.timelineDates[d]), f = Math.round(e / a.eventsMinLapse) + 2;
                a.timelineEvents.eq(d).css("left", c * f * b + "px")
            }
        }

        function i(a, b) {
            var c = 1;
            mkd.windowWidth < 600 && (c = .5);
            var d = o(a.timelineDates[0], a.timelineDates[a.timelineDates.length - 1]), f = d / a.eventsMinLapse,
                f = Math.round(f) + 4, h = f * b * c;
            return a.eventsWrapper.css("width", h + "px"), g(a.eventsWrapper.find("a.selected"), a.fillingLine, h), e("next", a.eventsWrapper.find("a.selected"), a), h
        }

        function j(a, b) {
            var c = a.data("date"), d = b.find(".selected"), e = b.find('[data-date="' + c + '"]'), f = e.height();
            if (e.index() > d.index()) var g = "selected enter-right",
                h = "leave-left"; else var g = "selected enter-left", h = "leave-right";
            e.attr("class", g), d.attr("class", h).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
                d.removeClass("leave-right leave-left"), e.removeClass("enter-left enter-right")
            }), b.css("height", f + "px")
        }

        function k(a) {
            a.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")
        }

        function l(a) {
            var b = window.getComputedStyle(a.get(0), null),
                c = b.getPropertyValue("-webkit-transform") || b.getPropertyValue("-moz-transform") || b.getPropertyValue("-ms-transform") || b.getPropertyValue("-o-transform") || b.getPropertyValue("transform");
            if (c.indexOf("(") >= 0) {
                var c = c.split("(")[1];
                c = c.split(")")[0], c = c.split(",");
                var d = c[4]
            } else var d = 0;
            return Number(d)
        }

        function m(a, b, c) {
            a.style["-webkit-transform"] = b + "(" + c + ")", a.style["-moz-transform"] = b + "(" + c + ")", a.style["-ms-transform"] = b + "(" + c + ")", a.style["-o-transform"] = b + "(" + c + ")", a.style.transform = b + "(" + c + ")"
        }

        function n(b) {
            var c = [];
            return b.each(function () {
                var b = a(this), d = new String(b.data("date")), e = d.split("T");
                if (e.length > 1) var f = e[0].split("/"),
                    g = e[1].split(":"); else if (e[0].indexOf(":") >= 0) var f = ["2000", "0", "0"],
                    g = e[0].split(":"); else var f = e[0].split("/"), g = ["0", "0"];
                var h = new Date(f[2], f[1] - 1, f[0], g[0], g[1]);
                c.push(h)
            }), c
        }

        function o(a, b) {
            return Math.round(b - a)
        }

        function p(a) {
            for (var b = [], c = 1; c < a.length; c++) {
                var d = o(a[c - 1], a[c]);
                b.push(d)
            }
            return Math.min.apply(null, b)
        }

        function q(a) {
            for (var b = a.offsetTop, c = a.offsetLeft, d = a.offsetWidth, e = a.offsetHeight; a.offsetParent;) a = a.offsetParent, b += a.offsetTop, c += a.offsetLeft;
            return b < window.pageYOffset + window.innerHeight && c < window.pageXOffset + window.innerWidth && b + e > window.pageYOffset && c + d > window.pageXOffset
        }

        var r, s = a(".mkd-horizontal-timeline");
        return {
            init: function () {
                s.length > 0 && b(s)
            }
        }
    }

    function ca() {
        var b = a(".vc_empty_space"), c = {
            large_laptop: 1559,
            laptop: 1279,
            tablet_landscape: 1023,
            tablet_portrait: 767,
            phone_landscape: 599,
            phone_portrait: 479
        }, d = (function () {
            var a = [];
            for (var b in c) a.push(c[b])
        }(), function (a) {
            var b = {};
            for (var d in c) {
                var e = a.data(d);
                void 0 !== e && "" !== e && (b[d] = e)
            }
            return b
        }), e = function (a) {
            var b = [];
            for (var d in c) {
                var e = a.data(d);
                void 0 !== e && "" !== e && b.push(c[d])
            }
            return b
        }, f = function (a, b) {
            if (void 0 !== a) {
                var d = b.data("original-height"), f = e(b), g = Math.max.apply(null, f);
                for (var h in c) mkd.windowWidth <= c[h] ? b.height(a[h]) : mkd.windowWidth > g && b.height(d)
            }
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    var b = d(a(this));
                    f(b, a(this));
                    var c = a(this);
                    a(window).resize(function () {
                        f(b, c)
                    })
                })
            }
        }
    }

    function da() {
        mkd.body.hasClass("mkd-vertical-split-screen-initialized") && (mkd.body.removeClass("mkd-vertical-split-screen-initialized"), a.fn.multiscroll.destroy());
        var b = "";
        if (mkd.body.hasClass("mkd-light-header") ? b = "light" : mkd.body.hasClass("mkd-dark-header") && (b = "dark"), a(".mkd-vertical-split-slider").length) {
            var c = a(".mkd-vertical-split-slider");
            c.height(mkd.windowHeight).animate({opacity: 1}, 300), c.multiscroll({
                scrollingSpeed: 700,
                easing: "easeInOutQuart",
                navigation: !0,
                useAnchorsOnLoad: !1,
                sectionSelector: ".mkd-vss-ms-section",
                leftSelector: ".mkd-vss-ms-left",
                rightSelector: ".mkd-vss-ms-right",
                afterRender: function () {
                    ea(a(".mkd-vss-ms-right .mkd-vss-ms-section:last-child").data("header-style"), b), mkd.body.addClass("mkd-vertical-split-screen-initialized");
                    var d = a("div.wpcf7 > form");
                    d.length && d.each(function () {
                        var b = a(this);
                        b.find(".wpcf7-submit").off().on("click", function (a) {
                            a.preventDefault(), wpcf7.submit(b)
                        })
                    });
                    var e = a("<div class='mkd-vertical-split-slider-responsive' />");
                    c.after(e);
                    for (var f = a(".mkd-vertical-split-slider .mkd-vss-ms-left > div"), g = a(".mkd-vertical-split-slider .mkd-vss-ms-right > div"), i = 0; i < f.length; i++) e.append(a(f[i]).clone(!0)), e.append(a(g[f.length - 1 - i]).clone(!0));
                    a(".mkd-vertical-split-slider-responsive .mkd-google-map").length && a(".mkd-vertical-split-slider-responsive .mkd-google-map").each(function () {
                        var b = a(this);
                        b.empty();
                        var c = Math.floor(1e5 * Math.random() + 1);
                        b.attr("id", "mkd-map-" + c), b.data("unique-id", c)
                    }), za().init(), D(), G(), B(), w(), h()
                },
                onLeave: function (c, d, e) {
                    a("#multiscroll-nav").removeClass("direction-up direction-down").addClass("direction-" + e), h(), ea(a(a(".mkd-vss-ms-right .mkd-vss-ms-section")[a(".mkd-vss-ms-right .mkd-vss-ms-section").length - d]).data("header-style"), b)
                }
            }), mkd.windowWidth <= 1024 ? a.fn.multiscroll.destroy() : a.fn.multiscroll.build(), a(window).resize(function () {
                mkd.windowWidth <= 1024 ? a.fn.multiscroll.destroy() : a.fn.multiscroll.build()
            })
        }
    }

    function ea(a, b) {
        void 0 != a && "" != a ? mkd.body.removeClass("mkd-light-header mkd-dark-header").addClass("mkd-" + a + "-header") : "" != b ? mkd.body.removeClass("mkd-light-header mkd-dark-header").addClass("mkd-" + b + "-header") : mkd.body.removeClass("mkd-light-header mkd-dark-header")
    }

    function fa() {
        var b = a(".mkd-mini-text-slider");
        b.length && b.each(function () {
            var b = a(this).find(".mkd-mts-inner");
            b.owlCarousel({
                singleItem: !0,
                autoPlay: 4e3,
                navigation: !0,
                autoHeight: !1,
                pagination: !1,
                slideSpeed: 450,
                stopOnHover: !0,
                transitionStyle: "backSlide",
                navigationText: ['<span class="mkd-prev-icon"><span class="arrow_carrot-left"></span></span>', '<span class="mkd-next-icon"><span class="arrow_carrot-right"></span></span>'],
                afterInit: function () {
                    b.css("visibility", "visible")
                }
            })
        })
    }

    function ga() {
        var b = a(".mkd-tab-slider-container");
        b.length && b.each(function () {
            a(this).flexslider({
                slideshow: !1,
                animation: "slide",
                manualControls: ".mkd-tab-slider-nav .mkd-tab-slider-nav-item",
                selector: ".mkd-tab-slider-container-inner li",
                directionNav: !1
            })
        })
    }

    function ha() {
        var b = a(".mkd-playlist");
        b.length && b.each(function () {
            var b = a(this).find(".mkd-playlist-control"), c = a(this).find(".mkd-playlist-item"), d = c.find("audio");
            b.each(function () {
                var b = a(this), e = b.parent(), f = b.find("audio").get(0);
                b.on("click", function () {
                    e.hasClass("in-progress") ? (f.pause(), e.addClass("paused").removeClass("in-progress")) : e.hasClass("paused") ? (f.play(), e.addClass("playing in-progress").removeClass("paused")) : (d.each(function () {
                        this.pause(), this.currentTime = 0
                    }), c.removeClass("playing in-progress paused"), f.play(), e.addClass("playing in-progress"))
                }), b.find("audio").bind("ended", function () {
                    e.removeClass("playing in-progress")
                })
            })
        })
    }

    function ia() {
        var b = a(".mkd-pl-holder.woocommerce.masonry");
        b.length && b.each(function () {
            var b = a(this).children(".mkd-pl-outer");
            la(b), ka(b), a(window).resize(function () {
                la(b), ka(b)
            })
        })
    }

    function ja() {
        var b = a(".mkd-pl-holder.woocommerce.lookbook-masonry");
        b.length && b.each(function () {
            var b = a(this).children(".mkd-pl-outer");
            la(b), ka(b), a(window).resize(function () {
                la(b), ka(b)
            })
        })
    }

    function ka(a) {
        a.animate({opacity: 1}), a.waitForImages(function () {
            a.isotope({
                itemSelector: ".mkd-pl-item",
                resizable: !1,
                layoutMode: "packery",
                packery: {columnWidth: ".mkd-product-list-masonry-grid-sizer"}
            }), a.addClass("mkd-appeared")
        })
    }

    function la(a) {
        var b = 1.25 * a.find(".mkd-product-list-masonry-grid-sizer").width(),
            c = a.find(".servicemaster_mikado_square"), d = a.find(".servicemaster_mikado_large_width"),
            e = a.find(".servicemaster_mikado_large_height"), f = a.find(".servicemaster_mikado_large_width_height");
        c.css("height", b), mkd.windowWidth > 600 ? (f.css("height", Math.round(2 * b)), e.css("height", Math.round(2 * b)), d.css("height", b)) : (f.css("height", b), e.css("height", b))
    }

    function ma(a, b) {
        if (b.hasClass("mkd-bundle-animation")) {
            var c = !1, d = a.find(".mkd-bundle-item");
            d.css("top", d.data("bundle-move-top"));
            var e = function () {
                var e = 100 * (mkd.windowHeight - a[0].getBoundingClientRect().top) / (mkd.windowHeight / 2);
                !c && a[0].getBoundingClientRect().top <= mkd.windowHeight && a[0].getBoundingClientRect().top >= mkd.windowHeight / 2 ? d.css("top", (100 - e) / 100 * d.data("bundle-move-top")) : a[0].getBoundingClientRect().top < mkd.windowHeight / 2 && (d.css("top", 0), c = !0, b.removeClass("mkd-no-events"))
            };
            mkd.window.bind("scroll", e).resize(e), e()
        }
    }

    function na() {
        var b = a(".mkd-cards-gallery-holder");
        b.length && b.each(function () {
            var b = a(this), c = b.height();
            b.children(".mkd-cards-gallery").css("height", c), a(window).resize(function () {
                c = b.find(".card:last-child").height(), b.children(".mkd-cards-gallery").css("height", c)
            });
            var d = b.find(".card");
            b.find(".fake_card").css("display", "none"), d.each(function () {
                var c = a(this);
                ma(c, b), c.on("click", function () {
                    if (!d.last().is(c)) return c.fadeOut(0, function () {
                        c.addClass("mkd-transform-y"), c.insertAfter(d.last()).fadeIn(200, "easeInOutQuint", function () {
                            c.removeClass("mkd-transform-y")
                        }), d = b.find(".card")
                    }), !1
                })
            })
        })
    }

    function oa() {
        var b = a(".mkd-hover-tilt");
        b.length && !a("html").hasClass("touch") && b.each(function () {
            var b, c, d, e, f, g, h, i, j, k = a(this), l = k.find(".mkd-ptf-item-image-holder"), m = 0, n = !0;
            l.mouseenter(function () {
                var k = a(this);
                b = k.outerWidth(), c = k.outerHeight(), d = k.offset().top, e = k.offset().left, f = 0, g = 0, k.css("transform", "translate3d(0,0,0) scale(1.03)"), j = setTimeout(function () {
                    n = !1
                }, 200), k.mousemove(function (a) {
                    if (n) a.stopPropagation(); else {
                        k.css("transition", "none"), f = a.pageX - e, g = a.pageY - d, h = (b / 2 - f) / b * 2 * m, i = (c / 2 - g) / c * 2 * m;
                        var j = "translate3d(" + h + "px, " + i + "px, 0) scale(1.03)";
                        k.css("transform", j), m < 10 && (m += .3)
                    }
                })
            }), l.mouseleave(function () {
                clearTimeout(j), m = 0, n = !0;
                var b = a(this);
                b.css("transition", "all .2s"), b.css("transform", "translate3d(0,0,0) scale(1)")
            })
        })
    }

    function pa() {
        var b = a(".mkd-elements-holder");
        b.length && b.each(function () {
            var b = a(this), c = b.children(".mkd-elements-holder-item"), d = "", e = "";
            c.each(function () {
                var b = a(this), c = "", d = "", f = "", g = "", h = "", i = "", j = "";
                void 0 !== b.data("item-class") && !1 !== b.data("item-class") && (c = b.data("item-class")), void 0 !== b.data("1280-1440") && !1 !== b.data("1280-1440") && (d = b.data("1280-1440")), void 0 !== b.data("1024-1280") && !1 !== b.data("1024-1280") && (f = b.data("1024-1280")), void 0 !== b.data("768-1024") && !1 !== b.data("768-1024") && (g = b.data("768-1024")), void 0 !== b.data("600-768") && !1 !== b.data("600-768") && (h = b.data("600-768")), void 0 !== b.data("480-600") && !1 !== b.data("480-600") && (i = b.data("480-600")), void 0 !== b.data("480") && !1 !== b.data("480") && (j = b.data("480")), (d.length || f.length || g.length || h.length || i.length || j.length) && (d.length && (e += "@media only screen and (min-width: 1280px) and (max-width: 1440px) {.mkd-elements-holder-item-content." + c + " { padding: " + d + " !important; } }"), f.length && (e += "@media only screen and (min-width: 1024px) and (max-width: 1280px) {.mkd-elements-holder-item-content." + c + " { padding: " + f + " !important; } }"), g.length && (e += "@media only screen and (min-width: 768px) and (max-width: 1024px) {.mkd-elements-holder-item-content." + c + " { padding: " + g + " !important; } }"), h.length && (e += "@media only screen and (min-width: 600px) and (max-width: 768px) {.mkd-elements-holder-item-content." + c + " { padding: " + h + " !important; } }"), i.length && (e += "@media only screen and (min-width: 480px) and (max-width: 600px) {.mkd-elements-holder-item-content." + c + " { padding: " + i + " !important; } }"), j.length && (e += "@media only screen and (max-width: 480px) {.mkd-elements-holder-item-content." + c + " { padding: " + j + " !important; } }"))
            }), e.length && (d = '<style type="text/css" data-type="connect_mikado_modules_shortcodes_eh_custom_css">' + e + "</style>"), d.length && a("head").append(d)
        })
    }

    function qa() {
        var b = a(".mkd-bckg-slider");
        b.length && b.each(function () {
            var b = a(this);
            b.on("init", function () {
                b.addClass("appeared")
            }).slick({dots: !1, arrows: !0, slidesToScroll: 1, slidesToShow: 1})
        })
    }

    function ra() {
        var b = a(".mkd-unordered-list.mkd-animate-list");
        b.length && !mkd.htmlEl.hasClass("touch") && b.appear(function () {
            a(this).find("li").each(function (b) {
                var c = a(this);
                setTimeout(function () {
                    c.addClass("mkd-list-item-appeared")
                }, 150 * b)
            })
        }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
    }

    function sa() {
        var b = a(".mkd-table-shortcode-holder.mkd-animate-table");
        b.length && !mkd.htmlEl.hasClass("touch") && b.appear(function () {
            a(this).find(".mkd-table-content-item-inner").each(function (b) {
                var c = a(this);
                setTimeout(function () {
                    c.addClass("mkd-table-item-appeared")
                }, 100 * b)
            })
        }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
    }

    function ta() {
        var b = a(".mkd-iwt.mkd-iwt-loading-animation");
        b.length && !mkd.htmlEl.hasClass("touch") && b.appear(function () {
            var b = a(this), c = parseInt(b.data("loading-animation-delay"));
            !c > 0 && (c = 0), setTimeout(function () {
                b.addClass("mkd-iwt-item-appeared")
            }, c)
        }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
    }

    function ua() {
        var b = a(".mkd-iwt-over");
        b.length && b.each(function () {
            var b = a(this), c = b.find(".mkd-text-holder"), d = c.data("hover-color"),
                e = c.data("hover-background-color");
            if (d) {
                var f = c.css("color");
                b.mouseenter(function () {
                    c.css("color", d)
                }).mouseleave(function () {
                    c.css("color", f)
                })
            }
            if (e) {
                var g = c.css("background-color");
                b.mouseenter(function () {
                    c.css("background-color", e)
                }).mouseleave(function () {
                    c.css("background-color", g)
                })
            }
        })
    }

    function va() {
        var b = a(".mkd-text-marquee");
        b.length && b.each(function () {
            var b = a(this), c = b.find(".mkd-marquee-element"), d = c.filter(".mkd-original-text"),
                e = c.filter(".mkd-aux-text"), f = function (a) {
                    return b.outerWidth() > a.outerWidth() ? b.outerWidth() : a.outerWidth()
                };
            !function () {
                mkd.modules.common.mkdRequestAnimationFrame();
                var b = f(d);
                c.css({width: b}), e.css("left", b), c.each(function (c) {
                    var g = a(this), h = 0, i = function () {
                        h -= 1, g.position().left <= -b && (g.css("left", parseInt(b - 1)), h = 0), g.css("transform", "translate3d(" + 1 * h + "px,0,0)"), requestNextAnimationFrame(i), a(window).resize(function () {
                            b = f(d), h = 0, d.css("left", 0), e.css("left", b)
                        })
                    };
                    i()
                })
            }()
        })
    }

    var wa = {};
    mkd.modules.shortcodes = wa, wa.mkdInitCounter = g, wa.mkdInitProgressBars = h, wa.mkdInitCountdown = l, wa.mkdInitMessages = j, wa.mkdInitMessageHeight = k, wa.mkdInitTestimonials = m, wa.mkdInitCarousels = n, wa.mkdInitPieChart = p, wa.mkdInitPieChartDoughnut = r, wa.mkdInitTabs = s, wa.mkdInitTabIcons = t, wa.mkdInitBlogListMasonry = u, wa.mkdCustomFontResize = v, wa.mkdInitImageGallery = A, wa.mkdInitAccordions = z, wa.mkdShowGoogleMap = w, wa.mkdInitPortfolioListMasonry = D, wa.mkdInitProductListMasonry = ia, wa.mkdInitProductListLookbookMasonry = ja, wa.mkdInitPortfolioListPinterest = G, wa.mkdInitPortfolio = B, wa.mkdInitPortfolioMasonryFilter = I, wa.mkdInitPortfolioLoadMore = K, wa.mkdPortfolioAppearEffect = O, wa.mkdCheckSliderForHeaderStyle = P, wa.mkdInfoBox = Q, wa.mkdProcess = R, wa.mkdTwitterSlider = o, wa.mkdComparisonPricingTables = S, wa.mkdProgressBarVertical = T, wa.mkdIconProgressBar = U, wa.mkdBlogSlider = W, wa.mkdBlogLatestPosts = X, wa.mkdResizeBlogSlider = V, wa.mkdTeamSlider = Y, wa.mkdCardSlider = Z, wa.mkdCenteredSlider = aa, wa.mkdOnDocumentReady = b, wa.mkdOnWindowLoad = c, wa.mkdOnWindowResize = d, wa.mkdOnWindowScroll = e, wa.emptySpaceResponsive = ca, wa.horizontalTimeline = ba, wa.mkdInitVerticalSplitSlider = da, wa.mkdDeviceSlider = $, wa.mkdInitMobileSlide = _, wa.mkdTiltHoverEffect = oa, wa.mkdParentChildFilter = J, wa.mkdInitBackgroundSlider = qa, wa.mkdInitItemShowcase = f, wa.mkdInitUnorderedList = ra, wa.mkdInitTableShortcode = sa, wa.mkdInitIWTShortcode = ta, wa.mkdInitImageWithTextOver = ua, wa.mkdInitTextMarquee = va, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e);
    var xa = mkd.modules.shortcodes.mkdIcon = function () {
        var b = a(".mkd-icon-shortcode"), c = function (a) {
            a.hasClass("mkd-icon-animation") && a.appear(function () {
                a.parent(".mkd-icon-animation-holder").addClass("mkd-icon-animation-show")
            }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
        }, d = function (a) {
            if (void 0 !== a.data("hover-color")) {
                var b = function (a) {
                    a.data.icon.css("color", a.data.color)
                }, c = a.find(".mkd-icon-element"), d = a.data("hover-color"), e = c.css("color");
                "" !== d && (a.on("mouseenter", {icon: c, color: d}, b), a.on("mouseleave", {icon: c, color: e}, b))
            }
        }, e = function (a) {
            if (void 0 !== a.data("hover-background-color")) {
                var b = function (a) {
                    a.data.icon.css("background-color", a.data.color)
                }, c = a.data("hover-background-color"), d = a.css("background-color");
                "" !== c && (a.on("mouseenter", {icon: a, color: c}, b), a.on("mouseleave", {icon: a, color: d}, b))
            }
        }, f = function (a) {
            if (void 0 !== a.data("hover-border-color")) {
                var b = function (a) {
                    a.data.icon.css("border-color", a.data.color)
                }, c = a.data("hover-border-color"), d = a.css("border-color");
                "" !== c && (a.on("mouseenter", {icon: a, color: c}, b), a.on("mouseleave", {icon: a, color: d}, b))
            }
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this)), d(a(this)), e(a(this)), f(a(this))
                })
            }
        }
    }, ya = mkd.modules.shortcodes.mkdSocialIconWidget = function () {
        var b = a(".mkd-social-icon-widget-holder"), c = function (a) {
            if (void 0 !== a.data("hover-color")) {
                var b = function (a) {
                    a.data.icon.css("color", a.data.color)
                }, c = a, d = a.data("hover-color"), e = c.css("color");
                "" !== d && (a.on("mouseenter", {icon: c, color: d}, b), a.on("mouseleave", {icon: c, color: e}, b))
            }
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this))
                })
            }
        }
    }, za = mkd.modules.shortcodes.mkdButton = function () {
        var b = a(".mkd-btn"), c = function (a) {
            if (void 0 !== a.data("hover-color")) {
                var b = function (a) {
                    a.data.button.css("color", a.data.color)
                }, c = a.css("color"), d = a.data("hover-color");
                a.on("mouseenter", {button: a, color: d}, b), a.on("mouseleave", {button: a, color: c}, b)
            }
        }, d = function (a) {
            if (void 0 !== a.data("hover-bg-color")) {
                var b = function (a) {
                    a.data.button.css("background-color", a.data.color)
                }, c = a.css("background-color"), d = a.data("hover-bg-color");
                a.on("mouseenter", {button: a, color: d}, b), a.on("mouseleave", {button: a, color: c}, b)
            }
        }, e = function (a) {
            if (void 0 !== a.data("hover-border-color")) {
                var b = function (a) {
                    a.data.button.css("border-color", a.data.color)
                }, c = a.css("borderTopColor"), d = a.data("hover-border-color");
                a.on("mouseenter", {button: a, color: d}, b), a.on("mouseleave", {button: a, color: c}, b)
            }
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this)), d(a(this)), e(a(this))
                })
            }
        }
    }, Aa = mkd.modules.shortcodes.mkdPricingTableWithIcon = function () {
        var b = a(".mkd-pricing-table-wi"), c = function (a) {
            if (void 0 !== a.data("hover-bg-color")) {
                var b = function (a) {
                    a.data.pricingTable.css("background-color", a.data.color)
                }, c = a.css("background-color"), d = a.data("hover-bg-color");
                a.on("mouseenter", {pricingTable: a, color: d}, b), a.on("mouseleave", {pricingTable: a, color: c}, b)
            }
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this))
                })
            }
        }
    }, Ba = mkd.modules.shortcodes.mkdInteractiveBox = function () {
        var b = a(".mkd-ib-content"), c = function (a) {
            if (void 0 !== a.data("icon_hover_color") || void 0 !== a.data("title_hover_color")) {
                var b = function (a) {
                    a.data.interactiveBox.find(".mkd-ib-icon").css("color", a.data.color)
                }, c = a.find(".mkd-ib-icon").css("color"), d = a.data("icon_hover_color");
                a.on("mouseenter", {interactiveBox: a, color: d}, b), a.on("mouseleave", {
                    interactiveBox: a,
                    color: c
                }, b);
                var e = function (a) {
                    a.data.interactiveBox.find(".mkd-ib-title").css("color", a.data.color)
                }, f = a.find(".mkd-ib-title").css("color"), g = a.data("title_hover_color");
                a.on("mouseenter", {interactiveBox: a, color: g}, e), a.on("mouseleave", {
                    interactiveBox: a,
                    color: f
                }, e);
                var h = function (a) {
                    a.data.interactiveBox.find(".mkd-separator").css("border-color", a.data.color)
                }, i = a.find(".mkd-separator").css("border-color"), j = a.data("separator_hover_color");
                a.on("mouseenter", {interactiveBox: a, color: j}, h), a.on("mouseleave", {
                    interactiveBox: a,
                    color: i
                }, h)
            }
        };
        return {
            init: function () {
                b.length && b.each(function () {
                    c(a(this))
                })
            }
        }
    }, Ca = mkd.modules.shortcodes.mkdSlider = function () {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o = a(".mkd-slider .carousel"), p = /url\(["']?([^'")]+)['"]?\)/,
            q = [1600, 1200, 900, 650, 500, 320], r = {
                zoom_center: "1.2, 0, 0, 1.2, 0, 0",
                zoom_top_left: "1.2, 0, 0, 1.2, -150, -150",
                zoom_top_right: "1.2, 0, 0, 1.2, 150, -150",
                zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150",
                zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150"
            }, s = /\([0-9epx\.\, \t\-]+/gi, t = function (a) {
                return a.match(s)[0].substr(1).split(",").map(function (a) {
                    return parseFloat(a)
                })
            }, u = ["transform", "-webkit-transform"], v = function (a) {
                var b = null;
                return u.some(function (c) {
                    return null !== (b = a.css(c)) && "" !== b
                }), b = b && "none" !== b ? b : "matrix(1,0,0,1,0,0)", t(b)
            }, w = function (a, b) {
                for (var c = "matrix(" + b.join(",") + ")", d = u.length - 1; d >= 0; --d) a.css(u[d], c + " rotate(0.01deg)")
            }, x = function (a, b, c) {
                return a + c / 100 * (b - a)
            };
        a.fn.transformAnimate = function (b) {
            var c = {transform: "matrix(1,0,0,1,0,0)"};
            a.extend(c, b), this.css("percentAnim", 0);
            var d = v(this), e = t(c.transform);
            return c.step = function (c, f) {
                var g = a(this), h = d.map(function (a, b) {
                    return x(a, e[b], c)
                });
                w(g, h), b.step && b.step.apply(this, [h, f])
            }, this.stop().animate({percentAnim: 100}, c)
        };
        var y = function (a, b, c, d) {
            var e = b;
            d || (mkd.windowWidth > c[0] ? e = b : mkd.windowWidth > c[1] ? e = .75 * b : mkd.windowWidth > c[2] ? e = .6 * b : mkd.windowWidth > c[3] ? e = .55 * b : mkd.windowWidth <= c[3] && (e = .45 * b)), a.css({height: e + "px"}), a.find(".mkd-slider-preloader").css({height: e + "px"}), a.find(".mkd-slider-preloader .mkd-ajax-loader").css({display: "block"}), a.find(".item").css({height: e + "px"})
        }, z = function (b) {
            var c = mkd.windowWidth < 1e3 ? mkdGlobalVars.vars.mkdMobileHeaderHeight + a(".mkd-top-bar").height() : 0;
            b.css({height: mkd.windowHeight - c + "px"}), b.find(".mkd-slider-preloader").css({height: mkd.windowHeight + "px"}), b.find(".mkd-slider-preloader .mkd-ajax-loader").css({display: "block"}), b.find(".item").css({height: mkd.windowHeight + "px"})
        }, A = function (a, b) {
            window["slider_graphic_width_" + b] = [], window["slider_graphic_height_" + b] = [], window["slider_title_" + b] = [], window["slider_subtitle_" + b] = [], window["slider_text_" + b] = [], window["slider_button1_" + b] = [], window["slider_button2_" + b] = [], window["slider_graphic_width_" + b].push(parseFloat(a.find(".mkd-thumb img").data("width"))), window["slider_graphic_height_" + b].push(parseFloat(a.find(".mkd-thumb img").data("height"))), window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("font-size"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("font-size"))), window["slider_text_" + b].push(parseFloat(a.find(".mkd-slide-text").css("font-size"))), window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("font-size"))), window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("font-size"))), window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("line-height"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("line-height"))), window["slider_text_" + b].push(parseFloat(a.find(".mkd-slide-text").css("line-height"))),
                window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("line-height"))), window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("line-height"))), window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("letter-spacing"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("letter-spacing"))), window["slider_text_" + b].push(parseFloat(a.find(".mkd-slide-text").css("letter-spacing"))), window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("letter-spacing"))), window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("letter-spacing"))), window["slider_title_" + b].push(parseFloat(a.find(".mkd-slide-title").css("margin-bottom"))), window["slider_subtitle_" + b].push(parseFloat(a.find(".mkd-slide-subtitle").css("margin-bottom"))), window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("padding-top"))), window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("padding-top"))), window["slider_button1_" + b].push(parseFloat(a.find(".mkd-btn:eq(0)").css("padding-left"))), window["slider_button2_" + b].push(parseFloat(a.find(".mkd-btn:eq(1)").css("padding-left")))
        }, B = function (a, b, c, d, e, f) {
            function o(a, b, c, d, e) {
                g = a, h = b, i = c, j = d, k = e
            }

            mkd.windowWidth > a[0] ? o(b[0], c[0], d[0], e[0], f[0]) : mkd.windowWidth > a[1] ? o(b[1], c[1], d[1], e[1], f[1]) : mkd.windowWidth > a[2] ? o(b[2], c[2], d[2], e[2], f[2]) : mkd.windowWidth > a[3] ? o(b[3], c[3], d[3], e[3], f[3]) : mkd.windowWidth > a[4] ? o(b[4], c[4], d[4], e[4], f[4]) : mkd.windowWidth > a[5] ? o(b[5], c[5], d[5], e[5], f[5]) : o(b[6], c[6], d[6], e[6], f[6]), l = h, m = i, n = j, mkd.windowWidth <= a[0] && (l = h / 2, m = i / 2, n = j / 2)
        }, C = function (a, b, c) {
            c && (g = h = i = j = k = l = m = n = 1), a.find(".mkd-thumb").css({
                width: Math.round(window["slider_graphic_width_" + b][0] * g) + "px",
                height: Math.round(window["slider_graphic_height_" + b][0] * g) + "px"
            }), a.find(".mkd-slide-title").css({
                "font-size": Math.round(window["slider_title_" + b][0] * h) + "px",
                "line-height": Math.round(window["slider_title_" + b][1] * h) + "px",
                "letter-spacing": Math.round(window["slider_title_" + b][2] * h) + "px",
                "margin-bottom": Math.round(window["slider_title_" + b][3] * h) + "px"
            }), a.find(".mkd-slide-subtitle").css({
                "font-size": Math.round(window["slider_subtitle_" + b][0] * i) + "px",
                "line-height": Math.round(window["slider_subtitle_" + b][1] * i) + "px",
                "margin-bottom": Math.round(window["slider_subtitle_" + b][3] * i) + "px",
                "letter-spacing": Math.round(window["slider_subtitle_" + b][2] * m) + "px"
            }), a.find(".mkd-slide-text").css({
                "font-size": Math.round(window["slider_text_" + b][0] * j) + "px",
                "line-height": Math.round(window["slider_text_" + b][1] * j) + "px",
                "letter-spacing": Math.round(window["slider_text_" + b][2] * n) + "px"
            }), a.find(".mkd-btn:eq(0)").css({
                "font-size": Math.round(window["slider_button1_" + b][0] * k) + "px",
                "line-height": Math.round(window["slider_button1_" + b][1] * k) + "px",
                "letter-spacing": Math.round(window["slider_button1_" + b][2] * k) + "px",
                "padding-top": Math.round(window["slider_button1_" + b][3] * k) + "px",
                "padding-bottom": Math.round(window["slider_button1_" + b][3] * k) + "px",
                "padding-left": Math.round(window["slider_button1_" + b][4] * k) + "px",
                "padding-right": Math.round(window["slider_button1_" + b][4] * k) + "px"
            }), a.find(".mkd-btn:eq(1)").css({
                "font-size": Math.round(window["slider_button2_" + b][0] * k) + "px",
                "line-height": Math.round(window["slider_button2_" + b][1] * k) + "px",
                "letter-spacing": Math.round(window["slider_button2_" + b][2] * k) + "px",
                "padding-top": Math.round(window["slider_button2_" + b][3] * k) + "px",
                "padding-bottom": Math.round(window["slider_button2_" + b][3] * k) + "px",
                "padding-left": Math.round(window["slider_button2_" + b][4] * k) + "px",
                "padding-right": Math.round(window["slider_button2_" + b][4] * k) + "px"
            })
        }, D = function (g) {
            if (g.find(".item").each(function (b) {
                A(a(this), b), C(a(this), b, !1)
            }), g.hasClass("mkd-full-screen")) z(g), a(window).resize(function () {
                B(q, b, c, d, e, f), z(g), g.find(".item").each(function (b) {
                    C(a(this), b, !1)
                })
            }); else if (g.hasClass("mkd-responsive-height")) {
                var h = g.data("height");
                y(g, h, q, !1), a(window).resize(function () {
                    B(q, b, c, d, e, f), y(g, h, q, !1), g.find(".item").each(function (b) {
                        C(a(this), b, !1)
                    })
                })
            } else {
                var h = g.data("height");
                g.find(".mkd-slider-preloader").css({height: g.height() + "px"}), g.find(".mkd-slider-preloader .mkd-ajax-loader").css({display: "block"}), mkd.windowWidth < 1e3 ? y(g, h, q, !1) : y(g, h, q, !0), a(window).resize(function () {
                    B(q, b, c, d, e, f), mkd.windowWidth < 1e3 ? (y(g, h, q, !1), g.find(".item").each(function (b) {
                        C(a(this), b, !1)
                    })) : (y(g, h, q, !0), g.find(".item").each(function (b) {
                        C(a(this), b, !0)
                    }))
                })
            }
        }, E = function (a, b, c) {
            1 == b ? (a.find(".left.carousel-control .prev").html(c), a.find(".right.carousel-control .next").html(b + 1)) : b == c ? (a.find(".left.carousel-control .prev").html(b - 1), a.find(".right.carousel-control .next").html(1)) : (a.find(".left.carousel-control .prev").html(b - 1), a.find(".right.carousel-control .next").html(b + 1))
        }, F = function (b) {
            var c = 1500;
            b.find(".item .mkd-video .mkd-video-wrap").each(function () {
                var b = mkd.windowWidth, d = a(this).closest(".carousel").height();
                a(this).width(b), c = 1920 / 1080 * (d + 20), a(this).height(d);
                var e = b / 1920, f = (d - mkdGlobalVars.vars.mkdMenuAreaHeight) / 1080, g = f;
                e > f && (g = e), 1920 * g < c && (g = c / 1920), a(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(1920 * g + 2)), a(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(1080 * g + 2)), a(this).scrollLeft((a(this).find("video").width() - b) / 2), a(this).find(".mejs-overlay, .mejs-poster").scrollTop((a(this).find("video").height() - d) / 2), a(this).scrollTop((a(this).find("video").height() - d) / 2)
            })
        }, H = function (b, c, d) {
            b.find(".carousel-inner .item:first-child").addClass("active"), P(a(".carousel .active"), b.hasClass("mkd-header-effect")), b.hasClass("mkd-slider-numbers") && E(b, 1, c), b.find(".item video").length && (F(b), G(b)), b.hasClass("mkd-auto-start") ? (b.carousel({
                interval: d,
                pause: !1
            }), b.find(".slide_buttons_holder .qbutton").mouseenter(function () {
                b.carousel("pause")
            }).mouseleave(function () {
                b.carousel("cycle")
            })) : b.carousel({
                interval: 0,
                pause: !1
            }), a(".carousel-inner .item:first-child").hasClass("mkd-animate-image") && mkd.windowWidth > 1e3 && b.find(".carousel-inner .item.mkd-animate-image:first-child .mkd-image").transformAnimate({
                transform: "matrix(" + r[a(".carousel-inner .item:first-child").data("mkd_animate_image")] + ")",
                duration: 3e4
            })
        };
        return {
            init: function () {
                if (o.length) {
                    if (o.each(function () {
                        var g, h = a(this), i = h.data("slide_animation_timeout"), j = h.find(".item").length;
                        h.data("mkd_responsive_breakpoints") && "set2" == h.data("mkd_responsive_breakpoints") && (q = [1600, 1300, 1e3, 768, 567, 320]), b = h.data("mkd_responsive_graphic_coefficients").split(","), c = h.data("mkd_responsive_title_coefficients").split(","), d = h.data("mkd_responsive_subtitle_coefficients").split(","), e = h.data("mkd_responsive_text_coefficients").split(","), f = h.data("mkd_responsive_button_coefficients").split(","), B(q, b, c, d, e, f), D(h);
                        var k;
                        mkd.htmlEl.hasClass("touch") ? (g = h.find(".item:first-child .mkd-mobile-video-image").length > 0 ? p.exec(h.find(".item:first-child .mkd-mobile-video-image").attr("style")) : p.exec(h.find(".item:first-child .mkd-image").attr("style"))) && (k = new Image, k.src = g[1], a(k).load(function () {
                            a(".mkd-slider-preloader").fadeOut(500), H(h, j, i)
                        })) : h.find(".item:first-child video").length > 0 ? h.find(".item:first-child video").get(0).addEventListener("loadeddata", function () {
                            a(".mkd-slider-preloader").fadeOut(500), H(h, j, i)
                        }) : (g = p.exec(h.find(".item:first-child .mkd-image").attr("style"))) && (k = new Image, k.src = g[1], a(k).load(function () {
                            a(".mkd-slider-preloader").fadeOut(500), H(h, j, i)
                        })), h.on("slide.bs.carousel", function () {
                            h.addClass("mkd-in-progress"), h.find(".active .mkd-slider-content-outer").fadeTo(250, 0)
                        }), h.on("slid.bs.carousel", function () {
                            if (h.removeClass("mkd-in-progress"), h.find(".active .mkd-slider-content-outer").fadeTo(0, 1), h.hasClass("mkd-slider-numbers")) {
                                var b = a(".item").index(a(".item.active")[0]) + 1;
                                E(h, b, j)
                            }
                            a(".item.mkd-animate-image .mkd-image").stop().css({
                                transform: "",
                                "-webkit-transform": ""
                            }), a(".item.active").hasClass("mkd-animate-image") && mkd.windowWidth > 1e3 && a(".item.mkd-animate-image.active .mkd-image").transformAnimate({
                                transform: "matrix(" + r[a(".item.mkd-animate-image.active").data("mkd_animate_image")] + ")",
                                duration: 3e4
                            })
                        }), h.swipe({
                            swipeLeft: function () {
                                h.carousel("next")
                            }, swipeRight: function () {
                                h.carousel("prev")
                            }, threshold: 20
                        })
                    }), a(".no-touch .carousel").length) {
                        skrollr.init({smoothScrolling: !1, forceHeight: !1}).refresh()
                    }
                    a(window).scroll(function () {
                        a(".mkd-slider .carousel").height() < mkd.scroll ? a(".mkd-slider .carousel").addClass("mkd-disable-slider-header-style-changing") : (a(".mkd-slider .carousel").removeClass("mkd-disable-slider-header-style-changing"), P(a(".mkd-slider .carousel .active"), a(".mkd-slider .carousel").hasClass("mkd-header-effect"))), a(".mkd-slider .carousel").hasClass("mkd-full-screen") && mkd.scroll > mkd.windowHeight && mkd.windowWidth > 1e3 ? a(".mkd-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : !a(".mkd-slider .carousel").hasClass("mkd-full-screen") && mkd.scroll > a(".mkd-slider .carousel").height() && mkd.windowWidth > 1e3 ? a(".mkd-slider .carousel").find(".carousel-inner, .carousel-indicators").hide() : a(".mkd-slider .carousel").find(".carousel-inner, .carousel-indicators").show()
                    })
                }
            }
        }
    }, Da = mkd.modules.shortcodes.mkdAdvancedSlider = function () {
        var b = function (b, c, d, e, f, g) {
            c.data("slide", e).attr("data-slide", e), c.find(".mkd-advanced-slider").css("margin-left", g ? -f.position().left + a(c).outerWidth() / 2 - f.outerWidth() / 2 : -f.position().left), setTimeout(function () {
                mkd.modules.common.mkdLazyImages()
            }, 500);
            var h = d < e ? 1 : -1;
            h > 0 && e == b.length ? c.find('.button[data-direction="next"]').addClass("hidden") : c.find('.button[data-direction="next"]').removeClass("hidden"), h < 0 && 1 == e ? c.find('.button[data-direction="prev"]').addClass("hidden") : c.find('.button[data-direction="prev"]').removeClass("hidden")
        }, c = function (c, d, e) {
            c.each(function (c, f) {
                var g = a(f).find(".mkd-advanced-slider > .slide"), h = a(f).find(".dot"),
                    i = Math.round(g.length / 2) - 1;
                d ? (h.length > 0 ? a(h[i]).on("click") : b(g, a(f), 1, i, a(g[i]), e), a(f).data("slide", i + 1).attr("data-slide", i + 1), a(f).find(".button").removeClass("hidden")) : h.length > 0 ? a(h[0]).on("click") : b(g, a(f), 1, 1, a(g[0]), e)
            })
        }, d = function (b, c, d) {
            c.find(".mkd-advanced-slider").width(99999), b.each(function () {
                a(this).css("max-width", c.outerWidth())
            })
        }, e = function () {
            a(".cards").each(function () {
                var b = a(this), c = b.find(".card");
                c.each(function () {
                    var d = a(this);
                    d.on("click", function () {
                        return c.last().is(d) || (d.detach(), d.insertAfter(c.last()), c = b.find(".card")), !1
                    })
                })
            })
        }, f = function () {
            a(".cards").each(function () {
                var b = a(this), c = b.find(".card").get().reverse();
                b.appear(function () {
                    a(c).each(function (b) {
                        var c = a(this);
                        setTimeout(function () {
                            c.addClass("hovered"), setTimeout(function () {
                                c.removeClass("hovered")
                            }, 600)
                        }, 200 * b)
                    })
                }, {accX: 0, accY: -mkd.windowHeight / 3})
            })
        }, g = function () {
            a(".mkd-advanced-holder .card").each(function (b, c) {
                a(c).on("click", function () {
                    var b = a("." + a(c).data("value"));
                    return b.closest(".mkd-advanced-panes").find(".pane").removeClass("active"), b.addClass("active"), mkd.modules.common.mkdLazyImages(), !1
                })
            }), a(".mkd-advanced-holder").each(function (b, c) {
                a(c).find(".mkd-advanced-panes .pane").last().addClass("active"), a(c).find(".mkd-advanced-panes .pane .card").length ? a(c).find(".mkd-advanced-panes .pane .card").each(function (b, d) {
                    a(d).detach(), a(c).find(".mkd-advanced-header").append(a(d))
                }) : a(c).find(".mkd-advanced-header").remove()
            })
        }, h = function () {
            a(".mkd-advanced-panes").each(function () {
                var b = a(this), c = -1, d = b.find(".pane").height();
                c = c > d ? c : d, b.height(c)
            })
        }, i = function (a) {
            a.swipe({
                swipeLeft: function () {
                    a.find('.button[data-direction="next"]').on("click")
                }, swipeRight: function () {
                    a.find('.button[data-direction="prev"]').on("click")
                }, threshold: 20
            })
        }, j = function () {
            a(".mkd-advanced-slider-holder").each(function (e, f) {
                var g = a(f).find(".mkd-advanced-slider > .slide"), j = a(f).data("active-middle-slide"),
                    k = a(f).data("center");
                a(f).find(".button").each(function (c, d) {
                    a(d).on("click", function () {
                        var c = "prev" == a(d).data("direction") ? -1 : 1, e = a(f).data("slide"),
                            h = a(f).data("slide") + c, i = a(f).find('.slide[data-slide="' + h + '"]');
                        return i.length && (b(g, a(f), e, h, i, k), a(f).find(".dot").removeClass("active").filter('[data-slide="' + h + '"]').addClass("active")), !1
                    })
                }), a(f).find(".dot").each(function (c, d) {
                    a(d).click(function () {
                        a(f).find(".dot").removeClass("active"), a(d).addClass("active");
                        var c = a(f).data("slide"), e = a(d).data("slide"),
                            h = a(f).find('.slide[data-slide="' + e + '"]');
                        return h.length && b(g, a(f), c, e, h, k), !1
                    })
                }), d(g, a(f)), c(a(f), j, k), i(a(f)), a(window).resize(function () {
                    d(g, a(f)), c(a(f), j, k), h()
                })
            })
        };
        return {
            init: function () {
                a(".mkd-advanced-slider-holder").length && (j(), h(), g(), e())
            }, load: function () {
                a(".mkd-advanced-slider-holder").length && (h(), f())
            }
        }
    }, Ea = function () {
        var b = a(".mkd-ot-date");
        b.length && b.each(function () {
            a(this).datepicker({
                prevText: '<span class="arrow_carrot-left"></span>',
                nextText: '<span class="arrow_carrot-right"></span>'
            })
        })
    }
}(jQuery), function (a) {
    "use strict";

    function b() {
        e(), f(), g(), h()
    }

    function c() {
    }

    function d() {
        h()
    }

    function e() {
        a(document).on("click", ".mkd-quantity-minus, .mkd-quantity-plus", function (b) {
            b.stopPropagation();
            var c, d = a(this), e = d.siblings(".mkd-quantity-input"), f = parseFloat(e.data("step")),
                g = parseFloat(e.data("max")), h = !1, i = parseFloat(e.val());
            d.hasClass("mkd-quantity-minus") && (h = !0), h ? (c = i - f, c >= 1 ? e.val(c) : e.val(0)) : (c = i + f, void 0 === g ? e.val(c) : c >= g ? e.val(g) : e.val(c)), e.trigger("change")
        })
    }

    function f() {
        var b = a(".mkd-woo-single-page.mkd-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image");
        b.length && (b.children("a").attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"), "function" == typeof mkd.modules.common.mkdPrettyPhoto && mkd.modules.common.mkdPrettyPhoto())
    }

    function g() {
        var b = a(".woocommerce-ordering .orderby");
        b.length && b.select2({minimumResultsForSearch: 1 / 0});
        var c = a("#calc_shipping_country");
        c.length && c.select2();
        var d = a(".cart-collaterals .shipping select#calc_shipping_state");
        d.length && d.select2();
        var e = a(".mkd-single-product-content .variations select");
        e.length && e.select2()
    }

    function h() {
        var b = a(".mkd-woo-single-page .product .images .woocommerce-product-gallery__image:first-child").height();
        a(".mkd-woo-single-page .product .images").css({"min-height": b}), a(".mkd-woo-single-page .product .images figure").css({"min-height": b})
    }

    var i = {};
    mkd.modules.woocommerce = i, i.mkdInitQuantityButtons = e, i.mkdInitSelect2 = g, i.mkdOnDocumentReady = b, i.mkdOnWindowLoad = c, i.mkdOnWindowResize = d, i.mkdProductImagesMinHeight = h, a(document).ready(b), a(window).load(c), a(window).resize(d)
}(jQuery), function (a) {
    "use strict";

    function b() {
        f.mkdPortfolioSlider()
    }

    function c() {
        g().init()
    }

    function d() {
    }

    function e() {
    }

    var f = {};
    mkd.modules.portfolio = f, f.mkdOnDocumentReady = b, f.mkdOnWindowLoad = c, f.mkdOnWindowResize = d, f.mkdOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e), f.mkdPortfolioSlider = function () {
        var b = a(".mkd-portfolio-slider-holder"), c = function (a, b) {
            var c = a.data("columns");
            "number" == typeof c && (b.slidesToShow = c, b.slidesToScroll = c, b.arrows = !1)
        };
        b.length && b.each(function () {
            var b = a(this).find(".mkd-portfolio-slider-list"), d = {};
            d.dots = void 0 !== b.data("dots") && "yes" === b.data("dots"), d.dots && b.addClass("slick-dots"), d.infinite = !0, d.autoplay = !0, c(b, d), d.responsive = [{
                breakpoint: 1024,
                settings: {slidesToShow: 3, slidesToScroll: 3}
            }, {breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
                breakpoint: 480,
                settings: {slidesToShow: 1, slidesToScroll: 1}
            }], b.on("init", function () {
                a(this).css("visibility", "visible")
            }), b.slick(d)
        })
    };
    var g = function () {
        var b = a(".mkd-follow-portfolio-info .small-images.mkd-portfolio-single-holder .mkd-portfolio-info-holder, .mkd-follow-portfolio-info .small-slider.mkd-portfolio-single-holder .mkd-portfolio-info-holder");
        if (b.length) var c = b.parent(), d = c.offset().top, e = c.height(), f = a(".mkd-portfolio-media"),
            g = f.height(), h = a(".header-appear, .mkd-fixed-wrapper"), i = h.length ? h.height() : 0;
        var j = function () {
            b.length && g > e && mkd.scroll > d && b.animate({marginTop: mkd.scroll - d + mkdGlobalVars.vars.mkdAddForAdminBar + i + 20})
        }, k = function () {
            b.length && g > e && (mkd.scroll > d ? mkd.scroll + i + mkdGlobalVars.vars.mkdAddForAdminBar + e + 20 < d + g ? (a(".header-appear, .mkd-fixed-wrapper").length && (i = a(".header-appear, .mkd-fixed-wrapper").height()), b.stop().animate({marginTop: mkd.scroll - d + mkdGlobalVars.vars.mkdAddForAdminBar + i + 20}), i = 0) : b.stop().animate({marginTop: g - e}) : b.stop().animate({marginTop: 0}))
        };
        return {
            init: function () {
                mkd.modules.common.mkdIsTouchDevice() || (j(), a(window).scroll(function () {
                    k()
                }))
            }
        }
    }
}(jQuery);
;!function (a) {
    "use strict";

    function b() {
        h(), l(), g(), i()
    }

    function c() {
        m()
    }

    function d() {
    }

    function e() {
    }

    function g() {
        if (a(".mkd-blog-holder.mkd-blog-type-split").length) {
            var b = a(".mkd-blog-holder.mkd-blog-type-split");
            b.waitForImages(function () {
                b.isotope({layoutMode: "vertical"})
            }), b.find("article").appear(function () {
                a(this).addClass("appeared")
            })
        }
    }

    function h() {
        if (a(".mkd-blog-holder.mkd-blog-type-masonry").length) {
            var b = a(".mkd-blog-holder.mkd-blog-type-masonry");
            b.waitForImages(function () {
                b.isotope({
                    itemSelector: "article",
                    resizable: !1,
                    masonry: {columnWidth: ".mkd-blog-masonry-grid-sizer", gutter: ".mkd-blog-masonry-grid-gutter"}
                })
            });
            var c = a(".mkd-filter-blog-holder");
            a(".mkd-filter").on("click", function () {
                var d = a(this), e = d.attr("data-filter");
                return c.find(".mkd-active").removeClass("mkd-active"), d.addClass("mkd-active"), b.isotope({filter: e}), !1
            })
        }
    }

    function i() {
        var b = a(".mkd-blog-holder.mkd-blog-type-masonry-gallery");
        b.length && b.each(function () {
            var b = a(this);
            k(b), j(b), a(window).resize(function () {
                k(b), j(b)
            }), mkd.htmlEl.hasClass("touch") || a(window).load(function () {
                var c = b.find("article"), d = c.first().offset().top, e = 0, f = 0;
                c.each(function () {
                    a(this).offset().top == d && e++
                }), c.not("mkd-appeared").appear(function () {
                    var b = a(this);
                    f == e && (f = 0), setTimeout(function () {
                        b.addClass("mkd-appeared")
                    }, 200 * f), f++
                }, {accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount})
            })
        })
    }

    function j(a) {
        a.waitForImages(function () {
            a.isotope({
                itemSelector: "article",
                resizable: !1,
                layoutMode: "packery",
                packery: {columnWidth: ".mkd-blog-masonry-gallery-grid-sizer"}
            }), a.addClass("mkd-appeared")
        })
    }

    function k(a) {
        var b = a.find(".mkd-blog-masonry-gallery-grid-sizer").width(), c = a.find(".mkd-post-size-square"),
            d = a.find(".mkd-post-size-large-width"), e = a.find(".mkd-post-size-large-height"),
            f = a.find(".mkd-post-size-large-width-height");
        c.css("height", b), d.css("height", b), e.css("height", Math.round(2 * b)), mkd.windowWidth > 600 ? f.css("height", Math.round(2 * b)) : f.css("height", b)
    }

    function l() {
        var b, c = a(".mkd-blog-holder.mkd-blog-load-more");
        b = c.hasClass("mkd-blog-type-masonry") ? c.next().find(".mkd-btn") : c.find(".mkd-load-more-ajax-pagination .mkd-btn"), b.on("click", function (a) {
            a.preventDefault(), a.stopPropagation(), n(c, b)
        })
    }

    function m() {
        var b = a(".mkd-blog-holder.mkd-blog-infinite-scroll"), c = a(".mkd-infinite-scroll-trigger");
        c.length && mkd.window.scroll(function () {
            !b.hasClass("mkd-ajax-started") && mkd.windowHeight + mkd.window.scrollTop() > c.offset().top && (b.addClass("mkd-ajax-started"), n(b, ""))
        })
    }

    function n(b, c) {
        var d, e, f = o(b);
        if (e = b.data("max-pages"), (d = f.nextPage) <= e) {
            var g = p(f);
            a.ajax({
                type: "POST", data: g, url: MikadoAjaxUrl, success: function (c) {
                    d++, b.data("next-page", d);
                    var e = a.parseJSON(c), f = e.html;
                    b.waitForImages(function () {
                        b.hasClass("mkd-blog-type-masonry") ? (b.append(f).isotope("reloadItems").isotope({sortBy: "original-order"}), h()) : b.find("article:last").after(f), setTimeout(function () {
                            mkd.modules.blog.mkdInitAudioPlayer(), mkd.modules.common.mkdSlickSlider(), mkd.modules.common.mkdFluidVideo()
                        }, 400), b.removeClass("mkd-ajax-started")
                    })
                }
            })
        }
        d === e && "" !== c && c.hide()
    }

    function o(a) {
        var b = {};
        return b.nextPage = "", b.number = "", b.category = "", b.blogType = "", b.archiveCategory = "", b.archiveAuthor = "", b.archiveTag = "", b.archiveDay = "", b.archiveMonth = "", b.archiveYear = "", void 0 !== a.data("next-page") && !1 !== a.data("next-page") && (b.nextPage = a.data("next-page")), void 0 !== a.data("post-number") && !1 !== a.data("post-number") && (b.number = a.data("post-number")), void 0 !== a.data("category") && !1 !== a.data("category") && (b.category = a.data("category")), void 0 !== a.data("blog-type") && !1 !== a.data("blog-type") && (b.blogType = a.data("blog-type")), void 0 !== a.data("archive-category") && !1 !== a.data("archive-category") && (b.archiveCategory = a.data("archive-category")), void 0 !== a.data("archive-author") && !1 !== a.data("archive-author") && (b.archiveAuthor = a.data("archive-author")), void 0 !== a.data("archive-tag") && !1 !== a.data("archive-tag") && (b.archiveTag = a.data("archive-tag")), void 0 !== a.data("archive-day") && !1 !== a.data("archive-day") && (b.archiveDay = a.data("archive-day")), void 0 !== a.data("archive-month") && !1 !== a.data("archive-month") && (b.archiveMonth = a.data("archive-month")), void 0 !== a.data("archive-year") && !1 !== a.data("archive-year") && (b.archiveYear = a.data("archive-year")), b
    }

    function p(a) {
        return {
            action: "servicemaster_mikado_blog_load_more",
            nextPage: a.nextPage,
            number: a.number,
            category: a.category,
            blogType: a.blogType,
            archiveCategory: a.archiveCategory,
            archiveAuthor: a.archiveAuthor,
            archiveTag: a.archiveTag,
            archiveDay: a.archiveDay,
            archiveMonth: a.archiveMonth,
            archiveYear: a.archiveYear
        }
    }

    var q = {};
    mkd.modules.blog = q, q.mkdInitBlogMasonry = h, q.mkdInitBlogMasonryGallery = i, q.mkdInitBlogSplit = g, q.mkdInitBlogLoadMore = l, q.mkdOnDocumentReady = b, q.mkdOnWindowLoad = c, q.mkdOnWindowResize = d, q.mkdOnWindowScroll = e, a(document).ready(b), a(window).load(c), a(window).resize(d), a(window).scroll(e)
}(jQuery);
;/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ", function () {
    for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
}(), function ($) {
    "function" != typeof window.vc_js && (window.vc_js = function () {
        "use strict";
        vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
    }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
        ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
            var this_element = jQuery(this), sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                sliderFx = this_element.attr("data-flex_fx"), slideshow = 0 == sliderTimeout ? !1 : !0;
            this_element.is(":visible") && this_element.flexslider({
                animation: sliderFx,
                slideshow: slideshow,
                slideshowSpeed: sliderTimeout,
                sliderSpeed: 800,
                smoothHeight: !0
            })
        })
    }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
        0 < jQuery(".wpb_googleplus").length && function () {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
        0 < jQuery(".wpb_pinterest").length && function () {
            var po = document.createElement("script");
            po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s)
        }()
    }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
        void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function () {
            var $el = jQuery(this);
            $el.vcwaypoint(function () {
                $el.find(".vc_single_bar").each(function (index) {
                    var bar = jQuery(this).find(".vc_bar"), val = bar.data("percentage-value");
                    setTimeout(function () {
                        bar.css({width: val + "%"})
                    }, 200 * index)
                })
            }, {offset: "85%"})
        })
    }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
        void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
            var $el = jQuery(this);
            $el.vcwaypoint(function () {
                $el.addClass("wpb_start_animation animated")
            }, {offset: "85%"})
        })
    }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
        function event(content) {
            content && content.preventDefault && content.preventDefault();
            var element = jQuery(this).closest(".vc_toggle"), content = element.find(".vc_toggle_content");
            element.hasClass("vc_toggle_active") ? content.slideUp({
                duration: 300, complete: function () {
                    element.removeClass("vc_toggle_active")
                }
            }) : content.slideDown({
                duration: 300, complete: function () {
                    element.addClass("vc_toggle_active")
                }
            })
        }

        ($el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click") : $el.find(".vc_toggle_title").off("click") : jQuery(".vc_toggle_title").off("click")).on("click", event)
    }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function (ver) {
        var $call, old_version;
        jQuery.ui && ($call = ver || jQuery(".wpb_tabs, .wpb_tour"), ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10", old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9, $call.each(function (index) {
            var interval = jQuery(this).attr("data-interval"), tabs_array = [],
                $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                    show: function (event, ui) {
                        wpb_prepare_tab_content(event, ui)
                    }, activate: function (event, ui) {
                        wpb_prepare_tab_content(event, ui)
                    }
                });
            if (interval && 0 < interval) try {
                $tabs.tabs("rotate", 1e3 * interval)
            } catch (err) {
                window.console && window.console.warn && console.warn("tabs behaviours error", err)
            }
            jQuery(this).find(".wpb_tab").each(function () {
                tabs_array.push(this.id)
            }), jQuery(this).find(".wpb_tabs_nav li").on("click", function (e) {
                return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
            }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function (length) {
                var index;
                length && length.preventDefault && length.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
            })
        }))
    }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
        jQuery(".wpb_accordion").each(function (index) {
            var $this = jQuery(this),
                active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                $tabs = !1 === active_tab || "yes" === $this.data("collapsible"),
                $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                    header: "> div > h3",
                    autoHeight: !1,
                    heightStyle: "content",
                    active: active_tab,
                    collapsible: $tabs,
                    navigation: !0,
                    activate: vc_accordionActivate,
                    change: function (event, ui) {
                        void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                    }
                });
            !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {
            })
        })
    }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
        var layout_modes = {fitrows: "fitRows", masonry: "masonry"};
        jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
            var $container = jQuery(this), $thumbs = $container.find(".wpb_thumbnails"),
                layout_mode = $thumbs.attr("data-layout-mode");
            $thumbs.isotope({
                itemSelector: ".isotope-item",
                layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
            }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function ($thumbs) {
                $thumbs && $thumbs.preventDefault && $thumbs.preventDefault();
                $thumbs = jQuery(this).data("isotope");
                jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({filter: jQuery(this).attr("data-filter")})
            }), jQuery(window).on("load resize", function () {
                $thumbs.isotope("layout")
            })
        })
    }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
        ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
            var fluid_ul = jQuery(this);
            !0 !== fluid_ul.data("carousel_enabled") && fluid_ul.is(":visible") && (fluid_ul.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1"), (fluid_ul = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                "margin-right": fluid_ul.css("margin-left"),
                "margin-left": 0
            }), (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300), jQuery(window).on("resize", function () {
                screen_size != (screen_size = getSizeName()) && window.setTimeout(function () {
                    location.reload()
                }, 20)
            }))
        })
    }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
        jQuery(".wpb_gallery_slides").each(function (index) {
            var $imagesGrid, sliderTimeout, this_element = jQuery(this);
            this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 800,
                pauseTime: sliderTimeout,
                startSlide: 0,
                directionNav: !0,
                directionNavHide: !0,
                controlNav: !0,
                keyboardNav: !1,
                pauseOnHover: !0,
                manualAdvance: !1,
                prevText: "Prev",
                nextText: "Next"
            })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
                $imagesGrid.isotope({itemSelector: ".isotope-item", layoutMode: "fitRows"})
            }) : this_element.find(".wpb_image_grid_ul").isotope({
                itemSelector: ".isotope-item",
                layoutMode: "fitRows"
            }))
        })
    }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
        try {
            jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                animationSpeed: "normal",
                hook: "data-rel",
                padding: 15,
                opacity: .7,
                showTitle: !0,
                allowresize: !0,
                counter_separator_label: "/",
                hideflash: !1,
                deeplinking: !1,
                modal: !1,
                callback: function () {
                    -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                },
                social_tools: ""
            })
        } catch (err) {
            window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
        }
    }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
        return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
    }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
        var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

        function fullWidthRow() {
            var $elements = $('[data-vc-full-width="true"]');
            $.each($elements, function (key, item) {
                var $el = $(this);
                $el.addClass("vc_hidden");
                var el_margin_left, el_margin_right, offset, width, padding, paddingRight,
                    $el_full = $el.next(".vc_row-full-width");
                ($el_full = !$el_full.length ? $el.parent().next(".vc_row-full-width") : $el_full).length && (el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width(), "rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                    position: "relative",
                    left: offset,
                    "box-sizing": "border-box",
                    width: width
                }), $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : (paddingRight = width - (padding = (padding = -1 * offset) < 0 ? 0 : padding) - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0), $el.css({
                    "padding-left": padding + "px",
                    "padding-right": paddingRight + "px"
                })), $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                    el: $el,
                    offset: offset,
                    marginLeft: el_margin_left,
                    marginRight: el_margin_right,
                    elFull: $el_full,
                    width: width
                }))
            }), $(document).trigger("vc-full-width-row", $elements)
        }

        function fullHeightRow() {
            var fullHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
            $element.length && (fullHeight = $(window).height(), (offsetTop = $element.offset().top) < fullHeight && (fullHeight = 100 - offsetTop / (fullHeight / 100), $element.css("min-height", fullHeight + "vh"))), $(document).trigger("vc-full-height-row", $element)
        }

        $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
            "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
        }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
            var skrollrStart, $parallaxElement, parallaxImage, youtubeId;
            callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrStart = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrStart + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrStart - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
        }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
            forceHeight: !1,
            smoothScrolling: !1,
            mobileCheck: function () {
                return !1
            }
        }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
    }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
        jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
    }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
        for (var find = !1, i = 1; !1 === find;) {
            if (el.hasClass("columns_count_" + i)) return find = !0, i;
            i++
        }
    });
    var screen_size = getSizeName();

    function getSizeName() {
        var screen_w = jQuery(window).width();
        return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
    }

    "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
        var panel = ui.panel || ui.newPanel, $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
            $round_charts = panel.find(".vc_round-chart"), $frame = panel.find(".vc_line-chart"),
            $google_maps = panel.find('[data-ride="vc_carousel"]');
        vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({reload: !1}), $frame.length && jQuery.fn.vcLineChart && $frame.vcLineChart({reload: !1}), $google_maps.length && jQuery.fn.carousel && $google_maps.carousel("resizeAction"), $frame = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $frame.length && $frame.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")), panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
            jQuery(this).isotope("layout")
        }), $(document).trigger("wpb_prepare_tab_content", panel)
    }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function () {
        jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
            var $ = window.jQuery, ui = {};
            ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
        })
    }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function (event, ui) {
        var $pie_charts, $round_charts, $line_charts, $carousel;
        ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"), $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'), void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
            var grid = jQuery(this).data("vcGrid");
            grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
        }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({reload: !1}), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({reload: !1}), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
            jQuery(this).isotope("layout")
        }))
    }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function () {
        return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
    }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function () {
        jQuery("[data-vc-video-bg]").each(function () {
            var youtubeId, $element = jQuery(this);
            $element.data("vcVideoBg") ? (youtubeId = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeId)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
                $element.has($grid).length && vcResizeVideoBackground($element)
            })) : $element.find(".vc_video-bg").remove()
        })
    }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function ($element, youtubeId, counter) {
        if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
            insertYoutubeVideoAsBackground($element, youtubeId, counter++)
        }, 100);
        var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
        new YT.Player($container[0], {
            width: "100%",
            height: "100%",
            videoId: youtubeId,
            playerVars: {
                playlist: youtubeId,
                iv_load_policy: 3,
                enablejsapi: 1,
                disablekb: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                rel: 0,
                loop: 1,
                wmode: "transparent"
            },
            events: {
                onReady: function (event) {
                    event.target.mute().setLoop(!0)
                }
            }
        }), vcResizeVideoBackground($element), jQuery(window).on("resize", function () {
            vcResizeVideoBackground($element)
        })
    }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function ($element) {
        var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
            containerH = $element.innerHeight();
        containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
            maxWidth: "1000%",
            marginLeft: marginLeft,
            marginTop: marginTop,
            width: iframeW,
            height: iframeH
        })
    }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function (id) {
        if (void 0 === id) return !1;
        id = id.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        return null !== id && id[1]
    }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function () {
        var $ = window.jQuery, $wpbGmapsWidget = $(".wpb_gmaps_widget");
        $wpbGmapsWidget.on("click", function () {
            $("iframe", this).css("pointer-events", "auto")
        }), $wpbGmapsWidget.on("mouseleave", function () {
            $("iframe", this).css("pointer-events", "none")
        }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
    }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function (hoverBox) {
        hoverBox.each(function () {
            var $this = jQuery(this), perspective = 4 * $this.width() + "px";
            $this.css("perspective", perspective)
        })
    }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function (hoverBox) {
        hoverBox.each(function () {
            var hoverBoxHeight = jQuery(this), hoverBoxInner = hoverBoxHeight.find(".vc-hoverbox-inner");
            hoverBoxInner.css("min-height", 0);
            var frontHeight = hoverBoxHeight.find(".vc-hoverbox-front-inner").outerHeight(),
                hoverBoxHeight = hoverBoxHeight.find(".vc-hoverbox-back-inner").outerHeight(),
                hoverBoxHeight = hoverBoxHeight < frontHeight ? frontHeight : hoverBoxHeight;
            hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
        })
    }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function () {
        var hoverBox = jQuery(".vc-hoverbox");
        vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
    }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).on("resize", window.vc_prepareHoverBox), jQuery(document).ready(function ($) {
        window.vc_js()
    })
}(window.jQuery);