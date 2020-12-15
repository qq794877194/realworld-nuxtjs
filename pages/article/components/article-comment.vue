<template>
    <div>
        <form class="card comment-form" @submit.prevent="addCommentToArticle"  v-if="user">
            <div class="card-block">
                <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="content" required></textarea>
            </div>
            <div class="card-footer">
                <img src="" class="comment-author-img" />
                <button class="btn btn-sm btn-primary">
                    添加评论
                </button>
            </div>
        </form>

        <div class="card" v-for="comment in comments" :key="comment.id">
            <div class="card-block">
                <p class="card-text">{{comment.body}}</p>
            </div>
            <div class="card-footer">
                <nuxt-link :to="{name: 'profile', params: {username: comment.author.username}}" class="comment-author">
                    <img class="comment-author-img" :src="comment.author.image" />
                </nuxt-link>
                &nbsp;
                <nuxt-link class="comment-author" :to="{name: 'profile', params: {username: comment.author.username}}">
                    {{comment.author.username}}
                </nuxt-link>
                <span class="date-posted">{{comment.createdAt}}</span>
                <span class="mod-options" v-if="user && user.username === comment.author.username" @click="delCommentToArticle(comment.id)">
                  <i class="ion-trash-a" title="删除评论"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import { getComments ,addComments, deleteComment} from '../../../request/article';
    import { mapState } from 'vuex';
    export default {
        name: "article-comment",
        props: {
            article: {
                type: Object,
                required: true
            }
        },
        data(){
            return {
                content: '',
                comments: []
            }
        },
        async mounted(){
            const { data } = await getComments(this.article.slug);
            this.comments = data.comments;
            console.log(this.user);
        },
        methods: {
            async addCommentToArticle() {
              const { data } = await addComments(this.article.slug, {comment: {body: this.content}});
              this.comments.push(data.comment);
              this.content = '';
            },
            async delCommentToArticle(id) {
                await deleteComment(this.article.slug, id);
                const index = this.comments.findIndex(c => c.id === id);
                this.comments.splice(index,1);
            }
        },
        computed: {
            ...mapState(['user'])
        }
    }
</script>

<style scoped>

</style>
