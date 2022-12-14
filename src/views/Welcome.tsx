import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import style from './Welcome.module.scss'

export const Welcome = defineComponent({
    setup(props, context) {
        return () => 
        <div class={style.welcome}>
           <header>
             <h1>这是第一页哦</h1>
             <RouterLink to="/page2">下一页</RouterLink>
           </header>
        </div>
    }
})