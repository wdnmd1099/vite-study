import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";

export const routes:RouteRecordRaw[] = [
    { path: '/', component:Foo},
    { path: '/about',component:Bar},
    { path: '/welcome',
      component:Foo,
      children:[
        {path:'/1',component:Foo},
        {path:'/2',component:Foo},
        {path:'/3',component:Foo},
        {path:'/4',component:Foo},
     ]
    },
]