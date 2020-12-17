exports.ids = [5];
exports.modules = {

/***/ 31:
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=21857351&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? '登录' : '注册'))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("已有帐号? 去登录")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("还没账号? 去注册")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(err,field){return ((_vm._ssrList((err),function(msg){return ("<li>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(msg))+"</li>")})))}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.isLogin ? '登录' : '注册')+"\n                    ")+"</button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=21857351&

// EXTERNAL MODULE: ./request/user.js
var user = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  middleware: 'notauthenticated',
  name: "login",

  data() {
    return {
      user: {
        username: 'zaqx',
        email: 'zaqx@qq.com',
        password: ''
      },
      errors: {}
    };
  },

  methods: {
    async onSubmit() {
      try {
        const info = {
          user: this.user
        };
        const {
          data
        } = this.isLogin ? await Object(user["b" /* login */])(info) : await Object(user["c" /* register */])(info);
        this.$store.commit('setUser', data.user); // 防止刷新页面数据丢失， 需要把数据存到cookie,持久化保存

        cookie.set('user', data.user);
        console.log(data);
        this.$router.push('/');
      } catch (e) {
        this.errors = e.response.data.errors;
      }
    }

  },
  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "402f4bb6"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map