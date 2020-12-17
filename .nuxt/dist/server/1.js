exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return publicArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共文章列表

const getArticles = params => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get('/api/articles', {
    params
  });
}; // 获取关注的用户的文章列表

const getFeedArticles = params => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get('/api/articles/feed', {
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/articles/${slug}/favorite`);
}; // 取消点赞

const deleteFavorite = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/articles/${slug}/favorite`);
}; // 获取文章详情

const getArticle = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/articles/${slug}`);
}; // 获取文章评论

const getComments = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].get(`/api/articles/${slug}/comments`);
}; // 添加文章评论

const addComments = (slug, data) => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/articles/${slug}/comments`, data);
}; // 删除文章评论

const deleteComment = (slug, id) => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/articles/${slug}/comments/${id}`);
}; // 添加对作者的关注

const addFollow = username => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post(`/api/profiles/${username}/follow`);
}; // 取消对作者的关注

const deleteFollow = username => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/profiles/${username}/follow`);
}; // 发布文章

const publicArticle = data => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].post('/api/articles', data);
}; // 修改文章

const updateArticle = (data, slug) => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].put(`/api/articles/${slug}`, data);
}; // 删除文章

const deleteArticle = slug => {
  return _plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"].delete(`/api/articles/${slug}`);
};

/***/ }),

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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=1340cb45&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-1340cb45><div class=\"container\" data-v-1340cb45><div class=\"row\" data-v-1340cb45><div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-1340cb45><img"+(_vm._ssrAttr("src",_vm.userInfo.image))+" class=\"user-img\" data-v-1340cb45> <h4 data-v-1340cb45>"+_vm._ssrEscape(_vm._s(_vm.userInfo.username))+"</h4> <p data-v-1340cb45>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.userInfo.bio)+"\n                    ")+"</p> <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active: _vm.userInfo.following}))+" data-v-1340cb45><i class=\"ion-plus-round\" data-v-1340cb45></i>"+_vm._ssrEscape("\n                         \n                        "+_vm._s(_vm.userInfo.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.userInfo.username)+"\n                    ")+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-1340cb45>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1340cb45>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-1340cb45>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-1340cb45>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-1340cb45>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-1340cb45>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{name: 'profile', params:{username: _vm.userInfo.username}}}},[_vm._v("我的文章")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-1340cb45>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{name: 'profile2', params:{username: _vm.userInfo.username}}}},[_vm._v("我喜欢的文章")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-1340cb45>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-1340cb45>","</div>",[_c('nuxt-link',{attrs:{"to":{name: 'profile', params: {username: article.author.username}}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-1340cb45>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name: 'profile', params: {username: article.author.username}}}},[_vm._v("\n                                "+_vm._s(article.author.username)+"\n                            ")]),_vm._ssrNode(" <span class=\"date\" data-v-1340cb45>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-1340cb45><i class=\"ion-heart\" data-v-1340cb45></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n                        ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name: 'article', params: {slug: article.slug}}}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_vm._l((article.tagList),function(tag){return _c('ul',{staticClass:"tag-list"},[_c('li',{staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])])})],2)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"pagination\" data-v-1340cb45>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: _vm.page === item}))+" data-v-1340cb45>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{name: _vm.$route.name, params:{username: _vm.userInfo.username}, query: {page: item}}}},[_vm._v(_vm._s(item))])],1)}),0)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=1340cb45&scoped=true&

// EXTERNAL MODULE: ./request/user.js
var user = __webpack_require__(29);

// EXTERNAL MODULE: ./request/article.js
var request_article = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  name: "profile",
  watchQuery: ['page', 'favorites'],

  async asyncData({
    query,
    store,
    params,
    route
  }) {
    const page = Number(query.page || 1);
    const limit = 20;
    const qs = {
      limit,
      offset: (page - 1) * limit,
      page
    };
    console.log(route);

    if (route.name === 'profile2') {
      qs.favorited = params.username;
    } else {
      qs.author = params.username;
    }

    const [profileRed, articleRes] = await Promise.all([Object(user["a" /* getProfile */])(params.username), Object(request_article["i" /* getArticles */])(qs)]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      profile
    } = profileRed.data;
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      articles,
      totalPage: Math.ceil(articlesCount / limit),
      limit,
      page,
      userInfo: profile
    };
  },

  data() {
    return {
      limit: 20,
      totalPage: 1
    };
  },

  methods: {
    async toggleFollow() {
      if (this.userInfo.following) {
        await Object(request_article["g" /* deleteFollow */])(this.userInfo.username);
        this.userInfo.following = false;
      } else {
        await Object(request_article["c" /* addFollow */])(this.userInfo.username);
        this.userInfo.following = true;
      }
    },

    async onFavorite(article) {
      if (article.favoriteDisabled) return;
      article.favoriteDisabled = true;

      if (article.favorited) {
        await Object(request_article["f" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        await Object(request_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1340cb45",
  "9c7a7e36"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map