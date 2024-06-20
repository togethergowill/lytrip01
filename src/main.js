import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"

import "normalize.css"
import "@/assets/css/index.css"
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount("#app")
