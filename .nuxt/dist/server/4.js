exports.ids = [4];
exports.modules = {

/***/ 30:
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=1eadcf32&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-1eadcf32><div class=\"container\" data-v-1eadcf32><h1 class=\"logo-font\" data-v-1eadcf32>conduit</h1> <p data-v-1eadcf32>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-1eadcf32>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-1eadcf32>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-1eadcf32>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-1eadcf32>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-1eadcf32>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-1eadcf32>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'your_feed'},attrs:{"exact":"","to":{name: 'home', query: {tab: 'your_feed'}}}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-1eadcf32>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'global_feed'},attrs:{"exact":"","to":{name: 'home', query: {tab: 'global_feed'}}}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-1eadcf32>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{active: _vm.tab === 'tag'},attrs:{"to":{name: 'home', query: {tab: 'tag', tag: _vm.tag}}}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\" data-v-1eadcf32>","</div>",[_vm._ssrNode("<div class=\"article-meta\" data-v-1eadcf32>","</div>",[_c('nuxt-link',{attrs:{"to":{name: 'profile', params: {username: article.author.username}}}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-1eadcf32>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name: 'profile', params: {username: article.author.username}}}},[_vm._v("\n                                "+_vm._s(article.author.username)+"\n                            ")]),_vm._ssrNode(" <span class=\"date\" data-v-1eadcf32>"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+" data-v-1eadcf32><i class=\"ion-heart\" data-v-1eadcf32></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n                        ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{name: 'article', params: {slug: article.slug}}}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_vm._l((article.tagList),function(tag){return _c('ul',{staticClass:"tag-list"},[_c('li',{staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(tag))])])})],2)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"pagination\" data-v-1eadcf32>","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{active: _vm.page === item}))+" data-v-1eadcf32>","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{name: 'home', query:{page: item, tag: _vm.$route.query.tag, tab: _vm.tab}}}},[_vm._v(_vm._s(item))])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-1eadcf32>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-1eadcf32>","</div>",[_vm._ssrNode("<p data-v-1eadcf32>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-1eadcf32>","</div>",_vm._l((_vm.tags),function(item){return _c('nuxt-link',{staticClass:"tag-pill tag-default",attrs:{"to":{name: 'home', query: {tag: item, tab: 'tag'}}}},[_vm._v(_vm._s(item))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=1eadcf32&scoped=true&

// EXTERNAL MODULE: ./request/article.js
var request_article = __webpack_require__(30);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./request/tag.js
 // 获取标签列表

const getTags = () => {
  return request["b" /* request */].get('/api/tags');
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "home",
  watchQuery: ['page', 'tag', 'tab'],

  async asyncData({
    query,
    store
  }) {
    const page = Number(query.page || 1);
    const limit = 20;
    const {
      tag
    } = query;
    const qs = {
      limit,
      offset: (page - 1) * limit,
      tag
    };
    const tab = query.tab || 'global_feed';
    const loadArticle = store.state.user && tab === 'your_feed' ? request_article["k" /* getFeedArticles */] : request_article["i" /* getArticles */];
    const [articleRes, tagRes] = await Promise.all([loadArticle(qs), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(article => article.favoriteDisabled = false);
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab
    };
  },

  methods: {
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

  },
  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eadcf32",
  "4186c502"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map