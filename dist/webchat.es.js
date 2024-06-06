import Ne, { useState as S, useRef as W, useEffect as Z } from "react";
import gr from "react-dom";
var ve = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Ar() {
  if (ke)
    return K;
  ke = 1;
  var u = Ne, A = Symbol.for("react.element"), p = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, m = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(x, v, R) {
    var h, j = {}, b = null, B = null;
    R !== void 0 && (b = "" + R), v.key !== void 0 && (b = "" + v.key), v.ref !== void 0 && (B = v.ref);
    for (h in v)
      f.call(v, h) && !C.hasOwnProperty(h) && (j[h] = v[h]);
    if (x && x.defaultProps)
      for (h in v = x.defaultProps, v)
        j[h] === void 0 && (j[h] = v[h]);
    return { $$typeof: A, type: x, key: b, ref: B, props: j, _owner: m.current };
  }
  return K.Fragment = p, K.jsx = a, K.jsxs = a, K;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function wr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Ne, A = Symbol.for("react.element"), p = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), x = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), I = Symbol.iterator, F = "@@iterator";
    function _(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[F];
      return typeof r == "function" ? r : null;
    }
    var M = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        te("error", e, t);
      }
    }
    function te(e, r, t) {
      {
        var n = M.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var c = t.map(function(s) {
          return String(s);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var w = !1, P = !1, Q = !1, k = !1, G = !1, z;
    z = Symbol.for("react.module.reference");
    function ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === C || G || e === m || e === R || e === h || k || e === B || w || P || Q || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === j || e.$$typeof === a || e.$$typeof === x || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === z || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case p:
          return "Portal";
        case C:
          return "Profiler";
        case m:
          return "StrictMode";
        case R:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return de(r) + ".Consumer";
          case a:
            var t = e;
            return de(t._context) + ".Provider";
          case v:
            return Ue(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case b: {
            var l = e, c = l._payload, s = l._init;
            try {
              return T(s(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, J = 0, ge, Ae, we, Ee, pe, he, be;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function He() {
      {
        if (J === 0) {
          ge = console.log, Ae = console.info, we = console.warn, Ee = console.error, pe = console.group, he = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        J++;
      }
    }
    function Fe() {
      {
        if (J--, J === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: ge
            }),
            info: L({}, e, {
              value: Ae
            }),
            warn: L({}, e, {
              value: we
            }),
            error: L({}, e, {
              value: Ee
            }),
            group: L({}, e, {
              value: pe
            }),
            groupCollapsed: L({}, e, {
              value: he
            }),
            groupEnd: L({}, e, {
              value: be
            })
          });
        }
        J < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = M.ReactCurrentDispatcher, ae;
    function q(e, r, t) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            ae = n && n[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var oe = !1, $;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new Ge();
    }
    function xe(e, r) {
      if (!e || oe)
        return "";
      {
        var t = $.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      oe = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = ne.current, ne.current = null, He();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (D) {
              n = D;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (D) {
              n = D;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            n = D;
          }
          e();
        }
      } catch (D) {
        if (D && n && typeof D.stack == "string") {
          for (var o = D.stack.split(`
`), y = n.stack.split(`
`), d = o.length - 1, g = y.length - 1; d >= 1 && g >= 0 && o[d] !== y[g]; )
            g--;
          for (; d >= 1 && g >= 0; d--, g--)
            if (o[d] !== y[g]) {
              if (d !== 1 || g !== 1)
                do
                  if (d--, g--, g < 0 || o[d] !== y[g]) {
                    var O = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && $.set(e, O), O;
                  }
                while (d >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = c, Fe(), Error.prepareStackTrace = l;
      }
      var H = e ? e.displayName || e.name : "", N = H ? q(H) : "";
      return typeof e == "function" && $.set(e, N), N;
    }
    function Je(e, r, t) {
      return xe(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ee(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Ye(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case R:
          return q("Suspense");
        case h:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Je(e.render);
          case j:
            return ee(e.type, r, t);
          case b: {
            var n = e, l = n._payload, c = n._init;
            try {
              return ee(c(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, me = {}, Ce = M.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Xe(e, r, t, n, l) {
      {
        var c = Function.call.bind(Y);
        for (var s in e)
          if (c(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              o = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (re(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof o), re(null)), o instanceof Error && !(o.message in me) && (me[o.message] = !0, re(l), E("Failed %s type: %s", t, o.message), re(null));
          }
      }
    }
    var Ke = Array.isArray;
    function se(e) {
      return Ke(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function We(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function Be(e) {
      if (We(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), ye(e);
    }
    var X = M.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Re, ie;
    ie = {};
    function _e(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function qe(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function $e(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var t = T(X.current.type);
        ie[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(X.current.type), e.ref), ie[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          De || (De = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, l, c, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, n, l) {
      {
        var c, s = {}, o = null, y = null;
        t !== void 0 && (Be(t), o = "" + t), qe(r) && (Be(r.key), o = "" + r.key), _e(r) && (y = r.ref, $e(r, l));
        for (c in r)
          Y.call(r, c) && !Ze.hasOwnProperty(c) && (s[c] = r[c]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (c in d)
            s[c] === void 0 && (s[c] = d[c]);
        }
        if (o || y) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(s, g), y && rr(s, g);
        }
        return tr(e, o, y, l, n, X.current, s);
      }
    }
    var le = M.ReactCurrentOwner, je = M.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = ee(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function Oe() {
      {
        if (le.current) {
          var e = T(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Qe = {};
    function or(e) {
      {
        var r = Oe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Qe[t])
          return;
        Qe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== le.current && (n = " It was passed a child from " + T(e._owner.type) + "."), U(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), U(null);
      }
    }
    function Me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ue(n) && Te(n, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = _(e);
          if (typeof l == "function" && l !== e.entries)
            for (var c = l.call(e), s; !(s = c.next()).done; )
              ue(s.value) && Te(s.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Xe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ce) {
          ce = !0;
          var l = T(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            U(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var Se = {};
    function Ie(e, r, t, n, l, c) {
      {
        var s = ze(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ar();
          y ? o += y : o += Oe();
          var d;
          e === null ? d = "null" : se(e) ? d = "array" : e !== void 0 && e.$$typeof === A ? (d = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var g = nr(e, r, t, l, c);
        if (g == null)
          return g;
        if (s) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (se(O)) {
                for (var H = 0; H < O.length; H++)
                  Me(O[H], e);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(O, e);
        }
        if (Y.call(r, "key")) {
          var N = T(e), D = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), fe = D.length > 0 ? "{key: someKey, " + D.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[N + fe]) {
            var vr = D.length > 0 ? "{" + D.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fe, N, vr, N), Se[N + fe] = !0;
          }
        }
        return e === f ? ir(g) : sr(g), g;
      }
    }
    function lr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var ur = cr, fr = lr;
    V.Fragment = f, V.jsx = ur, V.jsxs = fr;
  }()), V;
}
process.env.NODE_ENV === "production" ? ve.exports = Ar() : ve.exports = wr();
var i = ve.exports;
const Er = ({ sendMessage: u, sendingMessage: A }) => {
  const [p, f] = S(""), m = () => {
    p.trim() !== "" && (u(p), f(""));
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex w-full", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        className: "flex-1 p-2 border rounded-xl shadow",
        value: p,
        onChange: (C) => f(C.target.value),
        placeholder: "Type a message..."
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: m,
        disabled: p.trim() === "" || A,
        className: "ml-2 px-3 text-white bg-blue-500 disabled:bg-blue-600 rounded-xl shadow aspect-square transition-colors",
        children: /* @__PURE__ */ i.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "size-4",
            children: /* @__PURE__ */ i.jsx("path", { d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" })
          }
        )
      }
    )
  ] });
}, pr = ({
  message: u,
  sender: A,
  showName: p
}) => {
  const f = A.role === "user";
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col p-1 w-full", children: [
    p && /* @__PURE__ */ i.jsx(
      "span",
      {
        className: `text-sm text-gray-500 flex ${f ? "justify-end" : "justify-start"}`,
        children: A.name
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `flex ${f ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `p-2 rounded-lg ${f ? "bg-gray-200 rounded-tr-none self-end" : "bg-blue-500 text-white rounded-tl-none self-start"}`,
            style: { maxWidth: "90%" },
            children: u
          }
        )
      }
    )
  ] });
}, hr = ({ setUser: u }) => {
  const [A, p] = S(""), [f, m] = S(""), C = () => {
    A.trim() !== "" && f.trim() !== "" && u(A, f, "1db2e22a-746e-4324-98df-572c5996e5da");
  };
  return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: /* @__PURE__ */ i.jsxs("div", { className: "p-4 bg-white rounded-lg shadow", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        className: "w-full p-2 mb-2 border rounded-lg",
        value: A,
        onChange: (a) => p(a.target.value),
        placeholder: "Name"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "email",
        className: "w-full p-2 mb-2 border rounded-lg",
        value: f,
        onChange: (a) => m(a.target.value),
        placeholder: "Email"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: C,
        className: "w-full px-4 py-2 text-white bg-blue-500 rounded-lg font-semibold",
        children: "Start Chatting"
      }
    )
  ] }) });
}, br = ({
  messages: u,
  user: A,
  setUser: p,
  handleSendMessage: f
}) => {
  const m = W(null);
  Z(() => {
    m.current && m.current.scrollIntoView({ behavior: "smooth" });
  }, [u]);
  const C = (a, x, v) => {
    const R = { name: a, email: x, organisationId: v };
    p(R), sessionStorage.setItem("user", JSON.stringify(R));
  };
  return A ? /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col absolute p-4 bg-gray-100 w-full h-full rounded-lg items-center", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "bg-blue-500 text-white text-center py-1 px-2 rounded-lg text-xs font-semibold w-fit mb-1", children: [
      "Powered by",
      " ",
      /* @__PURE__ */ i.jsx("a", { href: "https://smartyr.biz", target: "_blank", rel: "noreferrer", children: "Smartyr" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto relative w-full", children: [
      u.map((a, x) => {
        const v = x === 0 || u[x - 1].sender.name !== a.sender.name;
        return /* @__PURE__ */ i.jsx(
          pr,
          {
            message: a.message,
            sender: a.sender,
            showName: v
          },
          x
        );
      }),
      /* @__PURE__ */ i.jsx("div", { ref: m })
    ] }),
    /* @__PURE__ */ i.jsx(Er, { sendMessage: f, sendingMessage: !1 })
  ] }) : /* @__PURE__ */ i.jsx(hr, { setUser: C });
}, Pr = "data:audio/wav;base64,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", xr = () => {
  const [u, A] = S(!1), [p, f] = S(!1), [m, C] = S([]), [a, x] = S(null), [v, R] = S(0), [h, j] = S(0), b = W(null), B = W(null), I = W(null), F = W(u);
  Z(() => {
    F.current = u;
  }, [u]), Z(() => {
    const w = sessionStorage.getItem("user");
    w && x(JSON.parse(w));
  }, []);
  const _ = () => {
    b.current = new WebSocket("ws://localhost:2456"), b.current.onopen = () => {
      var w;
      console.log("WebSocket connection established"), R(0), B.current && clearInterval(B.current), B.current = setInterval(() => {
        var P, Q;
        ((P = b.current) == null ? void 0 : P.readyState) === WebSocket.OPEN && ((Q = b.current) == null || Q.send(JSON.stringify({ type: "ping" })));
      }, 3e4), (w = b.current) == null || w.send(
        JSON.stringify({
          type: "init",
          name: a == null ? void 0 : a.name,
          email: a == null ? void 0 : a.email,
          organisationId: a == null ? void 0 : a.organisationId
        })
      );
    }, b.current.onmessage = (w) => {
      console.log("WebSocket message received");
      const P = JSON.parse(w.data);
      P.type !== "pong" && (C((Q) => [
        ...Q,
        {
          id: P.id,
          message: P.message,
          sender: {
            name: P.sender.name,
            role: P.sender.role
          }
        }
      ]), console.log(P, F.current), F.current || (console.log("Message received while chat is closed"), j((k) => k + 1), new Audio(Pr).play()));
    }, b.current.onclose = () => {
      console.log("WebSocket connection closed"), B.current && clearInterval(B.current), M();
    }, b.current.onerror = (w) => {
      console.error("WebSocket error:", w), B.current && clearInterval(B.current), M();
    };
  }, M = () => {
    I.current && clearTimeout(I.current);
    const w = Math.min(3e4, Math.pow(2, v) * 1e3);
    I.current = setTimeout(() => {
      console.log("Attempting to reconnect..."), R((P) => P + 1), _();
    }, w);
  };
  Z(() => (a && _(), () => {
    var w;
    B.current && clearInterval(B.current), I.current && clearTimeout(I.current), (w = b.current) == null || w.close();
  }), [a]), Z(() => {
    u && h > 0 && j(0);
  }, [u]);
  const E = () => {
    u ? (f(!0), setTimeout(() => {
      A(!1), f(!1);
    }, 100)) : A(!0);
  }, te = async (w) => {
    const P = (/* @__PURE__ */ new Date()).toISOString();
    C([
      ...m,
      {
        id: P,
        message: w,
        sender: {
          name: (a == null ? void 0 : a.name) || "User",
          role: "user"
        }
      }
    ]);
    const Q = await fetch(
      "http://localhost:4444/api/v1/webchat/message",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          message: w,
          name: a == null ? void 0 : a.name,
          email: a == null ? void 0 : a.email,
          organisationId: a == null ? void 0 : a.organisationId
        })
      }
    );
    if (Q.status === 200) {
      const k = await Q.json();
      C(
        (G) => G.map(
          (z) => z.id === P ? {
            ...z,
            id: k.id,
            message: k.message
          } : z
        )
      );
    } else
      C(
        (k) => k.filter((G) => G.id !== P)
      ), alert("Error sending message");
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "h-screen w-screen", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "absolute bottom-4 justify-center flex items-center right-4 bg-blue-500 w-14 h-14 rounded-full z-50 text-white font-semibold text-lg shadow-lg",
        onClick: E,
        children: [
          /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: `transition-transform duration-300 ${u ? "scale-50" : "scale-0"}`,
              children: /* @__PURE__ */ i.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: `transition-transform duration-300 absolute ${u ? "scale-0" : "scale-50"}`,
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" })
              ]
            }
          ),
          h > 0 && /* @__PURE__ */ i.jsx("div", { className: "absolute top-0 left-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center", children: h })
        ]
      }
    ),
    (u || p) && /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `absolute z-50 bottom-[72px] right-[72px] flex flex-col justify-center items-center w-80 h-[30rem] bg-gray-100 rounded-xl shadow-lg p-4 border webchat-container ${p ? "fade-out" : "fade-in"}`,
        children: /* @__PURE__ */ i.jsx(
          br,
          {
            messages: m,
            user: a,
            setUser: x,
            handleSendMessage: te
          }
        )
      }
    )
  ] });
}, mr = (u) => {
  gr.render(/* @__PURE__ */ i.jsx(xr, {}), u);
};
mr(document.getElementById("root"));
export {
  mr as default
};
