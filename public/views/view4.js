(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views/view4"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      errors: {}
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      this.$store.state.loading = true;
      var form = document.querySelector("#registerForm");
      var formData = new FormData(form);
      this.$http.post("/api/auth/register", formData).then(function (res) {
        _this.$store.state.token = localStorage.token = res.data;

        _this.$store.commit("login", res.data);
      })["catch"](function (err) {
        _this.errors = err.response.data.errors;
      })["finally"](function () {
        _this.$store.state.loading = false;
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Register")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _vm._l(_vm.errors, function(error, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "alert alert-danger",
                    attrs: { role: "alert" }
                  },
                  [_c("strong", [_vm._v(_vm._s(error[0]))])]
                )
              }),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    id: "registerForm",
                    method: "POST",
                    action: "register"
                  },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.register($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-md-4 col-form-label text-md-right",
                        attrs: { for: "name" }
                      },
                      [_vm._v("Name")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        staticClass: "form-control",
                        attrs: {
                          id: "name",
                          type: "text",
                          name: "name",
                          autofocus: "",
                          autocomplete: "family-name"
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
                          autocomplete: "email"
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
                        [_vm._v("Register")]
                      )
                    ])
                  ])
                ]
              )
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/Register.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=0a273bdb& */ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=0a273bdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Register.vue?vue&type=template&id=0a273bdb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_0a273bdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);