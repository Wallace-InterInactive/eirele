var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime$1 = { exports: {} };
var reactJsxRuntime_production_min$1 = {};
var react$1 = { exports: {} };
var react_production_min$1 = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$5 = Symbol.for("react.fragment"), q$4 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$3 = Symbol.for("react.context"), v$4 = Symbol.for("react.forward_ref"), w$3 = Symbol.for("react.suspense"), x$3 = Symbol.for("react.memo"), y$2 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$4(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$3 && a[z$3] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$4 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$4 = Object.assign, D$3 = {};
function E$3(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$4;
}
E$3.prototype.isReactComponent = {};
E$3.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$3.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$3.prototype;
function G$2(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$4;
}
var H$3 = G$2.prototype = new F$1();
H$3.constructor = G$2;
C$4(H$3, E$3.prototype);
H$3.isPureReactComponent = true;
var I$4 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$3 = { key: true, ref: true, __self: true, __source: true };
function M$4(a, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$1.call(b2, d2) && !L$3.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$3, type: a, key: k2, ref: h2, props: c2, _owner: K$2.current };
}
function N$3(a, b2) {
  return { $$typeof: l$3, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$3(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$3;
}
function escape$2(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$4 = /\/+/g;
function Q$3(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape$2("" + a.key) : b2.toString(36);
}
function R$3(a, b2, e2, d2, c2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h2 = false;
  if (null === a) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$3:
        case n$3:
          h2 = true;
      }
  }
  if (h2) return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$3(h2, 0) : d2, I$4(c2) ? (e2 = "", null != a && (e2 = a.replace(P$4, "$&/") + "/"), R$3(c2, b2, e2, "", function(a2) {
    return a2;
  })) : null != c2 && (O$3(c2) && (c2 = N$3(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$4, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$4(a)) for (var g2 = 0; g2 < a.length; g2++) {
    k2 = a[g2];
    var f2 = d2 + Q$3(k2, g2);
    h2 += R$3(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$4(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q$3(k2, g2++), h2 += R$3(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$4(a, b2, e2) {
  if (null == a) return a;
  var d2 = [], c2 = 0;
  R$3(a, d2, "", "", function(a2) {
    return b2.call(e2, a2, c2++);
  });
  return d2;
}
function T$4(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$2 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$2 };
function X$3() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min$1.Children = { map: S$4, forEach: function(a, b2, e2) {
  S$4(a, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b2 = 0;
  S$4(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$4(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$3(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min$1.Component = E$3;
react_production_min$1.Fragment = p$5;
react_production_min$1.Profiler = r$2;
react_production_min$1.PureComponent = G$2;
react_production_min$1.StrictMode = q$4;
react_production_min$1.Suspense = w$3;
react_production_min$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min$1.act = X$3;
react_production_min$1.cloneElement = function(a, b2, e2) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$4({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$2.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
    for (f2 in b2) J$1.call(b2, f2) && !L$3.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$3, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min$1.createContext = function(a) {
  a = { $$typeof: u$3, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$1, _context: a };
  return a.Consumer = a;
};
react_production_min$1.createElement = M$4;
react_production_min$1.createFactory = function(a) {
  var b2 = M$4.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min$1.createRef = function() {
  return { current: null };
};
react_production_min$1.forwardRef = function(a) {
  return { $$typeof: v$4, render: a };
};
react_production_min$1.isValidElement = O$3;
react_production_min$1.lazy = function(a) {
  return { $$typeof: y$2, _payload: { _status: -1, _result: a }, _init: T$4 };
};
react_production_min$1.memo = function(a, b2) {
  return { $$typeof: x$3, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min$1.startTransition = function(a) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min$1.unstable_act = X$3;
react_production_min$1.useCallback = function(a, b2) {
  return U$2.current.useCallback(a, b2);
};
react_production_min$1.useContext = function(a) {
  return U$2.current.useContext(a);
};
react_production_min$1.useDebugValue = function() {
};
react_production_min$1.useDeferredValue = function(a) {
  return U$2.current.useDeferredValue(a);
};
react_production_min$1.useEffect = function(a, b2) {
  return U$2.current.useEffect(a, b2);
};
react_production_min$1.useId = function() {
  return U$2.current.useId();
};
react_production_min$1.useImperativeHandle = function(a, b2, e2) {
  return U$2.current.useImperativeHandle(a, b2, e2);
};
react_production_min$1.useInsertionEffect = function(a, b2) {
  return U$2.current.useInsertionEffect(a, b2);
};
react_production_min$1.useLayoutEffect = function(a, b2) {
  return U$2.current.useLayoutEffect(a, b2);
};
react_production_min$1.useMemo = function(a, b2) {
  return U$2.current.useMemo(a, b2);
};
react_production_min$1.useReducer = function(a, b2, e2) {
  return U$2.current.useReducer(a, b2, e2);
};
react_production_min$1.useRef = function(a) {
  return U$2.current.useRef(a);
};
react_production_min$1.useState = function(a) {
  return U$2.current.useState(a);
};
react_production_min$1.useSyncExternalStore = function(a, b2, e2) {
  return U$2.current.useSyncExternalStore(a, b2, e2);
};
react_production_min$1.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min$1.version = "18.3.1";
{
  react$1.exports = react_production_min$1;
}
var reactExports$1 = react$1.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports$1);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$3 = reactExports$1, k$3 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$4 = Object.prototype.hasOwnProperty, n$2 = f$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$4 = { key: true, ref: true, __self: true, __source: true };
function q$3(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a) m$4.call(a, b2) && !p$4.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$3, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
}
reactJsxRuntime_production_min$1.Fragment = l$2;
reactJsxRuntime_production_min$1.jsx = q$3;
reactJsxRuntime_production_min$1.jsxs = q$3;
{
  jsxRuntime$1.exports = reactJsxRuntime_production_min$1;
}
var jsxRuntimeExports$1 = jsxRuntime$1.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e2 = a[d2];
      if (0 < g2(e2, b2)) a[d2] = b2, a[c2] = e2, c2 = d2;
      else break a;
    }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a: for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
        else if (n2 < e2 && 0 > g2(x2, c2)) a[d2] = x2, a[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H2, b2.startTime - a);
    }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports$1, ca = schedulerExports;
function p$3(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++) da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2)) return true;
  if (d2) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$3(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$2[a] = new v$3(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$2[b2] = new v$3(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$2[a] = new v$3(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$2[a] = new v$3(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$2[a] = new v$3(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$2[a] = new v$3(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$2[a] = new v$3(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$2[a] = new v$3(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$2[a] = new v$3(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z$2[b2] = new v$3(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$2[b2] = new v$3(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$2[b2] = new v$3(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$2[a] = new v$3(a, 1, false, a.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new v$3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$2[a] = new v$3(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$3 = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La = b2 && b2[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na) return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d2 = l2;
      }
      Reflect.construct(a, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d2 = l2;
      }
      a.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
        if (1 !== g2 || 1 !== h2) {
          do
            if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
              var k2 = "\n" + e2[g2].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g2 && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b2 = a.render;
      a = a.displayName;
      a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
    case Ha:
      b2 = a._payload;
      a = a._init;
      try {
        return Qa(a(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b2 = a._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return A$3({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2) if ("number" === d2) {
    if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
  } else a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function cb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++) e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a[e2].disabled || (b2 = a[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$3(91));
  return A$3({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$3(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$3(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b2.firstChild; ) a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
    "float" === c2 && (c2 = "cssFloat");
    d2 ? a.setProperty(c2, e2) : a[c2] = e2;
  }
}
var tb = A$3({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$3(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$3(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$3(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$3(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p$3(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c2) {
  if (Ib) return a(b2, c2);
  Ib = true;
  try {
    return Gb(a, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c2 = a.stateNode;
  if (null === c2) return null;
  var d2 = Db(c2);
  if (null === d2) return null;
  c2 = d2[b2];
  a: switch (b2) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d2;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$3(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$3(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c2 = a;
  if (a.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p$3(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2) throw Error(p$3(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2) break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2) return Xb(e2), a;
        if (f2 === d2) return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$3(188));
    }
    if (c2.return !== d2.return) c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) throw Error(p$3(189));
      }
    }
    if (c2.alternate !== d2) throw Error(p$3(190));
  }
  if (3 !== c2.tag) throw Error(p$3(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2) return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$3 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2) return 0;
  var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2) return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a.entangledLanes;
  if (0 !== b2) for (a = a.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b2) {
  for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
    } else k2 <= b2 && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
  return b2;
}
function Ac(a, b2, c2) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c2;
}
function Bc(a, b2) {
  var c2 = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d2 = a.eventTimes;
  for (a = a.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a, b2) {
  var c2 = a.entangledLanes |= b2;
  for (a = a.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$3 = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c2, d2, e2, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a;
}
function Uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c2) {
      c2 = a.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c2) {
  Xc(a) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c2, d2) {
  var e2 = C$3, f2 = cd.transition;
  cd.transition = null;
  try {
    C$3 = 1, fd(a, b2, c2, d2);
  } finally {
    C$3 = e2, cd.transition = f2;
  }
}
function gd(a, b2, c2, d2) {
  var e2 = C$3, f2 = cd.transition;
  cd.transition = null;
  try {
    C$3 = 4, fd(a, b2, c2, d2);
  } finally {
    C$3 = e2, cd.transition = f2;
  }
}
function fd(a, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a, b2, c2, d2);
    if (null === e2) hd(a, b2, d2, id, c2), Sc(a, d2);
    else if (Uc(e2, a, b2, c2, d2)) d2.stopPropagation();
    else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c2, d2);
        null === f2 && hd(a, b2, d2, id, c2);
        if (f2 === e2) break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else hd(a, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a, b2, c2, d2) {
  id = null;
  a = xb(d2);
  a = Wc(a);
  if (null !== a) if (b2 = Vb(a), null === b2) a = null;
  else if (c2 = b2.tag, 13 === c2) {
    a = Wb(b2);
    if (null !== a) return a;
    a = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a = null;
  } else b2 !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++) ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$3(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$3({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$3({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A$3({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$3({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$3({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$3({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$3({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A$3({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$3({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$3({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$3({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$3({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie) return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
}
function ne(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2)) return a;
}
function ve(a, b2) {
  if ("change" === a) return b2;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a, xb(a));
    Jb(re, b2);
  }
}
function Ce(a, b2, c2) {
  "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b2) {
  if ("click" === a) return te(b2);
}
function Fe(a, b2) {
  if ("input" === a || "change" === a) return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b2) {
  if (He(a, b2)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length) return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He(a[e2], b2[e2])) return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke(a, b2) {
  var c2 = Je(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2) return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2) a = b2.contentWindow;
    else break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe(a) {
  var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne(c2)) {
      if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
      else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b2 = We[a], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a] = b2[c2];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Ub(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
        var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
      else for (g2 = 0; g2 < d2.length; g2++) {
        h2 = d2[g2];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D$2(a, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a + "__bubble";
  c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
}
function qf(a, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function hd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
    if (null === d2) return;
    var g2 = d2.tag;
    if (3 === g2 || 4 === g2) {
      var h2 = d2.stateNode.containerInfo;
      if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
      if (4 === g2) for (g2 = d2.return; null !== g2; ) {
        var k2 = g2.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
        }
        g2 = g2.return;
      }
      for (; null !== h2; ) {
        g2 = Wc(h2);
        if (null === g2) return;
        k2 = g2.tag;
        if (5 === k2 || 6 === k2) {
          d2 = f2 = g2;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d2 = d2.return;
  }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve;
        else if (me(h3)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a, d3))) {
          ne(g3, na, c2, e3);
          break a;
        }
        xa && xa(a, h3, d3);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c2) : ke(a, c2)) d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se(g3, b2);
  });
}
function tf(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c2) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c2) throw Error(p$3(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a.removeChild(c2);
    if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
      if (0 === d2) {
        a.removeChild(e2);
        bd(b2);
        return;
      }
      d2--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2) return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
        if (c2 = a[Of]) return c2;
        a = Mf(a);
      }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p$3(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E$2(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$1(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2) return Vf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2) e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E$2(Wf);
  E$2(H$2);
}
function ag(a, b2, c2) {
  if (H$2.current !== Vf) throw Error(p$3(168));
  G$1(H$2, b2);
  G$1(Wf, c2);
}
function bg(a, b2, c2) {
  var d2 = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext) return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2) if (!(e2 in b2)) throw Error(p$3(108, Ra(a) || "Unknown", e2));
  return A$3({}, c2, d2);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$1(H$2, a);
  G$1(Wf, Wf.current);
  return true;
}
function dg(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2) throw Error(p$3(169));
  c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E$2(Wf), E$2(H$2), G$1(H$2, a)) : E$2(Wf);
  G$1(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C$3;
    try {
      var c2 = eg;
      for (C$3 = 1; a < c2.length; a++) {
        var d2 = c2[a];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C$3 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d2 = rg;
  a = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a;
  } else rg = 1 << f2 | c2 << e2 | d2, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$3 = false, zg = null;
function Ag(a, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I$3) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a, b2)) {
        if (Dg(a)) throw Error(p$3(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I$3 = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p$3(418));
      a.flags = a.flags & -4097 | 2;
      I$3 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I$3) return Fg(a), I$3 = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a)) throw Hg(), Error(p$3(418));
    for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p$3(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$3 = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$3(309));
        var d2 = c2.stateNode;
      }
      if (!d2) throw Error(p$3(147, a));
      var e2 = d2, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a2) {
        var b3 = e2.refs;
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a) throw Error(p$3(284));
    if (!c2._owner) throw Error(p$3(290, a));
  }
  return a;
}
function Mg(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$3(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function Ng(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function Og(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a) return null;
    for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = Pg(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a) return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya) return m2(a2, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a2, b3, c3), d3.return = a2, d3;
    d3 = Rg(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = Lg(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Lg(a2, null, b3), c3.return = a2, c3;
        case wa:
          return b3 = Sg(b3, a2.mode, c3), b3.return = a2, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a2, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c3, null), b3.return = a2, b3;
      Mg(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a2,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a2, b3, c3, d3, null);
      Mg(a2, c3);
    }
    return null;
  }
  function y2(a2, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
        case wa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a2, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3)) return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
      Mg(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length) return c2(e3, u2), I$3 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$3 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    I$3 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3) throw Error(p$3(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$3(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c2(
      e3,
      m3
    ), I$3 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$3 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e3, a2);
    });
    I$3 && tg(e3, w2);
    return l3;
  }
  function J2(a2, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a2, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c2(a2, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = Lg(a2, l3, f3);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                }
                c2(a2, l3);
                break;
              } else b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Tg(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = Lg(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                c2(a2, d3.sibling);
                d3 = e2(d3, f3.children || []);
                d3.return = a2;
                a2 = d3;
                break a;
              } else {
                c2(a2, d3);
                break;
              }
              else b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = Sg(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a2, d3, f3, h3);
      if (Ka(f3)) return t2(a2, d3, f3, h3);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Qg(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b2 = Wg.current;
  E$2(Wg);
  a._currentValue = b2;
}
function bh(a, b2, c2) {
  for (; null !== a; ) {
    var d2 = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a === c2) break;
    a = a.return;
  }
}
function ch(a, b2) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b2 = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$3(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b2;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return ih(a, d2);
}
function ih(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b2, c2) {
  var d2 = a.updateQueue;
  if (null === d2) return null;
  d2 = d2.shared;
  if (0 !== (K$1 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return ih(a, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return ih(a, c2);
}
function oh(a, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
function ph(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  jh = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$3({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else null === f2 && (e2.shared.lanes = 0);
    rh |= g2;
    a.lanes = g2;
    a.memoizedState = q2;
  }
}
function sh(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
    var d2 = a[b2], e2 = d2.callback;
    if (null !== e2) {
      d2.callback = null;
      d2 = c2;
      if ("function" !== typeof e2) throw Error(p$3(191, e2));
      e2.call(d2);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p$3(174));
  return a;
}
function yh(a, b2) {
  G$1(wh, b2);
  G$1(vh, a);
  G$1(uh, th);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E$2(uh);
  G$1(uh, b2);
}
function zh() {
  E$2(uh);
  E$2(vh);
  E$2(wh);
}
function Ah(a) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a.type);
  b2 !== c2 && (G$1(vh, a), G$1(uh, c2));
}
function Bh(a) {
  vh.current === a && (E$2(uh), E$2(vh));
}
var L$2 = Uf(0);
function Ch(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M$3 = null, N$2 = null, O$2 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$3() {
  throw Error(p$3(321));
}
function Mh(a, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He(a[c2], b2[c2])) return false;
  return true;
}
function Nh(a, b2, c2, d2, e2, f2) {
  Hh = f2;
  M$3 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c2(d2, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$3(301));
      f2 += 1;
      O$2 = N$2 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a = c2(d2, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$2 && null !== N$2.next;
  Hh = 0;
  O$2 = N$2 = M$3 = null;
  Ih = false;
  if (b2) throw Error(p$3(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O$2 ? M$3.memoizedState = O$2 = a : O$2 = O$2.next = a;
  return O$2;
}
function Uh() {
  if (null === N$2) {
    var a = M$3.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N$2.next;
  var b2 = null === O$2 ? M$3.memoizedState : O$2.next;
  if (null !== b2) O$2 = b2, N$2 = a;
  else {
    if (null === a) throw Error(p$3(310));
    N$2 = a;
    a = { memoizedState: N$2.memoizedState, baseState: N$2.baseState, baseQueue: N$2.baseQueue, queue: N$2.queue, next: null };
    null === O$2 ? M$3.memoizedState = O$2 = a : O$2 = O$2.next = a;
  }
  return O$2;
}
function Vh(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function Wh(a) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$3(311));
  c2.lastRenderedReducer = a;
  var d2 = N$2, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        M$3.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He(d2, b2.memoizedState) || (dh = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a = c2.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, M$3.lanes |= f2, rh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$3(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a, b2) {
  var c2 = M$3, d2 = Uh(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, dh = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a), [a]);
  if (d2.getSnapshot !== b2 || f2 || null !== O$2 && O$2.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === Q$2) throw Error(p$3(349));
    0 !== (Hh & 30) || di(c2, b2, e2);
  }
  return e2;
}
function di(a, b2, c2) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c2 };
  b2 = M$3.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$3.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
}
function ci(a, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && fi(a);
}
function ai(a, b2, c2) {
  return c2(function() {
    ei(b2) && fi(a);
  });
}
function ei(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c2 = b2();
    return !He(a, c2);
  } catch (d2) {
    return true;
  }
}
function fi(a) {
  var b2 = ih(a, 1);
  null !== b2 && gi(b2, a, 1, -1);
}
function hi(a) {
  var b2 = Th();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ii.bind(null, M$3, a);
  return [b2.memoizedState, a];
}
function bi(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = M$3.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$3.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b2, c2, d2) {
  var e2 = Th();
  M$3.flags |= a;
  e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function li(a, b2, c2, d2) {
  var e2 = Uh();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== N$2) {
    var g2 = N$2.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Mh(d2, g2.deps)) {
      e2.memoizedState = bi(b2, c2, f2, d2);
      return;
    }
  }
  M$3.flags |= a;
  e2.memoizedState = bi(1 | b2, c2, f2, d2);
}
function mi(a, b2) {
  return ki(8390656, 8, a, b2);
}
function $h(a, b2) {
  return li(2048, 8, a, b2);
}
function ni(a, b2) {
  return li(4, 2, a, b2);
}
function oi(a, b2) {
  return li(4, 4, a, b2);
}
function pi(a, b2) {
  if ("function" === typeof b2) return a = a(), b2(a), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
    b2.current = null;
  };
}
function qi(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return li(4, 4, pi.bind(null, b2, a), c2);
}
function ri() {
}
function si(a, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function ti(a, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function ui(a, b2, c2) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c2;
  He(c2, b2) || (c2 = yc(), M$3.lanes |= c2, rh |= c2, a.baseState = true);
  return b2;
}
function vi(a, b2) {
  var c2 = C$3;
  C$3 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b2();
  } finally {
    C$3 = c2, Gh.transition = d2;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b2, c2) {
  var d2 = yi(a);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b2, c2);
  else if (c2 = hh(a, b2, c2, d2), null !== c2) {
    var e2 = R$2();
    gi(c2, a, d2, e2);
    Bi(c2, b2, d2);
  }
}
function ii(a, b2, c2) {
  var d2 = yi(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b2, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
      e2.hasEagerState = true;
      e2.eagerState = h2;
      if (He(h2, g2)) {
        var k2 = b2.interleaved;
        null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
        b2.interleaved = e2;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a, b2, e2, d2);
    null !== c2 && (e2 = R$2(), gi(c2, a, d2, e2), Bi(c2, b2, d2));
  }
}
function zi(a) {
  var b2 = a.alternate;
  return a === M$3 || null !== b2 && b2 === M$3;
}
function Ai(a, b2) {
  Jh = Ih = true;
  var c2 = a.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a.pending = b2;
}
function Bi(a, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
var Rh = { readContext: eh, useCallback: P$3, useContext: P$3, useEffect: P$3, useImperativeHandle: P$3, useInsertionEffect: P$3, useLayoutEffect: P$3, useMemo: P$3, useReducer: P$3, useRef: P$3, useState: P$3, useDebugValue: P$3, useDeferredValue: P$3, useTransition: P$3, useMutableSource: P$3, useSyncExternalStore: P$3, useId: P$3, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
  Th().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b2, a),
    c2
  );
}, useLayoutEffect: function(a, b2) {
  return ki(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ki(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d2.queue = a;
  a = a.dispatch = xi.bind(null, M$3, a);
  return [d2.memoizedState, a];
}, useRef: function(a) {
  var b2 = Th();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b2 = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c2) {
  var d2 = M$3, e2 = Th();
  if (I$3) {
    if (void 0 === c2) throw Error(p$3(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q$2) throw Error(p$3(349));
    0 !== (Hh & 30) || di(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  mi(ai.bind(
    null,
    d2,
    f2,
    a
  ), [a]);
  d2.flags |= 2048;
  bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a = Th(), b2 = Q$2.identifierPrefix;
  if (I$3) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b2 = Uh();
    return ui(b2, N$2.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b2 = Uh();
  return null === N$2 ? b2.memoizedState = a : ui(b2, N$2.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$3({}, b2);
    a = a.defaultProps;
    for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
function Di(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$3({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = R$2(), e2 = yi(a), f2 = mh(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a, f2, e2);
  null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = R$2(), e2 = yi(a), f2 = mh(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a, f2, e2);
  null !== b2 && (gi(b2, a, e2, d2), oh(b2, a, e2));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = R$2(), d2 = yi(a), e2 = mh(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = nh(a, e2, d2);
  null !== b2 && (gi(b2, a, d2, c2), oh(b2, a, d2));
} };
function Fi(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function Gi(a, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
}
function Ii(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = {};
  kh(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b2, f2, c2), e2.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a, c2, e2, d2), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2, digest: null };
}
function Ki(a, b2, c2) {
  return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi = d2);
    Li(a, b2);
  };
  return c2;
}
function Qi(a, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Li(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a, b2);
    "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a, b2, c2) {
  var d2 = a.pingCache;
  if (null === d2) {
    d2 = a.pingCache = new Mi();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a = Ti.bind(null, a, b2, c2), b2.then(a, a));
}
function Ui(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b2, c2, d2, e2) {
  if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b2, c2, d2) {
  b2.child = null === a ? Vg(b2, null, c2, d2) : Ug(b2, a.child, c2, d2);
}
function Yi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e2);
  d2 = Nh(a, b2, c2, d2, f2, e2);
  c2 = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
  I$3 && c2 && vg(b2);
  b2.flags |= 1;
  Xi(a, b2, d2, e2);
  return b2.child;
}
function $i(a, b2, c2, d2, e2) {
  if (null === a) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d2, e2);
    a = Rg(c2.type, null, d2, b2, b2.mode, e2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a.ref === b2.ref) return Zi(a, b2, e2);
  }
  b2.flags |= 1;
  a = Pg(f2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function bj(a, b2, c2, d2, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d2) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2)) 0 !== (a.flags & 131072) && (dh = true);
    else return b2.lanes = a.lanes, Zi(a, b2, e2);
  }
  return cj(a, b2, c2, d2, e2);
}
function dj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(ej, fj), fj |= a, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d2 = null !== f2 ? f2.baseLanes : c2;
    G$1(ej, fj);
    fj |= d2;
  }
  else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(ej, fj), fj |= d2;
  Xi(a, b2, e2, c2);
  return b2.child;
}
function gj(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  ch(b2, e2);
  c2 = Nh(a, b2, c2, d2, f2, e2);
  d2 = Sh();
  if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, Zi(a, b2, e2);
  I$3 && d2 && vg(b2);
  b2.flags |= 1;
  Xi(a, b2, c2, e2);
  return b2.child;
}
function hj(a, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e2);
  if (null === b2.stateNode) ij(a, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    lh(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
    jh = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return jj(a, b2, c2, d2, f2, e2);
}
function jj(a, b2, c2, d2, e2, f2) {
  gj(a, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function kj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  yh(a, b2.containerInfo);
}
function lj(a, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Xi(a, b2, c2, d2);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = L$2.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState) e2 |= 1;
  G$1(L$2, e2 & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a = Tg(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a) : qj(b2, g2);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a.child.memoizedState;
    g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a.childLanes & ~c2;
    b2.memoizedState = mj;
    return d2;
  }
  f2 = a.child;
  a = f2.sibling;
  d2 = Pg(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function qj(a, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function sj(a, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Ug(b2, a.child, null, c2);
  a = qj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function rj(a, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$3(422))), sj(a, b2, g2, d2);
    if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Tg(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Ug(b2, a.child, null, g2);
    b2.child.memoizedState = nj(g2);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2) var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$3(419));
    d2 = Ki(f2, d2, void 0);
    return sj(a, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a.childLanes);
  if (dh || h2) {
    d2 = Q$2;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a, e2), gi(d2, a, e2, -1));
    }
    tj();
    d2 = Ki(Error(p$3(421)));
    return sj(a, b2, g2, d2);
  }
  if ("$?" === e2.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e2._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$3 = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = qj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a, b2, c2) {
  a.lanes |= b2;
  var d2 = a.alternate;
  null !== d2 && (d2.lanes |= b2);
  bh(a.return, b2, c2);
}
function wj(a, b2, c2, d2, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function xj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Xi(a, b2, d2.children, c2);
  d2 = L$2.current;
  if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c2, b2);
      else if (19 === a.tag) vj(a, c2, b2);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b2) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b2) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d2 &= 1;
  }
  G$1(L$2, d2);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e2) {
    case "forwards":
      c2 = b2.child;
      for (e2 = null; null !== c2; ) a = c2.alternate, null !== a && null === Ch(a) && (e2 = c2), c2 = c2.sibling;
      c2 = e2;
      null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
      wj(b2, false, e2, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e2 = b2.child;
      for (b2.child = null; null !== e2; ) {
        a = e2.alternate;
        if (null !== a && null === Ch(a)) {
          b2.child = e2;
          break;
        }
        a = e2.sibling;
        e2.sibling = c2;
        c2 = e2;
        e2 = a;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a && b2.child !== a.child) throw Error(p$3(153));
  if (null !== b2.child) {
    a = b2.child;
    c2 = Pg(a, a.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = Pg(a, a.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(Wg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated) return G$1(L$2, L$2.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a, b2, c2);
        G$1(L$2, L$2.current & 1);
        a = Zi(a, b2, c2);
        return null !== a ? a.sibling : null;
      }
      G$1(L$2, L$2.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d2) return xj(a, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(L$2, L$2.current);
      if (d2) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a, b2, c2);
  }
  return Zi(a, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$3({}, e2, { value: void 0 });
        d2 = A$3({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
      var h2 = e2[l2];
      for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
        for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Dj(a, b2) {
  if (!I$3) switch (a.tailMode) {
    case "hidden":
      b2 = a.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a.tail;
      for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
      null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
  }
}
function S$3(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
  if (b2) for (var e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else for (e2 = a.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d2;
  a.childLanes = c2;
  return b2;
}
function Ej(a, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$3(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$3(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      E$2(Wf);
      E$2(H$2);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b2);
      S$3(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode) Bj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode) throw Error(p$3(166));
          S$3(b2);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
            var h2 = f2[g2];
            "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d2.textContent,
              h2,
              a
            ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
          }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[Of] = b2;
          a[Pf] = d2;
          zj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a);
                D$2("close", a);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], a);
                e2 = d2;
                break;
              case "source":
                D$2("error", a);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a
                );
                D$2("load", a);
                e2 = d2;
                break;
              case "details":
                D$2("toggle", a);
                e2 = d2;
                break;
              case "input":
                Za(a, d2);
                e2 = Ya(a, d2);
                D$2("invalid", a);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$3({}, d2, { value: void 0 });
                D$2("invalid", a);
                break;
              case "textarea":
                hb(a, d2);
                e2 = gb(a, d2);
                D$2("invalid", a);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a) : null != k2 && ta(a, f2, k2, g2));
            }
            switch (c2) {
              case "input":
                Va(a);
                db(a, d2, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$3(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$3(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$3(b2);
      return null;
    case 13:
      E$2(L$2);
      d2 = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I$3 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p$3(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$3(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$3(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L$2.current & 1) ? 0 === T$3 && (T$3 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$3(b2);
      return null;
    case 4:
      return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S$3(b2), null;
    case 10:
      return ah(b2.type._context), S$3(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$3(b2), null;
    case 19:
      E$2(L$2);
      f2 = b2.memoizedState;
      if (null === f2) return S$3(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2) if (d2) Dj(f2, false);
      else {
        if (0 !== T$3 || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
          g2 = Ch(a);
          if (null !== g2) {
            b2.flags |= 128;
            Dj(f2, false);
            d2 = g2.updateQueue;
            null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d2 = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
            G$1(L$2, L$2.current & 1 | 2);
            return b2.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B$3() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d2) if (a = Ch(g2), null !== a) {
          if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$3) return S$3(b2), null;
        } else 2 * B$3() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$3(), b2.sibling = null, c2 = L$2.current, G$1(L$2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$3(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$3(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$3(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$3(156, b2.tag));
}
function Ij(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return zh(), E$2(Wf), E$2(H$2), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E$2(L$2);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate) throw Error(p$3(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E$2(L$2), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$1 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
function Lj(a, b2) {
  var c2 = a.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d2) {
    W$1(a, b2, d2);
  }
  else c2.current = null;
}
function Mj(a, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a, b2, d2);
  }
}
var Nj = false;
function Oj(a, b2) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
      var d2 = c2.getSelection && c2.getSelection();
      if (d2 && 0 !== d2.rangeCount) {
        c2 = d2.anchorNode;
        var e2 = d2.anchorOffset, f2 = d2.focusNode;
        d2 = d2.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
            q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
            3 === q2.nodeType && (g2 += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c2 && ++l2 === e2 && (h2 = g2);
            r2 === f2 && ++m2 === d2 && (k2 = g2);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a, selectionRange: c2 };
  dd = false;
  for (V$1 = b2; null !== V$1; ) if (b2 = V$1, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V$1 = a;
  else for (; null !== V$1; ) {
    b2 = V$1;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$3(163));
      }
    } catch (F2) {
      W$1(b2, b2.return, F2);
    }
    a = b2.sibling;
    if (null !== a) {
      a.return = b2.return;
      V$1 = a;
      break;
    }
    V$1 = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Qj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a) === a) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c2 = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c2;
        break;
      default:
        a = c2;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Sj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Sj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a = a.child, null !== a)) for (Vj(a, b2, c2), a = a.sibling; null !== a; ) Vj(a, b2, c2), a = a.sibling;
}
function Wj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
}
var X$2 = null, Xj = false;
function Yj(a, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a, b2, c2), c2 = c2.sibling;
}
function Zj(a, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$1 || Lj(c2, b2);
    case 6:
      var d2 = X$2, e2 = Xj;
      X$2 = null;
      Yj(a, b2, c2);
      X$2 = d2;
      Xj = e2;
      null !== X$2 && (Xj ? (a = X$2, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X$2.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$2 && (Xj ? (a = X$2, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X$2, c2.stateNode));
      break;
    case 4:
      d2 = X$2;
      e2 = Xj;
      X$2 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a, b2, c2);
      X$2 = d2;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$1 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Yj(a, b2, c2);
      break;
    case 1:
      if (!U$1 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
        d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
      } catch (h2) {
        W$1(c2, b2, h2);
      }
      Yj(a, b2, c2);
      break;
    case 21:
      Yj(a, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$1 = (d2 = U$1) || null !== c2.memoizedState, Yj(a, b2, c2), U$1 = d2) : Yj(a, b2, c2);
      break;
    default:
      Yj(a, b2, c2);
  }
}
function ak(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d2 = bk.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ck(a, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    try {
      var f2 = a, g2 = b2, h2 = g2;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$2 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$2) throw Error(p$3(160));
      Zj(f2, g2, e2);
      X$2 = null;
      Xj = false;
      var k2 = e2.alternate;
      null !== k2 && (k2.return = null);
      e2.return = null;
    } catch (l2) {
      W$1(e2, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
}
function dk(a, b2) {
  var c2 = a.alternate, d2 = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a);
      ek(a);
      if (d2 & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a);
      ek(a);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a);
      ek(a);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
          vb(h2, g2);
          var l2 = vb(h2, f2);
          for (g2 = 0; g2 < k2.length; g2 += 2) {
            var m2 = k2[g2], q2 = k2[g2 + 1];
            "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e2, f2);
              break;
            case "textarea":
              ib(e2, f2);
              break;
            case "select":
              var r2 = e2._wrapperState.wasMultiple;
              e2._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e2,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e2[Pf] = f2;
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a);
      ek(a);
      if (d2 & 4) {
        if (null === a.stateNode) throw Error(p$3(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a);
      ek(a);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$1(a, a.return, t2);
      }
      break;
    case 4:
      ck(b2, a);
      ek(a);
      break;
    case 13:
      ck(b2, a);
      ek(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B$3()));
      d2 & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a.mode & 1 ? (U$1 = (l2 = U$1) || m2, ck(b2, a), U$1 = l2) : ck(b2, a);
      ek(a);
      if (d2 & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V$1 = a, m2 = a.child; null !== m2; ) {
          for (q2 = V$1 = m2; null !== V$1; ) {
            r2 = V$1;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d2 = r2;
                  c2 = r2.return;
                  try {
                    b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$1(d2, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V$1 = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
              } catch (t2) {
                W$1(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$1(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a);
      ek(a);
      d2 & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a.return; null !== c2; ) {
          if (Tj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$3(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Uj(a);
          Vj(a, h2, g2);
          break;
        default:
          throw Error(p$3(161));
      }
    } catch (k2) {
      W$1(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function hk(a, b2, c2) {
  V$1 = a;
  ik(a);
}
function ik(a, b2, c2) {
  for (var d2 = 0 !== (a.mode & 1); null !== V$1; ) {
    var e2 = V$1, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Jj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$1;
        h2 = Jj;
        var l2 = U$1;
        Jj = g2;
        if ((U$1 = k2) && !l2) for (V$1 = e2; null !== V$1; ) g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : jk(e2);
        for (; null !== f2; ) V$1 = f2, ik(f2), f2 = f2.sibling;
        V$1 = e2;
        Jj = h2;
        U$1 = l2;
      }
      kk(a);
    } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$1 || Qj(5, b2);
            break;
          case 1:
            var d2 = b2.stateNode;
            if (b2.flags & 4 && !U$1) if (null === c2) d2.componentDidMount();
            else {
              var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
              d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d2);
            break;
          case 3:
            var g2 = b2.updateQueue;
            if (null !== g2) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g2, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p$3(163));
        }
        U$1 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V$1 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function gk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (b2 === a) {
      V$1 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function jk(a) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a) {
      V$1 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$1 = h2;
      break;
    }
    V$1 = b2.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$1 = 0, Q$2 = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T$3 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R$2() {
  return 0 !== (K$1 & 6) ? B$3() : -1 !== Ak ? Ak : Ak = B$3();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K$1 & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C$3;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b2, c2, d2) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$3(185));
  Ac(a, c2, d2);
  if (0 === (K$1 & 2) || a !== Q$2) a === Q$2 && (0 === (K$1 & 2) && (qk |= c2), 4 === T$3 && Ck(a, Z)), Dk(a, d2), 1 === c2 && 0 === K$1 && 0 === (b2.mode & 1) && (Gj = B$3() + 500, fg && jg());
}
function Dk(a, b2) {
  var c2 = a.callbackNode;
  wc(a, b2);
  var d2 = uc(a, a === Q$2 ? Z : 0);
  if (0 === d2) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K$1 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Gk(a, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$1 & 6)) throw Error(p$3(327));
  var c2 = a.callbackNode;
  if (Hk() && a.callbackNode !== c2) return null;
  var d2 = uc(a, a === Q$2 ? Z : 0);
  if (0 === d2) return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2) b2 = Ik(a, d2);
  else {
    b2 = d2;
    var e2 = K$1;
    K$1 |= 2;
    var f2 = Jk();
    if (Q$2 !== a || Z !== b2) uk = null, Gj = B$3() + 500, Kk(a, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$1 = e2;
    null !== Y ? b2 = 0 : (Q$2 = null, Z = 0, b2 = T$3);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Nk(a, e2)));
    if (1 === b2) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B$3()), c2;
    if (6 === b2) Ck(a, d2);
    else {
      e2 = a.current.alternate;
      if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Nk(a, f2))), 1 === b2)) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B$3()), c2;
      a.finishedWork = e2;
      a.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$3(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d2);
          if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B$3(), 10 < b2)) {
            if (0 !== uc(a, 0)) break;
            e2 = a.suspendedLanes;
            if ((e2 & d2) !== d2) {
              R$2();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d2);
          if ((d2 & 4194240) === d2) break;
          b2 = a.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$3() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
          if (10 < d2) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p$3(329));
      }
    }
  }
  Dk(a, B$3());
  return a.callbackNode === c2 ? Gk.bind(null, a) : null;
}
function Nk(a, b2) {
  var c2 = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
  a = Ik(a, b2);
  2 !== a && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2], f2 = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!He(f2(), e2)) return false;
        } catch (g2) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Ek(a) {
  if (0 !== (K$1 & 6)) throw Error(p$3(327));
  Hk();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1)) return Dk(a, B$3()), null;
  var c2 = Ik(a, b2);
  if (0 !== a.tag && 2 === c2) {
    var d2 = xc(a);
    0 !== d2 && (b2 = d2, c2 = Nk(a, d2));
  }
  if (1 === c2) throw c2 = pk, Kk(a, 0), Ck(a, b2), Dk(a, B$3()), c2;
  if (6 === c2) throw Error(p$3(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Pk(a, tk, uk);
  Dk(a, B$3());
  return null;
}
function Qk(a, b2) {
  var c2 = K$1;
  K$1 |= 1;
  try {
    return a(b2);
  } finally {
    K$1 = c2, 0 === K$1 && (Gj = B$3() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K$1 & 6) && Hk();
  var b2 = K$1;
  K$1 |= 1;
  var c2 = ok.transition, d2 = C$3;
  try {
    if (ok.transition = null, C$3 = 1, a) return a();
  } finally {
    C$3 = d2, ok.transition = c2, K$1 = b2, 0 === (K$1 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$2(ej);
}
function Kk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
  if (null !== Y) for (c2 = Y.return; null !== c2; ) {
    var d2 = c2;
    wg(d2);
    switch (d2.tag) {
      case 1:
        d2 = d2.type.childContextTypes;
        null !== d2 && void 0 !== d2 && $f();
        break;
      case 3:
        zh();
        E$2(Wf);
        E$2(H$2);
        Eh();
        break;
      case 5:
        Bh(d2);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$2(L$2);
        break;
      case 19:
        E$2(L$2);
        break;
      case 10:
        ah(d2.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q$2 = a;
  Y = a = Pg(a.current, null);
  Z = fj = b2;
  T$3 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
      c2.interleaved = null;
      var e2 = d2.next, f2 = c2.pending;
      if (null !== f2) {
        var g2 = f2.next;
        f2.next = e2;
        d2.next = g2;
      }
      c2.pending = d2;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b2) {
  do {
    var c2 = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = M$3.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      O$2 = N$2 = M$3 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T$3 = 1;
        pk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Si(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$3(426));
          }
        } else if (I$3 && h2.mode & 1) {
          var J2 = Ui(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g2, h2, f2, b2);
            Jg(Ji(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h2);
        4 !== T$3 && (T$3 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na) {
      b2 = na;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T$3 || 3 === T$3 || 2 === T$3) T$3 = 4;
  null === Q$2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$2, Z);
}
function Ik(a, b2) {
  var c2 = K$1;
  K$1 |= 2;
  var d2 = Jk();
  if (Q$2 !== a || Z !== b2) uk = null, Kk(a, b2);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a, e2);
    }
  while (1);
  $g();
  K$1 = c2;
  mk.current = d2;
  if (null !== Y) throw Error(p$3(261));
  Q$2 = null;
  Z = 0;
  return T$3;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b2 = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Sk(a) : Y = b2;
  nk.current = null;
}
function Sk(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T$3 = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (null !== b2);
  0 === T$3 && (T$3 = 5);
}
function Pk(a, b2, c2) {
  var d2 = C$3, e2 = ok.transition;
  try {
    ok.transition = null, C$3 = 1, Wk(a, b2, c2, d2);
  } finally {
    ok.transition = e2, C$3 = d2;
  }
  return null;
}
function Wk(a, b2, c2, d2) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$1 & 6)) throw Error(p$3(327));
  c2 = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c2) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current) throw Error(p$3(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a, f2);
  a === Q$2 && (Y = Q$2 = null, Z = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g2 = C$3;
    C$3 = 1;
    var h2 = K$1;
    K$1 |= 4;
    nk.current = null;
    Oj(a, c2);
    dk(c2, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c2;
    hk(c2);
    dc();
    K$1 = h2;
    C$3 = g2;
    ok.transition = f2;
  } else a.current = c2;
  vk && (vk = false, wk = a, xk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a, B$3());
  if (null !== b2) for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b2 = ok.transition, c2 = C$3;
    try {
      ok.transition = null;
      C$3 = 16 > a ? 16 : a;
      if (null === wk) var d2 = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$1 & 6)) throw Error(p$3(331));
        var e2 = K$1;
        K$1 |= 4;
        for (V$1 = a.current; null !== V$1; ) {
          var f2 = V$1, g2 = f2.child;
          if (0 !== (V$1.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$1 = l2; null !== V$1; ) {
                  var m2 = V$1;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V$1 = q2;
                  else for (; null !== V$1; ) {
                    m2 = V$1;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V$1 = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V$1 = r2;
                      break;
                    }
                    V$1 = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$1 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V$1 = g2;
          else b: for (; null !== V$1; ) {
            f2 = V$1;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V$1 = x2;
              break b;
            }
            V$1 = f2.return;
          }
        }
        var w2 = a.current;
        for (V$1 = w2; null !== V$1; ) {
          g2 = V$1;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V$1 = u2;
          else b: for (g2 = w2; null !== V$1; ) {
            h2 = V$1;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na) {
              W$1(h2, h2.return, na);
            }
            if (h2 === g2) {
              V$1 = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V$1 = F2;
              break b;
            }
            V$1 = h2.return;
          }
        }
        K$1 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d2 = true;
      }
      return d2;
    } finally {
      C$3 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a, b2, c2) {
  b2 = Ji(c2, b2);
  b2 = Ni(a, b2, 1);
  a = nh(a, b2, 1);
  b2 = R$2();
  null !== a && (Ac(a, 1, b2), Dk(a, b2));
}
function W$1(a, b2, c2) {
  if (3 === a.tag) Xk(a, a, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a, c2);
      break;
    } else if (1 === b2.tag) {
      var d2 = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
        a = Ji(c2, a);
        a = Qi(b2, a, 1);
        b2 = nh(b2, a, 1);
        a = R$2();
        null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = R$2();
  a.pingedLanes |= a.suspendedLanes & c2;
  Q$2 === a && (Z & c2) === c2 && (4 === T$3 || 3 === T$3 && (Z & 130023424) === Z && 500 > B$3() - fk ? Kk(a, 0) : rk |= c2);
  Dk(a, b2);
}
function Yk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R$2();
  a = ih(a, b2);
  null !== a && (Ac(a, b2, c2), Dk(a, c2));
}
function uj(a) {
  var b2 = a.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a, c2);
}
function bk(a, b2) {
  var c2 = 0;
  switch (a.tag) {
    case 13:
      var d2 = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a.stateNode;
      break;
    default:
      throw Error(p$3(314));
  }
  null !== d2 && d2.delete(b2);
  Yk(a, c2);
}
var Vk;
Vk = function(a, b2, c2) {
  if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c2);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I$3 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      ij(a, b2);
      a = b2.pendingProps;
      var e2 = Yf(b2, H$2.current);
      ch(b2, c2);
      e2 = Nh(null, b2, d2, a, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$3 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        ij(a, b2);
        a = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Zk(d2);
        a = Ci(d2, a);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d2, a, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d2, a, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, Ci(d2.type, a), c2);
            break a;
        }
        throw Error(p$3(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a, b2, d2, e2, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a) throw Error(p$3(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        lh(a, b2);
        qh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e2 = Ji(Error(p$3(423)), b2);
          b2 = lj(a, b2, d2, c2, e2);
          break a;
        } else if (d2 !== e2) {
          e2 = Ji(Error(p$3(424)), b2);
          b2 = lj(a, b2, d2, c2, e2);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$3 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = Zi(a, b2, c2);
            break a;
          }
          Xi(a, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return oj(a, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d2, c2) : Xi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a, b2, d2, e2, c2);
    case 7:
      return Xi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$1(Wg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2) if (He(f2.value, g2)) {
          if (f2.children === e2.children && !Wf.current) {
            b2 = Zi(a, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g2 = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d2) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g2 = f2.return;
            if (null === g2) throw Error(p$3(341));
            g2.lanes |= c2;
            h2 = g2.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g2, c2, b2);
            g2 = f2.sibling;
          } else g2 = f2.child;
          if (null !== g2) g2.return = f2;
          else for (g2 = f2; null !== g2; ) {
            if (g2 === b2) {
              g2 = null;
              break;
            }
            f2 = g2.sibling;
            if (null !== f2) {
              f2.return = g2.return;
              g2 = f2;
              break;
            }
            g2 = g2.return;
          }
          f2 = g2;
        }
        Xi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a, b2, d2, e2, c2);
    case 15:
      return bj(a, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a, c2);
    case 19:
      return xj(a, b2, c2);
    case 22:
      return dj(a, b2, c2);
  }
  throw Error(p$3(156, b2.tag));
};
function Fk(a, b2) {
  return ac(a, b2);
}
function $k(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c2, d2) {
  return new $k(a, b2, c2, d2);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a.flags & 14680064;
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Rg(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a) aj(a) && (g2 = 1);
  else if ("string" === typeof a) g2 = 5;
  else a: switch (a) {
    case ya:
      return Tg(c2.children, e2, f2, b2);
    case za:
      g2 = 8;
      e2 |= 8;
      break;
    case Aa:
      return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c2, e2, f2, b2);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g2 = 10;
          break a;
        case Ca:
          g2 = 9;
          break a;
        case Da:
          g2 = 11;
          break a;
        case Ga:
          g2 = 14;
          break a;
        case Ha:
          g2 = 16;
          d2 = null;
          break a;
      }
      throw Error(p$3(130, null == a ? a : typeof a, ""));
  }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Tg(a, b2, c2, d2) {
  a = Bg(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function pj(a, b2, c2, d2) {
  a = Bg(22, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b2, c2) {
  a = Bg(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function Sg(a, b2, c2) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function al(a, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = new al(a, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p$3(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$3(171));
  }
  if (1 === a.tag) {
    var c2 = a.type;
    if (Zf(c2)) return bg(a, c2, b2);
  }
  return b2;
}
function el(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = bl(c2, d2, true, a, e2, f2, g2, h2, k2);
  a.context = dl(null);
  c2 = a.current;
  d2 = R$2();
  e2 = yi(c2);
  f2 = mh(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d2);
  Dk(a, d2);
  return a;
}
function fl(a, b2, c2, d2) {
  var e2 = b2.current, f2 = R$2(), g2 = yi(e2);
  c2 = dl(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a = nh(e2, b2, g2);
  null !== a && (gi(a, e2, g2, f2), oh(a, e2, g2));
  return g2;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il(a, b2) {
  hl(a, b2);
  (a = a.alternate) && hl(a, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$3(409));
  fl(a, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a);
    0 === c2 && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a2 = gl(g2);
        f2.call(a2);
      };
    }
    var g2 = el(b2, d2, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g2;
    a[uf] = g2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g2;
  }
  for (; e2 = a.lastChild; ) a.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a2 = gl(k2);
      h2.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b2, k2, c2, d2);
  });
  return k2;
}
function rl(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = gl(g2);
        h2.call(a2);
      };
    }
    fl(b2, g2, a, e2);
  } else g2 = ql(c2, b2, a, e2, d2);
  return gl(g2);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$3()), 0 === (K$1 & 6) && (Gj = B$3() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a, 1);
        if (null !== b3) {
          var c3 = R$2();
          gi(b3, a, 1, c3);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = ih(a, 134217728);
    if (null !== b2) {
      var c2 = R$2();
      gi(b2, a, 134217728, c2);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = yi(a), c2 = ih(a, b2);
    if (null !== c2) {
      var d2 = R$2();
      gi(c2, a, b2, d2);
    }
    il(a, b2);
  }
};
Hc = function() {
  return C$3;
};
Ic = function(a, b2) {
  var c2 = C$3;
  try {
    return C$3 = a, b2();
  } finally {
    C$3 = c2;
  }
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      bb(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2) throw Error(p$3(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$3(200));
  return cl(a, b2, null, c2);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!nl(a)) throw Error(p$3(299));
  var c2 = false, d2 = "", e2 = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = bl(a, 1, false, null, null, c2, false, d2, e2);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render) throw Error(p$3(188));
    a = Object.keys(a).join(",");
    throw Error(p$3(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!ol(b2)) throw Error(p$3(200));
  return rl(null, a, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a, b2, c2) {
  if (!nl(a)) throw Error(p$3(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = el(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a[uf] = b2.current;
  sf(a);
  if (d2) for (a = 0; a < d2.length; a++) c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e2
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!ol(b2)) throw Error(p$3(200));
  return rl(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p$3(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!ol(c2)) throw Error(p$3(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p$3(38));
  return rl(a, b2, c2, false, d2);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$3 = reactDomExports;
{
  client.createRoot = m$3.createRoot;
  client.hydrateRoot = m$3.hydrateRoot;
}
const warn$1 = (...args) => {
  if (console == null ? void 0 : console.warn) {
    if (isString$1(args[0])) args[0] = `react-i18next:: ${args[0]}`;
    console.warn(...args);
  }
};
const alreadyWarned$1 = {};
const warnOnce$1 = (...args) => {
  if (isString$1(args[0]) && alreadyWarned$1[args[0]]) return;
  if (isString$1(args[0])) alreadyWarned$1[args[0]] = /* @__PURE__ */ new Date();
  warn$1(...args);
};
const loadedClb$1 = (i18n, cb2) => () => {
  if (i18n.isInitialized) {
    cb2();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized);
      }, 0);
      cb2();
    };
    i18n.on("initialized", initialized);
  }
};
const loadNamespaces$1 = (i18n, ns, cb2) => {
  i18n.loadNamespaces(ns, loadedClb$1(i18n, cb2));
};
const loadLanguages$1 = (i18n, lng, ns, cb2) => {
  if (isString$1(ns)) ns = [ns];
  ns.forEach((n2) => {
    if (i18n.options.ns.indexOf(n2) < 0) i18n.options.ns.push(n2);
  });
  i18n.loadLanguages(lng, loadedClb$1(i18n, cb2));
};
const hasLoadedNamespace$1 = (ns, i18n, options = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce$1("i18n.languages were undefined or empty", i18n.languages);
    return true;
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance2, loadNotPending) => {
      var _a;
      if (((_a = options.bindI18n) == null ? void 0 : _a.indexOf("languageChanging")) > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns)) return false;
    }
  });
};
const isString$1 = (obj) => typeof obj === "string";
const isObject$1 = (obj) => typeof obj === "object" && obj !== null;
const matchHtmlEntity$1 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities$1 = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
const unescapeHtmlEntity$1 = (m2) => htmlEntities$1[m2];
const unescape$1 = (text) => text.replace(matchHtmlEntity$1, unescapeHtmlEntity$1);
let defaultOptions$1 = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape: unescape$1
};
const setDefaults = (options = {}) => {
  defaultOptions$1 = {
    ...defaultOptions$1,
    ...options
  };
};
const getDefaults$2 = () => defaultOptions$1;
let i18nInstance$1;
const setI18n = (instance2) => {
  i18nInstance$1 = instance2;
};
const getI18n$1 = () => i18nInstance$1;
const initReactI18next = {
  type: "3rdParty",
  init(instance2) {
    setDefaults(instance2.options.react);
    setI18n(instance2);
  }
};
const I18nContext$1 = reactExports$1.createContext();
let ReportNamespaces$1 = class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      var _a;
      (_a = this.usedNamespaces)[ns] ?? (_a[ns] = true);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
};
const usePrevious$1 = (value, ignore) => {
  const ref = reactExports$1.useRef();
  reactExports$1.useEffect(() => {
    ref.current = value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT$1 = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT$1 = (i18n, language, namespace, keyPrefix) => reactExports$1.useCallback(alwaysNewT$1(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation$1 = (ns, props = {}) => {
  var _a, _b, _c, _d;
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = reactExports$1.useContext(I18nContext$1) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n$1();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces$1();
  if (!i18n) {
    warnOnce$1("You will need to pass in an i18next instance by using initReactI18next");
    const notReadyT = (k2, optsOrDefaultValue) => {
      if (isString$1(optsOrDefaultValue)) return optsOrDefaultValue;
      if (isObject$1(optsOrDefaultValue) && isString$1(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k2) ? k2[k2.length - 1] : k2;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if ((_a = i18n.options.react) == null ? void 0 : _a.wait) warnOnce$1("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i18nOptions = {
    ...getDefaults$2(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = ns || defaultNSFromContext || ((_b = i18n.options) == null ? void 0 : _b.defaultNS);
  namespaces = isString$1(namespaces) ? [namespaces] : namespaces || ["translation"];
  (_d = (_c = i18n.reportNamespaces).addUsedNamespaces) == null ? void 0 : _d.call(_c, namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n2) => hasLoadedNamespace$1(n2, i18n, i18nOptions));
  const memoGetT = useMemoizedT$1(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT$1(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const [t2, setT] = reactExports$1.useState(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious$1(joinedNS);
  const isMounted = reactExports$1.useRef(true);
  reactExports$1.useEffect(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages$1(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        loadNamespaces$1(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n) i18n == null ? void 0 : i18n.on(bindI18n, boundReset);
    if (bindI18nStore) i18n == null ? void 0 : i18n.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (i18n) bindI18n == null ? void 0 : bindI18n.split(" ").forEach((e2) => i18n.off(e2, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(" ").forEach((e2) => i18n.store.off(e2, boundReset));
    };
  }, [i18n, joinedNS]);
  reactExports$1.useEffect(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t2, i18n, ready];
  ret.t = t2;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise((resolve) => {
    if (props.lng) {
      loadLanguages$1(i18n, props.lng, namespaces, () => resolve());
    } else {
      loadNamespaces$1(i18n, namespaces, () => resolve());
    }
  });
};
function Eirele() {
  const title = /* @__PURE__ */ jsxRuntimeExports$1.jsxs(
    "span",
    {
      className: "uppercase font-bold",
      style: { color: "lightgrey" },
      "data-testid": "eirele",
      children: [
        /* @__PURE__ */ jsxRuntimeExports$1.jsx("span", { style: { color: "#169B62" }, children: "ei" }),
        /* @__PURE__ */ jsxRuntimeExports$1.jsx("span", { style: { color: "white" }, children: "re" }),
        /* @__PURE__ */ jsxRuntimeExports$1.jsx("span", { style: { color: "#FF883E" }, children: "le" })
      ]
    }
  );
  return title;
}
const __vite_glob_0_0 = "/eirele/assets/ireland-map-cork-Dql9xpN4.svg";
const __vite_glob_0_1 = "/eirele/assets/ireland-map-donegal-DwCOxFc9.svg";
const __vite_glob_0_2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='63.55003'%20height='89.190002'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%2054.99003,47.85%20-3.97,-0.43%20-0.5,-0.58%20-0.4,0.43%20-1.8,-2.11%20-0.44,-2.67%20-0.5,-0.06%200.59,-0.31%200.69,0.35%200.35,2.05%200.67,1.23%20h%200.42001%20l%200.13999,-0.47%20-0.86,-3.67%20-0.16,-1.86%200.44,-0.98%20-0.4,-1.45%20-1.82,-1.25%20-2.19,-0.33%20-1.19,-0.68%20-0.56,0.12%20-3.6,-2.07%20v%20-0.25%20l%201.43,0.49%201.46,-0.35%200.8,-0.72%201.7,0.31%201.08,-0.61%20-0.33,-0.16%200.1,-0.59%200.76,0.21%201.33,1.15%20-1.13,1.27%20-0.57,1.19%200.53,0.04%20-0.51,0.41%202.25,-1.25%200.93,-3.21%201.88,-1.78%200.72,-1.41%20-1.29,-0.49%20-0.46,-2.09%20-0.49,-0.7%20-0.16,0.23%20-0.5,-0.33%20-0.95,0.02%200.36,1.21%200.7,0.94%20-2.72,-0.39%20-1.8,0.41%20-0.59,-0.16%20v%20-0.98%20l%201.67,-0.88%201.11,-0.04%201.81,-0.82%200.98,0.55%200.95,0.04%201.53,-1.33%202.41,-0.51%20-0.05,-0.63%20-0.92,-0.34%20-0.43,-1.1%200.36,-1.47%200.68,-0.37%200.02,-0.51%20-0.88,-0.16%200.22,-0.65%200.49,0.04%20-0.08,-1.45%20-0.42001,-1.35%20-1.55,-1.29%20-0.73,-2.59%200.57,-0.98%20-1.69,0.51%20-1.94,-0.73%20-2.04,-0.12%20-1.65,-2.49%20-0.42,-1.35%20-1.76,-0.9%20-0.27,-1.04%20-0.65,-0.41%20-0.09,-2.24%20-2.92001,-0.61%20v%200%20l%20-1.91,0.94%20-0.49,-0.2%20-0.65,-1.04%20-2.14999,0.61%20-1.05001,1.53%20-0.08,1.02%20-0.49,0.82%200.04,3.31%20-1.38,0.78%20-0.46,0.92%20-2.41,0.71%20-1.18,1.84%20-1.83,0.69%20-0.27,-0.33%20-1.19,-0.14%200.15,-1%20-1.6,-1.14%20-1.12,-0.65%20-1.2,0.08%20-1.17,-0.53%200.22,2%20-1.08,0.14%20-0.89,1.71%20-1.43,-0.06%20-0.74,0.98%20-0.29,1.51%20-0.43,0.27%20-0.69,2.08%200.19,0.65%201.32999,0.53%20-0.18,0.71%201.77,2.31%202.05,0.33%202.86,1.82%20-0.12999,1.6%202.6,1.47%200.86,4.09%20-1.34,1.33%20-0.47,1.31%20-0.27,1.11%200.26,2.46%20-1.48,0.61%20-1.4,0.14%20-1.21,0.94%20-2.75,-0.37%20-0.73,1.08%200.23,0.94%20-0.48,0.78%200.01,1.74%20-2.38,2.5%200.02,0.76%20-1.8,2.22%20v%200%20l%20-1.32,1.33%20-0.44,1.52%20v%200%20l%20-0.16,0.45%20v%200%20l%20-0.5,1.72%20L%206.82,53.54%206.6,53.91%205.82,56.76%206.5,58.24%205.94,59.51%206.31,59.65%205.51,61.44%204.38,60.84%203.80001,61.17%203.33,60.96%202.22,61.68%201.72,62.42%202.08,63.14%200.92,64.07%202.26,65.24%202.11,67.63%201.37,68.6%200,69.55%203.52,72.7%204.68,72.35%204.39,73.17%203.53,73.03%20l%20-2.1,1.52%20-0.09,0.56%200.35,0.56%200.55,0.21%201.24,-0.33%205.28,2.18%20-0.37,0.58%20v%200%20l%201.32,1.48%201.27,-0.88%203.76,0.12%200.96,2.57%200.71,-0.08%200.37,0.54%200.06,0.89%200.8,-0.54%202.66,-0.39%200.44,0.31%20-0.57,4.12%202.92,2.04%201.62,0.7%202.64,-3.17%200.44,-3.54%20-0.21,-1.59%200.96,-0.7%201.28,0.54%201.62,1.98%201.8,1.13%202.3,0.68%201.27,-0.41%201.32,-1.24%201.06,0.08%200.27,-1.24%201.61,-0.02%201.37,-0.56%200.33,0.04%200.72,1.77%201.26,1.36%200.51,0.33%201.35,-0.21%201.2,0.72%202.52,-1.98%201.47,-0.47%20v%200%20l%20-1.05,-5.7%200.08,-3.58%200.53,-1.3%201.8,-0.89%20-1.53,-2.92%20-0.6,0.02%20-0.62,-0.54%20-0.29,0.23%20-1.23,-0.72%200.47,-1.46%20-0.15,-0.66%20-0.01,0.8%20-0.55,0.9%20-1.42,-1.01%200.82001,-0.99%20-1.52,1.42%20-0.69,0.08%20L%2040.99,63.51%2040,62.44%20l%20-0.94,-3.6%200.51,-0.45%201.76,0.43%200.14,-0.64%201.59,0.02%200.14,-0.86%20-3.16,-0.06%20-4.04,-0.78%201.34,-0.14%200.13,-0.47%203.49,0.49%200.06,-0.51%20-0.47,-0.7%20-1.28,-0.12%20-0.21,-0.55%20-0.88,-0.08%20-0.34,0.47%20-1.21,-0.68%200.73,-0.72%204.25,0.92%201.32,-0.84%202.58,-3.36%203.16,-1.71%202.29,0.04%200.77,0.66%20-0.08,0.84%200.68,1.7%201.53,1.56%200.71,0.25%202.32,-0.74%200.65,0.6%200.25,-0.14%20-0.28,-0.88%200.95,-1.72%200.17,-1.11%20-1.87,-2.21%20-0.64,-0.33%20z%20m%208.52,-20.2%20-0.88,0.88%200.28,0.67%20-0.33,0.59%20-1.56,-0.31%20-0.16,-0.47%20-1.07,-0.53%200.57,-1.74%200.76,0.57%201.38,-0.57%201.05,0.45%20z%20m%20-15.05,21.98%201.44,-0.2%200.15,0.27%20-4.54,2.96%20-1.15,1.13%20-0.44,1.09%20-0.76,-0.62%201.32,-2.17%200.92,-0.88%200.42,0.1%200.3,-0.51%20z'%20title='Dublin'%20id='IE-D'%20/%3e%3c/svg%3e";
const __vite_glob_0_3 = "/eirele/assets/ireland-map-galway-YPHB94RT.svg";
const __vite_glob_0_4 = "/eirele/assets/ireland-map-kerry-C9g4Rky9.svg";
const __vite_glob_0_5 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='82.920013'%20height='115.14'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%209.79001,13.71%200.5,-2.46%200.50999,-0.7%204.72001,-2.52%201.08,-2.07%201.29,-1%200.9,-2.11%201.32999,-1.11%201.04001,-0.22%200.99,-0.99%201.48,-0.53%201.9,1.88%203.72,-1.23%200.37,2.09%201.15,1.38%201.39,0.63%201.18,2.48%204.19,2.15%203.72,0.91%202.55,-4.02%201.93,-1.31%203.06,-0.9%207.04,3.42%204.5,3.63%201.94,0.04%207.12,1.39%201.49,-2.72%200.92,-0.7%201.74,1.88%201.37,0.39%200.74,0.87%200.58,-0.19%202.12,1.33%201.38,-1.21%201.28,0.46%201.91,-0.37%20v%200%20l%20-1.32,1.33%20-0.45,1.52%20v%200%20l%20-0.16,0.45%20v%200%20l%20-0.5,1.72%20-1.3,0.31%20-0.22,0.37%20-0.78,2.85%200.68,1.48%20-0.56,1.26%200.37,0.14%20-0.8,1.79%20-1.14,-0.6%20-0.58,0.33%20-0.47,-0.21%20-1.1,0.72%20-0.51,0.74%200.37,0.72%20-1.16,0.93%201.34,1.17%20-0.15,2.4%20-0.73,0.97%20-1.37,0.95%203.52,3.16%201.16,-0.35%20-0.29,0.81%20-0.87,-0.13%20-2.10001,1.51%20-0.09,0.57%200.35,0.56%200.55,0.22%201.24,-0.33%205.28,2.17%20-0.37,0.59%20v%200%200%200%20l%20-2.15,2.72%20-0.41,-0.1%20-1.39,1.25%200.13,1.26%200.95,0.54%20-2.55,3.56%20-2.06,-0.51%20-1.38,0.45%20-0.74,0.93%20-0.2,1.67%202.16,1.4%20-1.81,1.44%20-0.21,0.81%20-0.73,0.02%20-1.12,0.91%20-0.39,0.78%200.24,2.46%20-2.43,3.63%20-1.7,1.86%20-0.05,0.58%20-1.78,-0.5%20-0.52,2.28%20-3.62,0.76%20-0.43,1.09%20-1.96,0.25%20-0.21,0.89%20-2.29,0.89%20-0.19,-0.37%20-0.31,0.08%20-1.39,0.62%20-0.68,0.83%20-0.87,0.25%200.34,0.95%20-0.13,1.96%20-0.85,2.03%20-1.48,1.51%20-0.78,1.47%20-1.02,-0.12%20-1.37,1.05%200.38,0.73%20-0.33,0.29%201.12,1.05%20-2.5,1.8%20-0.67,1.6%200.47,0.66%20-0.19,0.75%200.7,1.65%200.82,-0.33%201.07,2.12%203.77,4.58%200.17,0.6%20-0.3,0.73%200.76,1.62%20-0.57,2.42%20v%200%20l%20-0.33,0.73%20-0.93,-0.15%200.23,2.78%20-0.59,1.6%20-1.56,-0.14%20-0.36,1.74%20-0.78,0.36%20-0.91,1.18%20-0.36,-0.04%20-0.53,1.37%20-0.72,-0.66%20-2.12,-0.67%20-0.57,0.29%20-0.7,-0.21%20-0.13,0.73%20-0.88,0.96%20-0.65,-0.13%20-0.77,0.77%20-0.26,-0.41%20-0.75,0.06%20-1.67,-2.79%20-0.97,0.29%200.87,1.08%200.04,1.52%20-1.33,0.63%20-0.53,-0.61%20-2.26,-1.27%20-1.08,-1.6%20-0.68,-0.47%20-0.27,-1.35%20-1.03,0.08%20-0.78999,1.64%20v%200%20l%20-0.04,-1.85%20-0.38,-0.89%200.62,-1.47%200.06,-3.37%20-2.25,-4.44%20L%2024.54,97.93%2023.03,95.87%2022.75,93.41%2022.08001,92.78%2021.85,91.93%2016.92,94.44%2016.74,93.9%2017.11,92.58%2015.5,91.93%2014.32,92.12%2013.7,91.6%2012.58,91.44%2011.08,89.74%2010.44,88.41%209.52,88.25%209.05,87.67%208.98,86.73%20l%200.39,-0.8%201.8,-2.26%200.31,-2.57%202.15,-1.13%20-1.17,-0.6%20-0.16,-1.08%200.12,-0.48%201.2,-1.03%20-0.48,-1.92%200.67,-0.48%200.2,-0.74%20-0.99,-3.33%200.14,-0.85%20-0.45,-1.67%20-1.8,-1.2%20-1.36,-2.95%20-0.1,-1.09%20-1.91,-1.16%200.59,-0.77%200.43,-1.5%20-0.75,-2%20v%200%20L%209.41,57.34%2010.88,59%2011.83,56.71%2011.79,55.55%2011.36,55.01%209.84,54.48%208.49,54.56%207.25,55.24%204.84,52.77%203.91,52.97%200.62,52.52%200,52.19%200.02,51.9%201.28,50.81%202.1,50.66%20l%201.43,0.5%202.58999,0.02%201.76,0.41%203.42,-0.91%203.92001,0.17%200.2,-2.41%20-0.39,-0.78%202.66,-1.24%200.34,-0.85%20-2.37,-1.71%20-1.65,0.48%20-1.65,-1.07%20-1.27,-0.17%20-0.02,-0.72%202.56,-0.2%200.27,-0.77%20-0.38,-0.86%203.72,-1.93%20-1.63,-4.18%200.07,-0.68%202.73,-1.07%201.02,0.33%201.03,-0.62%20-1.66,-1.11%20-0.67,-0.98%204,-2.27%20-0.14,-0.96%20-1.29,-1.48%20-1.78,-0.91%20-1.66,-0.36%20-0.65,-0.56%20-0.16,-1.29%200.3,-0.82%20-2.33,-3.04%20-0.74,-0.09%20-1.21,0.72%20L%2010.8,18.21%209.31,16.63%208.98,15.85%20Z'%20title='Kildare'%20id='IE-KE'%20/%3e%3c/svg%3e";
const __vite_glob_0_6 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='88.690002'%20height='124.41'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%200,21.48%201.47001,-0.5%201.25,-1.09%201.82999,0.5%202.36001,-0.6%200.23,-0.67%20-0.12,-2.74%200.31,-0.3%200.37,0.5%200.39,-1.02%202.48,-1.79%200.59,-1.14%200.89999,1.19%200.68,0.29%200.77,2.1%200.88,0.41%200.69,-0.18%201.13,0.77%200.05,-1.23%200.92,-0.1%201.10001,0.91%20-0.19,0.85%200.43,0.48%201.31,-0.6%200.6,0.15%201,0.85%201.54,2.18%203.25,-0.6%200.29,-1.25%201.14,-0.54%200.96,-1.1%201.18,0.79%202.15,0.66%200.89,-1.49%200.3,-2.85%201.19,-0.63%200.72,-1.56%201.48,0.44%200.19,2.79%201.23,-0.17%20-0.23,-1.23%200.54,-1.93%202.48,-5.87%200.9,-0.22%200.96,-0.86%200.73,0.38%200.2,0.58%200.61,-0.08%204.28,2.66%201.9,-3.04%200.18,-1.02%20-0.47,-0.93%200.05,-0.69%203.11,0.21%202,-2.64%201.14,-0.51%200.76,0.14%200.88,0.87%200.33,0.89%200.99,0.21%200.81,2.1%201.27999,-0.79%200.25,0.75%200.7,0.42%200.24,2.88%20-0.35,1.13%200.7,0.52%201.76,3.84%201.13,0.56%201.72,-0.29%200.65,0.79%200.04,0.67%201.82,0.65%201.37,3.05%200.17,1.27%20v%200%20l%20-0.57,1.4%20-1.32,0.56%20-1.32,1.1%200.59,1.15%20-0.2,2.4%20-1.94,2%200.5,1.64%200.89,0.75%20-0.23,0.3%20-1.16,0.18%20-0.56,1.11%203.02,0.02%201.5,3.09%201.95,0.98%200.14,-0.9%200.71,-0.9%200.67,0.04%200.62,0.98%201.93,1.19%201.31,1.51%200.34,1.35%20-0.33,0.63%201.26,0.69%20-0.1,1.1%202.05,1.22%20-1.06,2.1%200.03,1.55%200.45,1.23%20-0.62,0.61%20-0.22,1.4%200.12,0.58%201.14,0.9%20-0.61,1.03%200.66,1.11%200.76,0.54%200.19,1.21%202.42,0.76%201.65,2.05%201.1,0.58%200.89,1.7%20-0.32,1.34%200.79,1.31%20-0.19,0.65%20-1.63,1.14%20-0.68,1.17%20-1.03,0.37%20-0.17,1.01%20-1.5,0.9%200.98,1.26%201.51,0.31%200.28,0.34%200.24,2.03%20-0.83,3.17%201.01,2.2%200.66,0.19%20-0.01,1.4%200.88,0.82%20-0.36,0.71%20-0.48,0.38%20-0.72,-0.06%20-0.34,0.51%202.1,0.67%20v%200%20l%200.19,0.63%20-1.08,0.86%20-0.33,2.39%200.73,1.68%200.57,0.5%20-0.08,0.66%20-0.92,0.56%20-0.37,0.91%20-1.44,-0.28%20-0.97,-0.75%20-1.44,0.69%200.06,0.65%200.65,0.55%201.52,0.59%200.1,1.82%20-2.73,4.55%20-0.12,2.14%20-2.41,0.07%20-0.79,1.4%20-0.35,2.28%200.42,3.45%200.65,1.1%20-0.06,0.59%20-0.13,0.44%20-1.62,1.16%20-1.56,3.39%202.12,3.88%20v%200%20l%20-2.65,0.8%20-2.27,2.72%20-3.2,-0.06%20-2.62,0.97%20-0.86,-0.74%20-0.42,-1.75%20-3.39,-0.61%20-2.17,-1.84%20-1.2,-0.16%20-1.41,1.07%20-3.83,4.94%20-1.79,0.74%20-1.14,-0.81%20-1.35,-2.74%20-2.31,-0.63%20-0.62,-0.49%20-2.18,-4.49%20-0.23,-1.16%20-1.58,-1.13%20-0.48,-2.45%20-2.19,-2.63%20-3.81,-1.18%20-0.5,-1.06%20-1.38,-0.16%20v%200%20l%20-0.14,-0.84%20-0.82,-1.27%20-2.04,-2.08%200.71,-2.17%20-0.21,-1.07%200.46,-0.65%20-0.34,-2.42%200.99,-3.85%20-0.1,-0.96%20-0.97,-1.06%20-0.76,0.02%20-1.42,-1.04%20-1.6,-3.22%20-2.14,-2.31%20-2.3,-0.73%20-0.47,-1.11%201.21,-2.19%202.6,-2.05%200.41,-1.53%200.99,-1.37%20-0.52,-1%20-0.77,-0.4%20-1.59,1.4%20-0.48,-0.12%200.18,-1.45%20-1.01,-0.73%20-0.06,-2.87%200.53,-1.57%200.08,-1.8%20-0.83,-1.03%200.68,-3.83%20-0.69,-1.01%20-1.75,-1.23%20-0.5,-0.75%20-0.21,-1.32%200.75,-1.51%20L%2023.16,52.9%2021.2,50.56%2020.58,50.27%2017.94,45.88%20V%2044.69%20L%2017.04,42.43%2016,41.14%2016.66,40.34%2016.6,39.8%2016.2,39.07%2015.06,38.42%2014.91,37.25%2014.49,36.73%2013.57,36.36%2013.47,35.98%2012.55,35.92%2011.38,34.81%2010.93,35.04%209.96,34.62%209.17,33.52%207.76,33.31%207.23,32.17%206.39,31.77%205.47,30.75%204.06,30.85%20v%200%20l%20-0.77,0.13%20v%200%20L%203.06,30.91%203.18,30.23%202.76,28.74%200.65,26.56%200.79,25.12%200.43,22.47%20Z'%20title='Kilkenny'%20id='IE-KK'%20/%3e%3c/svg%3e";
const __vite_glob_0_7 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='93.770012'%20height='83.720001'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%200.16001,49.81%200.10001,-1.31%202.14999,-2.03%200.87001,-2.05%20-0.99001,-0.71%200.44,-1.01%20-0.02,-2.71%200.87,-1.49%200.72,-2.2%200.98,-0.7%201.95,-0.46%201.82,-1.22%20-0.09,-2.28%205.07,-3.74%201.19,-1.61%200.48,-2.01%201.3,-1.77%200.21,-0.93%20-3.21,-1.34%200.27,-0.64%20-0.13,-1%20-1.18,-1.59%20-1.19,-0.53%20-0.3,-0.87%20-1.23,-1.46%20-0.11,-1.59%201,-0.75%200.62,-1.25%200.1,-1.63%203.14,-0.91%202.28,0.18%201.1,-0.65%203.13,-0.36%202.02,-1.34%204.31,-1.13%201.07,-1.3%200.56999,0.64%202.47001,1.05%201.95,0.35%201.27999,-0.24%200.81,-1.3%20-0.42,-2.27%200.79,-0.62%200.78,0.15%201.2,-0.85%200.5,0.6%201.05,0.43%201.37,-1.36%200.78,0.87%200.42,-0.27%200.99,0.51%200.04,0.7%200.87,1.47%202.26,1.94%202.08,3.5%20-0.31,0.31%20-1.42,-0.16%200.54,2.35%200.64,0.82%200.49,1.88%200.46,0.21%200.21,0.7%201.3,0.84%201.95,-0.68%201.24,0.31%200.57,-0.72%200.72,0.41%200.46,-1.01%20h%200.99%20l%200.39,0.7%20h%200.74%20l%200.67,-1.19%200.84,-0.71%201.54,-0.39%201.55,-0.95%200.68,-0.93%200.44,-1.52%201.22,-1.18%200.60001,1.51%20-0.22001,1.17%200.60001,0.48%202.26999,0.27%201.73001,-0.44%204.33999,0.15%20v%200%20l%200.75,2%20-0.43,1.5%20-0.58999,0.77%201.91,1.16%200.1,1.09%201.36,2.95%201.8,1.2%200.45,1.67%20-0.14,0.85%200.99,3.33%20-0.2,0.74%20-0.67,0.48%200.48,1.92%20-1.2,1.03%20-0.12,0.48%200.16,1.08%201.17,0.6%20-2.15,1.13%20-0.31,2.57%20-1.8,2.26%20-0.39,0.8%200.07,0.94%200.47,0.58%200.92,0.16%200.64,1.33%201.5,1.7%201.12,0.16%200.62,0.52%201.18,-0.19%201.61,0.65%20-0.37,1.32%200.18,0.54%204.93,-2.51%200.23001,0.85%200.66999,0.63%200.28,2.46%201.51,2.06%200.18001,1.61%202.25,4.44%20-0.06,3.37%20-0.62,1.47%200.38,0.89%200.04,1.85%20v%200%20l%200.69999,2.08%20-0.38,1%200.63,3.05%20-0.24,0.6%20-1.57999,0.65%200.79999,1.6%200.07,0.94%20-1.57001,2.31%20-1.5,1.27%20-0.92999,-0.46%20-4.42001,0.46%20-1.14,-0.44%20-2.01,0.29%20-0.86,2.52%20-1.95999,0.64%20v%200%20L%2078.26,80.63%20l%20-1.37,-3.05%20-1.81999,-0.65%20-0.04,-0.67%20-0.65,-0.79%20-1.72,0.29%20-1.13,-0.56%20-1.76,-3.84%20-0.69999,-0.52%200.35,-1.13%20-0.24,-2.88%20-0.70001,-0.42%20-0.25,-0.75%20-1.27999,0.79%20-0.81,-2.1%20-0.99,-0.21%20-0.33,-0.89%20-0.88,-0.87%20-0.76,-0.14%20-1.14,0.51%20-2,2.64%20-3.11,-0.21%20-0.05,0.69%200.47,0.93%20-0.18,1.02%20-1.9,3.04%20-4.28,-2.66%20-0.61,0.08%20-0.2,-0.58%20-0.73,-0.38%20-0.96,0.86%20-0.9,0.22%20-2.48,5.87%20-0.54,1.93%200.23,1.23%20-1.23,0.17%20-0.19,-2.79%20-1.48,-0.44%20-0.72,1.56%20-1.19,0.63%20-0.3,2.85%20-0.89,1.49%20-2.15,-0.66%20-1.18,-0.79%20-0.96,1.1%20-1.14,0.54%20-0.29,1.25%20-3.25,0.6%20-1.54,-2.18%20-1,-0.85%20-0.6,-0.15%20-1.31,0.6%20-0.43,-0.48%200.19,-0.85%20-1.1,-0.91%20-0.92001,0.1%20-0.05,1.23%20-1.13,-0.77%20-0.69001,0.18%20-0.88,-0.41%20-0.77,-2.1%20-0.67999,-0.29%20-0.9,-1.19%20-0.59,1.14%20-2.48,1.79%20-0.39,1.02%20-0.37,-0.5%20-0.31,0.3%200.12,2.74%20-0.23,0.67%20-2.36,0.6%20-1.83,-0.5%20-1.25,1.09%20-1.47001,0.5%20v%200%200%200%20L%206.23,79.61%205,78.64%205.38,77.16%204.53,74.68%201.82001,72.92%200,69.21%201.69001,67.93%201.17001,63.31%202.59,62.75%20l%200.47001,-2.36%200.79,-0.15%201.32,-1.56%201.47,-0.52%201.2,-1.88%200.43,-1.95%20-2.62,0.35%20-2.12,-0.25%20-1.05,-1.08%20-2.06,-1.2%200.31,-0.64%20z'%20title='Laois'%20id='IE-LS'%20/%3e%3c/svg%3e";
const __vite_glob_0_8 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='98.320007'%20height='133.92'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%2014.51001,0%201.71,0.34%20v%200%20l%200.45,0.7%202.74,1.07%200.89,1.37%202.06,0.02%200.56,-1.52%200.56,-0.12%200.58999,-0.7%205.14,1.72%20v%200%20l%203.90001,2.62%20-0.01,0.46%20-2.17,1.28%200.13999,0.82%206.5,5.4%201.40001,1.56%200.40999,0.64%20-0.25999,0.62%203.3,5.62%202.89,1.56%200.50999,0.96%200.74001,-0.44%201.19,0.46%201.03,-0.56%201,0.3%20-0.1,1.82%201.41,1.08%200.62,1.64%201.81,2.04%200.35,1.76%201.8,1.94%20v%200%20l%20-0.78,1.7%20-2.22,2.85%20-1.22,3.99%20-2.02,2.51%20-1.06,0.4%20-3.62,-1.02%20-1.54,2.31%20-0.37,1.23%200.89,1.08%200.44,1.39%200.97999,1.15%200.38,1.02%20-0.5,1.81%20-0.95,0.9%200.39,2.63%200.48,0.44%201.35,-0.66%201.04,0.24%201.4,-1.11%202.15,2.27%204.49,0.54%200.82,1.29%202.09,0.66%200.44,1.07%200.64,0.3%200.78,1.17%200.71,0.26%200.64,1.33%201.14,0.93%20-0.42,1.35%201.26,0.36%200.11,0.85%200.56,0.7%202.91,1.39%20-0.85,1.17%203.28,3%201.28,-0.02%200.47,-1.91%201.9,-1.77%200.25,0.93%201,0.69%203.59,0.54%200.18,0.58%200.78,0.44%200.19,0.85%200.98,0.4%200.53,2.28%203.16,-0.4%202.92,4.5%200.99,0.87%200.88,-0.32%201.01,0.56%200.41,2.74%200.35001,0.16%200.91,-0.83%201.1,0.93%20-1.32,1.86%20-0.07,0.71%200.48,0.59%201.39,0.97%201.55,0.48%200.71,-0.3%20-0.14,-1.23%201.2,0.57%200.44,0.69%200.02,0.67%20-0.41,0.52%200.86,1.68%200.1,1.58%20-0.83,2.02%201.2,0.83%200.77,1.29%20-0.21,1.01%20-0.65,0.06%20-0.64,0.63%200.96,1.42%20-0.35,0.87%20-1.8,1.66%20-1.02,1.6%200.27,0.51%20v%200%20l%20-0.33,0.44%20h%20-0.75%20l%20-3.25,-1.29%20-1.22,0.93%20-0.3,1.23%20-0.76,0.63%20-0.17,1.36%20-0.97001,0.63%20-1.13999,-0.36%20-0.38,0.18%200.01,2.45%20-0.79001,0.18%20-0.63,0.79%20-0.92,0.2%20-0.27,1.68%20-1.41,0.55%20-0.58,1.9%20-0.88,0.65%20-1.2,-0.75%20-0.25999,0.67%20-0.79,0.51%20-0.05,1.4%20-0.89,0.1%20-0.77,-0.49%20-0.48,0.47%200.58,3.63%20-1.26,2.23%20-0.79,2.52%20-0.05,1.32%20-1.78,0.28%20-0.83,-0.87%20-1.12,-0.08%20-1.03,1.7%20-0.91,0.04%20-1.16,-1.44%20-0.69,-2.15%20-0.88,-0.04%20-0.34,1.08%200.36,2.11%20-0.88,1.66%20-1.03,-0.75%200.78,-0.87%20-1.2,-1.01%20-0.22,0.41%20-0.42,-0.3%200.46,-0.81%20-0.27,-0.69%20-1.34,0.63%20-0.17,-0.24%20-1.8,0.34%20-0.48,-2.94%20v%200%20l%20-1.13,-2.41%20-1.68,0.14%20-2.51,-3.63%20-1.75,0.35%20-0.33,-0.75%200.26,-1.76%20-0.34,-1.42%200.43,-1.01%20-1.66,-2.61%200.48,-2.39%20-0.61,-1.58%20-0.53,-0.08%20-0.91,0.63%20-0.89,-1.23%200.01,-1.38%20-1.73,-0.34%20-0.63,0.57%200.53,1.01%20-0.27,0.71%20-2.66,2.33%20-1.17,0.32%20-1.27,-1.8%200.06,-0.79%20-1.38,0.55%20-0.86,-1.9%201.17,-1.32%20-0.26,-1.05%20-1,0.26%20-0.81,-0.81%20-0.08,-0.99%20-0.41,-0.51%20-1.2,-0.51%202.23,-2.53%200.76,-2.06%201.23,0.02%201.19,-2.34%20-1.25,-0.65%20-0.23,-3.5%20-0.63,-0.69%20-0.33,-1.15%200.04,-2.81%200.31,-2.2%200.89,-1.13%20-0.04,-0.73%200.68,0.5%201.35,-1.13%200.35,-1.31%201.22,-1.51%20-0.96,-1.33%20L%2043.14,74.72%2040.29001,74.58%2039.69,73.77%20l%20-0.8,0.24%20-1.55,-0.36%20-2.15,-1.83%20-2.54,-1.29%20-0.8,1.83%20-0.94,0.5%20-0.28,0.77%20v%200%20L%2030.02,73.01%2028.55,69.97%2027.85,70.35%2026.50001,68.4%2026.22,68.28%2025.69,68.86%2024.37001,67.89%2024.09,66.08%20l%20-0.65999,-1.23%20-1.18,-0.1%20-1.89,-1.05%20-0.16001,0.66%20-0.64999,-0.12%20-0.12,0.79%20-2.5,-0.04%20-2.29,-2.41%20-1.57,-0.6%20-0.91,-1.39%20-0.78,0.16%200.05,-0.8%201.29,-1.47%20-0.07,-0.72%20-2.02,-0.62%200.05,-0.86%20-1.56,-0.02%201.94,-2.85%20-0.44,-0.52%200.17,-0.56%20-0.52,-2.05%200.78,-2.89%20-0.33001,-1.18%20-0.78999,-0.92%20-0.63,-4.44%200.41,-1.71%20-0.31,-3.59%20-1.1,-2.23%20-2.42,-0.52%20-1.52,-1.1%200.27,-1.6%20-1.36,-6.35%201.22,-0.3%202.57,-2.2%20L%208.13,16.51%209.02,14.35%20V%2012.47%20L%209.74,11.57%209.47,11.23%206.96,11.47%205.78,10.51%203.83,9.99%203.47,10.63%204.12,11.87%203.3,12.45%200.99,12.71%200,11.35%202.16,9.47%202.09,7.57%202.59,6.93%205.05,5.69%206.22,5.87%206.62,5.63%206.63,4.85%205.48,4.17%205.18,2.55%20v%200%20l%202.67,-0.3%201.42,-0.84%201.19,0.26%200.55,-0.62%200.92,0.06%201.33,-1.1%20z'%20title='Leitrim'%20id='IE-LM'%20/%3e%3c/svg%3e";
const __vite_glob_0_9 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='77.319977'%20height='82.330002'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%2013.86998,20.69%200.47999,2.94%201.8,-0.33%200.17001,0.23%201.33999,-0.63%200.27001,0.69%20-0.45,0.81%200.41999,0.3%200.22001,-0.42%201.2,1.01%20-0.78001,0.86%201.02001,0.75%200.88,-1.65%20-0.36001,-2.11%200.34,-1.09%200.87,0.04%200.69,2.15%201.16001,1.44%200.90999,-0.04%201.02001,-1.69%201.12,0.08%200.82999,0.86%201.78001,-0.27%200.05,-1.32%200.79,-2.53%201.25999,-2.23%20-0.57999,-3.63%200.47999,-0.47%200.77001,0.49%200.88999,-0.1%200.04,-1.4%200.8,-0.51%200.25,-0.67%201.2,0.75%200.88,-0.65%200.58,-1.9%201.41,-0.55%200.27,-1.68%200.92,-0.2%200.63,-0.79%200.8,-0.18%20-0.02,-2.45%200.39,-0.17%201.14,0.35%200.97,-0.63%200.18,-1.37%200.75,-0.63%200.31,-1.22%201.22001,-0.93%203.26,1.28%20h%200.74%20l%200.33,-0.43%20v%200%20l%200.63,0.06%200.13999,0.95%201.36001,2.33%201.31999,1.42%20-0.27999,1.07%200.87,1.26%200.29,-0.97%201.82,0.38%200.2,1.18%200.61,1.05%20-0.66,0.79%200.01,2.13%20-1.66001,-0.43%20-0.26999,2.09%20-0.99001,2.37%20-0.1,1.28%200.38,0.3%201.36,-0.85%202.87,-0.04%200.8,-1.1%201.31,-0.75%201.19,0.9%200.85001,-0.39%200.85,0.65%200.55,-0.53%201.16,1.52%201.06,-0.22%200.11,1.76%201.23,5.1%20-1.13,1.25%200.7,0.37%200.91,1.7%201.28,-0.1%201.91001,1.71%201.12999,0.14%201.31,0.69%200.08,1.4%200.55,1.3%20v%200%20l%201.02,0.88%200.81,-0.39%201.03,0.27%200.22,1.27%200.61,0.35%20-0.11,0.65%200.48,0.85%20-1.06,1.02%20-0.3,3.19%20-0.64999,0.27%20-0.30001,-0.31%20-1.13,0.19%20-0.26,1.07%20-1.12,0.9%20-0.5,-0.21%20-0.78,-1.42%20-0.66999,-0.32%20-0.54001,0.54%20-1.25,-0.02%20-0.31,0.53%20-1.07,-0.04%20-0.41,2.69%20-0.57,0.63%20-0.75,-0.51%20-0.51,1.34%20-0.9,-0.16%20-0.29999,0.71%200.17999,0.71%20-0.93999,0.41%20-2.23001,-1.69%20-0.22,0.15%20-0.15,0.36%200.68,1.39%20-1.13,0.5%20-0.83999,-0.55%200.05,1.73%20-0.77,0.84%200.58001,1.97%20-1.73,0.13%20-0.86,1.12%20-2.08001,-0.33%20-0.72,2.47%200.15,0.57%200.77,0.55%200.02,1.24%20-3.48,-2.06%20-1.42,-0.3%20-0.33,0.38%20-0.43,1.49%201.64,0.45%203.16,1.67%200.98,1.67%20-0.43,1.57%200.91,1.59%20-1.31,0.31%20-1.6,-0.71%20-2.06,0.91%20-0.33,0.82%200.71,0.94%20-0.15,1.06%20-1.51,1.02%20-0.94,-0.21%20-0.65,0.35%20-0.74,2.64%20-1.5,2.36%20-1.6,1.15%200.43,1.22%200.06,2.01%20-0.64,1.69%20-1.51,0.82%20-0.76999,-0.94%20-2.80001,-0.61%20-1.43,0.79%20-0.27999,1.29%20-2.34001,-0.14%20-1.6,-1.37%20-1.35,-0.47%20-1.09,0.22%20-1.12,-0.57%20-1.52,0.2%20-2.45999,-1.34%20-1.33,0.12%20-0.53,0.65%20-2.7,-1.82%20-3.43,1.09%20h%20-3.34%20l%20-0.74,0.51%20-2.34,2.94%20-2.99,0.78%20v%200%20L%206.42,76.89%202.21,70.15%200,65.56%200.04,58.83%201.69,55.63%204.13,53.92%205.94,51.4%206.27,49.44%205.68,48%20l%200.16,-0.57%201.25,-0.45%201.37,-1.79%201.51,-0.04%200.72,-2.67%20-0.29,-2.03%200.18,-0.57%200.59,-0.16%201.38,1.14%201.21,-0.25%200.19,-2.36%202.01,-1.66%201.47,-0.69%200.41,-2.67%200.61,-1.42%20-0.38,-0.73%20-1.65,-0.35%20-1.45,-1.54%20-0.44,-3.53%20-0.65,-1.36%20z'%20title='Longford'%20id='IE-LD'%20/%3e%3c/svg%3e";
const __vite_glob_0_10 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='69.089996'%20height='80.949997'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%2011.19,13.87%200.84,-0.46%200.41,-1.66%201.34,0.51%200.91,-0.47%200.52,0.67%201.03,0.16%201.26,-0.16%201.77,-1.19%202.3,0.97%201.48,-1.94%200.78,0.06%200.99,-0.6%200.79,-0.06%20-0.87,-1.05%200.56,-1.27%201.47,1.06%200.97,-0.02%200.93001,2.14%200.86,0.71%200.51999,0.08%202.88,-1.05%202.96,0.58%200.74,-1.53%201.7,-0.34%200.38,-0.48%200.01,-4.8%20-0.34,-2.54%200.3,-0.87%201.79001,-0.32%200.95,0.24%200.54,1.31%200.02,2.4%201.45999,0.58%200.61,-0.3%200.83,-1.27%200.33,-1.37%201.02,-0.58%201.28,-0.14%201.17,0.74%201.11,1.25%20v%200%20l%202.74,4.6%205.49,3.67%201.83,3.55%200.83,-0.06%200.15,0.46%202.78,2.18%200.95,-0.14%200.88,-1.17%20h%200.38%20l%200.43,3.25%202.84,3.39%20-2.49,1.88%20-1.82,2.25%20-0.7,-0.35%20-2.27,0.85%20-1.19,-0.56%20-1.27,0.34%20-1.21,-0.18%20-2.61,-1.13%20-3.47,-0.53%20-4.33,-2.77%20-0.84,-0.97%20-3.22,-1.39%20-2.15,0.2%20-0.9,0.47%20-0.58,-0.23%200.35,-0.62%20-1.07,-0.89%20-0.63,-2.3%20-0.89,0.36%200.78,1.29%20-0.41,0.31%200.99,1.51%20-0.57,-0.08%20-0.29,0.4%20-2.43,-0.28%20-0.02,0.91%203.68,0.67%201.03,-0.41%200.54,0.55%200.4,1.47%20-0.69,1.32%20-1.46,0.9%20-0.11,0.53%20-0.41,-0.06%20-0.18,0.63%200.45,1.75%20-0.36,1.68%20-0.4,1.05%20-1.08,0.25%20-0.42,1.13%200.09,1.25%200.77,0.04%20-0.38,4.5%200.99,4.05%202.19,3.02%202.14,1.66%202.91,-0.15%201.5,1.14%201.49,0.51%201.6,0.02%200.79,0.99%201.46,0.02%200.92,0.71%20-1.62,2.45%20-0.92,4.91%200.08,2.94%200.43,0.78%200.61,0.18%200.63,0.77%201.44,0.04%201.8,0.79%20-0.66,1.04%20-1.24,0.38%20-0.35,0.49%20-1.11,4.29%20-0.66,5.16%20-0.44,1.16%200.16,0.9%200.89,1.09%20v%200%20l%20-0.65,-0.2%20-0.97,-1.42%20-1.32,-0.06%20-2.7,1.6%20-3.04,0.75%20-0.29,0.29%20-0.03,1.89%20-2.38,0.41%20-1.44,0.02%20-1.31,-0.81%20-1.26,-1.33%20-2.9,-0.47%20-1.53,-1.26%20-0.91,0.07%20-0.45,0.93%20-0.99,0.16%200.23,0.76%20-0.83,0.1%20-0.31,-0.31%20-0.52,0.41%20-1.07,-0.02%20-0.02,0.35%20-0.63,-0.19%20-0.92,-1.42%20-0.66,-0.21%20-0.29,-0.77%20-0.5,-0.08%20-0.06,-0.85%20h%200.36%20l%200.8,-0.94%201.49,-2.91%201.18,-1.09%20-0.5,-1.75%20-1.66,-1.02%20-5.48,0.55%20-1.48,-0.63%20-0.37,-1.12%20-0.84,-0.51%20-1.12,0.09%20-0.66,-2.75%200.48,-0.91%20-0.45,-0.47%20h%20-2.21%20l%20-0.56,-0.79%20-0.28,-1.81%200.23,-0.6%20-0.31,-0.25%200.17,-1.19%20-0.57,-1.4%20-0.83,0.06%20-0.22,-0.25%20-0.54,-1.42%200.72,-1.6%20-1.23,-2.86%20-2.8,-3.53%20H%206.07%20L%205.75,46.21%204.83,45.84%204.25,46.08%203.32,44.54%201.63,43.73%201.27,42.56%200,42.15%20v%200%20l%201.32,-2%201.37,0.61%200.75,-0.69%202.1,-0.65%20L%205.7,38.21%207.14,36.99%206.86,36.49%204.26,34.72%204.2,33.86%205.27,33.88%205.55,33.33%203.77,31.63%204.02,31.39%205.4,32.3%205.25,31.53%203.93,30.25%204.23001,29.93%204.88,30.3%206.53,30.09%206.81,28.98%206.14,28.62%20l%200.03,-0.53%200.79,-0.5%200.86,0.24%200.17,-0.97%200.95,-0.57%203.1,1.58%200.59,0.77%202.35,-0.37%200.6,-0.97%20-0.7,-0.85%201.31,-1.51%20-0.66,-1.76%201.27,-1.29%20-0.68,-1.11%20-0.08,-0.97%20-0.96,-0.47%200.49,-0.46%20-0.77999,-0.41%20-1.32,-1.47%200.58999,-0.89%20z'%20title='Louth'%20id='IE-LH'%20/%3e%3c/svg%3e";
const __vite_glob_0_11 = "/eirele/assets/ireland-map-mayo-PgfHnb9s.svg";
const __vite_glob_0_12 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='131.63'%20height='105.33'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%2067.69,0%201.12,0.75%201.05,0.16%200.99,-0.65%201.95,2.57%202.45,0.49%200.26999,-0.27%20v%200%20l%201.27,0.41%200.36,1.17%201.69,0.81%200.93,1.54%200.58,-0.24%200.92,0.37%200.32,0.7%20H%2083.44%20l%202.8,3.53%201.23,2.86%20-0.72,1.6%200.54,1.42%200.22,0.25%200.83,-0.06%200.57,1.4%20-0.17,1.19%200.31,0.25%20-0.23001,0.6%200.28,1.81%200.56,0.79%20h%202.21%20l%200.45,0.47%20-0.48,0.91%200.66,2.75%201.12,-0.09%200.84,0.51%200.37,1.12%201.48,0.63%205.48,-0.55%201.66,1.02%200.5,1.75%20-1.18,1.09%20-1.49,2.91%20-0.8,0.94%20h%20-0.36%20l%200.06,0.85%200.5,0.08%200.29,0.77%200.66,0.21%200.92001,1.42%200.63,0.19%200.02,-0.35%201.07,0.02%200.52,-0.41%200.31,0.31%200.83,-0.1%20-0.23,-0.76%200.99,-0.16%200.45,-0.93%200.91,-0.07%201.53,1.26%202.9,0.47%201.26,1.33%201.31,0.81%201.44,-0.02%202.38,-0.41%200.03,-1.89%200.29,-0.29%203.04,-0.75%202.7,-1.6%201.32,0.06%200.97,1.42%200.65,0.2%20v%200%20l%200.23,4.28%200.84,3.8%20-0.16,0.9%200.48,0.83%200.18,1.31%201.27,2.38%200.92,3.92%20v%200%20l%20-1.91,0.95%20-0.49,-0.2%20-0.66,-1.04%20-2.14,0.61%20-1.05,1.53%20-0.08,1.02%20-0.49,0.82%200.03,3.32%20-1.38,0.78%20-0.45,0.92%20-2.41,0.71%20-1.18,1.84%20-1.83,0.69%20-0.27,-0.33%20-1.19,-0.14%200.15,-1%20-1.6,-1.14%20-1.12,-0.65%20-1.2,0.08%20-1.17,-0.53%200.22,2%20-1.08,0.14%20-0.89,1.71%20-1.43,-0.06%20-0.74,0.98%20-0.29,1.51%20-0.43,0.27%20-0.69,2.08%200.19,0.64%201.33,0.53%20-0.18,0.71%201.78,2.31%202.05,0.33%202.86,1.82%20-0.13,1.61%202.6,1.46%200.86,4.09%20-1.34,1.33%20-0.46,1.31%20-0.27,1.12%200.25,2.46%20-1.48,0.6%20-1.4,0.14%20-1.21,0.94%20-2.75,-0.37%20-0.74,1.07%200.23,0.94%20-0.47,0.78%200.01,1.74%20-2.38,2.5%200.02,0.76%20-1.79,2.22%20v%200%20l%20-1.91,0.37%20-1.28,-0.46%20-1.38,1.21%20-2.12,-1.33%20-0.58,0.19%20-0.74,-0.87%20-1.37,-0.39%20-1.74,-1.88%20-0.92,0.7%20-1.49,2.72%20-7.12,-1.39%20-1.94,-0.04%20-4.5,-3.63%20-7.04,-3.42%20-3.06,0.9%20-1.93,1.31%20-2.55,4.02%20-3.72,-0.91%20-4.19,-2.15%20-1.18,-2.48%20-1.39,-0.63%20-1.15,-1.38%20-0.37,-2.09%20-3.72,1.23%20-1.9,-1.88%20-1.48,0.53%20-0.99,0.99%20-1.04,0.22%20-1.33,1.11%20-0.9,2.11%20-1.29,1%20-1.08,2.07%20-4.72,2.52%20-0.51,0.7%20-0.5,2.46%20v%200%20l%20-2.31,-0.24%20-2.33,-1.44%20-0.86,-0.92%20-1.52,-0.08%200.1,-1.6%20-1.46,-0.68%20-1.41,-1.31%20-1.18,-0.23%20-1.61,-1.58%20v%200%20l%20-0.22,-1.94%203.86,-1.01%201.12,-2.23%203.61,0.74%203.34,-1.78%201.16,-1.62%202.11,-1.09%20-0.48,-1.88%200.76,-1.27%20-0.74,-1.9%201.8,-0.94%201,-0.12%200.97,-2.66%201.34,-1.64%200.01,-1.98%200.51,-2.31%20-1.79,-1.92%20-0.22,-0.92%200.48,-1.68%200.91,-1.53%200.77,-0.49%202.52,0.29%200.67,-0.21%20-0.92,-1.69%200.18,-0.49%201.12,-0.69%200.51,-2.39%20-0.85,-2.12%200.07,-0.78%201.25,-1.83%201.22,-0.43%200.55,-0.82%20-0.25,-1.12%200.95,-1.91%20-0.22,-0.59%200.27,-0.41%20-0.52,-0.37%20-0.58,0.27%20-0.94,-0.51%20-0.52,-1.06%200.28,-0.41%20-1.44,-2.2%20-1.51,-0.31%20-0.89,2.23%20-1.77,-0.74%20-0.63,1.79%20-0.91,0.66%20-1.73,0.18%20-0.98,1.71%20-0.82,0.76%20-2.35,-1.94%20-1.26,-2.42%20-0.9,-0.19%20-1.44,-2.95%20-1.81,2.01%20-1.59,-2.13%20-4.3,-1.39%20-1.06,0.04%20-1.16,-1.61%20-1.06,0.39%20-0.45,-1.34%20-1.04,0.08%20-0.53,-1.43%20-0.88,-0.73%20-0.16,-0.77%200.83,-3.19%20L%2012.02,35.99%2011.03,34.45%209.21,33.53%206.32,27.88%203.31,26.3%203.12,25.52%201.1,25.61%200.41,25.22%200,23.49%20v%200%20l%203.98,-2.57%202.69,2.74%200.69,1.34%200.19,1.58%200.38,0.41%202.71,1.09%201.32,-0.52%201.52,1.26%201.43,0.04%20-0.51,-0.47%200.78,-1.34%20-0.08,-0.86%202.16,-1.8%200.94,0.93%201.24,-0.28%200.37,-0.75%201.82,-0.04%200.98,-1.39%202.39,2.32%201.1,-0.45%200.82,0.33%200.68,0.75%200.22,2.33%203.32,0.02%201.22,0.49%201.68,-0.1%201.07,-0.49%205.04,2.12%200.32,-3.03%200.45,-0.04%200.81,1.5%201.37,-1.62%20-0.01,-0.63%201.47,-1.08%201.74,1.91%201.65,-0.75%20-1.15,-0.85%200.54,-2.4%200.58,-0.37%201.12,0.47%201.07,-1.64%20-0.6,-1.65%20-1.4,-1.19%20-0.45,-0.98%20-2.04,-1.54%20-0.36,-1.85%20-0.71,0.21%20-0.48,-0.41%20-0.76,-2.09%200.64,-1.21%20L%2043.36,10.33%2043.18,9.6%2044.4,9.7%2044.99,10.77%2047.17,9.7%2048.63,8.52%2047.81,7.35%2047.97,6.66%2047.53,5.22%20h%201.58%20l%204.34,2.76%200.42,0.75%200.58,-0.39%201.53,0.29%202.1,-0.73%200.64,-0.79%20-0.99,-0.94%201.69,-1.56%200.64,0.25%200.56,-1.14%201.53,0.29%20-0.71,1.33%200.47,0.21%200.56,-0.33%200.76,0.45%200.04,0.5%200.67,0.21%200.77,-1.18%200.28,-1.19%20-0.52,-0.69%200.73,-1.91%200.44,-0.75%200.4,0.69%200.86,0.33%200.49,-0.47%20z'%20title='Meath'%20id='IE-MH'%20/%3e%3c/svg%3e";
const __vite_glob_0_13 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='91.849998'%20height='103.08'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='M%202,60.15%202.44,60.52%203.47,59.91%203.56,58.93%202.21,56.25%201.14,56.37%200.76,55.24%200,54.8%202.35,52.16%203.47,50.23%205.5,49.47%20l%201.33,0.96%20-0.56,1.25%20-0.08,1.45%20-1.49,0.8%20-0.25,0.75%200.11,0.36%201.63,0.79%20v%200.5%20l%20-0.53,0.76%20-1.27,-0.08%20-0.83,0.45%201.1,2.03%200.95,0.34%201.13,-0.42%200.18,-1.37%201.91001,-1.49%200.12,-1.01%20-0.49,-0.92%201.17,-2.82%200.99,-1.25%200.99,-0.62%20-0.22,-0.55%20-1.12,-0.34%20-0.45,-1.83%200.08,-2.17%201.76999,0.04%200.62,-0.36%200.06,-0.52%20-0.62,-0.55%20-1.35,0.04%200.42,-1.08%200.73001,-0.24%201.23,0.22%20-0.05,-0.95%200.36,-0.5%201.12,-0.56%201.7,-0.14%201.51999,-1.67%201.63,1.17%201.07,0.16%201.54001,-0.43%200.76999,-0.6%20-0.07,-3.03%20-1.02999,-1.17%200.3,-0.62%201.26,-0.8%20-0.17,-0.85%20-0.85001,-0.98%20-1.17,-2.53%20-1.95,0.1%200.09,-0.68%200.66,-0.72%20-0.12,-0.75%20-3.98,-1.8%20-0.32,-0.46%200.22,-1.63%201.25,-1.52%201.79001,0.12%200.14,-0.28%20L%2018.86,19.1%2018.5,17.42%2017.68,16.4%20l%200.09,-0.38%204.06,0.72%200.57,-0.7%200.58,-0.16%200.7,-1.08%200.7,-0.1%201.22,-1.41%201.95,-0.26%200.13,-0.92%20-0.89,-1.7%202.85,-2.28%203.04,-4.63%200.69,-1.7%203.03,-1.8%201.06,0.88%200.4,-0.22%201.23,0.86%20-0.07,0.62%200.43,0.63%201.28,0.02%200.76,-0.46%201.05,1.48%201.11,0.02%200.69,0.64%200.05,1.02%201.13,0.4%200.42,-0.22%200.1,1.14%200.71,0.5%201.06,0.1%20-0.37,0.54%200.22,0.7%200.61001,0.1%200.61,-0.62%201.02,0.82%20-0.05,0.56%200.62001,0.5%20-0.26,1.32%200.68,0.48%200.06,1.72%20h%201.24%20l%201.09,0.76%200.87999,2.67%200.63,1.22%200.64,0.48%200.12,1.91%200.60001,0.44%20-0.09,2.24%200.42,2.03%20-0.95,0.72%200.17,1.55%20-0.61,-0.08%20-0.21,-0.91%20-0.79,0.4%200.27,1.15%201,0.74%200.12,1%201.27,0.22%200.34,1.07%201.20999,-0.38%201.25,1.1%20-0.08,2.55%201.01999,1.93%200.43,2.53%200.33,0.32%200.8,-0.18%200.63,0.56%20-0.05,1.47%203.06,2.89%202.35,0.25%201,1.12%200.73001,1.85%201.02999,-0.56%201.25,0.7%200.82,-2.55%201.44,-1.19%201.05,0.14%200.95,1.13%202.29,0.34%200.65,0.56%200.63,2%201.12,0.84%200.68,1.21%201.05,2.61%200.04,1.13%20-1,2.13%20-0.28,1.88%20-0.96,1.04%20-0.24,0.91%20-0.59,-0.36%20-0.59,0.12%200.07,1.13%201.98,4.03%20-0.21,0.28%20-1.67,0.14%200.48,1.25%20-0.3,0.79%200.24,0.94%20-0.26,0.97%20-0.88,0.63%200.14,1.35%200.55,0.56%201.45,0.06%201.57,2.95%201.28,1.43%200.52,0.1%200.72,-0.78%200.57,0.28%200.42,-0.79%200.46,-0.02%20v%200%20l%202.87,2.24%20-0.59,0.89%201.32,1.47%200.78,0.41%20-0.49,0.46%200.96,0.47%200.08,0.97%200.68,1.11%20-1.27,1.29%200.66,1.76%20-1.31,1.51%200.7,0.85%20-0.6,0.97%20-2.35,0.37%20-0.59,-0.77%20-3.1,-1.58%20-0.95,0.57%20-0.17,0.97%20-0.86,-0.24%20-0.79,0.5%20-0.03,0.53%200.67,0.36%20-0.28,1.11%20-1.65,0.21%20-0.65,-0.37%20-0.3,0.32%201.32,1.28%200.15,0.77%20-1.38,-0.91%20-0.25,0.24%201.78,1.7%20-0.28,0.55%20-1.07,-0.02%200.06,0.86%202.6,1.77%200.28,0.5%20-1.44,1.22%20-0.16,1.21%20-2.1,0.65%20-0.75,0.69%20-1.37,-0.61%20-1.32,2%20v%200%20l%20-0.27,0.27%20-2.45,-0.49%20-1.95,-2.57%20-0.99,0.65%20-1.05,-0.16%20-1.12,-0.75%20v%200%20l%20-1.68,-1.97%20-1.4,0.35%20-0.78,-0.57%20-2.76,-0.73%20-1.12,0.2%20-0.1,-1.55%20-1.41,-3.36%20-1.17,-1.46%20-1.58,-3.6%200.09,-0.83%20-2.93,-3.25%20-0.21,-1.41%20-0.71,-0.14%20-0.57,0.36%20-1.36,-1.37%20-1.16,0.26%20-1.8,-3.8%20L%2045.34999,76.65%2044.78,75.62%2044,75.1%20l%20-0.59,0.28%20-0.19,-0.65%20-1.42,-1.51%20-0.19,-1.65%20-0.62,-0.43%20-1.73,-0.36%20-1.17,-2.62%20-1.77,-0.63%20-0.28,-1.21%201.39,-1.47%20-0.12,-0.73%20-2.05,0.07%20-0.43,-0.49%20-1.12,-0.2%20-0.33,1.03%20-2.96,1.23%20-0.97,1.61%20-0.56,-0.3%20-0.21,-1.17%20-0.48,-0.57%20-2.91001,-0.82%20-0.91,0.36%20-0.97,1.31%20-1.9,0.95%20-1.01,-0.79%20-1.92,-0.06%20-1.66,-1.35%20-0.04,-0.5%20-0.81,0.24%20-1.39,-0.22%20-1.32,-1.03%20-1.13,0.81%20-0.93,-0.89%20-0.74,-0.14%20-0.18,0.42%200.74,0.77%20-0.11,0.46%20-1.34,-0.3%20-0.83,0.34%20-2.98,-2.4%20-3.38,0.04%20-0.65,-1.75%20z'%20title='Monaghan'%20id='IE-MN'%20/%3e%3c/svg%3e";
const __vite_glob_0_14 = "/eirele/assets/ireland-map-offaly-DJhK_SDp.svg";
const __vite_glob_0_15 = "/eirele/assets/ireland-map-roscommon-ODIm5y0l.svg";
const __vite_glob_0_16 = "/eirele/assets/ireland-map-sligo-X6DAGv2v.svg";
const __vite_glob_0_17 = "/eirele/assets/ireland-map-tipperary-DHcmtmT5.svg";
const __vite_glob_0_18 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='141.45'%20height='81'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%206.79999,29.89%200.26,0.26%201.98001,-0.17%201.07,-0.55%202.06,-0.21%200.56,0.29%203.61,-0.23%202.57,1.14%201.39999,-1.2%20-0.57,-2.56%200.59001,-2.26%20-0.13,-1.22%201.72999,0.93%200.29001,-0.97%202.47999,-0.09%200.74,-0.5%200.42001,0.08%200.51999,1.12%201.37,0.87%201.24,1.37%201.29001,0.46%203.14,-0.4%201.53999,0.64%201.55,-0.72%201.87,0.46%201.66001,0.93%200.8,1.86%200.63,-0.25%200.91999,-1.52%202,-0.01%202.53001,0.95%201.52999,-0.31%200.41001,-0.3%20-1.28,-6.99%20-1.28001,-3.08%20-1.05,-0.38%20L%2044.08,16.36%2044.01,14.68%2043.22,13.71%2042.67,12.25%2043.36,8.42%2043.23999,6.52%2043.9,5.64%2043.42,4.35%20l%200.50999,-0.42%204.19,0.19%201.28,-0.38%200.46,-0.8%201.53,-0.33%200.32,0.06%200.27,0.95%200.98,0.4%200.83,-0.74%203.08,-0.97%200.27,-0.94%201.36,-0.57%201.71,0.42%202.08,-0.19%201.18,-0.86%202.71,-0.17%203.32,1.03%201.45,-0.67%201.27,0.5%203.1,0.02%201.12,0.74%203.12,0.86%203.88,0.11%202.78,0.67%200.9,1.41%202.27,1.03%201.78,-1.32%201.21,-0.38%20v%200%20l%201.38,0.16%200.5,1.06%203.81,1.18%202.19,2.63%200.48,2.45%201.58,1.13%200.23,1.16%202.18,4.49%200.62,0.49%202.31,0.63%201.35,2.74%201.14,0.81%201.79,-0.74%203.83,-4.94%201.41,-1.07%201.2,0.16%202.17,1.84%203.39,0.61%200.42,1.75%200.86,0.74%202.62,-0.97%203.2,0.06%202.27,-2.72%202.65,-0.8%20v%200%20l%201.07,0.11%200.53,0.92%200.05,0.59%20-0.8,1.31%200.11,1.12%200.8,1.18%201.47,1.04%20v%200%20l%200.19,3.02%20-0.85,2.23%200.6,1.21%20-1.2,2%20-0.29,1.57%200.25,0.53%200.88,0.21%200.25,1.24%202.43,0.05%20-2.35,1.22%20-0.67,1.93%20-1.47,1.39%20-0.37,-0.21%20-0.02,1.55%200.29,-0.17%200.02,0.4%20-1.13,0.93%20-1.94,0.45%20-0.7,0.8%20-0.98,0.06%20-0.38,0.36%20-0.68,-0.65%20-1.19,-0.57%20-0.48,0.14%20-0.33,-0.4%20-0.06,0.49%20-1.9,0.57%20-1.05,-0.11%20-1.51,1.19%20-0.63,-0.13%20-0.71,0.34%200.02,-1.4%201.66,-1.58%20-0.06,-0.72%200.86,-1.1%200.66,-0.3%200.36,-0.66%201.46,-0.44%20-1.46,0.02%200.35,-1.16%20-1.06,0.97%20-0.64,-0.65%20h%20-0.52%20l%20-0.3,-0.62%20-1,-0.38%20-1.94,0.05%20-0.19,0.56%200.96,2.23%201.89,-0.02%200.92,0.36%20-0.01,0.42%20-1.39,0.04%20-2.62,-1.06%20-2.77,-0.57%20-1.15,0.98%20-1.39,3.3%20-0.61,-0.17%20-1.07,0.63%20-2.54,-0.21%20-1.39,0.65%20-2.82,-0.31%20-2.36,-0.77%20-0.77,0.03%20-0.36,-0.38%20-2.2,-0.34%20-1.24,0.55%20-0.47,1.1%20-0.4,-0.57%20-1.2,-0.53%20-0.51,0.44%20-2.3,-0.44%20-1.96,0.21%20-0.13,-0.4%20-0.85,0.21%20-0.68,0.74%20-1.13,0.66%20-0.99,0.12%20-0.08,0.28%20-1.34,-0.59%20-0.36,0.31%20-0.59,-0.17%20-0.38,0.3%20-0.52,-0.17%20-2.4,0.49%20-1.82,1.42%20-0.3,-0.68%20-0.75,0.87%20-0.2,0.89%20-0.70999,0.5%20-0.61001,-0.08%20-0.68,0.78%20-0.68,0.15%20-0.12,0.7%20-2.74,-0.38%20-2.79,1.44%20-1.03,1.63%200.11,0.81%20-0.57,0.82%20-0.01,0.64%20-2.23,-1.08%20-0.37,-1.59%20-0.49,-0.11%20-0.57,-0.95%20h%20-0.86%20l%20-0.79,1.12%20-2.7,1.12%20-0.21,0.72%20-1.29,-0.21%20-0.03,0.79%200.41001,0.46%20-0.62001,0.17%200.93001,1.68%20h%20-0.79001%20l%20-0.47,0.68%20-0.86,-0.17%200.69,0.74%200.93,-0.07%20-0.02,-0.61%200.85,0.3%200.35001,-0.45%200.43,0.38%201.07,-0.46%200.45,0.29%20-0.59,-2.08%20-0.02,-1.8%200.86,4.29%201.75,1.8%202.5,0.08%203.63,-0.7%20-0.14,0.62%20-1.31,1.35%20-2.17,0.81%20-0.85,0.94%20-0.13,1.57%20-1.03,1.54%200.69,1.89%20-1.11,3.42%20-0.33,-0.1%20-0.6,0.72%20-0.54,-0.06%20-0.81,0.5%20-0.96,0.98%20-1.73,0.09%20-1.24,0.76%20-1.03,-0.21%20-1.82,0.57%20-3.59,0.26%20-1.33,1.19%20-0.32,1.29%20-0.89,0.3%20-0.46,1%200.13,0.58%201.37,0.78%20-0.31,1.17%20-0.48,-0.3%20-0.63,0.54%20-0.67,-0.24%20-1.32,0.43%20-1.25,-0.51%20-0.42,0.21%20-0.81,-1.02%20-0.49,0.06%200.03,-0.55%20-1.32,-0.64%20-2.09,0.49%20-0.32,1.36%20-0.79,-0.06%20-1.83,0.72%20-0.5,-0.42%20-0.81,-0.03%20-0.35,-0.63%20v%20-1.73%20l%20-0.94,-0.25%20v%200%20l%20-0.81,-3.42%20-0.79,-1.32%20-1.18,0.77%20-1.11,0.18%20-1.35,-0.42%20-2.67,0.28%20-1.25,-0.26%20-1.55,-4.78%200.15,-1.67%20-3.34,-1.96%200.03,-0.66%20-0.63,-0.61%200.48,-1.98%20-0.75,-0.02%20-1.21,0.62%20L%2021.19,62.05%2020.6,62.27%2018,59.49%2016.3,58.93%2016.37,56.28%2017.13,54.91%2015.48,49.23%2014.19,48.78%2013.66,47.26%2011.05,46.67%209.3,44.32%209.46,43.4%209.88,43.24%2010.86,45.29%2011.32,45.5%2011.7,43.03%2011.18,42.05%208.11,43.36%207.43,41.71%206.46,42.11%205.92,41.33%202.87,42.01%200,42.14%200.98,40.72%200.68,39.15%201.07,37.84%203.31,37.91%203.97,37.23%205.25,31.67%204.34,31.12%20Z'%20title='Waterford'%20id='IE-WD'%20/%3e%3c/svg%3e";
const __vite_glob_0_19 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20for%20MapSVG%20plugin:%20http://mapsvg.com%20--%3e%3csvg%20mapsvg:geoViewBox='-10.617532%2055.384216%20-5.429631%2051.419751'%20width='118.24999'%20height='94.099998'%20version='1.1'%20id='svg1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%20xmlns:mapsvg='http://mapsvg.com'%3e%3cdefs%20id='defs1'%20/%3e%3cpath%20d='m%2073.15,0%200.41,1.73%200.69,0.39%202.02,-0.09%200.19,0.78%203.00999,1.58%202.89,5.65%201.82,0.92%200.99,1.54%200.96,0.33%20-0.83,3.19%200.16001,0.77%200.88,0.73%200.52999,1.43%201.04,-0.08%200.45,1.34%201.06,-0.39%201.16001,1.61%201.06,-0.04%204.3,1.39%201.58999,2.13%201.81001,-2.01%201.43999,2.95%200.9,0.19%201.26,2.42%202.35,1.94%200.82,-0.76%200.98001,-1.71%201.73,-0.18%200.91,-0.66%200.63,-1.79%201.77,0.74%200.89,-2.23%201.50999,0.31%201.44,2.2%20-0.27999,0.41%200.52,1.06%200.94,0.51%200.57999,-0.27%200.52,0.37%20-0.27,0.41%200.22001,0.59%20-0.95,1.91%200.25,1.12%20-0.55,0.82%20-1.22001,0.43%20-1.25,1.83%20-0.07,0.78%200.85001,2.12%20-0.51,2.39%20-1.12,0.69%20-0.18,0.49%200.92,1.69%20-0.67,0.21%20-2.52,-0.29%20-0.77,0.49%20-0.91,1.53%20-0.48,1.68%200.22,0.92%201.79,1.92%20-0.51,2.31%20-0.01,1.98%20-1.34,1.64%20-0.97,2.66%20-1,0.12%20-1.8,0.94%200.74,1.9%20-0.76,1.27%200.48,1.88%20-2.11,1.09%20-1.16,1.62%20-3.34,1.78%20-3.61,-0.74%20-1.12,2.23%20-3.86,1.01%200.22,1.94%20v%200%20l%20-1.2,-0.26%20-1.16,0.84%20-0.4,0.61%200.05,1.36%20-0.7,0.73%20-1.23,0.06%20-2.64,1.3%20-2.79,-0.06%200.14,0.75%20-5.97,5.65%20-0.54,0.43%20-1.24,0.16%20-0.87,1.66%20-1.82,1.23%20-0.42,1.63%20-3.58,1.93%20-3.07,-0.95%20-2.09,1.48%20-0.14,1.42%20-0.53,-0.08%20-0.72,0.45%20-0.82,-1.73%20-1.09,-0.78%20-2.78,0.43%20-0.18,-0.94%200.33,-1.48%20-1.39,-0.31%20-0.71,0.17%20-1.8,-0.6%20-0.42,0.58%20-0.2,2.34%201.01,1.23%20-0.42,0.33%20-0.68,-0.6%20-1.09,-2.4%20-1.98,-1.79%20-0.56,-0.92%20-0.4,-3.18%200.24,-1.17%20-0.41,-1.05%20-1.24,-1.47%200.54,-1.65%20-0.23,-0.24%20-0.9,0.18%20-0.58,-0.57%20-1.64,-0.29%20-0.28,-2.19%20-2.04,-1.09%20-2.46,1.19%20-0.13,0.78%20-0.92,0.35%20-0.82,-0.76%20-0.39,1.29%20-0.69,-0.1%20-1.47,1.72%20-1.15,0.25%20-0.5,2.03%20-0.62,-0.1%20-0.78,0.41%20-0.65,2.35%201.01,0.4%20-1.72,1.37%20-5.85,2.34%20-2.61,-1.19%20-0.99,0.66%20-1.37,-0.23%20-0.64,-1.07%20-1.39,0.5%20-1.84,2.36%20-0.81,-0.99%20-2.19,0.08%20-0.99,-0.37%20-2.6,-2.46%20-2.17,-0.41%20v%200%20L%206.98,83.96%206.38,81.94%205.47,80.63%205.3,79.5%204.5,78.27%203.48,77.56%203.13,75.81%200.04,73.99%201.51,71.9%200.97,69.52%200.34,68.5%201.59,61.83%200,54.26%20v%200%20l%202.99,-0.78%202.34,-2.94%200.74,-0.51%20h%203.34%20l%203.43,-1.09%202.7,1.82%200.53,-0.65%201.33,-0.12%202.46,1.34%201.52,-0.2%201.12,0.57%201.09,-0.22%201.35,0.47%201.6,1.37%202.34,0.14%200.28,-1.29%201.43,-0.79%202.8,0.61%200.77,0.94%201.51,-0.82%200.64,-1.69%20-0.06,-2.01%20-0.43,-1.22%201.6,-1.15%201.5,-2.36%200.74,-2.64%200.65,-0.35%200.94,0.21%201.51,-1.02%200.15,-1.06%20-0.71,-0.94%200.33,-0.82%202.06,-0.91%201.6,0.71%201.31,-0.31%20-0.91,-1.59%200.43,-1.57%20-0.98,-1.67%20-3.16,-1.67%20-1.64,-0.45%200.43,-1.49%200.33,-0.38%201.42,0.3%203.48,2.06%20-0.02,-1.24%20-0.77,-0.55%20-0.15,-0.57%200.72,-2.47%202.08,0.33%200.86,-1.12%201.73,-0.13%20-0.58,-1.97%200.77,-0.84%20-0.05,-1.73%200.84,0.55%201.13,-0.5%20-0.68,-1.39%200.15,-0.36%200.22,-0.15%202.23,1.69%200.94,-0.41%20-0.18,-0.71%200.3,-0.71%200.9,0.16%200.51,-1.34%200.75,0.51%200.57,-0.63%200.41,-2.69%201.07,0.04%200.31,-0.53%201.25,0.02%200.54,-0.54%200.67,0.32%200.78,1.42%200.5,0.21%201.12,-0.9%200.26,-1.07%201.13,-0.19%200.3,0.31%200.65,-0.27%200.3,-3.19%20L%2069.52,8.43%2069.04,7.58%2069.15,6.93%2068.54,6.58%2068.32,5.31%2067.29,5.04%2066.48,5.43%2065.46,4.55%20v%200%20L%2068.9,2.52%2069.67,2.44%20Z'%20title='Westmeath'%20id='IE-WH'%20/%3e%3c/svg%3e";
const accentsMap = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
  à: "a",
  è: "e",
  ì: "i",
  ò: "o",
  ù: "u",
  â: "a",
  ê: "e",
  î: "i",
  ô: "o",
  û: "u",
  ä: "a",
  ë: "e",
  ï: "i",
  ö: "o",
  ü: "u",
  ã: "a",
  õ: "o",
  ñ: "n",
  ç: "c",
  ß: "ss"
};
const defaultTFunction = () => "";
const directionEmojiMap = /* @__PURE__ */ new Map([
  ["N", "⬆️"],
  ["S", "⬇️"],
  ["W", "⬅️"],
  ["E", "➡️"],
  ["NW", "↖️"],
  ["NE", "↗️"],
  ["SW", "↙️"],
  ["SE", "↘️"],
  ["*", "🎯"]
  // Add more mappings as needed
  // note: https://emojipedia.org/search?q=arrow
  //   ⬆️ ↗️ ➡️ ↘️ ⬇️ ↙️ ⬅️ ↖️ 📍 🏁 🎯
  // note: https://www.toptal.com/designers/htmlarrows/arrows/
  //   &uarr; &rarr; &darr; &larr; &nwarr; &nearr; &swarr; &searr; &#x25CE;
  // https://emojigraph.org/right-arrow/ - for escape codes of emojis
]);
const mapGradeToEmoji = /* @__PURE__ */ new Map([
  [0, "N/A"],
  [1, "🚫"],
  [2, "★★★"],
  [3, "⭐★★"],
  [4, "⭐⭐★"],
  [5, "⭐⭐⭐"]
]);
function sanitizeString(str) {
  let retVal = str.trim().toLowerCase();
  for (const accentedChar in accentsMap) {
    const regex = new RegExp(accentedChar, "g");
    retVal = retVal.replace(regex, accentsMap[accentedChar]);
  }
  return retVal;
}
function getColorOfStatus(currentRoundStatus) {
  return currentRoundStatus === "won" ? "custom-light-green" : currentRoundStatus === "lost" ? "custom-light-red" : "custom-light-blue-2";
}
function fetchSuggestions(elements, value) {
  return elements.filter(
    (element) => sanitizeString(element).includes(sanitizeString(value))
  );
}
const R_MAJOR = 6378137;
const R_MINOR = 63567523142e-4;
const RATIO = R_MINOR / R_MAJOR;
const ECCENT = Math.sqrt(1 - RATIO * RATIO);
const COM = 0.5 * ECCENT;
function toRadians(degrees) {
  return degrees * Math.PI / 180;
}
function mercatorX(lon) {
  return R_MAJOR * toRadians(lon);
}
function mercatorY(lat) {
  if (lat > 89.5) lat = 89.5;
  if (lat < -89.5) lat = -89.5;
  const phi = toRadians(lat);
  const sinphi = Math.sin(phi);
  const con = ECCENT * sinphi;
  const ts = Math.tan(0.5 * (Math.PI * 0.5 - phi)) / Math.pow((1 - con) / (1 + con), COM);
  return 0 - R_MAJOR * Math.log(ts);
}
function latLonToMercator(lat, lon) {
  const x2 = mercatorX(lon);
  const y2 = mercatorY(lat);
  return { x: x2, y: y2 };
}
const earthRadiusMeters = 6371e3;
function calculateDistanceInMeters(from, to) {
  const phi1 = from.latitude * Math.PI / 180;
  const phi2 = to.latitude * Math.PI / 180;
  const deltaPhi = (to.latitude - from.latitude) * Math.PI / 180;
  const deltaLambda = (to.longitude - from.longitude) * Math.PI / 180;
  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c2 = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusMeters * c2;
}
function calculateDistanceInKm(from, to) {
  return Math.floor(calculateDistanceInMeters(from, to) / 1e3);
}
const dirCodes15 = [
  "NW",
  "N",
  "NE",
  // N-ish adjusted
  "NE",
  "NE",
  "NE",
  "NE",
  "E",
  "SE",
  // E-ish
  "SE",
  "SE",
  "SE",
  "SE",
  "S",
  "SW",
  // S-ish
  "SW",
  "SW",
  "SW",
  "SW",
  "W",
  "NW",
  // W-ish
  "NW",
  "NW",
  "NW"
];
function angle15ToDir(angle) {
  return dirCodes15[Math.floor((angle + 22.5) % 360 / 15)];
}
function toDegrees(radians) {
  return radians * (180 / Math.PI);
}
function calculateAngle(pos1, pos2) {
  if (pos1 == pos2) {
    return -1;
  }
  const c1 = latLonToMercator(pos1.latitude, pos1.longitude);
  const c2 = latLonToMercator(pos2.latitude, pos2.longitude);
  const dx = c2.x - c1.x;
  const dy = c2.y - c1.y;
  return Math.floor((toDegrees(Math.atan2(dx, dy)) + 360) % 360);
}
const listOfCountyCodes = [
  "cork",
  "clare",
  "cavan",
  "carlow",
  "dublin",
  "donegal",
  "galway",
  "kildare",
  "kilkenny",
  "kerry",
  "limerick",
  "longford",
  "louth",
  "leitrim",
  "laois",
  "meath",
  "monaghan",
  "mayo",
  "offaly",
  "roscommon",
  "sligo",
  "tipperary",
  "waterford",
  "westmeath",
  "wexford",
  "wicklow"
  //"antrim",
  //"armagh",
  //"down",
  //"fermanagh",
  //"londonderry",
  //"tyrone",
];
const dataBankData = {
  carlow: {
    capital: "city_carlow",
    neighbors: ["kildare", "wicklow", "wexford", "kilkenny", "laois"],
    coordinates: { latitude: 52.745223, longitude: -6.839326 },
    population: 15996989,
    largestCities: [{ key: "city_carlow", population: 27351 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["team carlow"]
  },
  cavan: {
    capital: "city_cavan",
    neighbors: ["monaghan", "meath", "westmeath", "longford", "leitrim"],
    coordinates: { latitude: 53.991081, longitude: -7.352543 },
    population: 15996989,
    largestCities: [{ key: "city_cavan", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["team cavan"]
  },
  clare: {
    capital: "city_ennis",
    neighbors: ["galway", "limerick", "tipperary"],
    coordinates: { latitude: 52.865067, longitude: -9.007028 },
    population: 15996989,
    largestCities: [
      { key: "city_ennis", population: 0 },
      { key: "city_kilkee", population: 0 }
    ],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  cork: {
    capital: "city_cork",
    neighbors: ["kerry", "waterford", "tipperary", "limerick"],
    coordinates: { latitude: 51.958737, longitude: -8.642922 },
    population: 15996989,
    largestCities: [
      { key: "city_cork", population: 0 },
      { key: "city_youghal", population: 0 },
      { key: "city_baltimore", population: 0 },
      { key: "city_skibbereen", population: 0 },
      { key: "city_kinsale", population: 0 },
      { key: "city_cobh", population: 0 },
      { key: "city_carrigaline", population: 0 }
    ],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["Cork City", "Cobh Ramblers"]
  },
  donegal: {
    capital: "city_lifford",
    neighbors: ["leitrim"],
    coordinates: { latitude: 54.972331, longitude: -7.889634 },
    population: 15996989,
    largestCities: [{ key: "city_lifford", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  dublin: {
    capital: "city_dublin",
    neighbors: ["meath", "kildare", "wicklow"],
    coordinates: { latitude: 53.362247, longitude: -6.247076 },
    population: 15996989,
    largestCities: [{ key: "city_dublin", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  galway: {
    capital: "city_galway",
    neighbors: ["clare", "offaly", "tipperary", "roscommon", "mayo"],
    coordinates: { latitude: 53.32403, longitude: -8.845473 },
    population: 15996989,
    largestCities: [{ key: "city_galway", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  kerry: {
    capital: "city_tralee",
    neighbors: ["cork", "limerick"],
    coordinates: { latitude: 52.137816, longitude: -9.535317 },
    population: 15996989,
    largestCities: [
      { key: "city_tralee", population: 0 },
      { key: "city_killarney", population: 0 },
      { key: "city_listowel", population: 0 },
      { key: "city_dingle", population: 0 }
    ],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["Kerry"]
  },
  kildare: {
    capital: "city_naas",
    neighbors: ["meath", "dublin", "wicklow", "carlow", "laois", "offaly"],
    coordinates: { latitude: 53.192202, longitude: -6.787387 },
    population: 15996989,
    largestCities: [{ key: "city_naas", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  kilkenny: {
    capital: "city_kilkenny",
    neighbors: ["laois", "carlow", "wexford", "waterford", "tipperary"],
    coordinates: { latitude: 52.564334, longitude: -7.20304 },
    population: 15996989,
    largestCities: [{ key: "city_kilkenny", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  laois: {
    capital: "city_portlaoise",
    neighbors: ["offaly", "kildare", "tipperary", "carlow", "kilkenny"],
    coordinates: { latitude: 53.010269, longitude: -7.336649 },
    population: 15996989,
    largestCities: [{ key: "city_portlaoise", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  leitrim: {
    capital: "city_cos",
    neighbors: ["cavan", "longford", "roscommon", "sligo"],
    coordinates: { latitude: 54.113125, longitude: -7.970613 },
    population: 15996989,
    largestCities: [{ key: "city_cos", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  limerick: {
    capital: "city_limerick",
    neighbors: ["kerry", "cork", "tipperary", "clare"],
    coordinates: { latitude: 52.520935, longitude: -8.732761 },
    population: 15996989,
    largestCities: [{ key: "city_limerick", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  longford: {
    capital: "city_longford",
    neighbors: ["leitrim", "cavan", "westmeath", "roscommon"],
    coordinates: { latitude: 53.718622, longitude: -7.74923 },
    population: 15996989,
    largestCities: [{ key: "city_longford", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  louth: {
    capital: "city_dundalk",
    neighbors: ["monaghan", "meath"],
    coordinates: { latitude: 53.904222, longitude: -6.424684 },
    population: 15996989,
    largestCities: [{ key: "city_dundalk", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  mayo: {
    capital: "city_castlebar",
    neighbors: ["sligo", "roscommon", "galway"],
    coordinates: { latitude: 53.911587, longitude: -9.409013 },
    population: 15996989,
    largestCities: [{ key: "city_castlebar", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  meath: {
    capital: "city_navan",
    neighbors: [
      "cavan",
      "mondaghan",
      "louth",
      "dublin",
      "kildare",
      "offaly",
      "westmeath"
    ],
    coordinates: { latitude: 53.631086, longitude: -6.674817 },
    population: 15996989,
    largestCities: [{ key: "city_navan", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  monaghan: {
    capital: "city_monaghan",
    neighbors: ["cavan", "meath", "louth"],
    coordinates: { latitude: 54.178103, longitude: -6.903126 },
    population: 15996989,
    largestCities: [{ key: "city_monaghan", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  offaly: {
    capital: "city_tullamore",
    neighbors: [
      "roscommon",
      "westmeath",
      "meath",
      "kildare",
      "laois",
      "tipperary",
      "galway"
    ],
    coordinates: { latitude: 53.266617, longitude: -7.589902 },
    population: 15996989,
    largestCities: [{ key: "city_tullamore", population: 15598 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  roscommon: {
    capital: "city_roscommon",
    neighbors: [
      "sligo",
      "leitrim",
      "longford",
      "westmeath",
      "offaly",
      "galway",
      "mayo"
    ],
    coordinates: { latitude: 53.681848, longitude: -8.198145 },
    population: 15996989,
    largestCities: [{ key: "city_roscommon", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  sligo: {
    capital: "city_sligo",
    neighbors: ["leitrim", "roscommon", "mayo"],
    coordinates: { latitude: 54.225495, longitude: -8.600295 },
    population: 15996989,
    largestCities: [{ key: "city_sligo", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  tipperary: {
    capital: "city_nenagh",
    neighbors: [
      "offaly",
      "waterford",
      "laois",
      "limerick",
      "kilkenny",
      "cork",
      "clare",
      "galway"
    ],
    coordinates: { latitude: 52.636885, longitude: -7.898893 },
    population: 15996989,
    largestCities: [
      { key: "city_nenagh", population: 0 },
      { key: "city_clonmel", population: 0 }
    ],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  waterford: {
    capital: "city_waterford",
    neighbors: ["cork", "wexford", "tipperary", "kilkenny"],
    coordinates: { latitude: 52.180365, longitude: -7.582225 },
    population: 15996989,
    largestCities: [{ key: "city_waterford", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  westmeath: {
    capital: "city_mullingar",
    neighbors: ["longford", "meath", "offaly", "cavan", "roscommon"],
    coordinates: { latitude: 53.53061, longitude: -7.334561 },
    population: 15996989,
    largestCities: [
      { key: "city_mullingar", population: 0 },
      { key: "city_athlone", population: 0 }
    ],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  wexford: {
    capital: "city_wexford",
    neighbors: ["wicklow", "carlow", "kilkenny"],
    coordinates: { latitude: 52.443228, longitude: -6.574902 },
    population: 15996989,
    largestCities: [{ key: "city_wexford", population: 0 }],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  },
  wicklow: {
    capital: "city_wicklow",
    neighbors: ["dublin", "wexford", "carlow", "kildare"],
    coordinates: { latitude: 52.988339, longitude: -6.304053 },
    population: 15996989,
    largestCities: [
      { key: "city_wicklow", population: 0 },
      { key: "city_bray", population: 0 }
    ],
    interestingFacts: [],
    highestPoint: "Ishpatina Ridge 693m",
    coastlineInKM: 3840,
    majorLeagueTeams: ["aa"]
  }
};
function getPotNamesByLang(tGeo) {
  return Object.keys(dataBank.data).map((code) => tGeo(code));
}
function getPotCodeByName(name, tGeo) {
  for (const code of listOfCountyCodes) {
    if (name === tGeo(code)) {
      return code;
    }
  }
  return "invalid";
}
const potCodes = Object.keys(dataBankData);
function getCurrentDateString() {
  const today = /* @__PURE__ */ new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}-0${month}-0${day}`;
}
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}
function getTodaysPotCodeIndex() {
  const dateString = getCurrentDateString();
  const hash = hashString(dateString);
  return Math.abs(hash) % potCodes.length;
}
function getTodaysPotCode() {
  return potCodes[getTodaysPotCodeIndex()];
}
function isValidCode(currentGuess, tGeo) {
  if (!currentGuess) {
    return false;
  }
  const sanitized = sanitizeString(currentGuess);
  return void 0 !== sanitized && "" !== sanitized && getPotNamesByLang(tGeo).some((name) => sanitizeString(name) === sanitized);
}
function getDirectionEmoji(fromGuess, toSolution) {
  if (fromGuess === toSolution) {
    return directionEmojiMap.get("*");
  }
  const angle = calculateAngle(
    dataBankData[fromGuess].coordinates,
    dataBankData[toSolution].coordinates
  );
  return directionEmojiMap.get(angle15ToDir(angle));
}
function getPotMapSvgUrl(potCode) {
  let ret = new URL((/* @__PURE__ */ Object.assign({ "../../assets/ireland-map-cork.svg": __vite_glob_0_0, "../../assets/ireland-map-donegal.svg": __vite_glob_0_1, "../../assets/ireland-map-dublin.svg": __vite_glob_0_2, "../../assets/ireland-map-galway.svg": __vite_glob_0_3, "../../assets/ireland-map-kerry.svg": __vite_glob_0_4, "../../assets/ireland-map-kildare.svg": __vite_glob_0_5, "../../assets/ireland-map-kilkenny.svg": __vite_glob_0_6, "../../assets/ireland-map-laois.svg": __vite_glob_0_7, "../../assets/ireland-map-leitrim.svg": __vite_glob_0_8, "../../assets/ireland-map-longford.svg": __vite_glob_0_9, "../../assets/ireland-map-louth.svg": __vite_glob_0_10, "../../assets/ireland-map-mayo.svg": __vite_glob_0_11, "../../assets/ireland-map-meath.svg": __vite_glob_0_12, "../../assets/ireland-map-monaghan.svg": __vite_glob_0_13, "../../assets/ireland-map-offaly.svg": __vite_glob_0_14, "../../assets/ireland-map-roscommon.svg": __vite_glob_0_15, "../../assets/ireland-map-sligo.svg": __vite_glob_0_16, "../../assets/ireland-map-tipperary.svg": __vite_glob_0_17, "../../assets/ireland-map-waterford.svg": __vite_glob_0_18, "../../assets/ireland-map-westmeath.svg": __vite_glob_0_19 }))[`../../assets/ireland-map-${potCode.toLowerCase()}.svg`], import.meta.url).href;
  console.log(`getPotMap(${potCode}) -> ${ret}`);
  return ret;
}
function getPotFlagSvgUrl(potCode) {
  return new URL((/* @__PURE__ */ Object.assign({}))[`../../assets/ireland-flag-${potCode.toLowerCase()}.svg`], import.meta.url).href;
}
function getCapitals(tGeo) {
  return Object.values(dataBank.data).map(
    (entry) => tGeo(entry.capital)
    // tGeo(`capital${code}`) ?
  );
}
function getCities(tGeo) {
  let retVal = getCapitals(tGeo);
  console.log(`getCities: ${retVal}`);
  retVal.sort();
  return retVal;
}
function getGuessEmoji() {
  return "☘️";
}
function getLinkUrlWikipedia(potCode) {
  return "https://en.wikipedia.org/wiki/Counties_of_Ireland";
}
function getLinkUrlGoogleMaps(potCode) {
  return `https://www.google.com/maps?q=${potCode},county,Ireland`;
}
const dataBank = {
  data: dataBankData,
  //dataNI: dataBankNI,
  isValidCode,
  getPotCodeByName,
  getPotNamesByLang,
  //getDistanceWithUnitBySetting:getDistanceWithUnitBySetting,
  getPotMapSvgUrl,
  // warning: does not work as I'd expect
  getPotFlagSvgUrl,
  getLinkUrlWikipedia,
  getLinkUrlGoogleMaps,
  getCities,
  getDirectionEmoji,
  getGuessEmoji,
  tLang: defaultTFunction,
  // warning: to be set in Game.tsx
  tGeo: defaultTFunction
  // warning: to be set in Game.tsx
};
const defaultGameState = {
  potCode: getTodaysPotCode(),
  currentRound: 1,
  rounds: /* @__PURE__ */ new Map()
};
var GameRoundResult = /* @__PURE__ */ ((GameRoundResult2) => {
  GameRoundResult2[GameRoundResult2["NoRoundToday"] = 0] = "NoRoundToday";
  GameRoundResult2[GameRoundResult2["NotStarted"] = 1] = "NotStarted";
  GameRoundResult2[GameRoundResult2["Failed"] = 2] = "Failed";
  GameRoundResult2[GameRoundResult2["Fair"] = 3] = "Fair";
  GameRoundResult2[GameRoundResult2["Good"] = 4] = "Good";
  GameRoundResult2[GameRoundResult2["Excellent"] = 5] = "Excellent";
  return GameRoundResult2;
})(GameRoundResult || {});
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$2(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$1 = {};
function E$1(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$2;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$2;
}
var H$1 = G.prototype = new F();
H$1.constructor = G;
C$2(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$2 = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$2(a, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$1, type: a, key: k2, ref: h2, props: c2, _owner: K.current };
}
function N$1(a, b2) {
  return { $$typeof: l$1, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape$1(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$2 = /\/+/g;
function Q$1(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape$1("" + a.key) : b2.toString(36);
}
function R$1(a, b2, e2, d2, c2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h2 = false;
  if (null === a) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h2 = true;
      }
  }
  if (h2) return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$1(h2, 0) : d2, I$2(c2) ? (e2 = "", null != a && (e2 = a.replace(P$2, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
    return a2;
  })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$2(a)) for (var g2 = 0; g2 < a.length; g2++) {
    k2 = a[g2];
    var f2 = d2 + Q$1(k2, g2);
    h2 += R$1(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$2(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a, b2, e2) {
  if (null == a) return a;
  var d2 = [], c2 = 0;
  R$1(a, d2, "", "", function(a2) {
    return b2.call(e2, a2, c2++);
  });
  return d2;
}
function T$2(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$2, forEach: function(a, b2, e2) {
  S$2(a, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b2 = 0;
  S$2(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$2(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
react_production_min.act = X$1;
react_production_min.cloneElement = function(a, b2, e2) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$2({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
    for (f2 in b2) J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$1, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a) {
  var b2 = M$2.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$2, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$2 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$2, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b2;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function(a, b2) {
  return U.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e2) {
  return U.current.useImperativeHandle(a, b2, e2);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e2) {
  return U.current.useReducer(a, b2, e2);
};
react_production_min.useRef = function(a) {
  return U.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e2) {
  return U.current.useSyncExternalStore(a, b2, e2);
};
react_production_min.useTransition = function() {
  return U.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const e = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = reactExports, k$2 = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a) m$2.call(a, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$2, type: c2, key: e2, ref: h2, props: d2, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var Autosuggest$1 = {};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes.exports;
function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }
  if (!arrA || !arrB) {
    return false;
  }
  var len = arrA.length;
  if (arrB.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}
var arrays = shallowEqualArrays;
var Autowhatever = {};
var _slicedToArray = /* @__PURE__ */ function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var dist$2 = function(_ref) {
  var data = _ref.data;
  var multiSection = _ref.multiSection;
  function nextNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = 0;
    } else {
      sectionIndex++;
    }
    while (sectionIndex < data.length && data[sectionIndex] === 0) {
      sectionIndex++;
    }
    return sectionIndex === data.length ? null : sectionIndex;
  }
  function prevNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = data.length - 1;
    } else {
      sectionIndex--;
    }
    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
      sectionIndex--;
    }
    return sectionIndex === -1 ? null : sectionIndex;
  }
  function next(position) {
    var _position = _slicedToArray(position, 2);
    var sectionIndex = _position[0];
    var itemIndex = _position[1];
    if (multiSection) {
      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
        sectionIndex = nextNonEmptySectionIndex(sectionIndex);
        if (sectionIndex === null) {
          return [null, null];
        }
        return [sectionIndex, 0];
      }
      return [sectionIndex, itemIndex + 1];
    }
    if (data === 0 || itemIndex === data - 1) {
      return [null, null];
    }
    if (itemIndex === null) {
      return [null, 0];
    }
    return [null, itemIndex + 1];
  }
  function prev(position) {
    var _position2 = _slicedToArray(position, 2);
    var sectionIndex = _position2[0];
    var itemIndex = _position2[1];
    if (multiSection) {
      if (itemIndex === null || itemIndex === 0) {
        sectionIndex = prevNonEmptySectionIndex(sectionIndex);
        if (sectionIndex === null) {
          return [null, null];
        }
        return [sectionIndex, data[sectionIndex] - 1];
      }
      return [sectionIndex, itemIndex - 1];
    }
    if (data === 0 || itemIndex === 0) {
      return [null, null];
    }
    if (itemIndex === null) {
      return [null, data - 1];
    }
    return [null, itemIndex - 1];
  }
  function isLast(position) {
    return next(position)[1] === null;
  }
  return {
    next,
    prev,
    isLast
  };
};
var dist$1 = { exports: {} };
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function ToObject(val) {
  if (val == null) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function ownEnumerableKeys(obj) {
  var keys = Object.getOwnPropertyNames(obj);
  if (Object.getOwnPropertySymbols) {
    keys = keys.concat(Object.getOwnPropertySymbols(obj));
  }
  return keys.filter(function(key) {
    return propIsEnumerable.call(obj, key);
  });
}
var objectAssign = Object.assign || function(target, source) {
  var from;
  var keys;
  var to = ToObject(target);
  for (var s = 1; s < arguments.length; s++) {
    from = arguments[s];
    keys = ownEnumerableKeys(Object(from));
    for (var i = 0; i < keys.length; i++) {
      to[keys[i]] = from[keys[i]];
    }
  }
  return to;
};
(function(module2, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _slicedToArray2 = /* @__PURE__ */ function() {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    return function(arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  var _objectAssign = objectAssign;
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  var truthy = function truthy2(x2) {
    return x2;
  };
  exports["default"] = function(input) {
    var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];
    var _ref2 = _slicedToArray2(_ref, 2);
    var theme2 = _ref2[0];
    var classNameDecorator = _ref2[1];
    return function(key) {
      for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        names[_key - 1] = arguments[_key];
      }
      var styles = names.map(function(name) {
        return theme2[name];
      }).filter(truthy);
      return typeof styles[0] === "string" || typeof classNameDecorator === "function" ? { key, className: classNameDecorator ? classNameDecorator.apply(void 0, _toConsumableArray(styles)) : styles.join(" ") } : { key, style: _objectAssign2["default"].apply(void 0, [{}].concat(_toConsumableArray(styles))) };
    };
  };
  module2.exports = exports["default"];
})(dist$1, dist$1.exports);
var distExports = dist$1.exports;
var SectionTitle = {};
var compareObjects = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = compareObjects2;
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function compareObjects2(objA, objB) {
    var keys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    if (objA === objB) {
      return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    if (aKeys.length !== bKeys.length) {
      return true;
    }
    var keysMap = {};
    var i, len;
    for (i = 0, len = keys.length; i < len; i++) {
      keysMap[keys[i]] = true;
    }
    for (i = 0, len = aKeys.length; i < len; i++) {
      var key = aKeys[i];
      var aValue = objA[key];
      var bValue = objB[key];
      if (aValue === bValue) {
        continue;
      }
      if (!keysMap[key] || aValue === null || bValue === null || _typeof(aValue) !== "object" || _typeof(bValue) !== "object") {
        return true;
      }
      var aValueKeys = Object.keys(aValue);
      var bValueKeys = Object.keys(bValue);
      if (aValueKeys.length !== bValueKeys.length) {
        return true;
      }
      for (var n2 = 0, length = aValueKeys.length; n2 < length; n2++) {
        var aValueKey = aValueKeys[n2];
        if (aValue[aValueKey] !== bValue[aValueKey]) {
          return true;
        }
      }
    }
    return false;
  }
})(compareObjects);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(reactExports);
  var _propTypes = _interopRequireDefault(propTypesExports);
  var _compareObjects = _interopRequireDefault(compareObjects);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _createSuper(Derived) {
    return function() {
      var Super = _getPrototypeOf(Derived), result;
      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SectionTitle2 = /* @__PURE__ */ function(_Component) {
    _inherits(SectionTitle3, _Component);
    var _super = _createSuper(SectionTitle3);
    function SectionTitle3() {
      _classCallCheck(this, SectionTitle3);
      return _super.apply(this, arguments);
    }
    _createClass(SectionTitle3, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects["default"])(nextProps, this.props);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props, section = _this$props.section, renderSectionTitle = _this$props.renderSectionTitle, theme2 = _this$props.theme, sectionKeyPrefix = _this$props.sectionKeyPrefix;
        var sectionTitle = renderSectionTitle(section);
        if (!sectionTitle) {
          return null;
        }
        return /* @__PURE__ */ _react["default"].createElement("div", theme2("".concat(sectionKeyPrefix, "title"), "sectionTitle"), sectionTitle);
      }
    }]);
    return SectionTitle3;
  }(_react.Component);
  exports["default"] = SectionTitle2;
  _defineProperty(SectionTitle2, "propTypes", {
    section: _propTypes["default"].any.isRequired,
    renderSectionTitle: _propTypes["default"].func.isRequired,
    theme: _propTypes["default"].func.isRequired,
    sectionKeyPrefix: _propTypes["default"].string.isRequired
  });
})(SectionTitle);
var ItemList = {};
var Item = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(reactExports);
  var _propTypes = _interopRequireDefault(propTypesExports);
  var _compareObjects = _interopRequireDefault(compareObjects);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _createSuper(Derived) {
    return function() {
      var Super = _getPrototypeOf(Derived), result;
      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var Item2 = /* @__PURE__ */ function(_Component) {
    _inherits(Item3, _Component);
    var _super = _createSuper(Item3);
    function Item3() {
      var _this;
      _classCallCheck(this, Item3);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "storeItemReference", function(item) {
        if (item !== null) {
          _this.item = item;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function(event) {
        var _this$props = _this.props, sectionIndex = _this$props.sectionIndex, itemIndex = _this$props.itemIndex;
        _this.props.onMouseEnter(event, {
          sectionIndex,
          itemIndex
        });
      });
      _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function(event) {
        var _this$props2 = _this.props, sectionIndex = _this$props2.sectionIndex, itemIndex = _this$props2.itemIndex;
        _this.props.onMouseLeave(event, {
          sectionIndex,
          itemIndex
        });
      });
      _defineProperty(_assertThisInitialized(_this), "onMouseDown", function(event) {
        var _this$props3 = _this.props, sectionIndex = _this$props3.sectionIndex, itemIndex = _this$props3.itemIndex;
        _this.props.onMouseDown(event, {
          sectionIndex,
          itemIndex
        });
      });
      _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
        var _this$props4 = _this.props, sectionIndex = _this$props4.sectionIndex, itemIndex = _this$props4.itemIndex;
        _this.props.onClick(event, {
          sectionIndex,
          itemIndex
        });
      });
      return _this;
    }
    _createClass(Item3, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects["default"])(nextProps, this.props, ["renderItemData"]);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props5 = this.props, isHighlighted = _this$props5.isHighlighted, item = _this$props5.item, renderItem = _this$props5.renderItem, renderItemData = _this$props5.renderItemData, restProps = _objectWithoutProperties(_this$props5, ["isHighlighted", "item", "renderItem", "renderItemData"]);
        delete restProps.sectionIndex;
        delete restProps.itemIndex;
        if (typeof restProps.onMouseEnter === "function") {
          restProps.onMouseEnter = this.onMouseEnter;
        }
        if (typeof restProps.onMouseLeave === "function") {
          restProps.onMouseLeave = this.onMouseLeave;
        }
        if (typeof restProps.onMouseDown === "function") {
          restProps.onMouseDown = this.onMouseDown;
        }
        if (typeof restProps.onClick === "function") {
          restProps.onClick = this.onClick;
        }
        return /* @__PURE__ */ _react["default"].createElement("li", _extends({
          role: "option"
        }, restProps, {
          ref: this.storeItemReference
        }), renderItem(item, _objectSpread({
          isHighlighted
        }, renderItemData)));
      }
    }]);
    return Item3;
  }(_react.Component);
  exports["default"] = Item2;
  _defineProperty(Item2, "propTypes", {
    sectionIndex: _propTypes["default"].number,
    isHighlighted: _propTypes["default"].bool.isRequired,
    itemIndex: _propTypes["default"].number.isRequired,
    item: _propTypes["default"].any.isRequired,
    renderItem: _propTypes["default"].func.isRequired,
    renderItemData: _propTypes["default"].object.isRequired,
    onMouseEnter: _propTypes["default"].func,
    onMouseLeave: _propTypes["default"].func,
    onMouseDown: _propTypes["default"].func,
    onClick: _propTypes["default"].func
  });
})(Item);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(reactExports);
  var _propTypes = _interopRequireDefault(propTypesExports);
  var _Item = _interopRequireDefault(Item);
  var _compareObjects = _interopRequireDefault(compareObjects);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _createSuper(Derived) {
    return function() {
      var Super = _getPrototypeOf(Derived), result;
      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var ItemsList = /* @__PURE__ */ function(_Component) {
    _inherits(ItemsList2, _Component);
    var _super = _createSuper(ItemsList2);
    function ItemsList2() {
      var _this;
      _classCallCheck(this, ItemsList2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "storeHighlightedItemReference", function(highlightedItem) {
        _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
      });
      return _this;
    }
    _createClass(ItemsList2, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps) {
        return (0, _compareObjects["default"])(nextProps, this.props, ["itemProps"]);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props = this.props, items = _this$props.items, itemProps = _this$props.itemProps, renderItem = _this$props.renderItem, renderItemData = _this$props.renderItemData, sectionIndex = _this$props.sectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex, getItemId = _this$props.getItemId, theme2 = _this$props.theme, keyPrefix = _this$props.keyPrefix;
        var sectionPrefix = sectionIndex === null ? keyPrefix : "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
        var isItemPropsFunction = typeof itemProps === "function";
        return /* @__PURE__ */ _react["default"].createElement("ul", _extends({
          role: "listbox"
        }, theme2("".concat(sectionPrefix, "items-list"), "itemsList")), items.map(function(item, itemIndex) {
          var isFirst = itemIndex === 0;
          var isHighlighted = itemIndex === highlightedItemIndex;
          var itemKey = "".concat(sectionPrefix, "item-").concat(itemIndex);
          var itemPropsObj = isItemPropsFunction ? itemProps({
            sectionIndex,
            itemIndex
          }) : itemProps;
          var allItemProps = _objectSpread({
            id: getItemId(sectionIndex, itemIndex),
            "aria-selected": isHighlighted
          }, theme2(itemKey, "item", isFirst && "itemFirst", isHighlighted && "itemHighlighted"), {}, itemPropsObj);
          if (isHighlighted) {
            allItemProps.ref = _this2.storeHighlightedItemReference;
          }
          return /* @__PURE__ */ _react["default"].createElement(_Item["default"], _extends({}, allItemProps, {
            sectionIndex,
            isHighlighted,
            itemIndex,
            item,
            renderItem,
            renderItemData
          }));
        }));
      }
    }]);
    return ItemsList2;
  }(_react.Component);
  exports["default"] = ItemsList;
  _defineProperty(ItemsList, "propTypes", {
    items: _propTypes["default"].array.isRequired,
    itemProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
    renderItem: _propTypes["default"].func.isRequired,
    renderItemData: _propTypes["default"].object.isRequired,
    sectionIndex: _propTypes["default"].number,
    highlightedItemIndex: _propTypes["default"].number,
    onHighlightedItemChange: _propTypes["default"].func.isRequired,
    getItemId: _propTypes["default"].func.isRequired,
    theme: _propTypes["default"].func.isRequired,
    keyPrefix: _propTypes["default"].string.isRequired
  });
  _defineProperty(ItemsList, "defaultProps", {
    sectionIndex: null
  });
})(ItemList);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(reactExports);
  var _propTypes = _interopRequireDefault(propTypesExports);
  var _sectionIterator = _interopRequireDefault(dist$2);
  var _reactThemeable = _interopRequireDefault(distExports);
  var _SectionTitle = _interopRequireDefault(SectionTitle);
  var _ItemList = _interopRequireDefault(ItemList);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray2(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set") return Array.from(n2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _createSuper(Derived) {
    return function() {
      var Super = _getPrototypeOf(Derived), result;
      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var emptyObject = {};
  var defaultRenderInputComponent = function defaultRenderInputComponent2(props) {
    return /* @__PURE__ */ _react["default"].createElement("input", props);
  };
  var defaultRenderItemsContainer = function defaultRenderItemsContainer2(_ref) {
    var containerProps = _ref.containerProps, children = _ref.children;
    return /* @__PURE__ */ _react["default"].createElement("div", containerProps, children);
  };
  var defaultTheme2 = {
    container: "react-autowhatever__container",
    containerOpen: "react-autowhatever__container--open",
    input: "react-autowhatever__input",
    inputOpen: "react-autowhatever__input--open",
    inputFocused: "react-autowhatever__input--focused",
    itemsContainer: "react-autowhatever__items-container",
    itemsContainerOpen: "react-autowhatever__items-container--open",
    itemsList: "react-autowhatever__items-list",
    item: "react-autowhatever__item",
    itemFirst: "react-autowhatever__item--first",
    itemHighlighted: "react-autowhatever__item--highlighted",
    sectionContainer: "react-autowhatever__section-container",
    sectionContainerFirst: "react-autowhatever__section-container--first",
    sectionTitle: "react-autowhatever__section-title"
  };
  var Autowhatever2 = /* @__PURE__ */ function(_Component) {
    _inherits(Autowhatever3, _Component);
    var _super = _createSuper(Autowhatever3);
    function Autowhatever3(props) {
      var _this;
      _classCallCheck(this, Autowhatever3);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), "storeInputReference", function(input) {
        if (input !== null) {
          _this.input = input;
        }
        var userRef = _this.props.inputProps.ref;
        if (userRef) {
          if (typeof userRef === "function") {
            userRef(input);
          } else if (_typeof(userRef) === "object" && Object.prototype.hasOwnProperty.call(userRef, "current")) {
            userRef.current = input;
          }
        }
      });
      _defineProperty(_assertThisInitialized(_this), "storeItemsContainerReference", function(itemsContainer) {
        if (itemsContainer !== null) {
          _this.itemsContainer = itemsContainer;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onHighlightedItemChange", function(highlightedItem) {
        _this.highlightedItem = highlightedItem;
      });
      _defineProperty(_assertThisInitialized(_this), "getItemId", function(sectionIndex, itemIndex) {
        if (itemIndex === null) {
          return null;
        }
        var id2 = _this.props.id;
        var section = sectionIndex === null ? "" : "section-".concat(sectionIndex);
        return "react-autowhatever-".concat(id2, "-").concat(section, "-item-").concat(itemIndex);
      });
      _defineProperty(_assertThisInitialized(_this), "onFocus", function(event) {
        var inputProps = _this.props.inputProps;
        _this.setState({
          isInputFocused: true
        });
        inputProps.onFocus && inputProps.onFocus(event);
      });
      _defineProperty(_assertThisInitialized(_this), "onBlur", function(event) {
        var inputProps = _this.props.inputProps;
        _this.setState({
          isInputFocused: false
        });
        inputProps.onBlur && inputProps.onBlur(event);
      });
      _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(event) {
        var _this$props = _this.props, inputProps = _this$props.inputProps, highlightedSectionIndex = _this$props.highlightedSectionIndex, highlightedItemIndex = _this$props.highlightedItemIndex;
        var keyCode = event.keyCode;
        switch (keyCode) {
          case 40:
          case 38: {
            var nextPrev = keyCode === 40 ? "next" : "prev";
            var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]), _this$sectionIterator2 = _slicedToArray2(_this$sectionIterator, 2), newHighlightedSectionIndex = _this$sectionIterator2[0], newHighlightedItemIndex = _this$sectionIterator2[1];
            inputProps.onKeyDown(event, {
              newHighlightedSectionIndex,
              newHighlightedItemIndex
            });
            break;
          }
          default:
            inputProps.onKeyDown(event, {
              highlightedSectionIndex,
              highlightedItemIndex
            });
        }
      });
      _this.highlightedItem = null;
      _this.state = {
        isInputFocused: false
      };
      _this.setSectionsItems(props);
      _this.setSectionIterator(props);
      _this.setTheme(props);
      return _this;
    }
    _createClass(Autowhatever3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.ensureHighlightedItemIsVisible();
      }
      // eslint-disable-next-line camelcase, react/sort-comp
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.items !== this.props.items) {
          this.setSectionsItems(nextProps);
        }
        if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
          this.setSectionIterator(nextProps);
        }
        if (nextProps.theme !== this.props.theme) {
          this.setTheme(nextProps);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.ensureHighlightedItemIsVisible();
      }
    }, {
      key: "setSectionsItems",
      value: function setSectionsItems(props) {
        if (props.multiSection) {
          this.sectionsItems = props.items.map(function(section) {
            return props.getSectionItems(section);
          });
          this.sectionsLengths = this.sectionsItems.map(function(items) {
            return items.length;
          });
          this.allSectionsAreEmpty = this.sectionsLengths.every(function(itemsCount) {
            return itemsCount === 0;
          });
        }
      }
    }, {
      key: "setSectionIterator",
      value: function setSectionIterator(props) {
        this.sectionIterator = (0, _sectionIterator["default"])({
          multiSection: props.multiSection,
          data: props.multiSection ? this.sectionsLengths : props.items.length
        });
      }
    }, {
      key: "setTheme",
      value: function setTheme(props) {
        this.theme = (0, _reactThemeable["default"])(props.theme);
      }
    }, {
      key: "renderSections",
      value: function renderSections() {
        var _this2 = this;
        if (this.allSectionsAreEmpty) {
          return null;
        }
        var theme2 = this.theme;
        var _this$props2 = this.props, id2 = _this$props2.id, items = _this$props2.items, renderItem = _this$props2.renderItem, renderItemData = _this$props2.renderItemData, renderSectionTitle = _this$props2.renderSectionTitle, highlightedSectionIndex = _this$props2.highlightedSectionIndex, highlightedItemIndex = _this$props2.highlightedItemIndex, itemProps = _this$props2.itemProps;
        return items.map(function(section, sectionIndex) {
          var keyPrefix = "react-autowhatever-".concat(id2, "-");
          var sectionKeyPrefix = "".concat(keyPrefix, "section-").concat(sectionIndex, "-");
          var isFirstSection = sectionIndex === 0;
          return /* @__PURE__ */ _react["default"].createElement("div", theme2("".concat(sectionKeyPrefix, "container"), "sectionContainer", isFirstSection && "sectionContainerFirst"), /* @__PURE__ */ _react["default"].createElement(_SectionTitle["default"], {
            section,
            renderSectionTitle,
            theme: theme2,
            sectionKeyPrefix
          }), /* @__PURE__ */ _react["default"].createElement(_ItemList["default"], {
            items: _this2.sectionsItems[sectionIndex],
            itemProps,
            renderItem,
            renderItemData,
            sectionIndex,
            highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
            onHighlightedItemChange: _this2.onHighlightedItemChange,
            getItemId: _this2.getItemId,
            theme: theme2,
            keyPrefix,
            ref: _this2.storeItemsListReference
          }));
        });
      }
    }, {
      key: "renderItems",
      value: function renderItems() {
        var items = this.props.items;
        if (items.length === 0) {
          return null;
        }
        var theme2 = this.theme;
        var _this$props3 = this.props, id2 = _this$props3.id, renderItem = _this$props3.renderItem, renderItemData = _this$props3.renderItemData, highlightedSectionIndex = _this$props3.highlightedSectionIndex, highlightedItemIndex = _this$props3.highlightedItemIndex, itemProps = _this$props3.itemProps;
        return /* @__PURE__ */ _react["default"].createElement(_ItemList["default"], {
          items,
          itemProps,
          renderItem,
          renderItemData,
          highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
          onHighlightedItemChange: this.onHighlightedItemChange,
          getItemId: this.getItemId,
          theme: theme2,
          keyPrefix: "react-autowhatever-".concat(id2, "-")
        });
      }
    }, {
      key: "ensureHighlightedItemIsVisible",
      value: function ensureHighlightedItemIsVisible() {
        var highlightedItem = this.highlightedItem;
        if (!highlightedItem) {
          return;
        }
        var itemsContainer = this.itemsContainer;
        var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;
        var scrollTop = itemsContainer.scrollTop;
        if (itemOffsetRelativeToContainer < scrollTop) {
          scrollTop = itemOffsetRelativeToContainer;
        } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
          scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
        }
        if (scrollTop !== itemsContainer.scrollTop) {
          itemsContainer.scrollTop = scrollTop;
        }
      }
    }, {
      key: "render",
      value: function render() {
        var theme2 = this.theme;
        var _this$props4 = this.props, id2 = _this$props4.id, multiSection = _this$props4.multiSection, renderInputComponent = _this$props4.renderInputComponent, renderItemsContainer = _this$props4.renderItemsContainer, highlightedSectionIndex = _this$props4.highlightedSectionIndex, highlightedItemIndex = _this$props4.highlightedItemIndex;
        var isInputFocused = this.state.isInputFocused;
        var renderedItems = multiSection ? this.renderSections() : this.renderItems();
        var isOpen = renderedItems !== null;
        var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
        var itemsContainerId = "react-autowhatever-".concat(id2);
        var containerProps = _objectSpread({
          role: "combobox",
          "aria-haspopup": "listbox",
          "aria-owns": itemsContainerId,
          "aria-expanded": isOpen
        }, theme2("react-autowhatever-".concat(id2, "-container"), "container", isOpen && "containerOpen"), {}, this.props.containerProps);
        var inputComponent = renderInputComponent(_objectSpread({
          type: "text",
          value: "",
          autoComplete: "off",
          "aria-autocomplete": "list",
          "aria-controls": itemsContainerId,
          "aria-activedescendant": ariaActivedescendant
        }, theme2("react-autowhatever-".concat(id2, "-input"), "input", isOpen && "inputOpen", isInputFocused && "inputFocused"), {}, this.props.inputProps, {
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
          ref: this.storeInputReference
        }));
        var itemsContainer = renderItemsContainer({
          containerProps: _objectSpread({
            id: itemsContainerId,
            role: "listbox"
          }, theme2("react-autowhatever-".concat(id2, "-items-container"), "itemsContainer", isOpen && "itemsContainerOpen"), {
            ref: this.storeItemsContainerReference
          }),
          children: renderedItems
        });
        return /* @__PURE__ */ _react["default"].createElement("div", containerProps, inputComponent, itemsContainer);
      }
    }]);
    return Autowhatever3;
  }(_react.Component);
  exports["default"] = Autowhatever2;
  _defineProperty(Autowhatever2, "propTypes", {
    id: _propTypes["default"].string,
    // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
    multiSection: _propTypes["default"].bool,
    // Indicates whether a multi section layout should be rendered.
    renderInputComponent: _propTypes["default"].func,
    // When specified, it is used to render the input element.
    renderItemsContainer: _propTypes["default"].func,
    // Renders the items container.
    items: _propTypes["default"].array.isRequired,
    // Array of items or sections to render.
    renderItem: _propTypes["default"].func,
    // This function renders a single item.
    renderItemData: _propTypes["default"].object,
    // Arbitrary data that will be passed to renderItem()
    renderSectionTitle: _propTypes["default"].func,
    // This function gets a section and renders its title.
    getSectionItems: _propTypes["default"].func,
    // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
    containerProps: _propTypes["default"].object,
    // Arbitrary container props
    inputProps: _propTypes["default"].object,
    // Arbitrary input props
    itemProps: _propTypes["default"].oneOfType([
      // Arbitrary item props
      _propTypes["default"].object,
      _propTypes["default"].func
    ]),
    highlightedSectionIndex: _propTypes["default"].number,
    // Section index of the highlighted item
    highlightedItemIndex: _propTypes["default"].number,
    // Highlighted item index (within a section)
    theme: _propTypes["default"].oneOfType([
      // Styles. See: https://github.com/markdalgleish/react-themeable
      _propTypes["default"].object,
      _propTypes["default"].array
    ])
  });
  _defineProperty(Autowhatever2, "defaultProps", {
    id: "1",
    multiSection: false,
    renderInputComponent: defaultRenderInputComponent,
    renderItemsContainer: defaultRenderItemsContainer,
    renderItem: function renderItem() {
      throw new Error("`renderItem` must be provided");
    },
    renderItemData: emptyObject,
    renderSectionTitle: function renderSectionTitle() {
      throw new Error("`renderSectionTitle` must be provided");
    },
    getSectionItems: function getSectionItems() {
      throw new Error("`getSectionItems` must be provided");
    },
    containerProps: emptyObject,
    inputProps: emptyObject,
    itemProps: emptyObject,
    highlightedSectionIndex: null,
    highlightedItemIndex: null,
    theme: defaultTheme2
  });
})(Autowhatever);
var theme = {};
Object.defineProperty(theme, "__esModule", {
  value: true
});
theme.mapToAutowhateverTheme = theme.defaultTheme = void 0;
var defaultTheme = {
  container: "react-autosuggest__container",
  containerOpen: "react-autosuggest__container--open",
  input: "react-autosuggest__input",
  inputOpen: "react-autosuggest__input--open",
  inputFocused: "react-autosuggest__input--focused",
  suggestionsContainer: "react-autosuggest__suggestions-container",
  suggestionsContainerOpen: "react-autosuggest__suggestions-container--open",
  suggestionsList: "react-autosuggest__suggestions-list",
  suggestion: "react-autosuggest__suggestion",
  suggestionFirst: "react-autosuggest__suggestion--first",
  suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
  sectionContainer: "react-autosuggest__section-container",
  sectionContainerFirst: "react-autosuggest__section-container--first",
  sectionTitle: "react-autosuggest__section-title"
};
theme.defaultTheme = defaultTheme;
var mapToAutowhateverTheme = function mapToAutowhateverTheme2(theme2) {
  var result = {};
  for (var key in theme2) {
    switch (key) {
      case "suggestionsContainer":
        result["itemsContainer"] = theme2[key];
        break;
      case "suggestionsContainerOpen":
        result["itemsContainerOpen"] = theme2[key];
        break;
      case "suggestion":
        result["item"] = theme2[key];
        break;
      case "suggestionFirst":
        result["itemFirst"] = theme2[key];
        break;
      case "suggestionHighlighted":
        result["itemHighlighted"] = theme2[key];
        break;
      case "suggestionsList":
        result["itemsList"] = theme2[key];
        break;
      default:
        result[key] = theme2[key];
    }
  }
  return result;
};
theme.mapToAutowhateverTheme = mapToAutowhateverTheme;
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(reactExports);
  var _propTypes = _interopRequireDefault(propTypesExports);
  var _arrays = _interopRequireDefault(arrays);
  var _Autowhatever = _interopRequireDefault(Autowhatever);
  var _theme = theme;
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = /* @__PURE__ */ new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _createSuper(Derived) {
    return function() {
      var Super = _getPrototypeOf(Derived), result;
      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var alwaysTrue = function alwaysTrue2() {
    return true;
  };
  var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions2(value) {
    return value.trim().length > 0;
  };
  var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer2(_ref) {
    var containerProps = _ref.containerProps, children = _ref.children;
    return /* @__PURE__ */ _react["default"].createElement("div", containerProps, children);
  };
  var REASON_SUGGESTIONS_REVEALED = "suggestions-revealed";
  var REASON_SUGGESTIONS_UPDATED = "suggestions-updated";
  var REASON_SUGGESTION_SELECTED = "suggestion-selected";
  var REASON_INPUT_FOCUSED = "input-focused";
  var REASON_INPUT_CHANGED = "input-changed";
  var REASON_INPUT_BLURRED = "input-blurred";
  var REASON_ESCAPE_PRESSED = "escape-pressed";
  var Autosuggest2 = /* @__PURE__ */ function(_Component) {
    _inherits(Autosuggest3, _Component);
    var _super = _createSuper(Autosuggest3);
    function Autosuggest3(_ref2) {
      var _this;
      var _alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;
      _classCallCheck(this, Autosuggest3);
      _this = _super.call(this);
      _defineProperty(_assertThisInitialized(_this), "onDocumentMouseDown", function(event) {
        _this.justClickedOnSuggestionsContainer = false;
        var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
        event.target;
        while (node !== null && node !== document) {
          if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
            return;
          }
          if (node === _this.suggestionsContainer) {
            _this.justClickedOnSuggestionsContainer = true;
            return;
          }
          node = node.parentNode;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "storeAutowhateverRef", function(autowhatever) {
        if (autowhatever !== null) {
          _this.autowhatever = autowhatever;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseEnter", function(event, _ref3) {
        var sectionIndex = _ref3.sectionIndex, itemIndex = _ref3.itemIndex;
        _this.updateHighlightedSuggestion(sectionIndex, itemIndex);
        if (event.target === _this.pressedSuggestion) {
          _this.justSelectedSuggestion = true;
        }
        _this.justMouseEntered = true;
        setTimeout(function() {
          _this.justMouseEntered = false;
        });
      });
      _defineProperty(_assertThisInitialized(_this), "highlightFirstSuggestion", function() {
        _this.updateHighlightedSuggestion(_this.props.multiSection ? 0 : null, 0);
      });
      _defineProperty(_assertThisInitialized(_this), "onDocumentMouseUp", function() {
        if (_this.pressedSuggestion && !_this.justSelectedSuggestion) {
          _this.input.focus();
        }
        _this.pressedSuggestion = null;
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseDown", function(event) {
        if (!_this.justSelectedSuggestion) {
          _this.justSelectedSuggestion = true;
          _this.pressedSuggestion = event.target;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionsClearRequested", function() {
        var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;
        onSuggestionsClearRequested && onSuggestionsClearRequested();
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionSelected", function(event, data) {
        var _this$props = _this.props, alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions, onSuggestionSelected = _this$props.onSuggestionSelected, onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
        onSuggestionSelected && onSuggestionSelected(event, data);
        var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(data.suggestion);
        if (alwaysRenderSuggestions || keepSuggestionsOnSelect) {
          onSuggestionsFetchRequested({
            value: data.suggestionValue,
            reason: REASON_SUGGESTION_SELECTED
          });
        } else {
          _this.onSuggestionsClearRequested();
        }
        _this.resetHighlightedSuggestion();
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionClick", function(event) {
        var _this$props2 = _this.props, alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions, focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
        var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target)), sectionIndex = _this$getSuggestionIn.sectionIndex, suggestionIndex = _this$getSuggestionIn.suggestionIndex;
        var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
        var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);
        _this.maybeCallOnChange(event, clickedSuggestionValue, "click");
        _this.onSuggestionSelected(event, {
          suggestion: clickedSuggestion,
          suggestionValue: clickedSuggestionValue,
          suggestionIndex,
          sectionIndex,
          method: "click"
        });
        var keepSuggestionsOnSelect = _this.props.shouldKeepSuggestionsOnSelect(clickedSuggestion);
        if (!(alwaysRenderSuggestions || keepSuggestionsOnSelect)) {
          _this.closeSuggestions();
        }
        if (focusInputOnSuggestionClick === true) {
          _this.input.focus();
        } else {
          _this.onBlur();
        }
        setTimeout(function() {
          _this.justSelectedSuggestion = false;
        });
      });
      _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
        var _this$props3 = _this.props, inputProps = _this$props3.inputProps, shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
        var value = inputProps.value, onBlur = inputProps.onBlur;
        var highlightedSuggestion = _this.getHighlightedSuggestion();
        var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_BLURRED);
        _this.setState({
          isFocused: false,
          highlightedSectionIndex: null,
          highlightedSuggestionIndex: null,
          highlightedSuggestion: null,
          valueBeforeUpDown: null,
          isCollapsed: !shouldRender
        });
        onBlur && onBlur(_this.blurEvent, {
          highlightedSuggestion
        });
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionMouseLeave", function(event) {
        _this.resetHighlightedSuggestion(false);
        if (_this.justSelectedSuggestion && event.target === _this.pressedSuggestion) {
          _this.justSelectedSuggestion = false;
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchStart", function() {
        _this.justSelectedSuggestion = true;
      });
      _defineProperty(_assertThisInitialized(_this), "onSuggestionTouchMove", function() {
        _this.justSelectedSuggestion = false;
        _this.pressedSuggestion = null;
        _this.input.focus();
      });
      _defineProperty(_assertThisInitialized(_this), "itemProps", function(_ref4) {
        var sectionIndex = _ref4.sectionIndex, itemIndex = _ref4.itemIndex;
        return {
          "data-section-index": sectionIndex,
          "data-suggestion-index": itemIndex,
          onMouseEnter: _this.onSuggestionMouseEnter,
          onMouseLeave: _this.onSuggestionMouseLeave,
          onMouseDown: _this.onSuggestionMouseDown,
          onTouchStart: _this.onSuggestionTouchStart,
          onTouchMove: _this.onSuggestionTouchMove,
          onClick: _this.onSuggestionClick
        };
      });
      _defineProperty(_assertThisInitialized(_this), "renderSuggestionsContainer", function(_ref5) {
        var containerProps = _ref5.containerProps, children = _ref5.children;
        var renderSuggestionsContainer = _this.props.renderSuggestionsContainer;
        return renderSuggestionsContainer({
          containerProps,
          children,
          query: _this.getQuery()
        });
      });
      _this.state = {
        isFocused: false,
        isCollapsed: !_alwaysRenderSuggestions,
        highlightedSectionIndex: null,
        highlightedSuggestionIndex: null,
        highlightedSuggestion: null,
        valueBeforeUpDown: null
      };
      _this.justPressedUpDown = false;
      _this.justMouseEntered = false;
      _this.pressedSuggestion = null;
      return _this;
    }
    _createClass(Autosuggest3, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener("mousedown", this.onDocumentMouseDown);
        document.addEventListener("mouseup", this.onDocumentMouseUp);
        this.input = this.autowhatever.input;
        this.suggestionsContainer = this.autowhatever.itemsContainer;
      }
      // eslint-disable-next-line camelcase, react/sort-comp
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var shouldResetHighlighting = this.state.highlightedSuggestionIndex === 0 && this.props.highlightFirstSuggestion && !nextProps.highlightFirstSuggestion;
        if ((0, _arrays["default"])(nextProps.suggestions, this.props.suggestions)) {
          if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false && this.justMouseEntered === false) {
            this.highlightFirstSuggestion();
          } else if (shouldResetHighlighting) {
            this.resetHighlightedSuggestion();
          }
        } else {
          if (this.willRenderSuggestions(nextProps, REASON_SUGGESTIONS_UPDATED)) {
            if (this.state.isCollapsed && !this.justSelectedSuggestion) {
              this.revealSuggestions();
            }
            if (shouldResetHighlighting) {
              this.resetHighlightedSuggestion();
            }
          } else {
            this.resetHighlightedSuggestion();
          }
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        var _this$props4 = this.props, suggestions = _this$props4.suggestions, onSuggestionHighlighted = _this$props4.onSuggestionHighlighted, highlightFirstSuggestion = _this$props4.highlightFirstSuggestion;
        if (!(0, _arrays["default"])(suggestions, prevProps.suggestions) && suggestions.length > 0 && highlightFirstSuggestion) {
          this.highlightFirstSuggestion();
          return;
        }
        if (onSuggestionHighlighted) {
          var highlightedSuggestion = this.getHighlightedSuggestion();
          var prevHighlightedSuggestion = prevState.highlightedSuggestion;
          if (highlightedSuggestion != prevHighlightedSuggestion) {
            onSuggestionHighlighted({
              suggestion: highlightedSuggestion
            });
          }
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener("mousedown", this.onDocumentMouseDown);
        document.removeEventListener("mouseup", this.onDocumentMouseUp);
      }
    }, {
      key: "updateHighlightedSuggestion",
      value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
        var _this2 = this;
        this.setState(function(state) {
          var valueBeforeUpDown = state.valueBeforeUpDown;
          if (suggestionIndex === null) {
            valueBeforeUpDown = null;
          } else if (valueBeforeUpDown === null && typeof prevValue !== "undefined") {
            valueBeforeUpDown = prevValue;
          }
          return {
            highlightedSectionIndex: sectionIndex,
            highlightedSuggestionIndex: suggestionIndex,
            highlightedSuggestion: suggestionIndex === null ? null : _this2.getSuggestion(sectionIndex, suggestionIndex),
            valueBeforeUpDown
          };
        });
      }
    }, {
      key: "resetHighlightedSuggestion",
      value: function resetHighlightedSuggestion() {
        var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        this.setState(function(state) {
          var valueBeforeUpDown = state.valueBeforeUpDown;
          return {
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null,
            valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
          };
        });
      }
    }, {
      key: "revealSuggestions",
      value: function revealSuggestions() {
        this.setState({
          isCollapsed: false
        });
      }
    }, {
      key: "closeSuggestions",
      value: function closeSuggestions() {
        this.setState({
          highlightedSectionIndex: null,
          highlightedSuggestionIndex: null,
          highlightedSuggestion: null,
          valueBeforeUpDown: null,
          isCollapsed: true
        });
      }
    }, {
      key: "getSuggestion",
      value: function getSuggestion(sectionIndex, suggestionIndex) {
        var _this$props5 = this.props, suggestions = _this$props5.suggestions, multiSection = _this$props5.multiSection, getSectionSuggestions = _this$props5.getSectionSuggestions;
        if (multiSection) {
          return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
        }
        return suggestions[suggestionIndex];
      }
    }, {
      key: "getHighlightedSuggestion",
      value: function getHighlightedSuggestion() {
        var _this$state = this.state, highlightedSectionIndex = _this$state.highlightedSectionIndex, highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;
        if (highlightedSuggestionIndex === null) {
          return null;
        }
        return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
      }
    }, {
      key: "getSuggestionValueByIndex",
      value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
        var getSuggestionValue = this.props.getSuggestionValue;
        return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
      }
    }, {
      key: "getSuggestionIndices",
      value: function getSuggestionIndices(suggestionElement) {
        var sectionIndex = suggestionElement.getAttribute("data-section-index");
        var suggestionIndex = suggestionElement.getAttribute("data-suggestion-index");
        return {
          sectionIndex: typeof sectionIndex === "string" ? parseInt(sectionIndex, 10) : null,
          suggestionIndex: parseInt(suggestionIndex, 10)
        };
      }
    }, {
      key: "findSuggestionElement",
      value: function findSuggestionElement(startNode) {
        var node = startNode;
        do {
          if (node.getAttribute && node.getAttribute("data-suggestion-index") !== null) {
            return node;
          }
          node = node.parentNode;
        } while (node !== null);
        console.error("Clicked element:", startNode);
        throw new Error("Couldn't find suggestion element");
      }
    }, {
      key: "maybeCallOnChange",
      value: function maybeCallOnChange(event, newValue, method) {
        var _this$props$inputProp = this.props.inputProps, value = _this$props$inputProp.value, onChange = _this$props$inputProp.onChange;
        if (newValue !== value) {
          onChange(event, {
            newValue,
            method
          });
        }
      }
    }, {
      key: "willRenderSuggestions",
      value: function willRenderSuggestions(props, reason) {
        var suggestions = props.suggestions, inputProps = props.inputProps, shouldRenderSuggestions = props.shouldRenderSuggestions;
        var value = inputProps.value;
        return suggestions.length > 0 && shouldRenderSuggestions(value, reason);
      }
    }, {
      key: "getQuery",
      value: function getQuery() {
        var inputProps = this.props.inputProps;
        var value = inputProps.value;
        var valueBeforeUpDown = this.state.valueBeforeUpDown;
        return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        var _this$props6 = this.props, suggestions = _this$props6.suggestions, renderInputComponent = _this$props6.renderInputComponent, onSuggestionsFetchRequested = _this$props6.onSuggestionsFetchRequested, renderSuggestion = _this$props6.renderSuggestion, inputProps = _this$props6.inputProps, multiSection = _this$props6.multiSection, renderSectionTitle = _this$props6.renderSectionTitle, id2 = _this$props6.id, getSectionSuggestions = _this$props6.getSectionSuggestions, theme2 = _this$props6.theme, getSuggestionValue = _this$props6.getSuggestionValue, alwaysRenderSuggestions = _this$props6.alwaysRenderSuggestions, highlightFirstSuggestion = _this$props6.highlightFirstSuggestion, containerProps = _this$props6.containerProps;
        var _this$state2 = this.state, isFocused = _this$state2.isFocused, isCollapsed = _this$state2.isCollapsed, highlightedSectionIndex = _this$state2.highlightedSectionIndex, highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex, valueBeforeUpDown = _this$state2.valueBeforeUpDown;
        var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
        var value = inputProps.value, _onFocus = inputProps.onFocus, _onKeyDown = inputProps.onKeyDown;
        var willRenderSuggestions = this.willRenderSuggestions(this.props, "render");
        var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
        var items = isOpen ? suggestions : [];
        var autowhateverInputProps = _objectSpread({}, inputProps, {
          onFocus: function onFocus(event) {
            if (!_this3.justSelectedSuggestion && !_this3.justClickedOnSuggestionsContainer) {
              var shouldRender = shouldRenderSuggestions(value, REASON_INPUT_FOCUSED);
              _this3.setState({
                isFocused: true,
                isCollapsed: !shouldRender
              });
              _onFocus && _onFocus(event);
              if (shouldRender) {
                onSuggestionsFetchRequested({
                  value,
                  reason: REASON_INPUT_FOCUSED
                });
              }
            }
          },
          onBlur: function onBlur(event) {
            if (_this3.justClickedOnSuggestionsContainer) {
              _this3.input.focus();
              return;
            }
            _this3.blurEvent = event;
            if (!_this3.justSelectedSuggestion) {
              _this3.onBlur();
              _this3.onSuggestionsClearRequested();
            }
          },
          onChange: function onChange(event) {
            var value2 = event.target.value;
            var shouldRender = shouldRenderSuggestions(value2, REASON_INPUT_CHANGED);
            _this3.maybeCallOnChange(event, value2, "type");
            if (_this3.suggestionsContainer) {
              _this3.suggestionsContainer.scrollTop = 0;
            }
            _this3.setState(_objectSpread({}, highlightFirstSuggestion ? {} : {
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null
            }, {
              valueBeforeUpDown: null,
              isCollapsed: !shouldRender
            }));
            if (shouldRender) {
              onSuggestionsFetchRequested({
                value: value2,
                reason: REASON_INPUT_CHANGED
              });
            } else {
              _this3.onSuggestionsClearRequested();
            }
          },
          onKeyDown: function onKeyDown(event, data) {
            var keyCode = event.keyCode;
            switch (keyCode) {
              case 40:
              case 38:
                if (isCollapsed) {
                  if (shouldRenderSuggestions(value, REASON_SUGGESTIONS_REVEALED)) {
                    onSuggestionsFetchRequested({
                      value,
                      reason: REASON_SUGGESTIONS_REVEALED
                    });
                    _this3.revealSuggestions();
                    event.preventDefault();
                  }
                } else if (suggestions.length > 0) {
                  var newHighlightedSectionIndex = data.newHighlightedSectionIndex, newHighlightedItemIndex = data.newHighlightedItemIndex;
                  var newValue;
                  if (newHighlightedItemIndex === null) {
                    newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
                  } else {
                    newValue = _this3.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
                  }
                  _this3.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);
                  _this3.maybeCallOnChange(event, newValue, keyCode === 40 ? "down" : "up");
                  event.preventDefault();
                }
                _this3.justPressedUpDown = true;
                setTimeout(function() {
                  _this3.justPressedUpDown = false;
                });
                break;
              case 13: {
                if (event.keyCode === 229) {
                  break;
                }
                var highlightedSuggestion = _this3.getHighlightedSuggestion();
                if (isOpen && !alwaysRenderSuggestions) {
                  _this3.closeSuggestions();
                }
                if (highlightedSuggestion != null) {
                  event.preventDefault();
                  var _newValue = getSuggestionValue(highlightedSuggestion);
                  _this3.maybeCallOnChange(event, _newValue, "enter");
                  _this3.onSuggestionSelected(event, {
                    suggestion: highlightedSuggestion,
                    suggestionValue: _newValue,
                    suggestionIndex: highlightedSuggestionIndex,
                    sectionIndex: highlightedSectionIndex,
                    method: "enter"
                  });
                  _this3.justSelectedSuggestion = true;
                  setTimeout(function() {
                    _this3.justSelectedSuggestion = false;
                  });
                }
                break;
              }
              case 27: {
                if (isOpen) {
                  event.preventDefault();
                }
                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;
                if (valueBeforeUpDown === null) {
                  if (!willCloseSuggestions) {
                    var _newValue2 = "";
                    _this3.maybeCallOnChange(event, _newValue2, "escape");
                    if (shouldRenderSuggestions(_newValue2, REASON_ESCAPE_PRESSED)) {
                      onSuggestionsFetchRequested({
                        value: _newValue2,
                        reason: REASON_ESCAPE_PRESSED
                      });
                    } else {
                      _this3.onSuggestionsClearRequested();
                    }
                  }
                } else {
                  _this3.maybeCallOnChange(event, valueBeforeUpDown, "escape");
                }
                if (willCloseSuggestions) {
                  _this3.onSuggestionsClearRequested();
                  _this3.closeSuggestions();
                } else {
                  _this3.resetHighlightedSuggestion();
                }
                break;
              }
            }
            _onKeyDown && _onKeyDown(event);
          }
        });
        var renderSuggestionData = {
          query: this.getQuery()
        };
        return /* @__PURE__ */ _react["default"].createElement(_Autowhatever["default"], {
          multiSection,
          items,
          renderInputComponent,
          renderItemsContainer: this.renderSuggestionsContainer,
          renderItem: renderSuggestion,
          renderItemData: renderSuggestionData,
          renderSectionTitle,
          getSectionItems: getSectionSuggestions,
          highlightedSectionIndex,
          highlightedItemIndex: highlightedSuggestionIndex,
          containerProps,
          inputProps: autowhateverInputProps,
          itemProps: this.itemProps,
          theme: (0, _theme.mapToAutowhateverTheme)(theme2),
          id: id2,
          ref: this.storeAutowhateverRef
        });
      }
    }]);
    return Autosuggest3;
  }(_react.Component);
  exports["default"] = Autosuggest2;
  _defineProperty(Autosuggest2, "propTypes", {
    suggestions: _propTypes["default"].array.isRequired,
    onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
      var onSuggestionsFetchRequested2 = props[propName];
      if (typeof onSuggestionsFetchRequested2 !== "function") {
        throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp");
      }
    },
    onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
      var onSuggestionsClearRequested2 = props[propName];
      if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested2 !== "function") {
        throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp");
      }
    },
    shouldKeepSuggestionsOnSelect: _propTypes["default"].func,
    onSuggestionSelected: _propTypes["default"].func,
    onSuggestionHighlighted: _propTypes["default"].func,
    renderInputComponent: _propTypes["default"].func,
    renderSuggestionsContainer: _propTypes["default"].func,
    getSuggestionValue: _propTypes["default"].func.isRequired,
    renderSuggestion: _propTypes["default"].func.isRequired,
    inputProps: function inputProps(props, propName) {
      var inputProps2 = props[propName];
      if (!inputProps2) {
        throw new Error("'inputProps' must be passed.");
      }
      if (!Object.prototype.hasOwnProperty.call(inputProps2, "value")) {
        throw new Error("'inputProps' must have 'value'.");
      }
      if (!Object.prototype.hasOwnProperty.call(inputProps2, "onChange")) {
        throw new Error("'inputProps' must have 'onChange'.");
      }
    },
    shouldRenderSuggestions: _propTypes["default"].func,
    alwaysRenderSuggestions: _propTypes["default"].bool,
    multiSection: _propTypes["default"].bool,
    renderSectionTitle: function renderSectionTitle(props, propName) {
      var renderSectionTitle2 = props[propName];
      if (props.multiSection === true && typeof renderSectionTitle2 !== "function") {
        throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp");
      }
    },
    getSectionSuggestions: function getSectionSuggestions(props, propName) {
      var getSectionSuggestions2 = props[propName];
      if (props.multiSection === true && typeof getSectionSuggestions2 !== "function") {
        throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp");
      }
    },
    focusInputOnSuggestionClick: _propTypes["default"].bool,
    highlightFirstSuggestion: _propTypes["default"].bool,
    theme: _propTypes["default"].object,
    id: _propTypes["default"].string,
    containerProps: _propTypes["default"].object
    // Arbitrary container props
  });
  _defineProperty(Autosuggest2, "defaultProps", {
    renderSuggestionsContainer: defaultRenderSuggestionsContainer,
    shouldRenderSuggestions: defaultShouldRenderSuggestions,
    alwaysRenderSuggestions: false,
    multiSection: false,
    shouldKeepSuggestionsOnSelect: function shouldKeepSuggestionsOnSelect() {
      return false;
    },
    focusInputOnSuggestionClick: true,
    highlightFirstSuggestion: false,
    theme: _theme.defaultTheme,
    id: "1",
    containerProps: {}
  });
})(Autosuggest$1);
var dist = Autosuggest$1["default"];
const Autosuggest = /* @__PURE__ */ getDefaultExportFromCjs(dist);
function AutoSuggestInput({
  currentGuess,
  setCurrentGuess,
  placeholder,
  suggestionsArray
}) {
  const [suggestions, setSuggestions] = reactExports.useState([]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Autosuggest,
    {
      id: "map-autosuggest",
      suggestions,
      getSuggestionValue: (suggestion) => suggestion,
      inputProps: {
        value: currentGuess,
        placeholder,
        onChange: (_e, { newValue }) => setCurrentGuess(newValue),
        className: "w-full dark:bg-slate-800 dark:text-slate-100"
      },
      onSuggestionsFetchRequested: ({ value }) => (
        //setSuggestions(fetchSuggestions(CSSFontFeatureValuesRule, value))
        setSuggestions(fetchSuggestions(suggestionsArray, value))
      ),
      onSuggestionsClearRequested: () => setSuggestions([]),
      renderSuggestion: (suggestion) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dark:bg-slate-800 border-2 rounded dark:text-slate-100", children: suggestion }),
      renderSuggestionsContainer: ({ containerProps, children }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ...containerProps,
          className: `${containerProps.className} absolute bottom-full w-full bg-white mb-1 divide-x-2 max-h-52 overflow-auto`,
          children
        }
      ),
      containerProps: {
        className: "dark:bg-slate-800 border-2 rounded flex-auto relative p-1 mr-1"
      }
    }
  ) });
}
function GuessButton({ handler, text }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "submit",
      onClick: handler,
      className: "dark:bg-slate-800 dark:hover:bg-slate-700 border-2 rounded uppercase flex-shrink-0 p-1 font-semibold",
      "data-testid": "guess-btn",
      children: text
    }
  );
}
const c$1 = (e2) => "number" == typeof e2 && !isNaN(e2), d$1 = (e2) => "string" == typeof e2, u$1 = (e2) => "function" == typeof e2, m$1 = (e2) => reactExports.isValidElement(e2) || d$1(e2) || u$1(e2) || c$1(e2);
function f$1(e2, t2, n2) {
  void 0 === n2 && (n2 = 300);
  const { scrollHeight: o, style: s } = e2;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = o + "px", s.transition = `all ${n2}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t2, n2);
    });
  });
}
function g$1(t2) {
  let { enter: a, exit: r2, appendPosition: i = false, collapse: l2 = true, collapseDuration: c2 = 300 } = t2;
  return function(t3) {
    let { children: d2, position: u2, preventExitTransition: p2, done: m2, nodeRef: g2, isIn: y2, playToast: v2 } = t3;
    const h2 = i ? `${a}--${u2}` : a, T2 = i ? `${r2}--${u2}` : r2, E2 = reactExports.useRef(0);
    return reactExports.useLayoutEffect(() => {
      const e2 = g2.current, t4 = h2.split(" "), n2 = (o) => {
        o.target === g2.current && (v2(), e2.removeEventListener("animationend", n2), e2.removeEventListener("animationcancel", n2), 0 === E2.current && "animationcancel" !== o.type && e2.classList.remove(...t4));
      };
      e2.classList.add(...t4), e2.addEventListener("animationend", n2), e2.addEventListener("animationcancel", n2);
    }, []), reactExports.useEffect(() => {
      const e2 = g2.current, t4 = () => {
        e2.removeEventListener("animationend", t4), l2 ? f$1(e2, m2, c2) : m2();
      };
      y2 || (p2 ? t4() : (E2.current = 1, e2.className += ` ${T2}`, e2.addEventListener("animationend", t4)));
    }, [y2]), e.createElement(e.Fragment, null, d2);
  };
}
const v$1 = /* @__PURE__ */ new Map();
let h$1 = [];
const T$1 = /* @__PURE__ */ new Set(), b$1 = () => v$1.size > 0;
function I$1(e2, t2) {
  var n2;
  if (t2) return !(null == (n2 = v$1.get(t2)) || !n2.isToastActive(e2));
  let o = false;
  return v$1.forEach((t3) => {
    t3.isToastActive(e2) && (o = true);
  }), o;
}
function _$1(e2, t2) {
  m$1(e2) && (b$1() || h$1.push({ content: e2, options: t2 }), v$1.forEach((n2) => {
    n2.buildToast(e2, t2);
  }));
}
function C$1(e2, t2) {
  v$1.forEach((n2) => {
    null != t2 && null != t2 && t2.containerId ? (null == t2 ? void 0 : t2.containerId) === n2.id && n2.toggle(e2, null == t2 ? void 0 : t2.id) : n2.toggle(e2, null == t2 ? void 0 : t2.id);
  });
}
let w$1 = 1;
const k$1 = () => "" + w$1++;
function P$1(e2) {
  return e2 && (d$1(e2.toastId) || c$1(e2.toastId)) ? e2.toastId : k$1();
}
function M$1(e2, t2) {
  return _$1(e2, t2), t2.toastId;
}
function x$1(e2, t2) {
  return { ...t2, type: t2 && t2.type || e2, toastId: P$1(t2) };
}
function A$1(e2) {
  return (t2, n2) => M$1(t2, x$1(e2, n2));
}
function B$1(e2, t2) {
  return M$1(e2, x$1("default", t2));
}
B$1.loading = (e2, t2) => M$1(e2, x$1("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...t2 })), B$1.promise = function(e2, t2, n2) {
  let o, { pending: s, error: a, success: r2 } = t2;
  s && (o = d$1(s) ? B$1.loading(s, n2) : B$1.loading(s.render, { ...n2, ...s }));
  const i = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l2 = (e3, t3, s2) => {
    if (null == t3) return void B$1.dismiss(o);
    const a2 = { type: e3, ...i, ...n2, data: s2 }, r3 = d$1(t3) ? { render: t3 } : t3;
    return o ? B$1.update(o, { ...a2, ...r3 }) : B$1(r3.render, { ...a2, ...r3 }), s2;
  }, c2 = u$1(e2) ? e2() : e2;
  return c2.then((e3) => l2("success", r2, e3)).catch((e3) => l2("error", a, e3)), c2;
}, B$1.success = A$1("success"), B$1.info = A$1("info"), B$1.error = A$1("error"), B$1.warning = A$1("warning"), B$1.warn = B$1.warning, B$1.dark = (e2, t2) => M$1(e2, x$1("default", { theme: "dark", ...t2 })), B$1.dismiss = function(e2) {
  !function(e3) {
    var t2;
    if (b$1()) {
      if (null == e3 || d$1(t2 = e3) || c$1(t2)) v$1.forEach((t3) => {
        t3.removeToast(e3);
      });
      else if (e3 && ("containerId" in e3 || "id" in e3)) {
        const t3 = v$1.get(e3.containerId);
        t3 ? t3.removeToast(e3.id) : v$1.forEach((t4) => {
          t4.removeToast(e3.id);
        });
      }
    } else h$1 = h$1.filter((t3) => null != e3 && t3.options.toastId !== e3);
  }(e2);
}, B$1.clearWaitingQueue = function(e2) {
  void 0 === e2 && (e2 = {}), v$1.forEach((t2) => {
    !t2.props.limit || e2.containerId && t2.id !== e2.containerId || t2.clearQueue();
  });
}, B$1.isActive = I$1, B$1.update = function(e2, t2) {
  void 0 === t2 && (t2 = {});
  const n2 = ((e3, t3) => {
    var n3;
    let { containerId: o } = t3;
    return null == (n3 = v$1.get(o || 1)) ? void 0 : n3.toasts.get(e3);
  })(e2, t2);
  if (n2) {
    const { props: o, content: s } = n2, a = { delay: 100, ...o, ...t2, toastId: t2.toastId || e2, updateId: k$1() };
    a.toastId !== e2 && (a.staleId = e2);
    const r2 = a.render || s;
    delete a.render, M$1(r2, a);
  }
}, B$1.done = (e2) => {
  B$1.update(e2, { progress: 1 });
}, B$1.onChange = function(e2) {
  return T$1.add(e2), () => {
    T$1.delete(e2);
  };
}, B$1.play = (e2) => C$1(true, e2), B$1.pause = (e2) => C$1(false, e2);
const S$1 = function(e2, t2) {
  return void 0 === t2 && (t2 = false), { enter: `Toastify--animate Toastify__${e2}-enter`, exit: `Toastify--animate Toastify__${e2}-exit`, appendPosition: t2 };
};
g$1(S$1("bounce", true));
g$1(S$1("slide", true));
const X = g$1(S$1("zoom"));
g$1(S$1("flip"));
const SQUARE_ANIMATION_LENGTH = 250;
const squares = ["🟩", "🟩", "🟨", "🟧", "🟥", "⬛️"];
function getSquaresByDistance(distanceInMeters) {
  const distanceInKms = Math.floor(distanceInMeters / 1e3);
  return distanceInKms === 0 ? ["🟩", "🟩", "🟩", "🟩", "🟩", "🟩"] : distanceInKms <= 300 ? ["🟩", "🟩", "🟩", "🟩", "🟩", "🟨"] : distanceInKms <= 1300 ? ["🟩", "🟩", "🟩", "🟩", "🟨", "🟨"] : distanceInKms <= 2300 ? ["🟩", "🟩", "🟩", "🟨", "🟨", "🟧"] : distanceInKms <= 3300 ? ["🟩", "🟩", "🟨", "🟨", "🟧", "🟧"] : distanceInKms <= 4300 ? ["🟩", "🟨", "🟨", "🟧", "🟧", "🟥"] : ["🟨", "🟨", "🟧", "🟧", "🟥", "🟥"];
}
function toastError(text) {
  B$1.error(text, {
    position: "top-center",
    autoClose: 2e3,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: void 0,
    theme: "dark",
    style: {
      backgroundColor: "#F8B0B7",
      // Replace with your desired background color
      color: "#000000"
      // Optional: to set text color
    },
    transition: X
  });
}
function toastFailed(text) {
  toastError(text);
}
function toastSuccess(text) {
  B$1.success(text, {
    position: "top-center",
    autoClose: 3e3,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: void 0,
    theme: "dark",
    style: {
      backgroundColor: "#9EEAA7",
      // Replace with your desired background color
      color: "#000000"
      // Optional: to set text color
    },
    transition: X
  });
}
function GuessRow({
  guessCode,
  solutionCode,
  //  tGeo,
  dataBank: dataBank2
}) {
  const [animationIsActive, setAnimationIsActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!guessCode || guessCode === "invalid") {
      return;
    }
    setAnimationIsActive(true);
    const totalAnimationTime = SQUARE_ANIMATION_LENGTH * squares.length;
    const timeout = setTimeout(() => {
      setAnimationIsActive(false);
    }, totalAnimationTime);
    return () => clearTimeout(timeout);
  }, [guessCode]);
  return guessCode ? !animationIsActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-7 gap-1 text-center py-0.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-guess-div col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-guess-p", children: dataBank2.tGeo(guessCode) || "-" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-guess-div col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-guess-p", children: calculateDistanceInKm(
      dataBank2.data[guessCode].coordinates,
      dataBank2.data[solutionCode].coordinates
    ) + " km" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-guess-div", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-guess-p text-xl", children: dataBank2.getDirectionEmoji(guessCode, solutionCode) }) })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-1 text-center py-0.5 text-l w-full justify-evenly items-center border-2 h-8 overflow-hidden", children: getSquaresByDistance(
    calculateDistanceInMeters(
      dataBank2.data[guessCode].coordinates,
      dataBank2.data[solutionCode].coordinates
    )
  ).map((character, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "opacity-0 animate-reveal",
      style: {
        animationDelay: `${SQUARE_ANIMATION_LENGTH * index}ms`
      },
      children: character
    },
    index
  )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-1 text-center py-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-div-2" }) });
}
function Guesses({
  currentRoundStatus,
  guesses,
  maxAttempts,
  solutionCode,
  guessNum,
  dataBank: dataBank2
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    currentRoundStatus === "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-1 text-center py-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-div-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "opacity-70", children: [
      dataBank2.tLang("guessNoun"),
      " ",
      guessNum,
      " / ",
      maxAttempts
    ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `my-span-3 text-black bg-${getColorOfStatus(currentRoundStatus)}`,
        children: dataBank2.tGeo(solutionCode)
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: Array.from({ length: maxAttempts }, (_2, i) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        GuessRow,
        {
          guessCode: guesses[i],
          solutionCode,
          dataBank: dataBank2
        }
      );
    }) })
  ] });
}
var module = {};
(function main(global, module2, isWorker, workerSize) {
  var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
  var canUsePaths = typeof Path2D === "function" && typeof DOMMatrix === "function";
  var canDrawBitmap = function() {
    if (!global.OffscreenCanvas) {
      return false;
    }
    var canvas = new OffscreenCanvas(1, 1);
    var ctx = canvas.getContext("2d");
    ctx.fillRect(0, 0, 1, 1);
    var bitmap = canvas.transferToImageBitmap();
    try {
      ctx.createPattern(bitmap, "no-repeat");
    } catch (e2) {
      return false;
    }
    return true;
  }();
  function noop2() {
  }
  function promise(func) {
    var ModulePromise = module2.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
    if (typeof Prom === "function") {
      return new Prom(func);
    }
    func(noop2, noop2);
    return null;
  }
  var bitmapMapper = /* @__PURE__ */ function(skipTransform, map) {
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }
        if (map.has(bitmap)) {
          return map.get(bitmap);
        }
        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(bitmap, 0, 0);
        map.set(bitmap, canvas);
        return canvas;
      },
      clear: function() {
        map.clear();
      }
    };
  }(canDrawBitmap, /* @__PURE__ */ new Map());
  var raf = function() {
    var TIME = Math.floor(1e3 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;
    if (typeof requestAnimationFrame === "function" && typeof cancelAnimationFrame === "function") {
      frame = function(cb2) {
        var id2 = Math.random();
        frames[id2] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id2];
            cb2();
          } else {
            frames[id2] = requestAnimationFrame(onFrame);
          }
        });
        return id2;
      };
      cancel = function(id2) {
        if (frames[id2]) {
          cancelAnimationFrame(frames[id2]);
        }
      };
    } else {
      frame = function(cb2) {
        return setTimeout(cb2, TIME);
      };
      cancel = function(timer) {
        return clearTimeout(timer);
      };
    }
    return { frame, cancel };
  }();
  var getWorker = /* @__PURE__ */ function() {
    var worker;
    var prom;
    var resolves = {};
    function decorate(worker2) {
      function execute(options, callback) {
        worker2.postMessage({ options: options || {}, callback });
      }
      worker2.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker2.postMessage({ canvas: offscreen }, [offscreen]);
      };
      worker2.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }
        var id2 = Math.random().toString(36).slice(2);
        prom = promise(function(resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id2) {
              return;
            }
            delete resolves[id2];
            worker2.removeEventListener("message", workerDone);
            prom = null;
            bitmapMapper.clear();
            done();
            resolve();
          }
          worker2.addEventListener("message", workerDone);
          execute(options, id2);
          resolves[id2] = workerDone.bind(null, { data: { callback: id2 } });
        });
        return prom;
      };
      worker2.reset = function resetWorker() {
        worker2.postMessage({ reset: true });
        for (var id2 in resolves) {
          resolves[id2]();
          delete resolves[id2];
        }
      };
    }
    return function() {
      if (worker) {
        return worker;
      }
      if (!isWorker && canUseWorker) {
        var code = [
          "var CONFETTI, SIZE = {}, module = {};",
          "(" + main.toString() + ")(this, module, true, SIZE);",
          "onmessage = function(msg) {",
          "  if (msg.data.options) {",
          "    CONFETTI(msg.data.options).then(function () {",
          "      if (msg.data.callback) {",
          "        postMessage({ callback: msg.data.callback });",
          "      }",
          "    });",
          "  } else if (msg.data.reset) {",
          "    CONFETTI && CONFETTI.reset();",
          "  } else if (msg.data.resize) {",
          "    SIZE.width = msg.data.resize.width;",
          "    SIZE.height = msg.data.resize.height;",
          "  } else if (msg.data.canvas) {",
          "    SIZE.width = msg.data.canvas.width;",
          "    SIZE.height = msg.data.canvas.height;",
          "    CONFETTI = module.exports.create(msg.data.canvas);",
          "  }",
          "}"
        ].join("\n");
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e2) {
          typeof console !== void 0 && typeof console.warn === "function" ? console.warn("🎊 Could not load worker", e2) : null;
          return null;
        }
        decorate(worker);
      }
      return worker;
    };
  }();
  var defaults2 = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ["square", "circle"],
    zIndex: 100,
    colors: [
      "#26ccff",
      "#a25afd",
      "#ff5e7e",
      "#88ff5a",
      "#fcff42",
      "#ffa62d",
      "#ff36ff"
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };
  function convert(val, transform) {
    return transform ? transform(val) : val;
  }
  function isOk(val) {
    return !(val === null || val === void 0);
  }
  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults2[name],
      transform
    );
  }
  function onlyPositiveInt(number) {
    return number < 0 ? 0 : Math.floor(number);
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function toDecimal(str) {
    return parseInt(str, 16);
  }
  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }
  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, "");
    if (val.length < 6) {
      val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
    }
    return {
      r: toDecimal(val.substring(0, 2)),
      g: toDecimal(val.substring(2, 4)),
      b: toDecimal(val.substring(4, 6))
    };
  }
  function getOrigin(options) {
    var origin = prop(options, "origin", Object);
    origin.x = prop(origin, "x", Number);
    origin.y = prop(origin, "y", Number);
    return origin;
  }
  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }
  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  function getCanvas(zIndex) {
    var canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = zIndex;
    return canvas;
  }
  function ellipse(context, x2, y2, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x2, y2);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }
  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);
    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
      angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }
  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;
    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + 10 * fetti.scalar;
      fetti.wobbleY = fetti.y + 10 * fetti.scalar;
      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
      fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }
    var progress = fetti.tick++ / fetti.totalTicks;
    var x1 = fetti.x + fetti.random * fetti.tiltCos;
    var y1 = fetti.y + fetti.random * fetti.tiltSin;
    var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
    var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
    context.fillStyle = "rgba(" + fetti.color.r + ", " + fetti.color.g + ", " + fetti.color.b + ", " + (1 - progress) + ")";
    context.beginPath();
    if (canUsePaths && fetti.shape.type === "path" && typeof fetti.shape.path === "string" && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === "bitmap") {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;
      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), "no-repeat");
      pattern.setTransform(matrix);
      context.globalAlpha = 1 - progress;
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - width / 2,
        fetti.y - height / 2,
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === "circle") {
      context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === "star") {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x3 = fetti.x;
      var y3 = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;
      while (spikes--) {
        x3 = fetti.x + Math.cos(rot) * outerRadius;
        y3 = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x3, y3);
        rot += step;
        x3 = fetti.x + Math.cos(rot) * innerRadius;
        y3 = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x3, y3);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }
    context.closePath();
    context.fill();
    return fetti.tick < fetti.totalTicks;
  }
  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext("2d");
    var animationFrame;
    var destroy;
    var prom = promise(function(resolve) {
      function onDone() {
        animationFrame = destroy = null;
        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();
        done();
        resolve();
      }
      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }
        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }
        context.clearRect(0, 0, size.width, size.height);
        animatingFettis = animatingFettis.filter(function(fetti) {
          return updateFetti(context, fetti);
        });
        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }
      animationFrame = raf.frame(update);
      destroy = onDone;
    });
    return {
      addFettis: function(fettis2) {
        animatingFettis = animatingFettis.concat(fettis2);
        return prom;
      },
      canvas,
      promise: prom,
      reset: function() {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }
        if (destroy) {
          destroy();
        }
      }
    };
  }
  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, "resize");
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, "disableForReducedMotion", Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, "useWorker");
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion)").matches;
    var animationObj;
    function fireLocal(options, size, done) {
      var particleCount = prop(options, "particleCount", onlyPositiveInt);
      var angle = prop(options, "angle", Number);
      var spread = prop(options, "spread", Number);
      var startVelocity = prop(options, "startVelocity", Number);
      var decay = prop(options, "decay", Number);
      var gravity = prop(options, "gravity", Number);
      var drift = prop(options, "drift", Number);
      var colors = prop(options, "colors", colorsToRgb);
      var ticks = prop(options, "ticks", Number);
      var shapes = prop(options, "shapes");
      var scalar = prop(options, "scalar");
      var flat = !!prop(options, "flat");
      var origin = getOrigin(options);
      var temp = particleCount;
      var fettis = [];
      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;
      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle,
            spread,
            startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks,
            decay,
            gravity,
            drift,
            scalar,
            flat
          })
        );
      }
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }
      animationObj = animate(canvas, fettis, resizer, size, done);
      return animationObj.promise;
    }
    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, "disableForReducedMotion", Boolean);
      var zIndex = prop(options, "zIndex", Number);
      if (disableForReducedMotion && preferLessMotion) {
        return promise(function(resolve) {
          resolve();
        });
      }
      if (isLibCanvas && animationObj) {
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }
      if (allowResize && !initialized) {
        resizer(canvas);
      }
      var size = {
        width: canvas.width,
        height: canvas.height
      };
      if (worker && !initialized) {
        worker.init(canvas);
      }
      initialized = true;
      if (worker) {
        canvas.__confetti_initialized = true;
      }
      function onResize() {
        if (worker) {
          var obj = {
            getBoundingClientRect: function() {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };
          resizer(obj);
          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }
        size.width = size.height = null;
      }
      function done() {
        animationObj = null;
        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener("resize", onResize);
        }
        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas);
          }
          canvas = null;
          initialized = false;
        }
      }
      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener("resize", onResize, false);
      }
      if (worker) {
        return worker.fire(options, size, done);
      }
      return fireLocal(options, size, done);
    }
    fire.reset = function() {
      if (worker) {
        worker.reset();
      }
      if (animationObj) {
        animationObj.reset();
      }
    };
    return fire;
  }
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }
  function transformPath2D(pathString, pathMatrix, x2, y2, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);
    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));
    var t2 = new Path2D();
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x2,
      y2
    ]));
    return t2;
  }
  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error("path confetti are not supported in this browser");
    }
    var path2, matrix;
    if (typeof pathData === "string") {
      path2 = pathData;
    } else {
      path2 = pathData.path;
      matrix = pathData.matrix;
    }
    var path2d = new Path2D(path2);
    var tempCanvas = document.createElement("canvas");
    var tempCtx = tempCanvas.getContext("2d");
    if (!matrix) {
      var maxSize = 1e3;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;
      for (var x2 = 0; x2 < maxSize; x2 += 2) {
        for (var y2 = 0; y2 < maxSize; y2 += 2) {
          if (tempCtx.isPointInPath(path2d, x2, y2, "nonzero")) {
            minX = Math.min(minX, x2);
            minY = Math.min(minY, y2);
            maxX = Math.max(maxX, x2);
            maxY = Math.max(maxY, y2);
          }
        }
      }
      width = maxX - minX;
      height = maxY - minY;
      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize / width, maxDesiredSize / height);
      matrix = [
        scale,
        0,
        0,
        scale,
        -Math.round(width / 2 + minX) * scale,
        -Math.round(height / 2 + minY) * scale
      ];
    }
    return {
      type: "path",
      path: path2,
      matrix
    };
  }
  function shapeFromText(textData) {
    var text, scalar = 1, color = "#000000", fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
    if (typeof textData === "string") {
      text = textData;
    } else {
      text = textData.text;
      scalar = "scalar" in textData ? textData.scalar : scalar;
      fontFamily = "fontFamily" in textData ? textData.fontFamily : fontFamily;
      color = "color" in textData ? textData.color : color;
    }
    var fontSize = 10 * scalar;
    var font = "" + fontSize + "px " + fontFamily;
    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext("2d");
    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);
    var padding = 2;
    var x2 = size.actualBoundingBoxLeft + padding;
    var y2 = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;
    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext("2d");
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(text, x2, y2);
    var scale = 1 / scalar;
    return {
      type: "bitmap",
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }
  module2.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module2.exports.reset = function() {
    getDefaultFire().reset();
  };
  module2.exports.create = confettiCannon;
  module2.exports.shapeFromPath = shapeFromPath;
  module2.exports.shapeFromText = shapeFromText;
})(function() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return this || {};
}(), module, false);
const confetti = module.exports;
module.exports.create;
function GameRoundPot({
  gameRoundId,
  gameState,
  currentRoundStatus,
  dataBank: dataBank2,
  setCurrentRoundStatus,
  setRoundResult
}) {
  const t2 = dataBank2.tLang;
  const tGeo = dataBank2.tGeo;
  const maxAttempts = 3;
  const [guessNum, setGuessNum] = reactExports.useState(1);
  const incGuessNum = () => {
    setGuessNum(guessNum + 1);
  };
  const [guesses, setGuesses] = reactExports.useState([]);
  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };
  const [currentGuess, setCurrentGuess] = reactExports.useState("");
  reactExports.useEffect(() => {
    setCurrentGuess("");
  }, [guesses]);
  function grade(guess) {
    if (sanitizeString(tGeo(gameState.potCode)) === sanitizeString(guess)) {
      return guesses.length === 0 ? GameRoundResult.Excellent : guesses.length === 1 ? GameRoundResult.Good : GameRoundResult.Fair;
    } else {
      return guesses.length === 0 ? GameRoundResult.NotStarted : GameRoundResult.Failed;
    }
  }
  const handleFormSubmission = (event) => {
    event.preventDefault();
    const guessedPot = dataBank2.getPotCodeByName(currentGuess, tGeo);
    if (guessedPot === "invalid") {
      toastError(t2("unknownPot"));
      return;
    }
    if (guesses.includes(guessedPot)) {
      toastError(t2("alreadyGuessed"));
      return;
    }
    if (guessedPot === gameState.potCode) {
      setTimeout(() => {
        setCurrentRoundStatus("won");
        const guessedItText = t2("guessedItList", {
          returnObjects: true
        });
        const randomText = guessedItText[Math.floor(Math.random() * guessedItText.length)];
        toastSuccess(randomText);
        confetti();
      }, SQUARE_ANIMATION_LENGTH * squares.length);
      setRoundResult(gameRoundId, grade(currentGuess));
      console.log("grade " + grade(currentGuess));
    } else if (guesses.length + 1 === maxAttempts) {
      setTimeout(() => {
        toastFailed(t2("failedIt"));
        setCurrentRoundStatus("lost");
      }, SQUARE_ANIMATION_LENGTH * squares.length);
      setRoundResult(gameRoundId, grade(currentGuess));
    }
    addGuess(guessedPot);
    setTimeout(() => {
      incGuessNum();
    }, SQUARE_ANIMATION_LENGTH * squares.length);
  };
  const handleGuessButtonClicked = () => {
    console.log("Guess button clicked.");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: dataBank2.getPotMapSvgUrl(gameState.potCode),
        alt: "silhouette of a province or territory",
        className: "max-h-52 m-auto my-5 transition-transform duration-700 ease-in dark:invert h-full"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "form",
      {
        onSubmit: handleFormSubmission,
        className: `flex flex-col py-0.5 ${currentRoundStatus !== "pending" ? "hidden" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-grow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AutoSuggestInput,
            {
              currentGuess,
              setCurrentGuess,
              placeholder: `${t2("province")}, ${t2("territory")}`,
              suggestionsArray: dataBank2.getPotNamesByLang(tGeo)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GuessButton,
            {
              handler: handleGuessButtonClicked,
              text: `${dataBank2.getGuessEmoji()} ${t2("guessVerb")}`
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Guesses,
      {
        currentRoundStatus,
        guesses,
        maxAttempts,
        solutionCode: gameState.potCode,
        guessNum,
        dataBank: dataBank2
      }
    )
  ] });
}
const warn = (...args) => {
  if (console == null ? void 0 : console.warn) {
    if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
    console.warn(...args);
  }
};
const alreadyWarned = {};
const warnOnce = (...args) => {
  if (isString(args[0]) && alreadyWarned[args[0]]) return;
  if (isString(args[0])) alreadyWarned[args[0]] = /* @__PURE__ */ new Date();
  warn(...args);
};
const loadedClb = (i18n, cb2) => () => {
  if (i18n.isInitialized) {
    cb2();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized);
      }, 0);
      cb2();
    };
    i18n.on("initialized", initialized);
  }
};
const loadNamespaces = (i18n, ns, cb2) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb2));
};
const loadLanguages = (i18n, lng, ns, cb2) => {
  if (isString(ns)) ns = [ns];
  ns.forEach((n2) => {
    if (i18n.options.ns.indexOf(n2) < 0) i18n.options.ns.push(n2);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb2));
};
const hasLoadedNamespace = (ns, i18n, options = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce("i18n.languages were undefined or empty", i18n.languages);
    return true;
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance2, loadNotPending) => {
      var _a;
      if (((_a = options.bindI18n) == null ? void 0 : _a.indexOf("languageChanging")) > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns)) return false;
    }
  });
};
const isString = (obj) => typeof obj === "string";
const isObject = (obj) => typeof obj === "object" && obj !== null;
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
const unescapeHtmlEntity = (m2) => htmlEntities[m2];
const unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
let defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape
};
const getDefaults$1 = () => defaultOptions;
let i18nInstance;
const getI18n = () => i18nInstance;
const I18nContext = reactExports.createContext();
class ReportNamespaces2 {
  constructor() {
    __publicField(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      var _a;
      (_a = this.usedNamespaces)[ns] ?? (_a[ns] = true);
    });
  }
}
const usePrevious = (value, ignore) => {
  const ref = reactExports.useRef();
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix) => reactExports.useCallback(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation = (ns, props = {}) => {
  var _a, _b, _c, _d;
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = reactExports.useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces2();
  if (!i18n) {
    warnOnce("You will need to pass in an i18next instance by using initReactI18next");
    const notReadyT = (k2, optsOrDefaultValue) => {
      if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
      if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k2) ? k2[k2.length - 1] : k2;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if ((_a = i18n.options.react) == null ? void 0 : _a.wait) warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i18nOptions = {
    ...getDefaults$1(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = ns || defaultNSFromContext || ((_b = i18n.options) == null ? void 0 : _b.defaultNS);
  namespaces = isString(namespaces) ? [namespaces] : namespaces || ["translation"];
  (_d = (_c = i18n.reportNamespaces).addUsedNamespaces) == null ? void 0 : _d.call(_c, namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n2) => hasLoadedNamespace(n2, i18n, i18nOptions));
  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
  const [t2, setT] = reactExports.useState(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = reactExports.useRef(true);
  reactExports.useEffect(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        loadNamespaces(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n) i18n == null ? void 0 : i18n.on(bindI18n, boundReset);
    if (bindI18nStore) i18n == null ? void 0 : i18n.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (i18n) bindI18n == null ? void 0 : bindI18n.split(" ").forEach((e2) => i18n.off(e2, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(" ").forEach((e2) => i18n.store.off(e2, boundReset));
    };
  }, [i18n, joinedNS]);
  reactExports.useEffect(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t2, i18n, ready];
  ret.t = t2;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise((resolve) => {
    if (props.lng) {
      loadLanguages(i18n, props.lng, namespaces, () => resolve());
    } else {
      loadNamespaces(i18n, namespaces, () => resolve());
    }
  });
};
function GameRoundFinale({ roundStats, dataBank: dataBank2 }) {
  const { t: t2 } = useTranslation();
  const { t: tGeo } = useTranslation("geo");
  const potCode = roundStats.potCode;
  const urlRoot = "https://wallace-interinactive.github.io/";
  const ourGames = ["provincle", "eirele", "varmegyle"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: dataBank2.getPotMapSvgUrl(roundStats.potCode),
        alt: "silhouette of a province or territory",
        className: "max-h-32 m-auto my-5 transition-transform duration-700 ease-in dark:invert h-full"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `my-span-3 text-black bg-${getColorOfStatus("won")}`,
          children: tGeo(potCode)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-6 gap-1 text-center py-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-guess-div col-start-2 col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "my-guess-p",
            href: dataBank2.getLinkUrlWikipedia(potCode),
            target: "_blank",
            children: "Wikipedia"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-guess-div col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "my-guess-p",
            href: dataBank2.getLinkUrlGoogleMaps(potCode),
            target: "_blank",
            children: "Google Maps"
          }
        ) })
      ] }),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Array.from(roundStats.rounds.entries()).map(([_2, stat], _i) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-1 text-center py-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-guess-open col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-guess-p", children: t2(stat.i18nId) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-guess-open", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "my-guess-p", children: mapGradeToEmoji.get(stat.result) ?? "-" }) })
        ] });
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-1 text-center py-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t2("gameTryOurOtherGames") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 text-center py-0.5", children: Array.from(ourGames).filter((game) => !window.location.href.includes(game)).map((game) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `text-black bg-${getColorOfStatus("won")} rounded-xl m-4`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `${urlRoot.replace(/\/$/, "")}/${game}`,
                  target: "_blank",
                  children: game
                }
              )
            }
          );
        }) })
      ] })
    ] })
  ] });
}
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o = e2.length;
    for (t2 = 0; t2 < o; t2++) e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++) (e2 = arguments[f2]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const c = (e2) => "number" == typeof e2 && !isNaN(e2), d = (e2) => "string" == typeof e2, u = (e2) => "function" == typeof e2, p = (e2) => d(e2) || u(e2) ? e2 : null, m = (e2) => reactExports$1.isValidElement(e2) || d(e2) || u(e2) || c(e2);
function f(e2, t2, n2) {
  void 0 === n2 && (n2 = 300);
  const { scrollHeight: o, style: s } = e2;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = o + "px", s.transition = `all ${n2}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t2, n2);
    });
  });
}
function g(t2) {
  let { enter: a, exit: r2, appendPosition: i = false, collapse: l2 = true, collapseDuration: c2 = 300 } = t2;
  return function(t3) {
    let { children: d2, position: u2, preventExitTransition: p2, done: m2, nodeRef: g2, isIn: y2, playToast: v2 } = t3;
    const h2 = i ? `${a}--${u2}` : a, T2 = i ? `${r2}--${u2}` : r2, E2 = reactExports$1.useRef(0);
    return reactExports$1.useLayoutEffect(() => {
      const e2 = g2.current, t4 = h2.split(" "), n2 = (o) => {
        o.target === g2.current && (v2(), e2.removeEventListener("animationend", n2), e2.removeEventListener("animationcancel", n2), 0 === E2.current && "animationcancel" !== o.type && e2.classList.remove(...t4));
      };
      e2.classList.add(...t4), e2.addEventListener("animationend", n2), e2.addEventListener("animationcancel", n2);
    }, []), reactExports$1.useEffect(() => {
      const e2 = g2.current, t4 = () => {
        e2.removeEventListener("animationend", t4), l2 ? f(e2, m2, c2) : m2();
      };
      y2 || (p2 ? t4() : (E2.current = 1, e2.className += ` ${T2}`, e2.addEventListener("animationend", t4)));
    }, [y2]), React.createElement(React.Fragment, null, d2);
  };
}
function y(e2, t2) {
  return null != e2 ? { content: e2.content, containerId: e2.props.containerId, id: e2.props.toastId, theme: e2.props.theme, type: e2.props.type, data: e2.props.data || {}, isLoading: e2.props.isLoading, icon: e2.props.icon, status: t2 } : {};
}
const v = /* @__PURE__ */ new Map();
let h = [];
const T = /* @__PURE__ */ new Set(), E = (e2) => T.forEach((t2) => t2(e2)), b = () => v.size > 0;
function I(e2, t2) {
  var n2;
  if (t2) return !(null == (n2 = v.get(t2)) || !n2.isToastActive(e2));
  let o = false;
  return v.forEach((t3) => {
    t3.isToastActive(e2) && (o = true);
  }), o;
}
function _(e2, t2) {
  m(e2) && (b() || h.push({ content: e2, options: t2 }), v.forEach((n2) => {
    n2.buildToast(e2, t2);
  }));
}
function C(e2, t2) {
  v.forEach((n2) => {
    null != t2 && null != t2 && t2.containerId ? (null == t2 ? void 0 : t2.containerId) === n2.id && n2.toggle(e2, null == t2 ? void 0 : t2.id) : n2.toggle(e2, null == t2 ? void 0 : t2.id);
  });
}
function L(e2) {
  const { subscribe: o, getSnapshot: s, setProps: i } = reactExports$1.useRef(function(e3) {
    const n2 = e3.containerId || 1;
    return { subscribe(o2) {
      const s2 = /* @__PURE__ */ function(e4, n3, o3) {
        let s3 = 1, r3 = 0, i2 = [], l3 = [], f2 = [], g2 = n3;
        const v2 = /* @__PURE__ */ new Map(), h2 = /* @__PURE__ */ new Set(), T2 = () => {
          f2 = Array.from(v2.values()), h2.forEach((e5) => e5());
        }, E2 = (e5) => {
          l3 = null == e5 ? [] : l3.filter((t2) => t2 !== e5), T2();
        }, b2 = (e5) => {
          const { toastId: n4, onOpen: s4, updateId: a, children: r4 } = e5.props, i3 = null == a;
          e5.staleId && v2.delete(e5.staleId), v2.set(n4, e5), l3 = [...l3, e5.props.toastId].filter((t2) => t2 !== e5.staleId), T2(), o3(y(e5, i3 ? "added" : "updated")), i3 && u(s4) && s4(reactExports$1.isValidElement(r4) && r4.props);
        };
        return { id: e4, props: g2, observe: (e5) => (h2.add(e5), () => h2.delete(e5)), toggle: (e5, t2) => {
          v2.forEach((n4) => {
            null != t2 && t2 !== n4.props.toastId || u(n4.toggle) && n4.toggle(e5);
          });
        }, removeToast: E2, toasts: v2, clearQueue: () => {
          r3 -= i2.length, i2 = [];
        }, buildToast: (n4, l4) => {
          if (((t2) => {
            let { containerId: n5, toastId: o4, updateId: s4 } = t2;
            const a = n5 ? n5 !== e4 : 1 !== e4, r4 = v2.has(o4) && null == s4;
            return a || r4;
          })(l4)) return;
          const { toastId: f3, updateId: h3, data: I2, staleId: _2, delay: C2 } = l4, L2 = () => {
            E2(f3);
          }, N2 = null == h3;
          N2 && r3++;
          const $2 = { ...g2, style: g2.toastStyle, key: s3++, ...Object.fromEntries(Object.entries(l4).filter((e5) => {
            let [t2, n5] = e5;
            return null != n5;
          })), toastId: f3, updateId: h3, data: I2, closeToast: L2, isIn: false, className: p(l4.className || g2.toastClassName), bodyClassName: p(l4.bodyClassName || g2.bodyClassName), progressClassName: p(l4.progressClassName || g2.progressClassName), autoClose: !l4.isLoading && (w2 = l4.autoClose, k2 = g2.autoClose, false === w2 || c(w2) && w2 > 0 ? w2 : k2), deleteToast() {
            const e5 = v2.get(f3), { onClose: n5, children: s4 } = e5.props;
            u(n5) && n5(reactExports$1.isValidElement(s4) && s4.props), o3(y(e5, "removed")), v2.delete(f3), r3--, r3 < 0 && (r3 = 0), i2.length > 0 ? b2(i2.shift()) : T2();
          } };
          var w2, k2;
          $2.closeButton = g2.closeButton, false === l4.closeButton || m(l4.closeButton) ? $2.closeButton = l4.closeButton : true === l4.closeButton && ($2.closeButton = !m(g2.closeButton) || g2.closeButton);
          let P2 = n4;
          reactExports$1.isValidElement(n4) && !d(n4.type) ? P2 = reactExports$1.cloneElement(n4, { closeToast: L2, toastProps: $2, data: I2 }) : u(n4) && (P2 = n4({ closeToast: L2, toastProps: $2, data: I2 }));
          const M2 = { content: P2, props: $2, staleId: _2 };
          g2.limit && g2.limit > 0 && r3 > g2.limit && N2 ? i2.push(M2) : c(C2) ? setTimeout(() => {
            b2(M2);
          }, C2) : b2(M2);
        }, setProps(e5) {
          g2 = e5;
        }, setToggle: (e5, t2) => {
          v2.get(e5).toggle = t2;
        }, isToastActive: (e5) => l3.some((t2) => t2 === e5), getSnapshot: () => g2.newestOnTop ? f2.reverse() : f2 };
      }(n2, e3, E);
      v.set(n2, s2);
      const r2 = s2.observe(o2);
      return h.forEach((e4) => _(e4.content, e4.options)), h = [], () => {
        r2(), v.delete(n2);
      };
    }, setProps(e4) {
      var t2;
      null == (t2 = v.get(n2)) || t2.setProps(e4);
    }, getSnapshot() {
      var e4;
      return null == (e4 = v.get(n2)) ? void 0 : e4.getSnapshot();
    } };
  }(e2)).current;
  i(e2);
  const l2 = reactExports$1.useSyncExternalStore(o, s, s);
  return { getToastToRender: function(e3) {
    if (!l2) return [];
    const t2 = /* @__PURE__ */ new Map();
    return l2.forEach((e4) => {
      const { position: n2 } = e4.props;
      t2.has(n2) || t2.set(n2, []), t2.get(n2).push(e4);
    }), Array.from(t2, (t3) => e3(t3[0], t3[1]));
  }, isToastActive: I, count: null == l2 ? void 0 : l2.length };
}
function N(e2) {
  const [t2, o] = reactExports$1.useState(false), [a, r2] = reactExports$1.useState(false), l2 = reactExports$1.useRef(null), c2 = reactExports$1.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, didMove: false }).current, { autoClose: d2, pauseOnHover: u2, closeToast: p2, onClick: m2, closeOnClick: f2 } = e2;
  var g2, y2;
  function h2() {
    o(true);
  }
  function T2() {
    o(false);
  }
  function E2(n2) {
    const o2 = l2.current;
    c2.canDrag && o2 && (c2.didMove = true, t2 && T2(), c2.delta = "x" === e2.draggableDirection ? n2.clientX - c2.start : n2.clientY - c2.start, c2.start !== n2.clientX && (c2.canCloseOnClick = false), o2.style.transform = `translate3d(${"x" === e2.draggableDirection ? `${c2.delta}px, var(--y)` : `0, calc(${c2.delta}px + var(--y))`},0)`, o2.style.opacity = "" + (1 - Math.abs(c2.delta / c2.removalDistance)));
  }
  function b2() {
    document.removeEventListener("pointermove", E2), document.removeEventListener("pointerup", b2);
    const t3 = l2.current;
    if (c2.canDrag && c2.didMove && t3) {
      if (c2.canDrag = false, Math.abs(c2.delta) > c2.removalDistance) return r2(true), e2.closeToast(), void e2.collapseAll();
      t3.style.transition = "transform 0.2s, opacity 0.2s", t3.style.removeProperty("transform"), t3.style.removeProperty("opacity");
    }
  }
  null == (y2 = v.get((g2 = { id: e2.toastId, containerId: e2.containerId, fn: o }).containerId || 1)) || y2.setToggle(g2.id, g2.fn), reactExports$1.useEffect(() => {
    if (e2.pauseOnFocusLoss) return document.hasFocus() || T2(), window.addEventListener("focus", h2), window.addEventListener("blur", T2), () => {
      window.removeEventListener("focus", h2), window.removeEventListener("blur", T2);
    };
  }, [e2.pauseOnFocusLoss]);
  const I2 = { onPointerDown: function(t3) {
    if (true === e2.draggable || e2.draggable === t3.pointerType) {
      c2.didMove = false, document.addEventListener("pointermove", E2), document.addEventListener("pointerup", b2);
      const n2 = l2.current;
      c2.canCloseOnClick = true, c2.canDrag = true, n2.style.transition = "none", "x" === e2.draggableDirection ? (c2.start = t3.clientX, c2.removalDistance = n2.offsetWidth * (e2.draggablePercent / 100)) : (c2.start = t3.clientY, c2.removalDistance = n2.offsetHeight * (80 === e2.draggablePercent ? 1.5 * e2.draggablePercent : e2.draggablePercent) / 100);
    }
  }, onPointerUp: function(t3) {
    const { top: n2, bottom: o2, left: s, right: a2 } = l2.current.getBoundingClientRect();
    "touchend" !== t3.nativeEvent.type && e2.pauseOnHover && t3.clientX >= s && t3.clientX <= a2 && t3.clientY >= n2 && t3.clientY <= o2 ? T2() : h2();
  } };
  return d2 && u2 && (I2.onMouseEnter = T2, e2.stacked || (I2.onMouseLeave = h2)), f2 && (I2.onClick = (e3) => {
    m2 && m2(e3), c2.canCloseOnClick && p2();
  }), { playToast: h2, pauseToast: T2, isRunning: t2, preventExitTransition: a, toastRef: l2, eventHandlers: I2 };
}
function $(t2) {
  let { delay: n2, isRunning: o, closeToast: s, type: a = "default", hide: r2, className: i, style: c2, controlledProgress: d2, progress: p2, rtl: m2, isIn: f2, theme: g2 } = t2;
  const y2 = r2 || d2 && 0 === p2, v2 = { ...c2, animationDuration: `${n2}ms`, animationPlayState: o ? "running" : "paused" };
  d2 && (v2.transform = `scaleX(${p2})`);
  const h2 = clsx("Toastify__progress-bar", d2 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g2}`, `Toastify__progress-bar--${a}`, { "Toastify__progress-bar--rtl": m2 }), T2 = u(i) ? i({ rtl: m2, type: a, defaultClassName: h2 }) : clsx(h2, i), E2 = { [d2 && p2 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: d2 && p2 < 1 ? null : () => {
    f2 && s();
  } };
  return React.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": y2 }, React.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g2} Toastify__progress-bar--${a}` }), React.createElement("div", { role: "progressbar", "aria-hidden": y2 ? "true" : "false", "aria-label": "notification timer", className: T2, style: v2, ...E2 }));
}
let w = 1;
const k = () => "" + w++;
function P(e2) {
  return e2 && (d(e2.toastId) || c(e2.toastId)) ? e2.toastId : k();
}
function M(e2, t2) {
  return _(e2, t2), t2.toastId;
}
function x(e2, t2) {
  return { ...t2, type: t2 && t2.type || e2, toastId: P(t2) };
}
function A(e2) {
  return (t2, n2) => M(t2, x(e2, n2));
}
function B(e2, t2) {
  return M(e2, x("default", t2));
}
B.loading = (e2, t2) => M(e2, x("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...t2 })), B.promise = function(e2, t2, n2) {
  let o, { pending: s, error: a, success: r2 } = t2;
  s && (o = d(s) ? B.loading(s, n2) : B.loading(s.render, { ...n2, ...s }));
  const i = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l2 = (e3, t3, s2) => {
    if (null == t3) return void B.dismiss(o);
    const a2 = { type: e3, ...i, ...n2, data: s2 }, r3 = d(t3) ? { render: t3 } : t3;
    return o ? B.update(o, { ...a2, ...r3 }) : B(r3.render, { ...a2, ...r3 }), s2;
  }, c2 = u(e2) ? e2() : e2;
  return c2.then((e3) => l2("success", r2, e3)).catch((e3) => l2("error", a, e3)), c2;
}, B.success = A("success"), B.info = A("info"), B.error = A("error"), B.warning = A("warning"), B.warn = B.warning, B.dark = (e2, t2) => M(e2, x("default", { theme: "dark", ...t2 })), B.dismiss = function(e2) {
  !function(e3) {
    var t2;
    if (b()) {
      if (null == e3 || d(t2 = e3) || c(t2)) v.forEach((t3) => {
        t3.removeToast(e3);
      });
      else if (e3 && ("containerId" in e3 || "id" in e3)) {
        const t3 = v.get(e3.containerId);
        t3 ? t3.removeToast(e3.id) : v.forEach((t4) => {
          t4.removeToast(e3.id);
        });
      }
    } else h = h.filter((t3) => null != e3 && t3.options.toastId !== e3);
  }(e2);
}, B.clearWaitingQueue = function(e2) {
  void 0 === e2 && (e2 = {}), v.forEach((t2) => {
    !t2.props.limit || e2.containerId && t2.id !== e2.containerId || t2.clearQueue();
  });
}, B.isActive = I, B.update = function(e2, t2) {
  void 0 === t2 && (t2 = {});
  const n2 = ((e3, t3) => {
    var n3;
    let { containerId: o } = t3;
    return null == (n3 = v.get(o || 1)) ? void 0 : n3.toasts.get(e3);
  })(e2, t2);
  if (n2) {
    const { props: o, content: s } = n2, a = { delay: 100, ...o, ...t2, toastId: t2.toastId || e2, updateId: k() };
    a.toastId !== e2 && (a.staleId = e2);
    const r2 = a.render || s;
    delete a.render, M(r2, a);
  }
}, B.done = (e2) => {
  B.update(e2, { progress: 1 });
}, B.onChange = function(e2) {
  return T.add(e2), () => {
    T.delete(e2);
  };
}, B.play = (e2) => C(true, e2), B.pause = (e2) => C(false, e2);
const O = "undefined" != typeof window ? reactExports$1.useLayoutEffect : reactExports$1.useEffect, D = (t2) => {
  let { theme: n2, type: o, isLoading: s, ...a } = t2;
  return React.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: "colored" === n2 ? "currentColor" : `var(--toastify-icon-color-${o})`, ...a });
}, z = { info: function(t2) {
  return React.createElement(D, { ...t2 }, React.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t2) {
  return React.createElement(D, { ...t2 }, React.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t2) {
  return React.createElement(D, { ...t2 }, React.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t2) {
  return React.createElement(D, { ...t2 }, React.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return React.createElement("div", { className: "Toastify__spinner" });
} }, R = (n2) => {
  const { isRunning: o, preventExitTransition: s, toastRef: r2, eventHandlers: i, playToast: c2 } = N(n2), { closeButton: d2, children: p2, autoClose: m2, onClick: f2, type: g2, hideProgressBar: y2, closeToast: v2, transition: h2, position: T2, className: E2, style: b2, bodyClassName: I2, bodyStyle: _2, progressClassName: C2, progressStyle: L2, updateId: w2, role: k2, progress: P2, rtl: M2, toastId: x2, deleteToast: A2, isIn: B2, isLoading: O2, closeOnClick: D2, theme: R2 } = n2, S2 = clsx("Toastify__toast", `Toastify__toast-theme--${R2}`, `Toastify__toast--${g2}`, { "Toastify__toast--rtl": M2 }, { "Toastify__toast--close-on-click": D2 }), H2 = u(E2) ? E2({ rtl: M2, position: T2, type: g2, defaultClassName: S2 }) : clsx(S2, E2), F2 = function(e2) {
    let { theme: n3, type: o2, isLoading: s2, icon: r3 } = e2, i2 = null;
    const l2 = { theme: n3, type: o2 };
    return false === r3 || (u(r3) ? i2 = r3({ ...l2, isLoading: s2 }) : reactExports$1.isValidElement(r3) ? i2 = reactExports$1.cloneElement(r3, l2) : s2 ? i2 = z.spinner() : ((e3) => e3 in z)(o2) && (i2 = z[o2](l2))), i2;
  }(n2), X2 = !!P2 || !m2, Y2 = { closeToast: v2, type: g2, theme: R2 };
  let q2 = null;
  return false === d2 || (q2 = u(d2) ? d2(Y2) : reactExports$1.isValidElement(d2) ? reactExports$1.cloneElement(d2, Y2) : function(t2) {
    let { closeToast: n3, theme: o2, ariaLabel: s2 = "close" } = t2;
    return React.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o2}`, type: "button", onClick: (e2) => {
      e2.stopPropagation(), n3(e2);
    }, "aria-label": s2 }, React.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, React.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }(Y2)), React.createElement(h2, { isIn: B2, done: A2, position: T2, preventExitTransition: s, nodeRef: r2, playToast: c2 }, React.createElement("div", { id: x2, onClick: f2, "data-in": B2, className: H2, ...i, style: b2, ref: r2 }, React.createElement("div", { ...B2 && { role: k2 }, className: u(I2) ? I2({ type: g2 }) : clsx("Toastify__toast-body", I2), style: _2 }, null != F2 && React.createElement("div", { className: clsx("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !O2 }) }, F2), React.createElement("div", null, p2)), q2, React.createElement($, { ...w2 && !X2 ? { key: `pb-${w2}` } : {}, rtl: M2, theme: R2, delay: m2, isRunning: o, isIn: B2, closeToast: v2, hide: y2, type: g2, style: L2, className: C2, controlledProgress: X2, progress: P2 || 0 })));
}, S = function(e2, t2) {
  return void 0 === t2 && (t2 = false), { enter: `Toastify--animate Toastify__${e2}-enter`, exit: `Toastify--animate Toastify__${e2}-exit`, appendPosition: t2 };
}, H = g(S("bounce", true));
g(S("slide", true));
g(S("zoom"));
g(S("flip"));
const q = { position: "top-right", transition: H, autoClose: 5e3, closeButton: true, pauseOnHover: true, pauseOnFocusLoss: true, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
function Q(t2) {
  let o = { ...q, ...t2 };
  const s = t2.stacked, [a, r2] = reactExports$1.useState(true), c2 = reactExports$1.useRef(null), { getToastToRender: d2, isToastActive: m2, count: f2 } = L(o), { className: g2, style: y2, rtl: v2, containerId: h2 } = o;
  function T2(e2) {
    const t3 = clsx("Toastify__toast-container", `Toastify__toast-container--${e2}`, { "Toastify__toast-container--rtl": v2 });
    return u(g2) ? g2({ position: e2, rtl: v2, defaultClassName: t3 }) : clsx(t3, p(g2));
  }
  function E2() {
    s && (r2(true), B.play());
  }
  return O(() => {
    if (s) {
      var e2;
      const t3 = c2.current.querySelectorAll('[data-in="true"]'), n2 = 12, s2 = null == (e2 = o.position) ? void 0 : e2.includes("top");
      let r3 = 0, i = 0;
      Array.from(t3).reverse().forEach((e3, t4) => {
        const o2 = e3;
        o2.classList.add("Toastify__toast--stacked"), t4 > 0 && (o2.dataset.collapsed = `${a}`), o2.dataset.pos || (o2.dataset.pos = s2 ? "top" : "bot");
        const l2 = r3 * (a ? 0.2 : 1) + (a ? 0 : n2 * t4);
        o2.style.setProperty("--y", `${s2 ? l2 : -1 * l2}px`), o2.style.setProperty("--g", `${n2}`), o2.style.setProperty("--s", "" + (1 - (a ? i : 0))), r3 += o2.offsetHeight, i += 0.025;
      });
    }
  }, [a, f2, s]), React.createElement("div", { ref: c2, className: "Toastify", id: h2, onMouseEnter: () => {
    s && (r2(false), B.pause());
  }, onMouseLeave: E2 }, d2((t3, n2) => {
    const o2 = n2.length ? { ...y2 } : { ...y2, pointerEvents: "none" };
    return React.createElement("div", { className: T2(t3), style: o2, key: `container-${t3}` }, n2.map((t4) => {
      let { content: n3, props: o3 } = t4;
      return React.createElement(R, { ...o3, stacked: s, collapseAll: E2, isIn: m2(o3.toastId, o3.containerId), style: o3.style, key: `toast-${o3.key}` }, n3);
    }));
  }));
}
function NextRoundButton({
  currentRound,
  currentRoundStatus,
  handleNextButtonClicked,
  handleGiveUpButtonClicked,
  giveUpCnt,
  dataBank: dataBank2
}) {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "container flex flex-col items-center mt-4",
      "data-testid": "next-round-btn-wrapper-div",
      children: currentRoundStatus !== "pending" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleNextButtonClicked,
          className: "w-full rounded-xl flex-shrink-0 font-medium px-4 py-2 bg-custom-green-1 hover:bg-green-700",
          "data-testid": "next-round-btn-finished",
          children: dataBank2.getGuessEmoji() + " " + t2("nextRound")
        }
      ) : currentRound > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleGiveUpButtonClicked,
          className: "rounded-xl flex-shrink-0 font-medium px-4 py-2 text-black bg-custom-light-blue-2",
          "data-testid": "give-up-btn",
          children: giveUpCnt === 0 ? `🤷‍♀️ ${t2("giveUp")}` : `️🙀 ${t2("areYouSure")}?`
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {})
    }
  );
}
function initGameState() {
  const ret = defaultGameState;
  ret.potCode = getTodaysPotCode();
  console.log(`init: potcode:${ret.potCode}`);
  ret.rounds.set("pot", { i18nId: "gamePotRoundInstruction", result: GameRoundResult.NotStarted });
  console.log(`init1: potcode:${ret.potCode}`);
  ret.rounds.set("capital", { i18nId: "gameCapitalRoundInstruction", result: GameRoundResult.NotStarted });
  console.log(`init2: potcode:${ret.potCode}`);
  ret.rounds.set("neighbors", { i18nId: "gameNeighborRoundInstruction", result: GameRoundResult.NotStarted });
  console.log(`init3: potcode:${ret.potCode}`);
  return ret;
}
function Game() {
  const [gameState, setGameState] = reactExports$1.useState(() => initGameState());
  console.log(`lovas2`);
  dataBank.tLang = useTranslation$1().t;
  dataBank.tGeo = useTranslation$1("geo").t;
  dataBank.getPotMapSvgUrl = getPotMapSvgUrl;
  console.log(`lovas3`);
  const updateGameState = (key, val) => {
    setGameState((prevState) => ({
      ...prevState,
      [key]: val
    }));
  };
  console.log(`lovas4`);
  const setCurrentRound = (newCurrentRound) => {
    updateGameState("currentRound", newCurrentRound);
  };
  function getRoundStat(id2) {
    console.log(`rounds ${typeof gameState.rounds} ==> ${gameState.rounds} ${Array.from(gameState.rounds.entries())}`);
    return gameState.rounds.get(id2) ?? { i18nId: "na", result: GameRoundResult.NotStarted };
  }
  const setRoundResult = (roundId, result) => {
    console.log(`set ${roundId} ==> ${result}`);
    const newState = gameState;
    newState.rounds.set(roundId, {
      ...getRoundStat(roundId),
      // ...newState.rounds.get(roundId),
      result
    });
    setGameState(newState);
  };
  console.log(`lovas5`);
  const { potCode, currentRound } = gameState;
  const [giveupCnt, setGiveupCnt] = reactExports$1.useState(0);
  console.log(`lovas6`);
  const [currentRoundStatus, setCurrentRoundStatus] = reactExports$1.useState("pending");
  console.log(`lovas7`);
  const handleNextButtonClicked = () => {
    console.log("Next button clicked.");
    setCurrentRound(currentRound + 1);
    setCurrentRoundStatus("pending");
    B.dismiss();
    console.log(`lovas: round: ${currentRound}, status: ${currentRoundStatus}`);
  };
  const handleGiveUpButtonClicked = () => {
    console.log("GiveUp button clicked.");
    if (giveupCnt >= 1) {
      setGiveupCnt(0);
      handleNextButtonClicked();
    } else {
      setGiveupCnt(giveupCnt + 1);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports$1.jsxs(jsxRuntimeExports$1.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports$1.jsx("div", { children: currentRound === 1 ? /* @__PURE__ */ jsxRuntimeExports$1.jsx(
      GameRoundPot,
      {
        gameRoundId: "pot",
        gameState,
        currentRoundStatus,
        dataBank,
        setCurrentRoundStatus,
        setRoundResult
      }
    ) : (
      // ) : currentRound === 4 ? (
      //   <GameRoundFlag
      //     gameRoundId="flag"
      //     gameState={gameState}
      //     currentRoundStatus={currentRoundStatus}
      //     setCurrentRoundStatus={setCurrentRoundStatus}
      //     setRoundResult={setRoundResult}
      //   />
      /* @__PURE__ */ jsxRuntimeExports$1.jsx(
        GameRoundFinale,
        {
          roundStats: gameState,
          dataBank
        }
      )
    ) }),
    currentRound <= gameState.rounds.size ? /* @__PURE__ */ jsxRuntimeExports$1.jsx(
      NextRoundButton,
      {
        currentRound,
        currentRoundStatus,
        giveUpCnt: giveupCnt,
        handleGiveUpButtonClicked,
        handleNextButtonClicked,
        dataBank
      }
    ) : /* @__PURE__ */ jsxRuntimeExports$1.jsx("div", {})
  ] });
}
const consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    if (console && console[type]) console[type].apply(console, args);
  }
};
class Logger {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug) return null;
    if (typeof args[0] === "string") args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
}
var baseLogger = new Logger();
class EventEmitter {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event]) return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach((_ref) => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach((_ref2) => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
}
const defer = () => {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
const makeString = (object) => {
  if (object == null) return "";
  return "" + object;
};
const copy = (a, s, t2) => {
  a.forEach((m2) => {
    if (s[m2]) t2[m2] = s[m2];
  });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = (key) => key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
const canNotTraverseDeeper = (object) => !object || typeof object === "string";
const getLastOfPath = (object, path2, Empty) => {
  const stack = typeof path2 !== "string" ? path2 : path2.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper(object)) return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper(object)) return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
};
const setPath = (object, path2, newValue) => {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path2, Object);
  if (obj !== void 0 || path2.length === 1) {
    obj[k2] = newValue;
    return;
  }
  let e2 = path2[path2.length - 1];
  let p2 = path2.slice(0, path2.length - 1);
  let last = getLastOfPath(object, p2, Object);
  while (last.obj === void 0 && p2.length) {
    e2 = `${p2[p2.length - 1]}.${e2}`;
    p2 = p2.slice(0, p2.length - 1);
    last = getLastOfPath(object, p2, Object);
    if (last && last.obj && typeof last.obj[`${last.k}.${e2}`] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj[`${last.k}.${e2}`] = newValue;
};
const pushPath = (object, path2, newValue, concat) => {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path2, Object);
  obj[k2] = obj[k2] || [];
  obj[k2].push(newValue);
};
const getPath = (object, path2) => {
  const {
    obj,
    k: k2
  } = getLastOfPath(object, path2);
  if (!obj) return void 0;
  return obj[k2];
};
const getPathWithDefaults = (data, defaultData, key) => {
  const value = getPath(data, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite) => {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite) target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
};
const regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const escape = (data) => {
  if (typeof data === "string") {
    return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data;
};
class RegExpCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
}
const chars = [" ", ",", "?", "!", ";"];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c2) => nsSeparator.indexOf(c2) < 0 && keySeparator.indexOf(c2) < 0);
  if (possibleChars.length === 0) return true;
  const r2 = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c2) => c2 === "?" ? "\\?" : c2).join("|")})`);
  let matched = !r2.test(key);
  if (!matched) {
    const ki2 = key.indexOf(keySeparator);
    if (ki2 > 0 && !r2.test(key.substring(0, ki2))) {
      matched = true;
    }
  }
  return matched;
};
const deepFind = function(obj, path2) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj) return void 0;
  if (obj[path2]) return obj[path2];
  const tokens = path2.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
};
const getCleanedCode = (code) => {
  if (code && code.indexOf("_") > 0) return code.replace("_", "-");
  return code;
};
class ResourceStore extends EventEmitter {
  constructor(data) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path2;
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
    } else {
      path2 = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path2.push(...key);
        } else if (typeof key === "string" && keySeparator) {
          path2.push(...key.split(keySeparator));
        } else {
          path2.push(key);
        }
      }
    }
    const result = getPath(this.data, path2);
    if (!result && !ns && !key && lng.indexOf(".") > -1) {
      lng = path2[0];
      ns = path2[1];
      key = path2.slice(2).join(".");
    }
    if (result || !ignoreJSONStructure || typeof key !== "string") return result;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path2 = [lng, ns];
    if (key) path2 = path2.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      value = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path2, value);
    if (!options.silent) this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m2 in resources) {
      if (typeof resources[m2] === "string" || Array.isArray(resources[m2])) this.addResource(lng, ns, m2, resources[m2], {
        silent: true
      });
    }
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  addResourceBundle(lng, ns, resources, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path2 = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path2 = lng.split(".");
      deep = resources;
      resources = ns;
      ns = path2[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path2) || {};
    if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
    if (deep) {
      deepExtend(pack, resources, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources
      };
    }
    setPath(this.data, path2, pack);
    if (!options.silent) this.emit("added", lng, ns, resources);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns) ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === "v1") return {
      ...{},
      ...this.getResource(lng, ns)
    };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data = this.getDataByLanguage(lng);
    const n2 = data && Object.keys(data) || [];
    return !!n2.find((v2) => data[v2] && Object.keys(data[v2]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var postProcessor = {
  processors: {},
  addPostProcessor(module2) {
    this.processors[module2.name] = module2;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      if (this.processors[processor]) value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
const checkedLoadedFor = {};
class Translator extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng) this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key === void 0 || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0) nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m2 = key.match(this.interpolator.nestingRegexp);
      if (m2 && m2.length > 0) {
        return {
          key,
          namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === "string") namespaces = [namespaces];
    return {
      key,
      namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object") options = {
      ...options
    };
    if (!options) options = {};
    if (keys === void 0 || keys === null) return "";
    if (!Array.isArray(keys)) keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r2 = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r2;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r2;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(res);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m2 in res) {
          if (Object.prototype.hasOwnProperty.call(res, m2)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m2}`;
            copy2[m2] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy2[m2] === deepKey) copy2[m2] = res[m2];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res) res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : "";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk2 = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk2 && fk2.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l2, k2, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l2, namespace, k2, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l2, namespace, k2, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l2, namespace, k2, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language) => {
              const suffixes = this.pluralResolver.getSuffixes(language, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== "v1") {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation) this.interpolator.init({
        ...options,
        ...{
          interpolation: {
            ...this.options.interpolation,
            ...options.interpolation
          }
        }
      });
      const skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb2 = res.match(this.interpolator.nestingRegexp);
        nestBef = nb2 && nb2.length;
      }
      let data = options.replace && typeof options.replace !== "string" ? options.replace : options;
      if (this.options.interpolation.defaultVariables) data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
      res = this.interpolator.interpolate(res, data, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft) options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== "v1" && resolved && resolved.res) options.lng = this.language || resolved.usedLng;
      if (options.nest !== false) res = this.interpolator.nest(res, function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (lastKey && lastKey[0] === args[0] && !options.context) {
          _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
          return null;
        }
        return _this.translate(...args, key);
      }, options);
      if (options.interpolation) this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
    if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (typeof keys === "string") keys = [keys];
    keys.forEach((k2) => {
      if (this.isValidLookup(found)) return;
      const extracted = this.extractFromKey(k2, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found)) return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found)) return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && typeof options.replace !== "string";
    let data = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data = {
        ...this.options.interpolation.defaultVariables,
        ...data
      };
    }
    if (!useOptionsReplaceForData) {
      data = {
        ...data
      };
      for (const key of optionsKeys) {
        delete data[key];
      }
    }
    return data;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
}
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
class LanguageUtil {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return null;
    const p2 = code.split("-");
    if (p2.length === 2) return null;
    p2.pop();
    if (p2[p2.length - 1].toLowerCase() === "x") return null;
    return this.formatLanguageCode(p2.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0) return code;
    const p2 = code.split("-");
    return this.formatLanguageCode(p2[0]);
  }
  formatLanguageCode(code) {
    if (typeof code === "string" && code.indexOf("-") > -1) {
      const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let p2 = code.split("-");
      if (this.options.lowerCaseLng) {
        p2 = p2.map((part) => part.toLowerCase());
      } else if (p2.length === 2) {
        p2[0] = p2[0].toLowerCase();
        p2[1] = p2[1].toUpperCase();
        if (specialCases.indexOf(p2[1].toLowerCase()) > -1) p2[1] = capitalize(p2[1].toLowerCase());
      } else if (p2.length === 3) {
        p2[0] = p2[0].toLowerCase();
        if (p2[1].length === 2) p2[1] = p2[1].toUpperCase();
        if (p2[0] !== "sgn" && p2[2].length === 2) p2[2] = p2[2].toUpperCase();
        if (specialCases.indexOf(p2[1].toLowerCase()) > -1) p2[1] = capitalize(p2[1].toLowerCase());
        if (specialCases.indexOf(p2[2].toLowerCase()) > -1) p2[2] = capitalize(p2[2].toLowerCase());
      }
      return p2.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes) return null;
    let found;
    codes.forEach((code) => {
      if (found) return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found) return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly)) return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly) return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0) return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly) return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
        });
      });
    }
    if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks) return [];
    if (typeof fallbacks === "function") fallbacks = fallbacks(code);
    if (typeof fallbacks === "string") fallbacks = [fallbacks];
    if (Array.isArray(fallbacks)) return fallbacks;
    if (!code) return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found) found = fallbacks[this.formatLanguageCode(code)];
    if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found) found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c2) => {
      if (!c2) return;
      if (this.isSupportedCode(c2)) {
        codes.push(c2);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c2}`);
      }
    };
    if (typeof code === "string" && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === "string") {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc2) => {
      if (codes.indexOf(fc2) < 0) addCode(this.formatLanguageCode(fc2));
    });
    return codes;
  }
}
let sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
let _rulesPluralsTypes = {
  1: (n2) => Number(n2 > 1),
  2: (n2) => Number(n2 != 1),
  3: (n2) => 0,
  4: (n2) => Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2),
  5: (n2) => Number(n2 == 0 ? 0 : n2 == 1 ? 1 : n2 == 2 ? 2 : n2 % 100 >= 3 && n2 % 100 <= 10 ? 3 : n2 % 100 >= 11 ? 4 : 5),
  6: (n2) => Number(n2 == 1 ? 0 : n2 >= 2 && n2 <= 4 ? 1 : 2),
  7: (n2) => Number(n2 == 1 ? 0 : n2 % 10 >= 2 && n2 % 10 <= 4 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2),
  8: (n2) => Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 != 8 && n2 != 11 ? 2 : 3),
  9: (n2) => Number(n2 >= 2),
  10: (n2) => Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 < 7 ? 2 : n2 < 11 ? 3 : 4),
  11: (n2) => Number(n2 == 1 || n2 == 11 ? 0 : n2 == 2 || n2 == 12 ? 1 : n2 > 2 && n2 < 20 ? 2 : 3),
  12: (n2) => Number(n2 % 10 != 1 || n2 % 100 == 11),
  13: (n2) => Number(n2 !== 0),
  14: (n2) => Number(n2 == 1 ? 0 : n2 == 2 ? 1 : n2 == 3 ? 2 : 3),
  15: (n2) => Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 % 10 >= 2 && (n2 % 100 < 10 || n2 % 100 >= 20) ? 1 : 2),
  16: (n2) => Number(n2 % 10 == 1 && n2 % 100 != 11 ? 0 : n2 !== 0 ? 1 : 2),
  17: (n2) => Number(n2 == 1 || n2 % 10 == 1 && n2 % 100 != 11 ? 0 : 1),
  18: (n2) => Number(n2 == 0 ? 0 : n2 == 1 ? 1 : 2),
  19: (n2) => Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 1 && n2 % 100 < 11 ? 1 : n2 % 100 > 10 && n2 % 100 < 20 ? 2 : 3),
  20: (n2) => Number(n2 == 1 ? 0 : n2 == 0 || n2 % 100 > 0 && n2 % 100 < 20 ? 1 : 2),
  21: (n2) => Number(n2 % 100 == 1 ? 1 : n2 % 100 == 2 ? 2 : n2 % 100 == 3 || n2 % 100 == 4 ? 3 : 0),
  22: (n2) => Number(n2 == 1 ? 0 : n2 == 2 ? 1 : (n2 < 0 || n2 > 10) && n2 % 10 == 0 ? 2 : 3)
};
const nonIntlVersions = ["v1", "v2", "v3"];
const intlVersions = ["v4"];
const suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
const createRules = () => {
  const rules = {};
  sets.forEach((set) => {
    set.lngs.forEach((l2) => {
      rules[l2] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
};
class PluralResolver {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
    this.pluralRulesCache = {};
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      try {
        const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
        const type = options.ordinal ? "ordinal" : "cardinal";
        const cacheKey = JSON.stringify({
          cleanedCode,
          type
        });
        if (cacheKey in this.pluralRulesCache) {
          return this.pluralRulesCache[cacheKey];
        }
        const rule = new Intl.PluralRules(cleanedCode, {
          type
        });
        this.pluralRulesCache[cacheKey] = rule;
        return rule;
      } catch (err) {
        return;
      }
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
    }
    return rule.numbers.map((number) => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return "";
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = "plural";
      } else if (suffix === 1) {
        suffix = "";
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === "v1") {
      if (suffix === 1) return "";
      if (typeof suffix === "number") return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === "v2") {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
}
const deepFindWithDefaults = function(data, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path2 = getPathWithDefaults(data, defaultData, key);
  if (!path2 && ignoreJSONStructure && typeof key === "string") {
    path2 = deepFind(data, key, keySeparator);
    if (path2 === void 0) path2 = deepFind(defaultData, key, keySeparator);
  }
  return path2;
};
const regexSafe = (val) => val.replace(/\$/g, "$$$$");
class Interpolator {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation) options.interpolation = {
      escapeValue: true
    };
    const {
      escape: escape$12,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$12 !== void 0 ? escape$12 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options) this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp && existingRegExp.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data, lng, options) {
    let match;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path2 = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path2, void 0, lng, {
          ...options,
          ...data,
          interpolationkey: key
        }) : path2;
      }
      const p2 = key.split(this.formatSeparator);
      const k2 = p2.shift().trim();
      const f2 = p2.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data, defaultData, k2, this.options.keySeparator, this.options.ignoreJSONStructure), f2, lng, {
        ...options,
        ...data,
        interpolationkey: k2
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match = todo.regex.exec(str)) {
        const matchedVar = match[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === "string" ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (typeof value !== "string" && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc2) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match;
    let value;
    let clonedOptions;
    const handleHasOptions = (key, inheritedOptions) => {
      const sep = this.nestingOptionsSeparator;
      if (key.indexOf(sep) < 0) return key;
      const c2 = key.split(new RegExp(`${sep}[ ]*{`));
      let optionsString = `{${c2[1]}`;
      key = c2[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions) clonedOptions = {
          ...inheritedOptions,
          ...clonedOptions
        };
      } catch (e2) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e2);
        return `${key}${sep}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
      return key;
    };
    while (match = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
        const r2 = match[1].split(this.formatSeparator).map((elem) => elem.trim());
        match[1] = r2.shift();
        formatters = r2;
        doReduce = true;
      }
      value = fc2(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
      if (value && match[0] === str && typeof value !== "string") return value;
      if (typeof value !== "string") value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v2, f2) => this.format(v2, f2, options.lng, {
          ...options,
          interpolationkey: match[1].trim()
        }), value.trim());
      }
      str = str.replace(match[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
}
const parseFormatStr = (formatStr) => {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p2 = formatStr.split("(");
    formatName = p2[0].toLowerCase().trim();
    const optStr = p2[1].substring(0, p2[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency) formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range) formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
          if (val === "false") formatOptions[trimmedKey] = false;
          if (val === "true") formatOptions[trimmedKey] = true;
          if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
};
const createCachedFormatter = (fn) => {
  const cache = {};
  return (val, lng, options) => {
    let optForCache = options;
    if (options && options.interpolationkey && options.formatParams && options.formatParams[options.interpolationkey] && options[options.interpolationkey]) {
      optForCache = {
        ...optForCache,
        [options.interpolationkey]: void 0
      };
    }
    const key = lng + JSON.stringify(optForCache);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
};
class Formatter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    const iOpts = options.interpolation;
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
  }
  add(name, fc2) {
    this.formats[name.toLowerCase().trim()] = fc2;
  }
  addCached(name, fc2) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc2);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    if (formats.length > 1 && formats[0].indexOf("(") > 1 && formats[0].indexOf(")") < 0 && formats.find((f2) => f2.indexOf(")") > -1)) {
      const lastIndex = formats.findIndex((f2) => f2.indexOf(")") > -1);
      formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
    }
    const result = formats.reduce((mem, f2) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f2);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l2 = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l2, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result;
  }
}
const removePending = (q2, name) => {
  if (q2.pending[name] !== void 0) {
    delete q2.pending[name];
    q2.pendingCount--;
  }
};
class Connector extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0) ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0) pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0) pending[name] = true;
          if (toLoad[name] === void 0) toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces) toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err) this.emit("failedLoading", lng, ns, err);
    if (!err && data) {
      this.store.addResourceBundle(lng, ns, data, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    if (err && data) this.state[name] = 0;
    const loaded = {};
    this.queue.forEach((q2) => {
      pushPath(q2.loaded, [lng], ns);
      removePending(q2, name);
      if (err) q2.errors.push(err);
      if (q2.pendingCount === 0 && !q2.done) {
        Object.keys(q2.loaded).forEach((l2) => {
          if (!loaded[l2]) loaded[l2] = {};
          const loadedKeys = q2.loaded[l2];
          if (loadedKeys.length) {
            loadedKeys.forEach((n2) => {
              if (loaded[l2][n2] === void 0) loaded[l2][n2] = true;
            });
          }
        });
        q2.done = true;
        if (q2.errors.length) {
          q2.callback(q2.errors);
        } else {
          q2.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q2) => !q2.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length) return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data);
    };
    const fc2 = this.backend[fcName].bind(this.backend);
    if (fc2.length === 2) {
      try {
        const r2 = fc2(lng, ns);
        if (r2 && typeof r2.then === "function") {
          r2.then((data) => resolver(null, data)).catch(resolver);
        } else {
          resolver(null, r2);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc2(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (typeof languages === "string") languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === "string") namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length) callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data) => {
      if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
      this.loaded(name, err, data);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "") return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc2 = this.backend.create.bind(this.backend);
      if (fc2.length < 6) {
        try {
          let r2;
          if (fc2.length === 5) {
            r2 = fc2(languages, namespace, key, fallbackValue, opts);
          } else {
            r2 = fc2(languages, namespace, key, fallbackValue);
          }
          if (r2 && typeof r2.then === "function") {
            r2.then((data) => clb(null, data)).catch(clb);
          } else {
            clb(null, r2);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc2(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0]) return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
}
const get = () => ({
  debug: false,
  initImmediate: true,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: false,
  supportedLngs: false,
  nonExplicitSupportedLngs: false,
  load: "all",
  preload: false,
  simplifyPluralSuffix: true,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: false,
  saveMissing: false,
  updateMissing: false,
  saveMissingTo: "fallback",
  saveMissingPlurals: true,
  missingKeyHandler: false,
  missingInterpolationHandler: false,
  postProcess: false,
  postProcessPassResolved: false,
  returnNull: false,
  returnEmptyString: true,
  returnObjects: false,
  joinArrays: false,
  returnedObjectHandler: false,
  parseMissingKeyHandler: false,
  appendNamespaceToMissingKey: false,
  appendNamespaceToCIMode: false,
  overloadTranslationOptionHandler: (args) => {
    let ret = {};
    if (typeof args[1] === "object") ret = args[1];
    if (typeof args[1] === "string") ret.defaultValue = args[1];
    if (typeof args[2] === "string") ret.tDescription = args[2];
    if (typeof args[2] === "object" || typeof args[3] === "object") {
      const options = args[3] || args[2];
      Object.keys(options).forEach((key) => {
        ret[key] = options[key];
      });
    }
    return ret;
  },
  interpolation: {
    escapeValue: true,
    format: (value) => value,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: true
  }
});
const transformOptions = (options) => {
  if (typeof options.ns === "string") options.ns = [options.ns];
  if (typeof options.fallbackLng === "string") options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string") options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
};
const noop = () => {
};
const bindMemberFunctions = (inst) => {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
};
class I18n extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (typeof options.ns === "string") {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== "v1") {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    const createClassOnDemand = (ClassOrObject) => {
      if (!ClassOrObject) return null;
      if (typeof ClassOrObject === "function") return new ClassOrObject();
      return ClassOrObject;
    };
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== "undefined") {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init) s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m2) => {
        if (m2.init) m2.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback) callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t2) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone) this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = typeof language === "string" ? language : this.language;
    if (typeof language === "function") usedCallback = language;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng) return;
        if (lng === "cimode") return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l2) => {
          if (l2 === "cimode") return;
          if (toLoad.indexOf(l2) < 0) toLoad.push(l2);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l2) => append(l2));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach((l2) => append(l2));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, (e2) => {
        if (!e2 && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
        usedCallback(e2);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (typeof lngs === "function") {
      callback = lngs;
      lngs = void 0;
    }
    if (typeof ns === "function") {
      callback = ns;
      ns = void 0;
    }
    if (!lngs) lngs = this.languages;
    if (!ns) ns = this.options.ns;
    if (!callback) callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module2) {
    if (!module2) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module2.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module2.type === "backend") {
      this.modules.backend = module2;
    }
    if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
      this.modules.logger = module2;
    }
    if (module2.type === "languageDetector") {
      this.modules.languageDetector = module2;
    }
    if (module2.type === "i18nFormat") {
      this.modules.i18nFormat = module2;
    }
    if (module2.type === "postProcessor") {
      postProcessor.addPostProcessor(module2);
    }
    if (module2.type === "formatter") {
      this.modules.formatter = module2;
    }
    if (module2.type === "3rdParty") {
      this.modules.external.push(module2);
    }
    return this;
  }
  setResolvedLanguage(l2) {
    if (!l2 || !this.languages) return;
    if (["cimode", "dev"].indexOf(l2) > -1) return;
    for (let li2 = 0; li2 < this.languages.length; li2++) {
      const lngInLngs = this.languages[li2];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1) continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l2) => {
      this.language = l2;
      this.languages = this.services.languageUtils.toResolveHierarchy(l2);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l2);
    };
    const done = (err, l2) => {
      if (l2) {
        setLngProps(l2);
        this.translator.changeLanguage(l2);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l2);
        this.logger.log("languageChanged", l2);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback) callback(err, function() {
        return _this2.t(...arguments);
      });
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector) lngs = [];
      const l2 = typeof lngs === "string" ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l2) {
        if (!this.language) {
          setLngProps(l2);
        }
        if (!this.translator.language) this.translator.changeLanguage(l2);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage) this.services.languageDetector.cacheUserLanguage(l2);
      }
      this.loadResources(l2, (err) => {
        done(err, l2);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== "") options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k2) => `${options.keyPrefix}${keySeparator}${k2}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (typeof lng === "string") {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode") return true;
    const loadNotPending = (l2, n2) => {
      const loadState = this.services.backendConnector.state[`${l2}|${n2}`];
      return loadState === -1 || loadState === 0 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0) return preResult;
    }
    if (this.hasResourceBundle(lng, ns)) return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback) callback();
      return Promise.resolve();
    }
    if (typeof ns === "string") ns = [ns];
    ns.forEach((n2) => {
      if (this.options.ns.indexOf(n2) < 0) this.options.ns.push(n2);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (typeof lngs === "string") lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback) callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback) callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng) lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng) return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore) delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m2) => {
      clone[m2] = this[m2];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
const {
  slice,
  forEach
} = [];
function defaults(obj) {
  forEach.call(slice.call(arguments, 1), (source) => {
    if (source) {
      for (const prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const serializeCookie = (name, val, options) => {
  const opt = options || {};
  opt.path = opt.path || "/";
  const value = encodeURIComponent(val);
  let str = `${name}=${value}`;
  if (opt.maxAge > 0) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge)) throw new Error("maxAge should be a Number");
    str += `; Max-Age=${Math.floor(maxAge)}`;
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) str += "; HttpOnly";
  if (opt.secure) str += "; Secure";
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
};
const cookie = {
  create(name, value, minutes, domain) {
    let cookieOptions = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    if (minutes) {
      cookieOptions.expires = /* @__PURE__ */ new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1e3);
    }
    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read(name) {
    const nameEQ = `${name}=`;
    const ca2 = document.cookie.split(";");
    for (let i = 0; i < ca2.length; i++) {
      let c2 = ca2[i];
      while (c2.charAt(0) === " ") c2 = c2.substring(1, c2.length);
      if (c2.indexOf(nameEQ) === 0) return c2.substring(nameEQ.length, c2.length);
    }
    return null;
  },
  remove(name) {
    this.create(name, "", -1);
  }
};
var cookie$1 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(_ref) {
    let {
      lookupCookie
    } = _ref;
    if (lookupCookie && typeof document !== "undefined") {
      return cookie.read(lookupCookie) || void 0;
    }
    return void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupCookie,
      cookieMinutes,
      cookieDomain,
      cookieOptions
    } = _ref2;
    if (lookupCookie && typeof document !== "undefined") {
      cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
    }
  }
};
var querystring = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(_ref) {
    var _a;
    let {
      lookupQuerystring
    } = _ref;
    let found;
    if (typeof window !== "undefined") {
      let {
        search
      } = window.location;
      if (!window.location.search && ((_a = window.location.hash) == null ? void 0 : _a.indexOf("?")) > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf("?"));
      }
      const query = search.substring(1);
      const params = query.split("&");
      for (let i = 0; i < params.length; i++) {
        const pos = params[i].indexOf("=");
        if (pos > 0) {
          const key = params[i].substring(0, pos);
          if (key === lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};
let hasLocalStorageSupport = null;
const localStorageAvailable = () => {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = window !== "undefined" && window.localStorage !== null;
    const testKey = "i18next.translate.boo";
    window.localStorage.setItem(testKey, "foo");
    window.localStorage.removeItem(testKey);
  } catch (e2) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(_ref) {
    let {
      lookupLocalStorage
    } = _ref;
    if (lookupLocalStorage && localStorageAvailable()) {
      return window.localStorage.getItem(lookupLocalStorage) || void 0;
    }
    return void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupLocalStorage
    } = _ref2;
    if (lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(lookupLocalStorage, lng);
    }
  }
};
let hasSessionStorageSupport = null;
const sessionStorageAvailable = () => {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = window !== "undefined" && window.sessionStorage !== null;
    const testKey = "i18next.translate.boo";
    window.sessionStorage.setItem(testKey, "foo");
    window.sessionStorage.removeItem(testKey);
  } catch (e2) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: "sessionStorage",
  lookup(_ref) {
    let {
      lookupSessionStorage
    } = _ref;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      return window.sessionStorage.getItem(lookupSessionStorage) || void 0;
    }
    return void 0;
  },
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupSessionStorage
    } = _ref2;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(lookupSessionStorage, lng);
    }
  }
};
var navigator$1 = {
  name: "navigator",
  lookup(options) {
    const found = [];
    if (typeof navigator !== "undefined") {
      const {
        languages,
        userLanguage,
        language
      } = navigator;
      if (languages) {
        for (let i = 0; i < languages.length; i++) {
          found.push(languages[i]);
        }
      }
      if (userLanguage) {
        found.push(userLanguage);
      }
      if (language) {
        found.push(language);
      }
    }
    return found.length > 0 ? found : void 0;
  }
};
var htmlTag = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(_ref) {
    let {
      htmlTag: htmlTag2
    } = _ref;
    let found;
    const internalHtmlTag = htmlTag2 || (typeof document !== "undefined" ? document.documentElement : null);
    if (internalHtmlTag && typeof internalHtmlTag.getAttribute === "function") {
      found = internalHtmlTag.getAttribute("lang");
    }
    return found;
  }
};
var path = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(_ref) {
    var _a;
    let {
      lookupFromPathIndex
    } = _ref;
    if (typeof window === "undefined") return void 0;
    const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    if (!Array.isArray(language)) return void 0;
    const index = typeof lookupFromPathIndex === "number" ? lookupFromPathIndex : 0;
    return (_a = language[index]) == null ? void 0 : _a.replace("/", "");
  }
};
var subdomain = {
  name: "subdomain",
  lookup(_ref) {
    var _a, _b;
    let {
      lookupFromSubdomainIndex
    } = _ref;
    const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === "number" ? lookupFromSubdomainIndex + 1 : 1;
    const language = typeof window !== "undefined" && ((_b = (_a = window.location) == null ? void 0 : _a.hostname) == null ? void 0 : _b.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (!language) return void 0;
    return language[internalLookupFromSubdomainIndex];
  }
};
function getDefaults() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (l2) => l2
  };
}
class Browser {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector";
    this.detectors = {};
    this.init(services, options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let i18nOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = services || {
      languageUtils: {}
    };
    this.options = defaults(options, this.options || {}, getDefaults());
    if (typeof this.options.convertDetectedLanguage === "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1) {
      this.options.convertDetectedLanguage = (l2) => l2.replace("-", "_");
    }
    if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
    this.i18nOptions = i18nOptions;
    this.addDetector(cookie$1);
    this.addDetector(querystring);
    this.addDetector(localStorage);
    this.addDetector(sessionStorage);
    this.addDetector(navigator$1);
    this.addDetector(htmlTag);
    this.addDetector(path);
    this.addDetector(subdomain);
  }
  addDetector(detector) {
    this.detectors[detector.name] = detector;
    return this;
  }
  detect(detectionOrder) {
    if (!detectionOrder) detectionOrder = this.options.order;
    let detected = [];
    detectionOrder.forEach((detectorName) => {
      if (this.detectors[detectorName]) {
        let lookup = this.detectors[detectorName].lookup(this.options);
        if (lookup && typeof lookup === "string") lookup = [lookup];
        if (lookup) detected = detected.concat(lookup);
      }
    });
    detected = detected.map((d2) => this.options.convertDetectedLanguage(d2));
    if (this.services.languageUtils.getBestMatchFromCodes) return detected;
    return detected.length > 0 ? detected[0] : null;
  }
  cacheUserLanguage(lng, caches) {
    if (!caches) caches = this.options.caches;
    if (!caches) return;
    if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
    caches.forEach((cacheName) => {
      if (this.detectors[cacheName]) this.detectors[cacheName].cacheUserLanguage(lng, this.options);
    });
  }
}
Browser.type = "languageDetector";
instance.use(initReactI18next).use(Browser).init({
  fallbackLng: "en",
  fallbackNS: "base",
  resources: {
    // we strive to use only one flavor of English on the UI, with that being
    // Canadian English - in the code, we stick to U.S. spelling if possible
    en: {
      base: {
        title: "Eirele",
        guessVerb: "Guess",
        guessNoun: "Guess",
        giveUp: "Give up",
        areYouSure: "Are you sure",
        nextRound: "Next Round",
        province: "Province",
        territory: "Territory",
        provinceOrTerritory: "Province or Territory",
        capitalCity: "Capital City",
        attempts: "Attempts",
        // game round instructions
        gamePotRoundInstruction: "Select the province",
        // TODO: we probably don't need this
        gameFlagRoundInstruction: "Select the flag",
        gameCapitalRoundInstruction: "What is the capital",
        gameNeighborRoundInstruction: "What are the neighbours",
        gamePotRoundFinaleStats: "Stats",
        // alerts
        unknownPot: "Unknown province ot territory!",
        unknownCity: "Unknown city!",
        alreadyGuessed: "Already Guessed!",
        guessedIt: "Spot on!",
        guessedItList: ["Spot on!", "Well done!", "Awesome!"],
        failedIt: "Sorry, you missed it!"
      },
      geo: {
        irl: "Ireland",
        antrim: "Antrim",
        armagh: "Armagh",
        carlow: "Carlow",
        cavan: "Cavan",
        clare: "Clare",
        cork: "Cork",
        donegal: "Donegal",
        down: "Down",
        dublin: "Dublin",
        fermanagh: "fermanagh",
        galway: "Galway",
        kerry: "Kerry",
        kildare: "Kildare",
        kilkenny: "Kilkenny",
        laois: "Laois",
        leitrim: "Leitrim",
        limerick: "Limerick",
        londonderry: "Londonderry",
        longford: "Longford",
        louth: "Louth",
        mayo: "Mayo",
        meath: "Meath",
        monaghan: "Monaghan",
        offaly: "Offaly",
        roscommon: "Roscommon",
        sligo: "Sligo",
        tipperary: "tipperary",
        tyrone: "Tyrone",
        waterford: "Waterford",
        westmeath: "Westmeath",
        wexford: "Wexford",
        wicklow: "Wicklow",
        capital_antrim: "Antrim",
        capital_armagh: "Armagh",
        capital_carlow: "Carlow",
        capital_cavan: "Cavan",
        capital_clare: "Ennis",
        capital_cork: "Cork",
        capital_donegal: "Lifford",
        capital_down: "Downpatrick",
        capital_dublin: "Dublin",
        capital_fermanagh: "Enniskillen",
        capital_galway: "Galway",
        capital_kerry: "Tralee",
        capital_kildare: "Naas",
        capital_kilkenny: "Kilkenny",
        capital_laois: "Portlaoise",
        capital_leitrim: "Carrick-on-Shannon",
        capital_limerick: "Limerick",
        capital_londonderry: "Coleraine",
        capital_longford: "Longford",
        capital_louth: "Dundalk",
        capital_mayo: "Castlebar",
        capital_meath: "Navan",
        capital_monaghan: "Monaghan",
        capital_offaly: "Tullamore",
        capital_roscommon: "Roscommon",
        capital_sligo: "Sligo",
        capital_tipperary: "Nenagh",
        capital_tyrone: "Omagh",
        capital_waterford: "Waterford",
        capital_westmeath: "Mullingar",
        capital_wexford: "Wexford",
        capital_wicklow: "Wicklow",
        city_athlone: "Athlone",
        city_baltimore: "Baltimore",
        city_bray: "Bray",
        city_carlow: "Carlow",
        city_cos: "Carrick-on-Shannon",
        city_carrigaline: "Carrigaline",
        city_castlebar: "Castlebar",
        city_cavan: "Cavan",
        city_clonmel: "Clonmel",
        city_cobh: "Cobh",
        city_cork: "Cork",
        city_drogheda: "Drogheda",
        city_dublin: "Dublin",
        city_dundalk: "Dundalk",
        city_ennis: "Ennis",
        city_galway: "Galway",
        city_kilkee: "Kilkee",
        city_kilkenny: "Kilkenny",
        city_kinsale: "Kinsale",
        city_letterkenny: "Letterkenny",
        city_lifford: "Lifford",
        city_limerick: "Limerick",
        city_longford: "Longford",
        city_monaghan: "Monaghan",
        city_mullingar: "Mullingar",
        city_naas: "Naas",
        city_navan: "Navan",
        city_nenagh: "Nenagh",
        city_portlaoise: "Portlaoise",
        city_roscommon: "Roscommon",
        city_sligo: "Sligo",
        city_skibberreen: "Skibberreen",
        city_tralee: "Tralee",
        city_tullamore: "Tullamore",
        city_waterford: "Waterford",
        city_wexford: "Wexford",
        city_wicklow: "Wicklow",
        city_youghal: "Youghal"
      }
    },
    ie: {
      base: {
        title: "Eireleagh",
        guessVerb: "Meas",
        guessNoun: "Tuairim",
        giveUp: "Give up",
        areYouSure: "Are you sure",
        nextRound: "Babhta Ar Aghaidh",
        province: "Contae",
        territory: "",
        provinceOrTerritory: "Contae",
        capitalCity: "Príomhchathair",
        gameCapitalRoundInstruction: "Cad é príomhchathair na",
        gameNeighborRoundInstruction: "Cad iad na contaetha in aice leis",
        guessedItList: ["Comhghairdeas!", "Maith thú!", "Moladh mór ort!"]
      },
      geo: {
        irl: "Éire",
        antrim: "Aontroim",
        armagh: "Ard Mhacha",
        carlow: "Ceatharlach",
        cavan: "An Cabhán",
        clare: "An Clár",
        cork: "Corcaigh",
        donegal: "Dún na nGall",
        down: "An Dún",
        dublin: "Baile Átha Cliath",
        fermanagh: "Fear Manach",
        galway: "Gaillimh",
        kerry: "Ciarraí",
        kildare: "Cill Dara",
        kilkenny: "Cill Chainnigh",
        laois: "Laois",
        leitrim: "Liatroim",
        limerick: "Luimneach",
        londonderry: "Doire",
        longford: "An Longfort",
        louth: "Lú",
        mayo: "Maigh Eo",
        meath: "An Mhí",
        monaghan: "Muineachán",
        offaly: "Uíbh Fhailí",
        roscommon: "Ros Comáin",
        sligo: "Sligeach",
        tipperary: "Tiobraid Árann",
        tyrone: "Tír Eoghain",
        waterford: "Port Láirge",
        westmeath: "An Iarmhí",
        wexford: "Loch Garman",
        wicklow: "Cill Mhantáin",
        of_meath: "na Mí",
        of_louth: "Lú",
        capital_antrim: "Aontroim",
        capital_armagh: "Ard Mhacha",
        capital_carlow: "Ceatharlach",
        capital_cavan: "An Cabhán",
        capital_clare: "Inis",
        capital_cork: "Corcaigh",
        capital_donegal: "Leifear",
        capital_down: "Dún Pádraig",
        capital_dublin: "Baile Átha Cliath",
        capital_fermanagh: "Inis Ceithleann",
        capital_galway: "Gaillimh",
        capital_kerry: "Trá Lí",
        capital_kildare: "Nás na Ríogh",
        capital_kilkenny: "Cill Chainnigh",
        capital_laois: "Port Laoise",
        capital_leitrim: "Cora Droma Rúisc",
        capital_limerick: "Luimneach",
        capital_londonderry: "Cúil Raithin",
        capital_longford: "An Longfort",
        capital_louth: "Dún Dealgan",
        capital_mayo: "Caisleán an Bharraigh",
        capital_meath: "An Uaimh",
        capital_monaghan: "Muineachán",
        capital_offaly: "Tulach Mhór",
        capital_roscommon: "Ros Comáin",
        capital_sligo: "Sligeach",
        capital_tipperary: "An tAonach",
        capital_tyrone: "An Ómaigh",
        capital_waterford: "Port Láirge",
        capital_westmeath: "An Muileann gCearr",
        capital_wexford: "Loch Garman",
        capital_wicklow: "Cill Mhantáin",
        city_athlone: "Baile Átha Luain",
        city_baltimore: "Baile an Tí Mhóir",
        city_bray: "Bré",
        city_carlow: "Ceatharlach",
        city_cos: "Cora Droma Rúisc",
        city_carrigaline: "Carraig Uí Leighin",
        city_castlebar: "Caisleán an Bharraigh",
        city_cavan: "An Cabhán",
        city_clonmel: "Cluain Meala",
        city_cobh: "An Cóbh",
        city_cork: "Corcaigh",
        city_drogheda: "Droichead Átha",
        city_dublin: "Baile Átha Cliath",
        city_dundalk: "Dún Dealgan",
        city_ennis: "Inis",
        city_galway: "Gaillimh",
        city_kilkenny: "Cill Chainnigh",
        city_kinsale: "Cionn tSáile",
        city_letterkenny: "Leitir Ceanainn",
        city_lifford: "Leifear",
        city_limerick: "Luimneach",
        city_longford: "An Longfort",
        city_monaghan: "Muineachán",
        city_mullingar: "An Muileann gCearr",
        city_naas: "Nás na Ríogh",
        city_navan: "An Uaimh",
        city_nenagh: "An tAonach",
        city_portlaoise: "Port Laoise",
        city_roscommon: "Ros Comáin",
        city_sligo: "Sligeach",
        city_skibberreen: "An Sciobairín",
        city_tralee: "Trá Lí",
        city_tullamore: "Tulach Mhór",
        city_waterford: "Port Láirge",
        city_wexford: "Loch Garman",
        city_wicklow: "Cill Mhantáin",
        city_youghal: "Eochaill"
      }
    }
  }
});
async function toggleLanguage() {
  console.log(`toggle: ${instance.language}`);
  await instance.changeLanguage(instance.language === "en" ? "ie" : "en");
}
function Settings() {
  return /* @__PURE__ */ jsxRuntimeExports$1.jsx(
    "button",
    {
      className: "mx-3 text-xl",
      type: "button",
      onClick: () => toggleLanguage(),
      "data-testid": "settings",
      children: "⚙️"
    }
  );
}
function Help() {
  return /* @__PURE__ */ jsxRuntimeExports$1.jsx(
    "button",
    {
      className: "mx-3 text-xl",
      type: "button",
      onClick: () => console.log("clicked HELP"),
      "data-testid": "help",
      children: "❓"
    }
  );
}
function App() {
  console.log(`lovas eirele y2025-01-26 13:23`);
  return /* @__PURE__ */ jsxRuntimeExports$1.jsxs("div", { className: "flex flex-col justify-between items-center min-h-screen dark:bg-slate-900 dark:text-slate-50", children: [
    /* @__PURE__ */ jsxRuntimeExports$1.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports$1.jsxs("div", { className: "w-full max-w-lg flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports$1.jsxs("header", { className: "border-b-2 border-gray-200 flex mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports$1.jsx(Help, {}),
        /* @__PURE__ */ jsxRuntimeExports$1.jsx("h1", { className: "text-4xl font-bold uppercase tracking-wide text-center mx-10 my-2 flex-auto", children: /* @__PURE__ */ jsxRuntimeExports$1.jsxs("a", { href: "", children: [
          "🇮🇪 ",
          /* @__PURE__ */ jsxRuntimeExports$1.jsx(Eirele, {})
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports$1.jsx(Settings, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports$1.jsx(Game, {})
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports$1.jsx("footer", { className: "flex justify-center text-sm mt-8 mb-1", children: /* @__PURE__ */ jsxRuntimeExports$1.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports$1.jsxs("a", { href: "https://buymeacoffee.com/", children: [
      "❤️ ",
      /* @__PURE__ */ jsxRuntimeExports$1.jsx(Eirele, {}),
      " ❓"
    ] }) }) })
  ] });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports$1.jsxs(React.StrictMode, { children: [
    /* @__PURE__ */ jsxRuntimeExports$1.jsx(App, {}),
    /* @__PURE__ */ jsxRuntimeExports$1.jsx(
      Q,
      {
        position: "top-center",
        autoClose: 3e3,
        limit: 3,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "dark"
      }
    )
  ] })
);
//# sourceMappingURL=index-8vv3Y0uF.js.map
