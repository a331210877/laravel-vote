import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeBase from '../components/Home/Base.vue'
Vue.use(VueRouter);
        
export default new VueRouter({
    saveScrollPosition: true,
    routes: [
        {
            path: '/home', 
            name: '投票',
            iconCls: 'el-icon-message',//图标样式class
            component: HomeBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/home/index', component: resolve =>void(require(['../components/Home/Index.vue'], resolve)), name: '用户管理'},
            ]
        },
        {
            path: '/home', 
            name: '投票',
            iconCls: 'el-icon-message',//图标样式class
            component: HomeBase,
            leaf: true,//只有一个节点
            children: [
                { path: '/home/page/:id',name:'page',component: resolve =>void(require(['../components/Home/Page.vue'], resolve)), name: '用户管理'},
            ]
        }
    ],
});