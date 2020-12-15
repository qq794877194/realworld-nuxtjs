<template>
    <div class="editor-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-10 offset-md-1 col-xs-12">
                    <form id="form" @submit.prevent="newPost" onkeydown="if(event.keyCode==13){return false;}">
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model="article.title" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input type="text" class="form-control" placeholder="What's this article about?" v-model="article.description" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model="article.body" required></textarea>
                        </fieldset>
                        <fieldset class="form-group">
                            <input type="text" class="form-control" placeholder="Enter tags" v-model="tag" ref="tag">
                            <div class="tag-list">
                                    <span v-for="tag in article.tagList" class="tag-default tag-pill ng-binding ng-scope">
                                            <i class="ion-close-round" @click="removeTag(tag)"></i>
                                         {{tag}}
                                    </span>
                            </div>
                        </fieldset>
                        <button class="btn btn-lg pull-xs-right btn-primary">
                            {{isEdit ? '编辑文章' : '发布文章'}}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { publicArticle, getArticle, updateArticle,  } from '../../request/article';
    export default {
        middleware: 'authenticated',
        name: "editor",
        data(){
            return {
                article: {
                    title: '',
                    description: '',
                    body: '',
                    tagList: []
                },
                tag: '',
                isEdit: false
            }
        },
        created(){
          if(this.$route.params.slug){
              this.isEdit = true;
              getArticle(this.$route.params.slug).then(res => {
                  this.article = res.data.article;
              })
          }
        },
        mounted(){
          window.addEventListener('keydown', () => {
              if(event.keyCode === 13 && document.activeElement === this.$refs.tag){
                  this.addTag();
              }
          })
        },
        methods: {
            async newPost() {
                const fn = this.isMe ? updateArticle : publicArticle;
                const {data} = await fn({article: this.article});
                this.$router.push('/article/' + data.article.slug);
            },
            addTag(){
                if(!this.tag.length) return;
                this.article.tagList.push(this.tag);
                this.tag = '';
            },
            removeTag(tag){
                const index = this.article.tagList.findIndex(t => t === tag);
                if(index > -1){
                    this.article.tagList.splice(index,1);
                }
            }
        }
    }
</script>

<style scoped>

</style>
