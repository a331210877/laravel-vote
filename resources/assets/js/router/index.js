import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminBase from '../components/Admin/Base.vue'
import HomeBase from '../components/Home/Base.vue'
Vue.use(VueRouter);
        
export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            path: '/admin', 
            name: '用户管理',
            iconCls: 'el-icon-message',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/admin/user', component: resolve =>void(require(['../components/Admin/User.vue'], resolve)), name: '用户管理'},
            ]
        },
        {
            path: '/admin', 
            name: '视频管理',
            iconCls: 'el-icon-message',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/admin/video', component: resolve =>void(require(['../components/Admin/Video.vue'], resolve)), name: '视频管理'},
            ]
        },
        {
            path: '/admin', 
            name: '页面管理',
            iconCls: 'el-icon-message',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/admin/page', component: resolve =>void(require(['../components/Admin/Page.vue'], resolve)), name: '页面管理'},
            ]
        },
        {
            path: '/admin', 
            name: '轮播管理',
            iconCls: 'el-icon-message',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/admin/carousel', component: resolve =>void(require(['../components/Admin/Carousel.vue'], resolve)), name: '轮播管理'},
            ]
        },
        {
            path: '/admin', 
            name: '赞助管理',
            iconCls: 'el-icon-message',//图标样式class
            component: AdminBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/admin/sponsor', component: resolve =>void(require(['../components/Admin/Sponsor.vue'], resolve)), name: '赞助管理'},
            ]
        },
        // {
        //     path: '/home', 
        //     name: '个人中心',
        //     iconCls: 'el-icon-message',//图标样式class
        //     component: HomeBase,
        //     leaf: true,//只有一个节点
        //     children: [
        //         { path: '/home/video', component: resolve =>void(require(['../components/Home/Video.vue'], resolve)), name: '赞助管理'},
        //     ]
        // },
        // {
        //     path: '/home', 
        //     name: '个人中心',
        //     iconCls: 'el-icon-message',//图标样式class
        //     component: HomeBase,
        //     leaf: true,//只有一个节点
        //     children: [
        //         { path: '/home/page', component: resolve =>void(require(['../components/Home/Page.vue'], resolve)), name: '页面管理'},
        //     ]
        // },
    ],
});