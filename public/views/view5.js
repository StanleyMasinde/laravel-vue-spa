(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views/view5"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Email.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/passwords/Email.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      emailSent: false
    };
  },
  computed: {
    error: function error() {
      return this.$store.state.error;
    }
  },
  methods: {
    resetPassword: function resetPassword() {
      this.$store.state.loading = true;
      var form = document.querySelector("#resetRequest");
      var formData = new FormData(form);
      this.$http.post("/api/password/reset", formData).then(function (res) {
        console.log(res.response.data);
      })["catch"](function (err) {
        console.error(err);
      })["finally"](this.$store.state.loading = false);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Email.vue?vue&type=template&id=354017fd&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/passwords/Email.vue?vue&type=template&id=354017fd& ***!
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
              _vm.emailSent
                ? _c(
                    "div",
                    {
                      staticClass: "alert alert-success",
                      attrs: { role: "alert" }
                    },
                    [_vm._v("Reset status")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    id: "resetRequest",
                    method: "POST",
                    action: "/password/email"
                  },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.resetPassword($event)
                    }
                  }
                },
                [
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
                          required: "",
                          autocomplete: "email",
                          autofocus: "",
                          name: "email"
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
                  _c("div", { staticClass: "form-group row mb-0" }, [
                    _c("div", { staticClass: "col-md-6 offset-md-4" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Send Password Reset Link")]
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

/***/ "./resources/js/views/auth/passwords/Email.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/auth/passwords/Email.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Email_vue_vue_type_template_id_354017fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=354017fd& */ "./resources/js/views/auth/passwords/Email.vue?vue&type=template&id=354017fd&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/passwords/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_354017fd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Email_vue_vue_type_template_id_354017fd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/passwords/Email.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/passwords/Email.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/auth/passwords/Email.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/passwords/Email.vue?vue&type=template&id=354017fd&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/auth/passwords/Email.vue?vue&type=template&id=354017fd& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_354017fd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=template&id=354017fd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/passwords/Email.vue?vue&type=template&id=354017fd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_354017fd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_354017fd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);