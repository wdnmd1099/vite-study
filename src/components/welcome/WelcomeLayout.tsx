import { defineComponent, ref } from "vue";
import style1 from './WelcomeLayout.module.scss'
export const WelcomeLayout = defineComponent({
    setup(props, context) {
        const slots =context.slots
        return () => (
        <div class={style1.wrapper}>
            <div class={style1.card}>
            {slots.icon?.()} 
            {/* 上下这两个是一样的 如果插槽存在就执行*/}
            {slots.title && slots.title()}
            </div>
            <div class={style1.actions}>
                {slots.buttons?.()}
            </div>
        </div>
        )
    }
})