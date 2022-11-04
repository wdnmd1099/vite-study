import { defineComponent, ref } from "vue";
import style1 from './First.module.scss'
import clock from '../../assets/icons/clock.svg'
import { RouterLink } from "vue-router";
export const Second = defineComponent({
    setup(props, context) {
        return () => (
            <>
        <div class={style1.wrapper}>
            <div class={style1.card}>
            <img src={clock} class={style1.clock}/>
            <h2>每日提醒<br/>不遗失每一笔账单</h2>
            </div>
            <div class={style1.actions}>
                <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
                <RouterLink to="/welcome/3">下一页</RouterLink>
                <RouterLink to="/welcome/start">跳过</RouterLink>
            </div>
        </div>
        </>
        )
    }
})


// import { defineComponent, ref } from "vue";
// export const Second = defineComponent({
//     setup(props, context) {
//         return () => (<div>4</div>)
//     }
// })