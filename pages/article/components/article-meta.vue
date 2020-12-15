<template>
    <div class="article-meta">
        <nuxt-link :to="{name: 'profile', params: {username: article.author.username}}">
            <img :src="article.author.image" />
        </nuxt-link>
        <div class="info">
            <nuxt-link class="author" :to="{name: 'profile', params: {username: article.author.username}}">
                {{article.author.username}}
            </nuxt-link>
            <span class="date">{{article.createdAt}}</span>
        </div>
        <template v-if="isMe">

            <nuxt-link class="btn btn-outline-secondary btn-sm" :to="{name: 'editor2', params: {slug: article.slug}}">
              <i class="ion-edit"></i> 编辑文章
            </nuxt-link>

            <button class="btn btn-outline-danger btn-sm" @click="delArticle">
              <i class="ion-trash-a"></i> 删除文章
            </button>
        </template>
        <template v-else>
            <button class="btn btn-sm btn-outline-secondary" :class="{active: article.author.following}" @click="toggleFollow">
                <i class="ion-plus-round"></i>
                &nbsp;
                {{article.author.following ? 'Unfollow' : 'Follow'}} {{article.author.username}}
                <span class="counter">({{article.author.following - 0}})</span>
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary" :class="{active: article.favorited}" @click="toggleFavorite">
                <i class="ion-heart"></i>
                &nbsp;
                Favorite Post <span class="counter">({{article.favoritesCount}})</span>
            </button>
        </template>

    </div>
</template>

<script>
    import { addFollow, deleteFollow, addFavorite, deleteFavorite, deleteArticle} from "../../../request/article";

    export default {
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
          }
        },
        created(){
          this.following = this.article.author.following;
          this.favorited = this.article.favorited;
          this.favoritesCount = this.article.favoritesCount;
          this.isMe = this.article.author.username === this.$store.state.user.username;
        },
        methods: {
            async toggleFollow(){
                if(this.article.author.following){
                    await deleteFollow(this.article.author.username);
                }else{
                    await addFollow(this.article.author.username);
                }
                console.log(this.$route);
                const url = `/article/${this.$route.params.slug}?metaChange=${!this.article.author.following + 'follow'}`;
               this.$router.push(url)

            },
            async toggleFavorite(){
                if(this.article.favorited){
                    await deleteFavorite(this.article.slug);
                }else{
                    await addFavorite(this.article.slug);
                }
                const url = `/article/${this.$route.params.slug}?metaChange=${!this.article.favorited + 'favorited'}`;
                this.$router.push(url);
            },
            async delArticle(){
                await deleteArticle(this.article.slug);
                this.$router.push({name: 'home'});
            }
        }
    }
</script>

<style scoped>

</style>
