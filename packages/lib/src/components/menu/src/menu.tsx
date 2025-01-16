import { defineComponent, useAttrs, resolveComponent, h } from "vue"
import type { PropType } from "vue"
import type { MenuItem } from "./type.ts"
import { toKebabCase } from "@/utils"

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: "",
    },
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const attrs = useAttrs()

    let renderMenu = (data: MenuItem[]) => {
      return data.map((item) => {
        const iconComponent = resolveComponent(
          `el-icon-${toKebabCase(item.icon!)}`,
        )

        let slots = {
          title: () => {
            return (
              <>
                {h(iconComponent)}
                <span>{item.name}</span>
              </>
            )
          },
        }
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            {h(iconComponent)}
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }

    return () => {
      return (
        <el-menu
          {...attrs}
          router={props.router}
          default-active={props.defaultActive}
        >
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  },
})
