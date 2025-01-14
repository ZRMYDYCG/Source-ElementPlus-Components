import type { App } from "vue"
import chooseArea from "./choose-area"
import chooseIcon from "./choose-icon"
import Trend from "./trend"
import Notification from "./notification"

const components = [chooseArea, chooseIcon, Trend, Notification]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
