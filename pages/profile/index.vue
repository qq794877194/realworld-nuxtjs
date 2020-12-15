<template>
    <div class="profile-page">

        <div class="user-info">
            <div class="container">
                <div class="row">

                    <div class="col-xs-12 col-md-10 offset-md-1">
                        <img :src="userInfo.image" class="user-img" />
                        <h4>{{userInfo.username}}</h4>
                        <p>
                            {{userInfo.bio}}
                        </p>
                        <button class="btn btn-sm btn-outline-secondary action-btn"
                                :class="{active: userInfo.following}"
                                @click="toggleFollow">
                            <i class="ion-plus-round"></i>
                            &nbsp;
                            {{userInfo.following ? 'Unfollow' : 'Follow'}} {{userInfo.username}}
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">

                <div class="col-xs-12 col-md-10 offset-md-1">
                    <div class="articles-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :to="{name: 'profile', params:{username: userInfo.username}}" >我的文章</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link class="nav-link" :to="{name: 'profile2', params:{username: userInfo.username}}">我喜欢的文章</nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="article-preview" v-for="article in articles">
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
                            <nuxt-link :to="{name: $route.name, params:{username: userInfo.username}, query: {page: item}}" class="page-link">{{item}}</nuxt-link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import { getProfile } from '../../request/user';
    import { addFollow, deleteFollow, addFavorite, deleteFavorite } from "../../request/article";
    import {getArticles} from "../../request/article";

    export default {
        middleware: 'authenticated',
        name: "profile",
        watchQuery: ['page', 'favorites'],
        async asyncData({query, store, params, route}){
            const page = Number(query.page || 1);
            const limit = 20;
            const qs = {
                limit,
                offset: (page - 1) * limit,
                page
            };
            console.log(route);
            if(route.name === 'profile2'){
                qs.favorited = params.username;
            }else{
                qs.author = params.username;
            }
            const [ profileRed, articleRes] = await Promise.all([
                getProfile(params.username),
                getArticles(qs)
            ]);
            const {articles, articlesCount} = articleRes.data;
            const {profile} = profileRed.data;

            articles.forEach(article => article.favoriteDisabled = false);
            return {
                articles,
                totalPage: Math.ceil(articlesCount / limit),
                limit,
                page,
                userInfo: profile
            }
        },
        data() {
            return {
                limit: 20,
                totalPage: 1
            }
        },

        methods: {
            async toggleFollow(){
                if(this.userInfo.following){
                    await deleteFollow(this.userInfo.username);
                    this.userInfo.following = false;
                }else{
                    await addFollow(this.userInfo.username);
                    this.userInfo.following = true;
                }
            },
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
        }
    }
</script>

<style scoped>

</style>
