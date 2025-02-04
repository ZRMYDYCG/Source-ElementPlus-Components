import type { App } from "vue"
import chooseArea from "./choose-area"
import chooseIcon from "./choose-icon"
import Trend from "./trend"
import Notification from "./notification"
import List from "./list"
import Menu from "./menu"
import Progress from "./progress"
import ChooseTime from "./choose-time"
import ChooseDate from "./choose-date"
import ChooseCity from "./choose-city"
import Table from "./table"
import Form from "./form"

const components = [
  chooseArea,
  chooseIcon,
  Trend,
  Notification,
  List,
  Menu,
  Progress,
  ChooseTime,
  ChooseDate,
  ChooseCity,
  Table,
  Form,
]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
