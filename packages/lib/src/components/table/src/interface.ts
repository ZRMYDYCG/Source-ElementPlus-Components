export interface TableOptions {
  // 表头
  label: string
  // 字段名称
  prop?: string
  // 列宽度
  width?: string
  // 对其方式
  align?: "left" | "center" | "right"
  // 自定义列模板名称
  slot?: string
  // 是否显示操作列
  action?: boolean
}
