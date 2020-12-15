<template>
    <div class="settings-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>

                    <form @submit.prevent="settingUser">
                        <fieldset>
                            <fieldset class="form-group">
                                <input class="form-control" type="text" placeholder="URL of profile picture" v-model="user.image">
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username" required>
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you" v-model="user.bio"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email" required>
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="password">
                            </fieldset>
                            <button class="btn btn-lg btn-primary pull-xs-right">
                                更新设置信息
                            </button>
                        </fieldset>
                    </form>
                    <hr>
                    <button class="btn btn-outline-danger" @click="logout">
                        点击退出
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    const cookie = process.client ? require('js-cookie') : undefined;
    import { updateProfile } from "../../request/user";

    export default {
        middleware: 'authenticated',
        name: "settings",
        data(){
          return {
              user: {
                  username: '',
                  image: '',
                  bio: '',
                  email: '',
              },
              password: ''
          }
        },
        created(){
          this.user = Object.assign({},this.$store.state.user);
        },
        methods: {
            async settingUser(){
                if(this.password){
                    this.user.password = this.passes;
                }
                const { data } = await updateProfile(this.user);
                cookie.set('user', data.user);
                this.$store.commit('setUser', data.user);
                this.$router.push('/profile/' + this.user.username);

            },
            logout(){
                cookie.remove('user');
                this.$store.commit('setUser', null);
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>

</style>
