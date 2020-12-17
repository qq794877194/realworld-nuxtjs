exports.ids = [6];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateProfile; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const login = data => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post('/api/users/login', data);
};
const register = data => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post('/api/users', data);
}; // 获取用户信息

const getProfile = username => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/profiles/${username}`);
}; // 更新用户信息

const updateProfile = data => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].put('/api/user', data);
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=7760986f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\" data-v-7760986f><div class=\"row\" data-v-7760986f><div class=\"col-md-6 offset-md-3 col-xs-12\" data-v-7760986f><h1 class=\"text-xs-center\" data-v-7760986f>Your Settings</h1> <form data-v-7760986f><fieldset data-v-7760986f><fieldset class=\"form-group\" data-v-7760986f><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\" data-v-7760986f></fieldset> <fieldset class=\"form-group\" data-v-7760986f><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\" data-v-7760986f></fieldset> <fieldset class=\"form-group\" data-v-7760986f><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\" data-v-7760986f>"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\" data-v-7760986f><input type=\"text\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\" data-v-7760986f></fieldset> <fieldset class=\"form-group\" data-v-7760986f><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"form-control form-control-lg\" data-v-7760986f></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\" data-v-7760986f>\n                            更新设置信息\n                        </button></fieldset></form> <hr data-v-7760986f> <button class=\"btn btn-outline-danger\" data-v-7760986f>\n                    点击退出\n                </button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=7760986f&scoped=true&

// EXTERNAL MODULE: ./request/user.js
var user = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const cookie =  false ? undefined : undefined;

/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: "settings",

  data() {
    return {
      user: {
        username: '',
        image: '',
        bio: '',
        email: ''
      },
      password: ''
    };
  },

  created() {
    this.user = Object.assign({}, this.$store.state.user);
  },

  methods: {
    async settingUser() {
      if (this.password) {
        this.user.password = this.passes;
      }

      const {
        data
      } = await Object(user["d" /* updateProfile */])(this.user);
      cookie.set('user', data.user);
      this.$store.commit('setUser', data.user);
      this.$router.push('/profile/' + this.user.username);
    },

    logout() {
      cookie.remove('user');
      this.$store.commit('setUser', null);
      this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7760986f",
  "6a58327a"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map