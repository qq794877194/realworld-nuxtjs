<template>
    <div class="home-page">

        <div class="banner">
            <div class="container">
                <h1 class="logo-font">conduit</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>

        <div class="container page">
            <div class="row">

                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item" v-if="user">
                                <nuxt-link class="nav-link" :class="{active: tab === 'your_feed'}" exact :to="{name: 'home', query: {tab: 'your_feed'}}">Your Feed</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :class="{active: tab === 'global_feed'}" exact :to="{name: 'home', query: {tab: 'global_feed'}}">Global Feed</nuxt-link>
                            </li>
                            <li class="nav-item" v-if="tag">
                                <nuxt-link class="nav-link" :class="{active: tab === 'tag'}" :to="{name: 'home', query: {tab: 'tag', tag}}">#{{tag}}</nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="article-preview" v-for="article in articles" :key="article.slug">
                        <div class="article-meta">
                            <nuxt-link :to="{name: 'profile', params: {username: article.author.username}}">
                                <img :src="article.author.image" />
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link class="author" :to="{name: 'profile', params: {username: article.author.username}}">
                                    {{article.author.username}}
                                </nuxt-link>
                                <span class="date">{{article.createdAt | date}}</span>
                            </div>
                            <button class="btn btn-outline-primary btn-sm pull-xs-right"
                                    @click="onFavorite(article)"
                                    :disabled="article.favoriteDisabled"
                                    :class="{active: article.favorited}">
                                <i class="ion-heart"></i> {{article.favoritesCount}}
                            </button>
                        </div>
                        <nuxt-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
                            <h1>{{article.title}}</h1>
                            <p>{{article.description}}</p>
                            <span>Read more...</span>
                            <ul class="tag-list" v-for="tag in article.tagList">
                                <li class="tag-default tag-pill tag-outline">{{tag}}</li>
                            </ul>
                        </nuxt-link>
                    </div>
                    <!--分页-->
                    <ul class="pagination">
                        <li class="page-item" :class="{active: page === item}" v-for="item in totalPage">
                            <nuxt-link :to="{name: 'home', query:{page: item, tag: $route.query.tag, tab}}" class="page-link">{{item}}</nuxt-link>
                        </li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <div class="sidebar">
                        <p>Popular Tags</p>

                        <div class="tag-list">
                            <nuxt-link :to="{name: 'home', query: {tag: item, tab: 'tag'}}" class="tag-pill tag-default" v-for="item in tags">{{item}}</nuxt-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import {getArticles,getFeedArticles, addFavorite, deleteFavorite} from "../../request/article";
    import {getTags} from '../../request/tag';
    import {mapState} from 'vuex';
    export default {
        name: "home",
        watchQuery: ['page','tag', 'tab'],
        async asyncData({query, store}){
            const page = Number(query.page || 1);
            const limit = 20;

            const { tag } = query;
            const qs = {
                limit,
                offset: (page - 1) * limit,
                tag
            };
            const tab = query.tab || 'global_feed';
            const loadArticle = store.state.user && tab === 'your_feed' ? getFeedArticles : getArticles;
            const [articleRes, tagRes] = await Promise.all([
                loadArticle(qs),
                getTags()
            ]);
            const {articles, articlesCount} = articleRes.data;
            const {tags} = tagRes.data;

            articles.forEach(article => article.favoriteDisabled = false);
            return {
                articles,
                articlesCount,
                limit,
                page,
                tags,
                tag,
                tab
            }
        },
        methods: {
            async onFavorite(article){
                if(article.favoriteDisabled) return;
                article.favoriteDisabled = true;
                if(article.favorited){
                    await deleteFavorite(article.slug);
                    article.favorited = false;
                    article.favoritesCount += -1;
                }else{
                    await addFavorite(article.slug);
                    article.favorited = true;
                    article.favoritesCount += 1;
                }
                article.favoriteDisabled = false;
            }
        },
        computed: {
            totalPage(){
                return Math.ceil(this.articlesCount / this.limit);
            },
            ...mapState(['user'])
        }
    }
</script>

<style scoped>

</style>
