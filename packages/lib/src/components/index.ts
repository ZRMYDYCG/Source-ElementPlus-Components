import type { App } from "vue"
import chooseArea from "./choose-area"
import chooseIcon from "./choose-icon"
import Trend from "./trend"
import Notification from "./notification"
import List from "./list"
import Menu from "./menu"

const components = [chooseArea, chooseIcon, Trend, Notification, List, Menu]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
