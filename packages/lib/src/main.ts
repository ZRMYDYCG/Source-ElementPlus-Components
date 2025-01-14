import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router/index.ts"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import ProComponents from "./components/index.ts"
import { registerIcons } from "./utils"

const app = createApp(App)
registerIcons(app)
app.use(router)
app.use(ProComponents)
app.use(ElementPlus)
app.mount("#app")
