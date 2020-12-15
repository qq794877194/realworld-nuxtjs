<template>
    <div>
        <!-- header -->
        <nav class="navbar navbar-light">
            <div class="container">
                <nuxt-link to="/" class="navbar-brand">realworld</nuxt-link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <nuxt-link class="nav-link" to="/" exact>首页</nuxt-link>
                    </li>
                    <template v-if="user">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/editor">
                                <i class="ion-compose"></i>&nbsp;发布文章
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/settings">
                                <i class="ion-gear-a"></i>&nbsp;设置
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/profile/1">
                                <img class="user-pic" :src="user.image"
                                     alt="">
                                {{user.username}}
                            </nuxt-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/login">登录</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/register">注册</nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
        <!--  中间 -->
        <nuxt-child></nuxt-child>
        <!-- footer -->
        <footer>
            <div class="container">
                <a href="/" class="logo-font">conduit</a>
                <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapState} from 'vuex';
    export default {
        name: "layout",
        computed: {
            ...mapState(['user'])
        }
    }
</script>

<style scoped>

</style>
