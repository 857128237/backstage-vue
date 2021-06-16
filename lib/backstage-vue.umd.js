(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["backstage-vue"] = factory(require("vue"));
	else
		root["backstage-vue"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "f059");
/******/ })
/************************************************************************/
/******/ ({

/***/ "79e4":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "d3fc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f059":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.13@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("79e4")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./packages/theme-chalk/src/index.scss
var theme_chalk_src = __webpack_require__("d3fc");

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b198ce78-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=47e4dfe4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bs-button",class:[
        _vm.shape ? 'bs-button--' + _vm.shape : '',
        _vm.size ? 'bs-button--' + _vm.size : '',
        _vm.type ? 'bs-button--' + _vm.type : '',
        {
            'bs-button--plain': _vm.plain,
            'bs-button--ghost': _vm.ghost,
            'bs-button--loading': _vm.loading,
            'bs-button--disabled': _vm.disabled,
            'bs-button--block': _vm.block,
        }
    ],attrs:{"disabled":_vm.disabled || _vm.loading,"type":_vm.htmlType},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('i',{staticClass:"iconfont icon-bs-icon-loading bs-icon-loading"}):_vm._e(),(!_vm.loading && _vm.icon)?_c('i',{staticClass:"iconfont",class:_vm.buttonIcon}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=47e4dfe4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'BButton',
  props: {
      disabled: Boolean,
      plain: Boolean,
      ghost: Boolean,
      htmlType: {
          type: String,
          default: 'button',
          validator: function (value) {
              return ['button', 'submit', 'reset'].indexOf(value) !== -1
          }
      },
      icon: String,
      loading: Boolean,
      shape: {
          type: String,
          validator: function (value) {
              return ['circle', 'round'].indexOf(value) !== -1
          }
      },
      size: {
          type: String,
          validator: function (value) {
              return ['large', 'small'].indexOf(value) !== -1
          }
      },
      type: {
          type: String,
          validator: function (value) {
              return ['primary', 'success', 'warning', 'danger', 'info', 'dashed', 'link'].indexOf(value) !== -1
          }
      },
      block: Boolean,
      href: String,
      target: Boolean,
  },
  computed: {
      buttonIcon() {
          return {
              ['icon-bs-icon-' + this.icon]: true
          }
      }
  },
  methods: {
      handleClick(evt) {
          if (this.disabled && this.loading) {
              return;
          }
          if (this.href) {
              this.target ?  window.open(this.href) : window.location.href = this.href;
          }
          this.$emit('click', evt);
      }
  },
});

// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.7@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/src/button.vue





/* normalize component */

var component = normalizeComponent(
  src_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "47e4dfe4",
  null
  
)

/* harmony default export */ var src_button = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


src_button.install = function(Vue) {
  Vue.component(src_button.name, src_button);
};

/* harmony default export */ var packages_button = (src_button);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b198ce78-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/button/src/button-group.vue?vue&type=template&id=3f65018b&
var button_groupvue_type_template_id_3f65018b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bs-button-group"},[_vm._t("default")],2)}
var button_groupvue_type_template_id_3f65018b_staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/src/button-group.vue?vue&type=template&id=3f65018b&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/button/src/button-group.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var button_groupvue_type_script_lang_js_ = ({
  name: 'BButtonGroup'
});

// CONCATENATED MODULE: ./packages/button/src/button-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_button_groupvue_type_script_lang_js_ = (button_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/button/src/button-group.vue





/* normalize component */

var button_group_component = normalizeComponent(
  src_button_groupvue_type_script_lang_js_,
  button_groupvue_type_template_id_3f65018b_render,
  button_groupvue_type_template_id_3f65018b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_group = (button_group_component.exports);
// CONCATENATED MODULE: ./packages/button-group/index.js


button_group.install = function(Vue) {
    Vue.component(button_group.name, button_group);
}

/* harmony default export */ var packages_button_group = (button_group);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b198ce78-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/icon/src/icon.vue?vue&type=template&id=3b185c92&
var iconvue_type_template_id_3b185c92_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"iconfont bs-icon",class:[
        'icon-bs-icon-' + _vm.type,
        _vm.size ? 'bs-icon--' + _vm.size : '',
        {'bs-icon-loading': _vm.spin}
    ],style:({color: _vm.color, transform: _vm.rotate ? ("rotate(" + _vm.rotate + "deg)") : 'none'})})}
var iconvue_type_template_id_3b185c92_staticRenderFns = []


