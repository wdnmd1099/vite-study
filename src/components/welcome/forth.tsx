import { defineComponent, ref } from "vue";
import style1 from './First.module.scss'
import clock from '../../assets/icons/clock.svg'
import { RouterLink } from "vue-router";
export const Forth = defineComponent({
    setup(props, context) {
        return () => (
            <>
        <div class={style1.wrapper}>
            <div class={style1.card}>
            <img src={clock} class={style1.clock}/>
            <h2>云备份<br/>再也不怕数据丢失</h2>
            </div>
            <div class={style1.actions}>
                <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
                <RouterLink to="/welcome/start">完成</RouterLink>
                <RouterLink class={style1.fake} to="/welcome/4">跳过</RouterLink>
            </div>
        </div>
        </>
        )
    }
})