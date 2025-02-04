import * as Mock from "mockjs"

const Random = Mock.Random

interface DataList {
  date: string
  name: string
  address: string
}

const dataList: DataList[] = []
for (let i = 0; i < 100; i++) {
  const template = {
    date: Random.date(),
    name: Random.cname(),
    address:
      Random.county(true) + Random.city() + Random.province() + Random.zip(),
  }
  dataList.push(template)
}

Mock.mock("/api/list", "post", (params: any) => {
  let info = JSON.parse(params.body)
  let [index, size, total] = [info.current - 1, info.pageSize, dataList.length]
  let len = total / size
  let totalPages = Math.ceil(len)
  let newDataList = dataList.slice(index * size, (index + 1) * size)
  return {
    code: "200",
    message: "获取成功",
    data: {
      current: info.current,
      pageSize: size,
      rows: newDataList,
      total: total,
      totalPages: totalPages,
    },
  }
})
