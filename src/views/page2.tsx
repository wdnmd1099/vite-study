import { defineComponent, ref ,Transition} from "vue";
import { RouterLink, RouterView } from "vue-router";
import style from './Welcome.module.scss'

export const page2 = defineComponent({
    setup(props, context) {
        return () => 
        <div class={style.welcome}>
           <header>
             <h1>第二页</h1>
             <router-link to="/welcome">上一页</router-link>
           </header>
        </div>
    }
})