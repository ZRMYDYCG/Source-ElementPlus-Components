import type { App } from "vue"
import Progress from "./src/index.vue"

export default {
  install(app: App) {
    app.component("yq-progress", Progress)
  },
}
