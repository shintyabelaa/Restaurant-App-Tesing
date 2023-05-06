/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/html-entities/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/html-entities/lib/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var named_references_1 = __webpack_require__(/*! ./named-references */ "./node_modules/html-entities/lib/named-references.js");
var numeric_unicode_map_1 = __webpack_require__(/*! ./numeric-unicode-map */ "./node_modules/html-entities/lib/numeric-unicode-map.js");
var surrogate_pairs_1 = __webpack_require__(/*! ./surrogate-pairs */ "./node_modules/html-entities/lib/surrogate-pairs.js");
var allNamedReferences = __assign(__assign({}, named_references_1.namedReferences), { all: named_references_1.namedReferences.html5 });
var encodeRegExps = {
    specialChars: /[<>'"&]/g,
    nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
    extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
};
var defaultEncodeOptions = {
    mode: 'specialChars',
    level: 'all',
    numeric: 'decimal'
};
/** Encodes all the necessary (specified by `level`) characters in the text */
function encode(text, _a) {
    var _b = _a === void 0 ? defaultEncodeOptions : _a, _c = _b.mode, mode = _c === void 0 ? 'specialChars' : _c, _d = _b.numeric, numeric = _d === void 0 ? 'decimal' : _d, _e = _b.level, level = _e === void 0 ? 'all' : _e;
    if (!text) {
        return '';
    }
    var encodeRegExp = encodeRegExps[mode];
    var references = allNamedReferences[level].characters;
    var isHex = numeric === 'hexadecimal';
    encodeRegExp.lastIndex = 0;
    var _b = encodeRegExp.exec(text);
    var _c;
    if (_b) {
        _c = '';
        var _d = 0;
        do {
            if (_d !== _b.index) {
                _c += text.substring(_d, _b.index);
            }
            var _e = _b[0];
            var result_1 = references[_e];
            if (!result_1) {
                var code_1 = _e.length > 1 ? surrogate_pairs_1.getCodePoint(_e, 0) : _e.charCodeAt(0);
                result_1 = (isHex ? '&#x' + code_1.toString(16) : '&#' + code_1) + ';';
            }
            _c += result_1;
            _d = _b.index + _e.length;
        } while ((_b = encodeRegExp.exec(text)));
        if (_d !== text.length) {
            _c += text.substring(_d);
        }
    }
    else {
        _c =
            text;
    }
    return _c;
}
exports.encode = encode;
var defaultDecodeOptions = {
    scope: 'body',
    level: 'all'
};
var strict = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;
var attribute = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;
var baseDecodeRegExps = {
    xml: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.xml
    },
    html4: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html4
    },
    html5: {
        strict: strict,
        attribute: attribute,
        body: named_references_1.bodyRegExps.html5
    }
};
var decodeRegExps = __assign(__assign({}, baseDecodeRegExps), { all: baseDecodeRegExps.html5 });
var fromCharCode = String.fromCharCode;
var outOfBoundsChar = fromCharCode(65533);
var defaultDecodeEntityOptions = {
    level: 'all'
};
/** Decodes a single entity */
function decodeEntity(entity, _a) {
    var _b = (_a === void 0 ? defaultDecodeEntityOptions : _a).level, level = _b === void 0 ? 'all' : _b;
    if (!entity) {
        return '';
    }
    var _b = entity;
    var decodeEntityLastChar_1 = entity[entity.length - 1];
    if (false) {}
    else if (false) {}
    else {
        var decodeResultByReference_1 = allNamedReferences[level].entities[entity];
        if (decodeResultByReference_1) {
            _b = decodeResultByReference_1;
        }
        else if (entity[0] === '&' && entity[1] === '#') {
            var decodeSecondChar_1 = entity[2];
            var decodeCode_1 = decodeSecondChar_1 == 'x' || decodeSecondChar_1 == 'X'
                ? parseInt(entity.substr(3), 16)
                : parseInt(entity.substr(2));
            _b =
                decodeCode_1 >= 0x10ffff
                    ? outOfBoundsChar
                    : decodeCode_1 > 65535
                        ? surrogate_pairs_1.fromCodePoint(decodeCode_1)
                        : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_1] || decodeCode_1);
        }
    }
    return _b;
}
exports.decodeEntity = decodeEntity;
/** Decodes all entities in the text */
function decode(text, _a) {
    var decodeSecondChar_1 = _a === void 0 ? defaultDecodeOptions : _a, decodeCode_1 = decodeSecondChar_1.level, level = decodeCode_1 === void 0 ? 'all' : decodeCode_1, _b = decodeSecondChar_1.scope, scope = _b === void 0 ? level === 'xml' ? 'strict' : 'body' : _b;
    if (!text) {
        return '';
    }
    var decodeRegExp = decodeRegExps[level][scope];
    var references = allNamedReferences[level].entities;
    var isAttribute = scope === 'attribute';
    var isStrict = scope === 'strict';
    decodeRegExp.lastIndex = 0;
    var replaceMatch_1 = decodeRegExp.exec(text);
    var replaceResult_1;
    if (replaceMatch_1) {
        replaceResult_1 = '';
        var replaceLastIndex_1 = 0;
        do {
            if (replaceLastIndex_1 !== replaceMatch_1.index) {
                replaceResult_1 += text.substring(replaceLastIndex_1, replaceMatch_1.index);
            }
            var replaceInput_1 = replaceMatch_1[0];
            var decodeResult_1 = replaceInput_1;
            var decodeEntityLastChar_2 = replaceInput_1[replaceInput_1.length - 1];
            if (isAttribute
                && decodeEntityLastChar_2 === '=') {
                decodeResult_1 = replaceInput_1;
            }
            else if (isStrict
                && decodeEntityLastChar_2 !== ';') {
                decodeResult_1 = replaceInput_1;
            }
            else {
                var decodeResultByReference_2 = references[replaceInput_1];
                if (decodeResultByReference_2) {
                    decodeResult_1 = decodeResultByReference_2;
                }
                else if (replaceInput_1[0] === '&' && replaceInput_1[1] === '#') {
                    var decodeSecondChar_2 = replaceInput_1[2];
                    var decodeCode_2 = decodeSecondChar_2 == 'x' || decodeSecondChar_2 == 'X'
                        ? parseInt(replaceInput_1.substr(3), 16)
                        : parseInt(replaceInput_1.substr(2));
                    decodeResult_1 =
                        decodeCode_2 >= 0x10ffff
                            ? outOfBoundsChar
                            : decodeCode_2 > 65535
                                ? surrogate_pairs_1.fromCodePoint(decodeCode_2)
                                : fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode_2] || decodeCode_2);
                }
            }
            replaceResult_1 += decodeResult_1;
            replaceLastIndex_1 = replaceMatch_1.index + replaceInput_1.length;
        } while ((replaceMatch_1 = decodeRegExp.exec(text)));
        if (replaceLastIndex_1 !== text.length) {
            replaceResult_1 += text.substring(replaceLastIndex_1);
        }
    }
    else {
        replaceResult_1 =
            text;
    }
    return replaceResult_1;
}
exports.decode = decode;


/***/ }),

/***/ "./node_modules/html-entities/lib/named-references.js":
/*!************************************************************!*\
  !*** ./node_modules/html-entities/lib/named-references.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};

/***/ }),

/***/ "./node_modules/html-entities/lib/numeric-unicode-map.js":
/*!***************************************************************!*\
  !*** ./node_modules/html-entities/lib/numeric-unicode-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};

/***/ }),

/***/ "./node_modules/html-entities/lib/surrogate-pairs.js":
/*!***********************************************************!*\
  !*** ./node_modules/html-entities/lib/surrogate-pairs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);
    this.client = new WebSocket(url);
    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }

  /**
   * @param {(...args: any[]) => void} f
   */
  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }

    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    }

    // call f with the message string as the first argument
    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);
  return WebSocketClient;
}();


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Atrue%7D&reconnect=10&hot=true&live-reload=true":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Atrue%7D&reconnect=10&hot=true&live-reload=true ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Atrue%7D&reconnect=10&hot=true&live-reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/stripAnsi.js */ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js");
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/parseURL.js */ "./node_modules/webpack-dev-server/client/utils/parseURL.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/reloadApp.js */ "./node_modules/webpack-dev-server/client/utils/reloadApp.js");
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/createSocketURL.js */ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />










/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | { warnings?: boolean, errors?: boolean, runtimeErrors?: boolean, trustedTypesPolicyName?: string }} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @type {Status}
 */
var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};

/** @type {Options} */
var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);
var enabledFeatures = {
  "Hot Module Replacement": false,
  "Live Reloading": false,
  Progress: false,
  Overlay: false
};
if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  enabledFeatures["Hot Module Replacement"] = true;
}
if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  enabledFeatures["Live Reloading"] = true;
}
if (parsedResourceQuery.progress === "true") {
  options.progress = true;
  enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
  try {
    options.overlay = JSON.parse(parsedResourceQuery.overlay);
  } catch (e) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Error parsing overlay options from resource query:", e);
  }

  // Fill in default "true" params for partially-specified objects.
  if (typeof options.overlay === "object") {
    options.overlay = _objectSpread({
      errors: true,
      warnings: true,
      runtimeErrors: true
    }, options.overlay);
  }
  enabledFeatures.Overlay = true;
}
if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}

/**
 * @param {string} level
 */
function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}
if (options.logging) {
  setAllLogLevel(options.logging);
}
(0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.logEnabledFeatures)(enabledFeatures);
self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var overlay = typeof window !== "undefined" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.createOverlay)(typeof options.overlay === "object" ? {
  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,
  catchRuntimeError: options.overlay.runtimeErrors
} : {
  trustedTypesPolicyName: false,
  catchRuntimeError: options.overlay
}) : {
  send: function send() {}
};
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }
    options.hot = true;
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }
    options.liveReload = true;
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling...");

    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },
  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,
  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }
    options.overlay = value;
  },
  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }
    options.reconnect = value;
  },
  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },
  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'
  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");
    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
        header = _formatProblem.header,
        body = _formatProblem.body;
      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);
    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }
    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;
    if (needShowOverlayForWarnings) {
      overlay.send({
        type: "BUILD_ERROR",
        level: "warning",
        messages: _warnings
      });
    }
    if (params && params.preventReloading) {
      return;
    }
    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");
    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
        header = _formatProblem2.header,
        body = _formatProblem2.body;
      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);
    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }
    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;
    if (needShowOverlayForErrors) {
      overlay.send({
        type: "BUILD_ERROR",
        level: "error",
        messages: _errors
      });
    }
  },
  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client-src/modules/logger/SyncBailHookFake.js":
/*!*******************************************************!*\
  !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
  \*******************************************************/
/***/ (function(module) {



/**
 * Client stub for tapable SyncBailHook
 */
module.exports = function clientTapableSyncBailHook() {
  return {
    call: function call() {}
  };
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/Logger.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/Logger.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var LogType = Object.freeze({
  error: /** @type {"error"} */"error",
  // message, c style arguments
  warn: /** @type {"warn"} */"warn",
  // message, c style arguments
  info: /** @type {"info"} */"info",
  // message, c style arguments
  log: /** @type {"log"} */"log",
  // message, c style arguments
  debug: /** @type {"debug"} */"debug",
  // message, c style arguments

  trace: /** @type {"trace"} */"trace",
  // no arguments

  group: /** @type {"group"} */"group",
  // [label]
  groupCollapsed: /** @type {"groupCollapsed"} */"groupCollapsed",
  // [label]
  groupEnd: /** @type {"groupEnd"} */"groupEnd",
  // [label]

  profile: /** @type {"profile"} */"profile",
  // [profileName]
  profileEnd: /** @type {"profileEnd"} */"profileEnd",
  // [profileName]

  time: /** @type {"time"} */"time",
  // name, time as [seconds, nanoseconds]

  clear: /** @type {"clear"} */"clear",
  // no arguments
  status: /** @type {"status"} */"status" // message, arguments
});

exports.LogType = LogType;

/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger raw log method");
var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger times");
var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger aggregated times");
var WebpackLogger = /*#__PURE__*/function () {
  /**
   * @param {function(LogTypeEnum, any[]=): void} log log function
   * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
   */
  function WebpackLogger(log, getChildLogger) {
    _classCallCheck(this, WebpackLogger);
    this[LOG_SYMBOL] = log;
    this.getChildLogger = getChildLogger;
  }
  _createClass(WebpackLogger, [{
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this[LOG_SYMBOL](LogType.error, args);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this[LOG_SYMBOL](LogType.warn, args);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this[LOG_SYMBOL](LogType.info, args);
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this[LOG_SYMBOL](LogType.log, args);
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this[LOG_SYMBOL](LogType.debug, args);
    }
  }, {
    key: "assert",
    value: function assert(assertion) {
      if (!assertion) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }
        this[LOG_SYMBOL](LogType.error, args);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      this[LOG_SYMBOL](LogType.trace, ["Trace"]);
    }
  }, {
    key: "clear",
    value: function clear() {
      this[LOG_SYMBOL](LogType.clear);
    }
  }, {
    key: "status",
    value: function status() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      this[LOG_SYMBOL](LogType.status, args);
    }
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      this[LOG_SYMBOL](LogType.group, args);
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      this[LOG_SYMBOL](LogType.groupCollapsed, args);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      this[LOG_SYMBOL](LogType.groupEnd, args);
    }
  }, {
    key: "profile",
    value: function profile(label) {
      this[LOG_SYMBOL](LogType.profile, [label]);
    }
  }, {
    key: "profileEnd",
    value: function profileEnd(label) {
      this[LOG_SYMBOL](LogType.profileEnd, [label]);
    }
  }, {
    key: "time",
    value: function time(label) {
      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
      this[TIMERS_SYMBOL].set(label, process.hrtime());
    }
  }, {
    key: "timeLog",
    value: function timeLog(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
      }
      var time = process.hrtime(prev);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
      }
      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeAggregate",
    value: function timeAggregate(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
      }
      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (current !== undefined) {
        if (time[1] + current[1] > 1e9) {
          time[0] += current[0] + 1;
          time[1] = time[1] - 1e9 + current[1];
        } else {
          time[0] += current[0];
          time[1] += current[1];
        }
      }
      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }
  }, {
    key: "timeAggregateEnd",
    value: function timeAggregateEnd(label) {
      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (time === undefined) return;
      this[TIMERS_AGGREGATES_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }]);
  return WebpackLogger;
}();
exports.Logger = WebpackLogger;

/***/ }),

/***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_11285__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var _require = __nested_webpack_require_11285__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  LogType = _require.LogType;

/** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */
/** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */
/** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

/** @typedef {function(string): boolean} FilterFunction */

/**
 * @typedef {Object} LoggerConsole
 * @property {function(): void} clear
 * @property {function(): void} trace
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(...args: any[]) => void=} group
 * @property {(...args: any[]) => void=} groupCollapsed
 * @property {(...args: any[]) => void=} groupEnd
 * @property {(...args: any[]) => void=} status
 * @property {(...args: any[]) => void=} profile
 * @property {(...args: any[]) => void=} profileEnd
 * @property {(...args: any[]) => void=} logTime
 */

/**
 * @typedef {Object} LoggerOptions
 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
 * @property {FilterTypes|boolean} debug filter for debug logging
 * @property {LoggerConsole} console the console to log to
 */

/**
 * @param {FilterItemTypes} item an input item
 * @returns {FilterFunction} filter function
 */
var filterToFunction = function filterToFunction(item) {
  if (typeof item === "string") {
    var regExp = new RegExp("[\\\\/]".concat(item.replace(
    // eslint-disable-next-line no-useless-escape
    /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
    return function (ident) {
      return regExp.test(ident);
    };
  }
  if (item && typeof item === "object" && typeof item.test === "function") {
    return function (ident) {
      return item.test(ident);
    };
  }
  if (typeof item === "function") {
    return item;
  }
  if (typeof item === "boolean") {
    return function () {
      return item;
    };
  }
};

/**
 * @enum {number}
 */
var LogLevel = {
  none: 6,
  false: 6,
  error: 5,
  warn: 4,
  info: 3,
  log: 2,
  true: 2,
  verbose: 1
};

/**
 * @param {LoggerOptions} options options object
 * @returns {function(string, LogTypeEnum, any[]): void} logging function
 */
module.exports = function (_ref) {
  var _ref$level = _ref.level,
    level = _ref$level === void 0 ? "info" : _ref$level,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    console = _ref.console;
  var debugFilters = typeof debug === "boolean" ? [function () {
    return debug;
  }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);
  /** @type {number} */
  var loglevel = LogLevel["".concat(level)] || 0;

  /**
   * @param {string} name name of the logger
   * @param {LogTypeEnum} type type of the log entry
   * @param {any[]} args arguments of the log entry
   * @returns {void}
   */
  var logger = function logger(name, type, args) {
    var labeledArgs = function labeledArgs() {
      if (Array.isArray(args)) {
        if (args.length > 0 && typeof args[0] === "string") {
          return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
        } else {
          return ["[".concat(name, "]")].concat(_toConsumableArray(args));
        }
      } else {
        return [];
      }
    };
    var debug = debugFilters.some(function (f) {
      return f(name);
    });
    switch (type) {
      case LogType.debug:
        if (!debug) return;
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.debug === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.debug.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.log:
        if (!debug && loglevel > LogLevel.log) return;
        console.log.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.info:
        if (!debug && loglevel > LogLevel.info) return;
        console.info.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.warn:
        if (!debug && loglevel > LogLevel.warn) return;
        console.warn.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.error:
        if (!debug && loglevel > LogLevel.error) return;
        console.error.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.trace:
        if (!debug) return;
        console.trace();
        break;
      case LogType.groupCollapsed:
        if (!debug && loglevel > LogLevel.log) return;
        if (!debug && loglevel > LogLevel.verbose) {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          if (typeof console.groupCollapsed === "function") {
            // eslint-disable-next-line node/no-unsupported-features/node-builtins
            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
          } else {
            console.log.apply(console, _toConsumableArray(labeledArgs()));
          }
          break;
        }
      // falls through
      case LogType.group:
        if (!debug && loglevel > LogLevel.log) return;
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.group === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.group.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.groupEnd:
        if (!debug && loglevel > LogLevel.log) return;
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.groupEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.groupEnd();
        }
        break;
      case LogType.time:
        {
          if (!debug && loglevel > LogLevel.log) return;
          var ms = args[1] * 1000 + args[2] / 1000000;
          var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");
          if (typeof console.logTime === "function") {
            console.logTime(msg);
          } else {
            console.log(msg);
          }
          break;
        }
      case LogType.profile:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profile === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profile.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.profileEnd:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profileEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.clear:
        if (!debug && loglevel > LogLevel.log) return;
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.clear === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.clear();
        }
        break;
      case LogType.status:
        if (!debug && loglevel > LogLevel.info) return;
        if (typeof console.status === "function") {
          if (args.length === 0) {
            console.status();
          } else {
            console.status.apply(console, _toConsumableArray(labeledArgs()));
          }
        } else {
          if (args.length !== 0) {
            console.info.apply(console, _toConsumableArray(labeledArgs()));
          }
        }
        break;
      default:
        throw new Error("Unexpected LogType ".concat(type));
    }
  };
  return logger;
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/runtime.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_21334__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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
var SyncBailHook = __nested_webpack_require_21334__(/*! tapable/lib/SyncBailHook */ "./client-src/modules/logger/SyncBailHookFake.js");
var _require = __nested_webpack_require_21334__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  Logger = _require.Logger;
var createConsoleLogger = __nested_webpack_require_21334__(/*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js");

/** @type {createConsoleLogger.LoggerOptions} */
var currentDefaultLoggerOptions = {
  level: "info",
  debug: false,
  console: console
};
var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);

/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */
exports.getLogger = function (name) {
  return new Logger(function (type, args) {
    if (exports.hooks.log.call(name, type, args) === undefined) {
      currentDefaultLogger(name, type, args);
    }
  }, function (childName) {
    return exports.getLogger("".concat(name, "/").concat(childName));
  });
};

/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */
exports.configureDefaultLogger = function (options) {
  _extends(currentDefaultLoggerOptions, options);
  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};
exports.hooks = {
  log: new SyncBailHook(["origin", "type", "args"])
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_23461__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_23461__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_23461__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_23461__.o(definition, key) && !__nested_webpack_require_23461__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_23461__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_23461__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./client-src/modules/logger/index.js ***!
  \********************************************/
__nested_webpack_require_23461__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_23461__.d(__nested_webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_23461__(/*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js");

}();
var __webpack_export_target__ = exports;
for(var i in __nested_webpack_exports__) __webpack_export_target__[i] = __nested_webpack_exports__[i];
if(__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOverlay": () => (/* binding */ createOverlay),
/* harmony export */   "formatProblem": () => (/* binding */ formatProblem)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-entities */ "./node_modules/html-entities/lib/index.js");
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay/runtime-error.js */ "./node_modules/webpack-dev-server/client/overlay/runtime-error.js");
/* harmony import */ var _overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay/state-machine.js */ "./node_modules/webpack-dev-server/client/overlay/state-machine.js");
/* harmony import */ var _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay/styles.js */ "./node_modules/webpack-dev-server/client/overlay/styles.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).






var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item
 * @returns {{ header: string, body: string }}
 */
function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";
  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || "";
    // eslint-disable-next-line no-nested-ternary
    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }
  if (Array.isArray(item.stack)) {
    item.stack.forEach(function (stack) {
      if (typeof stack === "string") {
        body += "\r\n".concat(stack);
      }
    });
  }
  return {
    header: header,
    body: body
  };
}

/**
 * @typedef {Object} CreateOverlayOptions
 * @property {string | null} trustedTypesPolicyName
 * @property {boolean} [catchRuntimeError]
 */

/**
 *
 * @param {CreateOverlayOptions} options
 */
var createOverlay = function createOverlay(options) {
  /** @type {HTMLIFrameElement | null | undefined} */
  var iframeContainerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var containerElement;
  /** @type {Array<(element: HTMLDivElement) => void>} */
  var onLoadQueue = [];
  /** @type {TrustedTypePolicy | undefined} */
  var overlayTrustedTypesPolicy;

  /**
   *
   * @param {HTMLElement} element
   * @param {CSSStyleDeclaration} style
   */
  function applyStyle(element, style) {
    Object.keys(style).forEach(function (prop) {
      element.style[prop] = style[prop];
    });
  }

  /**
   * @param {string | null} trustedTypesPolicyName
   */
  function createContainer(trustedTypesPolicyName) {
    // Enable Trusted Types if they are available in the current browser.
    if (window.trustedTypes) {
      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
        createHTML: function createHTML(value) {
          return value;
        }
      });
    }
    iframeContainerElement = document.createElement("iframe");
    iframeContainerElement.id = "webpack-dev-server-client-overlay";
    iframeContainerElement.src = "about:blank";
    applyStyle(iframeContainerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.iframeStyle);
    iframeContainerElement.onload = function () {
      var contentElement = /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.createElement("div");
      containerElement = /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.createElement("div");
      contentElement.id = "webpack-dev-server-client-overlay-div";
      applyStyle(contentElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.containerStyle);
      var headerElement = document.createElement("div");
      headerElement.innerText = "Compiled with problems:";
      applyStyle(headerElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.headerStyle);
      var closeButtonElement = document.createElement("button");
      applyStyle(closeButtonElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.dismissButtonStyle);
      closeButtonElement.innerText = "×";
      closeButtonElement.ariaLabel = "Dismiss";
      closeButtonElement.addEventListener("click", function () {
        // eslint-disable-next-line no-use-before-define
        overlayService.send({
          type: "DISMISS"
        });
      });
      contentElement.appendChild(headerElement);
      contentElement.appendChild(closeButtonElement);
      contentElement.appendChild(containerElement);

      /** @type {Document} */
      /** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument.body.appendChild(contentElement);
      onLoadQueue.forEach(function (onLoad) {
        onLoad( /** @type {HTMLDivElement} */contentElement);
      });
      onLoadQueue = [];

      /** @type {HTMLIFrameElement} */
      iframeContainerElement.onload = null;
    };
    document.body.appendChild(iframeContainerElement);
  }

  /**
   * @param {(element: HTMLDivElement) => void} callback
   * @param {string | null} trustedTypesPolicyName
   */
  function ensureOverlayExists(callback, trustedTypesPolicyName) {
    if (containerElement) {
      containerElement.innerHTML = "";
      // Everything is ready, call the callback right away.
      callback(containerElement);
      return;
    }
    onLoadQueue.push(callback);
    if (iframeContainerElement) {
      return;
    }
    createContainer(trustedTypesPolicyName);
  }

  // Successful compilation.
  function hide() {
    if (!iframeContainerElement) {
      return;
    }

    // Clean up and reset internal state.
    document.body.removeChild(iframeContainerElement);
    iframeContainerElement = null;
    containerElement = null;
  }

  // Compilation with errors (e.g. syntax error or missing modules).
  /**
   * @param {string} type
   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
   * @param {string | null} trustedTypesPolicyName
   */
  function show(type, messages, trustedTypesPolicyName) {
    ensureOverlayExists(function () {
      messages.forEach(function (message) {
        var entryElement = document.createElement("div");
        var msgStyle = type === "warning" ? _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.warning : _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgStyles.error;
        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {
          padding: "1rem 1rem 1.5rem 1rem"
        }));
        var typeElement = document.createElement("div");
        var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;
        typeElement.innerText = header;
        applyStyle(typeElement, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTypeStyle);
        if (message.moduleIdentifier) {
          applyStyle(typeElement, {
            cursor: "pointer"
          });
          // element.dataset not supported in IE
          typeElement.setAttribute("data-can-open", true);
          typeElement.addEventListener("click", function () {
            fetch("/webpack-dev-server/open-editor?fileName=".concat(message.moduleIdentifier));
          });
        }

        // Make it look similar to our terminal.
        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_4__.encode)(body));
        var messageTextNode = document.createElement("div");
        applyStyle(messageTextNode, _overlay_styles_js__WEBPACK_IMPORTED_MODULE_3__.msgTextStyle);
        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
        entryElement.appendChild(typeElement);
        entryElement.appendChild(messageTextNode);

        /** @type {HTMLDivElement} */
        containerElement.appendChild(entryElement);
      });
    }, trustedTypesPolicyName);
  }
  var overlayService = (0,_overlay_state_machine_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    showOverlay: function showOverlay(_ref) {
      var _ref$level = _ref.level,
        level = _ref$level === void 0 ? "error" : _ref$level,
        messages = _ref.messages;
      return show(level, messages, options.trustedTypesPolicyName);
    },
    hideOverlay: hide
  });
  if (options.catchRuntimeError) {
    (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.listenToRuntimeError)(function (errorEvent) {
      // error property may be empty in older browser like IE
      var error = errorEvent.error,
        message = errorEvent.message;
      if (!error && !message) {
        return;
      }
      var errorObject = error instanceof Error ? error : new Error(error || message);
      overlayService.send({
        type: "RUNTIME_ERROR",
        messages: [{
          message: errorObject.message,
          stack: (0,_overlay_runtime_error_js__WEBPACK_IMPORTED_MODULE_1__.parseErrorToStacks)(errorObject)
        }]
      });
    });
  }
  return overlayService;
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/fsm.js":
/*!***************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/fsm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @typedef {Object} StateDefinitions
 * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]
 */

/**
 * @typedef {Object} Options
 * @property {{[state: string]: StateDefinitions}} states
 * @property {object} context;
 * @property {string} initial
 */

/**
 * @typedef {Object} Implementation
 * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions
 */

/**
 * A simplified `createMachine` from `@xstate/fsm` with the following differences:
 *
 *  - the returned machine is technically a "service". No `interpret(machine).start()` is needed.
 *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.
 *  - event passed to `send` must be an object with `type` property.
 *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.
 *  Do not return anything if you just want to invoke side effect.
 *
 * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using
 * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.
 *
 * @param {Options} options
 * @param {Implementation} implementation
 */
function createMachine(_ref, _ref2) {
  var states = _ref.states,
    context = _ref.context,
    initial = _ref.initial;
  var actions = _ref2.actions;
  var currentState = initial;
  var currentContext = context;
  return {
    send: function send(event) {
      var currentStateOn = states[currentState].on;
      var transitionConfig = currentStateOn && currentStateOn[event.type];
      if (transitionConfig) {
        currentState = transitionConfig.target;
        if (transitionConfig.actions) {
          transitionConfig.actions.forEach(function (actName) {
            var actionImpl = actions[actName];
            var nextContextValue = actionImpl && actionImpl(currentContext, event);
            if (nextContextValue) {
              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);
            }
          });
        }
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMachine);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/runtime-error.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/runtime-error.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenToRuntimeError": () => (/* binding */ listenToRuntimeError),
/* harmony export */   "parseErrorToStacks": () => (/* binding */ parseErrorToStacks)
/* harmony export */ });
/**
 *
 * @param {Error} error
 */
function parseErrorToStacks(error) {
  if (!error || !(error instanceof Error)) {
    throw new Error("parseErrorToStacks expects Error object");
  }
  if (typeof error.stack === "string") {
    return error.stack.split("\n").filter(function (stack) {
      return stack !== "Error: ".concat(error.message);
    });
  }
}

/**
 * @callback ErrorCallback
 * @param {ErrorEvent} error
 * @returns {void}
 */

/**
 * @param {ErrorCallback} callback
 */
function listenToRuntimeError(callback) {
  window.addEventListener("error", callback);
  return function cleanup() {
    window.removeEventListener("error", callback);
  };
}


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/state-machine.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/state-machine.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fsm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fsm.js */ "./node_modules/webpack-dev-server/client/overlay/fsm.js");


/**
 * @typedef {Object} ShowOverlayData
 * @property {'warning' | 'error'} level
 * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
 */

/**
 * @typedef {Object} CreateOverlayMachineOptions
 * @property {(data: ShowOverlayData) => void} showOverlay
 * @property {() => void} hideOverlay
 */

/**
 * @param {CreateOverlayMachineOptions} options
 */
var createOverlayMachine = function createOverlayMachine(options) {
  var hideOverlay = options.hideOverlay,
    showOverlay = options.showOverlay;
  var overlayMachine = (0,_fsm_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    initial: "hidden",
    context: {
      level: "error",
      messages: []
    },
    states: {
      hidden: {
        on: {
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      },
      displayBuildError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["appendMessages", "showOverlay"]
          }
        }
      },
      displayRuntimeError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["appendMessages", "showOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      }
    }
  }, {
    actions: {
      dismissMessages: function dismissMessages() {
        return {
          messages: [],
          level: "error"
        };
      },
      appendMessages: function appendMessages(context, event) {
        return {
          messages: context.messages.concat(event.messages),
          level: event.level || context.level
        };
      },
      setMessages: function setMessages(context, event) {
        return {
          messages: event.messages,
          level: event.level || context.level
        };
      },
      hideOverlay: hideOverlay,
      showOverlay: showOverlay
    }
  });
  return overlayMachine;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOverlayMachine);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay/styles.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay/styles.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containerStyle": () => (/* binding */ containerStyle),
/* harmony export */   "dismissButtonStyle": () => (/* binding */ dismissButtonStyle),
/* harmony export */   "headerStyle": () => (/* binding */ headerStyle),
/* harmony export */   "iframeStyle": () => (/* binding */ iframeStyle),
/* harmony export */   "msgStyles": () => (/* binding */ msgStyles),
/* harmony export */   "msgTextStyle": () => (/* binding */ msgTextStyle),
/* harmony export */   "msgTypeStyle": () => (/* binding */ msgTypeStyle)
/* harmony export */ });
// styles are inspired by `react-error-overlay`

var msgStyles = {
  error: {
    backgroundColor: "rgba(206, 17, 38, 0.1)",
    color: "#fccfcf"
  },
  warning: {
    backgroundColor: "rgba(251, 245, 180, 0.1)",
    color: "#fbf5b4"
  }
};
var iframeStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  border: "none",
  "z-index": 9999999999
};
var containerStyle = {
  position: "fixed",
  boxSizing: "border-box",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  fontSize: "large",
  padding: "2rem 2rem 4rem 2rem",
  lineHeight: "1.2",
  whiteSpace: "pre-wrap",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "white"
};
var headerStyle = {
  color: "#e83b46",
  fontSize: "2em",
  whiteSpace: "pre-wrap",
  fontFamily: "sans-serif",
  margin: "0 2rem 2rem 0",
  flex: "0 0 auto",
  maxHeight: "50%",
  overflow: "auto"
};
var dismissButtonStyle = {
  color: "#ffffff",
  lineHeight: "1rem",
  fontSize: "1.5rem",
  padding: "1rem",
  cursor: "pointer",
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: "transparent",
  border: "none"
};
var msgTypeStyle = {
  color: "#e83b46",
  fontSize: "1.2em",
  marginBottom: "1rem",
  fontFamily: "sans-serif"
};
var msgTextStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  fontFamily: "Menlo, Consolas, monospace"
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "client": () => (/* binding */ client),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */




// this WebsocketClient is here as a default fallback, in case the client is not injected
/* eslint-disable camelcase */
var Client =
// eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;

// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
// eslint-disable-next-line import/no-mutable-exports
var client = null;

/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */
var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    }

    // Try to reconnect.
    client = null;

    // After 10 retries stop trying, to prevent logspam.
    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);
    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/createSocketURL.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/createSocketURL.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";
  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }
  var auth = objURL.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var host = "";
  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));
    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }
  var pathname = objURL.pathname || "";
  if (objURL.slashes) {
    host = "//".concat(host || "");
    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }
  var search = objURL.search || "";
  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }
  var hash = objURL.hash || "";
  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }
  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */
function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname;

  // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'
  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]";

  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384
  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }
  var socketURLProtocol = parsedURL.protocol || self.location.protocol;

  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.
  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }
  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = "";

  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them
  if (parsedURL.username) {
    socketURLAuth = parsedURL.username;

    // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.
    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  }

  // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided
  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;
  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  }

  // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.
  var socketURLPathname = "/ws";
  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }
  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js":
/*!********************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  }

  // Fallback to getting all scripts running in the document.
  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });
  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  }

  // Fail as there was no script to use.
  throw new Error("[webpack-dev-server] Failed to get current script source.");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "logEnabledFeatures": () => (/* binding */ logEnabledFeatures),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server";
// default level is set on the client side, so it does not need
// to be set by the CLI or API
var defaultLevel = "info";

// options new options, merge with old options
/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */
function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}
setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);
var logEnabledFeatures = function logEnabledFeatures(features) {
  var enabledFeatures = Object.keys(features);
  if (!features || enabledFeatures.length === 0) {
    return;
  }
  var logString = "Server started:";

  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
  for (var i = 0; i < enabledFeatures.length; i++) {
    var key = enabledFeatures[i];
    logString += " ".concat(key, " ").concat(features[key] ? "enabled" : "disabled", ",");
  }
  // replace last comma with a period
  logString = logString.slice(0, -1).concat(".");
  log.info(logString);
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/parseURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/parseURL.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentScriptSource.js */ "./node_modules/webpack-dev-server/client/utils/getCurrentScriptSource.js");


/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */
function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};
  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.slice(1).split("&");
    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;
    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {
      // URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }
    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }
  return options;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/reloadApp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/reloadApp.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");



/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */
function reloadApp(_ref, status) {
  var hot = _ref.hot,
    liveReload = _ref.liveReload;
  if (status.isUnloading) {
    return;
  }
  var currentHash = status.currentHash,
    previousHash = status.previousHash;
  var isInitial = currentHash.indexOf( /** @type {string} */previousHash) >= 0;
  if (isInitial) {
    return;
  }

  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */
  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }
  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;
  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);
    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  }
  // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self;

    // use parent window for reload (in case we're in an iframe with no valid src)
    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;
        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global __resourceQuery WorkerGlobalScope */

// Send messages to the outside, so plugins can consume it.
/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/stripAnsi.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/stripAnsi.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");

/**
 *
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 *
 * @param {string} string
 * @return {string}
 */
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
  }
  return string.replace(ansiRegex, "");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripAnsi);

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
	var lastHash;
	var upToDate = function upToDate() {
		return lastHash.indexOf(__webpack_require__.h()) >= 0;
	};
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
	var check = function check() {
		module.hot
			.check(true)
			.then(function (updatedModules) {
				if (!updatedModules) {
					log(
						"warning",
						"[HMR] Cannot find update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log(
						"warning",
						"[HMR] (Probably because of restarting the webpack-dev-server)"
					);
					if (typeof window !== "undefined") {
						window.location.reload();
					}
					return;
				}

				if (!upToDate()) {
					check();
				}

				__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

				if (upToDate()) {
					log("info", "[HMR] App is up to date.");
				}
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log(
						"warning",
						"[HMR] Cannot apply update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log("warning", "[HMR] " + log.formatError(err));
					if (typeof window !== "undefined") {
						window.location.reload();
					}
				} else {
					log("warning", "[HMR] Update failed: " + log.formatError(err));
				}
			});
	};
	var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
	hotEmitter.on("webpackHotUpdate", function (currentHash) {
		lastHash = currentHash;
		if (!upToDate() && module.hot.status() === "idle") {
			log("info", "[HMR] Checking for updates on the server...");
			check();
		}
	});
	log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./src/scripts/sw.js":
/*!***************************!*\
  !*** ./src/scripts/sw.js ***!
  \***************************/
/***/ (() => {



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("sw." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e551f72607ab7dc8f036")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-apps:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"sw": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdaterestaurant_apps"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9000&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Atrue%7D&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/sw.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0IsU0FBUztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFB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MkJBQTJCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDJCQUEyQix5QkFBeUIsNkJBQTZCLDZCQUE2QiwyQkFBMkIseUJBQXlCLHVCQUF1Qiw2QkFBNkIsNkJBQTZCLDZCQUE2QiwyQkFBMkIsNkJBQTZCLHlCQUF5Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsMkJBQTJCLHlCQUF5Qix5QkFBeUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsY0FBYyxjQUFjLGVBQWUsZUFBZSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsZUFBZSxhQUFhLFlBQVksWUFBWSxZQUFZLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEsWUFBWSxjQUFjLGFBQWEsY0FBYyxlQUFlLFdBQVcsV0FBVyxXQUFXLGdCQUFnQixXQUFXLFlBQVksY0FBYyxZQUFZLGdCQUFnQixZQUFZLFlBQVksWUFBWSxjQUFjLGNBQWMsYUFBYSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEsWUFBWSxjQUFjLGFBQWEsY0FBYyxlQUFlLFdBQVcsV0FBVyxXQUFXLGdCQUFnQixXQUFXLFlBQVksZUFBZSxjQUFjLFlBQVksZ0JBQWdCLFlBQVksWUFBWSxZQUFZLGNBQWMsaUJBQWlCLGNBQWMsWUFBWSxhQUFhLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGNBQWMsYUFBYSxjQUFjLGdCQUFnQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZUFBZSxhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxXQUFXLGFBQWEsWUFBWSxjQUFjLGVBQWUsY0FBYyxhQUFhLGNBQWMsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksZUFBZSxZQUFZLGFBQWEsY0FBYyxXQUFXLGNBQWMsV0FBVyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGVBQWUsYUFBYSxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWUsYUFBYSxhQUFhLFlBQVksZUFBZSxjQUFjLGVBQWUsY0FBYyxNQUFNLGFBQWEsV0FBVyxhQUFhLGNBQWMsYUFBYSxjQUFjLGVBQWUsWUFBWSxlQUFlLGFBQWEsWUFBWSxhQUFhLGFBQWEsY0FBYyxZQUFZLFlBQVksWUFBWSxhQUFhLFlBQVksZUFBZSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsZUFBZSxjQUFjLGFBQWEsYUFBYSxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGFBQWEsZUFBZSxlQUFlLGNBQWMsYUFBYSxZQUFZLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLGVBQWUsY0FBYyxjQUFjLGVBQWUsZUFBZSxjQUFjLGVBQWUsYUFBYSxjQUFjLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLGVBQWUsZUFBZSxjQUFjLGFBQWEsWUFBWSxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsYUFBYSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsYUFBYSxlQUFlLGNBQWMsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLGNBQWMsY0FBYyxlQUFlLGVBQWUsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGVBQWUsYUFBYSxZQUFZLFlBQVksWUFBWSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixhQUFhLFlBQVksY0FBYyxhQUFhLGNBQWMsZUFBZSxXQUFXLFdBQVcsV0FBVyxnQkFBZ0IsV0FBVyxZQUFZLGNBQWMsWUFBWSxnQkFBZ0IsWUFBWSxZQUFZLFlBQVksY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixh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ZSxZQUFZLGFBQWEsa0JBQWtCLGNBQWMsb0JBQW9CLGVBQWUsZUFBZSxjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxlQUFlLGVBQWUsYUFBYSxpQkFBaUIsY0FBYyxlQUFlLGNBQWMsWUFBWSxlQUFlLGFBQWEsZUFBZSxjQUFjLGFBQWEsbUJBQW1CLGFBQWEseUJBQXlCLGFBQWEsY0FBYyxjQUFjLGNBQWMsbUJBQW1CLGNBQWMsYUFBYSxjQUFjLGFBQWEsaUJBQWlCLGdCQUFnQixnQkFBZ0IsY0FBYyxnQkFBZ0IsY0FBYyxjQUFjLGVBQWUsYUFBYSxjQUFjLGFBQWEsWUFBWSxjQUFjLGVBQWUsYUFBYSxhQUFhLGFBQWEsYUFBYSwwQkFBMEIsZUFBZSxlQUFlLGFBQWEsY0FBYyxjQUFjLGVBQWUsY0FBYyxlQUFlLGFBQWEsY0FBYyxjQUFjLGFBQWEsV0FBVyxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsZUFBZSxjQUFjLFlBQVksYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGVBQWUsZUFBZSxZQUFZLGFBQWEsYUFBYSxlQUFlLGlCQUFpQixjQUFjLGVBQWUsZUFBZSxlQUFlLGFBQWEsWUFBWSxjQUFjLFlBQVksY0FBYyxhQUFhLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsYUFBYSxpQkFBaUIsYUFBYSxjQUFjLGFBQWEsc0JBQXNCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsY0FBYyxnQkFBZ0IsaUJBQWlCLGVBQWUsZ0JBQWdCLGNBQWMsY0FBYyxZQUFZLGVBQWUsaUJBQWlCLGFBQWEsYUFBYSxjQUFjLGNBQWMsZUFBZSxlQUFlLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGlCQUFpQixpQkFBaUIsWUFBWSxlQUFlLGdCQUFnQixhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLGNBQWMsYUFBYSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGlCQUFpQixhQUFhLGNBQWMsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxpQkFBaUIsZUFBZSxjQUFjLGVBQWUsWUFBWSxlQUFlLGlCQUFpQixlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsY0FBYyxjQUFjLGdCQUFnQixhQUFhLGdCQUFnQixhQUFhLGFBQWEsYUFBYSxrQkFBa0IsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxXQUFXLGFBQWEsYUFBYSxjQUFjLGlCQUFpQixlQUFlLGdCQUFnQixpQkFBaUIsY0FBYyxjQUFjLGVBQWUsbUJBQW1CLGdCQUFnQixjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixnQkFBZ0Isb0JBQW9CLG9CQUFvQix1QkFBdUIsZ0JBQWdCLFlBQVksaUJBQWlCLGVBQWUsZUFBZSxlQUFlLGNBQWMsY0FBYyx3QkFBd0IsZ0JBQWdCLGNBQWMsY0FBYyxlQUFlLGNBQWMsZUFBZSxhQUFhLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxZQUFZLHVCQUF1QixjQUFjLFlBQVksY0FBYyxnQkFBZ0IsZUFBZSxhQUFhLGNBQWMsZUFBZSxjQUFjLGVBQWUsZUFBZSxhQUFhLGlCQUFpQixlQUFlLGFBQWEsY0FBYyxhQUFhLGVBQWUsZUFBZSxjQUFjLGlCQUFpQixlQUFlLGNBQWMsYUFBYSxhQUFhLGVBQWUsY0FBYyxxQkFBcUIsZ0JBQWdCLGFBQWEsaUJBQWlCLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxnQkFBZ0IsWUFBWSxhQUFhLHNCQUFzQixhQUFhLFdBQVcsZUFBZSxtQkFBbUIsZUFBZSxXQUFXLGlCQUFpQixZQUFZLG9CQUFvQixlQUFlLGNBQWMsbUJBQW1CLGVBQWUsZUFBZSxhQUFhLFlBQVksYUFBYSxjQUFjLGNBQWMsYUFBYSxlQUFlLGNBQWMsZ0JBQWdCLG1CQUFtQixlQUFlLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixjQUFjLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGNBQWMsa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxjQUFjLG1CQUFtQixlQUFlLGNBQWMsa0JBQWtCLGVBQWUsY0FBYyxZQUFZLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLGFBQWEsY0FBYyxhQUFhLFlBQVksWUFBWSxZQUFZLGNBQWMsaUJBQWlCLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxlQUFlLGVBQWUsZ0JBQWdCLGVBQWUsY0FBYyxlQUFlLGdCQUFnQiw0QkFBNEIsZUFBZSxjQUFjLGtCQUFrQixhQUFhLGVBQWUsYUFBYSxlQUFlLGVBQWUsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLFlBQVksYUFBYSxjQUFjLGFBQWEsZUFBZSxhQUFhLGFBQWEsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGNBQWMsaUJBQWlCLGlCQUFpQixpQkFBaUIsY0FBYyxhQUFhLGNBQWMsY0FBYyxhQUFhLGVBQWUsY0FBYyxjQUFjLGdCQUFnQixjQUFjLGVBQWUsZUFBZSxjQUFjLGFBQWEsY0FBYyxZQUFZLGFBQWEsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGNBQWMsaUJBQWlCLGVBQWUsWUFBWSxhQUFhLGVBQWUsYUFBYSxhQUFhLGNBQWMsY0FBYyxlQUFlLGNBQWMsbUJBQW1CLGFBQWEsZUFBZSxpQkFBaUIsZUFBZSxjQUFjLG1CQUFtQixjQUFjLGdCQUFnQixlQUFlLHNCQUFzQixlQUFlLGdCQUFnQixzQkFBc0IsWUFBWSxlQUFlLGFBQWEsZUFBZSxjQUFjLGNBQWMsSUFBSSxTQUFTLGFBQWEsY0FBYyxnQkFBZ0IsZ0JBQWdCLGVBQWUsZUFBZSxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixhQUFhLFlBQVksY0FBYyxlQUFlLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSxjQUFjLGVBQWUsYUFBYSxZQUFZLGVBQWUsY0FBYyxhQUFhLGVBQWUsY0FBYyxlQUFlLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsZUFBZSxjQUFjLGNBQWMsZUFBZSxnQkFBZ0IsZUFBZSxnQkFBZ0IsYUFBYSxlQUFlLGVBQWUsWUFBWSxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGVBQWUsZ0JBQWdCLGVBQWUscUJBQXFCLGlCQUFpQixnQkFBZ0IsY0FBYyxjQUFjLGNBQWMsYUFBYSxnQkFBZ0IsZUFBZSxlQUFlLFlBQVksY0FBYyxhQUFhLFlBQVksY0FBYyxlQUFlLGNBQWMsZ0JBQWdCLGFBQWEsZUFBZSxjQUFjLGNBQWMsV0FBVyxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxjQUFjLGVBQWUsY0FBYyxnQkFBZ0IsYUFBYSxlQUFlLGVBQWUsa0JBQWtCLGFBQWEsWUFBWSxjQUFjLGNBQWMsZUFBZSxlQUFlLGFBQWEsYUFBYSx3QkFBd0IsY0FBYyxZQUFZLGFBQWEsYUFBYSxlQUFlLG1CQUFtQixhQUFhLGNBQWMsWUFBWSxnQkFBZ0Isa0JBQWtCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZUFBZSxnQkFBZ0Isb0JBQW9CLGdCQUFnQixnQkFBZ0IsY0FBYyxhQUFhLG9CQUFvQixhQUFhLG9CQUFvQixlQUFlLFdBQVcsWUFBWSxlQUFlLGNBQWMsZUFBZSxlQUFlLGNBQWMsZUFBZSxjQUFjLGNBQWMsZ0JBQWdCLGVBQWUsY0FBYyxjQUFjLGlCQUFpQixlQUFlLGlCQUFpQixlQUFlLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxZQUFZLGVBQWUsYUFBYSxlQUFlLGNBQWMsY0FBYyxhQUFhLGFBQWEsZUFBZSxZQUFZLGNBQWMsY0FBYyxnQkFBZ0IsWUFBWSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEsY0FBYyxhQUFhLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGVBQWUsYUFBYSxnQkFBZ0IsWUFBWSxlQUFlLGFBQWEsZUFBZSxpQkFBaUIsYUFBYSxjQUFjLGFBQWEsZUFBZSxjQUFjLFlBQVksZUFBZSxlQUFlLGVBQWUsZ0JBQWdCLGFBQWEsWUFBWSxlQUFlLGNBQWMsV0FBVyxjQUFjLGdCQUFnQixhQUFhLGlCQUFpQixnQkFBZ0IsZUFBZSxjQUFjLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGNBQWMsY0FBYyxZQUFZLG1CQUFtQixjQUFjLGFBQWEsZUFBZSxjQUFjLGlCQUFpQixpQkFBaUIsaUJBQWlCLGVBQWUsY0FBYyxZQUFZLGVBQWUsYUFBYSxjQUFjLGVBQWUsY0FBYyxnQkFBZ0IsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGlCQUFpQixjQUFjLGNBQWMsY0FBYyxlQUFlLGdCQUFnQixjQUFjLGVBQWUsZUFBZSxnQkFBZ0IsdUJBQXVCLHdCQUF3QixlQUFlLGNBQWMsY0FBYyxJQUFJLFNBQVMsYUFBYSxjQUFjLGdCQUFnQixnQkFBZ0IsZUFBZSxlQUFlLFlBQVksYUFBYSxnQkFBZ0IsYUFBYSxhQUFhLGVBQWUsYUFBYSxlQUFlLFlBQVksZUFBZSxjQUFjLGVBQWUsYUFBYSxZQUFZLG1CQUFtQixjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxnQkFBZ0IsYUFBYSxlQUFlLGlCQUFpQixlQUFlLGNBQWMsZUFBZSxzQkFBc0IsaUJBQWlCLGdCQUFnQixXQUFXLGVBQWUsWUFBWSxtQkFBbUIsZUFBZSxlQUFlLGNBQWMsaUJBQWlCLG9CQUFvQixpQkFBaUIsaUJBQWlCLFlBQVksYUFBYSxjQUFjLGNBQWMsYUFBYSxJQUFJLFNBQVMsYUFBYSxhQUFhLGFBQWEsY0FBYyxlQUFlLGFBQWEsWUFBWSxjQUFjLGlCQUFpQixlQUFlLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxnQkFBZ0IsZ0JBQWdCLGVBQWUsaUJBQWlCLGVBQWUsWUFBWSxhQUFhLGVBQWUsZUFBZSxZQUFZLGFBQWEsZUFBZSxjQUFjLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLGNBQWMsYUFBYSxlQUFlLGtCQUFrQixlQUFlLGdCQUFnQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixnQkFBZ0IsZ0JBQWdCLGVBQWUsZUFBZSxlQUFlLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLGVBQWUsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixnQkFBZ0IsZUFBZSxlQUFlLGVBQWUsY0FBYyxlQUFlLGNBQWMsZUFBZSxZQUFZLGVBQWUsZUFBZSxZQUFZLGVBQWUsYUFBYSxjQUFjLGlCQUFpQixjQUFjLGNBQWMsaUJBQWlCLGVBQWUsZUFBZSxlQUFlLGNBQWMsZ0JBQWdCLGVBQWUsYUFBYSxhQUFhLGVBQWUsaUJBQWlCLGdCQUFnQixjQUFjLGdCQUFnQixpQkFBaUIsY0FBYyxhQUFhLGNBQWMsZUFBZSxhQUFhLGVBQWUsY0FBYyxlQUFlLGNBQWMsWUFBWSxlQUFlLGVBQWUsYUFBYSxlQUFlLGNBQWMsaUJBQWlCLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxnQkFBZ0IsY0FBYyxpQkFBaUIsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsYUFBYSxnQkFBZ0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLGdC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QTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBOzs7OztVRTlmQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvYW5zaS1odG1sLWNvbW11bml0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL25hbWVkLXJlZmVyZW5jZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL251bWVyaWMtdW5pY29kZS1tYXAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL2h0bWwtZW50aXRpZXMvbGliL3N1cnJvZ2F0ZS1wYWlycy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9jbGllbnRzL1dlYlNvY2tldENsaWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9tb2R1bGVzL2xvZ2dlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9vdmVybGF5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L292ZXJsYXkvZnNtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L292ZXJsYXkvcnVudGltZS1lcnJvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9vdmVybGF5L3N0YXRlLW1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvb3ZlcmxheS9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvc29ja2V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2NyZWF0ZVNvY2tldFVSTC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9nZXRDdXJyZW50U2NyaXB0U291cmNlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9wYXJzZVVSTC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9yZWxvYWRBcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc2VuZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc3RyaXBBbnNpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9kZXYtc2VydmVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9lbWl0dGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2ctYXBwbHktcmVzdWx0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuc2lIVE1MXG5cbi8vIFJlZmVyZW5jZSB0byBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2Fuc2ktcmVnZXhcbnZhciBfcmVnQU5TSSA9IC8oPzooPzpcXHUwMDFiXFxbKXxcXHUwMDliKSg/Oig/OlswLTldezEsM30pPyg/Oig/OjtbMC05XXswLDN9KSopP1tBLU18Zi1tXSl8XFx1MDAxYltBLU1dL1xuXG52YXIgX2RlZkNvbG9ycyA9IHtcbiAgcmVzZXQ6IFsnZmZmJywgJzAwMCddLCAvLyBbRk9SRUdST1VEX0NPTE9SLCBCQUNLR1JPVU5EX0NPTE9SXVxuICBibGFjazogJzAwMCcsXG4gIHJlZDogJ2ZmMDAwMCcsXG4gIGdyZWVuOiAnMjA5ODA1JyxcbiAgeWVsbG93OiAnZThiZjAzJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIG1hZ2VudGE6ICdmZjAwZmYnLFxuICBjeWFuOiAnMDBmZmVlJyxcbiAgbGlnaHRncmV5OiAnZjBmMGYwJyxcbiAgZGFya2dyZXk6ICc4ODgnXG59XG52YXIgX3N0eWxlcyA9IHtcbiAgMzA6ICdibGFjaycsXG4gIDMxOiAncmVkJyxcbiAgMzI6ICdncmVlbicsXG4gIDMzOiAneWVsbG93JyxcbiAgMzQ6ICdibHVlJyxcbiAgMzU6ICdtYWdlbnRhJyxcbiAgMzY6ICdjeWFuJyxcbiAgMzc6ICdsaWdodGdyZXknXG59XG52YXIgX29wZW5UYWdzID0ge1xuICAnMSc6ICdmb250LXdlaWdodDpib2xkJywgLy8gYm9sZFxuICAnMic6ICdvcGFjaXR5OjAuNScsIC8vIGRpbVxuICAnMyc6ICc8aT4nLCAvLyBpdGFsaWNcbiAgJzQnOiAnPHU+JywgLy8gdW5kZXJzY29yZVxuICAnOCc6ICdkaXNwbGF5Om5vbmUnLCAvLyBoaWRkZW5cbiAgJzknOiAnPGRlbD4nIC8vIGRlbGV0ZVxufVxudmFyIF9jbG9zZVRhZ3MgPSB7XG4gICcyMyc6ICc8L2k+JywgLy8gcmVzZXQgaXRhbGljXG4gICcyNCc6ICc8L3U+JywgLy8gcmVzZXQgdW5kZXJzY29yZVxuICAnMjknOiAnPC9kZWw+JyAvLyByZXNldCBkZWxldGVcbn1cblxuO1swLCAyMSwgMjIsIDI3LCAyOCwgMzksIDQ5XS5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gIF9jbG9zZVRhZ3Nbbl0gPSAnPC9zcGFuPidcbn0pXG5cbi8qKlxuICogQ29udmVydHMgdGV4dCB3aXRoIEFOU0kgY29sb3IgY29kZXMgdG8gSFRNTCBtYXJrdXAuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGFuc2lIVE1MICh0ZXh0KSB7XG4gIC8vIFJldHVybnMgdGhlIHRleHQgaWYgdGhlIHN0cmluZyBoYXMgbm8gQU5TSSBlc2NhcGUgY29kZS5cbiAgaWYgKCFfcmVnQU5TSS50ZXN0KHRleHQpKSB7XG4gICAgcmV0dXJuIHRleHRcbiAgfVxuXG4gIC8vIENhY2hlIG9wZW5lZCBzZXF1ZW5jZS5cbiAgdmFyIGFuc2lDb2RlcyA9IFtdXG4gIC8vIFJlcGxhY2Ugd2l0aCBtYXJrdXAuXG4gIHZhciByZXQgPSB0ZXh0LnJlcGxhY2UoL1xcMDMzXFxbKFxcZCspbS9nLCBmdW5jdGlvbiAobWF0Y2gsIHNlcSkge1xuICAgIHZhciBvdCA9IF9vcGVuVGFnc1tzZXFdXG4gICAgaWYgKG90KSB7XG4gICAgICAvLyBJZiBjdXJyZW50IHNlcXVlbmNlIGhhcyBiZWVuIG9wZW5lZCwgY2xvc2UgaXQuXG4gICAgICBpZiAoISF+YW5zaUNvZGVzLmluZGV4T2Yoc2VxKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWV4dHJhLWJvb2xlYW4tY2FzdFxuICAgICAgICBhbnNpQ29kZXMucG9wKClcbiAgICAgICAgcmV0dXJuICc8L3NwYW4+J1xuICAgICAgfVxuICAgICAgLy8gT3BlbiB0YWcuXG4gICAgICBhbnNpQ29kZXMucHVzaChzZXEpXG4gICAgICByZXR1cm4gb3RbMF0gPT09ICc8JyA/IG90IDogJzxzcGFuIHN0eWxlPVwiJyArIG90ICsgJztcIj4nXG4gICAgfVxuXG4gICAgdmFyIGN0ID0gX2Nsb3NlVGFnc1tzZXFdXG4gICAgaWYgKGN0KSB7XG4gICAgICAvLyBQb3Agc2VxdWVuY2VcbiAgICAgIGFuc2lDb2Rlcy5wb3AoKVxuICAgICAgcmV0dXJuIGN0XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9KVxuXG4gIC8vIE1ha2Ugc3VyZSB0YWdzIGFyZSBjbG9zZWQuXG4gIHZhciBsID0gYW5zaUNvZGVzLmxlbmd0aFxuICA7KGwgPiAwKSAmJiAocmV0ICs9IEFycmF5KGwgKyAxKS5qb2luKCc8L3NwYW4+JykpXG5cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIEN1c3RvbWl6ZSBjb2xvcnMuXG4gKiBAcGFyYW0ge09iamVjdH0gY29sb3JzIHJlZmVyZW5jZSB0byBfZGVmQ29sb3JzXG4gKi9cbmFuc2lIVE1MLnNldENvbG9ycyA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgaWYgKHR5cGVvZiBjb2xvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdgY29sb3JzYCBwYXJhbWV0ZXIgbXVzdCBiZSBhbiBPYmplY3QuJylcbiAgfVxuXG4gIHZhciBfZmluYWxDb2xvcnMgPSB7fVxuICBmb3IgKHZhciBrZXkgaW4gX2RlZkNvbG9ycykge1xuICAgIHZhciBoZXggPSBjb2xvcnMuaGFzT3duUHJvcGVydHkoa2V5KSA/IGNvbG9yc1trZXldIDogbnVsbFxuICAgIGlmICghaGV4KSB7XG4gICAgICBfZmluYWxDb2xvcnNba2V5XSA9IF9kZWZDb2xvcnNba2V5XVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKCdyZXNldCcgPT09IGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBoZXggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGhleCA9IFtoZXhdXG4gICAgICB9XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaGV4KSB8fCBoZXgubGVuZ3RoID09PSAwIHx8IGhleC5zb21lKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgaCAhPT0gJ3N0cmluZydcbiAgICAgIH0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZhbHVlIG9mIGAnICsga2V5ICsgJ2AgcHJvcGVydHkgbXVzdCBiZSBhbiBBcnJheSBhbmQgZWFjaCBpdGVtIGNvdWxkIG9ubHkgYmUgYSBoZXggc3RyaW5nLCBlLmcuOiBGRjAwMDAnKVxuICAgICAgfVxuICAgICAgdmFyIGRlZkhleENvbG9yID0gX2RlZkNvbG9yc1trZXldXG4gICAgICBpZiAoIWhleFswXSkge1xuICAgICAgICBoZXhbMF0gPSBkZWZIZXhDb2xvclswXVxuICAgICAgfVxuICAgICAgaWYgKGhleC5sZW5ndGggPT09IDEgfHwgIWhleFsxXSkge1xuICAgICAgICBoZXggPSBbaGV4WzBdXVxuICAgICAgICBoZXgucHVzaChkZWZIZXhDb2xvclsxXSlcbiAgICAgIH1cblxuICAgICAgaGV4ID0gaGV4LnNsaWNlKDAsIDIpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUgb2YgYCcgKyBrZXkgKyAnYCBwcm9wZXJ0eSBtdXN0IGJlIGEgaGV4IHN0cmluZywgZS5nLjogRkYwMDAwJylcbiAgICB9XG4gICAgX2ZpbmFsQ29sb3JzW2tleV0gPSBoZXhcbiAgfVxuICBfc2V0VGFncyhfZmluYWxDb2xvcnMpXG59XG5cbi8qKlxuICogUmVzZXQgY29sb3JzLlxuICovXG5hbnNpSFRNTC5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgX3NldFRhZ3MoX2RlZkNvbG9ycylcbn1cblxuLyoqXG4gKiBFeHBvc2UgdGFncywgaW5jbHVkaW5nIG9wZW4gYW5kIGNsb3NlLlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuYW5zaUhUTUwudGFncyA9IHt9XG5cbmlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuc2lIVE1MLnRhZ3MsICdvcGVuJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX29wZW5UYWdzIH1cbiAgfSlcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFuc2lIVE1MLnRhZ3MsICdjbG9zZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jbG9zZVRhZ3MgfVxuICB9KVxufSBlbHNlIHtcbiAgYW5zaUhUTUwudGFncy5vcGVuID0gX29wZW5UYWdzXG4gIGFuc2lIVE1MLnRhZ3MuY2xvc2UgPSBfY2xvc2VUYWdzXG59XG5cbmZ1bmN0aW9uIF9zZXRUYWdzIChjb2xvcnMpIHtcbiAgLy8gcmVzZXQgYWxsXG4gIF9vcGVuVGFnc1snMCddID0gJ2ZvbnQtd2VpZ2h0Om5vcm1hbDtvcGFjaXR5OjE7Y29sb3I6IycgKyBjb2xvcnMucmVzZXRbMF0gKyAnO2JhY2tncm91bmQ6IycgKyBjb2xvcnMucmVzZXRbMV1cbiAgLy8gaW52ZXJzZVxuICBfb3BlblRhZ3NbJzcnXSA9ICdjb2xvcjojJyArIGNvbG9ycy5yZXNldFsxXSArICc7YmFja2dyb3VuZDojJyArIGNvbG9ycy5yZXNldFswXVxuICAvLyBkYXJrIGdyZXlcbiAgX29wZW5UYWdzWyc5MCddID0gJ2NvbG9yOiMnICsgY29sb3JzLmRhcmtncmV5XG5cbiAgZm9yICh2YXIgY29kZSBpbiBfc3R5bGVzKSB7XG4gICAgdmFyIGNvbG9yID0gX3N0eWxlc1tjb2RlXVxuICAgIHZhciBvcmlDb2xvciA9IGNvbG9yc1tjb2xvcl0gfHwgJzAwMCdcbiAgICBfb3BlblRhZ3NbY29kZV0gPSAnY29sb3I6IycgKyBvcmlDb2xvclxuICAgIGNvZGUgPSBwYXJzZUludChjb2RlKVxuICAgIF9vcGVuVGFnc1soY29kZSArIDEwKS50b1N0cmluZygpXSA9ICdiYWNrZ3JvdW5kOiMnICsgb3JpQ29sb3JcbiAgfVxufVxuXG5hbnNpSFRNTC5yZXNldCgpXG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBlcnJvckxpc3RlbmVyKGVycikge1xuICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCByZXNvbHZlcik7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcigpIHtcbiAgICAgIGlmICh0eXBlb2YgZW1pdHRlci5yZW1vdmVMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG5cbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgcmVzb2x2ZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICBpZiAobmFtZSAhPT0gJ2Vycm9yJykge1xuICAgICAgYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgZXJyb3JMaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGhhbmRsZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCAnZXJyb3InLCBoYW5kbGVyLCBmbGFncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIGxpc3RlbmVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgZW1pdHRlci5vbmNlKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW1pdHRlci5vbihuYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBFdmVudFRhcmdldCBkb2VzIG5vdCBoYXZlIGBlcnJvcmAgZXZlbnQgc2VtYW50aWNzIGxpa2UgTm9kZVxuICAgIC8vIEV2ZW50RW1pdHRlcnMsIHdlIGRvIG5vdCBsaXN0ZW4gZm9yIGBlcnJvcmAgZXZlbnRzIGhlcmUuXG4gICAgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGZ1bmN0aW9uIHdyYXBMaXN0ZW5lcihhcmcpIHtcbiAgICAgIC8vIElFIGRvZXMgbm90IGhhdmUgYnVpbHRpbiBgeyBvbmNlOiB0cnVlIH1gIHN1cHBvcnQgc28gd2VcbiAgICAgIC8vIGhhdmUgdG8gZG8gaXQgbWFudWFsbHkuXG4gICAgICBpZiAoZmxhZ3Mub25jZSkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgd3JhcExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKGFyZyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBlbWl0dGVyKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG5hbWVkX3JlZmVyZW5jZXNfMSA9IHJlcXVpcmUoXCIuL25hbWVkLXJlZmVyZW5jZXNcIik7XG52YXIgbnVtZXJpY191bmljb2RlX21hcF8xID0gcmVxdWlyZShcIi4vbnVtZXJpYy11bmljb2RlLW1hcFwiKTtcbnZhciBzdXJyb2dhdGVfcGFpcnNfMSA9IHJlcXVpcmUoXCIuL3N1cnJvZ2F0ZS1wYWlyc1wiKTtcbnZhciBhbGxOYW1lZFJlZmVyZW5jZXMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbmFtZWRfcmVmZXJlbmNlc18xLm5hbWVkUmVmZXJlbmNlcyksIHsgYWxsOiBuYW1lZF9yZWZlcmVuY2VzXzEubmFtZWRSZWZlcmVuY2VzLmh0bWw1IH0pO1xudmFyIGVuY29kZVJlZ0V4cHMgPSB7XG4gICAgc3BlY2lhbENoYXJzOiAvWzw+J1wiJl0vZyxcbiAgICBub25Bc2NpaTogLyg/Ols8PidcIiZcXHUwMDgwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pL2csXG4gICAgbm9uQXNjaWlQcmludGFibGU6IC8oPzpbPD4nXCImXFx4MDEtXFx4MDhcXHgxMS1cXHgxNVxceDE3LVxceDFGXFx4N2YtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXSkvZyxcbiAgICBleHRlbnNpdmU6IC8oPzpbXFx4MDEtXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDJjXFx4MmUtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2RcXHg3Zi1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nXG59O1xudmFyIGRlZmF1bHRFbmNvZGVPcHRpb25zID0ge1xuICAgIG1vZGU6ICdzcGVjaWFsQ2hhcnMnLFxuICAgIGxldmVsOiAnYWxsJyxcbiAgICBudW1lcmljOiAnZGVjaW1hbCdcbn07XG4vKiogRW5jb2RlcyBhbGwgdGhlIG5lY2Vzc2FyeSAoc3BlY2lmaWVkIGJ5IGBsZXZlbGApIGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgKi9cbmZ1bmN0aW9uIGVuY29kZSh0ZXh0LCBfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyBkZWZhdWx0RW5jb2RlT3B0aW9ucyA6IF9hLCBfYyA9IF9iLm1vZGUsIG1vZGUgPSBfYyA9PT0gdm9pZCAwID8gJ3NwZWNpYWxDaGFycycgOiBfYywgX2QgPSBfYi5udW1lcmljLCBudW1lcmljID0gX2QgPT09IHZvaWQgMCA/ICdkZWNpbWFsJyA6IF9kLCBfZSA9IF9iLmxldmVsLCBsZXZlbCA9IF9lID09PSB2b2lkIDAgPyAnYWxsJyA6IF9lO1xuICAgIGlmICghdGV4dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBlbmNvZGVSZWdFeHAgPSBlbmNvZGVSZWdFeHBzW21vZGVdO1xuICAgIHZhciByZWZlcmVuY2VzID0gYWxsTmFtZWRSZWZlcmVuY2VzW2xldmVsXS5jaGFyYWN0ZXJzO1xuICAgIHZhciBpc0hleCA9IG51bWVyaWMgPT09ICdoZXhhZGVjaW1hbCc7XG4gICAgZW5jb2RlUmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gICAgdmFyIF9iID0gZW5jb2RlUmVnRXhwLmV4ZWModGV4dCk7XG4gICAgdmFyIF9jO1xuICAgIGlmIChfYikge1xuICAgICAgICBfYyA9ICcnO1xuICAgICAgICB2YXIgX2QgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoX2QgIT09IF9iLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgX2MgKz0gdGV4dC5zdWJzdHJpbmcoX2QsIF9iLmluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfZSA9IF9iWzBdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdF8xID0gcmVmZXJlbmNlc1tfZV07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdF8xKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGVfMSA9IF9lLmxlbmd0aCA+IDEgPyBzdXJyb2dhdGVfcGFpcnNfMS5nZXRDb2RlUG9pbnQoX2UsIDApIDogX2UuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICByZXN1bHRfMSA9IChpc0hleCA/ICcmI3gnICsgY29kZV8xLnRvU3RyaW5nKDE2KSA6ICcmIycgKyBjb2RlXzEpICsgJzsnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2MgKz0gcmVzdWx0XzE7XG4gICAgICAgICAgICBfZCA9IF9iLmluZGV4ICsgX2UubGVuZ3RoO1xuICAgICAgICB9IHdoaWxlICgoX2IgPSBlbmNvZGVSZWdFeHAuZXhlYyh0ZXh0KSkpO1xuICAgICAgICBpZiAoX2QgIT09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBfYyArPSB0ZXh0LnN1YnN0cmluZyhfZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIF9jID1cbiAgICAgICAgICAgIHRleHQ7XG4gICAgfVxuICAgIHJldHVybiBfYztcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xudmFyIGRlZmF1bHREZWNvZGVPcHRpb25zID0ge1xuICAgIHNjb3BlOiAnYm9keScsXG4gICAgbGV2ZWw6ICdhbGwnXG59O1xudmFyIHN0cmljdCA9IC8mKD86I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTsvZztcbnZhciBhdHRyaWJ1dGUgPSAvJig/OiNcXGQrfCNbeFhdW1xcZGEtZkEtRl0rfFswLTlhLXpBLVpdKylbOz1dPy9nO1xudmFyIGJhc2VEZWNvZGVSZWdFeHBzID0ge1xuICAgIHhtbDoge1xuICAgICAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUsXG4gICAgICAgIGJvZHk6IG5hbWVkX3JlZmVyZW5jZXNfMS5ib2R5UmVnRXhwcy54bWxcbiAgICB9LFxuICAgIGh0bWw0OiB7XG4gICAgICAgIHN0cmljdDogc3RyaWN0LFxuICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZSxcbiAgICAgICAgYm9keTogbmFtZWRfcmVmZXJlbmNlc18xLmJvZHlSZWdFeHBzLmh0bWw0XG4gICAgfSxcbiAgICBodG1sNToge1xuICAgICAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUsXG4gICAgICAgIGJvZHk6IG5hbWVkX3JlZmVyZW5jZXNfMS5ib2R5UmVnRXhwcy5odG1sNVxuICAgIH1cbn07XG52YXIgZGVjb2RlUmVnRXhwcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBiYXNlRGVjb2RlUmVnRXhwcyksIHsgYWxsOiBiYXNlRGVjb2RlUmVnRXhwcy5odG1sNSB9KTtcbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIG91dE9mQm91bmRzQ2hhciA9IGZyb21DaGFyQ29kZSg2NTUzMyk7XG52YXIgZGVmYXVsdERlY29kZUVudGl0eU9wdGlvbnMgPSB7XG4gICAgbGV2ZWw6ICdhbGwnXG59O1xuLyoqIERlY29kZXMgYSBzaW5nbGUgZW50aXR5ICovXG5mdW5jdGlvbiBkZWNvZGVFbnRpdHkoZW50aXR5LCBfYSkge1xuICAgIHZhciBfYiA9IChfYSA9PT0gdm9pZCAwID8gZGVmYXVsdERlY29kZUVudGl0eU9wdGlvbnMgOiBfYSkubGV2ZWwsIGxldmVsID0gX2IgPT09IHZvaWQgMCA/ICdhbGwnIDogX2I7XG4gICAgaWYgKCFlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgX2IgPSBlbnRpdHk7XG4gICAgdmFyIGRlY29kZUVudGl0eUxhc3RDaGFyXzEgPSBlbnRpdHlbZW50aXR5Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChmYWxzZVxuICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8xID09PSAnPScpIHtcbiAgICAgICAgX2IgPVxuICAgICAgICAgICAgZW50aXR5O1xuICAgIH1cbiAgICBlbHNlIGlmIChmYWxzZVxuICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8xICE9PSAnOycpIHtcbiAgICAgICAgX2IgPVxuICAgICAgICAgICAgZW50aXR5O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzEgPSBhbGxOYW1lZFJlZmVyZW5jZXNbbGV2ZWxdLmVudGl0aWVzW2VudGl0eV07XG4gICAgICAgIGlmIChkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZV8xKSB7XG4gICAgICAgICAgICBfYiA9IGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50aXR5WzBdID09PSAnJicgJiYgZW50aXR5WzFdID09PSAnIycpIHtcbiAgICAgICAgICAgIHZhciBkZWNvZGVTZWNvbmRDaGFyXzEgPSBlbnRpdHlbMl07XG4gICAgICAgICAgICB2YXIgZGVjb2RlQ29kZV8xID0gZGVjb2RlU2Vjb25kQ2hhcl8xID09ICd4JyB8fCBkZWNvZGVTZWNvbmRDaGFyXzEgPT0gJ1gnXG4gICAgICAgICAgICAgICAgPyBwYXJzZUludChlbnRpdHkuc3Vic3RyKDMpLCAxNilcbiAgICAgICAgICAgICAgICA6IHBhcnNlSW50KGVudGl0eS5zdWJzdHIoMikpO1xuICAgICAgICAgICAgX2IgPVxuICAgICAgICAgICAgICAgIGRlY29kZUNvZGVfMSA+PSAweDEwZmZmZlxuICAgICAgICAgICAgICAgICAgICA/IG91dE9mQm91bmRzQ2hhclxuICAgICAgICAgICAgICAgICAgICA6IGRlY29kZUNvZGVfMSA+IDY1NTM1XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHN1cnJvZ2F0ZV9wYWlyc18xLmZyb21Db2RlUG9pbnQoZGVjb2RlQ29kZV8xKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBmcm9tQ2hhckNvZGUobnVtZXJpY191bmljb2RlX21hcF8xLm51bWVyaWNVbmljb2RlTWFwW2RlY29kZUNvZGVfMV0gfHwgZGVjb2RlQ29kZV8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2I7XG59XG5leHBvcnRzLmRlY29kZUVudGl0eSA9IGRlY29kZUVudGl0eTtcbi8qKiBEZWNvZGVzIGFsbCBlbnRpdGllcyBpbiB0aGUgdGV4dCAqL1xuZnVuY3Rpb24gZGVjb2RlKHRleHQsIF9hKSB7XG4gICAgdmFyIGRlY29kZVNlY29uZENoYXJfMSA9IF9hID09PSB2b2lkIDAgPyBkZWZhdWx0RGVjb2RlT3B0aW9ucyA6IF9hLCBkZWNvZGVDb2RlXzEgPSBkZWNvZGVTZWNvbmRDaGFyXzEubGV2ZWwsIGxldmVsID0gZGVjb2RlQ29kZV8xID09PSB2b2lkIDAgPyAnYWxsJyA6IGRlY29kZUNvZGVfMSwgX2IgPSBkZWNvZGVTZWNvbmRDaGFyXzEuc2NvcGUsIHNjb3BlID0gX2IgPT09IHZvaWQgMCA/IGxldmVsID09PSAneG1sJyA/ICdzdHJpY3QnIDogJ2JvZHknIDogX2I7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIGRlY29kZVJlZ0V4cCA9IGRlY29kZVJlZ0V4cHNbbGV2ZWxdW3Njb3BlXTtcbiAgICB2YXIgcmVmZXJlbmNlcyA9IGFsbE5hbWVkUmVmZXJlbmNlc1tsZXZlbF0uZW50aXRpZXM7XG4gICAgdmFyIGlzQXR0cmlidXRlID0gc2NvcGUgPT09ICdhdHRyaWJ1dGUnO1xuICAgIHZhciBpc1N0cmljdCA9IHNjb3BlID09PSAnc3RyaWN0JztcbiAgICBkZWNvZGVSZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgICB2YXIgcmVwbGFjZU1hdGNoXzEgPSBkZWNvZGVSZWdFeHAuZXhlYyh0ZXh0KTtcbiAgICB2YXIgcmVwbGFjZVJlc3VsdF8xO1xuICAgIGlmIChyZXBsYWNlTWF0Y2hfMSkge1xuICAgICAgICByZXBsYWNlUmVzdWx0XzEgPSAnJztcbiAgICAgICAgdmFyIHJlcGxhY2VMYXN0SW5kZXhfMSA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlTGFzdEluZGV4XzEgIT09IHJlcGxhY2VNYXRjaF8xLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVJlc3VsdF8xICs9IHRleHQuc3Vic3RyaW5nKHJlcGxhY2VMYXN0SW5kZXhfMSwgcmVwbGFjZU1hdGNoXzEuaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlcGxhY2VJbnB1dF8xID0gcmVwbGFjZU1hdGNoXzFbMF07XG4gICAgICAgICAgICB2YXIgZGVjb2RlUmVzdWx0XzEgPSByZXBsYWNlSW5wdXRfMTtcbiAgICAgICAgICAgIHZhciBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yID0gcmVwbGFjZUlucHV0XzFbcmVwbGFjZUlucHV0XzEubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBpZiAoaXNBdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9IHJlcGxhY2VJbnB1dF8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpY3RcbiAgICAgICAgICAgICAgICAmJiBkZWNvZGVFbnRpdHlMYXN0Q2hhcl8yICE9PSAnOycpIHtcbiAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9IHJlcGxhY2VJbnB1dF8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzIgPSByZWZlcmVuY2VzW3JlcGxhY2VJbnB1dF8xXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVjb2RlUmVzdWx0QnlSZWZlcmVuY2VfMikge1xuICAgICAgICAgICAgICAgICAgICBkZWNvZGVSZXN1bHRfMSA9IGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlXzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcGxhY2VJbnB1dF8xWzBdID09PSAnJicgJiYgcmVwbGFjZUlucHV0XzFbMV0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjb2RlU2Vjb25kQ2hhcl8yID0gcmVwbGFjZUlucHV0XzFbMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvZGVDb2RlXzIgPSBkZWNvZGVTZWNvbmRDaGFyXzIgPT0gJ3gnIHx8IGRlY29kZVNlY29uZENoYXJfMiA9PSAnWCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQocmVwbGFjZUlucHV0XzEuc3Vic3RyKDMpLCAxNilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQocmVwbGFjZUlucHV0XzEuc3Vic3RyKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlUmVzdWx0XzEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlQ29kZV8yID49IDB4MTBmZmZmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvdXRPZkJvdW5kc0NoYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZUNvZGVfMiA+IDY1NTM1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc3Vycm9nYXRlX3BhaXJzXzEuZnJvbUNvZGVQb2ludChkZWNvZGVDb2RlXzIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKG51bWVyaWNfdW5pY29kZV9tYXBfMS5udW1lcmljVW5pY29kZU1hcFtkZWNvZGVDb2RlXzJdIHx8IGRlY29kZUNvZGVfMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVwbGFjZVJlc3VsdF8xICs9IGRlY29kZVJlc3VsdF8xO1xuICAgICAgICAgICAgcmVwbGFjZUxhc3RJbmRleF8xID0gcmVwbGFjZU1hdGNoXzEuaW5kZXggKyByZXBsYWNlSW5wdXRfMS5sZW5ndGg7XG4gICAgICAgIH0gd2hpbGUgKChyZXBsYWNlTWF0Y2hfMSA9IGRlY29kZVJlZ0V4cC5leGVjKHRleHQpKSk7XG4gICAgICAgIGlmIChyZXBsYWNlTGFzdEluZGV4XzEgIT09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXBsYWNlUmVzdWx0XzEgKz0gdGV4dC5zdWJzdHJpbmcocmVwbGFjZUxhc3RJbmRleF8xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVwbGFjZVJlc3VsdF8xID1cbiAgICAgICAgICAgIHRleHQ7XG4gICAgfVxuICAgIHJldHVybiByZXBsYWNlUmVzdWx0XzE7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbiIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5ib2R5UmVnRXhwcz17eG1sOi8mKD86I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTs/L2csaHRtbDQ6LyYoPzpuYnNwfGlleGNsfGNlbnR8cG91bmR8Y3VycmVufHllbnxicnZiYXJ8c2VjdHx1bWx8Y29weXxvcmRmfGxhcXVvfG5vdHxzaHl8cmVnfG1hY3J8ZGVnfHBsdXNtbnxzdXAyfHN1cDN8YWN1dGV8bWljcm98cGFyYXxtaWRkb3R8Y2VkaWx8c3VwMXxvcmRtfHJhcXVvfGZyYWMxNHxmcmFjMTJ8ZnJhYzM0fGlxdWVzdHxBZ3JhdmV8QWFjdXRlfEFjaXJjfEF0aWxkZXxBdW1sfEFyaW5nfEFFbGlnfENjZWRpbHxFZ3JhdmV8RWFjdXRlfEVjaXJjfEV1bWx8SWdyYXZlfElhY3V0ZXxJY2lyY3xJdW1sfEVUSHxOdGlsZGV8T2dyYXZlfE9hY3V0ZXxPY2lyY3xPdGlsZGV8T3VtbHx0aW1lc3xPc2xhc2h8VWdyYXZlfFVhY3V0ZXxVY2lyY3xVdW1sfFlhY3V0ZXxUSE9STnxzemxpZ3xhZ3JhdmV8YWFjdXRlfGFjaXJjfGF0aWxkZXxhdW1sfGFyaW5nfGFlbGlnfGNjZWRpbHxlZ3JhdmV8ZWFjdXRlfGVjaXJjfGV1bWx8aWdyYXZlfGlhY3V0ZXxpY2lyY3xpdW1sfGV0aHxudGlsZGV8b2dyYXZlfG9hY3V0ZXxvY2lyY3xvdGlsZGV8b3VtbHxkaXZpZGV8b3NsYXNofHVncmF2ZXx1YWN1dGV8dWNpcmN8dXVtbHx5YWN1dGV8dGhvcm58eXVtbHxxdW90fGFtcHxsdHxndHwjXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZyxodG1sNTovJig/OkFFbGlnfEFNUHxBYWN1dGV8QWNpcmN8QWdyYXZlfEFyaW5nfEF0aWxkZXxBdW1sfENPUFl8Q2NlZGlsfEVUSHxFYWN1dGV8RWNpcmN8RWdyYXZlfEV1bWx8R1R8SWFjdXRlfEljaXJjfElncmF2ZXxJdW1sfExUfE50aWxkZXxPYWN1dGV8T2NpcmN8T2dyYXZlfE9zbGFzaHxPdGlsZGV8T3VtbHxRVU9UfFJFR3xUSE9STnxVYWN1dGV8VWNpcmN8VWdyYXZlfFV1bWx8WWFjdXRlfGFhY3V0ZXxhY2lyY3xhY3V0ZXxhZWxpZ3xhZ3JhdmV8YW1wfGFyaW5nfGF0aWxkZXxhdW1sfGJydmJhcnxjY2VkaWx8Y2VkaWx8Y2VudHxjb3B5fGN1cnJlbnxkZWd8ZGl2aWRlfGVhY3V0ZXxlY2lyY3xlZ3JhdmV8ZXRofGV1bWx8ZnJhYzEyfGZyYWMxNHxmcmFjMzR8Z3R8aWFjdXRlfGljaXJjfGlleGNsfGlncmF2ZXxpcXVlc3R8aXVtbHxsYXF1b3xsdHxtYWNyfG1pY3JvfG1pZGRvdHxuYnNwfG5vdHxudGlsZGV8b2FjdXRlfG9jaXJjfG9ncmF2ZXxvcmRmfG9yZG18b3NsYXNofG90aWxkZXxvdW1sfHBhcmF8cGx1c21ufHBvdW5kfHF1b3R8cmFxdW98cmVnfHNlY3R8c2h5fHN1cDF8c3VwMnxzdXAzfHN6bGlnfHRob3JufHRpbWVzfHVhY3V0ZXx1Y2lyY3x1Z3JhdmV8dW1sfHV1bWx8eWFjdXRlfHllbnx5dW1sfCNcXGQrfCNbeFhdW1xcZGEtZkEtRl0rfFswLTlhLXpBLVpdKyk7Py9nfTtleHBvcnRzLm5hbWVkUmVmZXJlbmNlcz17eG1sOntlbnRpdGllczp7XCImbHQ7XCI6XCI8XCIsXCImZ3Q7XCI6XCI+XCIsXCImcXVvdDtcIjonXCInLFwiJmFwb3M7XCI6XCInXCIsXCImYW1wO1wiOlwiJlwifSxjaGFyYWN0ZXJzOntcIjxcIjpcIiZsdDtcIixcIj5cIjpcIiZndDtcIiwnXCInOlwiJnF1b3Q7XCIsXCInXCI6XCImYXBvcztcIixcIiZcIjpcIiZhbXA7XCJ9fSxodG1sNDp7ZW50aXRpZXM6e1wiJmFwb3M7XCI6XCInXCIsXCImbmJzcFwiOlwiwqBcIixcIiZuYnNwO1wiOlwiwqBcIixcIiZpZXhjbFwiOlwiwqFcIixcIiZpZXhjbDtcIjpcIsKhXCIsXCImY2VudFwiOlwiwqJcIixcIiZjZW50O1wiOlwiwqJcIixcIiZwb3VuZFwiOlwiwqNcIixcIiZwb3VuZDtcIjpcIsKjXCIsXCImY3VycmVuXCI6XCLCpFwiLFwiJmN1cnJlbjtcIjpcIsKkXCIsXCImeWVuXCI6XCLCpVwiLFwiJnllbjtcIjpcIsKlXCIsXCImYnJ2YmFyXCI6XCLCplwiLFwiJmJydmJhcjtcIjpcIsKmXCIsXCImc2VjdFwiOlwiwqdcIixcIiZzZWN0O1wiOlwiwqdcIixcIiZ1bWxcIjpcIsKoXCIsXCImdW1sO1wiOlwiwqhcIixcIiZjb3B5XCI6XCLCqVwiLFwiJmNvcHk7XCI6XCLCqVwiLFwiJm9yZGZcIjpcIsKqXCIsXCImb3JkZjtcIjpcIsKqXCIsXCImbGFxdW9cIjpcIsKrXCIsXCImbGFxdW87XCI6XCLCq1wiLFwiJm5vdFwiOlwiwqxcIixcIiZub3Q7XCI6XCLCrFwiLFwiJnNoeVwiOlwiwq1cIixcIiZzaHk7XCI6XCLCrVwiLFwiJnJlZ1wiOlwiwq5cIixcIiZyZWc7XCI6XCLCrlwiLFwiJm1hY3JcIjpcIsKvXCIsXCImbWFjcjtcIjpcIsKvXCIsXCImZGVnXCI6XCLCsFwiLFwiJmRlZztcIjpcIsKwXCIsXCImcGx1c21uXCI6XCLCsVwiLFwiJnBsdXNtbjtcIjpcIsKxXCIsXCImc3VwMlwiOlwiwrJcIixcIiZzdXAyO1wiOlwiwrJcIixcIiZzdXAzXCI6XCLCs1wiLFwiJnN1cDM7XCI6XCLCs1wiLFwiJmFjdXRlXCI6XCLCtFwiLFwiJmFjdXRlO1wiOlwiwrRcIixcIiZtaWNyb1wiOlwiwrVcIixcIiZtaWNybztcIjpcIsK1XCIsXCImcGFyYVwiOlwiwrZcIixcIiZwYXJhO1wiOlwiwrZcIixcIiZtaWRkb3RcIjpcIsK3XCIsXCImbWlkZG90O1wiOlwiwrdcIixcIiZjZWRpbFwiOlwiwrhcIixcIiZjZWRpbDtcIjpcIsK4XCIsXCImc3VwMVwiOlwiwrlcIixcIiZzdXAxO1wiOlwiwrlcIixcIiZvcmRtXCI6XCLCulwiLFwiJm9yZG07XCI6XCLCulwiLFwiJnJhcXVvXCI6XCLCu1wiLFwiJnJhcXVvO1wiOlwiwrtcIixcIiZmcmFjMTRcIjpcIsK8XCIsXCImZnJhYzE0O1wiOlwiwrxcIixcIiZmcmFjMTJcIjpcIsK9XCIsXCImZnJhYzEyO1wiOlwiwr1cIixcIiZmcmFjMzRcIjpcIsK+XCIsXCImZnJhYzM0O1wiOlwiwr5cIixcIiZpcXVlc3RcIjpcIsK/XCIsXCImaXF1ZXN0O1wiOlwiwr9cIixcIiZBZ3JhdmVcIjpcIsOAXCIsXCImQWdyYXZlO1wiOlwiw4BcIixcIiZBYWN1dGVcIjpcIsOBXCIsXCImQWFjdXRlO1wiOlwiw4FcIixcIiZBY2lyY1wiOlwiw4JcIixcIiZBY2lyYztcIjpcIsOCXCIsXCImQXRpbGRlXCI6XCLDg1wiLFwiJkF0aWxkZTtcIjpcIsODXCIsXCImQXVtbFwiOlwiw4RcIixcIiZBdW1sO1wiOlwiw4RcIixcIiZBcmluZ1wiOlwiw4VcIixcIiZBcmluZztcIjpcIsOFXCIsXCImQUVsaWdcIjpcIsOGXCIsXCImQUVsaWc7XCI6XCLDhlwiLFwiJkNjZWRpbFwiOlwiw4dcIixcIiZDY2VkaWw7XCI6XCLDh1wiLFwiJkVncmF2ZVwiOlwiw4hcIixcIiZFZ3JhdmU7XCI6XCLDiFwiLFwiJkVhY3V0ZVwiOlwiw4lcIixcIiZFYWN1dGU7XCI6XCLDiVwiLFwiJkVjaXJjXCI6XCLDilwiLFwiJkVjaXJjO1wiOlwiw4pcIixcIiZFdW1sXCI6XCLDi1wiLFwiJkV1bWw7XCI6XCLDi1wiLFwiJklncmF2ZVwiOlwiw4xcIixcIiZJZ3JhdmU7XCI6XCLDjFwiLFwiJklhY3V0ZVwiOlwiw41cIixcIiZJYWN1dGU7XCI6XCLDjVwiLFwiJkljaXJjXCI6XCLDjlwiLFwiJkljaXJjO1wiOlwiw45cIixcIiZJdW1sXCI6XCLDj1wiLFwiJkl1bWw7XCI6XCLDj1wiLFwiJkVUSFwiOlwiw5BcIixcIiZFVEg7XCI6XCLDkFwiLFwiJk50aWxkZVwiOlwiw5FcIixcIiZOdGlsZGU7XCI6XCLDkVwiLFwiJk9ncmF2ZVwiOlwiw5JcIixcIiZPZ3JhdmU7XCI6XCLDklwiLFwiJk9hY3V0ZVwiOlwiw5NcIixcIiZPYWN1dGU7XCI6XCLDk1wiLFwiJk9jaXJjXCI6XCLDlFwiLFwiJk9jaXJjO1wiOlwiw5RcIixcIiZPdGlsZGVcIjpcIsOVXCIsXCImT3RpbGRlO1wiOlwiw5VcIixcIiZPdW1sXCI6XCLDllwiLFwiJk91bWw7XCI6XCLDllwiLFwiJnRpbWVzXCI6XCLDl1wiLFwiJnRpbWVzO1wiOlwiw5dcIixcIiZPc2xhc2hcIjpcIsOYXCIsXCImT3NsYXNoO1wiOlwiw5hcIixcIiZVZ3JhdmVcIjpcIsOZXCIsXCImVWdyYXZlO1wiOlwiw5lcIixcIiZVYWN1dGVcIjpcIsOaXCIsXCImVWFjdXRlO1wiOlwiw5pcIixcIiZVY2lyY1wiOlwiw5tcIixcIiZVY2lyYztcIjpcIsObXCIsXCImVXVtbFwiOlwiw5xcIixcIiZVdW1sO1wiOlwiw5xcIixcIiZZYWN1dGVcIjpcIsOdXCIsXCImWWFjdXRlO1wiOlwiw51cIixcIiZUSE9STlwiOlwiw55cIixcIiZUSE9STjtcIjpcIsOeXCIsXCImc3psaWdcIjpcIsOfXCIsXCImc3psaWc7XCI6XCLDn1wiLFwiJmFncmF2ZVwiOlwiw6BcIixcIiZhZ3JhdmU7XCI6XCLDoFwiLFwiJmFhY3V0ZVwiOlwiw6FcIixcIiZhYWN1dGU7XCI6XCLDoVwiLFwiJmFjaXJjXCI6XCLDolwiLFwiJmFjaXJjO1wiOlwiw6JcIixcIiZhdGlsZGVcIjpcIsOjXCIsXCImYXRpbGRlO1wiOlwiw6NcIixcIiZhdW1sXCI6XCLDpFwiLFwiJmF1bWw7XCI6XCLDpFwiLFwiJmFyaW5nXCI6XCLDpVwiLFwiJmFyaW5nO1wiOlwiw6VcIixcIiZhZWxpZ1wiOlwiw6ZcIixcIiZhZWxpZztcIjpcIsOmXCIsXCImY2NlZGlsXCI6XCLDp1wiLFwiJmNjZWRpbDtcIjpcIsOnXCIsXCImZWdyYXZlXCI6XCLDqFwiLFwiJmVncmF2ZTtcIjpcIsOoXCIsXCImZWFjdXRlXCI6XCLDqVwiLFwiJmVhY3V0ZTtcIjpcIsOpXCIsXCImZWNpcmNcIjpcIsOqXCIsXCImZWNpcmM7XCI6XCLDqlwiLFwiJmV1bWxcIjpcIsOrXCIsXCImZXVtbDtcIjpcIsOrXCIsXCImaWdyYXZlXCI6XCLDrFwiLFwiJmlncmF2ZTtcIjpcIsOsXCIsXCImaWFjdXRlXCI6XCLDrVwiLFwiJmlhY3V0ZTtcIjpcIsOtXCIsXCImaWNpcmNcIjpcIsOuXCIsXCImaWNpcmM7XCI6XCLDrlwiLFwiJml1bWxcIjpcIsOvXCIsXCImaXVtbDtcIjpcIsOvXCIsXCImZXRoXCI6XCLDsFwiLFwiJmV0aDtcIjpcIsOwXCIsXCImbnRpbGRlXCI6XCLDsVwiLFwiJm50aWxkZTtcIjpcIsOxXCIsXCImb2dyYXZlXCI6XCLDslwiLFwiJm9ncmF2ZTtcIjpcIsOyXCIsXCImb2FjdXRlXCI6XCLDs1wiLFwiJm9hY3V0ZTtcIjpcIsOzXCIsXCImb2NpcmNcIjpcIsO0XCIsXCImb2NpcmM7XCI6XCLDtFwiLFwiJm90aWxkZVwiOlwiw7VcIixcIiZvdGlsZGU7XCI6XCLDtVwiLFwiJm91bWxcIjpcIsO2XCIsXCImb3VtbDtcIjpcIsO2XCIsXCImZGl2aWRlXCI6XCLDt1wiLFwiJmRpdmlkZTtcIjpcIsO3XCIsXCImb3NsYXNoXCI6XCLDuFwiLFwiJm9zbGFzaDtcIjpcIsO4XCIsXCImdWdyYXZlXCI6XCLDuVwiLFwiJnVncmF2ZTtcIjpcIsO5XCIsXCImdWFjdXRlXCI6XCLDulwiLFwiJnVhY3V0ZTtcIjpcIsO6XCIsXCImdWNpcmNcIjpcIsO7XCIsXCImdWNpcmM7XCI6XCLDu1wiLFwiJnV1bWxcIjpcIsO8XCIsXCImdXVtbDtcIjpcIsO8XCIsXCImeWFjdXRlXCI6XCLDvVwiLFwiJnlhY3V0ZTtcIjpcIsO9XCIsXCImdGhvcm5cIjpcIsO+XCIsXCImdGhvcm47XCI6XCLDvlwiLFwiJnl1bWxcIjpcIsO/XCIsXCImeXVtbDtcIjpcIsO/XCIsXCImcXVvdFwiOidcIicsXCImcXVvdDtcIjonXCInLFwiJmFtcFwiOlwiJlwiLFwiJmFtcDtcIjpcIiZcIixcIiZsdFwiOlwiPFwiLFwiJmx0O1wiOlwiPFwiLFwiJmd0XCI6XCI+XCIsXCImZ3Q7XCI6XCI+XCIsXCImT0VsaWc7XCI6XCLFklwiLFwiJm9lbGlnO1wiOlwixZNcIixcIiZTY2Fyb247XCI6XCLFoFwiLFwiJnNjYXJvbjtcIjpcIsWhXCIsXCImWXVtbDtcIjpcIsW4XCIsXCImY2lyYztcIjpcIsuGXCIsXCImdGlsZGU7XCI6XCLLnFwiLFwiJmVuc3A7XCI6XCLigIJcIixcIiZlbXNwO1wiOlwi4oCDXCIsXCImdGhpbnNwO1wiOlwi4oCJXCIsXCImenduajtcIjpcIuKAjFwiLFwiJnp3ajtcIjpcIuKAjVwiLFwiJmxybTtcIjpcIuKAjlwiLFwiJnJsbTtcIjpcIuKAj1wiLFwiJm5kYXNoO1wiOlwi4oCTXCIsXCImbWRhc2g7XCI6XCLigJRcIixcIiZsc3F1bztcIjpcIuKAmFwiLFwiJnJzcXVvO1wiOlwi4oCZXCIsXCImc2JxdW87XCI6XCLigJpcIixcIiZsZHF1bztcIjpcIuKAnFwiLFwiJnJkcXVvO1wiOlwi4oCdXCIsXCImYmRxdW87XCI6XCLigJ5cIixcIiZkYWdnZXI7XCI6XCLigKBcIixcIiZEYWdnZXI7XCI6XCLigKFcIixcIiZwZXJtaWw7XCI6XCLigLBcIixcIiZsc2FxdW87XCI6XCLigLlcIixcIiZyc2FxdW87XCI6XCLigLpcIixcIiZldXJvO1wiOlwi4oKsXCIsXCImZm5vZjtcIjpcIsaSXCIsXCImQWxwaGE7XCI6XCLOkVwiLFwiJkJldGE7XCI6XCLOklwiLFwiJkdhbW1hO1wiOlwizpNcIixcIiZEZWx0YTtcIjpcIs6UXCIsXCImRXBzaWxvbjtcIjpcIs6VXCIsXCImWmV0YTtcIjpcIs6WXCIsXCImRXRhO1wiOlwizpdcIixcIiZUaGV0YTtcIjpcIs6YXCIsXCImSW90YTtcIjpcIs6ZXCIsXCImS2FwcGE7XCI6XCLOmlwiLFwiJkxhbWJkYTtcIjpcIs6bXCIsXCImTXU7XCI6XCLOnFwiLFwiJk51O1wiOlwizp1cIixcIiZYaTtcIjpcIs6eXCIsXCImT21pY3JvbjtcIjpcIs6fXCIsXCImUGk7XCI6XCLOoFwiLFwiJlJobztcIjpcIs6hXCIsXCImU2lnbWE7XCI6XCLOo1wiLFwiJlRhdTtcIjpcIs6kXCIsXCImVXBzaWxvbjtcIjpcIs6lXCIsXCImUGhpO1wiOlwizqZcIixcIiZDaGk7XCI6XCLOp1wiLFwiJlBzaTtcIjpcIs6oXCIsXCImT21lZ2E7XCI6XCLOqVwiLFwiJmFscGhhO1wiOlwizrFcIixcIiZiZXRhO1wiOlwizrJcIixcIiZnYW1tYTtcIjpcIs6zXCIsXCImZGVsdGE7XCI6XCLOtFwiLFwiJmVwc2lsb247XCI6XCLOtVwiLFwiJnpldGE7XCI6XCLOtlwiLFwiJmV0YTtcIjpcIs63XCIsXCImdGhldGE7XCI6XCLOuFwiLFwiJmlvdGE7XCI6XCLOuVwiLFwiJmthcHBhO1wiOlwizrpcIixcIiZsYW1iZGE7XCI6XCLOu1wiLFwiJm11O1wiOlwizrxcIixcIiZudTtcIjpcIs69XCIsXCImeGk7XCI6XCLOvlwiLFwiJm9taWNyb247XCI6XCLOv1wiLFwiJnBpO1wiOlwiz4BcIixcIiZyaG87XCI6XCLPgVwiLFwiJnNpZ21hZjtcIjpcIs+CXCIsXCImc2lnbWE7XCI6XCLPg1wiLFwiJnRhdTtcIjpcIs+EXCIsXCImdXBzaWxvbjtcIjpcIs+FXCIsXCImcGhpO1wiOlwiz4ZcIixcIiZjaGk7XCI6XCLPh1wiLFwiJnBzaTtcIjpcIs+IXCIsXCImb21lZ2E7XCI6XCLPiVwiLFwiJnRoZXRhc3ltO1wiOlwiz5FcIixcIiZ1cHNpaDtcIjpcIs+SXCIsXCImcGl2O1wiOlwiz5ZcIixcIiZidWxsO1wiOlwi4oCiXCIsXCImaGVsbGlwO1wiOlwi4oCmXCIsXCImcHJpbWU7XCI6XCLigLJcIixcIiZQcmltZTtcIjpcIuKAs1wiLFwiJm9saW5lO1wiOlwi4oC+XCIsXCImZnJhc2w7XCI6XCLigYRcIixcIiZ3ZWllcnA7XCI6XCLihJhcIixcIiZpbWFnZTtcIjpcIuKEkVwiLFwiJnJlYWw7XCI6XCLihJxcIixcIiZ0cmFkZTtcIjpcIuKEolwiLFwiJmFsZWZzeW07XCI6XCLihLVcIixcIiZsYXJyO1wiOlwi4oaQXCIsXCImdWFycjtcIjpcIuKGkVwiLFwiJnJhcnI7XCI6XCLihpJcIixcIiZkYXJyO1wiOlwi4oaTXCIsXCImaGFycjtcIjpcIuKGlFwiLFwiJmNyYXJyO1wiOlwi4oa1XCIsXCImbEFycjtcIjpcIuKHkFwiLFwiJnVBcnI7XCI6XCLih5FcIixcIiZyQXJyO1wiOlwi4oeSXCIsXCImZEFycjtcIjpcIuKHk1wiLFwiJmhBcnI7XCI6XCLih5RcIixcIiZmb3JhbGw7XCI6XCLiiIBcIixcIiZwYXJ0O1wiOlwi4oiCXCIsXCImZXhpc3Q7XCI6XCLiiINcIixcIiZlbXB0eTtcIjpcIuKIhVwiLFwiJm5hYmxhO1wiOlwi4oiHXCIsXCImaXNpbjtcIjpcIuKIiFwiLFwiJm5vdGluO1wiOlwi4oiJXCIsXCImbmk7XCI6XCLiiItcIixcIiZwcm9kO1wiOlwi4oiPXCIsXCImc3VtO1wiOlwi4oiRXCIsXCImbWludXM7XCI6XCLiiJJcIixcIiZsb3dhc3Q7XCI6XCLiiJdcIixcIiZyYWRpYztcIjpcIuKImlwiLFwiJnByb3A7XCI6XCLiiJ1cIixcIiZpbmZpbjtcIjpcIuKInlwiLFwiJmFuZztcIjpcIuKIoFwiLFwiJmFuZDtcIjpcIuKIp1wiLFwiJm9yO1wiOlwi4oioXCIsXCImY2FwO1wiOlwi4oipXCIsXCImY3VwO1wiOlwi4oiqXCIsXCImaW50O1wiOlwi4oirXCIsXCImdGhlcmU0O1wiOlwi4oi0XCIsXCImc2ltO1wiOlwi4oi8XCIsXCImY29uZztcIjpcIuKJhVwiLFwiJmFzeW1wO1wiOlwi4omIXCIsXCImbmU7XCI6XCLiiaBcIixcIiZlcXVpdjtcIjpcIuKJoVwiLFwiJmxlO1wiOlwi4omkXCIsXCImZ2U7XCI6XCLiiaVcIixcIiZzdWI7XCI6XCLiioJcIixcIiZzdXA7XCI6XCLiioNcIixcIiZuc3ViO1wiOlwi4oqEXCIsXCImc3ViZTtcIjpcIuKKhlwiLFwiJnN1cGU7XCI6XCLiiodcIixcIiZvcGx1cztcIjpcIuKKlVwiLFwiJm90aW1lcztcIjpcIuKKl1wiLFwiJnBlcnA7XCI6XCLiiqVcIixcIiZzZG90O1wiOlwi4ouFXCIsXCImbGNlaWw7XCI6XCLijIhcIixcIiZyY2VpbDtcIjpcIuKMiVwiLFwiJmxmbG9vcjtcIjpcIuKMilwiLFwiJnJmbG9vcjtcIjpcIuKMi1wiLFwiJmxhbmc7XCI6XCLijKlcIixcIiZyYW5nO1wiOlwi4oyqXCIsXCImbG96O1wiOlwi4peKXCIsXCImc3BhZGVzO1wiOlwi4pmgXCIsXCImY2x1YnM7XCI6XCLimaNcIixcIiZoZWFydHM7XCI6XCLimaVcIixcIiZkaWFtcztcIjpcIuKZplwifSxjaGFyYWN0ZXJzOntcIidcIjpcIiZhcG9zO1wiLFwiwqBcIjpcIiZuYnNwO1wiLFwiwqFcIjpcIiZpZXhjbDtcIixcIsKiXCI6XCImY2VudDtcIixcIsKjXCI6XCImcG91bmQ7XCIsXCLCpFwiOlwiJmN1cnJlbjtcIixcIsKlXCI6XCImeWVuO1wiLFwiwqZcIjpcIiZicnZiYXI7XCIsXCLCp1wiOlwiJnNlY3Q7XCIsXCLCqFwiOlwiJnVtbDtcIixcIsKpXCI6XCImY29weTtcIixcIsKqXCI6XCImb3JkZjtcIixcIsKrXCI6XCImbGFxdW87XCIsXCLCrFwiOlwiJm5vdDtcIixcIsKtXCI6XCImc2h5O1wiLFwiwq5cIjpcIiZyZWc7XCIsXCLCr1wiOlwiJm1hY3I7XCIsXCLCsFwiOlwiJmRlZztcIixcIsKxXCI6XCImcGx1c21uO1wiLFwiwrJcIjpcIiZzdXAyO1wiLFwiwrNcIjpcIiZzdXAzO1wiLFwiwrRcIjpcIiZhY3V0ZTtcIixcIsK1XCI6XCImbWljcm87XCIsXCLCtlwiOlwiJnBhcmE7XCIsXCLCt1wiOlwiJm1pZGRvdDtcIixcIsK4XCI6XCImY2VkaWw7XCIsXCLCuVwiOlwiJnN1cDE7XCIsXCLCulwiOlwiJm9yZG07XCIsXCLCu1wiOlwiJnJhcXVvO1wiLFwiwrxcIjpcIiZmcmFjMTQ7XCIsXCLCvVwiOlwiJmZyYWMxMjtcIixcIsK+XCI6XCImZnJhYzM0O1wiLFwiwr9cIjpcIiZpcXVlc3Q7XCIsXCLDgFwiOlwiJkFncmF2ZTtcIixcIsOBXCI6XCImQWFjdXRlO1wiLFwiw4JcIjpcIiZBY2lyYztcIixcIsODXCI6XCImQXRpbGRlO1wiLFwiw4RcIjpcIiZBdW1sO1wiLFwiw4VcIjpcIiZBcmluZztcIixcIsOGXCI6XCImQUVsaWc7XCIsXCLDh1wiOlwiJkNjZWRpbDtcIixcIsOIXCI6XCImRWdyYXZlO1wiLFwiw4lcIjpcIiZFYWN1dGU7XCIsXCLDilwiOlwiJkVjaXJjO1wiLFwiw4tcIjpcIiZFdW1sO1wiLFwiw4xcIjpcIiZJZ3JhdmU7XCIsXCLDjVwiOlwiJklhY3V0ZTtcIixcIsOOXCI6XCImSWNpcmM7XCIsXCLDj1wiOlwiJkl1bWw7XCIsXCLDkFwiOlwiJkVUSDtcIixcIsORXCI6XCImTnRpbGRlO1wiLFwiw5JcIjpcIiZPZ3JhdmU7XCIsXCLDk1wiOlwiJk9hY3V0ZTtcIixcIsOUXCI6XCImT2NpcmM7XCIsXCLDlVwiOlwiJk90aWxkZTtcIixcIsOWXCI6XCImT3VtbDtcIixcIsOXXCI6XCImdGltZXM7XCIsXCLDmFwiOlwiJk9zbGFzaDtcIixcIsOZXCI6XCImVWdyYXZlO1wiLFwiw5pcIjpcIiZVYWN1dGU7XCIsXCLDm1wiOlwiJlVjaXJjO1wiLFwiw5xcIjpcIiZVdW1sO1wiLFwiw51cIjpcIiZZYWN1dGU7XCIsXCLDnlwiOlwiJlRIT1JOO1wiLFwiw59cIjpcIiZzemxpZztcIixcIsOgXCI6XCImYWdyYXZlO1wiLFwiw6FcIjpcIiZhYWN1dGU7XCIsXCLDolwiOlwiJmFjaXJjO1wiLFwiw6NcIjpcIiZhdGlsZGU7XCIsXCLDpFwiOlwiJmF1bWw7XCIsXCLDpVwiOlwiJmFyaW5nO1wiLFwiw6ZcIjpcIiZhZWxpZztcIixcIsOnXCI6XCImY2NlZGlsO1wiLFwiw6hcIjpcIiZlZ3JhdmU7XCIsXCLDqVwiOlwiJmVhY3V0ZTtcIixcIsOqXCI6XCImZWNpcmM7XCIsXCLDq1wiOlwiJmV1bWw7XCIsXCLDrFwiOlwiJmlncmF2ZTtcIixcIsOtXCI6XCImaWFjdXRlO1wiLFwiw65cIjpcIiZpY2lyYztcIixcIsOvXCI6XCImaXVtbDtcIixcIsOwXCI6XCImZXRoO1wiLFwiw7FcIjpcIiZudGlsZGU7XCIsXCLDslwiOlwiJm9ncmF2ZTtcIixcIsOzXCI6XCImb2FjdXRlO1wiLFwiw7RcIjpcIiZvY2lyYztcIixcIsO1XCI6XCImb3RpbGRlO1wiLFwiw7ZcIjpcIiZvdW1sO1wiLFwiw7dcIjpcIiZkaXZpZGU7XCIsXCLDuFwiOlwiJm9zbGFzaDtcIixcIsO5XCI6XCImdWdyYXZlO1wiLFwiw7pcIjpcIiZ1YWN1dGU7XCIsXCLDu1wiOlwiJnVjaXJjO1wiLFwiw7xcIjpcIiZ1dW1sO1wiLFwiw71cIjpcIiZ5YWN1dGU7XCIsXCLDvlwiOlwiJnRob3JuO1wiLFwiw79cIjpcIiZ5dW1sO1wiLCdcIic6XCImcXVvdDtcIixcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsXCLFklwiOlwiJk9FbGlnO1wiLFwixZNcIjpcIiZvZWxpZztcIixcIsWgXCI6XCImU2Nhcm9uO1wiLFwixaFcIjpcIiZzY2Fyb247XCIsXCLFuFwiOlwiJll1bWw7XCIsXCLLhlwiOlwiJmNpcmM7XCIsXCLLnFwiOlwiJnRpbGRlO1wiLFwi4oCCXCI6XCImZW5zcDtcIixcIuKAg1wiOlwiJmVtc3A7XCIsXCLigIlcIjpcIiZ0aGluc3A7XCIsXCLigIxcIjpcIiZ6d25qO1wiLFwi4oCNXCI6XCImendqO1wiLFwi4oCOXCI6XCImbHJtO1wiLFwi4oCPXCI6XCImcmxtO1wiLFwi4oCTXCI6XCImbmRhc2g7XCIsXCLigJRcIjpcIiZtZGFzaDtcIixcIuKAmFwiOlwiJmxzcXVvO1wiLFwi4oCZXCI6XCImcnNxdW87XCIsXCLigJpcIjpcIiZzYnF1bztcIixcIuKAnFwiOlwiJmxkcXVvO1wiLFwi4oCdXCI6XCImcmRxdW87XCIsXCLigJ5cIjpcIiZiZHF1bztcIixcIuKAoFwiOlwiJmRhZ2dlcjtcIixcIuKAoVwiOlwiJkRhZ2dlcjtcIixcIuKAsFwiOlwiJnBlcm1pbDtcIixcIuKAuVwiOlwiJmxzYXF1bztcIixcIuKAulwiOlwiJnJzYXF1bztcIixcIuKCrFwiOlwiJmV1cm87XCIsXCLGklwiOlwiJmZub2Y7XCIsXCLOkVwiOlwiJkFscGhhO1wiLFwizpJcIjpcIiZCZXRhO1wiLFwizpNcIjpcIiZHYW1tYTtcIixcIs6UXCI6XCImRGVsdGE7XCIsXCLOlVwiOlwiJkVwc2lsb247XCIsXCLOllwiOlwiJlpldGE7XCIsXCLOl1wiOlwiJkV0YTtcIixcIs6YXCI6XCImVGhldGE7XCIsXCLOmVwiOlwiJklvdGE7XCIsXCLOmlwiOlwiJkthcHBhO1wiLFwizptcIjpcIiZMYW1iZGE7XCIsXCLOnFwiOlwiJk11O1wiLFwizp1cIjpcIiZOdTtcIixcIs6eXCI6XCImWGk7XCIsXCLOn1wiOlwiJk9taWNyb247XCIsXCLOoFwiOlwiJlBpO1wiLFwizqFcIjpcIiZSaG87XCIsXCLOo1wiOlwiJlNpZ21hO1wiLFwizqRcIjpcIiZUYXU7XCIsXCLOpVwiOlwiJlVwc2lsb247XCIsXCLOplwiOlwiJlBoaTtcIixcIs6nXCI6XCImQ2hpO1wiLFwizqhcIjpcIiZQc2k7XCIsXCLOqVwiOlwiJk9tZWdhO1wiLFwizrFcIjpcIiZhbHBoYTtcIixcIs6yXCI6XCImYmV0YTtcIixcIs6zXCI6XCImZ2FtbWE7XCIsXCLOtFwiOlwiJmRlbHRhO1wiLFwizrVcIjpcIiZlcHNpbG9uO1wiLFwizrZcIjpcIiZ6ZXRhO1wiLFwizrdcIjpcIiZldGE7XCIsXCLOuFwiOlwiJnRoZXRhO1wiLFwizrlcIjpcIiZpb3RhO1wiLFwizrpcIjpcIiZrYXBwYTtcIixcIs67XCI6XCImbGFtYmRhO1wiLFwizrxcIjpcIiZtdTtcIixcIs69XCI6XCImbnU7XCIsXCLOvlwiOlwiJnhpO1wiLFwizr9cIjpcIiZvbWljcm9uO1wiLFwiz4BcIjpcIiZwaTtcIixcIs+BXCI6XCImcmhvO1wiLFwiz4JcIjpcIiZzaWdtYWY7XCIsXCLPg1wiOlwiJnNpZ21hO1wiLFwiz4RcIjpcIiZ0YXU7XCIsXCLPhVwiOlwiJnVwc2lsb247XCIsXCLPhlwiOlwiJnBoaTtcIixcIs+HXCI6XCImY2hpO1wiLFwiz4hcIjpcIiZwc2k7XCIsXCLPiVwiOlwiJm9tZWdhO1wiLFwiz5FcIjpcIiZ0aGV0YXN5bTtcIixcIs+SXCI6XCImdXBzaWg7XCIsXCLPllwiOlwiJnBpdjtcIixcIuKAolwiOlwiJmJ1bGw7XCIsXCLigKZcIjpcIiZoZWxsaXA7XCIsXCLigLJcIjpcIiZwcmltZTtcIixcIuKAs1wiOlwiJlByaW1lO1wiLFwi4oC+XCI6XCImb2xpbmU7XCIsXCLigYRcIjpcIiZmcmFzbDtcIixcIuKEmFwiOlwiJndlaWVycDtcIixcIuKEkVwiOlwiJmltYWdlO1wiLFwi4oScXCI6XCImcmVhbDtcIixcIuKEolwiOlwiJnRyYWRlO1wiLFwi4oS1XCI6XCImYWxlZnN5bTtcIixcIuKGkFwiOlwiJmxhcnI7XCIsXCLihpFcIjpcIiZ1YXJyO1wiLFwi4oaSXCI6XCImcmFycjtcIixcIuKGk1wiOlwiJmRhcnI7XCIsXCLihpRcIjpcIiZoYXJyO1wiLFwi4oa1XCI6XCImY3JhcnI7XCIsXCLih5BcIjpcIiZsQXJyO1wiLFwi4oeRXCI6XCImdUFycjtcIixcIuKHklwiOlwiJnJBcnI7XCIsXCLih5NcIjpcIiZkQXJyO1wiLFwi4oeUXCI6XCImaEFycjtcIixcIuKIgFwiOlwiJmZvcmFsbDtcIixcIuKIglwiOlwiJnBhcnQ7XCIsXCLiiINcIjpcIiZleGlzdDtcIixcIuKIhVwiOlwiJmVtcHR5O1wiLFwi4oiHXCI6XCImbmFibGE7XCIsXCLiiIhcIjpcIiZpc2luO1wiLFwi4oiJXCI6XCImbm90aW47XCIsXCLiiItcIjpcIiZuaTtcIixcIuKIj1wiOlwiJnByb2Q7XCIsXCLiiJFcIjpcIiZzdW07XCIsXCLiiJJcIjpcIiZtaW51cztcIixcIuKIl1wiOlwiJmxvd2FzdDtcIixcIuKImlwiOlwiJnJhZGljO1wiLFwi4oidXCI6XCImcHJvcDtcIixcIuKInlwiOlwiJmluZmluO1wiLFwi4oigXCI6XCImYW5nO1wiLFwi4oinXCI6XCImYW5kO1wiLFwi4oioXCI6XCImb3I7XCIsXCLiiKlcIjpcIiZjYXA7XCIsXCLiiKpcIjpcIiZjdXA7XCIsXCLiiKtcIjpcIiZpbnQ7XCIsXCLiiLRcIjpcIiZ0aGVyZTQ7XCIsXCLiiLxcIjpcIiZzaW07XCIsXCLiiYVcIjpcIiZjb25nO1wiLFwi4omIXCI6XCImYXN5bXA7XCIsXCLiiaBcIjpcIiZuZTtcIixcIuKJoVwiOlwiJmVxdWl2O1wiLFwi4omkXCI6XCImbGU7XCIsXCLiiaVcIjpcIiZnZTtcIixcIuKKglwiOlwiJnN1YjtcIixcIuKKg1wiOlwiJnN1cDtcIixcIuKKhFwiOlwiJm5zdWI7XCIsXCLiioZcIjpcIiZzdWJlO1wiLFwi4oqHXCI6XCImc3VwZTtcIixcIuKKlVwiOlwiJm9wbHVzO1wiLFwi4oqXXCI6XCImb3RpbWVzO1wiLFwi4oqlXCI6XCImcGVycDtcIixcIuKLhVwiOlwiJnNkb3Q7XCIsXCLijIhcIjpcIiZsY2VpbDtcIixcIuKMiVwiOlwiJnJjZWlsO1wiLFwi4oyKXCI6XCImbGZsb29yO1wiLFwi4oyLXCI6XCImcmZsb29yO1wiLFwi4oypXCI6XCImbGFuZztcIixcIuKMqlwiOlwiJnJhbmc7XCIsXCLil4pcIjpcIiZsb3o7XCIsXCLimaBcIjpcIiZzcGFkZXM7XCIsXCLimaNcIjpcIiZjbHVicztcIixcIuKZpVwiOlwiJmhlYXJ0cztcIixcIuKZplwiOlwiJmRpYW1zO1wifX0saHRtbDU6e2VudGl0aWVzOntcIiZBRWxpZ1wiOlwiw4ZcIixcIiZBRWxpZztcIjpcIsOGXCIsXCImQU1QXCI6XCImXCIsXCImQU1QO1wiOlwiJlwiLFwiJkFhY3V0ZVwiOlwiw4FcIixcIiZBYWN1dGU7XCI6XCLDgVwiLFwiJkFicmV2ZTtcIjpcIsSCXCIsXCImQWNpcmNcIjpcIsOCXCIsXCImQWNpcmM7XCI6XCLDglwiLFwiJkFjeTtcIjpcItCQXCIsXCImQWZyO1wiOlwi8J2UhFwiLFwiJkFncmF2ZVwiOlwiw4BcIixcIiZBZ3JhdmU7XCI6XCLDgFwiLFwiJkFscGhhO1wiOlwizpFcIixcIiZBbWFjcjtcIjpcIsSAXCIsXCImQW5kO1wiOlwi4qmTXCIsXCImQW9nb247XCI6XCLEhFwiLFwiJkFvcGY7XCI6XCLwnZS4XCIsXCImQXBwbHlGdW5jdGlvbjtcIjpcIuKBoVwiLFwiJkFyaW5nXCI6XCLDhVwiLFwiJkFyaW5nO1wiOlwiw4VcIixcIiZBc2NyO1wiOlwi8J2SnFwiLFwiJkFzc2lnbjtcIjpcIuKJlFwiLFwiJkF0aWxkZVwiOlwiw4NcIixcIiZBdGlsZGU7XCI6XCLDg1wiLFwiJkF1bWxcIjpcIsOEXCIsXCImQXVtbDtcIjpcIsOEXCIsXCImQmFja3NsYXNoO1wiOlwi4oiWXCIsXCImQmFydjtcIjpcIuKrp1wiLFwiJkJhcndlZDtcIjpcIuKMhlwiLFwiJkJjeTtcIjpcItCRXCIsXCImQmVjYXVzZTtcIjpcIuKItVwiLFwiJkJlcm5vdWxsaXM7XCI6XCLihKxcIixcIiZCZXRhO1wiOlwizpJcIixcIiZCZnI7XCI6XCLwnZSFXCIsXCImQm9wZjtcIjpcIvCdlLlcIixcIiZCcmV2ZTtcIjpcIsuYXCIsXCImQnNjcjtcIjpcIuKErFwiLFwiJkJ1bXBlcTtcIjpcIuKJjlwiLFwiJkNIY3k7XCI6XCLQp1wiLFwiJkNPUFlcIjpcIsKpXCIsXCImQ09QWTtcIjpcIsKpXCIsXCImQ2FjdXRlO1wiOlwixIZcIixcIiZDYXA7XCI6XCLii5JcIixcIiZDYXBpdGFsRGlmZmVyZW50aWFsRDtcIjpcIuKFhVwiLFwiJkNheWxleXM7XCI6XCLihK1cIixcIiZDY2Fyb247XCI6XCLEjFwiLFwiJkNjZWRpbFwiOlwiw4dcIixcIiZDY2VkaWw7XCI6XCLDh1wiLFwiJkNjaXJjO1wiOlwixIhcIixcIiZDY29uaW50O1wiOlwi4oiwXCIsXCImQ2RvdDtcIjpcIsSKXCIsXCImQ2VkaWxsYTtcIjpcIsK4XCIsXCImQ2VudGVyRG90O1wiOlwiwrdcIixcIiZDZnI7XCI6XCLihK1cIixcIiZDaGk7XCI6XCLOp1wiLFwiJkNpcmNsZURvdDtcIjpcIuKKmVwiLFwiJkNpcmNsZU1pbnVzO1wiOlwi4oqWXCIsXCImQ2lyY2xlUGx1cztcIjpcIuKKlVwiLFwiJkNpcmNsZVRpbWVzO1wiOlwi4oqXXCIsXCImQ2xvY2t3aXNlQ29udG91ckludGVncmFsO1wiOlwi4oiyXCIsXCImQ2xvc2VDdXJseURvdWJsZVF1b3RlO1wiOlwi4oCdXCIsXCImQ2xvc2VDdXJseVF1b3RlO1wiOlwi4oCZXCIsXCImQ29sb247XCI6XCLiiLdcIixcIiZDb2xvbmU7XCI6XCLiqbRcIixcIiZDb25ncnVlbnQ7XCI6XCLiiaFcIixcIiZDb25pbnQ7XCI6XCLiiK9cIixcIiZDb250b3VySW50ZWdyYWw7XCI6XCLiiK5cIixcIiZDb3BmO1wiOlwi4oSCXCIsXCImQ29wcm9kdWN0O1wiOlwi4oiQXCIsXCImQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIs1wiLFwiJkNyb3NzO1wiOlwi4qivXCIsXCImQ3NjcjtcIjpcIvCdkp5cIixcIiZDdXA7XCI6XCLii5NcIixcIiZDdXBDYXA7XCI6XCLiiY1cIixcIiZERDtcIjpcIuKFhVwiLFwiJkREb3RyYWhkO1wiOlwi4qSRXCIsXCImREpjeTtcIjpcItCCXCIsXCImRFNjeTtcIjpcItCFXCIsXCImRFpjeTtcIjpcItCPXCIsXCImRGFnZ2VyO1wiOlwi4oChXCIsXCImRGFycjtcIjpcIuKGoVwiLFwiJkRhc2h2O1wiOlwi4qukXCIsXCImRGNhcm9uO1wiOlwixI5cIixcIiZEY3k7XCI6XCLQlFwiLFwiJkRlbDtcIjpcIuKIh1wiLFwiJkRlbHRhO1wiOlwizpRcIixcIiZEZnI7XCI6XCLwnZSHXCIsXCImRGlhY3JpdGljYWxBY3V0ZTtcIjpcIsK0XCIsXCImRGlhY3JpdGljYWxEb3Q7XCI6XCLLmVwiLFwiJkRpYWNyaXRpY2FsRG91YmxlQWN1dGU7XCI6XCLLnVwiLFwiJkRpYWNyaXRpY2FsR3JhdmU7XCI6XCJgXCIsXCImRGlhY3JpdGljYWxUaWxkZTtcIjpcIsucXCIsXCImRGlhbW9uZDtcIjpcIuKLhFwiLFwiJkRpZmZlcmVudGlhbEQ7XCI6XCLihYZcIixcIiZEb3BmO1wiOlwi8J2Uu1wiLFwiJkRvdDtcIjpcIsKoXCIsXCImRG90RG90O1wiOlwi4oOcXCIsXCImRG90RXF1YWw7XCI6XCLiiZBcIixcIiZEb3VibGVDb250b3VySW50ZWdyYWw7XCI6XCLiiK9cIixcIiZEb3VibGVEb3Q7XCI6XCLCqFwiLFwiJkRvdWJsZURvd25BcnJvdztcIjpcIuKHk1wiLFwiJkRvdWJsZUxlZnRBcnJvdztcIjpcIuKHkFwiLFwiJkRvdWJsZUxlZnRSaWdodEFycm93O1wiOlwi4oeUXCIsXCImRG91YmxlTGVmdFRlZTtcIjpcIuKrpFwiLFwiJkRvdWJsZUxvbmdMZWZ0QXJyb3c7XCI6XCLin7hcIixcIiZEb3VibGVMb25nTGVmdFJpZ2h0QXJyb3c7XCI6XCLin7pcIixcIiZEb3VibGVMb25nUmlnaHRBcnJvdztcIjpcIuKfuVwiLFwiJkRvdWJsZVJpZ2h0QXJyb3c7XCI6XCLih5JcIixcIiZEb3VibGVSaWdodFRlZTtcIjpcIuKKqFwiLFwiJkRvdWJsZVVwQXJyb3c7XCI6XCLih5FcIixcIiZEb3VibGVVcERvd25BcnJvdztcIjpcIuKHlVwiLFwiJkRvdWJsZVZlcnRpY2FsQmFyO1wiOlwi4oilXCIsXCImRG93bkFycm93O1wiOlwi4oaTXCIsXCImRG93bkFycm93QmFyO1wiOlwi4qSTXCIsXCImRG93bkFycm93VXBBcnJvdztcIjpcIuKHtVwiLFwiJkRvd25CcmV2ZTtcIjpcIsyRXCIsXCImRG93bkxlZnRSaWdodFZlY3RvcjtcIjpcIuKlkFwiLFwiJkRvd25MZWZ0VGVlVmVjdG9yO1wiOlwi4qWeXCIsXCImRG93bkxlZnRWZWN0b3I7XCI6XCLihr1cIixcIiZEb3duTGVmdFZlY3RvckJhcjtcIjpcIuKlllwiLFwiJkRvd25SaWdodFRlZVZlY3RvcjtcIjpcIuKln1wiLFwiJkRvd25SaWdodFZlY3RvcjtcIjpcIuKHgVwiLFwiJkRvd25SaWdodFZlY3RvckJhcjtcIjpcIuKll1wiLFwiJkRvd25UZWU7XCI6XCLiiqRcIixcIiZEb3duVGVlQXJyb3c7XCI6XCLihqdcIixcIiZEb3duYXJyb3c7XCI6XCLih5NcIixcIiZEc2NyO1wiOlwi8J2Sn1wiLFwiJkRzdHJvaztcIjpcIsSQXCIsXCImRU5HO1wiOlwixYpcIixcIiZFVEhcIjpcIsOQXCIsXCImRVRIO1wiOlwiw5BcIixcIiZFYWN1dGVcIjpcIsOJXCIsXCImRWFjdXRlO1wiOlwiw4lcIixcIiZFY2Fyb247XCI6XCLEmlwiLFwiJkVjaXJjXCI6XCLDilwiLFwiJkVjaXJjO1wiOlwiw4pcIixcIiZFY3k7XCI6XCLQrVwiLFwiJkVkb3Q7XCI6XCLEllwiLFwiJkVmcjtcIjpcIvCdlIhcIixcIiZFZ3JhdmVcIjpcIsOIXCIsXCImRWdyYXZlO1wiOlwiw4hcIixcIiZFbGVtZW50O1wiOlwi4oiIXCIsXCImRW1hY3I7XCI6XCLEklwiLFwiJkVtcHR5U21hbGxTcXVhcmU7XCI6XCLil7tcIixcIiZFbXB0eVZlcnlTbWFsbFNxdWFyZTtcIjpcIuKWq1wiLFwiJkVvZ29uO1wiOlwixJhcIixcIiZFb3BmO1wiOlwi8J2UvFwiLFwiJkVwc2lsb247XCI6XCLOlVwiLFwiJkVxdWFsO1wiOlwi4qm1XCIsXCImRXF1YWxUaWxkZTtcIjpcIuKJglwiLFwiJkVxdWlsaWJyaXVtO1wiOlwi4oeMXCIsXCImRXNjcjtcIjpcIuKEsFwiLFwiJkVzaW07XCI6XCLiqbNcIixcIiZFdGE7XCI6XCLOl1wiLFwiJkV1bWxcIjpcIsOLXCIsXCImRXVtbDtcIjpcIsOLXCIsXCImRXhpc3RzO1wiOlwi4oiDXCIsXCImRXhwb25lbnRpYWxFO1wiOlwi4oWHXCIsXCImRmN5O1wiOlwi0KRcIixcIiZGZnI7XCI6XCLwnZSJXCIsXCImRmlsbGVkU21hbGxTcXVhcmU7XCI6XCLil7xcIixcIiZGaWxsZWRWZXJ5U21hbGxTcXVhcmU7XCI6XCLilqpcIixcIiZGb3BmO1wiOlwi8J2UvVwiLFwiJkZvckFsbDtcIjpcIuKIgFwiLFwiJkZvdXJpZXJ0cmY7XCI6XCLihLFcIixcIiZGc2NyO1wiOlwi4oSxXCIsXCImR0pjeTtcIjpcItCDXCIsXCImR1RcIjpcIj5cIixcIiZHVDtcIjpcIj5cIixcIiZHYW1tYTtcIjpcIs6TXCIsXCImR2FtbWFkO1wiOlwiz5xcIixcIiZHYnJldmU7XCI6XCLEnlwiLFwiJkdjZWRpbDtcIjpcIsSiXCIsXCImR2NpcmM7XCI6XCLEnFwiLFwiJkdjeTtcIjpcItCTXCIsXCImR2RvdDtcIjpcIsSgXCIsXCImR2ZyO1wiOlwi8J2UilwiLFwiJkdnO1wiOlwi4ouZXCIsXCImR29wZjtcIjpcIvCdlL5cIixcIiZHcmVhdGVyRXF1YWw7XCI6XCLiiaVcIixcIiZHcmVhdGVyRXF1YWxMZXNzO1wiOlwi4oubXCIsXCImR3JlYXRlckZ1bGxFcXVhbDtcIjpcIuKJp1wiLFwiJkdyZWF0ZXJHcmVhdGVyO1wiOlwi4qqiXCIsXCImR3JlYXRlckxlc3M7XCI6XCLiibdcIixcIiZHcmVhdGVyU2xhbnRFcXVhbDtcIjpcIuKpvlwiLFwiJkdyZWF0ZXJUaWxkZTtcIjpcIuKJs1wiLFwiJkdzY3I7XCI6XCLwnZKiXCIsXCImR3Q7XCI6XCLiiatcIixcIiZIQVJEY3k7XCI6XCLQqlwiLFwiJkhhY2VrO1wiOlwiy4dcIixcIiZIYXQ7XCI6XCJeXCIsXCImSGNpcmM7XCI6XCLEpFwiLFwiJkhmcjtcIjpcIuKEjFwiLFwiJkhpbGJlcnRTcGFjZTtcIjpcIuKEi1wiLFwiJkhvcGY7XCI6XCLihI1cIixcIiZIb3Jpem9udGFsTGluZTtcIjpcIuKUgFwiLFwiJkhzY3I7XCI6XCLihItcIixcIiZIc3Ryb2s7XCI6XCLEplwiLFwiJkh1bXBEb3duSHVtcDtcIjpcIuKJjlwiLFwiJkh1bXBFcXVhbDtcIjpcIuKJj1wiLFwiJklFY3k7XCI6XCLQlVwiLFwiJklKbGlnO1wiOlwixLJcIixcIiZJT2N5O1wiOlwi0IFcIixcIiZJYWN1dGVcIjpcIsONXCIsXCImSWFjdXRlO1wiOlwiw41cIixcIiZJY2lyY1wiOlwiw45cIixcIiZJY2lyYztcIjpcIsOOXCIsXCImSWN5O1wiOlwi0JhcIixcIiZJZG90O1wiOlwixLBcIixcIiZJZnI7XCI6XCLihJFcIixcIiZJZ3JhdmVcIjpcIsOMXCIsXCImSWdyYXZlO1wiOlwiw4xcIixcIiZJbTtcIjpcIuKEkVwiLFwiJkltYWNyO1wiOlwixKpcIixcIiZJbWFnaW5hcnlJO1wiOlwi4oWIXCIsXCImSW1wbGllcztcIjpcIuKHklwiLFwiJkludDtcIjpcIuKIrFwiLFwiJkludGVncmFsO1wiOlwi4oirXCIsXCImSW50ZXJzZWN0aW9uO1wiOlwi4ouCXCIsXCImSW52aXNpYmxlQ29tbWE7XCI6XCLigaNcIixcIiZJbnZpc2libGVUaW1lcztcIjpcIuKBolwiLFwiJklvZ29uO1wiOlwixK5cIixcIiZJb3BmO1wiOlwi8J2VgFwiLFwiJklvdGE7XCI6XCLOmVwiLFwiJklzY3I7XCI6XCLihJBcIixcIiZJdGlsZGU7XCI6XCLEqFwiLFwiJkl1a2N5O1wiOlwi0IZcIixcIiZJdW1sXCI6XCLDj1wiLFwiJkl1bWw7XCI6XCLDj1wiLFwiJkpjaXJjO1wiOlwixLRcIixcIiZKY3k7XCI6XCLQmVwiLFwiJkpmcjtcIjpcIvCdlI1cIixcIiZKb3BmO1wiOlwi8J2VgVwiLFwiJkpzY3I7XCI6XCLwnZKlXCIsXCImSnNlcmN5O1wiOlwi0IhcIixcIiZKdWtjeTtcIjpcItCEXCIsXCImS0hjeTtcIjpcItClXCIsXCImS0pjeTtcIjpcItCMXCIsXCImS2FwcGE7XCI6XCLOmlwiLFwiJktjZWRpbDtcIjpcIsS2XCIsXCImS2N5O1wiOlwi0JpcIixcIiZLZnI7XCI6XCLwnZSOXCIsXCImS29wZjtcIjpcIvCdlYJcIixcIiZLc2NyO1wiOlwi8J2SplwiLFwiJkxKY3k7XCI6XCLQiVwiLFwiJkxUXCI6XCI8XCIsXCImTFQ7XCI6XCI8XCIsXCImTGFjdXRlO1wiOlwixLlcIixcIiZMYW1iZGE7XCI6XCLOm1wiLFwiJkxhbmc7XCI6XCLin6pcIixcIiZMYXBsYWNldHJmO1wiOlwi4oSSXCIsXCImTGFycjtcIjpcIuKGnlwiLFwiJkxjYXJvbjtcIjpcIsS9XCIsXCImTGNlZGlsO1wiOlwixLtcIixcIiZMY3k7XCI6XCLQm1wiLFwiJkxlZnRBbmdsZUJyYWNrZXQ7XCI6XCLin6hcIixcIiZMZWZ0QXJyb3c7XCI6XCLihpBcIixcIiZMZWZ0QXJyb3dCYXI7XCI6XCLih6RcIixcIiZMZWZ0QXJyb3dSaWdodEFycm93O1wiOlwi4oeGXCIsXCImTGVmdENlaWxpbmc7XCI6XCLijIhcIixcIiZMZWZ0RG91YmxlQnJhY2tldDtcIjpcIuKfplwiLFwiJkxlZnREb3duVGVlVmVjdG9yO1wiOlwi4qWhXCIsXCImTGVmdERvd25WZWN0b3I7XCI6XCLih4NcIixcIiZMZWZ0RG93blZlY3RvckJhcjtcIjpcIuKlmVwiLFwiJkxlZnRGbG9vcjtcIjpcIuKMilwiLFwiJkxlZnRSaWdodEFycm93O1wiOlwi4oaUXCIsXCImTGVmdFJpZ2h0VmVjdG9yO1wiOlwi4qWOXCIsXCImTGVmdFRlZTtcIjpcIuKKo1wiLFwiJkxlZnRUZWVBcnJvdztcIjpcIuKGpFwiLFwiJkxlZnRUZWVWZWN0b3I7XCI6XCLipZpcIixcIiZMZWZ0VHJpYW5nbGU7XCI6XCLiirJcIixcIiZMZWZ0VHJpYW5nbGVCYXI7XCI6XCLip49cIixcIiZMZWZ0VHJpYW5nbGVFcXVhbDtcIjpcIuKKtFwiLFwiJkxlZnRVcERvd25WZWN0b3I7XCI6XCLipZFcIixcIiZMZWZ0VXBUZWVWZWN0b3I7XCI6XCLipaBcIixcIiZMZWZ0VXBWZWN0b3I7XCI6XCLihr9cIixcIiZMZWZ0VXBWZWN0b3JCYXI7XCI6XCLipZhcIixcIiZMZWZ0VmVjdG9yO1wiOlwi4oa8XCIsXCImTGVmdFZlY3RvckJhcjtcIjpcIuKlklwiLFwiJkxlZnRhcnJvdztcIjpcIuKHkFwiLFwiJkxlZnRyaWdodGFycm93O1wiOlwi4oeUXCIsXCImTGVzc0VxdWFsR3JlYXRlcjtcIjpcIuKLmlwiLFwiJkxlc3NGdWxsRXF1YWw7XCI6XCLiiaZcIixcIiZMZXNzR3JlYXRlcjtcIjpcIuKJtlwiLFwiJkxlc3NMZXNzO1wiOlwi4qqhXCIsXCImTGVzc1NsYW50RXF1YWw7XCI6XCLiqb1cIixcIiZMZXNzVGlsZGU7XCI6XCLiibJcIixcIiZMZnI7XCI6XCLwnZSPXCIsXCImTGw7XCI6XCLii5hcIixcIiZMbGVmdGFycm93O1wiOlwi4oeaXCIsXCImTG1pZG90O1wiOlwixL9cIixcIiZMb25nTGVmdEFycm93O1wiOlwi4p+1XCIsXCImTG9uZ0xlZnRSaWdodEFycm93O1wiOlwi4p+3XCIsXCImTG9uZ1JpZ2h0QXJyb3c7XCI6XCLin7ZcIixcIiZMb25nbGVmdGFycm93O1wiOlwi4p+4XCIsXCImTG9uZ2xlZnRyaWdodGFycm93O1wiOlwi4p+6XCIsXCImTG9uZ3JpZ2h0YXJyb3c7XCI6XCLin7lcIixcIiZMb3BmO1wiOlwi8J2Vg1wiLFwiJkxvd2VyTGVmdEFycm93O1wiOlwi4oaZXCIsXCImTG93ZXJSaWdodEFycm93O1wiOlwi4oaYXCIsXCImTHNjcjtcIjpcIuKEklwiLFwiJkxzaDtcIjpcIuKGsFwiLFwiJkxzdHJvaztcIjpcIsWBXCIsXCImTHQ7XCI6XCLiiapcIixcIiZNYXA7XCI6XCLipIVcIixcIiZNY3k7XCI6XCLQnFwiLFwiJk1lZGl1bVNwYWNlO1wiOlwi4oGfXCIsXCImTWVsbGludHJmO1wiOlwi4oSzXCIsXCImTWZyO1wiOlwi8J2UkFwiLFwiJk1pbnVzUGx1cztcIjpcIuKIk1wiLFwiJk1vcGY7XCI6XCLwnZWEXCIsXCImTXNjcjtcIjpcIuKEs1wiLFwiJk11O1wiOlwizpxcIixcIiZOSmN5O1wiOlwi0IpcIixcIiZOYWN1dGU7XCI6XCLFg1wiLFwiJk5jYXJvbjtcIjpcIsWHXCIsXCImTmNlZGlsO1wiOlwixYVcIixcIiZOY3k7XCI6XCLQnVwiLFwiJk5lZ2F0aXZlTWVkaXVtU3BhY2U7XCI6XCLigItcIixcIiZOZWdhdGl2ZVRoaWNrU3BhY2U7XCI6XCLigItcIixcIiZOZWdhdGl2ZVRoaW5TcGFjZTtcIjpcIuKAi1wiLFwiJk5lZ2F0aXZlVmVyeVRoaW5TcGFjZTtcIjpcIuKAi1wiLFwiJk5lc3RlZEdyZWF0ZXJHcmVhdGVyO1wiOlwi4omrXCIsXCImTmVzdGVkTGVzc0xlc3M7XCI6XCLiiapcIixcIiZOZXdMaW5lO1wiOlwiXFxuXCIsXCImTmZyO1wiOlwi8J2UkVwiLFwiJk5vQnJlYWs7XCI6XCLigaBcIixcIiZOb25CcmVha2luZ1NwYWNlO1wiOlwiwqBcIixcIiZOb3BmO1wiOlwi4oSVXCIsXCImTm90O1wiOlwi4qusXCIsXCImTm90Q29uZ3J1ZW50O1wiOlwi4omiXCIsXCImTm90Q3VwQ2FwO1wiOlwi4omtXCIsXCImTm90RG91YmxlVmVydGljYWxCYXI7XCI6XCLiiKZcIixcIiZOb3RFbGVtZW50O1wiOlwi4oiJXCIsXCImTm90RXF1YWw7XCI6XCLiiaBcIixcIiZOb3RFcXVhbFRpbGRlO1wiOlwi4omCzLhcIixcIiZOb3RFeGlzdHM7XCI6XCLiiIRcIixcIiZOb3RHcmVhdGVyO1wiOlwi4omvXCIsXCImTm90R3JlYXRlckVxdWFsO1wiOlwi4omxXCIsXCImTm90R3JlYXRlckZ1bGxFcXVhbDtcIjpcIuKJp8y4XCIsXCImTm90R3JlYXRlckdyZWF0ZXI7XCI6XCLiiavMuFwiLFwiJk5vdEdyZWF0ZXJMZXNzO1wiOlwi4om5XCIsXCImTm90R3JlYXRlclNsYW50RXF1YWw7XCI6XCLiqb7MuFwiLFwiJk5vdEdyZWF0ZXJUaWxkZTtcIjpcIuKJtVwiLFwiJk5vdEh1bXBEb3duSHVtcDtcIjpcIuKJjsy4XCIsXCImTm90SHVtcEVxdWFsO1wiOlwi4omPzLhcIixcIiZOb3RMZWZ0VHJpYW5nbGU7XCI6XCLii6pcIixcIiZOb3RMZWZ0VHJpYW5nbGVCYXI7XCI6XCLip4/MuFwiLFwiJk5vdExlZnRUcmlhbmdsZUVxdWFsO1wiOlwi4ousXCIsXCImTm90TGVzcztcIjpcIuKJrlwiLFwiJk5vdExlc3NFcXVhbDtcIjpcIuKJsFwiLFwiJk5vdExlc3NHcmVhdGVyO1wiOlwi4om4XCIsXCImTm90TGVzc0xlc3M7XCI6XCLiiarMuFwiLFwiJk5vdExlc3NTbGFudEVxdWFsO1wiOlwi4qm9zLhcIixcIiZOb3RMZXNzVGlsZGU7XCI6XCLiibRcIixcIiZOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIjpcIuKqosy4XCIsXCImTm90TmVzdGVkTGVzc0xlc3M7XCI6XCLiqqHMuFwiLFwiJk5vdFByZWNlZGVzO1wiOlwi4oqAXCIsXCImTm90UHJlY2VkZXNFcXVhbDtcIjpcIuKqr8y4XCIsXCImTm90UHJlY2VkZXNTbGFudEVxdWFsO1wiOlwi4ougXCIsXCImTm90UmV2ZXJzZUVsZW1lbnQ7XCI6XCLiiIxcIixcIiZOb3RSaWdodFRyaWFuZ2xlO1wiOlwi4ourXCIsXCImTm90UmlnaHRUcmlhbmdsZUJhcjtcIjpcIuKnkMy4XCIsXCImTm90UmlnaHRUcmlhbmdsZUVxdWFsO1wiOlwi4outXCIsXCImTm90U3F1YXJlU3Vic2V0O1wiOlwi4oqPzLhcIixcIiZOb3RTcXVhcmVTdWJzZXRFcXVhbDtcIjpcIuKLolwiLFwiJk5vdFNxdWFyZVN1cGVyc2V0O1wiOlwi4oqQzLhcIixcIiZOb3RTcXVhcmVTdXBlcnNldEVxdWFsO1wiOlwi4oujXCIsXCImTm90U3Vic2V0O1wiOlwi4oqC4oOSXCIsXCImTm90U3Vic2V0RXF1YWw7XCI6XCLiiohcIixcIiZOb3RTdWNjZWVkcztcIjpcIuKKgVwiLFwiJk5vdFN1Y2NlZWRzRXF1YWw7XCI6XCLiqrDMuFwiLFwiJk5vdFN1Y2NlZWRzU2xhbnRFcXVhbDtcIjpcIuKLoVwiLFwiJk5vdFN1Y2NlZWRzVGlsZGU7XCI6XCLiib/MuFwiLFwiJk5vdFN1cGVyc2V0O1wiOlwi4oqD4oOSXCIsXCImTm90U3VwZXJzZXRFcXVhbDtcIjpcIuKKiVwiLFwiJk5vdFRpbGRlO1wiOlwi4omBXCIsXCImTm90VGlsZGVFcXVhbDtcIjpcIuKJhFwiLFwiJk5vdFRpbGRlRnVsbEVxdWFsO1wiOlwi4omHXCIsXCImTm90VGlsZGVUaWxkZTtcIjpcIuKJiVwiLFwiJk5vdFZlcnRpY2FsQmFyO1wiOlwi4oikXCIsXCImTnNjcjtcIjpcIvCdkqlcIixcIiZOdGlsZGVcIjpcIsORXCIsXCImTnRpbGRlO1wiOlwiw5FcIixcIiZOdTtcIjpcIs6dXCIsXCImT0VsaWc7XCI6XCLFklwiLFwiJk9hY3V0ZVwiOlwiw5NcIixcIiZPYWN1dGU7XCI6XCLDk1wiLFwiJk9jaXJjXCI6XCLDlFwiLFwiJk9jaXJjO1wiOlwiw5RcIixcIiZPY3k7XCI6XCLQnlwiLFwiJk9kYmxhYztcIjpcIsWQXCIsXCImT2ZyO1wiOlwi8J2UklwiLFwiJk9ncmF2ZVwiOlwiw5JcIixcIiZPZ3JhdmU7XCI6XCLDklwiLFwiJk9tYWNyO1wiOlwixYxcIixcIiZPbWVnYTtcIjpcIs6pXCIsXCImT21pY3JvbjtcIjpcIs6fXCIsXCImT29wZjtcIjpcIvCdlYZcIixcIiZPcGVuQ3VybHlEb3VibGVRdW90ZTtcIjpcIuKAnFwiLFwiJk9wZW5DdXJseVF1b3RlO1wiOlwi4oCYXCIsXCImT3I7XCI6XCLiqZRcIixcIiZPc2NyO1wiOlwi8J2SqlwiLFwiJk9zbGFzaFwiOlwiw5hcIixcIiZPc2xhc2g7XCI6XCLDmFwiLFwiJk90aWxkZVwiOlwiw5VcIixcIiZPdGlsZGU7XCI6XCLDlVwiLFwiJk90aW1lcztcIjpcIuKot1wiLFwiJk91bWxcIjpcIsOWXCIsXCImT3VtbDtcIjpcIsOWXCIsXCImT3ZlckJhcjtcIjpcIuKAvlwiLFwiJk92ZXJCcmFjZTtcIjpcIuKPnlwiLFwiJk92ZXJCcmFja2V0O1wiOlwi4o60XCIsXCImT3ZlclBhcmVudGhlc2lzO1wiOlwi4o+cXCIsXCImUGFydGlhbEQ7XCI6XCLiiIJcIixcIiZQY3k7XCI6XCLQn1wiLFwiJlBmcjtcIjpcIvCdlJNcIixcIiZQaGk7XCI6XCLOplwiLFwiJlBpO1wiOlwizqBcIixcIiZQbHVzTWludXM7XCI6XCLCsVwiLFwiJlBvaW5jYXJlcGxhbmU7XCI6XCLihIxcIixcIiZQb3BmO1wiOlwi4oSZXCIsXCImUHI7XCI6XCLiqrtcIixcIiZQcmVjZWRlcztcIjpcIuKJulwiLFwiJlByZWNlZGVzRXF1YWw7XCI6XCLiqq9cIixcIiZQcmVjZWRlc1NsYW50RXF1YWw7XCI6XCLiibxcIixcIiZQcmVjZWRlc1RpbGRlO1wiOlwi4om+XCIsXCImUHJpbWU7XCI6XCLigLNcIixcIiZQcm9kdWN0O1wiOlwi4oiPXCIsXCImUHJvcG9ydGlvbjtcIjpcIuKIt1wiLFwiJlByb3BvcnRpb25hbDtcIjpcIuKInVwiLFwiJlBzY3I7XCI6XCLwnZKrXCIsXCImUHNpO1wiOlwizqhcIixcIiZRVU9UXCI6J1wiJyxcIiZRVU9UO1wiOidcIicsXCImUWZyO1wiOlwi8J2UlFwiLFwiJlFvcGY7XCI6XCLihJpcIixcIiZRc2NyO1wiOlwi8J2SrFwiLFwiJlJCYXJyO1wiOlwi4qSQXCIsXCImUkVHXCI6XCLCrlwiLFwiJlJFRztcIjpcIsKuXCIsXCImUmFjdXRlO1wiOlwixZRcIixcIiZSYW5nO1wiOlwi4p+rXCIsXCImUmFycjtcIjpcIuKGoFwiLFwiJlJhcnJ0bDtcIjpcIuKkllwiLFwiJlJjYXJvbjtcIjpcIsWYXCIsXCImUmNlZGlsO1wiOlwixZZcIixcIiZSY3k7XCI6XCLQoFwiLFwiJlJlO1wiOlwi4oScXCIsXCImUmV2ZXJzZUVsZW1lbnQ7XCI6XCLiiItcIixcIiZSZXZlcnNlRXF1aWxpYnJpdW07XCI6XCLih4tcIixcIiZSZXZlcnNlVXBFcXVpbGlicml1bTtcIjpcIuKlr1wiLFwiJlJmcjtcIjpcIuKEnFwiLFwiJlJobztcIjpcIs6hXCIsXCImUmlnaHRBbmdsZUJyYWNrZXQ7XCI6XCLin6lcIixcIiZSaWdodEFycm93O1wiOlwi4oaSXCIsXCImUmlnaHRBcnJvd0JhcjtcIjpcIuKHpVwiLFwiJlJpZ2h0QXJyb3dMZWZ0QXJyb3c7XCI6XCLih4RcIixcIiZSaWdodENlaWxpbmc7XCI6XCLijIlcIixcIiZSaWdodERvdWJsZUJyYWNrZXQ7XCI6XCLin6dcIixcIiZSaWdodERvd25UZWVWZWN0b3I7XCI6XCLipZ1cIixcIiZSaWdodERvd25WZWN0b3I7XCI6XCLih4JcIixcIiZSaWdodERvd25WZWN0b3JCYXI7XCI6XCLipZVcIixcIiZSaWdodEZsb29yO1wiOlwi4oyLXCIsXCImUmlnaHRUZWU7XCI6XCLiiqJcIixcIiZSaWdodFRlZUFycm93O1wiOlwi4oamXCIsXCImUmlnaHRUZWVWZWN0b3I7XCI6XCLipZtcIixcIiZSaWdodFRyaWFuZ2xlO1wiOlwi4oqzXCIsXCImUmlnaHRUcmlhbmdsZUJhcjtcIjpcIuKnkFwiLFwiJlJpZ2h0VHJpYW5nbGVFcXVhbDtcIjpcIuKKtVwiLFwiJlJpZ2h0VXBEb3duVmVjdG9yO1wiOlwi4qWPXCIsXCImUmlnaHRVcFRlZVZlY3RvcjtcIjpcIuKlnFwiLFwiJlJpZ2h0VXBWZWN0b3I7XCI6XCLihr5cIixcIiZSaWdodFVwVmVjdG9yQmFyO1wiOlwi4qWUXCIsXCImUmlnaHRWZWN0b3I7XCI6XCLih4BcIixcIiZSaWdodFZlY3RvckJhcjtcIjpcIuKlk1wiLFwiJlJpZ2h0YXJyb3c7XCI6XCLih5JcIixcIiZSb3BmO1wiOlwi4oSdXCIsXCImUm91bmRJbXBsaWVzO1wiOlwi4qWwXCIsXCImUnJpZ2h0YXJyb3c7XCI6XCLih5tcIixcIiZSc2NyO1wiOlwi4oSbXCIsXCImUnNoO1wiOlwi4oaxXCIsXCImUnVsZURlbGF5ZWQ7XCI6XCLip7RcIixcIiZTSENIY3k7XCI6XCLQqVwiLFwiJlNIY3k7XCI6XCLQqFwiLFwiJlNPRlRjeTtcIjpcItCsXCIsXCImU2FjdXRlO1wiOlwixZpcIixcIiZTYztcIjpcIuKqvFwiLFwiJlNjYXJvbjtcIjpcIsWgXCIsXCImU2NlZGlsO1wiOlwixZ5cIixcIiZTY2lyYztcIjpcIsWcXCIsXCImU2N5O1wiOlwi0KFcIixcIiZTZnI7XCI6XCLwnZSWXCIsXCImU2hvcnREb3duQXJyb3c7XCI6XCLihpNcIixcIiZTaG9ydExlZnRBcnJvdztcIjpcIuKGkFwiLFwiJlNob3J0UmlnaHRBcnJvdztcIjpcIuKGklwiLFwiJlNob3J0VXBBcnJvdztcIjpcIuKGkVwiLFwiJlNpZ21hO1wiOlwizqNcIixcIiZTbWFsbENpcmNsZTtcIjpcIuKImFwiLFwiJlNvcGY7XCI6XCLwnZWKXCIsXCImU3FydDtcIjpcIuKImlwiLFwiJlNxdWFyZTtcIjpcIuKWoVwiLFwiJlNxdWFyZUludGVyc2VjdGlvbjtcIjpcIuKKk1wiLFwiJlNxdWFyZVN1YnNldDtcIjpcIuKKj1wiLFwiJlNxdWFyZVN1YnNldEVxdWFsO1wiOlwi4oqRXCIsXCImU3F1YXJlU3VwZXJzZXQ7XCI6XCLiipBcIixcIiZTcXVhcmVTdXBlcnNldEVxdWFsO1wiOlwi4oqSXCIsXCImU3F1YXJlVW5pb247XCI6XCLiipRcIixcIiZTc2NyO1wiOlwi8J2SrlwiLFwiJlN0YXI7XCI6XCLii4ZcIixcIiZTdWI7XCI6XCLii5BcIixcIiZTdWJzZXQ7XCI6XCLii5BcIixcIiZTdWJzZXRFcXVhbDtcIjpcIuKKhlwiLFwiJlN1Y2NlZWRzO1wiOlwi4om7XCIsXCImU3VjY2VlZHNFcXVhbDtcIjpcIuKqsFwiLFwiJlN1Y2NlZWRzU2xhbnRFcXVhbDtcIjpcIuKJvVwiLFwiJlN1Y2NlZWRzVGlsZGU7XCI6XCLiib9cIixcIiZTdWNoVGhhdDtcIjpcIuKIi1wiLFwiJlN1bTtcIjpcIuKIkVwiLFwiJlN1cDtcIjpcIuKLkVwiLFwiJlN1cGVyc2V0O1wiOlwi4oqDXCIsXCImU3VwZXJzZXRFcXVhbDtcIjpcIuKKh1wiLFwiJlN1cHNldDtcIjpcIuKLkVwiLFwiJlRIT1JOXCI6XCLDnlwiLFwiJlRIT1JOO1wiOlwiw55cIixcIiZUUkFERTtcIjpcIuKEolwiLFwiJlRTSGN5O1wiOlwi0ItcIixcIiZUU2N5O1wiOlwi0KZcIixcIiZUYWI7XCI6XCJcXHRcIixcIiZUYXU7XCI6XCLOpFwiLFwiJlRjYXJvbjtcIjpcIsWkXCIsXCImVGNlZGlsO1wiOlwixaJcIixcIiZUY3k7XCI6XCLQolwiLFwiJlRmcjtcIjpcIvCdlJdcIixcIiZUaGVyZWZvcmU7XCI6XCLiiLRcIixcIiZUaGV0YTtcIjpcIs6YXCIsXCImVGhpY2tTcGFjZTtcIjpcIuKBn+KAilwiLFwiJlRoaW5TcGFjZTtcIjpcIuKAiVwiLFwiJlRpbGRlO1wiOlwi4oi8XCIsXCImVGlsZGVFcXVhbDtcIjpcIuKJg1wiLFwiJlRpbGRlRnVsbEVxdWFsO1wiOlwi4omFXCIsXCImVGlsZGVUaWxkZTtcIjpcIuKJiFwiLFwiJlRvcGY7XCI6XCLwnZWLXCIsXCImVHJpcGxlRG90O1wiOlwi4oObXCIsXCImVHNjcjtcIjpcIvCdkq9cIixcIiZUc3Ryb2s7XCI6XCLFplwiLFwiJlVhY3V0ZVwiOlwiw5pcIixcIiZVYWN1dGU7XCI6XCLDmlwiLFwiJlVhcnI7XCI6XCLihp9cIixcIiZVYXJyb2NpcjtcIjpcIuKliVwiLFwiJlVicmN5O1wiOlwi0I5cIixcIiZVYnJldmU7XCI6XCLFrFwiLFwiJlVjaXJjXCI6XCLDm1wiLFwiJlVjaXJjO1wiOlwiw5tcIixcIiZVY3k7XCI6XCLQo1wiLFwiJlVkYmxhYztcIjpcIsWwXCIsXCImVWZyO1wiOlwi8J2UmFwiLFwiJlVncmF2ZVwiOlwiw5lcIixcIiZVZ3JhdmU7XCI6XCLDmVwiLFwiJlVtYWNyO1wiOlwixapcIixcIiZVbmRlckJhcjtcIjpcIl9cIixcIiZVbmRlckJyYWNlO1wiOlwi4o+fXCIsXCImVW5kZXJCcmFja2V0O1wiOlwi4o61XCIsXCImVW5kZXJQYXJlbnRoZXNpcztcIjpcIuKPnVwiLFwiJlVuaW9uO1wiOlwi4ouDXCIsXCImVW5pb25QbHVzO1wiOlwi4oqOXCIsXCImVW9nb247XCI6XCLFslwiLFwiJlVvcGY7XCI6XCLwnZWMXCIsXCImVXBBcnJvdztcIjpcIuKGkVwiLFwiJlVwQXJyb3dCYXI7XCI6XCLipJJcIixcIiZVcEFycm93RG93bkFycm93O1wiOlwi4oeFXCIsXCImVXBEb3duQXJyb3c7XCI6XCLihpVcIixcIiZVcEVxdWlsaWJyaXVtO1wiOlwi4qWuXCIsXCImVXBUZWU7XCI6XCLiiqVcIixcIiZVcFRlZUFycm93O1wiOlwi4oalXCIsXCImVXBhcnJvdztcIjpcIuKHkVwiLFwiJlVwZG93bmFycm93O1wiOlwi4oeVXCIsXCImVXBwZXJMZWZ0QXJyb3c7XCI6XCLihpZcIixcIiZVcHBlclJpZ2h0QXJyb3c7XCI6XCLihpdcIixcIiZVcHNpO1wiOlwiz5JcIixcIiZVcHNpbG9uO1wiOlwizqVcIixcIiZVcmluZztcIjpcIsWuXCIsXCImVXNjcjtcIjpcIvCdkrBcIixcIiZVdGlsZGU7XCI6XCLFqFwiLFwiJlV1bWxcIjpcIsOcXCIsXCImVXVtbDtcIjpcIsOcXCIsXCImVkRhc2g7XCI6XCLiiqtcIixcIiZWYmFyO1wiOlwi4qurXCIsXCImVmN5O1wiOlwi0JJcIixcIiZWZGFzaDtcIjpcIuKKqVwiLFwiJlZkYXNobDtcIjpcIuKrplwiLFwiJlZlZTtcIjpcIuKLgVwiLFwiJlZlcmJhcjtcIjpcIuKAllwiLFwiJlZlcnQ7XCI6XCLigJZcIixcIiZWZXJ0aWNhbEJhcjtcIjpcIuKIo1wiLFwiJlZlcnRpY2FsTGluZTtcIjpcInxcIixcIiZWZXJ0aWNhbFNlcGFyYXRvcjtcIjpcIuKdmFwiLFwiJlZlcnRpY2FsVGlsZGU7XCI6XCLiiYBcIixcIiZWZXJ5VGhpblNwYWNlO1wiOlwi4oCKXCIsXCImVmZyO1wiOlwi8J2UmVwiLFwiJlZvcGY7XCI6XCLwnZWNXCIsXCImVnNjcjtcIjpcIvCdkrFcIixcIiZWdmRhc2g7XCI6XCLiiqpcIixcIiZXY2lyYztcIjpcIsW0XCIsXCImV2VkZ2U7XCI6XCLii4BcIixcIiZXZnI7XCI6XCLwnZSaXCIsXCImV29wZjtcIjpcIvCdlY5cIixcIiZXc2NyO1wiOlwi8J2SslwiLFwiJlhmcjtcIjpcIvCdlJtcIixcIiZYaTtcIjpcIs6eXCIsXCImWG9wZjtcIjpcIvCdlY9cIixcIiZYc2NyO1wiOlwi8J2Ss1wiLFwiJllBY3k7XCI6XCLQr1wiLFwiJllJY3k7XCI6XCLQh1wiLFwiJllVY3k7XCI6XCLQrlwiLFwiJllhY3V0ZVwiOlwiw51cIixcIiZZYWN1dGU7XCI6XCLDnVwiLFwiJlljaXJjO1wiOlwixbZcIixcIiZZY3k7XCI6XCLQq1wiLFwiJllmcjtcIjpcIvCdlJxcIixcIiZZb3BmO1wiOlwi8J2VkFwiLFwiJllzY3I7XCI6XCLwnZK0XCIsXCImWXVtbDtcIjpcIsW4XCIsXCImWkhjeTtcIjpcItCWXCIsXCImWmFjdXRlO1wiOlwixblcIixcIiZaY2Fyb247XCI6XCLFvVwiLFwiJlpjeTtcIjpcItCXXCIsXCImWmRvdDtcIjpcIsW7XCIsXCImWmVyb1dpZHRoU3BhY2U7XCI6XCLigItcIixcIiZaZXRhO1wiOlwizpZcIixcIiZaZnI7XCI6XCLihKhcIixcIiZab3BmO1wiOlwi4oSkXCIsXCImWnNjcjtcIjpcIvCdkrVcIixcIiZhYWN1dGVcIjpcIsOhXCIsXCImYWFjdXRlO1wiOlwiw6FcIixcIiZhYnJldmU7XCI6XCLEg1wiLFwiJmFjO1wiOlwi4oi+XCIsXCImYWNFO1wiOlwi4oi+zLNcIixcIiZhY2Q7XCI6XCLiiL9cIixcIiZhY2lyY1wiOlwiw6JcIixcIiZhY2lyYztcIjpcIsOiXCIsXCImYWN1dGVcIjpcIsK0XCIsXCImYWN1dGU7XCI6XCLCtFwiLFwiJmFjeTtcIjpcItCwXCIsXCImYWVsaWdcIjpcIsOmXCIsXCImYWVsaWc7XCI6XCLDplwiLFwiJmFmO1wiOlwi4oGhXCIsXCImYWZyO1wiOlwi8J2UnlwiLFwiJmFncmF2ZVwiOlwiw6BcIixcIiZhZ3JhdmU7XCI6XCLDoFwiLFwiJmFsZWZzeW07XCI6XCLihLVcIixcIiZhbGVwaDtcIjpcIuKEtVwiLFwiJmFscGhhO1wiOlwizrFcIixcIiZhbWFjcjtcIjpcIsSBXCIsXCImYW1hbGc7XCI6XCLiqL9cIixcIiZhbXBcIjpcIiZcIixcIiZhbXA7XCI6XCImXCIsXCImYW5kO1wiOlwi4oinXCIsXCImYW5kYW5kO1wiOlwi4qmVXCIsXCImYW5kZDtcIjpcIuKpnFwiLFwiJmFuZHNsb3BlO1wiOlwi4qmYXCIsXCImYW5kdjtcIjpcIuKpmlwiLFwiJmFuZztcIjpcIuKIoFwiLFwiJmFuZ2U7XCI6XCLipqRcIixcIiZhbmdsZTtcIjpcIuKIoFwiLFwiJmFuZ21zZDtcIjpcIuKIoVwiLFwiJmFuZ21zZGFhO1wiOlwi4qaoXCIsXCImYW5nbXNkYWI7XCI6XCLipqlcIixcIiZhbmdtc2RhYztcIjpcIuKmqlwiLFwiJmFuZ21zZGFkO1wiOlwi4qarXCIsXCImYW5nbXNkYWU7XCI6XCLipqxcIixcIiZhbmdtc2RhZjtcIjpcIuKmrVwiLFwiJmFuZ21zZGFnO1wiOlwi4qauXCIsXCImYW5nbXNkYWg7XCI6XCLipq9cIixcIiZhbmdydDtcIjpcIuKIn1wiLFwiJmFuZ3J0dmI7XCI6XCLiir5cIixcIiZhbmdydHZiZDtcIjpcIuKmnVwiLFwiJmFuZ3NwaDtcIjpcIuKIolwiLFwiJmFuZ3N0O1wiOlwiw4VcIixcIiZhbmd6YXJyO1wiOlwi4o28XCIsXCImYW9nb247XCI6XCLEhVwiLFwiJmFvcGY7XCI6XCLwnZWSXCIsXCImYXA7XCI6XCLiiYhcIixcIiZhcEU7XCI6XCLiqbBcIixcIiZhcGFjaXI7XCI6XCLiqa9cIixcIiZhcGU7XCI6XCLiiYpcIixcIiZhcGlkO1wiOlwi4omLXCIsXCImYXBvcztcIjpcIidcIixcIiZhcHByb3g7XCI6XCLiiYhcIixcIiZhcHByb3hlcTtcIjpcIuKJilwiLFwiJmFyaW5nXCI6XCLDpVwiLFwiJmFyaW5nO1wiOlwiw6VcIixcIiZhc2NyO1wiOlwi8J2StlwiLFwiJmFzdDtcIjpcIipcIixcIiZhc3ltcDtcIjpcIuKJiFwiLFwiJmFzeW1wZXE7XCI6XCLiiY1cIixcIiZhdGlsZGVcIjpcIsOjXCIsXCImYXRpbGRlO1wiOlwiw6NcIixcIiZhdW1sXCI6XCLDpFwiLFwiJmF1bWw7XCI6XCLDpFwiLFwiJmF3Y29uaW50O1wiOlwi4oizXCIsXCImYXdpbnQ7XCI6XCLiqJFcIixcIiZiTm90O1wiOlwi4qutXCIsXCImYmFja2Nvbmc7XCI6XCLiiYxcIixcIiZiYWNrZXBzaWxvbjtcIjpcIs+2XCIsXCImYmFja3ByaW1lO1wiOlwi4oC1XCIsXCImYmFja3NpbTtcIjpcIuKIvVwiLFwiJmJhY2tzaW1lcTtcIjpcIuKLjVwiLFwiJmJhcnZlZTtcIjpcIuKKvVwiLFwiJmJhcndlZDtcIjpcIuKMhVwiLFwiJmJhcndlZGdlO1wiOlwi4oyFXCIsXCImYmJyaztcIjpcIuKOtVwiLFwiJmJicmt0YnJrO1wiOlwi4o62XCIsXCImYmNvbmc7XCI6XCLiiYxcIixcIiZiY3k7XCI6XCLQsVwiLFwiJmJkcXVvO1wiOlwi4oCeXCIsXCImYmVjYXVzO1wiOlwi4oi1XCIsXCImYmVjYXVzZTtcIjpcIuKItVwiLFwiJmJlbXB0eXY7XCI6XCLiprBcIixcIiZiZXBzaTtcIjpcIs+2XCIsXCImYmVybm91O1wiOlwi4oSsXCIsXCImYmV0YTtcIjpcIs6yXCIsXCImYmV0aDtcIjpcIuKEtlwiLFwiJmJldHdlZW47XCI6XCLiiaxcIixcIiZiZnI7XCI6XCLwnZSfXCIsXCImYmlnY2FwO1wiOlwi4ouCXCIsXCImYmlnY2lyYztcIjpcIuKXr1wiLFwiJmJpZ2N1cDtcIjpcIuKLg1wiLFwiJmJpZ29kb3Q7XCI6XCLiqIBcIixcIiZiaWdvcGx1cztcIjpcIuKogVwiLFwiJmJpZ290aW1lcztcIjpcIuKoglwiLFwiJmJpZ3NxY3VwO1wiOlwi4qiGXCIsXCImYmlnc3RhcjtcIjpcIuKYhVwiLFwiJmJpZ3RyaWFuZ2xlZG93bjtcIjpcIuKWvVwiLFwiJmJpZ3RyaWFuZ2xldXA7XCI6XCLilrNcIixcIiZiaWd1cGx1cztcIjpcIuKohFwiLFwiJmJpZ3ZlZTtcIjpcIuKLgVwiLFwiJmJpZ3dlZGdlO1wiOlwi4ouAXCIsXCImYmthcm93O1wiOlwi4qSNXCIsXCImYmxhY2tsb3plbmdlO1wiOlwi4qerXCIsXCImYmxhY2tzcXVhcmU7XCI6XCLilqpcIixcIiZibGFja3RyaWFuZ2xlO1wiOlwi4pa0XCIsXCImYmxhY2t0cmlhbmdsZWRvd247XCI6XCLilr5cIixcIiZibGFja3RyaWFuZ2xlbGVmdDtcIjpcIuKXglwiLFwiJmJsYWNrdHJpYW5nbGVyaWdodDtcIjpcIuKWuFwiLFwiJmJsYW5rO1wiOlwi4pCjXCIsXCImYmxrMTI7XCI6XCLilpJcIixcIiZibGsxNDtcIjpcIuKWkVwiLFwiJmJsazM0O1wiOlwi4paTXCIsXCImYmxvY2s7XCI6XCLilohcIixcIiZibmU7XCI6XCI94oOlXCIsXCImYm5lcXVpdjtcIjpcIuKJoeKDpVwiLFwiJmJub3Q7XCI6XCLijJBcIixcIiZib3BmO1wiOlwi8J2Vk1wiLFwiJmJvdDtcIjpcIuKKpVwiLFwiJmJvdHRvbTtcIjpcIuKKpVwiLFwiJmJvd3RpZTtcIjpcIuKLiFwiLFwiJmJveERMO1wiOlwi4pWXXCIsXCImYm94RFI7XCI6XCLilZRcIixcIiZib3hEbDtcIjpcIuKVllwiLFwiJmJveERyO1wiOlwi4pWTXCIsXCImYm94SDtcIjpcIuKVkFwiLFwiJmJveEhEO1wiOlwi4pWmXCIsXCImYm94SFU7XCI6XCLilalcIixcIiZib3hIZDtcIjpcIuKVpFwiLFwiJmJveEh1O1wiOlwi4pWnXCIsXCImYm94VUw7XCI6XCLilZ1cIixcIiZib3hVUjtcIjpcIuKVmlwiLFwiJmJveFVsO1wiOlwi4pWcXCIsXCImYm94VXI7XCI6XCLilZlcIixcIiZib3hWO1wiOlwi4pWRXCIsXCImYm94Vkg7XCI6XCLilaxcIixcIiZib3hWTDtcIjpcIuKVo1wiLFwiJmJveFZSO1wiOlwi4pWgXCIsXCImYm94Vmg7XCI6XCLilatcIixcIiZib3hWbDtcIjpcIuKVolwiLFwiJmJveFZyO1wiOlwi4pWfXCIsXCImYm94Ym94O1wiOlwi4qeJXCIsXCImYm94ZEw7XCI6XCLilZVcIixcIiZib3hkUjtcIjpcIuKVklwiLFwiJmJveGRsO1wiOlwi4pSQXCIsXCImYm94ZHI7XCI6XCLilIxcIixcIiZib3hoO1wiOlwi4pSAXCIsXCImYm94aEQ7XCI6XCLilaVcIixcIiZib3hoVTtcIjpcIuKVqFwiLFwiJmJveGhkO1wiOlwi4pSsXCIsXCImYm94aHU7XCI6XCLilLRcIixcIiZib3htaW51cztcIjpcIuKKn1wiLFwiJmJveHBsdXM7XCI6XCLiip5cIixcIiZib3h0aW1lcztcIjpcIuKKoFwiLFwiJmJveHVMO1wiOlwi4pWbXCIsXCImYm94dVI7XCI6XCLilZhcIixcIiZib3h1bDtcIjpcIuKUmFwiLFwiJmJveHVyO1wiOlwi4pSUXCIsXCImYm94djtcIjpcIuKUglwiLFwiJmJveHZIO1wiOlwi4pWqXCIsXCImYm94dkw7XCI6XCLilaFcIixcIiZib3h2UjtcIjpcIuKVnlwiLFwiJmJveHZoO1wiOlwi4pS8XCIsXCImYm94dmw7XCI6XCLilKRcIixcIiZib3h2cjtcIjpcIuKUnFwiLFwiJmJwcmltZTtcIjpcIuKAtVwiLFwiJmJyZXZlO1wiOlwiy5hcIixcIiZicnZiYXJcIjpcIsKmXCIsXCImYnJ2YmFyO1wiOlwiwqZcIixcIiZic2NyO1wiOlwi8J2St1wiLFwiJmJzZW1pO1wiOlwi4oGPXCIsXCImYnNpbTtcIjpcIuKIvVwiLFwiJmJzaW1lO1wiOlwi4ouNXCIsXCImYnNvbDtcIjpcIlxcXFxcIixcIiZic29sYjtcIjpcIuKnhVwiLFwiJmJzb2xoc3ViO1wiOlwi4p+IXCIsXCImYnVsbDtcIjpcIuKAolwiLFwiJmJ1bGxldDtcIjpcIuKAolwiLFwiJmJ1bXA7XCI6XCLiiY5cIixcIiZidW1wRTtcIjpcIuKqrlwiLFwiJmJ1bXBlO1wiOlwi4omPXCIsXCImYnVtcGVxO1wiOlwi4omPXCIsXCImY2FjdXRlO1wiOlwixIdcIixcIiZjYXA7XCI6XCLiiKlcIixcIiZjYXBhbmQ7XCI6XCLiqYRcIixcIiZjYXBicmN1cDtcIjpcIuKpiVwiLFwiJmNhcGNhcDtcIjpcIuKpi1wiLFwiJmNhcGN1cDtcIjpcIuKph1wiLFwiJmNhcGRvdDtcIjpcIuKpgFwiLFwiJmNhcHM7XCI6XCLiiKnvuIBcIixcIiZjYXJldDtcIjpcIuKBgVwiLFwiJmNhcm9uO1wiOlwiy4dcIixcIiZjY2FwcztcIjpcIuKpjVwiLFwiJmNjYXJvbjtcIjpcIsSNXCIsXCImY2NlZGlsXCI6XCLDp1wiLFwiJmNjZWRpbDtcIjpcIsOnXCIsXCImY2NpcmM7XCI6XCLEiVwiLFwiJmNjdXBzO1wiOlwi4qmMXCIsXCImY2N1cHNzbTtcIjpcIuKpkFwiLFwiJmNkb3Q7XCI6XCLEi1wiLFwiJmNlZGlsXCI6XCLCuFwiLFwiJmNlZGlsO1wiOlwiwrhcIixcIiZjZW1wdHl2O1wiOlwi4qayXCIsXCImY2VudFwiOlwiwqJcIixcIiZjZW50O1wiOlwiwqJcIixcIiZjZW50ZXJkb3Q7XCI6XCLCt1wiLFwiJmNmcjtcIjpcIvCdlKBcIixcIiZjaGN5O1wiOlwi0YdcIixcIiZjaGVjaztcIjpcIuKck1wiLFwiJmNoZWNrbWFyaztcIjpcIuKck1wiLFwiJmNoaTtcIjpcIs+HXCIsXCImY2lyO1wiOlwi4peLXCIsXCImY2lyRTtcIjpcIuKng1wiLFwiJmNpcmM7XCI6XCLLhlwiLFwiJmNpcmNlcTtcIjpcIuKJl1wiLFwiJmNpcmNsZWFycm93bGVmdDtcIjpcIuKGulwiLFwiJmNpcmNsZWFycm93cmlnaHQ7XCI6XCLihrtcIixcIiZjaXJjbGVkUjtcIjpcIsKuXCIsXCImY2lyY2xlZFM7XCI6XCLik4hcIixcIiZjaXJjbGVkYXN0O1wiOlwi4oqbXCIsXCImY2lyY2xlZGNpcmM7XCI6XCLiippcIixcIiZjaXJjbGVkZGFzaDtcIjpcIuKKnVwiLFwiJmNpcmU7XCI6XCLiiZdcIixcIiZjaXJmbmludDtcIjpcIuKokFwiLFwiJmNpcm1pZDtcIjpcIuKrr1wiLFwiJmNpcnNjaXI7XCI6XCLip4JcIixcIiZjbHVicztcIjpcIuKZo1wiLFwiJmNsdWJzdWl0O1wiOlwi4pmjXCIsXCImY29sb247XCI6XCI6XCIsXCImY29sb25lO1wiOlwi4omUXCIsXCImY29sb25lcTtcIjpcIuKJlFwiLFwiJmNvbW1hO1wiOlwiLFwiLFwiJmNvbW1hdDtcIjpcIkBcIixcIiZjb21wO1wiOlwi4oiBXCIsXCImY29tcGZuO1wiOlwi4oiYXCIsXCImY29tcGxlbWVudDtcIjpcIuKIgVwiLFwiJmNvbXBsZXhlcztcIjpcIuKEglwiLFwiJmNvbmc7XCI6XCLiiYVcIixcIiZjb25nZG90O1wiOlwi4qmtXCIsXCImY29uaW50O1wiOlwi4oiuXCIsXCImY29wZjtcIjpcIvCdlZRcIixcIiZjb3Byb2Q7XCI6XCLiiJBcIixcIiZjb3B5XCI6XCLCqVwiLFwiJmNvcHk7XCI6XCLCqVwiLFwiJmNvcHlzcjtcIjpcIuKEl1wiLFwiJmNyYXJyO1wiOlwi4oa1XCIsXCImY3Jvc3M7XCI6XCLinJdcIixcIiZjc2NyO1wiOlwi8J2SuFwiLFwiJmNzdWI7XCI6XCLiq49cIixcIiZjc3ViZTtcIjpcIuKrkVwiLFwiJmNzdXA7XCI6XCLiq5BcIixcIiZjc3VwZTtcIjpcIuKrklwiLFwiJmN0ZG90O1wiOlwi4ouvXCIsXCImY3VkYXJybDtcIjpcIuKkuFwiLFwiJmN1ZGFycnI7XCI6XCLipLVcIixcIiZjdWVwcjtcIjpcIuKLnlwiLFwiJmN1ZXNjO1wiOlwi4oufXCIsXCImY3VsYXJyO1wiOlwi4oa2XCIsXCImY3VsYXJycDtcIjpcIuKkvVwiLFwiJmN1cDtcIjpcIuKIqlwiLFwiJmN1cGJyY2FwO1wiOlwi4qmIXCIsXCImY3VwY2FwO1wiOlwi4qmGXCIsXCImY3VwY3VwO1wiOlwi4qmKXCIsXCImY3VwZG90O1wiOlwi4oqNXCIsXCImY3Vwb3I7XCI6XCLiqYVcIixcIiZjdXBzO1wiOlwi4oiq77iAXCIsXCImY3VyYXJyO1wiOlwi4oa3XCIsXCImY3VyYXJybTtcIjpcIuKkvFwiLFwiJmN1cmx5ZXFwcmVjO1wiOlwi4oueXCIsXCImY3VybHllcXN1Y2M7XCI6XCLii59cIixcIiZjdXJseXZlZTtcIjpcIuKLjlwiLFwiJmN1cmx5d2VkZ2U7XCI6XCLii49cIixcIiZjdXJyZW5cIjpcIsKkXCIsXCImY3VycmVuO1wiOlwiwqRcIixcIiZjdXJ2ZWFycm93bGVmdDtcIjpcIuKGtlwiLFwiJmN1cnZlYXJyb3dyaWdodDtcIjpcIuKGt1wiLFwiJmN1dmVlO1wiOlwi4ouOXCIsXCImY3V3ZWQ7XCI6XCLii49cIixcIiZjd2NvbmludDtcIjpcIuKIslwiLFwiJmN3aW50O1wiOlwi4oixXCIsXCImY3lsY3R5O1wiOlwi4oytXCIsXCImZEFycjtcIjpcIuKHk1wiLFwiJmRIYXI7XCI6XCLipaVcIixcIiZkYWdnZXI7XCI6XCLigKBcIixcIiZkYWxldGg7XCI6XCLihLhcIixcIiZkYXJyO1wiOlwi4oaTXCIsXCImZGFzaDtcIjpcIuKAkFwiLFwiJmRhc2h2O1wiOlwi4oqjXCIsXCImZGJrYXJvdztcIjpcIuKkj1wiLFwiJmRibGFjO1wiOlwiy51cIixcIiZkY2Fyb247XCI6XCLEj1wiLFwiJmRjeTtcIjpcItC0XCIsXCImZGQ7XCI6XCLihYZcIixcIiZkZGFnZ2VyO1wiOlwi4oChXCIsXCImZGRhcnI7XCI6XCLih4pcIixcIiZkZG90c2VxO1wiOlwi4qm3XCIsXCImZGVnXCI6XCLCsFwiLFwiJmRlZztcIjpcIsKwXCIsXCImZGVsdGE7XCI6XCLOtFwiLFwiJmRlbXB0eXY7XCI6XCLiprFcIixcIiZkZmlzaHQ7XCI6XCLipb9cIixcIiZkZnI7XCI6XCLwnZShXCIsXCImZGhhcmw7XCI6XCLih4NcIixcIiZkaGFycjtcIjpcIuKHglwiLFwiJmRpYW07XCI6XCLii4RcIixcIiZkaWFtb25kO1wiOlwi4ouEXCIsXCImZGlhbW9uZHN1aXQ7XCI6XCLimaZcIixcIiZkaWFtcztcIjpcIuKZplwiLFwiJmRpZTtcIjpcIsKoXCIsXCImZGlnYW1tYTtcIjpcIs+dXCIsXCImZGlzaW47XCI6XCLii7JcIixcIiZkaXY7XCI6XCLDt1wiLFwiJmRpdmlkZVwiOlwiw7dcIixcIiZkaXZpZGU7XCI6XCLDt1wiLFwiJmRpdmlkZW9udGltZXM7XCI6XCLii4dcIixcIiZkaXZvbng7XCI6XCLii4dcIixcIiZkamN5O1wiOlwi0ZJcIixcIiZkbGNvcm47XCI6XCLijJ5cIixcIiZkbGNyb3A7XCI6XCLijI1cIixcIiZkb2xsYXI7XCI6XCIkXCIsXCImZG9wZjtcIjpcIvCdlZVcIixcIiZkb3Q7XCI6XCLLmVwiLFwiJmRvdGVxO1wiOlwi4omQXCIsXCImZG90ZXFkb3Q7XCI6XCLiiZFcIixcIiZkb3RtaW51cztcIjpcIuKIuFwiLFwiJmRvdHBsdXM7XCI6XCLiiJRcIixcIiZkb3RzcXVhcmU7XCI6XCLiiqFcIixcIiZkb3VibGViYXJ3ZWRnZTtcIjpcIuKMhlwiLFwiJmRvd25hcnJvdztcIjpcIuKGk1wiLFwiJmRvd25kb3duYXJyb3dzO1wiOlwi4oeKXCIsXCImZG93bmhhcnBvb25sZWZ0O1wiOlwi4oeDXCIsXCImZG93bmhhcnBvb25yaWdodDtcIjpcIuKHglwiLFwiJmRyYmthcm93O1wiOlwi4qSQXCIsXCImZHJjb3JuO1wiOlwi4oyfXCIsXCImZHJjcm9wO1wiOlwi4oyMXCIsXCImZHNjcjtcIjpcIvCdkrlcIixcIiZkc2N5O1wiOlwi0ZVcIixcIiZkc29sO1wiOlwi4qe2XCIsXCImZHN0cm9rO1wiOlwixJFcIixcIiZkdGRvdDtcIjpcIuKLsVwiLFwiJmR0cmk7XCI6XCLilr9cIixcIiZkdHJpZjtcIjpcIuKWvlwiLFwiJmR1YXJyO1wiOlwi4oe1XCIsXCImZHVoYXI7XCI6XCLipa9cIixcIiZkd2FuZ2xlO1wiOlwi4qamXCIsXCImZHpjeTtcIjpcItGfXCIsXCImZHppZ3JhcnI7XCI6XCLin79cIixcIiZlRERvdDtcIjpcIuKpt1wiLFwiJmVEb3Q7XCI6XCLiiZFcIixcIiZlYWN1dGVcIjpcIsOpXCIsXCImZWFjdXRlO1wiOlwiw6lcIixcIiZlYXN0ZXI7XCI6XCLiqa5cIixcIiZlY2Fyb247XCI6XCLEm1wiLFwiJmVjaXI7XCI6XCLiiZZcIixcIiZlY2lyY1wiOlwiw6pcIixcIiZlY2lyYztcIjpcIsOqXCIsXCImZWNvbG9uO1wiOlwi4omVXCIsXCImZWN5O1wiOlwi0Y1cIixcIiZlZG90O1wiOlwixJdcIixcIiZlZTtcIjpcIuKFh1wiLFwiJmVmRG90O1wiOlwi4omSXCIsXCImZWZyO1wiOlwi8J2UolwiLFwiJmVnO1wiOlwi4qqaXCIsXCImZWdyYXZlXCI6XCLDqFwiLFwiJmVncmF2ZTtcIjpcIsOoXCIsXCImZWdzO1wiOlwi4qqWXCIsXCImZWdzZG90O1wiOlwi4qqYXCIsXCImZWw7XCI6XCLiqplcIixcIiZlbGludGVycztcIjpcIuKPp1wiLFwiJmVsbDtcIjpcIuKEk1wiLFwiJmVscztcIjpcIuKqlVwiLFwiJmVsc2RvdDtcIjpcIuKql1wiLFwiJmVtYWNyO1wiOlwixJNcIixcIiZlbXB0eTtcIjpcIuKIhVwiLFwiJmVtcHR5c2V0O1wiOlwi4oiFXCIsXCImZW1wdHl2O1wiOlwi4oiFXCIsXCImZW1zcDEzO1wiOlwi4oCEXCIsXCImZW1zcDE0O1wiOlwi4oCFXCIsXCImZW1zcDtcIjpcIuKAg1wiLFwiJmVuZztcIjpcIsWLXCIsXCImZW5zcDtcIjpcIuKAglwiLFwiJmVvZ29uO1wiOlwixJlcIixcIiZlb3BmO1wiOlwi8J2VllwiLFwiJmVwYXI7XCI6XCLii5VcIixcIiZlcGFyc2w7XCI6XCLip6NcIixcIiZlcGx1cztcIjpcIuKpsVwiLFwiJmVwc2k7XCI6XCLOtVwiLFwiJmVwc2lsb247XCI6XCLOtVwiLFwiJmVwc2l2O1wiOlwiz7VcIixcIiZlcWNpcmM7XCI6XCLiiZZcIixcIiZlcWNvbG9uO1wiOlwi4omVXCIsXCImZXFzaW07XCI6XCLiiYJcIixcIiZlcXNsYW50Z3RyO1wiOlwi4qqWXCIsXCImZXFzbGFudGxlc3M7XCI6XCLiqpVcIixcIiZlcXVhbHM7XCI6XCI9XCIsXCImZXF1ZXN0O1wiOlwi4omfXCIsXCImZXF1aXY7XCI6XCLiiaFcIixcIiZlcXVpdkREO1wiOlwi4qm4XCIsXCImZXF2cGFyc2w7XCI6XCLip6VcIixcIiZlckRvdDtcIjpcIuKJk1wiLFwiJmVyYXJyO1wiOlwi4qWxXCIsXCImZXNjcjtcIjpcIuKEr1wiLFwiJmVzZG90O1wiOlwi4omQXCIsXCImZXNpbTtcIjpcIuKJglwiLFwiJmV0YTtcIjpcIs63XCIsXCImZXRoXCI6XCLDsFwiLFwiJmV0aDtcIjpcIsOwXCIsXCImZXVtbFwiOlwiw6tcIixcIiZldW1sO1wiOlwiw6tcIixcIiZldXJvO1wiOlwi4oKsXCIsXCImZXhjbDtcIjpcIiFcIixcIiZleGlzdDtcIjpcIuKIg1wiLFwiJmV4cGVjdGF0aW9uO1wiOlwi4oSwXCIsXCImZXhwb25lbnRpYWxlO1wiOlwi4oWHXCIsXCImZmFsbGluZ2RvdHNlcTtcIjpcIuKJklwiLFwiJmZjeTtcIjpcItGEXCIsXCImZmVtYWxlO1wiOlwi4pmAXCIsXCImZmZpbGlnO1wiOlwi76yDXCIsXCImZmZsaWc7XCI6XCLvrIBcIixcIiZmZmxsaWc7XCI6XCLvrIRcIixcIiZmZnI7XCI6XCLwnZSjXCIsXCImZmlsaWc7XCI6XCLvrIFcIixcIiZmamxpZztcIjpcImZqXCIsXCImZmxhdDtcIjpcIuKZrVwiLFwiJmZsbGlnO1wiOlwi76yCXCIsXCImZmx0bnM7XCI6XCLilrFcIixcIiZmbm9mO1wiOlwixpJcIixcIiZmb3BmO1wiOlwi8J2Vl1wiLFwiJmZvcmFsbDtcIjpcIuKIgFwiLFwiJmZvcms7XCI6XCLii5RcIixcIiZmb3JrdjtcIjpcIuKrmVwiLFwiJmZwYXJ0aW50O1wiOlwi4qiNXCIsXCImZnJhYzEyXCI6XCLCvVwiLFwiJmZyYWMxMjtcIjpcIsK9XCIsXCImZnJhYzEzO1wiOlwi4oWTXCIsXCImZnJhYzE0XCI6XCLCvFwiLFwiJmZyYWMxNDtcIjpcIsK8XCIsXCImZnJhYzE1O1wiOlwi4oWVXCIsXCImZnJhYzE2O1wiOlwi4oWZXCIsXCImZnJhYzE4O1wiOlwi4oWbXCIsXCImZnJhYzIzO1wiOlwi4oWUXCIsXCImZnJhYzI1O1wiOlwi4oWWXCIsXCImZnJhYzM0XCI6XCLCvlwiLFwiJmZyYWMzNDtcIjpcIsK+XCIsXCImZnJhYzM1O1wiOlwi4oWXXCIsXCImZnJhYzM4O1wiOlwi4oWcXCIsXCImZnJhYzQ1O1wiOlwi4oWYXCIsXCImZnJhYzU2O1wiOlwi4oWaXCIsXCImZnJhYzU4O1wiOlwi4oWdXCIsXCImZnJhYzc4O1wiOlwi4oWeXCIsXCImZnJhc2w7XCI6XCLigYRcIixcIiZmcm93bjtcIjpcIuKMolwiLFwiJmZzY3I7XCI6XCLwnZK7XCIsXCImZ0U7XCI6XCLiiadcIixcIiZnRWw7XCI6XCLiqoxcIixcIiZnYWN1dGU7XCI6XCLHtVwiLFwiJmdhbW1hO1wiOlwizrNcIixcIiZnYW1tYWQ7XCI6XCLPnVwiLFwiJmdhcDtcIjpcIuKqhlwiLFwiJmdicmV2ZTtcIjpcIsSfXCIsXCImZ2NpcmM7XCI6XCLEnVwiLFwiJmdjeTtcIjpcItCzXCIsXCImZ2RvdDtcIjpcIsShXCIsXCImZ2U7XCI6XCLiiaVcIixcIiZnZWw7XCI6XCLii5tcIixcIiZnZXE7XCI6XCLiiaVcIixcIiZnZXFxO1wiOlwi4omnXCIsXCImZ2Vxc2xhbnQ7XCI6XCLiqb5cIixcIiZnZXM7XCI6XCLiqb5cIixcIiZnZXNjYztcIjpcIuKqqVwiLFwiJmdlc2RvdDtcIjpcIuKqgFwiLFwiJmdlc2RvdG87XCI6XCLiqoJcIixcIiZnZXNkb3RvbDtcIjpcIuKqhFwiLFwiJmdlc2w7XCI6XCLii5vvuIBcIixcIiZnZXNsZXM7XCI6XCLiqpRcIixcIiZnZnI7XCI6XCLwnZSkXCIsXCImZ2c7XCI6XCLiiatcIixcIiZnZ2c7XCI6XCLii5lcIixcIiZnaW1lbDtcIjpcIuKEt1wiLFwiJmdqY3k7XCI6XCLRk1wiLFwiJmdsO1wiOlwi4om3XCIsXCImZ2xFO1wiOlwi4qqSXCIsXCImZ2xhO1wiOlwi4qqlXCIsXCImZ2xqO1wiOlwi4qqkXCIsXCImZ25FO1wiOlwi4ompXCIsXCImZ25hcDtcIjpcIuKqilwiLFwiJmduYXBwcm94O1wiOlwi4qqKXCIsXCImZ25lO1wiOlwi4qqIXCIsXCImZ25lcTtcIjpcIuKqiFwiLFwiJmduZXFxO1wiOlwi4ompXCIsXCImZ25zaW07XCI6XCLii6dcIixcIiZnb3BmO1wiOlwi8J2VmFwiLFwiJmdyYXZlO1wiOlwiYFwiLFwiJmdzY3I7XCI6XCLihIpcIixcIiZnc2ltO1wiOlwi4omzXCIsXCImZ3NpbWU7XCI6XCLiqo5cIixcIiZnc2ltbDtcIjpcIuKqkFwiLFwiJmd0XCI6XCI+XCIsXCImZ3Q7XCI6XCI+XCIsXCImZ3RjYztcIjpcIuKqp1wiLFwiJmd0Y2lyO1wiOlwi4qm6XCIsXCImZ3Rkb3Q7XCI6XCLii5dcIixcIiZndGxQYXI7XCI6XCLippVcIixcIiZndHF1ZXN0O1wiOlwi4qm8XCIsXCImZ3RyYXBwcm94O1wiOlwi4qqGXCIsXCImZ3RyYXJyO1wiOlwi4qW4XCIsXCImZ3RyZG90O1wiOlwi4ouXXCIsXCImZ3RyZXFsZXNzO1wiOlwi4oubXCIsXCImZ3RyZXFxbGVzcztcIjpcIuKqjFwiLFwiJmd0cmxlc3M7XCI6XCLiibdcIixcIiZndHJzaW07XCI6XCLiibNcIixcIiZndmVydG5lcXE7XCI6XCLiianvuIBcIixcIiZndm5FO1wiOlwi4omp77iAXCIsXCImaEFycjtcIjpcIuKHlFwiLFwiJmhhaXJzcDtcIjpcIuKAilwiLFwiJmhhbGY7XCI6XCLCvVwiLFwiJmhhbWlsdDtcIjpcIuKEi1wiLFwiJmhhcmRjeTtcIjpcItGKXCIsXCImaGFycjtcIjpcIuKGlFwiLFwiJmhhcnJjaXI7XCI6XCLipYhcIixcIiZoYXJydztcIjpcIuKGrVwiLFwiJmhiYXI7XCI6XCLihI9cIixcIiZoY2lyYztcIjpcIsSlXCIsXCImaGVhcnRzO1wiOlwi4pmlXCIsXCImaGVhcnRzdWl0O1wiOlwi4pmlXCIsXCImaGVsbGlwO1wiOlwi4oCmXCIsXCImaGVyY29uO1wiOlwi4oq5XCIsXCImaGZyO1wiOlwi8J2UpVwiLFwiJmhrc2Vhcm93O1wiOlwi4qSlXCIsXCImaGtzd2Fyb3c7XCI6XCLipKZcIixcIiZob2FycjtcIjpcIuKHv1wiLFwiJmhvbXRodDtcIjpcIuKIu1wiLFwiJmhvb2tsZWZ0YXJyb3c7XCI6XCLihqlcIixcIiZob29rcmlnaHRhcnJvdztcIjpcIuKGqlwiLFwiJmhvcGY7XCI6XCLwnZWZXCIsXCImaG9yYmFyO1wiOlwi4oCVXCIsXCImaHNjcjtcIjpcIvCdkr1cIixcIiZoc2xhc2g7XCI6XCLihI9cIixcIiZoc3Ryb2s7XCI6XCLEp1wiLFwiJmh5YnVsbDtcIjpcIuKBg1wiLFwiJmh5cGhlbjtcIjpcIuKAkFwiLFwiJmlhY3V0ZVwiOlwiw61cIixcIiZpYWN1dGU7XCI6XCLDrVwiLFwiJmljO1wiOlwi4oGjXCIsXCImaWNpcmNcIjpcIsOuXCIsXCImaWNpcmM7XCI6XCLDrlwiLFwiJmljeTtcIjpcItC4XCIsXCImaWVjeTtcIjpcItC1XCIsXCImaWV4Y2xcIjpcIsKhXCIsXCImaWV4Y2w7XCI6XCLCoVwiLFwiJmlmZjtcIjpcIuKHlFwiLFwiJmlmcjtcIjpcIvCdlKZcIixcIiZpZ3JhdmVcIjpcIsOsXCIsXCImaWdyYXZlO1wiOlwiw6xcIixcIiZpaTtcIjpcIuKFiFwiLFwiJmlpaWludDtcIjpcIuKojFwiLFwiJmlpaW50O1wiOlwi4oitXCIsXCImaWluZmluO1wiOlwi4qecXCIsXCImaWlvdGE7XCI6XCLihKlcIixcIiZpamxpZztcIjpcIsSzXCIsXCImaW1hY3I7XCI6XCLEq1wiLFwiJmltYWdlO1wiOlwi4oSRXCIsXCImaW1hZ2xpbmU7XCI6XCLihJBcIixcIiZpbWFncGFydDtcIjpcIuKEkVwiLFwiJmltYXRoO1wiOlwixLFcIixcIiZpbW9mO1wiOlwi4oq3XCIsXCImaW1wZWQ7XCI6XCLGtVwiLFwiJmluO1wiOlwi4oiIXCIsXCImaW5jYXJlO1wiOlwi4oSFXCIsXCImaW5maW47XCI6XCLiiJ5cIixcIiZpbmZpbnRpZTtcIjpcIuKnnVwiLFwiJmlub2RvdDtcIjpcIsSxXCIsXCImaW50O1wiOlwi4oirXCIsXCImaW50Y2FsO1wiOlwi4oq6XCIsXCImaW50ZWdlcnM7XCI6XCLihKRcIixcIiZpbnRlcmNhbDtcIjpcIuKKulwiLFwiJmludGxhcmhrO1wiOlwi4qiXXCIsXCImaW50cHJvZDtcIjpcIuKovFwiLFwiJmlvY3k7XCI6XCLRkVwiLFwiJmlvZ29uO1wiOlwixK9cIixcIiZpb3BmO1wiOlwi8J2VmlwiLFwiJmlvdGE7XCI6XCLOuVwiLFwiJmlwcm9kO1wiOlwi4qi8XCIsXCImaXF1ZXN0XCI6XCLCv1wiLFwiJmlxdWVzdDtcIjpcIsK/XCIsXCImaXNjcjtcIjpcIvCdkr5cIixcIiZpc2luO1wiOlwi4oiIXCIsXCImaXNpbkU7XCI6XCLii7lcIixcIiZpc2luZG90O1wiOlwi4ou1XCIsXCImaXNpbnM7XCI6XCLii7RcIixcIiZpc2luc3Y7XCI6XCLii7NcIixcIiZpc2ludjtcIjpcIuKIiFwiLFwiJml0O1wiOlwi4oGiXCIsXCImaXRpbGRlO1wiOlwixKlcIixcIiZpdWtjeTtcIjpcItGWXCIsXCImaXVtbFwiOlwiw69cIixcIiZpdW1sO1wiOlwiw69cIixcIiZqY2lyYztcIjpcIsS1XCIsXCImamN5O1wiOlwi0LlcIixcIiZqZnI7XCI6XCLwnZSnXCIsXCImam1hdGg7XCI6XCLIt1wiLFwiJmpvcGY7XCI6XCLwnZWbXCIsXCImanNjcjtcIjpcIvCdkr9cIixcIiZqc2VyY3k7XCI6XCLRmFwiLFwiJmp1a2N5O1wiOlwi0ZRcIixcIiZrYXBwYTtcIjpcIs66XCIsXCIma2FwcGF2O1wiOlwiz7BcIixcIiZrY2VkaWw7XCI6XCLEt1wiLFwiJmtjeTtcIjpcItC6XCIsXCIma2ZyO1wiOlwi8J2UqFwiLFwiJmtncmVlbjtcIjpcIsS4XCIsXCIma2hjeTtcIjpcItGFXCIsXCIma2pjeTtcIjpcItGcXCIsXCIma29wZjtcIjpcIvCdlZxcIixcIiZrc2NyO1wiOlwi8J2TgFwiLFwiJmxBYXJyO1wiOlwi4oeaXCIsXCImbEFycjtcIjpcIuKHkFwiLFwiJmxBdGFpbDtcIjpcIuKkm1wiLFwiJmxCYXJyO1wiOlwi4qSOXCIsXCImbEU7XCI6XCLiiaZcIixcIiZsRWc7XCI6XCLiqotcIixcIiZsSGFyO1wiOlwi4qWiXCIsXCImbGFjdXRlO1wiOlwixLpcIixcIiZsYWVtcHR5djtcIjpcIuKmtFwiLFwiJmxhZ3JhbjtcIjpcIuKEklwiLFwiJmxhbWJkYTtcIjpcIs67XCIsXCImbGFuZztcIjpcIuKfqFwiLFwiJmxhbmdkO1wiOlwi4qaRXCIsXCImbGFuZ2xlO1wiOlwi4p+oXCIsXCImbGFwO1wiOlwi4qqFXCIsXCImbGFxdW9cIjpcIsKrXCIsXCImbGFxdW87XCI6XCLCq1wiLFwiJmxhcnI7XCI6XCLihpBcIixcIiZsYXJyYjtcIjpcIuKHpFwiLFwiJmxhcnJiZnM7XCI6XCLipJ9cIixcIiZsYXJyZnM7XCI6XCLipJ1cIixcIiZsYXJyaGs7XCI6XCLihqlcIixcIiZsYXJybHA7XCI6XCLihqtcIixcIiZsYXJycGw7XCI6XCLipLlcIixcIiZsYXJyc2ltO1wiOlwi4qWzXCIsXCImbGFycnRsO1wiOlwi4oaiXCIsXCImbGF0O1wiOlwi4qqrXCIsXCImbGF0YWlsO1wiOlwi4qSZXCIsXCImbGF0ZTtcIjpcIuKqrVwiLFwiJmxhdGVzO1wiOlwi4qqt77iAXCIsXCImbGJhcnI7XCI6XCLipIxcIixcIiZsYmJyaztcIjpcIuKdslwiLFwiJmxicmFjZTtcIjpcIntcIixcIiZsYnJhY2s7XCI6XCJbXCIsXCImbGJya2U7XCI6XCLipotcIixcIiZsYnJrc2xkO1wiOlwi4qaPXCIsXCImbGJya3NsdTtcIjpcIuKmjVwiLFwiJmxjYXJvbjtcIjpcIsS+XCIsXCImbGNlZGlsO1wiOlwixLxcIixcIiZsY2VpbDtcIjpcIuKMiFwiLFwiJmxjdWI7XCI6XCJ7XCIsXCImbGN5O1wiOlwi0LtcIixcIiZsZGNhO1wiOlwi4qS2XCIsXCImbGRxdW87XCI6XCLigJxcIixcIiZsZHF1b3I7XCI6XCLigJ5cIixcIiZsZHJkaGFyO1wiOlwi4qWnXCIsXCImbGRydXNoYXI7XCI6XCLipYtcIixcIiZsZHNoO1wiOlwi4oayXCIsXCImbGU7XCI6XCLiiaRcIixcIiZsZWZ0YXJyb3c7XCI6XCLihpBcIixcIiZsZWZ0YXJyb3d0YWlsO1wiOlwi4oaiXCIsXCImbGVmdGhhcnBvb25kb3duO1wiOlwi4oa9XCIsXCImbGVmdGhhcnBvb251cDtcIjpcIuKGvFwiLFwiJmxlZnRsZWZ0YXJyb3dzO1wiOlwi4oeHXCIsXCImbGVmdHJpZ2h0YXJyb3c7XCI6XCLihpRcIixcIiZsZWZ0cmlnaHRhcnJvd3M7XCI6XCLih4ZcIixcIiZsZWZ0cmlnaHRoYXJwb29ucztcIjpcIuKHi1wiLFwiJmxlZnRyaWdodHNxdWlnYXJyb3c7XCI6XCLihq1cIixcIiZsZWZ0dGhyZWV0aW1lcztcIjpcIuKLi1wiLFwiJmxlZztcIjpcIuKLmlwiLFwiJmxlcTtcIjpcIuKJpFwiLFwiJmxlcXE7XCI6XCLiiaZcIixcIiZsZXFzbGFudDtcIjpcIuKpvVwiLFwiJmxlcztcIjpcIuKpvVwiLFwiJmxlc2NjO1wiOlwi4qqoXCIsXCImbGVzZG90O1wiOlwi4qm/XCIsXCImbGVzZG90bztcIjpcIuKqgVwiLFwiJmxlc2RvdG9yO1wiOlwi4qqDXCIsXCImbGVzZztcIjpcIuKLmu+4gFwiLFwiJmxlc2dlcztcIjpcIuKqk1wiLFwiJmxlc3NhcHByb3g7XCI6XCLiqoVcIixcIiZsZXNzZG90O1wiOlwi4ouWXCIsXCImbGVzc2VxZ3RyO1wiOlwi4ouaXCIsXCImbGVzc2VxcWd0cjtcIjpcIuKqi1wiLFwiJmxlc3NndHI7XCI6XCLiibZcIixcIiZsZXNzc2ltO1wiOlwi4omyXCIsXCImbGZpc2h0O1wiOlwi4qW8XCIsXCImbGZsb29yO1wiOlwi4oyKXCIsXCImbGZyO1wiOlwi8J2UqVwiLFwiJmxnO1wiOlwi4om2XCIsXCImbGdFO1wiOlwi4qqRXCIsXCImbGhhcmQ7XCI6XCLihr1cIixcIiZsaGFydTtcIjpcIuKGvFwiLFwiJmxoYXJ1bDtcIjpcIuKlqlwiLFwiJmxoYmxrO1wiOlwi4paEXCIsXCImbGpjeTtcIjpcItGZXCIsXCImbGw7XCI6XCLiiapcIixcIiZsbGFycjtcIjpcIuKHh1wiLFwiJmxsY29ybmVyO1wiOlwi4oyeXCIsXCImbGxoYXJkO1wiOlwi4qWrXCIsXCImbGx0cmk7XCI6XCLil7pcIixcIiZsbWlkb3Q7XCI6XCLFgFwiLFwiJmxtb3VzdDtcIjpcIuKOsFwiLFwiJmxtb3VzdGFjaGU7XCI6XCLijrBcIixcIiZsbkU7XCI6XCLiiahcIixcIiZsbmFwO1wiOlwi4qqJXCIsXCImbG5hcHByb3g7XCI6XCLiqolcIixcIiZsbmU7XCI6XCLiqodcIixcIiZsbmVxO1wiOlwi4qqHXCIsXCImbG5lcXE7XCI6XCLiiahcIixcIiZsbnNpbTtcIjpcIuKLplwiLFwiJmxvYW5nO1wiOlwi4p+sXCIsXCImbG9hcnI7XCI6XCLih71cIixcIiZsb2JyaztcIjpcIuKfplwiLFwiJmxvbmdsZWZ0YXJyb3c7XCI6XCLin7VcIixcIiZsb25nbGVmdHJpZ2h0YXJyb3c7XCI6XCLin7dcIixcIiZsb25nbWFwc3RvO1wiOlwi4p+8XCIsXCImbG9uZ3JpZ2h0YXJyb3c7XCI6XCLin7ZcIixcIiZsb29wYXJyb3dsZWZ0O1wiOlwi4oarXCIsXCImbG9vcGFycm93cmlnaHQ7XCI6XCLihqxcIixcIiZsb3BhcjtcIjpcIuKmhVwiLFwiJmxvcGY7XCI6XCLwnZWdXCIsXCImbG9wbHVzO1wiOlwi4qitXCIsXCImbG90aW1lcztcIjpcIuKotFwiLFwiJmxvd2FzdDtcIjpcIuKIl1wiLFwiJmxvd2JhcjtcIjpcIl9cIixcIiZsb3o7XCI6XCLil4pcIixcIiZsb3plbmdlO1wiOlwi4peKXCIsXCImbG96ZjtcIjpcIuKnq1wiLFwiJmxwYXI7XCI6XCIoXCIsXCImbHBhcmx0O1wiOlwi4qaTXCIsXCImbHJhcnI7XCI6XCLih4ZcIixcIiZscmNvcm5lcjtcIjpcIuKMn1wiLFwiJmxyaGFyO1wiOlwi4oeLXCIsXCImbHJoYXJkO1wiOlwi4qWtXCIsXCImbHJtO1wiOlwi4oCOXCIsXCImbHJ0cmk7XCI6XCLiir9cIixcIiZsc2FxdW87XCI6XCLigLlcIixcIiZsc2NyO1wiOlwi8J2TgVwiLFwiJmxzaDtcIjpcIuKGsFwiLFwiJmxzaW07XCI6XCLiibJcIixcIiZsc2ltZTtcIjpcIuKqjVwiLFwiJmxzaW1nO1wiOlwi4qqPXCIsXCImbHNxYjtcIjpcIltcIixcIiZsc3F1bztcIjpcIuKAmFwiLFwiJmxzcXVvcjtcIjpcIuKAmlwiLFwiJmxzdHJvaztcIjpcIsWCXCIsXCImbHRcIjpcIjxcIixcIiZsdDtcIjpcIjxcIixcIiZsdGNjO1wiOlwi4qqmXCIsXCImbHRjaXI7XCI6XCLiqblcIixcIiZsdGRvdDtcIjpcIuKLllwiLFwiJmx0aHJlZTtcIjpcIuKLi1wiLFwiJmx0aW1lcztcIjpcIuKLiVwiLFwiJmx0bGFycjtcIjpcIuKltlwiLFwiJmx0cXVlc3Q7XCI6XCLiqbtcIixcIiZsdHJQYXI7XCI6XCLippZcIixcIiZsdHJpO1wiOlwi4peDXCIsXCImbHRyaWU7XCI6XCLiirRcIixcIiZsdHJpZjtcIjpcIuKXglwiLFwiJmx1cmRzaGFyO1wiOlwi4qWKXCIsXCImbHVydWhhcjtcIjpcIuKlplwiLFwiJmx2ZXJ0bmVxcTtcIjpcIuKJqO+4gFwiLFwiJmx2bkU7XCI6XCLiiajvuIBcIixcIiZtRERvdDtcIjpcIuKIulwiLFwiJm1hY3JcIjpcIsKvXCIsXCImbWFjcjtcIjpcIsKvXCIsXCImbWFsZTtcIjpcIuKZglwiLFwiJm1hbHQ7XCI6XCLinKBcIixcIiZtYWx0ZXNlO1wiOlwi4pygXCIsXCImbWFwO1wiOlwi4oamXCIsXCImbWFwc3RvO1wiOlwi4oamXCIsXCImbWFwc3RvZG93bjtcIjpcIuKGp1wiLFwiJm1hcHN0b2xlZnQ7XCI6XCLihqRcIixcIiZtYXBzdG91cDtcIjpcIuKGpVwiLFwiJm1hcmtlcjtcIjpcIuKWrlwiLFwiJm1jb21tYTtcIjpcIuKoqVwiLFwiJm1jeTtcIjpcItC8XCIsXCImbWRhc2g7XCI6XCLigJRcIixcIiZtZWFzdXJlZGFuZ2xlO1wiOlwi4oihXCIsXCImbWZyO1wiOlwi8J2UqlwiLFwiJm1obztcIjpcIuKEp1wiLFwiJm1pY3JvXCI6XCLCtVwiLFwiJm1pY3JvO1wiOlwiwrVcIixcIiZtaWQ7XCI6XCLiiKNcIixcIiZtaWRhc3Q7XCI6XCIqXCIsXCImbWlkY2lyO1wiOlwi4quwXCIsXCImbWlkZG90XCI6XCLCt1wiLFwiJm1pZGRvdDtcIjpcIsK3XCIsXCImbWludXM7XCI6XCLiiJJcIixcIiZtaW51c2I7XCI6XCLiip9cIixcIiZtaW51c2Q7XCI6XCLiiLhcIixcIiZtaW51c2R1O1wiOlwi4qiqXCIsXCImbWxjcDtcIjpcIuKrm1wiLFwiJm1sZHI7XCI6XCLigKZcIixcIiZtbnBsdXM7XCI6XCLiiJNcIixcIiZtb2RlbHM7XCI6XCLiiqdcIixcIiZtb3BmO1wiOlwi8J2VnlwiLFwiJm1wO1wiOlwi4oiTXCIsXCImbXNjcjtcIjpcIvCdk4JcIixcIiZtc3Rwb3M7XCI6XCLiiL5cIixcIiZtdTtcIjpcIs68XCIsXCImbXVsdGltYXA7XCI6XCLiirhcIixcIiZtdW1hcDtcIjpcIuKKuFwiLFwiJm5HZztcIjpcIuKLmcy4XCIsXCImbkd0O1wiOlwi4omr4oOSXCIsXCImbkd0djtcIjpcIuKJq8y4XCIsXCImbkxlZnRhcnJvdztcIjpcIuKHjVwiLFwiJm5MZWZ0cmlnaHRhcnJvdztcIjpcIuKHjlwiLFwiJm5MbDtcIjpcIuKLmMy4XCIsXCImbkx0O1wiOlwi4omq4oOSXCIsXCImbkx0djtcIjpcIuKJqsy4XCIsXCImblJpZ2h0YXJyb3c7XCI6XCLih49cIixcIiZuVkRhc2g7XCI6XCLiiq9cIixcIiZuVmRhc2g7XCI6XCLiiq5cIixcIiZuYWJsYTtcIjpcIuKIh1wiLFwiJm5hY3V0ZTtcIjpcIsWEXCIsXCImbmFuZztcIjpcIuKIoOKDklwiLFwiJm5hcDtcIjpcIuKJiVwiLFwiJm5hcEU7XCI6XCLiqbDMuFwiLFwiJm5hcGlkO1wiOlwi4omLzLhcIixcIiZuYXBvcztcIjpcIsWJXCIsXCImbmFwcHJveDtcIjpcIuKJiVwiLFwiJm5hdHVyO1wiOlwi4pmuXCIsXCImbmF0dXJhbDtcIjpcIuKZrlwiLFwiJm5hdHVyYWxzO1wiOlwi4oSVXCIsXCImbmJzcFwiOlwiwqBcIixcIiZuYnNwO1wiOlwiwqBcIixcIiZuYnVtcDtcIjpcIuKJjsy4XCIsXCImbmJ1bXBlO1wiOlwi4omPzLhcIixcIiZuY2FwO1wiOlwi4qmDXCIsXCImbmNhcm9uO1wiOlwixYhcIixcIiZuY2VkaWw7XCI6XCLFhlwiLFwiJm5jb25nO1wiOlwi4omHXCIsXCImbmNvbmdkb3Q7XCI6XCLiqa3MuFwiLFwiJm5jdXA7XCI6XCLiqYJcIixcIiZuY3k7XCI6XCLQvVwiLFwiJm5kYXNoO1wiOlwi4oCTXCIsXCImbmU7XCI6XCLiiaBcIixcIiZuZUFycjtcIjpcIuKHl1wiLFwiJm5lYXJoaztcIjpcIuKkpFwiLFwiJm5lYXJyO1wiOlwi4oaXXCIsXCImbmVhcnJvdztcIjpcIuKGl1wiLFwiJm5lZG90O1wiOlwi4omQzLhcIixcIiZuZXF1aXY7XCI6XCLiiaJcIixcIiZuZXNlYXI7XCI6XCLipKhcIixcIiZuZXNpbTtcIjpcIuKJgsy4XCIsXCImbmV4aXN0O1wiOlwi4oiEXCIsXCImbmV4aXN0cztcIjpcIuKIhFwiLFwiJm5mcjtcIjpcIvCdlKtcIixcIiZuZ0U7XCI6XCLiiafMuFwiLFwiJm5nZTtcIjpcIuKJsVwiLFwiJm5nZXE7XCI6XCLiibFcIixcIiZuZ2VxcTtcIjpcIuKJp8y4XCIsXCImbmdlcXNsYW50O1wiOlwi4qm+zLhcIixcIiZuZ2VzO1wiOlwi4qm+zLhcIixcIiZuZ3NpbTtcIjpcIuKJtVwiLFwiJm5ndDtcIjpcIuKJr1wiLFwiJm5ndHI7XCI6XCLiia9cIixcIiZuaEFycjtcIjpcIuKHjlwiLFwiJm5oYXJyO1wiOlwi4oauXCIsXCImbmhwYXI7XCI6XCLiq7JcIixcIiZuaTtcIjpcIuKIi1wiLFwiJm5pcztcIjpcIuKLvFwiLFwiJm5pc2Q7XCI6XCLii7pcIixcIiZuaXY7XCI6XCLiiItcIixcIiZuamN5O1wiOlwi0ZpcIixcIiZubEFycjtcIjpcIuKHjVwiLFwiJm5sRTtcIjpcIuKJpsy4XCIsXCImbmxhcnI7XCI6XCLihppcIixcIiZubGRyO1wiOlwi4oClXCIsXCImbmxlO1wiOlwi4omwXCIsXCImbmxlZnRhcnJvdztcIjpcIuKGmlwiLFwiJm5sZWZ0cmlnaHRhcnJvdztcIjpcIuKGrlwiLFwiJm5sZXE7XCI6XCLiibBcIixcIiZubGVxcTtcIjpcIuKJpsy4XCIsXCImbmxlcXNsYW50O1wiOlwi4qm9zLhcIixcIiZubGVzO1wiOlwi4qm9zLhcIixcIiZubGVzcztcIjpcIuKJrlwiLFwiJm5sc2ltO1wiOlwi4om0XCIsXCImbmx0O1wiOlwi4omuXCIsXCImbmx0cmk7XCI6XCLii6pcIixcIiZubHRyaWU7XCI6XCLii6xcIixcIiZubWlkO1wiOlwi4oikXCIsXCImbm9wZjtcIjpcIvCdlZ9cIixcIiZub3RcIjpcIsKsXCIsXCImbm90O1wiOlwiwqxcIixcIiZub3RpbjtcIjpcIuKIiVwiLFwiJm5vdGluRTtcIjpcIuKLucy4XCIsXCImbm90aW5kb3Q7XCI6XCLii7XMuFwiLFwiJm5vdGludmE7XCI6XCLiiIlcIixcIiZub3RpbnZiO1wiOlwi4ou3XCIsXCImbm90aW52YztcIjpcIuKLtlwiLFwiJm5vdG5pO1wiOlwi4oiMXCIsXCImbm90bml2YTtcIjpcIuKIjFwiLFwiJm5vdG5pdmI7XCI6XCLii75cIixcIiZub3RuaXZjO1wiOlwi4ou9XCIsXCImbnBhcjtcIjpcIuKIplwiLFwiJm5wYXJhbGxlbDtcIjpcIuKIplwiLFwiJm5wYXJzbDtcIjpcIuKrveKDpVwiLFwiJm5wYXJ0O1wiOlwi4oiCzLhcIixcIiZucG9saW50O1wiOlwi4qiUXCIsXCImbnByO1wiOlwi4oqAXCIsXCImbnByY3VlO1wiOlwi4ougXCIsXCImbnByZTtcIjpcIuKqr8y4XCIsXCImbnByZWM7XCI6XCLiioBcIixcIiZucHJlY2VxO1wiOlwi4qqvzLhcIixcIiZuckFycjtcIjpcIuKHj1wiLFwiJm5yYXJyO1wiOlwi4oabXCIsXCImbnJhcnJjO1wiOlwi4qSzzLhcIixcIiZucmFycnc7XCI6XCLihp3MuFwiLFwiJm5yaWdodGFycm93O1wiOlwi4oabXCIsXCImbnJ0cmk7XCI6XCLii6tcIixcIiZucnRyaWU7XCI6XCLii61cIixcIiZuc2M7XCI6XCLiioFcIixcIiZuc2NjdWU7XCI6XCLii6FcIixcIiZuc2NlO1wiOlwi4qqwzLhcIixcIiZuc2NyO1wiOlwi8J2Tg1wiLFwiJm5zaG9ydG1pZDtcIjpcIuKIpFwiLFwiJm5zaG9ydHBhcmFsbGVsO1wiOlwi4oimXCIsXCImbnNpbTtcIjpcIuKJgVwiLFwiJm5zaW1lO1wiOlwi4omEXCIsXCImbnNpbWVxO1wiOlwi4omEXCIsXCImbnNtaWQ7XCI6XCLiiKRcIixcIiZuc3BhcjtcIjpcIuKIplwiLFwiJm5zcXN1YmU7XCI6XCLii6JcIixcIiZuc3FzdXBlO1wiOlwi4oujXCIsXCImbnN1YjtcIjpcIuKKhFwiLFwiJm5zdWJFO1wiOlwi4quFzLhcIixcIiZuc3ViZTtcIjpcIuKKiFwiLFwiJm5zdWJzZXQ7XCI6XCLiioLig5JcIixcIiZuc3Vic2V0ZXE7XCI6XCLiiohcIixcIiZuc3Vic2V0ZXFxO1wiOlwi4quFzLhcIixcIiZuc3VjYztcIjpcIuKKgVwiLFwiJm5zdWNjZXE7XCI6XCLiqrDMuFwiLFwiJm5zdXA7XCI6XCLiioVcIixcIiZuc3VwRTtcIjpcIuKrhsy4XCIsXCImbnN1cGU7XCI6XCLiiolcIixcIiZuc3Vwc2V0O1wiOlwi4oqD4oOSXCIsXCImbnN1cHNldGVxO1wiOlwi4oqJXCIsXCImbnN1cHNldGVxcTtcIjpcIuKrhsy4XCIsXCImbnRnbDtcIjpcIuKJuVwiLFwiJm50aWxkZVwiOlwiw7FcIixcIiZudGlsZGU7XCI6XCLDsVwiLFwiJm50bGc7XCI6XCLiibhcIixcIiZudHJpYW5nbGVsZWZ0O1wiOlwi4ouqXCIsXCImbnRyaWFuZ2xlbGVmdGVxO1wiOlwi4ousXCIsXCImbnRyaWFuZ2xlcmlnaHQ7XCI6XCLii6tcIixcIiZudHJpYW5nbGVyaWdodGVxO1wiOlwi4outXCIsXCImbnU7XCI6XCLOvVwiLFwiJm51bTtcIjpcIiNcIixcIiZudW1lcm87XCI6XCLihJZcIixcIiZudW1zcDtcIjpcIuKAh1wiLFwiJm52RGFzaDtcIjpcIuKKrVwiLFwiJm52SGFycjtcIjpcIuKkhFwiLFwiJm52YXA7XCI6XCLiiY3ig5JcIixcIiZudmRhc2g7XCI6XCLiiqxcIixcIiZudmdlO1wiOlwi4oml4oOSXCIsXCImbnZndDtcIjpcIj7ig5JcIixcIiZudmluZmluO1wiOlwi4qeeXCIsXCImbnZsQXJyO1wiOlwi4qSCXCIsXCImbnZsZTtcIjpcIuKJpOKDklwiLFwiJm52bHQ7XCI6XCI84oOSXCIsXCImbnZsdHJpZTtcIjpcIuKKtOKDklwiLFwiJm52ckFycjtcIjpcIuKkg1wiLFwiJm52cnRyaWU7XCI6XCLiirXig5JcIixcIiZudnNpbTtcIjpcIuKIvOKDklwiLFwiJm53QXJyO1wiOlwi4oeWXCIsXCImbndhcmhrO1wiOlwi4qSjXCIsXCImbndhcnI7XCI6XCLihpZcIixcIiZud2Fycm93O1wiOlwi4oaWXCIsXCImbnduZWFyO1wiOlwi4qSnXCIsXCImb1M7XCI6XCLik4hcIixcIiZvYWN1dGVcIjpcIsOzXCIsXCImb2FjdXRlO1wiOlwiw7NcIixcIiZvYXN0O1wiOlwi4oqbXCIsXCImb2NpcjtcIjpcIuKKmlwiLFwiJm9jaXJjXCI6XCLDtFwiLFwiJm9jaXJjO1wiOlwiw7RcIixcIiZvY3k7XCI6XCLQvlwiLFwiJm9kYXNoO1wiOlwi4oqdXCIsXCImb2RibGFjO1wiOlwixZFcIixcIiZvZGl2O1wiOlwi4qi4XCIsXCImb2RvdDtcIjpcIuKKmVwiLFwiJm9kc29sZDtcIjpcIuKmvFwiLFwiJm9lbGlnO1wiOlwixZNcIixcIiZvZmNpcjtcIjpcIuKmv1wiLFwiJm9mcjtcIjpcIvCdlKxcIixcIiZvZ29uO1wiOlwiy5tcIixcIiZvZ3JhdmVcIjpcIsOyXCIsXCImb2dyYXZlO1wiOlwiw7JcIixcIiZvZ3Q7XCI6XCLip4FcIixcIiZvaGJhcjtcIjpcIuKmtVwiLFwiJm9obTtcIjpcIs6pXCIsXCImb2ludDtcIjpcIuKIrlwiLFwiJm9sYXJyO1wiOlwi4oa6XCIsXCImb2xjaXI7XCI6XCLipr5cIixcIiZvbGNyb3NzO1wiOlwi4qa7XCIsXCImb2xpbmU7XCI6XCLigL5cIixcIiZvbHQ7XCI6XCLip4BcIixcIiZvbWFjcjtcIjpcIsWNXCIsXCImb21lZ2E7XCI6XCLPiVwiLFwiJm9taWNyb247XCI6XCLOv1wiLFwiJm9taWQ7XCI6XCLiprZcIixcIiZvbWludXM7XCI6XCLiipZcIixcIiZvb3BmO1wiOlwi8J2VoFwiLFwiJm9wYXI7XCI6XCLiprdcIixcIiZvcGVycDtcIjpcIuKmuVwiLFwiJm9wbHVzO1wiOlwi4oqVXCIsXCImb3I7XCI6XCLiiKhcIixcIiZvcmFycjtcIjpcIuKGu1wiLFwiJm9yZDtcIjpcIuKpnVwiLFwiJm9yZGVyO1wiOlwi4oS0XCIsXCImb3JkZXJvZjtcIjpcIuKEtFwiLFwiJm9yZGZcIjpcIsKqXCIsXCImb3JkZjtcIjpcIsKqXCIsXCImb3JkbVwiOlwiwrpcIixcIiZvcmRtO1wiOlwiwrpcIixcIiZvcmlnb2Y7XCI6XCLiirZcIixcIiZvcm9yO1wiOlwi4qmWXCIsXCImb3JzbG9wZTtcIjpcIuKpl1wiLFwiJm9ydjtcIjpcIuKpm1wiLFwiJm9zY3I7XCI6XCLihLRcIixcIiZvc2xhc2hcIjpcIsO4XCIsXCImb3NsYXNoO1wiOlwiw7hcIixcIiZvc29sO1wiOlwi4oqYXCIsXCImb3RpbGRlXCI6XCLDtVwiLFwiJm90aWxkZTtcIjpcIsO1XCIsXCImb3RpbWVzO1wiOlwi4oqXXCIsXCImb3RpbWVzYXM7XCI6XCLiqLZcIixcIiZvdW1sXCI6XCLDtlwiLFwiJm91bWw7XCI6XCLDtlwiLFwiJm92YmFyO1wiOlwi4oy9XCIsXCImcGFyO1wiOlwi4oilXCIsXCImcGFyYVwiOlwiwrZcIixcIiZwYXJhO1wiOlwiwrZcIixcIiZwYXJhbGxlbDtcIjpcIuKIpVwiLFwiJnBhcnNpbTtcIjpcIuKrs1wiLFwiJnBhcnNsO1wiOlwi4qu9XCIsXCImcGFydDtcIjpcIuKIglwiLFwiJnBjeTtcIjpcItC/XCIsXCImcGVyY250O1wiOlwiJVwiLFwiJnBlcmlvZDtcIjpcIi5cIixcIiZwZXJtaWw7XCI6XCLigLBcIixcIiZwZXJwO1wiOlwi4oqlXCIsXCImcGVydGVuaztcIjpcIuKAsVwiLFwiJnBmcjtcIjpcIvCdlK1cIixcIiZwaGk7XCI6XCLPhlwiLFwiJnBoaXY7XCI6XCLPlVwiLFwiJnBobW1hdDtcIjpcIuKEs1wiLFwiJnBob25lO1wiOlwi4piOXCIsXCImcGk7XCI6XCLPgFwiLFwiJnBpdGNoZm9yaztcIjpcIuKLlFwiLFwiJnBpdjtcIjpcIs+WXCIsXCImcGxhbmNrO1wiOlwi4oSPXCIsXCImcGxhbmNraDtcIjpcIuKEjlwiLFwiJnBsYW5rdjtcIjpcIuKEj1wiLFwiJnBsdXM7XCI6XCIrXCIsXCImcGx1c2FjaXI7XCI6XCLiqKNcIixcIiZwbHVzYjtcIjpcIuKKnlwiLFwiJnBsdXNjaXI7XCI6XCLiqKJcIixcIiZwbHVzZG87XCI6XCLiiJRcIixcIiZwbHVzZHU7XCI6XCLiqKVcIixcIiZwbHVzZTtcIjpcIuKpslwiLFwiJnBsdXNtblwiOlwiwrFcIixcIiZwbHVzbW47XCI6XCLCsVwiLFwiJnBsdXNzaW07XCI6XCLiqKZcIixcIiZwbHVzdHdvO1wiOlwi4qinXCIsXCImcG07XCI6XCLCsVwiLFwiJnBvaW50aW50O1wiOlwi4qiVXCIsXCImcG9wZjtcIjpcIvCdlaFcIixcIiZwb3VuZFwiOlwiwqNcIixcIiZwb3VuZDtcIjpcIsKjXCIsXCImcHI7XCI6XCLiibpcIixcIiZwckU7XCI6XCLiqrNcIixcIiZwcmFwO1wiOlwi4qq3XCIsXCImcHJjdWU7XCI6XCLiibxcIixcIiZwcmU7XCI6XCLiqq9cIixcIiZwcmVjO1wiOlwi4om6XCIsXCImcHJlY2FwcHJveDtcIjpcIuKqt1wiLFwiJnByZWNjdXJseWVxO1wiOlwi4om8XCIsXCImcHJlY2VxO1wiOlwi4qqvXCIsXCImcHJlY25hcHByb3g7XCI6XCLiqrlcIixcIiZwcmVjbmVxcTtcIjpcIuKqtVwiLFwiJnByZWNuc2ltO1wiOlwi4ouoXCIsXCImcHJlY3NpbTtcIjpcIuKJvlwiLFwiJnByaW1lO1wiOlwi4oCyXCIsXCImcHJpbWVzO1wiOlwi4oSZXCIsXCImcHJuRTtcIjpcIuKqtVwiLFwiJnBybmFwO1wiOlwi4qq5XCIsXCImcHJuc2ltO1wiOlwi4ouoXCIsXCImcHJvZDtcIjpcIuKIj1wiLFwiJnByb2ZhbGFyO1wiOlwi4oyuXCIsXCImcHJvZmxpbmU7XCI6XCLijJJcIixcIiZwcm9mc3VyZjtcIjpcIuKMk1wiLFwiJnByb3A7XCI6XCLiiJ1cIixcIiZwcm9wdG87XCI6XCLiiJ1cIixcIiZwcnNpbTtcIjpcIuKJvlwiLFwiJnBydXJlbDtcIjpcIuKKsFwiLFwiJnBzY3I7XCI6XCLwnZOFXCIsXCImcHNpO1wiOlwiz4hcIixcIiZwdW5jc3A7XCI6XCLigIhcIixcIiZxZnI7XCI6XCLwnZSuXCIsXCImcWludDtcIjpcIuKojFwiLFwiJnFvcGY7XCI6XCLwnZWiXCIsXCImcXByaW1lO1wiOlwi4oGXXCIsXCImcXNjcjtcIjpcIvCdk4ZcIixcIiZxdWF0ZXJuaW9ucztcIjpcIuKEjVwiLFwiJnF1YXRpbnQ7XCI6XCLiqJZcIixcIiZxdWVzdDtcIjpcIj9cIixcIiZxdWVzdGVxO1wiOlwi4omfXCIsXCImcXVvdFwiOidcIicsXCImcXVvdDtcIjonXCInLFwiJnJBYXJyO1wiOlwi4oebXCIsXCImckFycjtcIjpcIuKHklwiLFwiJnJBdGFpbDtcIjpcIuKknFwiLFwiJnJCYXJyO1wiOlwi4qSPXCIsXCImckhhcjtcIjpcIuKlpFwiLFwiJnJhY2U7XCI6XCLiiL3MsVwiLFwiJnJhY3V0ZTtcIjpcIsWVXCIsXCImcmFkaWM7XCI6XCLiiJpcIixcIiZyYWVtcHR5djtcIjpcIuKms1wiLFwiJnJhbmc7XCI6XCLin6lcIixcIiZyYW5nZDtcIjpcIuKmklwiLFwiJnJhbmdlO1wiOlwi4qalXCIsXCImcmFuZ2xlO1wiOlwi4p+pXCIsXCImcmFxdW9cIjpcIsK7XCIsXCImcmFxdW87XCI6XCLCu1wiLFwiJnJhcnI7XCI6XCLihpJcIixcIiZyYXJyYXA7XCI6XCLipbVcIixcIiZyYXJyYjtcIjpcIuKHpVwiLFwiJnJhcnJiZnM7XCI6XCLipKBcIixcIiZyYXJyYztcIjpcIuKks1wiLFwiJnJhcnJmcztcIjpcIuKknlwiLFwiJnJhcnJoaztcIjpcIuKGqlwiLFwiJnJhcnJscDtcIjpcIuKGrFwiLFwiJnJhcnJwbDtcIjpcIuKlhVwiLFwiJnJhcnJzaW07XCI6XCLipbRcIixcIiZyYXJydGw7XCI6XCLihqNcIixcIiZyYXJydztcIjpcIuKGnVwiLFwiJnJhdGFpbDtcIjpcIuKkmlwiLFwiJnJhdGlvO1wiOlwi4oi2XCIsXCImcmF0aW9uYWxzO1wiOlwi4oSaXCIsXCImcmJhcnI7XCI6XCLipI1cIixcIiZyYmJyaztcIjpcIuKds1wiLFwiJnJicmFjZTtcIjpcIn1cIixcIiZyYnJhY2s7XCI6XCJdXCIsXCImcmJya2U7XCI6XCLipoxcIixcIiZyYnJrc2xkO1wiOlwi4qaOXCIsXCImcmJya3NsdTtcIjpcIuKmkFwiLFwiJnJjYXJvbjtcIjpcIsWZXCIsXCImcmNlZGlsO1wiOlwixZdcIixcIiZyY2VpbDtcIjpcIuKMiVwiLFwiJnJjdWI7XCI6XCJ9XCIsXCImcmN5O1wiOlwi0YBcIixcIiZyZGNhO1wiOlwi4qS3XCIsXCImcmRsZGhhcjtcIjpcIuKlqVwiLFwiJnJkcXVvO1wiOlwi4oCdXCIsXCImcmRxdW9yO1wiOlwi4oCdXCIsXCImcmRzaDtcIjpcIuKGs1wiLFwiJnJlYWw7XCI6XCLihJxcIixcIiZyZWFsaW5lO1wiOlwi4oSbXCIsXCImcmVhbHBhcnQ7XCI6XCLihJxcIixcIiZyZWFscztcIjpcIuKEnVwiLFwiJnJlY3Q7XCI6XCLilq1cIixcIiZyZWdcIjpcIsKuXCIsXCImcmVnO1wiOlwiwq5cIixcIiZyZmlzaHQ7XCI6XCLipb1cIixcIiZyZmxvb3I7XCI6XCLijItcIixcIiZyZnI7XCI6XCLwnZSvXCIsXCImcmhhcmQ7XCI6XCLih4FcIixcIiZyaGFydTtcIjpcIuKHgFwiLFwiJnJoYXJ1bDtcIjpcIuKlrFwiLFwiJnJobztcIjpcIs+BXCIsXCImcmhvdjtcIjpcIs+xXCIsXCImcmlnaHRhcnJvdztcIjpcIuKGklwiLFwiJnJpZ2h0YXJyb3d0YWlsO1wiOlwi4oajXCIsXCImcmlnaHRoYXJwb29uZG93bjtcIjpcIuKHgVwiLFwiJnJpZ2h0aGFycG9vbnVwO1wiOlwi4oeAXCIsXCImcmlnaHRsZWZ0YXJyb3dzO1wiOlwi4oeEXCIsXCImcmlnaHRsZWZ0aGFycG9vbnM7XCI6XCLih4xcIixcIiZyaWdodHJpZ2h0YXJyb3dzO1wiOlwi4oeJXCIsXCImcmlnaHRzcXVpZ2Fycm93O1wiOlwi4oadXCIsXCImcmlnaHR0aHJlZXRpbWVzO1wiOlwi4ouMXCIsXCImcmluZztcIjpcIsuaXCIsXCImcmlzaW5nZG90c2VxO1wiOlwi4omTXCIsXCImcmxhcnI7XCI6XCLih4RcIixcIiZybGhhcjtcIjpcIuKHjFwiLFwiJnJsbTtcIjpcIuKAj1wiLFwiJnJtb3VzdDtcIjpcIuKOsVwiLFwiJnJtb3VzdGFjaGU7XCI6XCLijrFcIixcIiZybm1pZDtcIjpcIuKrrlwiLFwiJnJvYW5nO1wiOlwi4p+tXCIsXCImcm9hcnI7XCI6XCLih75cIixcIiZyb2JyaztcIjpcIuKfp1wiLFwiJnJvcGFyO1wiOlwi4qaGXCIsXCImcm9wZjtcIjpcIvCdlaNcIixcIiZyb3BsdXM7XCI6XCLiqK5cIixcIiZyb3RpbWVzO1wiOlwi4qi1XCIsXCImcnBhcjtcIjpcIilcIixcIiZycGFyZ3Q7XCI6XCLippRcIixcIiZycHBvbGludDtcIjpcIuKoklwiLFwiJnJyYXJyO1wiOlwi4oeJXCIsXCImcnNhcXVvO1wiOlwi4oC6XCIsXCImcnNjcjtcIjpcIvCdk4dcIixcIiZyc2g7XCI6XCLihrFcIixcIiZyc3FiO1wiOlwiXVwiLFwiJnJzcXVvO1wiOlwi4oCZXCIsXCImcnNxdW9yO1wiOlwi4oCZXCIsXCImcnRocmVlO1wiOlwi4ouMXCIsXCImcnRpbWVzO1wiOlwi4ouKXCIsXCImcnRyaTtcIjpcIuKWuVwiLFwiJnJ0cmllO1wiOlwi4oq1XCIsXCImcnRyaWY7XCI6XCLilrhcIixcIiZydHJpbHRyaTtcIjpcIuKnjlwiLFwiJnJ1bHVoYXI7XCI6XCLipahcIixcIiZyeDtcIjpcIuKEnlwiLFwiJnNhY3V0ZTtcIjpcIsWbXCIsXCImc2JxdW87XCI6XCLigJpcIixcIiZzYztcIjpcIuKJu1wiLFwiJnNjRTtcIjpcIuKqtFwiLFwiJnNjYXA7XCI6XCLiqrhcIixcIiZzY2Fyb247XCI6XCLFoVwiLFwiJnNjY3VlO1wiOlwi4om9XCIsXCImc2NlO1wiOlwi4qqwXCIsXCImc2NlZGlsO1wiOlwixZ9cIixcIiZzY2lyYztcIjpcIsWdXCIsXCImc2NuRTtcIjpcIuKqtlwiLFwiJnNjbmFwO1wiOlwi4qq6XCIsXCImc2Nuc2ltO1wiOlwi4oupXCIsXCImc2Nwb2xpbnQ7XCI6XCLiqJNcIixcIiZzY3NpbTtcIjpcIuKJv1wiLFwiJnNjeTtcIjpcItGBXCIsXCImc2RvdDtcIjpcIuKLhVwiLFwiJnNkb3RiO1wiOlwi4oqhXCIsXCImc2RvdGU7XCI6XCLiqaZcIixcIiZzZUFycjtcIjpcIuKHmFwiLFwiJnNlYXJoaztcIjpcIuKkpVwiLFwiJnNlYXJyO1wiOlwi4oaYXCIsXCImc2VhcnJvdztcIjpcIuKGmFwiLFwiJnNlY3RcIjpcIsKnXCIsXCImc2VjdDtcIjpcIsKnXCIsXCImc2VtaTtcIjpcIjtcIixcIiZzZXN3YXI7XCI6XCLipKlcIixcIiZzZXRtaW51cztcIjpcIuKIllwiLFwiJnNldG1uO1wiOlwi4oiWXCIsXCImc2V4dDtcIjpcIuKctlwiLFwiJnNmcjtcIjpcIvCdlLBcIixcIiZzZnJvd247XCI6XCLijKJcIixcIiZzaGFycDtcIjpcIuKZr1wiLFwiJnNoY2hjeTtcIjpcItGJXCIsXCImc2hjeTtcIjpcItGIXCIsXCImc2hvcnRtaWQ7XCI6XCLiiKNcIixcIiZzaG9ydHBhcmFsbGVsO1wiOlwi4oilXCIsXCImc2h5XCI6XCLCrVwiLFwiJnNoeTtcIjpcIsKtXCIsXCImc2lnbWE7XCI6XCLPg1wiLFwiJnNpZ21hZjtcIjpcIs+CXCIsXCImc2lnbWF2O1wiOlwiz4JcIixcIiZzaW07XCI6XCLiiLxcIixcIiZzaW1kb3Q7XCI6XCLiqapcIixcIiZzaW1lO1wiOlwi4omDXCIsXCImc2ltZXE7XCI6XCLiiYNcIixcIiZzaW1nO1wiOlwi4qqeXCIsXCImc2ltZ0U7XCI6XCLiqqBcIixcIiZzaW1sO1wiOlwi4qqdXCIsXCImc2ltbEU7XCI6XCLiqp9cIixcIiZzaW1uZTtcIjpcIuKJhlwiLFwiJnNpbXBsdXM7XCI6XCLiqKRcIixcIiZzaW1yYXJyO1wiOlwi4qWyXCIsXCImc2xhcnI7XCI6XCLihpBcIixcIiZzbWFsbHNldG1pbnVzO1wiOlwi4oiWXCIsXCImc21hc2hwO1wiOlwi4qizXCIsXCImc21lcGFyc2w7XCI6XCLip6RcIixcIiZzbWlkO1wiOlwi4oijXCIsXCImc21pbGU7XCI6XCLijKNcIixcIiZzbXQ7XCI6XCLiqqpcIixcIiZzbXRlO1wiOlwi4qqsXCIsXCImc210ZXM7XCI6XCLiqqzvuIBcIixcIiZzb2Z0Y3k7XCI6XCLRjFwiLFwiJnNvbDtcIjpcIi9cIixcIiZzb2xiO1wiOlwi4qeEXCIsXCImc29sYmFyO1wiOlwi4oy/XCIsXCImc29wZjtcIjpcIvCdlaRcIixcIiZzcGFkZXM7XCI6XCLimaBcIixcIiZzcGFkZXN1aXQ7XCI6XCLimaBcIixcIiZzcGFyO1wiOlwi4oilXCIsXCImc3FjYXA7XCI6XCLiipNcIixcIiZzcWNhcHM7XCI6XCLiipPvuIBcIixcIiZzcWN1cDtcIjpcIuKKlFwiLFwiJnNxY3VwcztcIjpcIuKKlO+4gFwiLFwiJnNxc3ViO1wiOlwi4oqPXCIsXCImc3FzdWJlO1wiOlwi4oqRXCIsXCImc3FzdWJzZXQ7XCI6XCLiio9cIixcIiZzcXN1YnNldGVxO1wiOlwi4oqRXCIsXCImc3FzdXA7XCI6XCLiipBcIixcIiZzcXN1cGU7XCI6XCLiipJcIixcIiZzcXN1cHNldDtcIjpcIuKKkFwiLFwiJnNxc3Vwc2V0ZXE7XCI6XCLiipJcIixcIiZzcXU7XCI6XCLilqFcIixcIiZzcXVhcmU7XCI6XCLilqFcIixcIiZzcXVhcmY7XCI6XCLilqpcIixcIiZzcXVmO1wiOlwi4paqXCIsXCImc3JhcnI7XCI6XCLihpJcIixcIiZzc2NyO1wiOlwi8J2TiFwiLFwiJnNzZXRtbjtcIjpcIuKIllwiLFwiJnNzbWlsZTtcIjpcIuKMo1wiLFwiJnNzdGFyZjtcIjpcIuKLhlwiLFwiJnN0YXI7XCI6XCLimIZcIixcIiZzdGFyZjtcIjpcIuKYhVwiLFwiJnN0cmFpZ2h0ZXBzaWxvbjtcIjpcIs+1XCIsXCImc3RyYWlnaHRwaGk7XCI6XCLPlVwiLFwiJnN0cm5zO1wiOlwiwq9cIixcIiZzdWI7XCI6XCLiioJcIixcIiZzdWJFO1wiOlwi4quFXCIsXCImc3ViZG90O1wiOlwi4qq9XCIsXCImc3ViZTtcIjpcIuKKhlwiLFwiJnN1YmVkb3Q7XCI6XCLiq4NcIixcIiZzdWJtdWx0O1wiOlwi4quBXCIsXCImc3VibkU7XCI6XCLiq4tcIixcIiZzdWJuZTtcIjpcIuKKilwiLFwiJnN1YnBsdXM7XCI6XCLiqr9cIixcIiZzdWJyYXJyO1wiOlwi4qW5XCIsXCImc3Vic2V0O1wiOlwi4oqCXCIsXCImc3Vic2V0ZXE7XCI6XCLiioZcIixcIiZzdWJzZXRlcXE7XCI6XCLiq4VcIixcIiZzdWJzZXRuZXE7XCI6XCLiiopcIixcIiZzdWJzZXRuZXFxO1wiOlwi4quLXCIsXCImc3Vic2ltO1wiOlwi4quHXCIsXCImc3Vic3ViO1wiOlwi4quVXCIsXCImc3Vic3VwO1wiOlwi4quTXCIsXCImc3VjYztcIjpcIuKJu1wiLFwiJnN1Y2NhcHByb3g7XCI6XCLiqrhcIixcIiZzdWNjY3VybHllcTtcIjpcIuKJvVwiLFwiJnN1Y2NlcTtcIjpcIuKqsFwiLFwiJnN1Y2NuYXBwcm94O1wiOlwi4qq6XCIsXCImc3VjY25lcXE7XCI6XCLiqrZcIixcIiZzdWNjbnNpbTtcIjpcIuKLqVwiLFwiJnN1Y2NzaW07XCI6XCLiib9cIixcIiZzdW07XCI6XCLiiJFcIixcIiZzdW5nO1wiOlwi4pmqXCIsXCImc3VwMVwiOlwiwrlcIixcIiZzdXAxO1wiOlwiwrlcIixcIiZzdXAyXCI6XCLCslwiLFwiJnN1cDI7XCI6XCLCslwiLFwiJnN1cDNcIjpcIsKzXCIsXCImc3VwMztcIjpcIsKzXCIsXCImc3VwO1wiOlwi4oqDXCIsXCImc3VwRTtcIjpcIuKrhlwiLFwiJnN1cGRvdDtcIjpcIuKqvlwiLFwiJnN1cGRzdWI7XCI6XCLiq5hcIixcIiZzdXBlO1wiOlwi4oqHXCIsXCImc3VwZWRvdDtcIjpcIuKrhFwiLFwiJnN1cGhzb2w7XCI6XCLin4lcIixcIiZzdXBoc3ViO1wiOlwi4quXXCIsXCImc3VwbGFycjtcIjpcIuKlu1wiLFwiJnN1cG11bHQ7XCI6XCLiq4JcIixcIiZzdXBuRTtcIjpcIuKrjFwiLFwiJnN1cG5lO1wiOlwi4oqLXCIsXCImc3VwcGx1cztcIjpcIuKrgFwiLFwiJnN1cHNldDtcIjpcIuKKg1wiLFwiJnN1cHNldGVxO1wiOlwi4oqHXCIsXCImc3Vwc2V0ZXFxO1wiOlwi4quGXCIsXCImc3Vwc2V0bmVxO1wiOlwi4oqLXCIsXCImc3Vwc2V0bmVxcTtcIjpcIuKrjFwiLFwiJnN1cHNpbTtcIjpcIuKriFwiLFwiJnN1cHN1YjtcIjpcIuKrlFwiLFwiJnN1cHN1cDtcIjpcIuKrllwiLFwiJnN3QXJyO1wiOlwi4oeZXCIsXCImc3dhcmhrO1wiOlwi4qSmXCIsXCImc3dhcnI7XCI6XCLihplcIixcIiZzd2Fycm93O1wiOlwi4oaZXCIsXCImc3dud2FyO1wiOlwi4qSqXCIsXCImc3psaWdcIjpcIsOfXCIsXCImc3psaWc7XCI6XCLDn1wiLFwiJnRhcmdldDtcIjpcIuKMllwiLFwiJnRhdTtcIjpcIs+EXCIsXCImdGJyaztcIjpcIuKOtFwiLFwiJnRjYXJvbjtcIjpcIsWlXCIsXCImdGNlZGlsO1wiOlwixaNcIixcIiZ0Y3k7XCI6XCLRglwiLFwiJnRkb3Q7XCI6XCLig5tcIixcIiZ0ZWxyZWM7XCI6XCLijJVcIixcIiZ0ZnI7XCI6XCLwnZSxXCIsXCImdGhlcmU0O1wiOlwi4oi0XCIsXCImdGhlcmVmb3JlO1wiOlwi4oi0XCIsXCImdGhldGE7XCI6XCLOuFwiLFwiJnRoZXRhc3ltO1wiOlwiz5FcIixcIiZ0aGV0YXY7XCI6XCLPkVwiLFwiJnRoaWNrYXBwcm94O1wiOlwi4omIXCIsXCImdGhpY2tzaW07XCI6XCLiiLxcIixcIiZ0aGluc3A7XCI6XCLigIlcIixcIiZ0aGthcDtcIjpcIuKJiFwiLFwiJnRoa3NpbTtcIjpcIuKIvFwiLFwiJnRob3JuXCI6XCLDvlwiLFwiJnRob3JuO1wiOlwiw75cIixcIiZ0aWxkZTtcIjpcIsucXCIsXCImdGltZXNcIjpcIsOXXCIsXCImdGltZXM7XCI6XCLDl1wiLFwiJnRpbWVzYjtcIjpcIuKKoFwiLFwiJnRpbWVzYmFyO1wiOlwi4qixXCIsXCImdGltZXNkO1wiOlwi4qiwXCIsXCImdGludDtcIjpcIuKIrVwiLFwiJnRvZWE7XCI6XCLipKhcIixcIiZ0b3A7XCI6XCLiiqRcIixcIiZ0b3Bib3Q7XCI6XCLijLZcIixcIiZ0b3BjaXI7XCI6XCLiq7FcIixcIiZ0b3BmO1wiOlwi8J2VpVwiLFwiJnRvcGZvcms7XCI6XCLiq5pcIixcIiZ0b3NhO1wiOlwi4qSpXCIsXCImdHByaW1lO1wiOlwi4oC0XCIsXCImdHJhZGU7XCI6XCLihKJcIixcIiZ0cmlhbmdsZTtcIjpcIuKWtVwiLFwiJnRyaWFuZ2xlZG93bjtcIjpcIuKWv1wiLFwiJnRyaWFuZ2xlbGVmdDtcIjpcIuKXg1wiLFwiJnRyaWFuZ2xlbGVmdGVxO1wiOlwi4oq0XCIsXCImdHJpYW5nbGVxO1wiOlwi4omcXCIsXCImdHJpYW5nbGVyaWdodDtcIjpcIuKWuVwiLFwiJnRyaWFuZ2xlcmlnaHRlcTtcIjpcIuKKtVwiLFwiJnRyaWRvdDtcIjpcIuKXrFwiLFwiJnRyaWU7XCI6XCLiiZxcIixcIiZ0cmltaW51cztcIjpcIuKoulwiLFwiJnRyaXBsdXM7XCI6XCLiqLlcIixcIiZ0cmlzYjtcIjpcIuKnjVwiLFwiJnRyaXRpbWU7XCI6XCLiqLtcIixcIiZ0cnBleml1bTtcIjpcIuKPolwiLFwiJnRzY3I7XCI6XCLwnZOJXCIsXCImdHNjeTtcIjpcItGGXCIsXCImdHNoY3k7XCI6XCLRm1wiLFwiJnRzdHJvaztcIjpcIsWnXCIsXCImdHdpeHQ7XCI6XCLiiaxcIixcIiZ0d29oZWFkbGVmdGFycm93O1wiOlwi4oaeXCIsXCImdHdvaGVhZHJpZ2h0YXJyb3c7XCI6XCLihqBcIixcIiZ1QXJyO1wiOlwi4oeRXCIsXCImdUhhcjtcIjpcIuKlo1wiLFwiJnVhY3V0ZVwiOlwiw7pcIixcIiZ1YWN1dGU7XCI6XCLDulwiLFwiJnVhcnI7XCI6XCLihpFcIixcIiZ1YnJjeTtcIjpcItGeXCIsXCImdWJyZXZlO1wiOlwixa1cIixcIiZ1Y2lyY1wiOlwiw7tcIixcIiZ1Y2lyYztcIjpcIsO7XCIsXCImdWN5O1wiOlwi0YNcIixcIiZ1ZGFycjtcIjpcIuKHhVwiLFwiJnVkYmxhYztcIjpcIsWxXCIsXCImdWRoYXI7XCI6XCLipa5cIixcIiZ1ZmlzaHQ7XCI6XCLipb5cIixcIiZ1ZnI7XCI6XCLwnZSyXCIsXCImdWdyYXZlXCI6XCLDuVwiLFwiJnVncmF2ZTtcIjpcIsO5XCIsXCImdWhhcmw7XCI6XCLihr9cIixcIiZ1aGFycjtcIjpcIuKGvlwiLFwiJnVoYmxrO1wiOlwi4paAXCIsXCImdWxjb3JuO1wiOlwi4oycXCIsXCImdWxjb3JuZXI7XCI6XCLijJxcIixcIiZ1bGNyb3A7XCI6XCLijI9cIixcIiZ1bHRyaTtcIjpcIuKXuFwiLFwiJnVtYWNyO1wiOlwixatcIixcIiZ1bWxcIjpcIsKoXCIsXCImdW1sO1wiOlwiwqhcIixcIiZ1b2dvbjtcIjpcIsWzXCIsXCImdW9wZjtcIjpcIvCdlaZcIixcIiZ1cGFycm93O1wiOlwi4oaRXCIsXCImdXBkb3duYXJyb3c7XCI6XCLihpVcIixcIiZ1cGhhcnBvb25sZWZ0O1wiOlwi4oa/XCIsXCImdXBoYXJwb29ucmlnaHQ7XCI6XCLihr5cIixcIiZ1cGx1cztcIjpcIuKKjlwiLFwiJnVwc2k7XCI6XCLPhVwiLFwiJnVwc2loO1wiOlwiz5JcIixcIiZ1cHNpbG9uO1wiOlwiz4VcIixcIiZ1cHVwYXJyb3dzO1wiOlwi4oeIXCIsXCImdXJjb3JuO1wiOlwi4oydXCIsXCImdXJjb3JuZXI7XCI6XCLijJ1cIixcIiZ1cmNyb3A7XCI6XCLijI5cIixcIiZ1cmluZztcIjpcIsWvXCIsXCImdXJ0cmk7XCI6XCLil7lcIixcIiZ1c2NyO1wiOlwi8J2TilwiLFwiJnV0ZG90O1wiOlwi4ouwXCIsXCImdXRpbGRlO1wiOlwixalcIixcIiZ1dHJpO1wiOlwi4pa1XCIsXCImdXRyaWY7XCI6XCLilrRcIixcIiZ1dWFycjtcIjpcIuKHiFwiLFwiJnV1bWxcIjpcIsO8XCIsXCImdXVtbDtcIjpcIsO8XCIsXCImdXdhbmdsZTtcIjpcIuKmp1wiLFwiJnZBcnI7XCI6XCLih5VcIixcIiZ2QmFyO1wiOlwi4quoXCIsXCImdkJhcnY7XCI6XCLiq6lcIixcIiZ2RGFzaDtcIjpcIuKKqFwiLFwiJnZhbmdydDtcIjpcIuKmnFwiLFwiJnZhcmVwc2lsb247XCI6XCLPtVwiLFwiJnZhcmthcHBhO1wiOlwiz7BcIixcIiZ2YXJub3RoaW5nO1wiOlwi4oiFXCIsXCImdmFycGhpO1wiOlwiz5VcIixcIiZ2YXJwaTtcIjpcIs+WXCIsXCImdmFycHJvcHRvO1wiOlwi4oidXCIsXCImdmFycjtcIjpcIuKGlVwiLFwiJnZhcnJobztcIjpcIs+xXCIsXCImdmFyc2lnbWE7XCI6XCLPglwiLFwiJnZhcnN1YnNldG5lcTtcIjpcIuKKiu+4gFwiLFwiJnZhcnN1YnNldG5lcXE7XCI6XCLiq4vvuIBcIixcIiZ2YXJzdXBzZXRuZXE7XCI6XCLiiovvuIBcIixcIiZ2YXJzdXBzZXRuZXFxO1wiOlwi4quM77iAXCIsXCImdmFydGhldGE7XCI6XCLPkVwiLFwiJnZhcnRyaWFuZ2xlbGVmdDtcIjpcIuKKslwiLFwiJnZhcnRyaWFuZ2xlcmlnaHQ7XCI6XCLiirNcIixcIiZ2Y3k7XCI6XCLQslwiLFwiJnZkYXNoO1wiOlwi4oqiXCIsXCImdmVlO1wiOlwi4oioXCIsXCImdmVlYmFyO1wiOlwi4oq7XCIsXCImdmVlZXE7XCI6XCLiiZpcIixcIiZ2ZWxsaXA7XCI6XCLii65cIixcIiZ2ZXJiYXI7XCI6XCJ8XCIsXCImdmVydDtcIjpcInxcIixcIiZ2ZnI7XCI6XCLwnZSzXCIsXCImdmx0cmk7XCI6XCLiirJcIixcIiZ2bnN1YjtcIjpcIuKKguKDklwiLFwiJnZuc3VwO1wiOlwi4oqD4oOSXCIsXCImdm9wZjtcIjpcIvCdladcIixcIiZ2cHJvcDtcIjpcIuKInVwiLFwiJnZydHJpO1wiOlwi4oqzXCIsXCImdnNjcjtcIjpcIvCdk4tcIixcIiZ2c3VibkU7XCI6XCLiq4vvuIBcIixcIiZ2c3VibmU7XCI6XCLiiorvuIBcIixcIiZ2c3VwbkU7XCI6XCLiq4zvuIBcIixcIiZ2c3VwbmU7XCI6XCLiiovvuIBcIixcIiZ2emlnemFnO1wiOlwi4qaaXCIsXCImd2NpcmM7XCI6XCLFtVwiLFwiJndlZGJhcjtcIjpcIuKpn1wiLFwiJndlZGdlO1wiOlwi4oinXCIsXCImd2VkZ2VxO1wiOlwi4omZXCIsXCImd2VpZXJwO1wiOlwi4oSYXCIsXCImd2ZyO1wiOlwi8J2UtFwiLFwiJndvcGY7XCI6XCLwnZWoXCIsXCImd3A7XCI6XCLihJhcIixcIiZ3cjtcIjpcIuKJgFwiLFwiJndyZWF0aDtcIjpcIuKJgFwiLFwiJndzY3I7XCI6XCLwnZOMXCIsXCImeGNhcDtcIjpcIuKLglwiLFwiJnhjaXJjO1wiOlwi4pevXCIsXCImeGN1cDtcIjpcIuKLg1wiLFwiJnhkdHJpO1wiOlwi4pa9XCIsXCImeGZyO1wiOlwi8J2UtVwiLFwiJnhoQXJyO1wiOlwi4p+6XCIsXCImeGhhcnI7XCI6XCLin7dcIixcIiZ4aTtcIjpcIs6+XCIsXCImeGxBcnI7XCI6XCLin7hcIixcIiZ4bGFycjtcIjpcIuKftVwiLFwiJnhtYXA7XCI6XCLin7xcIixcIiZ4bmlzO1wiOlwi4ou7XCIsXCImeG9kb3Q7XCI6XCLiqIBcIixcIiZ4b3BmO1wiOlwi8J2VqVwiLFwiJnhvcGx1cztcIjpcIuKogVwiLFwiJnhvdGltZTtcIjpcIuKoglwiLFwiJnhyQXJyO1wiOlwi4p+5XCIsXCImeHJhcnI7XCI6XCLin7ZcIixcIiZ4c2NyO1wiOlwi8J2TjVwiLFwiJnhzcWN1cDtcIjpcIuKohlwiLFwiJnh1cGx1cztcIjpcIuKohFwiLFwiJnh1dHJpO1wiOlwi4pazXCIsXCImeHZlZTtcIjpcIuKLgVwiLFwiJnh3ZWRnZTtcIjpcIuKLgFwiLFwiJnlhY3V0ZVwiOlwiw71cIixcIiZ5YWN1dGU7XCI6XCLDvVwiLFwiJnlhY3k7XCI6XCLRj1wiLFwiJnljaXJjO1wiOlwixbdcIixcIiZ5Y3k7XCI6XCLRi1wiLFwiJnllblwiOlwiwqVcIixcIiZ5ZW47XCI6XCLCpVwiLFwiJnlmcjtcIjpcIvCdlLZcIixcIiZ5aWN5O1wiOlwi0ZdcIixcIiZ5b3BmO1wiOlwi8J2VqlwiLFwiJnlzY3I7XCI6XCLwnZOOXCIsXCImeXVjeTtcIjpcItGOXCIsXCImeXVtbFwiOlwiw79cIixcIiZ5dW1sO1wiOlwiw79cIixcIiZ6YWN1dGU7XCI6XCLFulwiLFwiJnpjYXJvbjtcIjpcIsW+XCIsXCImemN5O1wiOlwi0LdcIixcIiZ6ZG90O1wiOlwixbxcIixcIiZ6ZWV0cmY7XCI6XCLihKhcIixcIiZ6ZXRhO1wiOlwizrZcIixcIiZ6ZnI7XCI6XCLwnZS3XCIsXCImemhjeTtcIjpcItC2XCIsXCImemlncmFycjtcIjpcIuKHnVwiLFwiJnpvcGY7XCI6XCLwnZWrXCIsXCImenNjcjtcIjpcIvCdk49cIixcIiZ6d2o7XCI6XCLigI1cIixcIiZ6d25qO1wiOlwi4oCMXCJ9LGNoYXJhY3RlcnM6e1wiw4ZcIjpcIiZBRWxpZztcIixcIiZcIjpcIiZhbXA7XCIsXCLDgVwiOlwiJkFhY3V0ZTtcIixcIsSCXCI6XCImQWJyZXZlO1wiLFwiw4JcIjpcIiZBY2lyYztcIixcItCQXCI6XCImQWN5O1wiLFwi8J2UhFwiOlwiJkFmcjtcIixcIsOAXCI6XCImQWdyYXZlO1wiLFwizpFcIjpcIiZBbHBoYTtcIixcIsSAXCI6XCImQW1hY3I7XCIsXCLiqZNcIjpcIiZBbmQ7XCIsXCLEhFwiOlwiJkFvZ29uO1wiLFwi8J2UuFwiOlwiJkFvcGY7XCIsXCLigaFcIjpcIiZhZjtcIixcIsOFXCI6XCImYW5nc3Q7XCIsXCLwnZKcXCI6XCImQXNjcjtcIixcIuKJlFwiOlwiJmNvbG9uZXE7XCIsXCLDg1wiOlwiJkF0aWxkZTtcIixcIsOEXCI6XCImQXVtbDtcIixcIuKIllwiOlwiJnNzZXRtbjtcIixcIuKrp1wiOlwiJkJhcnY7XCIsXCLijIZcIjpcIiZkb3VibGViYXJ3ZWRnZTtcIixcItCRXCI6XCImQmN5O1wiLFwi4oi1XCI6XCImYmVjYXVzZTtcIixcIuKErFwiOlwiJmJlcm5vdTtcIixcIs6SXCI6XCImQmV0YTtcIixcIvCdlIVcIjpcIiZCZnI7XCIsXCLwnZS5XCI6XCImQm9wZjtcIixcIsuYXCI6XCImYnJldmU7XCIsXCLiiY5cIjpcIiZidW1wO1wiLFwi0KdcIjpcIiZDSGN5O1wiLFwiwqlcIjpcIiZjb3B5O1wiLFwixIZcIjpcIiZDYWN1dGU7XCIsXCLii5JcIjpcIiZDYXA7XCIsXCLihYVcIjpcIiZERDtcIixcIuKErVwiOlwiJkNmcjtcIixcIsSMXCI6XCImQ2Nhcm9uO1wiLFwiw4dcIjpcIiZDY2VkaWw7XCIsXCLEiFwiOlwiJkNjaXJjO1wiLFwi4oiwXCI6XCImQ2NvbmludDtcIixcIsSKXCI6XCImQ2RvdDtcIixcIsK4XCI6XCImY2VkaWw7XCIsXCLCt1wiOlwiJm1pZGRvdDtcIixcIs6nXCI6XCImQ2hpO1wiLFwi4oqZXCI6XCImb2RvdDtcIixcIuKKllwiOlwiJm9taW51cztcIixcIuKKlVwiOlwiJm9wbHVzO1wiLFwi4oqXXCI6XCImb3RpbWVzO1wiLFwi4oiyXCI6XCImY3djb25pbnQ7XCIsXCLigJ1cIjpcIiZyZHF1b3I7XCIsXCLigJlcIjpcIiZyc3F1b3I7XCIsXCLiiLdcIjpcIiZQcm9wb3J0aW9uO1wiLFwi4qm0XCI6XCImQ29sb25lO1wiLFwi4omhXCI6XCImZXF1aXY7XCIsXCLiiK9cIjpcIiZEb3VibGVDb250b3VySW50ZWdyYWw7XCIsXCLiiK5cIjpcIiZvaW50O1wiLFwi4oSCXCI6XCImY29tcGxleGVzO1wiLFwi4oiQXCI6XCImY29wcm9kO1wiLFwi4oizXCI6XCImYXdjb25pbnQ7XCIsXCLiqK9cIjpcIiZDcm9zcztcIixcIvCdkp5cIjpcIiZDc2NyO1wiLFwi4ouTXCI6XCImQ3VwO1wiLFwi4omNXCI6XCImYXN5bXBlcTtcIixcIuKkkVwiOlwiJkREb3RyYWhkO1wiLFwi0IJcIjpcIiZESmN5O1wiLFwi0IVcIjpcIiZEU2N5O1wiLFwi0I9cIjpcIiZEWmN5O1wiLFwi4oChXCI6XCImZGRhZ2dlcjtcIixcIuKGoVwiOlwiJkRhcnI7XCIsXCLiq6RcIjpcIiZEb3VibGVMZWZ0VGVlO1wiLFwixI5cIjpcIiZEY2Fyb247XCIsXCLQlFwiOlwiJkRjeTtcIixcIuKIh1wiOlwiJm5hYmxhO1wiLFwizpRcIjpcIiZEZWx0YTtcIixcIvCdlIdcIjpcIiZEZnI7XCIsXCLCtFwiOlwiJmFjdXRlO1wiLFwiy5lcIjpcIiZkb3Q7XCIsXCLLnVwiOlwiJmRibGFjO1wiLFwiYFwiOlwiJmdyYXZlO1wiLFwiy5xcIjpcIiZ0aWxkZTtcIixcIuKLhFwiOlwiJmRpYW1vbmQ7XCIsXCLihYZcIjpcIiZkZDtcIixcIvCdlLtcIjpcIiZEb3BmO1wiLFwiwqhcIjpcIiZ1bWw7XCIsXCLig5xcIjpcIiZEb3REb3Q7XCIsXCLiiZBcIjpcIiZlc2RvdDtcIixcIuKHk1wiOlwiJmRBcnI7XCIsXCLih5BcIjpcIiZsQXJyO1wiLFwi4oeUXCI6XCImaWZmO1wiLFwi4p+4XCI6XCImeGxBcnI7XCIsXCLin7pcIjpcIiZ4aEFycjtcIixcIuKfuVwiOlwiJnhyQXJyO1wiLFwi4oeSXCI6XCImckFycjtcIixcIuKKqFwiOlwiJnZEYXNoO1wiLFwi4oeRXCI6XCImdUFycjtcIixcIuKHlVwiOlwiJnZBcnI7XCIsXCLiiKVcIjpcIiZzcGFyO1wiLFwi4oaTXCI6XCImZG93bmFycm93O1wiLFwi4qSTXCI6XCImRG93bkFycm93QmFyO1wiLFwi4oe1XCI6XCImZHVhcnI7XCIsXCLMkVwiOlwiJkRvd25CcmV2ZTtcIixcIuKlkFwiOlwiJkRvd25MZWZ0UmlnaHRWZWN0b3I7XCIsXCLipZ5cIjpcIiZEb3duTGVmdFRlZVZlY3RvcjtcIixcIuKGvVwiOlwiJmxoYXJkO1wiLFwi4qWWXCI6XCImRG93bkxlZnRWZWN0b3JCYXI7XCIsXCLipZ9cIjpcIiZEb3duUmlnaHRUZWVWZWN0b3I7XCIsXCLih4FcIjpcIiZyaWdodGhhcnBvb25kb3duO1wiLFwi4qWXXCI6XCImRG93blJpZ2h0VmVjdG9yQmFyO1wiLFwi4oqkXCI6XCImdG9wO1wiLFwi4oanXCI6XCImbWFwc3RvZG93bjtcIixcIvCdkp9cIjpcIiZEc2NyO1wiLFwixJBcIjpcIiZEc3Ryb2s7XCIsXCLFilwiOlwiJkVORztcIixcIsOQXCI6XCImRVRIO1wiLFwiw4lcIjpcIiZFYWN1dGU7XCIsXCLEmlwiOlwiJkVjYXJvbjtcIixcIsOKXCI6XCImRWNpcmM7XCIsXCLQrVwiOlwiJkVjeTtcIixcIsSWXCI6XCImRWRvdDtcIixcIvCdlIhcIjpcIiZFZnI7XCIsXCLDiFwiOlwiJkVncmF2ZTtcIixcIuKIiFwiOlwiJmlzaW52O1wiLFwixJJcIjpcIiZFbWFjcjtcIixcIuKXu1wiOlwiJkVtcHR5U21hbGxTcXVhcmU7XCIsXCLilqtcIjpcIiZFbXB0eVZlcnlTbWFsbFNxdWFyZTtcIixcIsSYXCI6XCImRW9nb247XCIsXCLwnZS8XCI6XCImRW9wZjtcIixcIs6VXCI6XCImRXBzaWxvbjtcIixcIuKptVwiOlwiJkVxdWFsO1wiLFwi4omCXCI6XCImZXNpbTtcIixcIuKHjFwiOlwiJnJsaGFyO1wiLFwi4oSwXCI6XCImZXhwZWN0YXRpb247XCIsXCLiqbNcIjpcIiZFc2ltO1wiLFwizpdcIjpcIiZFdGE7XCIsXCLDi1wiOlwiJkV1bWw7XCIsXCLiiINcIjpcIiZleGlzdDtcIixcIuKFh1wiOlwiJmV4cG9uZW50aWFsZTtcIixcItCkXCI6XCImRmN5O1wiLFwi8J2UiVwiOlwiJkZmcjtcIixcIuKXvFwiOlwiJkZpbGxlZFNtYWxsU3F1YXJlO1wiLFwi4paqXCI6XCImc3F1ZjtcIixcIvCdlL1cIjpcIiZGb3BmO1wiLFwi4oiAXCI6XCImZm9yYWxsO1wiLFwi4oSxXCI6XCImRnNjcjtcIixcItCDXCI6XCImR0pjeTtcIixcIj5cIjpcIiZndDtcIixcIs6TXCI6XCImR2FtbWE7XCIsXCLPnFwiOlwiJkdhbW1hZDtcIixcIsSeXCI6XCImR2JyZXZlO1wiLFwixKJcIjpcIiZHY2VkaWw7XCIsXCLEnFwiOlwiJkdjaXJjO1wiLFwi0JNcIjpcIiZHY3k7XCIsXCLEoFwiOlwiJkdkb3Q7XCIsXCLwnZSKXCI6XCImR2ZyO1wiLFwi4ouZXCI6XCImZ2dnO1wiLFwi8J2UvlwiOlwiJkdvcGY7XCIsXCLiiaVcIjpcIiZnZXE7XCIsXCLii5tcIjpcIiZndHJlcWxlc3M7XCIsXCLiiadcIjpcIiZnZXFxO1wiLFwi4qqiXCI6XCImR3JlYXRlckdyZWF0ZXI7XCIsXCLiibdcIjpcIiZndHJsZXNzO1wiLFwi4qm+XCI6XCImZ2VzO1wiLFwi4omzXCI6XCImZ3Ryc2ltO1wiLFwi8J2SolwiOlwiJkdzY3I7XCIsXCLiiatcIjpcIiZnZztcIixcItCqXCI6XCImSEFSRGN5O1wiLFwiy4dcIjpcIiZjYXJvbjtcIixcIl5cIjpcIiZIYXQ7XCIsXCLEpFwiOlwiJkhjaXJjO1wiLFwi4oSMXCI6XCImUG9pbmNhcmVwbGFuZTtcIixcIuKEi1wiOlwiJmhhbWlsdDtcIixcIuKEjVwiOlwiJnF1YXRlcm5pb25zO1wiLFwi4pSAXCI6XCImYm94aDtcIixcIsSmXCI6XCImSHN0cm9rO1wiLFwi4omPXCI6XCImYnVtcGVxO1wiLFwi0JVcIjpcIiZJRWN5O1wiLFwixLJcIjpcIiZJSmxpZztcIixcItCBXCI6XCImSU9jeTtcIixcIsONXCI6XCImSWFjdXRlO1wiLFwiw45cIjpcIiZJY2lyYztcIixcItCYXCI6XCImSWN5O1wiLFwixLBcIjpcIiZJZG90O1wiLFwi4oSRXCI6XCImaW1hZ3BhcnQ7XCIsXCLDjFwiOlwiJklncmF2ZTtcIixcIsSqXCI6XCImSW1hY3I7XCIsXCLihYhcIjpcIiZpaTtcIixcIuKIrFwiOlwiJkludDtcIixcIuKIq1wiOlwiJmludDtcIixcIuKLglwiOlwiJnhjYXA7XCIsXCLigaNcIjpcIiZpYztcIixcIuKBolwiOlwiJml0O1wiLFwixK5cIjpcIiZJb2dvbjtcIixcIvCdlYBcIjpcIiZJb3BmO1wiLFwizplcIjpcIiZJb3RhO1wiLFwi4oSQXCI6XCImaW1hZ2xpbmU7XCIsXCLEqFwiOlwiJkl0aWxkZTtcIixcItCGXCI6XCImSXVrY3k7XCIsXCLDj1wiOlwiJkl1bWw7XCIsXCLEtFwiOlwiJkpjaXJjO1wiLFwi0JlcIjpcIiZKY3k7XCIsXCLwnZSNXCI6XCImSmZyO1wiLFwi8J2VgVwiOlwiJkpvcGY7XCIsXCLwnZKlXCI6XCImSnNjcjtcIixcItCIXCI6XCImSnNlcmN5O1wiLFwi0IRcIjpcIiZKdWtjeTtcIixcItClXCI6XCImS0hjeTtcIixcItCMXCI6XCImS0pjeTtcIixcIs6aXCI6XCImS2FwcGE7XCIsXCLEtlwiOlwiJktjZWRpbDtcIixcItCaXCI6XCImS2N5O1wiLFwi8J2UjlwiOlwiJktmcjtcIixcIvCdlYJcIjpcIiZLb3BmO1wiLFwi8J2SplwiOlwiJktzY3I7XCIsXCLQiVwiOlwiJkxKY3k7XCIsXCI8XCI6XCImbHQ7XCIsXCLEuVwiOlwiJkxhY3V0ZTtcIixcIs6bXCI6XCImTGFtYmRhO1wiLFwi4p+qXCI6XCImTGFuZztcIixcIuKEklwiOlwiJmxhZ3JhbjtcIixcIuKGnlwiOlwiJnR3b2hlYWRsZWZ0YXJyb3c7XCIsXCLEvVwiOlwiJkxjYXJvbjtcIixcIsS7XCI6XCImTGNlZGlsO1wiLFwi0JtcIjpcIiZMY3k7XCIsXCLin6hcIjpcIiZsYW5nbGU7XCIsXCLihpBcIjpcIiZzbGFycjtcIixcIuKHpFwiOlwiJmxhcnJiO1wiLFwi4oeGXCI6XCImbHJhcnI7XCIsXCLijIhcIjpcIiZsY2VpbDtcIixcIuKfplwiOlwiJmxvYnJrO1wiLFwi4qWhXCI6XCImTGVmdERvd25UZWVWZWN0b3I7XCIsXCLih4NcIjpcIiZkb3duaGFycG9vbmxlZnQ7XCIsXCLipZlcIjpcIiZMZWZ0RG93blZlY3RvckJhcjtcIixcIuKMilwiOlwiJmxmbG9vcjtcIixcIuKGlFwiOlwiJmxlZnRyaWdodGFycm93O1wiLFwi4qWOXCI6XCImTGVmdFJpZ2h0VmVjdG9yO1wiLFwi4oqjXCI6XCImZGFzaHY7XCIsXCLihqRcIjpcIiZtYXBzdG9sZWZ0O1wiLFwi4qWaXCI6XCImTGVmdFRlZVZlY3RvcjtcIixcIuKKslwiOlwiJnZsdHJpO1wiLFwi4qePXCI6XCImTGVmdFRyaWFuZ2xlQmFyO1wiLFwi4oq0XCI6XCImdHJpYW5nbGVsZWZ0ZXE7XCIsXCLipZFcIjpcIiZMZWZ0VXBEb3duVmVjdG9yO1wiLFwi4qWgXCI6XCImTGVmdFVwVGVlVmVjdG9yO1wiLFwi4oa/XCI6XCImdXBoYXJwb29ubGVmdDtcIixcIuKlmFwiOlwiJkxlZnRVcFZlY3RvckJhcjtcIixcIuKGvFwiOlwiJmxoYXJ1O1wiLFwi4qWSXCI6XCImTGVmdFZlY3RvckJhcjtcIixcIuKLmlwiOlwiJmxlc3NlcWd0cjtcIixcIuKJplwiOlwiJmxlcXE7XCIsXCLiibZcIjpcIiZsZztcIixcIuKqoVwiOlwiJkxlc3NMZXNzO1wiLFwi4qm9XCI6XCImbGVzO1wiLFwi4omyXCI6XCImbHNpbTtcIixcIvCdlI9cIjpcIiZMZnI7XCIsXCLii5hcIjpcIiZMbDtcIixcIuKHmlwiOlwiJmxBYXJyO1wiLFwixL9cIjpcIiZMbWlkb3Q7XCIsXCLin7VcIjpcIiZ4bGFycjtcIixcIuKft1wiOlwiJnhoYXJyO1wiLFwi4p+2XCI6XCImeHJhcnI7XCIsXCLwnZWDXCI6XCImTG9wZjtcIixcIuKGmVwiOlwiJnN3YXJyb3c7XCIsXCLihphcIjpcIiZzZWFycm93O1wiLFwi4oawXCI6XCImbHNoO1wiLFwixYFcIjpcIiZMc3Ryb2s7XCIsXCLiiapcIjpcIiZsbDtcIixcIuKkhVwiOlwiJk1hcDtcIixcItCcXCI6XCImTWN5O1wiLFwi4oGfXCI6XCImTWVkaXVtU3BhY2U7XCIsXCLihLNcIjpcIiZwaG1tYXQ7XCIsXCLwnZSQXCI6XCImTWZyO1wiLFwi4oiTXCI6XCImbXA7XCIsXCLwnZWEXCI6XCImTW9wZjtcIixcIs6cXCI6XCImTXU7XCIsXCLQilwiOlwiJk5KY3k7XCIsXCLFg1wiOlwiJk5hY3V0ZTtcIixcIsWHXCI6XCImTmNhcm9uO1wiLFwixYVcIjpcIiZOY2VkaWw7XCIsXCLQnVwiOlwiJk5jeTtcIixcIuKAi1wiOlwiJlplcm9XaWR0aFNwYWNlO1wiLFwiXFxuXCI6XCImTmV3TGluZTtcIixcIvCdlJFcIjpcIiZOZnI7XCIsXCLigaBcIjpcIiZOb0JyZWFrO1wiLFwiwqBcIjpcIiZuYnNwO1wiLFwi4oSVXCI6XCImbmF0dXJhbHM7XCIsXCLiq6xcIjpcIiZOb3Q7XCIsXCLiiaJcIjpcIiZuZXF1aXY7XCIsXCLiia1cIjpcIiZOb3RDdXBDYXA7XCIsXCLiiKZcIjpcIiZuc3BhcjtcIixcIuKIiVwiOlwiJm5vdGludmE7XCIsXCLiiaBcIjpcIiZuZTtcIixcIuKJgsy4XCI6XCImbmVzaW07XCIsXCLiiIRcIjpcIiZuZXhpc3RzO1wiLFwi4omvXCI6XCImbmd0cjtcIixcIuKJsVwiOlwiJm5nZXE7XCIsXCLiiafMuFwiOlwiJm5nZXFxO1wiLFwi4omrzLhcIjpcIiZuR3R2O1wiLFwi4om5XCI6XCImbnRnbDtcIixcIuKpvsy4XCI6XCImbmdlcztcIixcIuKJtVwiOlwiJm5nc2ltO1wiLFwi4omOzLhcIjpcIiZuYnVtcDtcIixcIuKJj8y4XCI6XCImbmJ1bXBlO1wiLFwi4ouqXCI6XCImbnRyaWFuZ2xlbGVmdDtcIixcIuKnj8y4XCI6XCImTm90TGVmdFRyaWFuZ2xlQmFyO1wiLFwi4ousXCI6XCImbnRyaWFuZ2xlbGVmdGVxO1wiLFwi4omuXCI6XCImbmx0O1wiLFwi4omwXCI6XCImbmxlcTtcIixcIuKJuFwiOlwiJm50bGc7XCIsXCLiiarMuFwiOlwiJm5MdHY7XCIsXCLiqb3MuFwiOlwiJm5sZXM7XCIsXCLiibRcIjpcIiZubHNpbTtcIixcIuKqosy4XCI6XCImTm90TmVzdGVkR3JlYXRlckdyZWF0ZXI7XCIsXCLiqqHMuFwiOlwiJk5vdE5lc3RlZExlc3NMZXNzO1wiLFwi4oqAXCI6XCImbnByZWM7XCIsXCLiqq/MuFwiOlwiJm5wcmVjZXE7XCIsXCLii6BcIjpcIiZucHJjdWU7XCIsXCLiiIxcIjpcIiZub3RuaXZhO1wiLFwi4ourXCI6XCImbnRyaWFuZ2xlcmlnaHQ7XCIsXCLip5DMuFwiOlwiJk5vdFJpZ2h0VHJpYW5nbGVCYXI7XCIsXCLii61cIjpcIiZudHJpYW5nbGVyaWdodGVxO1wiLFwi4oqPzLhcIjpcIiZOb3RTcXVhcmVTdWJzZXQ7XCIsXCLii6JcIjpcIiZuc3FzdWJlO1wiLFwi4oqQzLhcIjpcIiZOb3RTcXVhcmVTdXBlcnNldDtcIixcIuKLo1wiOlwiJm5zcXN1cGU7XCIsXCLiioLig5JcIjpcIiZ2bnN1YjtcIixcIuKKiFwiOlwiJm5zdWJzZXRlcTtcIixcIuKKgVwiOlwiJm5zdWNjO1wiLFwi4qqwzLhcIjpcIiZuc3VjY2VxO1wiLFwi4ouhXCI6XCImbnNjY3VlO1wiLFwi4om/zLhcIjpcIiZOb3RTdWNjZWVkc1RpbGRlO1wiLFwi4oqD4oOSXCI6XCImdm5zdXA7XCIsXCLiiolcIjpcIiZuc3Vwc2V0ZXE7XCIsXCLiiYFcIjpcIiZuc2ltO1wiLFwi4omEXCI6XCImbnNpbWVxO1wiLFwi4omHXCI6XCImbmNvbmc7XCIsXCLiiYlcIjpcIiZuYXBwcm94O1wiLFwi4oikXCI6XCImbnNtaWQ7XCIsXCLwnZKpXCI6XCImTnNjcjtcIixcIsORXCI6XCImTnRpbGRlO1wiLFwizp1cIjpcIiZOdTtcIixcIsWSXCI6XCImT0VsaWc7XCIsXCLDk1wiOlwiJk9hY3V0ZTtcIixcIsOUXCI6XCImT2NpcmM7XCIsXCLQnlwiOlwiJk9jeTtcIixcIsWQXCI6XCImT2RibGFjO1wiLFwi8J2UklwiOlwiJk9mcjtcIixcIsOSXCI6XCImT2dyYXZlO1wiLFwixYxcIjpcIiZPbWFjcjtcIixcIs6pXCI6XCImb2htO1wiLFwizp9cIjpcIiZPbWljcm9uO1wiLFwi8J2VhlwiOlwiJk9vcGY7XCIsXCLigJxcIjpcIiZsZHF1bztcIixcIuKAmFwiOlwiJmxzcXVvO1wiLFwi4qmUXCI6XCImT3I7XCIsXCLwnZKqXCI6XCImT3NjcjtcIixcIsOYXCI6XCImT3NsYXNoO1wiLFwiw5VcIjpcIiZPdGlsZGU7XCIsXCLiqLdcIjpcIiZPdGltZXM7XCIsXCLDllwiOlwiJk91bWw7XCIsXCLigL5cIjpcIiZvbGluZTtcIixcIuKPnlwiOlwiJk92ZXJCcmFjZTtcIixcIuKOtFwiOlwiJnRicms7XCIsXCLij5xcIjpcIiZPdmVyUGFyZW50aGVzaXM7XCIsXCLiiIJcIjpcIiZwYXJ0O1wiLFwi0J9cIjpcIiZQY3k7XCIsXCLwnZSTXCI6XCImUGZyO1wiLFwizqZcIjpcIiZQaGk7XCIsXCLOoFwiOlwiJlBpO1wiLFwiwrFcIjpcIiZwbTtcIixcIuKEmVwiOlwiJnByaW1lcztcIixcIuKqu1wiOlwiJlByO1wiLFwi4om6XCI6XCImcHJlYztcIixcIuKqr1wiOlwiJnByZWNlcTtcIixcIuKJvFwiOlwiJnByZWNjdXJseWVxO1wiLFwi4om+XCI6XCImcHJzaW07XCIsXCLigLNcIjpcIiZQcmltZTtcIixcIuKIj1wiOlwiJnByb2Q7XCIsXCLiiJ1cIjpcIiZ2cHJvcDtcIixcIvCdkqtcIjpcIiZQc2NyO1wiLFwizqhcIjpcIiZQc2k7XCIsJ1wiJzpcIiZxdW90O1wiLFwi8J2UlFwiOlwiJlFmcjtcIixcIuKEmlwiOlwiJnJhdGlvbmFscztcIixcIvCdkqxcIjpcIiZRc2NyO1wiLFwi4qSQXCI6XCImZHJia2Fyb3c7XCIsXCLCrlwiOlwiJnJlZztcIixcIsWUXCI6XCImUmFjdXRlO1wiLFwi4p+rXCI6XCImUmFuZztcIixcIuKGoFwiOlwiJnR3b2hlYWRyaWdodGFycm93O1wiLFwi4qSWXCI6XCImUmFycnRsO1wiLFwixZhcIjpcIiZSY2Fyb247XCIsXCLFllwiOlwiJlJjZWRpbDtcIixcItCgXCI6XCImUmN5O1wiLFwi4oScXCI6XCImcmVhbHBhcnQ7XCIsXCLiiItcIjpcIiZuaXY7XCIsXCLih4tcIjpcIiZscmhhcjtcIixcIuKlr1wiOlwiJmR1aGFyO1wiLFwizqFcIjpcIiZSaG87XCIsXCLin6lcIjpcIiZyYW5nbGU7XCIsXCLihpJcIjpcIiZzcmFycjtcIixcIuKHpVwiOlwiJnJhcnJiO1wiLFwi4oeEXCI6XCImcmxhcnI7XCIsXCLijIlcIjpcIiZyY2VpbDtcIixcIuKfp1wiOlwiJnJvYnJrO1wiLFwi4qWdXCI6XCImUmlnaHREb3duVGVlVmVjdG9yO1wiLFwi4oeCXCI6XCImZG93bmhhcnBvb25yaWdodDtcIixcIuKllVwiOlwiJlJpZ2h0RG93blZlY3RvckJhcjtcIixcIuKMi1wiOlwiJnJmbG9vcjtcIixcIuKKolwiOlwiJnZkYXNoO1wiLFwi4oamXCI6XCImbWFwc3RvO1wiLFwi4qWbXCI6XCImUmlnaHRUZWVWZWN0b3I7XCIsXCLiirNcIjpcIiZ2cnRyaTtcIixcIuKnkFwiOlwiJlJpZ2h0VHJpYW5nbGVCYXI7XCIsXCLiirVcIjpcIiZ0cmlhbmdsZXJpZ2h0ZXE7XCIsXCLipY9cIjpcIiZSaWdodFVwRG93blZlY3RvcjtcIixcIuKlnFwiOlwiJlJpZ2h0VXBUZWVWZWN0b3I7XCIsXCLihr5cIjpcIiZ1cGhhcnBvb25yaWdodDtcIixcIuKllFwiOlwiJlJpZ2h0VXBWZWN0b3JCYXI7XCIsXCLih4BcIjpcIiZyaWdodGhhcnBvb251cDtcIixcIuKlk1wiOlwiJlJpZ2h0VmVjdG9yQmFyO1wiLFwi4oSdXCI6XCImcmVhbHM7XCIsXCLipbBcIjpcIiZSb3VuZEltcGxpZXM7XCIsXCLih5tcIjpcIiZyQWFycjtcIixcIuKEm1wiOlwiJnJlYWxpbmU7XCIsXCLihrFcIjpcIiZyc2g7XCIsXCLip7RcIjpcIiZSdWxlRGVsYXllZDtcIixcItCpXCI6XCImU0hDSGN5O1wiLFwi0KhcIjpcIiZTSGN5O1wiLFwi0KxcIjpcIiZTT0ZUY3k7XCIsXCLFmlwiOlwiJlNhY3V0ZTtcIixcIuKqvFwiOlwiJlNjO1wiLFwixaBcIjpcIiZTY2Fyb247XCIsXCLFnlwiOlwiJlNjZWRpbDtcIixcIsWcXCI6XCImU2NpcmM7XCIsXCLQoVwiOlwiJlNjeTtcIixcIvCdlJZcIjpcIiZTZnI7XCIsXCLihpFcIjpcIiZ1cGFycm93O1wiLFwizqNcIjpcIiZTaWdtYTtcIixcIuKImFwiOlwiJmNvbXBmbjtcIixcIvCdlYpcIjpcIiZTb3BmO1wiLFwi4oiaXCI6XCImcmFkaWM7XCIsXCLilqFcIjpcIiZzcXVhcmU7XCIsXCLiipNcIjpcIiZzcWNhcDtcIixcIuKKj1wiOlwiJnNxc3Vic2V0O1wiLFwi4oqRXCI6XCImc3FzdWJzZXRlcTtcIixcIuKKkFwiOlwiJnNxc3Vwc2V0O1wiLFwi4oqSXCI6XCImc3FzdXBzZXRlcTtcIixcIuKKlFwiOlwiJnNxY3VwO1wiLFwi8J2SrlwiOlwiJlNzY3I7XCIsXCLii4ZcIjpcIiZzc3RhcmY7XCIsXCLii5BcIjpcIiZTdWJzZXQ7XCIsXCLiioZcIjpcIiZzdWJzZXRlcTtcIixcIuKJu1wiOlwiJnN1Y2M7XCIsXCLiqrBcIjpcIiZzdWNjZXE7XCIsXCLiib1cIjpcIiZzdWNjY3VybHllcTtcIixcIuKJv1wiOlwiJnN1Y2NzaW07XCIsXCLiiJFcIjpcIiZzdW07XCIsXCLii5FcIjpcIiZTdXBzZXQ7XCIsXCLiioNcIjpcIiZzdXBzZXQ7XCIsXCLiiodcIjpcIiZzdXBzZXRlcTtcIixcIsOeXCI6XCImVEhPUk47XCIsXCLihKJcIjpcIiZ0cmFkZTtcIixcItCLXCI6XCImVFNIY3k7XCIsXCLQplwiOlwiJlRTY3k7XCIsXCJcXHRcIjpcIiZUYWI7XCIsXCLOpFwiOlwiJlRhdTtcIixcIsWkXCI6XCImVGNhcm9uO1wiLFwixaJcIjpcIiZUY2VkaWw7XCIsXCLQolwiOlwiJlRjeTtcIixcIvCdlJdcIjpcIiZUZnI7XCIsXCLiiLRcIjpcIiZ0aGVyZWZvcmU7XCIsXCLOmFwiOlwiJlRoZXRhO1wiLFwi4oGf4oCKXCI6XCImVGhpY2tTcGFjZTtcIixcIuKAiVwiOlwiJnRoaW5zcDtcIixcIuKIvFwiOlwiJnRoa3NpbTtcIixcIuKJg1wiOlwiJnNpbWVxO1wiLFwi4omFXCI6XCImY29uZztcIixcIuKJiFwiOlwiJnRoa2FwO1wiLFwi8J2Vi1wiOlwiJlRvcGY7XCIsXCLig5tcIjpcIiZ0ZG90O1wiLFwi8J2Sr1wiOlwiJlRzY3I7XCIsXCLFplwiOlwiJlRzdHJvaztcIixcIsOaXCI6XCImVWFjdXRlO1wiLFwi4oafXCI6XCImVWFycjtcIixcIuKliVwiOlwiJlVhcnJvY2lyO1wiLFwi0I5cIjpcIiZVYnJjeTtcIixcIsWsXCI6XCImVWJyZXZlO1wiLFwiw5tcIjpcIiZVY2lyYztcIixcItCjXCI6XCImVWN5O1wiLFwixbBcIjpcIiZVZGJsYWM7XCIsXCLwnZSYXCI6XCImVWZyO1wiLFwiw5lcIjpcIiZVZ3JhdmU7XCIsXCLFqlwiOlwiJlVtYWNyO1wiLF86XCImbG93YmFyO1wiLFwi4o+fXCI6XCImVW5kZXJCcmFjZTtcIixcIuKOtVwiOlwiJmJicms7XCIsXCLij51cIjpcIiZVbmRlclBhcmVudGhlc2lzO1wiLFwi4ouDXCI6XCImeGN1cDtcIixcIuKKjlwiOlwiJnVwbHVzO1wiLFwixbJcIjpcIiZVb2dvbjtcIixcIvCdlYxcIjpcIiZVb3BmO1wiLFwi4qSSXCI6XCImVXBBcnJvd0JhcjtcIixcIuKHhVwiOlwiJnVkYXJyO1wiLFwi4oaVXCI6XCImdmFycjtcIixcIuKlrlwiOlwiJnVkaGFyO1wiLFwi4oqlXCI6XCImcGVycDtcIixcIuKGpVwiOlwiJm1hcHN0b3VwO1wiLFwi4oaWXCI6XCImbndhcnJvdztcIixcIuKGl1wiOlwiJm5lYXJyb3c7XCIsXCLPklwiOlwiJnVwc2loO1wiLFwizqVcIjpcIiZVcHNpbG9uO1wiLFwixa5cIjpcIiZVcmluZztcIixcIvCdkrBcIjpcIiZVc2NyO1wiLFwixahcIjpcIiZVdGlsZGU7XCIsXCLDnFwiOlwiJlV1bWw7XCIsXCLiiqtcIjpcIiZWRGFzaDtcIixcIuKrq1wiOlwiJlZiYXI7XCIsXCLQklwiOlwiJlZjeTtcIixcIuKKqVwiOlwiJlZkYXNoO1wiLFwi4qumXCI6XCImVmRhc2hsO1wiLFwi4ouBXCI6XCImeHZlZTtcIixcIuKAllwiOlwiJlZlcnQ7XCIsXCLiiKNcIjpcIiZzbWlkO1wiLFwifFwiOlwiJnZlcnQ7XCIsXCLinZhcIjpcIiZWZXJ0aWNhbFNlcGFyYXRvcjtcIixcIuKJgFwiOlwiJndyZWF0aDtcIixcIuKAilwiOlwiJmhhaXJzcDtcIixcIvCdlJlcIjpcIiZWZnI7XCIsXCLwnZWNXCI6XCImVm9wZjtcIixcIvCdkrFcIjpcIiZWc2NyO1wiLFwi4oqqXCI6XCImVnZkYXNoO1wiLFwixbRcIjpcIiZXY2lyYztcIixcIuKLgFwiOlwiJnh3ZWRnZTtcIixcIvCdlJpcIjpcIiZXZnI7XCIsXCLwnZWOXCI6XCImV29wZjtcIixcIvCdkrJcIjpcIiZXc2NyO1wiLFwi8J2Um1wiOlwiJlhmcjtcIixcIs6eXCI6XCImWGk7XCIsXCLwnZWPXCI6XCImWG9wZjtcIixcIvCdkrNcIjpcIiZYc2NyO1wiLFwi0K9cIjpcIiZZQWN5O1wiLFwi0IdcIjpcIiZZSWN5O1wiLFwi0K5cIjpcIiZZVWN5O1wiLFwiw51cIjpcIiZZYWN1dGU7XCIsXCLFtlwiOlwiJlljaXJjO1wiLFwi0KtcIjpcIiZZY3k7XCIsXCLwnZScXCI6XCImWWZyO1wiLFwi8J2VkFwiOlwiJllvcGY7XCIsXCLwnZK0XCI6XCImWXNjcjtcIixcIsW4XCI6XCImWXVtbDtcIixcItCWXCI6XCImWkhjeTtcIixcIsW5XCI6XCImWmFjdXRlO1wiLFwixb1cIjpcIiZaY2Fyb247XCIsXCLQl1wiOlwiJlpjeTtcIixcIsW7XCI6XCImWmRvdDtcIixcIs6WXCI6XCImWmV0YTtcIixcIuKEqFwiOlwiJnplZXRyZjtcIixcIuKEpFwiOlwiJmludGVnZXJzO1wiLFwi8J2StVwiOlwiJlpzY3I7XCIsXCLDoVwiOlwiJmFhY3V0ZTtcIixcIsSDXCI6XCImYWJyZXZlO1wiLFwi4oi+XCI6XCImbXN0cG9zO1wiLFwi4oi+zLNcIjpcIiZhY0U7XCIsXCLiiL9cIjpcIiZhY2Q7XCIsXCLDolwiOlwiJmFjaXJjO1wiLFwi0LBcIjpcIiZhY3k7XCIsXCLDplwiOlwiJmFlbGlnO1wiLFwi8J2UnlwiOlwiJmFmcjtcIixcIsOgXCI6XCImYWdyYXZlO1wiLFwi4oS1XCI6XCImYWxlcGg7XCIsXCLOsVwiOlwiJmFscGhhO1wiLFwixIFcIjpcIiZhbWFjcjtcIixcIuKov1wiOlwiJmFtYWxnO1wiLFwi4oinXCI6XCImd2VkZ2U7XCIsXCLiqZVcIjpcIiZhbmRhbmQ7XCIsXCLiqZxcIjpcIiZhbmRkO1wiLFwi4qmYXCI6XCImYW5kc2xvcGU7XCIsXCLiqZpcIjpcIiZhbmR2O1wiLFwi4oigXCI6XCImYW5nbGU7XCIsXCLipqRcIjpcIiZhbmdlO1wiLFwi4oihXCI6XCImbWVhc3VyZWRhbmdsZTtcIixcIuKmqFwiOlwiJmFuZ21zZGFhO1wiLFwi4qapXCI6XCImYW5nbXNkYWI7XCIsXCLipqpcIjpcIiZhbmdtc2RhYztcIixcIuKmq1wiOlwiJmFuZ21zZGFkO1wiLFwi4qasXCI6XCImYW5nbXNkYWU7XCIsXCLipq1cIjpcIiZhbmdtc2RhZjtcIixcIuKmrlwiOlwiJmFuZ21zZGFnO1wiLFwi4qavXCI6XCImYW5nbXNkYWg7XCIsXCLiiJ9cIjpcIiZhbmdydDtcIixcIuKKvlwiOlwiJmFuZ3J0dmI7XCIsXCLipp1cIjpcIiZhbmdydHZiZDtcIixcIuKIolwiOlwiJmFuZ3NwaDtcIixcIuKNvFwiOlwiJmFuZ3phcnI7XCIsXCLEhVwiOlwiJmFvZ29uO1wiLFwi8J2VklwiOlwiJmFvcGY7XCIsXCLiqbBcIjpcIiZhcEU7XCIsXCLiqa9cIjpcIiZhcGFjaXI7XCIsXCLiiYpcIjpcIiZhcHByb3hlcTtcIixcIuKJi1wiOlwiJmFwaWQ7XCIsXCInXCI6XCImYXBvcztcIixcIsOlXCI6XCImYXJpbmc7XCIsXCLwnZK2XCI6XCImYXNjcjtcIixcIipcIjpcIiZtaWRhc3Q7XCIsXCLDo1wiOlwiJmF0aWxkZTtcIixcIsOkXCI6XCImYXVtbDtcIixcIuKokVwiOlwiJmF3aW50O1wiLFwi4qutXCI6XCImYk5vdDtcIixcIuKJjFwiOlwiJmJjb25nO1wiLFwiz7ZcIjpcIiZiZXBzaTtcIixcIuKAtVwiOlwiJmJwcmltZTtcIixcIuKIvVwiOlwiJmJzaW07XCIsXCLii41cIjpcIiZic2ltZTtcIixcIuKKvVwiOlwiJmJhcnZlZTtcIixcIuKMhVwiOlwiJmJhcndlZGdlO1wiLFwi4o62XCI6XCImYmJya3Ricms7XCIsXCLQsVwiOlwiJmJjeTtcIixcIuKAnlwiOlwiJmxkcXVvcjtcIixcIuKmsFwiOlwiJmJlbXB0eXY7XCIsXCLOslwiOlwiJmJldGE7XCIsXCLihLZcIjpcIiZiZXRoO1wiLFwi4omsXCI6XCImdHdpeHQ7XCIsXCLwnZSfXCI6XCImYmZyO1wiLFwi4pevXCI6XCImeGNpcmM7XCIsXCLiqIBcIjpcIiZ4b2RvdDtcIixcIuKogVwiOlwiJnhvcGx1cztcIixcIuKoglwiOlwiJnhvdGltZTtcIixcIuKohlwiOlwiJnhzcWN1cDtcIixcIuKYhVwiOlwiJnN0YXJmO1wiLFwi4pa9XCI6XCImeGR0cmk7XCIsXCLilrNcIjpcIiZ4dXRyaTtcIixcIuKohFwiOlwiJnh1cGx1cztcIixcIuKkjVwiOlwiJnJiYXJyO1wiLFwi4qerXCI6XCImbG96ZjtcIixcIuKWtFwiOlwiJnV0cmlmO1wiLFwi4pa+XCI6XCImZHRyaWY7XCIsXCLil4JcIjpcIiZsdHJpZjtcIixcIuKWuFwiOlwiJnJ0cmlmO1wiLFwi4pCjXCI6XCImYmxhbms7XCIsXCLilpJcIjpcIiZibGsxMjtcIixcIuKWkVwiOlwiJmJsazE0O1wiLFwi4paTXCI6XCImYmxrMzQ7XCIsXCLilohcIjpcIiZibG9jaztcIixcIj3ig6VcIjpcIiZibmU7XCIsXCLiiaHig6VcIjpcIiZibmVxdWl2O1wiLFwi4oyQXCI6XCImYm5vdDtcIixcIvCdlZNcIjpcIiZib3BmO1wiLFwi4ouIXCI6XCImYm93dGllO1wiLFwi4pWXXCI6XCImYm94REw7XCIsXCLilZRcIjpcIiZib3hEUjtcIixcIuKVllwiOlwiJmJveERsO1wiLFwi4pWTXCI6XCImYm94RHI7XCIsXCLilZBcIjpcIiZib3hIO1wiLFwi4pWmXCI6XCImYm94SEQ7XCIsXCLilalcIjpcIiZib3hIVTtcIixcIuKVpFwiOlwiJmJveEhkO1wiLFwi4pWnXCI6XCImYm94SHU7XCIsXCLilZ1cIjpcIiZib3hVTDtcIixcIuKVmlwiOlwiJmJveFVSO1wiLFwi4pWcXCI6XCImYm94VWw7XCIsXCLilZlcIjpcIiZib3hVcjtcIixcIuKVkVwiOlwiJmJveFY7XCIsXCLilaxcIjpcIiZib3hWSDtcIixcIuKVo1wiOlwiJmJveFZMO1wiLFwi4pWgXCI6XCImYm94VlI7XCIsXCLilatcIjpcIiZib3hWaDtcIixcIuKVolwiOlwiJmJveFZsO1wiLFwi4pWfXCI6XCImYm94VnI7XCIsXCLip4lcIjpcIiZib3hib3g7XCIsXCLilZVcIjpcIiZib3hkTDtcIixcIuKVklwiOlwiJmJveGRSO1wiLFwi4pSQXCI6XCImYm94ZGw7XCIsXCLilIxcIjpcIiZib3hkcjtcIixcIuKVpVwiOlwiJmJveGhEO1wiLFwi4pWoXCI6XCImYm94aFU7XCIsXCLilKxcIjpcIiZib3hoZDtcIixcIuKUtFwiOlwiJmJveGh1O1wiLFwi4oqfXCI6XCImbWludXNiO1wiLFwi4oqeXCI6XCImcGx1c2I7XCIsXCLiiqBcIjpcIiZ0aW1lc2I7XCIsXCLilZtcIjpcIiZib3h1TDtcIixcIuKVmFwiOlwiJmJveHVSO1wiLFwi4pSYXCI6XCImYm94dWw7XCIsXCLilJRcIjpcIiZib3h1cjtcIixcIuKUglwiOlwiJmJveHY7XCIsXCLilapcIjpcIiZib3h2SDtcIixcIuKVoVwiOlwiJmJveHZMO1wiLFwi4pWeXCI6XCImYm94dlI7XCIsXCLilLxcIjpcIiZib3h2aDtcIixcIuKUpFwiOlwiJmJveHZsO1wiLFwi4pScXCI6XCImYm94dnI7XCIsXCLCplwiOlwiJmJydmJhcjtcIixcIvCdkrdcIjpcIiZic2NyO1wiLFwi4oGPXCI6XCImYnNlbWk7XCIsXCJcXFxcXCI6XCImYnNvbDtcIixcIuKnhVwiOlwiJmJzb2xiO1wiLFwi4p+IXCI6XCImYnNvbGhzdWI7XCIsXCLigKJcIjpcIiZidWxsZXQ7XCIsXCLiqq5cIjpcIiZidW1wRTtcIixcIsSHXCI6XCImY2FjdXRlO1wiLFwi4oipXCI6XCImY2FwO1wiLFwi4qmEXCI6XCImY2FwYW5kO1wiLFwi4qmJXCI6XCImY2FwYnJjdXA7XCIsXCLiqYtcIjpcIiZjYXBjYXA7XCIsXCLiqYdcIjpcIiZjYXBjdXA7XCIsXCLiqYBcIjpcIiZjYXBkb3Q7XCIsXCLiiKnvuIBcIjpcIiZjYXBzO1wiLFwi4oGBXCI6XCImY2FyZXQ7XCIsXCLiqY1cIjpcIiZjY2FwcztcIixcIsSNXCI6XCImY2Nhcm9uO1wiLFwiw6dcIjpcIiZjY2VkaWw7XCIsXCLEiVwiOlwiJmNjaXJjO1wiLFwi4qmMXCI6XCImY2N1cHM7XCIsXCLiqZBcIjpcIiZjY3Vwc3NtO1wiLFwixItcIjpcIiZjZG90O1wiLFwi4qayXCI6XCImY2VtcHR5djtcIixcIsKiXCI6XCImY2VudDtcIixcIvCdlKBcIjpcIiZjZnI7XCIsXCLRh1wiOlwiJmNoY3k7XCIsXCLinJNcIjpcIiZjaGVja21hcms7XCIsXCLPh1wiOlwiJmNoaTtcIixcIuKXi1wiOlwiJmNpcjtcIixcIuKng1wiOlwiJmNpckU7XCIsXCLLhlwiOlwiJmNpcmM7XCIsXCLiiZdcIjpcIiZjaXJlO1wiLFwi4oa6XCI6XCImb2xhcnI7XCIsXCLihrtcIjpcIiZvcmFycjtcIixcIuKTiFwiOlwiJm9TO1wiLFwi4oqbXCI6XCImb2FzdDtcIixcIuKKmlwiOlwiJm9jaXI7XCIsXCLiip1cIjpcIiZvZGFzaDtcIixcIuKokFwiOlwiJmNpcmZuaW50O1wiLFwi4quvXCI6XCImY2lybWlkO1wiLFwi4qeCXCI6XCImY2lyc2NpcjtcIixcIuKZo1wiOlwiJmNsdWJzdWl0O1wiLFwiOlwiOlwiJmNvbG9uO1wiLFwiLFwiOlwiJmNvbW1hO1wiLFwiQFwiOlwiJmNvbW1hdDtcIixcIuKIgVwiOlwiJmNvbXBsZW1lbnQ7XCIsXCLiqa1cIjpcIiZjb25nZG90O1wiLFwi8J2VlFwiOlwiJmNvcGY7XCIsXCLihJdcIjpcIiZjb3B5c3I7XCIsXCLihrVcIjpcIiZjcmFycjtcIixcIuKcl1wiOlwiJmNyb3NzO1wiLFwi8J2SuFwiOlwiJmNzY3I7XCIsXCLiq49cIjpcIiZjc3ViO1wiLFwi4quRXCI6XCImY3N1YmU7XCIsXCLiq5BcIjpcIiZjc3VwO1wiLFwi4quSXCI6XCImY3N1cGU7XCIsXCLii69cIjpcIiZjdGRvdDtcIixcIuKkuFwiOlwiJmN1ZGFycmw7XCIsXCLipLVcIjpcIiZjdWRhcnJyO1wiLFwi4oueXCI6XCImY3VybHllcXByZWM7XCIsXCLii59cIjpcIiZjdXJseWVxc3VjYztcIixcIuKGtlwiOlwiJmN1cnZlYXJyb3dsZWZ0O1wiLFwi4qS9XCI6XCImY3VsYXJycDtcIixcIuKIqlwiOlwiJmN1cDtcIixcIuKpiFwiOlwiJmN1cGJyY2FwO1wiLFwi4qmGXCI6XCImY3VwY2FwO1wiLFwi4qmKXCI6XCImY3VwY3VwO1wiLFwi4oqNXCI6XCImY3VwZG90O1wiLFwi4qmFXCI6XCImY3Vwb3I7XCIsXCLiiKrvuIBcIjpcIiZjdXBzO1wiLFwi4oa3XCI6XCImY3VydmVhcnJvd3JpZ2h0O1wiLFwi4qS8XCI6XCImY3VyYXJybTtcIixcIuKLjlwiOlwiJmN1dmVlO1wiLFwi4ouPXCI6XCImY3V3ZWQ7XCIsXCLCpFwiOlwiJmN1cnJlbjtcIixcIuKIsVwiOlwiJmN3aW50O1wiLFwi4oytXCI6XCImY3lsY3R5O1wiLFwi4qWlXCI6XCImZEhhcjtcIixcIuKAoFwiOlwiJmRhZ2dlcjtcIixcIuKEuFwiOlwiJmRhbGV0aDtcIixcIuKAkFwiOlwiJmh5cGhlbjtcIixcIuKkj1wiOlwiJnJCYXJyO1wiLFwixI9cIjpcIiZkY2Fyb247XCIsXCLQtFwiOlwiJmRjeTtcIixcIuKHilwiOlwiJmRvd25kb3duYXJyb3dzO1wiLFwi4qm3XCI6XCImZUREb3Q7XCIsXCLCsFwiOlwiJmRlZztcIixcIs60XCI6XCImZGVsdGE7XCIsXCLiprFcIjpcIiZkZW1wdHl2O1wiLFwi4qW/XCI6XCImZGZpc2h0O1wiLFwi8J2UoVwiOlwiJmRmcjtcIixcIuKZplwiOlwiJmRpYW1zO1wiLFwiz51cIjpcIiZnYW1tYWQ7XCIsXCLii7JcIjpcIiZkaXNpbjtcIixcIsO3XCI6XCImZGl2aWRlO1wiLFwi4ouHXCI6XCImZGl2b254O1wiLFwi0ZJcIjpcIiZkamN5O1wiLFwi4oyeXCI6XCImbGxjb3JuZXI7XCIsXCLijI1cIjpcIiZkbGNyb3A7XCIsJDpcIiZkb2xsYXI7XCIsXCLwnZWVXCI6XCImZG9wZjtcIixcIuKJkVwiOlwiJmVEb3Q7XCIsXCLiiLhcIjpcIiZtaW51c2Q7XCIsXCLiiJRcIjpcIiZwbHVzZG87XCIsXCLiiqFcIjpcIiZzZG90YjtcIixcIuKMn1wiOlwiJmxyY29ybmVyO1wiLFwi4oyMXCI6XCImZHJjcm9wO1wiLFwi8J2SuVwiOlwiJmRzY3I7XCIsXCLRlVwiOlwiJmRzY3k7XCIsXCLip7ZcIjpcIiZkc29sO1wiLFwixJFcIjpcIiZkc3Ryb2s7XCIsXCLii7FcIjpcIiZkdGRvdDtcIixcIuKWv1wiOlwiJnRyaWFuZ2xlZG93bjtcIixcIuKmplwiOlwiJmR3YW5nbGU7XCIsXCLRn1wiOlwiJmR6Y3k7XCIsXCLin79cIjpcIiZkemlncmFycjtcIixcIsOpXCI6XCImZWFjdXRlO1wiLFwi4qmuXCI6XCImZWFzdGVyO1wiLFwixJtcIjpcIiZlY2Fyb247XCIsXCLiiZZcIjpcIiZlcWNpcmM7XCIsXCLDqlwiOlwiJmVjaXJjO1wiLFwi4omVXCI6XCImZXFjb2xvbjtcIixcItGNXCI6XCImZWN5O1wiLFwixJdcIjpcIiZlZG90O1wiLFwi4omSXCI6XCImZmFsbGluZ2RvdHNlcTtcIixcIvCdlKJcIjpcIiZlZnI7XCIsXCLiqppcIjpcIiZlZztcIixcIsOoXCI6XCImZWdyYXZlO1wiLFwi4qqWXCI6XCImZXFzbGFudGd0cjtcIixcIuKqmFwiOlwiJmVnc2RvdDtcIixcIuKqmVwiOlwiJmVsO1wiLFwi4o+nXCI6XCImZWxpbnRlcnM7XCIsXCLihJNcIjpcIiZlbGw7XCIsXCLiqpVcIjpcIiZlcXNsYW50bGVzcztcIixcIuKql1wiOlwiJmVsc2RvdDtcIixcIsSTXCI6XCImZW1hY3I7XCIsXCLiiIVcIjpcIiZ2YXJub3RoaW5nO1wiLFwi4oCEXCI6XCImZW1zcDEzO1wiLFwi4oCFXCI6XCImZW1zcDE0O1wiLFwi4oCDXCI6XCImZW1zcDtcIixcIsWLXCI6XCImZW5nO1wiLFwi4oCCXCI6XCImZW5zcDtcIixcIsSZXCI6XCImZW9nb247XCIsXCLwnZWWXCI6XCImZW9wZjtcIixcIuKLlVwiOlwiJmVwYXI7XCIsXCLip6NcIjpcIiZlcGFyc2w7XCIsXCLiqbFcIjpcIiZlcGx1cztcIixcIs61XCI6XCImZXBzaWxvbjtcIixcIs+1XCI6XCImdmFyZXBzaWxvbjtcIixcIj1cIjpcIiZlcXVhbHM7XCIsXCLiiZ9cIjpcIiZxdWVzdGVxO1wiLFwi4qm4XCI6XCImZXF1aXZERDtcIixcIuKnpVwiOlwiJmVxdnBhcnNsO1wiLFwi4omTXCI6XCImcmlzaW5nZG90c2VxO1wiLFwi4qWxXCI6XCImZXJhcnI7XCIsXCLihK9cIjpcIiZlc2NyO1wiLFwizrdcIjpcIiZldGE7XCIsXCLDsFwiOlwiJmV0aDtcIixcIsOrXCI6XCImZXVtbDtcIixcIuKCrFwiOlwiJmV1cm87XCIsXCIhXCI6XCImZXhjbDtcIixcItGEXCI6XCImZmN5O1wiLFwi4pmAXCI6XCImZmVtYWxlO1wiLFwi76yDXCI6XCImZmZpbGlnO1wiLFwi76yAXCI6XCImZmZsaWc7XCIsXCLvrIRcIjpcIiZmZmxsaWc7XCIsXCLwnZSjXCI6XCImZmZyO1wiLFwi76yBXCI6XCImZmlsaWc7XCIsZmo6XCImZmpsaWc7XCIsXCLima1cIjpcIiZmbGF0O1wiLFwi76yCXCI6XCImZmxsaWc7XCIsXCLilrFcIjpcIiZmbHRucztcIixcIsaSXCI6XCImZm5vZjtcIixcIvCdlZdcIjpcIiZmb3BmO1wiLFwi4ouUXCI6XCImcGl0Y2hmb3JrO1wiLFwi4quZXCI6XCImZm9ya3Y7XCIsXCLiqI1cIjpcIiZmcGFydGludDtcIixcIsK9XCI6XCImaGFsZjtcIixcIuKFk1wiOlwiJmZyYWMxMztcIixcIsK8XCI6XCImZnJhYzE0O1wiLFwi4oWVXCI6XCImZnJhYzE1O1wiLFwi4oWZXCI6XCImZnJhYzE2O1wiLFwi4oWbXCI6XCImZnJhYzE4O1wiLFwi4oWUXCI6XCImZnJhYzIzO1wiLFwi4oWWXCI6XCImZnJhYzI1O1wiLFwiwr5cIjpcIiZmcmFjMzQ7XCIsXCLihZdcIjpcIiZmcmFjMzU7XCIsXCLihZxcIjpcIiZmcmFjMzg7XCIsXCLihZhcIjpcIiZmcmFjNDU7XCIsXCLihZpcIjpcIiZmcmFjNTY7XCIsXCLihZ1cIjpcIiZmcmFjNTg7XCIsXCLihZ5cIjpcIiZmcmFjNzg7XCIsXCLigYRcIjpcIiZmcmFzbDtcIixcIuKMolwiOlwiJnNmcm93bjtcIixcIvCdkrtcIjpcIiZmc2NyO1wiLFwi4qqMXCI6XCImZ3RyZXFxbGVzcztcIixcIse1XCI6XCImZ2FjdXRlO1wiLFwizrNcIjpcIiZnYW1tYTtcIixcIuKqhlwiOlwiJmd0cmFwcHJveDtcIixcIsSfXCI6XCImZ2JyZXZlO1wiLFwixJ1cIjpcIiZnY2lyYztcIixcItCzXCI6XCImZ2N5O1wiLFwixKFcIjpcIiZnZG90O1wiLFwi4qqpXCI6XCImZ2VzY2M7XCIsXCLiqoBcIjpcIiZnZXNkb3Q7XCIsXCLiqoJcIjpcIiZnZXNkb3RvO1wiLFwi4qqEXCI6XCImZ2VzZG90b2w7XCIsXCLii5vvuIBcIjpcIiZnZXNsO1wiLFwi4qqUXCI6XCImZ2VzbGVzO1wiLFwi8J2UpFwiOlwiJmdmcjtcIixcIuKEt1wiOlwiJmdpbWVsO1wiLFwi0ZNcIjpcIiZnamN5O1wiLFwi4qqSXCI6XCImZ2xFO1wiLFwi4qqlXCI6XCImZ2xhO1wiLFwi4qqkXCI6XCImZ2xqO1wiLFwi4ompXCI6XCImZ25lcXE7XCIsXCLiqopcIjpcIiZnbmFwcHJveDtcIixcIuKqiFwiOlwiJmduZXE7XCIsXCLii6dcIjpcIiZnbnNpbTtcIixcIvCdlZhcIjpcIiZnb3BmO1wiLFwi4oSKXCI6XCImZ3NjcjtcIixcIuKqjlwiOlwiJmdzaW1lO1wiLFwi4qqQXCI6XCImZ3NpbWw7XCIsXCLiqqdcIjpcIiZndGNjO1wiLFwi4qm6XCI6XCImZ3RjaXI7XCIsXCLii5dcIjpcIiZndHJkb3Q7XCIsXCLippVcIjpcIiZndGxQYXI7XCIsXCLiqbxcIjpcIiZndHF1ZXN0O1wiLFwi4qW4XCI6XCImZ3RyYXJyO1wiLFwi4omp77iAXCI6XCImZ3ZuRTtcIixcItGKXCI6XCImaGFyZGN5O1wiLFwi4qWIXCI6XCImaGFycmNpcjtcIixcIuKGrVwiOlwiJmxlZnRyaWdodHNxdWlnYXJyb3c7XCIsXCLihI9cIjpcIiZwbGFua3Y7XCIsXCLEpVwiOlwiJmhjaXJjO1wiLFwi4pmlXCI6XCImaGVhcnRzdWl0O1wiLFwi4oCmXCI6XCImbWxkcjtcIixcIuKKuVwiOlwiJmhlcmNvbjtcIixcIvCdlKVcIjpcIiZoZnI7XCIsXCLipKVcIjpcIiZzZWFyaGs7XCIsXCLipKZcIjpcIiZzd2FyaGs7XCIsXCLih79cIjpcIiZob2FycjtcIixcIuKIu1wiOlwiJmhvbXRodDtcIixcIuKGqVwiOlwiJmxhcnJoaztcIixcIuKGqlwiOlwiJnJhcnJoaztcIixcIvCdlZlcIjpcIiZob3BmO1wiLFwi4oCVXCI6XCImaG9yYmFyO1wiLFwi8J2SvVwiOlwiJmhzY3I7XCIsXCLEp1wiOlwiJmhzdHJvaztcIixcIuKBg1wiOlwiJmh5YnVsbDtcIixcIsOtXCI6XCImaWFjdXRlO1wiLFwiw65cIjpcIiZpY2lyYztcIixcItC4XCI6XCImaWN5O1wiLFwi0LVcIjpcIiZpZWN5O1wiLFwiwqFcIjpcIiZpZXhjbDtcIixcIvCdlKZcIjpcIiZpZnI7XCIsXCLDrFwiOlwiJmlncmF2ZTtcIixcIuKojFwiOlwiJnFpbnQ7XCIsXCLiiK1cIjpcIiZ0aW50O1wiLFwi4qecXCI6XCImaWluZmluO1wiLFwi4oSpXCI6XCImaWlvdGE7XCIsXCLEs1wiOlwiJmlqbGlnO1wiLFwixKtcIjpcIiZpbWFjcjtcIixcIsSxXCI6XCImaW5vZG90O1wiLFwi4oq3XCI6XCImaW1vZjtcIixcIsa1XCI6XCImaW1wZWQ7XCIsXCLihIVcIjpcIiZpbmNhcmU7XCIsXCLiiJ5cIjpcIiZpbmZpbjtcIixcIuKnnVwiOlwiJmluZmludGllO1wiLFwi4oq6XCI6XCImaW50ZXJjYWw7XCIsXCLiqJdcIjpcIiZpbnRsYXJoaztcIixcIuKovFwiOlwiJmlwcm9kO1wiLFwi0ZFcIjpcIiZpb2N5O1wiLFwixK9cIjpcIiZpb2dvbjtcIixcIvCdlZpcIjpcIiZpb3BmO1wiLFwizrlcIjpcIiZpb3RhO1wiLFwiwr9cIjpcIiZpcXVlc3Q7XCIsXCLwnZK+XCI6XCImaXNjcjtcIixcIuKLuVwiOlwiJmlzaW5FO1wiLFwi4ou1XCI6XCImaXNpbmRvdDtcIixcIuKLtFwiOlwiJmlzaW5zO1wiLFwi4ouzXCI6XCImaXNpbnN2O1wiLFwixKlcIjpcIiZpdGlsZGU7XCIsXCLRllwiOlwiJml1a2N5O1wiLFwiw69cIjpcIiZpdW1sO1wiLFwixLVcIjpcIiZqY2lyYztcIixcItC5XCI6XCImamN5O1wiLFwi8J2Up1wiOlwiJmpmcjtcIixcIsi3XCI6XCImam1hdGg7XCIsXCLwnZWbXCI6XCImam9wZjtcIixcIvCdkr9cIjpcIiZqc2NyO1wiLFwi0ZhcIjpcIiZqc2VyY3k7XCIsXCLRlFwiOlwiJmp1a2N5O1wiLFwizrpcIjpcIiZrYXBwYTtcIixcIs+wXCI6XCImdmFya2FwcGE7XCIsXCLEt1wiOlwiJmtjZWRpbDtcIixcItC6XCI6XCIma2N5O1wiLFwi8J2UqFwiOlwiJmtmcjtcIixcIsS4XCI6XCIma2dyZWVuO1wiLFwi0YVcIjpcIiZraGN5O1wiLFwi0ZxcIjpcIiZramN5O1wiLFwi8J2VnFwiOlwiJmtvcGY7XCIsXCLwnZOAXCI6XCIma3NjcjtcIixcIuKkm1wiOlwiJmxBdGFpbDtcIixcIuKkjlwiOlwiJmxCYXJyO1wiLFwi4qqLXCI6XCImbGVzc2VxcWd0cjtcIixcIuKlolwiOlwiJmxIYXI7XCIsXCLEulwiOlwiJmxhY3V0ZTtcIixcIuKmtFwiOlwiJmxhZW1wdHl2O1wiLFwizrtcIjpcIiZsYW1iZGE7XCIsXCLippFcIjpcIiZsYW5nZDtcIixcIuKqhVwiOlwiJmxlc3NhcHByb3g7XCIsXCLCq1wiOlwiJmxhcXVvO1wiLFwi4qSfXCI6XCImbGFycmJmcztcIixcIuKknVwiOlwiJmxhcnJmcztcIixcIuKGq1wiOlwiJmxvb3BhcnJvd2xlZnQ7XCIsXCLipLlcIjpcIiZsYXJycGw7XCIsXCLipbNcIjpcIiZsYXJyc2ltO1wiLFwi4oaiXCI6XCImbGVmdGFycm93dGFpbDtcIixcIuKqq1wiOlwiJmxhdDtcIixcIuKkmVwiOlwiJmxhdGFpbDtcIixcIuKqrVwiOlwiJmxhdGU7XCIsXCLiqq3vuIBcIjpcIiZsYXRlcztcIixcIuKkjFwiOlwiJmxiYXJyO1wiLFwi4p2yXCI6XCImbGJicms7XCIsXCJ7XCI6XCImbGN1YjtcIixcIltcIjpcIiZsc3FiO1wiLFwi4qaLXCI6XCImbGJya2U7XCIsXCLipo9cIjpcIiZsYnJrc2xkO1wiLFwi4qaNXCI6XCImbGJya3NsdTtcIixcIsS+XCI6XCImbGNhcm9uO1wiLFwixLxcIjpcIiZsY2VkaWw7XCIsXCLQu1wiOlwiJmxjeTtcIixcIuKktlwiOlwiJmxkY2E7XCIsXCLipadcIjpcIiZsZHJkaGFyO1wiLFwi4qWLXCI6XCImbGRydXNoYXI7XCIsXCLihrJcIjpcIiZsZHNoO1wiLFwi4omkXCI6XCImbGVxO1wiLFwi4oeHXCI6XCImbGxhcnI7XCIsXCLii4tcIjpcIiZsdGhyZWU7XCIsXCLiqqhcIjpcIiZsZXNjYztcIixcIuKpv1wiOlwiJmxlc2RvdDtcIixcIuKqgVwiOlwiJmxlc2RvdG87XCIsXCLiqoNcIjpcIiZsZXNkb3RvcjtcIixcIuKLmu+4gFwiOlwiJmxlc2c7XCIsXCLiqpNcIjpcIiZsZXNnZXM7XCIsXCLii5ZcIjpcIiZsdGRvdDtcIixcIuKlvFwiOlwiJmxmaXNodDtcIixcIvCdlKlcIjpcIiZsZnI7XCIsXCLiqpFcIjpcIiZsZ0U7XCIsXCLipapcIjpcIiZsaGFydWw7XCIsXCLiloRcIjpcIiZsaGJsaztcIixcItGZXCI6XCImbGpjeTtcIixcIuKlq1wiOlwiJmxsaGFyZDtcIixcIuKXulwiOlwiJmxsdHJpO1wiLFwixYBcIjpcIiZsbWlkb3Q7XCIsXCLijrBcIjpcIiZsbW91c3RhY2hlO1wiLFwi4omoXCI6XCImbG5lcXE7XCIsXCLiqolcIjpcIiZsbmFwcHJveDtcIixcIuKqh1wiOlwiJmxuZXE7XCIsXCLii6ZcIjpcIiZsbnNpbTtcIixcIuKfrFwiOlwiJmxvYW5nO1wiLFwi4oe9XCI6XCImbG9hcnI7XCIsXCLin7xcIjpcIiZ4bWFwO1wiLFwi4oasXCI6XCImcmFycmxwO1wiLFwi4qaFXCI6XCImbG9wYXI7XCIsXCLwnZWdXCI6XCImbG9wZjtcIixcIuKorVwiOlwiJmxvcGx1cztcIixcIuKotFwiOlwiJmxvdGltZXM7XCIsXCLiiJdcIjpcIiZsb3dhc3Q7XCIsXCLil4pcIjpcIiZsb3plbmdlO1wiLFwiKFwiOlwiJmxwYXI7XCIsXCLippNcIjpcIiZscGFybHQ7XCIsXCLipa1cIjpcIiZscmhhcmQ7XCIsXCLigI5cIjpcIiZscm07XCIsXCLiir9cIjpcIiZscnRyaTtcIixcIuKAuVwiOlwiJmxzYXF1bztcIixcIvCdk4FcIjpcIiZsc2NyO1wiLFwi4qqNXCI6XCImbHNpbWU7XCIsXCLiqo9cIjpcIiZsc2ltZztcIixcIuKAmlwiOlwiJnNicXVvO1wiLFwixYJcIjpcIiZsc3Ryb2s7XCIsXCLiqqZcIjpcIiZsdGNjO1wiLFwi4qm5XCI6XCImbHRjaXI7XCIsXCLii4lcIjpcIiZsdGltZXM7XCIsXCLipbZcIjpcIiZsdGxhcnI7XCIsXCLiqbtcIjpcIiZsdHF1ZXN0O1wiLFwi4qaWXCI6XCImbHRyUGFyO1wiLFwi4peDXCI6XCImdHJpYW5nbGVsZWZ0O1wiLFwi4qWKXCI6XCImbHVyZHNoYXI7XCIsXCLipaZcIjpcIiZsdXJ1aGFyO1wiLFwi4omo77iAXCI6XCImbHZuRTtcIixcIuKIulwiOlwiJm1ERG90O1wiLFwiwq9cIjpcIiZzdHJucztcIixcIuKZglwiOlwiJm1hbGU7XCIsXCLinKBcIjpcIiZtYWx0ZXNlO1wiLFwi4pauXCI6XCImbWFya2VyO1wiLFwi4qipXCI6XCImbWNvbW1hO1wiLFwi0LxcIjpcIiZtY3k7XCIsXCLigJRcIjpcIiZtZGFzaDtcIixcIvCdlKpcIjpcIiZtZnI7XCIsXCLihKdcIjpcIiZtaG87XCIsXCLCtVwiOlwiJm1pY3JvO1wiLFwi4quwXCI6XCImbWlkY2lyO1wiLFwi4oiSXCI6XCImbWludXM7XCIsXCLiqKpcIjpcIiZtaW51c2R1O1wiLFwi4qubXCI6XCImbWxjcDtcIixcIuKKp1wiOlwiJm1vZGVscztcIixcIvCdlZ5cIjpcIiZtb3BmO1wiLFwi8J2TglwiOlwiJm1zY3I7XCIsXCLOvFwiOlwiJm11O1wiLFwi4oq4XCI6XCImbXVtYXA7XCIsXCLii5nMuFwiOlwiJm5HZztcIixcIuKJq+KDklwiOlwiJm5HdDtcIixcIuKHjVwiOlwiJm5sQXJyO1wiLFwi4oeOXCI6XCImbmhBcnI7XCIsXCLii5jMuFwiOlwiJm5MbDtcIixcIuKJquKDklwiOlwiJm5MdDtcIixcIuKHj1wiOlwiJm5yQXJyO1wiLFwi4oqvXCI6XCImblZEYXNoO1wiLFwi4oquXCI6XCImblZkYXNoO1wiLFwixYRcIjpcIiZuYWN1dGU7XCIsXCLiiKDig5JcIjpcIiZuYW5nO1wiLFwi4qmwzLhcIjpcIiZuYXBFO1wiLFwi4omLzLhcIjpcIiZuYXBpZDtcIixcIsWJXCI6XCImbmFwb3M7XCIsXCLima5cIjpcIiZuYXR1cmFsO1wiLFwi4qmDXCI6XCImbmNhcDtcIixcIsWIXCI6XCImbmNhcm9uO1wiLFwixYZcIjpcIiZuY2VkaWw7XCIsXCLiqa3MuFwiOlwiJm5jb25nZG90O1wiLFwi4qmCXCI6XCImbmN1cDtcIixcItC9XCI6XCImbmN5O1wiLFwi4oCTXCI6XCImbmRhc2g7XCIsXCLih5dcIjpcIiZuZUFycjtcIixcIuKkpFwiOlwiJm5lYXJoaztcIixcIuKJkMy4XCI6XCImbmVkb3Q7XCIsXCLipKhcIjpcIiZ0b2VhO1wiLFwi8J2Uq1wiOlwiJm5mcjtcIixcIuKGrlwiOlwiJm5sZWZ0cmlnaHRhcnJvdztcIixcIuKrslwiOlwiJm5ocGFyO1wiLFwi4ou8XCI6XCImbmlzO1wiLFwi4ou6XCI6XCImbmlzZDtcIixcItGaXCI6XCImbmpjeTtcIixcIuKJpsy4XCI6XCImbmxlcXE7XCIsXCLihppcIjpcIiZubGVmdGFycm93O1wiLFwi4oClXCI6XCImbmxkcjtcIixcIvCdlZ9cIjpcIiZub3BmO1wiLFwiwqxcIjpcIiZub3Q7XCIsXCLii7nMuFwiOlwiJm5vdGluRTtcIixcIuKLtcy4XCI6XCImbm90aW5kb3Q7XCIsXCLii7dcIjpcIiZub3RpbnZiO1wiLFwi4ou2XCI6XCImbm90aW52YztcIixcIuKLvlwiOlwiJm5vdG5pdmI7XCIsXCLii71cIjpcIiZub3RuaXZjO1wiLFwi4qu94oOlXCI6XCImbnBhcnNsO1wiLFwi4oiCzLhcIjpcIiZucGFydDtcIixcIuKolFwiOlwiJm5wb2xpbnQ7XCIsXCLihptcIjpcIiZucmlnaHRhcnJvdztcIixcIuKks8y4XCI6XCImbnJhcnJjO1wiLFwi4oadzLhcIjpcIiZucmFycnc7XCIsXCLwnZODXCI6XCImbnNjcjtcIixcIuKKhFwiOlwiJm5zdWI7XCIsXCLiq4XMuFwiOlwiJm5zdWJzZXRlcXE7XCIsXCLiioVcIjpcIiZuc3VwO1wiLFwi4quGzLhcIjpcIiZuc3Vwc2V0ZXFxO1wiLFwiw7FcIjpcIiZudGlsZGU7XCIsXCLOvVwiOlwiJm51O1wiLFwiI1wiOlwiJm51bTtcIixcIuKEllwiOlwiJm51bWVybztcIixcIuKAh1wiOlwiJm51bXNwO1wiLFwi4oqtXCI6XCImbnZEYXNoO1wiLFwi4qSEXCI6XCImbnZIYXJyO1wiLFwi4omN4oOSXCI6XCImbnZhcDtcIixcIuKKrFwiOlwiJm52ZGFzaDtcIixcIuKJpeKDklwiOlwiJm52Z2U7XCIsXCI+4oOSXCI6XCImbnZndDtcIixcIuKnnlwiOlwiJm52aW5maW47XCIsXCLipIJcIjpcIiZudmxBcnI7XCIsXCLiiaTig5JcIjpcIiZudmxlO1wiLFwiPOKDklwiOlwiJm52bHQ7XCIsXCLiirTig5JcIjpcIiZudmx0cmllO1wiLFwi4qSDXCI6XCImbnZyQXJyO1wiLFwi4oq14oOSXCI6XCImbnZydHJpZTtcIixcIuKIvOKDklwiOlwiJm52c2ltO1wiLFwi4oeWXCI6XCImbndBcnI7XCIsXCLipKNcIjpcIiZud2FyaGs7XCIsXCLipKdcIjpcIiZud25lYXI7XCIsXCLDs1wiOlwiJm9hY3V0ZTtcIixcIsO0XCI6XCImb2NpcmM7XCIsXCLQvlwiOlwiJm9jeTtcIixcIsWRXCI6XCImb2RibGFjO1wiLFwi4qi4XCI6XCImb2RpdjtcIixcIuKmvFwiOlwiJm9kc29sZDtcIixcIsWTXCI6XCImb2VsaWc7XCIsXCLipr9cIjpcIiZvZmNpcjtcIixcIvCdlKxcIjpcIiZvZnI7XCIsXCLLm1wiOlwiJm9nb247XCIsXCLDslwiOlwiJm9ncmF2ZTtcIixcIuKngVwiOlwiJm9ndDtcIixcIuKmtVwiOlwiJm9oYmFyO1wiLFwi4qa+XCI6XCImb2xjaXI7XCIsXCLiprtcIjpcIiZvbGNyb3NzO1wiLFwi4qeAXCI6XCImb2x0O1wiLFwixY1cIjpcIiZvbWFjcjtcIixcIs+JXCI6XCImb21lZ2E7XCIsXCLOv1wiOlwiJm9taWNyb247XCIsXCLiprZcIjpcIiZvbWlkO1wiLFwi8J2VoFwiOlwiJm9vcGY7XCIsXCLiprdcIjpcIiZvcGFyO1wiLFwi4qa5XCI6XCImb3BlcnA7XCIsXCLiiKhcIjpcIiZ2ZWU7XCIsXCLiqZ1cIjpcIiZvcmQ7XCIsXCLihLRcIjpcIiZvc2NyO1wiLFwiwqpcIjpcIiZvcmRmO1wiLFwiwrpcIjpcIiZvcmRtO1wiLFwi4oq2XCI6XCImb3JpZ29mO1wiLFwi4qmWXCI6XCImb3JvcjtcIixcIuKpl1wiOlwiJm9yc2xvcGU7XCIsXCLiqZtcIjpcIiZvcnY7XCIsXCLDuFwiOlwiJm9zbGFzaDtcIixcIuKKmFwiOlwiJm9zb2w7XCIsXCLDtVwiOlwiJm90aWxkZTtcIixcIuKotlwiOlwiJm90aW1lc2FzO1wiLFwiw7ZcIjpcIiZvdW1sO1wiLFwi4oy9XCI6XCImb3ZiYXI7XCIsXCLCtlwiOlwiJnBhcmE7XCIsXCLiq7NcIjpcIiZwYXJzaW07XCIsXCLiq71cIjpcIiZwYXJzbDtcIixcItC/XCI6XCImcGN5O1wiLFwiJVwiOlwiJnBlcmNudDtcIixcIi5cIjpcIiZwZXJpb2Q7XCIsXCLigLBcIjpcIiZwZXJtaWw7XCIsXCLigLFcIjpcIiZwZXJ0ZW5rO1wiLFwi8J2UrVwiOlwiJnBmcjtcIixcIs+GXCI6XCImcGhpO1wiLFwiz5VcIjpcIiZ2YXJwaGk7XCIsXCLimI5cIjpcIiZwaG9uZTtcIixcIs+AXCI6XCImcGk7XCIsXCLPllwiOlwiJnZhcnBpO1wiLFwi4oSOXCI6XCImcGxhbmNraDtcIixcIitcIjpcIiZwbHVzO1wiLFwi4qijXCI6XCImcGx1c2FjaXI7XCIsXCLiqKJcIjpcIiZwbHVzY2lyO1wiLFwi4qilXCI6XCImcGx1c2R1O1wiLFwi4qmyXCI6XCImcGx1c2U7XCIsXCLiqKZcIjpcIiZwbHVzc2ltO1wiLFwi4qinXCI6XCImcGx1c3R3bztcIixcIuKolVwiOlwiJnBvaW50aW50O1wiLFwi8J2VoVwiOlwiJnBvcGY7XCIsXCLCo1wiOlwiJnBvdW5kO1wiLFwi4qqzXCI6XCImcHJFO1wiLFwi4qq3XCI6XCImcHJlY2FwcHJveDtcIixcIuKquVwiOlwiJnBybmFwO1wiLFwi4qq1XCI6XCImcHJuRTtcIixcIuKLqFwiOlwiJnBybnNpbTtcIixcIuKAslwiOlwiJnByaW1lO1wiLFwi4oyuXCI6XCImcHJvZmFsYXI7XCIsXCLijJJcIjpcIiZwcm9mbGluZTtcIixcIuKMk1wiOlwiJnByb2ZzdXJmO1wiLFwi4oqwXCI6XCImcHJ1cmVsO1wiLFwi8J2ThVwiOlwiJnBzY3I7XCIsXCLPiFwiOlwiJnBzaTtcIixcIuKAiFwiOlwiJnB1bmNzcDtcIixcIvCdlK5cIjpcIiZxZnI7XCIsXCLwnZWiXCI6XCImcW9wZjtcIixcIuKBl1wiOlwiJnFwcmltZTtcIixcIvCdk4ZcIjpcIiZxc2NyO1wiLFwi4qiWXCI6XCImcXVhdGludDtcIixcIj9cIjpcIiZxdWVzdDtcIixcIuKknFwiOlwiJnJBdGFpbDtcIixcIuKlpFwiOlwiJnJIYXI7XCIsXCLiiL3MsVwiOlwiJnJhY2U7XCIsXCLFlVwiOlwiJnJhY3V0ZTtcIixcIuKms1wiOlwiJnJhZW1wdHl2O1wiLFwi4qaSXCI6XCImcmFuZ2Q7XCIsXCLipqVcIjpcIiZyYW5nZTtcIixcIsK7XCI6XCImcmFxdW87XCIsXCLipbVcIjpcIiZyYXJyYXA7XCIsXCLipKBcIjpcIiZyYXJyYmZzO1wiLFwi4qSzXCI6XCImcmFycmM7XCIsXCLipJ5cIjpcIiZyYXJyZnM7XCIsXCLipYVcIjpcIiZyYXJycGw7XCIsXCLipbRcIjpcIiZyYXJyc2ltO1wiLFwi4oajXCI6XCImcmlnaHRhcnJvd3RhaWw7XCIsXCLihp1cIjpcIiZyaWdodHNxdWlnYXJyb3c7XCIsXCLipJpcIjpcIiZyYXRhaWw7XCIsXCLiiLZcIjpcIiZyYXRpbztcIixcIuKds1wiOlwiJnJiYnJrO1wiLFwifVwiOlwiJnJjdWI7XCIsXCJdXCI6XCImcnNxYjtcIixcIuKmjFwiOlwiJnJicmtlO1wiLFwi4qaOXCI6XCImcmJya3NsZDtcIixcIuKmkFwiOlwiJnJicmtzbHU7XCIsXCLFmVwiOlwiJnJjYXJvbjtcIixcIsWXXCI6XCImcmNlZGlsO1wiLFwi0YBcIjpcIiZyY3k7XCIsXCLipLdcIjpcIiZyZGNhO1wiLFwi4qWpXCI6XCImcmRsZGhhcjtcIixcIuKGs1wiOlwiJnJkc2g7XCIsXCLilq1cIjpcIiZyZWN0O1wiLFwi4qW9XCI6XCImcmZpc2h0O1wiLFwi8J2Ur1wiOlwiJnJmcjtcIixcIuKlrFwiOlwiJnJoYXJ1bDtcIixcIs+BXCI6XCImcmhvO1wiLFwiz7FcIjpcIiZ2YXJyaG87XCIsXCLih4lcIjpcIiZycmFycjtcIixcIuKLjFwiOlwiJnJ0aHJlZTtcIixcIsuaXCI6XCImcmluZztcIixcIuKAj1wiOlwiJnJsbTtcIixcIuKOsVwiOlwiJnJtb3VzdGFjaGU7XCIsXCLiq65cIjpcIiZybm1pZDtcIixcIuKfrVwiOlwiJnJvYW5nO1wiLFwi4oe+XCI6XCImcm9hcnI7XCIsXCLipoZcIjpcIiZyb3BhcjtcIixcIvCdlaNcIjpcIiZyb3BmO1wiLFwi4qiuXCI6XCImcm9wbHVzO1wiLFwi4qi1XCI6XCImcm90aW1lcztcIixcIilcIjpcIiZycGFyO1wiLFwi4qaUXCI6XCImcnBhcmd0O1wiLFwi4qiSXCI6XCImcnBwb2xpbnQ7XCIsXCLigLpcIjpcIiZyc2FxdW87XCIsXCLwnZOHXCI6XCImcnNjcjtcIixcIuKLilwiOlwiJnJ0aW1lcztcIixcIuKWuVwiOlwiJnRyaWFuZ2xlcmlnaHQ7XCIsXCLip45cIjpcIiZydHJpbHRyaTtcIixcIuKlqFwiOlwiJnJ1bHVoYXI7XCIsXCLihJ5cIjpcIiZyeDtcIixcIsWbXCI6XCImc2FjdXRlO1wiLFwi4qq0XCI6XCImc2NFO1wiLFwi4qq4XCI6XCImc3VjY2FwcHJveDtcIixcIsWhXCI6XCImc2Nhcm9uO1wiLFwixZ9cIjpcIiZzY2VkaWw7XCIsXCLFnVwiOlwiJnNjaXJjO1wiLFwi4qq2XCI6XCImc3VjY25lcXE7XCIsXCLiqrpcIjpcIiZzdWNjbmFwcHJveDtcIixcIuKLqVwiOlwiJnN1Y2Nuc2ltO1wiLFwi4qiTXCI6XCImc2Nwb2xpbnQ7XCIsXCLRgVwiOlwiJnNjeTtcIixcIuKLhVwiOlwiJnNkb3Q7XCIsXCLiqaZcIjpcIiZzZG90ZTtcIixcIuKHmFwiOlwiJnNlQXJyO1wiLFwiwqdcIjpcIiZzZWN0O1wiLFwiO1wiOlwiJnNlbWk7XCIsXCLipKlcIjpcIiZ0b3NhO1wiLFwi4py2XCI6XCImc2V4dDtcIixcIvCdlLBcIjpcIiZzZnI7XCIsXCLima9cIjpcIiZzaGFycDtcIixcItGJXCI6XCImc2hjaGN5O1wiLFwi0YhcIjpcIiZzaGN5O1wiLFwiwq1cIjpcIiZzaHk7XCIsXCLPg1wiOlwiJnNpZ21hO1wiLFwiz4JcIjpcIiZ2YXJzaWdtYTtcIixcIuKpqlwiOlwiJnNpbWRvdDtcIixcIuKqnlwiOlwiJnNpbWc7XCIsXCLiqqBcIjpcIiZzaW1nRTtcIixcIuKqnVwiOlwiJnNpbWw7XCIsXCLiqp9cIjpcIiZzaW1sRTtcIixcIuKJhlwiOlwiJnNpbW5lO1wiLFwi4qikXCI6XCImc2ltcGx1cztcIixcIuKlslwiOlwiJnNpbXJhcnI7XCIsXCLiqLNcIjpcIiZzbWFzaHA7XCIsXCLip6RcIjpcIiZzbWVwYXJzbDtcIixcIuKMo1wiOlwiJnNzbWlsZTtcIixcIuKqqlwiOlwiJnNtdDtcIixcIuKqrFwiOlwiJnNtdGU7XCIsXCLiqqzvuIBcIjpcIiZzbXRlcztcIixcItGMXCI6XCImc29mdGN5O1wiLFwiL1wiOlwiJnNvbDtcIixcIuKnhFwiOlwiJnNvbGI7XCIsXCLijL9cIjpcIiZzb2xiYXI7XCIsXCLwnZWkXCI6XCImc29wZjtcIixcIuKZoFwiOlwiJnNwYWRlc3VpdDtcIixcIuKKk++4gFwiOlwiJnNxY2FwcztcIixcIuKKlO+4gFwiOlwiJnNxY3VwcztcIixcIvCdk4hcIjpcIiZzc2NyO1wiLFwi4piGXCI6XCImc3RhcjtcIixcIuKKglwiOlwiJnN1YnNldDtcIixcIuKrhVwiOlwiJnN1YnNldGVxcTtcIixcIuKqvVwiOlwiJnN1YmRvdDtcIixcIuKrg1wiOlwiJnN1YmVkb3Q7XCIsXCLiq4FcIjpcIiZzdWJtdWx0O1wiLFwi4quLXCI6XCImc3Vic2V0bmVxcTtcIixcIuKKilwiOlwiJnN1YnNldG5lcTtcIixcIuKqv1wiOlwiJnN1YnBsdXM7XCIsXCLipblcIjpcIiZzdWJyYXJyO1wiLFwi4quHXCI6XCImc3Vic2ltO1wiLFwi4quVXCI6XCImc3Vic3ViO1wiLFwi4quTXCI6XCImc3Vic3VwO1wiLFwi4pmqXCI6XCImc3VuZztcIixcIsK5XCI6XCImc3VwMTtcIixcIsKyXCI6XCImc3VwMjtcIixcIsKzXCI6XCImc3VwMztcIixcIuKrhlwiOlwiJnN1cHNldGVxcTtcIixcIuKqvlwiOlwiJnN1cGRvdDtcIixcIuKrmFwiOlwiJnN1cGRzdWI7XCIsXCLiq4RcIjpcIiZzdXBlZG90O1wiLFwi4p+JXCI6XCImc3VwaHNvbDtcIixcIuKrl1wiOlwiJnN1cGhzdWI7XCIsXCLipbtcIjpcIiZzdXBsYXJyO1wiLFwi4quCXCI6XCImc3VwbXVsdDtcIixcIuKrjFwiOlwiJnN1cHNldG5lcXE7XCIsXCLiiotcIjpcIiZzdXBzZXRuZXE7XCIsXCLiq4BcIjpcIiZzdXBwbHVzO1wiLFwi4quIXCI6XCImc3Vwc2ltO1wiLFwi4quUXCI6XCImc3Vwc3ViO1wiLFwi4quWXCI6XCImc3Vwc3VwO1wiLFwi4oeZXCI6XCImc3dBcnI7XCIsXCLipKpcIjpcIiZzd253YXI7XCIsXCLDn1wiOlwiJnN6bGlnO1wiLFwi4oyWXCI6XCImdGFyZ2V0O1wiLFwiz4RcIjpcIiZ0YXU7XCIsXCLFpVwiOlwiJnRjYXJvbjtcIixcIsWjXCI6XCImdGNlZGlsO1wiLFwi0YJcIjpcIiZ0Y3k7XCIsXCLijJVcIjpcIiZ0ZWxyZWM7XCIsXCLwnZSxXCI6XCImdGZyO1wiLFwizrhcIjpcIiZ0aGV0YTtcIixcIs+RXCI6XCImdmFydGhldGE7XCIsXCLDvlwiOlwiJnRob3JuO1wiLFwiw5dcIjpcIiZ0aW1lcztcIixcIuKosVwiOlwiJnRpbWVzYmFyO1wiLFwi4qiwXCI6XCImdGltZXNkO1wiLFwi4oy2XCI6XCImdG9wYm90O1wiLFwi4quxXCI6XCImdG9wY2lyO1wiLFwi8J2VpVwiOlwiJnRvcGY7XCIsXCLiq5pcIjpcIiZ0b3Bmb3JrO1wiLFwi4oC0XCI6XCImdHByaW1lO1wiLFwi4pa1XCI6XCImdXRyaTtcIixcIuKJnFwiOlwiJnRyaWU7XCIsXCLil6xcIjpcIiZ0cmlkb3Q7XCIsXCLiqLpcIjpcIiZ0cmltaW51cztcIixcIuKouVwiOlwiJnRyaXBsdXM7XCIsXCLip41cIjpcIiZ0cmlzYjtcIixcIuKou1wiOlwiJnRyaXRpbWU7XCIsXCLij6JcIjpcIiZ0cnBleml1bTtcIixcIvCdk4lcIjpcIiZ0c2NyO1wiLFwi0YZcIjpcIiZ0c2N5O1wiLFwi0ZtcIjpcIiZ0c2hjeTtcIixcIsWnXCI6XCImdHN0cm9rO1wiLFwi4qWjXCI6XCImdUhhcjtcIixcIsO6XCI6XCImdWFjdXRlO1wiLFwi0Z5cIjpcIiZ1YnJjeTtcIixcIsWtXCI6XCImdWJyZXZlO1wiLFwiw7tcIjpcIiZ1Y2lyYztcIixcItGDXCI6XCImdWN5O1wiLFwixbFcIjpcIiZ1ZGJsYWM7XCIsXCLipb5cIjpcIiZ1ZmlzaHQ7XCIsXCLwnZSyXCI6XCImdWZyO1wiLFwiw7lcIjpcIiZ1Z3JhdmU7XCIsXCLiloBcIjpcIiZ1aGJsaztcIixcIuKMnFwiOlwiJnVsY29ybmVyO1wiLFwi4oyPXCI6XCImdWxjcm9wO1wiLFwi4pe4XCI6XCImdWx0cmk7XCIsXCLFq1wiOlwiJnVtYWNyO1wiLFwixbNcIjpcIiZ1b2dvbjtcIixcIvCdlaZcIjpcIiZ1b3BmO1wiLFwiz4VcIjpcIiZ1cHNpbG9uO1wiLFwi4oeIXCI6XCImdXVhcnI7XCIsXCLijJ1cIjpcIiZ1cmNvcm5lcjtcIixcIuKMjlwiOlwiJnVyY3JvcDtcIixcIsWvXCI6XCImdXJpbmc7XCIsXCLil7lcIjpcIiZ1cnRyaTtcIixcIvCdk4pcIjpcIiZ1c2NyO1wiLFwi4ouwXCI6XCImdXRkb3Q7XCIsXCLFqVwiOlwiJnV0aWxkZTtcIixcIsO8XCI6XCImdXVtbDtcIixcIuKmp1wiOlwiJnV3YW5nbGU7XCIsXCLiq6hcIjpcIiZ2QmFyO1wiLFwi4qupXCI6XCImdkJhcnY7XCIsXCLippxcIjpcIiZ2YW5ncnQ7XCIsXCLiiorvuIBcIjpcIiZ2c3VibmU7XCIsXCLiq4vvuIBcIjpcIiZ2c3VibkU7XCIsXCLiiovvuIBcIjpcIiZ2c3VwbmU7XCIsXCLiq4zvuIBcIjpcIiZ2c3VwbkU7XCIsXCLQslwiOlwiJnZjeTtcIixcIuKKu1wiOlwiJnZlZWJhcjtcIixcIuKJmlwiOlwiJnZlZWVxO1wiLFwi4ouuXCI6XCImdmVsbGlwO1wiLFwi8J2Us1wiOlwiJnZmcjtcIixcIvCdladcIjpcIiZ2b3BmO1wiLFwi8J2Ti1wiOlwiJnZzY3I7XCIsXCLipppcIjpcIiZ2emlnemFnO1wiLFwixbVcIjpcIiZ3Y2lyYztcIixcIuKpn1wiOlwiJndlZGJhcjtcIixcIuKJmVwiOlwiJndlZGdlcTtcIixcIuKEmFwiOlwiJndwO1wiLFwi8J2UtFwiOlwiJndmcjtcIixcIvCdlahcIjpcIiZ3b3BmO1wiLFwi8J2TjFwiOlwiJndzY3I7XCIsXCLwnZS1XCI6XCImeGZyO1wiLFwizr5cIjpcIiZ4aTtcIixcIuKLu1wiOlwiJnhuaXM7XCIsXCLwnZWpXCI6XCImeG9wZjtcIixcIvCdk41cIjpcIiZ4c2NyO1wiLFwiw71cIjpcIiZ5YWN1dGU7XCIsXCLRj1wiOlwiJnlhY3k7XCIsXCLFt1wiOlwiJnljaXJjO1wiLFwi0YtcIjpcIiZ5Y3k7XCIsXCLCpVwiOlwiJnllbjtcIixcIvCdlLZcIjpcIiZ5ZnI7XCIsXCLRl1wiOlwiJnlpY3k7XCIsXCLwnZWqXCI6XCImeW9wZjtcIixcIvCdk45cIjpcIiZ5c2NyO1wiLFwi0Y5cIjpcIiZ5dWN5O1wiLFwiw79cIjpcIiZ5dW1sO1wiLFwixbpcIjpcIiZ6YWN1dGU7XCIsXCLFvlwiOlwiJnpjYXJvbjtcIixcItC3XCI6XCImemN5O1wiLFwixbxcIjpcIiZ6ZG90O1wiLFwizrZcIjpcIiZ6ZXRhO1wiLFwi8J2Ut1wiOlwiJnpmcjtcIixcItC2XCI6XCImemhjeTtcIixcIuKHnVwiOlwiJnppZ3JhcnI7XCIsXCLwnZWrXCI6XCImem9wZjtcIixcIvCdk49cIjpcIiZ6c2NyO1wiLFwi4oCNXCI6XCImendqO1wiLFwi4oCMXCI6XCImenduajtcIn19fTsiLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pO2V4cG9ydHMubnVtZXJpY1VuaWNvZGVNYXA9ezA6NjU1MzMsMTI4OjgzNjQsMTMwOjgyMTgsMTMxOjQwMiwxMzI6ODIyMiwxMzM6ODIzMCwxMzQ6ODIyNCwxMzU6ODIyNSwxMzY6NzEwLDEzNzo4MjQwLDEzODozNTIsMTM5OjgyNDksMTQwOjMzOCwxNDI6MzgxLDE0NTo4MjE2LDE0Njo4MjE3LDE0Nzo4MjIwLDE0ODo4MjIxLDE0OTo4MjI2LDE1MDo4MjExLDE1MTo4MjEyLDE1Mjo3MzIsMTUzOjg0ODIsMTU0OjM1MywxNTU6ODI1MCwxNTY6MzM5LDE1ODozODIsMTU5OjM3Nn07IiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLmZyb21Db2RlUG9pbnQ9U3RyaW5nLmZyb21Db2RlUG9pbnR8fGZ1bmN0aW9uKGFzdHJhbENvZGVQb2ludCl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcigoYXN0cmFsQ29kZVBvaW50LTY1NTM2KS8xMDI0KSs1NTI5NiwoYXN0cmFsQ29kZVBvaW50LTY1NTM2KSUxMDI0KzU2MzIwKX07ZXhwb3J0cy5nZXRDb2RlUG9pbnQ9U3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdD9mdW5jdGlvbihpbnB1dCxwb3NpdGlvbil7cmV0dXJuIGlucHV0LmNvZGVQb2ludEF0KHBvc2l0aW9uKX06ZnVuY3Rpb24oaW5wdXQscG9zaXRpb24pe3JldHVybihpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKS01NTI5NikqMTAyNCtpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKzEpLTU2MzIwKzY1NTM2fTtleHBvcnRzLmhpZ2hTdXJyb2dhdGVGcm9tPTU1Mjk2O2V4cG9ydHMuaGlnaFN1cnJvZ2F0ZVRvPTU2MzE5OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2xvZy5qc1wiO1xudmFyIFdlYlNvY2tldENsaWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBmdW5jdGlvbiBXZWJTb2NrZXRDbGllbnQodXJsKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYlNvY2tldENsaWVudCk7XG4gICAgdGhpcy5jbGllbnQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gICAgdGhpcy5jbGllbnQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgbG9nLmVycm9yKGVycm9yKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBmXG4gICAqL1xuICBfY3JlYXRlQ2xhc3MoV2ViU29ja2V0Q2xpZW50LCBbe1xuICAgIGtleTogXCJvbk9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PcGVuKGYpIHtcbiAgICAgIHRoaXMuY2xpZW50Lm9ub3BlbiA9IGY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvbkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2UoZikge1xuICAgICAgdGhpcy5jbGllbnQub25jbG9zZSA9IGY7XG4gICAgfVxuXG4gICAgLy8gY2FsbCBmIHdpdGggdGhlIG1lc3NhZ2Ugc3RyaW5nIGFzIHRoZSBmaXJzdCBhcmd1bWVudFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBmXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwib25NZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVzc2FnZShmKSB7XG4gICAgICB0aGlzLmNsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmKGUuZGF0YSk7XG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gV2ViU29ja2V0Q2xpZW50O1xufSgpO1xuZXhwb3J0IHsgV2ViU29ja2V0Q2xpZW50IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHsgdmFyIGtleSA9IF90b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpOyByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHsgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0OyB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmIChwcmltICE9PSB1bmRlZmluZWQpIHsgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7IGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7IH1cbi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnksIF9fd2VicGFja19oYXNoX18gKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwid2VicGFjay9tb2R1bGVcIiAvPlxuaW1wb3J0IHdlYnBhY2tIb3RMb2cgZnJvbSBcIndlYnBhY2svaG90L2xvZy5qc1wiO1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tIFwiLi91dGlscy9zdHJpcEFuc2kuanNcIjtcbmltcG9ydCBwYXJzZVVSTCBmcm9tIFwiLi91dGlscy9wYXJzZVVSTC5qc1wiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi9zb2NrZXQuanNcIjtcbmltcG9ydCB7IGZvcm1hdFByb2JsZW0sIGNyZWF0ZU92ZXJsYXkgfSBmcm9tIFwiLi9vdmVybGF5LmpzXCI7XG5pbXBvcnQgeyBsb2csIGxvZ0VuYWJsZWRGZWF0dXJlcywgc2V0TG9nTGV2ZWwgfSBmcm9tIFwiLi91dGlscy9sb2cuanNcIjtcbmltcG9ydCBzZW5kTWVzc2FnZSBmcm9tIFwiLi91dGlscy9zZW5kTWVzc2FnZS5qc1wiO1xuaW1wb3J0IHJlbG9hZEFwcCBmcm9tIFwiLi91dGlscy9yZWxvYWRBcHAuanNcIjtcbmltcG9ydCBjcmVhdGVTb2NrZXRVUkwgZnJvbSBcIi4vdXRpbHMvY3JlYXRlU29ja2V0VVJMLmpzXCI7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICogQHByb3BlcnR5IHtib29sZWFufSBob3RcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbGl2ZVJlbG9hZFxuICogQHByb3BlcnR5IHtib29sZWFufSBwcm9ncmVzc1xuICogQHByb3BlcnR5IHtib29sZWFuIHwgeyB3YXJuaW5ncz86IGJvb2xlYW4sIGVycm9ycz86IGJvb2xlYW4sIHJ1bnRpbWVFcnJvcnM/OiBib29sZWFuLCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lPzogc3RyaW5nIH19IG92ZXJsYXlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbG9nZ2luZ11cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcmVjb25uZWN0XVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3RhdHVzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGlzVW5sb2FkaW5nXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VycmVudEhhc2hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbcHJldmlvdXNIYXNoXVxuICovXG5cbi8qKlxuICogQHR5cGUge1N0YXR1c31cbiAqL1xudmFyIHN0YXR1cyA9IHtcbiAgaXNVbmxvYWRpbmc6IGZhbHNlLFxuICAvLyBUT0RPIFdvcmthcm91bmQgZm9yIHdlYnBhY2sgdjQsIGBfX3dlYnBhY2tfaGFzaF9fYCBpcyBub3QgcmVwbGFjZWQgd2l0aG91dCBIb3RNb2R1bGVSZXBsYWNlbWVudFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGN1cnJlbnRIYXNoOiB0eXBlb2YgX193ZWJwYWNrX2hhc2hfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19oYXNoX18gOiBcIlwiXG59O1xuXG4vKiogQHR5cGUge09wdGlvbnN9ICovXG52YXIgb3B0aW9ucyA9IHtcbiAgaG90OiBmYWxzZSxcbiAgbGl2ZVJlbG9hZDogZmFsc2UsXG4gIHByb2dyZXNzOiBmYWxzZSxcbiAgb3ZlcmxheTogZmFsc2Vcbn07XG52YXIgcGFyc2VkUmVzb3VyY2VRdWVyeSA9IHBhcnNlVVJMKF9fcmVzb3VyY2VRdWVyeSk7XG52YXIgZW5hYmxlZEZlYXR1cmVzID0ge1xuICBcIkhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcIjogZmFsc2UsXG4gIFwiTGl2ZSBSZWxvYWRpbmdcIjogZmFsc2UsXG4gIFByb2dyZXNzOiBmYWxzZSxcbiAgT3ZlcmxheTogZmFsc2Vcbn07XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5ob3QgPT09IFwidHJ1ZVwiKSB7XG4gIG9wdGlvbnMuaG90ID0gdHJ1ZTtcbiAgZW5hYmxlZEZlYXR1cmVzW1wiSG90IE1vZHVsZSBSZXBsYWNlbWVudFwiXSA9IHRydWU7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeVtcImxpdmUtcmVsb2FkXCJdID09PSBcInRydWVcIikge1xuICBvcHRpb25zLmxpdmVSZWxvYWQgPSB0cnVlO1xuICBlbmFibGVkRmVhdHVyZXNbXCJMaXZlIFJlbG9hZGluZ1wiXSA9IHRydWU7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5wcm9ncmVzcyA9PT0gXCJ0cnVlXCIpIHtcbiAgb3B0aW9ucy5wcm9ncmVzcyA9IHRydWU7XG4gIGVuYWJsZWRGZWF0dXJlcy5Qcm9ncmVzcyA9IHRydWU7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5vdmVybGF5KSB7XG4gIHRyeSB7XG4gICAgb3B0aW9ucy5vdmVybGF5ID0gSlNPTi5wYXJzZShwYXJzZWRSZXNvdXJjZVF1ZXJ5Lm92ZXJsYXkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nLmVycm9yKFwiRXJyb3IgcGFyc2luZyBvdmVybGF5IG9wdGlvbnMgZnJvbSByZXNvdXJjZSBxdWVyeTpcIiwgZSk7XG4gIH1cblxuICAvLyBGaWxsIGluIGRlZmF1bHQgXCJ0cnVlXCIgcGFyYW1zIGZvciBwYXJ0aWFsbHktc3BlY2lmaWVkIG9iamVjdHMuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgb3B0aW9ucy5vdmVybGF5ID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBlcnJvcnM6IHRydWUsXG4gICAgICB3YXJuaW5nczogdHJ1ZSxcbiAgICAgIHJ1bnRpbWVFcnJvcnM6IHRydWVcbiAgICB9LCBvcHRpb25zLm92ZXJsYXkpO1xuICB9XG4gIGVuYWJsZWRGZWF0dXJlcy5PdmVybGF5ID0gdHJ1ZTtcbn1cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmxvZ2dpbmcpIHtcbiAgb3B0aW9ucy5sb2dnaW5nID0gcGFyc2VkUmVzb3VyY2VRdWVyeS5sb2dnaW5nO1xufVxuaWYgKHR5cGVvZiBwYXJzZWRSZXNvdXJjZVF1ZXJ5LnJlY29ubmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBvcHRpb25zLnJlY29ubmVjdCA9IE51bWJlcihwYXJzZWRSZXNvdXJjZVF1ZXJ5LnJlY29ubmVjdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsXG4gKi9cbmZ1bmN0aW9uIHNldEFsbExvZ0xldmVsKGxldmVsKSB7XG4gIC8vIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIEhNUiBsb2dnZXIgb3BlcmF0ZSBzZXBhcmF0ZWx5IGZyb20gZGV2IHNlcnZlciBsb2dnZXJcbiAgd2VicGFja0hvdExvZy5zZXRMb2dMZXZlbChsZXZlbCA9PT0gXCJ2ZXJib3NlXCIgfHwgbGV2ZWwgPT09IFwibG9nXCIgPyBcImluZm9cIiA6IGxldmVsKTtcbiAgc2V0TG9nTGV2ZWwobGV2ZWwpO1xufVxuaWYgKG9wdGlvbnMubG9nZ2luZykge1xuICBzZXRBbGxMb2dMZXZlbChvcHRpb25zLmxvZ2dpbmcpO1xufVxubG9nRW5hYmxlZEZlYXR1cmVzKGVuYWJsZWRGZWF0dXJlcyk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICBzdGF0dXMuaXNVbmxvYWRpbmcgPSB0cnVlO1xufSk7XG52YXIgb3ZlcmxheSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBjcmVhdGVPdmVybGF5KHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwib2JqZWN0XCIgPyB7XG4gIHRydXN0ZWRUeXBlc1BvbGljeU5hbWU6IG9wdGlvbnMub3ZlcmxheS50cnVzdGVkVHlwZXNQb2xpY3lOYW1lLFxuICBjYXRjaFJ1bnRpbWVFcnJvcjogb3B0aW9ucy5vdmVybGF5LnJ1bnRpbWVFcnJvcnNcbn0gOiB7XG4gIHRydXN0ZWRUeXBlc1BvbGljeU5hbWU6IGZhbHNlLFxuICBjYXRjaFJ1bnRpbWVFcnJvcjogb3B0aW9ucy5vdmVybGF5XG59KSA6IHtcbiAgc2VuZDogZnVuY3Rpb24gc2VuZCgpIHt9XG59O1xudmFyIG9uU29ja2V0TWVzc2FnZSA9IHtcbiAgaG90OiBmdW5jdGlvbiBob3QoKSB7XG4gICAgaWYgKHBhcnNlZFJlc291cmNlUXVlcnkuaG90ID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5ob3QgPSB0cnVlO1xuICB9LFxuICBsaXZlUmVsb2FkOiBmdW5jdGlvbiBsaXZlUmVsb2FkKCkge1xuICAgIGlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5W1wibGl2ZS1yZWxvYWRcIl0gPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmxpdmVSZWxvYWQgPSB0cnVlO1xuICB9LFxuICBpbnZhbGlkOiBmdW5jdGlvbiBpbnZhbGlkKCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIHVwZGF0ZWQuIFJlY29tcGlsaW5nLi4uXCIpO1xuXG4gICAgLy8gRml4ZXMgIzEwNDIuIG92ZXJsYXkgZG9lc24ndCBjbGVhciBpZiBlcnJvcnMgYXJlIGZpeGVkIGJ1dCB3YXJuaW5ncyByZW1haW4uXG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5zZW5kKHtcbiAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZW5kTWVzc2FnZShcIkludmFsaWRcIik7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgaGFzaDogZnVuY3Rpb24gaGFzaChfaGFzaCkge1xuICAgIHN0YXR1cy5wcmV2aW91c0hhc2ggPSBzdGF0dXMuY3VycmVudEhhc2g7XG4gICAgc3RhdHVzLmN1cnJlbnRIYXNoID0gX2hhc2g7XG4gIH0sXG4gIGxvZ2dpbmc6IHNldEFsbExvZ0xldmVsLFxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgb3ZlcmxheTogZnVuY3Rpb24gb3ZlcmxheSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5vdmVybGF5ID0gdmFsdWU7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICovXG4gIHJlY29ubmVjdDogZnVuY3Rpb24gcmVjb25uZWN0KHZhbHVlKSB7XG4gICAgaWYgKHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0ID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5yZWNvbm5lY3QgPSB2YWx1ZTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHByb2dyZXNzOiBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSkge1xuICAgIG9wdGlvbnMucHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7eyBwbHVnaW5OYW1lPzogc3RyaW5nLCBwZXJjZW50OiBudW1iZXIsIG1zZzogc3RyaW5nIH19IGRhdGFcbiAgICovXG4gIFwicHJvZ3Jlc3MtdXBkYXRlXCI6IGZ1bmN0aW9uIHByb2dyZXNzVXBkYXRlKGRhdGEpIHtcbiAgICBpZiAob3B0aW9ucy5wcm9ncmVzcykge1xuICAgICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZGF0YS5wbHVnaW5OYW1lID8gXCJbXCIuY29uY2F0KGRhdGEucGx1Z2luTmFtZSwgXCJdIFwiKSA6IFwiXCIpLmNvbmNhdChkYXRhLnBlcmNlbnQsIFwiJSAtIFwiKS5jb25jYXQoZGF0YS5tc2csIFwiLlwiKSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKFwiUHJvZ3Jlc3NcIiwgZGF0YSk7XG4gIH0sXG4gIFwic3RpbGwtb2tcIjogZnVuY3Rpb24gc3RpbGxPaygpIHtcbiAgICBsb2cuaW5mbyhcIk5vdGhpbmcgY2hhbmdlZC5cIik7XG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5zZW5kKHtcbiAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZW5kTWVzc2FnZShcIlN0aWxsT2tcIik7XG4gIH0sXG4gIG9rOiBmdW5jdGlvbiBvaygpIHtcbiAgICBzZW5kTWVzc2FnZShcIk9rXCIpO1xuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgIHR5cGU6IFwiRElTTUlTU1wiXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVsb2FkQXBwKG9wdGlvbnMsIHN0YXR1cyk7XG4gIH0sXG4gIC8vIFRPRE86IHJlbW92ZSBpbiB2NSBpbiBmYXZvciBvZiAnc3RhdGljLWNoYW5nZWQnXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVxuICAgKi9cbiAgXCJjb250ZW50LWNoYW5nZWRcIjogZnVuY3Rpb24gY29udGVudENoYW5nZWQoZmlsZSkge1xuICAgIGxvZy5pbmZvKFwiXCIuY29uY2F0KGZpbGUgPyBcIlxcXCJcIi5jb25jYXQoZmlsZSwgXCJcXFwiXCIpIDogXCJDb250ZW50XCIsIFwiIGZyb20gc3RhdGljIGRpcmVjdG9yeSB3YXMgY2hhbmdlZC4gUmVsb2FkaW5nLi4uXCIpKTtcbiAgICBzZWxmLmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICovXG4gIFwic3RhdGljLWNoYW5nZWRcIjogZnVuY3Rpb24gc3RhdGljQ2hhbmdlZChmaWxlKSB7XG4gICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZmlsZSA/IFwiXFxcIlwiLmNvbmNhdChmaWxlLCBcIlxcXCJcIikgOiBcIkNvbnRlbnRcIiwgXCIgZnJvbSBzdGF0aWMgZGlyZWN0b3J5IHdhcyBjaGFuZ2VkLiBSZWxvYWRpbmcuLi5cIikpO1xuICAgIHNlbGYubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yW119IHdhcm5pbmdzXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAgICovXG4gIHdhcm5pbmdzOiBmdW5jdGlvbiB3YXJuaW5ncyhfd2FybmluZ3MsIHBhcmFtcykge1xuICAgIGxvZy53YXJuKFwiV2FybmluZ3Mgd2hpbGUgY29tcGlsaW5nLlwiKTtcbiAgICB2YXIgcHJpbnRhYmxlV2FybmluZ3MgPSBfd2FybmluZ3MubWFwKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIF9mb3JtYXRQcm9ibGVtID0gZm9ybWF0UHJvYmxlbShcIndhcm5pbmdcIiwgZXJyb3IpLFxuICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbS5oZWFkZXIsXG4gICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGhlYWRlciwgXCJcXG5cIikuY29uY2F0KHN0cmlwQW5zaShib2R5KSk7XG4gICAgfSk7XG4gICAgc2VuZE1lc3NhZ2UoXCJXYXJuaW5nc1wiLCBwcmludGFibGVXYXJuaW5ncyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmludGFibGVXYXJuaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLndhcm4ocHJpbnRhYmxlV2FybmluZ3NbaV0pO1xuICAgIH1cbiAgICB2YXIgbmVlZFNob3dPdmVybGF5Rm9yV2FybmluZ3MgPSB0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMub3ZlcmxheSA6IG9wdGlvbnMub3ZlcmxheSAmJiBvcHRpb25zLm92ZXJsYXkud2FybmluZ3M7XG4gICAgaWYgKG5lZWRTaG93T3ZlcmxheUZvcldhcm5pbmdzKSB7XG4gICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICB0eXBlOiBcIkJVSUxEX0VSUk9SXCIsXG4gICAgICAgIGxldmVsOiBcIndhcm5pbmdcIixcbiAgICAgICAgbWVzc2FnZXM6IF93YXJuaW5nc1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXZlbnRSZWxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVsb2FkQXBwKG9wdGlvbnMsIHN0YXR1cyk7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yW119IGVycm9yc1xuICAgKi9cbiAgZXJyb3JzOiBmdW5jdGlvbiBlcnJvcnMoX2Vycm9ycykge1xuICAgIGxvZy5lcnJvcihcIkVycm9ycyB3aGlsZSBjb21waWxpbmcuIFJlbG9hZCBwcmV2ZW50ZWQuXCIpO1xuICAgIHZhciBwcmludGFibGVFcnJvcnMgPSBfZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfZm9ybWF0UHJvYmxlbTIgPSBmb3JtYXRQcm9ibGVtKFwiZXJyb3JcIiwgZXJyb3IpLFxuICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbTIuaGVhZGVyLFxuICAgICAgICBib2R5ID0gX2Zvcm1hdFByb2JsZW0yLmJvZHk7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoaGVhZGVyLCBcIlxcblwiKS5jb25jYXQoc3RyaXBBbnNpKGJvZHkpKTtcbiAgICB9KTtcbiAgICBzZW5kTWVzc2FnZShcIkVycm9yc1wiLCBwcmludGFibGVFcnJvcnMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpbnRhYmxlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsb2cuZXJyb3IocHJpbnRhYmxlRXJyb3JzW2ldKTtcbiAgICB9XG4gICAgdmFyIG5lZWRTaG93T3ZlcmxheUZvckVycm9ycyA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5vdmVybGF5IDogb3B0aW9ucy5vdmVybGF5ICYmIG9wdGlvbnMub3ZlcmxheS5lcnJvcnM7XG4gICAgaWYgKG5lZWRTaG93T3ZlcmxheUZvckVycm9ycykge1xuICAgICAgb3ZlcmxheS5zZW5kKHtcbiAgICAgICAgdHlwZTogXCJCVUlMRF9FUlJPUlwiLFxuICAgICAgICBsZXZlbDogXCJlcnJvclwiLFxuICAgICAgICBtZXNzYWdlczogX2Vycm9yc1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAgICovXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcihfZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoX2Vycm9yKTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGxvZy5pbmZvKFwiRGlzY29ubmVjdGVkIVwiKTtcbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICB0eXBlOiBcIkRJU01JU1NcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKFwiQ2xvc2VcIik7XG4gIH1cbn07XG52YXIgc29ja2V0VVJMID0gY3JlYXRlU29ja2V0VVJMKHBhcnNlZFJlc291cmNlUXVlcnkpO1xuc29ja2V0KHNvY2tldFVSTCwgb25Tb2NrZXRNZXNzYWdlLCBvcHRpb25zLnJlY29ubmVjdCk7IiwiLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cblxuXG4vKipcbiAqIENsaWVudCBzdHViIGZvciB0YXBhYmxlIFN5bmNCYWlsSG9va1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNsaWVudFRhcGFibGVTeW5jQmFpbEhvb2soKSB7XG4gIHJldHVybiB7XG4gICAgY2FsbDogZnVuY3Rpb24gY2FsbCgpIHt9XG4gIH07XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgcmV0dXJuIGFycjI7XG59XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0Wyh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbnZhciBMb2dUeXBlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGVycm9yOiAvKiogQHR5cGUge1wiZXJyb3JcIn0gKi9cImVycm9yXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIHdhcm46IC8qKiBAdHlwZSB7XCJ3YXJuXCJ9ICovXCJ3YXJuXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGluZm86IC8qKiBAdHlwZSB7XCJpbmZvXCJ9ICovXCJpbmZvXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGxvZzogLyoqIEB0eXBlIHtcImxvZ1wifSAqL1wibG9nXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGRlYnVnOiAvKiogQHR5cGUge1wiZGVidWdcIn0gKi9cImRlYnVnXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG5cbiAgdHJhY2U6IC8qKiBAdHlwZSB7XCJ0cmFjZVwifSAqL1widHJhY2VcIixcbiAgLy8gbm8gYXJndW1lbnRzXG5cbiAgZ3JvdXA6IC8qKiBAdHlwZSB7XCJncm91cFwifSAqL1wiZ3JvdXBcIixcbiAgLy8gW2xhYmVsXVxuICBncm91cENvbGxhcHNlZDogLyoqIEB0eXBlIHtcImdyb3VwQ29sbGFwc2VkXCJ9ICovXCJncm91cENvbGxhcHNlZFwiLFxuICAvLyBbbGFiZWxdXG4gIGdyb3VwRW5kOiAvKiogQHR5cGUge1wiZ3JvdXBFbmRcIn0gKi9cImdyb3VwRW5kXCIsXG4gIC8vIFtsYWJlbF1cblxuICBwcm9maWxlOiAvKiogQHR5cGUge1wicHJvZmlsZVwifSAqL1wicHJvZmlsZVwiLFxuICAvLyBbcHJvZmlsZU5hbWVdXG4gIHByb2ZpbGVFbmQ6IC8qKiBAdHlwZSB7XCJwcm9maWxlRW5kXCJ9ICovXCJwcm9maWxlRW5kXCIsXG4gIC8vIFtwcm9maWxlTmFtZV1cblxuICB0aW1lOiAvKiogQHR5cGUge1widGltZVwifSAqL1widGltZVwiLFxuICAvLyBuYW1lLCB0aW1lIGFzIFtzZWNvbmRzLCBuYW5vc2Vjb25kc11cblxuICBjbGVhcjogLyoqIEB0eXBlIHtcImNsZWFyXCJ9ICovXCJjbGVhclwiLFxuICAvLyBubyBhcmd1bWVudHNcbiAgc3RhdHVzOiAvKiogQHR5cGUge1wic3RhdHVzXCJ9ICovXCJzdGF0dXNcIiAvLyBtZXNzYWdlLCBhcmd1bWVudHNcbn0pO1xuXG5leHBvcnRzLkxvZ1R5cGUgPSBMb2dUeXBlO1xuXG4vKiogQHR5cGVkZWYge3R5cGVvZiBMb2dUeXBlW2tleW9mIHR5cGVvZiBMb2dUeXBlXX0gTG9nVHlwZUVudW0gKi9cblxudmFyIExPR19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIHJhdyBsb2cgbWV0aG9kXCIpO1xudmFyIFRJTUVSU19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIHRpbWVzXCIpO1xudmFyIFRJTUVSU19BR0dSRUdBVEVTX1NZTUJPTCA9ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pKFwid2VicGFjayBsb2dnZXIgYWdncmVnYXRlZCB0aW1lc1wiKTtcbnZhciBXZWJwYWNrTG9nZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oTG9nVHlwZUVudW0sIGFueVtdPSk6IHZvaWR9IGxvZyBsb2cgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcgfCBmdW5jdGlvbigpOiBzdHJpbmcpOiBXZWJwYWNrTG9nZ2VyfSBnZXRDaGlsZExvZ2dlciBmdW5jdGlvbiB0byBjcmVhdGUgY2hpbGQgbG9nZ2VyXG4gICAqL1xuICBmdW5jdGlvbiBXZWJwYWNrTG9nZ2VyKGxvZywgZ2V0Q2hpbGRMb2dnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VicGFja0xvZ2dlcik7XG4gICAgdGhpc1tMT0dfU1lNQk9MXSA9IGxvZztcbiAgICB0aGlzLmdldENoaWxkTG9nZ2VyID0gZ2V0Q2hpbGRMb2dnZXI7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFdlYnBhY2tMb2dnZXIsIFt7XG4gICAga2V5OiBcImVycm9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZXJyb3IsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3YXJuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLndhcm4sIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmluZm8sIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsb2dcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5sb2csIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWJ1Z1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZGVidWcsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhc3NlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXNzZXJ0KGFzc2VydGlvbikge1xuICAgICAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgICBhcmdzW19rZXk2IC0gMV0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5lcnJvciwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRyYWNlLCBbXCJUcmFjZVwiXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmNsZWFyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXR1cygpIHtcbiAgICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuc3RhdHVzLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjgpLCBfa2V5OCA9IDA7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBDb2xsYXBzZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBDb2xsYXBzZWQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OV0gPSBhcmd1bWVudHNbX2tleTldO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwQ29sbGFwc2VkLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBFbmQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMTAgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4xMCksIF9rZXkxMCA9IDA7IF9rZXkxMCA8IF9sZW4xMDsgX2tleTEwKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MTBdID0gYXJndW1lbnRzW19rZXkxMF07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZ3JvdXBFbmQsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcm9maWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2ZpbGUobGFiZWwpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5wcm9maWxlLCBbbGFiZWxdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJvZmlsZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9maWxlRW5kKGxhYmVsKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUucHJvZmlsZUVuZCwgW2xhYmVsXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZShsYWJlbCkge1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXSA9IHRoaXNbVElNRVJTX1NZTUJPTF0gfHwgbmV3IE1hcCgpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5zZXQobGFiZWwsIHByb2Nlc3MuaHJ0aW1lKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lTG9nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVMb2cobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUxvZygpXCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudGltZSwgW2xhYmVsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRpbWUpKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUVuZChsYWJlbCkge1xuICAgICAgdmFyIHByZXYgPSB0aGlzW1RJTUVSU19TWU1CT0xdICYmIHRoaXNbVElNRVJTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICghcHJldikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsICdcIi5jb25jYXQobGFiZWwsIFwiJyBmb3IgV2VicGFja0xvZ2dlci50aW1lRW5kKClcIikpO1xuICAgICAgfVxuICAgICAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZShwcmV2KTtcbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0uZGVsZXRlKGxhYmVsKTtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50aW1lLCBbbGFiZWxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGltZSkpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUFnZ3JlZ2F0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lQWdncmVnYXRlKGxhYmVsKSB7XG4gICAgICB2YXIgcHJldiA9IHRoaXNbVElNRVJTX1NZTUJPTF0gJiYgdGhpc1tUSU1FUlNfU1lNQk9MXS5nZXQobGFiZWwpO1xuICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWwgJ1wiLmNvbmNhdChsYWJlbCwgXCInIGZvciBXZWJwYWNrTG9nZ2VyLnRpbWVBZ2dyZWdhdGUoKVwiKSk7XG4gICAgICB9XG4gICAgICB2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKHByZXYpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdIHx8IG5ldyBNYXAoKTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aW1lWzFdICsgY3VycmVudFsxXSA+IDFlOSkge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXSArIDE7XG4gICAgICAgICAgdGltZVsxXSA9IHRpbWVbMV0gLSAxZTkgKyBjdXJyZW50WzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXTtcbiAgICAgICAgICB0aW1lWzFdICs9IGN1cnJlbnRbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5zZXQobGFiZWwsIHRpbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lQWdncmVnYXRlRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVBZ2dyZWdhdGVFbmQobGFiZWwpIHtcbiAgICAgIGlmICh0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdmFyIHRpbWUgPSB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICh0aW1lID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gV2VicGFja0xvZ2dlcjtcbn0oKTtcbmV4cG9ydHMuTG9nZ2VyID0gV2VicGFja0xvZ2dlcjtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL2NyZWF0ZUNvbnNvbGVMb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cblxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlclsodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanNcIiksXG4gIExvZ1R5cGUgPSBfcmVxdWlyZS5Mb2dUeXBlO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uLy4uL2RlY2xhcmF0aW9ucy9XZWJwYWNrT3B0aW9uc1wiKS5GaWx0ZXJJdGVtVHlwZXN9IEZpbHRlckl0ZW1UeXBlcyAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi8uLi9kZWNsYXJhdGlvbnMvV2VicGFja09wdGlvbnNcIikuRmlsdGVyVHlwZXN9IEZpbHRlclR5cGVzICovXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4vTG9nZ2VyXCIpLkxvZ1R5cGVFbnVtfSBMb2dUeXBlRW51bSAqL1xuXG4vKiogQHR5cGVkZWYge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IEZpbHRlckZ1bmN0aW9uICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gTG9nZ2VyQ29uc29sZVxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOiB2b2lkfSBjbGVhclxuICogQHByb3BlcnR5IHtmdW5jdGlvbigpOiB2b2lkfSB0cmFjZVxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGluZm9cbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBsb2dcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSB3YXJuXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZXJyb3JcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBDb2xsYXBzZWRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gZ3JvdXBFbmRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gc3RhdHVzXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IHByb2ZpbGVcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gcHJvZmlsZUVuZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBsb2dUaW1lXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBMb2dnZXJPcHRpb25zXG4gKiBAcHJvcGVydHkge2ZhbHNlfHRydWV8XCJub25lXCJ8XCJlcnJvclwifFwid2FyblwifFwiaW5mb1wifFwibG9nXCJ8XCJ2ZXJib3NlXCJ9IGxldmVsIGxvZ2xldmVsXG4gKiBAcHJvcGVydHkge0ZpbHRlclR5cGVzfGJvb2xlYW59IGRlYnVnIGZpbHRlciBmb3IgZGVidWcgbG9nZ2luZ1xuICogQHByb3BlcnR5IHtMb2dnZXJDb25zb2xlfSBjb25zb2xlIHRoZSBjb25zb2xlIHRvIGxvZyB0b1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtGaWx0ZXJJdGVtVHlwZXN9IGl0ZW0gYW4gaW5wdXQgaXRlbVxuICogQHJldHVybnMge0ZpbHRlckZ1bmN0aW9ufSBmaWx0ZXIgZnVuY3Rpb25cbiAqL1xudmFyIGZpbHRlclRvRnVuY3Rpb24gPSBmdW5jdGlvbiBmaWx0ZXJUb0Z1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJbXFxcXFxcXFwvXVwiLmNvbmNhdChpdGVtLnJlcGxhY2UoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gICAgL1stW1xcXXt9KCkqKz8uXFxcXF4kfF0vZywgXCJcXFxcJCZcIiksIFwiKFtcXFxcXFxcXC9dfCR8IXxcXFxcPylcIikpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWRlbnQpIHtcbiAgICAgIHJldHVybiByZWdFeHAudGVzdChpZGVudCk7XG4gICAgfTtcbiAgfVxuICBpZiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgaXRlbS50ZXN0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkZW50KSB7XG4gICAgICByZXR1cm4gaXRlbS50ZXN0KGlkZW50KTtcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcImJvb2xlYW5cIikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbnZhciBMb2dMZXZlbCA9IHtcbiAgbm9uZTogNixcbiAgZmFsc2U6IDYsXG4gIGVycm9yOiA1LFxuICB3YXJuOiA0LFxuICBpbmZvOiAzLFxuICBsb2c6IDIsXG4gIHRydWU6IDIsXG4gIHZlcmJvc2U6IDFcbn07XG5cbi8qKlxuICogQHBhcmFtIHtMb2dnZXJPcHRpb25zfSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBMb2dUeXBlRW51bSwgYW55W10pOiB2b2lkfSBsb2dnaW5nIGZ1bmN0aW9uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYkbGV2ZWwgPSBfcmVmLmxldmVsLFxuICAgIGxldmVsID0gX3JlZiRsZXZlbCA9PT0gdm9pZCAwID8gXCJpbmZvXCIgOiBfcmVmJGxldmVsLFxuICAgIF9yZWYkZGVidWcgPSBfcmVmLmRlYnVnLFxuICAgIGRlYnVnID0gX3JlZiRkZWJ1ZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlYnVnLFxuICAgIGNvbnNvbGUgPSBfcmVmLmNvbnNvbGU7XG4gIHZhciBkZWJ1Z0ZpbHRlcnMgPSB0eXBlb2YgZGVidWcgPT09IFwiYm9vbGVhblwiID8gW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVidWc7XG4gIH1dIDogLyoqIEB0eXBlIHtGaWx0ZXJJdGVtVHlwZXNbXX0gKi9bXS5jb25jYXQoZGVidWcpLm1hcChmaWx0ZXJUb0Z1bmN0aW9uKTtcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIHZhciBsb2dsZXZlbCA9IExvZ0xldmVsW1wiXCIuY29uY2F0KGxldmVsKV0gfHwgMDtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbG9nZ2VyXG4gICAqIEBwYXJhbSB7TG9nVHlwZUVudW19IHR5cGUgdHlwZSBvZiB0aGUgbG9nIGVudHJ5XG4gICAqIEBwYXJhbSB7YW55W119IGFyZ3MgYXJndW1lbnRzIG9mIHRoZSBsb2cgZW50cnlcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICB2YXIgbG9nZ2VyID0gZnVuY3Rpb24gbG9nZ2VyKG5hbWUsIHR5cGUsIGFyZ3MpIHtcbiAgICB2YXIgbGFiZWxlZEFyZ3MgPSBmdW5jdGlvbiBsYWJlbGVkQXJncygpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gW1wiW1wiLmNvbmNhdChuYW1lLCBcIl0gXCIpLmNvbmNhdChhcmdzWzBdKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzLnNsaWNlKDEpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtcIltcIi5jb25jYXQobmFtZSwgXCJdXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGRlYnVnID0gZGVidWdGaWx0ZXJzLnNvbWUoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKG5hbWUpO1xuICAgIH0pO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMb2dUeXBlLmRlYnVnOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUubG9nOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmluZm86XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5pbmZvKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZS53YXJuOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwud2FybikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUuZXJyb3I6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5lcnJvcikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnRyYWNlOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUuZ3JvdXBDb2xsYXBzZWQ6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLnZlcmJvc2UpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwQ29sbGFwc2VkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgTG9nVHlwZS5ncm91cDpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5ncm91cCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUuZ3JvdXAuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwRW5kOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwRW5kID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnRpbWU6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgICAgdmFyIG1zID0gYXJnc1sxXSAqIDEwMDAgKyBhcmdzWzJdIC8gMTAwMDAwMDtcbiAgICAgICAgICB2YXIgbXNnID0gXCJbXCIuY29uY2F0KG5hbWUsIFwiXSBcIikuY29uY2F0KGFyZ3NbMF0sIFwiOiBcIikuY29uY2F0KG1zLCBcIiBtc1wiKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUubG9nVGltZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZ1RpbWUobXNnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgTG9nVHlwZS5wcm9maWxlOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5wcm9maWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5wcm9maWxlLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUucHJvZmlsZUVuZDpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUucHJvZmlsZUVuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUucHJvZmlsZUVuZC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmNsZWFyOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmNsZWFyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnN0YXR1czpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmluZm8pIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnN0YXR1cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgTG9nVHlwZSBcIi5jb25jYXQodHlwZSkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG52YXIgU3luY0JhaWxIb29rID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgdGFwYWJsZS9saWIvU3luY0JhaWxIb29rICovIFwiLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanNcIik7XG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzXCIpLFxuICBMb2dnZXIgPSBfcmVxdWlyZS5Mb2dnZXI7XG52YXIgY3JlYXRlQ29uc29sZUxvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlQ29uc29sZUxvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qc1wiKTtcblxuLyoqIEB0eXBlIHtjcmVhdGVDb25zb2xlTG9nZ2VyLkxvZ2dlck9wdGlvbnN9ICovXG52YXIgY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zID0ge1xuICBsZXZlbDogXCJpbmZvXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY29uc29sZTogY29uc29sZVxufTtcbnZhciBjdXJyZW50RGVmYXVsdExvZ2dlciA9IGNyZWF0ZUNvbnNvbGVMb2dnZXIoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBsb2dnZXJcbiAqIEByZXR1cm5zIHtMb2dnZXJ9IGEgbG9nZ2VyXG4gKi9cbmV4cG9ydHMuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBMb2dnZXIoZnVuY3Rpb24gKHR5cGUsIGFyZ3MpIHtcbiAgICBpZiAoZXhwb3J0cy5ob29rcy5sb2cuY2FsbChuYW1lLCB0eXBlLCBhcmdzKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjdXJyZW50RGVmYXVsdExvZ2dlcihuYW1lLCB0eXBlLCBhcmdzKTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uIChjaGlsZE5hbWUpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5nZXRMb2dnZXIoXCJcIi5jb25jYXQobmFtZSwgXCIvXCIpLmNvbmNhdChjaGlsZE5hbWUpKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Y3JlYXRlQ29uc29sZUxvZ2dlci5Mb2dnZXJPcHRpb25zfSBvcHRpb25zIG5ldyBvcHRpb25zLCBtZXJnZSB3aXRoIG9sZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0cy5jb25maWd1cmVEZWZhdWx0TG9nZ2VyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgX2V4dGVuZHMoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zLCBvcHRpb25zKTtcbiAgY3VycmVudERlZmF1bHRMb2dnZXIgPSBjcmVhdGVDb25zb2xlTG9nZ2VyKGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucyk7XG59O1xuZXhwb3J0cy5ob29rcyA9IHtcbiAgbG9nOiBuZXcgU3luY0JhaWxIb29rKFtcIm9yaWdpblwiLCBcInR5cGVcIiwgXCJhcmdzXCJdKVxufTtcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gXHR9KTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuLyoqKioqKi8gXHRcdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfVxuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG4vLyBUaGlzIGVudHJ5IG5lZWQgdG8gYmUgd3JhcHBlZCBpbiBhbiBJSUZFIGJlY2F1c2UgaXQgbmVlZCB0byBiZSBpc29sYXRlZCBhZ2FpbnN0IG90aGVyIG1vZHVsZXMgaW4gdGhlIGNodW5rLlxuIWZ1bmN0aW9uKCkge1xuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIC8qIHJlZXhwb3J0IGRlZmF1bHQgZXhwb3J0IGZyb20gbmFtZWQgbW9kdWxlICovIHdlYnBhY2tfbGliX2xvZ2dpbmdfcnVudGltZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fOyB9XG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciB3ZWJwYWNrX2xpYl9sb2dnaW5nX3J1bnRpbWVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHdlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qc1wiKTtcblxufSgpO1xudmFyIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X18gPSBleHBvcnRzO1xuZm9yKHZhciBpIGluIF9fd2VicGFja19leHBvcnRzX18pIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X19baV0gPSBfX3dlYnBhY2tfZXhwb3J0c19fW2ldO1xuaWYoX193ZWJwYWNrX2V4cG9ydHNfXy5fX2VzTW9kdWxlKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyB9KSgpXG47IiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7IHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTsgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7IGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDsgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7IHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpOyBpZiAodHlwZW9mIHJlcyAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlczsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpOyB9XG4vLyBUaGUgZXJyb3Igb3ZlcmxheSBpcyBpbnNwaXJlZCAoYW5kIG1vc3RseSBjb3BpZWQpIGZyb20gQ3JlYXRlIFJlYWN0IEFwcCAoaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29raW5jdWJhdG9yL2NyZWF0ZS1yZWFjdC1hcHApXG4vLyBUaGV5LCBpbiB0dXJuLCBnb3QgaW5zcGlyZWQgYnkgd2VicGFjay1ob3QtbWlkZGxld2FyZSAoaHR0cHM6Ly9naXRodWIuY29tL2dsZW5qYW1pbi93ZWJwYWNrLWhvdC1taWRkbGV3YXJlKS5cblxuaW1wb3J0IGFuc2lIVE1MIGZyb20gXCJhbnNpLWh0bWwtY29tbXVuaXR5XCI7XG5pbXBvcnQgeyBlbmNvZGUgfSBmcm9tIFwiaHRtbC1lbnRpdGllc1wiO1xuaW1wb3J0IHsgbGlzdGVuVG9SdW50aW1lRXJyb3IsIHBhcnNlRXJyb3JUb1N0YWNrcyB9IGZyb20gXCIuL292ZXJsYXkvcnVudGltZS1lcnJvci5qc1wiO1xuaW1wb3J0IGNyZWF0ZU92ZXJsYXlNYWNoaW5lIGZyb20gXCIuL292ZXJsYXkvc3RhdGUtbWFjaGluZS5qc1wiO1xuaW1wb3J0IHsgY29udGFpbmVyU3R5bGUsIGRpc21pc3NCdXR0b25TdHlsZSwgaGVhZGVyU3R5bGUsIGlmcmFtZVN0eWxlLCBtc2dTdHlsZXMsIG1zZ1RleHRTdHlsZSwgbXNnVHlwZVN0eWxlIH0gZnJvbSBcIi4vb3ZlcmxheS9zdHlsZXMuanNcIjtcbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbXCJ0cmFuc3BhcmVudFwiLCBcInRyYW5zcGFyZW50XCJdLFxuICBibGFjazogXCIxODE4MThcIixcbiAgcmVkOiBcIkUzNjA0OVwiLFxuICBncmVlbjogXCJCM0NCNzRcIixcbiAgeWVsbG93OiBcIkZGRDA4MFwiLFxuICBibHVlOiBcIjdDQUZDMlwiLFxuICBtYWdlbnRhOiBcIjdGQUNDQVwiLFxuICBjeWFuOiBcIkMzQzJFRlwiLFxuICBsaWdodGdyZXk6IFwiRUJFN0UzXCIsXG4gIGRhcmtncmV5OiBcIjZENzg5MVwiXG59O1xuYW5zaUhUTUwuc2V0Q29sb3JzKGNvbG9ycyk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nICB8IHsgZmlsZT86IHN0cmluZywgbW9kdWxlTmFtZT86IHN0cmluZywgbG9jPzogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nOyBzdGFjaz86IHN0cmluZ1tdIH19IGl0ZW1cbiAqIEByZXR1cm5zIHt7IGhlYWRlcjogc3RyaW5nLCBib2R5OiBzdHJpbmcgfX1cbiAqL1xuZnVuY3Rpb24gZm9ybWF0UHJvYmxlbSh0eXBlLCBpdGVtKSB7XG4gIHZhciBoZWFkZXIgPSB0eXBlID09PSBcIndhcm5pbmdcIiA/IFwiV0FSTklOR1wiIDogXCJFUlJPUlwiO1xuICB2YXIgYm9keSA9IFwiXCI7XG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGJvZHkgKz0gaXRlbTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmlsZSA9IGl0ZW0uZmlsZSB8fCBcIlwiO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgIHZhciBtb2R1bGVOYW1lID0gaXRlbS5tb2R1bGVOYW1lID8gaXRlbS5tb2R1bGVOYW1lLmluZGV4T2YoXCIhXCIpICE9PSAtMSA/IFwiXCIuY29uY2F0KGl0ZW0ubW9kdWxlTmFtZS5yZXBsYWNlKC9eKFxcc3xcXFMpKiEvLCBcIlwiKSwgXCIgKFwiKS5jb25jYXQoaXRlbS5tb2R1bGVOYW1lLCBcIilcIikgOiBcIlwiLmNvbmNhdChpdGVtLm1vZHVsZU5hbWUpIDogXCJcIjtcbiAgICB2YXIgbG9jID0gaXRlbS5sb2M7XG4gICAgaGVhZGVyICs9IFwiXCIuY29uY2F0KG1vZHVsZU5hbWUgfHwgZmlsZSA/IFwiIGluIFwiLmNvbmNhdChtb2R1bGVOYW1lID8gXCJcIi5jb25jYXQobW9kdWxlTmFtZSkuY29uY2F0KGZpbGUgPyBcIiAoXCIuY29uY2F0KGZpbGUsIFwiKVwiKSA6IFwiXCIpIDogZmlsZSkuY29uY2F0KGxvYyA/IFwiIFwiLmNvbmNhdChsb2MpIDogXCJcIikgOiBcIlwiKTtcbiAgICBib2R5ICs9IGl0ZW0ubWVzc2FnZSB8fCBcIlwiO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uc3RhY2spKSB7XG4gICAgaXRlbS5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChzdGFjaykge1xuICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBib2R5ICs9IFwiXFxyXFxuXCIuY29uY2F0KHN0YWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIGJvZHk6IGJvZHlcbiAgfTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDcmVhdGVPdmVybGF5T3B0aW9uc1xuICogQHByb3BlcnR5IHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtjYXRjaFJ1bnRpbWVFcnJvcl1cbiAqL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0NyZWF0ZU92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gKi9cbnZhciBjcmVhdGVPdmVybGF5ID0gZnVuY3Rpb24gY3JlYXRlT3ZlcmxheShvcHRpb25zKSB7XG4gIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xuICB2YXIgaWZyYW1lQ29udGFpbmVyRWxlbWVudDtcbiAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXG4gIHZhciBjb250YWluZXJFbGVtZW50O1xuICAvKiogQHR5cGUge0FycmF5PChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gdm9pZD59ICovXG4gIHZhciBvbkxvYWRRdWV1ZSA9IFtdO1xuICAvKiogQHR5cGUge1RydXN0ZWRUeXBlUG9saWN5IHwgdW5kZWZpbmVkfSAqL1xuICB2YXIgb3ZlcmxheVRydXN0ZWRUeXBlc1BvbGljeTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlXG4gICAqL1xuICBmdW5jdGlvbiBhcHBseVN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZVtwcm9wXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcih0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKSB7XG4gICAgLy8gRW5hYmxlIFRydXN0ZWQgVHlwZXMgaWYgdGhleSBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gICAgaWYgKHdpbmRvdy50cnVzdGVkVHlwZXMpIHtcbiAgICAgIG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kgPSB3aW5kb3cudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSh0cnVzdGVkVHlwZXNQb2xpY3lOYW1lIHx8IFwid2VicGFjay1kZXYtc2VydmVyI292ZXJsYXlcIiwge1xuICAgICAgICBjcmVhdGVIVE1MOiBmdW5jdGlvbiBjcmVhdGVIVE1MKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5pZCA9IFwid2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5XCI7XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgYXBwbHlTdHlsZShpZnJhbWVDb250YWluZXJFbGVtZW50LCBpZnJhbWVTdHlsZSk7XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGVudEVsZW1lbnQgPSAvKiogQHR5cGUge0RvY3VtZW50fSAqL1xuICAgICAgLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudH0gKi9cbiAgICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuY29udGVudERvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250YWluZXJFbGVtZW50ID0gLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cbiAgICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgICBpZnJhbWVDb250YWluZXJFbGVtZW50LmNvbnRlbnREb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGVudEVsZW1lbnQuaWQgPSBcIndlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheS1kaXZcIjtcbiAgICAgIGFwcGx5U3R5bGUoY29udGVudEVsZW1lbnQsIGNvbnRhaW5lclN0eWxlKTtcbiAgICAgIHZhciBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGhlYWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJDb21waWxlZCB3aXRoIHByb2JsZW1zOlwiO1xuICAgICAgYXBwbHlTdHlsZShoZWFkZXJFbGVtZW50LCBoZWFkZXJTdHlsZSk7XG4gICAgICB2YXIgY2xvc2VCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFwcGx5U3R5bGUoY2xvc2VCdXR0b25FbGVtZW50LCBkaXNtaXNzQnV0dG9uU3R5bGUpO1xuICAgICAgY2xvc2VCdXR0b25FbGVtZW50LmlubmVyVGV4dCA9IFwiw5dcIjtcbiAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hcmlhTGFiZWwgPSBcIkRpc21pc3NcIjtcbiAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgb3ZlcmxheVNlcnZpY2Uuc2VuZCh7XG4gICAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuICAgICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25FbGVtZW50KTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvKiogQHR5cGUge0RvY3VtZW50fSAqL1xuICAgICAgLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudH0gKi9cbiAgICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuY29udGVudERvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xuICAgICAgb25Mb2FkUXVldWUuZm9yRWFjaChmdW5jdGlvbiAob25Mb2FkKSB7XG4gICAgICAgIG9uTG9hZCggLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gKi9jb250ZW50RWxlbWVudCk7XG4gICAgICB9KTtcbiAgICAgIG9uTG9hZFF1ZXVlID0gW107XG5cbiAgICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgICBpZnJhbWVDb250YWluZXJFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkfSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZU92ZXJsYXlFeGlzdHMoY2FsbGJhY2ssIHRydXN0ZWRUeXBlc1BvbGljeU5hbWUpIHtcbiAgICBpZiAoY29udGFpbmVyRWxlbWVudCkge1xuICAgICAgY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgLy8gRXZlcnl0aGluZyBpcyByZWFkeSwgY2FsbCB0aGUgY2FsbGJhY2sgcmlnaHQgYXdheS5cbiAgICAgIGNhbGxiYWNrKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkxvYWRRdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICBpZiAoaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVDb250YWluZXIodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSk7XG4gIH1cblxuICAvLyBTdWNjZXNzZnVsIGNvbXBpbGF0aW9uLlxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIGlmICghaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGFuZCByZXNldCBpbnRlcm5hbCBzdGF0ZS5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xuICAgIGNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgLy8gQ29tcGlsYXRpb24gd2l0aCBlcnJvcnMgKGUuZy4gc3ludGF4IGVycm9yIG9yIG1pc3NpbmcgbW9kdWxlcykuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZyAgfCB7IG1vZHVsZUlkZW50aWZpZXI/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyB9Pn0gbWVzc2FnZXNcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBzaG93KHR5cGUsIG1lc3NhZ2VzLCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKSB7XG4gICAgZW5zdXJlT3ZlcmxheUV4aXN0cyhmdW5jdGlvbiAoKSB7XG4gICAgICBtZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHZhciBlbnRyeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNnU3R5bGUgPSB0eXBlID09PSBcIndhcm5pbmdcIiA/IG1zZ1N0eWxlcy53YXJuaW5nIDogbXNnU3R5bGVzLmVycm9yO1xuICAgICAgICBhcHBseVN0eWxlKGVudHJ5RWxlbWVudCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtc2dTdHlsZSksIHt9LCB7XG4gICAgICAgICAgcGFkZGluZzogXCIxcmVtIDFyZW0gMS41cmVtIDFyZW1cIlxuICAgICAgICB9KSk7XG4gICAgICAgIHZhciB0eXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBfZm9ybWF0UHJvYmxlbSA9IGZvcm1hdFByb2JsZW0odHlwZSwgbWVzc2FnZSksXG4gICAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0uaGVhZGVyLFxuICAgICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuICAgICAgICB0eXBlRWxlbWVudC5pbm5lclRleHQgPSBoZWFkZXI7XG4gICAgICAgIGFwcGx5U3R5bGUodHlwZUVsZW1lbnQsIG1zZ1R5cGVTdHlsZSk7XG4gICAgICAgIGlmIChtZXNzYWdlLm1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICBhcHBseVN0eWxlKHR5cGVFbGVtZW50LCB7XG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gZWxlbWVudC5kYXRhc2V0IG5vdCBzdXBwb3J0ZWQgaW4gSUVcbiAgICAgICAgICB0eXBlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhbi1vcGVuXCIsIHRydWUpO1xuICAgICAgICAgIHR5cGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmZXRjaChcIi93ZWJwYWNrLWRldi1zZXJ2ZXIvb3Blbi1lZGl0b3I/ZmlsZU5hbWU9XCIuY29uY2F0KG1lc3NhZ2UubW9kdWxlSWRlbnRpZmllcikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSBpdCBsb29rIHNpbWlsYXIgdG8gb3VyIHRlcm1pbmFsLlxuICAgICAgICB2YXIgdGV4dCA9IGFuc2lIVE1MKGVuY29kZShib2R5KSk7XG4gICAgICAgIHZhciBtZXNzYWdlVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBseVN0eWxlKG1lc3NhZ2VUZXh0Tm9kZSwgbXNnVGV4dFN0eWxlKTtcbiAgICAgICAgbWVzc2FnZVRleHROb2RlLmlubmVySFRNTCA9IG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kgPyBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodGV4dCkgOiB0ZXh0O1xuICAgICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQodHlwZUVsZW1lbnQpO1xuICAgICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGVudHJ5RWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9LCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKTtcbiAgfVxuICB2YXIgb3ZlcmxheVNlcnZpY2UgPSBjcmVhdGVPdmVybGF5TWFjaGluZSh7XG4gICAgc2hvd092ZXJsYXk6IGZ1bmN0aW9uIHNob3dPdmVybGF5KF9yZWYpIHtcbiAgICAgIHZhciBfcmVmJGxldmVsID0gX3JlZi5sZXZlbCxcbiAgICAgICAgbGV2ZWwgPSBfcmVmJGxldmVsID09PSB2b2lkIDAgPyBcImVycm9yXCIgOiBfcmVmJGxldmVsLFxuICAgICAgICBtZXNzYWdlcyA9IF9yZWYubWVzc2FnZXM7XG4gICAgICByZXR1cm4gc2hvdyhsZXZlbCwgbWVzc2FnZXMsIG9wdGlvbnMudHJ1c3RlZFR5cGVzUG9saWN5TmFtZSk7XG4gICAgfSxcbiAgICBoaWRlT3ZlcmxheTogaGlkZVxuICB9KTtcbiAgaWYgKG9wdGlvbnMuY2F0Y2hSdW50aW1lRXJyb3IpIHtcbiAgICBsaXN0ZW5Ub1J1bnRpbWVFcnJvcihmdW5jdGlvbiAoZXJyb3JFdmVudCkge1xuICAgICAgLy8gZXJyb3IgcHJvcGVydHkgbWF5IGJlIGVtcHR5IGluIG9sZGVyIGJyb3dzZXIgbGlrZSBJRVxuICAgICAgdmFyIGVycm9yID0gZXJyb3JFdmVudC5lcnJvcixcbiAgICAgICAgbWVzc2FnZSA9IGVycm9yRXZlbnQubWVzc2FnZTtcbiAgICAgIGlmICghZXJyb3IgJiYgIW1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGVycm9yT2JqZWN0ID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKGVycm9yIHx8IG1lc3NhZ2UpO1xuICAgICAgb3ZlcmxheVNlcnZpY2Uuc2VuZCh7XG4gICAgICAgIHR5cGU6IFwiUlVOVElNRV9FUlJPUlwiLFxuICAgICAgICBtZXNzYWdlczogW3tcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvck9iamVjdC5tZXNzYWdlLFxuICAgICAgICAgIHN0YWNrOiBwYXJzZUVycm9yVG9TdGFja3MoZXJyb3JPYmplY3QpXG4gICAgICAgIH1dXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb3ZlcmxheVNlcnZpY2U7XG59O1xuZXhwb3J0IHsgZm9ybWF0UHJvYmxlbSwgY3JlYXRlT3ZlcmxheSB9OyIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpOyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykgeyB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7IHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkgeyBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7IHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkgeyB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTsgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTsgfVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTdGF0ZURlZmluaXRpb25zXG4gKiBAcHJvcGVydHkge3tbZXZlbnQ6IHN0cmluZ106IHsgdGFyZ2V0OiBzdHJpbmc7IGFjdGlvbnM/OiBBcnJheTxzdHJpbmc+IH19fSBbb25dXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gKiBAcHJvcGVydHkge3tbc3RhdGU6IHN0cmluZ106IFN0YXRlRGVmaW5pdGlvbnN9fSBzdGF0ZXNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBjb250ZXh0O1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGluaXRpYWxcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEltcGxlbWVudGF0aW9uXG4gKiBAcHJvcGVydHkge3tbYWN0aW9uTmFtZTogc3RyaW5nXTogKGN0eDogb2JqZWN0LCBldmVudDogYW55KSA9PiBvYmplY3R9fSBhY3Rpb25zXG4gKi9cblxuLyoqXG4gKiBBIHNpbXBsaWZpZWQgYGNyZWF0ZU1hY2hpbmVgIGZyb20gYEB4c3RhdGUvZnNtYCB3aXRoIHRoZSBmb2xsb3dpbmcgZGlmZmVyZW5jZXM6XG4gKlxuICogIC0gdGhlIHJldHVybmVkIG1hY2hpbmUgaXMgdGVjaG5pY2FsbHkgYSBcInNlcnZpY2VcIi4gTm8gYGludGVycHJldChtYWNoaW5lKS5zdGFydCgpYCBpcyBuZWVkZWQuXG4gKiAgLSB0aGUgc3RhdGUgZGVmaW5pdGlvbiBvbmx5IHN1cHBvcnQgYG9uYCBhbmQgdGFyZ2V0IG11c3QgYmUgZGVjbGFyZWQgd2l0aCB7IHRhcmdldDogJ25leHRTdGF0ZScsIGFjdGlvbnM6IFtdIH0gZXhwbGljaXRseS5cbiAqICAtIGV2ZW50IHBhc3NlZCB0byBgc2VuZGAgbXVzdCBiZSBhbiBvYmplY3Qgd2l0aCBgdHlwZWAgcHJvcGVydHkuXG4gKiAgLSBhY3Rpb25zIGltcGxlbWVudGF0aW9uIHdpbGwgYmUgW2Fzc2lnbiBhY3Rpb25dKGh0dHBzOi8veHN0YXRlLmpzLm9yZy9kb2NzL2d1aWRlcy9jb250ZXh0Lmh0bWwjYXNzaWduLWFjdGlvbikgaWYgeW91IHJldHVybiBhbnkgdmFsdWUuXG4gKiAgRG8gbm90IHJldHVybiBhbnl0aGluZyBpZiB5b3UganVzdCB3YW50IHRvIGludm9rZSBzaWRlIGVmZmVjdC5cbiAqXG4gKiBUaGUgZ29hbCBvZiB0aGlzIGN1c3RvbSBmdW5jdGlvbiBpcyB0byBhdm9pZCBpbnN0YWxsaW5nIHRoZSBlbnRpcmUgYCd4c3RhdGUvZnNtJ2AgcGFja2FnZSwgd2hpbGUgZW5hYmxpbmcgbW9kZWxpbmcgdXNpbmdcbiAqIHN0YXRlIG1hY2hpbmUuIFlvdSBjYW4gY29weSB0aGUgZmlyc3QgcGFyYW1ldGVyIGludG8gdGhlIGVkaXRvciBhdCBodHRwczovL3N0YXRlbHkuYWkvdml6IHRvIHZpc3VhbGl6ZSB0aGUgc3RhdGUgbWFjaGluZS5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAqIEBwYXJhbSB7SW1wbGVtZW50YXRpb259IGltcGxlbWVudGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1hY2hpbmUoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIHN0YXRlcyA9IF9yZWYuc3RhdGVzLFxuICAgIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgaW5pdGlhbCA9IF9yZWYuaW5pdGlhbDtcbiAgdmFyIGFjdGlvbnMgPSBfcmVmMi5hY3Rpb25zO1xuICB2YXIgY3VycmVudFN0YXRlID0gaW5pdGlhbDtcbiAgdmFyIGN1cnJlbnRDb250ZXh0ID0gY29udGV4dDtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBmdW5jdGlvbiBzZW5kKGV2ZW50KSB7XG4gICAgICB2YXIgY3VycmVudFN0YXRlT24gPSBzdGF0ZXNbY3VycmVudFN0YXRlXS5vbjtcbiAgICAgIHZhciB0cmFuc2l0aW9uQ29uZmlnID0gY3VycmVudFN0YXRlT24gJiYgY3VycmVudFN0YXRlT25bZXZlbnQudHlwZV07XG4gICAgICBpZiAodHJhbnNpdGlvbkNvbmZpZykge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSB0cmFuc2l0aW9uQ29uZmlnLnRhcmdldDtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25Db25maWcuYWN0aW9ucykge1xuICAgICAgICAgIHRyYW5zaXRpb25Db25maWcuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3ROYW1lKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uSW1wbCA9IGFjdGlvbnNbYWN0TmFtZV07XG4gICAgICAgICAgICB2YXIgbmV4dENvbnRleHRWYWx1ZSA9IGFjdGlvbkltcGwgJiYgYWN0aW9uSW1wbChjdXJyZW50Q29udGV4dCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKG5leHRDb250ZXh0VmFsdWUpIHtcbiAgICAgICAgICAgICAgY3VycmVudENvbnRleHQgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGN1cnJlbnRDb250ZXh0KSwgbmV4dENvbnRleHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWNoaW5lOyIsIi8qKlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRXJyb3JUb1N0YWNrcyhlcnJvcikge1xuICBpZiAoIWVycm9yIHx8ICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJwYXJzZUVycm9yVG9TdGFja3MgZXhwZWN0cyBFcnJvciBvYmplY3RcIik7XG4gIH1cbiAgaWYgKHR5cGVvZiBlcnJvci5zdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBlcnJvci5zdGFjay5zcGxpdChcIlxcblwiKS5maWx0ZXIoZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAgICByZXR1cm4gc3RhY2sgIT09IFwiRXJyb3I6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBjYWxsYmFjayBFcnJvckNhbGxiYWNrXG4gKiBAcGFyYW0ge0Vycm9yRXZlbnR9IGVycm9yXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gbGlzdGVuVG9SdW50aW1lRXJyb3IoY2FsbGJhY2spIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBjYWxsYmFjayk7XG4gIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgY2FsbGJhY2spO1xuICB9O1xufVxuZXhwb3J0IHsgbGlzdGVuVG9SdW50aW1lRXJyb3IsIHBhcnNlRXJyb3JUb1N0YWNrcyB9OyIsImltcG9ydCBjcmVhdGVNYWNoaW5lIGZyb20gXCIuL2ZzbS5qc1wiO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNob3dPdmVybGF5RGF0YVxuICogQHByb3BlcnR5IHsnd2FybmluZycgfCAnZXJyb3InfSBsZXZlbFxuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmcgIHwgeyBtb2R1bGVJZGVudGlmaWVyPzogc3RyaW5nLCBtb2R1bGVOYW1lPzogc3RyaW5nLCBsb2M/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcgfT59IG1lc3NhZ2VzXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDcmVhdGVPdmVybGF5TWFjaGluZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7KGRhdGE6IFNob3dPdmVybGF5RGF0YSkgPT4gdm9pZH0gc2hvd092ZXJsYXlcbiAqIEBwcm9wZXJ0eSB7KCkgPT4gdm9pZH0gaGlkZU92ZXJsYXlcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7Q3JlYXRlT3ZlcmxheU1hY2hpbmVPcHRpb25zfSBvcHRpb25zXG4gKi9cbnZhciBjcmVhdGVPdmVybGF5TWFjaGluZSA9IGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXlNYWNoaW5lKG9wdGlvbnMpIHtcbiAgdmFyIGhpZGVPdmVybGF5ID0gb3B0aW9ucy5oaWRlT3ZlcmxheSxcbiAgICBzaG93T3ZlcmxheSA9IG9wdGlvbnMuc2hvd092ZXJsYXk7XG4gIHZhciBvdmVybGF5TWFjaGluZSA9IGNyZWF0ZU1hY2hpbmUoe1xuICAgIGluaXRpYWw6IFwiaGlkZGVuXCIsXG4gICAgY29udGV4dDoge1xuICAgICAgbGV2ZWw6IFwiZXJyb3JcIixcbiAgICAgIG1lc3NhZ2VzOiBbXVxuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBoaWRkZW46IHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBCVUlMRF9FUlJPUjoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImRpc3BsYXlCdWlsZEVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJzZXRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBSVU5USU1FX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheVJ1bnRpbWVFcnJvclwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wic2V0TWVzc2FnZXNcIiwgXCJzaG93T3ZlcmxheVwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlCdWlsZEVycm9yOiB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgRElTTUlTUzoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiZGlzbWlzc01lc3NhZ2VzXCIsIFwiaGlkZU92ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEJVSUxEX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheUJ1aWxkRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFwcGVuZE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5UnVudGltZUVycm9yOiB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgRElTTUlTUzoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiZGlzbWlzc01lc3NhZ2VzXCIsIFwiaGlkZU92ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJVTlRJTUVfRVJST1I6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJkaXNwbGF5UnVudGltZUVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJhcHBlbmRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBCVUlMRF9FUlJPUjoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImRpc3BsYXlCdWlsZEVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJzZXRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgYWN0aW9uczoge1xuICAgICAgZGlzbWlzc01lc3NhZ2VzOiBmdW5jdGlvbiBkaXNtaXNzTWVzc2FnZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgIGxldmVsOiBcImVycm9yXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBhcHBlbmRNZXNzYWdlczogZnVuY3Rpb24gYXBwZW5kTWVzc2FnZXMoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogY29udGV4dC5tZXNzYWdlcy5jb25jYXQoZXZlbnQubWVzc2FnZXMpLFxuICAgICAgICAgIGxldmVsOiBldmVudC5sZXZlbCB8fCBjb250ZXh0LmxldmVsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc2V0TWVzc2FnZXM6IGZ1bmN0aW9uIHNldE1lc3NhZ2VzKGNvbnRleHQsIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZXM6IGV2ZW50Lm1lc3NhZ2VzLFxuICAgICAgICAgIGxldmVsOiBldmVudC5sZXZlbCB8fCBjb250ZXh0LmxldmVsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgaGlkZU92ZXJsYXk6IGhpZGVPdmVybGF5LFxuICAgICAgc2hvd092ZXJsYXk6IHNob3dPdmVybGF5XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG92ZXJsYXlNYWNoaW5lO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU92ZXJsYXlNYWNoaW5lOyIsIi8vIHN0eWxlcyBhcmUgaW5zcGlyZWQgYnkgYHJlYWN0LWVycm9yLW92ZXJsYXlgXG5cbnZhciBtc2dTdHlsZXMgPSB7XG4gIGVycm9yOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjA2LCAxNywgMzgsIDAuMSlcIixcbiAgICBjb2xvcjogXCIjZmNjZmNmXCJcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MSwgMjQ1LCAxODAsIDAuMSlcIixcbiAgICBjb2xvcjogXCIjZmJmNWI0XCJcbiAgfVxufTtcbnZhciBpZnJhbWVTdHlsZSA9IHtcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICB3aWR0aDogXCIxMDB2d1wiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgXCJ6LWluZGV4XCI6IDk5OTk5OTk5OTlcbn07XG52YXIgY29udGFpbmVyU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgcmlnaHQ6IDAsXG4gIGJvdHRvbTogMCxcbiAgd2lkdGg6IFwiMTAwdndcIixcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIGZvbnRTaXplOiBcImxhcmdlXCIsXG4gIHBhZGRpbmc6IFwiMnJlbSAycmVtIDRyZW0gMnJlbVwiLFxuICBsaW5lSGVpZ2h0OiBcIjEuMlwiLFxuICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXG4gIG92ZXJmbG93OiBcImF1dG9cIixcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC45KVwiLFxuICBjb2xvcjogXCJ3aGl0ZVwiXG59O1xudmFyIGhlYWRlclN0eWxlID0ge1xuICBjb2xvcjogXCIjZTgzYjQ2XCIsXG4gIGZvbnRTaXplOiBcIjJlbVwiLFxuICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXG4gIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiLFxuICBtYXJnaW46IFwiMCAycmVtIDJyZW0gMFwiLFxuICBmbGV4OiBcIjAgMCBhdXRvXCIsXG4gIG1heEhlaWdodDogXCI1MCVcIixcbiAgb3ZlcmZsb3c6IFwiYXV0b1wiXG59O1xudmFyIGRpc21pc3NCdXR0b25TdHlsZSA9IHtcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICBsaW5lSGVpZ2h0OiBcIjFyZW1cIixcbiAgZm9udFNpemU6IFwiMS41cmVtXCIsXG4gIHBhZGRpbmc6IFwiMXJlbVwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICByaWdodDogMCxcbiAgdG9wOiAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgYm9yZGVyOiBcIm5vbmVcIlxufTtcbnZhciBtc2dUeXBlU3R5bGUgPSB7XG4gIGNvbG9yOiBcIiNlODNiNDZcIixcbiAgZm9udFNpemU6IFwiMS4yZW1cIixcbiAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCJcbn07XG52YXIgbXNnVGV4dFN0eWxlID0ge1xuICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICBmb250U2l6ZTogXCIxcmVtXCIsXG4gIGZvbnRGYW1pbHk6IFwiTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2VcIlxufTtcbmV4cG9ydCB7IG1zZ1N0eWxlcywgaWZyYW1lU3R5bGUsIGNvbnRhaW5lclN0eWxlLCBoZWFkZXJTdHlsZSwgZGlzbWlzc0J1dHRvblN0eWxlLCBtc2dUeXBlU3R5bGUsIG1zZ1RleHRTdHlsZSB9OyIsIi8qIGdsb2JhbCBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyAqL1xuXG5pbXBvcnQgV2ViU29ja2V0Q2xpZW50IGZyb20gXCIuL2NsaWVudHMvV2ViU29ja2V0Q2xpZW50LmpzXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi91dGlscy9sb2cuanNcIjtcblxuLy8gdGhpcyBXZWJzb2NrZXRDbGllbnQgaXMgaGVyZSBhcyBhIGRlZmF1bHQgZmFsbGJhY2ssIGluIGNhc2UgdGhlIGNsaWVudCBpcyBub3QgaW5qZWN0ZWRcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xudmFyIENsaWVudCA9XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbnR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXy5kZWZhdWx0ICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18uZGVmYXVsdCA6IF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fIDogV2ViU29ja2V0Q2xpZW50O1xuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxudmFyIHJldHJpZXMgPSAwO1xudmFyIG1heFJldHJpZXMgPSAxMDtcblxuLy8gSW5pdGlhbGl6ZWQgY2xpZW50IGlzIGV4cG9ydGVkIHNvIGV4dGVybmFsIGNvbnN1bWVycyBjYW4gdXRpbGl6ZSB0aGUgc2FtZSBpbnN0YW5jZVxuLy8gSXQgaXMgbXV0YWJsZSB0byBlbmZvcmNlIHNpbmdsZXRvblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmV4cG9ydCB2YXIgY2xpZW50ID0gbnVsbDtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge3sgW2hhbmRsZXI6IHN0cmluZ106IChkYXRhPzogYW55LCBwYXJhbXM/OiBhbnkpID0+IGFueSB9fSBoYW5kbGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtyZWNvbm5lY3RdXG4gKi9cbnZhciBzb2NrZXQgPSBmdW5jdGlvbiBpbml0U29ja2V0KHVybCwgaGFuZGxlcnMsIHJlY29ubmVjdCkge1xuICBjbGllbnQgPSBuZXcgQ2xpZW50KHVybCk7XG4gIGNsaWVudC5vbk9wZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHJpZXMgPSAwO1xuICAgIGlmICh0eXBlb2YgcmVjb25uZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBtYXhSZXRyaWVzID0gcmVjb25uZWN0O1xuICAgIH1cbiAgfSk7XG4gIGNsaWVudC5vbkNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmV0cmllcyA9PT0gMCkge1xuICAgICAgaGFuZGxlcnMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gcmVjb25uZWN0LlxuICAgIGNsaWVudCA9IG51bGw7XG5cbiAgICAvLyBBZnRlciAxMCByZXRyaWVzIHN0b3AgdHJ5aW5nLCB0byBwcmV2ZW50IGxvZ3NwYW0uXG4gICAgaWYgKHJldHJpZXMgPCBtYXhSZXRyaWVzKSB7XG4gICAgICAvLyBFeHBvbmVudGlhbGx5IGluY3JlYXNlIHRpbWVvdXQgdG8gcmVjb25uZWN0LlxuICAgICAgLy8gUmVzcGVjdGZ1bGx5IGNvcGllZCBmcm9tIHRoZSBwYWNrYWdlIGBnb3RgLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuICAgICAgdmFyIHJldHJ5SW5NcyA9IDEwMDAgKiBNYXRoLnBvdygyLCByZXRyaWVzKSArIE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgICByZXRyaWVzICs9IDE7XG4gICAgICBsb2cuaW5mbyhcIlRyeWluZyB0byByZWNvbm5lY3QuLi5cIik7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc29ja2V0KHVybCwgaGFuZGxlcnMsIHJlY29ubmVjdCk7XG4gICAgICB9LCByZXRyeUluTXMpO1xuICAgIH1cbiAgfSk7XG4gIGNsaWVudC5vbk1lc3NhZ2UoXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gZGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgaWYgKGhhbmRsZXJzW21lc3NhZ2UudHlwZV0pIHtcbiAgICAgIGhhbmRsZXJzW21lc3NhZ2UudHlwZV0obWVzc2FnZS5kYXRhLCBtZXNzYWdlLnBhcmFtcyk7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7IiwiLyoqXG4gKiBAcGFyYW0ge3sgcHJvdG9jb2w/OiBzdHJpbmcsIGF1dGg/OiBzdHJpbmcsIGhvc3RuYW1lPzogc3RyaW5nLCBwb3J0Pzogc3RyaW5nLCBwYXRobmFtZT86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBoYXNoPzogc3RyaW5nLCBzbGFzaGVzPzogYm9vbGVhbiB9fSBvYmpVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdChvYmpVUkwpIHtcbiAgdmFyIHByb3RvY29sID0gb2JqVVJMLnByb3RvY29sIHx8IFwiXCI7XG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSBcIjpcIikge1xuICAgIHByb3RvY29sICs9IFwiOlwiO1xuICB9XG4gIHZhciBhdXRoID0gb2JqVVJMLmF1dGggfHwgXCJcIjtcbiAgaWYgKGF1dGgpIHtcbiAgICBhdXRoID0gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIGF1dGggPSBhdXRoLnJlcGxhY2UoLyUzQS9pLCBcIjpcIik7XG4gICAgYXV0aCArPSBcIkBcIjtcbiAgfVxuICB2YXIgaG9zdCA9IFwiXCI7XG4gIGlmIChvYmpVUkwuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArIChvYmpVUkwuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgPT09IC0xID8gb2JqVVJMLmhvc3RuYW1lIDogXCJbXCIuY29uY2F0KG9ialVSTC5ob3N0bmFtZSwgXCJdXCIpKTtcbiAgICBpZiAob2JqVVJMLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gXCI6XCIuY29uY2F0KG9ialVSTC5wb3J0KTtcbiAgICB9XG4gIH1cbiAgdmFyIHBhdGhuYW1lID0gb2JqVVJMLnBhdGhuYW1lIHx8IFwiXCI7XG4gIGlmIChvYmpVUkwuc2xhc2hlcykge1xuICAgIGhvc3QgPSBcIi8vXCIuY29uY2F0KGhvc3QgfHwgXCJcIik7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gXCIvXCIpIHtcbiAgICAgIHBhdGhuYW1lID0gXCIvXCIuY29uY2F0KHBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gXCJcIjtcbiAgfVxuICB2YXIgc2VhcmNoID0gb2JqVVJMLnNlYXJjaCB8fCBcIlwiO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09IFwiP1wiKSB7XG4gICAgc2VhcmNoID0gXCI/XCIuY29uY2F0KHNlYXJjaCk7XG4gIH1cbiAgdmFyIGhhc2ggPSBvYmpVUkwuaGFzaCB8fCBcIlwiO1xuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gXCIjXCIpIHtcbiAgICBoYXNoID0gXCIjXCIuY29uY2F0KGhhc2gpO1xuICB9XG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKFwiI1wiLCBcIiUyM1wiKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3RvY29sKS5jb25jYXQoaG9zdCkuY29uY2F0KHBhdGhuYW1lKS5jb25jYXQoc2VhcmNoKS5jb25jYXQoaGFzaCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtVUkwgJiB7IGZyb21DdXJyZW50U2NyaXB0PzogYm9vbGVhbiB9fSBwYXJzZWRVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNvY2tldFVSTChwYXJzZWRVUkwpIHtcbiAgdmFyIGhvc3RuYW1lID0gcGFyc2VkVVJMLmhvc3RuYW1lO1xuXG4gIC8vIE5vZGUuanMgbW9kdWxlIHBhcnNlcyBpdCBhcyBgOjpgXG4gIC8vIGBuZXcgVVJMKHVybFN0cmluZywgW2Jhc2VVUkxTdHJpbmddKWAgcGFyc2VzIGl0IGFzICdbOjpdJ1xuICB2YXIgaXNJbkFkZHJBbnkgPSBob3N0bmFtZSA9PT0gXCIwLjAuMC4wXCIgfHwgaG9zdG5hbWUgPT09IFwiOjpcIiB8fCBob3N0bmFtZSA9PT0gXCJbOjpdXCI7XG5cbiAgLy8gd2h5IGRvIHdlIG5lZWQgdGhpcyBjaGVjaz9cbiAgLy8gaG9zdG5hbWUgbi9hIGZvciBmaWxlIHByb3RvY29sIChleGFtcGxlLCB3aGVuIHVzaW5nIGVsZWN0cm9uLCBpb25pYylcbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrLWRldi1zZXJ2ZXIvcHVsbC8zODRcbiAgaWYgKGlzSW5BZGRyQW55ICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgc2VsZi5sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKSA9PT0gMCkge1xuICAgIGhvc3RuYW1lID0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgfVxuICB2YXIgc29ja2V0VVJMUHJvdG9jb2wgPSBwYXJzZWRVUkwucHJvdG9jb2wgfHwgc2VsZi5sb2NhdGlvbi5wcm90b2NvbDtcblxuICAvLyBXaGVuIGh0dHBzIGlzIHVzZWQgaW4gdGhlIGFwcCwgc2VjdXJlIHdlYiBzb2NrZXRzIGFyZSBhbHdheXMgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIGJyb3dzZXIgZG9lc24ndCBhY2NlcHQgbm9uLXNlY3VyZSB3ZWIgc29ja2V0cy5cbiAgaWYgKHNvY2tldFVSTFByb3RvY29sID09PSBcImF1dG86XCIgfHwgaG9zdG5hbWUgJiYgaXNJbkFkZHJBbnkgJiYgc2VsZi5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgIHNvY2tldFVSTFByb3RvY29sID0gc2VsZi5sb2NhdGlvbi5wcm90b2NvbDtcbiAgfVxuICBzb2NrZXRVUkxQcm90b2NvbCA9IHNvY2tldFVSTFByb3RvY29sLnJlcGxhY2UoL14oPzpodHRwfC4rLWV4dGVuc2lvbnxmaWxlKS9pLCBcIndzXCIpO1xuICB2YXIgc29ja2V0VVJMQXV0aCA9IFwiXCI7XG5cbiAgLy8gYG5ldyBVUkwodXJsU3RyaW5nLCBbYmFzZVVSTHN0cmluZ10pYCBkb2Vzbid0IGhhdmUgYGF1dGhgIHByb3BlcnR5XG4gIC8vIFBhcnNlIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzIGluIGNhc2Ugd2UgbmVlZCB0aGVtXG4gIGlmIChwYXJzZWRVUkwudXNlcm5hbWUpIHtcbiAgICBzb2NrZXRVUkxBdXRoID0gcGFyc2VkVVJMLnVzZXJuYW1lO1xuXG4gICAgLy8gU2luY2UgSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvbiBkb2VzIG5vdCBhbGxvdyBlbXB0eSB1c2VybmFtZSxcbiAgICAvLyB3ZSBvbmx5IGluY2x1ZGUgcGFzc3dvcmQgaWYgdGhlIHVzZXJuYW1lIGlzIG5vdCBlbXB0eS5cbiAgICBpZiAocGFyc2VkVVJMLnBhc3N3b3JkKSB7XG4gICAgICAvLyBSZXN1bHQ6IDx1c2VybmFtZT46PHBhc3N3b3JkPlxuICAgICAgc29ja2V0VVJMQXV0aCA9IHNvY2tldFVSTEF1dGguY29uY2F0KFwiOlwiLCBwYXJzZWRVUkwucGFzc3dvcmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEluIGNhc2UgdGhlIGhvc3QgaXMgYSByYXcgSVB2NiBhZGRyZXNzLCBpdCBjYW4gYmUgZW5jbG9zZWQgaW5cbiAgLy8gdGhlIGJyYWNrZXRzIGFzIHRoZSBicmFja2V0cyBhcmUgbmVlZGVkIGluIHRoZSBmaW5hbCBVUkwgc3RyaW5nLlxuICAvLyBOZWVkIHRvIHJlbW92ZSB0aG9zZSBhcyB1cmwuZm9ybWF0IGJsaW5kbHkgYWRkcyBpdHMgb3duIHNldCBvZiBicmFja2V0c1xuICAvLyBpZiB0aGUgaG9zdCBzdHJpbmcgY29udGFpbnMgY29sb25zLiBUaGF0IHdvdWxkIGxlYWQgdG8gbm9uLXdvcmtpbmdcbiAgLy8gZG91YmxlIGJyYWNrZXRzIChlLmcuIFtbOjpdXSkgaG9zdFxuICAvL1xuICAvLyBBbGwgb2YgdGhlc2Ugd2ViIHNvY2tldCB1cmwgcGFyYW1zIGFyZSBvcHRpb25hbGx5IHBhc3NlZCBpbiB0aHJvdWdoIHJlc291cmNlUXVlcnksXG4gIC8vIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrIHRvIHRoZSBkZWZhdWx0IGlmIHRoZXkgYXJlIG5vdCBwcm92aWRlZFxuICB2YXIgc29ja2V0VVJMSG9zdG5hbWUgPSAoaG9zdG5hbWUgfHwgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSB8fCBcImxvY2FsaG9zdFwiKS5yZXBsYWNlKC9eXFxbKC4qKVxcXSQvLCBcIiQxXCIpO1xuICB2YXIgc29ja2V0VVJMUG9ydCA9IHBhcnNlZFVSTC5wb3J0O1xuICBpZiAoIXNvY2tldFVSTFBvcnQgfHwgc29ja2V0VVJMUG9ydCA9PT0gXCIwXCIpIHtcbiAgICBzb2NrZXRVUkxQb3J0ID0gc2VsZi5sb2NhdGlvbi5wb3J0O1xuICB9XG5cbiAgLy8gSWYgcGF0aCBpcyBwcm92aWRlZCBpdCdsbCBiZSBwYXNzZWQgaW4gdmlhIHRoZSByZXNvdXJjZVF1ZXJ5IGFzIGFcbiAgLy8gcXVlcnkgcGFyYW0gc28gaXQgaGFzIHRvIGJlIHBhcnNlZCBvdXQgb2YgdGhlIHF1ZXJ5c3RyaW5nIGluIG9yZGVyIGZvciB0aGVcbiAgLy8gY2xpZW50IHRvIG9wZW4gdGhlIHNvY2tldCB0byB0aGUgY29ycmVjdCBsb2NhdGlvbi5cbiAgdmFyIHNvY2tldFVSTFBhdGhuYW1lID0gXCIvd3NcIjtcbiAgaWYgKHBhcnNlZFVSTC5wYXRobmFtZSAmJiAhcGFyc2VkVVJMLmZyb21DdXJyZW50U2NyaXB0KSB7XG4gICAgc29ja2V0VVJMUGF0aG5hbWUgPSBwYXJzZWRVUkwucGF0aG5hbWU7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdCh7XG4gICAgcHJvdG9jb2w6IHNvY2tldFVSTFByb3RvY29sLFxuICAgIGF1dGg6IHNvY2tldFVSTEF1dGgsXG4gICAgaG9zdG5hbWU6IHNvY2tldFVSTEhvc3RuYW1lLFxuICAgIHBvcnQ6IHNvY2tldFVSTFBvcnQsXG4gICAgcGF0aG5hbWU6IHNvY2tldFVSTFBhdGhuYW1lLFxuICAgIHNsYXNoZXM6IHRydWVcbiAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTb2NrZXRVUkw7IiwiLyoqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0U291cmNlKCkge1xuICAvLyBgZG9jdW1lbnQuY3VycmVudFNjcmlwdGAgaXMgdGhlIG1vc3QgYWNjdXJhdGUgd2F5IHRvIGZpbmQgdGhlIGN1cnJlbnQgc2NyaXB0LFxuICAvLyBidXQgaXMgbm90IHN1cHBvcnRlZCBpbiBhbGwgYnJvd3NlcnMuXG4gIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gZ2V0dGluZyBhbGwgc2NyaXB0cyBydW5uaW5nIGluIHRoZSBkb2N1bWVudC5cbiAgdmFyIHNjcmlwdEVsZW1lbnRzID0gZG9jdW1lbnQuc2NyaXB0cyB8fCBbXTtcbiAgdmFyIHNjcmlwdEVsZW1lbnRzV2l0aFNyYyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChzY3JpcHRFbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gIH0pO1xuICBpZiAoc2NyaXB0RWxlbWVudHNXaXRoU3JjLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgY3VycmVudFNjcmlwdCA9IHNjcmlwdEVsZW1lbnRzV2l0aFNyY1tzY3JpcHRFbGVtZW50c1dpdGhTcmMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9XG5cbiAgLy8gRmFpbCBhcyB0aGVyZSB3YXMgbm8gc2NyaXB0IHRvIHVzZS5cbiAgdGhyb3cgbmV3IEVycm9yKFwiW3dlYnBhY2stZGV2LXNlcnZlcl0gRmFpbGVkIHRvIGdldCBjdXJyZW50IHNjcmlwdCBzb3VyY2UuXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudFNjcmlwdFNvdXJjZTsiLCJpbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi9tb2R1bGVzL2xvZ2dlci9pbmRleC5qc1wiO1xudmFyIG5hbWUgPSBcIndlYnBhY2stZGV2LXNlcnZlclwiO1xuLy8gZGVmYXVsdCBsZXZlbCBpcyBzZXQgb24gdGhlIGNsaWVudCBzaWRlLCBzbyBpdCBkb2VzIG5vdCBuZWVkXG4vLyB0byBiZSBzZXQgYnkgdGhlIENMSSBvciBBUElcbnZhciBkZWZhdWx0TGV2ZWwgPSBcImluZm9cIjtcblxuLy8gb3B0aW9ucyBuZXcgb3B0aW9ucywgbWVyZ2Ugd2l0aCBvbGQgb3B0aW9uc1xuLyoqXG4gKiBAcGFyYW0ge2ZhbHNlIHwgdHJ1ZSB8IFwibm9uZVwiIHwgXCJlcnJvclwiIHwgXCJ3YXJuXCIgfCBcImluZm9cIiB8IFwibG9nXCIgfCBcInZlcmJvc2VcIn0gbGV2ZWxcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xuICBsb2dnZXIuY29uZmlndXJlRGVmYXVsdExvZ2dlcih7XG4gICAgbGV2ZWw6IGxldmVsXG4gIH0pO1xufVxuc2V0TG9nTGV2ZWwoZGVmYXVsdExldmVsKTtcbnZhciBsb2cgPSBsb2dnZXIuZ2V0TG9nZ2VyKG5hbWUpO1xudmFyIGxvZ0VuYWJsZWRGZWF0dXJlcyA9IGZ1bmN0aW9uIGxvZ0VuYWJsZWRGZWF0dXJlcyhmZWF0dXJlcykge1xuICB2YXIgZW5hYmxlZEZlYXR1cmVzID0gT2JqZWN0LmtleXMoZmVhdHVyZXMpO1xuICBpZiAoIWZlYXR1cmVzIHx8IGVuYWJsZWRGZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGxvZ1N0cmluZyA9IFwiU2VydmVyIHN0YXJ0ZWQ6XCI7XG5cbiAgLy8gU2VydmVyIHN0YXJ0ZWQ6IEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgZW5hYmxlZCwgTGl2ZSBSZWxvYWRpbmcgZW5hYmxlZCwgT3ZlcmxheSBkaXNhYmxlZC5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmFibGVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gZW5hYmxlZEZlYXR1cmVzW2ldO1xuICAgIGxvZ1N0cmluZyArPSBcIiBcIi5jb25jYXQoa2V5LCBcIiBcIikuY29uY2F0KGZlYXR1cmVzW2tleV0gPyBcImVuYWJsZWRcIiA6IFwiZGlzYWJsZWRcIiwgXCIsXCIpO1xuICB9XG4gIC8vIHJlcGxhY2UgbGFzdCBjb21tYSB3aXRoIGEgcGVyaW9kXG4gIGxvZ1N0cmluZyA9IGxvZ1N0cmluZy5zbGljZSgwLCAtMSkuY29uY2F0KFwiLlwiKTtcbiAgbG9nLmluZm8obG9nU3RyaW5nKTtcbn07XG5leHBvcnQgeyBsb2csIGxvZ0VuYWJsZWRGZWF0dXJlcywgc2V0TG9nTGV2ZWwgfTsiLCJpbXBvcnQgZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSBmcm9tIFwiLi9nZXRDdXJyZW50U2NyaXB0U291cmNlLmpzXCI7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlUXVlcnlcbiAqIEByZXR1cm5zIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfX1cbiAqL1xuZnVuY3Rpb24gcGFyc2VVUkwocmVzb3VyY2VRdWVyeSkge1xuICAvKiogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nIH19ICovXG4gIHZhciBvcHRpb25zID0ge307XG4gIGlmICh0eXBlb2YgcmVzb3VyY2VRdWVyeSA9PT0gXCJzdHJpbmdcIiAmJiByZXNvdXJjZVF1ZXJ5ICE9PSBcIlwiKSB7XG4gICAgdmFyIHNlYXJjaFBhcmFtcyA9IHJlc291cmNlUXVlcnkuc2xpY2UoMSkuc3BsaXQoXCImXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFpciA9IHNlYXJjaFBhcmFtc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBvcHRpb25zW3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBFbHNlLCBnZXQgdGhlIHVybCBmcm9tIHRoZSA8c2NyaXB0PiB0aGlzIGZpbGUgd2FzIGNhbGxlZCB3aXRoLlxuICAgIHZhciBzY3JpcHRTb3VyY2UgPSBnZXRDdXJyZW50U2NyaXB0U291cmNlKCk7XG4gICAgdmFyIHNjcmlwdFNvdXJjZVVSTDtcbiAgICB0cnkge1xuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVyIGBiYXNlVVJMYCB3aXRoIGB3aW5kb3cubG9jYXRpb24uaHJlZmAsXG4gICAgICAvLyBpcyB0byBhbGxvdyBwYXJzaW5nIG9mIHBhdGgtcmVsYXRpdmUgb3IgcHJvdG9jb2wtcmVsYXRpdmUgVVJMcyxcbiAgICAgIC8vIGFuZCB3aWxsIGhhdmUgbm8gZWZmZWN0IGlmIGBzY3JpcHRTb3VyY2VgIGlzIGEgZnVsbHkgdmFsaWQgVVJMLlxuICAgICAgc2NyaXB0U291cmNlVVJMID0gbmV3IFVSTChzY3JpcHRTb3VyY2UsIHNlbGYubG9jYXRpb24uaHJlZik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFVSTCBwYXJzaW5nIGZhaWxlZCwgZG8gbm90aGluZy5cbiAgICAgIC8vIFdlIHdpbGwgc3RpbGwgcHJvY2VlZCB0byBzZWUgaWYgd2UgY2FuIHJlY292ZXIgdXNpbmcgYHJlc291cmNlUXVlcnlgXG4gICAgfVxuICAgIGlmIChzY3JpcHRTb3VyY2VVUkwpIHtcbiAgICAgIG9wdGlvbnMgPSBzY3JpcHRTb3VyY2VVUkw7XG4gICAgICBvcHRpb25zLmZyb21DdXJyZW50U2NyaXB0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5leHBvcnQgZGVmYXVsdCBwYXJzZVVSTDsiLCJpbXBvcnQgaG90RW1pdHRlciBmcm9tIFwid2VicGFjay9ob3QvZW1pdHRlci5qc1wiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vbG9nLmpzXCI7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vaW5kZXhcIikuT3B0aW9uc30gT3B0aW9uc1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9pbmRleFwiKS5TdGF0dXN9IFN0YXR1c1xuXG4vKipcbiAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9uc1xuICogQHBhcmFtIHtTdGF0dXN9IHN0YXR1c1xuICovXG5mdW5jdGlvbiByZWxvYWRBcHAoX3JlZiwgc3RhdHVzKSB7XG4gIHZhciBob3QgPSBfcmVmLmhvdCxcbiAgICBsaXZlUmVsb2FkID0gX3JlZi5saXZlUmVsb2FkO1xuICBpZiAoc3RhdHVzLmlzVW5sb2FkaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjdXJyZW50SGFzaCA9IHN0YXR1cy5jdXJyZW50SGFzaCxcbiAgICBwcmV2aW91c0hhc2ggPSBzdGF0dXMucHJldmlvdXNIYXNoO1xuICB2YXIgaXNJbml0aWFsID0gY3VycmVudEhhc2guaW5kZXhPZiggLyoqIEB0eXBlIHtzdHJpbmd9ICovcHJldmlvdXNIYXNoKSA+PSAwO1xuICBpZiAoaXNJbml0aWFsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7V2luZG93fSByb290V2luZG93XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbElkXG4gICAqL1xuICBmdW5jdGlvbiBhcHBseVJlbG9hZChyb290V2luZG93LCBpbnRlcnZhbElkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICBsb2cuaW5mbyhcIkFwcCB1cGRhdGVkLiBSZWxvYWRpbmcuLi5cIik7XG4gICAgcm9vdFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuICB2YXIgc2VhcmNoID0gc2VsZi5sb2NhdGlvbi5zZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGFsbG93VG9Ib3QgPSBzZWFyY2guaW5kZXhPZihcIndlYnBhY2stZGV2LXNlcnZlci1ob3Q9ZmFsc2VcIikgPT09IC0xO1xuICB2YXIgYWxsb3dUb0xpdmVSZWxvYWQgPSBzZWFyY2guaW5kZXhPZihcIndlYnBhY2stZGV2LXNlcnZlci1saXZlLXJlbG9hZD1mYWxzZVwiKSA9PT0gLTE7XG4gIGlmIChob3QgJiYgYWxsb3dUb0hvdCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIGhvdCB1cGRhdGUuLi5cIik7XG4gICAgaG90RW1pdHRlci5lbWl0KFwid2VicGFja0hvdFVwZGF0ZVwiLCBzdGF0dXMuY3VycmVudEhhc2gpO1xuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLndpbmRvdykge1xuICAgICAgLy8gYnJvYWRjYXN0IHVwZGF0ZSB0byB3aW5kb3dcbiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoXCJ3ZWJwYWNrSG90VXBkYXRlXCIuY29uY2F0KHN0YXR1cy5jdXJyZW50SGFzaCksIFwiKlwiKTtcbiAgICB9XG4gIH1cbiAgLy8gYWxsb3cgcmVmcmVzaGluZyB0aGUgcGFnZSBvbmx5IGlmIGxpdmVSZWxvYWQgaXNuJ3QgZGlzYWJsZWRcbiAgZWxzZSBpZiAobGl2ZVJlbG9hZCAmJiBhbGxvd1RvTGl2ZVJlbG9hZCkge1xuICAgIHZhciByb290V2luZG93ID0gc2VsZjtcblxuICAgIC8vIHVzZSBwYXJlbnQgd2luZG93IGZvciByZWxvYWQgKGluIGNhc2Ugd2UncmUgaW4gYW4gaWZyYW1lIHdpdGggbm8gdmFsaWQgc3JjKVxuICAgIHZhciBpbnRlcnZhbElkID0gc2VsZi5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocm9vdFdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gXCJhYm91dDpcIikge1xuICAgICAgICAvLyByZWxvYWQgaW1tZWRpYXRlbHkgaWYgcHJvdG9jb2wgaXMgdmFsaWRcbiAgICAgICAgYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290V2luZG93ID0gcm9vdFdpbmRvdy5wYXJlbnQ7XG4gICAgICAgIGlmIChyb290V2luZG93LnBhcmVudCA9PT0gcm9vdFdpbmRvdykge1xuICAgICAgICAgIC8vIGlmIHBhcmVudCBlcXVhbHMgY3VycmVudCB3aW5kb3cgd2UndmUgcmVhY2hlZCB0aGUgcm9vdCB3aGljaCB3b3VsZCBjb250aW51ZSBmb3JldmVyLCBzbyB0cmlnZ2VyIGEgcmVsb2FkIGFueXdheXNcbiAgICAgICAgICBhcHBseVJlbG9hZChyb290V2luZG93LCBpbnRlcnZhbElkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCByZWxvYWRBcHA7IiwiLyogZ2xvYmFsIF9fcmVzb3VyY2VRdWVyeSBXb3JrZXJHbG9iYWxTY29wZSAqL1xuXG4vLyBTZW5kIG1lc3NhZ2VzIHRvIHRoZSBvdXRzaWRlLCBzbyBwbHVnaW5zIGNhbiBjb25zdW1lIGl0LlxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHthbnl9IFtkYXRhXVxuICovXG5mdW5jdGlvbiBzZW5kTXNnKHR5cGUsIGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgPT09IFwidW5kZWZpbmVkXCIgfHwgIShzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpKSkge1xuICAgIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJ3ZWJwYWNrXCIuY29uY2F0KHR5cGUpLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0sIFwiKlwiKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgc2VuZE1zZzsiLCJ2YXIgYW5zaVJlZ2V4ID0gbmV3IFJlZ0V4cChbXCJbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpXCIsIFwiKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1ucS11eT0+PH5dKSlcIl0uam9pbihcInxcIiksIFwiZ1wiKTtcblxuLyoqXG4gKlxuICogU3RyaXAgW0FOU0kgZXNjYXBlIGNvZGVzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlKSBmcm9tIGEgc3RyaW5nLlxuICogQWRhcHRlZCBmcm9tIGNvZGUgb3JpZ2luYWxseSByZWxlYXNlZCBieSBTaW5kcmUgU29yaHVzXG4gKiBMaWNlbnNlZCB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHN0cmlwQW5zaShzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBgc3RyaW5nYCwgZ290IGBcIi5jb25jYXQodHlwZW9mIHN0cmluZywgXCJgXCIpKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYW5zaVJlZ2V4LCBcIlwiKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0cmlwQW5zaTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pZiAobW9kdWxlLmhvdCkge1xuXHR2YXIgbGFzdEhhc2g7XG5cdHZhciB1cFRvRGF0ZSA9IGZ1bmN0aW9uIHVwVG9EYXRlKCkge1xuXHRcdHJldHVybiBsYXN0SGFzaC5pbmRleE9mKF9fd2VicGFja19oYXNoX18pID49IDA7XG5cdH07XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cdHZhciBjaGVjayA9IGZ1bmN0aW9uIGNoZWNrKCkge1xuXHRcdG1vZHVsZS5ob3Rcblx0XHRcdC5jaGVjayh0cnVlKVxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdGlmICghdXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gQ2Fubm90IGZpbmQgdXBkYXRlLiBcIiArXG5cdFx0XHRcdFx0XHRcdCh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0PyBcIk5lZWQgdG8gZG8gYSBmdWxsIHJlbG9hZCFcIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJQbGVhc2UgcmVsb2FkIG1hbnVhbGx5IVwiKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltITVJdIChQcm9iYWJseSBiZWNhdXNlIG9mIHJlc3RhcnRpbmcgdGhlIHdlYnBhY2stZGV2LXNlcnZlcilcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0Y2hlY2soKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlcXVpcmUoXCIuL2xvZy1hcHBseS1yZXN1bHRcIikodXBkYXRlZE1vZHVsZXMsIHVwZGF0ZWRNb2R1bGVzKTtcblxuXHRcdFx0XHRpZiAodXBUb0RhdGUoKSkge1xuXHRcdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBBcHAgaXMgdXAgdG8gZGF0ZS5cIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHR2YXIgc3RhdHVzID0gbW9kdWxlLmhvdC5zdGF0dXMoKTtcblx0XHRcdFx0aWYgKFtcImFib3J0XCIsIFwiZmFpbFwiXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSBDYW5ub3QgYXBwbHkgdXBkYXRlLiBcIiArXG5cdFx0XHRcdFx0XHRcdCh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0PyBcIk5lZWQgdG8gZG8gYSBmdWxsIHJlbG9hZCFcIlxuXHRcdFx0XHRcdFx0XHRcdDogXCJQbGVhc2UgcmVsb2FkIG1hbnVhbGx5IVwiKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBVcGRhdGUgZmFpbGVkOiBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cdHZhciBob3RFbWl0dGVyID0gcmVxdWlyZShcIi4vZW1pdHRlclwiKTtcblx0aG90RW1pdHRlci5vbihcIndlYnBhY2tIb3RVcGRhdGVcIiwgZnVuY3Rpb24gKGN1cnJlbnRIYXNoKSB7XG5cdFx0bGFzdEhhc2ggPSBjdXJyZW50SGFzaDtcblx0XHRpZiAoIXVwVG9EYXRlKCkgJiYgbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJpZGxlXCIpIHtcblx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBDaGVja2luZyBmb3IgdXBkYXRlcyBvbiB0aGUgc2VydmVyLi4uXCIpO1xuXHRcdFx0Y2hlY2soKTtcblx0XHR9XG5cdH0pO1xuXHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gV2FpdGluZyBmb3IgdXBkYXRlIHNpZ25hbCBmcm9tIFdEUy4uLlwiKTtcbn0gZWxzZSB7XG5cdHRocm93IG5ldyBFcnJvcihcIltITVJdIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgaXMgZGlzYWJsZWQuXCIpO1xufVxuIiwidmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcblx0dmFyIHVuYWNjZXB0ZWRNb2R1bGVzID0gdXBkYXRlZE1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG5cdH0pO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdGlmICh1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0bG9nKFxuXHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogKFRoZXkgd291bGQgbmVlZCBhIGZ1bGwgcmVsb2FkISlcIlxuXHRcdCk7XG5cdFx0dW5hY2NlcHRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICghcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuXHRcdHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1vZHVsZUlkID09PSBcInN0cmluZ1wiICYmIG1vZHVsZUlkLmluZGV4T2YoXCIhXCIpICE9PSAtMSkge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBtb2R1bGVJZC5zcGxpdChcIiFcIik7XG5cdFx0XHRcdGxvZy5ncm91cENvbGxhcHNlZChcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIHBhcnRzLnBvcCgpKTtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0XHRsb2cuZ3JvdXBFbmQoXCJpbmZvXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBudW1iZXJJZHMgPSByZW5ld2VkTW9kdWxlcy5ldmVyeShmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgbW9kdWxlSWQgPT09IFwibnVtYmVyXCI7XG5cdFx0fSk7XG5cdFx0aWYgKG51bWJlcklkcylcblx0XHRcdGxvZyhcblx0XHRcdFx0XCJpbmZvXCIsXG5cdFx0XHRcdCdbSE1SXSBDb25zaWRlciB1c2luZyB0aGUgb3B0aW1pemF0aW9uLm1vZHVsZUlkczogXCJuYW1lZFwiIGZvciBtb2R1bGUgbmFtZXMuJ1xuXHRcdFx0KTtcblx0fVxufTtcbiIsInZhciBsb2dMZXZlbCA9IFwiaW5mb1wiO1xuXG5mdW5jdGlvbiBkdW1teSgpIHt9XG5cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdFx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRcdGxvZ0ZuKG1zZyk7XG5cdFx0fVxuXHR9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdGlmIChzaG91bGRMb2cobGV2ZWwpKSB7XG5cdFx0aWYgKGxldmVsID09PSBcImluZm9cIikge1xuXHRcdFx0Y29uc29sZS5sb2cobXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcIndhcm5pbmdcIikge1xuXHRcdFx0Y29uc29sZS53YXJuKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKG1zZyk7XG5cdFx0fVxuXHR9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnMgKi9cbnZhciBncm91cCA9IGNvbnNvbGUuZ3JvdXAgfHwgZHVtbXk7XG52YXIgZ3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkIHx8IGR1bW15O1xudmFyIGdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZCB8fCBkdW1teTtcbi8qIGVzbGludC1lbmFibGUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zICovXG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwID0gbG9nR3JvdXAoZ3JvdXApO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cENvbGxhcHNlZCA9IGxvZ0dyb3VwKGdyb3VwQ29sbGFwc2VkKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBFbmQgPSBsb2dHcm91cChncm91cEVuZCk7XG5cbm1vZHVsZS5leHBvcnRzLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG5cdGxvZ0xldmVsID0gbGV2ZWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0dmFyIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcblx0dmFyIHN0YWNrID0gZXJyLnN0YWNrO1xuXHRpZiAoIXN0YWNrKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoc3RhY2suaW5kZXhPZihtZXNzYWdlKSA8IDApIHtcblx0XHRyZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFjaztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gc3RhY2s7XG5cdH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHRyeSB7XG5cdFx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRcdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0XHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXHR9IGNhdGNoKGUpIHtcblx0XHRtb2R1bGUuZXJyb3IgPSBlO1xuXHRcdHRocm93IGU7XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uaHUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwic3cuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNTUxZjcyNjA3YWI3ZGM4ZjAzNlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInJlc3RhdXJhbnQtYXBwczpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgY3VycmVudE1vZHVsZURhdGEgPSB7fTtcbnZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuXG4vLyBtb2R1bGUgYW5kIHJlcXVpcmUgY3JlYXRpb25cbnZhciBjdXJyZW50Q2hpbGRNb2R1bGU7XG52YXIgY3VycmVudFBhcmVudHMgPSBbXTtcblxuLy8gc3RhdHVzXG52YXIgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzID0gW107XG52YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4vLyB3aGlsZSBkb3dubG9hZGluZ1xudmFyIGJsb2NraW5nUHJvbWlzZXMgPSAwO1xudmFyIGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cbi8vIFRoZSB1cGRhdGUgaW5mb1xudmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xudmFyIHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cyk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRbXSlcblx0XHRcdFx0KS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKGFwcGx5T25VcGRhdGUpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5hcHBseSkge1xuXHRcdFx0dmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0XCJzd1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlcmVzdGF1cmFudF9hcHBzXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9wcm90b2NvbD13cyUzQSZob3N0bmFtZT0wLjAuMC4wJnBvcnQ9OTAwMCZwYXRobmFtZT0lMkZ3cyZsb2dnaW5nPWluZm8mb3ZlcmxheT0lN0IlMjJlcnJvcnMlMjIlM0F0cnVlJTJDJTIyd2FybmluZ3MlMjIlM0F0cnVlJTdEJnJlY29ubmVjdD0xMCZob3Q9dHJ1ZSZsaXZlLXJlbG9hZD10cnVlXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL3N3LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9