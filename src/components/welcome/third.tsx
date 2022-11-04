import { defineComponent, ref } from "vue";
import style1 from './First.module.scss'
import table from '../../assets/icons/table.svg'
import { RouterLink } from "vue-router";
export const Third = defineComponent({
    setup(props, context) {
        return () => (
            <>
        <div class={style1.wrapper}>
            <div class={style1.card}>
            <img src={table} class={style1.table}/>
            <h2>数据可视化<br/>收支一目了然</h2>
            </div>
            <div class={style1.actions}>
                <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
                <RouterLink to="/welcome/4">下一页</RouterLink>
                <RouterLink to="/welcome/start">跳过</RouterLink>
            </div>
        </div>
        </>
        )
    }
})