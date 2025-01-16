<script setup lang="ts">
const dataA = [
  {
    name: "导航一",
    index: "1",
    icon: "document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "document",
    children: [
      {
        name: "导航三-1",
        index: "3-1",
        icon: "document",
      },
    ],
  },
]

const dataB = [
  {
    name: "导航一",
    index: "1",
    icon: "document",
  },
  {
    name: "导航二",
    index: "2",
    icon: "document",
  },
  {
    name: "导航三",
    index: "3",
    icon: "document",
    children: [
      {
        name: "导航三-1",
        index: "3-1",
        icon: "document",
        children: [
          {
            name: "导航三-1-1",
            index: "3-1-1",
            icon: "document",
            children: [
              {
                name: "导航三-1-1-1",
                index: "3-1-1-1",
                icon: "document",
                children: [
                  {
                    name: "导航三-1-1-1-1",
                    index: "3-1-1-1-1",
                    icon: "document",
                    children: [
                      {
                        name: "导航三-1-1-1-1-1",
                        index: "3-1-1-1-1-1",
                        icon: "document",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <div class="flex">
    <yq-menu :data="dataA" default-active="2"></yq-menu>
    <yq-infinite-menu :data="dataB" default-active="1"></yq-infinite-menu>
  </div>
</template>

<style scoped></style>
