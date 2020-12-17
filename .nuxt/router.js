import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f07ca45 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _9e26628c = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _6ce550ee = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _bc08c424 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _2eb8307e = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _2338f088 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _ee743d8a = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _2f07ca45,
    children: [{
      path: "",
      component: _9e26628c,
      name: "home"
    }, {
      path: "/login",
      component: _6ce550ee,
      name: "login"
    }, {
      path: "/register",
      component: _6ce550ee,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _bc08c424,
      name: "profile"
    }, {
      path: "/profile2/:username",
      component: _bc08c424,
      name: "profile2"
    }, {
      path: "/settings",
      component: _2eb8307e,
      name: "settings"
    }, {
      path: "/editor",
      component: _2338f088,
      name: "editor"
    }, {
      path: "/editor/:slug",
      component: _2338f088,
      name: "editor2"
    }, {
      path: "/article/:slug",
      component: _ee743d8a,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
