import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ad8f8b42 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c869b47a = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _55d2688a = () => interopDefault(import('../pages/community.vue' /* webpackChunkName: "pages/community" */))
const _3e8ff2f2 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _2b17b66c = () => interopDefault(import('../pages/credits.vue' /* webpackChunkName: "pages/credits" */))
const _cbd6f70a = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _6e1fd5b8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _ad8f8b42,
    name: "about"
  }, {
    path: "/blog",
    component: _c869b47a,
    name: "blog"
  }, {
    path: "/community",
    component: _55d2688a,
    name: "community"
  }, {
    path: "/contact",
    component: _3e8ff2f2,
    name: "contact"
  }, {
    path: "/credits",
    component: _2b17b66c,
    name: "credits"
  }, {
    path: "/blog/:slug",
    component: _cbd6f70a,
    name: "blog-slug"
  }, {
    path: "/",
    component: _6e1fd5b8,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
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
