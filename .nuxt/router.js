import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _458f4959 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _67b102ce = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _e2b0c14c = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _5c64015a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _7d478adc = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _39c06f9c = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _432e44a7 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _458f4959,
    children: [{
      path: "",
      component: _67b102ce,
      name: "home"
    }, {
      path: "/login",
      component: _e2b0c14c,
      name: "login"
    }, {
      path: "/register",
      component: _e2b0c14c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _5c64015a,
      name: "profile"
    }, {
      path: "/profile2/:username",
      component: _5c64015a,
      name: "profile2"
    }, {
      path: "/settings",
      component: _7d478adc,
      name: "settings"
    }, {
      path: "/editor",
      component: _39c06f9c,
      name: "editor"
    }, {
      path: "/editor/:slug",
      component: _39c06f9c,
      name: "editor2"
    }, {
      path: "/article/:slug",
      component: _432e44a7,
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
