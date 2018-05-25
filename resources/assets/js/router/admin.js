import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminBase from '../components/Admin/Base.vue'
Vue.use(VueRouter);
        
export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            path: '/', 
            name: '用户管理',
            iconCls: 'el-icon-service',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/user', component: resolve =>void(require(['../components/Admin/User.vue'], resolve)), name: '用户列表'},
            ]
        },
        {
            path: '/', 
            name: '视频管理',
            iconCls: 'el-icon-view',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/video', component: resolve =>void(require(['../components/Admin/Video.vue'], resolve)), name: '视频列表'},
            ]
        },
        {
            path: '/', 
            name: '页面管理',
            iconCls: 'el-icon-document',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/page', component: resolve =>void(require(['../components/Admin/Page.vue'], resolve)), name: '活动列表'},
            ]
        },
        {
            path: '/admin', 
            name: '轮播管理',
            iconCls: 'el-icon-picture',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/admin/carousel', component: resolve =>void(require(['../components/Admin/Carousel.vue'], resolve)), name: '轮播列表'},
            ]
        },
        {
            path: '/', 
            name: '赞助管理',
            iconCls: 'el-icon-more',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/sponsor', component: resolve =>void(require(['../components/Admin/Sponsor.vue'], resolve)), name: '赞助管理'},
            ]
        },
    ],
});