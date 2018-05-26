import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeBase from '../components/Home/Base.vue'
Vue.use(VueRouter);
        
export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            path: '/', 
            name: '投票',
            component: HomeBase,
            children: [
                { path: '/index', component: resolve =>void(require(['../components/Home/Index.vue'], resolve)), name: '用户管理'},
            ]
        },
        {
            path: '/', 
            name: '投票',
            component: HomeBase,
            children: [
                { path: '/page/:id',name:'page',component: resolve =>void(require(['../components/Home/Page.vue'], resolve)), name: '用户管理'},
            ]
        },
        {
            path: '/', 
            name: '投票',
            component: HomeBase,
            children: [
                { path: '/me',name:'me',component: resolve =>void(require(['../components/Home/Me.vue'], resolve))},
            ]
        },
        {
            path: '/me', 
            name: '投票',
            component: HomeBase,
            children: [
                { path: '/myPlayer',name:'myPlayer',component: resolve =>void(require(['../components/Home/MyPlayer.vue'], resolve))},
            ]
        },
        {
            path: '/me', 
            name: '投票',
            component: HomeBase,
            children: [
                { path: '/myPage',name:'myPage',component: resolve =>void(require(['../components/Home/MyPage.vue'], resolve))},
            ]
        },
        {
            path: '/add', 
            name: '添加选手',
            component: HomeBase,
            children: [
                { path: '/addPlayer',name:'addPlayer',component: resolve =>void(require(['../components/Home/AddPlayer2.vue'], resolve))},
            ]
        },
    ],
});