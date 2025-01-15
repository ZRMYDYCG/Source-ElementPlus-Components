import type { App } from "vue"
import Menu from "./src/index.vue"
import infiniteMenu from "./src/menu.tsx"

export default {
  install(app: App) {
    app.component("yq-menu", Menu)
    app.component("yq-infinite-menu", infiniteMenu)
  },
}
