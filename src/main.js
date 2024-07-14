// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from "./router/index.js"
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

const app = createApp(App)
app.use(ElementPlus,{size:'small'});
app.use(router)
app.use(ElementPlus)
app.use(VueVideoPlayer)
app.mount('#app')
