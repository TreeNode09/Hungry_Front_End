<template>
    <div>
      <!-- 这里放置商家列表的 HTML 结构 -->
       <h1>Hello World</h1>
       <p>{{ catagory }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BussinessListView',
    props: {
      catagory: {
        type: Number,
        default: 0
      }
    },
    // 这里放置组件的 JavaScript 逻辑
    mounted() {
      console.log('传递的参数:', this.catagory);
    }
  }
  </script>
  
  <style scoped>
  /* 这里放置组件的 CSS 样式 */
  </style>
