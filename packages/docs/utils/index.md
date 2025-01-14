Vue 中未涉及到响应式变量, 抽取一些函数到 utils 目录下, 方便使用, 如下是使用文档:

1. `toLine`

```typescript
export const toKebabCase = (val: string) => {
  return val.replace(/(A-Z)g/, "-$1").toLocaleLowerCase()
}
```

| 属性     | 描述                                                                 |
|----------|----------------------------------------------------------------------|
| 函数名   | `toKebabCase`                                                             |
| 简介     | 将驼峰命名的字符串转换为短横线（kebab-case）命名格式。               |
| 入参     | `val: string` - 需要转换的字符串。                                   |
| 返回值   | `string` - 转换后的短横线命名格式的字符串。                          |
| 示例     | 见下方代码示例。                                                     |


```typescript
import { toLine } from '@/utils/toLine';

console.log(toLine("camelCase"));      // 输出: "camel-case"
console.log(toLine("PascalCase"));     // 输出: "pascal-case"
console.log(toLine("already-kebab"));  // 输出: "already-kebab"
console.log(toLine("UPPERCASE"));      // 输出: "-u-p-p-e-r-c-a-s-e"
console.log(toLine("mixedCase123"));   // 输出: "mixed-case123"
console.log(toLine("single"));         // 输出: "single"
```