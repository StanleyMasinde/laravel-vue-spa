(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views/view6"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Reset.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/passwords/Reset.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Reset.vue?vue&type=template&id=2f7dd830&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/passwords/Reset.vue?vue&type=template&id=2f7dd830& ***!
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
  return _c("navigation-bar", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Reset Password")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "form",
                { attrs: { method: "POST", action: "/password.update" } },
                [
                  _c("input", {
                    attrs: { type: "hidden", name: "token", value: "" }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "email" }
                      },
                      [_vm._v("E-Mail Address")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          id: "email",
                          type: "email",
                          name: "email",
                          value: "",
                          required: "",
                          autocomplete: "email",
                          autofocus: ""
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "invalid-feedback",
                          attrs: { role: "alert" }
                        },
                        [_c("strong")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "password" }
                      },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          id: "password",
                          type: "password",
                          name: "password",
                          required: "",
                          autocomplete: "new-password"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "invalid-feedback",
                          attrs: { role: "alert" }
                        },
                        [_c("strong")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "password-confirm" }
                      },
                      [_vm._v("Confirm Password")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          id: "password-confirm",
                          type: "password",
                          name: "password_confirmation",
                          required: "",
                          autocomplete: "new-password"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group row mb-0" }, [
                    _c("div", { staticClass: "col-md-6 offset-md-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Reset Password")]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/passwords/Reset.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/auth/passwords/Reset.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reset_vue_vue_type_template_id_2f7dd830___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset.vue?vue&type=template&id=2f7dd830& */ "./resources/js/views/auth/passwords/Reset.vue?vue&type=template&id=2f7dd830&");
/* harmony import */ var _Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reset.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/passwords/Reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reset_vue_vue_type_template_id_2f7dd830___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reset_vue_vue_type_template_id_2f7dd830___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/passwords/Reset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/passwords/Reset.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/auth/passwords/Reset.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/passwords/Reset.vue?vue&type=template&id=2f7dd830&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/auth/passwords/Reset.vue?vue&type=template&id=2f7dd830& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_2f7dd830___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset.vue?vue&type=template&id=2f7dd830& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Reset.vue?vue&type=template&id=2f7dd830&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_2f7dd830___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_2f7dd830___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);