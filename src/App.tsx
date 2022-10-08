import { defineComponent } from "vue";
import{ RouterView } from "vue-router";

export const App =  defineComponent({
    setup() {
        return ()=><>
            <div>导航
                <ul>
                    <li>
                        <router-link to="/">Foo</router-link>
                    </li>
                    <li>
                       <router-link to="/about">Bar</router-link>
                    </li>
                </ul>
            </div>
            
            <div>
                <RouterView/>
            </div>

            <footer>页脚</footer>
        </>
    },
})