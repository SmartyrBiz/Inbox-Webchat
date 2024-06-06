import Ve, { useState as L, useRef as te, useEffect as ne } from "react";
import Rr from "react-dom";
function Tr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var We = { exports: {} }, w = We.exports = {}, M, I;
function be() {
  throw new Error("setTimeout has not been defined");
}
function me() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? M = setTimeout : M = be;
  } catch {
    M = be;
  }
  try {
    typeof clearTimeout == "function" ? I = clearTimeout : I = me;
  } catch {
    I = me;
  }
})();
function Ze(n) {
  if (M === setTimeout)
    return setTimeout(n, 0);
  if ((M === be || !M) && setTimeout)
    return M = setTimeout, setTimeout(n, 0);
  try {
    return M(n, 0);
  } catch {
    try {
      return M.call(null, n, 0);
    } catch {
      return M.call(this, n, 0);
    }
  }
}
function Or(n) {
  if (I === clearTimeout)
    return clearTimeout(n);
  if ((I === me || !I) && clearTimeout)
    return I = clearTimeout, clearTimeout(n);
  try {
    return I(n);
  } catch {
    try {
      return I.call(null, n);
    } catch {
      return I.call(this, n);
    }
  }
}
var N = [], V = !1, J, ce = -1;
function Qr() {
  !V || !J || (V = !1, J.length ? N = J.concat(N) : ce = -1, N.length && _e());
}
function _e() {
  if (!V) {
    var n = Ze(Qr);
    V = !0;
    for (var c = N.length; c; ) {
      for (J = N, N = []; ++ce < c; )
        J && J[ce].run();
      ce = -1, c = N.length;
    }
    J = null, V = !1, Or(n);
  }
}
w.nextTick = function(n) {
  var c = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var d = 1; d < arguments.length; d++)
      c[d - 1] = arguments[d];
  N.push(new qe(n, c)), N.length === 1 && !V && Ze(_e);
};
function qe(n, c) {
  this.fun = n, this.array = c;
}
qe.prototype.run = function() {
  this.fun.apply(null, this.array);
};
w.title = "browser";
w.browser = !0;
w.env = {};
w.argv = [];
w.version = "";
w.versions = {};
function z() {
}
w.on = z;
w.addListener = z;
w.once = z;
w.off = z;
w.removeListener = z;
w.removeAllListeners = z;
w.emit = z;
w.prependListener = z;
w.prependOnceListener = z;
w.listeners = function(n) {
  return [];
};
w.binding = function(n) {
  throw new Error("process.binding is not supported");
};
w.cwd = function() {
  return "/";
};
w.chdir = function(n) {
  throw new Error("process.chdir is not supported");
};
w.umask = function() {
  return 0;
};
var Sr = We.exports;
const $e = /* @__PURE__ */ Tr(Sr);
var xe = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Mr() {
  if (Xe)
    return ee;
  Xe = 1;
  var n = Ve, c = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(P, g, R) {
    var b, T = {}, m = null, D = null;
    R !== void 0 && (m = "" + R), g.key !== void 0 && (m = "" + g.key), g.ref !== void 0 && (D = g.ref);
    for (b in g)
      v.call(g, b) && !C.hasOwnProperty(b) && (T[b] = g[b]);
    if (P && P.defaultProps)
      for (b in g = P.defaultProps, g)
        T[b] === void 0 && (T[b] = g[b]);
    return { $$typeof: c, type: P, key: m, ref: D, props: T, _owner: y.current };
  }
  return ee.Fragment = d, ee.jsx = o, ee.jsxs = o, ee;
}
var re = {}, Ke;
function Ir() {
  return Ke || (Ke = 1, $e.env.NODE_ENV !== "production" && function() {
    var n = Ve, c = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), P = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), U = Symbol.iterator, W = "@@iterator";
    function ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[W];
      return typeof r == "function" ? r : null;
    }
    var k = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        le("error", e, t);
      }
    }
    function le(e, r, t) {
      {
        var a = k.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var f = t.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var p = !1, x = !1, Q = !1, F = !1, Z = !1, Y;
    Y = Symbol.for("react.module.reference");
    function er(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === C || Z || e === y || e === R || e === b || F || e === D || p || x || Q || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === T || e.$$typeof === o || e.$$typeof === P || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Y || e.getModuleId !== void 0));
    }
    function rr(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function Pe(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case d:
          return "Portal";
        case C:
          return "Profiler";
        case y:
          return "StrictMode";
        case R:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            var r = e;
            return Pe(r) + ".Consumer";
          case o:
            var t = e;
            return Pe(t._context) + ".Provider";
          case g:
            return rr(e, e.render, "ForwardRef");
          case T:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case m: {
            var l = e, f = l._payload, i = l._init;
            try {
              return S(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, _ = 0, ye, Ce, Be, De, je, Re, Te;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function tr() {
      {
        if (_ === 0) {
          ye = console.log, Ce = console.info, Be = console.warn, De = console.error, je = console.group, Re = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
        _++;
      }
    }
    function nr() {
      {
        if (_--, _ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: ye
            }),
            info: H({}, e, {
              value: Ce
            }),
            warn: H({}, e, {
              value: Be
            }),
            error: H({}, e, {
              value: De
            }),
            group: H({}, e, {
              value: je
            }),
            groupCollapsed: H({}, e, {
              value: Re
            }),
            groupEnd: H({}, e, {
              value: Te
            })
          });
        }
        _ < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = k.ReactCurrentDispatcher, de;
    function oe(e, r, t) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            de = a && a[1] || "";
          }
        return `
` + de + e;
      }
    }
    var ve = !1, se;
    {
      var ar = typeof WeakMap == "function" ? WeakMap : Map;
      se = new ar();
    }
    function Qe(e, r) {
      if (!e || ve)
        return "";
      {
        var t = se.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      ve = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = fe.current, fe.current = null, tr();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (j) {
              a = j;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (j) {
              a = j;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            a = j;
          }
          e();
        }
      } catch (j) {
        if (j && a && typeof j.stack == "string") {
          for (var s = j.stack.split(`
`), B = a.stack.split(`
`), A = s.length - 1, h = B.length - 1; A >= 1 && h >= 0 && s[A] !== B[h]; )
            h--;
          for (; A >= 1 && h >= 0; A--, h--)
            if (s[A] !== B[h]) {
              if (A !== 1 || h !== 1)
                do
                  if (A--, h--, h < 0 || s[A] !== B[h]) {
                    var O = `
` + s[A].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, O), O;
                  }
                while (A >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        ve = !1, fe.current = f, nr(), Error.prepareStackTrace = l;
      }
      var K = e ? e.displayName || e.name : "", G = K ? oe(K) : "";
      return typeof e == "function" && se.set(e, G), G;
    }
    function or(e, r, t) {
      return Qe(e, !1);
    }
    function sr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Qe(e, sr(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case R:
          return oe("Suspense");
        case b:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return or(e.render);
          case T:
            return ie(e.type, r, t);
          case m: {
            var a = e, l = a._payload, f = a._init;
            try {
              return ie(f(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Se = {}, Me = k.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        Me.setExtraStackFrame(t);
      } else
        Me.setExtraStackFrame(null);
    }
    function ir(e, r, t, a, l) {
      {
        var f = Function.call.bind(q);
        for (var i in e)
          if (f(e, i)) {
            var s = void 0;
            try {
              if (typeof e[i] != "function") {
                var B = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              s = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              s = A;
            }
            s && !(s instanceof Error) && (ue(l), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof s), ue(null)), s instanceof Error && !(s.message in Se) && (Se[s.message] = !0, ue(l), E("Failed %s type: %s", t, s.message), ue(null));
          }
      }
    }
    var ur = Array.isArray;
    function ge(e) {
      return ur(e);
    }
    function cr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function lr(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function ke(e) {
      if (lr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Ie(e);
    }
    var $ = k.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ne, Ae;
    Ae = {};
    function dr(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vr(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gr(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = S($.current.type);
        Ae[t] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S($.current.type), e.ref), Ae[t] = !0);
      }
    }
    function Ar(e, r) {
      {
        var t = function() {
          Le || (Le = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function wr(e, r) {
      {
        var t = function() {
          Ne || (Ne = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var hr = function(e, r, t, a, l, f, i) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function pr(e, r, t, a, l) {
      {
        var f, i = {}, s = null, B = null;
        t !== void 0 && (ke(t), s = "" + t), vr(r) && (ke(r.key), s = "" + r.key), dr(r) && (B = r.ref, gr(r, l));
        for (f in r)
          q.call(r, f) && !fr.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var A = e.defaultProps;
          for (f in A)
            i[f] === void 0 && (i[f] = A[f]);
        }
        if (s || B) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && Ar(i, h), B && wr(i, h);
        }
        return hr(e, s, B, l, a, $.current, i);
      }
    }
    var we = k.ReactCurrentOwner, ze = k.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(t);
      } else
        ze.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Ue() {
      {
        if (we.current) {
          var e = S(we.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Er(e) {
      return "";
    }
    var Fe = {};
    function br(e) {
      {
        var r = Ue();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function He(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = br(r);
        if (Fe[t])
          return;
        Fe[t] = !0;
        var a = "";
        e && e._owner && e._owner !== we.current && (a = " It was passed a child from " + S(e._owner.type) + "."), X(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), X(null);
      }
    }
    function Ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            pe(a) && He(a, r);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = ae(e);
          if (typeof l == "function" && l !== e.entries)
            for (var f = l.call(e), i; !(i = f.next()).done; )
              pe(i.value) && He(i.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          ir(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !he) {
          he = !0;
          var l = S(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            X(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Je = {};
    function Ye(e, r, t, a, l, f) {
      {
        var i = er(e);
        if (!i) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Er();
          B ? s += B : s += Ue();
          var A;
          e === null ? A = "null" : ge(e) ? A = "array" : e !== void 0 && e.$$typeof === c ? (A = "<" + (S(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, s);
        }
        var h = pr(e, r, t, l, f);
        if (h == null)
          return h;
        if (i) {
          var O = r.children;
          if (O !== void 0)
            if (a)
              if (ge(O)) {
                for (var K = 0; K < O.length; K++)
                  Ge(O[K], e);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(O, e);
        }
        if (q.call(r, "key")) {
          var G = S(e), j = Object.keys(r).filter(function(jr) {
            return jr !== "key";
          }), Ee = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[G + Ee]) {
            var Dr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, G, Dr, G), Je[G + Ee] = !0;
          }
        }
        return e === v ? xr(h) : mr(h), h;
      }
    }
    function Pr(e, r, t) {
      return Ye(e, r, t, !0);
    }
    function yr(e, r, t) {
      return Ye(e, r, t, !1);
    }
    var Cr = yr, Br = Pr;
    re.Fragment = v, re.jsx = Cr, re.jsxs = Br;
  }()), re;
}
$e.env.NODE_ENV === "production" ? xe.exports = Mr() : xe.exports = Ir();
var u = xe.exports;
const kr = ({ sendMessage: n, sendingMessage: c }) => {
  const [d, v] = L(""), y = () => {
    d.trim() !== "" && (n(d), v(""));
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "flex w-full", children: [
    /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "text",
        className: "flex-1 p-2 border rounded-xl shadow",
        value: d,
        onChange: (C) => v(C.target.value),
        placeholder: "Type a message..."
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: y,
        disabled: d.trim() === "" || c,
        className: "ml-2 px-3 text-white bg-blue-500 disabled:bg-blue-600 rounded-xl shadow aspect-square transition-colors",
        children: /* @__PURE__ */ u.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "size-4",
            children: /* @__PURE__ */ u.jsx("path", { d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" })
          }
        )
      }
    )
  ] });
}, Lr = ({
  message: n,
  sender: c,
  showName: d
}) => {
  const v = c.role === "user";
  return /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col p-1 w-full", children: [
    d && /* @__PURE__ */ u.jsx(
      "span",
      {
        className: `text-sm text-gray-500 flex ${v ? "justify-end" : "justify-start"}`,
        children: c.name
      }
    ),
    /* @__PURE__ */ u.jsx(
      "div",
      {
        className: `flex ${v ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ u.jsx(
          "div",
          {
            className: `p-2 rounded-lg ${v ? "bg-gray-200 rounded-tr-none self-end" : "bg-blue-500 text-white rounded-tl-none self-start"}`,
            style: { maxWidth: "90%" },
            children: n
          }
        )
      }
    )
  ] });
}, Nr = ({ setUser: n }) => {
  const [c, d] = L(""), [v, y] = L(""), C = () => {
    c.trim() !== "" && v.trim() !== "" && n(c, v, "1db2e22a-746e-4324-98df-572c5996e5da");
  };
  return /* @__PURE__ */ u.jsx("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: /* @__PURE__ */ u.jsxs("div", { className: "p-4 bg-white rounded-lg shadow", children: [
    /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "text",
        className: "w-full p-2 mb-2 border rounded-lg",
        value: c,
        onChange: (o) => d(o.target.value),
        placeholder: "Name"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "email",
        className: "w-full p-2 mb-2 border rounded-lg",
        value: v,
        onChange: (o) => y(o.target.value),
        placeholder: "Email"
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        onClick: C,
        className: "w-full px-4 py-2 text-white bg-blue-500 rounded-lg font-semibold",
        children: "Start Chatting"
      }
    )
  ] }) });
}, zr = ({
  messages: n,
  user: c,
  setUser: d,
  handleSendMessage: v
}) => {
  const y = te(null);
  ne(() => {
    y.current && y.current.scrollIntoView({ behavior: "smooth" });
  }, [n]);
  const C = (o, P, g) => {
    const R = { name: o, email: P, organisationId: g };
    d(R), sessionStorage.setItem("user", JSON.stringify(R));
  };
  return c ? /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col absolute p-4 bg-gray-100 w-full h-full rounded-lg items-center", children: [
    /* @__PURE__ */ u.jsxs("div", { className: "bg-blue-500 text-white text-center py-1 px-2 rounded-lg text-xs font-semibold w-fit mb-1", children: [
      "Powered by",
      " ",
      /* @__PURE__ */ u.jsx("a", { href: "https://smartyr.biz", target: "_blank", rel: "noreferrer", children: "Smartyr" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex-1 overflow-y-auto relative w-full", children: [
      n.map((o, P) => {
        const g = P === 0 || n[P - 1].sender.name !== o.sender.name;
        return /* @__PURE__ */ u.jsx(
          Lr,
          {
            message: o.message,
            sender: o.sender,
            showName: g
          },
          P
        );
      }),
      /* @__PURE__ */ u.jsx("div", { ref: y })
    ] }),
    /* @__PURE__ */ u.jsx(kr, { sendMessage: v, sendingMessage: !1 })
  ] }) : /* @__PURE__ */ u.jsx(Nr, { setUser: C });
}, Ur = "data:audio/wav;base64,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", Fr = () => {
  const [n, c] = L(!1), [d, v] = L(!1), [y, C] = L([]), [o, P] = L(null), [g, R] = L(0), [b, T] = L(0), m = te(null), D = te(null), U = te(null), W = te(n);
  ne(() => {
    W.current = n;
  }, [n]), ne(() => {
    const p = sessionStorage.getItem("user");
    p && P(JSON.parse(p));
  }, []);
  const ae = () => {
    m.current = new WebSocket("ws://localhost:2456"), m.current.onopen = () => {
      var p;
      console.log("WebSocket connection established"), R(0), D.current && clearInterval(D.current), D.current = setInterval(() => {
        var x, Q;
        ((x = m.current) == null ? void 0 : x.readyState) === WebSocket.OPEN && ((Q = m.current) == null || Q.send(JSON.stringify({ type: "ping" })));
      }, 3e4), (p = m.current) == null || p.send(
        JSON.stringify({
          type: "init",
          name: o == null ? void 0 : o.name,
          email: o == null ? void 0 : o.email,
          organisationId: o == null ? void 0 : o.organisationId
        })
      );
    }, m.current.onmessage = (p) => {
      console.log("WebSocket message received");
      const x = JSON.parse(p.data);
      x.type !== "pong" && (C((Q) => [
        ...Q,
        {
          id: x.id,
          message: x.message,
          sender: {
            name: x.sender.name,
            role: x.sender.role
          }
        }
      ]), console.log(x, W.current), W.current || (console.log("Message received while chat is closed"), T((F) => F + 1), new Audio(Ur).play()));
    }, m.current.onclose = () => {
      console.log("WebSocket connection closed"), D.current && clearInterval(D.current), k();
    }, m.current.onerror = (p) => {
      console.error("WebSocket error:", p), D.current && clearInterval(D.current), k();
    };
  }, k = () => {
    U.current && clearTimeout(U.current);
    const p = Math.min(3e4, Math.pow(2, g) * 1e3);
    U.current = setTimeout(() => {
      console.log("Attempting to reconnect..."), R((x) => x + 1), ae();
    }, p);
  };
  ne(() => (o && ae(), () => {
    var p;
    D.current && clearInterval(D.current), U.current && clearTimeout(U.current), (p = m.current) == null || p.close();
  }), [o]), ne(() => {
    n && b > 0 && T(0);
  }, [n]);
  const E = () => {
    n ? (v(!0), setTimeout(() => {
      c(!1), v(!1);
    }, 100)) : c(!0);
  }, le = async (p) => {
    const x = (/* @__PURE__ */ new Date()).toISOString();
    C([
      ...y,
      {
        id: x,
        message: p,
        sender: {
          name: (o == null ? void 0 : o.name) || "User",
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
          message: p,
          name: o == null ? void 0 : o.name,
          email: o == null ? void 0 : o.email,
          organisationId: o == null ? void 0 : o.organisationId
        })
      }
    );
    if (Q.status === 200) {
      const F = await Q.json();
      C(
        (Z) => Z.map(
          (Y) => Y.id === x ? {
            ...Y,
            id: F.id,
            message: F.message
          } : Y
        )
      );
    } else
      C(
        (F) => F.filter((Z) => Z.id !== x)
      ), alert("Error sending message");
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "h-screen w-screen", children: [
    /* @__PURE__ */ u.jsxs(
      "button",
      {
        className: "absolute bottom-4 justify-center flex items-center right-4 bg-blue-500 w-14 h-14 rounded-full z-50 text-white font-semibold text-lg shadow-lg",
        onClick: E,
        children: [
          /* @__PURE__ */ u.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: `transition-transform duration-300 ${n ? "scale-50" : "scale-0"}`,
              children: /* @__PURE__ */ u.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ u.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: `transition-transform duration-300 absolute ${n ? "scale-0" : "scale-50"}`,
              children: [
                /* @__PURE__ */ u.jsx("path", { d: "M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" }),
                /* @__PURE__ */ u.jsx("path", { d: "M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" })
              ]
            }
          ),
          b > 0 && /* @__PURE__ */ u.jsx("div", { className: "absolute top-0 left-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center", children: b })
        ]
      }
    ),
    (n || d) && /* @__PURE__ */ u.jsx(
      "div",
      {
        className: `absolute z-50 bottom-[72px] right-[72px] flex flex-col justify-center items-center w-80 h-[30rem] bg-gray-100 rounded-xl shadow-lg p-4 border webchat-container ${d ? "fade-out" : "fade-in"}`,
        children: /* @__PURE__ */ u.jsx(
          zr,
          {
            messages: y,
            user: o,
            setUser: P,
            handleSendMessage: le
          }
        )
      }
    )
  ] });
}, Jr = (n) => {
  Rr.render(/* @__PURE__ */ u.jsx(Fr, {}), n);
};
export {
  Jr as default
};
