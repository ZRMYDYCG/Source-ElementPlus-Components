import type { App } from "vue"
import chooseArea from "./choose-area"
import chooseIcon from "./choose-icon"

const components = [chooseArea, chooseIcon]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
