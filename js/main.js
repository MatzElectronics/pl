(() => {
    var So = Object.defineProperty;
    var yo = (t, e) => () => (t && (e = t((t = 0))), e);
    var Ln = (t, e) => {
        for (var n in e) So(t, n, { get: e[n], enumerable: !0 });
    };
    var Io,
        a = yo(() => {
            Io = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
            Io.SENTRY_RELEASE = { id: "498140448361325178ad388b55156336f27e1163" };
        });
    a();
    a();
    (function () {
        try {
            var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                e = new Error().stack;
            e &&
                ((t._sentryDebugIds = t._sentryDebugIds || {}),
                (t._sentryDebugIds[e] = "847bda4c-272e-4117-8e4a-4cbb14c6d325"),
                (t._sentryDebugIdIdentifier = "sentry-dbid-847bda4c-272e-4117-8e4a-4cbb14c6d325"));
        } catch {}
    })();
    a();
    a();
    function To(t, e, n) {
        if (!t) {
            console.error("Empty tracking code for Piwik Pro.");
            return;
        }
        if (!e) {
            console.error("Empty tracking URL for Piwik Pro.");
            return;
        }
        document ||
            console.error(
                "Was not possible to access Document interface. Make sure this module is running on a Browser w/ access do Document interface."
            );
        var r = document.createElement("script");
        (r.async = !1),
            n && r.setAttribute("nonce", n),
            (r.text =
                `(function(window, document, dataLayerName, id) {
window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString();f="; SameSite=Strict"}document.cookie=a+"="+b+d+f+"; path=/"}
var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);
var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";
tags.async=!0,tags.src="` +
                e +
                `/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
!function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
})(window, document, 'dataLayer', '` +
                t +
                "')");
        var o = document.getElementsByTagName("body")[0];
        o.appendChild(r);
    }
    var Qi = (typeof process < "u" && !1) || (typeof window < "u" && window.IS_DEBUG) || !1,
        bo = { init: To },
        An;
    (function (t) {
        (t.PAGE_VIEW = "trackPageView"),
            (t.CUSTOM_EVENT = "trackEvent"),
            (t.GOAL = "trackGoal"),
            (t.SEARCH = "trackSiteSearch"),
            (t.ECOMMERCE_ADD_TO_CART = "ecommerceAddToCart"),
            (t.ADD_ECOMMERCE_ITEM = "addEcommerceItem"),
            (t.REMOVE_ECOMMERCE_ITEM = "removeEcommerceItem"),
            (t.ECOMMERCE_REMOVE_FROM_CART = "ecommerceRemoveFromCart"),
            (t.ECOMMERCE_PRODUCT_DETAIL_VIEW = "ecommerceProductDetailView"),
            (t.ECOMMERCE_CART_UPDATE = "ecommerceCartUpdate"),
            (t.TRACK_ECOMMERCE_CART_UPDATE = "trackEcommerceCartUpdate"),
            (t.TRACK_ECOMMERCE_ORDER = "trackEcommerceOrder"),
            (t.ECOMMERCE_ORDER = "ecommerceOrder"),
            (t.SET_ECOMMERCE_VIEW = "setEcommerceView"),
            (t.CLEAR_ECOMMERCE_CART = "clearEcommerceCart"),
            (t.SET_CUSTOM_VARIABLE = "setCustomVariable"),
            (t.DELETE_CUSTOM_VARIABLE = "deleteCustomVariable"),
            (t.STORE_CUSTOM_VARIABLES_IN_COOKIE = "storeCustomVariablesInCookie"),
            (t.SET_CUSTOM_DIMENSION_VALUE = "setCustomDimensionValue"),
            (t.DELETE_CUSTOM_DIMENSION = "deleteCustomDimension"),
            (t.SET_CUSTOM_DIMENSION = "setCustomDimension"),
            (t.ALL_CONTENT_IMPRESSIONS = "trackAllContentImpressions"),
            (t.VISIBLE_CONTENT_IMPRESSIONS = "trackVisibleContentImpressions"),
            (t.CONTENT_IMPRESSIONS_WITH_NODE = "trackContentImpressionsWithinNode"),
            (t.CONTENT_IMPRESSION = "trackContentImpression"),
            (t.LOG_ALL_CONTENT_BLOCKS_ON_PAGE = "logAllContentBlocksOnPage"),
            (t.CONTENT_INTERACTION_NODE = "trackContentInteractionNode"),
            (t.CONTENT_INTERACTION = "trackContentInteraction"),
            (t.LINK = "trackLink"),
            (t.ENABLE_LINK_TRACKING = "enableLinkTracking"),
            (t.SET_IGNORE_CLASSES = "setIgnoreClasses"),
            (t.SET_LINK_CLASSES = "setLinkClasses"),
            (t.SET_DOWNLOAD_CLASSES = "setDownloadClasses"),
            (t.SET_DOWNLOAD_EXTENSIONS = "setDownloadExtensions"),
            (t.ADD_DOWNLOAD_EXTENSIONS = "addDownloadExtensions"),
            (t.REMOVE_DOWNLOAD_EXTENSIONS = "removeDownloadExtensions"),
            (t.SET_LINK_TRACKING_TIMER = "setLinkTrackingTimer"),
            (t.SET_USER_ID = "setUserId"),
            (t.RESET_USER_ID = "resetUserId"),
            (t.SET_USER_IS_ANONYMOUS = "setUserIsAnonymous"),
            (t.DEANONYMIZE_USER = "deanonymizeUser"),
            (t.SET_SESSION_ID_STRICT_PRIVACY_MODE = "setSessionIdStrictPrivacyMode"),
            (t.DISABLE_COOKIES = "disableCookies"),
            (t.ENABLE_COOKIES = "enableCookies"),
            (t.DELETE_COOKIES = "deleteCookies"),
            (t.SET_COOKIE_NAME_PREFIX = "setCookieNamePrefix"),
            (t.SET_COOKIE_DOMAIN = "setCookieDomain"),
            (t.SET_COOKIE_PATH = "setCookiePath"),
            (t.SET_SECURE_COOKIE = "setSecureCookie"),
            (t.SET_VISITOR_COOKIE_TIMEOUT = "setVisitorCookieTimeout"),
            (t.SET_SESSION_COOKIE_TIMEOUT = "setSessionCookieTimeout"),
            (t.SET_VISITOR_ID_COOKIE = "setVisitorIdCookie"),
            (t.SET_DOCUMENT_TITLE = "setDocumentTitle"),
            (t.SET_DOMAINS = "setDomains"),
            (t.SET_CUSTOM_URL = "setCustomUrl"),
            (t.SET_REFERRER_URL = "setReferrerUrl"),
            (t.SET_API_URL = "setApiUrl"),
            (t.GET_PIWIK_URL = "getPiwikUrl"),
            (t.GET_CURRENT_URL = "getCurrentUrl"),
            (t.DISCARD_HASH_TAG = "discardHashTag"),
            (t.SET_GENERATION_TIME_MS = "setGenerationTimeMs"),
            (t.APPEND_TO_TRACKING_URL = "appendToTrackingUrl"),
            (t.SET_DO_NOT_TRACK = "setDoNotTrack"),
            (t.KILL_FRAME = "killFrame"),
            (t.REDIRECT_FILE = "redirectFile"),
            (t.SET_CAMPAIGN_NAME_KEY = "setCampaignNameKey"),
            (t.SET_CAMPAIGN_KEYWORD_KEY = "setCampaignKeywordKey"),
            (t.PING = "ping"),
            (t.ADD_LISTENER = "addListener"),
            (t.SET_REQUEST_METHOD = "setRequestMethod"),
            (t.SET_CUSTOM_REQUEST_PROCESSING = "setCustomRequestProcessing"),
            (t.SET_REQUEST_CONTENT_TYPE = "setRequestContentType"),
            (t.ENABLE_JS_ERROR_TRACKING = "enableJSErrorTracking"),
            (t.ERROR = "trackError"),
            (t.SET_TRACKING_SOURCE = "setTrackingSource");
    })(An || (An = {}));
    var Oo = { initialize: bo.init },
        Pn = Oo;
    a();
    a();
    a();
    a();
    a();
    var Un = Object.prototype.toString;
    function Ie(t) {
        switch (Un.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return j(t, Error);
        }
    }
    function pe(t, e) {
        return Un.call(t) === `[object ${e}]`;
    }
    function fe(t) {
        return pe(t, "ErrorEvent");
    }
    function Be(t) {
        return pe(t, "DOMError");
    }
    function yt(t) {
        return pe(t, "DOMException");
    }
    function D(t) {
        return pe(t, "String");
    }
    function le(t) {
        return (
            typeof t == "object" && t !== null && "__sentry_template_string__" in t && "__sentry_template_values__" in t
        );
    }
    function oe(t) {
        return t === null || le(t) || (typeof t != "object" && typeof t != "function");
    }
    function U(t) {
        return pe(t, "Object");
    }
    function se(t) {
        return typeof Event < "u" && j(t, Event);
    }
    function It(t) {
        return typeof Element < "u" && j(t, Element);
    }
    function Tt(t) {
        return pe(t, "RegExp");
    }
    function $(t) {
        return !!(t && t.then && typeof t.then == "function");
    }
    function bt(t) {
        return U(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
    }
    function Ot(t) {
        return typeof t == "number" && t !== t;
    }
    function j(t, e) {
        try {
            return t instanceof e;
        } catch {
            return !1;
        }
    }
    function Te(t) {
        return !!(typeof t == "object" && t !== null && (t.__isVue || t._isVue));
    }
    a();
    function W(t, e = 0) {
        return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
    }
    function He(t, e) {
        if (!Array.isArray(t)) return "";
        let n = [];
        for (let r = 0; r < t.length; r++) {
            let o = t[r];
            try {
                Te(o) ? n.push("[VueViewModel]") : n.push(String(o));
            } catch {
                n.push("[value cannot be serialized]");
            }
        }
        return n.join(e);
    }
    function Fn(t, e, n = !1) {
        return D(t) ? (Tt(e) ? e.test(t) : D(e) ? (n ? t === e : t.includes(e)) : !1) : !1;
    }
    function de(t, e = [], n = !1) {
        return e.some((r) => Fn(t, r, n));
    }
    function be(t, e, n = 250, r, o, s, i) {
        if (!s.exception || !s.exception.values || !i || !j(i.originalException, Error)) return;
        let c = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
        c && (s.exception.values = xo(xt(t, e, o, i.originalException, r, s.exception.values, c, 0), n));
    }
    function xt(t, e, n, r, o, s, i, c) {
        if (s.length >= n + 1) return s;
        let u = [...s];
        if (j(r[o], Error)) {
            Bn(i, c);
            let p = t(e, r[o]),
                f = u.length;
            Hn(p, o, f, c), (u = xt(t, e, n, r[o], o, [p, ...u], p, f));
        }
        return (
            Array.isArray(r.errors) &&
                r.errors.forEach((p, f) => {
                    if (j(p, Error)) {
                        Bn(i, c);
                        let l = t(e, p),
                            E = u.length;
                        Hn(l, `errors[${f}]`, E, c), (u = xt(t, e, n, p, o, [l, ...u], l, E));
                    }
                }),
            u
        );
    }
    function Bn(t, e) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
            (t.mechanism = {
                ...t.mechanism,
                ...(t.type === "AggregateError" && { is_exception_group: !0 }),
                exception_id: e,
            });
    }
    function Hn(t, e, n, r) {
        (t.mechanism = t.mechanism || { type: "generic", handled: !0 }),
            (t.mechanism = { ...t.mechanism, type: "chained", source: e, exception_id: n, parent_id: r });
    }
    function xo(t, e) {
        return t.map((n) => (n.value && (n.value = W(n.value, e)), n));
    }
    a();
    a();
    function Ge(t) {
        return t && t.Math == Math ? t : void 0;
    }
    var g =
        (typeof globalThis == "object" && Ge(globalThis)) ||
        (typeof window == "object" && Ge(window)) ||
        (typeof self == "object" && Ge(self)) ||
        (typeof global == "object" && Ge(global)) ||
        (function () {
            return this;
        })() ||
        {};
    function ie() {
        return g;
    }
    function Oe(t, e, n) {
        let r = n || g,
            o = (r.__SENTRY__ = r.__SENTRY__ || {});
        return o[t] || (o[t] = e());
    }
    var vt = ie(),
        vo = 80;
    function xe(t, e = {}) {
        if (!t) return "<unknown>";
        try {
            let n = t,
                r = 5,
                o = [],
                s = 0,
                i = 0,
                c = " > ",
                u = c.length,
                p,
                f = Array.isArray(e) ? e : e.keyAttrs,
                l = (!Array.isArray(e) && e.maxStringLength) || vo;
            for (; n && s++ < r && ((p = Co(n, f)), !(p === "html" || (s > 1 && i + o.length * u + p.length >= l))); )
                o.push(p), (i += p.length), (n = n.parentNode);
            return o.reverse().join(c);
        } catch {
            return "<unknown>";
        }
    }
    function Co(t, e) {
        let n = t,
            r = [],
            o,
            s,
            i,
            c,
            u;
        if (!n || !n.tagName) return "";
        if (vt.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent)
            return n.dataset.sentryComponent;
        r.push(n.tagName.toLowerCase());
        let p = e && e.length ? e.filter((l) => n.getAttribute(l)).map((l) => [l, n.getAttribute(l)]) : null;
        if (p && p.length)
            p.forEach((l) => {
                r.push(`[${l[0]}="${l[1]}"]`);
            });
        else if ((n.id && r.push(`#${n.id}`), (o = n.className), o && D(o)))
            for (s = o.split(/\s+/), u = 0; u < s.length; u++) r.push(`.${s[u]}`);
        let f = ["aria-label", "type", "name", "title", "alt"];
        for (u = 0; u < f.length; u++) (i = f[u]), (c = n.getAttribute(i)), c && r.push(`[${i}="${c}"]`);
        return r.join("");
    }
    function Ct() {
        try {
            return vt.document.location.href;
        } catch {
            return "";
        }
    }
    function Dt(t) {
        if (!vt.HTMLElement) return null;
        let e = t,
            n = 5;
        for (let r = 0; r < n; r++) {
            if (!e) return null;
            if (e instanceof HTMLElement && e.dataset.sentryComponent) return e.dataset.sentryComponent;
            e = e.parentNode;
        }
        return null;
    }
    a();
    a();
    var q = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
    a();
    var Do = "Sentry Logger ",
        ve = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        me = {};
    function Q(t) {
        if (!("console" in g)) return t();
        let e = g.console,
            n = {},
            r = Object.keys(me);
        r.forEach((o) => {
            let s = me[o];
            (n[o] = e[o]), (e[o] = s);
        });
        try {
            return t();
        } finally {
            r.forEach((o) => {
                e[o] = n[o];
            });
        }
    }
    function ko() {
        let t = !1,
            e = {
                enable: () => {
                    t = !0;
                },
                disable: () => {
                    t = !1;
                },
                isEnabled: () => t,
            };
        return (
            q
                ? ve.forEach((n) => {
                      e[n] = (...r) => {
                          t &&
                              Q(() => {
                                  g.console[n](`${Do}[${n}]:`, ...r);
                              });
                      };
                  })
                : ve.forEach((n) => {
                      e[n] = () => {};
                  }),
            e
        );
    }
    var d = ko();
    var Ro = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function No(t) {
        return t === "http" || t === "https";
    }
    function L(t, e = !1) {
        let { host: n, path: r, pass: o, port: s, projectId: i, protocol: c, publicKey: u } = t;
        return `${c}://${u}${e && o ? `:${o}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${i}`;
    }
    function Gn(t) {
        let e = Ro.exec(t);
        if (!e) {
            Q(() => {
                console.error(`Invalid Sentry Dsn: ${t}`);
            });
            return;
        }
        let [n, r, o = "", s, i = "", c] = e.slice(1),
            u = "",
            p = c,
            f = p.split("/");
        if ((f.length > 1 && ((u = f.slice(0, -1).join("/")), (p = f.pop())), p)) {
            let l = p.match(/^\d+/);
            l && (p = l[0]);
        }
        return $n({ host: s, pass: o, path: u, projectId: p, port: i, protocol: n, publicKey: r });
    }
    function $n(t) {
        return {
            protocol: t.protocol,
            publicKey: t.publicKey || "",
            pass: t.pass || "",
            host: t.host,
            port: t.port || "",
            path: t.path || "",
            projectId: t.projectId,
        };
    }
    function wo(t) {
        if (!q) return !0;
        let { port: e, projectId: n, protocol: r } = t;
        return ["protocol", "publicKey", "host", "projectId"].find((i) =>
            t[i] ? !1 : (d.error(`Invalid Sentry Dsn: ${i} missing`), !0)
        )
            ? !1
            : n.match(/^\d+$/)
            ? No(r)
                ? e && isNaN(parseInt(e, 10))
                    ? (d.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1)
                    : !0
                : (d.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
            : (d.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
    }
    function $e(t) {
        let e = typeof t == "string" ? Gn(t) : $n(t);
        if (!(!e || !wo(e))) return e;
    }
    a();
    var x = class extends Error {
        constructor(e, n = "warn") {
            super(e),
                (this.message = e),
                (this.name = new.target.prototype.constructor.name),
                Object.setPrototypeOf(this, new.target.prototype),
                (this.logLevel = n);
        }
    };
    a();
    a();
    function S(t, e, n) {
        if (!(e in t)) return;
        let r = t[e],
            o = n(r);
        typeof o == "function" && je(o, r), (t[e] = o);
    }
    function Y(t, e, n) {
        try {
            Object.defineProperty(t, e, { value: n, writable: !0, configurable: !0 });
        } catch {
            q && d.log(`Failed to add non-enumerable property "${e}" to object`, t);
        }
    }
    function je(t, e) {
        try {
            let n = e.prototype || {};
            (t.prototype = e.prototype = n), Y(t, "__sentry_original__", e);
        } catch {}
    }
    function ae(t) {
        return t.__sentry_original__;
    }
    function Rt(t) {
        return Object.keys(t)
            .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)
            .join("&");
    }
    function We(t) {
        if (Ie(t)) return { message: t.message, name: t.name, stack: t.stack, ...Wn(t) };
        if (se(t)) {
            let e = { type: t.type, target: jn(t.target), currentTarget: jn(t.currentTarget), ...Wn(t) };
            return typeof CustomEvent < "u" && j(t, CustomEvent) && (e.detail = t.detail), e;
        } else return t;
    }
    function jn(t) {
        try {
            return It(t) ? xe(t) : Object.prototype.toString.call(t);
        } catch {
            return "<unknown>";
        }
    }
    function Wn(t) {
        if (typeof t == "object" && t !== null) {
            let e = {};
            for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        } else return {};
    }
    function Nt(t, e = 40) {
        let n = Object.keys(We(t));
        if ((n.sort(), !n.length)) return "[object has no keys]";
        if (n[0].length >= e) return W(n[0], e);
        for (let r = n.length; r > 0; r--) {
            let o = n.slice(0, r).join(", ");
            if (!(o.length > e)) return r === n.length ? o : W(o, e);
        }
        return "";
    }
    function v(t) {
        return kt(t, new Map());
    }
    function kt(t, e) {
        if (Mo(t)) {
            let n = e.get(t);
            if (n !== void 0) return n;
            let r = {};
            e.set(t, r);
            for (let o of Object.keys(t)) typeof t[o] < "u" && (r[o] = kt(t[o], e));
            return r;
        }
        if (Array.isArray(t)) {
            let n = e.get(t);
            if (n !== void 0) return n;
            let r = [];
            return (
                e.set(t, r),
                t.forEach((o) => {
                    r.push(kt(o, e));
                }),
                r
            );
        }
        return t;
    }
    function Mo(t) {
        if (!U(t)) return !1;
        try {
            let e = Object.getPrototypeOf(t).constructor.name;
            return !e || e === "Object";
        } catch {
            return !0;
        }
    }
    a();
    a();
    var Yn = 50,
        qn = /\(error: (.*)\)/,
        zn = /captureMessage|captureException/;
    function qe(...t) {
        let e = t.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
        return (n, r = 0) => {
            let o = [],
                s = n.split(`
`);
            for (let i = r; i < s.length; i++) {
                let c = s[i];
                if (c.length > 1024) continue;
                let u = qn.test(c) ? c.replace(qn, "$1") : c;
                if (!u.match(/\S*Error: /)) {
                    for (let p of e) {
                        let f = p(u);
                        if (f) {
                            o.push(f);
                            break;
                        }
                    }
                    if (o.length >= Yn) break;
                }
            }
            return Xn(o);
        };
    }
    function Mt(t) {
        return Array.isArray(t) ? qe(...t) : t;
    }
    function Xn(t) {
        if (!t.length) return [];
        let e = Array.from(t);
        return (
            /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop(),
            e.reverse(),
            zn.test(e[e.length - 1].function || "") && (e.pop(), zn.test(e[e.length - 1].function || "") && e.pop()),
            e
                .slice(0, Yn)
                .map((n) => ({ ...n, filename: n.filename || e[e.length - 1].filename, function: n.function || "?" }))
        );
    }
    var wt = "<anonymous>";
    function A(t) {
        try {
            return !t || typeof t != "function" ? wt : t.name || wt;
        } catch {
            return wt;
        }
    }
    var ze = {},
        Jn = {};
    function k(t, e) {
        (ze[t] = ze[t] || []), ze[t].push(e);
    }
    function R(t, e) {
        Jn[t] || (e(), (Jn[t] = !0));
    }
    function b(t, e) {
        let n = t && ze[t];
        if (n)
            for (let r of n)
                try {
                    r(e);
                } catch (o) {
                    q &&
                        d.error(
                            `Error while triggering instrumentation handler.
Type: ${t}
Name: ${A(r)}
Error:`,
                            o
                        );
                }
    }
    function Lt(t) {
        let e = "console";
        k(e, t), R(e, Lo);
    }
    function Lo() {
        "console" in g &&
            ve.forEach(function (t) {
                t in g.console &&
                    S(g.console, t, function (e) {
                        return (
                            (me[t] = e),
                            function (...n) {
                                b("console", { args: n, level: t });
                                let o = me[t];
                                o && o.apply(g.console, n);
                            }
                        );
                    });
            });
    }
    a();
    a();
    function I() {
        let t = g,
            e = t.crypto || t.msCrypto,
            n = () => Math.random() * 16;
        try {
            if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
            e &&
                e.getRandomValues &&
                (n = () => {
                    let r = new Uint8Array(1);
                    return e.getRandomValues(r), r[0];
                });
        } catch {}
        return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) => (r ^ ((n() & 15) >> (r / 4))).toString(16));
    }
    function Vn(t) {
        return t.exception && t.exception.values ? t.exception.values[0] : void 0;
    }
    function F(t) {
        let { message: e, event_id: n } = t;
        if (e) return e;
        let r = Vn(t);
        return r
            ? r.type && r.value
                ? `${r.type}: ${r.value}`
                : r.type || r.value || n || "<unknown>"
            : n || "<unknown>";
    }
    function ge(t, e, n) {
        let r = (t.exception = t.exception || {}),
            o = (r.values = r.values || []),
            s = (o[0] = o[0] || {});
        s.value || (s.value = e || ""), s.type || (s.type = n || "Error");
    }
    function X(t, e) {
        let n = Vn(t);
        if (!n) return;
        let r = { type: "generic", handled: !0 },
            o = n.mechanism;
        if (((n.mechanism = { ...r, ...o, ...e }), e && "data" in e)) {
            let s = { ...(o && o.data), ...e.data };
            n.mechanism.data = s;
        }
    }
    function Ye(t) {
        if (t && t.__sentry_captured__) return !0;
        try {
            Y(t, "__sentry_captured__", !0);
        } catch {}
        return !1;
    }
    function Ce(t) {
        return Array.isArray(t) ? t : [t];
    }
    var he = g,
        Ao = 1e3,
        Kn,
        At,
        Pt;
    function Ut(t) {
        let e = "dom";
        k(e, t), R(e, Po);
    }
    function Po() {
        if (!he.document) return;
        let t = b.bind(null, "dom"),
            e = Zn(t, !0);
        he.document.addEventListener("click", e, !1),
            he.document.addEventListener("keypress", e, !1),
            ["EventTarget", "Node"].forEach((n) => {
                let r = he[n] && he[n].prototype;
                !r ||
                    !r.hasOwnProperty ||
                    !r.hasOwnProperty("addEventListener") ||
                    (S(r, "addEventListener", function (o) {
                        return function (s, i, c) {
                            if (s === "click" || s == "keypress")
                                try {
                                    let u = this,
                                        p = (u.__sentry_instrumentation_handlers__ =
                                            u.__sentry_instrumentation_handlers__ || {}),
                                        f = (p[s] = p[s] || { refCount: 0 });
                                    if (!f.handler) {
                                        let l = Zn(t);
                                        (f.handler = l), o.call(this, s, l, c);
                                    }
                                    f.refCount++;
                                } catch {}
                            return o.call(this, s, i, c);
                        };
                    }),
                    S(r, "removeEventListener", function (o) {
                        return function (s, i, c) {
                            if (s === "click" || s == "keypress")
                                try {
                                    let u = this,
                                        p = u.__sentry_instrumentation_handlers__ || {},
                                        f = p[s];
                                    f &&
                                        (f.refCount--,
                                        f.refCount <= 0 &&
                                            (o.call(this, s, f.handler, c), (f.handler = void 0), delete p[s]),
                                        Object.keys(p).length === 0 && delete u.__sentry_instrumentation_handlers__);
                                } catch {}
                            return o.call(this, s, i, c);
                        };
                    }));
            });
    }
    function Uo(t) {
        if (t.type !== At) return !1;
        try {
            if (!t.target || t.target._sentryId !== Pt) return !1;
        } catch {}
        return !0;
    }
    function Fo(t, e) {
        return t !== "keypress"
            ? !1
            : !e || !e.tagName
            ? !0
            : !(e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable);
    }
    function Zn(t, e = !1) {
        return (n) => {
            if (!n || n._sentryCaptured) return;
            let r = Bo(n);
            if (Fo(n.type, r)) return;
            Y(n, "_sentryCaptured", !0), r && !r._sentryId && Y(r, "_sentryId", I());
            let o = n.type === "keypress" ? "input" : n.type;
            Uo(n) || (t({ event: n, name: o, global: e }), (At = n.type), (Pt = r ? r._sentryId : void 0)),
                clearTimeout(Kn),
                (Kn = he.setTimeout(() => {
                    (Pt = void 0), (At = void 0);
                }, Ao));
        };
    }
    function Bo(t) {
        try {
            return t.target;
        } catch {
            return null;
        }
    }
    a();
    a();
    var Ft = ie();
    function Xe() {
        if (!("fetch" in Ft)) return !1;
        try {
            return new Headers(), new Request("http://www.example.com"), new Response(), !0;
        } catch {
            return !1;
        }
    }
    function De(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString());
    }
    function Bt() {
        if (typeof EdgeRuntime == "string") return !0;
        if (!Xe()) return !1;
        if (De(Ft.fetch)) return !0;
        let t = !1,
            e = Ft.document;
        if (e && typeof e.createElement == "function")
            try {
                let n = e.createElement("iframe");
                (n.hidden = !0),
                    e.head.appendChild(n),
                    n.contentWindow && n.contentWindow.fetch && (t = De(n.contentWindow.fetch)),
                    e.head.removeChild(n);
            } catch (n) {
                q && d.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
            }
        return t;
    }
    function Gt(t) {
        let e = "fetch";
        k(e, t), R(e, Ho);
    }
    function Ho() {
        Bt() &&
            S(g, "fetch", function (t) {
                return function (...e) {
                    let { method: n, url: r } = Go(e),
                        o = { args: e, fetchData: { method: n, url: r }, startTimestamp: Date.now() };
                    return (
                        b("fetch", { ...o }),
                        t.apply(g, e).then(
                            (s) => {
                                let i = { ...o, endTimestamp: Date.now(), response: s };
                                return b("fetch", i), s;
                            },
                            (s) => {
                                let i = { ...o, endTimestamp: Date.now(), error: s };
                                throw (b("fetch", i), s);
                            }
                        )
                    );
                };
            });
    }
    function Ht(t, e) {
        return !!t && typeof t == "object" && !!t[e];
    }
    function Qn(t) {
        return typeof t == "string" ? t : t ? (Ht(t, "url") ? t.url : t.toString ? t.toString() : "") : "";
    }
    function Go(t) {
        if (t.length === 0) return { method: "GET", url: "" };
        if (t.length === 2) {
            let [n, r] = t;
            return { url: Qn(n), method: Ht(r, "method") ? String(r.method).toUpperCase() : "GET" };
        }
        let e = t[0];
        return { url: Qn(e), method: Ht(e, "method") ? String(e.method).toUpperCase() : "GET" };
    }
    a();
    var Je = null;
    function $t(t) {
        let e = "error";
        k(e, t), R(e, $o);
    }
    function $o() {
        (Je = g.onerror),
            (g.onerror = function (t, e, n, r, o) {
                return (
                    b("error", { column: r, error: o, line: n, msg: t, url: e }),
                    Je && !Je.__SENTRY_LOADER__ ? Je.apply(this, arguments) : !1
                );
            }),
            (g.onerror.__SENTRY_INSTRUMENTED__ = !0);
    }
    a();
    var Ve = null;
    function jt(t) {
        let e = "unhandledrejection";
        k(e, t), R(e, jo);
    }
    function jo() {
        (Ve = g.onunhandledrejection),
            (g.onunhandledrejection = function (t) {
                return b("unhandledrejection", t), Ve && !Ve.__SENTRY_LOADER__ ? Ve.apply(this, arguments) : !0;
            }),
            (g.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
    }
    a();
    a();
    var Ke = ie();
    function er() {
        let t = Ke.chrome,
            e = t && t.app && t.app.runtime,
            n = "history" in Ke && !!Ke.history.pushState && !!Ke.history.replaceState;
        return !e && n;
    }
    var ke = g,
        Ze;
    function Re(t) {
        let e = "history";
        k(e, t), R(e, Wo);
    }
    function Wo() {
        if (!er()) return;
        let t = ke.onpopstate;
        ke.onpopstate = function (...n) {
            let r = ke.location.href,
                o = Ze;
            if (((Ze = r), b("history", { from: o, to: r }), t))
                try {
                    return t.apply(this, n);
                } catch {}
        };
        function e(n) {
            return function (...r) {
                let o = r.length > 2 ? r[2] : void 0;
                if (o) {
                    let s = Ze,
                        i = String(o);
                    (Ze = i), b("history", { from: s, to: i });
                }
                return n.apply(this, r);
            };
        }
        S(ke.history, "pushState", e), S(ke.history, "replaceState", e);
    }
    a();
    var qo = g,
        ce = "__sentry_xhr_v3__";
    function Wt(t) {
        let e = "xhr";
        k(e, t), R(e, zo);
    }
    function zo() {
        if (!qo.XMLHttpRequest) return;
        let t = XMLHttpRequest.prototype;
        S(t, "open", function (e) {
            return function (...n) {
                let r = Date.now(),
                    o = D(n[0]) ? n[0].toUpperCase() : void 0,
                    s = Yo(n[1]);
                if (!o || !s) return e.apply(this, n);
                (this[ce] = { method: o, url: s, request_headers: {} }),
                    o === "POST" && s.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                let i = () => {
                    let c = this[ce];
                    if (c && this.readyState === 4) {
                        try {
                            c.status_code = this.status;
                        } catch {}
                        let u = { args: [o, s], endTimestamp: Date.now(), startTimestamp: r, xhr: this };
                        b("xhr", u);
                    }
                };
                return (
                    "onreadystatechange" in this && typeof this.onreadystatechange == "function"
                        ? S(this, "onreadystatechange", function (c) {
                              return function (...u) {
                                  return i(), c.apply(this, u);
                              };
                          })
                        : this.addEventListener("readystatechange", i),
                    S(this, "setRequestHeader", function (c) {
                        return function (...u) {
                            let [p, f] = u,
                                l = this[ce];
                            return l && D(p) && D(f) && (l.request_headers[p.toLowerCase()] = f), c.apply(this, u);
                        };
                    }),
                    e.apply(this, n)
                );
            };
        }),
            S(t, "send", function (e) {
                return function (...n) {
                    let r = this[ce];
                    if (!r) return e.apply(this, n);
                    n[0] !== void 0 && (r.body = n[0]);
                    let o = { args: [r.method, r.url], startTimestamp: Date.now(), xhr: this };
                    return b("xhr", o), e.apply(this, n);
                };
            });
    }
    function Yo(t) {
        if (D(t)) return t;
        try {
            return t.toString();
        } catch {}
    }
    a();
    function qt() {
        return "npm";
    }
    a();
    function tr() {
        let t = typeof WeakSet == "function",
            e = t ? new WeakSet() : [];
        function n(o) {
            if (t) return e.has(o) ? !0 : (e.add(o), !1);
            for (let s = 0; s < e.length; s++) if (e[s] === o) return !0;
            return e.push(o), !1;
        }
        function r(o) {
            if (t) e.delete(o);
            else
                for (let s = 0; s < e.length; s++)
                    if (e[s] === o) {
                        e.splice(s, 1);
                        break;
                    }
        }
        return [n, r];
    }
    a();
    function B(t, e = 100, n = 1 / 0) {
        try {
            return Qe("", t, e, n);
        } catch (r) {
            return { ERROR: `**non-serializable** (${r})` };
        }
    }
    function et(t, e = 3, n = 100 * 1024) {
        let r = B(t, e);
        return Ko(r) > n ? et(t, e - 1, n) : r;
    }
    function Qe(t, e, n = 1 / 0, r = 1 / 0, o = tr()) {
        let [s, i] = o;
        if (e == null || (["number", "boolean", "string"].includes(typeof e) && !Ot(e))) return e;
        let c = Xo(t, e);
        if (!c.startsWith("[object ")) return c;
        if (e.__sentry_skip_normalization__) return e;
        let u =
            typeof e.__sentry_override_normalization_depth__ == "number"
                ? e.__sentry_override_normalization_depth__
                : n;
        if (u === 0) return c.replace("object ", "");
        if (s(e)) return "[Circular ~]";
        let p = e;
        if (p && typeof p.toJSON == "function")
            try {
                let m = p.toJSON();
                return Qe("", m, u - 1, r, o);
            } catch {}
        let f = Array.isArray(e) ? [] : {},
            l = 0,
            E = We(e);
        for (let m in E) {
            if (!Object.prototype.hasOwnProperty.call(E, m)) continue;
            if (l >= r) {
                f[m] = "[MaxProperties ~]";
                break;
            }
            let O = E[m];
            (f[m] = Qe(m, O, u - 1, r, o)), l++;
        }
        return i(e), f;
    }
    function Xo(t, e) {
        try {
            if (t === "domain" && e && typeof e == "object" && e._events) return "[Domain]";
            if (t === "domainEmitter") return "[DomainEmitter]";
            if (typeof global < "u" && e === global) return "[Global]";
            if (typeof window < "u" && e === window) return "[Window]";
            if (typeof document < "u" && e === document) return "[Document]";
            if (Te(e)) return "[VueViewModel]";
            if (bt(e)) return "[SyntheticEvent]";
            if (typeof e == "number" && e !== e) return "[NaN]";
            if (typeof e == "function") return `[Function: ${A(e)}]`;
            if (typeof e == "symbol") return `[${String(e)}]`;
            if (typeof e == "bigint") return `[BigInt: ${String(e)}]`;
            let n = Jo(e);
            return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
        } catch (n) {
            return `**non-serializable** (${n})`;
        }
    }
    function Jo(t) {
        let e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : "null prototype";
    }
    function Vo(t) {
        return ~-encodeURI(t).split(/%..|./).length;
    }
    function Ko(t) {
        return Vo(JSON.stringify(t));
    }
    a();
    a();
    var J;
    (function (t) {
        t[(t.PENDING = 0)] = "PENDING";
        let n = 1;
        t[(t.RESOLVED = n)] = "RESOLVED";
        let r = 2;
        t[(t.REJECTED = r)] = "REJECTED";
    })(J || (J = {}));
    function H(t) {
        return new N((e) => {
            e(t);
        });
    }
    function ue(t) {
        return new N((e, n) => {
            n(t);
        });
    }
    var N = class t {
        constructor(e) {
            t.prototype.__init.call(this),
                t.prototype.__init2.call(this),
                t.prototype.__init3.call(this),
                t.prototype.__init4.call(this),
                (this._state = J.PENDING),
                (this._handlers = []);
            try {
                e(this._resolve, this._reject);
            } catch (n) {
                this._reject(n);
            }
        }
        then(e, n) {
            return new t((r, o) => {
                this._handlers.push([
                    !1,
                    (s) => {
                        if (!e) r(s);
                        else
                            try {
                                r(e(s));
                            } catch (i) {
                                o(i);
                            }
                    },
                    (s) => {
                        if (!n) o(s);
                        else
                            try {
                                r(n(s));
                            } catch (i) {
                                o(i);
                            }
                    },
                ]),
                    this._executeHandlers();
            });
        }
        catch(e) {
            return this.then((n) => n, e);
        }
        finally(e) {
            return new t((n, r) => {
                let o, s;
                return this.then(
                    (i) => {
                        (s = !1), (o = i), e && e();
                    },
                    (i) => {
                        (s = !0), (o = i), e && e();
                    }
                ).then(() => {
                    if (s) {
                        r(o);
                        return;
                    }
                    n(o);
                });
            });
        }
        __init() {
            this._resolve = (e) => {
                this._setResult(J.RESOLVED, e);
            };
        }
        __init2() {
            this._reject = (e) => {
                this._setResult(J.REJECTED, e);
            };
        }
        __init3() {
            this._setResult = (e, n) => {
                if (this._state === J.PENDING) {
                    if ($(n)) {
                        n.then(this._resolve, this._reject);
                        return;
                    }
                    (this._state = e), (this._value = n), this._executeHandlers();
                }
            };
        }
        __init4() {
            this._executeHandlers = () => {
                if (this._state === J.PENDING) return;
                let e = this._handlers.slice();
                (this._handlers = []),
                    e.forEach((n) => {
                        n[0] ||
                            (this._state === J.RESOLVED && n[1](this._value),
                            this._state === J.REJECTED && n[2](this._value),
                            (n[0] = !0));
                    });
            };
        }
    };
    function zt(t) {
        let e = [];
        function n() {
            return t === void 0 || e.length < t;
        }
        function r(i) {
            return e.splice(e.indexOf(i), 1)[0];
        }
        function o(i) {
            if (!n()) return ue(new x("Not adding Promise because buffer limit was reached."));
            let c = i();
            return e.indexOf(c) === -1 && e.push(c), c.then(() => r(c)).then(null, () => r(c).then(null, () => {})), c;
        }
        function s(i) {
            return new N((c, u) => {
                let p = e.length;
                if (!p) return c(!0);
                let f = setTimeout(() => {
                    i && i > 0 && c(!1);
                }, i);
                e.forEach((l) => {
                    H(l).then(() => {
                        --p || (clearTimeout(f), c(!0));
                    }, u);
                });
            });
        }
        return { $: e, add: o, drain: s };
    }
    a();
    function Ne(t) {
        if (!t) return {};
        let e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!e) return {};
        let n = e[6] || "",
            r = e[8] || "";
        return { host: e[4], path: e[5], protocol: e[2], search: n, hash: r, relative: e[5] + n + r };
    }
    a();
    var nr = ["fatal", "error", "warning", "log", "info", "debug"];
    function Yt(t) {
        return t === "warn" ? "warning" : nr.includes(t) ? t : "log";
    }
    a();
    var rr = 1e3;
    function z() {
        return Date.now() / rr;
    }
    function Zo() {
        let { performance: t } = g;
        if (!t || !t.now) return z;
        let e = Date.now() - t.now(),
            n = t.timeOrigin == null ? e : t.timeOrigin;
        return () => (n + t.now()) / rr;
    }
    var _e = Zo();
    var we,
        Qo = (() => {
            let { performance: t } = g;
            if (!t || !t.now) {
                we = "none";
                return;
            }
            let e = 3600 * 1e3,
                n = t.now(),
                r = Date.now(),
                o = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
                s = o < e,
                i = t.timing && t.timing.navigationStart,
                u = typeof i == "number" ? Math.abs(i + n - r) : e,
                p = u < e;
            return s || p
                ? o <= u
                    ? ((we = "timeOrigin"), t.timeOrigin)
                    : ((we = "navigationStart"), i)
                : ((we = "dateNow"), r);
        })();
    a();
    function P(t, e = []) {
        return [t, e];
    }
    function Jt(t, e) {
        let [n, r] = t;
        return [n, [...r, e]];
    }
    function tt(t, e) {
        let n = t[1];
        for (let r of n) {
            let o = r[0].type;
            if (e(r, o)) return !0;
        }
        return !1;
    }
    function Xt(t, e) {
        return (e || new TextEncoder()).encode(t);
    }
    function Vt(t, e) {
        let [n, r] = t,
            o = JSON.stringify(n);
        function s(i) {
            typeof o == "string"
                ? (o = typeof i == "string" ? o + i : [Xt(o, e), i])
                : o.push(typeof i == "string" ? Xt(i, e) : i);
        }
        for (let i of r) {
            let [c, u] = i;
            if (
                (s(`
${JSON.stringify(c)}
`),
                typeof u == "string" || u instanceof Uint8Array)
            )
                s(u);
            else {
                let p;
                try {
                    p = JSON.stringify(u);
                } catch {
                    p = JSON.stringify(B(u));
                }
                s(p);
            }
        }
        return typeof o == "string" ? o : es(o);
    }
    function es(t) {
        let e = t.reduce((o, s) => o + s.length, 0),
            n = new Uint8Array(e),
            r = 0;
        for (let o of t) n.set(o, r), (r += o.length);
        return n;
    }
    function Kt(t, e) {
        let n = typeof t.data == "string" ? Xt(t.data, e) : t.data;
        return [
            v({
                type: "attachment",
                length: n.length,
                filename: t.filename,
                content_type: t.contentType,
                attachment_type: t.attachmentType,
            }),
            n,
        ];
    }
    var ts = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        span: "span",
        statsd: "metric_bucket",
    };
    function nt(t) {
        return ts[t];
    }
    function rt(t) {
        if (!t || !t.sdk) return;
        let { name: e, version: n } = t.sdk;
        return { name: e, version: n };
    }
    function Zt(t, e, n, r) {
        let o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: t.event_id,
            sent_at: new Date().toISOString(),
            ...(e && { sdk: e }),
            ...(!!n && r && { dsn: L(r) }),
            ...(o && { trace: v({ ...o }) }),
        };
    }
    a();
    function Qt(t, e, n) {
        let r = [{ type: "client_report" }, { timestamp: n || z(), discarded_events: t }];
        return P(e ? { dsn: e } : {}, [r]);
    }
    a();
    function or(t, e = Date.now()) {
        let n = parseInt(`${t}`, 10);
        if (!isNaN(n)) return n * 1e3;
        let r = Date.parse(`${t}`);
        return isNaN(r) ? 6e4 : r - e;
    }
    function sr(t, e) {
        return t[e] || t.all || 0;
    }
    function en(t, e, n = Date.now()) {
        return sr(t, e) > n;
    }
    function tn(t, { statusCode: e, headers: n }, r = Date.now()) {
        let o = { ...t },
            s = n && n["x-sentry-rate-limits"],
            i = n && n["retry-after"];
        if (s)
            for (let c of s.trim().split(",")) {
                let [u, p, , , f] = c.split(":", 5),
                    l = parseInt(u, 10),
                    E = (isNaN(l) ? 60 : l) * 1e3;
                if (!p) o.all = r + E;
                else
                    for (let m of p.split(";"))
                        m === "metric_bucket"
                            ? (!f || f.split(";").includes("custom")) && (o[m] = r + E)
                            : (o[m] = r + E);
            }
        else i ? (o.all = r + or(i, r)) : e === 429 && (o.all = r + 60 * 1e3);
        return o;
    }
    a();
    function ir(t, e) {
        return t(e.stack || "", 1);
    }
    function nn(t, e) {
        let n = { type: e.name || e.constructor.name, value: e.message },
            r = ir(t, e);
        return r.length && (n.stacktrace = { frames: r }), n;
    }
    a();
    var _ = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
    a();
    a();
    var ee = "production";
    a();
    a();
    function Me() {
        return Oe("globalEventProcessors", () => []);
    }
    function ar(t) {
        Me().push(t);
    }
    function Ee(t, e, n, r = 0) {
        return new N((o, s) => {
            let i = t[r];
            if (e === null || typeof i != "function") o(e);
            else {
                let c = i({ ...e }, n);
                _ && i.id && c === null && d.log(`Event processor "${i.id}" dropped event`),
                    $(c)
                        ? c.then((u) => Ee(t, u, n, r + 1).then(o)).then(null, s)
                        : Ee(t, c, n, r + 1)
                              .then(o)
                              .then(null, s);
            }
        });
    }
    a();
    function ot(t) {
        let e = _e(),
            n = {
                sid: I(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => ns(n),
            };
        return t && G(n, t), n;
    }
    function G(t, e = {}) {
        if (
            (e.user &&
                (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
                !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)),
            (t.timestamp = e.timestamp || _e()),
            e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism),
            e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
            e.sid && (t.sid = e.sid.length === 32 ? e.sid : I()),
            e.init !== void 0 && (t.init = e.init),
            !t.did && e.did && (t.did = `${e.did}`),
            typeof e.started == "number" && (t.started = e.started),
            t.ignoreDuration)
        )
            t.duration = void 0;
        else if (typeof e.duration == "number") t.duration = e.duration;
        else {
            let n = t.timestamp - t.started;
            t.duration = n >= 0 ? n : 0;
        }
        e.release && (t.release = e.release),
            e.environment && (t.environment = e.environment),
            !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
            !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
            typeof e.errors == "number" && (t.errors = e.errors),
            e.status && (t.status = e.status);
    }
    function st(t, e) {
        let n = {};
        e ? (n = { status: e }) : t.status === "ok" && (n = { status: "exited" }), G(t, n);
    }
    function ns(t) {
        return v({
            sid: `${t.sid}`,
            init: t.init,
            started: new Date(t.started * 1e3).toISOString(),
            timestamp: new Date(t.timestamp * 1e3).toISOString(),
            status: t.status,
            errors: t.errors,
            did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
            duration: t.duration,
            abnormal_mechanism: t.abnormal_mechanism,
            attrs: { release: t.release, environment: t.environment, ip_address: t.ipAddress, user_agent: t.userAgent },
        });
    }
    a();
    a();
    a();
    a();
    a();
    var rs = 1;
    function cr(t) {
        let { spanId: e, traceId: n } = t.spanContext(),
            { data: r, op: o, parent_span_id: s, status: i, tags: c, origin: u } = te(t);
        return v({ data: r, op: o, parent_span_id: s, span_id: e, status: i, tags: c, trace_id: n, origin: u });
    }
    function te(t) {
        return os(t) ? t.getSpanJSON() : typeof t.toJSON == "function" ? t.toJSON() : {};
    }
    function os(t) {
        return typeof t.getSpanJSON == "function";
    }
    function ur(t) {
        let { traceFlags: e } = t.spanContext();
        return !!(e & rs);
    }
    function fr(t, e, n, r, o, s) {
        let { normalizeDepth: i = 3, normalizeMaxBreadth: c = 1e3 } = t,
            u = { ...e, event_id: e.event_id || n.event_id || I(), timestamp: e.timestamp || z() },
            p = n.integrations || t.integrations.map((M) => M.name);
        ss(u, t), cs(u, p), e.type === void 0 && is(u, t.stackParser);
        let f = ps(r, n.captureContext);
        n.mechanism && X(u, n.mechanism);
        let l = o && o.getEventProcessors ? o.getEventProcessors() : [],
            E = dr().getScopeData();
        if (s) {
            let M = s.getScopeData();
            rn(E, M);
        }
        if (f) {
            let M = f.getScopeData();
            rn(E, M);
        }
        let m = [...(n.attachments || []), ...E.attachments];
        m.length && (n.attachments = m), it(u, E);
        let O = [...l, ...Me(), ...E.eventProcessors];
        return Ee(O, u, n).then((M) => (M && as(M), typeof i == "number" && i > 0 ? us(M, i, c) : M));
    }
    function ss(t, e) {
        let { environment: n, release: r, dist: o, maxValueLength: s = 250 } = e;
        "environment" in t || (t.environment = "environment" in e ? n : ee),
            t.release === void 0 && r !== void 0 && (t.release = r),
            t.dist === void 0 && o !== void 0 && (t.dist = o),
            t.message && (t.message = W(t.message, s));
        let i = t.exception && t.exception.values && t.exception.values[0];
        i && i.value && (i.value = W(i.value, s));
        let c = t.request;
        c && c.url && (c.url = W(c.url, s));
    }
    var pr = new WeakMap();
    function is(t, e) {
        let n = g._sentryDebugIds;
        if (!n) return;
        let r,
            o = pr.get(e);
        o ? (r = o) : ((r = new Map()), pr.set(e, r));
        let s = Object.keys(n).reduce((i, c) => {
            let u,
                p = r.get(c);
            p ? (u = p) : ((u = e(c)), r.set(c, u));
            for (let f = u.length - 1; f >= 0; f--) {
                let l = u[f];
                if (l.filename) {
                    i[l.filename] = n[c];
                    break;
                }
            }
            return i;
        }, {});
        try {
            t.exception.values.forEach((i) => {
                i.stacktrace.frames.forEach((c) => {
                    c.filename && (c.debug_id = s[c.filename]);
                });
            });
        } catch {}
    }
    function as(t) {
        let e = {};
        try {
            t.exception.values.forEach((r) => {
                r.stacktrace.frames.forEach((o) => {
                    o.debug_id &&
                        (o.abs_path ? (e[o.abs_path] = o.debug_id) : o.filename && (e[o.filename] = o.debug_id),
                        delete o.debug_id);
                });
            });
        } catch {}
        if (Object.keys(e).length === 0) return;
        (t.debug_meta = t.debug_meta || {}), (t.debug_meta.images = t.debug_meta.images || []);
        let n = t.debug_meta.images;
        Object.keys(e).forEach((r) => {
            n.push({ type: "sourcemap", code_file: r, debug_id: e[r] });
        });
    }
    function cs(t, e) {
        e.length > 0 && ((t.sdk = t.sdk || {}), (t.sdk.integrations = [...(t.sdk.integrations || []), ...e]));
    }
    function us(t, e, n) {
        if (!t) return null;
        let r = {
            ...t,
            ...(t.breadcrumbs && {
                breadcrumbs: t.breadcrumbs.map((o) => ({ ...o, ...(o.data && { data: B(o.data, e, n) }) })),
            }),
            ...(t.user && { user: B(t.user, e, n) }),
            ...(t.contexts && { contexts: B(t.contexts, e, n) }),
            ...(t.extra && { extra: B(t.extra, e, n) }),
        };
        return (
            t.contexts &&
                t.contexts.trace &&
                r.contexts &&
                ((r.contexts.trace = t.contexts.trace),
                t.contexts.trace.data && (r.contexts.trace.data = B(t.contexts.trace.data, e, n))),
            t.spans &&
                (r.spans = t.spans.map((o) => {
                    let s = te(o).data;
                    return s && (o.data = B(s, e, n)), o;
                })),
            r
        );
    }
    function ps(t, e) {
        if (!e) return t;
        let n = t ? t.clone() : new V();
        return n.update(e), n;
    }
    function lr(t) {
        if (t) return fs(t) ? { captureContext: t } : ds(t) ? { captureContext: t } : t;
    }
    function fs(t) {
        return t instanceof V || typeof t == "function";
    }
    var ls = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
    function ds(t) {
        return Object.keys(t).some((e) => ls.includes(e));
    }
    function on(t, e) {
        return w().captureException(t, lr(e));
    }
    function at(t, e) {
        return w().captureEvent(t, e);
    }
    function K(t, e) {
        w().addBreadcrumb(t, e);
    }
    function sn(...t) {
        let e = w();
        if (t.length === 2) {
            let [n, r] = t;
            return n ? e.withScope(() => ((e.getStackTop().scope = n), r(n))) : e.withScope(r);
        }
        return e.withScope(t[0]);
    }
    function y() {
        return w().getClient();
    }
    function ne() {
        return w().getScope();
    }
    function ct(t) {
        let e = y(),
            n = Se(),
            r = ne(),
            { release: o, environment: s = ee } = (e && e.getOptions()) || {},
            { userAgent: i } = g.navigator || {},
            c = ot({ release: o, environment: s, user: r.getUser() || n.getUser(), ...(i && { userAgent: i }), ...t }),
            u = n.getSession();
        return u && u.status === "ok" && G(u, { status: "exited" }), an(), n.setSession(c), r.setSession(c), c;
    }
    function an() {
        let t = Se(),
            e = ne(),
            n = e.getSession() || t.getSession();
        n && st(n), mr(), t.setSession(), e.setSession();
    }
    function mr() {
        let t = Se(),
            e = ne(),
            n = y(),
            r = e.getSession() || t.getSession();
        r && n && n.captureSession && n.captureSession(r);
    }
    function ut(t = !1) {
        if (t) {
            an();
            return;
        }
        mr();
    }
    a();
    function pt(t) {
        return t.transaction;
    }
    function cn(t, e, n) {
        let r = e.getOptions(),
            { publicKey: o } = e.getDsn() || {},
            { segment: s } = (n && n.getUser()) || {},
            i = v({
                environment: r.environment || ee,
                release: r.release,
                user_segment: s,
                public_key: o,
                trace_id: t,
            });
        return e.emit && e.emit("createDsc", i), i;
    }
    function gr(t) {
        let e = y();
        if (!e) return {};
        let n = cn(te(t).trace_id || "", e, ne()),
            r = pt(t);
        if (!r) return n;
        let o = r && r._frozenDynamicSamplingContext;
        if (o) return o;
        let { sampleRate: s, source: i } = r.metadata;
        s != null && (n.sample_rate = `${s}`);
        let c = te(r);
        return (
            i && i !== "url" && (n.transaction = c.description),
            (n.sampled = String(ur(r))),
            e.emit && e.emit("createDsc", n),
            n
        );
    }
    function it(t, e) {
        let { fingerprint: n, span: r, breadcrumbs: o, sdkProcessingMetadata: s } = e;
        ms(t, e), r && _s(t, r), Es(t, n), gs(t, o), hs(t, s);
    }
    function rn(t, e) {
        let {
            extra: n,
            tags: r,
            user: o,
            contexts: s,
            level: i,
            sdkProcessingMetadata: c,
            breadcrumbs: u,
            fingerprint: p,
            eventProcessors: f,
            attachments: l,
            propagationContext: E,
            transactionName: m,
            span: O,
        } = e;
        Le(t, "extra", n),
            Le(t, "tags", r),
            Le(t, "user", o),
            Le(t, "contexts", s),
            Le(t, "sdkProcessingMetadata", c),
            i && (t.level = i),
            m && (t.transactionName = m),
            O && (t.span = O),
            u.length && (t.breadcrumbs = [...t.breadcrumbs, ...u]),
            p.length && (t.fingerprint = [...t.fingerprint, ...p]),
            f.length && (t.eventProcessors = [...t.eventProcessors, ...f]),
            l.length && (t.attachments = [...t.attachments, ...l]),
            (t.propagationContext = { ...t.propagationContext, ...E });
    }
    function Le(t, e, n) {
        if (n && Object.keys(n).length) {
            t[e] = { ...t[e] };
            for (let r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r]);
        }
    }
    function ms(t, e) {
        let { extra: n, tags: r, user: o, contexts: s, level: i, transactionName: c } = e,
            u = v(n);
        u && Object.keys(u).length && (t.extra = { ...u, ...t.extra });
        let p = v(r);
        p && Object.keys(p).length && (t.tags = { ...p, ...t.tags });
        let f = v(o);
        f && Object.keys(f).length && (t.user = { ...f, ...t.user });
        let l = v(s);
        l && Object.keys(l).length && (t.contexts = { ...l, ...t.contexts }),
            i && (t.level = i),
            c && (t.transaction = c);
    }
    function gs(t, e) {
        let n = [...(t.breadcrumbs || []), ...e];
        t.breadcrumbs = n.length ? n : void 0;
    }
    function hs(t, e) {
        t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata, ...e };
    }
    function _s(t, e) {
        t.contexts = { trace: cr(e), ...t.contexts };
        let n = pt(e);
        if (n) {
            t.sdkProcessingMetadata = { dynamicSamplingContext: gr(e), ...t.sdkProcessingMetadata };
            let r = te(n).description;
            r && (t.tags = { transaction: r, ...t.tags });
        }
    }
    function Es(t, e) {
        (t.fingerprint = t.fingerprint ? Ce(t.fingerprint) : []),
            e && (t.fingerprint = t.fingerprint.concat(e)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
    }
    var Ss = 100,
        un,
        V = class t {
            constructor() {
                (this._notifyingListeners = !1),
                    (this._scopeListeners = []),
                    (this._eventProcessors = []),
                    (this._breadcrumbs = []),
                    (this._attachments = []),
                    (this._user = {}),
                    (this._tags = {}),
                    (this._extra = {}),
                    (this._contexts = {}),
                    (this._sdkProcessingMetadata = {}),
                    (this._propagationContext = hr());
            }
            static clone(e) {
                return e ? e.clone() : new t();
            }
            clone() {
                let e = new t();
                return (
                    (e._breadcrumbs = [...this._breadcrumbs]),
                    (e._tags = { ...this._tags }),
                    (e._extra = { ...this._extra }),
                    (e._contexts = { ...this._contexts }),
                    (e._user = this._user),
                    (e._level = this._level),
                    (e._span = this._span),
                    (e._session = this._session),
                    (e._transactionName = this._transactionName),
                    (e._fingerprint = this._fingerprint),
                    (e._eventProcessors = [...this._eventProcessors]),
                    (e._requestSession = this._requestSession),
                    (e._attachments = [...this._attachments]),
                    (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
                    (e._propagationContext = { ...this._propagationContext }),
                    (e._client = this._client),
                    e
                );
            }
            setClient(e) {
                this._client = e;
            }
            getClient() {
                return this._client;
            }
            addScopeListener(e) {
                this._scopeListeners.push(e);
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e), this;
            }
            setUser(e) {
                return (
                    (this._user = e || {
                        email: void 0,
                        id: void 0,
                        ip_address: void 0,
                        segment: void 0,
                        username: void 0,
                    }),
                    this._session && G(this._session, { user: e }),
                    this._notifyScopeListeners(),
                    this
                );
            }
            getUser() {
                return this._user;
            }
            getRequestSession() {
                return this._requestSession;
            }
            setRequestSession(e) {
                return (this._requestSession = e), this;
            }
            setTags(e) {
                return (this._tags = { ...this._tags, ...e }), this._notifyScopeListeners(), this;
            }
            setTag(e, n) {
                return (this._tags = { ...this._tags, [e]: n }), this._notifyScopeListeners(), this;
            }
            setExtras(e) {
                return (this._extra = { ...this._extra, ...e }), this._notifyScopeListeners(), this;
            }
            setExtra(e, n) {
                return (this._extra = { ...this._extra, [e]: n }), this._notifyScopeListeners(), this;
            }
            setFingerprint(e) {
                return (this._fingerprint = e), this._notifyScopeListeners(), this;
            }
            setLevel(e) {
                return (this._level = e), this._notifyScopeListeners(), this;
            }
            setTransactionName(e) {
                return (this._transactionName = e), this._notifyScopeListeners(), this;
            }
            setContext(e, n) {
                return (
                    n === null ? delete this._contexts[e] : (this._contexts[e] = n), this._notifyScopeListeners(), this
                );
            }
            setSpan(e) {
                return (this._span = e), this._notifyScopeListeners(), this;
            }
            getSpan() {
                return this._span;
            }
            getTransaction() {
                let e = this._span;
                return e && e.transaction;
            }
            setSession(e) {
                return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
            }
            getSession() {
                return this._session;
            }
            update(e) {
                if (!e) return this;
                let n = typeof e == "function" ? e(this) : e;
                if (n instanceof t) {
                    let r = n.getScopeData();
                    (this._tags = { ...this._tags, ...r.tags }),
                        (this._extra = { ...this._extra, ...r.extra }),
                        (this._contexts = { ...this._contexts, ...r.contexts }),
                        r.user && Object.keys(r.user).length && (this._user = r.user),
                        r.level && (this._level = r.level),
                        r.fingerprint.length && (this._fingerprint = r.fingerprint),
                        n.getRequestSession() && (this._requestSession = n.getRequestSession()),
                        r.propagationContext && (this._propagationContext = r.propagationContext);
                } else if (U(n)) {
                    let r = e;
                    (this._tags = { ...this._tags, ...r.tags }),
                        (this._extra = { ...this._extra, ...r.extra }),
                        (this._contexts = { ...this._contexts, ...r.contexts }),
                        r.user && (this._user = r.user),
                        r.level && (this._level = r.level),
                        r.fingerprint && (this._fingerprint = r.fingerprint),
                        r.requestSession && (this._requestSession = r.requestSession),
                        r.propagationContext && (this._propagationContext = r.propagationContext);
                }
                return this;
            }
            clear() {
                return (
                    (this._breadcrumbs = []),
                    (this._tags = {}),
                    (this._extra = {}),
                    (this._user = {}),
                    (this._contexts = {}),
                    (this._level = void 0),
                    (this._transactionName = void 0),
                    (this._fingerprint = void 0),
                    (this._requestSession = void 0),
                    (this._span = void 0),
                    (this._session = void 0),
                    this._notifyScopeListeners(),
                    (this._attachments = []),
                    (this._propagationContext = hr()),
                    this
                );
            }
            addBreadcrumb(e, n) {
                let r = typeof n == "number" ? n : Ss;
                if (r <= 0) return this;
                let o = { timestamp: z(), ...e },
                    s = this._breadcrumbs;
                return (
                    s.push(o), (this._breadcrumbs = s.length > r ? s.slice(-r) : s), this._notifyScopeListeners(), this
                );
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1];
            }
            clearBreadcrumbs() {
                return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
            }
            addAttachment(e) {
                return this._attachments.push(e), this;
            }
            getAttachments() {
                return this.getScopeData().attachments;
            }
            clearAttachments() {
                return (this._attachments = []), this;
            }
            getScopeData() {
                let {
                    _breadcrumbs: e,
                    _attachments: n,
                    _contexts: r,
                    _tags: o,
                    _extra: s,
                    _user: i,
                    _level: c,
                    _fingerprint: u,
                    _eventProcessors: p,
                    _propagationContext: f,
                    _sdkProcessingMetadata: l,
                    _transactionName: E,
                    _span: m,
                } = this;
                return {
                    breadcrumbs: e,
                    attachments: n,
                    contexts: r,
                    tags: o,
                    extra: s,
                    user: i,
                    level: c,
                    fingerprint: u || [],
                    eventProcessors: p,
                    propagationContext: f,
                    sdkProcessingMetadata: l,
                    transactionName: E,
                    span: m,
                };
            }
            applyToEvent(e, n = {}, r = []) {
                it(e, this.getScopeData());
                let o = [...r, ...Me(), ...this._eventProcessors];
                return Ee(o, e, n);
            }
            setSDKProcessingMetadata(e) {
                return (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...e }), this;
            }
            setPropagationContext(e) {
                return (this._propagationContext = e), this;
            }
            getPropagationContext() {
                return this._propagationContext;
            }
            captureException(e, n) {
                let r = n && n.event_id ? n.event_id : I();
                if (!this._client) return d.warn("No client configured on scope - will not capture exception!"), r;
                let o = new Error("Sentry syntheticException");
                return (
                    this._client.captureException(
                        e,
                        { originalException: e, syntheticException: o, ...n, event_id: r },
                        this
                    ),
                    r
                );
            }
            captureMessage(e, n, r) {
                let o = r && r.event_id ? r.event_id : I();
                if (!this._client) return d.warn("No client configured on scope - will not capture message!"), o;
                let s = new Error(e);
                return (
                    this._client.captureMessage(
                        e,
                        n,
                        { originalException: e, syntheticException: s, ...r, event_id: o },
                        this
                    ),
                    o
                );
            }
            captureEvent(e, n) {
                let r = n && n.event_id ? n.event_id : I();
                return this._client
                    ? (this._client.captureEvent(e, { ...n, event_id: r }, this), r)
                    : (d.warn("No client configured on scope - will not capture event!"), r);
            }
            _notifyScopeListeners() {
                this._notifyingListeners ||
                    ((this._notifyingListeners = !0),
                    this._scopeListeners.forEach((e) => {
                        e(this);
                    }),
                    (this._notifyingListeners = !1));
            }
        };
    function dr() {
        return un || (un = new V()), un;
    }
    function hr() {
        return { traceId: I(), spanId: I().substring(16) };
    }
    a();
    var Ae = "7.116.0";
    var Er = parseFloat(Ae),
        ys = 100,
        ft = class {
            constructor(e, n, r, o = Er) {
                this._version = o;
                let s;
                n ? (s = n) : ((s = new V()), s.setClient(e));
                let i;
                r ? (i = r) : ((i = new V()), i.setClient(e)),
                    (this._stack = [{ scope: s }]),
                    e && this.bindClient(e),
                    (this._isolationScope = i);
            }
            isOlderThan(e) {
                return this._version < e;
            }
            bindClient(e) {
                let n = this.getStackTop();
                (n.client = e), n.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations();
            }
            pushScope() {
                let e = this.getScope().clone();
                return this.getStack().push({ client: this.getClient(), scope: e }), e;
            }
            popScope() {
                return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
            }
            withScope(e) {
                let n = this.pushScope(),
                    r;
                try {
                    r = e(n);
                } catch (o) {
                    throw (this.popScope(), o);
                }
                return $(r)
                    ? r.then(
                          (o) => (this.popScope(), o),
                          (o) => {
                              throw (this.popScope(), o);
                          }
                      )
                    : (this.popScope(), r);
            }
            getClient() {
                return this.getStackTop().client;
            }
            getScope() {
                return this.getStackTop().scope;
            }
            getIsolationScope() {
                return this._isolationScope;
            }
            getStack() {
                return this._stack;
            }
            getStackTop() {
                return this._stack[this._stack.length - 1];
            }
            captureException(e, n) {
                let r = (this._lastEventId = n && n.event_id ? n.event_id : I()),
                    o = new Error("Sentry syntheticException");
                return (
                    this.getScope().captureException(e, {
                        originalException: e,
                        syntheticException: o,
                        ...n,
                        event_id: r,
                    }),
                    r
                );
            }
            captureMessage(e, n, r) {
                let o = (this._lastEventId = r && r.event_id ? r.event_id : I()),
                    s = new Error(e);
                return (
                    this.getScope().captureMessage(e, n, {
                        originalException: e,
                        syntheticException: s,
                        ...r,
                        event_id: o,
                    }),
                    o
                );
            }
            captureEvent(e, n) {
                let r = n && n.event_id ? n.event_id : I();
                return e.type || (this._lastEventId = r), this.getScope().captureEvent(e, { ...n, event_id: r }), r;
            }
            lastEventId() {
                return this._lastEventId;
            }
            addBreadcrumb(e, n) {
                let { scope: r, client: o } = this.getStackTop();
                if (!o) return;
                let { beforeBreadcrumb: s = null, maxBreadcrumbs: i = ys } = (o.getOptions && o.getOptions()) || {};
                if (i <= 0) return;
                let u = { timestamp: z(), ...e },
                    p = s ? Q(() => s(u, n)) : u;
                p !== null && (o.emit && o.emit("beforeAddBreadcrumb", p, n), r.addBreadcrumb(p, i));
            }
            setUser(e) {
                this.getScope().setUser(e), this.getIsolationScope().setUser(e);
            }
            setTags(e) {
                this.getScope().setTags(e), this.getIsolationScope().setTags(e);
            }
            setExtras(e) {
                this.getScope().setExtras(e), this.getIsolationScope().setExtras(e);
            }
            setTag(e, n) {
                this.getScope().setTag(e, n), this.getIsolationScope().setTag(e, n);
            }
            setExtra(e, n) {
                this.getScope().setExtra(e, n), this.getIsolationScope().setExtra(e, n);
            }
            setContext(e, n) {
                this.getScope().setContext(e, n), this.getIsolationScope().setContext(e, n);
            }
            configureScope(e) {
                let { scope: n, client: r } = this.getStackTop();
                r && e(n);
            }
            run(e) {
                let n = _r(this);
                try {
                    e(this);
                } finally {
                    _r(n);
                }
            }
            getIntegration(e) {
                let n = this.getClient();
                if (!n) return null;
                try {
                    return n.getIntegration(e);
                } catch {
                    return _ && d.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
                }
            }
            startTransaction(e, n) {
                let r = this._callExtensionMethod("startTransaction", e, n);
                return (
                    _ &&
                        !r &&
                        (this.getClient()
                            ? d.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`)
                            : d.warn(
                                  "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
                              )),
                    r
                );
            }
            traceHeaders() {
                return this._callExtensionMethod("traceHeaders");
            }
            captureSession(e = !1) {
                if (e) return this.endSession();
                this._sendSessionUpdate();
            }
            endSession() {
                let n = this.getStackTop().scope,
                    r = n.getSession();
                r && st(r), this._sendSessionUpdate(), n.setSession();
            }
            startSession(e) {
                let { scope: n, client: r } = this.getStackTop(),
                    { release: o, environment: s = ee } = (r && r.getOptions()) || {},
                    { userAgent: i } = g.navigator || {},
                    c = ot({ release: o, environment: s, user: n.getUser(), ...(i && { userAgent: i }), ...e }),
                    u = n.getSession && n.getSession();
                return u && u.status === "ok" && G(u, { status: "exited" }), this.endSession(), n.setSession(c), c;
            }
            shouldSendDefaultPii() {
                let e = this.getClient(),
                    n = e && e.getOptions();
                return !!(n && n.sendDefaultPii);
            }
            _sendSessionUpdate() {
                let { scope: e, client: n } = this.getStackTop(),
                    r = e.getSession();
                r && n && n.captureSession && n.captureSession(r);
            }
            _callExtensionMethod(e, ...n) {
                let o = lt().__SENTRY__;
                if (o && o.extensions && typeof o.extensions[e] == "function") return o.extensions[e].apply(this, n);
                _ && d.warn(`Extension method ${e} couldn't be found, doing nothing.`);
            }
        };
    function lt() {
        return (g.__SENTRY__ = g.__SENTRY__ || { extensions: {}, hub: void 0 }), g;
    }
    function _r(t) {
        let e = lt(),
            n = pn(e);
        return Sr(e, t), n;
    }
    function w() {
        let t = lt();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            let e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e;
        }
        return Is(t);
    }
    function Se() {
        return w().getIsolationScope();
    }
    function Is(t = lt()) {
        return (!Ts(t) || pn(t).isOlderThan(Er)) && Sr(t, new ft()), pn(t);
    }
    function Ts(t) {
        return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
    }
    function pn(t) {
        return Oe("hub", () => new ft(), t);
    }
    function Sr(t, e) {
        if (!t) return !1;
        let n = (t.__SENTRY__ = t.__SENTRY__ || {});
        return (n.hub = e), !0;
    }
    a();
    function bs(t, e) {
        return (
            e &&
                ((t.sdk = t.sdk || {}),
                (t.sdk.name = t.sdk.name || e.name),
                (t.sdk.version = t.sdk.version || e.version),
                (t.sdk.integrations = [...(t.sdk.integrations || []), ...(e.integrations || [])]),
                (t.sdk.packages = [...(t.sdk.packages || []), ...(e.packages || [])])),
            t
        );
    }
    function yr(t, e, n, r) {
        let o = rt(n),
            s = { sent_at: new Date().toISOString(), ...(o && { sdk: o }), ...(!!r && e && { dsn: L(e) }) },
            i = "aggregates" in t ? [{ type: "sessions" }, t] : [{ type: "session" }, t.toJSON()];
        return P(s, [i]);
    }
    function Ir(t, e, n, r) {
        let o = rt(n),
            s = t.type && t.type !== "replay_event" ? t.type : "event";
        bs(t, n && n.sdk);
        let i = Zt(t, o, r, e);
        return delete t.sdkProcessingMetadata, P(i, [[{ type: s }, t]]);
    }
    a();
    var Os = "7";
    function xs(t) {
        let e = t.protocol ? `${t.protocol}:` : "",
            n = t.port ? `:${t.port}` : "";
        return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`;
    }
    function vs(t) {
        return `${xs(t)}${t.projectId}/envelope/`;
    }
    function Cs(t, e) {
        return Rt({
            sentry_key: t.publicKey,
            sentry_version: Os,
            ...(e && { sentry_client: `${e.name}/${e.version}` }),
        });
    }
    function Tr(t, e = {}) {
        let n = typeof e == "string" ? e : e.tunnel,
            r = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
        return n || `${vs(t)}?${Cs(t, r)}`;
    }
    a();
    a();
    var br = [];
    function Ds(t) {
        let e = {};
        return (
            t.forEach((n) => {
                let { name: r } = n,
                    o = e[r];
                (o && !o.isDefaultInstance && n.isDefaultInstance) || (e[r] = n);
            }),
            Object.keys(e).map((n) => e[n])
        );
    }
    function fn(t) {
        let e = t.defaultIntegrations || [],
            n = t.integrations;
        e.forEach((i) => {
            i.isDefaultInstance = !0;
        });
        let r;
        Array.isArray(n) ? (r = [...e, ...n]) : typeof n == "function" ? (r = Ce(n(e))) : (r = e);
        let o = Ds(r),
            s = ks(o, (i) => i.name === "Debug");
        if (s !== -1) {
            let [i] = o.splice(s, 1);
            o.push(i);
        }
        return o;
    }
    function Or(t, e) {
        let n = {};
        return (
            e.forEach((r) => {
                r && dn(t, r, n);
            }),
            n
        );
    }
    function ln(t, e) {
        for (let n of e) n && n.afterAllSetup && n.afterAllSetup(t);
    }
    function dn(t, e, n) {
        if (n[e.name]) {
            _ && d.log(`Integration skipped because it was already installed: ${e.name}`);
            return;
        }
        if (
            ((n[e.name] = e),
            br.indexOf(e.name) === -1 && (e.setupOnce(ar, w), br.push(e.name)),
            e.setup && typeof e.setup == "function" && e.setup(t),
            t.on && typeof e.preprocessEvent == "function")
        ) {
            let r = e.preprocessEvent.bind(e);
            t.on("preprocessEvent", (o, s) => r(o, s, t));
        }
        if (t.addEventProcessor && typeof e.processEvent == "function") {
            let r = e.processEvent.bind(e),
                o = Object.assign((s, i) => r(s, i, t), { id: e.name });
            t.addEventProcessor(o);
        }
        _ && d.log(`Integration installed: ${e.name}`);
    }
    function ks(t, e) {
        for (let n = 0; n < t.length; n++) if (e(t[n]) === !0) return n;
        return -1;
    }
    function T(t, e) {
        return Object.assign(
            function (...r) {
                return e(...r);
            },
            { id: t }
        );
    }
    a();
    a();
    function xr(t) {
        let e = "";
        for (let n of t) {
            let r = Object.entries(n.tags),
                o = r.length > 0 ? `|#${r.map(([s, i]) => `${s}:${i}`).join(",")}` : "";
            e += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${o}|T${n.timestamp}
`;
        }
        return e;
    }
    function vr(t, e, n, r) {
        let o = { sent_at: new Date().toISOString() };
        n && n.sdk && (o.sdk = { name: n.sdk.name, version: n.sdk.version }), r && e && (o.dsn = L(e));
        let s = Rs(t);
        return P(o, [s]);
    }
    function Rs(t) {
        let e = xr(t);
        return [{ type: "statsd", length: e.length }, e];
    }
    var Cr = "Not capturing exception because it's already been captured.",
        Pe = class {
            constructor(e) {
                if (
                    ((this._options = e),
                    (this._integrations = {}),
                    (this._integrationsInitialized = !1),
                    (this._numProcessing = 0),
                    (this._outcomes = {}),
                    (this._hooks = {}),
                    (this._eventProcessors = []),
                    e.dsn ? (this._dsn = $e(e.dsn)) : _ && d.warn("No DSN provided, client will not send events."),
                    this._dsn)
                ) {
                    let n = Tr(this._dsn, e);
                    this._transport = e.transport({
                        tunnel: this._options.tunnel,
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...e.transportOptions,
                        url: n,
                    });
                }
            }
            captureException(e, n, r) {
                if (Ye(e)) {
                    _ && d.log(Cr);
                    return;
                }
                let o = n && n.event_id;
                return (
                    this._process(
                        this.eventFromException(e, n)
                            .then((s) => this._captureEvent(s, n, r))
                            .then((s) => {
                                o = s;
                            })
                    ),
                    o
                );
            }
            captureMessage(e, n, r, o) {
                let s = r && r.event_id,
                    i = le(e) ? e : String(e),
                    c = oe(e) ? this.eventFromMessage(i, n, r) : this.eventFromException(e, r);
                return (
                    this._process(
                        c
                            .then((u) => this._captureEvent(u, r, o))
                            .then((u) => {
                                s = u;
                            })
                    ),
                    s
                );
            }
            captureEvent(e, n, r) {
                if (n && n.originalException && Ye(n.originalException)) {
                    _ && d.log(Cr);
                    return;
                }
                let o = n && n.event_id,
                    i = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                return (
                    this._process(
                        this._captureEvent(e, n, i || r).then((c) => {
                            o = c;
                        })
                    ),
                    o
                );
            }
            captureSession(e) {
                typeof e.release != "string"
                    ? _ && d.warn("Discarded session because of missing or non-string release")
                    : (this.sendSession(e), G(e, { init: !1 }));
            }
            getDsn() {
                return this._dsn;
            }
            getOptions() {
                return this._options;
            }
            getSdkMetadata() {
                return this._options._metadata;
            }
            getTransport() {
                return this._transport;
            }
            flush(e) {
                let n = this._transport;
                return n
                    ? (this.metricsAggregator && this.metricsAggregator.flush(),
                      this._isClientDoneProcessing(e).then((r) => n.flush(e).then((o) => r && o)))
                    : H(!0);
            }
            close(e) {
                return this.flush(e).then(
                    (n) => (
                        (this.getOptions().enabled = !1), this.metricsAggregator && this.metricsAggregator.close(), n
                    )
                );
            }
            getEventProcessors() {
                return this._eventProcessors;
            }
            addEventProcessor(e) {
                this._eventProcessors.push(e);
            }
            setupIntegrations(e) {
                ((e && !this._integrationsInitialized) || (this._isEnabled() && !this._integrationsInitialized)) &&
                    this._setupIntegrations();
            }
            init() {
                this._isEnabled() && this._setupIntegrations();
            }
            getIntegrationById(e) {
                return this.getIntegrationByName(e);
            }
            getIntegrationByName(e) {
                return this._integrations[e];
            }
            getIntegration(e) {
                try {
                    return this._integrations[e.id] || null;
                } catch {
                    return _ && d.warn(`Cannot retrieve integration ${e.id} from the current Client`), null;
                }
            }
            addIntegration(e) {
                let n = this._integrations[e.name];
                dn(this, e, this._integrations), n || ln(this, [e]);
            }
            sendEvent(e, n = {}) {
                this.emit("beforeSendEvent", e, n);
                let r = Ir(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (let s of n.attachments || [])
                    r = Jt(r, Kt(s, this._options.transportOptions && this._options.transportOptions.textEncoder));
                let o = this._sendEnvelope(r);
                o && o.then((s) => this.emit("afterSendEvent", e, s), null);
            }
            sendSession(e) {
                let n = yr(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(n);
            }
            recordDroppedEvent(e, n, r) {
                if (this._options.sendClientReports) {
                    let o = `${e}:${n}`;
                    _ && d.log(`Adding outcome: "${o}"`), (this._outcomes[o] = this._outcomes[o] + 1 || 1);
                }
            }
            captureAggregateMetrics(e) {
                _ && d.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);
                let n = vr(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(n);
            }
            on(e, n) {
                this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(n);
            }
            emit(e, ...n) {
                this._hooks[e] && this._hooks[e].forEach((r) => r(...n));
            }
            _setupIntegrations() {
                let { integrations: e } = this._options;
                (this._integrations = Or(this, e)), ln(this, e), (this._integrationsInitialized = !0);
            }
            _updateSessionFromEvent(e, n) {
                let r = !1,
                    o = !1,
                    s = n.exception && n.exception.values;
                if (s) {
                    o = !0;
                    for (let u of s) {
                        let p = u.mechanism;
                        if (p && p.handled === !1) {
                            r = !0;
                            break;
                        }
                    }
                }
                let i = e.status === "ok";
                ((i && e.errors === 0) || (i && r)) &&
                    (G(e, { ...(r && { status: "crashed" }), errors: e.errors || Number(o || r) }),
                    this.captureSession(e));
            }
            _isClientDoneProcessing(e) {
                return new N((n) => {
                    let r = 0,
                        o = 1,
                        s = setInterval(() => {
                            this._numProcessing == 0
                                ? (clearInterval(s), n(!0))
                                : ((r += o), e && r >= e && (clearInterval(s), n(!1)));
                        }, o);
                });
            }
            _isEnabled() {
                return this.getOptions().enabled !== !1 && this._transport !== void 0;
            }
            _prepareEvent(e, n, r, o = Se()) {
                let s = this.getOptions(),
                    i = Object.keys(this._integrations);
                return (
                    !n.integrations && i.length > 0 && (n.integrations = i),
                    this.emit("preprocessEvent", e, n),
                    fr(s, e, n, r, this, o).then((c) => {
                        if (c === null) return c;
                        let u = { ...o.getPropagationContext(), ...(r ? r.getPropagationContext() : void 0) };
                        if (!(c.contexts && c.contexts.trace) && u) {
                            let { traceId: f, spanId: l, parentSpanId: E, dsc: m } = u;
                            c.contexts = { trace: { trace_id: f, span_id: l, parent_span_id: E }, ...c.contexts };
                            let O = m || cn(f, this, r);
                            c.sdkProcessingMetadata = { dynamicSamplingContext: O, ...c.sdkProcessingMetadata };
                        }
                        return c;
                    })
                );
            }
            _captureEvent(e, n = {}, r) {
                return this._processEvent(e, n, r).then(
                    (o) => o.event_id,
                    (o) => {
                        if (_) {
                            let s = o;
                            s.logLevel === "log" ? d.log(s.message) : d.warn(s);
                        }
                    }
                );
            }
            _processEvent(e, n, r) {
                let o = this.getOptions(),
                    { sampleRate: s } = o,
                    i = kr(e),
                    c = Dr(e),
                    u = e.type || "error",
                    p = `before send for type \`${u}\``;
                if (c && typeof s == "number" && Math.random() > s)
                    return (
                        this.recordDroppedEvent("sample_rate", "error", e),
                        ue(
                            new x(
                                `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
                                "log"
                            )
                        )
                    );
                let f = u === "replay_event" ? "replay" : u,
                    E = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e, n, r, E)
                    .then((m) => {
                        if (m === null)
                            throw (
                                (this.recordDroppedEvent("event_processor", f, e),
                                new x("An event processor returned `null`, will not send event.", "log"))
                            );
                        if (n.data && n.data.__sentry__ === !0) return m;
                        let ye = ws(o, m, n);
                        return Ns(ye, p);
                    })
                    .then((m) => {
                        if (m === null)
                            throw (
                                (this.recordDroppedEvent("before_send", f, e),
                                new x(`${p} returned \`null\`, will not send event.`, "log"))
                            );
                        let O = r && r.getSession();
                        !i && O && this._updateSessionFromEvent(O, m);
                        let ye = m.transaction_info;
                        if (i && ye && m.transaction !== e.transaction) {
                            let M = "custom";
                            m.transaction_info = { ...ye, source: M };
                        }
                        return this.sendEvent(m, n), m;
                    })
                    .then(null, (m) => {
                        throw m instanceof x
                            ? m
                            : (this.captureException(m, { data: { __sentry__: !0 }, originalException: m }),
                              new x(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${m}`));
                    });
            }
            _process(e) {
                this._numProcessing++,
                    e.then(
                        (n) => (this._numProcessing--, n),
                        (n) => (this._numProcessing--, n)
                    );
            }
            _sendEnvelope(e) {
                if ((this.emit("beforeEnvelope", e), this._isEnabled() && this._transport))
                    return this._transport.send(e).then(null, (n) => {
                        _ && d.error("Error while sending event:", n);
                    });
                _ && d.error("Transport disabled");
            }
            _clearOutcomes() {
                let e = this._outcomes;
                return (
                    (this._outcomes = {}),
                    Object.keys(e).map((n) => {
                        let [r, o] = n.split(":");
                        return { reason: r, category: o, quantity: e[n] };
                    })
                );
            }
        };
    function Ns(t, e) {
        let n = `${e} must return \`null\` or a valid event.`;
        if ($(t))
            return t.then(
                (r) => {
                    if (!U(r) && r !== null) throw new x(n);
                    return r;
                },
                (r) => {
                    throw new x(`${e} rejected with ${r}`);
                }
            );
        if (!U(t) && t !== null) throw new x(n);
        return t;
    }
    function ws(t, e, n) {
        let { beforeSend: r, beforeSendTransaction: o } = t;
        return Dr(e) && r ? r(e, n) : kr(e) && o ? o(e, n) : e;
    }
    function Dr(t) {
        return t.type === void 0;
    }
    function kr(t) {
        return t.type === "transaction";
    }
    a();
    function mn(t, e) {
        e.debug === !0 &&
            (_
                ? d.enable()
                : Q(() => {
                      console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
                  })),
            ne().update(e.initialScope);
        let r = new t(e);
        Rr(r), Ms(r);
    }
    function Rr(t) {
        let n = w().getStackTop();
        (n.client = t), n.scope.setClient(t);
    }
    function Ms(t) {
        t.init ? t.init() : t.setupIntegrations && t.setupIntegrations();
    }
    a();
    var Ls = 30;
    function Ue(t, e, n = zt(t.bufferSize || Ls)) {
        let r = {},
            o = (i) => n.drain(i);
        function s(i) {
            let c = [];
            if (
                (tt(i, (l, E) => {
                    let m = nt(E);
                    if (en(r, m)) {
                        let O = Nr(l, E);
                        t.recordDroppedEvent("ratelimit_backoff", m, O);
                    } else c.push(l);
                }),
                c.length === 0)
            )
                return H();
            let u = P(i[0], c),
                p = (l) => {
                    tt(u, (E, m) => {
                        let O = Nr(E, m);
                        t.recordDroppedEvent(l, nt(m), O);
                    });
                },
                f = () =>
                    e({ body: Vt(u, t.textEncoder) }).then(
                        (l) => (
                            l.statusCode !== void 0 &&
                                (l.statusCode < 200 || l.statusCode >= 300) &&
                                _ &&
                                d.warn(`Sentry responded with status code ${l.statusCode} to sent event.`),
                            (r = tn(r, l)),
                            l
                        ),
                        (l) => {
                            throw (p("network_error"), l);
                        }
                    );
            return n.add(f).then(
                (l) => l,
                (l) => {
                    if (l instanceof x)
                        return _ && d.error("Skipped sending event because buffer is full."), p("queue_overflow"), H();
                    throw l;
                }
            );
        }
        return (s.__sentry__baseTransport__ = !0), { send: s, flush: o };
    }
    function Nr(t, e) {
        if (!(e !== "event" && e !== "transaction")) return Array.isArray(t) ? t[1] : void 0;
    }
    a();
    function gn(t, e, n = [e], r = "npm") {
        let o = t._metadata || {};
        o.sdk ||
            (o.sdk = {
                name: `sentry.javascript.${e}`,
                packages: n.map((s) => ({ name: `${r}:@sentry/${s}`, version: Ae })),
                version: Ae,
            }),
            (t._metadata = o);
    }
    a();
    var As = [
            /^Script error\.?$/,
            /^Javascript error: Script error\.? on line 0$/,
            /^ResizeObserver loop completed with undelivered notifications.$/,
            /^Cannot redefine property: googletag$/,
        ],
        Ps = [
            /^.*\/healthcheck$/,
            /^.*\/healthy$/,
            /^.*\/live$/,
            /^.*\/ready$/,
            /^.*\/heartbeat$/,
            /^.*\/health$/,
            /^.*\/healthz$/,
        ],
        wr = "InboundFilters",
        Us = (t = {}) => ({
            name: wr,
            setupOnce() {},
            processEvent(e, n, r) {
                let o = r.getOptions(),
                    s = Fs(t, o);
                return Bs(e, s) ? null : e;
            },
        }),
        mt = Us,
        hn = T(wr, mt);
    function Fs(t = {}, e = {}) {
        return {
            allowUrls: [...(t.allowUrls || []), ...(e.allowUrls || [])],
            denyUrls: [...(t.denyUrls || []), ...(e.denyUrls || [])],
            ignoreErrors: [...(t.ignoreErrors || []), ...(e.ignoreErrors || []), ...(t.disableErrorDefaults ? [] : As)],
            ignoreTransactions: [
                ...(t.ignoreTransactions || []),
                ...(e.ignoreTransactions || []),
                ...(t.disableTransactionDefaults ? [] : Ps),
            ],
            ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0,
        };
    }
    function Bs(t, e) {
        return e.ignoreInternal && qs(t)
            ? (_ &&
                  d.warn(`Event dropped due to being internal Sentry Error.
Event: ${F(t)}`),
              !0)
            : Hs(t, e.ignoreErrors)
            ? (_ &&
                  d.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${F(t)}`),
              !0)
            : Gs(t, e.ignoreTransactions)
            ? (_ &&
                  d.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${F(t)}`),
              !0)
            : $s(t, e.denyUrls)
            ? (_ &&
                  d.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${F(t)}.
Url: ${dt(t)}`),
              !0)
            : js(t, e.allowUrls)
            ? !1
            : (_ &&
                  d.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${F(t)}.
Url: ${dt(t)}`),
              !0);
    }
    function Hs(t, e) {
        return t.type || !e || !e.length ? !1 : Ws(t).some((n) => de(n, e));
    }
    function Gs(t, e) {
        if (t.type !== "transaction" || !e || !e.length) return !1;
        let n = t.transaction;
        return n ? de(n, e) : !1;
    }
    function $s(t, e) {
        if (!e || !e.length) return !1;
        let n = dt(t);
        return n ? de(n, e) : !1;
    }
    function js(t, e) {
        if (!e || !e.length) return !0;
        let n = dt(t);
        return n ? de(n, e) : !0;
    }
    function Ws(t) {
        let e = [];
        t.message && e.push(t.message);
        let n;
        try {
            n = t.exception.values[t.exception.values.length - 1];
        } catch {}
        return (
            n && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`)),
            _ && e.length === 0 && d.error(`Could not extract message for event ${F(t)}`),
            e
        );
    }
    function qs(t) {
        try {
            return t.exception.values[0].type === "SentryError";
        } catch {}
        return !1;
    }
    function zs(t = []) {
        for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
        }
        return null;
    }
    function dt(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames;
            } catch {}
            return e ? zs(e) : null;
        } catch {
            return _ && d.error(`Cannot extract url for event ${F(t)}`), null;
        }
    }
    a();
    var Mr,
        Ar = "FunctionToString",
        Lr = new WeakMap(),
        Ys = () => ({
            name: Ar,
            setupOnce() {
                Mr = Function.prototype.toString;
                try {
                    Function.prototype.toString = function (...t) {
                        let e = ae(this),
                            n = Lr.has(y()) && e !== void 0 ? e : this;
                        return Mr.apply(n, t);
                    };
                } catch {}
            },
            setup(t) {
                Lr.set(t, !0);
            },
        }),
        gt = Ys,
        _n = T(Ar, gt);
    a();
    var Xs = "cause",
        Js = 5,
        Pr = "LinkedErrors",
        Vs = (t = {}) => {
            let e = t.limit || Js,
                n = t.key || Xs;
            return {
                name: Pr,
                setupOnce() {},
                preprocessEvent(r, o, s) {
                    let i = s.getOptions();
                    be(nn, i.stackParser, i.maxValueLength, n, e, r, o);
                },
            };
        },
        Ks = Vs,
        Ur = T(Pr, Ks);
    var En = {};
    Ln(En, { FunctionToString: () => _n, InboundFilters: () => hn, LinkedErrors: () => Ur });
    a();
    var Fr = En;
    a();
    var h = g,
        Sn = 0;
    function yn() {
        return Sn > 0;
    }
    function Zs() {
        Sn++,
            setTimeout(() => {
                Sn--;
            });
    }
    function re(t, e = {}, n) {
        if (typeof t != "function") return t;
        try {
            let o = t.__sentry_wrapped__;
            if (o) return o;
            if (ae(t)) return t;
        } catch {
            return t;
        }
        let r = function () {
            let o = Array.prototype.slice.call(arguments);
            try {
                n && typeof n == "function" && n.apply(this, arguments);
                let s = o.map((i) => re(i, e));
                return t.apply(this, s);
            } catch (s) {
                throw (
                    (Zs(),
                    sn((i) => {
                        i.addEventProcessor(
                            (c) => (
                                e.mechanism && (ge(c, void 0, void 0), X(c, e.mechanism)),
                                (c.extra = { ...c.extra, arguments: o }),
                                c
                            )
                        ),
                            on(s);
                    }),
                    s)
                );
            }
        };
        try {
            for (let o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
        } catch {}
        je(r, t), Y(t, "__sentry_wrapped__", r);
        try {
            Object.getOwnPropertyDescriptor(r, "name").configurable &&
                Object.defineProperty(r, "name", {
                    get() {
                        return t.name;
                    },
                });
        } catch {}
        return r;
    }
    a();
    a();
    var C = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
    a();
    function bn(t, e) {
        let n = On(t, e),
            r = { type: e && e.name, value: ni(e) };
        return (
            n.length && (r.stacktrace = { frames: n }),
            r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
            r
        );
    }
    function Qs(t, e, n, r) {
        let o = y(),
            s = o && o.getOptions().normalizeDepth,
            i = {
                exception: {
                    values: [
                        {
                            type: se(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: ri(e, { isUnhandledRejection: r }),
                        },
                    ],
                },
                extra: { __serialized__: et(e, s) },
            };
        if (n) {
            let c = On(t, n);
            c.length && (i.exception.values[0].stacktrace = { frames: c });
        }
        return i;
    }
    function In(t, e) {
        return { exception: { values: [bn(t, e)] } };
    }
    function On(t, e) {
        let n = e.stacktrace || e.stack || "",
            r = ti(e);
        try {
            return t(n, r);
        } catch {}
        return [];
    }
    var ei = /Minified React error #\d+;/i;
    function ti(t) {
        if (t) {
            if (typeof t.framesToPop == "number") return t.framesToPop;
            if (ei.test(t.message)) return 1;
        }
        return 0;
    }
    function ni(t) {
        let e = t && t.message;
        return e ? (e.error && typeof e.error.message == "string" ? e.error.message : e) : "No error message";
    }
    function Br(t, e, n, r) {
        let o = (n && n.syntheticException) || void 0,
            s = ht(t, e, o, r);
        return X(s), (s.level = "error"), n && n.event_id && (s.event_id = n.event_id), H(s);
    }
    function Hr(t, e, n = "info", r, o) {
        let s = (r && r.syntheticException) || void 0,
            i = Tn(t, e, s, o);
        return (i.level = n), r && r.event_id && (i.event_id = r.event_id), H(i);
    }
    function ht(t, e, n, r, o) {
        let s;
        if (fe(e) && e.error) return In(t, e.error);
        if (Be(e) || yt(e)) {
            let i = e;
            if ("stack" in e) s = In(t, e);
            else {
                let c = i.name || (Be(i) ? "DOMError" : "DOMException"),
                    u = i.message ? `${c}: ${i.message}` : c;
                (s = Tn(t, u, n, r)), ge(s, u);
            }
            return "code" in i && (s.tags = { ...s.tags, "DOMException.code": `${i.code}` }), s;
        }
        return Ie(e)
            ? In(t, e)
            : U(e) || se(e)
            ? ((s = Qs(t, e, n, o)), X(s, { synthetic: !0 }), s)
            : ((s = Tn(t, e, n, r)), ge(s, `${e}`, void 0), X(s, { synthetic: !0 }), s);
    }
    function Tn(t, e, n, r) {
        let o = {};
        if (r && n) {
            let s = On(t, n);
            s.length && (o.exception = { values: [{ value: e, stacktrace: { frames: s } }] });
        }
        if (le(e)) {
            let { __sentry_template_string__: s, __sentry_template_values__: i } = e;
            return (o.logentry = { message: s, params: i }), o;
        }
        return (o.message = e), o;
    }
    function ri(t, { isUnhandledRejection: e }) {
        let n = Nt(t),
            r = e ? "promise rejection" : "exception";
        return fe(t)
            ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``
            : se(t)
            ? `Event \`${oi(t)}\` (type=${t.type}) captured as ${r}`
            : `Object captured as ${r} with keys: ${n}`;
    }
    function oi(t) {
        try {
            let e = Object.getPrototypeOf(t);
            return e ? e.constructor.name : void 0;
        } catch {}
    }
    a();
    function Gr(t, { metadata: e, tunnel: n, dsn: r }) {
        let o = {
                event_id: t.event_id,
                sent_at: new Date().toISOString(),
                ...(e && e.sdk && { sdk: { name: e.sdk.name, version: e.sdk.version } }),
                ...(!!n && !!r && { dsn: L(r) }),
            },
            s = si(t);
        return P(o, [s]);
    }
    function si(t) {
        return [{ type: "user_report" }, t];
    }
    var _t = class extends Pe {
        constructor(e) {
            let n = h.SENTRY_SDK_SOURCE || qt();
            gn(e, "browser", ["browser"], n),
                super(e),
                e.sendClientReports &&
                    h.document &&
                    h.document.addEventListener("visibilitychange", () => {
                        h.document.visibilityState === "hidden" && this._flushOutcomes();
                    });
        }
        eventFromException(e, n) {
            return Br(this._options.stackParser, e, n, this._options.attachStacktrace);
        }
        eventFromMessage(e, n = "info", r) {
            return Hr(this._options.stackParser, e, n, r, this._options.attachStacktrace);
        }
        captureUserFeedback(e) {
            if (!this._isEnabled()) {
                C && d.warn("SDK not enabled, will not capture user feedback.");
                return;
            }
            let n = Gr(e, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
            this._sendEnvelope(n);
        }
        _prepareEvent(e, n, r) {
            return (e.platform = e.platform || "javascript"), super._prepareEvent(e, n, r);
        }
        _flushOutcomes() {
            let e = this._clearOutcomes();
            if (e.length === 0) {
                C && d.log("No outcomes to send");
                return;
            }
            if (!this._dsn) {
                C && d.log("No dsn provided, will not send outcomes");
                return;
            }
            C && d.log("Sending outcomes:", e);
            let n = Qt(e, this._options.tunnel && L(this._dsn));
            this._sendEnvelope(n);
        }
    };
    a();
    a();
    var Fe;
    function $r() {
        if (Fe) return Fe;
        if (De(h.fetch)) return (Fe = h.fetch.bind(h));
        let t = h.document,
            e = h.fetch;
        if (t && typeof t.createElement == "function")
            try {
                let n = t.createElement("iframe");
                (n.hidden = !0), t.head.appendChild(n);
                let r = n.contentWindow;
                r && r.fetch && (e = r.fetch), t.head.removeChild(n);
            } catch (n) {
                C && d.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
            }
        return (Fe = e.bind(h));
    }
    function jr() {
        Fe = void 0;
    }
    function Wr(t, e = $r()) {
        let n = 0,
            r = 0;
        function o(s) {
            let i = s.body.length;
            (n += i), r++;
            let c = {
                body: s.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                keepalive: n <= 6e4 && r < 15,
                ...t.fetchOptions,
            };
            try {
                return e(t.url, c).then(
                    (u) => (
                        (n -= i),
                        r--,
                        {
                            statusCode: u.status,
                            headers: {
                                "x-sentry-rate-limits": u.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": u.headers.get("Retry-After"),
                            },
                        }
                    )
                );
            } catch (u) {
                return jr(), (n -= i), r--, ue(u);
            }
        }
        return Ue(t, o);
    }
    a();
    var ii = 4;
    function qr(t) {
        function e(n) {
            return new N((r, o) => {
                let s = new XMLHttpRequest();
                (s.onerror = o),
                    (s.onreadystatechange = () => {
                        s.readyState === ii &&
                            r({
                                statusCode: s.status,
                                headers: {
                                    "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": s.getResponseHeader("Retry-After"),
                                },
                            });
                    }),
                    s.open("POST", t.url);
                for (let i in t.headers)
                    Object.prototype.hasOwnProperty.call(t.headers, i) && s.setRequestHeader(i, t.headers[i]);
                s.send(n.body);
            });
        }
        return Ue(t, e);
    }
    a();
    var Et = "?";
    var ai = 30,
        ci = 40,
        ui = 50;
    function xn(t, e, n, r) {
        let o = { filename: t, function: e, in_app: !0 };
        return n !== void 0 && (o.lineno = n), r !== void 0 && (o.colno = r), o;
    }
    var pi =
            /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        fi = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        li = (t) => {
            let e = pi.exec(t);
            if (e) {
                if (e[2] && e[2].indexOf("eval") === 0) {
                    let s = fi.exec(e[2]);
                    s && ((e[2] = s[1]), (e[3] = s[2]), (e[4] = s[3]));
                }
                let [r, o] = Yr(e[1] || Et, e[2]);
                return xn(o, r, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
            }
        },
        di = [ai, li],
        mi =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        gi = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        hi = (t) => {
            let e = mi.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    let s = gi.exec(e[3]);
                    s && ((e[1] = e[1] || "eval"), (e[3] = s[1]), (e[4] = s[2]), (e[5] = ""));
                }
                let r = e[3],
                    o = e[1] || Et;
                return ([o, r] = Yr(o, r)), xn(r, o, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
            }
        },
        _i = [ui, hi],
        Ei = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Si = (t) => {
            let e = Ei.exec(t);
            return e ? xn(e[2], e[1] || Et, +e[3], e[4] ? +e[4] : void 0) : void 0;
        },
        yi = [ci, Si];
    var Ii = [di, _i, yi],
        zr = qe(...Ii),
        Yr = (t, e) => {
            let n = t.indexOf("safari-extension") !== -1,
                r = t.indexOf("safari-web-extension") !== -1;
            return n || r
                ? [
                      t.indexOf("@") !== -1 ? t.split("@")[0] : Et,
                      n ? `safari-extension:${e}` : `safari-web-extension:${e}`,
                  ]
                : [t, e];
        };
    a();
    a();
    var St = 1024,
        Xr = "Breadcrumbs",
        Ti = (t = {}) => {
            let e = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t };
            return {
                name: Xr,
                setupOnce() {},
                setup(n) {
                    e.console && Lt(xi(n)),
                        e.dom && Ut(Oi(n, e.dom)),
                        e.xhr && Wt(vi(n)),
                        e.fetch && Gt(Ci(n)),
                        e.history && Re(Di(n)),
                        e.sentry && n.on && n.on("beforeSendEvent", bi(n));
                },
            };
        },
        vn = Ti,
        Jr = T(Xr, vn);
    function bi(t) {
        return function (n) {
            y() === t &&
                K(
                    {
                        category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
                        event_id: n.event_id,
                        level: n.level,
                        message: F(n),
                    },
                    { event: n }
                );
        };
    }
    function Oi(t, e) {
        return function (r) {
            if (y() !== t) return;
            let o,
                s,
                i = typeof e == "object" ? e.serializeAttribute : void 0,
                c = typeof e == "object" && typeof e.maxStringLength == "number" ? e.maxStringLength : void 0;
            c &&
                c > St &&
                (C &&
                    d.warn(
                        `\`dom.maxStringLength\` cannot exceed ${St}, but a value of ${c} was configured. Sentry will use ${St} instead.`
                    ),
                (c = St)),
                typeof i == "string" && (i = [i]);
            try {
                let p = r.event,
                    f = ki(p) ? p.target : p;
                (o = xe(f, { keyAttrs: i, maxStringLength: c })), (s = Dt(f));
            } catch {
                o = "<unknown>";
            }
            if (o.length === 0) return;
            let u = { category: `ui.${r.name}`, message: o };
            s && (u.data = { "ui.component_name": s }), K(u, { event: r.event, name: r.name, global: r.global });
        };
    }
    function xi(t) {
        return function (n) {
            if (y() !== t) return;
            let r = {
                category: "console",
                data: { arguments: n.args, logger: "console" },
                level: Yt(n.level),
                message: He(n.args, " "),
            };
            if (n.level === "assert")
                if (n.args[0] === !1)
                    (r.message = `Assertion failed: ${He(n.args.slice(1), " ") || "console.assert"}`),
                        (r.data.arguments = n.args.slice(1));
                else return;
            K(r, { input: n.args, level: n.level });
        };
    }
    function vi(t) {
        return function (n) {
            if (y() !== t) return;
            let { startTimestamp: r, endTimestamp: o } = n,
                s = n.xhr[ce];
            if (!r || !o || !s) return;
            let { method: i, url: c, status_code: u, body: p } = s,
                f = { method: i, url: c, status_code: u },
                l = { xhr: n.xhr, input: p, startTimestamp: r, endTimestamp: o };
            K({ category: "xhr", data: f, type: "http" }, l);
        };
    }
    function Ci(t) {
        return function (n) {
            if (y() !== t) return;
            let { startTimestamp: r, endTimestamp: o } = n;
            if (o && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST"))
                if (n.error) {
                    let s = n.fetchData,
                        i = { data: n.error, input: n.args, startTimestamp: r, endTimestamp: o };
                    K({ category: "fetch", data: s, level: "error", type: "http" }, i);
                } else {
                    let s = n.response,
                        i = { ...n.fetchData, status_code: s && s.status },
                        c = { input: n.args, response: s, startTimestamp: r, endTimestamp: o };
                    K({ category: "fetch", data: i, type: "http" }, c);
                }
        };
    }
    function Di(t) {
        return function (n) {
            if (y() !== t) return;
            let r = n.from,
                o = n.to,
                s = Ne(h.location.href),
                i = r ? Ne(r) : void 0,
                c = Ne(o);
            (!i || !i.path) && (i = s),
                s.protocol === c.protocol && s.host === c.host && (o = c.relative),
                s.protocol === i.protocol && s.host === i.host && (r = i.relative),
                K({ category: "navigation", data: { from: r, to: o } });
        };
    }
    function ki(t) {
        return !!t && !!t.target;
    }
    a();
    var Zr = "Dedupe",
        Ri = () => {
            let t;
            return {
                name: Zr,
                setupOnce() {},
                processEvent(e) {
                    if (e.type) return e;
                    try {
                        if (Ni(e, t))
                            return (
                                C && d.warn("Event dropped due to being a duplicate of previously captured event."),
                                null
                            );
                    } catch {}
                    return (t = e);
                },
            };
        },
        Cn = Ri,
        Qr = T(Zr, Cn);
    function Ni(t, e) {
        return e ? !!(wi(t, e) || Mi(t, e)) : !1;
    }
    function wi(t, e) {
        let n = t.message,
            r = e.message;
        return !((!n && !r) || (n && !r) || (!n && r) || n !== r || !to(t, e) || !eo(t, e));
    }
    function Mi(t, e) {
        let n = Vr(e),
            r = Vr(t);
        return !(!n || !r || n.type !== r.type || n.value !== r.value || !to(t, e) || !eo(t, e));
    }
    function eo(t, e) {
        let n = Kr(t),
            r = Kr(e);
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length)) return !1;
        for (let o = 0; o < r.length; o++) {
            let s = r[o],
                i = n[o];
            if (s.filename !== i.filename || s.lineno !== i.lineno || s.colno !== i.colno || s.function !== i.function)
                return !1;
        }
        return !0;
    }
    function to(t, e) {
        let n = t.fingerprint,
            r = e.fingerprint;
        if (!n && !r) return !0;
        if ((n && !r) || (!n && r)) return !1;
        (n = n), (r = r);
        try {
            return n.join("") === r.join("");
        } catch {
            return !1;
        }
    }
    function Vr(t) {
        return t.exception && t.exception.values && t.exception.values[0];
    }
    function Kr(t) {
        let e = t.exception;
        if (e)
            try {
                return e.values[0].stacktrace.frames;
            } catch {
                return;
            }
    }
    a();
    var ro = "GlobalHandlers",
        Li = (t = {}) => {
            let e = { onerror: !0, onunhandledrejection: !0, ...t };
            return {
                name: ro,
                setupOnce() {
                    Error.stackTraceLimit = 50;
                },
                setup(n) {
                    e.onerror && (Ai(n), no("onerror")), e.onunhandledrejection && (Pi(n), no("onunhandledrejection"));
                },
            };
        },
        Dn = Li,
        oo = T(ro, Dn);
    function Ai(t) {
        $t((e) => {
            let { stackParser: n, attachStacktrace: r } = io();
            if (y() !== t || yn()) return;
            let { msg: o, url: s, line: i, column: c, error: u } = e,
                p = u === void 0 && D(o) ? Bi(o, s, i, c) : so(ht(n, u || o, void 0, r, !1), s, i, c);
            (p.level = "error"), at(p, { originalException: u, mechanism: { handled: !1, type: "onerror" } });
        });
    }
    function Pi(t) {
        jt((e) => {
            let { stackParser: n, attachStacktrace: r } = io();
            if (y() !== t || yn()) return;
            let o = Ui(e),
                s = oe(o) ? Fi(o) : ht(n, o, void 0, r, !0);
            (s.level = "error"),
                at(s, { originalException: o, mechanism: { handled: !1, type: "onunhandledrejection" } });
        });
    }
    function Ui(t) {
        if (oe(t)) return t;
        let e = t;
        try {
            if ("reason" in e) return e.reason;
            if ("detail" in e && "reason" in e.detail) return e.detail.reason;
        } catch {}
        return t;
    }
    function Fi(t) {
        return {
            exception: {
                values: [
                    {
                        type: "UnhandledRejection",
                        value: `Non-Error promise rejection captured with value: ${String(t)}`,
                    },
                ],
            },
        };
    }
    function Bi(t, e, n, r) {
        let o =
                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
            s = fe(t) ? t.message : t,
            i = "Error",
            c = s.match(o);
        return c && ((i = c[1]), (s = c[2])), so({ exception: { values: [{ type: i, value: s }] } }, e, n, r);
    }
    function so(t, e, n, r) {
        let o = (t.exception = t.exception || {}),
            s = (o.values = o.values || []),
            i = (s[0] = s[0] || {}),
            c = (i.stacktrace = i.stacktrace || {}),
            u = (c.frames = c.frames || []),
            p = isNaN(parseInt(r, 10)) ? void 0 : r,
            f = isNaN(parseInt(n, 10)) ? void 0 : n,
            l = D(e) && e.length > 0 ? e : Ct();
        return u.length === 0 && u.push({ colno: p, filename: l, function: "?", in_app: !0, lineno: f }), t;
    }
    function no(t) {
        C && d.log(`Global Handler attached: ${t}`);
    }
    function io() {
        let t = y();
        return (t && t.getOptions()) || { stackParser: () => [], attachStacktrace: !1 };
    }
    a();
    var ao = "HttpContext",
        Hi = () => ({
            name: ao,
            setupOnce() {},
            preprocessEvent(t) {
                if (!h.navigator && !h.location && !h.document) return;
                let e = (t.request && t.request.url) || (h.location && h.location.href),
                    { referrer: n } = h.document || {},
                    { userAgent: r } = h.navigator || {},
                    o = {
                        ...(t.request && t.request.headers),
                        ...(n && { Referer: n }),
                        ...(r && { "User-Agent": r }),
                    },
                    s = { ...t.request, ...(e && { url: e }), headers: o };
                t.request = s;
            },
        }),
        kn = Hi,
        co = T(ao, kn);
    a();
    var Gi = "cause",
        $i = 5,
        uo = "LinkedErrors",
        ji = (t = {}) => {
            let e = t.limit || $i,
                n = t.key || Gi;
            return {
                name: uo,
                setupOnce() {},
                preprocessEvent(r, o, s) {
                    let i = s.getOptions();
                    be(bn, i.stackParser, i.maxValueLength, n, e, r, o);
                },
            };
        },
        Rn = ji,
        po = T(uo, Rn);
    a();
    var Wi = [
            "EventTarget",
            "Window",
            "Node",
            "ApplicationCache",
            "AudioTrackList",
            "BroadcastChannel",
            "ChannelMergerNode",
            "CryptoOperation",
            "EventSource",
            "FileReader",
            "HTMLUnknownElement",
            "IDBDatabase",
            "IDBRequest",
            "IDBTransaction",
            "KeyOperation",
            "MediaController",
            "MessagePort",
            "ModalWindow",
            "Notification",
            "SVGElementInstance",
            "Screen",
            "SharedWorker",
            "TextTrack",
            "TextTrackCue",
            "TextTrackList",
            "WebSocket",
            "WebSocketWorker",
            "Worker",
            "XMLHttpRequest",
            "XMLHttpRequestEventTarget",
            "XMLHttpRequestUpload",
        ],
        lo = "TryCatch",
        qi = (t = {}) => {
            let e = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...t,
            };
            return {
                name: lo,
                setupOnce() {
                    e.setTimeout && S(h, "setTimeout", fo),
                        e.setInterval && S(h, "setInterval", fo),
                        e.requestAnimationFrame && S(h, "requestAnimationFrame", zi),
                        e.XMLHttpRequest && "XMLHttpRequest" in h && S(XMLHttpRequest.prototype, "send", Yi);
                    let n = e.eventTarget;
                    n && (Array.isArray(n) ? n : Wi).forEach(Xi);
                },
            };
        },
        Nn = qi,
        mo = T(lo, Nn);
    function fo(t) {
        return function (...e) {
            let n = e[0];
            return (
                (e[0] = re(n, { mechanism: { data: { function: A(t) }, handled: !1, type: "instrument" } })),
                t.apply(this, e)
            );
        };
    }
    function zi(t) {
        return function (e) {
            return t.apply(this, [
                re(e, {
                    mechanism: {
                        data: { function: "requestAnimationFrame", handler: A(t) },
                        handled: !1,
                        type: "instrument",
                    },
                }),
            ]);
        };
    }
    function Yi(t) {
        return function (...e) {
            let n = this;
            return (
                ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((o) => {
                    o in n &&
                        typeof n[o] == "function" &&
                        S(n, o, function (s) {
                            let i = {
                                    mechanism: {
                                        data: { function: o, handler: A(s) },
                                        handled: !1,
                                        type: "instrument",
                                    },
                                },
                                c = ae(s);
                            return c && (i.mechanism.data.handler = A(c)), re(s, i);
                        });
                }),
                t.apply(this, e)
            );
        };
    }
    function Xi(t) {
        let e = h,
            n = e[t] && e[t].prototype;
        !n ||
            !n.hasOwnProperty ||
            !n.hasOwnProperty("addEventListener") ||
            (S(n, "addEventListener", function (r) {
                return function (o, s, i) {
                    try {
                        typeof s.handleEvent == "function" &&
                            (s.handleEvent = re(s.handleEvent, {
                                mechanism: {
                                    data: { function: "handleEvent", handler: A(s), target: t },
                                    handled: !1,
                                    type: "instrument",
                                },
                            }));
                    } catch {}
                    return r.apply(this, [
                        o,
                        re(s, {
                            mechanism: {
                                data: { function: "addEventListener", handler: A(s), target: t },
                                handled: !1,
                                type: "instrument",
                            },
                        }),
                        i,
                    ]);
                };
            }),
            S(n, "removeEventListener", function (r) {
                return function (o, s, i) {
                    let c = s;
                    try {
                        let u = c && c.__sentry_wrapped__;
                        u && r.call(this, o, u, i);
                    } catch {}
                    return r.call(this, o, c, i);
                };
            }));
    }
    var go = [mt(), gt(), Nn(), vn(), Dn(), Rn(), Cn(), kn()];
    function ho(t) {
        return [...go];
    }
    function wn(t = {}) {
        t.defaultIntegrations === void 0 && (t.defaultIntegrations = ho()),
            t.release === void 0 &&
                (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__),
                h.SENTRY_RELEASE && h.SENTRY_RELEASE.id && (t.release = h.SENTRY_RELEASE.id)),
            t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0),
            t.sendClientReports === void 0 && (t.sendClientReports = !0);
        let e = {
            ...t,
            stackParser: Mt(t.stackParser || zr),
            integrations: fn(t),
            transport: t.transport || (Xe() ? Wr : qr),
        };
        mn(_t, e), t.autoSessionTracking && Ji();
    }
    function Ji() {
        if (typeof h.document > "u") {
            C && d.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
            return;
        }
        ct({ ignoreDuration: !0 }),
            ut(),
            Re(({ from: t, to: e }) => {
                t !== void 0 && t !== e && (ct({ ignoreDuration: !0 }), ut());
            });
    }
    var Mn = {};
    Ln(Mn, {
        Breadcrumbs: () => Jr,
        Dedupe: () => Qr,
        GlobalHandlers: () => oo,
        HttpContext: () => co,
        LinkedErrors: () => po,
        TryCatch: () => mo,
    });
    a();
    var _o = {};
    //h.Sentry && h.Sentry.Integrations && (_o = h.Sentry.Integrations);
    var ag = { ..._o, ...Fr, ...Mn };
    /*
    Pn.initialize("a10c9fcf-a6c3-4eb0-8d3b-9efd34acfcd0", "https://virus-sucks.containers.piwik.pro"),
        wn({
            dsn: "https://cd9e7a20788740177d46918ec97d6ffa@o4506542784118784.ingest.sentry.io/4506542810398720",
            environment: "production",
            integrations: (t) => t.filter((e) => e.name !== "Dedupe"),
        });
        */
    var mg = void 0;
})();
//# sourceMappingURL=main.js.map
