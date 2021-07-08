import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import setting from '@/components/setting/setting.vue';
import information from '@/components/setting/information.vue';
import password from '@/components/setting/password.vue';
import assetsTypes from '@/components/assetsTypes/assetsTypes.vue';
import brand from '@/components/brand/brand.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            redirect: '/setting' ,
        },
        { 
            path: '/setting', 
            name: 'setting', 
            components:{
                default:setting,
                information:information,
                password:password
            },
            children:[
                { 
                    path:'', 
                    name:'setting', 
                    component:setting,
                },
                { 
                    path:'information', 
                    name:'information', 
                    component:information,
                    meta: {
                        title: "基本信息"
                    },
                },
                { 
                    path:'password', 
                    name:'password', 
                    component:password,
                    meta: {
                        title: "修改密码"
                    },
                },
            ]
        },
        { 
            path: '/assetsTypes/assetsTypes', 
            name: 'assetsTypes', 
            component: assetsTypes,
            meta: {
                title: "资产类别"
            } 
        },
        { 
            path: '/brand/brand', 
            name: 'brand', 
            component: brand,
            meta: {
                title: "品牌"
            } 
        },
    ]
});
export default router;