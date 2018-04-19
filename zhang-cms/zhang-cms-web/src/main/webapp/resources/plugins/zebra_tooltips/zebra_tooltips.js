(function(e) {
    e.Zebra_Tooltips = function(k, p) {
        var q = {
                animation_speed: 250,
                animation_offset: 20,
                background_color: "#000",
                close_on_click: !0,
                color: "#FFF",
                content: !1,
                default_position: "above",
                hide_delay: 100,
                keep_visible: !0,
                max_width: 250,
                opacity: ".95",
                position: "center",
                prerender: !1,
                show_delay: 100,
                vertical_offset: 0,
                onBeforeHide: null,
                onHide: null,
                onBeforeShow: null,
                onShow: null
            },
            b = this,
            l,
            u,
            h,
            r;
        b.settings = {};
        b.hide = function(b, a) {
            b.each(function() {
                var b = e(this),
                    c = b.data("Zebra_Tooltip");
                c && (c.sticky = !1, a && (c.destroy = !0), b.data("Zebra_Tooltip", c), m(b))
            })
        };
        b.show = function(b, a) {
            b.each(function() {
                var b = e(this),
                    c = b.data("Zebra_Tooltip");
                c && (c.sticky = !0, c.muted = !1, a && (c.destroy = !0), b.data("Zebra_Tooltip", c), s(b))
            })
        };
        var n = function(c) {
                var a = c.data("Zebra_Tooltip");
                if (!a.tooltip) {
                    var d = jQuery("<div>", {
                            "class": "Zebra_Tooltip",
                            css: {
                                opacity: 0,
                                display: "block"
                            }
                        }),
                        g = jQuery("<div>", {
                            "class": "Zebra_Tooltip_Message",
                            css: {
                                "max-width": b.settings.max_width,
                                "background-color": b.settings.background_color,
                                color: b.settings.color
                            }
                        }).html(b.settings.content ? b.settings.content: a.content).appendTo(d),
                        a = jQuery("<div>", {
                            "class": "Zebra_Tooltip_Arrow"
                        }).appendTo(d),
                        t = jQuery("<div>").appendTo(a);
                    b.settings.keep_visible && (d.bind("mouseleave" + (b.settings.close_on_click ? " click": ""),
                        function() {
                            m(c)
                        }), d.bind("mouseenter",
                        function() {
                            s(c)
                        }));
                    d.appendTo("body");
                    var k = d.outerWidth(),
                        n = d.outerHeight(),
                        p = t.outerWidth(),
                        v = t.outerHeight(),
                        f = g.outerWidth(),
                        q = g.outerHeight(),
                        a = {
                            tooltip: d,
                            tooltip_width: k,
                            tooltip_height: n + v / 2,
                            message: g,
                            arrow_container: a,
                            arrow_width: p,
                            arrow_height: v,
                            arrow: t
                        };
                    d.css({
                        width: a.tooltip_width,
                        height: a.tooltip_height
                    });
                    a.tooltip_width += g.outerWidth() - f;
                    a.tooltip_height += g.outerHeight() - q;
                    d.css({
                        width: a.tooltip_width,
                        height: a.tooltip_height,
                        display: "none"
                    });
                    a = e.extend(c.data("Zebra_Tooltip"), a);
                    c.data("Zebra_Tooltip", a)
                }
                a.sticky && !a.close && (jQuery("<a>", {
                    "class": "Zebra_Tooltip_Close",
                    href: "javascript:void(0)"
                }).html("").bind("click",
                    function(a) {
                        a.preventDefault();
                        a = c.data("Zebra_Tooltip");
                        a.sticky = !1;
                        c.data("Zebra_Tooltip", a);
                        m(c)
                    }).appendTo(a.message), a.close = !0, a = e.extend(c.data("Zebra_Tooltip"), a), c.data("Zebra_Tooltip", a));
                if (a.window_resized || a.window_scrolled) d = e(window),
                a.window_resized && (l = d.width(), u = d.height(), g = c.offset(), e.extend(a, {
                    element_left: g.left,
                    element_top: g.top,
                    element_width: c.outerWidth(),
                    element_height: c.outerHeight()
                })),
                    r = d.scrollTop(),
                    h = d.scrollLeft(),
                    d = "left" == b.settings.position ? a.element_left - a.tooltip_width + a.arrow_width: "right" == b.settings.position ? a.element_left + a.element_width - a.arrow_width: a.element_left + (a.element_width - a.tooltip_width) / 2,
                    g = a.element_top - a.tooltip_height,
                    f = "left" == b.settings.position ? a.tooltip_width - a.arrow_width - a.arrow_width / 2 : "right" == b.settings.position ? a.arrow_width / 2 : (a.tooltip_width - a.arrow_width) / 2,
                d + a.tooltip_width > l + h && (f -= l + h - (d + a.tooltip_width) - 6, d = l + h - a.tooltip_width - 6, f + a.arrow_width > a.tooltip_width - 6 && (f = a.tooltip_width - 6 - a.arrow_width), d + f + a.arrow_width / 2 < a.element_left && (f = -1E4)),
                d < h && (f -= h - d, d = h + 2, 0 > f && (f = a.arrow_width / 2), d + f + a.arrow_width / 2 > a.element_left + a.element_width && (f = -1E4)),
                    a.arrow_container.removeClass("Zebra_Tooltip_Arrow_Top"),
                    a.arrow_container.addClass("Zebra_Tooltip_Arrow_Bottom"),
                    a.message.css("margin-top", ""),
                    a.arrow.css("borderColor", b.settings.background_color + " transparent transparent"),
                    g < r || "below" == b.settings.default_position && a.element_top + a.element_height + b.settings.vertical_offset + a.tooltip_height + a.animation_offset < u + r ? (g = a.element_top + a.element_height - b.settings.vertical_offset, a.animation_offset = Math.abs(a.animation_offset), a.message.css("margin-top", a.arrow_height / 2), a.arrow_container.removeClass("Zebra_Tooltip_Arrow_Bottom"), a.arrow_container.addClass("Zebra_Tooltip_Arrow_Top"), a.arrow.css("borderColor", "transparent transparent " + b.settings.background_color)) : (a.animation_offset = -Math.abs(a.animation_offset), g += b.settings.vertical_offset),
                    a.arrow_container.css("left", f),
                    a.tooltip.css({
                        left: d,
                        top: g
                    }),
                    e.extend(a, {
                        tooltip_left: d,
                        tooltip_top: g,
                        arrow_left: f
                    }),
                    a.window_resized = !1,
                    a.window_scrolled = !1,
                    a = e.extend(c.data("Zebra_Tooltip"), a),
                    c.data("Zebra_Tooltip", a);
                return a
            },
            m = function(c) {
                var a = c.data("Zebra_Tooltip");
                clearTimeout(a.hide_timeout);
                a.sticky || (clearTimeout(a.show_timeout), a.hide_timeout = setTimeout(function() {
                        if (a.tooltip) {
                            if (b.settings.onBeforeHide && "function" == typeof b.settings.onBeforeHide) b.settings.onBeforeHide(c, a.tooltip);
                            a.close = !1;
                            a.destroy && (a.muted = !0);
                            c.data("Zebra_Tooltip", a);
                            e("a.Zebra_Tooltip_Close", a.tooltip).remove();
                            a.tooltip.stop();
                            a.tooltip.animate({
                                    opacity: 0,
                                    top: a.tooltip_top + a.animation_offset
                                },
                                b.settings.animation_speed,
                                function() {
                                    e(this).css("display", "none");
                                    if (b.settings.onHide && "function" == typeof b.settings.onHide) b.settings.onHide(c, a.tooltip)
                                })
                        }
                    },
                    b.settings.hide_delay))
            },
            s = function(c) {
                var a = c.data("Zebra_Tooltip");
                clearTimeout(a.show_timeout);
                a.muted || (clearTimeout(a.hide_timeout), a.show_timeout = setTimeout(function() {
                        a = n(c);
                        if (b.settings.onBeforeShow && "function" == typeof b.settings.onBeforeShow) b.settings.onBeforeShow(c, a.tooltip);
                        "block" != a.tooltip.css("display") && a.tooltip.css({
                            top: a.tooltip_top + a.animation_offset
                        });
                        a.tooltip.css("display", "block");
                        a.tooltip.stop();
                        a.tooltip.animate({
                                top: a.tooltip_top,
                                opacity: b.settings.opacity
                            },
                            b.settings.animation_speed,
                            function() {
                                if (b.settings.onShow && "function" == typeof b.settings.onShow) b.settings.onShow(c, a.tooltip)
                            })
                    },
                    b.settings.show_delay))
            }; (function() {
            b.settings = e.extend({},
                q, p);
            k.each(function() {
                var c = e(this),
                    a = c.attr("title"),
                    d = c.data("zebra-tooltip");
                if (a && "" !== a || d && "" !== d || void 0 !== b.settings.content) c.bind({
                    mouseenter: function() {
                        s(c)
                    },
                    mouseleave: function() {
                        m(c)
                    }
                }),
                    c.data("Zebra_Tooltip", {
                        tooltip: null,
                        content: d || a || "",
                        window_resized: !0,
                        window_scrolled: !0,
                        show_timeout: null,
                        hide_timeout: null,
                        animation_offset: b.settings.animation_offset,
                        sticky: !1,
                        destroy: !1,
                        muted: !1
                    }),
                    c.attr("title", ""),
                b.settings.prerender && n(c)
            });
            e(window).bind("scroll resize",
                function(b) {
                    k.each(function() {
                        var a = e(this).data("Zebra_Tooltip");
                        a && ("scroll" == b.type ? a.window_scrolled = !0 : a.window_resized = !0, e(this).data("Zebra_Tooltip", a))
                    })
                })
        })()
    }
})(jQuery);