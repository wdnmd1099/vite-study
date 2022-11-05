import { defineComponent, h, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterLink, RouterView } from "vue-router";
import dongHua from './views/Welcome.module.scss'
import "./App.scss"

export const App = defineComponent({
    setup() {
        return () => (
            <div class="page">
                <RouterView>
                    {({Component:C,route:R}:{Component:VNode,route:RouteLocationNormalizedLoaded}) => {
                         if(R.fullPath==="/welcome"){
                            console.log(R.fullPath)
                            return <Transition enterActiveClass={dongHua.slide_fade2_enter_active}
                                    leaveActiveClass={dongHua.slide_fade2_leave_active}
                                    enterFromClass={dongHua.slide_fade2_enter_from}
                                    enterToClass={dongHua.slide_fade2_enter_to}
                            >
                                  {C}
                                </Transition>
                         }else if(R.fullPath==="/page2"){
                            console.log(R.fullPath)
                            return <Transition enterActiveClass={dongHua.slide_fade_enter_active}
                                     leaveActiveClass={dongHua.slide_fade_leave_active}
                                     enterFromClass={dongHua.slide_fade_enter_from}
                                     enterToClass={dongHua.slide_fade_enter_to}
                            >
                                {C}
                                </Transition>
                         }
                      }
                    }

                </RouterView>
            </div>
        )
    },
})

