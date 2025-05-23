import {createRouter,createWebHistory} from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const routes=[
    {path:'/',component:HomeView},
    {path:'/login',component:LoginView},
    {path:'/register',component:RegisterView}
]

const router = createRouter({
    history:createWebHistory(), // 用 HTML5 模式
    routes// 路由数组
})

export default router