// CONCATENATED MODULE: ./packages/icon/src/icon.vue?vue&type=template&id=3b185c92&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/icon/src/icon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: 'BIcon',
  props: {
      size: {
          type: String,
          default: 'default',
          validator: function (value) {
              return ['large', 'small', 'default'].indexOf(value) !== -1
          }
      },
      type: String,
      color: String,
      spin: Boolean,
      rotate: String,
  },
});

// CONCATENATED MODULE: ./packages/icon/src/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/icon/src/icon.vue





/* normalize component */

var icon_component = normalizeComponent(
  src_iconvue_type_script_lang_js_,
  iconvue_type_template_id_3b185c92_render,
  iconvue_type_template_id_3b185c92_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./packages/icon/index.js


icon.install = function(Vue) {
    Vue.component(icon.name, icon);
}

/* harmony default export */ var packages_icon = (icon);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b198ce78-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/avatar/src/avatar.vue?vue&type=template&id=7be1d750&
var avatarvue_type_template_id_7be1d750_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bs-avatar",class:[
        'bs-avatar--' + _vm.shape,
        typeof _vm.size === 'string' ? 'bs-avatar--' + _vm.size : ''
    ],style:(_vm.sizeStyle)},[(_vm.$slots.default)?[_vm._t("default")]:[(_vm.src)?_c('img',{staticStyle:{"object-fit":"cover"},attrs:{"src":_vm.src,"alt":_vm.alt}}):_vm._e(),(_vm.icon && !_vm.src)?_c('i',{staticClass:"iconfont",class:("icon-bs-icon-" + _vm.icon)}):_vm._e()]],2)}
var avatarvue_type_template_id_7be1d750_staticRenderFns = []


// CONCATENATED MODULE: ./packages/avatar/src/avatar.vue?vue&type=template&id=7be1d750&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/avatar/src/avatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var avatarvue_type_script_lang_js_ = ({
  name: 'BAvatar',
  props: {
      icon: String,
      shape: {
          type: String,
          default: 'circle',
          validator: function (value) {
              return ['circle', 'square'].indexOf(value) !== -1
          }
      },
      size: {
          type: [Number, String],
          validator: function (value) {
              if (typeof value === 'string') {
                  return ['large', 'small'].indexOf(value) !== -1
              }
              return typeof val === 'number'
          }
      },
      src: String,
      alt: String,
  },
  computed: {
      sizeStyle() {
          console.log(this);
          const { size } = this;
          return typeof size === 'number' ? {
              width: `${size}px`,
              height: `${size}px`,
              lineHeight: `${size}px`
          } : {};
      }
  },
});

// CONCATENATED MODULE: ./packages/avatar/src/avatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_avatarvue_type_script_lang_js_ = (avatarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/avatar/src/avatar.vue





/* normalize component */

var avatar_component = normalizeComponent(
  src_avatarvue_type_script_lang_js_,
  avatarvue_type_template_id_7be1d750_render,
  avatarvue_type_template_id_7be1d750_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var avatar = (avatar_component.exports);
// CONCATENATED MODULE: ./packages/avatar/index.js


avatar.install = function(Vue) {
  Vue.component(avatar.name, avatar);
};

/* harmony default export */ var packages_avatar = (avatar);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b198ce78-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/alert/src/alert.vue?vue&type=template&id=5b170f18&
var alertvue_type_template_id_5b170f18_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.transition}},[(_vm.visible)?_c('div',{staticClass:"bs-alert",class:[
            'bs-alert--' + _vm.type,
            _vm.transition ? 'bs-alert--transition' : '',
            {
                'bs-alert--showIcon': _vm.showIcon,
                'bs-alert--closable': _vm.closable,
                'bs-alert--dark': _vm.dark
            }
            
        ]},[(_vm.showIcon)?_c('div',{staticClass:"bs-alert-icon",class:'bs-alert-icon--' + _vm.type},[_c('i',{staticClass:"iconfont",class:'icon-bs-icon-' + _vm.typeIcon})]):_vm._e(),_c('span',{staticClass:"bs-alert-title"},[_vm._t("default")],2),(_vm.closable)?[(!_vm.closeText)?_c('i',{staticClass:"iconfont icon-bs-icon-close bs-alert-closebtn",on:{"click":_vm.close}}):_c('span',{staticClass:"bs-alert-closebtn bs-alert-closeText",on:{"click":_vm.close}},[_vm._v(_vm._s(_vm.closeText))])]:_vm._e()],2):_vm._e()])}
