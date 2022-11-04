import { defineComponent, ref } from "vue";
import style1 from './WelcomeLayout.module.scss';
import table from '../../assets/icons/table.svg';
import { RouterLink } from "vue-router";
import { WelcomeLayout } from './WelcomeLayout';
export const Third = defineComponent({
    setup(props, context) {
        return () => (
            <WelcomeLayout>{{
                icon: () => <img src={table} />,
                title: () => <h2>数据可视化<br />收支一目了然</h2>,
                buttons: () => <>
                    <RouterLink class={style1.fake} to="/welcome/start">跳过</RouterLink>
                    <RouterLink to="/welcome/4">下一页</RouterLink>
                    <RouterLink to="/welcome/start">跳过</RouterLink>
                </>
            }}
            </WelcomeLayout>
        )
    }
})