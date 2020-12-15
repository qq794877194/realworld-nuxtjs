<template>
    <div class="article-page">

        <div class="banner">
            <div class="container">

                <h1>{{article.title}}</h1>


                <article-meta :article="article"></article-meta>
            </div>
        </div>

        <div class="container page">

            <div class="row article-content">
                <div class="col-md-12" v-html="article.body"></div>
                <ul class="tag-list" v-for="tag in article.tagList">
                    <li class="tag-default tag-pill tag-outline">{{tag}}</li>
                </ul>
            </div>

            <hr />

            <div class="article-actions">
                <article-meta :article="article"></article-meta>
            </div>

            <div class="row">

                <div class="col-xs-12 col-md-8 offset-md-2">
                    <article-comment :article="article" ></article-comment>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import { getArticle } from '../../request/article';
    import markdownIt from 'markdown-it';
    import articleMeta from './components/article-meta.vue';
    import articleComment from './components/article-comment.vue';
    export default {
        watchQuery: ['metaChange'],
        name: "article",
        async asyncData({ params }){
            const { data } = await getArticle(params.slug);
            const { article } = data;
            const md = new markdownIt();
            article.body = md.render(article.body);
            return {
                article
            }
        },
        head(){
            return {
                title: `${this.article.title} - realworld`,
                meta: [
                    {hid: 'description', name: 'description', content: this.article.description}
                ]
            }
        },
        components: {
            articleMeta,
            articleComment
        }
    }
</script>

<style scoped>

</style>
