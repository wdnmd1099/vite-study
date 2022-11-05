import { defineComponent, h, Transition } from "vue";
import { RouterLink, RouterView } from "vue-router";
import "./App.scss"

export const App = defineComponent({
    setup() {
        return () => (
            <div class="page">
                <RouterView>
                
                    {(options:any) => {
                         if(options.route.href==="#/welcome"){
                            console.log(options.route.href)
                            return<Transition name="slide-fade2"><options.Component /></Transition>
                         }else if(options.route.href==="#/page2"){
                            console.log(options.route.href)
                            return<Transition name="slide-fade"><options.Component /></Transition>
                         }
                        
                         
                      }
                    }

                </RouterView>
            </div>
        )
    },
})