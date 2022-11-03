import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'192.168.0.101',
    port:3000,
  },
  
  plugins: [
    vue(),
    vueJsx({
      transformOn:true, //on{click:xx} or onClick:xxx  两种写法都可以
      mergeProps:true //自动把class style onClick 绑定到子组件的根元素
    })
  ]
})
