import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import style from './Welcome.module.scss'
import logo from '../assets/icons/鸡腿.svg'

export const Welcome = defineComponent({
    setup(props, context) {
        return () => 
        <div class={style.welcome}>
           <header>
              <img src={logo} alt="鸡腿logo" class={logo} />
             <h1>鸡腿记账</h1>
           </header>
        <main class={style.main}><RouterView /></main>
        </div>
    }
})