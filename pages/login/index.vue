<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">{{isLogin ? '登录' : '注册'}}</h1>
                    <p class="text-xs-center">
                        <nuxt-link to="/login" v-if="!isLogin">已有帐号? 去登录</nuxt-link>
                        <nuxt-link to="/register" v-else>还没账号? 去注册</nuxt-link>
                    </p>

                    <ul class="error-messages">
                        <template v-for="(err,field) in errors">
                            <li v-for="msg in err">{{field}} {{msg}}</li>
                        </template>

                    </ul>

                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group" v-if="!isLogin">
                            <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="email" placeholder="Email" v-model="user.email" required>
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password" required>
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">
                            {{isLogin ? '登录' : '注册'}}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {login, register} from '../../request/user';
    const cookie = process.client ? require('js-cookie') : undefined;
    export default {
        middleware: 'notauthenticated',
        name: "login",
        data(){
            return{
                user: {
                    username: 'zaqx',
                    email: 'zaqx@qq.com',
                    password: ''
                },
                errors: {}
            }
        },
        methods: {
            async onSubmit(){
                try{
                    const info = {user: this.user};
                    const { data } = this.isLogin ?
                        await login(info) :
                        await register(info);

                    this.$store.commit('setUser', data.user);
                    // 防止刷新页面数据丢失， 需要把数据存到cookie,持久化保存
                    cookie.set('user', data.user);
                    console.log(data);
                    this.$router.push('/');
                }catch (e) {
                    this.errors = e.response.data.errors;
                }
            }
        },
        computed: {
            isLogin(){
                return this.$route.name === 'login'
            }
        }
    }
</script>