var alertvue_type_template_id_5b170f18_staticRenderFns = []


// CONCATENATED MODULE: ./packages/alert/src/alert.vue?vue&type=template&id=5b170f18&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/alert/src/alert.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var alertvue_type_script_lang_js_ = ({
  name: 'BAlert',
  props: {
      type: {
          type: String,
          default: 'info',
          validator: function(value) {
              return ['success', 'warning', 'info', 'error'].indexOf(value) !== -1
          }
      },
      showIcon: Boolean,
      closable: Boolean,
      closeText: String,
      dark: Boolean,
      icon: String,
      transition: {
          type: String,
          validator: function(value) {
              return ['fade', 'slide'].indexOf(value) !== -1
          }
      },
  },
  data() {
      return {
          visible: true,
      }
  },
  computed: {
      typeIcon() {
          let icon = '';
          if (this.icon) {
              icon = this.icon;
              return icon;
          }
          switch(this.type) {
              case 'success':
                  icon = 'success';
              break;
              case 'warning':
                  icon = 'warning';
              break;
              case 'info':
                  icon = 'info';
              break;
              case 'error':
                  icon = 'close';
              break;
          }
          return icon;
      }
  },
  methods: {
      close() {
          this.visible = false;
          this.$emit('close');
      }
  },
});

// CONCATENATED MODULE: ./packages/alert/src/alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/alert/src/alert.vue





/* normalize component */

var alert_component = normalizeComponent(
  src_alertvue_type_script_lang_js_,
  alertvue_type_template_id_5b170f18_render,
  alertvue_type_template_id_5b170f18_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_alert = (alert_component.exports);
// CONCATENATED MODULE: ./packages/alert/index.js


src_alert.install = function(Vue) {
    Vue.component(src_alert.name, src_alert);
}

/* harmony default export */ var packages_alert = (src_alert);
// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b198ce78-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/divider/src/divider.vue?vue&type=template&id=78d976bb&
var dividervue_type_template_id_78d976bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bs-divider",class:[
        'bs-divider--' + _vm.direction ],style:({margin: _vm.margin ? _vm.margin : ''})},[(_vm.$slots.default)?_c('div',{staticClass:"bs-divider-title",class:'bs-divider-title--' + _vm.position,style:({color: _vm.color ? _vm.color : '', fontSize: _vm.fontSize ? _vm.fontSize + 'px' : ''})},[_vm._t("default")],2):_vm._e()])}
var dividervue_type_template_id_78d976bb_staticRenderFns = []


// CONCATENATED MODULE: ./packages/divider/src/divider.vue?vue&type=template&id=78d976bb&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/divider/src/divider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var dividervue_type_script_lang_js_ = ({
    name: 'BDivider',
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator: function(value) {
                return ['horizontal', 'vertical'].indexOf(value) !== -1
            }
        },
        position: {
            type: String,
            default: 'center',
            validator: function(value) {
                return ['center', 'left', 'right'].indexOf(value) !== -1
            }
        },
        margin: String,
        color: String,
        fontSize: String,
    },
});

// CONCATENATED MODULE: ./packages/divider/src/divider.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_dividervue_type_script_lang_js_ = (dividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/divider/src/divider.vue





/* normalize component */

var divider_component = normalizeComponent(
  src_dividervue_type_script_lang_js_,
  dividervue_type_template_id_78d976bb_render,
  dividervue_type_template_id_78d976bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var divider = (divider_component.exports);
// CONCATENATED MODULE: ./packages/divider/index.js


divider.install = function(Vue) {
  Vue.component(divider.name, divider);
};

/* harmony default export */ var packages_divider = (divider);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b198ce78-vue-loader-template"}!./node_modules/_vue-loader@15.9.7@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=template&id=fa8aa324&
var loadingvue_type_template_id_fa8aa324_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"bs-loading-mark",style:({ backgroundColor: _vm.background || '' })},[_c('div',{staticClass:"bs-loading-spinning"},[_c('i',{staticClass:"iconfont bs-new-icon-loading",class:[_vm.icon ? 'icon-bs-icon-' + _vm.icon : 'icon-bs-icon-loading'],style:({ color: _vm.color || '' })}),_c('p',{staticClass:"bs-loading-text",style:({ color: _vm.color || '' })},[_vm._v(_vm._s(_vm.text))])])])}
var loadingvue_type_template_id_fa8aa324_staticRenderFns = []


// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=template&id=fa8aa324&

