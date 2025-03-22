import Home from './views/Home.js'
import PostList from './views/PostList.js'
import PostDetail from './views/PostDetail.js'
import NotFound from './views/NotFound.js'

const routes = [
  { path: '/', component: Home },
  { path: '/posts', component: PostList },
  { path: '/post/:slug', component: PostDetail },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } 
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router
