(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view on2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Create an account" // override the parent template and just use the above title only

  },
  data: function data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirm: null,
      showValue: true,
      warning: false
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      this.warning = true;
      setTimeout(function () {
        _this.warning = false;
      }, 3000);
    }
  },
  computed: {
    dark: function dark() {
      return this.$store.state.dark;
    },
    loading: function loading() {
      return this.$store.state.loading;
    }
  }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--6-0!./node_modules/style-loader!./node_modules/css-loader??ref--6-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    [
      _c(
        "v-layout",
        {
          attrs: {
            "justify-center": "",
            "fill-height": "",
            "align-center": "",
            "mt-5": ""
          }
        },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", md5: "" } },
            [
              _c(
                "v-alert",
                { attrs: { type: "warning", value: _vm.warning } },
                [
                  _vm._v(
                    "Ooops This Function is not ready yet have to create your own"
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "v-form",
                [
                  _c("v-text-field", {
                    attrs: {
                      "prepend-icon": "mdi-email",
                      name: "name",
                      label: "Full name",
                      id: "registerName",
                      type: "text",
                      loading: _vm.loading
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      "prepend-icon": "mdi-account",
                      name: "email",
                      label: "Email",
                      id: "loginEmail",
                      type: "email",
                      loading: _vm.loading
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      name: "password",
                      label: "Enter your password",
                      min: "8",
                      "append-icon": _vm.showValue ? "mdi-eye-off" : "mdi-eye",
                      counter: "",
                      type: _vm.showValue ? "password" : "text",
                      "prepend-icon": "mdi-textbox-password",
                      loading: _vm.loading
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.showValue = !_vm.showValue
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      name: "password_confrim",
                      label: "Confirm Password",
                      min: "8",
                      "append-icon": _vm.showValue ? "mdi-eye-off" : "mdi-eye",
                      counter: "",
                      type: _vm.showValue ? "password" : "text",
                      "prepend-icon": "mdi-textbox-password",
                      loading: _vm.loading
                    },
                    on: {
                      "click:append": function($event) {
                        _vm.showValue = !_vm.showValue
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        large: "",
                        loading: _vm.loading,
                        dark: _vm.dark
                      },
                      on: { click: _vm.register }
                    },
                    [_vm._v("Sign up")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c&scoped=true& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Register_vue_vue_type_style_index_0_id_3563ad7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css& */ "./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3563ad7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_3563ad7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--6-0!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-2!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css& */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=style&index=0&id=3563ad7c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_3563ad7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_3563ad7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_3563ad7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_3563ad7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_6_0_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_3563ad7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);