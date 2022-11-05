import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { page2 }  from "../views/page2";

export const routes:RouteRecordRaw[] = [
    { path: '/', redirect:'/welcome',component:Welcome,},

    { path: '/welcome',component:Welcome,},
    { path: '/page2',component:page2,},
]