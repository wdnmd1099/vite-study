import { defineComponent, ref } from "vue";
import style1 from './First.module.scss'
import logo from '../../assets/icons/存钱罐.svg'
import { RouterLink } from "vue-router";
export const First = defineComponent({
    setup(props, context) {
        return () => (
            <>
        <div class={style1.wrapper}>
            <div class={style1.card}>
            <img src={logo} class={style1.logo}/>
            <h2>精打细算<br/>加根鸡腿吧</h2>
            </div>
            <div class={style1.actions}>
                <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
                <RouterLink to="/welcome/2">下一页</RouterLink>
                <RouterLink to="/welcome/start">跳过</RouterLink>
            </div>
        </div>
        </>
        )
    }
})