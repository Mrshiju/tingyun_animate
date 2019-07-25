/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 jQuery animateNumber plugin v0.0.10
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/

/*! jQuery UI - v1.9.2 - 2016-05-10
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

/*! modernizr 3.0.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms-csstransforms3d !*/

/**
 *
 * http://www.anotherhome.net
 * Copyright 2015, DIYgod
 * Free to use under the MIT license.
 *
 */

/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

define("agent", [],
        function() {
            var t = function() {
                var t = !1;
                return navigator.userAgent.indexOf("MSIE") > 0 && (navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0) && (t = !0),
                    t
            };
            return {
                getFlag: t
            }
        }),
    function(t, e) {
        function i(t) {
            var e = t.length,
                i = ct.type(t);
            return ct.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function n(t) {
            var e = Et[t] = {};
            return ct.each(t.match(dt) || [],
                    function(t, i) {
                        e[i] = !0
                    }),
                e
        }

        function s(t, i, n, s) {
            if (ct.acceptData(t)) {
                var r, a, o = ct.expando,
                    l = t.nodeType,
                    u = l ? ct.cache : t,
                    c = l ? t[o] : t[o] && o;
                if (c && u[c] && (s || u[c].data) || n !== e || "string" != typeof i) return c || (c = l ? t[o] = et.pop() || ct.guid++ : o),
                    u[c] || (u[c] = l ? {} : {
                        toJSON: ct.noop
                    }),
                    ("object" == typeof i || "function" == typeof i) && (s ? u[c] = ct.extend(u[c], i) : u[c].data = ct.extend(u[c].data, i)),
                    a = u[c],
                    s || (a.data || (a.data = {}), a = a.data),
                    n !== e && (a[ct.camelCase(i)] = n),
                    "string" == typeof i ? (r = a[i], null == r && (r = a[ct.camelCase(i)])) : r = a,
                    r
            }
        }

        function r(t, e, i) {
            if (ct.acceptData(t)) {
                var n, s, r = t.nodeType,
                    a = r ? ct.cache : t,
                    l = r ? t[ct.expando] : ct.expando;
                if (a[l]) {
                    if (e && (n = i ? a[l] : a[l].data)) {
                        ct.isArray(e) ? e = e.concat(ct.map(e, ct.camelCase)) : e in n ? e = [e] : (e = ct.camelCase(e), e = e in n ? [e] : e.split(" ")),
                            s = e.length;
                        for (; s--;) delete n[e[s]];
                        if (i ? !o(n) : !ct.isEmptyObject(n)) return
                    }(i || (delete a[l].data, o(a[l]))) && (r ? ct.cleanData([t], !0) : ct.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
                }
            }
        }

        function a(t, i, n) {
            if (n === e && 1 === t.nodeType) {
                var s = "data-" + i.replace(Tt, "-$1").toLowerCase();
                if (n = t.getAttribute(s), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? ct.parseJSON(n) : n
                    } catch (r) {}
                    ct.data(t, i, n)
                } else n = e
            }
            return n
        }

        function o(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return J.activeElement
            } catch (t) {}
        }

        function h(t, e) {
            do t = t[e];
            while (t && 1 !== t.nodeType);
            return t
        }

        function d(t, e, i) {
            if (ct.isFunction(e)) return ct.grep(t,
                function(t, n) {
                    return !!e.call(t, n, t) !== i
                });
            if (e.nodeType) return ct.grep(t,
                function(t) {
                    return t === e !== i
                });
            if ("string" == typeof e) {
                if (Ft.test(e)) return ct.filter(e, t, i);
                e = ct.filter(e, t)
            }
            return ct.grep(t,
                function(t) {
                    return ct.inArray(t, e) >= 0 !== i
                })
        }

        function p(t) {
            var e = Vt.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function f(t, e) {
            return ct.nodeName(t, "table") && ct.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function g(t) {
            return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type,
                t
        }

        function m(t) {
            var e = se.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"),
                t
        }

        function v(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) ct._data(i, "globalEval", !e || ct._data(e[n], "globalEval"))
        }

        function y(t, e) {
            if (1 === e.nodeType && ct.hasData(t)) {
                var i, n, s, r = ct._data(t),
                    a = ct._data(e, r),
                    o = r.events;
                if (o) {
                    delete a.handle,
                        a.events = {};
                    for (i in o)
                        for (n = 0, s = o[i].length; s > n; n++) ct.event.add(e, i, o[i][n])
                }
                a.data && (a.data = ct.extend({},
                    a.data))
            }
        }

        function b(t, e) {
            var i, n, s;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !ct.support.noCloneEvent && e[ct.expando]) {
                    s = ct._data(e);
                    for (n in s.events) ct.removeEvent(e, n, s.handle);
                    e.removeAttribute(ct.expando)
                }
                "script" === i && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.support.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }

        function _(t, i) {
            var n, s, r = 0,
                a = typeof t.getElementsByTagName !== Q ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== Q ? t.querySelectorAll(i || "*") : e;
            if (!a)
                for (a = [], n = t.childNodes || t; null != (s = n[r]); r++) !i || ct.nodeName(s, i) ? a.push(s) : ct.merge(a, _(s, i));
            return i === e || i && ct.nodeName(t, i) ? ct.merge([t], a) : a
        }

        function w(t) {
            ee.test(t.type) && (t.defaultChecked = t.checked)
        }

        function x(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = ke.length; s--;)
                if (e = ke[s] + i, e in t) return e;
            return n
        }

        function C(t, e) {
            return t = e || t,
                "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
        }

        function k(t, e) {
            for (var i, n, s, r = [], a = 0, o = t.length; o > a; a++) n = t[a],
                n.style && (r[a] = ct._data(n, "olddisplay"), i = n.style.display, e ? (r[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && C(n) && (r[a] = ct._data(n, "olddisplay", P(n.nodeName)))) : r[a] || (s = C(n), (i && "none" !== i || !s) && ct._data(n, "olddisplay", s ? i : ct.css(n, "display"))));
            for (a = 0; o > a; a++) n = t[a],
                n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[a] || "" : "none"));
            return t
        }

        function E(t, e, i) {
            var n = ve.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function S(t, e, i, n, s) {
            for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === i && (a += ct.css(t, i + Ce[r], !0, s)),
                n ? ("content" === i && (a -= ct.css(t, "padding" + Ce[r], !0, s)), "margin" !== i && (a -= ct.css(t, "border" + Ce[r] + "Width", !0, s))) : (a += ct.css(t, "padding" + Ce[r], !0, s), "padding" !== i && (a += ct.css(t, "border" + Ce[r] + "Width", !0, s)));
            return a
        }

        function T(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = ce(t),
                a = ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, r);
            if (0 >= s || null == s) {
                if (s = he(t, e, r), (0 > s || null == s) && (s = t.style[e]), ye.test(s)) return s;
                n = a && (ct.support.boxSizingReliable || s === t.style[e]),
                    s = parseFloat(s) || 0
            }
            return s + S(t, e, i || (a ? "border" : "content"), n, r) + "px"
        }

        function P(t) {
            var e = J,
                i = _e[t];
            return i || (i = A(t, e), "none" !== i && i || (ue = (ue || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ue[0].contentWindow || ue[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = A(t, e), ue.detach()), _e[t] = i),
                i
        }

        function A(t, e) {
            var i = ct(e.createElement(t)).appendTo(e.body),
                n = ct.css(i[0], "display");
            return i.remove(),
                n
        }

        function D(t, e, i, n) {
            var s;
            if (ct.isArray(e)) ct.each(e,
                function(e, s) {
                    i || Se.test(t) ? n(t, s) : D(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
                });
            else if (i || "object" !== ct.type(e)) n(t, e);
            else
                for (s in e) D(t + "[" + s + "]", e[s], i, n)
        }

        function I(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    r = e.toLowerCase().match(dt) || [];
                if (ct.isFunction(i))
                    for (; n = r[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function M(t, i, n, s) {
            function r(l) {
                var u;
                return a[l] = !0,
                    ct.each(t[l] || [],
                        function(t, l) {
                            var c = l(i, n, s);
                            return "string" != typeof c || o || a[c] ? o ? !(u = c) : e : (i.dataTypes.unshift(c), r(c), !1)
                        }),
                    u
            }
            var a = {},
                o = t === Ye;
            return r(i.dataTypes[0]) || !a["*"] && r("*")
        }

        function N(t, i) {
            var n, s, r = ct.ajaxSettings.flatOptions || {};
            for (s in i) i[s] !== e && ((r[s] ? t : n || (n = {}))[s] = i[s]);
            return n && ct.extend(!0, t, n),
                t
        }

        function L(t, i, n) {
            for (var s, r, a, o, l = t.contents,
                    u = t.dataTypes;
                "*" === u[0];) u.shift(),
                r === e && (r = t.mimeType || i.getResponseHeader("Content-Type"));
            if (r)
                for (o in l)
                    if (l[o] && l[o].test(r)) {
                        u.unshift(o);
                        break
                    }
            if (u[0] in n) a = u[0];
            else {
                for (o in n) {
                    if (!u[0] || t.converters[o + " " + u[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            return a ? (a !== u[0] && u.unshift(a), n[a]) : e
        }

        function O(t, e, i, n) {
            var s, r, a, o, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = u[l + " " + r] || u["* " + r], !a)
                    for (s in u)
                        if (o = s.split(" "), o[1] === r && (a = u[l + " " + o[0]] || u["* " + o[0]])) {
                            a === !0 ? a = u[s] : u[s] !== !0 && (r = o[0], c.unshift(o[1]));
                            break
                        }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try {
                        e = a(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: a ? h : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function j() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function R() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function H() {
            return setTimeout(function() {
                    Ke = e
                }),
                Ke = ct.now()
        }

        function $(t, e, i) {
            for (var n, s = (si[e] || []).concat(si["*"]), r = 0, a = s.length; a > r; r++)
                if (n = s[r].call(i, e, t)) return n
        }

        function W(t, e, i) {
            var n, s, r = 0,
                a = ni.length,
                o = ct.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var e = Ke || H(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(r);
                    return o.notifyWith(t, [u, r, i]),
                        1 > r && l ? i : (o.resolveWith(t, [u]), !1)
                },
                u = o.promise({
                    elem: t,
                    props: ct.extend({},
                        e),
                    opts: ct.extend(!0, {
                            specialEasing: {}
                        },
                        i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Ke || H(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = ct.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(n),
                            n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? u.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) u.tweens[i].run(1);
                        return e ? o.resolveWith(t, [u, e]) : o.rejectWith(t, [u, e]),
                            this
                    }
                }),
                c = u.props;
            for (z(c, u.opts.specialEasing); a > r; r++)
                if (n = ni[r].call(u, t, c, u.opts)) return n;
            return ct.map(c, $, u),
                ct.isFunction(u.opts.start) && u.opts.start.call(t, u),
                ct.fx.timer(ct.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })),
                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function z(t, e) {
            var i, n, s, r, a;
            for (i in t)
                if (n = ct.camelCase(i), s = e[n], r = t[i], ct.isArray(r) && (s = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), a = ct.cssHooks[n], a && "expand" in a) {
                    r = a.expand(r),
                        delete t[n];
                    for (i in r) i in t || (t[i] = r[i], e[i] = s)
                } else e[n] = s
        }

        function F(t, e, i) {
            var n, s, r, a, o, l, u = this,
                c = {},
                h = t.style,
                d = t.nodeType && C(t),
                p = ct._data(t, "fxshow");
            i.queue || (o = ct._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
                    o.unqueued || l()
                }), o.unqueued++, u.always(function() {
                    u.always(function() {
                        o.unqueued--,
                            ct.queue(t, "fx").length || o.empty.fire()
                    })
                })),
                1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ct.css(t, "display") && "none" === ct.css(t, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== P(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")),
                i.overflow && (h.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
                    h.overflow = i.overflow[0],
                        h.overflowX = i.overflow[1],
                        h.overflowY = i.overflow[2]
                }));
            for (n in e)
                if (s = e[n], ti.exec(s)) {
                    if (delete e[n], r = r || "toggle" === s, s === (d ? "hide" : "show")) continue;
                    c[n] = p && p[n] || ct.style(t, n)
                }
            if (!ct.isEmptyObject(c)) {
                p ? "hidden" in p && (d = p.hidden) : p = ct._data(t, "fxshow", {}),
                    r && (p.hidden = !d),
                    d ? ct(t).show() : u.done(function() {
                        ct(t).hide()
                    }),
                    u.done(function() {
                        var e;
                        ct._removeData(t, "fxshow");
                        for (e in c) ct.style(t, e, c[e])
                    });
                for (n in c) a = $(d ? p[n] : 0, n, u),
                    n in p || (p[n] = a.start, d && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function Y(t, e, i, n, s) {
            return new Y.prototype.init(t, e, i, n, s)
        }

        function q(t, e) {
            var i, n = {
                    height: t
                },
                s = 0;
            for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Ce[s],
                n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t),
                n
        }

        function B(t) {
            return ct.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var V, X, Q = typeof e,
            U = t.location,
            J = t.document,
            G = J.documentElement,
            K = t.jQuery,
            Z = t.$,
            tt = {},
            et = [],
            it = "1.10.2",
            nt = et.concat,
            st = et.push,
            rt = et.slice,
            at = et.indexOf,
            ot = tt.toString,
            lt = tt.hasOwnProperty,
            ut = it.trim,
            ct = function(t, e) {
                return new ct.fn.init(t, e, X)
            },
            ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            dt = /\S+/g,
            pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^[\],:{}\s]*$/,
            vt = /(?:^|:|,)(?:\s*\[)+/g,
            yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            _t = /^-ms-/,
            wt = /-([\da-z])/gi,
            xt = function(t, e) {
                return e.toUpperCase()
            },
            Ct = function(t) {
                (J.addEventListener || "load" === t.type || "complete" === J.readyState) && (kt(), ct.ready())
            },
            kt = function() {
                J.addEventListener ? (J.removeEventListener("DOMContentLoaded", Ct, !1), t.removeEventListener("load", Ct, !1)) : (J.detachEvent("onreadystatechange", Ct), t.detachEvent("onload", Ct))
            };
        ct.fn = ct.prototype = {
                jquery: it,
                constructor: ct,
                init: function(t, i, n) {
                    var s, r;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (s = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ft.exec(t), !s || !s[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
                        if (s[1]) {
                            if (i = i instanceof ct ? i[0] : i, ct.merge(this, ct.parseHTML(s[1], i && i.nodeType ? i.ownerDocument || i : J, !0)), gt.test(s[1]) && ct.isPlainObject(i))
                                for (s in i) ct.isFunction(this[s]) ? this[s](i[s]) : this.attr(s, i[s]);
                            return this
                        }
                        if (r = J.getElementById(s[2]), r && r.parentNode) {
                            if (r.id !== s[2]) return n.find(t);
                            this.length = 1,
                                this[0] = r
                        }
                        return this.context = J,
                            this.selector = t,
                            this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return rt.call(this)
                },
                get: function(t) {
                    return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
                },
                pushStack: function(t) {
                    var e = ct.merge(this.constructor(), t);
                    return e.prevObject = this,
                        e.context = this.context,
                        e
                },
                each: function(t, e) {
                    return ct.each(this, t, e)
                },
                ready: function(t) {
                    return ct.ready.promise().done(t),
                        this
                },
                slice: function() {
                    return this.pushStack(rt.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        i = +t + (0 > t ? e : 0);
                    return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
                },
                map: function(t) {
                    return this.pushStack(ct.map(this,
                        function(e, i) {
                            return t.call(e, i, e)
                        }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: st,
                sort: [].sort,
                splice: [].splice
            },
            ct.fn.init.prototype = ct.fn,
            ct.extend = ct.fn.extend = function() {
                var t, i, n, s, r, a, o = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof o && (c = o, o = arguments[1] || {},
                        l = 2), "object" == typeof o || ct.isFunction(o) || (o = {}), u === l && (o = this, --l); u > l; l++)
                    if (null != (r = arguments[l]))
                        for (s in r) t = o[s],
                            n = r[s],
                            o !== n && (c && n && (ct.isPlainObject(n) || (i = ct.isArray(n))) ? (i ? (i = !1, a = t && ct.isArray(t) ? t : []) : a = t && ct.isPlainObject(t) ? t : {},
                                o[s] = ct.extend(c, a, n)) : n !== e && (o[s] = n));
                return o
            },
            ct.extend({
                expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
                noConflict: function(e) {
                    return t.$ === ct && (t.$ = Z),
                        e && t.jQuery === ct && (t.jQuery = K),
                        ct
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ct.readyWait++ : ct.ready(!0)
                },
                ready: function(t) {
                    if (t === !0 ? !--ct.readyWait : !ct.isReady) {
                        if (!J.body) return setTimeout(ct.ready);
                        ct.isReady = !0,
                            t !== !0 && --ct.readyWait > 0 || (V.resolveWith(J, [ct]), ct.fn.trigger && ct(J).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(t) {
                    return "function" === ct.type(t)
                },
                isArray: Array.isArray ||
                    function(t) {
                        return "array" === ct.type(t)
                    },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[ot.call(t)] || "object" : typeof t
                },
                isPlainObject: function(t) {
                    var i;
                    if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    if (ct.support.ownLast)
                        for (i in t) return lt.call(t, i);
                    for (i in t);
                    return i === e || lt.call(t, i)
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                error: function(t) {
                    throw Error(t)
                },
                parseHTML: function(t, e, i) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && (i = e, e = !1),
                        e = e || J;
                    var n = gt.exec(t),
                        s = !i && [];
                    return n ? [e.createElement(n[1])] : (n = ct.buildFragment([t], e, s), s && ct(s).remove(), ct.merge([], n.childNodes))
                },
                parseJSON: function(i) {
                    return t.JSON && t.JSON.parse ? t.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = ct.trim(i), i && mt.test(i.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + i)() : (ct.error("Invalid JSON: " + i), e)
                },
                parseXML: function(i) {
                    var n, s;
                    if (!i || "string" != typeof i) return null;
                    try {
                        t.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
                    } catch (r) {
                        n = e
                    }
                    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + i),
                        n
                },
                noop: function() {},
                globalEval: function(e) {
                    e && ct.trim(e) && (t.execScript ||
                        function(e) {
                            t.eval.call(t, e)
                        })(e)
                },
                camelCase: function(t) {
                    return t.replace(_t, "ms-").replace(wt, xt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, n) {
                    var s, r = 0,
                        a = t.length,
                        o = i(t);
                    if (n) {
                        if (o)
                            for (; a > r && (s = e.apply(t[r], n), s !== !1); r++);
                        else
                            for (r in t)
                                if (s = e.apply(t[r], n), s === !1) break
                    } else if (o)
                        for (; a > r && (s = e.call(t[r], r, t[r]), s !== !1); r++);
                    else
                        for (r in t)
                            if (s = e.call(t[r], r, t[r]), s === !1) break;
                    return t
                },
                trim: ut && !ut.call("\ufeffÂ ") ?
                    function(t) {
                        return null == t ? "" : ut.call(t)
                    } : function(t) {
                        return null == t ? "" : (t + "").replace(pt, "")
                    },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (i(Object(t)) ? ct.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)),
                        n
                },
                inArray: function(t, e, i) {
                    var n;
                    if (e) {
                        if (at) return at.call(e, t, i);
                        for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                            if (i in e && e[i] === t) return i
                    }
                    return -1
                },
                merge: function(t, i) {
                    var n = i.length,
                        s = t.length,
                        r = 0;
                    if ("number" == typeof n)
                        for (; n > r; r++) t[s++] = i[r];
                    else
                        for (; i[r] !== e;) t[s++] = i[r++];
                    return t.length = s,
                        t
                },
                grep: function(t, e, i) {
                    var n, s = [],
                        r = 0,
                        a = t.length;
                    for (i = !!i; a > r; r++) n = !!e(t[r], r),
                        i !== n && s.push(t[r]);
                    return s
                },
                map: function(t, e, n) {
                    var s, r = 0,
                        a = t.length,
                        o = i(t),
                        l = [];
                    if (o)
                        for (; a > r; r++) s = e(t[r], r, n),
                            null != s && (l[l.length] = s);
                    else
                        for (r in t) s = e(t[r], r, n),
                            null != s && (l[l.length] = s);
                    return nt.apply([], l)
                },
                guid: 1,
                proxy: function(t, i) {
                    var n, s, r;
                    return "string" == typeof i && (r = t[i], i = t, t = r),
                        ct.isFunction(t) ? (n = rt.call(arguments, 2), s = function() {
                                return t.apply(i || this, n.concat(rt.call(arguments)))
                            },
                            s.guid = t.guid = t.guid || ct.guid++, s) : e
                },
                access: function(t, i, n, s, r, a, o) {
                    var l = 0,
                        u = t.length,
                        c = null == n;
                    if ("object" === ct.type(n)) {
                        r = !0;
                        for (l in n) ct.access(t, i, l, n[l], !0, a, o)
                    } else if (s !== e && (r = !0, ct.isFunction(s) || (o = !0), c && (o ? (i.call(t, s), i = null) : (c = i, i = function(t, e, i) {
                            return c.call(ct(t), i)
                        })), i))
                        for (; u > l; l++) i(t[l], n, o ? s : s.call(t[l], l, i(t[l], n)));
                    return r ? t : c ? i.call(t) : u ? i(t[0], n) : a
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(t, e, i, n) {
                    var s, r, a = {};
                    for (r in e) a[r] = t.style[r],
                        t.style[r] = e[r];
                    s = i.apply(t, n || []);
                    for (r in e) t.style[r] = a[r];
                    return s
                }
            }),
            ct.ready.promise = function(e) {
                if (!V)
                    if (V = ct.Deferred(), "complete" === J.readyState) setTimeout(ct.ready);
                    else if (J.addEventListener) J.addEventListener("DOMContentLoaded", Ct, !1),
                    t.addEventListener("load", Ct, !1);
                else {
                    J.attachEvent("onreadystatechange", Ct),
                        t.attachEvent("onload", Ct);
                    var i = !1;
                    try {
                        i = null == t.frameElement && J.documentElement
                    } catch (n) {}
                    i && i.doScroll &&
                        function s() {
                            if (!ct.isReady) {
                                try {
                                    i.doScroll("left")
                                } catch (t) {
                                    return setTimeout(s, 50)
                                }
                                kt(),
                                    ct.ready()
                            }
                        }()
                }
                return V.promise(e)
            },
            ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
                function(t, e) {
                    tt["[object " + e + "]"] = e.toLowerCase()
                }),
            X = ct(J),
            function(t, e) {
                function i(t, e, i, n) {
                    var s, r, a, o, l, u, c, h, f, g;
                    if ((e ? e.ownerDocument || e : W) !== M && I(e), e = e || M, i = i || [], !t || "string" != typeof t) return i;
                    if (1 !== (o = e.nodeType) && 9 !== o) return [];
                    if (L && !n) {
                        if (s = bt.exec(t))
                            if (a = s[1]) {
                                if (9 === o) {
                                    if (r = e.getElementById(a), !r || !r.parentNode) return i;
                                    if (r.id === a) return i.push(r),
                                        i
                                } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && H(e, r) && r.id === a) return i.push(r),
                                    i
                            } else {
                                if (s[2]) return tt.apply(i, e.getElementsByTagName(t)),
                                    i;
                                if ((a = s[3]) && C.getElementsByClassName && e.getElementsByClassName) return tt.apply(i, e.getElementsByClassName(a)),
                                    i
                            }
                        if (C.qsa && (!O || !O.test(t))) {
                            if (h = c = $, f = e, g = 9 === o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                                for (u = d(t), (c = e.getAttribute("id")) ? h = c.replace(xt, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + p(u[l]);
                                f = pt.test(t) && e.parentNode || e,
                                    g = u.join(",")
                            }
                            if (g) try {
                                return tt.apply(i, f.querySelectorAll(g)),
                                    i
                            } catch (m) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return w(t.replace(ut, "$1"), e, i, n)
                }

                function n() {
                    function t(i, n) {
                        return e.push(i += " ") > E.cacheLength && delete t[e.shift()],
                            t[i] = n
                    }
                    var e = [];
                    return t
                }

                function s(t) {
                    return t[$] = !0,
                        t
                }

                function r(t) {
                    var e = M.createElement("div");
                    try {
                        return !!t(e)
                    } catch (i) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e),
                            e = null
                    }
                }

                function a(t, e) {
                    for (var i = t.split("|"), n = t.length; n--;) E.attrHandle[i[n]] = e
                }

                function o(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return "input" === i && e.type === t
                    }
                }

                function u(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function c(t) {
                    return s(function(e) {
                        return e = +e,
                            s(function(i, n) {
                                for (var s, r = t([], i.length, e), a = r.length; a--;) i[s = r[a]] && (i[s] = !(n[s] = i[s]))
                            })
                    })
                }

                function h() {}

                function d(t, e) {
                    var n, s, r, a, o, l, u, c = q[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (o = t, l = [], u = E.preFilter; o;) {
                        (!n || (s = ht.exec(o))) && (s && (o = o.slice(s[0].length) || o), l.push(r = [])),
                        n = !1,
                            (s = dt.exec(o)) && (n = s.shift(), r.push({
                                value: n,
                                type: s[0].replace(ut, " ")
                            }), o = o.slice(n.length));
                        for (a in E.filter) !(s = vt[a].exec(o)) || u[a] && !(s = u[a](s)) || (n = s.shift(), r.push({
                            value: n,
                            type: a,
                            matches: s
                        }), o = o.slice(n.length));
                        if (!n) break
                    }
                    return e ? o.length : o ? i.error(t) : q(t, l).slice(0)
                }

                function p(t) {
                    for (var e = 0,
                            i = t.length,
                            n = ""; i > e; e++) n += t[e].value;
                    return n
                }

                function f(t, e, i) {
                    var n = e.dir,
                        s = i && "parentNode" === n,
                        r = F++;
                    return e.first ?
                        function(e, i, r) {
                            for (; e = e[n];)
                                if (1 === e.nodeType || s) return t(e, i, r)
                        } : function(e, i, a) {
                            var o, l, u, c = z + " " + r;
                            if (a) {
                                for (; e = e[n];)
                                    if ((1 === e.nodeType || s) && t(e, i, a)) return !0
                            } else
                                for (; e = e[n];)
                                    if (1 === e.nodeType || s)
                                        if (u = e[$] || (e[$] = {}), (l = u[n]) && l[0] === c) {
                                            if ((o = l[1]) === !0 || o === k) return o === !0
                                        } else if (l = u[n] = [c], l[1] = t(e, i, a) || k, l[1] === !0) return !0
                        }
                }

                function g(t) {
                    return t.length > 1 ?
                        function(e, i, n) {
                            for (var s = t.length; s--;)
                                if (!t[s](e, i, n)) return !1;
                            return !0
                        } : t[0]
                }

                function m(t, e, i, n, s) {
                    for (var r, a = [], o = 0, l = t.length, u = null != e; l > o; o++)(r = t[o]) && (!i || i(r, n, s)) && (a.push(r), u && e.push(o));
                    return a
                }

                function v(t, e, i, n, r, a) {
                    return n && !n[$] && (n = v(n)),
                        r && !r[$] && (r = v(r, a)),
                        s(function(s, a, o, l) {
                            var u, c, h, d = [],
                                p = [],
                                f = a.length,
                                g = s || _(e || "*", o.nodeType ? [o] : o, []),
                                v = !t || !s && e ? g : m(g, d, t, o, l),
                                y = i ? r || (s ? t : f || n) ? [] : a : v;
                            if (i && i(v, y, o, l), n)
                                for (u = m(y, p), n(u, [], o, l), c = u.length; c--;)(h = u[c]) && (y[p[c]] = !(v[p[c]] = h));
                            if (s) {
                                if (r || t) {
                                    if (r) {
                                        for (u = [], c = y.length; c--;)(h = y[c]) && u.push(v[c] = h);
                                        r(null, y = [], u, l)
                                    }
                                    for (c = y.length; c--;)(h = y[c]) && (u = r ? it.call(s, h) : d[c]) > -1 && (s[u] = !(a[u] = h))
                                }
                            } else y = m(y === a ? y.splice(f, y.length) : y),
                                r ? r(null, a, y, l) : tt.apply(a, y)
                        })
                }

                function y(t) {
                    for (var e, i, n, s = t.length,
                            r = E.relative[t[0].type], a = r || E.relative[" "], o = r ? 1 : 0, l = f(function(t) {
                                    return t === e
                                },
                                a, !0), u = f(function(t) {
                                    return it.call(e, t) > -1
                                },
                                a, !0), c = [function(t, i, n) {
                                return !r && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
                            }]; s > o; o++)
                        if (i = E.relative[t[o].type]) c = [f(g(c), i)];
                        else {
                            if (i = E.filter[t[o].type].apply(null, t[o].matches), i[$]) {
                                for (n = ++o; s > n && !E.relative[t[n].type]; n++);
                                return v(o > 1 && g(c), o > 1 && p(t.slice(0, o - 1).concat({
                                    value: " " === t[o - 2].type ? "*" : ""
                                })).replace(ut, "$1"), i, n > o && y(t.slice(o, n)), s > n && y(t = t.slice(n)), s > n && p(t))
                            }
                            c.push(i)
                        }
                    return g(c)
                }

                function b(t, e) {
                    var n = 0,
                        r = e.length > 0,
                        a = t.length > 0,
                        o = function(s, o, l, u, c) {
                            var h, d, p, f = [],
                                g = 0,
                                v = "0",
                                y = s && [],
                                b = null != c,
                                _ = A,
                                w = s || a && E.find.TAG("*", c && o.parentNode || o),
                                x = z += null == _ ? 1 : Math.random() || .1;
                            for (b && (A = o !== M && o, k = n); null != (h = w[v]); v++) {
                                if (a && h) {
                                    for (d = 0; p = t[d++];)
                                        if (p(h, o, l)) {
                                            u.push(h);
                                            break
                                        }
                                    b && (z = x, k = ++n)
                                }
                                r && ((h = !p && h) && g--, s && y.push(h))
                            }
                            if (g += v, r && v !== g) {
                                for (d = 0; p = e[d++];) p(y, f, o, l);
                                if (s) {
                                    if (g > 0)
                                        for (; v--;) y[v] || f[v] || (f[v] = K.call(u));
                                    f = m(f)
                                }
                                tt.apply(u, f),
                                    b && !s && f.length > 0 && g + e.length > 1 && i.uniqueSort(u)
                            }
                            return b && (z = x, A = _),
                                y
                        };
                    return r ? s(o) : o
                }

                function _(t, e, n) {
                    for (var s = 0,
                            r = e.length; r > s; s++) i(t, e[s], n);
                    return n
                }

                function w(t, e, i, n) {
                    var s, r, a, o, l, u = d(t);
                    if (!n && 1 === u.length) {
                        if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && C.getById && 9 === e.nodeType && L && E.relative[r[1].type]) {
                            if (e = (E.find.ID(a.matches[0].replace(Ct, kt), e) || [])[0], !e) return i;
                            t = t.slice(r.shift().value.length)
                        }
                        for (s = vt.needsContext.test(t) ? 0 : r.length; s-- && (a = r[s], !E.relative[o = a.type]);)
                            if ((l = E.find[o]) && (n = l(a.matches[0].replace(Ct, kt), pt.test(r[0].type) && e.parentNode || e))) {
                                if (r.splice(s, 1), t = n.length && p(r), !t) return tt.apply(i, n),
                                    i;
                                break
                            }
                    }
                    return P(t, u)(n, e, !L, i, pt.test(t)),
                        i
                }
                var x, C, k, E, S, T, P, A, D, I, M, N, L, O, j, R, H, $ = "sizzle" + -new Date,
                    W = t.document,
                    z = 0,
                    F = 0,
                    Y = n(),
                    q = n(),
                    B = n(),
                    V = !1,
                    X = function(t, e) {
                        return t === e ? (V = !0, 0) : 0
                    },
                    Q = typeof e,
                    U = 1 << 31,
                    J = {}.hasOwnProperty,
                    G = [],
                    K = G.pop,
                    Z = G.push,
                    tt = G.push,
                    et = G.slice,
                    it = G.indexOf ||
                    function(t) {
                        for (var e = 0,
                                i = this.length; i > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    st = "[\\x20\\t\\r\\n\\f]",
                    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    at = rt.replace("w", "w#"),
                    ot = "\\[" + st + "*(" + rt + ")" + st + "*(?:([*^$|!~]?=)" + st + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + st + "*\\]",
                    lt = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)",
                    ut = RegExp("^" + st + "+|((?:^|[^\\\\])(?:\\\\.)*)" + st + "+$", "g"),
                    ht = RegExp("^" + st + "*," + st + "*"),
                    dt = RegExp("^" + st + "*([>+~]|" + st + ")" + st + "*"),
                    pt = RegExp(st + "*[+~]"),
                    ft = RegExp("=" + st + "*([^\\]'\"]*)" + st + "*\\]", "g"),
                    gt = RegExp(lt),
                    mt = RegExp("^" + at + "$"),
                    vt = {
                        ID: RegExp("^#(" + rt + ")"),
                        CLASS: RegExp("^\\.(" + rt + ")"),
                        TAG: RegExp("^(" + rt.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + ot),
                        PSEUDO: RegExp("^" + lt),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + st + "*(even|odd|(([+-]|)(\\d*)n|)" + st + "*(?:([+-]|)" + st + "*(\\d+)|))" + st + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + nt + ")$", "i"),
                        needsContext: RegExp("^" + st + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + st + "*((?:-\\d)?\\d*)" + st + "*\\)|)(?=[^-]|$)", "i")
                    },
                    yt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    _t = /^(?:input|select|textarea|button)$/i,
                    wt = /^h\d$/i,
                    xt = /'|\\/g,
                    Ct = RegExp("\\\\([\\da-f]{1,6}" + st + "?|(" + st + ")|.)", "ig"),
                    kt = function(t, e, i) {
                        var n = "0x" + e - 65536;
                        return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                    };
                try {
                    tt.apply(G = et.call(W.childNodes), W.childNodes),
                        G[W.childNodes.length].nodeType
                } catch (Et) {
                    tt = {
                        apply: G.length ?
                            function(t, e) {
                                Z.apply(t, et.call(e))
                            } : function(t, e) {
                                for (var i = t.length,
                                        n = 0; t[i++] = e[n++];);
                                t.length = i - 1
                            }
                    }
                }
                T = i.isXML = function(t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return e ? "HTML" !== e.nodeName : !1
                    },
                    C = i.support = {},
                    I = i.setDocument = function(t) {
                        var i = t ? t.ownerDocument || t : W,
                            n = i.defaultView;
                        return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, N = i.documentElement, L = !T(i), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload",
                                function() {
                                    I()
                                }), C.attributes = r(function(t) {
                                return t.className = "i", !t.getAttribute("className")
                            }), C.getElementsByTagName = r(function(t) {
                                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                            }), C.getElementsByClassName = r(function(t) {
                                return t.innerHTML = "<div class='a'></div><div class='a i'></div>",
                                    t.firstChild.className = "i",
                                    2 === t.getElementsByClassName("i").length
                            }), C.getById = r(function(t) {
                                return N.appendChild(t).id = $, !i.getElementsByName || !i.getElementsByName($).length
                            }), C.getById ? (E.find.ID = function(t, e) {
                                    if (typeof e.getElementById !== Q && L) {
                                        var i = e.getElementById(t);
                                        return i && i.parentNode ? [i] : []
                                    }
                                },
                                E.filter.ID = function(t) {
                                    var e = t.replace(Ct, kt);
                                    return function(t) {
                                        return t.getAttribute("id") === e
                                    }
                                }) : (delete E.find.ID, E.filter.ID = function(t) {
                                var e = t.replace(Ct, kt);
                                return function(t) {
                                    var i = typeof t.getAttributeNode !== Q && t.getAttributeNode("id");
                                    return i && i.value === e
                                }
                            }), E.find.TAG = C.getElementsByTagName ?
                            function(t, i) {
                                return typeof i.getElementsByTagName !== Q ? i.getElementsByTagName(t) : e
                            } : function(t, e) {
                                var i, n = [],
                                    s = 0,
                                    r = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                                    return n
                                }
                                return r
                            },
                            E.find.CLASS = C.getElementsByClassName &&
                            function(t, i) {
                                return typeof i.getElementsByClassName !== Q && L ? i.getElementsByClassName(t) : e
                            },
                            j = [], O = [], (C.qsa = yt.test(i.querySelectorAll)) && (r(function(t) {
                                t.innerHTML = "<select><option selected=''></option></select>",
                                    t.querySelectorAll("[selected]").length || O.push("\\[" + st + "*(?:value|" + nt + ")"),
                                    t.querySelectorAll(":checked").length || O.push(":checked")
                            }), r(function(t) {
                                var e = i.createElement("input");
                                e.setAttribute("type", "hidden"),
                                    t.appendChild(e).setAttribute("t", ""),
                                    t.querySelectorAll("[t^='']").length && O.push("[*^$]=" + st + "*(?:''|\"\")"),
                                    t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                                    t.querySelectorAll("*,:x"),
                                    O.push(",.*:")
                            })), (C.matchesSelector = yt.test(R = N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                                C.disconnectedMatch = R.call(t, "div"),
                                    R.call(t, "[s!='']:x"),
                                    j.push("!=", lt)
                            }), O = O.length && RegExp(O.join("|")), j = j.length && RegExp(j.join("|")), H = yt.test(N.contains) || N.compareDocumentPosition ?
                            function(t, e) {
                                var i = 9 === t.nodeType ? t.documentElement : t,
                                    n = e && e.parentNode;
                                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                            } : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode;)
                                        if (e === t) return !0;
                                return !1
                            },
                            X = N.compareDocumentPosition ?
                            function(t, e) {
                                if (t === e) return V = !0,
                                    0;
                                var n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                                return n ? 1 & n || !C.sortDetached && e.compareDocumentPosition(t) === n ? t === i || H(W, t) ? -1 : e === i || H(W, e) ? 1 : D ? it.call(D, t) - it.call(D, e) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                            } : function(t, e) {
                                var n, s = 0,
                                    r = t.parentNode,
                                    a = e.parentNode,
                                    l = [t],
                                    u = [e];
                                if (t === e) return V = !0,
                                    0;
                                if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : D ? it.call(D, t) - it.call(D, e) : 0;
                                if (r === a) return o(t, e);
                                for (n = t; n = n.parentNode;) l.unshift(n);
                                for (n = e; n = n.parentNode;) u.unshift(n);
                                for (; l[s] === u[s];) s++;
                                return s ? o(l[s], u[s]) : l[s] === W ? -1 : u[s] === W ? 1 : 0
                            },
                            i) : M
                    },
                    i.matches = function(t, e) {
                        return i(t, null, null, e)
                    },
                    i.matchesSelector = function(t, e) {
                        if ((t.ownerDocument || t) !== M && I(t), e = e.replace(ft, "='$1']"), !(!C.matchesSelector || !L || j && j.test(e) || O && O.test(e))) try {
                            var n = R.call(t, e);
                            if (n || C.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                        } catch (s) {}
                        return i(e, M, null, [t]).length > 0
                    },
                    i.contains = function(t, e) {
                        return (t.ownerDocument || t) !== M && I(t),
                            H(t, e)
                    },
                    i.attr = function(t, i) {
                        (t.ownerDocument || t) !== M && I(t);
                        var n = E.attrHandle[i.toLowerCase()],
                            s = n && J.call(E.attrHandle, i.toLowerCase()) ? n(t, i, !L) : e;
                        return s === e ? C.attributes || !L ? t.getAttribute(i) : (s = t.getAttributeNode(i)) && s.specified ? s.value : null : s
                    },
                    i.error = function(t) {
                        throw Error("Syntax error, unrecognized expression: " + t)
                    },
                    i.uniqueSort = function(t) {
                        var e, i = [],
                            n = 0,
                            s = 0;
                        if (V = !C.detectDuplicates, D = !C.sortStable && t.slice(0), t.sort(X), V) {
                            for (; e = t[s++];) e === t[s] && (n = i.push(s));
                            for (; n--;) t.splice(i[n], 1)
                        }
                        return t
                    },
                    S = i.getText = function(t) {
                        var e, i = "",
                            n = 0,
                            s = t.nodeType;
                        if (s) {
                            if (1 === s || 9 === s || 11 === s) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
                            } else if (3 === s || 4 === s) return t.nodeValue
                        } else
                            for (; e = t[n]; n++) i += S(e);
                        return i
                    },
                    E = i.selectors = {
                        cacheLength: 50,
                        createPseudo: s,
                        match: vt,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(Ct, kt),
                                    t[3] = (t[4] || t[5] || "").replace(Ct, kt),
                                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                    t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(),
                                    "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]),
                                    t
                            },
                            PSEUDO: function(t) {
                                var i, n = !t[5] && t[2];
                                return vt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && gt.test(n) && (i = d(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), t[2] = n.slice(0, i)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(Ct, kt).toLowerCase();
                                return "*" === t ?
                                    function() {
                                        return !0
                                    } : function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                            },
                            CLASS: function(t) {
                                var e = Y[t + " "];
                                return e || (e = RegExp("(^|" + st + ")" + t + "(" + st + "|$)")) && Y(t,
                                    function(t) {
                                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Q && t.getAttribute("class") || "")
                                    })
                            },
                            ATTR: function(t, e, n) {
                                return function(s) {
                                    var r = i.attr(s, t);
                                    return null == r ? "!=" === e : e ? (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r + " ").indexOf(n) > -1 : "|=" === e ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0;
                                }
                            },
                            CHILD: function(t, e, i, n, s) {
                                var r = "nth" !== t.slice(0, 3),
                                    a = "last" !== t.slice(-4),
                                    o = "of-type" === e;
                                return 1 === n && 0 === s ?
                                    function(t) {
                                        return !!t.parentNode
                                    } : function(e, i, l) {
                                        var u, c, h, d, p, f, g = r !== a ? "nextSibling" : "previousSibling",
                                            m = e.parentNode,
                                            v = o && e.nodeName.toLowerCase(),
                                            y = !l && !o;
                                        if (m) {
                                            if (r) {
                                                for (; g;) {
                                                    for (h = e; h = h[g];)
                                                        if (o ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                    f = g = "only" === t && !f && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                                for (c = m[$] || (m[$] = {}), u = c[t] || [], p = u[0] === z && u[1], d = u[0] === z && u[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (d = p = 0) || f.pop();)
                                                    if (1 === h.nodeType && ++d && h === e) {
                                                        c[t] = [z, p, d];
                                                        break
                                                    }
                                            } else if (y && (u = (e[$] || (e[$] = {}))[t]) && u[0] === z) d = u[1];
                                            else
                                                for (;
                                                    (h = ++p && h && h[g] || (d = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[$] || (h[$] = {}))[t] = [z, d]), h !== e)););
                                            return d -= s,
                                                d === n || 0 === d % n && d / n >= 0
                                        }
                                    }
                            },
                            PSEUDO: function(t, e) {
                                var n, r = E.pseudos[t] || E.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                                return r[$] ? r(e) : r.length > 1 ? (n = [t, t, "", e], E.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function(t, i) {
                                    for (var n, s = r(t, e), a = s.length; a--;) n = it.call(t, s[a]),
                                        t[n] = !(i[n] = s[a])
                                }) : function(t) {
                                    return r(t, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: s(function(t) {
                                var e = [],
                                    i = [],
                                    n = P(t.replace(ut, "$1"));
                                return n[$] ? s(function(t, e, i, s) {
                                    for (var r, a = n(t, null, s, []), o = t.length; o--;)(r = a[o]) && (t[o] = !(e[o] = r))
                                }) : function(t, s, r) {
                                    return e[0] = t,
                                        n(e, null, r, i), !i.pop()
                                }
                            }),
                            has: s(function(t) {
                                return function(e) {
                                    return i(t, e).length > 0
                                }
                            }),
                            contains: s(function(t) {
                                return function(e) {
                                    return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                                }
                            }),
                            lang: s(function(t) {
                                return mt.test(t || "") || i.error("unsupported lang: " + t),
                                    t = t.replace(Ct, kt).toLowerCase(),
                                    function(e) {
                                        var i;
                                        do
                                            if (i = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(),
                                                i === t || 0 === i.indexOf(t + "-");
                                        while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var i = t.location && t.location.hash;
                                return i && i.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === N
                            },
                            focus: function(t) {
                                return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: function(t) {
                                return t.disabled === !1
                            },
                            disabled: function(t) {
                                return t.disabled === !0
                            },
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex,
                                    t.selected === !0
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                                return !0
                            },
                            parent: function(t) {
                                return !E.pseudos.empty(t)
                            },
                            header: function(t) {
                                return wt.test(t.nodeName)
                            },
                            input: function(t) {
                                return _t.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                            },
                            first: c(function() {
                                return [0]
                            }),
                            last: c(function(t, e) {
                                return [e - 1]
                            }),
                            eq: c(function(t, e, i) {
                                return [0 > i ? i + e : i]
                            }),
                            even: c(function(t, e) {
                                for (var i = 0; e > i; i += 2) t.push(i);
                                return t
                            }),
                            odd: c(function(t, e) {
                                for (var i = 1; e > i; i += 2) t.push(i);
                                return t
                            }),
                            lt: c(function(t, e, i) {
                                for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                                return t
                            }),
                            gt: c(function(t, e, i) {
                                for (var n = 0 > i ? i + e : i; e > ++n;) t.push(n);
                                return t
                            })
                        }
                    },
                    E.pseudos.nth = E.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) E.pseudos[x] = l(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) E.pseudos[x] = u(x);
                h.prototype = E.filters = E.pseudos,
                    E.setFilters = new h,
                    P = i.compile = function(t, e) {
                        var i, n = [],
                            s = [],
                            r = B[t + " "];
                        if (!r) {
                            for (e || (e = d(t)), i = e.length; i--;) r = y(e[i]),
                                r[$] ? n.push(r) : s.push(r);
                            r = B(t, b(s, n))
                        }
                        return r
                    },
                    C.sortStable = $.split("").sort(X).join("") === $,
                    C.detectDuplicates = V,
                    I(),
                    C.sortDetached = r(function(t) {
                        return 1 & t.compareDocumentPosition(M.createElement("div"))
                    }),
                    r(function(t) {
                        return t.innerHTML = "<a href='#'></a>",
                            "#" === t.firstChild.getAttribute("href")
                    }) || a("type|href|height|width",
                        function(t, i, n) {
                            return n ? e : t.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
                        }),
                    C.attributes && r(function(t) {
                        return t.innerHTML = "<input/>",
                            t.firstChild.setAttribute("value", ""),
                            "" === t.firstChild.getAttribute("value")
                    }) || a("value",
                        function(t, i, n) {
                            return n || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
                        }),
                    r(function(t) {
                        return null == t.getAttribute("disabled")
                    }) || a(nt,
                        function(t, i, n) {
                            var s;
                            return n ? e : (s = t.getAttributeNode(i)) && s.specified ? s.value : t[i] === !0 ? i.toLowerCase() : null
                        }),
                    ct.find = i,
                    ct.expr = i.selectors,
                    ct.expr[":"] = ct.expr.pseudos,
                    ct.unique = i.uniqueSort,
                    ct.text = i.getText,
                    ct.isXMLDoc = i.isXML,
                    ct.contains = i.contains
            }(t);
        var Et = {};
        ct.Callbacks = function(t) {
                t = "string" == typeof t ? Et[t] || n(t) : ct.extend({},
                    t);
                var i, s, r, a, o, l, u = [],
                    c = !t.once && [],
                    h = function(e) {
                        for (s = t.memory && e, r = !0, o = l || 0, l = 0, a = u.length, i = !0; u && a > o; o++)
                            if (u[o].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                                s = !1;
                                break
                            }
                        i = !1,
                            u && (c ? c.length && h(c.shift()) : s ? u = [] : d.disable())
                    },
                    d = {
                        add: function() {
                            if (u) {
                                var e = u.length;
                                !
                                function n(e) {
                                    ct.each(e,
                                        function(e, i) {
                                            var s = ct.type(i);
                                            "function" === s ? t.unique && d.has(i) || u.push(i) : i && i.length && "string" !== s && n(i)
                                        })
                                }(arguments),
                                i ? a = u.length : s && (l = e, h(s))
                            }
                            return this
                        },
                        remove: function() {
                            return u && ct.each(arguments,
                                    function(t, e) {
                                        for (var n;
                                            (n = ct.inArray(e, u, n)) > -1;) u.splice(n, 1),
                                            i && (a >= n && a--, o >= n && o--)
                                    }),
                                this
                        },
                        has: function(t) {
                            return t ? ct.inArray(t, u) > -1 : !(!u || !u.length)
                        },
                        empty: function() {
                            return u = [],
                                a = 0,
                                this
                        },
                        disable: function() {
                            return u = c = s = e,
                                this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return c = e,
                                s || d.disable(),
                                this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(t, e) {
                            return !u || r && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : h(e)),
                                this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments),
                                this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return d
            },
            ct.extend({
                Deferred: function(t) {
                    var e = [
                            ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", ct.Callbacks("memory")]
                        ],
                        i = "pending",
                        n = {
                            state: function() {
                                return i
                            },
                            always: function() {
                                return s.done(arguments).fail(arguments),
                                    this
                            },
                            then: function() {
                                var t = arguments;
                                return ct.Deferred(function(i) {
                                    ct.each(e,
                                            function(e, r) {
                                                var a = r[0],
                                                    o = ct.isFunction(t[e]) && t[e];
                                                s[r[1]](function() {
                                                    var t = o && o.apply(this, arguments);
                                                    t && ct.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                                })
                                            }),
                                        t = null
                                }).promise()
                            },
                            promise: function(t) {
                                return null != t ? ct.extend(t, n) : n
                            }
                        },
                        s = {};
                    return n.pipe = n.then,
                        ct.each(e,
                            function(t, r) {
                                var a = r[2],
                                    o = r[3];
                                n[r[1]] = a.add,
                                    o && a.add(function() {
                                            i = o
                                        },
                                        e[1 ^ t][2].disable, e[2][2].lock),
                                    s[r[0]] = function() {
                                        return s[r[0] + "With"](this === s ? n : this, arguments),
                                            this
                                    },
                                    s[r[0] + "With"] = a.fireWith
                            }),
                        n.promise(s),
                        t && t.call(s, s),
                        s
                },
                when: function(t) {
                    var e, i, n, s = 0,
                        r = rt.call(arguments),
                        a = r.length,
                        o = 1 !== a || t && ct.isFunction(t.promise) ? a : 0,
                        l = 1 === o ? t : ct.Deferred(),
                        u = function(t, i, n) {
                            return function(s) {
                                i[t] = this,
                                    n[t] = arguments.length > 1 ? rt.call(arguments) : s,
                                    n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
                            }
                        };
                    if (a > 1)
                        for (e = Array(a), i = Array(a), n = Array(a); a > s; s++) r[s] && ct.isFunction(r[s].promise) ? r[s].promise().done(u(s, n, r)).fail(l.reject).progress(u(s, i, e)) : --o;
                    return o || l.resolveWith(n, r),
                        l.promise()
                }
            }),
            ct.support = function(e) {
                var i, n, s, r, a, o, l, u, c, h = J.createElement("div");
                if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = h.getElementsByTagName("*") || [], n = h.getElementsByTagName("a")[0], !n || !n.style || !i.length) return e;
                r = J.createElement("select"),
                    o = r.appendChild(J.createElement("option")),
                    s = h.getElementsByTagName("input")[0],
                    n.style.cssText = "top:1px;float:left;opacity:.5",
                    e.getSetAttribute = "t" !== h.className,
                    e.leadingWhitespace = 3 === h.firstChild.nodeType,
                    e.tbody = !h.getElementsByTagName("tbody").length,
                    e.htmlSerialize = !!h.getElementsByTagName("link").length,
                    e.style = /top/.test(n.getAttribute("style")),
                    e.hrefNormalized = "/a" === n.getAttribute("href"),
                    e.opacity = /^0.5/.test(n.style.opacity),
                    e.cssFloat = !!n.style.cssFloat,
                    e.checkOn = !!s.value,
                    e.optSelected = o.selected,
                    e.enctype = !!J.createElement("form").enctype,
                    e.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML,
                    e.inlineBlockNeedsLayout = !1,
                    e.shrinkWrapBlocks = !1,
                    e.pixelPosition = !1,
                    e.deleteExpando = !0,
                    e.noCloneEvent = !0,
                    e.reliableMarginRight = !0,
                    e.boxSizingReliable = !0,
                    s.checked = !0,
                    e.noCloneChecked = s.cloneNode(!0).checked,
                    r.disabled = !0,
                    e.optDisabled = !o.disabled;
                try {
                    delete h.test
                } catch (d) {
                    e.deleteExpando = !1
                }
                s = J.createElement("input"),
                    s.setAttribute("value", ""),
                    e.input = "" === s.getAttribute("value"),
                    s.value = "t",
                    s.setAttribute("type", "radio"),
                    e.radioValue = "t" === s.value,
                    s.setAttribute("checked", "t"),
                    s.setAttribute("name", "t"),
                    a = J.createDocumentFragment(),
                    a.appendChild(s),
                    e.appendChecked = s.checked,
                    e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    h.attachEvent && (h.attachEvent("onclick",
                        function() {
                            e.noCloneEvent = !1
                        }), h.cloneNode(!0).click());
                for (c in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) h.setAttribute(l = "on" + c, "t"),
                    e[c + "Bubbles"] = l in t || h.attributes[l].expando === !1;
                h.style.backgroundClip = "content-box",
                    h.cloneNode(!0).style.backgroundClip = "",
                    e.clearCloneStyle = "content-box" === h.style.backgroundClip;
                for (c in ct(e)) break;
                return e.ownLast = "0" !== c,
                    ct(function() {
                        var i, n, s, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                            a = J.getElementsByTagName("body")[0];
                        a && (i = J.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(i).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = h.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === s[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(a, null != a.style.zoom ? {
                                zoom: 1
                            } : {},
                            function() {
                                e.boxSizing = 4 === h.offsetWidth
                            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(h, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(h, null) || {
                            width: "4px"
                        }).width, n = h.appendChild(J.createElement("div")), n.style.cssText = h.style.cssText = r, n.style.marginRight = n.style.width = "0", h.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof h.style.zoom !== Q && (h.innerHTML = "", h.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== h.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(i), i = h = s = n = null)
                    }),
                    i = r = a = o = n = s = null,
                    e
            }({});
        var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Tt = /([A-Z])/g;
        ct.extend({
                cache: {},
                noData: {
                    applet: !0,
                    embed: !0,
                    object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(t) {
                    return t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando], !!t && !o(t)
                },
                data: function(t, e, i) {
                    return s(t, e, i)
                },
                removeData: function(t, e) {
                    return r(t, e)
                },
                _data: function(t, e, i) {
                    return s(t, e, i, !0)
                },
                _removeData: function(t, e) {
                    return r(t, e, !0)
                },
                acceptData: function(t) {
                    if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                    var e = t.nodeName && ct.noData[t.nodeName.toLowerCase()];
                    return !e || e !== !0 && t.getAttribute("classid") === e
                }
            }),
            ct.fn.extend({
                data: function(t, i) {
                    var n, s, r = null,
                        o = 0,
                        l = this[0];
                    if (t === e) {
                        if (this.length && (r = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                            for (n = l.attributes; n.length > o; o++) s = n[o].name,
                                0 === s.indexOf("data-") && (s = ct.camelCase(s.slice(5)), a(l, s, r[s]));
                            ct._data(l, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof t ? this.each(function() {
                        ct.data(this, t)
                    }) : arguments.length > 1 ? this.each(function() {
                        ct.data(this, t, i)
                    }) : l ? a(l, t, ct.data(l, t)) : null
                },
                removeData: function(t) {
                    return this.each(function() {
                        ct.removeData(this, t)
                    })
                }
            }),
            ct.extend({
                queue: function(t, i, n) {
                    var s;
                    return t ? (i = (i || "fx") + "queue", s = ct._data(t, i), n && (!s || ct.isArray(n) ? s = ct._data(t, i, ct.makeArray(n)) : s.push(n)), s || []) : e
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var i = ct.queue(t, e),
                        n = i.length,
                        s = i.shift(),
                        r = ct._queueHooks(t, e),
                        a = function() {
                            ct.dequeue(t, e)
                        };
                    "inprogress" === s && (s = i.shift(), n--),
                        s && ("fx" === e && i.unshift("inprogress"), delete r.stop, s.call(t, a, r)), !n && r && r.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var i = e + "queueHooks";
                    return ct._data(t, i) || ct._data(t, i, {
                        empty: ct.Callbacks("once memory").add(function() {
                            ct._removeData(t, e + "queue"),
                                ct._removeData(t, i)
                        })
                    })
                }
            }),
            ct.fn.extend({
                queue: function(t, i) {
                    var n = 2;
                    return "string" != typeof t && (i = t, t = "fx", n--),
                        n > arguments.length ? ct.queue(this[0], t) : i === e ? this : this.each(function() {
                            var e = ct.queue(this, t, i);
                            ct._queueHooks(this, t),
                                "fx" === t && "inprogress" !== e[0] && ct.dequeue(this, t)
                        })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        ct.dequeue(this, t)
                    })
                },
                delay: function(t, e) {
                    return t = ct.fx ? ct.fx.speeds[t] || t : t,
                        e = e || "fx",
                        this.queue(e,
                            function(e, i) {
                                var n = setTimeout(e, t);
                                i.stop = function() {
                                    clearTimeout(n)
                                }
                            })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, i) {
                    var n, s = 1,
                        r = ct.Deferred(),
                        a = this,
                        o = this.length,
                        l = function() {
                            --s || r.resolveWith(a, [a])
                        };
                    for ("string" != typeof t && (i = t, t = e), t = t || "fx"; o--;) n = ct._data(a[o], t + "queueHooks"),
                        n && n.empty && (s++, n.empty.add(l));
                    return l(),
                        r.promise(i)
                }
            });
        var Pt, At, Dt = /[\t\r\n\f]/g,
            It = /\r/g,
            Mt = /^(?:input|select|textarea|button|object)$/i,
            Nt = /^(?:a|area)$/i,
            Lt = /^(?:checked|selected)$/i,
            Ot = ct.support.getSetAttribute,
            jt = ct.support.input;
        ct.fn.extend({
                attr: function(t, e) {
                    return ct.access(this, ct.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        ct.removeAttr(this, t)
                    })
                },
                prop: function(t, e) {
                    return ct.access(this, ct.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return t = ct.propFix[t] || t,
                        this.each(function() {
                            try {
                                this[t] = e,
                                    delete this[t]
                            } catch (i) {}
                        })
                },
                addClass: function(t) {
                    var e, i, n, s, r, a = 0,
                        o = this.length,
                        l = "string" == typeof t && t;
                    if (ct.isFunction(t)) return this.each(function(e) {
                        ct(this).addClass(t.call(this, e, this.className))
                    });
                    if (l)
                        for (e = (t || "").match(dt) || []; o > a; a++)
                            if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Dt, " ") : " ")) {
                                for (r = 0; s = e[r++];) 0 > n.indexOf(" " + s + " ") && (n += s + " ");
                                i.className = ct.trim(n)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e, i, n, s, r, a = 0,
                        o = this.length,
                        l = 0 === arguments.length || "string" == typeof t && t;
                    if (ct.isFunction(t)) return this.each(function(e) {
                        ct(this).removeClass(t.call(this, e, this.className))
                    });
                    if (l)
                        for (e = (t || "").match(dt) || []; o > a; a++)
                            if (i = this[a], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Dt, " ") : "")) {
                                for (r = 0; s = e[r++];)
                                    for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                                i.className = t ? ct.trim(n) : ""
                            }
                    return this
                },
                toggleClass: function(t, e) {
                    var i = typeof t;
                    return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(i) {
                        ct(this).toggleClass(t.call(this, i, this.className, e), e)
                    }) : this.each(function() {
                        if ("string" === i)
                            for (var e, n = 0,
                                    s = ct(this), r = t.match(dt) || []; e = r[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                        else(i === Q || "boolean" === i) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ct._data(this, "__className__") || "")
                    })
                },
                hasClass: function(t) {
                    for (var e = " " + t + " ",
                            i = 0,
                            n = this.length; n > i; i++)
                        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Dt, " ").indexOf(e) >= 0) return !0;
                    return !1
                },
                val: function(t) {
                    var i, n, s, r = this[0];
                    return arguments.length ? (s = ct.isFunction(t), this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = s ? t.call(this, i, ct(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ct.isArray(r) && (r = ct.map(r,
                            function(t) {
                                return null == t ? "" : t + ""
                            })), n = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, r, "value") !== e || (this.value = r))
                    })) : r ? (n = ct.valHooks[r.type] || ct.valHooks[r.nodeName.toLowerCase()], n && "get" in n && (i = n.get(r, "value")) !== e ? i : (i = r.value, "string" == typeof i ? i.replace(It, "") : null == i ? "" : i)) : void 0
                }
            }),
            ct.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = ct.find.attr(t, "value");
                            return null != e ? e : t.text
                        }
                    },
                    select: {
                        get: function(t) {
                            for (var e, i, n = t.options,
                                    s = t.selectedIndex,
                                    r = "select-one" === t.type || 0 > s,
                                    a = r ? null : [], o = r ? s + 1 : n.length, l = 0 > s ? o : r ? s : 0; o > l; l++)
                                if (i = n[l], !(!i.selected && l !== s || (ct.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ct.nodeName(i.parentNode, "optgroup"))) {
                                    if (e = ct(i).val(), r) return e;
                                    a.push(e)
                                }
                            return a
                        },
                        set: function(t, e) {
                            for (var i, n, s = t.options,
                                    r = ct.makeArray(e), a = s.length; a--;) n = s[a],
                                (n.selected = ct.inArray(ct(n).val(), r) >= 0) && (i = !0);
                            return i || (t.selectedIndex = -1),
                                r
                        }
                    }
                },
                attr: function(t, i, n) {
                    var s, r, a = t.nodeType;
                    return t && 3 !== a && 8 !== a && 2 !== a ? typeof t.getAttribute === Q ? ct.prop(t, i, n) : (1 === a && ct.isXMLDoc(t) || (i = i.toLowerCase(), s = ct.attrHooks[i] || (ct.expr.match.bool.test(i) ? At : Pt)), n === e ? s && "get" in s && null !== (r = s.get(t, i)) ? r : (r = ct.find.attr(t, i), null == r ? e : r) : null !== n ? s && "set" in s && (r = s.set(t, n, i)) !== e ? r : (t.setAttribute(i, n + ""), n) : (ct.removeAttr(t, i), e)) : void 0
                },
                removeAttr: function(t, e) {
                    var i, n, s = 0,
                        r = e && e.match(dt);
                    if (r && 1 === t.nodeType)
                        for (; i = r[s++];) n = ct.propFix[i] || i,
                            ct.expr.match.bool.test(i) ? jt && Ot || !Lt.test(i) ? t[n] = !1 : t[ct.camelCase("default-" + i)] = t[n] = !1 : ct.attr(t, i, ""),
                            t.removeAttribute(Ot ? i : n)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!ct.support.radioValue && "radio" === e && ct.nodeName(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e),
                                    i && (t.value = i),
                                    e
                            }
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(t, i, n) {
                    var s, r, a, o = t.nodeType;
                    return t && 3 !== o && 8 !== o && 2 !== o ? (a = 1 !== o || !ct.isXMLDoc(t), a && (i = ct.propFix[i] || i, r = ct.propHooks[i]), n !== e ? r && "set" in r && (s = r.set(t, n, i)) !== e ? s : t[i] = n : r && "get" in r && null !== (s = r.get(t, i)) ? s : t[i]) : void 0
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = ct.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Mt.test(t.nodeName) || Nt.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                }
            }),
            At = {
                set: function(t, e, i) {
                    return e === !1 ? ct.removeAttr(t, i) : jt && Ot || !Lt.test(i) ? t.setAttribute(!Ot && ct.propFix[i] || i, i) : t[ct.camelCase("default-" + i)] = t[i] = !0,
                        i
                }
            },
            ct.each(ct.expr.match.bool.source.match(/\w+/g),
                function(t, i) {
                    var n = ct.expr.attrHandle[i] || ct.find.attr;
                    ct.expr.attrHandle[i] = jt && Ot || !Lt.test(i) ?
                        function(t, i, s) {
                            var r = ct.expr.attrHandle[i],
                                a = s ? e : (ct.expr.attrHandle[i] = e) != n(t, i, s) ? i.toLowerCase() : null;
                            return ct.expr.attrHandle[i] = r,
                                a
                        } : function(t, i, n) {
                            return n ? e : t[ct.camelCase("default-" + i)] ? i.toLowerCase() : null
                        }
                }),
            jt && Ot || (ct.attrHooks.value = {
                set: function(t, i, n) {
                    return ct.nodeName(t, "input") ? (t.defaultValue = i, e) : Pt && Pt.set(t, i, n)
                }
            }),
            Ot || (Pt = {
                    set: function(t, i, n) {
                        var s = t.getAttributeNode(n);
                        return s || t.setAttributeNode(s = t.ownerDocument.createAttribute(n)),
                            s.value = i += "",
                            "value" === n || i === t.getAttribute(n) ? i : e
                    }
                },
                ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(t, i, n) {
                    var s;
                    return n ? e : (s = t.getAttributeNode(i)) && "" !== s.value ? s.value : null
                },
                ct.valHooks.button = {
                    get: function(t, i) {
                        var n = t.getAttributeNode(i);
                        return n && n.specified ? n.value : e
                    },
                    set: Pt.set
                },
                ct.attrHooks.contenteditable = {
                    set: function(t, e, i) {
                        Pt.set(t, "" === e ? !1 : e, i)
                    }
                },
                ct.each(["width", "height"],
                    function(t, i) {
                        ct.attrHooks[i] = {
                            set: function(t, n) {
                                return "" === n ? (t.setAttribute(i, "auto"), n) : e
                            }
                        }
                    })),
            ct.support.hrefNormalized || ct.each(["href", "src"],
                function(t, e) {
                    ct.propHooks[e] = {
                        get: function(t) {
                            return t.getAttribute(e, 4)
                        }
                    }
                }),
            ct.support.style || (ct.attrHooks.style = {
                get: function(t) {
                    return t.style.cssText || e
                },
                set: function(t, e) {
                    return t.style.cssText = e + ""
                }
            }),
            ct.support.optSelected || (ct.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
                        null
                }
            }),
            ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
                function() {
                    ct.propFix[this.toLowerCase()] = this
                }),
            ct.support.enctype || (ct.propFix.enctype = "encoding"),
            ct.each(["radio", "checkbox"],
                function() {
                    ct.valHooks[this] = {
                            set: function(t, i) {
                                return ct.isArray(i) ? t.checked = ct.inArray(ct(t).val(), i) >= 0 : e
                            }
                        },
                        ct.support.checkOn || (ct.valHooks[this].get = function(t) {
                            return null === t.getAttribute("value") ? "on" : t.value
                        })
                });
        var Rt = /^(?:input|select|textarea)$/i,
            Ht = /^key/,
            $t = /^(?:mouse|contextmenu)|click/,
            Wt = /^(?:focusinfocus|focusoutblur)$/,
            zt = /^([^.]*)(?:\.(.+)|)$/;
        ct.event = {
                global: {},
                add: function(t, i, n, s, r) {
                    var a, o, l, u, c, h, d, p, f, g, m, v = ct._data(t);
                    if (v) {
                        for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = ct.guid++), (o = v.events) || (o = v.events = {}), (h = v.handle) || (h = v.handle = function(t) {
                                    return typeof ct === Q || t && ct.event.triggered === t.type ? e : ct.event.dispatch.apply(h.elem, arguments)
                                },
                                h.elem = t), i = (i || "").match(dt) || [""], l = i.length; l--;) a = zt.exec(i[l]) || [],
                            f = m = a[1],
                            g = (a[2] || "").split(".").sort(),
                            f && (c = ct.event.special[f] || {},
                                f = (r ? c.delegateType : c.bindType) || f, c = ct.event.special[f] || {},
                                d = ct.extend({
                                        type: f,
                                        origType: m,
                                        data: s,
                                        handler: n,
                                        guid: n.guid,
                                        selector: r,
                                        needsContext: r && ct.expr.match.needsContext.test(r),
                                        namespace: g.join(".")
                                    },
                                    u), (p = o[f]) || (p = o[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, s, g, h) !== !1 || (t.addEventListener ? t.addEventListener(f, h, !1) : t.attachEvent && t.attachEvent("on" + f, h))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), ct.event.global[f] = !0);
                        t = null
                    }
                },
                remove: function(t, e, i, n, s) {
                    var r, a, o, l, u, c, h, d, p, f, g, m = ct.hasData(t) && ct._data(t);
                    if (m && (c = m.events)) {
                        for (e = (e || "").match(dt) || [""], u = e.length; u--;)
                            if (o = zt.exec(e[u]) || [], p = g = o[1], f = (o[2] || "").split(".").sort(), p) {
                                for (h = ct.event.special[p] || {},
                                    p = (n ? h.delegateType : h.bindType) || p, d = c[p] || [], o = o[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--;) a = d[r], !s && g !== a.origType || i && i.guid !== a.guid || o && !o.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (d.splice(r, 1), a.selector && d.delegateCount--, h.remove && h.remove.call(t, a));
                                l && !d.length && (h.teardown && h.teardown.call(t, f, m.handle) !== !1 || ct.removeEvent(t, p, m.handle), delete c[p])
                            } else
                                for (p in c) ct.event.remove(t, p + e[u], i, n, !0);
                        ct.isEmptyObject(c) && (delete m.handle, ct._removeData(t, "events"))
                    }
                },
                trigger: function(i, n, s, r) {
                    var a, o, l, u, c, h, d, p = [s || J],
                        f = lt.call(i, "type") ? i.type : i,
                        g = lt.call(i, "namespace") ? i.namespace.split(".") : [];
                    if (l = h = s = s || J, 3 !== s.nodeType && 8 !== s.nodeType && !Wt.test(f + ct.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), o = 0 > f.indexOf(":") && "on" + f, i = i[ct.expando] ? i : new ct.Event(f, "object" == typeof i && i), i.isTrigger = r ? 2 : 3, i.namespace = g.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = s), n = null == n ? [i] : ct.makeArray(n, [i]), c = ct.event.special[f] || {},
                            r || !c.trigger || c.trigger.apply(s, n) !== !1)) {
                        if (!r && !c.noBubble && !ct.isWindow(s)) {
                            for (u = c.delegateType || f, Wt.test(u + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l),
                                h = l;
                            h === (s.ownerDocument || J) && p.push(h.defaultView || h.parentWindow || t)
                        }
                        for (d = 0;
                            (l = p[d++]) && !i.isPropagationStopped();) i.type = d > 1 ? u : c.bindType || f,
                            a = (ct._data(l, "events") || {})[i.type] && ct._data(l, "handle"),
                            a && a.apply(l, n),
                            a = o && l[o],
                            a && ct.acceptData(l) && a.apply && a.apply(l, n) === !1 && i.preventDefault();
                        if (i.type = f, !r && !i.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && ct.acceptData(s) && o && s[f] && !ct.isWindow(s)) {
                            h = s[o],
                                h && (s[o] = null),
                                ct.event.triggered = f;
                            try {
                                s[f]()
                            } catch (m) {}
                            ct.event.triggered = e,
                                h && (s[o] = h)
                        }
                        return i.result
                    }
                },
                dispatch: function(t) {
                    t = ct.event.fix(t);
                    var i, n, s, r, a, o = [],
                        l = rt.call(arguments),
                        u = (ct._data(this, "events") || {})[t.type] || [],
                        c = ct.event.special[t.type] || {};
                    if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                        for (o = ct.event.handlers.call(this, t, u), i = 0;
                            (r = o[i++]) && !t.isPropagationStopped();)
                            for (t.currentTarget = r.elem, a = 0;
                                (s = r.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, n = ((ct.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t),
                            t.result
                    }
                },
                handlers: function(t, i) {
                    var n, s, r, a, o = [],
                        l = i.delegateCount,
                        u = t.target;
                    if (l && u.nodeType && (!t.button || "click" !== t.type))
                        for (; u != this; u = u.parentNode || this)
                            if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                                for (r = [], a = 0; l > a; a++) s = i[a],
                                    n = s.selector + " ",
                                    r[n] === e && (r[n] = s.needsContext ? ct(n, this).index(u) >= 0 : ct.find(n, this, null, [u]).length),
                                    r[n] && r.push(s);
                                r.length && o.push({
                                    elem: u,
                                    handlers: r
                                })
                            }
                    return i.length > l && o.push({
                            elem: this,
                            handlers: i.slice(l)
                        }),
                        o
                },
                fix: function(t) {
                    if (t[ct.expando]) return t;
                    var e, i, n, s = t.type,
                        r = t,
                        a = this.fixHooks[s];
                    for (a || (this.fixHooks[s] = a = $t.test(s) ? this.mouseHooks : Ht.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new ct.Event(r), e = n.length; e--;) i = n[e],
                        t[i] = r[i];
                    return t.target || (t.target = r.srcElement || J),
                        3 === t.target.nodeType && (t.target = t.target.parentNode),
                        t.metaKey = !!t.metaKey,
                        a.filter ? a.filter(t, r) : t
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                            t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(t, i) {
                        var n, s, r, a = i.button,
                            o = i.fromElement;
                        return null == t.pageX && null != i.clientX && (s = t.target.ownerDocument || J, r = s.documentElement, n = s.body, t.pageX = i.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? i.toElement : o),
                            t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                            t
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== c() && this.focus) try {
                                return this.focus(), !1
                            } catch (t) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === c() && this.blur ? (this.blur(), !1) : e
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                        },
                        _default: function(t) {
                            return ct.nodeName(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            t.result !== e && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function(t, e, i, n) {
                    var s = ct.extend(new ct.Event, i, {
                        type: t,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    n ? ct.event.trigger(s, null, e) : ct.event.dispatch.call(e, s),
                        s.isDefaultPrevented() && i.preventDefault()
                }
            },
            ct.removeEvent = J.removeEventListener ?
            function(t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i, !1)
            } : function(t, e, i) {
                var n = "on" + e;
                t.detachEvent && (typeof t[n] === Q && (t[n] = null), t.detachEvent(n, i))
            },
            ct.Event = function(t, i) {
                return this instanceof ct.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, i && ct.extend(this, i), this.timeStamp = t && t.timeStamp || ct.now(), this[ct.expando] = !0, e) : new ct.Event(t, i)
            },
            ct.Event.prototype = {
                isDefaultPrevented: u,
                isPropagationStopped: u,
                isImmediatePropagationStopped: u,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = l,
                        t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = l,
                        t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = l,
                        this.stopPropagation()
                }
            },
            ct.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                },
                function(t, e) {
                    ct.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function(t) {
                            var i, n = this,
                                s = t.relatedTarget,
                                r = t.handleObj;
                            return (!s || s !== n && !ct.contains(n, s)) && (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e),
                                i
                        }
                    }
                }),
            ct.support.submitBubbles || (ct.event.special.submit = {
                setup: function() {
                    return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit",
                        function(t) {
                            var i = t.target,
                                n = ct.nodeName(i, "input") || ct.nodeName(i, "button") ? i.form : e;
                            n && !ct._data(n, "submitBubbles") && (ct.event.add(n, "submit._submit",
                                function(t) {
                                    t._submit_bubble = !0
                                }), ct._data(n, "submitBubbles", !0))
                        }), e)
                },
                postDispatch: function(t) {
                    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, !0))
                },
                teardown: function() {
                    return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), e)
                }
            }),
            ct.support.changeBubbles || (ct.event.special.change = {
                setup: function() {
                    return Rt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change",
                        function(t) {
                            "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                        }), ct.event.add(this, "click._change",
                        function(t) {
                            this._just_changed && !t.isTrigger && (this._just_changed = !1),
                                ct.event.simulate("change", this, t, !0)
                        })), !1) : (ct.event.add(this, "beforeactivate._change",
                        function(t) {
                            var e = t.target;
                            Rt.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change",
                                function(t) {
                                    !this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, !0)
                                }), ct._data(e, "changeBubbles", !0))
                        }), e)
                },
                handle: function(t) {
                    var i = t.target;
                    return this !== i || t.isSimulated || t.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? t.handleObj.handler.apply(this, arguments) : e
                },
                teardown: function() {
                    return ct.event.remove(this, "._change"), !Rt.test(this.nodeName)
                }
            }),
            ct.support.focusinBubbles || ct.each({
                    focus: "focusin",
                    blur: "focusout"
                },
                function(t, e) {
                    var i = 0,
                        n = function(t) {
                            ct.event.simulate(e, t.target, ct.event.fix(t), !0)
                        };
                    ct.event.special[e] = {
                        setup: function() {
                            0 === i++ && J.addEventListener(t, n, !0)
                        },
                        teardown: function() {
                            0 === --i && J.removeEventListener(t, n, !0)
                        }
                    }
                }),
            ct.fn.extend({
                on: function(t, i, n, s, r) {
                    var a, o;
                    if ("object" == typeof t) {
                        "string" != typeof i && (n = n || i, i = e);
                        for (a in t) this.on(a, i, n, t[a], r);
                        return this
                    }
                    if (null == n && null == s ? (s = i, n = i = e) : null == s && ("string" == typeof i ? (s = n, n = e) : (s = n, n = i, i = e)), s === !1) s = u;
                    else if (!s) return this;
                    return 1 === r && (o = s, s = function(t) {
                                return ct().off(t),
                                    o.apply(this, arguments)
                            },
                            s.guid = o.guid || (o.guid = ct.guid++)),
                        this.each(function() {
                            ct.event.add(this, t, s, n, i)
                        })
                },
                one: function(t, e, i, n) {
                    return this.on(t, e, i, n, 1)
                },
                off: function(t, i, n) {
                    var s, r;
                    if (t && t.preventDefault && t.handleObj) return s = t.handleObj,
                        ct(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler),
                        this;
                    if ("object" == typeof t) {
                        for (r in t) this.off(r, i, t[r]);
                        return this
                    }
                    return (i === !1 || "function" == typeof i) && (n = i, i = e),
                        n === !1 && (n = u),
                        this.each(function() {
                            ct.event.remove(this, t, n, i)
                        })
                },
                trigger: function(t, e) {
                    return this.each(function() {
                        ct.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, i) {
                    var n = this[0];
                    return n ? ct.event.trigger(t, i, n, !0) : e
                }
            });
        var Ft = /^.[^:#\[\.,]*$/,
            Yt = /^(?:parents|prev(?:Until|All))/,
            qt = ct.expr.match.needsContext,
            Bt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ct.fn.extend({
                find: function(t) {
                    var e, i = [],
                        n = this,
                        s = n.length;
                    if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
                        for (e = 0; s > e; e++)
                            if (ct.contains(n[e], this)) return !0
                    }));
                    for (e = 0; s > e; e++) ct.find(t, n[e], i);
                    return i = this.pushStack(s > 1 ? ct.unique(i) : i),
                        i.selector = this.selector ? this.selector + " " + t : t,
                        i
                },
                has: function(t) {
                    var e, i = ct(t, this),
                        n = i.length;
                    return this.filter(function() {
                        for (e = 0; n > e; e++)
                            if (ct.contains(this, i[e])) return !0
                    })
                },
                not: function(t) {
                    return this.pushStack(d(this, t || [], !0))
                },
                filter: function(t) {
                    return this.pushStack(d(this, t || [], !1))
                },
                is: function(t) {
                    return !!d(this, "string" == typeof t && qt.test(t) ? ct(t) : t || [], !1).length
                },
                closest: function(t, e) {
                    for (var i, n = 0,
                            s = this.length,
                            r = [], a = qt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; s > n; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (11 > i.nodeType && (a ? a.index(i) > -1 : 1 === i.nodeType && ct.find.matchesSelector(i, t))) {
                                i = r.push(i);
                                break
                            }
                    return this.pushStack(r.length > 1 ? ct.unique(r) : r)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    var i = "string" == typeof t ? ct(t, e) : ct.makeArray(t && t.nodeType ? [t] : t),
                        n = ct.merge(this.get(), i);
                    return this.pushStack(ct.unique(n))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }),
            ct.each({
                    parent: function(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(t) {
                        return ct.dir(t, "parentNode")
                    },
                    parentsUntil: function(t, e, i) {
                        return ct.dir(t, "parentNode", i)
                    },
                    next: function(t) {
                        return h(t, "nextSibling")
                    },
                    prev: function(t) {
                        return h(t, "previousSibling")
                    },
                    nextAll: function(t) {
                        return ct.dir(t, "nextSibling")
                    },
                    prevAll: function(t) {
                        return ct.dir(t, "previousSibling")
                    },
                    nextUntil: function(t, e, i) {
                        return ct.dir(t, "nextSibling", i)
                    },
                    prevUntil: function(t, e, i) {
                        return ct.dir(t, "previousSibling", i)
                    },
                    siblings: function(t) {
                        return ct.sibling((t.parentNode || {}).firstChild, t)
                    },
                    children: function(t) {
                        return ct.sibling(t.firstChild)
                    },
                    contents: function(t) {
                        return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
                    }
                },
                function(t, e) {
                    ct.fn[t] = function(i, n) {
                        var s = ct.map(this, e, i);
                        return "Until" !== t.slice(-5) && (n = i),
                            n && "string" == typeof n && (s = ct.filter(n, s)),
                            this.length > 1 && (Bt[t] || (s = ct.unique(s)), Yt.test(t) && (s = s.reverse())),
                            this.pushStack(s)
                    }
                }),
            ct.extend({
                filter: function(t, e, i) {
                    var n = e[0];
                    return i && (t = ":not(" + t + ")"),
                        1 === e.length && 1 === n.nodeType ? ct.find.matchesSelector(n, t) ? [n] : [] : ct.find.matches(t, ct.grep(e,
                            function(t) {
                                return 1 === t.nodeType
                            }))
                },
                dir: function(t, i, n) {
                    for (var s = [], r = t[i]; r && 9 !== r.nodeType && (n === e || 1 !== r.nodeType || !ct(r).is(n));) 1 === r.nodeType && s.push(r),
                        r = r[i];
                    return s
                },
                sibling: function(t, e) {
                    for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                    return i
                }
            });
        var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Xt = / jQuery\d+="(?:null|\d+)"/g,
            Qt = RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
            Ut = /^\s+/,
            Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Gt = /<([\w:]+)/,
            Kt = /<tbody/i,
            Zt = /<|&#?\w+;/,
            te = /<(?:script|style|link)/i,
            ee = /^(?:checkbox|radio)$/i,
            ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ne = /^$|\/(?:java|ecma)script/i,
            se = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ae = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            oe = p(J),
            le = oe.appendChild(J.createElement("div"));
        ae.optgroup = ae.option,
            ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead,
            ae.th = ae.td,
            ct.fn.extend({
                text: function(t) {
                    return ct.access(this,
                        function(t) {
                            return t === e ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(t))
                        },
                        null, t, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments,
                        function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = f(this, t);
                                e.appendChild(t)
                            }
                        })
                },
                prepend: function() {
                    return this.domManip(arguments,
                        function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = f(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        })
                },
                before: function() {
                    return this.domManip(arguments,
                        function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this)
                        })
                },
                after: function() {
                    return this.domManip(arguments,
                        function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                        })
                },
                remove: function(t, e) {
                    for (var i, n = t ? ct.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || ct.cleanData(_(i)),
                        i.parentNode && (e && ct.contains(i.ownerDocument, i) && v(_(i, "script")), i.parentNode.removeChild(i));
                    return this
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) {
                        for (1 === t.nodeType && ct.cleanData(_(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                        t.options && ct.nodeName(t, "select") && (t.options.length = 0)
                    }
                    return this
                },
                clone: function(t, e) {
                    return t = null == t ? !1 : t,
                        e = null == e ? t : e,
                        this.map(function() {
                            return ct.clone(this, t, e)
                        })
                },
                html: function(t) {
                    return ct.access(this,
                        function(t) {
                            var i = this[0] || {},
                                n = 0,
                                s = this.length;
                            if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Xt, "") : e;
                            if (!("string" != typeof t || te.test(t) || !ct.support.htmlSerialize && Qt.test(t) || !ct.support.leadingWhitespace && Ut.test(t) || ae[(Gt.exec(t) || ["", ""])[1].toLowerCase()])) {
                                t = t.replace(Jt, "<$1></$2>");
                                try {
                                    for (; s > n; n++) i = this[n] || {},
                                        1 === i.nodeType && (ct.cleanData(_(i, !1)), i.innerHTML = t);
                                    i = 0
                                } catch (r) {}
                            }
                            i && this.empty().append(t)
                        },
                        null, t, arguments.length)
                },
                replaceWith: function() {
                    var t = ct.map(this,
                            function(t) {
                                return [t.nextSibling, t.parentNode]
                            }),
                        e = 0;
                    return this.domManip(arguments,
                            function(i) {
                                var n = t[e++],
                                    s = t[e++];
                                s && (n && n.parentNode !== s && (n = this.nextSibling), ct(this).remove(), s.insertBefore(i, n))
                            }, !0),
                        e ? this : this.remove()
                },
                detach: function(t) {
                    return this.remove(t, !0)
                },
                domManip: function(t, e, i) {
                    t = nt.apply([], t);
                    var n, s, r, a, o, l, u = 0,
                        c = this.length,
                        h = this,
                        d = c - 1,
                        p = t[0],
                        f = ct.isFunction(p);
                    if (f || !(1 >= c || "string" != typeof p || ct.support.checkClone) && ie.test(p)) return this.each(function(n) {
                        var s = h.eq(n);
                        f && (t[0] = p.call(this, n, s.html())),
                            s.domManip(t, e, i)
                    });
                    if (c && (l = ct.buildFragment(t, this[0].ownerDocument, !1, !i && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                        for (a = ct.map(_(l, "script"), g), r = a.length; c > u; u++) s = l,
                            u !== d && (s = ct.clone(s, !0, !0), r && ct.merge(a, _(s, "script"))),
                            e.call(this[u], s, u);
                        if (r)
                            for (o = a[a.length - 1].ownerDocument, ct.map(a, m), u = 0; r > u; u++) s = a[u],
                                ne.test(s.type || "") && !ct._data(s, "globalEval") && ct.contains(o, s) && (s.src ? ct._evalUrl(s.src) : ct.globalEval((s.text || s.textContent || s.innerHTML || "").replace(re, "")));
                        l = n = null
                    }
                    return this
                }
            }),
            ct.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                },
                function(t, e) {
                    ct.fn[t] = function(t) {
                        for (var i, n = 0,
                                s = [], r = ct(t), a = r.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0),
                            ct(r[n])[e](i),
                            st.apply(s, i.get());
                        return this.pushStack(s)
                    }
                }),
            ct.extend({
                clone: function(t, e, i) {
                    var n, s, r, a, o, l = ct.contains(t.ownerDocument, t);
                    if (ct.support.html5Clone || ct.isXMLDoc(t) || !Qt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(r = le.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
                        for (n = _(r), o = _(t), a = 0; null != (s = o[a]); ++a) n[a] && b(s, n[a]);
                    if (e)
                        if (i)
                            for (o = o || _(t), n = n || _(r), a = 0; null != (s = o[a]); a++) y(s, n[a]);
                        else y(t, r);
                    return n = _(r, "script"),
                        n.length > 0 && v(n, !l && _(t, "script")),
                        n = o = s = null,
                        r
                },
                buildFragment: function(t, e, i, n) {
                    for (var s, r, a, o, l, u, c, h = t.length,
                            d = p(e), f = [], g = 0; h > g; g++)
                        if (r = t[g], r || 0 === r)
                            if ("object" === ct.type(r)) ct.merge(f, r.nodeType ? [r] : r);
                            else if (Zt.test(r)) {
                        for (o = o || d.appendChild(e.createElement("div")), l = (Gt.exec(r) || ["", ""])[1].toLowerCase(), c = ae[l] || ae._default, o.innerHTML = c[1] + r.replace(Jt, "<$1></$2>") + c[2], s = c[0]; s--;) o = o.lastChild;
                        if (!ct.support.leadingWhitespace && Ut.test(r) && f.push(e.createTextNode(Ut.exec(r)[0])), !ct.support.tbody)
                            for (r = "table" !== l || Kt.test(r) ? "<table>" !== c[1] || Kt.test(r) ? 0 : o : o.firstChild, s = r && r.childNodes.length; s--;) ct.nodeName(u = r.childNodes[s], "tbody") && !u.childNodes.length && r.removeChild(u);
                        for (ct.merge(f, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
                        o = d.lastChild
                    } else f.push(e.createTextNode(r));
                    for (o && d.removeChild(o), ct.support.appendChecked || ct.grep(_(f, "input"), w), g = 0; r = f[g++];)
                        if ((!n || -1 === ct.inArray(r, n)) && (a = ct.contains(r.ownerDocument, r), o = _(d.appendChild(r), "script"), a && v(o), i))
                            for (s = 0; r = o[s++];) ne.test(r.type || "") && i.push(r);
                    return o = null,
                        d
                },
                cleanData: function(t, e) {
                    for (var i, n, s, r, a = 0,
                            o = ct.expando,
                            l = ct.cache,
                            u = ct.support.deleteExpando,
                            c = ct.event.special; null != (i = t[a]); a++)
                        if ((e || ct.acceptData(i)) && (s = i[o], r = s && l[s])) {
                            if (r.events)
                                for (n in r.events) c[n] ? ct.event.remove(i, n) : ct.removeEvent(i, n, r.handle);
                            l[s] && (delete l[s], u ? delete i[o] : typeof i.removeAttribute !== Q ? i.removeAttribute(o) : i[o] = null, et.push(s))
                        }
                },
                _evalUrl: function(t) {
                    return ct.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }
            }),
            ct.fn.extend({
                wrapAll: function(t) {
                    if (ct.isFunction(t)) return this.each(function(e) {
                        ct(this).wrapAll(t.call(this, e))
                    });
                    if (this[0]) {
                        var e = ct(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]),
                            e.map(function() {
                                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                                return t
                            }).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    return ct.isFunction(t) ? this.each(function(e) {
                        ct(this).wrapInner(t.call(this, e))
                    }) : this.each(function() {
                        var e = ct(this),
                            i = e.contents();
                        i.length ? i.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = ct.isFunction(t);
                    return this.each(function(i) {
                        ct(this).wrapAll(e ? t.call(this, i) : t)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                    }).end()
                }
            });
        var ue, ce, he, de = /alpha\([^)]*\)/i,
            pe = /opacity\s*=\s*([^)]*)/,
            fe = /^(top|right|bottom|left)$/,
            ge = /^(none|table(?!-c[ea]).+)/,
            me = /^margin/,
            ve = RegExp("^(" + ht + ")(.*)$", "i"),
            ye = RegExp("^(" + ht + ")(?!px)[a-z%]+$", "i"),
            be = RegExp("^([+-])=(" + ht + ")", "i"),
            _e = {
                BODY: "block"
            },
            we = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            xe = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Ce = ["Top", "Right", "Bottom", "Left"],
            ke = ["Webkit", "O", "Moz", "ms"];
        ct.fn.extend({
                css: function(t, i) {
                    return ct.access(this,
                        function(t, i, n) {
                            var s, r, a = {},
                                o = 0;
                            if (ct.isArray(i)) {
                                for (r = ce(t), s = i.length; s > o; o++) a[i[o]] = ct.css(t, i[o], !1, r);
                                return a
                            }
                            return n !== e ? ct.style(t, i, n) : ct.css(t, i)
                        },
                        t, i, arguments.length > 1)
                },
                show: function() {
                    return k(this, !0)
                },
                hide: function() {
                    return k(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        C(this) ? ct(this).show() : ct(this).hide()
                    })
                }
            }),
            ct.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var i = he(t, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(t, i, n, s) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, a, o, l = ct.camelCase(i),
                            u = t.style;
                        if (i = ct.cssProps[l] || (ct.cssProps[l] = x(u, l)), o = ct.cssHooks[i] || ct.cssHooks[l], n === e) return o && "get" in o && (r = o.get(t, !1, s)) !== e ? r : u[i];
                        if (a = typeof n, "string" === a && (r = be.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ct.css(t, i)), a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" !== a || ct.cssNumber[l] || (n += "px"), ct.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (u[i] = "inherit"), o && "set" in o && (n = o.set(t, n, s)) === e))) try {
                            u[i] = n
                        } catch (c) {}
                    }
                },
                css: function(t, i, n, s) {
                    var r, a, o, l = ct.camelCase(i);
                    return i = ct.cssProps[l] || (ct.cssProps[l] = x(t.style, l)),
                        o = ct.cssHooks[i] || ct.cssHooks[l],
                        o && "get" in o && (a = o.get(t, !0, n)),
                        a === e && (a = he(t, i, s)),
                        "normal" === a && i in xe && (a = xe[i]),
                        "" === n || n ? (r = parseFloat(a), n === !0 || ct.isNumeric(r) ? r || 0 : a) : a
                }
            }),
            t.getComputedStyle ? (ce = function(e) {
                    return t.getComputedStyle(e, null)
                },
                he = function(t, i, n) {
                    var s, r, a, o = n || ce(t),
                        l = o ? o.getPropertyValue(i) || o[i] : e,
                        u = t.style;
                    return o && ("" !== l || ct.contains(t.ownerDocument, t) || (l = ct.style(t, i)), ye.test(l) && me.test(i) && (s = u.width, r = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = o.width, u.width = s, u.minWidth = r, u.maxWidth = a)),
                        l
                }) : J.documentElement.currentStyle && (ce = function(t) {
                    return t.currentStyle
                },
                he = function(t, i, n) {
                    var s, r, a, o = n || ce(t),
                        l = o ? o[i] : e,
                        u = t.style;
                    return null == l && u && u[i] && (l = u[i]),
                        ye.test(l) && !fe.test(i) && (s = u.left, r = t.runtimeStyle, a = r && r.left, a && (r.left = t.currentStyle.left), u.left = "fontSize" === i ? "1em" : l, l = u.pixelLeft + "px", u.left = s, a && (r.left = a)),
                        "" === l ? "auto" : l
                }),
            ct.each(["height", "width"],
                function(t, i) {
                    ct.cssHooks[i] = {
                        get: function(t, n, s) {
                            return n ? 0 === t.offsetWidth && ge.test(ct.css(t, "display")) ? ct.swap(t, we,
                                function() {
                                    return T(t, i, s)
                                }) : T(t, i, s) : e
                        },
                        set: function(t, e, n) {
                            var s = n && ce(t);
                            return E(t, e, n ? S(t, i, n, ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, s), s) : 0)
                        }
                    }
                }),
            ct.support.opacity || (ct.cssHooks.opacity = {
                get: function(t, e) {
                    return pe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                },
                set: function(t, e) {
                    var i = t.style,
                        n = t.currentStyle,
                        s = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        r = n && n.filter || i.filter || "";
                    i.zoom = 1,
                        (e >= 1 || "" === e) && "" === ct.trim(r.replace(de, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = de.test(r) ? r.replace(de, s) : r + " " + s)
                }
            }),
            ct(function() {
                ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
                    get: function(t, i) {
                        return i ? ct.swap(t, {
                                display: "inline-block"
                            },
                            he, [t, "marginRight"]) : e
                    }
                }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"],
                    function(t, i) {
                        ct.cssHooks[i] = {
                            get: function(t, n) {
                                return n ? (n = he(t, i), ye.test(n) ? ct(t).position()[i] + "px" : n) : e
                            }
                        }
                    })
            }),
            ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(t) {
                    return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ct.css(t, "display"))
                },
                ct.expr.filters.visible = function(t) {
                    return !ct.expr.filters.hidden(t)
                }),
            ct.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                },
                function(t, e) {
                    ct.cssHooks[t + e] = {
                            expand: function(i) {
                                for (var n = 0,
                                        s = {},
                                        r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Ce[n] + e] = r[n] || r[n - 2] || r[0];
                                return s
                            }
                        },
                        me.test(t) || (ct.cssHooks[t + e].set = E)
                });
        var Ee = /%20/g,
            Se = /\[\]$/,
            Te = /\r?\n/g,
            Pe = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        ct.fn.extend({
                serialize: function() {
                    return ct.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = ct.prop(this, "elements");
                        return t ? ct.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !ct(this).is(":disabled") && Ae.test(this.nodeName) && !Pe.test(t) && (this.checked || !ee.test(t))
                    }).map(function(t, e) {
                        var i = ct(this).val();
                        return null == i ? null : ct.isArray(i) ? ct.map(i,
                            function(t) {
                                return {
                                    name: e.name,
                                    value: t.replace(Te, "\r\n")
                                }
                            }) : {
                            name: e.name,
                            value: i.replace(Te, "\r\n")
                        }
                    }).get()
                }
            }),
            ct.param = function(t, i) {
                var n, s = [],
                    r = function(t, e) {
                        e = ct.isFunction(e) ? e() : null == e ? "" : e,
                            s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    };
                if (i === e && (i = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t,
                    function() {
                        r(this.name, this.value)
                    });
                else
                    for (n in t) D(n, t[n], i, r);
                return s.join("&").replace(Ee, "+")
            },
            ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
                function(t, e) {
                    ct.fn[e] = function(t, i) {
                        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
                    }
                }),
            ct.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                },
                bind: function(t, e, i) {
                    return this.on(t, null, e, i)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, i, n) {
                    return this.on(e, t, i, n)
                },
                undelegate: function(t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                }
            });
        var De, Ie, Me = ct.now(),
            Ne = /\?/,
            Le = /#.*$/,
            Oe = /([?&])_=[^&]*/,
            je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            He = /^(?:GET|HEAD)$/,
            $e = /^\/\//,
            We = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            ze = ct.fn.load,
            Fe = {},
            Ye = {},
            qe = "*/".concat("*");
        try {
            Ie = U.href
        } catch (Be) {
            Ie = J.createElement("a"),
                Ie.href = "",
                Ie = Ie.href
        }
        De = We.exec(Ie.toLowerCase()) || [],
            ct.fn.load = function(t, i, n) {
                if ("string" != typeof t && ze) return ze.apply(this, arguments);
                var s, r, a, o = this,
                    l = t.indexOf(" ");
                return l >= 0 && (s = t.slice(l, t.length), t = t.slice(0, l)),
                    ct.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (a = "POST"),
                    o.length > 0 && ct.ajax({
                        url: t,
                        type: a,
                        dataType: "html",
                        data: i
                    }).done(function(t) {
                        r = arguments,
                            o.html(s ? ct("<div>").append(ct.parseHTML(t)).find(s) : t)
                    }).complete(n &&
                        function(t, e) {
                            o.each(n, r || [t.responseText, e, t])
                        }),
                    this
            },
            ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
                function(t, e) {
                    ct.fn[e] = function(t) {
                        return this.on(e, t)
                    }
                }),
            ct.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ie,
                    type: "GET",
                    isLocal: Re.test(De[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": qe,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ct.parseJSON,
                        "text xml": ct.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? N(N(t, ct.ajaxSettings), e) : N(ct.ajaxSettings, t)
                },
                ajaxPrefilter: I(Fe),
                ajaxTransport: I(Ye),
                ajax: function(t, i) {
                    function n(t, i, n, s) {
                        var r, h, y, b, w, C = i;
                        2 !== _ && (_ = 2, l && clearTimeout(l), c = e, o = s || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (b = L(d, x, n)), b = O(d, b, x, r), r ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ct.lastModified[a] = w), w = x.getResponseHeader("etag"), w && (ct.etag[a] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, h = b.data, y = b.error, r = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || C) + "", r ? g.resolveWith(p, [h, C, x]) : g.rejectWith(p, [x, C, y]), x.statusCode(v), v = e, u && f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? h : y]), m.fireWith(p, [x, C]), u && (f.trigger("ajaxComplete", [x, d]), --ct.active || ct.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (i = t, t = e),
                        i = i || {};
                    var s, r, a, o, l, u, c, h, d = ct.ajaxSetup({},
                            i),
                        p = d.context || d,
                        f = d.context && (p.nodeType || p.jquery) ? ct(p) : ct.event,
                        g = ct.Deferred(),
                        m = ct.Callbacks("once memory"),
                        v = d.statusCode || {},
                        y = {},
                        b = {},
                        _ = 0,
                        w = "canceled",
                        x = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (2 === _) {
                                    if (!h)
                                        for (h = {}; e = je.exec(o);) h[e[1].toLowerCase()] = e[2];
                                    e = h[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function() {
                                return 2 === _ ? o : null
                            },
                            setRequestHeader: function(t, e) {
                                var i = t.toLowerCase();
                                return _ || (t = b[i] = b[i] || t, y[t] = e),
                                    this
                            },
                            overrideMimeType: function(t) {
                                return _ || (d.mimeType = t),
                                    this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (2 > _)
                                        for (e in t) v[e] = [v[e], t[e]];
                                    else x.always(t[x.status]);
                                return this
                            },
                            abort: function(t) {
                                var e = t || w;
                                return c && c.abort(e),
                                    n(0, e),
                                    this
                            }
                        };
                    if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Ie) + "").replace(Le, "").replace($e, De[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = ct.trim(d.dataType || "*").toLowerCase().match(dt) || [""], null == d.crossDomain && (s = We.exec(d.url.toLowerCase()), d.crossDomain = !(!s || s[1] === De[1] && s[2] === De[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (De[3] || ("http:" === De[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ct.param(d.data, d.traditional)), M(Fe, d, i, x), 2 === _) return x;
                    u = d.global,
                        u && 0 === ct.active++ && ct.event.trigger("ajaxStart"),
                        d.type = d.type.toUpperCase(),
                        d.hasContent = !He.test(d.type),
                        a = d.url,
                        d.hasContent || (d.data && (a = d.url += (Ne.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Oe.test(a) ? a.replace(Oe, "$1_=" + Me++) : a + (Ne.test(a) ? "&" : "?") + "_=" + Me++)),
                        d.ifModified && (ct.lastModified[a] && x.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && x.setRequestHeader("If-None-Match", ct.etag[a])),
                        (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType),
                        x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : d.accepts["*"]);
                    for (r in d.headers) x.setRequestHeader(r, d.headers[r]);
                    if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === _)) return x.abort();
                    w = "abort";
                    for (r in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) x[r](d[r]);
                    if (c = M(Ye, d, i, x)) {
                        x.readyState = 1,
                            u && f.trigger("ajaxSend", [x, d]),
                            d.async && d.timeout > 0 && (l = setTimeout(function() {
                                    x.abort("timeout")
                                },
                                d.timeout));
                        try {
                            _ = 1,
                                c.send(y, n)
                        } catch (C) {
                            if (!(2 > _)) throw C;
                            n(-1, C)
                        }
                    } else n(-1, "No Transport");
                    return x
                },
                getJSON: function(t, e, i) {
                    return ct.get(t, e, i, "json")
                },
                getScript: function(t, i) {
                    return ct.get(t, e, i, "script")
                }
            }),
            ct.each(["get", "post"],
                function(t, i) {
                    ct[i] = function(t, n, s, r) {
                        return ct.isFunction(n) && (r = r || s, s = n, n = e),
                            ct.ajax({
                                url: t,
                                type: i,
                                dataType: r,
                                data: n,
                                success: s
                            })
                    }
                }),
            ct.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(t) {
                        return ct.globalEval(t),
                            t
                    }
                }
            }),
            ct.ajaxPrefilter("script",
                function(t) {
                    t.cache === e && (t.cache = !1),
                        t.crossDomain && (t.type = "GET", t.global = !1)
                }),
            ct.ajaxTransport("script",
                function(t) {
                    if (t.crossDomain) {
                        var i, n = J.head || ct("head")[0] || J.documentElement;
                        return {
                            send: function(e, s) {
                                i = J.createElement("script"),
                                    i.async = !0,
                                    t.scriptCharset && (i.charset = t.scriptCharset),
                                    i.src = t.url,
                                    i.onload = i.onreadystatechange = function(t, e) {
                                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || s(200, "success"))
                                    },
                                    n.insertBefore(i, n.firstChild)
                            },
                            abort: function() {
                                i && i.onload(e, !0)
                            }
                        }
                    }
                });
        var Ve = [],
            Xe = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = Ve.pop() || ct.expando + "_" + Me++;
                    return this[t] = !0,
                        t
                }
            }),
            ct.ajaxPrefilter("json jsonp",
                function(i, n, s) {
                    var r, a, o, l = i.jsonp !== !1 && (Xe.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(i.data) && "data");
                    return l || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = ct.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Xe, "$1" + r) : i.jsonp !== !1 && (i.url += (Ne.test(i.url) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function() {
                            return o || ct.error(r + " was not called"),
                                o[0]
                        },
                        i.dataTypes[0] = "json", a = t[r], t[r] = function() {
                            o = arguments
                        },
                        s.always(function() {
                            t[r] = a,
                                i[r] && (i.jsonpCallback = n.jsonpCallback, Ve.push(r)),
                                o && ct.isFunction(a) && a(o[0]),
                                o = a = e
                        }), "script") : e
                });
        var Qe, Ue, Je = 0,
            Ge = t.ActiveXObject &&
            function() {
                var t;
                for (t in Qe) Qe[t](e, !0)
            };
        ct.ajaxSettings.xhr = t.ActiveXObject ?
            function() {
                return !this.isLocal && j() || R()
            } : j,
            Ue = ct.ajaxSettings.xhr(),
            ct.support.cors = !!Ue && "withCredentials" in Ue,
            Ue = ct.support.ajax = !!Ue,
            Ue && ct.ajaxTransport(function(i) {
                if (!i.crossDomain || ct.support.cors) {
                    var n;
                    return {
                        send: function(s, r) {
                            var a, o, l = i.xhr();
                            if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                                for (o in i.xhrFields) l[o] = i.xhrFields[o];
                            i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType),
                                i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (o in s) l.setRequestHeader(o, s[o])
                            } catch (u) {}
                            l.send(i.hasContent && i.data || null),
                                n = function(t, s) {
                                    var o, u, c, h;
                                    try {
                                        if (n && (s || 4 === l.readyState))
                                            if (n = e, a && (l.onreadystatechange = ct.noop, Ge && delete Qe[a]), s) 4 !== l.readyState && l.abort();
                                            else {
                                                h = {},
                                                    o = l.status,
                                                    u = l.getAllResponseHeaders(),
                                                    "string" == typeof l.responseText && (h.text = l.responseText);
                                                try {
                                                    c = l.statusText
                                                } catch (d) {
                                                    c = ""
                                                }
                                                o || !i.isLocal || i.crossDomain ? 1223 === o && (o = 204) : o = h.text ? 200 : 404
                                            }
                                    } catch (p) {
                                        s || r(-1, p)
                                    }
                                    h && r(o, c, h, u)
                                },
                                i.async ? 4 === l.readyState ? setTimeout(n) : (a = ++Je, Ge && (Qe || (Qe = {},
                                    ct(t).unload(Ge)), Qe[a] = n), l.onreadystatechange = n) : n()
                        },
                        abort: function() {
                            n && n(e, !0)
                        }
                    }
                }
            });
        var Ke, Ze, ti = /^(?:toggle|show|hide)$/,
            ei = RegExp("^(?:([+-])=|)(" + ht + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            ni = [F],
            si = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = ei.exec(e),
                        r = s && s[3] || (ct.cssNumber[t] ? "" : "px"),
                        a = (ct.cssNumber[t] || "px" !== r && +n) && ei.exec(ct.css(i.elem, t)),
                        o = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3],
                            s = s || [],
                            a = +n || 1;
                        do o = o || ".5",
                            a /= o,
                            ct.style(i.elem, t, a + r);
                        while (o !== (o = i.cur() / n) && 1 !== o && --l)
                    }
                    return s && (a = i.start = +a || +n || 0, i.unit = r, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]),
                        i
                }]
            };
        ct.Animation = ct.extend(W, {
                tweener: function(t, e) {
                    ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0,
                            s = t.length; s > n; n++) i = t[n],
                        si[i] = si[i] || [],
                        si[i].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ni.unshift(t) : ni.push(t)
                }
            }),
            ct.Tween = Y,
            Y.prototype = {
                constructor: Y,
                init: function(t, e, i, n, s, r) {
                    this.elem = t,
                        this.prop = i,
                        this.easing = s || "swing",
                        this.options = e,
                        this.start = this.now = this.cur(),
                        this.end = n,
                        this.unit = r || (ct.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var t = Y.propHooks[this.prop];
                    return t && t.get ? t.get(this) : Y.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, i = Y.propHooks[this.prop];
                    return this.pos = e = this.options.duration ? ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
                        this.now = (this.end - this.start) * e + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        i && i.set ? i.set(this) : Y.propHooks._default.set(this),
                        this
                }
            },
            Y.prototype.init.prototype = Y.prototype,
            Y.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                    },
                    set: function(t) {
                        ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            },
            Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            },
            ct.each(["toggle", "show", "hide"],
                function(t, e) {
                    var i = ct.fn[e];
                    ct.fn[e] = function(t, n, s) {
                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(q(e, !0), t, n, s)
                    }
                }),
            ct.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(C).css("opacity", 0).show().end().animate({
                            opacity: e
                        },
                        t, i, n)
                },
                animate: function(t, e, i, n) {
                    var s = ct.isEmptyObject(t),
                        r = ct.speed(e, i, n),
                        a = function() {
                            var e = W(this, ct.extend({},
                                t), r);
                            (s || ct._data(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a,
                        s || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(t, i, n) {
                    var s = function(t) {
                        var e = t.stop;
                        delete t.stop,
                            e(n)
                    };
                    return "string" != typeof t && (n = i, i = t, t = e),
                        i && t !== !1 && this.queue(t || "fx", []),
                        this.each(function() {
                            var e = !0,
                                i = null != t && t + "queueHooks",
                                r = ct.timers,
                                a = ct._data(this);
                            if (i) a[i] && a[i].stop && s(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && ii.test(i) && s(a[i]);
                            for (i = r.length; i--;) r[i].elem !== this || null != t && r[i].queue !== t || (r[i].anim.stop(n), e = !1, r.splice(i, 1));
                            (e || !n) && ct.dequeue(this, t)
                        })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"),
                        this.each(function() {
                            var e, i = ct._data(this),
                                n = i[t + "queue"],
                                s = i[t + "queueHooks"],
                                r = ct.timers,
                                a = n ? n.length : 0;
                            for (i.finish = !0, ct.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                            for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                            delete i.finish
                        })
                }
            }),
            ct.each({
                    slideDown: q("show"),
                    slideUp: q("hide"),
                    slideToggle: q("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                },
                function(t, e) {
                    ct.fn[t] = function(t, i, n) {
                        return this.animate(e, t, i, n)
                    }
                }),
            ct.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? ct.extend({},
                    t) : {
                    complete: i || !i && e || ct.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !ct.isFunction(e) && e
                };
                return n.duration = ct.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ct.fx.speeds ? ct.fx.speeds[n.duration] : ct.fx.speeds._default,
                    (null == n.queue || n.queue === !0) && (n.queue = "fx"),
                    n.old = n.complete,
                    n.complete = function() {
                        ct.isFunction(n.old) && n.old.call(this),
                            n.queue && ct.dequeue(this, n.queue)
                    },
                    n
            },
            ct.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            },
            ct.timers = [],
            ct.fx = Y.prototype.init,
            ct.fx.tick = function() {
                var t, i = ct.timers,
                    n = 0;
                for (Ke = ct.now(); i.length > n; n++) t = i[n],
                    t() || i[n] !== t || i.splice(n--, 1);
                i.length || ct.fx.stop(),
                    Ke = e
            },
            ct.fx.timer = function(t) {
                t() && ct.timers.push(t) && ct.fx.start()
            },
            ct.fx.interval = 13,
            ct.fx.start = function() {
                Ze || (Ze = setInterval(ct.fx.tick, ct.fx.interval))
            },
            ct.fx.stop = function() {
                clearInterval(Ze),
                    Ze = null
            },
            ct.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            ct.fx.step = {},
            ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(t) {
                return ct.grep(ct.timers,
                    function(e) {
                        return t === e.elem
                    }).length
            }),
            ct.fn.offset = function(t) {
                if (arguments.length) return t === e ? this : this.each(function(e) {
                    ct.offset.setOffset(this, t, e)
                });
                var i, n, s = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    a = r && r.ownerDocument;
                return a ? (i = a.documentElement, ct.contains(i, r) ? (typeof r.getBoundingClientRect !== Q && (s = r.getBoundingClientRect()), n = B(a), {
                    top: s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                    left: s.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
                }) : s) : void 0
            },
            ct.offset = {
                setOffset: function(t, e, i) {
                    var n = ct.css(t, "position");
                    "static" === n && (t.style.position = "relative");
                    var s, r, a = ct(t),
                        o = a.offset(),
                        l = ct.css(t, "top"),
                        u = ct.css(t, "left"),
                        c = ("absolute" === n || "fixed" === n) && ct.inArray("auto", [l, u]) > -1,
                        h = {},
                        d = {};
                    c ? (d = a.position(), s = d.top, r = d.left) : (s = parseFloat(l) || 0, r = parseFloat(u) || 0),
                        ct.isFunction(e) && (e = e.call(t, i, o)),
                        null != e.top && (h.top = e.top - o.top + s),
                        null != e.left && (h.left = e.left - o.left + r),
                        "using" in e ? e.using.call(t, h) : a.css(h)
                }
            },
            ct.fn.extend({
                position: function() {
                    if (this[0]) {
                        var t, e, i = {
                                top: 0,
                                left: 0
                            },
                            n = this[0];
                        return "fixed" === ct.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (i = t.offset()), i.top += ct.css(t[0], "borderTopWidth", !0), i.left += ct.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - i.top - ct.css(n, "marginTop", !0),
                            left: e.left - i.left - ct.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent || G; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position");) t = t.offsetParent;
                        return t || G
                    })
                }
            }),
            ct.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                },
                function(t, i) {
                    var n = /Y/.test(i);
                    ct.fn[t] = function(s) {
                        return ct.access(this,
                            function(t, s, r) {
                                var a = B(t);
                                return r === e ? a ? i in a ? a[i] : a.document.documentElement[s] : t[s] : (a ? a.scrollTo(n ? ct(a).scrollLeft() : r, n ? r : ct(a).scrollTop()) : t[s] = r, e)
                            },
                            t, s, arguments.length, null)
                    }
                }),
            ct.each({
                    Height: "height",
                    Width: "width"
                },
                function(t, i) {
                    ct.each({
                            padding: "inner" + t,
                            content: i,
                            "": "outer" + t
                        },
                        function(n, s) {
                            ct.fn[s] = function(s, r) {
                                var a = arguments.length && (n || "boolean" != typeof s),
                                    o = n || (s === !0 || r === !0 ? "margin" : "border");
                                return ct.access(this,
                                    function(i, n, s) {
                                        var r;
                                        return ct.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + t], r["scroll" + t], i.body["offset" + t], r["offset" + t], r["client" + t])) : s === e ? ct.css(i, n, o) : ct.style(i, n, s, o)
                                    },
                                    i, a ? s : e, a, null)
                            }
                        })
                }),
            ct.fn.size = function() {
                return this.length
            },
            ct.fn.andSelf = ct.fn.addBack,
            "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (t.jQuery = t.$ = ct, "function" == typeof define && define.amd && define("jquery", [],
                function() {
                    return ct
                }))
    }(window),
    jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, s) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
        },
        easeInQuad: function(t, e, i, n, s) {
            return n * (e /= s) * e + i
        },
        easeOutQuad: function(t, e, i, n, s) {
            return -n * (e /= s) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, s) {
            return n * (e /= s) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, s) {
            return -n * ((e = e / s - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, s) {
            return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, s) {
            return n * Math.sin(e / s * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
        },
        easeInExpo: function(t, e, i, n, s) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, s) {
            return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, s) {
            return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, s) {
            return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                a = 0,
                o = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (a || (a = .3 * s), o < Math.abs(n)) {
                o = n;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(n / o);
            return -(o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - r) * (2 * Math.PI) / a)) + i
        },
        easeOutElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                a = 0,
                o = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (a || (a = .3 * s), o < Math.abs(n)) {
                o = n;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(n / o);
            return o * Math.pow(2, -10 * e) * Math.sin((e * s - r) * (2 * Math.PI) / a) + n + i;
        },
        easeInOutElastic: function(t, e, i, n, s) {
            var r = 1.70158,
                a = 0,
                o = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (a || (a = s * (.3 * 1.5)), o < Math.abs(n)) {
                o = n;
                var r = a / 4
            } else var r = a / (2 * Math.PI) * Math.asin(n / o);
            return 1 > e ? -.5 * (o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - r) * (2 * Math.PI) / a)) + i : o * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - r) * (2 * Math.PI) / a) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, s, r) {
            return void 0 == r && (r = 1.70158),
                n * (e /= s) * e * ((r + 1) * e - r) + i
        },
        easeOutBack: function(t, e, i, n, s, r) {
            return void 0 == r && (r = 1.70158),
                n * ((e = e / s - 1) * e * ((r + 1) * e + r) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, s, r) {
            return void 0 == r && (r = 1.70158),
                (e /= s / 2) < 1 ? n / 2 * (e * e * (((r *= 1.525) + 1) * e - r)) + i : n / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + i
        },
        easeInBounce: function(t, e, i, n, s) {
            return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
        },
        easeOutBounce: function(t, e, i, n, s) {
            return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, s) {
            return s / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
        }
    }),
    define("easing", ["jquery"],
        function(t) {
            return function() {
                var e;
                return e || t.$
            }
        }(this)),
    define("img", ["easing"],
        function(t) {
            var e = function(e) {
                    var r = 1,
                        a = t(".ty-view-box").children("div"),
                        o = t(".ty-view-cardbox").children("div"),
                        l = t(".ty-view-note").children("p"),
                        u = setInterval(function() {
                                i(e, a, o, l, r),
                                    r++
                            },
                            3e3);
                    t("div[name='hoverDiv']").each(function(c, h) {
                        t(this).mouseenter(function() {
                                clearInterval(u),
                                    s(e, t(this), c, o, l),
                                    r = c + 1
                            }),
                            t(this).mouseleave(function() {
                                clearInterval(u),
                                    u = setInterval(function() {
                                            i(e, a, o, l, r),
                                                r = (r + 1) % 4
                                        },
                                        3e3)
                            }),
                            n(t(this), c)
                    })
                },
                i = function(t, e, i, n, s) {
                    var r = e.eq((s - 1) % 4),
                        a = r.attr("class").split(" ");
                    r.removeClass(a[0] + "-hover");
                    var o = e.eq(s % 4);
                    o.addClass(o.attr("class").split(" ")[0] + "-hover"),
                        t ? (i.eq((s - 1) % 4).hide(), i.eq(s % 4).show(), n.eq((s - 1) % 4).hide(), n.eq(s % 4).show()) : (i.eq((s - 1) % 4).fadeOut(200, "easeInOutQuad"), i.eq(s % 4).fadeIn(500, "easeInOutQuad"), n.eq((s - 1) % 4).fadeOut(200, "easeInOutQuad"), n.eq(s % 4).fadeIn(500, "easeInOutQuad"))
                },
                n = function(t, e) {
                    t.click(function() {
                        var t = "/tingyun_product.html#";
                        0 == e ? t += "browser" : 1 == e ? t += "app" : 2 == e ? t += "network" : 3 == e && (t += "server"),
                            window.location.href = t
                    })
                },
                s = function(e, i, n, s, r) {
                    if (t(".ty-view-clear").each(function() {
                            t(this).removeClass(t(this).attr("class").split(" ")[0] + "-hover")
                        }), i.hasClass("ty-view-clear")) {
                        var a = i.attr("class").split(" ")[0];
                        i.addClass(a + "-hover")
                    } else {
                        var a = i.parent().attr("class").split(" ")[0];
                        i.parent().addClass(a + "-hover")
                    }
                    e ? (s.stop().hide(), s.eq(n).show(), r.stop().hide(), r.eq(n).show()) : (s.stop().fadeOut(200, "easeInOutQuad"), s.eq(n).fadeIn(500, "easeInOutQuad"), r.stop().fadeOut(200, "easeInOutQuad"), r.eq(n).fadeIn(500, "easeInOutQuad"))
                };
            return {
                initImg: e
            }
        }),
    define("char", ["jquery"],
        function(t) {
            var e = function() {
                    t(".banner-p02>span").each(function() {
                        var e = t(this).text().split(""),
                            i = "";
                        for (var n in e) i += "<i>" + e[n] + "</i>";
                        t(this).html(i)
                    })
                },
                i = function(e) {
                    setTimeout(function() {
                            o(t(".banner-p02>span").eq(e % 3).children("i").eq(0), 90),
                                a(t(".banner-p02>span").eq((e + 1) % 3).children("i").eq(0), 90),
                                i(e + 1)
                        },
                        3e3)
                },
                n = function(t) {
                    setTimeout(function() {
                            r(t),
                                n(t + 1)
                        },
                        3e3)
                },
                s = function(s) {
                    s ? (r(0), n(1)) : (e(), t(".banner-p02>span").show(), a(t(".banner-p02>span").eq(0).children("i").eq(0), 90), i(0))
                },
                r = function(e) {
                    t(".banner-p02>span").eq((e - 1) % 3).hide(),
                        t(".banner-p02>span").eq(e % 3).show()
                },
                a = function(t, e) {
                    0 != t.length && setTimeout(function() {
                            t.removeClass("in").addClass("out"),
                                a(t.next(), e)
                        },
                        e)
                },
                o = function(t, e) {
                    0 != t.length && setTimeout(function() {
                            t.removeClass("out").addClass("in"),
                                o(t.next(), e)
                        },
                        e)
                };
            return {
                initChar: s
            }
        }),
    function(t) {
        var e = function(t) {
                return t.split("").reverse().join("")
            },
            i = {
                numberStep: function(e, i) {
                    var n = Math.floor(e);
                    t(i.elem).text(n)
                }
            },
            n = function(t) {
                var e = t.elem;
                e.nodeType && e.parentNode && (e = e._animateNumberSetter, e || (e = i.numberStep), e(t.now, t))
            };
        t.Tween && t.Tween.propHooks ? t.Tween.propHooks.number = {
                set: n
            } : t.fx.step.number = n,
            t.animateNumber = {
                numberStepFactories: {
                    append: function(e) {
                        return function(i, n) {
                            var s = Math.floor(i);
                            t(n.elem).prop("number", i).text(s + e)
                        }
                    },
                    separator: function(i, n) {
                        return i = i || " ",
                            n = n || 3,
                            function(s, r) {
                                var a = Math.floor(s).toString(),
                                    o = t(r.elem);
                                if (a.length > n) {
                                    for (var l, u, c, h = a,
                                            d = n,
                                            p = h.split("").reverse(), a = [], f = 0, g = Math.ceil(h.length / d); g > f; f++) {
                                        for (l = "", c = 0; d > c && (u = f * d + c, u !== h.length); c++) l += p[u];
                                        a.push(l)
                                    }
                                    h = a.length - 1,
                                        d = e(a[h]),
                                        a[h] = e(parseInt(d, 10).toString()),
                                        a = a.join(i),
                                        a = e(a)
                                }
                                o.prop("number", s).text(a)
                            }
                    }
                }
            },
            t.fn.animateNumber = function() {
                for (var e = arguments[0], n = t.extend({},
                        i, e), s = t(this), r = [n], a = 1, o = arguments.length; o > a; a++) r.push(arguments[a]);
                if (e.numberStep) {
                    var l = this.each(function() {
                            this._animateNumberSetter = e.numberStep
                        }),
                        u = n.complete;
                    n.complete = function() {
                        l.each(function() {
                                delete this._animateNumberSetter
                            }),
                            u && u.apply(this, arguments)
                    }
                }
                return s.animate.apply(s, r)
            }
    }(jQuery),
    define("animateNumber", ["jquery"],
        function(t) {
            return function() {
                var e;
                return e || t.$
            }
        }(this)),
    function(t, e) {
        function i(e, i) {
            var s, r, a, o = e.nodeName.toLowerCase();
            return "area" === o ? (s = e.parentNode, r = s.name, e.href && r && "map" === s.nodeName.toLowerCase() ? (a = t("img[usemap=#" + r + "]")[0], !!a && n(a)) : !1) : (/input|select|textarea|button|object/.test(o) ? !e.disabled : "a" === o ? e.href || i : i) && n(e)
        }

        function n(e) {
            return t.expr.filters.visible(e) && !t(e).parents().andSelf().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        var s = 0,
            r = /^ui-id-\d+$/;
        t.ui = t.ui || {},
            t.ui.version || (t.extend(t.ui, {
                    version: "1.9.2",
                    keyCode: {
                        BACKSPACE: 8,
                        COMMA: 188,
                        DELETE: 46,
                        DOWN: 40,
                        END: 35,
                        ENTER: 13,
                        ESCAPE: 27,
                        HOME: 36,
                        LEFT: 37,
                        NUMPAD_ADD: 107,
                        NUMPAD_DECIMAL: 110,
                        NUMPAD_DIVIDE: 111,
                        NUMPAD_ENTER: 108,
                        NUMPAD_MULTIPLY: 106,
                        NUMPAD_SUBTRACT: 109,
                        PAGE_DOWN: 34,
                        PAGE_UP: 33,
                        PERIOD: 190,
                        RIGHT: 39,
                        SPACE: 32,
                        TAB: 9,
                        UP: 38
                    }
                }), t.fn.extend({
                    _focus: t.fn.focus,
                    focus: function(e, i) {
                        return "number" == typeof e ? this.each(function() {
                            var n = this;
                            setTimeout(function() {
                                    t(n).focus(),
                                        i && i.call(n)
                                },
                                e)
                        }) : this._focus.apply(this, arguments)
                    },
                    scrollParent: function() {
                        var e;
                        return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                                return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                            }).eq(0) : this.parents().filter(function() {
                                return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
                            }).eq(0),
                            /fixed/.test(this.css("position")) || !e.length ? t(document) : e
                    },
                    zIndex: function(i) {
                        if (i !== e) return this.css("zIndex", i);
                        if (this.length)
                            for (var n, s, r = t(this[0]); r.length && r[0] !== document;) {
                                if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(r.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                                r = r.parent()
                            }
                        return 0
                    },
                    uniqueId: function() {
                        return this.each(function() {
                            this.id || (this.id = "ui-id-" + ++s)
                        })
                    },
                    removeUniqueId: function() {
                        return this.each(function() {
                            r.test(this.id) && t(this).removeAttr("id")
                        })
                    }
                }), t.extend(t.expr[":"], {
                    data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                        return function(i) {
                            return !!t.data(i, e)
                        }
                    }) : function(e, i, n) {
                        return !!t.data(e, n[3])
                    },
                    focusable: function(e) {
                        return i(e, !isNaN(t.attr(e, "tabindex")))
                    },
                    tabbable: function(e) {
                        var n = t.attr(e, "tabindex"),
                            s = isNaN(n);
                        return (s || n >= 0) && i(e, !s)
                    }
                }), t(function() {
                    var e = document.body,
                        i = e.appendChild(i = document.createElement("div"));
                    i.offsetHeight,
                        t.extend(i.style, {
                            minHeight: "100px",
                            height: "auto",
                            padding: 0,
                            borderWidth: 0
                        }),
                        t.support.minHeight = 100 === i.offsetHeight,
                        t.support.selectstart = "onselectstart" in i,
                        e.removeChild(i).style.display = "none"
                }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"],
                    function(i, n) {
                        function s(e, i, n, s) {
                            return t.each(r,
                                    function() {
                                        i -= parseFloat(t.css(e, "padding" + this)) || 0,
                                            n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                                            s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                                    }),
                                i
                        }
                        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                            a = n.toLowerCase(),
                            o = {
                                innerWidth: t.fn.innerWidth,
                                innerHeight: t.fn.innerHeight,
                                outerWidth: t.fn.outerWidth,
                                outerHeight: t.fn.outerHeight
                            };
                        t.fn["inner" + n] = function(i) {
                                return i === e ? o["inner" + n].call(this) : this.each(function() {
                                    t(this).css(a, s(this, i) + "px")
                                })
                            },
                            t.fn["outer" + n] = function(e, i) {
                                return "number" != typeof e ? o["outer" + n].call(this, e) : this.each(function() {
                                    t(this).css(a, s(this, e, !0, i) + "px")
                                })
                            }
                    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
                    return function(i) {
                        return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
                    }
                }(t.fn.removeData)),
                function() {
                    var e = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
                    t.ui.ie = e.length ? !0 : !1,
                        t.ui.ie6 = 6 === parseFloat(e[1], 10)
                }(), t.fn.extend({
                    disableSelection: function() {
                        return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection",
                            function(t) {
                                t.preventDefault()
                            })
                    },
                    enableSelection: function() {
                        return this.unbind(".ui-disableSelection")
                    }
                }), t.extend(t.ui, {
                    plugin: {
                        add: function(e, i, n) {
                            var s, r = t.ui[e].prototype;
                            for (s in n) r.plugins[s] = r.plugins[s] || [],
                                r.plugins[s].push([i, n[s]])
                        },
                        call: function(t, e, i) {
                            var n, s = t.plugins[e];
                            if (s && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
                                for (n = 0; s.length > n; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
                        }
                    },
                    contains: t.contains,
                    hasScroll: function(e, i) {
                        if ("hidden" === t(e).css("overflow")) return !1;
                        var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                            s = !1;
                        return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
                    },
                    isOverAxis: function(t, e, i) {
                        return t > e && e + i > t
                    },
                    isOver: function(e, i, n, s, r, a) {
                        return t.ui.isOverAxis(e, n, r) && t.ui.isOverAxis(i, s, a)
                    }
                }))
    }(jQuery),
    function(t, e) {
        var i = 0,
            n = Array.prototype.slice,
            s = t.cleanData;
        t.cleanData = function(e) {
                for (var i, n = 0; null != (i = e[n]); n++) try {
                    t(i).triggerHandler("remove")
                } catch (r) {}
                s(e)
            },
            t.widget = function(i, n, s) {
                var r, a, o, l, u = i.split(".")[0];
                i = i.split(".")[1],
                    r = u + "-" + i,
                    s || (s = n, n = t.Widget),
                    t.expr[":"][r.toLowerCase()] = function(e) {
                        return !!t.data(e, r)
                    },
                    t[u] = t[u] || {},
                    a = t[u][i],
                    o = t[u][i] = function(t, i) {
                        return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new o(t, i)
                    },
                    t.extend(o, a, {
                        version: s.version,
                        _proto: t.extend({},
                            s),
                        _childConstructors: []
                    }),
                    l = new n,
                    l.options = t.widget.extend({},
                        l.options),
                    t.each(s,
                        function(e, i) {
                            t.isFunction(i) && (s[e] = function() {
                                var t = function() {
                                        return n.prototype[e].apply(this, arguments)
                                    },
                                    s = function(t) {
                                        return n.prototype[e].apply(this, t)
                                    };
                                return function() {
                                    var e, n = this._super,
                                        r = this._superApply;
                                    return this._super = t,
                                        this._superApply = s,
                                        e = i.apply(this, arguments),
                                        this._super = n,
                                        this._superApply = r,
                                        e
                                }
                            }())
                        }),
                    o.prototype = t.widget.extend(l, {
                            widgetEventPrefix: a ? l.widgetEventPrefix : i
                        },
                        s, {
                            constructor: o,
                            namespace: u,
                            widgetName: i,
                            widgetBaseClass: r,
                            widgetFullName: r
                        }),
                    a ? (t.each(a._childConstructors,
                        function(e, i) {
                            var n = i.prototype;
                            t.widget(n.namespace + "." + n.widgetName, o, i._proto)
                        }), delete a._childConstructors) : n._childConstructors.push(o),
                    t.widget.bridge(i, o)
            },
            t.widget.extend = function(i) {
                for (var s, r, a = n.call(arguments, 1), o = 0, l = a.length; l > o; o++)
                    for (s in a[o]) r = a[o][s],
                        a[o].hasOwnProperty(s) && r !== e && (i[s] = t.isPlainObject(r) ? t.isPlainObject(i[s]) ? t.widget.extend({},
                            i[s], r) : t.widget.extend({},
                            r) : r);
                return i
            },
            t.widget.bridge = function(i, s) {
                var r = s.prototype.widgetFullName || i;
                t.fn[i] = function(a) {
                    var o = "string" == typeof a,
                        l = n.call(arguments, 1),
                        u = this;
                    return a = !o && l.length ? t.widget.extend.apply(null, [a].concat(l)) : a,
                        o ? this.each(function() {
                            var n, s = t.data(this, r);
                            return s ? t.isFunction(s[a]) && "_" !== a.charAt(0) ? (n = s[a].apply(s, l), n !== s && n !== e ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + a + "'")
                        }) : this.each(function() {
                            var e = t.data(this, r);
                            e ? e.option(a || {})._init() : t.data(this, r, new s(a, this))
                        }),
                        u
                }
            },
            t.Widget = function() {},
            t.Widget._childConstructors = [],
            t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, n) {
                    n = t(n || this.defaultElement || this)[0],
                        this.element = t(n),
                        this.uuid = i++,
                        this.eventNamespace = "." + this.widgetName + this.uuid,
                        this.options = t.widget.extend({},
                            this.options, this._getCreateOptions(), e),
                        this.bindings = t(),
                        this.hoverable = t(),
                        this.focusable = t(),
                        n !== this && (t.data(n, this.widgetName, this), t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                            remove: function(t) {
                                t.target === n && this.destroy()
                            }
                        }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init()
                },
                _getCreateOptions: t.noop,
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
                        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus")
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(i, n) {
                    var s, r, a, o = i;
                    if (0 === arguments.length) return t.widget.extend({},
                        this.options);
                    if ("string" == typeof i)
                        if (o = {},
                            s = i.split("."), i = s.shift(), s.length) {
                            for (r = o[i] = t.widget.extend({},
                                    this.options[i]), a = 0; s.length - 1 > a; a++) r[s[a]] = r[s[a]] || {},
                                r = r[s[a]];
                            if (i = s.pop(), n === e) return r[i] === e ? null : r[i];
                            r[i] = n
                        } else {
                            if (n === e) return this.options[i] === e ? null : this.options[i];
                            o[i] = n
                        }
                    return this._setOptions(o),
                        this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return this.options[t] = e,
                        "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
                        this
                },
                enable: function() {
                    return this._setOption("disabled", !1)
                },
                disable: function() {
                    return this._setOption("disabled", !0)
                },
                _on: function(i, n, s) {
                    var r, a = this;
                    "boolean" != typeof i && (s = n, n = i, i = !1),
                        s ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (s = n, n = this.element, r = this.widget()),
                        t.each(s,
                            function(s, o) {
                                function l() {
                                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : e
                                }
                                "string" != typeof o && (l.guid = o.guid = o.guid || l.guid || t.guid++);
                                var u = s.match(/^(\w+)\s*(.*)$/),
                                    c = u[1] + a.eventNamespace,
                                    h = u[2];
                                h ? r.delegate(h, c, l) : n.bind(c, l)
                            })
                },
                _off: function(t, e) {
                    e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                        t.unbind(e).undelegate(e)
                },
                _delay: function(t, e) {
                    function i() {
                        return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                    }
                    var n = this;
                    return setTimeout(i, e || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e),
                        this._on(e, {
                            mouseenter: function(e) {
                                t(e.currentTarget).addClass("ui-state-hover")
                            },
                            mouseleave: function(e) {
                                t(e.currentTarget).removeClass("ui-state-hover")
                            }
                        })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e),
                        this._on(e, {
                            focusin: function(e) {
                                t(e.currentTarget).addClass("ui-state-focus")
                            },
                            focusout: function(e) {
                                t(e.currentTarget).removeClass("ui-state-focus")
                            }
                        })
                },
                _trigger: function(e, i, n) {
                    var s, r, a = this.options[e];
                    if (n = n || {},
                        i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], r = i.originalEvent)
                        for (s in r) s in i || (i[s] = r[s]);
                    return this.element.trigger(i, n), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
                }
            },
            t.each({
                    show: "fadeIn",
                    hide: "fadeOut"
                },
                function(e, i) {
                    t.Widget.prototype["_" + e] = function(n, s, r) {
                        "string" == typeof s && (s = {
                            effect: s
                        });
                        var a, o = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                        s = s || {},
                            "number" == typeof s && (s = {
                                duration: s
                            }),
                            a = !t.isEmptyObject(s),
                            s.complete = r,
                            s.delay && n.delay(s.delay),
                            a && t.effects && (t.effects.effect[o] || t.uiBackCompat !== !1 && t.effects[o]) ? n[e](s) : o !== e && n[o] ? n[o](s.duration, s.easing, r) : n.queue(function(i) {
                                t(this)[e](),
                                    r && r.call(n[0]),
                                    i()
                            })
                    }
                }),
            t.uiBackCompat !== !1 && (t.Widget.prototype._getCreateOptions = function() {
                return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
            })
    }(jQuery),
    function(t) {
        var e = !1;
        t(document).mouseup(function() {
                e = !1
            }),
            t.widget("ui.mouse", {
                version: "1.9.2",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var e = this;
                    this.element.bind("mousedown." + this.widgetName,
                            function(t) {
                                return e._mouseDown(t)
                            }).bind("click." + this.widgetName,
                            function(i) {
                                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                            }),
                        this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName),
                        this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(i) {
                    if (!e) {
                        this._mouseStarted && this._mouseUp(i),
                            this._mouseDownEvent = i;
                        var n = this,
                            s = 1 === i.which,
                            r = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                        return s && !r && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                                n.mouseDelayMet = !0
                            },
                            this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                                return n._mouseMove(t)
                            },
                            this._mouseUpDelegate = function(t) {
                                return n._mouseUp(t)
                            },
                            t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
                    }
                },
                _mouseMove: function(e) {
                    return !t.ui.ie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
                },
                _mouseUp: function(e) {
                    return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                        this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
                },
                _mouseDistanceMet: function(t) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            })
    }(jQuery),
    function(t, e) {
        function i(t, e, i) {
            return [parseInt(t[0], 10) * (d.test(t[0]) ? e / 100 : 1), parseInt(t[1], 10) * (d.test(t[1]) ? i / 100 : 1)]
        }

        function n(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        t.ui = t.ui || {};
        var s, r = Math.max,
            a = Math.abs,
            o = Math.round,
            l = /left|center|right/,
            u = /top|center|bottom/,
            c = /[\+\-]\d+%?/,
            h = /^\w+/,
            d = /%$/,
            p = t.fn.position;
        t.position = {
                scrollbarWidth: function() {
                    if (s !== e) return s;
                    var i, n, r = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        a = r.children()[0];
                    return t("body").append(r),
                        i = a.offsetWidth,
                        r.css("overflow", "scroll"),
                        n = a.offsetWidth,
                        i === n && (n = r[0].clientWidth),
                        r.remove(),
                        s = i - n
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow ? "" : e.element.css("overflow-x"),
                        n = e.isWindow ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                        r = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                    return {
                        width: s ? t.position.scrollbarWidth() : 0,
                        height: r ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]);
                    return {
                        element: i,
                        isWindow: n,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: n ? i.width() : i.outerWidth(),
                        height: n ? i.height() : i.outerHeight()
                    }
                }
            },
            t.fn.position = function(e) {
                if (!e || !e.of) return p.apply(this, arguments);
                e = t.extend({},
                    e);
                var s, d, f, g, m, v = t(e.of),
                    y = t.position.getWithinInfo(e.within),
                    b = t.position.getScrollInfo(y),
                    _ = v[0],
                    w = (e.collision || "flip").split(" "),
                    x = {};
                return 9 === _.nodeType ? (d = v.width(), f = v.height(), g = {
                        top: 0,
                        left: 0
                    }) : t.isWindow(_) ? (d = v.width(), f = v.height(), g = {
                        top: v.scrollTop(),
                        left: v.scrollLeft()
                    }) : _.preventDefault ? (e.at = "left top", d = f = 0, g = {
                        top: _.pageY,
                        left: _.pageX
                    }) : (d = v.outerWidth(), f = v.outerHeight(), g = v.offset()),
                    m = t.extend({},
                        g),
                    t.each(["my", "at"],
                        function() {
                            var t, i, n = (e[this] || "").split(" ");
                            1 === n.length && (n = l.test(n[0]) ? n.concat(["center"]) : u.test(n[0]) ? ["center"].concat(n) : ["center", "center"]),
                                n[0] = l.test(n[0]) ? n[0] : "center",
                                n[1] = u.test(n[1]) ? n[1] : "center",
                                t = c.exec(n[0]),
                                i = c.exec(n[1]),
                                x[this] = [t ? t[0] : 0, i ? i[0] : 0],
                                e[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
                        }),
                    1 === w.length && (w[1] = w[0]),
                    "right" === e.at[0] ? m.left += d : "center" === e.at[0] && (m.left += d / 2),
                    "bottom" === e.at[1] ? m.top += f : "center" === e.at[1] && (m.top += f / 2),
                    s = i(x.at, d, f),
                    m.left += s[0],
                    m.top += s[1],
                    this.each(function() {
                        var l, u, c = t(this),
                            h = c.outerWidth(),
                            p = c.outerHeight(),
                            _ = n(this, "marginLeft"),
                            C = n(this, "marginTop"),
                            k = h + _ + n(this, "marginRight") + b.width,
                            E = p + C + n(this, "marginBottom") + b.height,
                            S = t.extend({},
                                m),
                            T = i(x.my, c.outerWidth(), c.outerHeight());
                        "right" === e.my[0] ? S.left -= h : "center" === e.my[0] && (S.left -= h / 2),
                            "bottom" === e.my[1] ? S.top -= p : "center" === e.my[1] && (S.top -= p / 2),
                            S.left += T[0],
                            S.top += T[1],
                            t.support.offsetFractions || (S.left = o(S.left), S.top = o(S.top)),
                            l = {
                                marginLeft: _,
                                marginTop: C
                            },
                            t.each(["left", "top"],
                                function(i, n) {
                                    t.ui.position[w[i]] && t.ui.position[w[i]][n](S, {
                                        targetWidth: d,
                                        targetHeight: f,
                                        elemWidth: h,
                                        elemHeight: p,
                                        collisionPosition: l,
                                        collisionWidth: k,
                                        collisionHeight: E,
                                        offset: [s[0] + T[0], s[1] + T[1]],
                                        my: e.my,
                                        at: e.at,
                                        within: y,
                                        elem: c
                                    })
                                }),
                            t.fn.bgiframe && c.bgiframe(),
                            e.using && (u = function(t) {
                                var i = g.left - S.left,
                                    n = i + d - h,
                                    s = g.top - S.top,
                                    o = s + f - p,
                                    l = {
                                        target: {
                                            element: v,
                                            left: g.left,
                                            top: g.top,
                                            width: d,
                                            height: f
                                        },
                                        element: {
                                            element: c,
                                            left: S.left,
                                            top: S.top,
                                            width: h,
                                            height: p
                                        },
                                        horizontal: 0 > n ? "left" : i > 0 ? "right" : "center",
                                        vertical: 0 > o ? "top" : s > 0 ? "bottom" : "middle"
                                    };
                                h > d && d > a(i + n) && (l.horizontal = "center"),
                                    p > f && f > a(s + o) && (l.vertical = "middle"),
                                    l.important = r(a(i), a(n)) > r(a(s), a(o)) ? "horizontal" : "vertical",
                                    e.using.call(this, t, l)
                            }),
                            c.offset(t.extend(S, {
                                using: u
                            }))
                    })
            },
            t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            a = n.width,
                            o = t.left - e.collisionPosition.marginLeft,
                            l = s - o,
                            u = o + e.collisionWidth - a - s;
                        e.collisionWidth > a ? l > 0 && 0 >= u ? (i = t.left + l + e.collisionWidth - a - s, t.left += l - i) : t.left = u > 0 && 0 >= l ? s : l > u ? s + a - e.collisionWidth : s : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = r(t.left - o, t.left)
                    },
                    top: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            a = e.within.height,
                            o = t.top - e.collisionPosition.marginTop,
                            l = s - o,
                            u = o + e.collisionHeight - a - s;
                        e.collisionHeight > a ? l > 0 && 0 >= u ? (i = t.top + l + e.collisionHeight - a - s, t.top += l - i) : t.top = u > 0 && 0 >= l ? s : l > u ? s + a - e.collisionHeight : s : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = r(t.top - o, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, n, s = e.within,
                            r = s.offset.left + s.scrollLeft,
                            o = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            u = t.left - e.collisionPosition.marginLeft,
                            c = u - l,
                            h = u + e.collisionWidth - o - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - r, (0 > i || a(c) > i) && (t.left += d + p + f)) : h > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || h > a(n)) && (t.left += d + p + f))
                    },
                    top: function(t, e) {
                        var i, n, s = e.within,
                            r = s.offset.top + s.scrollTop,
                            o = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            u = t.top - e.collisionPosition.marginTop,
                            c = u - l,
                            h = u + e.collisionHeight - o - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            g = -2 * e.offset[1];
                        0 > c ? (n = t.top + p + f + g + e.collisionHeight - o - r, t.top + p + f + g > c && (0 > n || a(c) > n) && (t.top += p + f + g)) : h > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > h && (i > 0 || h > a(i)) && (t.top += p + f + g))
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments),
                            t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments),
                            t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var e, i, n, s, r, a = document.getElementsByTagName("body")[0],
                    o = document.createElement("div");
                e = document.createElement(a ? "div" : "body"),
                    n = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    },
                    a && t.extend(n, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                for (r in n) e.style[r] = n[r];
                e.appendChild(o),
                    i = a || document.documentElement,
                    i.insertBefore(e, i.firstChild),
                    o.style.cssText = "position: absolute; left: 10.7432222px;",
                    s = t(o).offset().left,
                    t.support.offsetFractions = s > 10 && 11 > s,
                    e.innerHTML = "",
                    i.removeChild(e)
            }(),
            t.uiBackCompat !== !1 &&
            function(t) {
                var i = t.fn.position;
                t.fn.position = function(n) {
                    if (!n || !n.offset) return i.call(this, n);
                    var s = n.offset.split(" "),
                        r = n.at.split(" ");
                    return 1 === s.length && (s[1] = s[0]),
                        /^\d/.test(s[0]) && (s[0] = "+" + s[0]),
                        /^\d/.test(s[1]) && (s[1] = "+" + s[1]),
                        1 === r.length && (/left|center|right/.test(r[0]) ? r[1] = "center" : (r[1] = r[0], r[0] = "center")),
                        i.call(this, t.extend(n, {
                            at: r[0] + s[0] + " " + r[1] + s[1],
                            offset: e
                        }))
                }
            }(jQuery)
    }(jQuery),
    function(t) {
        t.widget("ui.draggable", t.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "drag",
                options: {
                    addClasses: !0,
                    appendTo: "parent",
                    axis: !1,
                    connectToSortable: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    iframeFix: !1,
                    opacity: !1,
                    refreshPositions: !1,
                    revert: !1,
                    revertDuration: 500,
                    scope: "default",
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    snap: !1,
                    snapMode: "both",
                    snapTolerance: 20,
                    stack: !1,
                    zIndex: !1
                },
                _create: function() {
                    "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
                        this.options.addClasses && this.element.addClass("ui-draggable"),
                        this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                        this._mouseInit()
                },
                _destroy: function() {
                    this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
                        this._mouseDestroy()
                },
                _mouseCapture: function(e) {
                    var i = this.options;
                    return this.helper || i.disabled || t(e.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                        t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                            width: this.offsetWidth + "px",
                            height: this.offsetHeight + "px",
                            position: "absolute",
                            opacity: "0.001",
                            zIndex: 1e3
                        }).css(t(this).offset()).appendTo("body")
                    }), !0) : !1)
                },
                _mouseStart: function(e) {
                    var i = this.options;
                    return this.helper = this._createHelper(e),
                        this.helper.addClass("ui-draggable-dragging"),
                        this._cacheHelperProportions(),
                        t.ui.ddmanager && (t.ui.ddmanager.current = this),
                        this._cacheMargins(),
                        this.cssPosition = this.helper.css("position"),
                        this.scrollParent = this.helper.scrollParent(),
                        this.offset = this.positionAbs = this.element.offset(),
                        this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        },
                        t.extend(this.offset, {
                            click: {
                                left: e.pageX - this.offset.left,
                                top: e.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }),
                        this.originalPosition = this.position = this._generatePosition(e),
                        this.originalPageX = e.pageX,
                        this.originalPageY = e.pageY,
                        i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                        i.containment && this._setContainment(),
                        this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
                },
                _mouseDrag: function(e, i) {
                    if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                        var n = this._uiHash();
                        if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                        this.position = n.position
                    }
                    return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                        this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
                        t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
                },
                _mouseStop: function(e) {
                    var i = !1;
                    t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)),
                        this.dropped && (i = this.dropped, this.dropped = !1);
                    for (var n = this.element[0], s = !1; n && (n = n.parentNode);) n == document && (s = !0);
                    if (!s && "original" === this.options.helper) return !1;
                    if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                        var r = this;
                        t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
                            function() {
                                r._trigger("stop", e) !== !1 && r._clear()
                            })
                    } else this._trigger("stop", e) !== !1 && this._clear();
                    return !1
                },
                _mouseUp: function(e) {
                    return t("div.ui-draggable-iframeFix").each(function() {
                            this.parentNode.removeChild(this)
                        }),
                        t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
                        t.ui.mouse.prototype._mouseUp.call(this, e)
                },
                cancel: function() {
                    return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
                        this
                },
                _getHandle: function(e) {
                    var i = this.options.handle && t(this.options.handle, this.element).length ? !1 : !0;
                    return t(this.options.handle, this.element).find("*").andSelf().each(function() {
                            this == e.target && (i = !0)
                        }),
                        i
                },
                _createHelper: function(e) {
                    var i = this.options,
                        n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
                    return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo),
                        n[0] == this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"),
                        n
                },
                _adjustOffsetFromHelper: function(e) {
                    "string" == typeof e && (e = e.split(" ")),
                        t.isArray(e) && (e = {
                            left: +e[0],
                            top: +e[1] || 0
                        }),
                        "left" in e && (this.offset.click.left = e.left + this.margins.left),
                        "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                        "top" in e && (this.offset.click.top = e.top + this.margins.top),
                        "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var e = this.offsetParent.offset();
                    return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
                        (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                            top: 0,
                            left: 0
                        }), {
                            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                },
                _getRelativeOffset: function() {
                    if ("relative" == this.cssPosition) {
                        var t = this.element.position();
                        return {
                            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.element.css("marginLeft"), 10) || 0,
                        top: parseInt(this.element.css("marginTop"), 10) || 0,
                        right: parseInt(this.element.css("marginRight"), 10) || 0,
                        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var e = this.options;
                    if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
                    else {
                        var i = t(e.containment),
                            n = i[0];
                        if (!n) return;
                        i.offset();
                        var s = "hidden" != t(n).css("overflow");
                        this.containment = [(parseInt(t(n).css("borderLeftWidth"), 10) || 0) + (parseInt(t(n).css("paddingLeft"), 10) || 0), (parseInt(t(n).css("borderTopWidth"), 10) || 0) + (parseInt(t(n).css("paddingTop"), 10) || 0), (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(t(n).css("borderLeftWidth"), 10) || 0) - (parseInt(t(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(t(n).css("borderTopWidth"), 10) || 0) - (parseInt(t(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                            this.relative_container = i
                    }
                },
                _convertPositionTo: function(e, i) {
                    i || (i = this.position);
                    var n = "absolute" == e ? 1 : -1,
                        s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                        r = /(html|body)/i.test(s[0].tagName);
                    return {
                        top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
                        left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
                    }
                },
                _generatePosition: function(e) {
                    var i = this.options,
                        n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        s = /(html|body)/i.test(n[0].tagName),
                        r = e.pageX,
                        a = e.pageY;
                    if (this.originalPosition) {
                        var o;
                        if (this.containment) {
                            if (this.relative_container) {
                                var l = this.relative_container.offset();
                                o = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                            } else o = this.containment;
                            e.pageX - this.offset.click.left < o[0] && (r = o[0] + this.offset.click.left),
                                e.pageY - this.offset.click.top < o[1] && (a = o[1] + this.offset.click.top),
                                e.pageX - this.offset.click.left > o[2] && (r = o[2] + this.offset.click.left),
                                e.pageY - this.offset.click.top > o[3] && (a = o[3] + this.offset.click.top)
                        }
                        if (i.grid) {
                            var u = i.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                            a = o && (u - this.offset.click.top < o[1] || u - this.offset.click.top > o[3]) ? u - this.offset.click.top < o[1] ? u + i.grid[1] : u - i.grid[1] : u;
                            var c = i.grid[0] ? this.originalPageX + Math.round((r - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                            r = o && (c - this.offset.click.left < o[0] || c - this.offset.click.left > o[2]) ? c - this.offset.click.left < o[0] ? c + i.grid[0] : c - i.grid[0] : c
                        }
                    }
                    return {
                        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                        left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                    }
                },
                _clear: function() {
                    this.helper.removeClass("ui-draggable-dragging"),
                        this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                        this.helper = null,
                        this.cancelHelperRemoval = !1
                },
                _trigger: function(e, i, n) {
                    return n = n || this._uiHash(),
                        t.ui.plugin.call(this, e, [i, n]),
                        "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")),
                        t.Widget.prototype._trigger.call(this, e, i, n)
                },
                plugins: {},
                _uiHash: function() {
                    return {
                        helper: this.helper,
                        position: this.position,
                        originalPosition: this.originalPosition,
                        offset: this.positionAbs
                    }
                }
            }),
            t.ui.plugin.add("draggable", "connectToSortable", {
                start: function(e, i) {
                    var n = t(this).data("draggable"),
                        s = n.options,
                        r = t.extend({},
                            i, {
                                item: n.element
                            });
                    n.sortables = [],
                        t(s.connectToSortable).each(function() {
                            var i = t.data(this, "sortable");
                            i && !i.options.disabled && (n.sortables.push({
                                instance: i,
                                shouldRevert: i.options.revert
                            }), i.refreshPositions(), i._trigger("activate", e, r))
                        })
                },
                stop: function(e, i) {
                    var n = t(this).data("draggable"),
                        s = t.extend({},
                            i, {
                                item: n.element
                            });
                    t.each(n.sortables,
                        function() {
                            this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({
                                top: "auto",
                                left: "auto"
                            })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, s))
                        })
                },
                drag: function(e, i) {
                    var n = t(this).data("draggable"),
                        s = this;
                    t.each(n.sortables,
                        function() {
                            var r = !1,
                                a = this;
                            this.instance.positionAbs = n.positionAbs,
                                this.instance.helperProportions = n.helperProportions,
                                this.instance.offset.click = n.offset.click,
                                this.instance._intersectsWith(this.instance.containerCache) && (r = !0, t.each(n.sortables,
                                    function() {
                                        return this.instance.positionAbs = n.positionAbs,
                                            this.instance.helperProportions = n.helperProportions,
                                            this.instance.offset.click = n.offset.click,
                                            this != a && this.instance._intersectsWith(this.instance.containerCache) && t.ui.contains(a.instance.element[0], this.instance.element[0]) && (r = !1),
                                            r
                                    })),
                                r ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                                        return i.helper[0]
                                    },
                                    e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", e), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", e), n.dropped = !1)
                        })
                }
            }),
            t.ui.plugin.add("draggable", "cursor", {
                start: function() {
                    var e = t("body"),
                        i = t(this).data("draggable").options;
                    e.css("cursor") && (i._cursor = e.css("cursor")),
                        e.css("cursor", i.cursor)
                },
                stop: function() {
                    var e = t(this).data("draggable").options;
                    e._cursor && t("body").css("cursor", e._cursor)
                }
            }),
            t.ui.plugin.add("draggable", "opacity", {
                start: function(e, i) {
                    var n = t(i.helper),
                        s = t(this).data("draggable").options;
                    n.css("opacity") && (s._opacity = n.css("opacity")),
                        n.css("opacity", s.opacity)
                },
                stop: function(e, i) {
                    var n = t(this).data("draggable").options;
                    n._opacity && t(i.helper).css("opacity", n._opacity)
                }
            }),
            t.ui.plugin.add("draggable", "scroll", {
                start: function() {
                    var e = t(this).data("draggable");
                    e.scrollParent[0] != document && "HTML" != e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
                },
                drag: function(e) {
                    var i = t(this).data("draggable"),
                        n = i.options,
                        s = !1;
                    i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))),
                        s !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
                }
            }),
            t.ui.plugin.add("draggable", "snap", {
                start: function() {
                    var e = t(this).data("draggable"),
                        i = e.options;
                    e.snapElements = [],
                        t(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function() {
                            var i = t(this),
                                n = i.offset();
                            this != e.element[0] && e.snapElements.push({
                                item: this,
                                width: i.outerWidth(),
                                height: i.outerHeight(),
                                top: n.top,
                                left: n.left
                            })
                        })
                },
                drag: function(e, i) {
                    for (var n = t(this).data("draggable"), s = n.options, r = s.snapTolerance, a = i.offset.left, o = a + n.helperProportions.width, l = i.offset.top, u = l + n.helperProportions.height, c = n.snapElements.length - 1; c >= 0; c--) {
                        var h = n.snapElements[c].left,
                            d = h + n.snapElements[c].width,
                            p = n.snapElements[c].top,
                            f = p + n.snapElements[c].height;
                        if (a > h - r && d + r > a && l > p - r && f + r > l || a > h - r && d + r > a && u > p - r && f + r > u || o > h - r && d + r > o && l > p - r && f + r > l || o > h - r && d + r > o && u > p - r && f + r > u) {
                            if ("inner" != s.snapMode) {
                                var g = r >= Math.abs(p - u),
                                    m = r >= Math.abs(f - l),
                                    v = r >= Math.abs(h - o),
                                    y = r >= Math.abs(d - a);
                                g && (i.position.top = n._convertPositionTo("relative", {
                                        top: p - n.helperProportions.height,
                                        left: 0
                                    }).top - n.margins.top),
                                    m && (i.position.top = n._convertPositionTo("relative", {
                                        top: f,
                                        left: 0
                                    }).top - n.margins.top),
                                    v && (i.position.left = n._convertPositionTo("relative", {
                                        top: 0,
                                        left: h - n.helperProportions.width
                                    }).left - n.margins.left),
                                    y && (i.position.left = n._convertPositionTo("relative", {
                                        top: 0,
                                        left: d
                                    }).left - n.margins.left)
                            }
                            var b = g || m || v || y;
                            if ("outer" != s.snapMode) {
                                var g = r >= Math.abs(p - l),
                                    m = r >= Math.abs(f - u),
                                    v = r >= Math.abs(h - a),
                                    y = r >= Math.abs(d - o);
                                g && (i.position.top = n._convertPositionTo("relative", {
                                        top: p,
                                        left: 0
                                    }).top - n.margins.top),
                                    m && (i.position.top = n._convertPositionTo("relative", {
                                        top: f - n.helperProportions.height,
                                        left: 0
                                    }).top - n.margins.top),
                                    v && (i.position.left = n._convertPositionTo("relative", {
                                        top: 0,
                                        left: h
                                    }).left - n.margins.left),
                                    y && (i.position.left = n._convertPositionTo("relative", {
                                        top: 0,
                                        left: d - n.helperProportions.width
                                    }).left - n.margins.left)
                            }!n.snapElements[c].snapping && (g || m || v || y || b) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                                    snapItem: n.snapElements[c].item
                                })),
                                n.snapElements[c].snapping = g || m || v || y || b
                        } else n.snapElements[c].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                                snapItem: n.snapElements[c].item
                            })),
                            n.snapElements[c].snapping = !1
                    }
                }
            }),
            t.ui.plugin.add("draggable", "stack", {
                start: function() {
                    var e = t(this).data("draggable").options,
                        i = t.makeArray(t(e.stack)).sort(function(e, i) {
                            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                        });
                    if (i.length) {
                        var n = parseInt(i[0].style.zIndex) || 0;
                        t(i).each(function(t) {
                                this.style.zIndex = n + t
                            }),
                            this[0].style.zIndex = n + i.length
                    }
                }
            }),
            t.ui.plugin.add("draggable", "zIndex", {
                start: function(e, i) {
                    var n = t(i.helper),
                        s = t(this).data("draggable").options;
                    n.css("zIndex") && (s._zIndex = n.css("zIndex")),
                        n.css("zIndex", s.zIndex)
                },
                stop: function(e, i) {
                    var n = t(this).data("draggable").options;
                    n._zIndex && t(i.helper).css("zIndex", n._zIndex)
                }
            })
    }(jQuery),
    function(t) {
        t.widget("ui.droppable", {
                version: "1.9.2",
                widgetEventPrefix: "drop",
                options: {
                    accept: "*",
                    activeClass: !1,
                    addClasses: !0,
                    greedy: !1,
                    hoverClass: !1,
                    scope: "default",
                    tolerance: "intersect"
                },
                _create: function() {
                    var e = this.options,
                        i = e.accept;
                    this.isover = 0,
                        this.isout = 1,
                        this.accept = t.isFunction(i) ? i : function(t) {
                            return t.is(i)
                        },
                        this.proportions = {
                            width: this.element[0].offsetWidth,
                            height: this.element[0].offsetHeight
                        },
                        t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [],
                        t.ui.ddmanager.droppables[e.scope].push(this),
                        e.addClasses && this.element.addClass("ui-droppable")
                },
                _destroy: function() {
                    for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; e.length > i; i++) e[i] == this && e.splice(i, 1);
                    this.element.removeClass("ui-droppable ui-droppable-disabled")
                },
                _setOption: function(e, i) {
                    "accept" == e && (this.accept = t.isFunction(i) ? i : function(t) {
                            return t.is(i)
                        }),
                        t.Widget.prototype._setOption.apply(this, arguments)
                },
                _activate: function(e) {
                    var i = t.ui.ddmanager.current;
                    this.options.activeClass && this.element.addClass(this.options.activeClass),
                        i && this._trigger("activate", e, this.ui(i))
                },
                _deactivate: function(e) {
                    var i = t.ui.ddmanager.current;
                    this.options.activeClass && this.element.removeClass(this.options.activeClass),
                        i && this._trigger("deactivate", e, this.ui(i))
                },
                _over: function(e) {
                    var i = t.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
                },
                _out: function(e) {
                    var i = t.ui.ddmanager.current;
                    i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
                },
                _drop: function(e, i) {
                    var n = i || t.ui.ddmanager.current;
                    if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
                    var s = !1;
                    return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                            var e = t.data(this, "droppable");
                            return e.options.greedy && !e.options.disabled && e.options.scope == n.options.scope && e.accept.call(e.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(e, {
                                offset: e.element.offset()
                            }), e.options.tolerance) ? (s = !0, !1) : void 0
                        }),
                        s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1
                },
                ui: function(t) {
                    return {
                        draggable: t.currentItem || t.element,
                        helper: t.helper,
                        position: t.position,
                        offset: t.positionAbs
                    }
                }
            }),
            t.ui.intersect = function(e, i, n) {
                if (!i.offset) return !1;
                var s = (e.positionAbs || e.position.absolute).left,
                    r = s + e.helperProportions.width,
                    a = (e.positionAbs || e.position.absolute).top,
                    o = a + e.helperProportions.height,
                    l = i.offset.left,
                    u = l + i.proportions.width,
                    c = i.offset.top,
                    h = c + i.proportions.height;
                switch (n) {
                    case "fit":
                        return s >= l && u >= r && a >= c && h >= o;
                    case "intersect":
                        return s + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && h > o - e.helperProportions.height / 2;
                    case "pointer":
                        var d = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                            p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top,
                            f = t.ui.isOver(p, d, c, l, i.proportions.height, i.proportions.width);
                        return f;
                    case "touch":
                        return (a >= c && h >= a || o >= c && h >= o || c > a && o > h) && (s >= l && u >= s || r >= l && u >= r || l > s && r > u);
                    default:
                        return !1
                }
            },
            t.ui.ddmanager = {
                current: null,
                droppables: {
                    "default": []
                },
                prepareOffsets: function(e, i) {
                    var n = t.ui.ddmanager.droppables[e.options.scope] || [],
                        s = i ? i.type : null,
                        r = (e.currentItem || e.element).find(":data(droppable)").andSelf();
                    t: for (var a = 0; n.length > a; a++)
                        if (!(n[a].options.disabled || e && !n[a].accept.call(n[a].element[0], e.currentItem || e.element))) {
                            for (var o = 0; r.length > o; o++)
                                if (r[o] == n[a].element[0]) {
                                    n[a].proportions.height = 0;
                                    continue t
                                }
                            n[a].visible = "none" != n[a].element.css("display"),
                                n[a].visible && ("mousedown" == s && n[a]._activate.call(n[a], i), n[a].offset = n[a].element.offset(), n[a].proportions = {
                                    width: n[a].element[0].offsetWidth,
                                    height: n[a].element[0].offsetHeight
                                })
                        }
                },
                drop: function(e, i) {
                    var n = !1;
                    return t.each(t.ui.ddmanager.droppables[e.options.scope] || [],
                            function() {
                                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
                            }),
                        n
                },
                dragStart: function(e, i) {
                    e.element.parentsUntil("body").bind("scroll.droppable",
                        function() {
                            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                        })
                },
                drag: function(e, i) {
                    e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
                        t.each(t.ui.ddmanager.droppables[e.options.scope] || [],
                            function() {
                                if (!this.options.disabled && !this.greedyChild && this.visible) {
                                    var n = t.ui.intersect(e, this, this.options.tolerance),
                                        s = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                                    if (s) {
                                        var r;
                                        if (this.options.greedy) {
                                            var a = this.options.scope,
                                                o = this.element.parents(":data(droppable)").filter(function() {
                                                    return t.data(this, "droppable").options.scope === a
                                                });
                                            o.length && (r = t.data(o[0], "droppable"), r.greedyChild = "isover" == s ? 1 : 0)
                                        }
                                        r && "isover" == s && (r.isover = 0, r.isout = 1, r._out.call(r, i)),
                                            this[s] = 1,
                                            this["isout" == s ? "isover" : "isout"] = 0,
                                            this["isover" == s ? "_over" : "_out"].call(this, i),
                                            r && "isout" == s && (r.isout = 0, r.isover = 1, r._over.call(r, i))
                                    }
                                }
                            })
                },
                dragStop: function(e, i) {
                    e.element.parentsUntil("body").unbind("scroll.droppable"),
                        e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                }
            }
    }(jQuery),
    function(t) {
        t.widget("ui.resizable", t.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "resize",
                options: {
                    alsoResize: !1,
                    animate: !1,
                    animateDuration: "slow",
                    animateEasing: "swing",
                    aspectRatio: !1,
                    autoHide: !1,
                    containment: !1,
                    ghost: !1,
                    grid: !1,
                    handles: "e,s,se",
                    helper: !1,
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 10,
                    minWidth: 10,
                    zIndex: 1e3
                },
                _create: function() {
                    var e = this,
                        i = this.options;
                    if (this.element.addClass("ui-resizable"), t.extend(this, {
                            _aspectRatio: !!i.aspectRatio,
                            aspectRatio: i.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                        }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                            position: this.element.css("position"),
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            top: this.element.css("top"),
                            left: this.element.css("left")
                        })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                            marginLeft: this.originalElement.css("marginLeft"),
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom")
                        }), this.originalElement.css({
                            marginLeft: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block"
                        })), this.originalElement.css({
                            margin: this.originalElement.css("margin")
                        }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this.handles.constructor == String) {
                        "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                        var n = this.handles.split(",");
                        this.handles = {};
                        for (var s = 0; n.length > s; s++) {
                            var r = t.trim(n[s]),
                                a = "ui-resizable-" + r,
                                o = t('<div class="ui-resizable-handle ' + a + '"></div>');
                            o.css({
                                    zIndex: i.zIndex
                                }),
                                "se" == r && o.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                                this.handles[r] = ".ui-resizable-" + r,
                                this.element.append(o)
                        }
                    }
                    this._renderAxis = function(e) {
                            e = e || this.element;
                            for (var i in this.handles) {
                                if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                                    var n = t(this.handles[i], this.element),
                                        s = 0;
                                    s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                                    var r = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                                    e.css(r, s),
                                        this._proportionallyResize()
                                }
                                t(this.handles[i]).length
                            }
                        },
                        this._renderAxis(this.element),
                        this._handles = t(".ui-resizable-handle", this.element).disableSelection(),
                        this._handles.mouseover(function() {
                            if (!e.resizing) {
                                if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                                e.axis = t && t[1] ? t[1] : "se"
                            }
                        }),
                        i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                            i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
                        }).mouseleave(function() {
                            i.disabled || e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide())
                        })),
                        this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var e = function(e) {
                        t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                    };
                    if (this.elementIsWrapper) {
                        e(this.element);
                        var i = this.element;
                        this.originalElement.css({
                                position: i.css("position"),
                                width: i.outerWidth(),
                                height: i.outerHeight(),
                                top: i.css("top"),
                                left: i.css("left")
                            }).insertAfter(i),
                            i.remove()
                    }
                    return this.originalElement.css("resize", this.originalResizeStyle),
                        e(this.originalElement),
                        this
                },
                _mouseCapture: function(e) {
                    var i = !1;
                    for (var n in this.handles) t(this.handles[n])[0] == e.target && (i = !0);
                    return !this.options.disabled && i
                },
                _mouseStart: function(i) {
                    var n = this.options,
                        s = this.element.position(),
                        r = this.element;
                    this.resizing = !0,
                        this.documentScroll = {
                            top: t(document).scrollTop(),
                            left: t(document).scrollLeft()
                        },
                        (r.is(".ui-draggable") || /absolute/.test(r.css("position"))) && r.css({
                            position: "absolute",
                            top: s.top,
                            left: s.left
                        }),
                        this._renderProxy();
                    var a = e(this.helper.css("left")),
                        o = e(this.helper.css("top"));
                    n.containment && (a += t(n.containment).scrollLeft() || 0, o += t(n.containment).scrollTop() || 0),
                        this.offset = this.helper.offset(),
                        this.position = {
                            left: a,
                            top: o
                        },
                        this.size = this._helper ? {
                            width: r.outerWidth(),
                            height: r.outerHeight()
                        } : {
                            width: r.width(),
                            height: r.height()
                        },
                        this.originalSize = this._helper ? {
                            width: r.outerWidth(),
                            height: r.outerHeight()
                        } : {
                            width: r.width(),
                            height: r.height()
                        },
                        this.originalPosition = {
                            left: a,
                            top: o
                        },
                        this.sizeDiff = {
                            width: r.outerWidth() - r.width(),
                            height: r.outerHeight() - r.height()
                        },
                        this.originalMousePosition = {
                            left: i.pageX,
                            top: i.pageY
                        },
                        this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                    var l = t(".ui-resizable-" + this.axis).css("cursor");
                    return t("body").css("cursor", "auto" == l ? this.axis + "-resize" : l),
                        r.addClass("ui-resizable-resizing"),
                        this._propagate("start", i), !0
                },
                _mouseDrag: function(t) {
                    var e = this.helper,
                        i = (this.options, this.originalMousePosition),
                        n = this.axis,
                        s = t.pageX - i.left || 0,
                        r = t.pageY - i.top || 0,
                        a = this._change[n];
                    if (!a) return !1;
                    var o = a.apply(this, [t, s, r]);
                    return this._updateVirtualBoundaries(t.shiftKey),
                        (this._aspectRatio || t.shiftKey) && (o = this._updateRatio(o, t)),
                        o = this._respectSize(o, t),
                        this._propagate("resize", t),
                        e.css({
                            top: this.position.top + "px",
                            left: this.position.left + "px",
                            width: this.size.width + "px",
                            height: this.size.height + "px"
                        }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                        this._updateCache(o),
                        this._trigger("resize", t, this.ui()), !1
                },
                _mouseStop: function(e) {
                    this.resizing = !1;
                    var i = this.options,
                        n = this;
                    if (this._helper) {
                        var s = this._proportionallyResizeElements,
                            r = s.length && /textarea/i.test(s[0].nodeName),
                            a = r && t.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height,
                            o = r ? 0 : n.sizeDiff.width,
                            l = {
                                width: n.helper.width() - o,
                                height: n.helper.height() - a
                            },
                            u = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                            c = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                        i.animate || this.element.css(t.extend(l, {
                                top: c,
                                left: u
                            })),
                            n.helper.height(n.size.height),
                            n.helper.width(n.size.width),
                            this._helper && !i.animate && this._proportionallyResize()
                    }
                    return t("body").css("cursor", "auto"),
                        this.element.removeClass("ui-resizable-resizing"),
                        this._propagate("stop", e),
                        this._helper && this.helper.remove(), !1
                },
                _updateVirtualBoundaries: function(t) {
                    var e, n, s, r, a, o = this.options;
                    a = {
                            minWidth: i(o.minWidth) ? o.minWidth : 0,
                            maxWidth: i(o.maxWidth) ? o.maxWidth : 1 / 0,
                            minHeight: i(o.minHeight) ? o.minHeight : 0,
                            maxHeight: i(o.maxHeight) ? o.maxHeight : 1 / 0
                        },
                        (this._aspectRatio || t) && (e = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, n = a.maxHeight * this.aspectRatio, r = a.maxWidth / this.aspectRatio, e > a.minWidth && (a.minWidth = e), s > a.minHeight && (a.minHeight = s), a.maxWidth > n && (a.maxWidth = n), a.maxHeight > r && (a.maxHeight = r)),
                        this._vBoundaries = a
                },
                _updateCache: function(t) {
                    this.options,
                        this.offset = this.helper.offset(),
                        i(t.left) && (this.position.left = t.left),
                        i(t.top) && (this.position.top = t.top),
                        i(t.height) && (this.size.height = t.height),
                        i(t.width) && (this.size.width = t.width)
                },
                _updateRatio: function(t) {
                    var e = (this.options, this.position),
                        n = this.size,
                        s = this.axis;
                    return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio),
                        "sw" == s && (t.left = e.left + (n.width - t.width), t.top = null),
                        "nw" == s && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)),
                        t
                },
                _respectSize: function(t, e) {
                    var n = (this.helper, this._vBoundaries),
                        s = (this._aspectRatio || e.shiftKey, this.axis),
                        r = i(t.width) && n.maxWidth && n.maxWidth < t.width,
                        a = i(t.height) && n.maxHeight && n.maxHeight < t.height,
                        o = i(t.width) && n.minWidth && n.minWidth > t.width,
                        l = i(t.height) && n.minHeight && n.minHeight > t.height;
                    o && (t.width = n.minWidth),
                        l && (t.height = n.minHeight),
                        r && (t.width = n.maxWidth),
                        a && (t.height = n.maxHeight);
                    var u = this.originalPosition.left + this.originalSize.width,
                        c = this.position.top + this.size.height,
                        h = /sw|nw|w/.test(s),
                        d = /nw|ne|n/.test(s);
                    o && h && (t.left = u - n.minWidth),
                        r && h && (t.left = u - n.maxWidth),
                        l && d && (t.top = c - n.minHeight),
                        a && d && (t.top = c - n.maxHeight);
                    var p = !t.width && !t.height;
                    return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null),
                        t
                },
                _proportionallyResize: function() {
                    if (this.options, this._proportionallyResizeElements.length)
                        for (var e = this.helper || this.element,
                                i = 0; this._proportionallyResizeElements.length > i; i++) {
                            var n = this._proportionallyResizeElements[i];
                            if (!this.borderDif) {
                                var s = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                                    r = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")];
                                this.borderDif = t.map(s,
                                    function(t, e) {
                                        var i = parseInt(t, 10) || 0,
                                            n = parseInt(r[e], 10) || 0;
                                        return i + n
                                    })
                            }
                            n.css({
                                height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                                width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                            })
                        }
                },
                _renderProxy: function() {
                    var e = this.element,
                        i = this.options;
                    if (this.elementOffset = e.offset(), this._helper) {
                        this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                        var n = t.ui.ie6 ? 1 : 0,
                            s = t.ui.ie6 ? 2 : -1;
                        this.helper.addClass(this._helper).css({
                                width: this.element.outerWidth() + s,
                                height: this.element.outerHeight() + s,
                                position: "absolute",
                                left: this.elementOffset.left - n + "px",
                                top: this.elementOffset.top - n + "px",
                                zIndex: ++i.zIndex
                            }),
                            this.helper.appendTo("body").disableSelection()
                    } else this.helper = this.element
                },
                _change: {
                    e: function(t, e) {
                        return {
                            width: this.originalSize.width + e
                        }
                    },
                    w: function(t, e) {
                        var i = (this.options, this.originalSize),
                            n = this.originalPosition;
                        return {
                            left: n.left + e,
                            width: i.width - e
                        }
                    },
                    n: function(t, e, i) {
                        var n = (this.options, this.originalSize),
                            s = this.originalPosition;
                        return {
                            top: s.top + i,
                            height: n.height - i
                        }
                    },
                    s: function(t, e, i) {
                        return {
                            height: this.originalSize.height + i
                        }
                    },
                    se: function(e, i, n) {
                        return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                    },
                    sw: function(e, i, n) {
                        return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                    },
                    ne: function(e, i, n) {
                        return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                    },
                    nw: function(e, i, n) {
                        return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                    }
                },
                _propagate: function(e, i) {
                    t.ui.plugin.call(this, e, [i, this.ui()]),
                        "resize" != e && this._trigger(e, i, this.ui())
                },
                plugins: {},
                ui: function() {
                    return {
                        originalElement: this.originalElement,
                        element: this.element,
                        helper: this.helper,
                        position: this.position,
                        size: this.size,
                        originalSize: this.originalSize,
                        originalPosition: this.originalPosition
                    }
                }
            }),
            t.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var e = t(this).data("resizable"),
                        i = e.options,
                        n = function(e) {
                            t(e).each(function() {
                                var e = t(this);
                                e.data("resizable-alsoresize", {
                                    width: parseInt(e.width(), 10),
                                    height: parseInt(e.height(), 10),
                                    left: parseInt(e.css("left"), 10),
                                    top: parseInt(e.css("top"), 10)
                                })
                            })
                        };
                    "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize,
                        function(t) {
                            n(t)
                        })
                },
                resize: function(e, i) {
                    var n = t(this).data("resizable"),
                        s = n.options,
                        r = n.originalSize,
                        a = n.originalPosition,
                        o = {
                            height: n.size.height - r.height || 0,
                            width: n.size.width - r.width || 0,
                            top: n.position.top - a.top || 0,
                            left: n.position.left - a.left || 0
                        },
                        l = function(e, n) {
                            t(e).each(function() {
                                var e = t(this),
                                    s = t(this).data("resizable-alsoresize"),
                                    r = {},
                                    a = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                t.each(a,
                                        function(t, e) {
                                            var i = (s[e] || 0) + (o[e] || 0);
                                            i && i >= 0 && (r[e] = i || null)
                                        }),
                                    e.css(r)
                            })
                        };
                    "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize,
                        function(t, e) {
                            l(t, e)
                        })
                },
                stop: function() {
                    t(this).removeData("resizable-alsoresize")
                }
            }),
            t.ui.plugin.add("resizable", "animate", {
                stop: function(e) {
                    var i = t(this).data("resizable"),
                        n = i.options,
                        s = i._proportionallyResizeElements,
                        r = s.length && /textarea/i.test(s[0].nodeName),
                        a = r && t.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                        o = r ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.size.width - o,
                            height: i.size.height - a
                        },
                        u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                        c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(t.extend(l, c && u ? {
                        top: c,
                        left: u
                    } : {}), {
                        duration: n.animateDuration,
                        easing: n.animateEasing,
                        step: function() {
                            var n = {
                                width: parseInt(i.element.css("width"), 10),
                                height: parseInt(i.element.css("height"), 10),
                                top: parseInt(i.element.css("top"), 10),
                                left: parseInt(i.element.css("left"), 10)
                            };
                            s && s.length && t(s[0]).css({
                                    width: n.width,
                                    height: n.height
                                }),
                                i._updateCache(n),
                                i._propagate("resize", e)
                        }
                    })
                }
            }),
            t.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var i = t(this).data("resizable"),
                        n = i.options,
                        s = i.element,
                        r = n.containment,
                        a = r instanceof t ? r.get(0) : /parent/.test(r) ? s.parent().get(0) : r;
                    if (a)
                        if (i.containerElement = t(a), /document/.test(r) || r == document) i.containerOffset = {
                                left: 0,
                                top: 0
                            },
                            i.containerPosition = {
                                left: 0,
                                top: 0
                            },
                            i.parentData = {
                                element: t(document),
                                left: 0,
                                top: 0,
                                width: t(document).width(),
                                height: t(document).height() || document.body.parentNode.scrollHeight
                            };
                        else {
                            var o = t(a),
                                l = [];
                            t(["Top", "Right", "Left", "Bottom"]).each(function(t, i) {
                                    l[t] = e(o.css("padding" + i))
                                }),
                                i.containerOffset = o.offset(),
                                i.containerPosition = o.position(),
                                i.containerSize = {
                                    height: o.innerHeight() - l[3],
                                    width: o.innerWidth() - l[1]
                                };
                            var u = i.containerOffset,
                                c = i.containerSize.height,
                                h = i.containerSize.width,
                                d = t.ui.hasScroll(a, "left") ? a.scrollWidth : h,
                                p = t.ui.hasScroll(a) ? a.scrollHeight : c;
                            i.parentData = {
                                element: a,
                                left: u.left,
                                top: u.top,
                                width: d,
                                height: p
                            }
                        }
                },
                resize: function(e) {
                    var i = t(this).data("resizable"),
                        n = i.options,
                        s = (i.containerSize, i.containerOffset),
                        r = (i.size, i.position),
                        a = i._aspectRatio || e.shiftKey,
                        o = {
                            top: 0,
                            left: 0
                        },
                        l = i.containerElement;
                    l[0] != document && /static/.test(l.css("position")) && (o = s),
                        r.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - o.left), a && (i.size.height = i.size.width / i.aspectRatio), i.position.left = n.helper ? s.left : 0),
                        r.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), a && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? s.top : 0),
                        i.offset.left = i.parentData.left + i.position.left,
                        i.offset.top = i.parentData.top + i.position.top;
                    var u = Math.abs((i._helper ? i.offset.left - o.left : i.offset.left - o.left) + i.sizeDiff.width),
                        c = Math.abs((i._helper ? i.offset.top - o.top : i.offset.top - s.top) + i.sizeDiff.height),
                        h = i.containerElement.get(0) == i.element.parent().get(0),
                        d = /relative|absolute/.test(i.containerElement.css("position"));
                    h && d && (u -= i.parentData.left),
                        u + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - u, a && (i.size.height = i.size.width / i.aspectRatio)),
                        c + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - c, a && (i.size.width = i.size.height * i.aspectRatio))
                },
                stop: function() {
                    var e = t(this).data("resizable"),
                        i = e.options,
                        n = (e.position, e.containerOffset),
                        s = e.containerPosition,
                        r = e.containerElement,
                        a = t(e.helper),
                        o = a.offset(),
                        l = a.outerWidth() - e.sizeDiff.width,
                        u = a.outerHeight() - e.sizeDiff.height;
                    e._helper && !i.animate && /relative/.test(r.css("position")) && t(this).css({
                            left: o.left - s.left - n.left,
                            width: l,
                            height: u
                        }),
                        e._helper && !i.animate && /static/.test(r.css("position")) && t(this).css({
                            left: o.left - s.left - n.left,
                            width: l,
                            height: u
                        })
                }
            }),
            t.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var e = t(this).data("resizable"),
                        i = e.options,
                        n = e.size;
                    e.ghost = e.originalElement.clone(),
                        e.ghost.css({
                            opacity: .25,
                            display: "block",
                            position: "relative",
                            height: n.height,
                            width: n.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
                        e.ghost.appendTo(e.helper)
                },
                resize: function() {
                    var e = t(this).data("resizable");
                    e.options,
                        e.ghost && e.ghost.css({
                            position: "relative",
                            height: e.size.height,
                            width: e.size.width
                        })
                },
                stop: function() {
                    var e = t(this).data("resizable");
                    e.options,
                        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
                }
            }),
            t.ui.plugin.add("resizable", "grid", {
                resize: function(e) {
                    var i = t(this).data("resizable"),
                        n = i.options,
                        s = i.size,
                        r = i.originalSize,
                        a = i.originalPosition,
                        o = i.axis;
                    n._aspectRatio || e.shiftKey,
                        n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
                    var l = Math.round((s.width - r.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                        u = Math.round((s.height - r.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
                    /^(se|s|e)$/.test(o) ? (i.size.width = r.width + l, i.size.height = r.height + u) : /^(ne)$/.test(o) ? (i.size.width = r.width + l, i.size.height = r.height + u, i.position.top = a.top - u) : /^(sw)$/.test(o) ? (i.size.width = r.width + l, i.size.height = r.height + u, i.position.left = a.left - l) : (i.size.width = r.width + l, i.size.height = r.height + u, i.position.top = a.top - u, i.position.left = a.left - l)
                }
            });
        var e = function(t) {
                return parseInt(t, 10) || 0
            },
            i = function(t) {
                return !isNaN(parseInt(t, 10))
            }
    }(jQuery),
    function(t) {
        t.widget("ui.selectable", t.ui.mouse, {
            version: "1.9.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch"
            },
            _create: function() {
                var e = this;
                this.element.addClass("ui-selectable"),
                    this.dragged = !1;
                var i;
                this.refresh = function() {
                        i = t(e.options.filter, e.element[0]),
                            i.addClass("ui-selectee"),
                            i.each(function() {
                                var e = t(this),
                                    i = e.offset();
                                t.data(this, "selectable-item", {
                                    element: this,
                                    $element: e,
                                    left: i.left,
                                    top: i.top,
                                    right: i.left + e.outerWidth(),
                                    bottom: i.top + e.outerHeight(),
                                    startselected: !1,
                                    selected: e.hasClass("ui-selected"),
                                    selecting: e.hasClass("ui-selecting"),
                                    unselecting: e.hasClass("ui-unselecting")
                                })
                            })
                    },
                    this.refresh(),
                    this.selectees = i.addClass("ui-selectee"),
                    this._mouseInit(),
                    this.helper = t("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
                    this.element.removeClass("ui-selectable ui-selectable-disabled"),
                    this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var i = this;
                if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                    var n = this.options;
                    this.selectees = t(n.filter, this.element[0]),
                        this._trigger("start", e),
                        t(n.appendTo).append(this.helper),
                        this.helper.css({
                            left: e.clientX,
                            top: e.clientY,
                            width: 0,
                            height: 0
                        }),
                        n.autoRefresh && this.refresh(),
                        this.selectees.filter(".ui-selected").each(function() {
                            var n = t.data(this, "selectable-item");
                            n.startselected = !0,
                                e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                                    unselecting: n.element
                                }))
                        }),
                        t(e.target).parents().andSelf().each(function() {
                            var n = t.data(this, "selectable-item");
                            if (n) {
                                var s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected");
                                return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"),
                                    n.unselecting = !s,
                                    n.selecting = s,
                                    n.selected = s,
                                    s ? i._trigger("selecting", e, {
                                        selecting: n.element
                                    }) : i._trigger("unselecting", e, {
                                        unselecting: n.element
                                    }), !1
                            }
                        })
                }
            },
            _mouseDrag: function(e) {
                var i = this;
                if (this.dragged = !0, !this.options.disabled) {
                    var n = this.options,
                        s = this.opos[0],
                        r = this.opos[1],
                        a = e.pageX,
                        o = e.pageY;
                    if (s > a) {
                        var l = a;
                        a = s,
                            s = l
                    }
                    if (r > o) {
                        var l = o;
                        o = r,
                            r = l
                    }
                    return this.helper.css({
                            left: s,
                            top: r,
                            width: a - s,
                            height: o - r
                        }),
                        this.selectees.each(function() {
                            var l = t.data(this, "selectable-item");
                            if (l && l.element != i.element[0]) {
                                var u = !1;
                                "touch" == n.tolerance ? u = !(l.left > a || s > l.right || l.top > o || r > l.bottom) : "fit" == n.tolerance && (u = l.left > s && a > l.right && l.top > r && o > l.bottom),
                                    u ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", e, {
                                        selecting: l.element
                                    }))) : (l.selecting && ((e.metaKey || e.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", e, {
                                        unselecting: l.element
                                    }))), l.selected && (e.metaKey || e.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {
                                        unselecting: l.element
                                    }))))
                            }
                        }), !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1,
                    this.options,
                    t(".ui-unselecting", this.element[0]).each(function() {
                        var n = t.data(this, "selectable-item");
                        n.$element.removeClass("ui-unselecting"),
                            n.unselecting = !1,
                            n.startselected = !1,
                            i._trigger("unselected", e, {
                                unselected: n.element
                            })
                    }),
                    t(".ui-selecting", this.element[0]).each(function() {
                        var n = t.data(this, "selectable-item");
                        n.$element.removeClass("ui-selecting").addClass("ui-selected"),
                            n.selecting = !1,
                            n.selected = !0,
                            n.startselected = !0,
                            i._trigger("selected", e, {
                                selected: n.element
                            })
                    }),
                    this._trigger("stop", e),
                    this.helper.remove(), !1
            }
        })
    }(jQuery),
    function(t) {
        t.widget("ui.sortable", t.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3
            },
            _create: function() {
                var t = this.options;
                this.containerCache = {},
                    this.element.addClass("ui-sortable"),
                    this.refresh(),
                    this.floating = this.items.length ? "x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1,
                    this.offset = this.element.offset(),
                    this._mouseInit(),
                    this.ready = !0
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled"),
                    this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function(e, i) {
                "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function(e, i) {
                var n = this;
                if (this.reverting) return !1;
                if (this.options.disabled || "static" == this.options.type) return !1;
                this._refreshItems(e);
                var s = null;
                if (t(e.target).parents().each(function() {
                        return t.data(this, n.widgetName + "-item") == n ? (s = t(this), !1) : void 0
                    }), t.data(e.target, n.widgetName + "-item") == n && (s = t(e.target)), !s) return !1;
                if (this.options.handle && !i) {
                    var r = !1;
                    if (t(this.options.handle, s).find("*").andSelf().each(function() {
                            this == e.target && (r = !0)
                        }), !r) return !1
                }
                return this.currentItem = s,
                    this._removeCurrentsFromItems(), !0
            },
            _mouseStart: function(e, i, n) {
                var s = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    },
                    this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (var r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this),
                    t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
                    this.dragging = !0,
                    this.helper.addClass("ui-sortable-helper"),
                    this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                    var i = this.options,
                        n = !1;
                    this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))),
                        n !== !1 && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
                }
                this.positionAbs = this._convertPositionTo("absolute"),
                    this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
                    this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
                for (var s = this.items.length - 1; s >= 0; s--) {
                    var r = this.items[s],
                        a = r.item[0],
                        o = this._intersectsWithPointer(r);
                    if (o && r.instance === this.currentContainer && a != this.currentItem[0] && this.placeholder[1 == o ? "next" : "prev"]()[0] != a && !t.contains(this.placeholder[0], a) && ("semi-dynamic" == this.options.type ? !t.contains(this.element[0], a) : !0)) {
                        if (this.direction = 1 == o ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(r)) break;
                        this._rearrange(e, r),
                            this._trigger("change", e, this._uiHash());
                        break
                    }
                }
                return this._contactContainers(e),
                    t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
                    this._trigger("sort", e, this._uiHash()),
                    this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset();
                        this.reverting = !0,
                            t(this.helper).animate({
                                    left: s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                                    top: s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                                },
                                parseInt(this.options.revert, 10) || 500,
                                function() {
                                    n._clear(e)
                                })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                            target: null
                        }),
                        "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                        this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
                    this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {},
                    t(i).each(function() {
                        var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                        i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                    }), !n.length && e.key && n.push(e.key + "="),
                    n.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {},
                    i.each(function() {
                        n.push(t(e.item || this).attr(e.attribute || "id") || "")
                    }),
                    n
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    r = t.left,
                    a = r + t.width,
                    o = t.top,
                    l = o + t.height,
                    u = this.offset.click.top,
                    c = this.offset.click.left,
                    h = n + u > o && l > n + u && e + c > r && a > e + c;
                return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? h : e + this.helperProportions.width / 2 > r && a > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > o && l > s - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(e) {
                var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    n = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    s = i && n,
                    r = this._getDragVerticalDirection(),
                    a = this._getDragHorizontalDirection();
                return s ? this.floating ? a && "right" == a || "down" == r ? 2 : 1 : r && ("down" == r ? 2 : 1) : !1
            },
            _intersectsWithSides: function(e) {
                var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    n = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    s = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return this.floating && r ? "right" == r && n || "left" == r && !n : s && ("down" == s && i || "up" == s && !i)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 != t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 != t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t),
                    this.refreshPositions(),
                    this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                var i = [],
                    n = [],
                    s = this._connectWith();
                if (s && e)
                    for (var r = s.length - 1; r >= 0; r--)
                        for (var a = t(s[r]), o = a.length - 1; o >= 0; o--) {
                            var l = t.data(a[o], this.widgetName);
                            l && l != this && !l.options.disabled && n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element) : t(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                        }
                n.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                for (var r = n.length - 1; r >= 0; r--) n[r][0].each(function() {
                    i.push(this)
                });
                return t(i)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items,
                    function(t) {
                        for (var i = 0; e.length > i; i++)
                            if (e[i] == t.item[0]) return !1;
                        return !0
                    })
            },
            _refreshItems: function(e) {
                this.items = [],
                    this.containers = [this];
                var i = this.items,
                    n = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    s = this._connectWith();
                if (s && this.ready)
                    for (var r = s.length - 1; r >= 0; r--)
                        for (var a = t(s[r]), o = a.length - 1; o >= 0; o--) {
                            var l = t.data(a[o], this.widgetName);
                            l && l != this && !l.options.disabled && (n.push([t.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
                                item: this.currentItem
                            }) : t(l.options.items, l.element), l]), this.containers.push(l))
                        }
                for (var r = n.length - 1; r >= 0; r--)
                    for (var u = n[r][1], c = n[r][0], o = 0, h = c.length; h > o; o++) {
                        var d = t(c[o]);
                        d.data(this.widgetName + "-item", u),
                            i.push({
                                item: d,
                                instance: u,
                                width: 0,
                                height: 0,
                                left: 0,
                                top: 0
                            })
                    }
            },
            refreshPositions: function(e) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var i = this.items.length - 1; i >= 0; i--) {
                    var n = this.items[i];
                    if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                        var s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item;
                        e || (n.width = s.outerWidth(), n.height = s.outerHeight());
                        var r = s.offset();
                        n.left = r.left,
                            n.top = r.top
                    }
                }
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (var i = this.containers.length - 1; i >= 0; i--) {
                        var r = this.containers[i].element.offset();
                        this.containers[i].containerCache.left = r.left,
                            this.containers[i].containerCache.top = r.top,
                            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                            this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
                    }
                return this
            },
            _createPlaceholder: function(e) {
                e = e || this;
                var i = e.options;
                if (!i.placeholder || i.placeholder.constructor == String) {
                    var n = i.placeholder;
                    i.placeholder = {
                        element: function() {
                            var i = t(document.createElement(e.currentItem[0].nodeName)).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                            return n || (i.style.visibility = "hidden"),
                                i
                        },
                        update: function(t, s) {
                            (!n || i.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }
                }
                e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)),
                    e.currentItem.after(e.placeholder),
                    i.placeholder.update(e, e.placeholder)
            },
            _contactContainers: function(e) {
                for (var i = null,
                        n = null,
                        s = this.containers.length - 1; s >= 0; s--)
                    if (!t.contains(this.currentItem[0], this.containers[s].element[0]))
                        if (this._intersectsWith(this.containers[s].containerCache)) {
                            if (i && t.contains(this.containers[s].element[0], i.element[0])) continue;
                            i = this.containers[s],
                                n = s
                        } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", e, this._uiHash(this)), this.containers[s].containerCache.over = 0);
                if (i)
                    if (1 === this.containers.length) this.containers[n]._trigger("over", e, this._uiHash(this)),
                        this.containers[n].containerCache.over = 1;
                    else {
                        for (var r = 1e4,
                                a = null,
                                o = this.containers[n].floating ? "left" : "top", l = this.containers[n].floating ? "width" : "height", u = this.positionAbs[o] + this.offset.click[o], c = this.items.length - 1; c >= 0; c--)
                            if (t.contains(this.containers[n].element[0], this.items[c].item[0]) && this.items[c].item[0] != this.currentItem[0]) {
                                var h = this.items[c].item.offset()[o],
                                    d = !1;
                                Math.abs(h - u) > Math.abs(h + this.items[c][l] - u) && (d = !0, h += this.items[c][l]),
                                    r > Math.abs(h - u) && (r = Math.abs(h - u), a = this.items[c], this.direction = d ? "up" : "down")
                            }
                        if (!a && !this.options.dropOnEmpty) return;
                        this.currentContainer = this.containers[n],
                            a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[n].element, !0),
                            this._trigger("change", e, this._uiHash()),
                            this.containers[n]._trigger("change", e, this._uiHash(this)),
                            this.options.placeholder.update(this.currentContainer, this.placeholder),
                            this.containers[n]._trigger("over", e, this._uiHash(this)),
                            this.containers[n].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]),
                    n[0] == this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }),
                    ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()),
                    ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()),
                    n
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")),
                    t.isArray(e) && (e = {
                        left: +e[0],
                        top: +e[1] || 0
                    }),
                    "left" in e && (this.offset.click.left = e.left + this.margins.left),
                    "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                    "top" in e && (this.offset.click.top = e.top + this.margins.top),
                    "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
                    (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                        top: 0,
                        left: 0
                    }), {
                        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
            },
            _getRelativeOffset: function() {
                if ("relative" == this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e = this.options;
                if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                    var i = t(e.containment)[0],
                        n = t(e.containment).offset(),
                        s = "hidden" != t(i).css("overflow");
                    this.containment = [n.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                }
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" == e ? 1 : -1,
                    s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                    r = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var i = this.options,
                    n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(n[0].tagName);
                "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
                var r = e.pageX,
                    a = e.pageY;
                if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), i.grid)) {
                    var o = this.originalPageY + Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1];
                    a = this.containment && (o - this.offset.click.top < this.containment[1] || o - this.offset.click.top > this.containment[3]) ? o - this.offset.click.top < this.containment[1] ? o + i.grid[1] : o - i.grid[1] : o;
                    var l = this.originalPageX + Math.round((r - this.originalPageX) / i.grid[0]) * i.grid[0];
                    r = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l
                }
                return {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                    left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling),
                    this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s == this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(e, i) {
                this.reverting = !1;
                var n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                    for (var s in this._storedCSS)("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                this.fromOutside && !i && n.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }),
                    this !== this.currentContainer && (i || (n.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), n.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), n.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer))));
                for (var s = this.containers.length - 1; s >= 0; s--) i || n.push(function(t) {
                        return function(e) {
                            t._trigger("deactivate", e, this._uiHash(this))
                        }
                    }.call(this, this.containers[s])),
                    this.containers[s].containerCache.over && (n.push(function(t) {
                        return function(e) {
                            t._trigger("out", e, this._uiHash(this))
                        }
                    }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!i) {
                        this._trigger("beforeStop", e, this._uiHash());
                        for (var s = 0; n.length > s; s++) n[s].call(this, e);
                        this._trigger("stop", e, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                    for (var s = 0; n.length > s; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function() {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }(jQuery),
    function(t) {
        var e = 0,
            i = {},
            n = {};
        i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide",
            n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "show",
            t.widget("ui.accordion", {
                version: "1.9.2",
                options: {
                    active: 0,
                    animate: {},
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child,> :not(li):even",
                    heightStyle: "auto",
                    icons: {
                        activeHeader: "ui-icon-triangle-1-s",
                        header: "ui-icon-triangle-1-e"
                    },
                    activate: null,
                    beforeActivate: null
                },
                _create: function() {
                    var i = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e),
                        n = this.options;
                    this.prevShow = this.prevHide = t(),
                        this.element.addClass("ui-accordion ui-widget ui-helper-reset"),
                        this.headers = this.element.find(n.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),
                        this._hoverable(this.headers),
                        this._focusable(this.headers),
                        this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),
                        n.collapsible || n.active !== !1 && null != n.active || (n.active = 0),
                        0 > n.active && (n.active += this.headers.length),
                        this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"),
                        this.active.next().addClass("ui-accordion-content-active").show(),
                        this._createIcons(),
                        this.refresh(),
                        this.element.attr("role", "tablist"),
                        this.headers.attr("role", "tab").each(function(e) {
                            var n = t(this),
                                s = n.attr("id"),
                                r = n.next(),
                                a = r.attr("id");
                            s || (s = i + "-header-" + e, n.attr("id", s)),
                                a || (a = i + "-panel-" + e, r.attr("id", a)),
                                n.attr("aria-controls", a),
                                r.attr("aria-labelledby", s)
                        }).next().attr("role", "tabpanel"),
                        this.headers.not(this.active).attr({
                            "aria-selected": "false",
                            tabIndex: -1
                        }).next().attr({
                            "aria-expanded": "false",
                            "aria-hidden": "true"
                        }).hide(),
                        this.active.length ? this.active.attr({
                            "aria-selected": "true",
                            tabIndex: 0
                        }).next().attr({
                            "aria-expanded": "true",
                            "aria-hidden": "false"
                        }) : this.headers.eq(0).attr("tabIndex", 0),
                        this._on(this.headers, {
                            keydown: "_keydown"
                        }),
                        this._on(this.headers.next(), {
                            keydown: "_panelKeyDown"
                        }),
                        this._setupEvents(n.event)
                },
                _getCreateEventData: function() {
                    return {
                        header: this.active,
                        content: this.active.length ? this.active.next() : t()
                    }
                },
                _createIcons: function() {
                    var e = this.options.icons;
                    e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() {
                    this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                },
                _destroy: function() {
                    var t;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
                        this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                            / ^ui - accordion /.test(this.id) && this.removeAttribute("id")
                        }),
                        this._destroyIcons(),
                        t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                            / ^ui - accordion /.test(this.id) && this.removeAttribute("id")
                        }),
                        "content" !== this.options.heightStyle && t.css("height", "")
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e)))
                },
                _keydown: function(e) {
                    if (!e.altKey && !e.ctrlKey) {
                        var i = t.ui.keyCode,
                            n = this.headers.length,
                            s = this.headers.index(e.target),
                            r = !1;
                        switch (e.keyCode) {
                            case i.RIGHT:
                            case i.DOWN:
                                r = this.headers[(s + 1) % n];
                                break;
                            case i.LEFT:
                            case i.UP:
                                r = this.headers[(s - 1 + n) % n];
                                break;
                            case i.SPACE:
                            case i.ENTER:
                                this._eventHandler(e);
                                break;
                            case i.HOME:
                                r = this.headers[0];
                                break;
                            case i.END:
                                r = this.headers[n - 1]
                        }
                        r && (t(e.target).attr("tabIndex", -1), t(r).attr("tabIndex", 0), r.focus(), e.preventDefault())
                    }
                },
                _panelKeyDown: function(e) {
                    e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
                },
                refresh: function() {
                    var e, i, n = this.options.heightStyle,
                        s = this.element.parent();
                    "fill" === n ? (t.support.minHeight || (i = s.css("overflow"), s.css("overflow", "hidden")), e = s.height(), this.element.siblings(":visible").each(function() {
                        var i = t(this),
                            n = i.css("position");
                        "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                    }), i && s.css("overflow", i), this.headers.each(function() {
                        e -= t(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                    }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                        e = Math.max(e, t(this).css("height", "").height())
                    }).height(e))
                },
                _activate: function(e) {
                    var i = this._findActive(e)[0];
                    i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                        target: i,
                        currentTarget: i,
                        preventDefault: t.noop
                    }))
                },
                _findActive: function(e) {
                    return "number" == typeof e ? this.headers.eq(e) : t()
                },
                _setupEvents: function(e) {
                    var i = {};
                    e && (t.each(e.split(" "),
                        function(t, e) {
                            i[e] = "_eventHandler"
                        }), this._on(this.headers, i))
                },
                _eventHandler: function(e) {
                    var i = this.options,
                        n = this.active,
                        s = t(e.currentTarget),
                        r = s[0] === n[0],
                        a = r && i.collapsible,
                        o = a ? t() : s.next(),
                        l = n.next(),
                        u = {
                            oldHeader: n,
                            oldPanel: l,
                            newHeader: a ? t() : s,
                            newPanel: o
                        };
                    e.preventDefault(),
                        r && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = a ? !1 : this.headers.index(s), this.active = r ? t() : s, this._toggle(u), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), r || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(e) {
                    var i = e.newPanel,
                        n = this.prevShow.length ? this.prevShow : e.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0),
                        this.prevShow = i,
                        this.prevHide = n,
                        this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)),
                        n.attr({
                            "aria-expanded": "false",
                            "aria-hidden": "true"
                        }),
                        n.prev().attr("aria-selected", "false"),
                        i.length && n.length ? n.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
                            return 0 === t(this).attr("tabIndex")
                        }).attr("tabIndex", -1),
                        i.attr({
                            "aria-expanded": "true",
                            "aria-hidden": "false"
                        }).prev().attr({
                            "aria-selected": "true",
                            tabIndex: 0
                        })
                },
                _animate: function(t, e, s) {
                    var r, a, o, l = this,
                        u = 0,
                        c = t.length && (!e.length || t.index() < e.index()),
                        h = this.options.animate || {},
                        d = c && h.down || h,
                        p = function() {
                            l._toggleComplete(s)
                        };
                    return "number" == typeof d && (o = d),
                        "string" == typeof d && (a = d),
                        a = a || d.easing || h.easing,
                        o = o || d.duration || h.duration,
                        e.length ? t.length ? (r = t.show().outerHeight(), e.animate(i, {
                            duration: o,
                            easing: a,
                            step: function(t, e) {
                                e.now = Math.round(t)
                            }
                        }), void t.hide().animate(n, {
                            duration: o,
                            easing: a,
                            complete: p,
                            step: function(t, i) {
                                i.now = Math.round(t),
                                    "height" !== i.prop ? u += i.now : "content" !== l.options.heightStyle && (i.now = Math.round(r - e.outerHeight() - u), u = 0)
                            }
                        })) : e.animate(i, o, a, p) : t.animate(n, o, a, p)
                },
                _toggleComplete: function(t) {
                    var e = t.oldPanel;
                    e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
                        e.length && (e.parent()[0].className = e.parent()[0].className),
                        this._trigger("activate", null, t)
                }
            }),
            t.uiBackCompat !== !1 && (function(t, e) {
                    t.extend(e.options, {
                        navigation: !1,
                        navigationFilter: function() {
                            return this.href.toLowerCase() === location.href.toLowerCase()
                        }
                    });
                    var i = e._create;
                    e._create = function() {
                        if (this.options.navigation) {
                            var e = this,
                                n = this.element.find(this.options.header),
                                s = n.next(),
                                r = n.add(s).find("a").filter(this.options.navigationFilter)[0];
                            r && n.add(s).each(function(i) {
                                return t.contains(this, r) ? (e.options.active = Math.floor(i / 2), !1) : void 0
                            })
                        }
                        i.call(this)
                    }
                }(jQuery, jQuery.ui.accordion.prototype),
                function(t, e) {
                    t.extend(e.options, {
                        heightStyle: null,
                        autoHeight: !0,
                        clearStyle: !1,
                        fillSpace: !1
                    });
                    var i = e._create,
                        n = e._setOption;
                    t.extend(e, {
                        _create: function() {
                            this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(),
                                i.call(this)
                        },
                        _setOption: function(t) {
                            ("autoHeight" === t || "clearStyle" === t || "fillSpace" === t) && (this.options.heightStyle = this._mergeHeightStyle()),
                            n.apply(this, arguments)
                        },
                        _mergeHeightStyle: function() {
                            var t = this.options;
                            return t.fillSpace ? "fill" : t.clearStyle ? "content" : t.autoHeight ? "auto" : void 0
                        }
                    })
                }(jQuery, jQuery.ui.accordion.prototype),
                function(t, e) {
                    t.extend(e.options.icons, {
                        activeHeader: null,
                        headerSelected: "ui-icon-triangle-1-s"
                    });
                    var i = e._createIcons;
                    e._createIcons = function() {
                        this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected),
                            i.call(this)
                    }
                }(jQuery, jQuery.ui.accordion.prototype),
                function(t, e) {
                    e.activate = e._activate;
                    var i = e._findActive;
                    e._findActive = function(t) {
                        return -1 === t && (t = !1),
                            t && "number" != typeof t && (t = this.headers.index(this.headers.filter(t)), -1 === t && (t = !1)),
                            i.call(this, t)
                    }
                }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh,
                function(t, e) {
                    t.extend(e.options, {
                        change: null,
                        changestart: null
                    });
                    var i = e._trigger;
                    e._trigger = function(t, e, n) {
                        var s = i.apply(this, arguments);
                        return s ? ("beforeActivate" === t ? s = i.call(this, "changestart", e, {
                            oldHeader: n.oldHeader,
                            oldContent: n.oldPanel,
                            newHeader: n.newHeader,
                            newContent: n.newPanel
                        }) : "activate" === t && (s = i.call(this, "change", e, {
                            oldHeader: n.oldHeader,
                            oldContent: n.oldPanel,
                            newHeader: n.newHeader,
                            newContent: n.newPanel
                        })), s) : !1
                    }
                }(jQuery, jQuery.ui.accordion.prototype),
                function(t, e) {
                    t.extend(e.options, {
                        animate: null,
                        animated: "slide"
                    });
                    var i = e._create;
                    e._create = function() {
                        var t = this.options;
                        null === t.animate && (t.animate = t.animated ? "slide" === t.animated ? 300 : "bounceslide" === t.animated ? {
                                duration: 200,
                                down: {
                                    easing: "easeOutBounce",
                                    duration: 1e3
                                }
                            } : t.animated : !1),
                            i.call(this)
                    }
                }(jQuery, jQuery.ui.accordion.prototype))
    }(jQuery),
    function(t) {
        var e = 0;
        t.widget("ui.autocomplete", {
                version: "1.9.2",
                defaultElement: "<input>",
                options: {
                    appendTo: "body",
                    autoFocus: !1,
                    delay: 300,
                    minLength: 1,
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    source: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    response: null,
                    search: null,
                    select: null
                },
                pending: 0,
                _create: function() {
                    var e, i, n;
                    this.isMultiLine = this._isMultiLine(),
                        this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"],
                        this.isNewMenu = !0,
                        this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
                        this._on(this.element, {
                            keydown: function(s) {
                                if (this.element.prop("readOnly")) return e = !0,
                                    n = !0,
                                    void(i = !0);
                                e = !1,
                                    n = !1,
                                    i = !1;
                                var r = t.ui.keyCode;
                                switch (s.keyCode) {
                                    case r.PAGE_UP:
                                        e = !0,
                                            this._move("previousPage", s);
                                        break;
                                    case r.PAGE_DOWN:
                                        e = !0,
                                            this._move("nextPage", s);
                                        break;
                                    case r.UP:
                                        e = !0,
                                            this._keyEvent("previous", s);
                                        break;
                                    case r.DOWN:
                                        e = !0,
                                            this._keyEvent("next", s);
                                        break;
                                    case r.ENTER:
                                    case r.NUMPAD_ENTER:
                                        this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                        break;
                                    case r.TAB:
                                        this.menu.active && this.menu.select(s);
                                        break;
                                    case r.ESCAPE:
                                        this.menu.element.is(":visible") && (this._value(this.term), this.close(s), s.preventDefault());
                                        break;
                                    default:
                                        i = !0,
                                            this._searchTimeout(s)
                                }
                            },
                            keypress: function(n) {
                                if (e) return e = !1,
                                    void n.preventDefault();
                                if (!i) {
                                    var s = t.ui.keyCode;
                                    switch (n.keyCode) {
                                        case s.PAGE_UP:
                                            this._move("previousPage", n);
                                            break;
                                        case s.PAGE_DOWN:
                                            this._move("nextPage", n);
                                            break;
                                        case s.UP:
                                            this._keyEvent("previous", n);
                                            break;
                                        case s.DOWN:
                                            this._keyEvent("next", n)
                                    }
                                }
                            },
                            input: function(t) {
                                return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                            },
                            focus: function() {
                                this.selectedItem = null,
                                    this.previous = this._value()
                            },
                            blur: function(t) {
                                return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                            }
                        }),
                        this._initSource(),
                        this.menu = t("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({
                            input: t(),
                            role: null
                        }).zIndex(this.element.zIndex() + 1).hide().data("menu"),
                        this._on(this.menu.element, {
                            mousedown: function(e) {
                                e.preventDefault(),
                                    this.cancelBlur = !0,
                                    this._delay(function() {
                                        delete this.cancelBlur
                                    });
                                var i = this.menu.element[0];
                                t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                                    var e = this;
                                    this.document.one("mousedown",
                                        function(n) {
                                            n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                                        })
                                })
                            },
                            menufocus: function(e, i) {
                                if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(),
                                    void this.document.one("mousemove",
                                        function() {
                                            t(e.target).trigger(e.originalEvent)
                                        });
                                var n = i.item.data("ui-autocomplete-item") || i.item.data("item.autocomplete");
                                !1 !== this._trigger("focus", e, {
                                    item: n
                                }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value)
                            },
                            menuselect: function(t, e) {
                                var i = e.item.data("ui-autocomplete-item") || e.item.data("item.autocomplete"),
                                    n = this.previous;
                                this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                                        this.previous = n,
                                            this.selectedItem = i
                                    })), !1 !== this._trigger("select", t, {
                                        item: i
                                    }) && this._value(i.value),
                                    this.term = this._value(),
                                    this.close(t),
                                    this.selectedItem = i
                            }
                        }),
                        this.liveRegion = t("<span>", {
                            role: "status",
                            "aria-live": "polite"
                        }).addClass("ui-helper-hidden-accessible").insertAfter(this.element),
                        t.fn.bgiframe && this.menu.element.bgiframe(),
                        this._on(this.window, {
                            beforeunload: function() {
                                this.element.removeAttr("autocomplete")
                            }
                        })
                },
                _destroy: function() {
                    clearTimeout(this.searching),
                        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
                        this.menu.element.remove(),
                        this.liveRegion.remove()
                },
                _setOption: function(t, e) {
                    this._super(t, e),
                        "source" === t && this._initSource(),
                        "appendTo" === t && this.menu.element.appendTo(this.document.find(e || "body")[0]),
                        "disabled" === t && e && this.xhr && this.xhr.abort()
                },
                _isMultiLine: function() {
                    return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable")
                },
                _initSource: function() {
                    var e, i, n = this;
                    t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                        n(t.ui.autocomplete.filter(e, i.term))
                    }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                        n.xhr && n.xhr.abort(),
                            n.xhr = t.ajax({
                                url: i,
                                data: e,
                                dataType: "json",
                                success: function(t) {
                                    s(t)
                                },
                                error: function() {
                                    s([])
                                }
                            })
                    }) : this.source = this.options.source
                },
                _searchTimeout: function(t) {
                    clearTimeout(this.searching),
                        this.searching = this._delay(function() {
                                this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
                            },
                            this.options.delay)
                },
                search: function(t, e) {
                    return t = null != t ? t : this._value(),
                        this.term = this._value(),
                        t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
                },
                _search: function(t) {
                    this.pending++,
                        this.element.addClass("ui-autocomplete-loading"),
                        this.cancelSearch = !1,
                        this.source({
                                term: t
                            },
                            this._response())
                },
                _response: function() {
                    var t = this,
                        i = ++e;
                    return function(n) {
                        i === e && t.__response(n),
                            t.pending--,
                            t.pending || t.element.removeClass("ui-autocomplete-loading")
                    }
                },
                __response: function(t) {
                    t && (t = this._normalize(t)),
                        this._trigger("response", null, {
                            content: t
                        }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
                },
                close: function(t) {
                    this.cancelSearch = !0,
                        this._close(t)
                },
                _close: function(t) {
                    this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
                },
                _change: function(t) {
                    this.previous !== this._value() && this._trigger("change", t, {
                        item: this.selectedItem
                    })
                },
                _normalize: function(e) {
                    return e.length && e[0].label && e[0].value ? e : t.map(e,
                        function(e) {
                            return "string" == typeof e ? {
                                label: e,
                                value: e
                            } : t.extend({
                                    label: e.label || e.value,
                                    value: e.value || e.label
                                },
                                e)
                        })
                },
                _suggest: function(e) {
                    var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                    this._renderMenu(i, e),
                        this.menu.refresh(),
                        i.show(),
                        this._resizeMenu(),
                        i.position(t.extend({
                                of: this.element
                            },
                            this.options.position)),
                        this.options.autoFocus && this.menu.next()
                },
                _resizeMenu: function() {
                    var t = this.menu.element;
                    t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(e, i) {
                    var n = this;
                    t.each(i,
                        function(t, i) {
                            n._renderItemData(e, i)
                        })
                },
                _renderItemData: function(t, e) {
                    return this._renderItem(t, e).data("ui-autocomplete-item", e)
                },
                _renderItem: function(e, i) {
                    return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
                },
                _move: function(t, e) {
                    return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
                },
                widget: function() {
                    return this.menu.element
                },
                _value: function() {
                    return this.valueMethod.apply(this.element, arguments)
                },
                _keyEvent: function(t, e) {
                    (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
                }
            }),
            t.extend(t.ui.autocomplete, {
                escapeRegex: function(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(e, i) {
                    var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                    return t.grep(e,
                        function(t) {
                            return n.test(t.label || t.value || t)
                        })
                }
            }),
            t.widget("ui.autocomplete", t.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(t) {
                            return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(t) {
                    var e;
                    this._superApply(arguments),
                        this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
                }
            })
    }(jQuery),
    function(t) {
        var e, i, n, s, r = "ui-button ui-widget ui-state-default ui-corner-all",
            a = "ui-state-hover ui-state-active ",
            o = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            l = function() {
                var e = t(this).find(":ui-button");
                setTimeout(function() {
                        e.button("refresh")
                    },
                    1)
            },
            u = function(e) {
                var i = e.name,
                    n = e.form,
                    s = t([]);
                return i && (s = n ? t(n).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                        return !this.form
                    })),
                    s
            };
        t.widget("ui.button", {
                version: "1.9.2",
                defaultElement: "<button>",
                options: {
                    disabled: null,
                    text: !0,
                    label: null,
                    icons: {
                        primary: null,
                        secondary: null
                    }
                },
                _create: function() {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l),
                        "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled),
                        this._determineButtonType(),
                        this.hasTitle = !!this.buttonElement.attr("title");
                    var a = this,
                        o = this.options,
                        c = "checkbox" === this.type || "radio" === this.type,
                        h = c ? "" : "ui-state-active",
                        d = "ui-state-focus";
                    null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()),
                        this._hoverable(this.buttonElement),
                        this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter" + this.eventNamespace,
                            function() {
                                o.disabled || this === e && t(this).addClass("ui-state-active")
                            }).bind("mouseleave" + this.eventNamespace,
                            function() {
                                o.disabled || t(this).removeClass(h)
                            }).bind("click" + this.eventNamespace,
                            function(t) {
                                o.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                            }),
                        this.element.bind("focus" + this.eventNamespace,
                            function() {
                                a.buttonElement.addClass(d)
                            }).bind("blur" + this.eventNamespace,
                            function() {
                                a.buttonElement.removeClass(d)
                            }),
                        c && (this.element.bind("change" + this.eventNamespace,
                            function() {
                                s || a.refresh()
                            }), this.buttonElement.bind("mousedown" + this.eventNamespace,
                            function(t) {
                                o.disabled || (s = !1, i = t.pageX, n = t.pageY)
                            }).bind("mouseup" + this.eventNamespace,
                            function(t) {
                                o.disabled || (i !== t.pageX || n !== t.pageY) && (s = !0)
                            })),
                        "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
                            function() {
                                return o.disabled || s ? !1 : (t(this).toggleClass("ui-state-active"), void a.buttonElement.attr("aria-pressed", a.element[0].checked))
                            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace,
                            function() {
                                if (o.disabled || s) return !1;
                                t(this).addClass("ui-state-active"),
                                    a.buttonElement.attr("aria-pressed", "true");
                                var e = a.element[0];
                                u(e).not(e).map(function() {
                                    return t(this).button("widget")[0]
                                }).removeClass("ui-state-active").attr("aria-pressed", "false")
                            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace,
                            function() {
                                return o.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, void a.document.one("mouseup",
                                    function() {
                                        e = null
                                    }))
                            }).bind("mouseup" + this.eventNamespace,
                            function() {
                                return o.disabled ? !1 : void t(this).removeClass("ui-state-active")
                            }).bind("keydown" + this.eventNamespace,
                            function(e) {
                                return o.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
                            }).bind("keyup" + this.eventNamespace,
                            function() {
                                t(this).removeClass("ui-state-active")
                            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                            e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                        })),
                        this._setOption("disabled", o.disabled),
                        this._resetButton()
                },
                _determineButtonType: function() {
                    var t, e, i;
                    this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button",
                        "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
                },
                widget: function() {
                    return this.buttonElement
                },
                _destroy: function() {
                    this.element.removeClass("ui-helper-hidden-accessible"),
                        this.buttonElement.removeClass(r + " " + a + " " + o).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),
                        this.hasTitle || this.buttonElement.removeAttr("title")
                },
                _setOption: function(t, e) {
                    return this._super(t, e),
                        "disabled" === t ? void(e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
                },
                refresh: function() {
                    var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    e !== this.options.disabled && this._setOption("disabled", e),
                        "radio" === this.type ? u(this.element[0]).each(function() {
                            t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                        }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                },
                _resetButton: function() {
                    if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                    var e = this.buttonElement.removeClass(o),
                        i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                        n = this.options.icons,
                        s = n.primary && n.secondary,
                        r = [];
                    n.primary || n.secondary ? (this.options.text && r.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (r.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : r.push("ui-button-text-only"),
                        e.addClass(r.join(" "))
                }
            }),
            t.widget("ui.buttonset", {
                version: "1.9.2",
                options: {
                    items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"
                },
                _create: function() {
                    this.element.addClass("ui-buttonset")
                },
                _init: function() {
                    this.refresh()
                },
                _setOption: function(t, e) {
                    "disabled" === t && this.buttons.button("option", t, e),
                        this._super(t, e)
                },
                refresh: function() {
                    var e = "rtl" === this.element.css("direction");
                    this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
                },
                _destroy: function() {
                    this.element.removeClass("ui-buttonset"),
                        this.buttons.map(function() {
                            return t(this).button("widget")[0]
                        }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
                }
            })
    }(jQuery),
    function($, undefined) {
        function Datepicker() {
            this.debug = !1,
                this._curInst = null,
                this._keyEvent = !1,
                this._disabledInputs = [],
                this._datepickerShowing = !1,
                this._inDialog = !1,
                this._mainDivId = "ui-datepicker-div",
                this._inlineClass = "ui-datepicker-inline",
                this._appendClass = "ui-datepicker-append",
                this._triggerClass = "ui-datepicker-trigger",
                this._dialogClass = "ui-datepicker-dialog",
                this._disableClass = "ui-datepicker-disabled",
                this._unselectableClass = "ui-datepicker-unselectable",
                this._currentClass = "ui-datepicker-current-day",
                this._dayOverClass = "ui-datepicker-days-cell-over",
                this.regional = [],
                this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                },
                this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                },
                $.extend(this._defaults, this.regional[""]),
                this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(e, "mouseout",
                function() {
                    $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
                }).delegate(e, "mouseover",
                function() {
                    $.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
                })
        }

        function extendRemove(t, e) {
            $.extend(t, e);
            for (var i in e)(null == e[i] || e[i] == undefined) && (t[i] = e[i]);
            return t
        }
        $.extend($.ui, {
            datepicker: {
                version: "1.9.2"
            }
        });
        var PROP_NAME = "datepicker",
            dpuuid = (new Date).getTime(),
            instActive;
        $.extend(Datepicker.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                log: function() {
                    this.debug && console.log.apply("", arguments)
                },
                _widgetDatepicker: function() {
                    return this.dpDiv
                },
                setDefaults: function(t) {
                    return extendRemove(this._defaults, t || {}),
                        this
                },
                _attachDatepicker: function(target, settings) {
                    var inlineSettings = null;
                    for (var attrName in this._defaults) {
                        var attrValue = target.getAttribute("date:" + attrName);
                        if (attrValue) {
                            inlineSettings = inlineSettings || {};
                            try {
                                inlineSettings[attrName] = eval(attrValue)
                            } catch (err) {
                                inlineSettings[attrName] = attrValue
                            }
                        }
                    }
                    var nodeName = target.nodeName.toLowerCase(),
                        inline = "div" == nodeName || "span" == nodeName;
                    target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                    var inst = this._newInst($(target), inline);
                    inst.settings = $.extend({},
                            settings || {},
                            inlineSettings || {}),
                        "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
                },
                _newInst: function(t, e) {
                    var i = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                    return {
                        id: i,
                        input: t,
                        selectedDay: 0,
                        selectedMonth: 0,
                        selectedYear: 0,
                        drawMonth: 0,
                        drawYear: 0,
                        inline: e,
                        dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                    }
                },
                _connectDatepicker: function(t, e) {
                    var i = $(t);
                    e.append = $([]),
                        e.trigger = $([]),
                        i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",
                            function(t, i, n) {
                                e.settings[i] = n
                            }).bind("getData.datepicker",
                            function(t, i) {
                                return this._get(e, i)
                            }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
                },
                _attachments: function(t, e) {
                    var i = this._get(e, "appendText"),
                        n = this._get(e, "isRTL");
                    e.append && e.append.remove(),
                        i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[n ? "before" : "after"](e.append)),
                        t.unbind("focus", this._showDatepicker),
                        e.trigger && e.trigger.remove();
                    var s = this._get(e, "showOn");
                    if (("focus" == s || "both" == s) && t.focus(this._showDatepicker), "button" == s || "both" == s) {
                        var r = this._get(e, "buttonText"),
                            a = this._get(e, "buttonImage");
                        e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                                src: a,
                                alt: r,
                                title: r
                            }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == a ? r : $("<img/>").attr({
                                src: a,
                                alt: r,
                                title: r
                            }))),
                            t[n ? "before" : "after"](e.trigger),
                            e.trigger.click(function() {
                                return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                            })
                    }
                },
                _autoSize: function(t) {
                    if (this._get(t, "autoSize") && !t.inline) {
                        var e = new Date(2009, 11, 20),
                            i = this._get(t, "dateFormat");
                        if (i.match(/[DM]/)) {
                            var n = function(t) {
                                for (var e = 0,
                                        i = 0,
                                        n = 0; t.length > n; n++) t[n].length > e && (e = t[n].length, i = n);
                                return i
                            };
                            e.setMonth(n(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                                e.setDate(n(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                        }
                        t.input.attr("size", this._formatDate(t, e).length)
                    }
                },
                _inlineDatepicker: function(t, e) {
                    var i = $(t);
                    i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker",
                        function(t, i, n) {
                            e.settings[i] = n
                        }).bind("getData.datepicker",
                        function(t, i) {
                            return this._get(e, i)
                        }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function(t, e, i, n, s) {
                    var r = this._dialogInst;
                    if (!r) {
                        this.uuid += 1;
                        var a = "dp" + this.uuid;
                        this._dialogInput = $('<input type="text" id="' + a + '" style="position: absolute; top: -100px; width: 0px;"/>'),
                            this._dialogInput.keydown(this._doKeyDown),
                            $("body").append(this._dialogInput),
                            r = this._dialogInst = this._newInst(this._dialogInput, !1),
                            r.settings = {},
                            $.data(this._dialogInput[0], PROP_NAME, r)
                    }
                    if (extendRemove(r.settings, n || {}), e = e && e.constructor == Date ? this._formatDate(r, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, !this._pos) {
                        var o = document.documentElement.clientWidth,
                            l = document.documentElement.clientHeight,
                            u = document.documentElement.scrollLeft || document.body.scrollLeft,
                            c = document.documentElement.scrollTop || document.body.scrollTop;
                        this._pos = [o / 2 - 100 + u, l / 2 - 150 + c]
                    }
                    return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
                        r.settings.onSelect = i,
                        this._inDialog = !0,
                        this.dpDiv.addClass(this._dialogClass),
                        this._showDatepicker(this._dialogInput[0]),
                        $.blockUI && $.blockUI(this.dpDiv),
                        $.data(this._dialogInput[0], PROP_NAME, r),
                        this
                },
                _destroyDatepicker: function(t) {
                    var e = $(t),
                        i = $.data(t, PROP_NAME);
                    if (e.hasClass(this.markerClassName)) {
                        var n = t.nodeName.toLowerCase();
                        $.removeData(t, PROP_NAME),
                            "input" == n ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && e.removeClass(this.markerClassName).empty()
                    }
                },
                _enableDatepicker: function(t) {
                    var e = $(t),
                        i = $.data(t, PROP_NAME);
                    if (e.hasClass(this.markerClassName)) {
                        var n = t.nodeName.toLowerCase();
                        if ("input" == n) t.disabled = !1,
                            i.trigger.filter("button").each(function() {
                                this.disabled = !1
                            }).end().filter("img").css({
                                opacity: "1.0",
                                cursor: ""
                            });
                        else if ("div" == n || "span" == n) {
                            var s = e.children("." + this._inlineClass);
                            s.children().removeClass("ui-state-disabled"),
                                s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                        }
                        this._disabledInputs = $.map(this._disabledInputs,
                            function(e) {
                                return e == t ? null : e
                            })
                    }
                },
                _disableDatepicker: function(t) {
                    var e = $(t),
                        i = $.data(t, PROP_NAME);
                    if (e.hasClass(this.markerClassName)) {
                        var n = t.nodeName.toLowerCase();
                        if ("input" == n) t.disabled = !0,
                            i.trigger.filter("button").each(function() {
                                this.disabled = !0
                            }).end().filter("img").css({
                                opacity: "0.5",
                                cursor: "default"
                            });
                        else if ("div" == n || "span" == n) {
                            var s = e.children("." + this._inlineClass);
                            s.children().addClass("ui-state-disabled"),
                                s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                        }
                        this._disabledInputs = $.map(this._disabledInputs,
                                function(e) {
                                    return e == t ? null : e
                                }),
                            this._disabledInputs[this._disabledInputs.length] = t
                    }
                },
                _isDisabledDatepicker: function(t) {
                    if (!t) return !1;
                    for (var e = 0; this._disabledInputs.length > e; e++)
                        if (this._disabledInputs[e] == t) return !0;
                    return !1
                },
                _getInst: function(t) {
                    try {
                        return $.data(t, PROP_NAME)
                    } catch (e) {
                        throw "Missing instance data for this datepicker"
                    }
                },
                _optionDatepicker: function(t, e, i) {
                    var n = this._getInst(t);
                    if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({},
                        $.datepicker._defaults) : n ? "all" == e ? $.extend({},
                        n.settings) : this._get(n, e) : null;
                    var s = e || {};
                    if ("string" == typeof e && (s = {},
                            s[e] = i), n) {
                        this._curInst == n && this._hideDatepicker();
                        var r = this._getDateDatepicker(t, !0),
                            a = this._getMinMaxDate(n, "min"),
                            o = this._getMinMaxDate(n, "max");
                        extendRemove(n.settings, s),
                            null !== a && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, a)),
                            null !== o && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, o)),
                            this._attachments($(t), n),
                            this._autoSize(n),
                            this._setDate(n, r),
                            this._updateAlternate(n),
                            this._updateDatepicker(n)
                    }
                },
                _changeDatepicker: function(t, e, i) {
                    this._optionDatepicker(t, e, i)
                },
                _refreshDatepicker: function(t) {
                    var e = this._getInst(t);
                    e && this._updateDatepicker(e)
                },
                _setDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
                },
                _getDateDatepicker: function(t, e) {
                    var i = this._getInst(t);
                    return i && !i.inline && this._setDateFromField(i, e),
                        i ? this._getDate(i) : null
                },
                _doKeyDown: function(t) {
                    var e = $.datepicker._getInst(t.target),
                        i = !0,
                        n = e.dpDiv.is(".ui-datepicker-rtl");
                    if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                        case 9:
                            $.datepicker._hideDatepicker(),
                                i = !1;
                            break;
                        case 13:
                            var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                            s[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, s[0]);
                            var r = $.datepicker._get(e, "onSelect");
                            if (r) {
                                var a = $.datepicker._formatDate(e);
                                r.apply(e.input ? e.input[0] : null, [a, e])
                            } else $.datepicker._hideDatepicker();
                            return !1;
                        case 27:
                            $.datepicker._hideDatepicker();
                            break;
                        case 33:
                            $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                            break;
                        case 34:
                            $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                            break;
                        case 35:
                            (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target),
                                i = t.ctrlKey || t.metaKey;
                            break;
                        case 36:
                            (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target),
                                i = t.ctrlKey || t.metaKey;
                            break;
                        case 37:
                            (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? 1 : -1, "D"),
                                i = t.ctrlKey || t.metaKey,
                                t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                            break;
                        case 38:
                            (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"),
                                i = t.ctrlKey || t.metaKey;
                            break;
                        case 39:
                            (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, n ? -1 : 1, "D"),
                                i = t.ctrlKey || t.metaKey,
                                t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                            break;
                        case 40:
                            (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"),
                                i = t.ctrlKey || t.metaKey;
                            break;
                        default:
                            i = !1
                    } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
                    i && (t.preventDefault(), t.stopPropagation())
                },
                _doKeyPress: function(t) {
                    var e = $.datepicker._getInst(t.target);
                    if ($.datepicker._get(e, "constrainInput")) {
                        var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                            n = String.fromCharCode(t.charCode == undefined ? t.keyCode : t.charCode);
                        return t.ctrlKey || t.metaKey || " " > n || !i || i.indexOf(n) > -1
                    }
                },
                _doKeyUp: function(t) {
                    var e = $.datepicker._getInst(t.target);
                    if (e.input.val() != e.lastVal) try {
                        var i = $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e));
                        i && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
                    } catch (n) {
                        $.datepicker.log(n)
                    }
                    return !0
                },
                _showDatepicker: function(t) {
                    if (t = t.target || t, "input" != t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                        var e = $.datepicker._getInst(t);
                        $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                        var i = $.datepicker._get(e, "beforeShow"),
                            n = i ? i.apply(t, [t, e]) : {};
                        if (n !== !1) {
                            extendRemove(e.settings, n),
                                e.lastVal = null,
                                $.datepicker._lastInput = t,
                                $.datepicker._setDateFromField(e),
                                $.datepicker._inDialog && (t.value = ""),
                                $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                            var s = !1;
                            $(t).parents().each(function() {
                                return s |= "fixed" == $(this).css("position"), !s
                            });
                            var r = {
                                left: $.datepicker._pos[0],
                                top: $.datepicker._pos[1]
                            };
                            if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                                    position: "absolute",
                                    display: "block",
                                    top: "-1000px"
                                }), $.datepicker._updateDatepicker(e), r = $.datepicker._checkOffset(e, r, s), e.dpDiv.css({
                                    position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute",
                                    display: "none",
                                    left: r.left + "px",
                                    top: r.top + "px"
                                }), !e.inline) {
                                var a = $.datepicker._get(e, "showAnim"),
                                    o = $.datepicker._get(e, "duration"),
                                    l = function() {
                                        var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                        if (t.length) {
                                            var i = $.datepicker._getBorders(e.dpDiv);
                                            t.css({
                                                left: -i[0],
                                                top: -i[1],
                                                width: e.dpDiv.outerWidth(),
                                                height: e.dpDiv.outerHeight()
                                            })
                                        }
                                    };
                                e.dpDiv.zIndex($(t).zIndex() + 1),
                                    $.datepicker._datepickerShowing = !0,
                                    $.effects && ($.effects.effect[a] || $.effects[a]) ? e.dpDiv.show(a, $.datepicker._get(e, "showOptions"), o, l) : e.dpDiv[a || "show"](a ? o : null, l),
                                    a && o || l(),
                                    e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(),
                                    $.datepicker._curInst = e
                            }
                        }
                    }
                },
                _updateDatepicker: function(t) {
                    this.maxRows = 4;
                    var e = $.datepicker._getBorders(t.dpDiv);
                    instActive = t,
                        t.dpDiv.empty().append(this._generateHTML(t)),
                        this._attachHandlers(t);
                    var i = t.dpDiv.find("iframe.ui-datepicker-cover");
                    i.length && i.css({
                            left: -e[0],
                            top: -e[1],
                            width: t.dpDiv.outerWidth(),
                            height: t.dpDiv.outerHeight()
                        }),
                        t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                    var n = this._getNumberOfMonths(t),
                        s = n[1],
                        r = 17;
                    if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                        var a = t.yearshtml;
                        setTimeout(function() {
                                a === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),
                                    a = t.yearshtml = null
                            },
                            0)
                    }
                },
                _getBorders: function(t) {
                    var e = function(t) {
                        return {
                            thin: 1,
                            medium: 2,
                            thick: 3
                        }[t] || t
                    };
                    return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
                },
                _checkOffset: function(t, e, i) {
                    var n = t.dpDiv.outerWidth(),
                        s = t.dpDiv.outerHeight(),
                        r = t.input ? t.input.outerWidth() : 0,
                        a = t.input ? t.input.outerHeight() : 0,
                        o = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                        l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                    return e.left -= this._get(t, "isRTL") ? n - r : 0,
                        e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0,
                        e.top -= i && e.top == t.input.offset().top + a ? $(document).scrollTop() : 0,
                        e.left -= Math.min(e.left, e.left + n > o && o > n ? Math.abs(e.left + n - o) : 0),
                        e.top -= Math.min(e.top, e.top + s > l && l > s ? Math.abs(s + a) : 0),
                        e
                },
                _findPos: function(t) {
                    for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
                    var n = $(t).offset();
                    return [n.left, n.top]
                },
                _hideDatepicker: function(t) {
                    var e = this._curInst;
                    if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                        var i = this._get(e, "showAnim"),
                            n = this._get(e, "duration"),
                            s = function() {
                                $.datepicker._tidyDialog(e)
                            };
                        $.effects && ($.effects.effect[i] || $.effects[i]) ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), n, s) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, s),
                            i || s(),
                            this._datepickerShowing = !1;
                        var r = this._get(e, "onClose");
                        r && r.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]),
                            this._lastInput = null,
                            this._inDialog && (this._dialogInput.css({
                                position: "absolute",
                                left: "0",
                                top: "-100px"
                            }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))),
                            this._inDialog = !1
                    }
                },
                _tidyDialog: function(t) {
                    t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
                },
                _checkExternalClick: function(t) {
                    if ($.datepicker._curInst) {
                        var e = $(t.target),
                            i = $.datepicker._getInst(e[0]);
                        (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function(t, e, i) {
                    var n = $(t),
                        s = this._getInst(n[0]);
                    this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
                },
                _gotoToday: function(t) {
                    var e = $(t),
                        i = this._getInst(e[0]);
                    if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay,
                        i.drawMonth = i.selectedMonth = i.currentMonth,
                        i.drawYear = i.selectedYear = i.currentYear;
                    else {
                        var n = new Date;
                        i.selectedDay = n.getDate(),
                            i.drawMonth = i.selectedMonth = n.getMonth(),
                            i.drawYear = i.selectedYear = n.getFullYear()
                    }
                    this._notifyChange(i),
                        this._adjustDate(e)
                },
                _selectMonthYear: function(t, e, i) {
                    var n = $(t),
                        s = this._getInst(n[0]);
                    s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10),
                        this._notifyChange(s),
                        this._adjustDate(n)
                },
                _selectDay: function(t, e, i, n) {
                    var s = $(t);
                    if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
                        var r = this._getInst(s[0]);
                        r.selectedDay = r.currentDay = $("a", n).html(),
                            r.selectedMonth = r.currentMonth = e,
                            r.selectedYear = r.currentYear = i,
                            this._selectDate(t, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear))
                    }
                },
                _clearDate: function(t) {
                    var e = $(t);
                    this._getInst(e[0]),
                        this._selectDate(e, "")
                },
                _selectDate: function(t, e) {
                    var i = $(t),
                        n = this._getInst(i[0]);
                    e = null != e ? e : this._formatDate(n),
                        n.input && n.input.val(e),
                        this._updateAlternate(n);
                    var s = this._get(n, "onSelect");
                    s ? s.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"),
                        n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
                },
                _updateAlternate: function(t) {
                    var e = this._get(t, "altField");
                    if (e) {
                        var i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                            n = this._getDate(t),
                            s = this.formatDate(i, n, this._getFormatConfig(t));
                        $(e).each(function() {
                            $(this).val(s)
                        })
                    }
                },
                noWeekends: function(t) {
                    var e = t.getDay();
                    return [e > 0 && 6 > e, ""]
                },
                iso8601Week: function(t) {
                    var e = new Date(t.getTime());
                    e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                    var i = e.getTime();
                    return e.setMonth(0),
                        e.setDate(1),
                        Math.floor(Math.round((i - e) / 864e5) / 7) + 1
                },
                parseDate: function(t, e, i) {
                    if (null == t || null == e) throw "Invalid arguments";
                    if (e = "object" == typeof e ? "" + e : e + "", "" == e) return null;
                    var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                    n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
                    for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, r = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, u = -1, c = -1, h = -1, d = !1, p = function(e) {
                                var i = t.length > y + 1 && t.charAt(y + 1) == e;
                                return i && y++,
                                    i
                            },
                            f = function(t) {
                                var i = p(t),
                                    n = "@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2,
                                    s = RegExp("^\\d{1," + n + "}"),
                                    r = e.substring(v).match(s);
                                if (!r) throw "Missing number at position " + v;
                                return v += r[0].length,
                                    parseInt(r[0], 10)
                            },
                            g = function(t, i, n) {
                                var s = $.map(p(t) ? n : i,
                                        function(t, e) {
                                            return [
                                                [e, t]
                                            ]
                                        }).sort(function(t, e) {
                                        return -(t[1].length - e[1].length)
                                    }),
                                    r = -1;
                                if ($.each(s,
                                        function(t, i) {
                                            var n = i[1];
                                            return e.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (r = i[0], v += n.length, !1) : undefined
                                        }), -1 != r) return r + 1;
                                throw "Unknown name at position " + v
                            },
                            m = function() {
                                if (e.charAt(v) != t.charAt(y)) throw "Unexpected literal at position " + v;
                                v++
                            },
                            v = 0, y = 0; t.length > y; y++)
                        if (d) "'" != t.charAt(y) || p("'") ? m() : d = !1;
                        else switch (t.charAt(y)) {
                            case "d":
                                c = f("d");
                                break;
                            case "D":
                                g("D", s, r);
                                break;
                            case "o":
                                h = f("o");
                                break;
                            case "m":
                                u = f("m");
                                break;
                            case "M":
                                u = g("M", a, o);
                                break;
                            case "y":
                                l = f("y");
                                break;
                            case "@":
                                var b = new Date(f("@"));
                                l = b.getFullYear(),
                                    u = b.getMonth() + 1,
                                    c = b.getDate();
                                break;
                            case "!":
                                var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                                l = b.getFullYear(),
                                    u = b.getMonth() + 1,
                                    c = b.getDate();
                                break;
                            case "'":
                                p("'") ? m() : d = !0;
                                break;
                            default:
                                m()
                        }
                    if (e.length > v) {
                        var _ = e.substr(v);
                        if (!/^\s+/.test(_)) throw "Extra/unparsed characters found in date: " + _
                    }
                    if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), h > -1)
                        for (u = 1, c = h;;) {
                            var w = this._getDaysInMonth(l, u - 1);
                            if (w >= c) break;
                            u++,
                            c -= w
                        }
                    var b = this._daylightSavingAdjust(new Date(l, u - 1, c));
                    if (b.getFullYear() != l || b.getMonth() + 1 != u || b.getDate() != c) throw "Invalid date";
                    return b
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
                formatDate: function(t, e, i) {
                    if (!e) return "";
                    var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                        s = (i ? i.dayNames : null) || this._defaults.dayNames,
                        r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                        a = (i ? i.monthNames : null) || this._defaults.monthNames,
                        o = function(e) {
                            var i = t.length > d + 1 && t.charAt(d + 1) == e;
                            return i && d++,
                                i
                        },
                        l = function(t, e, i) {
                            var n = "" + e;
                            if (o(t))
                                for (; i > n.length;) n = "0" + n;
                            return n
                        },
                        u = function(t, e, i, n) {
                            return o(t) ? n[e] : i[e]
                        },
                        c = "",
                        h = !1;
                    if (e)
                        for (var d = 0; t.length > d; d++)
                            if (h) "'" != t.charAt(d) || o("'") ? c += t.charAt(d) : h = !1;
                            else switch (t.charAt(d)) {
                                case "d":
                                    c += l("d", e.getDate(), 2);
                                    break;
                                case "D":
                                    c += u("D", e.getDay(), n, s);
                                    break;
                                case "o":
                                    c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    c += l("m", e.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    c += u("M", e.getMonth(), r, a);
                                    break;
                                case "y":
                                    c += o("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                                    break;
                                case "@":
                                    c += e.getTime();
                                    break;
                                case "!":
                                    c += 1e4 * e.getTime() + this._ticksTo1970;
                                    break;
                                case "'":
                                    o("'") ? c += "'" : h = !0;
                                    break;
                                default:
                                    c += t.charAt(d)
                            }
                    return c
                },
                _possibleChars: function(t) {
                    for (var e = "",
                            i = !1,
                            n = function(e) {
                                var i = t.length > s + 1 && t.charAt(s + 1) == e;
                                return i && s++,
                                    i
                            },
                            s = 0; t.length > s; s++)
                        if (i) "'" != t.charAt(s) || n("'") ? e += t.charAt(s) : i = !1;
                        else switch (t.charAt(s)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                e += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                n("'") ? e += "'" : i = !0;
                                break;
                            default:
                                e += t.charAt(s)
                        }
                    return e
                },
                _get: function(t, e) {
                    return t.settings[e] !== undefined ? t.settings[e] : this._defaults[e]
                },
                _setDateFromField: function(t, e) {
                    if (t.input.val() != t.lastVal) {
                        var i, n, s = this._get(t, "dateFormat"),
                            r = t.lastVal = t.input ? t.input.val() : null;
                        i = n = this._getDefaultDate(t);
                        var a = this._getFormatConfig(t);
                        try {
                            i = this.parseDate(s, r, a) || n
                        } catch (o) {
                            this.log(o),
                                r = e ? "" : r
                        }
                        t.selectedDay = i.getDate(),
                            t.drawMonth = t.selectedMonth = i.getMonth(),
                            t.drawYear = t.selectedYear = i.getFullYear(),
                            t.currentDay = r ? i.getDate() : 0,
                            t.currentMonth = r ? i.getMonth() : 0,
                            t.currentYear = r ? i.getFullYear() : 0,
                            this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function(t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function(t, e, i) {
                    var n = function(t) {
                            var e = new Date;
                            return e.setDate(e.getDate() + t),
                                e
                        },
                        s = function(e) {
                            try {
                                return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                            } catch (i) {}
                            for (var n = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), r = n.getMonth(), a = n.getDate(), o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = o.exec(e); l;) {
                                switch (l[2] || "d") {
                                    case "d":
                                    case "D":
                                        a += parseInt(l[1], 10);
                                        break;
                                    case "w":
                                    case "W":
                                        a += 7 * parseInt(l[1], 10);
                                        break;
                                    case "m":
                                    case "M":
                                        r += parseInt(l[1], 10),
                                            a = Math.min(a, $.datepicker._getDaysInMonth(s, r));
                                        break;
                                    case "y":
                                    case "Y":
                                        s += parseInt(l[1], 10),
                                            a = Math.min(a, $.datepicker._getDaysInMonth(s, r))
                                }
                                l = o.exec(e)
                            }
                            return new Date(s, r, a)
                        },
                        r = null == e || "" === e ? i : "string" == typeof e ? s(e) : "number" == typeof e ? isNaN(e) ? i : n(e) : new Date(e.getTime());
                    return r = r && "Invalid Date" == "" + r ? i : r,
                        r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)),
                        this._daylightSavingAdjust(r)
                },
                _daylightSavingAdjust: function(t) {
                    return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
                },
                _setDate: function(t, e, i) {
                    var n = !e,
                        s = t.selectedMonth,
                        r = t.selectedYear,
                        a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                    t.selectedDay = t.currentDay = a.getDate(),
                        t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(),
                        t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(),
                        s == t.selectedMonth && r == t.selectedYear || i || this._notifyChange(t),
                        this._adjustInstDate(t),
                        t.input && t.input.val(n ? "" : this._formatDate(t))
                },
                _getDate: function(t) {
                    var e = !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                    return e
                },
                _attachHandlers: function(t) {
                    var e = this._get(t, "stepMonths"),
                        i = "#" + t.id.replace(/\\\\/g, "\\");
                    t.dpDiv.find("[data-handler]").map(function() {
                        var t = {
                            prev: function() {
                                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M")
                            },
                            next: function() {
                                window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M")
                            },
                            hide: function() {
                                window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                            },
                            today: function() {
                                window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                            },
                            selectDay: function() {
                                return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                            },
                            selectMonth: function() {
                                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                            },
                            selectYear: function() {
                                return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                            }
                        };
                        $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(t) {
                    var e = new Date;
                    e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
                    var i = this._get(t, "isRTL"),
                        n = this._get(t, "showButtonPanel"),
                        s = this._get(t, "hideIfNoPrevNext"),
                        r = this._get(t, "navigationAsDateFormat"),
                        a = this._getNumberOfMonths(t),
                        o = this._get(t, "showCurrentAtPos"),
                        l = this._get(t, "stepMonths"),
                        u = 1 != a[0] || 1 != a[1],
                        c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                        h = this._getMinMaxDate(t, "min"),
                        d = this._getMinMaxDate(t, "max"),
                        p = t.drawMonth - o,
                        f = t.drawYear;
                    if (0 > p && (p += 12, f--), d) {
                        var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - a[0] * a[1] + 1, d.getDate()));
                        for (g = h && h > g ? h : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) p--,
                            0 > p && (p = 11, f--)
                    }
                    t.drawMonth = p,
                        t.drawYear = f;
                    var m = this._get(t, "prevText");
                    m = r ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : m;
                    var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
                        y = this._get(t, "nextText");
                    y = r ? this.formatDate(y, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : y;
                    var b = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + y + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + y + "</span></a>",
                        _ = this._get(t, "currentText"),
                        w = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
                    _ = r ? this.formatDate(_, w, this._getFormatConfig(t)) : _;
                    var x = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                        C = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(t, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + _ + "</button>" : "") + (i ? "" : x) + "</div>" : "",
                        k = parseInt(this._get(t, "firstDay"), 10);
                    k = isNaN(k) ? 0 : k;
                    var E = this._get(t, "showWeek"),
                        S = this._get(t, "dayNames");
                    this._get(t, "dayNamesShort");
                    var T = this._get(t, "dayNamesMin"),
                        P = this._get(t, "monthNames"),
                        A = this._get(t, "monthNamesShort"),
                        D = this._get(t, "beforeShowDay"),
                        I = this._get(t, "showOtherMonths"),
                        M = this._get(t, "selectOtherMonths");
                    this._get(t, "calculateWeek") || this.iso8601Week;
                    for (var N = this._getDefaultDate(t), L = "", O = 0; a[0] > O; O++) {
                        var j = "";
                        this.maxRows = 4;
                        for (var R = 0; a[1] > R; R++) {
                            var H = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)),
                                W = " ui-corner-all",
                                z = "";
                            if (u) {
                                if (z += '<div class="ui-datepicker-group', a[1] > 1) switch (R) {
                                    case 0:
                                        z += " ui-datepicker-group-first",
                                            W = " ui-corner-" + (i ? "right" : "left");
                                        break;
                                    case a[1] - 1:
                                        z += " ui-datepicker-group-last",
                                            W = " ui-corner-" + (i ? "left" : "right");
                                        break;
                                    default:
                                        z += " ui-datepicker-group-middle",
                                            W = ""
                                }
                                z += '">'
                            }
                            z += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + W + '">' + (/all|left/.test(W) && 0 == O ? i ? b : v : "") + (/all|right/.test(W) && 0 == O ? i ? v : b : "") + this._generateMonthYearHeader(t, p, f, h, d, O > 0 || R > 0, P, A) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                            for (var F = E ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", Y = 0; 7 > Y; Y++) {
                                var q = (Y + k) % 7;
                                F += "<th" + ((Y + k + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + S[q] + '">' + T[q] + "</span></th>"
                            }
                            z += F + "</tr></thead><tbody>";
                            var B = this._getDaysInMonth(f, p);
                            f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, B));
                            var V = (this._getFirstDayOfMonth(f, p) - k + 7) % 7,
                                X = Math.ceil((V + B) / 7),
                                Q = u && this.maxRows > X ? this.maxRows : X;
                            this.maxRows = Q;
                            for (var U = this._daylightSavingAdjust(new Date(f, p, 1 - V)), J = 0; Q > J; J++) {
                                z += "<tr>";
                                for (var G = E ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(U) + "</td>" : "", Y = 0; 7 > Y; Y++) {
                                    var K = D ? D.apply(t.input ? t.input[0] : null, [U]) : [!0, ""],
                                        Z = U.getMonth() != p,
                                        tt = Z && !M || !K[0] || h && h > U || d && U > d;
                                    G += '<td class="' + ((Y + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (U.getTime() == H.getTime() && p == t.selectedMonth && t._keyEvent || N.getTime() == U.getTime() && N.getTime() == H.getTime() ? " " + this._dayOverClass : "") + (tt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !I ? "" : " " + K[1] + (U.getTime() == c.getTime() ? " " + this._currentClass : "") + (U.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !I || !K[2] ? "" : ' title="' + K[2] + '"') + (tt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + U.getMonth() + '" data-year="' + U.getFullYear() + '"') + ">" + (Z && !I ? "&#xa0;" : tt ? '<span class="ui-state-default">' + U.getDate() + "</span>" : '<a class="ui-state-default' + (U.getTime() == e.getTime() ? " ui-state-highlight" : "") + (U.getTime() == c.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + U.getDate() + "</a>") + "</td>",
                                        U.setDate(U.getDate() + 1),
                                        U = this._daylightSavingAdjust(U)
                                }
                                z += G + "</tr>"
                            }
                            p++,
                            p > 11 && (p = 0, f++),
                                z += "</tbody></table>" + (u ? "</div>" + (a[0] > 0 && R == a[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""),
                                j += z
                        }
                        L += j
                    }
                    return L += C + ($.ui.ie6 && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""),
                        t._keyEvent = !1,
                        L
                },
                _generateMonthYearHeader: function(t, e, i, n, s, r, a, o) {
                    var l = this._get(t, "changeMonth"),
                        u = this._get(t, "changeYear"),
                        c = this._get(t, "showMonthAfterYear"),
                        h = '<div class="ui-datepicker-title">',
                        d = "";
                    if (r || !l) d += '<span class="ui-datepicker-month">' + a[e] + "</span>";
                    else {
                        var p = n && n.getFullYear() == i,
                            f = s && s.getFullYear() == i;
                        d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                        for (var g = 0; 12 > g; g++)(!p || g >= n.getMonth()) && (!f || s.getMonth() >= g) && (d += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + o[g] + "</option>");
                        d += "</select>"
                    }
                    if (c || (h += d + (!r && l && u ? "" : "&#xa0;")), !t.yearshtml)
                        if (t.yearshtml = "", r || !u) h += '<span class="ui-datepicker-year">' + i + "</span>";
                        else {
                            var m = this._get(t, "yearRange").split(":"),
                                v = (new Date).getFullYear(),
                                y = function(t) {
                                    var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                                    return isNaN(e) ? v : e
                                },
                                b = y(m[0]),
                                _ = Math.max(b, y(m[1] || ""));
                            for (b = n ? Math.max(b, n.getFullYear()) : b, _ = s ? Math.min(_, s.getFullYear()) : _, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; _ >= b; b++) t.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
                            t.yearshtml += "</select>",
                                h += t.yearshtml,
                                t.yearshtml = null
                        }
                    return h += this._get(t, "yearSuffix"),
                        c && (h += (!r && l && u ? "" : "&#xa0;") + d),
                        h += "</div>"
                },
                _adjustInstDate: function(t, e, i) {
                    var n = t.drawYear + ("Y" == i ? e : 0),
                        s = t.drawMonth + ("M" == i ? e : 0),
                        r = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? e : 0),
                        a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, r)));
                    t.selectedDay = a.getDate(),
                        t.drawMonth = t.selectedMonth = a.getMonth(),
                        t.drawYear = t.selectedYear = a.getFullYear(),
                        ("M" == i || "Y" == i) && this._notifyChange(t)
                },
                _restrictMinMax: function(t, e) {
                    var i = this._getMinMaxDate(t, "min"),
                        n = this._getMinMaxDate(t, "max"),
                        s = i && i > e ? i : e;
                    return s = n && s > n ? n : s
                },
                _notifyChange: function(t) {
                    var e = this._get(t, "onChangeMonthYear");
                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                },
                _getNumberOfMonths: function(t) {
                    var e = this._get(t, "numberOfMonths");
                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                },
                _getMinMaxDate: function(t, e) {
                    return this._determineDate(t, this._get(t, e + "Date"), null)
                },
                _getDaysInMonth: function(t, e) {
                    return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
                },
                _getFirstDayOfMonth: function(t, e) {
                    return new Date(t, e, 1).getDay()
                },
                _canAdjustMonth: function(t, e, i, n) {
                    var s = this._getNumberOfMonths(t),
                        r = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                    return 0 > e && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())),
                        this._isInRange(t, r)
                },
                _isInRange: function(t, e) {
                    var i = this._getMinMaxDate(t, "min"),
                        n = this._getMinMaxDate(t, "max");
                    return (!i || e.getTime() >= i.getTime()) && (!n || e.getTime() <= n.getTime())
                },
                _getFormatConfig: function(t) {
                    var e = this._get(t, "shortYearCutoff");
                    return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                        shortYearCutoff: e,
                        dayNamesShort: this._get(t, "dayNamesShort"),
                        dayNames: this._get(t, "dayNames"),
                        monthNamesShort: this._get(t, "monthNamesShort"),
                        monthNames: this._get(t, "monthNames")
                    }
                },
                _formatDate: function(t, e, i, n) {
                    e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                    var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                    return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
                }
            }),
            $.fn.datepicker = function(t) {
                if (!this.length) return this;
                $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
                var e = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() {
                    "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
                }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
            },
            $.datepicker = new Datepicker,
            $.datepicker.initialized = !1,
            $.datepicker.uuid = (new Date).getTime(),
            $.datepicker.version = "1.9.2",
            window["DP_jQuery_" + dpuuid] = $
    }(jQuery),
    function(t, e) {
        var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
            n = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            s = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        t.widget("ui.dialog", {
                version: "1.9.2",
                options: {
                    autoOpen: !0,
                    buttons: {},
                    closeOnEscape: !0,
                    closeText: "close",
                    dialogClass: "",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: !1,
                    maxWidth: !1,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(e) {
                            var i = t(this).css(e).offset().top;
                            0 > i && t(this).css("top", e.top - i)
                        }
                    },
                    resizable: !0,
                    show: null,
                    stack: !0,
                    title: "",
                    width: 300,
                    zIndex: 1e3
                },
                _create: function() {
                    this.originalTitle = this.element.attr("title"),
                        "string" != typeof this.originalTitle && (this.originalTitle = ""),
                        this.oldPosition = {
                            parent: this.element.parent(),
                            index: this.element.parent().children().index(this.element)
                        },
                        this.options.title = this.options.title || this.originalTitle;
                    var n, s, r, a, o, l = this,
                        u = this.options,
                        c = u.title || "&#160;";
                    n = (this.uiDialog = t("<div>")).addClass(i + u.dialogClass).css({
                            display: "none",
                            outline: 0,
                            zIndex: u.zIndex
                        }).attr("tabIndex", -1).keydown(function(e) {
                            u.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (l.close(e), e.preventDefault())
                        }).mousedown(function(t) {
                            l.moveToTop(!1, t)
                        }).appendTo("body"),
                        this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(n),
                        s = (this.uiDialogTitlebar = t("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown",
                            function() {
                                n.focus()
                            }).prependTo(n),
                        r = t("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(t) {
                            t.preventDefault(),
                                l.close(t)
                        }).appendTo(s),
                        (this.uiDialogTitlebarCloseText = t("<span>")).addClass("ui-icon ui-icon-closethick").text(u.closeText).appendTo(r),
                        a = t("<span>").uniqueId().addClass("ui-dialog-title").html(c).prependTo(s),
                        o = (this.uiDialogButtonPane = t("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                        (this.uiButtonSet = t("<div>")).addClass("ui-dialog-buttonset").appendTo(o),
                        n.attr({
                            role: "dialog",
                            "aria-labelledby": a.attr("id")
                        }),
                        s.find("*").add(s).disableSelection(),
                        this._hoverable(r),
                        this._focusable(r),
                        u.draggable && t.fn.draggable && this._makeDraggable(),
                        u.resizable && t.fn.resizable && this._makeResizable(),
                        this._createButtons(u.buttons),
                        this._isOpen = !1,
                        t.fn.bgiframe && n.bgiframe(),
                        this._on(n, {
                            keydown: function(i) {
                                if (u.modal && i.keyCode === t.ui.keyCode.TAB) {
                                    var s = t(":tabbable", n),
                                        r = s.filter(":first"),
                                        a = s.filter(":last");
                                    return i.target !== a[0] || i.shiftKey ? i.target === r[0] && i.shiftKey ? (a.focus(1), !1) : e : (r.focus(1), !1)
                                }
                            }
                        })
                },
                _init: function() {
                    this.options.autoOpen && this.open()
                },
                _destroy: function() {
                    var t, e = this.oldPosition;
                    this.overlay && this.overlay.destroy(),
                        this.uiDialog.hide(),
                        this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),
                        this.uiDialog.remove(),
                        this.originalTitle && this.element.attr("title", this.originalTitle),
                        t = e.parent.children().eq(e.index),
                        t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                },
                widget: function() {
                    return this.uiDialog
                },
                close: function(e) {
                    var i, n, s = this;
                    return this._isOpen && !1 !== this._trigger("beforeClose", e) ? (this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide,
                        function() {
                            s._trigger("close", e)
                        }) : (this.uiDialog.hide(), this._trigger("close", e)), t.ui.dialog.overlay.resize(), this.options.modal && (i = 0, t(".ui-dialog").each(function() {
                        this !== s.uiDialog[0] && (n = t(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)))
                    }), t.ui.dialog.maxZ = i), this) : void 0
                },
                isOpen: function() {
                    return this._isOpen
                },
                moveToTop: function(e, i) {
                    var n, s = this.options;
                    return s.modal && !e || !s.stack && !s.modal ? this._trigger("focus", i) : (s.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = s.zIndex), this.overlay && (t.ui.dialog.maxZ += 1, t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ, this.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ)), n = {
                            scrollTop: this.element.scrollTop(),
                            scrollLeft: this.element.scrollLeft()
                        },
                        t.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", t.ui.dialog.maxZ), this.element.attr(n), this._trigger("focus", i), this)
                },
                open: function() {
                    if (!this._isOpen) {
                        var e, i = this.options,
                            n = this.uiDialog;
                        return this._size(),
                            this._position(i.position),
                            n.show(i.show),
                            this.overlay = i.modal ? new t.ui.dialog.overlay(this) : null,
                            this.moveToTop(!0),
                            e = this.element.find(":tabbable"),
                            e.length || (e = this.uiDialogButtonPane.find(":tabbable"), e.length || (e = n)),
                            e.eq(0).focus(),
                            this._isOpen = !0,
                            this._trigger("open"),
                            this
                    }
                },
                _createButtons: function(e) {
                    var i = this,
                        n = !1;
                    this.uiDialogButtonPane.remove(),
                        this.uiButtonSet.empty(),
                        "object" == typeof e && null !== e && t.each(e,
                            function() {
                                return !(n = !0)
                            }),
                        n ? (t.each(e,
                            function(e, n) {
                                var s, r;
                                n = t.isFunction(n) ? {
                                        click: n,
                                        text: e
                                    } : n,
                                    n = t.extend({
                                            type: "button"
                                        },
                                        n),
                                    r = n.click,
                                    n.click = function() {
                                        r.apply(i.element[0], arguments)
                                    },
                                    s = t("<button></button>", n).appendTo(i.uiButtonSet),
                                    t.fn.button && s.button()
                            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
                },
                _makeDraggable: function() {
                    function e(t) {
                        return {
                            position: t.position,
                            offset: t.offset
                        }
                    }
                    var i = this,
                        n = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function(n, s) {
                            t(this).addClass("ui-dialog-dragging"),
                                i._trigger("dragStart", n, e(s))
                        },
                        drag: function(t, n) {
                            i._trigger("drag", t, e(n))
                        },
                        stop: function(s, r) {
                            n.position = [r.position.left - i.document.scrollLeft(), r.position.top - i.document.scrollTop()],
                                t(this).removeClass("ui-dialog-dragging"),
                                i._trigger("dragStop", s, e(r)),
                                t.ui.dialog.overlay.resize()
                        }
                    })
                },
                _makeResizable: function(i) {
                    function n(t) {
                        return {
                            originalPosition: t.originalPosition,
                            originalSize: t.originalSize,
                            position: t.position,
                            size: t.size
                        }
                    }
                    i = i === e ? this.options.resizable : i;
                    var s = this,
                        r = this.options,
                        a = this.uiDialog.css("position"),
                        o = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: r.maxWidth,
                        maxHeight: r.maxHeight,
                        minWidth: r.minWidth,
                        minHeight: this._minHeight(),
                        handles: o,
                        start: function(e, i) {
                            t(this).addClass("ui-dialog-resizing"),
                                s._trigger("resizeStart", e, n(i))
                        },
                        resize: function(t, e) {
                            s._trigger("resize", t, n(e))
                        },
                        stop: function(e, i) {
                            t(this).removeClass("ui-dialog-resizing"),
                                r.height = t(this).height(),
                                r.width = t(this).width(),
                                s._trigger("resizeStop", e, n(i)),
                                t.ui.dialog.overlay.resize()
                        }
                    }).css("position", a).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
                },
                _minHeight: function() {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                },
                _position: function(e) {
                    var i, n = [],
                        s = [0, 0];
                    e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (n = e.split ? e.split(" ") : [e[0], e[1]], 1 === n.length && (n[1] = n[0]), t.each(["left", "top"],
                            function(t, e) {
                                +n[t] === n[t] && (s[t] = n[t], n[t] = e)
                            }), e = {
                            my: n[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + n[1] + (0 > s[1] ? s[1] : "+" + s[1]),
                            at: n.join(" ")
                        }), e = t.extend({},
                            t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position,
                        i = this.uiDialog.is(":visible"),
                        i || this.uiDialog.show(),
                        this.uiDialog.position(e),
                        i || this.uiDialog.hide()
                },
                _setOptions: function(e) {
                    var i = this,
                        r = {},
                        a = !1;
                    t.each(e,
                            function(t, e) {
                                i._setOption(t, e),
                                    t in n && (a = !0),
                                    t in s && (r[t] = e)
                            }),
                        a && this._size(),
                        this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", r)
                },
                _setOption: function(e, n) {
                    var s, r, a = this.uiDialog;
                    switch (e) {
                        case "buttons":
                            this._createButtons(n);
                            break;
                        case "closeText":
                            this.uiDialogTitlebarCloseText.text("" + n);
                            break;
                        case "dialogClass":
                            a.removeClass(this.options.dialogClass).addClass(i + n);
                            break;
                        case "disabled":
                            n ? a.addClass("ui-dialog-disabled") : a.removeClass("ui-dialog-disabled");
                            break;
                        case "draggable":
                            s = a.is(":data(draggable)"),
                                s && !n && a.draggable("destroy"), !s && n && this._makeDraggable();
                            break;
                        case "position":
                            this._position(n);
                            break;
                        case "resizable":
                            r = a.is(":data(resizable)"),
                                r && !n && a.resizable("destroy"),
                                r && "string" == typeof n && a.resizable("option", "handles", n),
                                r || n === !1 || this._makeResizable(n);
                            break;
                        case "title":
                            t(".ui-dialog-title", this.uiDialogTitlebar).html("" + (n || "&#160;"))
                    }
                    this._super(e, n)
                },
                _size: function() {
                    var e, i, n, s = this.options,
                        r = this.uiDialog.is(":visible");
                    this.element.show().css({
                            width: "auto",
                            minHeight: 0,
                            height: 0
                        }),
                        s.minWidth > s.width && (s.width = s.minWidth),
                        e = this.uiDialog.css({
                            height: "auto",
                            width: s.width
                        }).outerHeight(),
                        i = Math.max(0, s.minHeight - e),
                        "auto" === s.height ? t.support.minHeight ? this.element.css({
                            minHeight: i,
                            height: "auto"
                        }) : (this.uiDialog.show(), n = this.element.css("height", "auto").height(), r || this.uiDialog.hide(), this.element.height(Math.max(n, i))) : this.element.height(Math.max(s.height - e, 0)),
                        this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                }
            }),
            t.extend(t.ui.dialog, {
                uuid: 0,
                maxZ: 0,
                getTitleId: function(t) {
                    var e = t.attr("id");
                    return e || (this.uuid += 1, e = this.uuid),
                        "ui-dialog-title-" + e
                },
                overlay: function(e) {
                    this.$el = t.ui.dialog.overlay.create(e)
                }
            }),
            t.extend(t.ui.dialog.overlay, {
                instances: [],
                oldInstances: [],
                maxZ: 0,
                events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),
                    function(t) {
                        return t + ".dialog-overlay"
                    }).join(" "),
                create: function(i) {
                    0 === this.instances.length && (setTimeout(function() {
                            t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events,
                                function(i) {
                                    return t(i.target).zIndex() < t.ui.dialog.overlay.maxZ ? !1 : e
                                })
                        },
                        1), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
                    var n = this.oldInstances.pop() || t("<div>").addClass("ui-widget-overlay");
                    return t(document).bind("keydown.dialog-overlay",
                            function(e) {
                                var s = t.ui.dialog.overlay.instances;
                                0 !== s.length && s[s.length - 1] === n && i.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE && (i.close(e), e.preventDefault())
                            }),
                        n.appendTo(document.body).css({
                            width: this.width(),
                            height: this.height()
                        }),
                        t.fn.bgiframe && n.bgiframe(),
                        this.instances.push(n),
                        n
                },
                destroy: function(e) {
                    var i = t.inArray(e, this.instances),
                        n = 0; - 1 !== i && this.oldInstances.push(this.instances.splice(i, 1)[0]),
                        0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"),
                        e.height(0).width(0).remove(),
                        t.each(this.instances,
                            function() {
                                n = Math.max(n, this.css("z-index"))
                            }),
                        this.maxZ = n
                },
                height: function() {
                    var e, i;
                    return t.ui.ie ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > e ? t(window).height() + "px" : e + "px") : t(document).height() + "px"
                },
                width: function() {
                    var e, i;
                    return t.ui.ie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > e ? t(window).width() + "px" : e + "px") : t(document).width() + "px"
                },
                resize: function() {
                    var e = t([]);
                    t.each(t.ui.dialog.overlay.instances,
                            function() {
                                e = e.add(this)
                            }),
                        e.css({
                            width: 0,
                            height: 0
                        }).css({
                            width: t.ui.dialog.overlay.width(),
                            height: t.ui.dialog.overlay.height()
                        })
                }
            }),
            t.extend(t.ui.dialog.overlay.prototype, {
                destroy: function() {
                    t.ui.dialog.overlay.destroy(this.$el)
                }
            })
    }(jQuery),
    function(t) {
        var e = !1;
        t.widget("ui.menu", {
            version: "1.9.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element,
                    this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                            this.options.disabled && t.preventDefault()
                        },
                        this)),
                    this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
                    this._on({
                        "mousedown .ui-menu-item > a": function(t) {
                            t.preventDefault()
                        },
                        "click .ui-state-disabled > a": function(t) {
                            t.preventDefault()
                        },
                        "click .ui-menu-item:has(a)": function(i) {
                            var n = t(i.target).closest(".ui-menu-item");
                            !e && n.not(".ui-state-disabled").length && (e = !0, this.select(i), n.has(".ui-menu").length ? this.expand(i) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(e) {
                            var i = t(e.currentTarget);
                            i.siblings().children(".ui-state-active").removeClass("ui-state-active"),
                                this.focus(e, i)
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(t, e) {
                            var i = this.active || this.element.children(".ui-menu-item").eq(0);
                            e || this.focus(t, i)
                        },
                        blur: function(e) {
                            this._delay(function() {
                                t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                            })
                        },
                        keydown: "_keydown"
                    }),
                    this.refresh(),
                    this._on(this.document, {
                        click: function(i) {
                            t(i.target).closest(".ui-menu").length || this.collapseAll(i),
                                e = !1
                        }
                    })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
                    this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var e = t(this);
                        e.data("ui-menu-submenu-carat") && e.remove()
                    }),
                    this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(e) {
                function i(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var n, s, r, a, o, l = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        l = !1,
                            s = this.previousFilter || "",
                            r = String.fromCharCode(e.keyCode),
                            a = !1,
                            clearTimeout(this.filterTimer),
                            r === s ? a = !0 : r = s + r,
                            o = RegExp("^" + i(r), "i"),
                            n = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return o.test(t(this).children("a").text())
                            }),
                            n = a && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n,
                            n.length || (r = String.fromCharCode(e.keyCode), o = RegExp("^" + i(r), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                                return o.test(t(this).children("a").text())
                            })),
                            n.length ? (this.focus(e, n), n.length > 1 ? (this.previousFilter = r, this.filterTimer = this._delay(function() {
                                    delete this.previousFilter
                                },
                                1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                l && e.preventDefault()
            },
            _activate: function(t) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, i = this.options.icons.submenu,
                    n = this.element.find(this.options.menus);
                n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var e = t(this),
                            n = e.prev("a"),
                            s = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                        n.attr("aria-haspopup", "true").prepend(s),
                            e.attr("aria-labelledby", n.attr("id"))
                    }),
                    e = n.add(this.element),
                    e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }),
                    e.children(":not(.ui-menu-item)").each(function() {
                        var e = t(this);
                        /[^\-â€”â€“\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
                    }),
                    e.children(".ui-state-disabled").attr("aria-disabled", "true"),
                    this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            focus: function(t, e) {
                var i, n;
                this.blur(t, t && "focus" === t.type),
                    this._scrollIntoView(e),
                    this.active = e.first(),
                    n = this.active.children("a").addClass("ui-state-focus"),
                    this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
                    this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),
                    t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                            this._close()
                        },
                        this.delay),
                    i = e.children(".ui-menu"),
                    i.length && /^mouse/.test(t.type) && this._startOpening(i),
                    this.activeMenu = e.parent(),
                    this._trigger("focus", t, {
                        item: e
                    })
            },
            _scrollIntoView: function(e) {
                var i, n, s, r, a, o;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, r = this.activeMenu.scrollTop(), a = this.activeMenu.height(), o = e.height(), 0 > s ? this.activeMenu.scrollTop(r + s) : s + o > a && this.activeMenu.scrollTop(r + s - a + o))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer),
                    this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                        item: this.active
                    }))
            },
            _startOpening: function(t) {
                clearTimeout(this.timer),
                    "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                            this._close(),
                                this._open(t)
                        },
                        this.delay))
            },
            _open: function(e) {
                var i = t.extend({
                        of: this.active
                    },
                    this.options.position);
                clearTimeout(this.timer),
                    this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
                    e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer),
                    this.timer = this._delay(function() {
                            var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                            n.length || (n = this.element),
                                this._close(n),
                                this.blur(e),
                                this.activeMenu = n
                        },
                        this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element),
                    t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
                    n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[e]()),
                    this.focus(i, n)
            },
            nextPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return i = t(this),
                        0 > i.offset().top - n - s
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return i = t(this),
                        i.offset().top - n + s > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first()))) : void this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0),
                    this._trigger("select", e, i)
            }
        })
    }(jQuery),
    function(t, e) {
        t.widget("ui.progressbar", {
            version: "1.9.2",
            options: {
                value: 0,
                max: 100
            },
            min: 0,
            _create: function() {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                        role: "progressbar",
                        "aria-valuemin": this.min,
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": this._value()
                    }),
                    this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),
                    this.oldValue = this._value(),
                    this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                    this.valueDiv.remove()
            },
            value: function(t) {
                return t === e ? this._value() : (this._setOption("value", t), this)
            },
            _setOption: function(t, e) {
                "value" === t && (this.options.value = e, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")),
                    this._super(t, e)
            },
            _value: function() {
                var t = this.options.value;
                return "number" != typeof t && (t = 0),
                    Math.min(this.options.max, Math.max(this.min, t))
            },
            _percentage: function() {
                return 100 * this._value() / this.options.max
            },
            _refreshValue: function() {
                var t = this.value(),
                    e = this._percentage();
                this.oldValue !== t && (this.oldValue = t, this._trigger("change")),
                    this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"),
                    this.element.attr("aria-valuenow", t)
            }
        })
    }(jQuery),
    function(t) {
        var e = 5;
        t.widget("ui.slider", t.ui.mouse, {
            version: "1.9.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var i, n, s = this.options,
                    r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    o = [];
                for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (s.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = t([]), s.range && (s.range === !0 && (s.values || (s.values = [this._valueMin(), this._valueMin()]), s.values.length && 2 !== s.values.length && (s.values = [s.values[0], s.values[0]])), this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === s.range || "max" === s.range ? " ui-slider-range-" + s.range : ""))), n = s.values && s.values.length || 1, i = r.length; n > i; i++) o.push(a);
                this.handles = r.add(t(o.join("")).appendTo(this.element)),
                    this.handle = this.handles.eq(0),
                    this.handles.add(this.range).filter("a").click(function(t) {
                        t.preventDefault()
                    }).mouseenter(function() {
                        s.disabled || t(this).addClass("ui-state-hover")
                    }).mouseleave(function() {
                        t(this).removeClass("ui-state-hover")
                    }).focus(function() {
                        s.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
                    }).blur(function() {
                        t(this).removeClass("ui-state-focus")
                    }),
                    this.handles.each(function(e) {
                        t(this).data("ui-slider-handle-index", e)
                    }),
                    this._on(this.handles, {
                        keydown: function(i) {
                            var n, s, r, a, o = t(i.target).data("ui-slider-handle-index");
                            switch (i.keyCode) {
                                case t.ui.keyCode.HOME:
                                case t.ui.keyCode.END:
                                case t.ui.keyCode.PAGE_UP:
                                case t.ui.keyCode.PAGE_DOWN:
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), n = this._start(i, o), n === !1)) return
                            }
                            switch (a = this.options.step, s = r = this.options.values && this.options.values.length ? this.values(o) : this.value(), i.keyCode) {
                                case t.ui.keyCode.HOME:
                                    r = this._valueMin();
                                    break;
                                case t.ui.keyCode.END:
                                    r = this._valueMax();
                                    break;
                                case t.ui.keyCode.PAGE_UP:
                                    r = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / e);
                                    break;
                                case t.ui.keyCode.PAGE_DOWN:
                                    r = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / e);
                                    break;
                                case t.ui.keyCode.UP:
                                case t.ui.keyCode.RIGHT:
                                    if (s === this._valueMax()) return;
                                    r = this._trimAlignValue(s + a);
                                    break;
                                case t.ui.keyCode.DOWN:
                                case t.ui.keyCode.LEFT:
                                    if (s === this._valueMin()) return;
                                    r = this._trimAlignValue(s - a)
                            }
                            this._slide(i, o, r)
                        },
                        keyup: function(e) {
                            var i = t(e.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                        }
                    }),
                    this._refreshValue(),
                    this._animateOff = !1
            },
            _destroy: function() {
                this.handles.remove(),
                    this.range.remove(),
                    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),
                    this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, n, s, r, a, o, l, u, c = this,
                    h = this.options;
                return h.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    },
                    this.elementOffset = this.element.offset(), i = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                        var i = Math.abs(n - c.values(e));
                        s > i && (s = i, r = t(this), a = e)
                    }), h.range === !0 && this.values(1) === h.min && (a += 1, r = t(this.handles[a])), o = this._start(e, a), o === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, r.addClass("ui-state-active").focus(), l = r.offset(), u = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = u ? {
                            left: 0,
                            top: 0
                        } : {
                            left: e.pageX - l.left - r.width() / 2,
                            top: e.pageY - l.top - r.height() / 2 - (parseInt(r.css("borderTopWidth"), 10) || 0) - (parseInt(r.css("borderBottomWidth"), 10) || 0) + (parseInt(r.css("marginTop"), 10) || 0)
                        },
                        this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"),
                    this._mouseSliding = !1,
                    this._stop(t, this._handleIndex),
                    this._change(t, this._handleIndex),
                    this._handleIndex = null,
                    this._clickOffset = null,
                    this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, n, s, r;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                    n = i / e,
                    n > 1 && (n = 1),
                    0 > n && (n = 0),
                    "vertical" === this.orientation && (n = 1 - n),
                    s = this._valueMax() - this._valueMin(),
                    r = this._valueMin() + n * s,
                    this._trimAlignValue(r)
            },
            _start: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
                    this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var n, s, r;
                this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, r = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: s
                }), n = this.values(e ? 0 : 1), r !== !1 && this.values(e, i, !0))) : i !== this.value() && (r = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                }), r !== !1 && this.value(i))
            },
            _stop: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
                    this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()),
                        this._trigger("change", t, i)
                }
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var n, s, r;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i),
                    this._refreshValue(),
                    void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], r = 0; n.length > r; r += 1) n[r] = this._trimAlignValue(s[r]),
                    this._change(null, r);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var n, s = 0;
                switch (t.isArray(this.options.values) && (s = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                    case "disabled":
                        i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(),
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
                            this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._change(null, 0),
                            this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0,
                            this._refreshValue(),
                            this._animateOff = !1
                }
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t],
                    e = this._trimAlignValue(e);
                for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i
            },
            _trimAlignValue: function(t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
                    parseFloat(n.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var e, i, n, s, r, a = this.options.range,
                    o = this.options,
                    l = this,
                    u = this._animateOff ? !1 : o.animate,
                    c = {};
                this.options.values && this.options.values.length ? this.handles.each(function(n) {
                    i = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())),
                        c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%",
                        t(this).stop(1, 1)[u ? "animate" : "css"](c, o.animate),
                        l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                                left: i + "%"
                            },
                            o.animate), 1 === n && l.range[u ? "animate" : "css"]({
                            width: i - e + "%"
                        }, {
                            queue: !1,
                            duration: o.animate
                        })) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                                bottom: i + "%"
                            },
                            o.animate), 1 === n && l.range[u ? "animate" : "css"]({
                            height: i - e + "%"
                        }, {
                            queue: !1,
                            duration: o.animate
                        }))),
                        e = i
                }) : (n = this.value(), s = this._valueMin(), r = this._valueMax(), i = r !== s ? 100 * ((n - s) / (r - s)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, o.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        width: i + "%"
                    },
                    o.animate), "max" === a && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        height: i + "%"
                    },
                    o.animate), "max" === a && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))
            }
        })
    }(jQuery),
    function(t) {
        function e(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments),
                    this._refresh(),
                    e !== this.element.val() && this._trigger("change")
            }
        }
        t.widget("ui.spinner", {
            version: "1.9.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max),
                    this._setOption("min", this.options.min),
                    this._setOption("step", this.options.step),
                    this._value(this.element.val(), !0),
                    this._draw(),
                    this._on(this._events),
                    this._refresh(),
                    this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
            },
            _getCreateOptions: function() {
                var e = {},
                    i = this.element;
                return t.each(["min", "max", "step"],
                        function(t, n) {
                            var s = i.attr(n);
                            void 0 !== s && s.length && (e[n] = s)
                        }),
                    e
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                            clearTimeout(this.mousewheelTimer),
                            this.mousewheelTimer = this._delay(function() {
                                    this.spinning && this._stop(t)
                                },
                                100),
                            t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(e) {
                    function i() {
                        var t = this.element[0] === this.document[0].activeElement;
                        t || (this.element.focus(), this.previous = n, this._delay(function() {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(),
                        e.preventDefault(),
                        i.call(this),
                        this.cancelBlur = !0,
                        this._delay(function() {
                            delete this.cancelBlur,
                                i.call(this)
                        }),
                        this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"),
                    this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"),
                    this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()),
                    this.options.disabled && this.disable()
            },
            _keydown: function(e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(t) {
                return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function(t, e, i) {
                t = t || 500,
                    clearTimeout(this.timer),
                    this.timer = this._delay(function() {
                            this._repeat(40, e, i)
                        },
                        t),
                    this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1),
                    i = this._adjustValue(i + t * this._increment(this.counter)),
                    this.spinning && this._trigger("spin", e, {
                        value: i
                    }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function(e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))),
                    t
            },
            _precisionOf: function(t) {
                var e = "" + t,
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, n = this.options;
                return e = null !== n.min ? n.min : 0,
                    i = t - e,
                    i = Math.round(i / n.step) * n.step,
                    t = e + i,
                    t = parseFloat(t.toFixed(this._precision())),
                    null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                if ("culture" === t || "numberFormat" === t) {
                    var i = this._parse(this.element.val());
                    return this.options[t] = e,
                        void this.element.val(this._format(i))
                }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)),
                    this._super(t, e),
                    "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
            },
            _setOptions: e(function(t) {
                this._super(t),
                    this._value(this.element.val())
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t),
                    "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            _value: function(t, e) {
                var i;
                "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))),
                    this.element.val(t),
                    this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),
                    this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._spin((t || 1) * this.options.step)
            },
            stepDown: e(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._spin((t || 1) * -this.options.step)
            },
            pageUp: e(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: e(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    }(jQuery),
    function(t, e) {
        function i() {
            return ++s
        }

        function n(t) {
            return t.hash.length > 1 && t.href.replace(r, "") === location.href.replace(r, "").replace(/\s/g, "%20")
        }
        var s = 0,
            r = /#.*$/;
        t.widget("ui.tabs", {
                version: "1.9.2",
                delay: 300,
                options: {
                    active: null,
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null
                },
                _create: function() {
                    var i = this,
                        n = this.options,
                        s = n.active,
                        r = location.hash.substring(1);
                    this.running = !1,
                        this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace,
                            function(e) {
                                t(this).is(".ui-state-disabled") && e.preventDefault()
                            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace,
                            function() {
                                t(this).closest("li").is(".ui-state-disabled") && this.blur()
                            }),
                        this._processTabs(),
                        null === s && (r && this.tabs.each(function(i, n) {
                            return t(n).attr("aria-controls") === r ? (s = i, !1) : e
                        }), null === s && (s = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === s || -1 === s) && (s = this.tabs.length ? 0 : !1)),
                        s !== !1 && (s = this.tabs.index(this.tabs.eq(s)), -1 === s && (s = n.collapsible ? !1 : 0)),
                        n.active = s, !n.collapsible && n.active === !1 && this.anchors.length && (n.active = 0),
                        t.isArray(n.disabled) && (n.disabled = t.unique(n.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),
                            function(t) {
                                return i.tabs.index(t)
                            }))).sort()),
                        this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : t(),
                        this._refresh(),
                        this.active.length && this.load(n.active)
                },
                _getCreateEventData: function() {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : t()
                    }
                },
                _tabKeydown: function(i) {
                    var n = t(this.document[0].activeElement).closest("li"),
                        s = this.tabs.index(n),
                        r = !0;
                    if (!this._handlePageNav(i)) {
                        switch (i.keyCode) {
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                                s++;
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.LEFT:
                                r = !1,
                                    s--;
                                break;
                            case t.ui.keyCode.END:
                                s = this.anchors.length - 1;
                                break;
                            case t.ui.keyCode.HOME:
                                s = 0;
                                break;
                            case t.ui.keyCode.SPACE:
                                return i.preventDefault(),
                                    clearTimeout(this.activating),
                                    this._activate(s),
                                    e;
                            case t.ui.keyCode.ENTER:
                                return i.preventDefault(),
                                    clearTimeout(this.activating),
                                    this._activate(s === this.options.active ? !1 : s),
                                    e;
                            default:
                                return
                        }
                        i.preventDefault(),
                            clearTimeout(this.activating),
                            s = this._focusNextTab(s, r),
                            i.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                                    this.option("active", s)
                                },
                                this.delay))
                    }
                },
                _panelKeydown: function(e) {
                    this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
                },
                _handlePageNav: function(i) {
                    return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
                },
                _findNextTab: function(e, i) {
                    function n() {
                        return e > s && (e = 0),
                            0 > e && (e = s),
                            e
                    }
                    for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                    return e
                },
                _focusNextTab: function(t, e) {
                    return t = this._findNextTab(t, e),
                        this.tabs.eq(t).focus(),
                        t
                },
                _setOption: function(t, i) {
                    return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
                },
                _tabId: function(t) {
                    return t.attr("aria-controls") || "ui-tabs-" + i()
                },
                _sanitizeSelector: function(t) {
                    return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var e = this.options,
                        i = this.tablist.children(":has(a[href])");
                    e.disabled = t.map(i.filter(".ui-state-disabled"),
                            function(t) {
                                return i.index(t)
                            }),
                        this._processTabs(),
                        e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()),
                        this._refresh()
                },
                _refresh: function() {
                    this._setupDisabled(this.options.disabled),
                        this._setupEvents(this.options.event),
                        this._setupHeightStyle(this.options.heightStyle),
                        this.tabs.not(this.active).attr({
                            "aria-selected": "false",
                            tabIndex: -1
                        }),
                        this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                            "aria-expanded": "false",
                            "aria-hidden": "true"
                        }),
                        this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                            "aria-selected": "true",
                            tabIndex: 0
                        }), this._getPanelForTab(this.active).show().attr({
                            "aria-expanded": "true",
                            "aria-hidden": "false"
                        })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function() {
                    var e = this;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"),
                        this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                            role: "tab",
                            tabIndex: -1
                        }),
                        this.anchors = this.tabs.map(function() {
                            return t("a", this)[0]
                        }).addClass("ui-tabs-anchor").attr({
                            role: "presentation",
                            tabIndex: -1
                        }),
                        this.panels = t(),
                        this.anchors.each(function(i, s) {
                            var r, a, o, l = t(s).uniqueId().attr("id"),
                                u = t(s).closest("li"),
                                c = u.attr("aria-controls");
                            n(s) ? (r = s.hash, a = e.element.find(e._sanitizeSelector(r))) : (o = e._tabId(u), r = "#" + o, a = e.element.find(r), a.length || (a = e._createPanel(o), a.insertAfter(e.panels[i - 1] || e.tablist)), a.attr("aria-live", "polite")),
                                a.length && (e.panels = e.panels.add(a)),
                                c && u.data("ui-tabs-aria-controls", c),
                                u.attr({
                                    "aria-controls": r.substring(1),
                                    "aria-labelledby": l
                                }),
                                a.attr("aria-labelledby", l)
                        }),
                        this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
                },
                _getList: function() {
                    return this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(e) {
                    return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(e) {
                    t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                    for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = e
                },
                _setupEvents: function(e) {
                    var i = {
                        click: function(t) {
                            t.preventDefault()
                        }
                    };
                    e && t.each(e.split(" "),
                            function(t, e) {
                                i[e] = "_eventHandler"
                            }),
                        this._off(this.anchors.add(this.tabs).add(this.panels)),
                        this._on(this.anchors, i),
                        this._on(this.tabs, {
                            keydown: "_tabKeydown"
                        }),
                        this._on(this.panels, {
                            keydown: "_panelKeydown"
                        }),
                        this._focusable(this.tabs),
                        this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(e) {
                    var i, n, s = this.element.parent();
                    "fill" === e ? (t.support.minHeight || (n = s.css("overflow"), s.css("overflow", "hidden")), i = s.height(), this.element.siblings(":visible").each(function() {
                        var e = t(this),
                            n = e.css("position");
                        "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                    }), n && s.css("overflow", n), this.element.children().not(this.panels).each(function() {
                        i -= t(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                    }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                        i = Math.max(i, t(this).height("").height())
                    }).height(i))
                },
                _eventHandler: function(e) {
                    var i = this.options,
                        n = this.active,
                        s = t(e.currentTarget),
                        r = s.closest("li"),
                        a = r[0] === n[0],
                        o = a && i.collapsible,
                        l = o ? t() : this._getPanelForTab(r),
                        u = n.length ? this._getPanelForTab(n) : t(),
                        c = {
                            oldTab: n,
                            oldPanel: u,
                            newTab: o ? t() : r,
                            newPanel: l
                        };
                    e.preventDefault(),
                        r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = o ? !1 : this.tabs.index(r), this.active = a ? t() : r, this.xhr && this.xhr.abort(), u.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), e), this._toggle(e, c))
                },
                _toggle: function(e, i) {
                    function n() {
                        r.running = !1,
                            r._trigger("activate", e, i)
                    }

                    function s() {
                        i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                            a.length && r.options.show ? r._show(a, r.options.show, n) : (a.show(), n())
                    }
                    var r = this,
                        a = i.newPanel,
                        o = i.oldPanel;
                    this.running = !0,
                        o.length && this.options.hide ? this._hide(o, this.options.hide,
                            function() {
                                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                                    s()
                            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), s()),
                        o.attr({
                            "aria-expanded": "false",
                            "aria-hidden": "true"
                        }),
                        i.oldTab.attr("aria-selected", "false"),
                        a.length && o.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                            return 0 === t(this).attr("tabIndex")
                        }).attr("tabIndex", -1),
                        a.attr({
                            "aria-expanded": "true",
                            "aria-hidden": "false"
                        }),
                        i.newTab.attr({
                            "aria-selected": "true",
                            tabIndex: 0
                        })
                },
                _activate: function(e) {
                    var i, n = this._findActive(e);
                    n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                        target: i,
                        currentTarget: i,
                        preventDefault: t.noop
                    }))
                },
                _findActive: function(e) {
                    return e === !1 ? t() : this.tabs.eq(e)
                },
                _getIndex: function(t) {
                    return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))),
                        t
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort(),
                        this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),
                        this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),
                        this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(),
                        this.tabs.add(this.panels).each(function() {
                            t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                        }),
                        this.tabs.each(function() {
                            var e = t(this),
                                i = e.data("ui-tabs-aria-controls");
                            i ? e.attr("aria-controls", i) : e.removeAttr("aria-controls")
                        }),
                        this.panels.show(),
                        "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function(i) {
                    var n = this.options.disabled;
                    n !== !1 && (i === e ? n = !1 : (i = this._getIndex(i), n = t.isArray(n) ? t.map(n,
                        function(t) {
                            return t !== i ? t : null
                        }) : t.map(this.tabs,
                        function(t, e) {
                            return e !== i ? e : null
                        })), this._setupDisabled(n))
                },
                disable: function(i) {
                    var n = this.options.disabled;
                    if (n !== !0) {
                        if (i === e) n = !0;
                        else {
                            if (i = this._getIndex(i), -1 !== t.inArray(i, n)) return;
                            n = t.isArray(n) ? t.merge([i], n).sort() : [i]
                        }
                        this._setupDisabled(n)
                    }
                },
                load: function(e, i) {
                    e = this._getIndex(e);
                    var s = this,
                        r = this.tabs.eq(e),
                        a = r.find(".ui-tabs-anchor"),
                        o = this._getPanelForTab(r),
                        l = {
                            tab: r,
                            panel: o
                        };
                    n(a[0]) || (this.xhr = t.ajax(this._ajaxSettings(a, i, l)), this.xhr && "canceled" !== this.xhr.statusText && (r.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function(t) {
                        setTimeout(function() {
                                o.html(t),
                                    s._trigger("load", i, l)
                            },
                            1)
                    }).complete(function(t, e) {
                        setTimeout(function() {
                                "abort" === e && s.panels.stop(!1, !0),
                                    r.removeClass("ui-tabs-loading"),
                                    o.removeAttr("aria-busy"),
                                    t === s.xhr && delete s.xhr
                            },
                            1)
                    })))
                },
                _ajaxSettings: function(e, i, n) {
                    var s = this;
                    return {
                        url: e.attr("href"),
                        beforeSend: function(e, r) {
                            return s._trigger("beforeLoad", i, t.extend({
                                    jqXHR: e,
                                    ajaxSettings: r
                                },
                                n))
                        }
                    }
                },
                _getPanelForTab: function(e) {
                    var i = t(e).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + i))
                }
            }),
            t.uiBackCompat !== !1 && (t.ui.tabs.prototype._ui = function(t, e) {
                    return {
                        tab: t,
                        panel: e,
                        index: this.anchors.index(t)
                    }
                },
                t.widget("ui.tabs", t.ui.tabs, {
                    url: function(t, e) {
                        this.anchors.eq(t).attr("href", e)
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        ajaxOptions: null,
                        cache: !1
                    },
                    _create: function() {
                        this._super();
                        var i = this;
                        this._on({
                            tabsbeforeload: function(n, s) {
                                return t.data(s.tab[0], "cache.tabs") ? (n.preventDefault(), e) : (s.jqXHR.success(function() {
                                    i.options.cache && t.data(s.tab[0], "cache.tabs", !0)
                                }), e)
                            }
                        })
                    },
                    _ajaxSettings: function(e, i, n) {
                        var s = this.options.ajaxOptions;
                        return t.extend({},
                            s, {
                                error: function(t, e) {
                                    try {
                                        s.error(t, e, n.tab.closest("li").index(), n.tab[0])
                                    } catch (i) {}
                                }
                            },
                            this._superApply(arguments))
                    },
                    _setOption: function(t, e) {
                        "cache" === t && e === !1 && this.anchors.removeData("cache.tabs"),
                            this._super(t, e)
                    },
                    _destroy: function() {
                        this.anchors.removeData("cache.tabs"),
                            this._super()
                    },
                    url: function(t) {
                        this.anchors.eq(t).removeData("cache.tabs"),
                            this._superApply(arguments)
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    abort: function() {
                        this.xhr && this.xhr.abort()
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        spinner: "<em>Loading&#8230;</em>"
                    },
                    _create: function() {
                        this._super(),
                            this._on({
                                tabsbeforeload: function(t, e) {
                                    if (t.target === this.element[0] && this.options.spinner) {
                                        var i = e.tab.find("span"),
                                            n = i.html();
                                        i.html(this.options.spinner),
                                            e.jqXHR.complete(function() {
                                                i.html(n)
                                            })
                                    }
                                }
                            })
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        enable: null,
                        disable: null
                    },
                    enable: function(e) {
                        var i, n = this.options;
                        (e && n.disabled === !0 || t.isArray(n.disabled) && -1 !== t.inArray(e, n.disabled)) && (i = !0),
                        this._superApply(arguments),
                            i && this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e]))
                    },
                    disable: function(e) {
                        var i, n = this.options;
                        (e && n.disabled === !1 || t.isArray(n.disabled) && -1 === t.inArray(e, n.disabled)) && (i = !0),
                        this._superApply(arguments),
                            i && this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        add: null,
                        remove: null,
                        tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
                    },
                    add: function(i, n, s) {
                        s === e && (s = this.anchors.length);
                        var r, a, o = this.options,
                            l = t(o.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, n)),
                            u = i.indexOf("#") ? this._tabId(l) : i.replace("#", "");
                        return l.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0),
                            l.attr("aria-controls", u),
                            r = s >= this.tabs.length,
                            a = this.element.find("#" + u),
                            a.length || (a = this._createPanel(u), r ? s > 0 ? a.insertAfter(this.panels.eq(-1)) : a.appendTo(this.element) : a.insertBefore(this.panels[s])),
                            a.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(),
                            r ? l.appendTo(this.tablist) : l.insertBefore(this.tabs[s]),
                            o.disabled = t.map(o.disabled,
                                function(t) {
                                    return t >= s ? ++t : t
                                }),
                            this.refresh(),
                            1 === this.tabs.length && o.active === !1 && this.option("active", 0),
                            this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])),
                            this
                    },
                    remove: function(e) {
                        e = this._getIndex(e);
                        var i = this.options,
                            n = this.tabs.eq(e).remove(),
                            s = this._getPanelForTab(n).remove();
                        return n.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(e + (this.anchors.length > e + 1 ? 1 : -1)),
                            i.disabled = t.map(t.grep(i.disabled,
                                    function(t) {
                                        return t !== e
                                    }),
                                function(t) {
                                    return t >= e ? --t : t
                                }),
                            this.refresh(),
                            this._trigger("remove", null, this._ui(n.find("a")[0], s[0])),
                            this
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    length: function() {
                        return this.anchors.length
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        idPrefix: "ui-tabs-"
                    },
                    _tabId: function(e) {
                        var n = e.is("li") ? e.find("a[href]") : e;
                        return n = n[0],
                            t(n).closest("li").attr("aria-controls") || n.title && n.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + i()
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        panelTemplate: "<div></div>"
                    },
                    _createPanel: function(e) {
                        return t(this.options.panelTemplate).attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    _create: function() {
                        var t = this.options;
                        null === t.active && t.selected !== e && (t.active = -1 === t.selected ? !1 : t.selected),
                            this._super(),
                            t.selected = t.active,
                            t.selected === !1 && (t.selected = -1)
                    },
                    _setOption: function(t, e) {
                        if ("selected" !== t) return this._super(t, e);
                        var i = this.options;
                        this._super("active", -1 === e ? !1 : e),
                            i.selected = i.active,
                            i.selected === !1 && (i.selected = -1)
                    },
                    _eventHandler: function() {
                        this._superApply(arguments),
                            this.options.selected = this.options.active,
                            this.options.selected === !1 && (this.options.selected = -1)
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        show: null,
                        select: null
                    },
                    _create: function() {
                        this._super(),
                            this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0]))
                    },
                    _trigger: function(t, e, i) {
                        var n, s, r = this._superApply(arguments);
                        return r ? ("beforeActivate" === t ? (n = i.newTab.length ? i.newTab : i.oldTab, s = i.newPanel.length ? i.newPanel : i.oldPanel, r = this._super("select", e, {
                            tab: n.find(".ui-tabs-anchor")[0],
                            panel: s[0],
                            index: n.closest("li").index()
                        })) : "activate" === t && i.newTab.length && (r = this._super("show", e, {
                            tab: i.newTab.find(".ui-tabs-anchor")[0],
                            panel: i.newPanel[0],
                            index: i.newTab.closest("li").index()
                        })), r) : !1
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    select: function(t) {
                        if (t = this._getIndex(t), -1 === t) {
                            if (!this.options.collapsible || -1 === this.options.selected) return;
                            t = this.options.selected
                        }
                        this.anchors.eq(t).trigger(this.options.event + this.eventNamespace)
                    }
                }),
                function() {
                    var e = 0;
                    t.widget("ui.tabs", t.ui.tabs, {
                        options: {
                            cookie: null
                        },
                        _create: function() {
                            var t, e = this.options;
                            null == e.active && e.cookie && (t = parseInt(this._cookie(), 10), -1 === t && (t = !1), e.active = t),
                                this._super()
                        },
                        _cookie: function(i) {
                            var n = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++e)];
                            return arguments.length && (n.push(i === !1 ? -1 : i), n.push(this.options.cookie)),
                                t.cookie.apply(null, n)
                        },
                        _refresh: function() {
                            this._super(),
                                this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                        },
                        _eventHandler: function() {
                            this._superApply(arguments),
                                this.options.cookie && this._cookie(this.options.active, this.options.cookie)
                        },
                        _destroy: function() {
                            this._super(),
                                this.options.cookie && this._cookie(null, this.options.cookie)
                        }
                    })
                }(), t.widget("ui.tabs", t.ui.tabs, {
                    _trigger: function(e, i, n) {
                        var s = t.extend({},
                            n);
                        return "load" === e && (s.panel = s.panel[0], s.tab = s.tab.find(".ui-tabs-anchor")[0]),
                            this._super(e, i, s)
                    }
                }), t.widget("ui.tabs", t.ui.tabs, {
                    options: {
                        fx: null
                    },
                    _getFx: function() {
                        var e, i, n = this.options.fx;
                        return n && (t.isArray(n) ? (e = n[0], i = n[1]) : e = i = n),
                            n ? {
                                show: i,
                                hide: e
                            } : null
                    },
                    _toggle: function(t, i) {
                        function n() {
                            r.running = !1,
                                r._trigger("activate", t, i)
                        }

                        function s() {
                            i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
                                a.length && l.show ? a.animate(l.show, l.show.duration,
                                    function() {
                                        n()
                                    }) : (a.show(), n())
                        }
                        var r = this,
                            a = i.newPanel,
                            o = i.oldPanel,
                            l = this._getFx();
                        return l ? (r.running = !0, o.length && l.hide ? o.animate(l.hide, l.hide.duration,
                            function() {
                                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),
                                    s()
                            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), s()), e) : this._super(t, i)
                    }
                }))
    }(jQuery),
    function(t) {
        function e(e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i),
                e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
        }

        function i(e) {
            var i = e.data("ui-tooltip-id"),
                n = (e.attr("aria-describedby") || "").split(/\s+/),
                s = t.inArray(i, n); - 1 !== s && n.splice(s, 1),
                e.removeData("ui-tooltip-id"),
                n = t.trim(n.join(" ")),
                n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
        }
        var n = 0;
        t.widget("ui.tooltip", {
            version: "1.9.2",
            options: {
                content: function() {
                    return t(this).attr("title")
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _create: function() {
                this._on({
                        mouseover: "open",
                        focusin: "open"
                    }),
                    this.tooltips = {},
                    this.parents = {},
                    this.options.disabled && this._disable()
            },
            _setOption: function(e, i) {
                var n = this;
                return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips,
                    function(t, e) {
                        n._updateContent(e)
                    })))
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips,
                        function(i, n) {
                            var s = t.Event("blur");
                            s.target = s.currentTarget = n[0],
                                e.close(s, !0)
                        }),
                    this.element.find(this.options.items).andSelf().each(function() {
                        var e = t(this);
                        e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
                    })
            },
            _enable: function() {
                this.element.find(this.options.items).andSelf().each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                })
            },
            open: function(e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)),
                        n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                                element: this,
                                title: n.attr("title")
                            },
                            n.attr("title", ""))
                }), this._updateContent(n, e))
            },
            _updateContent: function(t, e) {
                var i, n = this.options.content,
                    s = this,
                    r = e ? e.type : null;
                return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0],
                    function(i) {
                        t.data("ui-tooltip-open") && s._delay(function() {
                            e && (e.type = r),
                                this._open(e, t, i)
                        })
                    }), void(i && this._open(e, t, i)))
            },
            _open: function(i, n, s) {
                function r(t) {
                    u.of = t,
                        a.is(":hidden") || a.position(u)
                }
                var a, o, l, u = t.extend({},
                    this.options.position);
                if (s) {
                    if (a = this._find(n), a.length) return void a.find(".ui-tooltip-content").html(s);
                    n.is("[title]") && (i && "mouseover" === i.type ? n.attr("title", "") : n.removeAttr("title")),
                        a = this._tooltip(n),
                        e(n, a.attr("id")),
                        a.find(".ui-tooltip-content").html(s),
                        this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                            mousemove: r
                        }), r(i)) : a.position(t.extend({
                                of: n
                            },
                            this.options.position)),
                        a.hide(),
                        this._show(a, this.options.show),
                        this.options.show && this.options.show.delay && (l = setInterval(function() {
                                a.is(":visible") && (r(u.of), clearInterval(l))
                            },
                            t.fx.interval)),
                        this._trigger("open", i, {
                            tooltip: a
                        }),
                        o = {
                            keyup: function(e) {
                                if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                    var i = t.Event(e);
                                    i.currentTarget = n[0],
                                        this.close(i, !0)
                                }
                            },
                            remove: function() {
                                this._removeTooltip(a)
                            }
                        },
                        i && "mouseover" !== i.type || (o.mouseleave = "close"),
                        i && "focusin" !== i.type || (o.focusout = "close"),
                        this._on(!0, n, o)
                }
            },
            close: function(e) {
                var n = this,
                    s = t(e ? e.currentTarget : this.element),
                    r = this._find(s);
                this.closing || (s.data("ui-tooltip-title") && s.attr("title", s.data("ui-tooltip-title")), i(s), r.stop(!0), this._hide(r, this.options.hide,
                    function() {
                        n._removeTooltip(t(this))
                    }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents,
                    function(e, i) {
                        t(i.element).attr("title", i.title),
                            delete n.parents[e]
                    }), this.closing = !0, this._trigger("close", e, {
                    tooltip: r
                }), this.closing = !1)
            },
            _tooltip: function(e) {
                var i = "ui-tooltip-" + n++,
                    s = t("<div>").attr({
                        id: i,
                        role: "tooltip"
                    }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return t("<div>").addClass("ui-tooltip-content").appendTo(s),
                    s.appendTo(this.document[0].body),
                    t.fn.bgiframe && s.bgiframe(),
                    this.tooltips[i] = e,
                    s
            },
            _find: function(e) {
                var i = e.data("ui-tooltip-id");
                return i ? t("#" + i) : t()
            },
            _removeTooltip: function(t) {
                t.remove(),
                    delete this.tooltips[t.attr("id")]
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips,
                    function(i, n) {
                        var s = t.Event("blur");
                        s.target = s.currentTarget = n[0],
                            e.close(s, !0),
                            t("#" + i).remove(),
                            n.data("ui-tooltip-title") && (n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
                    })
            }
        })
    }(jQuery),
    jQuery.effects ||
    function(t, e) {
        var i = t.uiBackCompat !== !1,
            n = "ui-effects-";
        t.effects = {
                effect: {}
            },
            function(e, i) {
                function n(t, e, i) {
                    var n = d[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
                }

                function s(t) {
                    var n = c(),
                        s = n._rgba = [];
                    return t = t.toLowerCase(),
                        g(u,
                            function(e, r) {
                                var a, o = r.re.exec(t),
                                    l = o && r.parse(o),
                                    u = r.space || "rgba";
                                return l ? (a = n[u](l), n[h[u].cache] = a[h[u].cache], s = n._rgba = a._rgba, !1) : i
                            }),
                        s.length ? ("0,0,0,0" === s.join() && e.extend(s, a.transparent), n) : a[t]
                }

                function r(t, e, i) {
                    return i = (i + 1) % 1,
                        1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                    l = /^([\-+])=\s*(\d+\.?\d*)/,
                    u = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [t[1], t[2], t[3], t[4]]
                            }
                        },
                        {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                            }
                        },
                        {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function(t) {
                                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                            }
                        },
                        {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function(t) {
                                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                            }
                        },
                        {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function(t) {
                                return [t[1], t[2] / 100, t[3] / 100, t[4]]
                            }
                        }
                    ],
                    c = e.Color = function(t, i, n, s) {
                        return new e.Color.fn.parse(t, i, n, s)
                    },
                    h = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    d = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    p = c.support = {},
                    f = e("<p>")[0],
                    g = e.each;
                f.style.cssText = "background-color:rgba(1,1,1,.5)",
                    p.rgba = f.style.backgroundColor.indexOf("rgba") > -1,
                    g(h,
                        function(t, e) {
                            e.cache = "_" + t,
                                e.props.alpha = {
                                    idx: 3,
                                    type: "percent",
                                    def: 1
                                }
                        }),
                    c.fn = e.extend(c.prototype, {
                        parse: function(r, o, l, u) {
                            if (r === i) return this._rgba = [null, null, null, null],
                                this;
                            (r.jquery || r.nodeType) && (r = e(r).css(o), o = i);
                            var d = this,
                                p = e.type(r),
                                f = this._rgba = [];
                            return o !== i && (r = [r, o, l, u], p = "array"),
                                "string" === p ? this.parse(s(r) || a._default) : "array" === p ? (g(h.rgba.props,
                                    function(t, e) {
                                        f[e.idx] = n(r[e.idx], e)
                                    }), this) : "object" === p ? (r instanceof c ? g(h,
                                    function(t, e) {
                                        r[e.cache] && (d[e.cache] = r[e.cache].slice())
                                    }) : g(h,
                                    function(e, i) {
                                        var s = i.cache;
                                        g(i.props,
                                                function(t, e) {
                                                    if (!d[s] && i.to) {
                                                        if ("alpha" === t || null == r[t]) return;
                                                        d[s] = i.to(d._rgba)
                                                    }
                                                    d[s][e.idx] = n(r[t], e, !0)
                                                }),
                                            d[s] && 0 > t.inArray(null, d[s].slice(0, 3)) && (d[s][3] = 1, i.from && (d._rgba = i.from(d[s])))
                                    }), this) : i
                        },
                        is: function(t) {
                            var e = c(t),
                                n = !0,
                                s = this;
                            return g(h,
                                    function(t, r) {
                                        var a, o = e[r.cache];
                                        return o && (a = s[r.cache] || r.to && r.to(s._rgba) || [], g(r.props,
                                                function(t, e) {
                                                    return null != o[e.idx] ? n = o[e.idx] === a[e.idx] : i
                                                })),
                                            n
                                    }),
                                n
                        },
                        _space: function() {
                            var t = [],
                                e = this;
                            return g(h,
                                    function(i, n) {
                                        e[n.cache] && t.push(i)
                                    }),
                                t.pop()
                        },
                        transition: function(t, e) {
                            var i = c(t),
                                s = i._space(),
                                r = h[s],
                                a = 0 === this.alpha() ? c("transparent") : this,
                                o = a[r.cache] || r.to(a._rgba),
                                l = o.slice();
                            return i = i[r.cache],
                                g(r.props,
                                    function(t, s) {
                                        var r = s.idx,
                                            a = o[r],
                                            u = i[r],
                                            c = d[s.type] || {};
                                        null !== u && (null === a ? l[r] = u : (c.mod && (u - a > c.mod / 2 ? a += c.mod : a - u > c.mod / 2 && (a -= c.mod)), l[r] = n((u - a) * e + a, s)))
                                    }),
                                this[s](l)
                        },
                        blend: function(t) {
                            if (1 === this._rgba[3]) return this;
                            var i = this._rgba.slice(),
                                n = i.pop(),
                                s = c(t)._rgba;
                            return c(e.map(i,
                                function(t, e) {
                                    return (1 - n) * s[e] + n * t
                                }))
                        },
                        toRgbaString: function() {
                            var t = "rgba(",
                                i = e.map(this._rgba,
                                    function(t, e) {
                                        return null == t ? e > 2 ? 1 : 0 : t
                                    });
                            return 1 === i[3] && (i.pop(), t = "rgb("),
                                t + i.join() + ")"
                        },
                        toHslaString: function() {
                            var t = "hsla(",
                                i = e.map(this.hsla(),
                                    function(t, e) {
                                        return null == t && (t = e > 2 ? 1 : 0),
                                            e && 3 > e && (t = Math.round(100 * t) + "%"),
                                            t
                                    });
                            return 1 === i[3] && (i.pop(), t = "hsl("),
                                t + i.join() + ")"
                        },
                        toHexString: function(t) {
                            var i = this._rgba.slice(),
                                n = i.pop();
                            return t && i.push(~~(255 * n)),
                                "#" + e.map(i,
                                    function(t) {
                                        return t = (t || 0).toString(16),
                                            1 === t.length ? "0" + t : t
                                    }).join("")
                        },
                        toString: function() {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                        }
                    }),
                    c.fn.parse.prototype = c.fn,
                    h.hsla.to = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e, i, n = t[0] / 255,
                            s = t[1] / 255,
                            r = t[2] / 255,
                            a = t[3],
                            o = Math.max(n, s, r),
                            l = Math.min(n, s, r),
                            u = o - l,
                            c = o + l,
                            h = .5 * c;
                        return e = l === o ? 0 : n === o ? 60 * (s - r) / u + 360 : s === o ? 60 * (r - n) / u + 120 : 60 * (n - s) / u + 240,
                            i = 0 === h || 1 === h ? h : .5 >= h ? u / c : u / (2 - c), [Math.round(e) % 360, i, h, null == a ? 1 : a]
                    },
                    h.hsla.from = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                        var e = t[0] / 360,
                            i = t[1],
                            n = t[2],
                            s = t[3],
                            a = .5 >= n ? n * (1 + i) : n + i - n * i,
                            o = 2 * n - a;
                        return [Math.round(255 * r(o, a, e + 1 / 3)), Math.round(255 * r(o, a, e)), Math.round(255 * r(o, a, e - 1 / 3)), s]
                    },
                    g(h,
                        function(t, s) {
                            var r = s.props,
                                a = s.cache,
                                o = s.to,
                                u = s.from;
                            c.fn[t] = function(t) {
                                    if (o && !this[a] && (this[a] = o(this._rgba)), t === i) return this[a].slice();
                                    var s, l = e.type(t),
                                        h = "array" === l || "object" === l ? t : arguments,
                                        d = this[a].slice();
                                    return g(r,
                                            function(t, e) {
                                                var i = h["object" === l ? t : e.idx];
                                                null == i && (i = d[e.idx]),
                                                    d[e.idx] = n(i, e)
                                            }),
                                        u ? (s = c(u(d)), s[a] = d, s) : c(d)
                                },
                                g(r,
                                    function(i, n) {
                                        c.fn[i] || (c.fn[i] = function(s) {
                                            var r, a = e.type(s),
                                                o = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t,
                                                u = this[o](),
                                                c = u[n.idx];
                                            return "undefined" === a ? c : ("function" === a && (s = s.call(this, c), a = e.type(s)), null == s && n.empty ? this : ("string" === a && (r = l.exec(s), r && (s = c + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), u[n.idx] = s, this[o](u)))
                                        })
                                    })
                        }),
                    g(o,
                        function(t, i) {
                            e.cssHooks[i] = {
                                    set: function(t, n) {
                                        var r, a, o = "";
                                        if ("string" !== e.type(n) || (r = s(n))) {
                                            if (n = c(r || n), !p.rgba && 1 !== n._rgba[3]) {
                                                for (a = "backgroundColor" === i ? t.parentNode : t;
                                                    ("" === o || "transparent" === o) && a && a.style;) try {
                                                    o = e.css(a, "backgroundColor"),
                                                        a = a.parentNode
                                                } catch (l) {}
                                                n = n.blend(o && "transparent" !== o ? o : "_default")
                                            }
                                            n = n.toRgbaString()
                                        }
                                        try {
                                            t.style[i] = n
                                        } catch (u) {}
                                    }
                                },
                                e.fx.step[i] = function(t) {
                                    t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0),
                                        e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                                }
                        }),
                    e.cssHooks.borderColor = {
                        expand: function(t) {
                            var e = {};
                            return g(["Top", "Right", "Bottom", "Left"],
                                    function(i, n) {
                                        e["border" + n + "Color"] = t
                                    }),
                                e
                        }
                    },
                    a = e.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }
            }(jQuery),
            function() {
                function i() {
                    var e, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                        s = {};
                    if (n && n.length && n[0] && n[n[0]])
                        for (i = n.length; i--;) e = n[i],
                            "string" == typeof n[e] && (s[t.camelCase(e)] = n[e]);
                    else
                        for (e in n) "string" == typeof n[e] && (s[e] = n[e]);
                    return s
                }

                function n(e, i) {
                    var n, s, a = {};
                    for (n in i) s = i[n],
                        e[n] !== s && (r[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (a[n] = s));
                    return a
                }
                var s = ["add", "remove", "toggle"],
                    r = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"],
                        function(e, i) {
                            t.fx.step[i] = function(t) {
                                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                            }
                        }),
                    t.effects.animateClass = function(e, r, a, o) {
                        var l = t.speed(r, a, o);
                        return this.queue(function() {
                            var r, a = t(this),
                                o = a.attr("class") || "",
                                u = l.children ? a.find("*").andSelf() : a;
                            u = u.map(function() {
                                    var e = t(this);
                                    return {
                                        el: e,
                                        start: i.call(this)
                                    }
                                }),
                                r = function() {
                                    t.each(s,
                                        function(t, i) {
                                            e[i] && a[i + "Class"](e[i])
                                        })
                                },
                                r(),
                                u = u.map(function() {
                                    return this.end = i.call(this.el[0]),
                                        this.diff = n(this.start, this.end),
                                        this
                                }),
                                a.attr("class", o),
                                u = u.map(function() {
                                    var e = this,
                                        i = t.Deferred(),
                                        n = jQuery.extend({},
                                            l, {
                                                queue: !1,
                                                complete: function() {
                                                    i.resolve(e)
                                                }
                                            });
                                    return this.el.animate(this.diff, n),
                                        i.promise()
                                }),
                                t.when.apply(t, u.get()).done(function() {
                                    r(),
                                        t.each(arguments,
                                            function() {
                                                var e = this.el;
                                                t.each(this.diff,
                                                    function(t) {
                                                        e.css(t, "")
                                                    })
                                            }),
                                        l.complete.call(a[0])
                                })
                        })
                    },
                    t.fn.extend({
                        _addClass: t.fn.addClass,
                        addClass: function(e, i, n, s) {
                            return i ? t.effects.animateClass.call(this, {
                                    add: e
                                },
                                i, n, s) : this._addClass(e)
                        },
                        _removeClass: t.fn.removeClass,
                        removeClass: function(e, i, n, s) {
                            return i ? t.effects.animateClass.call(this, {
                                    remove: e
                                },
                                i, n, s) : this._removeClass(e)
                        },
                        _toggleClass: t.fn.toggleClass,
                        toggleClass: function(i, n, s, r, a) {
                            return "boolean" == typeof n || n === e ? s ? t.effects.animateClass.call(this, n ? {
                                    add: i
                                } : {
                                    remove: i
                                },
                                s, r, a) : this._toggleClass(i, n) : t.effects.animateClass.call(this, {
                                    toggle: i
                                },
                                n, s, r)
                        },
                        switchClass: function(e, i, n, s, r) {
                            return t.effects.animateClass.call(this, {
                                    add: i,
                                    remove: e
                                },
                                n, s, r)
                        }
                    })
            }(),
            function() {
                function s(e, i, n, s) {
                    return t.isPlainObject(e) && (i = e, e = e.effect),
                        e = {
                            effect: e
                        },
                        null == i && (i = {}),
                        t.isFunction(i) && (s = i, n = null, i = {}),
                        ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}),
                        t.isFunction(n) && (s = n, n = null),
                        i && t.extend(e, i),
                        n = n || i.duration,
                        e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
                        e.complete = s || i.complete,
                        e
                }

                function r(e) {
                    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : i && t.effects[e] ? !1 : !0
                }
                t.extend(t.effects, {
                        version: "1.9.2",
                        save: function(t, e) {
                            for (var i = 0; e.length > i; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
                        },
                        restore: function(t, i) {
                            var s, r;
                            for (r = 0; i.length > r; r++) null !== i[r] && (s = t.data(n + i[r]), s === e && (s = ""), t.css(i[r], s))
                        },
                        setMode: function(t, e) {
                            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
                                e
                        },
                        getBaseline: function(t, e) {
                            var i, n;
                            switch (t[0]) {
                                case "top":
                                    i = 0;
                                    break;
                                case "middle":
                                    i = .5;
                                    break;
                                case "bottom":
                                    i = 1;
                                    break;
                                default:
                                    i = t[0] / e.height
                            }
                            switch (t[1]) {
                                case "left":
                                    n = 0;
                                    break;
                                case "center":
                                    n = .5;
                                    break;
                                case "right":
                                    n = 1;
                                    break;
                                default:
                                    n = t[1] / e.width
                            }
                            return {
                                x: n,
                                y: i
                            }
                        },
                        createWrapper: function(e) {
                            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                            var i = {
                                    width: e.outerWidth(!0),
                                    height: e.outerHeight(!0),
                                    "float": e.css("float")
                                },
                                n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                    fontSize: "100%",
                                    background: "transparent",
                                    border: "none",
                                    margin: 0,
                                    padding: 0
                                }),
                                s = {
                                    width: e.width(),
                                    height: e.height()
                                },
                                r = document.activeElement;
                            try {
                                r.id
                            } catch (a) {
                                r = document.body
                            }
                            return e.wrap(n),
                                (e[0] === r || t.contains(e[0], r)) && t(r).focus(),
                                n = e.parent(),
                                "static" === e.css("position") ? (n.css({
                                    position: "relative"
                                }), e.css({
                                    position: "relative"
                                })) : (t.extend(i, {
                                    position: e.css("position"),
                                    zIndex: e.css("z-index")
                                }), t.each(["top", "left", "bottom", "right"],
                                    function(t, n) {
                                        i[n] = e.css(n),
                                            isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                                    }), e.css({
                                    position: "relative",
                                    top: 0,
                                    left: 0,
                                    right: "auto",
                                    bottom: "auto"
                                })),
                                e.css(s),
                                n.css(i).show()
                        },
                        removeWrapper: function(e) {
                            var i = document.activeElement;
                            return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
                                e
                        },
                        setTransition: function(e, i, n, s) {
                            return s = s || {},
                                t.each(i,
                                    function(t, i) {
                                        var r = e.cssUnit(i);
                                        r[0] > 0 && (s[i] = r[0] * n + r[1])
                                    }),
                                s
                        }
                    }),
                    t.fn.extend({
                        effect: function() {
                            function e(e) {
                                function i() {
                                    t.isFunction(r) && r.call(s[0]),
                                        t.isFunction(e) && e()
                                }
                                var s = t(this),
                                    r = n.complete,
                                    a = n.mode;
                                (s.is(":hidden") ? "hide" === a : "show" === a) ? i(): o.call(s[0], n, i)
                            }
                            var n = s.apply(this, arguments),
                                r = n.mode,
                                a = n.queue,
                                o = t.effects.effect[n.effect],
                                l = !o && i && t.effects[n.effect];
                            return t.fx.off || !o && !l ? r ? this[r](n.duration, n.complete) : this.each(function() {
                                n.complete && n.complete.call(this)
                            }) : o ? a === !1 ? this.each(e) : this.queue(a || "fx", e) : l.call(this, {
                                options: n,
                                duration: n.duration,
                                callback: n.complete,
                                mode: n.mode
                            })
                        },
                        _show: t.fn.show,
                        show: function(t) {
                            if (r(t)) return this._show.apply(this, arguments);
                            var e = s.apply(this, arguments);
                            return e.mode = "show",
                                this.effect.call(this, e)
                        },
                        _hide: t.fn.hide,
                        hide: function(t) {
                            if (r(t)) return this._hide.apply(this, arguments);
                            var e = s.apply(this, arguments);
                            return e.mode = "hide",
                                this.effect.call(this, e)
                        },
                        __toggle: t.fn.toggle,
                        toggle: function(e) {
                            if (r(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                            var i = s.apply(this, arguments);
                            return i.mode = "toggle",
                                this.effect.call(this, i)
                        },
                        cssUnit: function(e) {
                            var i = this.css(e),
                                n = [];
                            return t.each(["em", "px", "%", "pt"],
                                    function(t, e) {
                                        i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                                    }),
                                n
                        }
                    })
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"],
                        function(t, i) {
                            e[i] = function(e) {
                                return Math.pow(e, t + 2)
                            }
                        }),
                    t.extend(e, {
                        Sine: function(t) {
                            return 1 - Math.cos(t * Math.PI / 2)
                        },
                        Circ: function(t) {
                            return 1 - Math.sqrt(1 - t * t)
                        },
                        Elastic: function(t) {
                            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                        },
                        Back: function(t) {
                            return t * t * (3 * t - 2)
                        },
                        Bounce: function(t) {
                            for (var e, i = 4;
                                ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                        }
                    }),
                    t.each(e,
                        function(e, i) {
                            t.easing["easeIn" + e] = i,
                                t.easing["easeOut" + e] = function(t) {
                                    return 1 - i(1 - t)
                                },
                                t.easing["easeInOut" + e] = function(t) {
                                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                                }
                        })
            }()
    }(jQuery),
    function(t) {
        var e = /up|down|vertical/,
            i = /up|left|vertical|horizontal/;
        t.effects.effect.blind = function(n, s) {
            var r, a, o, l = t(this),
                u = ["position", "top", "bottom", "left", "right", "height", "width"],
                c = t.effects.setMode(l, n.mode || "hide"),
                h = n.direction || "up",
                d = e.test(h),
                p = d ? "height" : "width",
                f = d ? "top" : "left",
                g = i.test(h),
                m = {},
                v = "show" === c;
            l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), u) : t.effects.save(l, u),
                l.show(),
                r = t.effects.createWrapper(l).css({
                    overflow: "hidden"
                }),
                a = r[p](),
                o = parseFloat(r.css(f)) || 0,
                m[p] = v ? a : 0,
                g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                    position: "absolute"
                }), m[f] = v ? o : a + o),
                v && (r.css(p, 0), g || r.css(f, o + a)),
                r.animate(m, {
                    duration: n.duration,
                    easing: n.easing,
                    queue: !1,
                    complete: function() {
                        "hide" === c && l.hide(),
                            t.effects.restore(l, u),
                            t.effects.removeWrapper(l),
                            s()
                    }
                })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.bounce = function(e, i) {
            var n, s, r, a = t(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(a, e.mode || "effect"),
                u = "hide" === l,
                c = "show" === l,
                h = e.direction || "up",
                d = e.distance,
                p = e.times || 5,
                f = 2 * p + (c || u ? 1 : 0),
                g = e.duration / f,
                m = e.easing,
                v = "up" === h || "down" === h ? "top" : "left",
                y = "up" === h || "left" === h,
                b = a.queue(),
                _ = b.length;
            for ((c || u) && o.push("opacity"), t.effects.save(a, o), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (r = {
                        opacity: 1
                    },
                    r[v] = 0, a.css("opacity", 0).css(v, y ? 2 * -d : 2 * d).animate(r, g, m)), u && (d /= Math.pow(2, p - 1)), r = {},
                r[v] = 0, n = 0; p > n; n++) s = {},
                s[v] = (y ? "-=" : "+=") + d,
                a.animate(s, g, m).animate(r, g, m),
                d = u ? 2 * d : d / 2;
            u && (s = {
                        opacity: 0
                    },
                    s[v] = (y ? "-=" : "+=") + d, a.animate(s, g, m)),
                a.queue(function() {
                    u && a.hide(),
                        t.effects.restore(a, o),
                        t.effects.removeWrapper(a),
                        i()
                }),
                _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))),
                a.dequeue()
        }
    }(jQuery),
    function(t) {
        t.effects.effect.clip = function(e, i) {
            var n, s, r, a = t(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(a, e.mode || "hide"),
                u = "show" === l,
                c = e.direction || "vertical",
                h = "vertical" === c,
                d = h ? "height" : "width",
                p = h ? "top" : "left",
                f = {};
            t.effects.save(a, o),
                a.show(),
                n = t.effects.createWrapper(a).css({
                    overflow: "hidden"
                }),
                s = "IMG" === a[0].tagName ? n : a,
                r = s[d](),
                u && (s.css(d, 0), s.css(p, r / 2)),
                f[d] = u ? r : 0,
                f[p] = u ? 0 : r / 2,
                s.animate(f, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        u || a.hide(),
                            t.effects.restore(a, o),
                            t.effects.removeWrapper(a),
                            i()
                    }
                })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.drop = function(e, i) {
            var n, s = t(this),
                r = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                a = t.effects.setMode(s, e.mode || "hide"),
                o = "show" === a,
                l = e.direction || "left",
                u = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l ? "pos" : "neg",
                h = {
                    opacity: o ? 1 : 0
                };
            t.effects.save(s, r),
                s.show(),
                t.effects.createWrapper(s),
                n = e.distance || s["top" === u ? "outerHeight" : "outerWidth"](!0) / 2,
                o && s.css("opacity", 0).css(u, "pos" === c ? -n : n),
                h[u] = (o ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + n,
                s.animate(h, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        "hide" === a && s.hide(),
                            t.effects.restore(s, r),
                            t.effects.removeWrapper(s),
                            i()
                    }
                })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.explode = function(e, i) {
            function n() {
                b.push(this),
                    b.length === h * d && s()
            }

            function s() {
                p.css({
                        visibility: "visible"
                    }),
                    t(b).remove(),
                    g || p.hide(),
                    i()
            }
            var r, a, o, l, u, c, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = h,
                p = t(this),
                f = t.effects.setMode(p, e.mode || "hide"),
                g = "show" === f,
                m = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / d),
                y = Math.ceil(p.outerHeight() / h),
                b = [];
            for (r = 0; h > r; r++)
                for (l = m.top + r * y, c = r - (h - 1) / 2, a = 0; d > a; a++) o = m.left + a * v,
                    u = a - (d - 1) / 2,
                    p.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -a * v,
                        top: -r * y
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: v,
                        height: y,
                        left: o + (g ? u * v : 0),
                        top: l + (g ? c * y : 0),
                        opacity: g ? 0 : 1
                    }).animate({
                            left: o + (g ? 0 : u * v),
                            top: l + (g ? 0 : c * y),
                            opacity: g ? 1 : 0
                        },
                        e.duration || 500, e.easing, n)
        }
    }(jQuery),
    function(t) {
        t.effects.effect.fade = function(e, i) {
            var n = t(this),
                s = t.effects.setMode(n, e.mode || "toggle");
            n.animate({
                opacity: s
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.fold = function(e, i) {
            var n, s, r = t(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = t.effects.setMode(r, e.mode || "hide"),
                l = "show" === o,
                u = "hide" === o,
                c = e.size || 15,
                h = /([0-9]+)%/.exec(c),
                d = !!e.horizFirst,
                p = l !== d,
                f = p ? ["width", "height"] : ["height", "width"],
                g = e.duration / 2,
                m = {},
                v = {};
            t.effects.save(r, a),
                r.show(),
                n = t.effects.createWrapper(r).css({
                    overflow: "hidden"
                }),
                s = p ? [n.width(), n.height()] : [n.height(), n.width()],
                h && (c = parseInt(h[1], 10) / 100 * s[u ? 0 : 1]),
                l && n.css(d ? {
                    height: 0,
                    width: c
                } : {
                    height: c,
                    width: 0
                }),
                m[f[0]] = l ? s[0] : c,
                v[f[1]] = l ? s[1] : 0,
                n.animate(m, g, e.easing).animate(v, g, e.easing,
                    function() {
                        u && r.hide(),
                            t.effects.restore(r, a),
                            t.effects.removeWrapper(r),
                            i()
                    })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.highlight = function(e, i) {
            var n = t(this),
                s = ["backgroundImage", "backgroundColor", "opacity"],
                r = t.effects.setMode(n, e.mode || "show"),
                a = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === r && (a.opacity = 0),
                t.effects.save(n, s),
                n.show().css({
                    backgroundImage: "none",
                    backgroundColor: e.color || "#ffff99"
                }).animate(a, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        "hide" === r && n.hide(),
                            t.effects.restore(n, s),
                            i()
                    }
                })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.pulsate = function(e, i) {
            var n, s = t(this),
                r = t.effects.setMode(s, e.mode || "show"),
                a = "show" === r,
                o = "hide" === r,
                l = a || "hide" === r,
                u = 2 * (e.times || 5) + (l ? 1 : 0),
                c = e.duration / u,
                h = 0,
                d = s.queue(),
                p = d.length;
            for ((a || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1), n = 1; u > n; n++) s.animate({
                        opacity: h
                    },
                    c, e.easing),
                h = 1 - h;
            s.animate({
                        opacity: h
                    },
                    c, e.easing),
                s.queue(function() {
                    o && s.hide(),
                        i()
                }),
                p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, u + 1))),
                s.dequeue()
        }
    }(jQuery),
    function(t) {
        t.effects.effect.puff = function(e, i) {
                var n = t(this),
                    s = t.effects.setMode(n, e.mode || "hide"),
                    r = "hide" === s,
                    a = parseInt(e.percent, 10) || 150,
                    o = a / 100,
                    l = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    };
                t.extend(e, {
                        effect: "scale",
                        queue: !1,
                        fade: !0,
                        mode: s,
                        complete: i,
                        percent: r ? a : 100,
                        from: r ? l : {
                            height: l.height * o,
                            width: l.width * o,
                            outerHeight: l.outerHeight * o,
                            outerWidth: l.outerWidth * o
                        }
                    }),
                    n.effect(e)
            },
            t.effects.effect.scale = function(e, i) {
                var n = t(this),
                    s = t.extend(!0, {},
                        e),
                    r = t.effects.setMode(n, e.mode || "effect"),
                    a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === r ? 0 : 100),
                    o = e.direction || "both",
                    l = e.origin,
                    u = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    },
                    c = {
                        y: "horizontal" !== o ? a / 100 : 1,
                        x: "vertical" !== o ? a / 100 : 1
                    };
                s.effect = "size",
                    s.queue = !1,
                    s.complete = i,
                    "effect" !== r && (s.origin = l || ["middle", "center"], s.restore = !0),
                    s.from = e.from || ("show" === r ? {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    } : u),
                    s.to = {
                        height: u.height * c.y,
                        width: u.width * c.x,
                        outerHeight: u.outerHeight * c.y,
                        outerWidth: u.outerWidth * c.x
                    },
                    s.fade && ("show" === r && (s.from.opacity = 0, s.to.opacity = 1), "hide" === r && (s.from.opacity = 1, s.to.opacity = 0)),
                    n.effect(s)
            },
            t.effects.effect.size = function(e, i) {
                var n, s, r, a = t(this),
                    o = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    u = ["width", "height", "overflow"],
                    c = ["fontSize"],
                    h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    p = t.effects.setMode(a, e.mode || "effect"),
                    f = e.restore || "effect" !== p,
                    g = e.scale || "both",
                    m = e.origin || ["middle", "center"],
                    v = a.css("position"),
                    y = f ? o : l,
                    b = {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                "show" === p && a.show(),
                    n = {
                        height: a.height(),
                        width: a.width(),
                        outerHeight: a.outerHeight(),
                        outerWidth: a.outerWidth()
                    },
                    "toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || n) : (a.from = e.from || ("show" === p ? b : n), a.to = e.to || ("hide" === p ? b : n)),
                    r = {
                        from: {
                            y: a.from.height / n.height,
                            x: a.from.width / n.width
                        },
                        to: {
                            y: a.to.height / n.height,
                            x: a.to.width / n.width
                        }
                    },
                    ("box" === g || "both" === g) && (r.from.y !== r.to.y && (y = y.concat(h), a.from = t.effects.setTransition(a, h, r.from.y, a.from), a.to = t.effects.setTransition(a, h, r.to.y, a.to)), r.from.x !== r.to.x && (y = y.concat(d), a.from = t.effects.setTransition(a, d, r.from.x, a.from), a.to = t.effects.setTransition(a, d, r.to.x, a.to))),
                    ("content" === g || "both" === g) && r.from.y !== r.to.y && (y = y.concat(c).concat(u), a.from = t.effects.setTransition(a, c, r.from.y, a.from), a.to = t.effects.setTransition(a, c, r.to.y, a.to)),
                    t.effects.save(a, y),
                    a.show(),
                    t.effects.createWrapper(a),
                    a.css("overflow", "hidden").css(a.from),
                    m && (s = t.effects.getBaseline(m, n), a.from.top = (n.outerHeight - a.outerHeight()) * s.y, a.from.left = (n.outerWidth - a.outerWidth()) * s.x, a.to.top = (n.outerHeight - a.to.outerHeight) * s.y, a.to.left = (n.outerWidth - a.to.outerWidth) * s.x),
                    a.css(a.from),
                    ("content" === g || "both" === g) && (h = h.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), u = o.concat(h).concat(d), a.find("*[width]").each(function() {
                        var i = t(this),
                            n = {
                                height: i.height(),
                                width: i.width(),
                                outerHeight: i.outerHeight(),
                                outerWidth: i.outerWidth()
                            };
                        f && t.effects.save(i, u),
                            i.from = {
                                height: n.height * r.from.y,
                                width: n.width * r.from.x,
                                outerHeight: n.outerHeight * r.from.y,
                                outerWidth: n.outerWidth * r.from.x
                            },
                            i.to = {
                                height: n.height * r.to.y,
                                width: n.width * r.to.x,
                                outerHeight: n.height * r.to.y,
                                outerWidth: n.width * r.to.x
                            },
                            r.from.y !== r.to.y && (i.from = t.effects.setTransition(i, h, r.from.y, i.from), i.to = t.effects.setTransition(i, h, r.to.y, i.to)),
                            r.from.x !== r.to.x && (i.from = t.effects.setTransition(i, d, r.from.x, i.from), i.to = t.effects.setTransition(i, d, r.to.x, i.to)),
                            i.css(i.from),
                            i.animate(i.to, e.duration, e.easing,
                                function() {
                                    f && t.effects.restore(i, u)
                                })
                    })),
                    a.animate(a.to, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            0 === a.to.opacity && a.css("opacity", a.from.opacity),
                                "hide" === p && a.hide(),
                                t.effects.restore(a, y),
                                f || ("static" === v ? a.css({
                                    position: "relative",
                                    top: a.to.top,
                                    left: a.to.left
                                }) : t.each(["top", "left"],
                                    function(t, e) {
                                        a.css(e,
                                            function(e, i) {
                                                var n = parseInt(i, 10),
                                                    s = t ? a.to.left : a.to.top;
                                                return "auto" === i ? s + "px" : n + s + "px"
                                            })
                                    })),
                                t.effects.removeWrapper(a),
                                i()
                        }
                    })
            }
    }(jQuery),
    function(t) {
        t.effects.effect.shake = function(e, i) {
            var n, s = t(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = t.effects.setMode(s, e.mode || "effect"),
                o = e.direction || "left",
                l = e.distance || 20,
                u = e.times || 3,
                c = 2 * u + 1,
                h = Math.round(e.duration / c),
                d = "up" === o || "down" === o ? "top" : "left",
                p = "up" === o || "left" === o,
                f = {},
                g = {},
                m = {},
                v = s.queue(),
                y = v.length;
            for (t.effects.save(s, r), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, h, e.easing), n = 1; u > n; n++) s.animate(g, h, e.easing).animate(m, h, e.easing);
            s.animate(g, h, e.easing).animate(f, h / 2, e.easing).queue(function() {
                    "hide" === a && s.hide(),
                        t.effects.restore(s, r),
                        t.effects.removeWrapper(s),
                        i()
                }),
                y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, c + 1))),
                s.dequeue()
        }
    }(jQuery),
    function(t) {
        t.effects.effect.slide = function(e, i) {
            var n, s = t(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height"],
                a = t.effects.setMode(s, e.mode || "show"),
                o = "show" === a,
                l = e.direction || "left",
                u = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                h = {};
            t.effects.save(s, r),
                s.show(),
                n = e.distance || s["top" === u ? "outerHeight" : "outerWidth"](!0),
                t.effects.createWrapper(s).css({
                    overflow: "hidden"
                }),
                o && s.css(u, c ? isNaN(n) ? "-" + n : -n : n),
                h[u] = (o ? c ? "+=" : "-=" : c ? "-=" : "+=") + n,
                s.animate(h, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        "hide" === a && s.hide(),
                            t.effects.restore(s, r),
                            t.effects.removeWrapper(s),
                            i()
                    }
                })
        }
    }(jQuery),
    function(t) {
        t.effects.effect.transfer = function(e, i) {
            var n = t(this),
                s = t(e.to),
                r = "fixed" === s.css("position"),
                a = t("body"),
                o = r ? a.scrollTop() : 0,
                l = r ? a.scrollLeft() : 0,
                u = s.offset(),
                c = {
                    top: u.top - o,
                    left: u.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                },
                h = n.offset(),
                d = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.className).css({
                    top: h.top - o,
                    left: h.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: r ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing,
                    function() {
                        d.remove(),
                            i()
                    })
        }
    }(jQuery),
    define("jquery-ui", ["jquery"],
        function(t) {
            return function() {
                var e;
                return e || t.$
            }
        }(this)),
    define("scroll", ["animateNumber", "easing", "jquery-ui"],
        function(t) {
            var e = function() {
                var t = 0;
                return document.documentElement && document.documentElement.scrollTop ? t = document.documentElement.scrollTop : document.body && (t = document.body.scrollTop),
                    t
            };
            t.fn.anchorAnimate = function(e) {
                return e = t.extend({
                            speed: 1100
                        },
                        e),
                    this.each(function() {
                        var i = this;
                        t(i).click(function(n) {
                            n.preventDefault();
                            var s = (window.location.href, t(i).attr("rol")),
                                r = t(s).offset().top;
                            return t("html:not(:animated),body:not(:animated)").animate({
                                    scrollTop: r
                                },
                                e.speed,
                                function() {
                                    window.location.hash = s
                                }), !1
                        })
                    })
            };
            var i = function(i) {
                    t("#scroll-top").anchorAnimate({
                        speed: 500
                    });
                    var o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        c = !0,
                        h = !0,
                        d = !0,
                        p = !0,
                        f = !0;
                    window.onscroll = function() {
                        var g = e();
                        if (g > 2 * o ? t("#scroll-top").show() : t("#scroll-top").hide(), i) n();
                        else {
                            var m = t(".ty-section01-right").offset().top,
                                v = t(".ty-section02-conl").offset().top,
                                y = t(".ty-section03-r").offset().top,
                                b = t(".ty-section04").offset().top,
                                _ = t(".ty-section05-r").offset().top;
                            c && g + o - 500 > m && (c = !1, s()),
                                h && g + o - 500 > v && (h = !1, r()),
                                d && g + o - 500 > y && (d = !1, a()),
                                p && g + o - 500 > b && (p = !1, l()),
                                f && g + o - 500 > _ && (f = !1, u())
                        }
                    }
                },
                n = function() {
                    t(".ty-section01-right .ty-move-text").addClass("ty-move-text-end"),
                        t(".ty-gif01-alarm-box,.ty-gif01-alarm").show(),
                        t(".ty-gif01-spot").hide(),
                        t(".ty-section02-conl .ty-move-text").addClass("ty-move-text-end"),
                        t(".ty-section02-img").addClass("ty-section02-img-end"),
                        t(".ty-section03-r .ty-move-text").addClass("ty-move-text-end"),
                        t(".ty-gif02-end-bg,.ty-gif02-end").show(),
                        t("#num-span01").text("2.8"),
                        t("#num-span02").text("4.8"),
                        t(".ty-section04 p").addClass("text-end"),
                        t(".ty-section04 h3").addClass("text-end"),
                        t(".solution01-img").addClass("img-end"),
                        t(".solution01-img+.solution-text").addClass("solution-text-end"),
                        t(".solution02-img").addClass("img-end"),
                        t(".solution02-img+.solution-text").addClass("solution-text-end"),
                        t(".solution03-img").addClass("img-end"),
                        t(".solution03-img+.solution-text").addClass("solution-text-end"),
                        t(".solution04-img").addClass("img-end"),
                        t(".solution04-img+.solution-text").addClass("solution-text-end"),
                        t(".ty-controller-right-noanimate").show(),
                        t("#ty-controller-right").hide()
                },
                s = function() {
                    setTimeout(function() {
                                t(".ty-section01-right .ty-move-text01").addClass("ty-move-text-end", 800, "easeOutSine")
                            },
                            200),
                        setTimeout(function() {
                                t(".ty-section01-right .ty-move-text02").addClass("ty-move-text-end", 800, "easeOutSine")
                            },
                            300),
                        setTimeout(function() {
                                t(".ty-section01-right .ty-move-text03").addClass("ty-move-text-end", 800, "easeOutSine")
                            },
                            400),
                        t(".ty-gif01-spot").addClass("ty-gif01-spot02", 333, "easeInOutQuad"),
                        t(".ty-gif01-spot").addClass("ty-gif01-spot03", 291, "easeInOutQuad",
                            function() {
                                t(".ty-gif01-img02").show("scale", {
                                        percent: 100
                                    },
                                    333,
                                    function() {
                                        t(".ty-gif01-alarm-box").fadeIn(500,
                                            function() {
                                                t(".ty-gif01-alarm").show()
                                            })
                                    })
                            })
                },
                r = function() {
                    setTimeout(function() {
                                t(".ty-section02-conl .ty-move-text01").addClass("ty-move-text-end", 700, "easeOutQuart")
                            },
                            100),
                        setTimeout(function() {
                                t(".ty-section02-conl .ty-move-text02").addClass("ty-move-text-end", 700, "easeOutQuart")
                            },
                            200),
                        setTimeout(function() {
                                t(".ty-section02-conl .ty-move-text03").addClass("ty-move-text-end", 700, "easeOutQuart")
                            },
                            300),
                        t(".ty-section02-img").addClass("ty-section02-img-end", 1e3, "easeInOutQuint")
                },
                a = function() {
                    setTimeout(function() {
                                t(".ty-section03-r .ty-move-text01").addClass("ty-move-text-end", 800, "easeOutSine")
                            },
                            200),
                        setTimeout(function() {
                                t(".ty-section03-r .ty-move-text02").addClass("ty-move-text-end", 800, "easeOutSine")
                            },
                            300),
                        setTimeout(function() {
                                t(".ty-section03-r .ty-move-text03").addClass("ty-move-text-end", 800, "easeOutSine")
                            },
                            400),
                        t(".ty-gif02-end-bg").slideDown(300,
                            function() {
                                t(".ty-gif02-end").slideDown(300,
                                    function() {
                                        t("#num-span01").stop().animateNumber({
                                                    number: 28,
                                                    numberStep: o
                                                },
                                                1e3),
                                            t("#num-span02").stop().animateNumber({
                                                    number: 48,
                                                    numberStep: o
                                                },
                                                2e3)
                                    })
                            })
                },
                o = function(e, i) {
                    var n = Math.floor(e) / 10,
                        s = t(i.elem);
                    n = n.toFixed(1),
                        s.text(n)
                },
                l = function() {
                    t(".ty-section04 h3").addClass("text-end", 950, "easeOutQuint"),
                        t(".solution01-img").addClass("img-end", 950, "easeOutQuint"),
                        t(".solution01-img+.solution-text").addClass("solution-text-end", 950, "easeOutQuint"),
                        setTimeout(function() {
                                t(".ty-section04 p").addClass("text-end", 950, "easeOutQuint"),
                                    t(".solution02-img").addClass("img-end", 950, "easeOutQuint"),
                                    t(".solution02-img+.solution-text").addClass("solution-text-end", 950, "easeOutQuint")
                            },
                            100),
                        setTimeout(function() {
                                t(".solution03-img").addClass("img-end", 950, "easeOutQuint"),
                                    t(".solution03-img+.solution-text").addClass("solution-text-end", 950, "easeOutQuint")
                            },
                            200),
                        setTimeout(function() {
                                t(".solution04-img").addClass("img-end", 950, "easeOutQuint"),
                                    t(".solution04-img+.solution-text").addClass("solution-text-end", 950, "easeOutQuint")
                            },
                            300)
                },
                u = function() {
                    t("#ty-controller-animation").addClass("ty-controller-animation"),
                        t("#ty-controller-animation3").addClass("ty-controller-animation3"),
                        t("#ty-controller-reddashed").addClass("ty-controller-reddashed"),
                        t("#ty-controller-redcircle").addClass("ty-controller-redcircle"),
                        t("#ty-controller-bluecircle").addClass("ty-controller-bluecircle")
                };
            return {
                getScrollTop: e,
                initScroll: i
            }
        }),
    "undefined" == typeof jwplayer && (jwplayer = function(t) {
            return jwplayer.api ? jwplayer.api.selectPlayer(t) : void 0
        },
        jwplayer.version = "6.8.", jwplayer.vid = document.createElement("video"), jwplayer.audio = document.createElement("audio"), jwplayer.source = document.createElement("source"),
        function(t) {
            function e(t) {
                if (g.exists(t)) {
                    var e = t.indexOf("://"),
                        i = t.indexOf("?");
                    return e > 0 && (0 > i || i > e)
                }
            }

            function i(t) {
                return function() {
                    return v(t)
                }
            }

            function n(t) {
                return t && t.indexOf("://") >= 0 && t.split("/")[2] != l.location.href.split("/")[2]
            }

            function s(t, e, i) {
                return function() {
                    t("Error loading file")
                }
            }

            function r(t, e, i, n, s) {
                return function() {
                    if (4 === t.readyState) switch (t.status) {
                        case 200:
                            a(t, e, i, n, s)();
                            break;
                        case 404:
                            n("File not found")
                    }
                }
            }

            function a(t, e, i, n, s) {
                return function() {
                    var r, a;
                    if (s) i(t);
                    else {
                        try {
                            if (r = t.responseXML, r && (a = r.firstChild, r.lastChild && "parsererror" === r.lastChild.nodeName)) return void(n && n("Invalid XML"))
                        } catch (o) {}
                        if (r && a) return i(t);
                        var l = g.parseXML(t.responseText);
                        if (!l || !l.firstChild) return void(n && n(t.responseText ? "Invalid XML" : e));
                        t = g.extend({},
                                t, {
                                    responseXML: l
                                }),
                            i(t)
                    }
                }
            }
            var o = document,
                l = window,
                u = navigator,
                c = "undefined",
                h = "string",
                d = "object",
                p = !0,
                f = !1,
                g = t.utils = function() {};
            g.exists = function(t) {
                    switch (typeof t) {
                        case h:
                            return t.length > 0;
                        case d:
                            return null !== t;
                        case c:
                            return f
                    }
                    return p
                },
                g.styleDimension = function(t) {
                    return t + (t.toString().indexOf("%") > 0 ? "" : "px")
                },
                g.getAbsolutePath = function(t, i) {
                    if (g.exists(i) || (i = o.location.href), g.exists(t)) {
                        if (e(t)) return t;
                        var n, s = i.substring(0, i.indexOf("://") + 3),
                            r = i.substring(s.length, i.indexOf("/", s.length + 1));
                        if (0 === t.indexOf("/")) n = t.split("/");
                        else {
                            var a = i.split("?")[0];
                            a = a.substring(s.length + r.length + 1, a.lastIndexOf("/")),
                                n = a.split("/").concat(t.split("/"))
                        }
                        for (var l = [], u = 0; u < n.length; u++) n[u] && g.exists(n[u]) && "." != n[u] && (".." == n[u] ? l.pop() : l.push(n[u]));
                        return s + r + "/" + l.join("/")
                    }
                },
                g.extend = function() {
                    var t = g.extend.arguments;
                    if (t.length > 1) {
                        for (var e = 1; e < t.length; e++) g.foreach(t[e],
                            function(e, i) {
                                try {
                                    g.exists(i) && (t[0][e] = i)
                                } catch (n) {}
                            });
                        return t[0]
                    }
                    return null
                };
            var m = window.console = window.console || {
                log: function() {}
            };
            g.log = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                typeof m.log === d ? m.log(t) : m.log.apply(m, t)
            };
            var v = g.userAgentMatch = function(t) {
                var e = u.userAgent.toLowerCase();
                return null !== e.match(t)
            };
            g.isIE = g.isMSIE = i(/msie/i),
                g.isFF = i(/firefox/i),
                g.isChrome = i(/chrome/i),
                g.isIPod = i(/iP(hone|od)/i),
                g.isIPad = i(/iPad/i),
                g.isSafari602 = i(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i),
                g.isIETrident = function(t) {
                    return t ? (t = parseFloat(t).toFixed(1), v(new RegExp("msie\\s*" + t + "|trident/.+rv:\\s*" + t, "i"))) : v(/msie|trident/i)
                },
                g.isSafari = function() {
                    return v(/safari/i) && !v(/chrome/i) && !v(/chromium/i) && !v(/android/i)
                },
                g.isIOS = function(t) {
                    return v(t ? new RegExp("iP(hone|ad|od).+\\sOS\\s" + t, "i") : /iP(hone|ad|od)/i)
                },
                g.isAndroid = function(t, e) {
                    var i = e ? !v(/chrome\/[23456789]/i) : p;
                    return t ? i && v(new RegExp("android.*" + t, "i")) : i && v(/android/i)
                },
                g.isMobile = function() {
                    return g.isIOS() || g.isAndroid()
                },
                g.saveCookie = function(t, e) {
                    o.cookie = "jwplayer." + t + "=" + e + "; path=/"
                },
                g.getCookies = function() {
                    for (var t = {},
                            e = o.cookie.split("; "), i = 0; i < e.length; i++) {
                        var n = e[i].split("=");
                        0 === n[0].indexOf("jwplayer.") && (t[n[0].substring(9, n[0].length)] = n[1])
                    }
                    return t
                },
                g.typeOf = function(t) {
                    var e = typeof t;
                    return e === d ? t ? t instanceof Array ? "array" : e : "null" : e
                },
                g.translateEventResponse = function(e, i) {
                    var n = g.extend({},
                        i);
                    if (e != t.events.JWPLAYER_FULLSCREEN || n.fullscreen)
                        if (typeof n.data == d) {
                            var s = n.data;
                            delete n.data,
                                n = g.extend(n, s)
                        } else typeof n.metadata == d && g.deepReplaceKeyName(n.metadata, ["__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-", "default"]);
                    else n.fullscreen = "true" == n.message ? p : f,
                        delete n.message;
                    var r = ["position", "duration", "offset"];
                    return g.foreach(r,
                            function(t, e) {
                                n[e] && (n[e] = Math.round(1e3 * n[e]) / 1e3)
                            }),
                        n
                },
                g.flashVersion = function() {
                    if (g.isAndroid()) return 0;
                    var t, e = u.plugins;
                    try {
                        if (e !== c && (t = e["Shockwave Flash"])) return parseInt(t.description.replace(/\D+(\d+)\..*/, "$1"), 10)
                    } catch (i) {}
                    if (typeof l.ActiveXObject != c) try {
                        if (t = new l.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseInt(t.GetVariable("$version").split(" ")[1].split(",")[0], 10)
                    } catch (n) {}
                    return 0
                },
                g.getScriptPath = function(t) {
                    for (var e = o.getElementsByTagName("script"), i = 0; i < e.length; i++) {
                        var n = e[i].src;
                        if (n && n.indexOf(t) >= 0) return n.substr(0, n.indexOf(t))
                    }
                    return ""
                },
                g.deepReplaceKeyName = function(e, i, n) {
                    switch (t.utils.typeOf(e)) {
                        case "array":
                            for (var s = 0; s < e.length; s++) e[s] = t.utils.deepReplaceKeyName(e[s], i, n);
                            break;
                        case d:
                            g.foreach(e,
                                function(s, r) {
                                    var a, o;
                                    if (i instanceof Array && n instanceof Array) {
                                        if (i.length != n.length) return;
                                        a = i,
                                            o = n
                                    } else a = [i],
                                        o = [n];
                                    for (var l = s,
                                            u = 0; u < a.length; u++) l = l.replace(new RegExp(i[u], "g"), n[u]);
                                    e[l] = t.utils.deepReplaceKeyName(r, i, n),
                                        s != l && delete e[s]
                                })
                    }
                    return e
                };
            var y = g.pluginPathType = {
                ABSOLUTE: 0,
                RELATIVE: 1,
                CDN: 2
            };
            g.getPluginPathType = function(t) {
                    if (typeof t == h) {
                        t = t.split("?")[0];
                        var e = t.indexOf("://");
                        if (e > 0) return y.ABSOLUTE;
                        var i = t.indexOf("/"),
                            n = g.extension(t);
                        return !(0 > e && 0 > i) || n && isNaN(n) ? y.RELATIVE : y.CDN
                    }
                },
                g.getPluginName = function(t) {
                    return t.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, "$2")
                },
                g.getPluginVersion = function(t) {
                    return t.replace(/[^-]*-?([^\.]*).*$/, "$1")
                },
                g.isYouTube = function(t) {
                    return /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(t)
                },
                g.youTubeID = function(t) {
                    try {
                        return /v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(t).slice(1).join("").replace("?", "")
                    } catch (e) {
                        return ""
                    }
                },
                g.isRtmp = function(t, e) {
                    return 0 === t.indexOf("rtmp") || "rtmp" == e
                },
                g.foreach = function(t, e) {
                    var i, n;
                    for (i in t) "function" == g.typeOf(t.hasOwnProperty) ? t.hasOwnProperty(i) && (n = t[i], e(i, n)) : (n = t[i], e(i, n))
                },
                g.isHTTPS = function() {
                    return 0 === l.location.href.indexOf("https")
                },
                g.repo = function() {
                    var e = "http://p.jwpcdn.com/" + t.version.split(/\W/).splice(0, 2).join("/") + "/";
                    try {
                        g.isHTTPS() && (e = e.replace("http://", "https://ssl."))
                    } catch (i) {}
                    return e
                },
                g.ajax = function(t, e, i, o) {
                    var u;
                    if (t.indexOf("#") > 0 && (t = t.replace(/#.*$/, "")), n(t) && g.exists(l.XDomainRequest)) u = new l.XDomainRequest,
                        u.onload = a(u, t, e, i, o),
                        u.ontimeout = u.onprogress = function() {},
                        u.timeout = 5e3;
                    else {
                        if (!g.exists(l.XMLHttpRequest)) return i && i(),
                            u;
                        u = new l.XMLHttpRequest,
                            u.onreadystatechange = r(u, t, e, i, o)
                    }
                    return u.overrideMimeType && u.overrideMimeType("text/xml"),
                        u.onerror = s(i, t, u),
                        setTimeout(function() {
                                try {
                                    u.open("GET", t, p),
                                        u.send()
                                } catch (e) {
                                    i && i(t)
                                }
                            },
                            0),
                        u
                },
                g.parseXML = function(t) {
                    var e;
                    try {
                        if (l.DOMParser) {
                            if (e = (new l.DOMParser).parseFromString(t, "text/xml"), e.childNodes && e.childNodes.length && "parsererror" == e.childNodes[0].firstChild.nodeName) return
                        } else e = new l.ActiveXObject("Microsoft.XMLDOM"),
                            e.async = "false",
                            e.loadXML(t)
                    } catch (i) {
                        return
                    }
                    return e
                },
                g.filterPlaylist = function(t, e) {
                    var i, n, s, r, a = [];
                    for (i = 0; i < t.length; i++)
                        if (n = g.extend({},
                                t[i]), n.sources = g.filterSources(n.sources), n.sources.length > 0) {
                            for (s = 0; s < n.sources.length; s++) r = n.sources[s],
                                r.label || (r.label = s.toString());
                            a.push(n)
                        }
                    if (e && 0 === a.length)
                        for (i = 0; i < t.length; i++)
                            if (n = g.extend({},
                                    t[i]), n.sources = g.filterSources(n.sources, p), n.sources.length > 0) {
                                for (s = 0; s < n.sources.length; s++) r = n.sources[s],
                                    r.label || (r.label = s.toString());
                                a.push(n)
                            }
                    return a
                },
                g.filterSources = function(e, i) {
                    var n, s, r = g.extensionmap;
                    if (e) {
                        s = [];
                        for (var a = 0; a < e.length; a++) {
                            var o = e[a].type,
                                l = e[a].file;
                            l && (l = g.trim(l)),
                                o || (o = r.extType(g.extension(l)), e[a].type = o),
                                i ? t.embed.flashCanPlay(l, o) && (n || (n = o), o == n && s.push(g.extend({},
                                    e[a]))) : g.canPlayHTML5(o) && (n || (n = o), o == n && s.push(g.extend({},
                                    e[a])))
                        }
                    }
                    return s
                },
                g.canPlayHTML5 = function(e) {
                    if (g.isAndroid() && ("hls" == e || "m3u" == e || "m3u8" == e)) return f;
                    var i = g.extensionmap.types[e];
                    return !!i && !!t.vid.canPlayType && t.vid.canPlayType(i)
                },
                g.seconds = function(t) {
                    t = t.replace(",", ".");
                    var e = t.split(":"),
                        i = 0;
                    return "s" == t.slice(-1) ? i = parseFloat(t) : "m" == t.slice(-1) ? i = 60 * parseFloat(t) : "h" == t.slice(-1) ? i = 3600 * parseFloat(t) : e.length > 1 ? (i = parseFloat(e[e.length - 1]), i += 60 * parseFloat(e[e.length - 2]), 3 == e.length && (i += 3600 * parseFloat(e[e.length - 3]))) : i = parseFloat(t),
                        i
                },
                g.serialize = function(t) {
                    return null == t ? null : "true" == t.toString().toLowerCase() ? p : "false" == t.toString().toLowerCase() ? f : isNaN(Number(t)) || t.length > 5 || 0 === t.length ? t : Number(t)
                }
        }(jwplayer),
        function(t) {
            var e = "video/",
                i = "audio/",
                n = "mp4",
                s = "webm",
                r = "ogg",
                a = "aac",
                o = "mp3",
                l = "vorbis",
                u = t.foreach,
                c = {
                    mp4: e + n,
                    vorbis: i + r,
                    ogg: e + r,
                    webm: e + s,
                    aac: i + n,
                    mp3: i + "mpeg",
                    hls: "application/vnd.apple.mpegurl"
                },
                h = {
                    mp4: c[n],
                    f4v: c[n],
                    m4v: c[n],
                    mov: c[n],
                    m4a: c[a],
                    f4a: c[a],
                    aac: c[a],
                    mp3: c[o],
                    ogv: c[r],
                    ogg: c[l],
                    oga: c[l],
                    webm: c[s],
                    m3u8: c.hls,
                    hls: c.hls
                },
                e = "video",
                d = {
                    flv: e,
                    f4v: e,
                    mov: e,
                    m4a: e,
                    m4v: e,
                    mp4: e,
                    aac: e,
                    f4a: e,
                    mp3: "sound",
                    smil: "rtmp",
                    m3u8: "hls",
                    hls: "hls"
                },
                p = t.extensionmap = {};
            u(h,
                    function(t, e) {
                        p[t] = {
                            html5: e
                        }
                    }),
                u(d,
                    function(t, e) {
                        p[t] || (p[t] = {}),
                            p[t].flash = e
                    }),
                p.types = c,
                p.mimeType = function(t) {
                    var e;
                    return u(c,
                            function(i, n) {
                                e || n != t || (e = i)
                            }),
                        e
                },
                p.extType = function(t) {
                    return p.mimeType(h[t])
                }
        }(jwplayer.utils),
        function(t) {
            var e = t.loaderstatus = {
                    NEW: 0,
                    LOADING: 1,
                    ERROR: 2,
                    COMPLETE: 3
                },
                i = document;
            t.scriptloader = function(n) {
                    function s(t) {
                        a = e.ERROR,
                            l.sendEvent(o.ERROR)
                    }

                    function r(t) {
                        a = e.COMPLETE,
                            l.sendEvent(o.COMPLETE)
                    }
                    var a = e.NEW,
                        o = jwplayer.events,
                        l = new o.eventdispatcher;
                    t.extend(this, l),
                        this.load = function() {
                            var l = t.scriptloader.loaders[n];
                            if (l && (l.getStatus() == e.NEW || l.getStatus() == e.LOADING)) return l.addEventListener(o.ERROR, s),
                                void l.addEventListener(o.COMPLETE, r);
                            if (t.scriptloader.loaders[n] = this, a == e.NEW) {
                                a = e.LOADING;
                                var u = i.createElement("script");
                                u.addEventListener ? (u.onload = r, u.onerror = s) : u.readyState && (u.onreadystatechange = function() {
                                        ("loaded" == u.readyState || "complete" == u.readyState) && r()
                                    }),
                                    i.getElementsByTagName("head")[0].appendChild(u),
                                    u.src = n
                            }
                        },
                        this.getStatus = function() {
                            return a
                        }
                },
                t.scriptloader.loaders = {}
        }(jwplayer.utils),
        function(t) {
            t.trim = function(t) {
                    return t.replace(/^\s*/, "").replace(/\s*$/, "")
                },
                t.pad = function(t, e, i) {
                    for (i || (i = "0"); t.length < e;) t = i + t;
                    return t
                },
                t.xmlAttribute = function(t, e) {
                    for (var i = 0; i < t.attributes.length; i++)
                        if (t.attributes[i].name && t.attributes[i].name.toLowerCase() == e.toLowerCase()) return t.attributes[i].value.toString();
                    return ""
                },
                t.extension = function(t) {
                    return t && "rtmp" != t.substr(0, 4) ? (t = t.substring(t.lastIndexOf("/") + 1, t.length).split("?")[0].split("#")[0], t.lastIndexOf(".") > -1 ? t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase() : void 0) : ""
                },
                t.stringToColor = function(t) {
                    return t = t.replace(/(#|0x)?([0-9A-F]{3,6})$/gi, "$2"),
                        3 == t.length && (t = t.charAt(0) + t.charAt(0) + t.charAt(1) + t.charAt(1) + t.charAt(2) + t.charAt(2)),
                        parseInt(t, 16)
                }
        }(jwplayer.utils),
        function(t) {
            var e = "touchmove",
                i = "touchstart",
                n = "touchend",
                s = "touchcancel";
            t.touch = function(r) {
                function a(t) {
                    d && g && l(m.DRAG_END, t),
                        g = !1,
                        d = !1,
                        f = null
                }

                function o(t) {
                    t.type == i ? (d = !0, f = u(m.DRAG_START, t)) : t.type == e ? d && (g ? l(m.DRAG, t) : (l(m.DRAG_START, t, f), g = !0, l(m.DRAG, t))) : (d && (g ? l(m.DRAG_END, t) : (t.cancelBubble = !0, l(m.TAP, t))), g = !1, d = !1, f = null)
                }

                function l(t, e, i) {
                    if (p[t]) {
                        c(e);
                        var n = i ? i : u(t, e);
                        n && p[t](n)
                    }
                }

                function u(t, e) {
                    var i = null;
                    if (e.touches && e.touches.length ? i = e.touches[0] : e.changedTouches && e.changedTouches.length && (i = e.changedTouches[0]), !i) return null;
                    var n = h.getBoundingClientRect(),
                        s = {
                            type: t,
                            target: h,
                            x: i.pageX - window.pageXOffset - n.left,
                            y: i.pageY,
                            deltaX: 0,
                            deltaY: 0
                        };
                    return t != m.TAP && f && (s.deltaX = s.x - f.x, s.deltaY = s.y - f.y),
                        s
                }

                function c(t) {
                    t.preventManipulation && t.preventManipulation(),
                        t.preventDefault && t.preventDefault()
                }
                var h = r,
                    d = !1,
                    p = {},
                    f = null,
                    g = !1,
                    m = t.touchEvents;
                return document.addEventListener(e, o),
                    document.addEventListener(n, a),
                    document.addEventListener(s, o),
                    r.addEventListener(i, o),
                    r.addEventListener(n, o),
                    this.addEventListener = function(t, e) {
                        p[t] = e
                    },
                    this.removeEventListener = function(t) {
                        delete p[t]
                    },
                    this
            }
        }(jwplayer.utils),
        function(t) {
            t.touchEvents = {
                DRAG: "jwplayerDrag",
                DRAG_START: "jwplayerDragStart",
                DRAG_END: "jwplayerDragEnd",
                TAP: "jwplayerTap"
            }
        }(jwplayer.utils),
        function(t) {
            t.events = {
                COMPLETE: "COMPLETE",
                ERROR: "ERROR",
                API_READY: "jwplayerAPIReady",
                JWPLAYER_READY: "jwplayerReady",
                JWPLAYER_FULLSCREEN: "jwplayerFullscreen",
                JWPLAYER_RESIZE: "jwplayerResize",
                JWPLAYER_ERROR: "jwplayerError",
                JWPLAYER_SETUP_ERROR: "jwplayerSetupError",
                JWPLAYER_MEDIA_BEFOREPLAY: "jwplayerMediaBeforePlay",
                JWPLAYER_MEDIA_BEFORECOMPLETE: "jwplayerMediaBeforeComplete",
                JWPLAYER_COMPONENT_SHOW: "jwplayerComponentShow",
                JWPLAYER_COMPONENT_HIDE: "jwplayerComponentHide",
                JWPLAYER_MEDIA_BUFFER: "jwplayerMediaBuffer",
                JWPLAYER_MEDIA_BUFFER_FULL: "jwplayerMediaBufferFull",
                JWPLAYER_MEDIA_ERROR: "jwplayerMediaError",
                JWPLAYER_MEDIA_LOADED: "jwplayerMediaLoaded",
                JWPLAYER_MEDIA_COMPLETE: "jwplayerMediaComplete",
                JWPLAYER_MEDIA_SEEK: "jwplayerMediaSeek",
                JWPLAYER_MEDIA_TIME: "jwplayerMediaTime",
                JWPLAYER_MEDIA_VOLUME: "jwplayerMediaVolume",
                JWPLAYER_MEDIA_META: "jwplayerMediaMeta",
                JWPLAYER_MEDIA_MUTE: "jwplayerMediaMute",
                JWPLAYER_MEDIA_LEVELS: "jwplayerMediaLevels",
                JWPLAYER_MEDIA_LEVEL_CHANGED: "jwplayerMediaLevelChanged",
                JWPLAYER_CAPTIONS_CHANGED: "jwplayerCaptionsChanged",
                JWPLAYER_CAPTIONS_LIST: "jwplayerCaptionsList",
                JWPLAYER_CAPTIONS_LOADED: "jwplayerCaptionsLoaded",
                JWPLAYER_PLAYER_STATE: "jwplayerPlayerState",
                state: {
                    BUFFERING: "BUFFERING",
                    IDLE: "IDLE",
                    PAUSED: "PAUSED",
                    PLAYING: "PLAYING"
                },
                JWPLAYER_PLAYLIST_LOADED: "jwplayerPlaylistLoaded",
                JWPLAYER_PLAYLIST_ITEM: "jwplayerPlaylistItem",
                JWPLAYER_PLAYLIST_COMPLETE: "jwplayerPlaylistComplete",
                JWPLAYER_DISPLAY_CLICK: "jwplayerViewClick",
                JWPLAYER_CONTROLS: "jwplayerViewControls",
                JWPLAYER_USER_ACTION: "jwplayerUserAction",
                JWPLAYER_INSTREAM_CLICK: "jwplayerInstreamClicked",
                JWPLAYER_INSTREAM_DESTROYED: "jwplayerInstreamDestroyed",
                JWPLAYER_AD_TIME: "jwplayerAdTime",
                JWPLAYER_AD_ERROR: "jwplayerAdError",
                JWPLAYER_AD_CLICK: "jwplayerAdClicked",
                JWPLAYER_AD_COMPLETE: "jwplayerAdComplete",
                JWPLAYER_AD_IMPRESSION: "jwplayerAdImpression",
                JWPLAYER_AD_COMPANIONS: "jwplayerAdCompanions",
                JWPLAYER_AD_SKIPPED: "jwplayerAdSkipped"
            }
        }(jwplayer),
        function(t) {
            var e = t.events,
                i = t.utils;
            e.eventdispatcher = function(e, n) {
                function s(t, e, n) {
                    if (t)
                        for (var s = 0; s < t.length; s++) {
                            var r = t[s];
                            if (r) {
                                null !== r.count && 0 === --r.count && delete t[s];
                                try {
                                    r.listener(e)
                                } catch (a) {
                                    i.log('Error handling "' + n + '" event listener [' + s + "]: " + a.toString(), r.listener, e)
                                }
                            }
                        }
                }
                var r, a, o = e,
                    l = n;
                this.resetEventListeners = function() {
                        r = {},
                            a = []
                    },
                    this.resetEventListeners(),
                    this.addEventListener = function(t, e, n) {
                        try {
                            i.exists(r[t]) || (r[t] = []),
                                "string" == i.typeOf(e) && (e = new Function("return " + e)()),
                                r[t].push({
                                    listener: e,
                                    count: n || null
                                })
                        } catch (s) {
                            i.log("error", s)
                        }
                        return !1
                    },
                    this.removeEventListener = function(t, e) {
                        if (r[t]) {
                            try {
                                for (var n = 0; n < r[t].length; n++)
                                    if (r[t][n].listener.toString() == e.toString()) {
                                        r[t].splice(n, 1);
                                        break
                                    }
                            } catch (s) {
                                i.log("error", s)
                            }
                            return !1
                        }
                    },
                    this.addGlobalListener = function(t, e) {
                        try {
                            "string" == i.typeOf(t) && (t = new Function("return " + t)()),
                                a.push({
                                    listener: t,
                                    count: e || null
                                })
                        } catch (n) {
                            i.log("error", n)
                        }
                        return !1
                    },
                    this.removeGlobalListener = function(t) {
                        if (t) {
                            try {
                                for (var e = a.length; e--;) a[e].listener.toString() == t.toString() && a.splice(e, 1)
                            } catch (n) {
                                i.log("error", n)
                            }
                            return !1
                        }
                    },
                    this.sendEvent = function(e, n) {
                        i.exists(n) || (n = {}),
                            i.extend(n, {
                                id: o,
                                version: t.version,
                                type: e
                            }),
                            l && i.log(e, n),
                            s(r[e], n, e),
                            s(a, n, e)
                    }
            }
        }(window.jwplayer),
        function(t) {
            var e = {},
                i = {};
            t.plugins = function() {},
                t.plugins.loadPlugins = function(n, s) {
                    return i[n] = new t.plugins.pluginloader(new t.plugins.model(e), s),
                        i[n]
                },
                t.plugins.registerPlugin = function(i, n, s, r) {
                    var a = t.utils.getPluginName(i);
                    e[a] || (e[a] = new t.plugins.plugin(i)),
                        e[a].registerPlugin(i, n, s, r)
                }
        }(jwplayer),
        function(t) {
            t.plugins.model = function(e) {
                this.addPlugin = function(i) {
                        var n = t.utils.getPluginName(i);
                        return e[n] || (e[n] = new t.plugins.plugin(i)),
                            e[n]
                    },
                    this.getPlugins = function() {
                        return e
                    }
            }
        }(jwplayer),
        function(t) {
            var e = jwplayer.utils,
                i = jwplayer.events,
                n = "undefined";
            t.pluginmodes = {
                    FLASH: 0,
                    JAVASCRIPT: 1,
                    HYBRID: 2
                },
                t.plugin = function(s) {
                    function r() {
                        switch (e.getPluginPathType(s)) {
                            case e.pluginPathType.ABSOLUTE:
                                return s;
                            case e.pluginPathType.RELATIVE:
                                return e.getAbsolutePath(s, window.location.href)
                        }
                    }

                    function a(t) {
                        h = setTimeout(function() {
                                d = e.loaderstatus.COMPLETE,
                                    p.sendEvent(i.COMPLETE)
                            },
                            1e3)
                    }

                    function o(t) {
                        d = e.loaderstatus.ERROR,
                            p.sendEvent(i.ERROR)
                    }
                    var l, u, c, h, d = e.loaderstatus.NEW,
                        p = new i.eventdispatcher;
                    e.extend(this, p),
                        this.load = function() {
                            if (d == e.loaderstatus.NEW) {
                                if (s.lastIndexOf(".swf") > 0) return l = s,
                                    d = e.loaderstatus.COMPLETE,
                                    void p.sendEvent(i.COMPLETE);
                                if (e.getPluginPathType(s) == e.pluginPathType.CDN) return d = e.loaderstatus.COMPLETE,
                                    void p.sendEvent(i.COMPLETE);
                                d = e.loaderstatus.LOADING;
                                var t = new e.scriptloader(r());
                                t.addEventListener(i.COMPLETE, a),
                                    t.addEventListener(i.ERROR, o),
                                    t.load()
                            }
                        },
                        this.registerPlugin = function(t, n, s, r) {
                            h && (clearTimeout(h), h = void 0),
                                c = n,
                                s && r ? (l = r, u = s) : "string" == typeof s ? l = s : "function" == typeof s ? u = s : s || r || (l = t),
                                d = e.loaderstatus.COMPLETE,
                                p.sendEvent(i.COMPLETE)
                        },
                        this.getStatus = function() {
                            return d
                        },
                        this.getPluginName = function() {
                            return e.getPluginName(s)
                        },
                        this.getFlashPath = function() {
                            if (l) switch (e.getPluginPathType(l)) {
                                case e.pluginPathType.ABSOLUTE:
                                    return l;
                                case e.pluginPathType.RELATIVE:
                                    return s.lastIndexOf(".swf") > 0 ? e.getAbsolutePath(l, window.location.href) : e.getAbsolutePath(l, r())
                            }
                            return null
                        },
                        this.getJS = function() {
                            return u
                        },
                        this.getTarget = function() {
                            return c
                        },
                        this.getPluginmode = function() {
                            return typeof l != n && typeof u != n ? t.pluginmodes.HYBRID : typeof l != n ? t.pluginmodes.FLASH : typeof u != n ? t.pluginmodes.JAVASCRIPT : void 0
                        },
                        this.getNewInstance = function(t, e, i) {
                            return new u(t, e, i)
                        },
                        this.getURL = function() {
                            return s
                        }
                }
        }(jwplayer.plugins),
        function(t) {
            var e = t.utils,
                i = t.events,
                n = e.foreach;
            t.plugins.pluginloader = function(s, r) {
                function a() {
                    d ? f.sendEvent(i.ERROR, {
                        message: l
                    }) : h || (h = !0, u = e.loaderstatus.COMPLETE, f.sendEvent(i.COMPLETE))
                }

                function o() {
                    if (p || a(), !h && !d) {
                        var i = 0,
                            n = s.getPlugins();
                        e.foreach(p,
                                function(s, r) {
                                    var o = e.getPluginName(s),
                                        u = n[o],
                                        c = u.getJS(),
                                        h = u.getTarget(),
                                        p = u.getStatus();
                                    p == e.loaderstatus.LOADING || p == e.loaderstatus.NEW ? i++ : c && (!h || parseFloat(h) > parseFloat(t.version)) && (d = !0, l = "Incompatible player version", a())
                                }),
                            0 == i && a()
                    }
                }
                var l, u = e.loaderstatus.NEW,
                    c = !1,
                    h = !1,
                    d = !1,
                    p = r,
                    f = new i.eventdispatcher;
                e.extend(this, f),
                    this.setupPlugins = function(t, i, r) {
                        var a = {
                                length: 0,
                                plugins: {}
                            },
                            o = {
                                length: 0,
                                plugins: {}
                            },
                            l = s.getPlugins();
                        return n(i.plugins,
                                function(n, s) {
                                    var u = e.getPluginName(n),
                                        c = l[u],
                                        h = c.getFlashPath(),
                                        d = c.getJS(),
                                        p = c.getURL();
                                    h && (a.plugins[h] = e.extend({},
                                        s), a.plugins[h].pluginmode = c.getPluginmode(), a.length++);
                                    try {
                                        if (d && i.plugins && i.plugins[p]) {
                                            var f = document.createElement("div");
                                            f.id = t.id + "_" + u,
                                                f.style.position = "absolute",
                                                f.style.top = 0,
                                                f.style.zIndex = o.length + 10,
                                                o.plugins[u] = c.getNewInstance(t, e.extend({},
                                                    i.plugins[p]), f),
                                                o.length++,
                                                t.onReady(r(o.plugins[u], f, !0)),
                                                t.onResize(r(o.plugins[u], f))
                                        }
                                    } catch (g) {
                                        e.log("ERROR: Failed to load " + u + ".")
                                    }
                                }),
                            t.plugins = o.plugins,
                            a
                    },
                    this.load = function() {
                        if (e.exists(r) && "object" != e.typeOf(r)) return void o();
                        u = e.loaderstatus.LOADING,
                            c = !0,
                            n(r,
                                function(t, n) {
                                    if (e.exists(t)) {
                                        var r = s.addPlugin(t);
                                        r.addEventListener(i.COMPLETE, o),
                                            r.addEventListener(i.ERROR, g)
                                    }
                                });
                        var t = s.getPlugins();
                        n(t,
                                function(t, e) {
                                    e.load()
                                }),
                            c = !1,
                            o()
                    };
                var g = this.pluginFailed = function(t) {
                    d || (d = !0, l = "File not found", a())
                };
                this.getStatus = function() {
                    return u
                }
            }
        }(jwplayer),
        function(t) {
            jwplayer.parsers = {
                localName: function(t) {
                    return t ? t.localName ? t.localName : t.baseName ? t.baseName : "" : ""
                },
                textContent: function(t) {
                    return t ? t.textContent ? jwplayer.utils.trim(t.textContent) : t.text ? jwplayer.utils.trim(t.text) : "" : ""
                },
                getChildNode: function(t, e) {
                    return t.childNodes[e]
                },
                numChildren: function(t) {
                    return t.childNodes ? t.childNodes.length : 0
                }
            }
        }(jwplayer),
        function(t) {
            var e = t.parsers,
                i = e.jwparser = function() {},
                n = "jwplayer";
            i.parseEntry = function(i, s) {
                for (var r = [], a = [], o = t.utils.xmlAttribute, l = "default", u = "label", c = "file", h = "type", d = 0; d < i.childNodes.length; d++) {
                    var p = i.childNodes[d];
                    if (p.prefix == n) {
                        var f = e.localName(p);
                        "source" == f ? (delete s.sources, r.push({
                            file: o(p, c),
                            "default": o(p, l),
                            label: o(p, u),
                            type: o(p, h)
                        })) : "track" == f ? (delete s.tracks, a.push({
                            file: o(p, c),
                            "default": o(p, l),
                            kind: o(p, "kind"),
                            label: o(p, u)
                        })) : (s[f] = t.utils.serialize(e.textContent(p)), "file" == f && s.sources && delete s.sources)
                    }
                    s[c] || (s[c] = s.link)
                }
                if (r.length)
                    for (s.sources = [], d = 0; d < r.length; d++) r[d].file.length > 0 && (r[d][l] = "true" == r[d][l] ? !0 : !1, r[d].label.length || delete r[d].label, s.sources.push(r[d]));
                if (a.length)
                    for (s.tracks = [], d = 0; d < a.length; d++) a[d].file.length > 0 && (a[d][l] = "true" == a[d][l] ? !0 : !1, a[d].kind = a[d].kind.length ? a[d].kind : "captions", a[d].label.length || delete a[d].label, s.tracks.push(a[d]));
                return s
            }
        }(jwplayer),
        function(t) {
            var e = jwplayer.utils,
                i = e.xmlAttribute,
                n = t.localName,
                s = t.textContent,
                r = t.numChildren,
                a = t.mediaparser = function() {},
                o = "media";
            a.parseGroup = function(t, l) {
                function u(t) {
                    var e = {
                        zh: "Chinese",
                        nl: "Dutch",
                        en: "English",
                        fr: "French",
                        de: "German",
                        it: "Italian",
                        ja: "Japanese",
                        pt: "Portuguese",
                        ru: "Russian",
                        es: "Spanish"
                    };
                    return e[t] ? e[t] : t
                }
                var c, h, d = "tracks",
                    p = [];
                for (h = 0; h < r(t); h++)
                    if (c = t.childNodes[h], c.prefix == o) {
                        if (!n(c)) continue;
                        switch (n(c).toLowerCase()) {
                            case "content":
                                i(c, "duration") && (l.duration = e.seconds(i(c, "duration"))),
                                    r(c) > 0 && (l = a.parseGroup(c, l)),
                                    i(c, "url") && (l.sources || (l.sources = []), l.sources.push({
                                        file: i(c, "url"),
                                        type: i(c, "type"),
                                        width: i(c, "width"),
                                        label: i(c, "label")
                                    }));
                                break;
                            case "title":
                                l.title = s(c);
                                break;
                            case "description":
                                l.description = s(c);
                                break;
                            case "guid":
                                l.mediaid = s(c);
                                break;
                            case "thumbnail":
                                l.image || (l.image = i(c, "url"));
                                break;
                            case "player":
                                c.url;
                                break;
                            case "group":
                                a.parseGroup(c, l);
                                break;
                            case "subtitle":
                                var f = {};
                                f.file = i(c, "url"),
                                    f.kind = "captions",
                                    i(c, "lang").length > 0 && (f.label = u(i(c, "lang"))),
                                    p.push(f)
                        }
                    }
                for (l.hasOwnProperty(d) || (l[d] = []), h = 0; h < p.length; h++) l[d].push(p[h]);
                return l
            }
        }(jwplayer.parsers),
        function(t) {
            function e(e) {
                for (var s = {},
                        r = 0; r < e.childNodes.length; r++) {
                    var o = e.childNodes[r],
                        l = a(o);
                    if (l) switch (l.toLowerCase()) {
                        case "enclosure":
                            s.file = i.xmlAttribute(o, "url");
                            break;
                        case "title":
                            s.title = n(o);
                            break;
                        case "guid":
                            s.mediaid = n(o);
                            break;
                        case "pubdate":
                            s.date = n(o);
                            break;
                        case "description":
                            s.description = n(o);
                            break;
                        case "link":
                            s.link = n(o);
                            break;
                        case "category":
                            s.tags ? s.tags += n(o) : s.tags = n(o)
                    }
                }
                return s = t.mediaparser.parseGroup(e, s),
                    s = t.jwparser.parseEntry(e, s),
                    new jwplayer.playlist.item(s)
            }
            var i = jwplayer.utils,
                n = t.textContent,
                s = t.getChildNode,
                r = t.numChildren,
                a = t.localName;
            t.rssparser = {},
                t.rssparser.parse = function(t) {
                    for (var i = [], n = 0; n < r(t); n++) {
                        var o = s(t, n),
                            l = a(o).toLowerCase();
                        if ("channel" == l)
                            for (var u = 0; u < r(o); u++) {
                                var c = s(o, u);
                                "item" == a(c).toLowerCase() && i.push(e(c))
                            }
                    }
                    return i
                }
        }(jwplayer.parsers),
        function(t) {
            t.playlist = function(e) {
                var i = [];
                if ("array" == t.utils.typeOf(e))
                    for (var n = 0; n < e.length; n++) i.push(new t.playlist.item(e[n]));
                else i.push(new t.playlist.item(e));
                return i
            }
        }(jwplayer),
        function(t) {
            var e = t.item = function(i) {
                var n = jwplayer.utils,
                    s = n.extend({},
                        e.defaults, i);
                s.tracks = i && n.exists(i.tracks) ? i.tracks : [],
                    0 == s.sources.length && (s.sources = [new t.source(s)]);
                for (var r = 0; r < s.sources.length; r++) {
                    var a = s.sources[r]["default"];
                    a ? s.sources[r]["default"] = "true" == a.toString() : s.sources[r]["default"] = !1,
                        s.sources[r] = new t.source(s.sources[r])
                }
                if (s.captions && !n.exists(i.tracks)) {
                    for (var o = 0; o < s.captions.length; o++) s.tracks.push(s.captions[o]);
                    delete s.captions
                }
                for (var r = 0; r < s.tracks.length; r++) s.tracks[r] = new t.track(s.tracks[r]);
                return s
            };
            e.defaults = {
                description: "",
                image: "",
                mediaid: "",
                title: "",
                sources: [],
                tracks: []
            }
        }(jwplayer.playlist),
        function(t) {
            var e = jwplayer,
                i = e.utils,
                n = e.events,
                s = e.parsers;
            t.loader = function() {
                function e(e) {
                    try {
                        for (var i = e.responseXML.childNodes,
                                r = "",
                                l = 0; l < i.length && (r = i[l], 8 == r.nodeType); l++);
                        if ("xml" == s.localName(r) && (r = r.nextSibling), "rss" != s.localName(r)) return void a("Not a valid RSS feed");
                        var u = new t(s.rssparser.parse(r));
                        o.sendEvent(n.JWPLAYER_PLAYLIST_LOADED, {
                            playlist: u
                        })
                    } catch (c) {
                        a()
                    }
                }

                function r(t) {
                    a(t.match(/invalid/i) ? "Not a valid RSS feed" : "")
                }

                function a(t) {
                    o.sendEvent(n.JWPLAYER_ERROR, {
                        message: t ? t : "Error loading file"
                    })
                }
                var o = new n.eventdispatcher;
                i.extend(this, o),
                    this.load = function(t) {
                        i.ajax(t, e, r)
                    }
            }
        }(jwplayer.playlist),
        function(t) {
            var e = void 0,
                i = jwplayer.utils,
                n = {
                    file: e,
                    label: e,
                    type: e,
                    "default": e
                };
            t.source = function(t) {
                var e = i.extend({},
                    n);
                return i.foreach(n,
                        function(n, s) {
                            i.exists(t[n]) && (e[n] = t[n], delete t[n])
                        }),
                    e.type && e.type.indexOf("/") > 0 && (e.type = i.extensionmap.mimeType(e.type)),
                    "m3u8" == e.type && (e.type = "hls"),
                    "smil" == e.type && (e.type = "rtmp"),
                    e
            }
        }(jwplayer.playlist),
        function(t) {
            var e = void 0,
                i = jwplayer.utils,
                n = {
                    file: e,
                    label: e,
                    kind: "captions",
                    "default": !1
                };
            t.track = function(t) {
                var e = i.extend({},
                    n);
                return t || (t = {}),
                    i.foreach(n,
                        function(n, s) {
                            i.exists(t[n]) && (e[n] = t[n], delete t[n])
                        }),
                    e
            }
        }(jwplayer.playlist),
        function(t) {
            function e(t, e, n) {
                var s = t.style;
                s.backgroundColor = "#000",
                    s.color = "#FFF",
                    s.width = i.styleDimension(n.width),
                    s.height = i.styleDimension(n.height),
                    s.display = "table",
                    s.opacity = 1;
                var r = document.createElement("p"),
                    a = r.style;
                a.verticalAlign = "middle",
                    a.textAlign = "center",
                    a.display = "table-cell",
                    a.font = "15px/20px Arial, Helvetica, sans-serif",
                    r.innerHTML = e.replace(":", ":<br>"),
                    t.innerHTML = "",
                    t.appendChild(r)
            }
            var i = t.utils,
                n = t.events,
                s = !0,
                r = !1,
                a = document,
                o = t.embed = function(l) {
                    function u(t, e) {
                        i.foreach(e,
                            function(e, i) {
                                "function" == typeof t[e] && t[e].call(t, i)
                            })
                    }

                    function c() {
                        if (!S) {
                            if ("array" == i.typeOf(_.playlist) && _.playlist.length < 2 && (0 == _.playlist.length || !_.playlist[0].sources || 0 == _.playlist[0].sources.length)) return void f();
                            if (!E) {
                                if ("string" == i.typeOf(_.playlist)) {
                                    var e = new t.playlist.loader;
                                    return e.addEventListener(n.JWPLAYER_PLAYLIST_LOADED,
                                            function(t) {
                                                _.playlist = t.playlist,
                                                    E = r,
                                                    c()
                                            }),
                                        e.addEventListener(n.JWPLAYER_ERROR,
                                            function(t) {
                                                E = r,
                                                    f(t)
                                            }),
                                        E = s,
                                        void e.load(_.playlist)
                                }
                                if (k.getStatus() == i.loaderstatus.COMPLETE) {
                                    for (var a = 0; a < _.modes.length; a++)
                                        if (_.modes[a].type && o[_.modes[a].type]) {
                                            var p = i.extend({},
                                                    _),
                                                m = new o[_.modes[a].type](v, _.modes[a], p, k, l);
                                            if (m.supportsConfig()) return m.addEventListener(n.ERROR, d),
                                                m.embed(),
                                                u(l, p.events),
                                                l
                                        }
                                    var y;
                                    _.fallback ? (y = "No suitable players found and fallback enabled", T = setTimeout(function() {
                                            g(y, s)
                                        },
                                        10), i.log(y), new o.download(v, _, f)) : (y = "No suitable players found and fallback disabled", g(y, r), i.log(y), h())
                                }
                            }
                        }
                    }

                    function h() {
                        v.parentNode.replaceChild(b, v)
                    }

                    function d(t) {
                        m(C + t.message)
                    }

                    function p(t) {
                        m("Could not load plugins: " + t.message)
                    }

                    function f(t) {
                        m(t && t.message ? "Error loading playlist: " + t.message : C + "No playable sources found")
                    }

                    function g(t, e) {
                        T && (clearTimeout(T), T = null),
                            T = setTimeout(function() {
                                    T = null,
                                        l.dispatchEvent(n.JWPLAYER_SETUP_ERROR, {
                                            message: t,
                                            fallback: e
                                        })
                                },
                                0)
                    }

                    function m(t) {
                        if (!S) {
                            if (!_.fallback) return void g(t, r);
                            S = s,
                                e(v, t, _),
                                g(t, s)
                        }
                    }
                    var v, y, b, _ = new o.config(l.config),
                        w = _.width,
                        x = _.height,
                        C = "Error loading player: ",
                        k = t.plugins.loadPlugins(l.id, _.plugins),
                        E = r,
                        S = r,
                        T = null,
                        P = this;
                    return _.fallbackDiv && (b = _.fallbackDiv, delete _.fallbackDiv),
                        _.id = l.id,
                        y = a.getElementById(l.id),
                        _.aspectratio ? l.config.aspectratio = _.aspectratio : delete l.config.aspectratio,
                        v = a.createElement("div"),
                        v.id = y.id,
                        v.style.width = w.toString().indexOf("%") > 0 ? w : w + "px",
                        v.style.height = x.toString().indexOf("%") > 0 ? x : x + "px",
                        y.parentNode.replaceChild(v, y),
                        P.embed = function() {
                            S || (k.addEventListener(n.COMPLETE, c), k.addEventListener(n.ERROR, p), k.load())
                        },
                        P.errorScreen = m,
                        P
                };
            t.embed.errorScreen = e
        }(jwplayer),
        function(t) {
            function e(t) {
                var e = t.aspectratio,
                    n = i(e); - 1 == t.width.toString().indexOf("%") ? delete t.aspectratio : n ? t.aspectratio = n : delete t.aspectratio
            }

            function i(t) {
                if ("string" != typeof t || !r.exists(t)) return 0;
                var e = t.indexOf(":");
                if (-1 == e) return 0;
                var i = parseFloat(t.substr(0, e)),
                    n = parseFloat(t.substr(e + 1));
                return 0 >= i || 0 >= n ? 0 : n / i * 100 + "%"
            }

            function n(t) {
                if (t.playlist)
                    for (var e = 0; e < t.playlist.length; e++) t.playlist[e] = new o(t.playlist[e]);
                else {
                    var i = {};
                    if (r.foreach(o.defaults,
                            function(e, n) {
                                s(t, i, e)
                            }), !i.sources)
                        if (t.levels) i.sources = t.levels,
                            delete t.levels;
                        else {
                            var n = {};
                            s(t, n, "file"),
                                s(t, n, "type"),
                                i.sources = n.file ? [n] : []
                        }
                    t.playlist = [new o(i)]
                }
            }

            function s(t, e, i) {
                r.exists(t[i]) && (e[i] = t[i], delete t[i])
            }
            var r = t.utils,
                a = t.embed,
                o = t.playlist.item,
                l = a.config = function(i) {
                    var s = {
                            fallback: !0,
                            height: 270,
                            primary: "html5",
                            width: 480,
                            base: i.base ? i.base : r.getScriptPath("main_homepage"),
                            aspectratio: ""
                        },
                        a = r.extend(s, t.defaults, i),
                        o = {
                            html5: {
                                type: "html5",
                                src: a.base + "jwplayer.html5.js"
                            },
                            flash: {
                                type: "flash",
                                src: a.base + "jwplayer.flash.swf"
                            }
                        };
                    return a.modes = "flash" == a.primary ? [o.flash, o.html5] : [o.html5, o.flash],
                        a.listbar && (a.playlistsize = a.listbar.size, a.playlistposition = a.listbar.position, a.playlistlayout = a.listbar.layout),
                        a.flashplayer && (o.flash.src = a.flashplayer),
                        a.html5player && (o.html5.src = a.html5player),
                        n(a),
                        e(a),
                        a
                };
            l.addConfig = function(t, e) {
                return n(e),
                    r.extend(t, e)
            }
        }(jwplayer),
        function(t) {
            var e = t.embed,
                i = t.utils,
                n = document,
                s = "none",
                r = "block",
                a = "100%",
                o = "relative",
                l = "absolute";
            e.download = function(t, e, u) {
                function c() {
                    var t, e, n, s, r, a, o = b.playlist,
                        l = ["mp4", "aac", "mp3"];
                    if (o && o.length) {
                        for (r = o[0], a = r.sources, s = 0; s < a.length; s++) {
                            var c = a[s],
                                d = c.type ? c.type : i.extensionmap.extType(i.extension(c.file));
                            !(c.file && (i.foreach(l,
                                function(s) {
                                    d == l[s] ? (t = c.file, e = r.image) : i.isYouTube(c.file) && (n = c.file)
                                }), t || n))
                        }
                        t ? (v = t, y = e, h(), p()) : n ? g(n) : u()
                    }
                }

                function h() {
                    t && (m = f("a", "display", t), f("div", "icon", m), f("div", "logo", m), v && m.setAttribute("href", i.getAbsolutePath(v)))
                }

                function d(t, e) {
                    for (var s = n.querySelectorAll(t), r = 0; r < s.length; r++) i.foreach(e,
                        function(t, e) {
                            s[r].style[t] = e
                        })
                }

                function p() {
                    var e = "#" + t.id + " .jwdownload";
                    t.style.width = "",
                        t.style.height = "",
                        d(e + "display", {
                            width: i.styleDimension(Math.max(320, _)),
                            height: i.styleDimension(Math.max(180, w)),
                            background: "black center no-repeat " + (y ? "url(" + y + ")" : ""),
                            backgroundSize: "contain",
                            position: o,
                            border: s,
                            display: r
                        }),
                        d(e + "display div", {
                            position: l,
                            width: a,
                            height: a
                        }),
                        d(e + "logo", {
                            top: x.margin + "px",
                            right: x.margin + "px",
                            background: "top right no-repeat url(" + x.prefix + x.file + ")"
                        }),
                        d(e + "icon", {
                            background: "center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"
                        })
                }

                function f(t, e, i) {
                    var s = n.createElement(t);
                    return e && (s.className = "jwdownload" + e),
                        i && i.appendChild(s),
                        s
                }

                function g(e) {
                    var n = f("iframe", "", t);
                    n.src = "http://www.youtube.com/embed/" + i.youTubeID(e),
                        n.width = _,
                        n.height = w,
                        n.style.border = "none"
                }
                var m, v, y, b = i.extend({},
                        e),
                    _ = b.width ? b.width : 480,
                    w = b.height ? b.height : 320,
                    x = e.logo ? e.logo : {
                        prefix: i.repo(),
                        file: "logo.png",
                        margin: 10
                    };
                c()
            }
        }(jwplayer),
        function(t) {
            var e = t.utils,
                i = t.events,
                n = {},
                s = t.embed.flash = function(s, a, o, l, u) {
                    function c(t, e, i) {
                        var n = document.createElement("param");
                        n.setAttribute("name", e),
                            n.setAttribute("value", i),
                            t.appendChild(n)
                    }

                    function h(t, e, i) {
                        return function(n) {
                            try {
                                i && document.getElementById(u.id + "_wrapper").appendChild(e);
                                var s = document.getElementById(u.id).getPluginConfig("display");
                                "function" == typeof t.resize && t.resize(s.width, s.height),
                                    e.style.left = s.x,
                                    e.style.top = s.h
                            } catch (r) {}
                        }
                    }

                    function d(t) {
                        if (!t) return {};
                        var i = {},
                            n = [];
                        return e.foreach(t,
                                function(t, s) {
                                    var r = e.getPluginName(t);
                                    n.push(t),
                                        e.foreach(s,
                                            function(t, e) {
                                                i[r + "." + t] = e
                                            })
                                }),
                            i.plugins = n.join(","),
                            i
                    }
                    var p = new t.events.eventdispatcher,
                        f = e.flashVersion();
                    e.extend(this, p),
                        this.embed = function() {
                            if (o.id = u.id, 10 > f) return p.sendEvent(i.ERROR, {
                                message: "Flash version must be 10.0 or greater"
                            }), !1;
                            var t, r, g = u.config.listbar,
                                m = e.extend({},
                                    o);
                            if (s.id + "_wrapper" == s.parentNode.id) t = document.getElementById(s.id + "_wrapper");
                            else {
                                if (t = document.createElement("div"), r = document.createElement("div"), r.style.display = "none", r.id = s.id + "_aspect", t.id = s.id + "_wrapper", t.style.position = "relative", t.style.display = "block", t.style.width = e.styleDimension(m.width), t.style.height = e.styleDimension(m.height), u.config.aspectratio) {
                                    var v = parseFloat(u.config.aspectratio);
                                    r.style.display = "block",
                                        r.style.marginTop = u.config.aspectratio,
                                        t.style.height = "auto",
                                        t.style.display = "inline-block",
                                        g && ("bottom" == g.position ? r.style.paddingBottom = g.size + "px" : "right" == g.position && (r.style.marginBottom = -1 * g.size * (v / 100) + "px"))
                                }
                                s.parentNode.replaceChild(t, s),
                                    t.appendChild(s),
                                    t.appendChild(r)
                            }
                            var y = l.setupPlugins(u, m, h);
                            y.length > 0 ? e.extend(m, d(y.plugins)) : delete m.plugins,
                                "undefined" != typeof m["dock.position"] && "false" == m["dock.position"].toString().toLowerCase() && (m.dock = m["dock.position"], delete m["dock.position"]);
                            for (var b, _ = "#000000",
                                    w = m.wmode ? m.wmode : m.height && m.height <= 40 ? "transparent" : "opaque", x = ["height", "width", "modes", "events", "primary", "base", "fallback", "volume"], C = 0; C < x.length; C++) delete m[x[C]];
                            var k = e.getCookies();
                            e.foreach(k,
                                function(t, e) {
                                    "undefined" == typeof m[t] && (m[t] = e)
                                });
                            var E = window.location.href.split("/");
                            if (E.splice(E.length - 1, 1), E = E.join("/"), m.base = E + "/", n[s.id] = m, e.isIE()) {
                                var S = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%"id="' + s.id + '" name="' + s.id + '" tabindex=0"">';
                                S += '<param name="movie" value="' + a.src + '">',
                                    S += '<param name="allowfullscreen" value="true">',
                                    S += '<param name="allowscriptaccess" value="always">',
                                    S += '<param name="seamlesstabbing" value="true">',
                                    S += '<param name="wmode" value="' + w + '">',
                                    S += '<param name="bgcolor" value="' + _ + '">',
                                    S += "</object>",
                                    s.outerHTML = S,
                                    b = document.getElementById(s.id)
                            } else {
                                var T = document.createElement("object");
                                T.setAttribute("type", "application/x-shockwave-flash"),
                                    T.setAttribute("data", a.src),
                                    T.setAttribute("width", "100%"),
                                    T.setAttribute("height", "100%"),
                                    T.setAttribute("bgcolor", _),
                                    T.setAttribute("id", s.id),
                                    T.setAttribute("name", s.id),
                                    T.setAttribute("tabindex", 0),
                                    c(T, "allowfullscreen", "true"),
                                    c(T, "allowscriptaccess", "always"),
                                    c(T, "seamlesstabbing", "true"),
                                    c(T, "wmode", w),
                                    s.parentNode.replaceChild(T, s),
                                    b = T
                            }
                            u.config.aspectratio && (b.style.position = "absolute"),
                                u.container = b,
                                u.setPlayer(b, "flash")
                        },
                        this.supportsConfig = function() {
                            if (f) {
                                if (!o) return !0;
                                if ("string" == e.typeOf(o.playlist)) return !0;
                                try {
                                    var t = o.playlist[0],
                                        i = t.sources;
                                    if ("undefined" == typeof i) return !0;
                                    for (var n = 0; n < i.length; n++)
                                        if (i[n].file && r(i[n].file, i[n].type)) return !0
                                } catch (s) {
                                    return !1
                                }
                            }
                            return !1
                        }
                };
            s.getVars = function(t) {
                return n[t]
            };
            var r = t.embed.flashCanPlay = function(t, i) {
                if (e.isYouTube(t)) return !0;
                if (e.isRtmp(t, i)) return !0;
                if ("hls" == i) return !0;
                var n = e.extensionmap[i ? i : e.extension(t)];
                return n ? !!n.flash : !1
            }
        }(jwplayer),
        function(t) {
            var e = t.utils,
                i = e.extensionmap,
                n = t.events;
            t.embed.html5 = function(s, r, a, o, l) {
                function u(t, e, i) {
                    return function(n) {
                        try {
                            var r = document.querySelector("#" + s.id + " .jwmain");
                            i && r.appendChild(e),
                                "function" == typeof t.resize && (t.resize(r.clientWidth, r.clientHeight), setTimeout(function() {
                                        t.resize(r.clientWidth, r.clientHeight)
                                    },
                                    400)),
                                e.left = r.style.left,
                                e.top = r.style.top
                        } catch (a) {}
                    }
                }

                function c(t) {
                    p.sendEvent(t.type, {
                        message: "HTML5 player not found"
                    })
                }

                function h(t, n) {
                    if (null !== navigator.userAgent.match(/BlackBerry/i)) return !1;
                    if (e.isAndroid() && ("m3u" == e.extension(t) || "m3u8" == e.extension(t))) return !1;
                    if (e.isRtmp(t, n)) return !1;
                    var s = i[n ? n : e.extension(t)];
                    return s ? s.flash && !s.html5 ? !1 : d(s.html5) : !1
                }

                function d(e) {
                    var i = t.vid;
                    if (!e) return !0;
                    try {
                        return i.canPlayType(e) ? !0 : !1
                    } catch (n) {
                        return !1
                    }
                }
                var p = this,
                    f = new n.eventdispatcher;
                e.extend(p, f),
                    p.embed = function() {
                        if (t.html5) {
                            o.setupPlugins(l, a, u),
                                s.innerHTML = "";
                            var i = t.utils.extend({},
                                a);
                            delete i.volume;
                            var h = new t.html5.player(i);
                            l.container = document.getElementById(l.id),
                                l.setPlayer(h, "html5")
                        } else {
                            var d = new e.scriptloader(r.src);
                            d.addEventListener(n.ERROR, c),
                                d.addEventListener(n.COMPLETE, p.embed),
                                d.load()
                        }
                    },
                    p.supportsConfig = function() {
                        if (t.vid.canPlayType) try {
                            if ("string" == e.typeOf(a.playlist)) return !0;
                            for (var i = a.playlist[0].sources, n = 0; n < i.length; n++) {
                                var s = i[n].file,
                                    r = i[n].type;
                                if (h(s, r)) return !0
                            }
                        } catch (o) {
                            return !1
                        }
                        return !1
                    }
            }
        }(jwplayer),
        function(t, e) {
            var i = [],
                n = t.utils,
                s = t.events,
                r = s.state,
                a = document,
                o = t.api = function(i) {
                    function l(t, e) {
                        return function(i) {
                            return e(t, i)
                        }
                    }

                    function u(t) {
                        w = [],
                            o.destroyPlayer(t.id)
                    }

                    function c(t, e) {
                        return b[t] || (b[t] = [], p(s.JWPLAYER_PLAYER_STATE, h(t))),
                            b[t].push(e),
                            v
                    }

                    function h(t) {
                        return function(e) {
                            var i = e.newstate,
                                n = e.oldstate;
                            if (i == t) {
                                var s = b[i];
                                if (s)
                                    for (var r = 0; r < s.length; r++) {
                                        var a = s[r];
                                        "function" == typeof a && a.call(this, {
                                            oldstate: n,
                                            newstate: i
                                        })
                                    }
                            }
                        }
                    }

                    function d(t, e) {
                        try {
                            t.jwAddEventListener(e, 'function(dat) { jwplayer("' + v.id + '").dispatchEvent("' + e + '", dat); }')
                        } catch (i) {
                            n.log("Could not add internal listener")
                        }
                    }

                    function p(t, e) {
                        return y[t] || (y[t] = [], g && _ && d(g, t)),
                            y[t].push(e),
                            v
                    }

                    function f() {
                        if (_) {
                            if (g) {
                                var t = Array.prototype.slice.call(arguments, 0),
                                    e = t.shift();
                                if ("function" == typeof g[e]) {
                                    switch (t.length) {
                                        case 6:
                                            return g[e](t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 5:
                                            return g[e](t[0], t[1], t[2], t[3], t[4]);
                                        case 4:
                                            return g[e](t[0], t[1], t[2], t[3]);
                                        case 3:
                                            return g[e](t[0], t[1], t[2]);
                                        case 2:
                                            return g[e](t[0], t[1]);
                                        case 1:
                                            return g[e](t[0])
                                    }
                                    return g[e]()
                                }
                            }
                            return null
                        }
                        w.push(arguments)
                    }
                    var g, m, v = this,
                        y = {},
                        b = {},
                        _ = !1,
                        w = [],
                        x = {},
                        C = {};
                    v.container = i,
                        v.id = i.id,
                        v.getBuffer = function() {
                            return f("jwGetBuffer")
                        },
                        v.getContainer = function() {
                            return v.container
                        },
                        v.addButton = function(t, e, i, s) {
                            try {
                                C[s] = i;
                                var r = "jwplayer('" + v.id + "').callback('" + s + "')";
                                f("jwDockAddButton", t, e, r, s)
                            } catch (a) {
                                n.log("Could not add dock button" + a.message)
                            }
                        },
                        v.removeButton = function(t) {
                            f("jwDockRemoveButton", t)
                        },
                        v.callback = function(t) {
                            C[t] && C[t]()
                        },
                        v.forceState = function(t) {
                            return f("jwForceState", t),
                                v
                        },
                        v.releaseState = function() {
                            return f("jwReleaseState")
                        },
                        v.getDuration = function() {
                            return f("jwGetDuration")
                        },
                        v.getFullscreen = function() {
                            return f("jwGetFullscreen")
                        },
                        v.getHeight = function() {
                            return f("jwGetHeight")
                        },
                        v.getLockState = function() {
                            return f("jwGetLockState")
                        },
                        v.getMeta = function() {
                            return v.getItemMeta()
                        },
                        v.getMute = function() {
                            return f("jwGetMute")
                        },
                        v.getPlaylist = function() {
                            var t = f("jwGetPlaylist");
                            return "flash" == v.renderingMode && n.deepReplaceKeyName(t, ["__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-", "default"]),
                                t
                        },
                        v.getPlaylistItem = function(t) {
                            return n.exists(t) || (t = v.getPlaylistIndex()),
                                v.getPlaylist()[t]
                        },
                        v.getPlaylistIndex = function() {
                            return f("jwGetPlaylistIndex")
                        },
                        v.getPosition = function() {
                            return f("jwGetPosition")
                        },
                        v.getRenderingMode = function() {
                            return v.renderingMode
                        },
                        v.getState = function() {
                            return f("jwGetState")
                        },
                        v.getVolume = function() {
                            return f("jwGetVolume")
                        },
                        v.getWidth = function() {
                            return f("jwGetWidth")
                        },
                        v.setFullscreen = function(t) {
                            return n.exists(t) ? f("jwSetFullscreen", t) : f("jwSetFullscreen", !f("jwGetFullscreen")),
                                v
                        },
                        v.setMute = function(t) {
                            return n.exists(t) ? f("jwSetMute", t) : f("jwSetMute", !f("jwGetMute")),
                                v
                        },
                        v.lock = function() {
                            return v
                        },
                        v.unlock = function() {
                            return v
                        },
                        v.load = function(t) {
                            return f("jwLoad", t),
                                v
                        },
                        v.playlistItem = function(t) {
                            return f("jwPlaylistItem", parseInt(t, 10)),
                                v
                        },
                        v.playlistPrev = function() {
                            return f("jwPlaylistPrev"),
                                v
                        },
                        v.playlistNext = function() {
                            return f("jwPlaylistNext"),
                                v
                        },
                        v.resize = function(t, e) {
                            if ("flash" !== v.renderingMode) f("jwResize", t, e);
                            else {
                                var i = a.getElementById(v.id + "_wrapper"),
                                    s = a.getElementById(v.id + "_aspect");
                                s && (s.style.display = "none"),
                                    i && (i.style.display = "block", i.style.width = n.styleDimension(t), i.style.height = n.styleDimension(e))
                            }
                            return v
                        },
                        v.play = function(t) {
                            return t === e ? (t = v.getState(), f(t == r.PLAYING || t == r.BUFFERING ? "jwPause" : "jwPlay")) : f("jwPlay", t),
                                v
                        },
                        v.pause = function(t) {
                            return t === e ? (t = v.getState(), f(t == r.PLAYING || t == r.BUFFERING ? "jwPause" : "jwPlay")) : f("jwPause", t),
                                v
                        },
                        v.stop = function() {
                            return f("jwStop"),
                                v
                        },
                        v.seek = function(t) {
                            return f("jwSeek", t),
                                v
                        },
                        v.setVolume = function(t) {
                            return f("jwSetVolume", t),
                                v
                        },
                        v.createInstream = function() {
                            return new o.instream(this, g)
                        },
                        v.setInstream = function(t) {
                            return m = t,
                                t
                        },
                        v.loadInstream = function(t, e) {
                            return m = v.setInstream(v.createInstream()).init(e),
                                m.loadItem(t),
                                m
                        },
                        v.getQualityLevels = function() {
                            return f("jwGetQualityLevels")
                        },
                        v.getCurrentQuality = function() {
                            return f("jwGetCurrentQuality")
                        },
                        v.setCurrentQuality = function(t) {
                            f("jwSetCurrentQuality", t)
                        },
                        v.getCaptionsList = function() {
                            return f("jwGetCaptionsList")
                        },
                        v.getCurrentCaptions = function() {
                            return f("jwGetCurrentCaptions")
                        },
                        v.setCurrentCaptions = function(t) {
                            f("jwSetCurrentCaptions", t)
                        },
                        v.getControls = function() {
                            return f("jwGetControls")
                        },
                        v.getSafeRegion = function() {
                            return f("jwGetSafeRegion")
                        },
                        v.setControls = function(t) {
                            f("jwSetControls", t)
                        },
                        v.destroyPlayer = function() {
                            f("jwPlayerDestroy")
                        },
                        v.playAd = function(e) {
                            var i = t(v.id).plugins;
                            i.vast && i.vast.jwPlayAd(e)
                        },
                        v.pauseAd = function() {
                            var e = t(v.id).plugins;
                            e.vast ? e.vast.jwPauseAd() : f("jwPauseAd")
                        };
                    var k = {
                        onBufferChange: s.JWPLAYER_MEDIA_BUFFER,
                        onBufferFull: s.JWPLAYER_MEDIA_BUFFER_FULL,
                        onError: s.JWPLAYER_ERROR,
                        onSetupError: s.JWPLAYER_SETUP_ERROR,
                        onFullscreen: s.JWPLAYER_FULLSCREEN,
                        onMeta: s.JWPLAYER_MEDIA_META,
                        onMute: s.JWPLAYER_MEDIA_MUTE,
                        onPlaylist: s.JWPLAYER_PLAYLIST_LOADED,
                        onPlaylistItem: s.JWPLAYER_PLAYLIST_ITEM,
                        onPlaylistComplete: s.JWPLAYER_PLAYLIST_COMPLETE,
                        onReady: s.API_READY,
                        onResize: s.JWPLAYER_RESIZE,
                        onComplete: s.JWPLAYER_MEDIA_COMPLETE,
                        onSeek: s.JWPLAYER_MEDIA_SEEK,
                        onTime: s.JWPLAYER_MEDIA_TIME,
                        onVolume: s.JWPLAYER_MEDIA_VOLUME,
                        onBeforePlay: s.JWPLAYER_MEDIA_BEFOREPLAY,
                        onBeforeComplete: s.JWPLAYER_MEDIA_BEFORECOMPLETE,
                        onDisplayClick: s.JWPLAYER_DISPLAY_CLICK,
                        onControls: s.JWPLAYER_CONTROLS,
                        onQualityLevels: s.JWPLAYER_MEDIA_LEVELS,
                        onQualityChange: s.JWPLAYER_MEDIA_LEVEL_CHANGED,
                        onCaptionsList: s.JWPLAYER_CAPTIONS_LIST,
                        onCaptionsChange: s.JWPLAYER_CAPTIONS_CHANGED,
                        onAdError: s.JWPLAYER_AD_ERROR,
                        onAdClick: s.JWPLAYER_AD_CLICK,
                        onAdImpression: s.JWPLAYER_AD_IMPRESSION,
                        onAdTime: s.JWPLAYER_AD_TIME,
                        onAdComplete: s.JWPLAYER_AD_COMPLETE,
                        onAdCompanions: s.JWPLAYER_AD_COMPANIONS,
                        onAdSkipped: s.JWPLAYER_AD_SKIPPED
                    };
                    n.foreach(k,
                        function(t) {
                            v[t] = l(k[t], p)
                        });
                    var E = {
                        onBuffer: r.BUFFERING,
                        onPause: r.PAUSED,
                        onPlay: r.PLAYING,
                        onIdle: r.IDLE
                    };
                    return n.foreach(E,
                            function(t) {
                                v[t] = l(E[t], c)
                            }),
                        v.remove = function() {
                            if (!_) throw "Cannot call remove() before player is ready";
                            u(this)
                        },
                        v.setup = function(e) {
                            if (t.embed) {
                                var i = a.getElementById(v.id);
                                i && (e.fallbackDiv = i),
                                    u(v);
                                var n = t(v.id);
                                n.config = e;
                                var s = new t.embed(n);
                                return s.embed(),
                                    n
                            }
                            return v
                        },
                        v.registerPlugin = function(e, i, n, s) {
                            t.plugins.registerPlugin(e, i, n, s)
                        },
                        v.setPlayer = function(t, e) {
                            g = t,
                                v.renderingMode = e
                        },
                        v.detachMedia = function() {
                            return "html5" == v.renderingMode ? f("jwDetachMedia") : void 0
                        },
                        v.attachMedia = function(t) {
                            return "html5" == v.renderingMode ? f("jwAttachMedia", t) : void 0
                        },
                        v.removeEventListener = function(t, e) {
                            var i = y[t];
                            if (i)
                                for (var n = i.length; n--;) i[n] === e && i.splice(n, 1)
                        },
                        v.dispatchEvent = function(t) {
                            var e = y[t];
                            if (e) {
                                e = e.slice(0);
                                for (var i = n.translateEventResponse(t, arguments[1]), r = 0; r < e.length; r++) {
                                    var a = e[r];
                                    if ("function" == typeof a) try {
                                        t === s.JWPLAYER_PLAYLIST_LOADED && n.deepReplaceKeyName(i.playlist, ["__dot__", "__spc__", "__dsh__", "__default__"], [".", " ", "-", "default"]),
                                            a.call(this, i)
                                    } catch (o) {
                                        n.log("There was an error calling back an event handler")
                                    }
                                }
                            }
                        },
                        v.dispatchInstreamEvent = function(t) {
                            m && m.dispatchEvent(t, arguments)
                        },
                        v.callInternal = f,
                        v.playerReady = function(t) {
                            for (_ = !0, g || v.setPlayer(a.getElementById(t.id)), v.container = a.getElementById(v.id), n.foreach(y,
                                    function(t) {
                                        d(g, t)
                                    }), p(s.JWPLAYER_PLAYLIST_ITEM,
                                    function() {
                                        x = {}
                                    }), p(s.JWPLAYER_MEDIA_META,
                                    function(t) {
                                        n.extend(x, t.metadata)
                                    }), v.dispatchEvent(s.API_READY); w.length > 0;) f.apply(this, w.shift())
                        },
                        v.getItemMeta = function() {
                            return x
                        },
                        v.isBeforePlay = function() {
                            return f("jwIsBeforePlay")
                        },
                        v.isBeforeComplete = function() {
                            return f("jwIsBeforeComplete")
                        },
                        v
                };
            o.selectPlayer = function(t) {
                    var e;
                    if (n.exists(t) || (t = 0), t.nodeType ? e = t : "string" == typeof t && (e = a.getElementById(t)), e) {
                        var s = o.playerById(e.id);
                        return s ? s : o.addPlayer(new o(e))
                    }
                    return "number" == typeof t ? i[t] : null
                },
                o.playerById = function(t) {
                    for (var e = 0; e < i.length; e++)
                        if (i[e].id == t) return i[e];
                    return null
                },
                o.addPlayer = function(t) {
                    for (var e = 0; e < i.length; e++)
                        if (i[e] == t) return t;
                    return i.push(t),
                        t
                },
                o.destroyPlayer = function(t) {
                    for (var e, s = -1,
                            r = 0; r < i.length; r++) i[r].id != t || (s = r, e = i[r]);
                    if (s >= 0) {
                        var o = e.id,
                            l = a.getElementById(o + ("flash" == e.renderingMode ? "_wrapper" : ""));
                        if (n.clearCss && n.clearCss("#" + o), l) {
                            "html5" == e.renderingMode && e.destroyPlayer();
                            var u = a.createElement("div");
                            u.id = o,
                                l.parentNode.replaceChild(u, l)
                        }
                        i.splice(s, 1)
                    }
                    return null
                },
                t.playerReady = function(e) {
                    var i = t.api.playerById(e.id);
                    i ? i.playerReady(e) : t.api.selectPlayer(e.id).playerReady(e)
                }
        }(window.jwplayer),
        function(t) {
            var e = t.events,
                i = t.utils,
                n = e.state;
            t.api.instream = function(t, s) {
                function r(t, e) {
                    s.jwInstreamAddEventListener(e, 'function(dat) { jwplayer("' + t + '").dispatchInstreamEvent("' + e + '", dat); }')
                }

                function a(e, i) {
                    return h[e] || (h[e] = [], r(t.id, e)),
                        h[e].push(i),
                        this
                }

                function o(t, i) {
                    return d[t] || (d[t] = [], a(e.JWPLAYER_PLAYER_STATE, l(t))),
                        d[t].push(i),
                        this
                }

                function l(t) {
                    return function(e) {
                        var i = e.newstate,
                            n = e.oldstate;
                        if (i == t) {
                            var s = d[i];
                            if (s)
                                for (var r = 0; r < s.length; r++) {
                                    var a = s[r];
                                    "function" == typeof a && a.call(this, {
                                        oldstate: n,
                                        newstate: i,
                                        type: e.type
                                    })
                                }
                        }
                    }
                }
                var u, c, h = {},
                    d = {},
                    p = this;
                p.type = "instream",
                    p.init = function() {
                        return t.callInternal("jwInitInstream"),
                            p
                    },
                    p.loadItem = function(e, n) {
                        u = e,
                            c = n || {},
                            "array" == i.typeOf(e) ? t.callInternal("jwLoadArrayInstream", u, c) : t.callInternal("jwLoadItemInstream", u, c)
                    },
                    p.removeEvents = function() {
                        h = d = {}
                    },
                    p.removeEventListener = function(t, e) {
                        var i = h[t];
                        if (i)
                            for (var n = i.length; n--;) i[n] === e && i.splice(n, 1)
                    },
                    p.dispatchEvent = function(t, e) {
                        var n = h[t];
                        if (n) {
                            n = n.slice(0);
                            for (var s = i.translateEventResponse(t, e[1]), r = 0; r < n.length; r++) {
                                var a = n[r];
                                "function" == typeof a && a.call(this, s)
                            }
                        }
                    },
                    p.onError = function(t) {
                        return a(e.JWPLAYER_ERROR, t)
                    },
                    p.onMediaError = function(t) {
                        return a(e.JWPLAYER_MEDIA_ERROR, t)
                    },
                    p.onFullscreen = function(t) {
                        return a(e.JWPLAYER_FULLSCREEN, t)
                    },
                    p.onMeta = function(t) {
                        return a(e.JWPLAYER_MEDIA_META, t)
                    },
                    p.onMute = function(t) {
                        return a(e.JWPLAYER_MEDIA_MUTE, t)
                    },
                    p.onComplete = function(t) {
                        return a(e.JWPLAYER_MEDIA_COMPLETE, t)
                    },
                    p.onPlaylistComplete = function(t) {
                        return a(e.JWPLAYER_PLAYLIST_COMPLETE, t)
                    },
                    p.onPlaylistItem = function(t) {
                        return a(e.JWPLAYER_PLAYLIST_ITEM, t)
                    },
                    p.onTime = function(t) {
                        return a(e.JWPLAYER_MEDIA_TIME, t)
                    },
                    p.onBuffer = function(t) {
                        return o(n.BUFFERING, t)
                    },
                    p.onPause = function(t) {
                        return o(n.PAUSED, t)
                    },
                    p.onPlay = function(t) {
                        return o(n.PLAYING, t)
                    },
                    p.onIdle = function(t) {
                        return o(n.IDLE, t)
                    },
                    p.onClick = function(t) {
                        return a(e.JWPLAYER_INSTREAM_CLICK, t)
                    },
                    p.onInstreamDestroyed = function(t) {
                        return a(e.JWPLAYER_INSTREAM_DESTROYED, t)
                    },
                    p.onAdSkipped = function(t) {
                        return a(e.JWPLAYER_AD_SKIPPED, t)
                    },
                    p.play = function(t) {
                        s.jwInstreamPlay(t)
                    },
                    p.pause = function(t) {
                        s.jwInstreamPause(t)
                    },
                    p.hide = function() {
                        t.callInternal("jwInstreamHide")
                    },
                    p.destroy = function() {
                        p.removeEvents(),
                            t.callInternal("jwInstreamDestroy")
                    },
                    p.setText = function(t) {
                        s.jwInstreamSetText(t ? t : "")
                    },
                    p.getState = function() {
                        return s.jwInstreamState()
                    },
                    p.setClick = function(t) {
                        s.jwInstreamClick && s.jwInstreamClick(t)
                    }
            }
        }(window.jwplayer)),
    define("jwplayer",
        function(t) {
            return function() {
                var e;
                return e || t.jwplayer
            }
        }(this)),
    define("video", ["jwplayer", "scroll", "easing", "jquery-ui"],
        function(t, e, i) {
            var n = 0,
                s = function(n, s) {
                    i(".tanchuang0203").remove(),
                        i(window).unbind("scroll", a);
                    var r = e.getScrollTop(),
                        o = r + i(window).height() / 2 - 240 + "px",
                        l = i("<div/>").attr("class", "tanchuang0203").attr("down", "false").css({
                            top: o
                        }),
                        u = i("<span/>").bind("click",
                            function() {
                                t("myVedio_" + n).stop(),
                                    l.remove(),
                                    i(window).unbind("scroll", a),
                                    i(".zhezhao0203").hide()
                            }).attr("class", "tc_close0203").attr("id", "tc_close_div_id").html("Ã—").appendTo(l);
                    i("<div/>").attr("id", "myVedio_" + n).attr("style", "width:100%;height:100%;").appendTo(l),
                        l.appendTo("body").show(),
                        i(".zhezhao0203").show(),
                        t("myVedio_" + n).setup({
                            file: s,
                            autostart: "true",
                            bufferlength: "20",
                            width: 720,
                            height: 480,
                            streamer: "start",
                            events: {
                                onFullscreen: function(t) {
                                    var e = t.fullscreen;
                                    e ? u.css({
                                        "z-index": "200"
                                    }) : u.css({
                                        "z-index": "100002"
                                    })
                                }
                            }
                        })
                },
                r = function(t) {
                    var e = i(".tanchuang0203").offset().top;
                    i(window).scroll([e, t], a)
                },
                a = function(n) {
                    var s = e.getScrollTop();
                    i(".tanchuang0203").length > 0 && "false" == i(".tanchuang0203").attr("down") && (s > n.data[0] + 480 || s < n.data[0] - document.documentElement.clientHeight) && (i(".tanchuang0203").attr("down", "true"), i(".tanchuang0203").css({
                        top: "auto"
                    }).addClass("video-float"), i(".zhezhao0203").hide(), t("myVedio_" + n.data[1]).resize(512, 288), i("video").width(512), i("video").height(288))
                },
                o = function(t) {
                    i("a[video='index']").on("click",
                            function() {
                                _hmt.push(["_trackEvent", "é¦–é¡µB", "æ’­æ”¾", "å�¬äº‘åŠ¨ç”»"]),
                                    i(".zhezhao0203").css({
                                        display: "block",
                                        width: document.documentElement.clientWidth,
                                        height: document.documentElement.scrollHeight
                                    }),
                                    s(0, "http://market.tingyun.com/video/tingyun.mp4"),
                                    r(0)
                            }),
                        i(".ty-video-bg").click(function() {
                            var t = i(this).attr("index"),
                                e = "http://market.tingyun.com/video/";
                            1 == t ? (_hmt.push(["_trackEvent", "é¦–é¡µB", "æ’­æ”¾", "è§†é¢‘_æ�Žæµ·æ¶›"]), e += "lht.mp4") : 3 == t ? (_hmt.push(["_trackEvent", "é¦–é¡µB", "æ’­æ”¾", "è§†é¢‘_è¢�çŽ¥"]), e += "yy.mp4") : 2 == t ? (_hmt.push(["_trackEvent", "é¦–é¡µB", "æ’­æ”¾", "è§†é¢‘_æ�Žå¤§å­¦"]), e += "ldx.mp4") : 4 == t && (_hmt.push(["_trackEvent", "é¦–é¡µB", "æ’­æ”¾", "è§†é¢‘_ç¬¦åº†æ˜Ž"]), e += "fqm.mp4"),
                                s(t, e),
                                r(t)
                        }),
                        i(".video-nextbtn").click(function(e) {
                            l(t)
                        }),
                        i(".video-prebtn").click(function(e) {
                            u(t)
                        })
                },
                l = function(t) {
                    i(".video-nextbtn").unbind("click"),
                        i(".video-prebtn").unbind("click"),
                        i(".li01").switchClass("li01", "li00", 500, "easeOutSine",
                            function() {
                                i(".li00").attr("class", "li04")
                            }),
                        i(".li02").switchClass("li02 li-home-current", "li01", 500, "easeOutSine"),
                        i(".li03").switchClass("li03", "li02 li-home-current", 500, "easeOutSine"),
                        i(".li04").switchClass("li04", "li03", 500, "easeOutSine"),
                        n++,
                        c((n - 1) % 4, n % 4, t)
                },
                u = function(t) {
                    i(".video-nextbtn").unbind("click"),
                        i(".video-prebtn").unbind("click"),
                        i(".li01").switchClass("li01", "li02 li-home-current", 500, "easeOutSine"),
                        i(".li02").switchClass("li02 li-home-current", "li03", 500, "easeOutSine"),
                        i(".li03").switchClass("li03", "li04", 500, "easeOutSine"),
                        i(".li04").attr("class", "li00").switchClass("li00", "li01", 500, "easeOutSine"),
                        n--;
                    var e = 0 > (n + 1) % 4 ? (n + 1) % 4 + 4 : (n + 1) % 4,
                        s = 0 > n % 4 ? n % 4 + 4 : n % 4;
                    c(e, s, t)
                },
                c = function(t, e, n) {
                    i(".ty-user-ul02>li").eq(t).removeClass("li-home-current"),
                        n ? (i(".ty-user-ul02>li").eq(e).addClass("li-home-current"), setTimeout(function() {
                                i(".video-nextbtn").click(function() {
                                        l(n)
                                    }),
                                    i(".video-prebtn").click(function(t) {
                                        u(n)
                                    })
                            },
                            500)) : i(".ty-user-ul02>li").eq(e).addClass("li-home-current", 500, "easeOutSine",
                            function() {
                                i(".video-nextbtn").click(function() {
                                        l(n)
                                    }),
                                    i(".video-prebtn").click(function(t) {
                                        u(n)
                                    })
                            })
                };
            return {
                showVedio: s,
                initVideo: o
            }
        }),
    define("logo", ["jquery"],
        function(t) {
            var e = function() {
                    t(".ty-section05-logo-con").children("li").eq(0).clone().appendTo(t(".ty-section05-logo-con")),
                        t(".ty-section05-logo-con").children("li").eq(1).clone().appendTo(t(".ty-section05-logo-con")),
                        t(".ty-section05-logo-con").children("li").eq(2).clone().appendTo(t(".ty-section05-logo-con"));
                    var e = t(".ty-section05-logo-con").children("li").length,
                        n = t(".ty-section05-logo-con").children("li").eq(0).outerWidth(!0);
                    t(".ty-section05-logo-con").css("width", n * e);
                    var s = 0;
                    t(".btn-r").click(function(r) {
                            s++;
                            var a = e - 7;
                            s > a && (s = 1, t(".ty-section05-logo-con").css("left", 0)),
                                i(s, n)
                        }),
                        t(".btn-l").click(function(r) {
                            if (s--, 0 > s) {
                                var a = e - 8;
                                s = a,
                                    t(".ty-section05-logo-con").css("left", -n * (e - 3))
                            }
                            i(s, n)
                        })
                },
                i = function(e, i) {
                    t(".ty-section05-logo-con").stop().animate({
                            left: 3 * -e * i
                        },
                        400)
                };
            return {
                initLogo: e
            }
        }), !
    function(t, e, i) {
        function n(t, e) {
            return typeof t === e
        }

        function s() {
            var t, e, i, s, r, a, o;
            for (var l in v) {
                if (t = [], e = v[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                    for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (s = n(e.fn, "function") ? e.fn() : e.fn, r = 0; r < t.length; r++) a = t[r],
                    o = a.split("."),
                    1 === o.length ? b[o[0]] = s : (!b[o[0]] || b[o[0]] instanceof Boolean || (b[o[0]] = new Boolean(b[o[0]])), b[o[0]][o[1]] = s),
                    _.push((s ? "" : "no-") + o.join("-"))
            }
        }

        function r() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : k ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function a() {
            var t = e.body;
            return t || (t = r(k ? "svg" : "body"), t.fake = !0),
                t
        }

        function o(t, i, n, s) {
            var o, l, u, c, h = "modernizr",
                d = r("div"),
                p = a();
            if (parseInt(n, 10))
                for (; n--;) u = r("div"),
                    u.id = s ? s[n] : h + (n + 1),
                    d.appendChild(u);
            return o = r("style"),
                o.type = "text/css",
                o.id = "s" + h,
                (p.fake ? p : d).appendChild(o),
                p.appendChild(d),
                o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.createTextNode(t)),
                d.id = h,
                p.fake && (p.style.background = "", p.style.overflow = "hidden", c = w.style.overflow, w.style.overflow = "hidden", w.appendChild(p)),
                l = i(d, t),
                p.fake ? (p.parentNode.removeChild(p), w.style.overflow = c, w.offsetHeight) : d.parentNode.removeChild(d), !!l
        }

        function l(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function u(t) {
            return t.replace(/([a-z])-([a-z])/g,
                function(t, e, i) {
                    return e + i.toUpperCase()
                }).replace(/^-/, "")
        }

        function c(t) {
            return t.replace(/([A-Z])/g,
                function(t, e) {
                    return "-" + e.toLowerCase()
                }).replace(/^ms-/, "-ms-")
        }

        function h(e, n) {
            var s = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; s--;)
                    if (t.CSS.supports(c(e[s]), n)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) {
                for (var r = []; s--;) r.push("(" + c(e[s]) + ":" + n + ")");
                return r = r.join(" or "),
                    o("@supports (" + r + ") { #modernizr { position: absolute; } }",
                        function(t) {
                            return "absolute" == getComputedStyle(t, null).position
                        })
            }
            return i
        }

        function d(t, e, s, a) {
            function o() {
                d && (delete D.style, delete D.modElem)
            }
            if (a = n(a, "undefined") ? !1 : a, !n(s, "undefined")) {
                var c = h(t, s);
                if (!n(c, "undefined")) return c
            }
            for (var d, p, f, g, m, v = ["modernizr", "tspan"]; !D.style;) d = !0,
                D.modElem = r(v.shift()),
                D.style = D.modElem.style;
            for (f = t.length, p = 0; f > p; p++)
                if (g = t[p], m = D.style[g], l(g, "-") && (g = u(g)), D.style[g] !== i) {
                    if (a || n(s, "undefined")) return o(),
                        "pfx" == e ? g : !0;
                    try {
                        D.style[g] = s
                    } catch (y) {}
                    if (D.style[g] != m) return o(),
                        "pfx" == e ? g : !0
                }
            return o(), !1
        }

        function p(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function f(t, e, i) {
            var s;
            for (var r in t)
                if (t[r] in e) return i === !1 ? t[r] : (s = e[t[r]], n(s, "function") ? p(s, i || e) : s);
            return !1
        }

        function g(t, e, i, s, r) {
            var a = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + T.join(a + " ") + a).split(" ");
            return n(e, "string") || n(e, "undefined") ? d(o, e, s, r) : (o = (t + " " + P.join(a + " ") + a).split(" "), f(o, e, i))
        }

        function m(t, e, n) {
            return g(t, i, i, e, n)
        }
        var v = [],
            y = {
                _version: "3.0.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(t, e) {
                    var i = this;
                    setTimeout(function() {
                            e(i[t])
                        },
                        0)
                },
                addTest: function(t, e, i) {
                    v.push({
                        name: t,
                        fn: e,
                        options: i
                    })
                },
                addAsyncTest: function(t) {
                    v.push({
                        name: null,
                        fn: t
                    })
                }
            },
            b = function() {};
        b.prototype = y,
            b = new b;
        var _ = [],
            w = e.documentElement,
            x = "CSS" in t && "supports" in t.CSS,
            C = "supportsCSS" in t;
        b.addTest("supports", x || C);
        var k = "svg" === w.nodeName.toLowerCase(),
            E = y.testStyles = o,
            S = "Moz O ms Webkit",
            T = y._config.usePrefixes ? S.split(" ") : [];
        y._cssomPrefixes = T;
        var P = y._config.usePrefixes ? S.toLowerCase().split(" ") : [];
        y._domPrefixes = P;
        var A = {
            elem: r("modernizr")
        };
        b._q.push(function() {
            delete A.elem
        });
        var D = {
            style: A.elem.style
        };
        b._q.unshift(function() {
                delete D.style
            }),
            y.testAllProps = g,
            y.testAllProps = m,
            b.addTest("csstransforms3d",
                function() {
                    var t = !!m("perspective", "1px", !0),
                        e = b._config.usePrefixes;
                    if (t && (!e || "webkitPerspective" in w.style)) {
                        var i;
                        b.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (i += ",(-webkit-transform-3d)")),
                            i += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",
                            E(i,
                                function(e) {
                                    t = 9 === e.offsetLeft && 5 === e.offsetHeight
                                })
                    }
                    return t
                }),
            b.addTest("csstransforms",
                function() {
                    return -1 === navigator.userAgent.indexOf("Android 2.") && m("transform", "scale(1)", !0)
                }),
            s(),
            delete y.addTest,
            delete y.addAsyncTest;
        for (var I = 0; I < b._q.length; I++) b._q[I]();
        t.Modernizr = b
    }(window, document),
    function(t) {
        t.carrousel = function(e, i) {
                this.$el = t(i),
                    this._init(e)
            },
            t.carrousel.defaults = {
                current: 0,
                autoplay: !0,
                interval: 3e3
            },
            t.carrousel.prototype = {
                _init: function(e) {
                    this.options = t.extend(!0, {},
                            t.carrousel.defaults, e),
                        this.support3d = Modernizr.csstransforms3d,
                        this.support2d = Modernizr.csstransforms,
                        this.$wrapper = this.$el.find(".dg-wrapper"),
                        this.$items = this.$wrapper.children(),
                        this.itemsCount = this.$items.length,
                        this.box = t("#csssupport"),
                        this.imgWidth = t("#csssupport .dg-wrapper img").width(),
                        this.indexB = 0,
                        this.CSSX = 0,
                        this.CSSXout = 0,
                        this.current = this.options.current,
                        this.isAnim = !1,
                        this.$items.css({
                            opacity: 1
                        }),
                        this._updateWidth(),
                        this._layout(),
                        this._loadEvents(),
                        this.options.autoplay && this._startSlideshow()
                },
                _updateWidth: function() {
                    this.support3d ? document.body.clientWidth < 1300 ? (this.CSSX = (t(this.box).width() - 10 - 347 * .7) / 2, this.CSSXout = 0) : document.body.clientWidth >= 1300 && (this.CSSX = (1.2 * t(this.box).width() - 10 - 173.5) / 2 * .5 + 210, this.CSSXout = (1.2 * t(this.box).width() - 10 - 173.5) / 2) : this.support2d && (document.body.clientWidth < 1464 ? (this.CSSX = (t(this.box).width() - 10 - 312.3) / 2, this.CSSXout = 0) : document.body.clientWidth >= 1464 && (this.CSSX = (t(this.box).width() - 10 - 277.6) / 2 * .7, this.CSSXout = (t(this.box).width() - 10 - 277.6) / 2))
                },
                _click: function(t, e) {
                    var i = this;
                    t.off("click.gallery"),
                        t.on("click.gallery",
                            function() {
                                this.isAnim || (i._navigate(e), i.options.autoplay && i._startSlideshow())
                            })
                },
                _isIE: function() {
                    var t, e = {},
                        i = navigator.userAgent.toLowerCase();
                    return (t = i.match(/rv:([\d.]+)\) like gecko/)) ? e.ie = t[1] : (t = i.match(/msie ([\d.]+)/)) ? e.ie = t[1] : (t = i.match(/firefox\/([\d.]+)/)) ? e.firefox = t[1] : (t = i.match(/chrome\/([\d.]+)/)) ? e.chrome = t[1] : (t = i.match(/opera.([\d.]+)/)) ? e.opera = t[1] : (t = i.match(/version\/([\d.]+).*safari/)) ? e.safari = t[1] : 0, !e.ie || "10.0" != e.ie && "11.0" != e.ie ? e.firefox ? !0 : !1 : !0
                },
                _layout: function() {
                    this._setItems(),
                        this.$leftItm.css(this._getCoordinates("left")),
                        this.$rightItm.css(this._getCoordinates("right")),
                        this.$currentItm.css(this._getCoordinates("center")).addClass("dg-center"),
                        this._click(this.$leftItm, "prev"),
                        this._click(this.$prevItm, "prev"),
                        this.$currentItm.off("click.carrousel"),
                        this._click(this.$rightItm, "next"),
                        this._click(this.$nextItm, "next"),
                        this.$nextItm.css(this._getCoordinates("outright")),
                        this.$prevItm.css(this._getCoordinates("outleft")),
                        this._isIE() ? (this.$currentItm.attr("onClick", this.$currentItm[0].getAttribute("link")), t("#pdfDowm").attr("onClick", this.$currentItm[0].getAttribute("link")), t("#pdfDowm").text(this.$currentItm.attr("attr")), this.$currentItm.removeAttr("target"), this.$currentItm.removeAttr("href"), this.$nextItm.removeAttr("target"), this.$nextItm.removeAttr("href"), this.$leftItm.removeAttr("target"), this.$leftItm.removeAttr("href"), this.$prevItm.removeAttr("target"), this.$prevItm.removeAttr("href"), this.$rightItm.removeAttr("target"), this.$rightItm.removeAttr("href"), this.$nextItm.removeAttr("onclick"), this.$prevItm.removeAttr("onclick"), this.$leftItm.removeAttr("onclick"), this.$rightItm.removeAttr("onclick")) : (this.$currentItm[0].href = this.$currentItm[0].getAttribute("link"), this.$currentItm.attr("target", "_blank"), t("#pdfDowm").attr("href", this.$currentItm[0].getAttribute("link")), t("#pdfDowm").attr("target", "_blank"), t("#pdfDowm").text(this.$currentItm.attr("attr")), this.$nextItm.removeAttr("target"), this.$nextItm.removeAttr("href"), this.$leftItm.removeAttr("target"), this.$leftItm.removeAttr("href"), this.$prevItm.removeAttr("target"), this.$prevItm.removeAttr("href"), this.$rightItm.removeAttr("target"), this.$rightItm.removeAttr("href"))
                },
                _setItems: function() {
                    this.$items.removeClass("dg-center"),
                        this.$currentItm = this.$items.eq(this.current),
                        this.$leftItm = 0 === this.current ? this.$items.eq(this.itemsCount - 1) : this.$items.eq(this.current - 1),
                        this.$rightItm = this.current === this.itemsCount - 1 ? this.$items.eq(0) : this.$items.eq(this.current + 1),
                        this.$nextItm = this.$rightItm.index() === this.itemsCount - 1 ? this.$items.eq(0) : this.$rightItm.next(),
                        this.$prevItm = 0 === this.$leftItm.index() ? this.$items.eq(this.itemsCount - 1) : this.$leftItm.prev()
                },
                _loadEvents: function() {
                    var e = this;
                    this.$wrapper.on("webkitTransitionEnd.carrousel transitionend.carrousel OTransitionEnd.carrousel",
                        function() {
                            e.$currentItm.addClass("dg-center"),
                                e.$items.removeClass("dg-transition"),
                                e.$items.removeClass("dg-transition-fast"),
                                e.isAnim = !1,
                                e._isIE() ? (e.$currentItm.attr("onClick", e.$currentItm[0].getAttribute("link")), t("#pdfDowm").attr("onClick", e.$currentItm[0].getAttribute("link")), t("#pdfDowm").text(e.$currentItm.attr("attr")), e.$currentItm.removeAttr("target"), e.$currentItm.removeAttr("href"), e.$nextItm.removeAttr("target"), e.$nextItm.removeAttr("href"), e.$leftItm.removeAttr("target"), e.$leftItm.removeAttr("href"), e.$prevItm.removeAttr("target"), e.$prevItm.removeAttr("href"), e.$rightItm.removeAttr("target"), e.$rightItm.removeAttr("href"), e.$nextItm.removeAttr("onclick"), e.$prevItm.removeAttr("onclick"), e.$leftItm.removeAttr("onclick"), e.$rightItm.removeAttr("onclick")) : (e.$currentItm[0].href = e.$currentItm[0].getAttribute("link"), e.$currentItm.attr("target", "_blank"), t("#pdfDowm").attr("href", e.$currentItm[0].getAttribute("link")), t("#pdfDowm").attr("target", "_blank"), t("#pdfDowm").text(e.$currentItm.attr("attr")), e.$nextItm.removeAttr("target"), e.$nextItm.removeAttr("href"), e.$leftItm.removeAttr("target"), e.$leftItm.removeAttr("href"), e.$prevItm.removeAttr("target"), e.$prevItm.removeAttr("href"), e.$rightItm.removeAttr("target"), e.$rightItm.removeAttr("href")),
                                e.$currentItm.off("click.gallery"),
                                e._click(e.$leftItm, "prev"),
                                e._click(e.$rightItm, "next")
                        })
                },
                _getCoordinates: function(t) {
                    if (this.support3d) switch (t) {
                        case "outleft":
                            return {
                                "-webkit-transform": "translateX(-" + this.CSSXout + "px) translateZ(-560px) rotateY(-144deg)",
                                "-moz-transform": "translateX(-" + this.CSSXout + "px) translateZ(-560px) rotateY(-144deg)",
                                "-o-transform": "translateX(-" + this.CSSXout + "px) translateZ(-560px) rotateY(-144deg)",
                                "-ms-transform": "translateX(-" + this.CSSXout + "px) translateZ(-560px) rotateY(-144deg)",
                                transform: "translateX(-" + this.CSSXout + "px) translateZ(-560px) rotateY(-144deg)",
                                opacity: 1,
                                "z-index": 0
                            };
                        case "outright":
                            return {
                                "-webkit-transform": "translateX(" + (this.CSSXout + 30) + "px) translateZ(-560px) rotateY(144deg )",
                                "-moz-transform": "translateX(" + (this.CSSXout + 30) + "px) translateZ(-560px) rotateY(144deg )",
                                "-o-transform": "translateX(" + (this.CSSXout + 30) + "px) translateZ(-560px) rotateY(144deg )",
                                "-ms-transform": "translateX(" + (this.CSSXout + 30) + "px) translateZ(-560px) rotateY(144deg )",
                                transform: "translateX(" + (this.CSSXout + 30) + "px) translateZ(-560px) rotateY(144deg)",
                                opacity: 1,
                                "z-index": 0
                            };
                        case "left":
                            return {
                                "-webkit-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                "-moz-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                "-o-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                "-ms-transform": "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                transform: "translateX(-" + this.CSSX + "px) translateZ(-300px) rotateY(-25deg)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 2
                            };
                        case "right":
                            return {
                                "-webkit-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                "-moz-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                "-o-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                "-ms-transform": "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                transform: "translateX(" + this.CSSX + "px) translateZ(-300px) rotateY(25deg)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 2
                            };
                        case "center":
                            return {
                                "-webkit-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                "-moz-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                "-o-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                "-ms-transform": "translateX(0px) translateZ(0px) rotateY(0deg)",
                                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                                opacity: 1,
                                visibility: "visible"
                            };
                        case "hide":
                            return {
                                "-webkit-transform": "translate(0px) scale(0.7)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 1
                            }
                    } else if (this.support2d) switch (t) {
                        case "outleft":
                            return {
                                "-webkit-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                "-moz-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                "-o-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                "-ms-transform": "translate(-" + this.CSSXout + "px) scale(0.8)",
                                transform: "translate(-" + this.CSSXout + "px) scale(0.8)",
                                opacity: 1,
                                "z-index": 2
                            };
                        case "outright":
                            return {
                                "-webkit-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                "-moz-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                "-o-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                "-ms-transform": "translate(" + this.CSSXout + "px) scale(0.8)",
                                transform: "translate(" + this.CSSXout + "px) scale(0.8)",
                                opacity: 1,
                                "z-index": 2
                            };
                        case "left":
                            return {
                                "-webkit-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                "-moz-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                "-o-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                "-ms-transform": "translate(-" + this.CSSX + "px) scale(0.9)",
                                transform: "translate(-" + this.CSSX + "px) scale(0.9)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 3
                            };
                        case "right":
                            return {
                                "-webkit-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                "-moz-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                "-o-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                "-ms-transform": "translate(" + this.CSSX + "px) scale(0.9)",
                                transform: "translate(" + this.CSSX + "px) scale(0.9)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 3
                            };
                        case "center":
                            return {
                                "-webkit-transform": "translate(0px) scale(1)",
                                "-moz-transform": "translate(0px) scale(1)",
                                "-o-transform": "translate(0px) scale(1)",
                                "-ms-transform": "translate(0px) scale(1)",
                                transform: "translate(0px) scale(1)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 4
                            };
                        case "hide":
                            return {
                                "-webkit-transform": "translate(0px) scale(0.7)",
                                "-moz-transform": "translate(0px) scale(0.7)",
                                "-o-transform": "translate(0px) scale(0.7)",
                                "-ms-transform": "translate(0px) scale(0.7)",
                                transform: "translate(0px) scale(0.7)",
                                opacity: 1,
                                visibility: "visible",
                                "z-index": 1
                            }
                    }
                },
                _navigate: function(e, i) {
                    if (i = i || "dg-transition", !this.isAnim) {
                        this._updateWidth(),
                            this.isAnim = !0;
                        switch (e) {
                            case "next":
                                this.indexB++,
                                    this.indexB === this.itemsCount && (this.indexB = 0),
                                    this.current = this.$rightItm.index(),
                                    this.$currentItm.addClass(i).css(this._getCoordinates("left")),
                                    this.$rightItm.addClass(i).css(this._getCoordinates("center")),
                                    this.$leftItm.addClass(i).css(this._getCoordinates("outleft")),
                                    this.$nextItm.addClass(i).css(this._getCoordinates("right")),
                                    this.itemsCount > 5 && (this.$prevItm.addClass(i).css(this._getCoordinates("hide")), this.$prevItm.off("click.carrousel"));
                                var n = this.$nextItm.index() === this.itemsCount - 1 ? this.$items.eq(0) : this.$nextItm.next();
                                t(n).addClass(i).css(this._getCoordinates("outright")),
                                    t(n).off("click.carrousel");
                                break;
                            case "prev":
                                this.indexB--, -1 === this.indexB && (this.indexB = this.itemsCount - 1),
                                    this.current = this.$leftItm.index(),
                                    this.$currentItm.addClass(i).css(this._getCoordinates("right")),
                                    this.$leftItm.addClass(i).css(this._getCoordinates("center")),
                                    this.$rightItm.addClass(i).css(this._getCoordinates("outright")),
                                    this.$prevItm.addClass(i).css(this._getCoordinates("left")),
                                    this.itemsCount > 5 && (this.$nextItm.addClass(i).css(this._getCoordinates("hide")), this.$nextItm.off("click.carrousel"));
                                var s = 0 === this.$prevItm.index() ? this.$items.eq(this.itemsCount - 1) : this.$prevItm.prev();
                                t(s).addClass(i).css(this._getCoordinates("outleft")),
                                    t(s).off("click.carrousel")
                        }
                        this._setItems()
                    }
                },
                _startSlideshow: function() {
                    this.slideshow && clearInterval(this.slideshow);
                    var e = this;
                    this.slideshow = setInterval(function() {
                            t(".dg-center")[0] && !e.isAnim && e._navigate("next")
                        },
                        this.options.interval)
                },
                _stopSlideshow: function() {
                    clearTimeout(this.slideshow)
                }
            },
            t.fn.carrousel = function(e) {
                return "object" == typeof e ? this.each(function() {
                        var i = t.data(this, "carrousel");
                        i || t.data(this, "carrousel", new t.carrousel(e, this))
                    }) : "string" == typeof e ? this.each(function() {
                        var i = t.data(this, "carrousel");
                        if (i) switch (e) {
                            case "play":
                                i._startSlideshow(),
                                    i.options.autoplay = !0;
                                break;
                            case "stop":
                                i._stopSlideshow(),
                                    i.options.autoplay = !1;
                                break;
                            case "next":
                                i._navigate("next");
                                break;
                            case "prev":
                                i._navigate("prev")
                        }
                    }) :
                    "number" == typeof e && this.each(function() {
                        var i = t.data(this, "carrousel");
                        i.button[e].click()
                    }),
                    this
            }
    }(jQuery),
    function(t) {
        t.fn.extend({
            Scroll: function(e, n) {
                if (!e) var e = {};
                var s, r = t("#" + e.up),
                    a = (t("#" + e.down), this.eq(0).find("ul:first")),
                    o = t("#scrollDiv1").eq(0).find("ul:first"),
                    l = t("#scrollDiv2").eq(0).find("ul:first"),
                    u = a.find("li:first").height(),
                    c = e.line ? parseInt(e.line, 10) : parseInt(this.height() / u, 10),
                    h = e.speed ? parseInt(e.speed, 10) : 500;
                timer = e.timer,
                    0 == c && (c = 1);
                var d = 0 - c * u,
                    p = function() {
                        r.unbind("click", p),
                            o.animate({
                                    marginTop: d
                                },
                                h,
                                function() {
                                    for (i = 1; i <= c; i++) o.find("li:first").appendTo(o);
                                    o.css({
                                        marginTop: 0
                                    })
                                }),
                            l.animate({
                                    marginTop: d
                                },
                                h,
                                function() {
                                    for (i = 1; i <= c; i++) l.find("li:first").appendTo(l);
                                    l.css({
                                        marginTop: 0
                                    })
                                })
                    },
                    f = function() {
                        timer && (s = window.setInterval(p, timer))
                    },
                    g = function() {
                        timer && window.clearInterval(s)
                    };
                a.hover(g, f).mouseout(),
                    r.css("cursor", "pointer").click(p).hover(g, f)
            }
        })
    }(jQuery),
    define("carrousel", ["jquery"],
        function(t) {
            return function() {
                var e;
                return e || t.carrousel
            }
        }(this)), !
    function(t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" === n || i.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        if (!t.jQuery) {
            var i = function(t, e) {
                return new i.fn.init(t, e)
            };
            i.isWindow = function(t) {
                    return null != t && t == t.window
                },
                i.type = function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? s[a.call(t)] || "object" : typeof t
                },
                i.isArray = Array.isArray ||
                function(t) {
                    return "array" === i.type(t)
                },
                i.isPlainObject = function(t) {
                    var e;
                    if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    for (e in t);
                    return void 0 === e || r.call(t, e)
                },
                i.each = function(t, i, n) {
                    var s, r = 0,
                        a = t.length,
                        o = e(t);
                    if (n) {
                        if (o)
                            for (; a > r && (s = i.apply(t[r], n), s !== !1); r++);
                        else
                            for (r in t)
                                if (s = i.apply(t[r], n), s === !1) break
                    } else if (o)
                        for (; a > r && (s = i.call(t[r], r, t[r]), s !== !1); r++);
                    else
                        for (r in t)
                            if (s = i.call(t[r], r, t[r]), s === !1) break;
                    return t
                },
                i.data = function(t, e, s) {
                    if (void 0 === s) {
                        var r = t[i.expando],
                            a = r && n[r];
                        if (void 0 === e) return a;
                        if (a && e in a) return a[e]
                    } else if (void 0 !== e) {
                        var r = t[i.expando] || (t[i.expando] = ++i.uuid);
                        return n[r] = n[r] || {},
                            n[r][e] = s,
                            s
                    }
                },
                i.removeData = function(t, e) {
                    var s = t[i.expando],
                        r = s && n[s];
                    r && i.each(e,
                        function(t, e) {
                            delete r[e]
                        })
                },
                i.extend = function() {
                    var t, e, n, s, r, a, o = arguments[0] || {},
                        l = 1,
                        u = arguments.length,
                        c = !1;
                    for ("boolean" == typeof o && (c = o, o = arguments[l] || {},
                            l++), "object" != typeof o && "function" !== i.type(o) && (o = {}), l === u && (o = this, l--); u > l; l++)
                        if (null != (r = arguments[l]))
                            for (s in r) t = o[s],
                                n = r[s],
                                o !== n && (c && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, a = t && i.isArray(t) ? t : []) : a = t && i.isPlainObject(t) ? t : {},
                                    o[s] = i.extend(c, a, n)) : void 0 !== n && (o[s] = n));
                    return o
                },
                i.queue = function(t, n, s) {
                    function r(t, i) {
                        var n = i || [];
                        return null != t && (e(Object(t)) ? !
                                function(t, e) {
                                    for (var i = +e.length,
                                            n = 0,
                                            s = t.length; i > n;) t[s++] = e[n++];
                                    if (i !== i)
                                        for (; void 0 !== e[n];) t[s++] = e[n++];
                                    return t.length = s,
                                        t
                                }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)),
                            n
                    }
                    if (t) {
                        n = (n || "fx") + "queue";
                        var a = i.data(t, n);
                        return s ? (!a || i.isArray(s) ? a = i.data(t, n, r(s)) : a.push(s), a) : a || []
                    }
                },
                i.dequeue = function(t, e) {
                    i.each(t.nodeType ? [t] : t,
                        function(t, n) {
                            e = e || "fx";
                            var s = i.queue(n, e),
                                r = s.shift();
                            "inprogress" === r && (r = s.shift()),
                                r && ("fx" === e && s.unshift("inprogress"), r.call(n,
                                    function() {
                                        i.dequeue(n, e)
                                    }))
                        })
                },
                i.fn = i.prototype = {
                    init: function(t) {
                        if (t.nodeType) return this[0] = t,
                            this;
                        throw new Error("Not a DOM node.")
                    },
                    offset: function() {
                        var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                            top: 0,
                            left: 0
                        };
                        return {
                            top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                            left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                        }
                    },
                    position: function() {
                        function t() {
                            for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                            return t || document
                        }
                        var e = this[0],
                            t = t.apply(e),
                            n = this.offset(),
                            s = /^(?:body|html)$/i.test(t.nodeName) ? {
                                top: 0,
                                left: 0
                            } : i(t).offset();
                        return n.top -= parseFloat(e.style.marginTop) || 0,
                            n.left -= parseFloat(e.style.marginLeft) || 0,
                            t.style && (s.top += parseFloat(t.style.borderTopWidth) || 0, s.left += parseFloat(t.style.borderLeftWidth) || 0), {
                                top: n.top - s.top,
                                left: n.left - s.left
                            }
                    }
                };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(),
                i.uuid = 0;
            for (var s = {},
                    r = s.hasOwnProperty,
                    a = s.toString,
                    o = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < o.length; l++) s["[object " + o[l] + "]"] = o[l].toLowerCase();
            i.fn.init.prototype = i.fn,
                t.Velocity = {
                    Utilities: i
                }
        }
    }(window),
    function(t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define("velocity", t) : t()
    }(function() {
        return function(t, e, i, n) {
            function s(t) {
                for (var e = -1,
                        i = t ? t.length : 0, n = []; ++e < i;) {
                    var s = t[e];
                    s && n.push(s)
                }
                return n
            }

            function r(t) {
                return g.isWrapped(t) ? t = [].slice.call(t) : g.isNode(t) && (t = [t]),
                    t
            }

            function a(t) {
                var e = d.data(t, "velocity");
                return null === e ? n : e
            }

            function o(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }

            function l(t, i, n, s) {
                function r(t, e) {
                    return 1 - 3 * e + 3 * t
                }

                function a(t, e) {
                    return 3 * e - 6 * t
                }

                function o(t) {
                    return 3 * t
                }

                function l(t, e, i) {
                    return ((r(e, i) * t + a(e, i)) * t + o(e)) * t
                }

                function u(t, e, i) {
                    return 3 * r(e, i) * t * t + 2 * a(e, i) * t + o(e)
                }

                function c(e, i) {
                    for (var s = 0; g > s; ++s) {
                        var r = u(i, t, n);
                        if (0 === r) return i;
                        var a = l(i, t, n) - e;
                        i -= a / r
                    }
                    return i
                }

                function h() {
                    for (var e = 0; b > e; ++e) C[e] = l(e * _, t, n)
                }

                function d(e, i, s) {
                    var r, a, o = 0;
                    do a = i + (s - i) / 2,
                        r = l(a, t, n) - e,
                        r > 0 ? s = a : i = a;
                    while (Math.abs(r) > v && ++o < y);
                    return a
                }

                function p(e) {
                    for (var i = 0,
                            s = 1,
                            r = b - 1; s != r && C[s] <= e; ++s) i += _;
                    --s;
                    var a = (e - C[s]) / (C[s + 1] - C[s]),
                        o = i + a * _,
                        l = u(o, t, n);
                    return l >= m ? c(e, o) : 0 == l ? o : d(e, i, i + _)
                }

                function f() {
                    k = !0,
                        (t != i || n != s) && h()
                }
                var g = 4,
                    m = .001,
                    v = 1e-7,
                    y = 10,
                    b = 11,
                    _ = 1 / (b - 1),
                    w = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var x = 0; 4 > x; ++x)
                    if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
                t = Math.min(t, 1),
                    n = Math.min(n, 1),
                    t = Math.max(t, 0),
                    n = Math.max(n, 0);
                var C = w ? new Float32Array(b) : new Array(b),
                    k = !1,
                    E = function(e) {
                        return k || f(),
                            t === i && n === s ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), i, s)
                    };
                E.getControlPoints = function() {
                    return [{
                            x: t,
                            y: i
                        },
                        {
                            x: n,
                            y: s
                        }
                    ]
                };
                var S = "generateBezier(" + [t, i, n, s] + ")";
                return E.toString = function() {
                        return S
                    },
                    E
            }

            function u(t, e) {
                var i = t;
                return g.isString(t) ? b.Easings[t] || (i = !1) : i = g.isArray(t) && 1 === t.length ? o.apply(null, t) : g.isArray(t) && 2 === t.length ? _.apply(null, t.concat([e])) : g.isArray(t) && 4 === t.length ? l.apply(null, t) : !1,
                    i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y),
                    i
            }

            function c(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        i = b.State.calls.length;
                    i > 1e4 && (b.State.calls = s(b.State.calls));
                    for (var r = 0; i > r; r++)
                        if (b.State.calls[r]) {
                            var o = b.State.calls[r],
                                l = o[0],
                                u = o[2],
                                p = o[3],
                                f = !!p,
                                m = null;
                            p || (p = b.State.calls[r][3] = e - 16);
                            for (var v = Math.min((e - p) / u.duration, 1), y = 0, _ = l.length; _ > y; y++) {
                                var x = l[y],
                                    k = x.element;
                                if (a(k)) {
                                    var E = !1;
                                    if (u.display !== n && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            d.each(S,
                                                function(t, e) {
                                                    w.setPropertyValue(k, "display", e)
                                                })
                                        }
                                        w.setPropertyValue(k, "display", u.display)
                                    }
                                    u.visibility !== n && "hidden" !== u.visibility && w.setPropertyValue(k, "visibility", u.visibility);
                                    for (var T in x)
                                        if ("element" !== T) {
                                            var P, A = x[T],
                                                D = g.isString(A.easing) ? b.Easings[A.easing] : A.easing;
                                            if (1 === v) P = A.endValue;
                                            else {
                                                var I = A.endValue - A.startValue;
                                                if (P = A.startValue + I * D(v, u, I), !f && P === A.currentValue) continue
                                            }
                                            if (A.currentValue = P, "tween" === T) m = P;
                                            else {
                                                if (w.Hooks.registered[T]) {
                                                    var M = w.Hooks.getRoot(T),
                                                        N = a(k).rootPropertyValueCache[M];
                                                    N && (A.rootPropertyValue = N)
                                                }
                                                var L = w.setPropertyValue(k, T, A.currentValue + (0 === parseFloat(P) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                                w.Hooks.registered[T] && (a(k).rootPropertyValueCache[M] = w.Normalizations.registered[M] ? w.Normalizations.registered[M]("extract", null, L[1]) : L[1]),
                                                    "transform" === L[0] && (E = !0)
                                            }
                                        }
                                    u.mobileHA && a(k).transformCache.translate3d === n && (a(k).transformCache.translate3d = "(0px, 0px, 0px)", E = !0),
                                        E && w.flushTransformCache(k)
                                }
                            }
                            u.display !== n && "none" !== u.display && (b.State.calls[r][2].display = !1),
                                u.visibility !== n && "hidden" !== u.visibility && (b.State.calls[r][2].visibility = !1),
                                u.progress && u.progress.call(o[1], o[1], v, Math.max(0, p + u.duration - e), p, m),
                                1 === v && h(r)
                        }
                }
                b.State.isTicking && C(c)
            }

            function h(t, e) {
                if (!b.State.calls[t]) return !1;
                for (var i = b.State.calls[t][0], s = b.State.calls[t][1], r = b.State.calls[t][2], o = b.State.calls[t][4], l = !1, u = 0, c = i.length; c > u; u++) {
                    var h = i[u].element;
                    if (e || r.loop || ("none" === r.display && w.setPropertyValue(h, "display", r.display), "hidden" === r.visibility && w.setPropertyValue(h, "visibility", r.visibility)), r.loop !== !0 && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && a(h)) {
                        a(h).isAnimating = !1,
                            a(h).rootPropertyValueCache = {};
                        var p = !1;
                        d.each(w.Lists.transforms3D,
                                function(t, e) {
                                    var i = /^scale/.test(e) ? 1 : 0,
                                        s = a(h).transformCache[e];
                                    a(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(s) && (p = !0, delete a(h).transformCache[e])
                                }),
                            r.mobileHA && (p = !0, delete a(h).transformCache.translate3d),
                            p && w.flushTransformCache(h),
                            w.Values.removeClass(h, "velocity-animating")
                    }
                    if (!e && r.complete && !r.loop && u === c - 1) try {
                        r.complete.call(s, s)
                    } catch (f) {
                        setTimeout(function() {
                                throw f
                            },
                            1)
                    }
                    o && r.loop !== !0 && o(s),
                        a(h) && r.loop === !0 && !e && (d.each(a(h).tweensContainer,
                            function(t, e) {
                                / ^rotate /.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360),
                                    /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                            }), b(h, "reverse", {
                            loop: !0,
                            delay: r.delay
                        })),
                        r.queue !== !1 && d.dequeue(h, r.queue)
                }
                b.State.calls[t] = !1;
                for (var g = 0,
                        m = b.State.calls.length; m > g; g++)
                    if (b.State.calls[g] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var d, p = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null,
                            t
                    }
                    return n
                }(),
                f = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame ||
                        function(e) {
                            var i, n = (new Date).getTime();
                            return i = Math.max(0, 16 - (n - t)),
                                t = n + i,
                                setTimeout(function() {
                                        e(n + i)
                                    },
                                    i)
                        }
                }(),
                g = {
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray ||
                        function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isNodeList: function(t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                    },
                    isWrapped: function(t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    }
                },
                m = !1;
            if (t.fn && t.fn.jquery ? (d = t, m = !0) : d = e.Velocity.Utilities, 8 >= p && !m) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var v = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: d,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: v,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(t) {
                        d.data(t, "velocity", {
                            isSVG: g.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var _ = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }

                function e(e, i, n) {
                    var s = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: s.v,
                        dv: t(s)
                    }
                }

                function i(i, n) {
                    var s = {
                            dx: i.v,
                            dv: t(i)
                        },
                        r = e(i, .5 * n, s),
                        a = e(i, .5 * n, r),
                        o = e(i, n, a),
                        l = 1 / 6 * (s.dx + 2 * (r.dx + a.dx) + o.dx),
                        u = 1 / 6 * (s.dv + 2 * (r.dv + a.dv) + o.dv);
                    return i.x = i.x + l * n,
                        i.v = i.v + u * n,
                        i
                }
                return function n(t, e, s) {
                    var r, a, o, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0,
                        h = 1e-4,
                        d = .016;
                    for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, s = s || null, l.tension = t, l.friction = e, r = null !== s, r ? (c = n(t, e), a = c / s * d) : a = d; o = i(o || l, a), u.push(1 + o.x), c += 16, Math.abs(o.x) > h && Math.abs(o.v) > h;);
                    return r ?
                        function(t) {
                            return u[t * (u.length - 1) | 0]
                        } : c
                }
            }();
            b.Easings = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    spring: function(t) {
                        return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                    }
                },
                d.each([
                        ["ease", [.25, .1, .25, 1]],
                        ["ease-in", [.42, 0, 1, 1]],
                        ["ease-out", [0, 0, .58, 1]],
                        ["ease-in-out", [.42, 0, .58, 1]],
                        ["easeInSine", [.47, 0, .745, .715]],
                        ["easeOutSine", [.39, .575, .565, 1]],
                        ["easeInOutSine", [.445, .05, .55, .95]],
                        ["easeInQuad", [.55, .085, .68, .53]],
                        ["easeOutQuad", [.25, .46, .45, .94]],
                        ["easeInOutQuad", [.455, .03, .515, .955]],
                        ["easeInCubic", [.55, .055, .675, .19]],
                        ["easeOutCubic", [.215, .61, .355, 1]],
                        ["easeInOutCubic", [.645, .045, .355, 1]],
                        ["easeInQuart", [.895, .03, .685, .22]],
                        ["easeOutQuart", [.165, .84, .44, 1]],
                        ["easeInOutQuart", [.77, 0, .175, 1]],
                        ["easeInQuint", [.755, .05, .855, .06]],
                        ["easeOutQuint", [.23, 1, .32, 1]],
                        ["easeInOutQuint", [.86, 0, .07, 1]],
                        ["easeInExpo", [.95, .05, .795, .035]],
                        ["easeOutExpo", [.19, 1, .22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [.6, .04, .98, .335]],
                        ["easeOutCirc", [.075, .82, .165, 1]],
                        ["easeInOutCirc", [.785, .135, .15, .86]]
                    ],
                    function(t, e) {
                        b.Easings[e[0]] = l.apply(null, e[1])
                    });
            var w = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < w.Lists.colors.length; t++) {
                            var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i, n, s;
                        if (p)
                            for (i in w.Hooks.templates) {
                                n = w.Hooks.templates[i],
                                    s = n[0].split(" ");
                                var r = n[1].match(w.RegEx.valueSplit);
                                "Color" === s[0] && (s.push(s.shift()), r.push(r.shift()), w.Hooks.templates[i] = [s.join(" "), r.join(" ")])
                            }
                        for (i in w.Hooks.templates) {
                            n = w.Hooks.templates[i],
                                s = n[0].split(" ");
                            for (var t in s) {
                                var a = i + s[t],
                                    o = t;
                                w.Hooks.registered[a] = [i, o]
                            }
                        }
                    },
                    getRoot: function(t) {
                        var e = w.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]),
                            w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]),
                            e
                    },
                    extractValue: function(t, e) {
                        var i = w.Hooks.registered[t];
                        if (i) {
                            var n = i[0],
                                s = i[1];
                            return e = w.Hooks.cleanRootPropertyValue(n, e),
                                e.toString().match(w.RegEx.valueSplit)[s]
                        }
                        return e
                    },
                    injectValue: function(t, e, i) {
                        var n = w.Hooks.registered[t];
                        if (n) {
                            var s, r, a = n[0],
                                o = n[1];
                            return i = w.Hooks.cleanRootPropertyValue(a, i),
                                s = i.toString().match(w.RegEx.valueSplit),
                                s[o] = e,
                                r = s.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return w.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(w.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i),
                                        n;
                                case "inject":
                                    return "rect(" + i + ")"
                            }
                        },
                        blur: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var s = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = s ? s[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(t, e, i) {
                            if (8 >= p) switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1,
                                        parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return i;
                                case "inject":
                                    return i
                            }
                        }
                    },
                    register: function() {
                        9 >= p || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                        for (var t = 0; t < w.Lists.transformsBase.length; t++) !
                            function() {
                                var e = w.Lists.transformsBase[t];
                                w.Normalizations.registered[e] = function(t, i, s) {
                                    switch (t) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return a(i) === n || a(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : a(i).transformCache[e].replace(/[()]/g, "");
                                        case "inject":
                                            var r = !1;
                                            switch (e.substr(0, e.length - 1)) {
                                                case "translate":
                                                    r = !/(%|px|em|rem|vw|vh|\d)$/i.test(s);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    b.State.isAndroid && a(i).transformCache[e] === n && 1 > s && (s = 1),
                                                        r = !/(\d)$/i.test(s);
                                                    break;
                                                case "skew":
                                                    r = !/(deg|\d)$/i.test(s);
                                                    break;
                                                case "rotate":
                                                    r = !/(deg|\d)$/i.test(s)
                                            }
                                            return r || (a(i).transformCache[e] = "(" + s + ")"),
                                                a(i).transformCache[e]
                                    }
                                }
                            }();
                        for (var t = 0; t < w.Lists.colors.length; t++) !
                            function() {
                                var e = w.Lists.colors[t];
                                w.Normalizations.registered[e] = function(t, i, s) {
                                    switch (t) {
                                        case "name":
                                            return e;
                                        case "extract":
                                            var r;
                                            if (w.RegEx.wrappedValueAlreadyExtracted.test(s)) r = s;
                                            else {
                                                var a, o = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(s) ? a = o[s] !== n ? o[s] : o.black : w.RegEx.isHex.test(s) ? a = "rgb(" + w.Values.hexToRgb(s).join(" ") + ")" : /^rgba?\(/i.test(s) || (a = o.black),
                                                    r = (a || s).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= p || 3 !== r.split(" ").length || (r += " 1"),
                                                r;
                                        case "inject":
                                            return 8 >= p ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"),
                                                (8 >= p ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g,
                            function(t, e) {
                                return e.toUpperCase()
                            })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (p || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"),
                            new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                            var s;
                            if (s = 0 === i ? t : e[i] + t.replace(/^\w/,
                                    function(t) {
                                        return t.toUpperCase()
                                    }), g.isString(b.State.prefixElement.style[s])) return b.State.prefixMatches[t] = s, [s, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(i,
                                function(t, e, i, n) {
                                    return e + e + i + i + n + n
                                }),
                            e = n.exec(t),
                            e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function(t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(t, i, s, r) {
                    function o(t, i) {
                        function s() {
                            u && w.setPropertyValue(t, "display", "none")
                        }
                        var l = 0;
                        if (8 >= p) l = d.css(t, i);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(i) && 0 === w.getPropertyValue(t, "display") && (u = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !r) {
                                if ("height" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var c = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                    return s(),
                                        c
                                }
                                if ("width" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var h = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                    return s(),
                                        h
                                }
                            }
                            var f;
                            f = a(t) === n ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null),
                                "borderColor" === i && (i = "borderTopColor"),
                                l = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i],
                                ("" === l || null === l) && (l = t.style[i]),
                                s()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var g = o(t, "position");
                            ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = d(t).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (w.Hooks.registered[i]) {
                        var u = i,
                            c = w.Hooks.getRoot(u);
                        s === n && (s = w.getPropertyValue(t, w.Names.prefixCheck(c)[0])),
                            w.Normalizations.registered[c] && (s = w.Normalizations.registered[c]("extract", t, s)),
                            l = w.Hooks.extractValue(u, s)
                    } else if (w.Normalizations.registered[i]) {
                        var h, f;
                        h = w.Normalizations.registered[i]("name", t),
                            "transform" !== h && (f = o(t, w.Names.prefixCheck(h)[0]), w.Values.isCSSNullValue(f) && w.Hooks.templates[i] && (f = w.Hooks.templates[i][1])),
                            l = w.Normalizations.registered[i]("extract", t, f)
                    }
                    if (!/^[\d-]/.test(l))
                        if (a(t) && a(t).isSVG && w.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try {
                                l = t.getBBox()[i]
                            } catch (g) {
                                l = 0
                            } else l = t.getAttribute(i);
                            else l = o(t, w.Names.prefixCheck(i)[0]);
                    return w.Values.isCSSNullValue(l) && (l = 0),
                        b.debug >= 2 && console.log("Get " + i + ": " + l),
                        l
                },
                setPropertyValue: function(t, i, n, s, r) {
                    var o = i;
                    if ("scroll" === i) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? e.scrollTo(n, r.alternateValue) : e.scrollTo(r.alternateValue, n);
                    else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", t)) w.Normalizations.registered[i]("inject", t, n),
                        o = "transform",
                        n = a(t).transformCache[i];
                    else {
                        if (w.Hooks.registered[i]) {
                            var l = i,
                                u = w.Hooks.getRoot(i);
                            s = s || w.getPropertyValue(t, u),
                                n = w.Hooks.injectValue(l, n, s),
                                i = u
                        }
                        if (w.Normalizations.registered[i] && (n = w.Normalizations.registered[i]("inject", t, n), i = w.Normalizations.registered[i]("name", t)), o = w.Names.prefixCheck(i)[0], 8 >= p) try {
                            t.style[o] = n
                        } catch (c) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + o + "]")
                        } else a(t) && a(t).isSVG && w.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[o] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + o + "): " + n)
                    }
                    return [o, n]
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(w.getPropertyValue(t, e))
                    }
                    var i = "";
                    if ((p || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                        var n = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        d.each(a(t).transformCache,
                            function(t) {
                                / ^translate /
                                i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"),
                                    n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                            })
                    } else {
                        var s, r;
                        d.each(a(t).transformCache,
                                function(e) {
                                    return s = a(t).transformCache[e],
                                        "transformPerspective" === e ? (r = s, !0) : (9 === p && "rotateZ" === e && (e = "rotate"), void(i += e + s + " "))
                                }),
                            r && (i = "perspective" + r + " " + i)
                    }
                    w.setPropertyValue(t, "transform", i)
                }
            };
            w.Hooks.register(),
                w.Normalizations.register(),
                b.hook = function(t, e, i) {
                    var s = n;
                    return t = r(t),
                        d.each(t,
                            function(t, r) {
                                if (a(r) === n && b.init(r), i === n) s === n && (s = b.CSS.getPropertyValue(r, e));
                                else {
                                    var o = b.CSS.setPropertyValue(r, e, i);
                                    "transform" === o[0] && b.CSS.flushTransformCache(r),
                                        s = o
                                }
                            }),
                        s
                };
            var x = function() {
                function t() {
                    return o ? T.promise || null : l
                }

                function s() {
                    function t() {
                        function t(t, e) {
                            var i = n,
                                s = n,
                                a = n;
                            return g.isArray(t) ? (i = t[0], !g.isArray(t[1]) && /^[\d-]/.test(t[1]) || g.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? a = t[1] : (g.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || g.isArray(t[1])) && (s = e ? t[1] : u(t[1], o.duration), t[2] !== n && (a = t[2]))) : i = t,
                                e || (s = s || o.easing),
                                g.isFunction(i) && (i = i.call(r, k, C)),
                                g.isFunction(a) && (a = a.call(r, k, C)), [i || 0, s, a]
                        }

                        function h(t, e) {
                            var i, n;
                            return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/,
                                    function(t) {
                                        return i = t,
                                            ""
                                    }),
                                i || (i = w.Values.getUnitType(t)), [n, i]
                        }

                        function p() {
                            var t = {
                                    myParent: r.parentNode || i.body,
                                    position: w.getPropertyValue(r, "position"),
                                    fontSize: w.getPropertyValue(r, "fontSize")
                                },
                                n = t.position === L.lastPosition && t.myParent === L.lastParent,
                                s = t.fontSize === L.lastFontSize;
                            L.lastParent = t.myParent,
                                L.lastPosition = t.position,
                                L.lastFontSize = t.fontSize;
                            var o = 100,
                                l = {};
                            if (s && n) l.emToPx = L.lastEmToPx,
                                l.percentToPxWidth = L.lastPercentToPxWidth,
                                l.percentToPxHeight = L.lastPercentToPxHeight;
                            else {
                                var u = a(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(u),
                                    t.myParent.appendChild(u),
                                    d.each(["overflow", "overflowX", "overflowY"],
                                        function(t, e) {
                                            b.CSS.setPropertyValue(u, e, "hidden")
                                        }),
                                    b.CSS.setPropertyValue(u, "position", t.position),
                                    b.CSS.setPropertyValue(u, "fontSize", t.fontSize),
                                    b.CSS.setPropertyValue(u, "boxSizing", "content-box"),
                                    d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"],
                                        function(t, e) {
                                            b.CSS.setPropertyValue(u, e, o + "%")
                                        }),
                                    b.CSS.setPropertyValue(u, "paddingLeft", o + "em"),
                                    l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(u, "width", null, !0)) || 1) / o,
                                    l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(u, "height", null, !0)) || 1) / o,
                                    l.emToPx = L.lastEmToPx = (parseFloat(w.getPropertyValue(u, "paddingLeft")) || 1) / o,
                                    t.myParent.removeChild(u)
                            }
                            return null === L.remToPx && (L.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16),
                                null === L.vwToPx && (L.vwToPx = parseFloat(e.innerWidth) / 100, L.vhToPx = parseFloat(e.innerHeight) / 100),
                                l.remToPx = L.remToPx,
                                l.vwToPx = L.vwToPx,
                                l.vhToPx = L.vhToPx,
                                b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r),
                                l
                        }
                        if (o.begin && 0 === k) try {
                            o.begin.call(f, f)
                        } catch (v) {
                            setTimeout(function() {
                                    throw v
                                },
                                1)
                        }
                        if ("scroll" === P) {
                            var _, x, E, S = /^x$/i.test(o.axis) ? "Left" : "Top",
                                A = parseFloat(o.offset) || 0;
                            o.container ? g.isWrapped(o.container) || g.isNode(o.container) ? (o.container = o.container[0] || o.container, _ = o.container["scroll" + S], E = _ + d(r).position()[S.toLowerCase()] + A) : o.container = null : (_ = b.State.scrollAnchor[b.State["scrollProperty" + S]], x = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], E = d(r).offset()[S.toLowerCase()] + A),
                                l = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: _,
                                        currentValue: _,
                                        endValue: E,
                                        unitType: "",
                                        easing: o.easing,
                                        scrollData: {
                                            container: o.container,
                                            direction: S,
                                            alternateValue: x
                                        }
                                    },
                                    element: r
                                },
                                b.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
                        } else if ("reverse" === P) {
                            if (!a(r).tweensContainer) return void d.dequeue(r, o.queue);
                            "none" === a(r).opts.display && (a(r).opts.display = "auto"),
                                "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"),
                                a(r).opts.loop = !1,
                                a(r).opts.begin = null,
                                a(r).opts.complete = null,
                                y.easing || delete o.easing,
                                y.duration || delete o.duration,
                                o = d.extend({},
                                    a(r).opts, o);
                            var D = d.extend(!0, {},
                                a(r).tweensContainer);
                            for (var I in D)
                                if ("element" !== I) {
                                    var M = D[I].startValue;
                                    D[I].startValue = D[I].currentValue = D[I].endValue,
                                        D[I].endValue = M,
                                        g.isEmptyObject(y) || (D[I].easing = o.easing),
                                        b.debug && console.log("reverse tweensContainer (" + I + "): " + JSON.stringify(D[I]), r)
                                }
                            l = D
                        } else if ("start" === P) {
                            var D;
                            a(r).tweensContainer && a(r).isAnimating === !0 && (D = a(r).tweensContainer),
                                d.each(m,
                                    function(e, i) {
                                        if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                            var s = t(i, !0),
                                                r = s[0],
                                                a = s[1],
                                                o = s[2];
                                            if (w.RegEx.isHex.test(r)) {
                                                for (var l = ["Red", "Green", "Blue"], u = w.Values.hexToRgb(r), c = o ? w.Values.hexToRgb(o) : n, h = 0; h < l.length; h++) {
                                                    var d = [u[h]];
                                                    a && d.push(a),
                                                        c !== n && d.push(c[h]),
                                                        m[e + l[h]] = d
                                                }
                                                delete m[e]
                                            }
                                        }
                                    });
                            for (var N in m) {
                                var j = t(m[N]),
                                    R = j[0],
                                    H = j[1],
                                    $ = j[2];
                                N = w.Names.camelCase(N);
                                var W = w.Hooks.getRoot(N),
                                    z = !1;
                                if (a(r).isSVG || "tween" === W || w.Names.prefixCheck(W)[1] !== !1 || w.Normalizations.registered[W] !== n) {
                                    (o.display !== n && null !== o.display && "none" !== o.display || o.visibility !== n && "hidden" !== o.visibility) && /opacity|filter/.test(N) && !$ && 0 !== R && ($ = 0),
                                        o._cacheValues && D && D[N] ? ($ === n && ($ = D[N].endValue + D[N].unitType), z = a(r).rootPropertyValueCache[W]) : w.Hooks.registered[N] ? $ === n ? (z = w.getPropertyValue(r, W), $ = w.getPropertyValue(r, N, z)) : z = w.Hooks.templates[W][1] : $ === n && ($ = w.getPropertyValue(r, N));
                                    var F, Y, q, B = !1;
                                    if (F = h(N, $), $ = F[0], q = F[1], F = h(N, R), R = F[0].replace(/^([+-\/*])=/,
                                            function(t, e) {
                                                return B = e,
                                                    ""
                                            }), Y = F[1], $ = parseFloat($) || 0, R = parseFloat(R) || 0, "%" === Y && (/^(fontSize|lineHeight)$/.test(N) ? (R /= 100, Y = "em") : /^scale/.test(N) ? (R /= 100, Y = "") : /(Red|Green|Blue)$/i.test(N) && (R = R / 100 * 255, Y = "")), /[\/*]/.test(B)) Y = q;
                                    else if (q !== Y && 0 !== $)
                                        if (0 === R) Y = q;
                                        else {
                                            s = s || p();
                                            var V = /margin|padding|left|right|width|text|word|letter/i.test(N) || /X$/.test(N) || "x" === N ? "x" : "y";
                                            switch (q) {
                                                case "%":
                                                    $ *= "x" === V ? s.percentToPxWidth : s.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    $ *= s[q + "ToPx"]
                                            }
                                            switch (Y) {
                                                case "%":
                                                    $ *= 1 / ("x" === V ? s.percentToPxWidth : s.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    $ *= 1 / s[Y + "ToPx"]
                                            }
                                        }
                                    switch (B) {
                                        case "+":
                                            R = $ + R;
                                            break;
                                        case "-":
                                            R = $ - R;
                                            break;
                                        case "*":
                                            R = $ * R;
                                            break;
                                        case "/":
                                            R = $ / R
                                    }
                                    l[N] = {
                                            rootPropertyValue: z,
                                            startValue: $,
                                            currentValue: $,
                                            endValue: R,
                                            unitType: Y,
                                            easing: H
                                        },
                                        b.debug && console.log("tweensContainer (" + N + "): " + JSON.stringify(l[N]), r)
                                } else b.debug && console.log("Skipping [" + W + "] due to a lack of browser support.")
                            }
                            l.element = r
                        }
                        l.element && (w.Values.addClass(r, "velocity-animating"), O.push(l), "" === o.queue && (a(r).tweensContainer = l, a(r).opts = o), a(r).isAnimating = !0, k === C - 1 ? (b.State.calls.push([O, f, o, null, T.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : k++)
                    }
                    var s, r = this,
                        o = d.extend({},
                            b.defaults, y),
                        l = {};
                    switch (a(r) === n && b.init(r), parseFloat(o.delay) && o.queue !== !1 && d.queue(r, o.queue,
                        function(t) {
                            b.velocityQueueEntryFlag = !0,
                                a(r).delayTimer = {
                                    setTimeout: setTimeout(t, parseFloat(o.delay)),
                                    next: t
                                }
                        }), o.duration.toString().toLowerCase()) {
                        case "fast":
                            o.duration = 200;
                            break;
                        case "normal":
                            o.duration = v;
                            break;
                        case "slow":
                            o.duration = 600;
                            break;
                        default:
                            o.duration = parseFloat(o.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? o.duration = o.delay = 1 : (o.duration *= parseFloat(b.mock) || 1, o.delay *= parseFloat(b.mock) || 1)),
                        o.easing = u(o.easing, o.duration),
                        o.begin && !g.isFunction(o.begin) && (o.begin = null),
                        o.progress && !g.isFunction(o.progress) && (o.progress = null),
                        o.complete && !g.isFunction(o.complete) && (o.complete = null),
                        o.display !== n && null !== o.display && (o.display = o.display.toString().toLowerCase(), "auto" === o.display && (o.display = b.CSS.Values.getDisplayType(r))),
                        o.visibility !== n && null !== o.visibility && (o.visibility = o.visibility.toString().toLowerCase()),
                        o.mobileHA = o.mobileHA && b.State.isMobile && !b.State.isGingerbread,
                        o.queue === !1 ? o.delay ? setTimeout(t, o.delay) : t() : d.queue(r, o.queue,
                            function(e, i) {
                                return i === !0 ? (T.promise && T.resolver(f), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                            }),
                        "" !== o.queue && "fx" !== o.queue || "inprogress" === d.queue(r)[0] || d.dequeue(r)
                }
                var o, l, p, f, m, y, _ = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
                if (g.isWrapped(this) ? (o = !1, p = 0, f = this, l = this) : (o = !0, p = 1, f = _ ? arguments[0].elements || arguments[0].e : arguments[0]), f = r(f)) {
                    _ ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[p], y = arguments[p + 1]);
                    var C = f.length,
                        k = 0;
                    if (!/^(stop|finish|finishAll)$/i.test(m) && !d.isPlainObject(y)) {
                        var E = p + 1;
                        y = {};
                        for (var S = E; S < arguments.length; S++) g.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? g.isString(arguments[S]) || g.isArray(arguments[S]) ? y.easing = arguments[S] : g.isFunction(arguments[S]) && (y.complete = arguments[S]) : y.duration = arguments[S]
                    }
                    var T = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    o && b.Promise && (T.promise = new b.Promise(function(t, e) {
                        T.resolver = t,
                            T.rejecter = e
                    }));
                    var P;
                    switch (m) {
                        case "scroll":
                            P = "scroll";
                            break;
                        case "reverse":
                            P = "reverse";
                            break;
                        case "finish":
                        case "finishAll":
                        case "stop":
                            d.each(f,
                                function(t, e) {
                                    a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer),
                                        "finishAll" !== m || y !== !0 && !g.isString(y) || (d.each(d.queue(e, g.isString(y) ? y : ""),
                                            function(t, e) {
                                                g.isFunction(e) && e()
                                            }), d.queue(e, g.isString(y) ? y : "", []))
                                });
                            var A = [];
                            return d.each(b.State.calls,
                                    function(t, e) {
                                        e && d.each(e[1],
                                            function(i, s) {
                                                var r = y === n ? "" : y;
                                                return r === !0 || e[2].queue === r || y === n && e[2].queue === !1 ? void d.each(f,
                                                    function(i, n) {
                                                        n === s && ((y === !0 || g.isString(y)) && (d.each(d.queue(n, g.isString(y) ? y : ""),
                                                            function(t, e) {
                                                                g.isFunction(e) && e(null, !0)
                                                            }), d.queue(n, g.isString(y) ? y : "", [])), "stop" === m ? (a(n) && a(n).tweensContainer && r !== !1 && d.each(a(n).tweensContainer,
                                                            function(t, e) {
                                                                e.endValue = e.currentValue
                                                            }), A.push(t)) : ("finish" === m || "finishAll" === m) && (e[2].duration = 1))
                                                    }) : !0
                                            })
                                    }),
                                "stop" === m && (d.each(A,
                                    function(t, e) {
                                        h(e, !0)
                                    }), T.promise && T.resolver(f)),
                                t();
                        default:
                            if (!d.isPlainObject(m) || g.isEmptyObject(m)) {
                                if (g.isString(m) && b.Redirects[m]) {
                                    var D = d.extend({},
                                            y),
                                        I = D.duration,
                                        M = D.delay || 0;
                                    return D.backwards === !0 && (f = d.extend(!0, [], f).reverse()),
                                        d.each(f,
                                            function(t, e) {
                                                parseFloat(D.stagger) ? D.delay = M + parseFloat(D.stagger) * t : g.isFunction(D.stagger) && (D.delay = M + D.stagger.call(e, t, C)),
                                                    D.drag && (D.duration = parseFloat(I) || (/^(callout|transition)/.test(m) ? 1e3 : v), D.duration = Math.max(D.duration * (D.backwards ? 1 - t / C : (t + 1) / C), .75 * D.duration, 200)),
                                                    b.Redirects[m].call(e, e, D || {},
                                                        t, C, f, T.promise ? T : n)
                                            }),
                                        t()
                                }
                                var N = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return T.promise ? T.rejecter(new Error(N)) : console.log(N),
                                    t()
                            }
                            P = "start"
                    }
                    var L = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        O = [];
                    d.each(f,
                        function(t, e) {
                            g.isNode(e) && s.call(e)
                        });
                    var j, D = d.extend({},
                        b.defaults, y);
                    if (D.loop = parseInt(D.loop), j = 2 * D.loop - 1, D.loop)
                        for (var R = 0; j > R; R++) {
                            var H = {
                                delay: D.delay,
                                progress: D.progress
                            };
                            R === j - 1 && (H.display = D.display, H.visibility = D.visibility, H.complete = D.complete),
                                x(f, "reverse", H)
                        }
                    return t()
                }
            };
            b = d.extend(x, b),
                b.animate = x;
            var C = e.requestAnimationFrame || f;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange",
                    function() {
                        i.hidden ? (C = function(t) {
                                return setTimeout(function() {
                                        t(!0)
                                    },
                                    16)
                            },
                            c()) : C = e.requestAnimationFrame || f
                    }),
                t.Velocity = b,
                t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = b.defaults),
                d.each(["Down", "Up"],
                    function(t, e) {
                        b.Redirects["slide" + e] = function(t, i, s, r, a, o) {
                            var l = d.extend({},
                                    i),
                                u = l.begin,
                                c = l.complete,
                                h = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                },
                                p = {};
                            l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"),
                                l.begin = function() {
                                    u && u.call(a, a);
                                    for (var i in h) {
                                        p[i] = t.style[i];
                                        var n = b.CSS.getPropertyValue(t, i);
                                        h[i] = "Down" === e ? [n, 0] : [0, n]
                                    }
                                    p.overflow = t.style.overflow,
                                        t.style.overflow = "hidden"
                                },
                                l.complete = function() {
                                    for (var e in p) t.style[e] = p[e];
                                    c && c.call(a, a),
                                        o && o.resolver(a)
                                },
                                b(t, h, l)
                        }
                    }),
                d.each(["In", "Out"],
                    function(t, e) {
                        b.Redirects["fade" + e] = function(t, i, s, r, a, o) {
                            var l = d.extend({},
                                    i),
                                u = {
                                    opacity: "In" === e ? 1 : 0
                                },
                                c = l.complete;
                            l.complete = s !== r - 1 ? l.begin = null : function() {
                                    c && c.call(a, a),
                                        o && o.resolver(a)
                                },
                                l.display === n && (l.display = "In" === e ? "auto" : "none"),
                                b(this, u, l)
                        }
                    }),
                b
        }(window.jQuery || window.Zepto || window, window, document)
    }),
    define("title", ["jquery", "velocity"],
        function(t) {
            var e, i = function() {
                    n(),
                        l(),
                        u(),
                        c()
                },
                n = function() {
                    t(".nav li").each(function(i, n) {
                        t(this).hover(function() {
                                return clearTimeout(e),
                                    t("#nav02-box ul").eq(i).is(":hidden") ? (s(), t("#nav02-box").is(":hidden") && t("#nav02-box").velocity("slideDown", {
                                        duration: 800,
                                        easing: "easeOutQuint"
                                    }), t("#nav02-box ul").eq(i).show(), r(t("#nav02-box ul").eq(i)), !1) : void 0
                            },
                            function() {
                                o()
                            })
                    })
                },
                s = function() {
                    t("#nav02-box ul").hide(),
                        t("#nav02-box ul .ml60").velocity("stop").css({
                            opacity: 0,
                            left: "0px"
                        })
                },
                r = function(t) {
                    for (var e = t.children(".ml60"), i = 0; i < e.length; i++) a(e, i)
                },
                a = function(t, e) {
                    t.eq(e).velocity({
                        opacity: 1,
                        left: "-60px"
                    }, {
                        duration: 550,
                        delay: 70 * e,
                        easing: "easeInOutQuad"
                    })
                },
                o = function() {
                    e = setTimeout(function() {
                            t("#nav02-box").velocity("slideUp", {
                                duration: 1,
                                easing: "easeOutQuint"
                            })
                        },
                        100)
                },
                l = function() {
                    t("#nav02-box").hover(function() {
                            clearTimeout(e)
                        },
                        function() {
                            o()
                        })
                },
                u = function() {
                    t(".ml60").hover(function() {
                            t(this).children("img").removeClass("img-opacity"),
                                t(this).children("a").removeClass("nav-opacity")
                        },
                        function() {
                            t(this).children("img").addClass("img-opacity"),
                                t(this).children("a").addClass("nav-opacity")
                        })
                },
                c = function() {
                    t(".ml60").click(function() {
                        _hmt.push(["_trackEvent", "é¦–é¡µB_å¯¼èˆªæ �", "ç‚¹å‡»", t(this).children("a").text()]),
                            "new" == t(this).attr("open") ? window.open(t(this).attr("link")) : window.location.href = t(this).attr("link")
                    })
                };
            return {
                initTitle: i
            }
        }),
    define("foot", ["jquery"],
        function(t) {
            var e = function() {
                    var t = i("proxyIframe", saasRootHttp + "/~webSite/product/getProxyIframe");
                    t.attachEvent ? t.attachEvent("onload",
                        function() {
                            s(),
                                n()
                        }) : t.onload = function() {
                        s(),
                            n()
                    }
                },
                i = function(t, e) {
                    var i = document.createElement("iframe");
                    return i.src = e,
                        i.id = t,
                        i.style.display = "none",
                        document.body.appendChild(i),
                        i
                },
                n = function() {
                    var e = document.getElementById("proxyIframe").contentWindow.$;
                    e.get(saasRootHttp + "/~nologin/footer/list/3",
                        function(e) {
                            t("#footer").html(e)
                        })
                },
                s = function() {
                    var e = saasRootHttp + "/~api/nologon/user/userInfo.json";
                    document.domain = "tingyun.com";
                    var i = document.getElementById("proxyIframe").contentWindow.$;
                    i.get(e,
                        function(e) {
                            if (200 == e.status) {
                                var i = e.data.userInfoBean.name;
                                "" == t.trim(i) && (i = e.data.userInfoBean.mobile, "" == t.trim(i) && (i = e.data.userInfoBean.email)),
                                    t(".orange").hide(),
                                    t(".orange:last").after(t('<a class="orange" href="https://saas.tingyun.com/logout" >').text("é€€å‡º")),
                                    t(".orange:last").after(t('<a class="orange">').text(i))
                            }
                        })
                };
            return {
                initFooterIframe: e
            }
        }),
    define("banner", ["jquery", "velocity"],
        function(t) {
            var e = 0,
                i = function() {
                    t(".dot-left").click(function() {
                            n(t(this), 0)
                        }),
                        t(".dot-right").click(function() {
                            n(t(this), 1)
                        }),
                        setInterval(function() {
                                e++,
                                s()
                            },
                            8e3)
                },
                n = function(t, i) {
                    t.hasClass("current") || (e = i, s())
                },
                s = function() {
                    t(".banner-spot span").removeClass("current"),
                        t(".banner-spot span").eq(e % 2).addClass("current"),
                        t(".banner-tab").children("div").eq((e - 1) % 2).css("z-index", 0),
                        t(".banner-tab").children("div").eq(e % 2).css({
                            "z-index": 1,
                            opacity: 0
                        }).velocity("stop").velocity("fadeIn", {
                            duration: 1e3
                        })
                };
            return {
                initBanner: i
            }
        }),
    define("popup", ["jquery"],
        function(t) {
            var e = function() {
                    t(".ty-download-wrap").center(),
                        i(),
                        n()
                },
                i = function() {
                    t(".fw-download-wrap").on("click",
                        function() {
                            t(".layer-front").show(),
                                t(".layer-front-shade").show(),
                                t(".ty-download-wrap").center().show()
                        })
                },
                n = function() {
                    t(".ty-download-btn").on("click",
                        function() {
                            t(".layer-front").hide(),
                                t(".layer-front-shade").hide(),
                                t(".ty-download-wrap").hide()
                        })
                };
            return t.fn.center = function(e) {
                var i = t.extend({
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        zIndex: 200009,
                        relative: !0
                    },
                    e || {});
                return this.each(function() {
                    var e = t(this);
                    "50%" == i.top && (i.marginTop = -e.outerHeight() / 2),
                        "50%" == i.left && (i.marginLeft = -e.outerWidth() / 2),
                        i.relative && !e.parent().is("body") && "static" == e.parent().css("position") && e.parent().css("position", "relative"),
                        delete i.relative,
                        "fixed" == i.position && "6.0" == t.browser.version && (i.marginTop += t(window).scrollTop(), i.position = "absolute", t(window).scroll(function() {
                            e.stop().animate({
                                marginTop: t(window).scrollTop() - e.outerHeight() / 2
                            })
                        })),
                        e.css(i)
                })
            }, {
                initPopup: e
            }
        }),
    define("kf5", [],
        function() {
            var t = function() {
                var t = navigator.userAgent,
                    e = t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1;
                if (!e) return window.KF5SupportBoxAPI.open(), -1;
                var i = new RegExp("MSIE (\\d+\\.\\d+);");
                i.test(t);
                var n = parseFloat(RegExp.$1);
                return 8 == n ? (alert("ä¸�æ”¯æŒ�IE8,è¯·åˆ‡æ�¢æ›´é«˜ç‰ˆæœ¬"), 8) : void window.KF5SupportBoxAPI.open()
            };
            return {
                IEVersion: t
            }
        }),
    require.config({
        paths: {
            jquery: "jquery",
            easing: "easing",
            agent: "agent",
            img: "img",
            "char": "char",
            jwplayer: "jwplayer",
            scroll: "scroll",
            animateNumber: "animateNumber",
            "jquery-ui": "jquery-ui",
            video: "video",
            logo: "logo",
            carrousel: "carrousel",
            title: "title",
            foot: "foot",
            velocity: "velocity",
            banner: "banner",
            popup: "popup",
            kf5: "kf5"
        },
        shim: {
            easing: {
                exports: "$",
                deps: ["jquery"]
            },
            jwplayer: {
                exports: "jwplayer"
            },
            animateNumber: {
                exports: "$",
                deps: ["jquery"]
            },
            "jquery-ui": {
                exports: "$",
                deps: ["jquery"]
            },
            carrousel: {
                exports: "carrousel",
                deps: ["jquery"]
            },
            velocity: {
                exports: "$",
                deps: ["jquery"]
            }
        }
    }),
    require(["agent", "img", "char", "scroll", "video", "logo", "carrousel", "title", "foot", "banner", "popup", "kf5"],
        function(t, e, i, n, s, r, a, o, l, u, c, h) {
            document.domain = "tingyun.com";
            var d = t.getFlag();
            i.initChar(d),
                e.initImg(d),
                n.initScroll(d),
                document.body.scrollTop += 1,
                s.initVideo(d),
                r.initLogo(),
                o.initTitle(),
                c.initPopup(),
                l.initFooterIframe(),
                $(".fw-wrap>a").children(".fw-btn").each(function(t, e) {
                    $(this).mouseover(function() {
                        $(this).addClass("fw-btn-current").siblings().velocity("finish").velocity({
                                left: "-113px"
                            },
                            300)
                    }).mouseout(function() {
                        $(this).removeClass("fw-btn-current"),
                            setTimeout(function() {
                                    $(".fw-wrap>a").children(".fw-btn").eq(t).hasClass("fw-btn-current") || $(".fw-wrap>a").children(".fw-btn").eq(t).siblings().hasClass("fw-txt-current") || $(".fw-wrap>a").children(".fw-btn").eq(t).siblings().velocity("finish").velocity({
                                            left: "0px"
                                        },
                                        300)
                                },
                                100)
                    })
                }),
                $(".fw-wrap>a").children(".fw-txt").each(function(t, e) {
                    $(this).mouseover(function() {
                        $(this).addClass("fw-txt-current")
                    }).mouseout(function() {
                        $(this).removeClass("fw-txt-current"),
                            setTimeout(function() {
                                    $(".fw-wrap>a").children(".fw-txt").eq(t).hasClass("fw-txt-current") || $(".fw-wrap>a").children(".fw-txt").eq(t).siblings().hasClass("fw-btn-current") || $(".fw-wrap>a").children(".fw-txt").eq(t).velocity("finish").velocity({
                                            left: "0px"
                                        },
                                        300)
                                },
                                100)
                    })
                }),
                $(".video-prebtn").hover(function() {
                        var t = $(this).children("img").attr("src"),
                            e = t.lastIndexOf("/"),
                            i = t.substring(0, e);
                        $(this).children("img").attr("src", i + "/h-add-hover2.png")
                    },
                    function() {
                        var t = $(this).children("img").attr("src"),
                            e = t.lastIndexOf("/"),
                            i = t.substring(0, e);
                        $(this).children("img").attr("src", i + "/h-add-normal2.png")
                    }),
                $(".video-nextbtn").hover(function() {
                        var t = $(this).children("img").attr("src"),
                            e = t.lastIndexOf("/"),
                            i = t.substring(0, e);
                        $(this).children("img").attr("src", i + "/h-add-hover.png")
                    },
                    function() {
                        var t = $(this).children("img").attr("src"),
                            e = t.lastIndexOf("/"),
                            i = t.substring(0, e);
                        $(this).children("img").attr("src", i + "/h-add-normal.png")
                    }),
                d ? ($("#csssupport").hide(), $("#cssnotsupport").show(), $(".ty-section08-btnl").hide(), $(".ty-section08-btnr").hide()) : ($("#csssupport").show(), $("#cssnotsupport").hide(), $("#dg-container").carrousel({
                    current: 0,
                    autoplay: !1,
                    interval: 3e3
                }), $(".ty-section08-btnl").click(function() {
                    $("#dg-container").carrousel("prev")
                }), $(".ty-section08-btnr").click(function() {
                    $("#dg-container").carrousel("next")
                })),
                $("#scrollDiv1").Scroll({
                    line: 1,
                    speed: 500,
                    timer: 6e3
                }),
                $(".btn-online").click(function() {
                    h.IEVersion()
                })
        }),
    define("main_homepage",
        function() {});