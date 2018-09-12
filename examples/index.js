import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'

Vue.use(VueRouter)

import Face from '../dist/face'
import '../dist/face.css'
// import './variables.less';
Vue.use(Face);

import installation from './pages/installation'
import button from './doc/button.md'
import quick from './pages/quick'
import theme from './pages/theme'

import alert from './pages/alert'
// import button from './pages/button'
import icon from './pages/icon'
import loading from './pages/loading'
import pagination from './pages/pagination'
import popup from './pages/popup'
import table from './pages/table'
import tag from './pages/tag'
import view from './pages/view'

const _routes = [
    { path: '/installation', name: 'Installation', component:installation},
    { path: '/quick', name: 'Quick', component:quick},
    { path: '/theme', name: 'Theme', component:theme},

    { path: '/alert', name: 'Alert', component:alert},
    { path: '/button', name: 'Button', component:button},
    { path: '/icon', name: 'Icon', component:icon},
    { path: '/loading', name: 'Loading', component:loading},
    { path: '/pagination', name: 'Pagination', component:pagination},
    { path: '/popup', name: 'Popup', component:popup},
    { path: '/table', name: 'Table', component:table},
    { path: '/tag', name: 'Tag', component:tag},
    { path: '/view', name: 'View', component:view}
];

const router = new VueRouter({
    routes:_routes
})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
