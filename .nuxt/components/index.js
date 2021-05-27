export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Projects } from '../../components/Projects.vue'
export { default as Search } from '../../components/Search.vue'
export { default as Social } from '../../components/Social.vue'
export { default as TechStack } from '../../components/TechStack.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => c.default || c)
export const LazyProjects = import('../../components/Projects.vue' /* webpackChunkName: "components/projects" */).then(c => c.default || c)
export const LazySearch = import('../../components/Search.vue' /* webpackChunkName: "components/search" */).then(c => c.default || c)
export const LazySocial = import('../../components/Social.vue' /* webpackChunkName: "components/social" */).then(c => c.default || c)
export const LazyTechStack = import('../../components/TechStack.vue' /* webpackChunkName: "components/tech-stack" */).then(c => c.default || c)
