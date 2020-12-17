exports.ids = [2];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=ec40615e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-ec40615e>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-ec40615e>","</div>",[_vm._ssrNode("<h1 data-v-ec40615e>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-ec40615e>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-ec40615e><div class=\"col-md-12\" data-v-ec40615e>"+(_vm._s(_vm.article.body))+"</div> "+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<ul class=\"tag-list\" data-v-ec40615e><li class=\"tag-default tag-pill tag-outline\" data-v-ec40615e>"+_vm._ssrEscape(_vm._s(tag))+"</li></ul>")}))+"</div> <hr data-v-ec40615e> "),_vm._ssrNode("<div class=\"article-actions\" data-v-ec40615e>","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\" data-v-ec40615e>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-ec40615e>","</div>",[_c('article-comment',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=ec40615e&scoped=true&

// EXTERNAL MODULE: ./request/article.js
var request_article = __webpack_require__(28);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=fc2f8048&scoped=true&
var article_metavue_type_template_id_fc2f8048_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{name: 'profile', params: {username: _vm.article.author.username}}}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-fc2f8048>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name: 'profile', params: {username: _vm.article.author.username}}}},[_vm._v("\n            "+_vm._s(_vm.article.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date\" data-v-fc2f8048>"+_vm._ssrEscape(_vm._s(_vm.article.createdAt))+"</span>")],2),_vm._ssrNode(" "),(_vm.isMe)?[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{name: 'editor2', params: {slug: _vm.article.slug}}}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" 编辑文章\n        ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\" data-v-fc2f8048><i class=\"ion-trash-a\" data-v-fc2f8048></i> 删除文章\n        </button>")]:_vm._ssrNode("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+" data-v-fc2f8048><i class=\"ion-plus-round\" data-v-fc2f8048></i>"+_vm._ssrEscape("\n             \n            "+_vm._s(_vm.article.author.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.article.author.username)+"\n            ")+"<span class=\"counter\" data-v-fc2f8048>"+_vm._ssrEscape("("+_vm._s(_vm.article.author.following - 0)+")")+"</span></button>\n          \n        <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+" data-v-fc2f8048><i class=\"ion-heart\" data-v-fc2f8048></i>\n             \n            Favorite Post <span class=\"counter\" data-v-fc2f8048>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var article_metavue_type_template_id_fc2f8048_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=fc2f8048&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: "article-meta",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      following: false,
      favorited: false,
      favoritesCount: 0,
      isMe: false
    };
  },

  created() {
    this.following = this.article.author.following;
    this.favorited = this.article.favorited;
    this.favoritesCount = this.article.favoritesCount;
    this.isMe = this.article.author.username === this.$store.state.user.username;
  },

  methods: {
    async toggleFollow() {
      if (this.article.author.following) {
        await Object(request_article["g" /* deleteFollow */])(this.article.author.username);
      } else {
        await Object(request_article["c" /* addFollow */])(this.article.author.username);
      }

      console.log(this.$route);
      const url = `/article/${this.$route.params.slug}?metaChange=${!this.article.author.following + 'follow'}`;
      this.$router.push(url);
    },

    async toggleFavorite() {
      if (this.article.favorited) {
        await Object(request_article["f" /* deleteFavorite */])(this.article.slug);
      } else {
        await Object(request_article["b" /* addFavorite */])(this.article.slug);
      }

      const url = `/article/${this.$route.params.slug}?metaChange=${!this.article.favorited + 'favorited'}`;
      this.$router.push(url);
    },

    async delArticle() {
      await Object(request_article["d" /* deleteArticle */])(this.article.slug);
      this.$router.push({
        name: 'home'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_fc2f8048_scoped_true_render,
  article_metavue_type_template_id_fc2f8048_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "fc2f8048",
  "210c5ebc"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=template&id=3948a60a&scoped=true&
var article_commentvue_type_template_id_3948a60a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.user)?("<form class=\"card comment-form\" data-v-3948a60a><div class=\"card-block\" data-v-3948a60a><textarea placeholder=\"Write a comment...\" rows=\"3\" required=\"required\" class=\"form-control\" data-v-3948a60a>"+_vm._ssrEscape(_vm._s(_vm.content))+"</textarea></div> <div class=\"card-footer\" data-v-3948a60a><img src class=\"comment-author-img\" data-v-3948a60a> <button class=\"btn btn-sm btn-primary\" data-v-3948a60a>\n                添加评论\n            </button></div></form>"):"<!---->")+" "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\" data-v-3948a60a>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-3948a60a><p class=\"card-text\" data-v-3948a60a>"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-3948a60a>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{name: 'profile', params: {username: comment.author.username}}}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n             \n            "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{name: 'profile', params: {username: comment.author.username}}}},[_vm._v("\n                "+_vm._s(comment.author.username)+"\n            ")]),_vm._ssrNode(" <span class=\"date-posted\" data-v-3948a60a>"+_vm._ssrEscape(_vm._s(comment.createdAt))+"</span> "+((_vm.user && _vm.user.username === comment.author.username)?("<span class=\"mod-options\" data-v-3948a60a><i title=\"删除评论\" class=\"ion-trash-a\" data-v-3948a60a></i></span>"):"<!---->"))],2)],2)})],2)}
var article_commentvue_type_template_id_3948a60a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=template&id=3948a60a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: "article-comment",
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      content: '',
      comments: []
    };
  },

  async mounted() {
    const {
      data
    } = await Object(request_article["j" /* getComments */])(this.article.slug);
    this.comments = data.comments;
    console.log(this.user);
  },

  methods: {
    async addCommentToArticle() {
      const {
        data
      } = await Object(request_article["a" /* addComments */])(this.article.slug, {
        comment: {
          body: this.content
        }
      });
      this.comments.push(data.comment);
      this.content = '';
    },

    async delCommentToArticle(id) {
      await Object(request_article["e" /* deleteComment */])(this.article.slug, id);
      const index = this.comments.findIndex(c => c.id === id);
      this.comments.splice(index, 1);
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comment.vue



function article_comment_injectStyles (context) {
  
  
}

/* normalize component */

var article_comment_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  article_commentvue_type_template_id_3948a60a_scoped_true_render,
  article_commentvue_type_template_id_3948a60a_scoped_true_staticRenderFns,
  false,
  article_comment_injectStyles,
  "3948a60a",
  "29f2065c"
  
)

/* harmony default export */ var article_comment = (article_comment_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  watchQuery: ['metaChange'],
  name: "article",

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(request_article["h" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  head() {
    return {
      title: `${this.article.title} - realworld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  components: {
    articleMeta: article_meta,
    articleComment: article_comment
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "ec40615e",
  "70c1f01c"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map