import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import type { App } from "vue"

export const toLine = (val: string) => {
  return val.replace(/(A-Z)g/, "-$1").toLocaleLowerCase()
}

export const registerIcons = (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`el-icon-${toLine(key)}`, component)
  }
}
