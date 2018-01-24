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
            iconCls: 'el-icon-message',//图标样式class
            component: HomeBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/index', component: resolve =>void(require(['../components/Home/Index.vue'], resolve)), name: '用户管理'},
            ]
        },
        {
            path: '/', 
            name: '投票',
            iconCls: 'el-icon-message',//图标样式class
            component: HomeBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/page/:id',name:'page',component: resolve =>void(require(['../components/Home/Page.vue'], resolve)), name: '用户管理'},
            ]
        },
        {
            path: '/', 
            name: '投票',
            iconCls: 'el-icon-message',//图标样式class
            component: HomeBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/me',name:'me',component: resolve =>void(require(['../components/Home/Me.vue'], resolve))},
            ]
        },
        {
            path: '/', 
            name: '投票',
            iconCls: 'el-icon-message',//图标样式class
            component: HomeBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/addPlayer',name:'addPlayer',component: resolve =>void(require(['../components/Home/AddPlayer.vue'], resolve))},
            ]
        },
        {
            path: '/', 
            name: '投票',
            iconCls: 'el-icon-message',//图标样式class
            component: HomeBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/addPage',name:'addPage',component: resolve =>void(require(['../components/Home/AddPage.vue'], resolve))},
            ]
        },
    ],
});