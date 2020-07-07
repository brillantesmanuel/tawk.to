import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from './pages/default.vue'
import Category from './pages/category.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        components: Hello,
        name: 'home'
    }
]

export default new VueRouter({
    routes: [
        {
          path: '/',
          name: 'Hello',
          component: Hello
        },
        {
            path: '/category/:catID',
            name: 'Category',
            component: Category
        }
    ]
}); 