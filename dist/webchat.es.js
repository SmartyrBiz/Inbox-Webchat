import we, { useState as M, useRef as Z, useEffect as _ } from "react";
import Er from "react-dom";
var Ae = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function hr() {
  if (Ue)
    return K;
  Ue = 1;
  var c = we, f = Symbol.for("react.element"), w = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, m = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(x, d, D) {
    var p, j = {}, b = null, B = null;
    D !== void 0 && (b = "" + D), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (B = d.ref);
    for (p in d)
      v.call(d, p) && !y.hasOwnProperty(p) && (j[p] = d[p]);
    if (x && x.defaultProps)
      for (p in d = x.defaultProps, d)
        j[p] === void 0 && (j[p] = d[p]);
    return { $$typeof: f, type: x, key: b, ref: B, props: j, _owner: m.current };
  }
  return K.Fragment = w, K.jsx = a, K.jsxs = a, K;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function pr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var c = we, f = Symbol.for("react.element"), w = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), I = Symbol.iterator, H = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[H];
      return typeof r == "function" ? r : null;
    }
    var S = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        oe("error", e, t);
      }
    }
    function oe(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var u = t.map(function(s) {
          return String(s);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var E = !1, P = !1, Q = !1, k = !1, G = !1, z;
    z = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === y || G || e === m || e === D || e === p || k || e === B || E || P || Q || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === j || e.$$typeof === a || e.$$typeof === x || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === z || e.getModuleId !== void 0));
    }
    function Ge(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function Ee(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case w:
          return "Portal";
        case y:
          return "Profiler";
        case m:
          return "StrictMode";
        case D:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return Ee(r) + ".Consumer";
          case a:
            var t = e;
            return Ee(t._context) + ".Provider";
          case d:
            return Ge(e, e.render, "ForwardRef");
          case j:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case b: {
            var l = e, u = l._payload, s = l._init;
            try {
              return T(s(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, J = 0, he, pe, be, Pe, xe, me, ye;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Je() {
      {
        if (J === 0) {
          he = console.log, pe = console.info, be = console.warn, Pe = console.error, xe = console.group, me = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
    function Ye() {
      {
        if (J--, J === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: he
            }),
            info: L({}, e, {
              value: pe
            }),
            warn: L({}, e, {
              value: be
            }),
            error: L({}, e, {
              value: Pe
            }),
            group: L({}, e, {
              value: xe
            }),
            groupCollapsed: L({}, e, {
              value: me
            }),
            groupEnd: L({}, e, {
              value: ye
            })
          });
        }
        J < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = S.ReactCurrentDispatcher, ie;
    function ee(e, r, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            ie = n && n[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var le = !1, re;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Xe();
    }
    function Be(e, r) {
      if (!e || le)
        return "";
      {
        var t = re.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      le = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = se.current, se.current = null, Je();
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
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (R) {
              n = R;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var o = R.stack.split(`
`), C = n.stack.split(`
`), g = o.length - 1, A = C.length - 1; g >= 1 && A >= 0 && o[g] !== C[A]; )
            A--;
          for (; g >= 1 && A >= 0; g--, A--)
            if (o[g] !== C[A]) {
              if (g !== 1 || A !== 1)
                do
                  if (g--, A--, A < 0 || o[g] !== C[A]) {
                    var O = `
` + o[g].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, O), O;
                  }
                while (g >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        le = !1, se.current = u, Ye(), Error.prepareStackTrace = l;
      }
      var F = e ? e.displayName || e.name : "", N = F ? ee(F) : "";
      return typeof e == "function" && re.set(e, N), N;
    }
    function Ke(e, r, t) {
      return Be(e, !1);
    }
    function We(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function te(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Be(e, We(e));
      if (typeof e == "string")
        return ee(e);
      switch (e) {
        case D:
          return ee("Suspense");
        case p:
          return ee("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ke(e.render);
          case j:
            return te(e.type, r, t);
          case b: {
            var n = e, l = n._payload, u = n._init;
            try {
              return te(u(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, Re = {}, De = S.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(t);
      } else
        De.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, l) {
      {
        var u = Function.call.bind(Y);
        for (var s in e)
          if (u(e, s)) {
            var o = void 0;
            try {
              if (typeof e[s] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              o = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              o = g;
            }
            o && !(o instanceof Error) && (ne(l), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof o), ne(null)), o instanceof Error && !(o.message in Re) && (Re[o.message] = !0, ne(l), h("Failed %s type: %s", t, o.message), ne(null));
          }
      }
    }
    var Ze = Array.isArray;
    function ce(e) {
      return Ze(e);
    }
    function _e(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Oe(e) {
      if (qe(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(e)), je(e);
    }
    var X = S.ReactCurrentOwner, $e = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, Te, ue;
    ue = {};
    function er(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && X.current && r && X.current.stateNode !== r) {
        var t = T(X.current.type);
        ue[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(X.current.type), e.ref), ue[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          Qe || (Qe = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          Te || (Te = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, n, l, u, s) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: u
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
    function sr(e, r, t, n, l) {
      {
        var u, s = {}, o = null, C = null;
        t !== void 0 && (Oe(t), o = "" + t), rr(r) && (Oe(r.key), o = "" + r.key), er(r) && (C = r.ref, tr(r, l));
        for (u in r)
          Y.call(r, u) && !$e.hasOwnProperty(u) && (s[u] = r[u]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (u in g)
            s[u] === void 0 && (s[u] = g[u]);
        }
        if (o || C) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && nr(s, A), C && ar(s, A);
        }
        return or(e, o, C, l, n, X.current, s);
      }
    }
    var fe = S.ReactCurrentOwner, Se = S.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = te(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var ve;
    ve = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Me() {
      {
        if (fe.current) {
          var e = T(fe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Ie = {};
    function lr(e) {
      {
        var r = Me();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = lr(r);
        if (Ie[t])
          return;
        Ie[t] = !0;
        var n = "";
        e && e._owner && e._owner !== fe.current && (n = " It was passed a child from " + T(e._owner.type) + "."), U(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), U(null);
      }
    }
    function Le(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            de(n) && ke(n, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = $(e);
          if (typeof l == "function" && l !== e.entries)
            for (var u = l.call(e), s; !(s = u.next()).done; )
              de(s.value) && ke(s.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ve) {
          ve = !0;
          var l = T(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            U(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), U(null);
            break;
          }
        }
        e.ref !== null && (U(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    var Ne = {};
    function ze(e, r, t, n, l, u) {
      {
        var s = He(e);
        if (!s) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = ir();
          C ? o += C : o += Me();
          var g;
          e === null ? g = "null" : ce(e) ? g = "array" : e !== void 0 && e.$$typeof === f ? (g = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, o);
        }
        var A = sr(e, r, t, l, u);
        if (A == null)
          return A;
        if (s) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (ce(O)) {
                for (var F = 0; F < O.length; F++)
                  Le(O[F], e);
                Object.freeze && Object.freeze(O);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(O, e);
        }
        if (Y.call(r, "key")) {
          var N = T(e), R = Object.keys(r).filter(function(wr) {
            return wr !== "key";
          }), ge = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[N + ge]) {
            var Ar = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, N, Ar, N), Ne[N + ge] = !0;
          }
        }
        return e === v ? ur(A) : cr(A), A;
      }
    }
    function fr(e, r, t) {
      return ze(e, r, t, !0);
    }
    function vr(e, r, t) {
      return ze(e, r, t, !1);
    }
    var dr = vr, gr = fr;
    W.Fragment = v, W.jsx = dr, W.jsxs = gr;
  }()), W;
}
process.env.NODE_ENV === "production" ? Ae.exports = hr() : Ae.exports = pr();
var i = Ae.exports, q = {}, V = Er;
if (process.env.NODE_ENV === "production")
  q.createRoot = V.createRoot, q.hydrateRoot = V.hydrateRoot;
else {
  var ae = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  q.createRoot = function(c, f) {
    ae.usingClientEntryPoint = !0;
    try {
      return V.createRoot(c, f);
    } finally {
      ae.usingClientEntryPoint = !1;
    }
  }, q.hydrateRoot = function(c, f, w) {
    ae.usingClientEntryPoint = !0;
    try {
      return V.hydrateRoot(c, f, w);
    } finally {
      ae.usingClientEntryPoint = !1;
    }
  };
}
const br = ({ sendMessage: c, sendingMessage: f }) => {
  const [w, v] = M(""), m = () => {
    w.trim() !== "" && (c(w), v(""));
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex w-full", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        className: "flex-1 p-2 border rounded-xl shadow",
        value: w,
        onChange: (y) => v(y.target.value),
        placeholder: "Type a message..."
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: m,
        disabled: w.trim() === "" || f,
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
}, Pr = ({
  message: c,
  sender: f,
  showName: w
}) => {
  const v = f.role === "user";
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col p-1 w-full", children: [
    w && /* @__PURE__ */ i.jsx(
      "span",
      {
        className: `text-sm text-gray-500 flex ${v ? "justify-end" : "justify-start"}`,
        children: f.name
      }
    ),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `flex ${v ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `p-2 rounded-lg ${v ? "bg-gray-200 rounded-tr-none self-end" : "bg-blue-500 text-white rounded-tl-none self-start"}`,
            style: { maxWidth: "90%" },
            children: c
          }
        )
      }
    )
  ] });
}, xr = ({ setUser: c }) => {
  const [f, w] = M(""), [v, m] = M(""), y = () => {
    f.trim() !== "" && v.trim() !== "" && c(f, v, "1db2e22a-746e-4324-98df-572c5996e5da");
  };
  return /* @__PURE__ */ i.jsx("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: /* @__PURE__ */ i.jsxs("div", { className: "p-4 bg-white rounded-lg shadow", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "text",
        className: "w-full p-2 mb-2 border rounded-lg",
        value: f,
        onChange: (a) => w(a.target.value),
        placeholder: "Name"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "email",
        className: "w-full p-2 mb-2 border rounded-lg",
        value: v,
        onChange: (a) => m(a.target.value),
        placeholder: "Email"
      }
    ),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        onClick: y,
        className: "w-full px-4 py-2 text-white bg-blue-500 rounded-lg font-semibold",
        children: "Start Chatting"
      }
    )
  ] }) });
}, mr = ({
  messages: c,
  user: f,
  setUser: w,
  handleSendMessage: v
}) => {
  const m = Z(null);
  _(() => {
    m.current && m.current.scrollIntoView({ behavior: "smooth" });
  }, [c]);
  const y = (a, x, d) => {
    const D = { name: a, email: x, organisationId: d };
    w(D), sessionStorage.setItem("user", JSON.stringify(D));
  };
  return f ? /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col absolute p-4 bg-gray-100 w-full h-full rounded-lg items-center", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "bg-blue-500 text-white text-center py-1 px-2 rounded-lg text-xs font-semibold w-fit mb-1", children: [
      "Powered by",
      " ",
      /* @__PURE__ */ i.jsx("a", { href: "https://smartyr.biz", target: "_blank", rel: "noreferrer", children: "Smartyr" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto relative w-full", children: [
      c.map((a, x) => {
        const d = x === 0 || c[x - 1].sender.name !== a.sender.name;
        return /* @__PURE__ */ i.jsx(
          Pr,
          {
            message: a.message,
            sender: a.sender,
            showName: d
          },
          x
        );
      }),
      /* @__PURE__ */ i.jsx("div", { ref: m })
    ] }),
    /* @__PURE__ */ i.jsx(br, { sendMessage: v, sendingMessage: !1 })
  ] }) : /* @__PURE__ */ i.jsx(xr, { setUser: y });
}, yr = "data:audio/wav;base64,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", Cr = () => {
  const [c, f] = M(!1), [w, v] = M(!1), [m, y] = M([]), [a, x] = M(null), [d, D] = M(0), [p, j] = M(0), b = Z(null), B = Z(null), I = Z(null), H = Z(c);
  _(() => {
    H.current = c;
  }, [c]), _(() => {
    const E = sessionStorage.getItem("user");
    E && x(JSON.parse(E));
  }, []);
  const $ = () => {
    b.current = new WebSocket("ws://localhost:2456"), b.current.onopen = () => {
      var E;
      console.log("WebSocket connection established"), D(0), B.current && clearInterval(B.current), B.current = setInterval(() => {
        var P, Q;
        ((P = b.current) == null ? void 0 : P.readyState) === WebSocket.OPEN && ((Q = b.current) == null || Q.send(JSON.stringify({ type: "ping" })));
      }, 3e4), (E = b.current) == null || E.send(
        JSON.stringify({
          type: "init",
          name: a == null ? void 0 : a.name,
          email: a == null ? void 0 : a.email,
          organisationId: a == null ? void 0 : a.organisationId
        })
      );
    }, b.current.onmessage = (E) => {
      console.log("WebSocket message received");
      const P = JSON.parse(E.data);
      P.type !== "pong" && (y((Q) => [
        ...Q,
        {
          id: P.id,
          message: P.message,
          sender: {
            name: P.sender.name,
            role: P.sender.role
          }
        }
      ]), console.log(P, H.current), H.current || (console.log("Message received while chat is closed"), j((k) => k + 1), new Audio(yr).play()));
    }, b.current.onclose = () => {
      console.log("WebSocket connection closed"), B.current && clearInterval(B.current), S();
    }, b.current.onerror = (E) => {
      console.error("WebSocket error:", E), B.current && clearInterval(B.current), S();
    };
  }, S = () => {
    I.current && clearTimeout(I.current);
    const E = Math.min(3e4, Math.pow(2, d) * 1e3);
    I.current = setTimeout(() => {
      console.log("Attempting to reconnect..."), D((P) => P + 1), $();
    }, E);
  };
  _(() => (a && $(), () => {
    var E;
    B.current && clearInterval(B.current), I.current && clearTimeout(I.current), (E = b.current) == null || E.close();
  }), [a]), _(() => {
    c && p > 0 && j(0);
  }, [c]);
  const h = () => {
    c ? (v(!0), setTimeout(() => {
      f(!1), v(!1);
    }, 100)) : f(!0);
  }, oe = async (E) => {
    const P = (/* @__PURE__ */ new Date()).toISOString();
    y([
      ...m,
      {
        id: P,
        message: E,
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
          message: E,
          name: a == null ? void 0 : a.name,
          email: a == null ? void 0 : a.email,
          organisationId: a == null ? void 0 : a.organisationId
        })
      }
    );
    if (Q.status === 200) {
      const k = await Q.json();
      y(
        (G) => G.map(
          (z) => z.id === P ? {
            ...z,
            id: k.id,
            message: k.message
          } : z
        )
      );
    } else
      y(
        (k) => k.filter((G) => G.id !== P)
      ), alert("Error sending message");
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "h-screen w-screen", children: [
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        className: "absolute bottom-4 justify-center flex items-center right-4 bg-blue-500 w-14 h-14 rounded-full z-50 text-white font-semibold text-lg shadow-lg",
        onClick: h,
        children: [
          /* @__PURE__ */ i.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: `transition-transform duration-300 ${c ? "scale-50" : "scale-0"}`,
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
              className: `transition-transform duration-300 absolute ${c ? "scale-0" : "scale-50"}`,
              children: [
                /* @__PURE__ */ i.jsx("path", { d: "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" }),
                /* @__PURE__ */ i.jsx("path", { d: "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" })
              ]
            }
          ),
          p > 0 && /* @__PURE__ */ i.jsx("div", { className: "absolute top-0 left-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center", children: p })
        ]
      }
    ),
    (c || w) && /* @__PURE__ */ i.jsx(
      "div",
      {
        className: `absolute z-50 bottom-[72px] right-[72px] flex flex-col justify-center items-center w-80 h-[30rem] bg-gray-100 rounded-xl shadow-lg p-4 border webchat-container ${w ? "fade-out" : "fade-in"}`,
        children: /* @__PURE__ */ i.jsx(
          mr,
          {
            messages: m,
            user: a,
            setUser: x,
            handleSendMessage: oe
          }
        )
      }
    )
  ] });
}, Dr = (c) => {
  q.createRoot(c).render(
    /* @__PURE__ */ i.jsx(we.StrictMode, { children: /* @__PURE__ */ i.jsx(Cr, {}) })
  );
};
export {
  Dr as renderWebChat
};
