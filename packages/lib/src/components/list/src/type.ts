export interface ListItem {
  /*头像*/
  avatar?: string
  /*标题*/
  title?: string
  /*描述*/
  desc?: string
  /*时间*/
  time?: string
  /*标签*/
  tag?: string
  /*标签类型*/
  tagType?: "" | "success" | "info" | "warning" | "danger"
}

export interface ListOptions {
  title: string
  content: ListItem[]
}

export interface ActionOptions {
  text: string
  icon?: string
}

/*Data for demo*/
export const List: ListOptions[] = [
  {
    title: "通知",
    content: [
      {
        avatar: "https://example.com/avatar1.jpg",
        title: "活动一",
        desc: "这是活动一的描述。",
        time: "2023-10-01 10:00",
        tag: "新",
        tagType: "success",
      },
      {
        avatar: "https://example.com/avatar2.jpg",
        title: "活动二",
        desc: "这是活动二的描述。",
        time: "2023-10-02 11:00",
        tag: "热",
        tagType: "warning",
      },
      {
        title: "活动三",
        desc: "这是活动三的描述。",
        time: "2023-10-03 12:00",
        tag: "推荐",
        tagType: "info",
      },
      {
        avatar: "https://example.com/avatar4.jpg",
        title: "活动四",
        desc: "这是活动四的描述。",
        time: "2023-10-04 13:00",
        tag: "即将结束",
        tagType: "danger",
      },
      {
        title: "活动五",
        desc: "这是活动五的描述。",
        time: "2023-10-05 14:00",
      },
    ],
  },
  {
    title: "关注",
    content: [
      {
        avatar: "https://example.com/avatar1.jpg",
        title: "活动一",
        desc: "这是活动一的描述。",
        time: "2023-10-01 10:00",
        tag: "新",
        tagType: "success",
      },
      {
        avatar: "https://example.com/avatar2.jpg",
        title: "活动二",
        desc: "这是活动二的描述。",
        time: "2023-10-02 11:00",
        tag: "热",
        tagType: "warning",
      },
      {
        title: "活动三",
        desc: "这是活动三的描述。",
        time: "2023-10-03 12:00",
        tag: "推荐",
        tagType: "info",
      },
      {
        avatar: "https://example.com/avatar4.jpg",
        title: "活动四",
        desc: "这是活动四的描述。",
        time: "2023-10-04 13:00",
        tag: "即将结束",
        tagType: "danger",
      },
      {
        title: "活动五",
        desc: "这是活动五的描述。",
        time: "2023-10-05 14:00",
      },
    ],
  },
  {
    title: "代办",
    content: [
      {
        avatar: "https://example.com/avatar1.jpg",
        title: "活动一",
        desc: "这是活动一的描述。",
        time: "2023-10-01 10:00",
        tag: "新",
        tagType: "success",
      },
      {
        avatar: "https://example.com/avatar2.jpg",
        title: "活动二",
        desc: "这是活动二的描述。",
        time: "2023-10-02 11:00",
        tag: "热",
        tagType: "warning",
      },
      {
        title: "活动三",
        desc: "这是活动三的描述。",
        time: "2023-10-03 12:00",
        tag: "推荐",
        tagType: "info",
      },
      {
        avatar: "https://example.com/avatar4.jpg",
        title: "活动四",
        desc: "这是活动四的描述。",
        time: "2023-10-04 13:00",
        tag: "即将结束",
        tagType: "danger",
      },
      {
        title: "活动五",
        desc: "这是活动五的描述。",
        time: "2023-10-05 14:00",
      },
    ],
  },
]

export const actions: ActionOptions[] = [
  {
    text: "清理代办",
    icon: "delete",
  },
  {
    text: "查看更多",
    icon: "edit",
  },
]