// CONCATENATED MODULE: ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.7@vue-loader/lib??vue-loader-options!./packages/loading/src/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
    data() {
        return {
            text: null,
            color: null,
            background: null,
            icon: null,
            visible: true
        }
    },
    methods: {
        change(data, value) {
            this[data] = value;
        },
    },
});

// CONCATENATED MODULE: ./packages/loading/src/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/loading/src/loading.vue





/* normalize component */

var loading_component = normalizeComponent(
  src_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_fa8aa324_render,
  loadingvue_type_template_id_fa8aa324_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading = (loading_component.exports);
// CONCATENATED MODULE: ./packages/utils/dom.js
function getStyle (element, styleName) {
    return document.defaultView.getComputedStyle(element, null);
};

function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
      return el.classList.contains(cls);
    } else {
      return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
};

function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');
  
    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) continue;
  
      if (el.classList) {
        el.classList.add(clsName);
      } else if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
    if (!el.classList) {
      el.className = curClass;
    }
};

function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';
    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) continue;
      if (el.classList) {
        el.classList.remove(clsName);
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
    if (!el.classList) {
      el.className = trim(curClass);
    }
};

function aaaaa(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';
    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) continue;
      if (el.classList) {
        el.classList.remove(clsName);
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
    if (!el.classList) {
      el.className = trim(curClass);
    }
};
// CONCATENATED MODULE: ./packages/loading/src/directive.js



const Mask = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(loading);



const loadingText = 'b-loading-text';
const loadingColor = 'b-loading-color';
const loadingBackground = 'b-loading-background';
const loadingIcon = 'b-loading-icon';

const positionParentAttr = 'b-loading-parent--position';
const overflowParentAttr = 'b-loading-parent--overflow';

const insertDom = function(parent, el, binding) {
    if (getStyle(parent, 'display') !== 'none' && getStyle(parent, 'visibility') !== 'hidden') {
        let originalPosition = getStyle(parent, 'position');
        if (originalPosition !== 'absolute' && originalPosition !== 'fixed') {
            addClass(parent, positionParentAttr);
        }
        if (binding.modifiers && binding.modifiers.lock) {
            addClass(parent, overflowParentAttr);
        }
        el.domVisible = true;
        parent.appendChild(el.mask);
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
            el.instance.visible = true;
        });
    }
    if (!binding.value) {
        removeClass(el, positionParentAttr);
        removeClass(el, overflowParentAttr);
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
            el.instance.visible = false;
        });
    }
}

const LoadingDirective = {
    install: function(Vue) {
        Vue.directive('b-loading', {
            bind: function(el, binding, vNode) {
                const textAttr = el.getAttribute(loadingText);
                const colorAttr = el.getAttribute(loadingColor);
                const backgroundAttr = el.getAttribute(loadingBackground);
                const iconAttr = el.getAttribute(loadingIcon);
                const vm = vNode.context;
                const mask = new Mask({
                    el: document.createElement('div'),
                    data: {
                        text: vm && vm[textAttr] || textAttr,
                        color: vm && vm[colorAttr] || colorAttr,
                        background: vm && vm[backgroundAttr] || backgroundAttr,
                        icon: vm && vm[iconAttr] || iconAttr,
                    }
                });
                el.instance = mask;
                el.mask = mask.$el;
                binding.value && insertDom(el, el, binding);
            },
            update: function(el, binding) {
                el.instance.change('text', el.getAttribute(loadingText));
                el.instance.change('color', el.getAttribute(loadingColor));
                el.instance.change('background', el.getAttribute(loadingBackground));
                el.instance.change('icon', el.getAttribute(loadingIcon));
                binding.oldValue !== binding.value && insertDom(el, el, binding);
            },
            unbind: function(el) {
                if (el.domVisible) {
                    el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
                }
                el.instance && el.instance.$destroy();
            }
        })
    }
}

/* harmony default export */ var directive = (LoadingDirective);
// CONCATENATED MODULE: ./packages/loading/index.js



/* harmony default export */ var packages_loading = ({
  install(Vue) {
    Vue.use(directive);
  },
  directive: directive,
});

// CONCATENATED MODULE: ./packages/index.js










const components = [
    packages_button,
    packages_button_group,
    packages_icon,
    packages_avatar,
    packages_alert,
    packages_divider,
]

const install = function(Vue, opts = {}) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
    Vue.use(packages_loading.directive);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


/* harmony default export */ var packages_0 = ({
    install,
    Button: packages_button
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.5.13@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});