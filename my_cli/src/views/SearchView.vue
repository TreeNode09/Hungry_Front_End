<template>
<h4>返回上一页</h4>
<h2>搜索结果：{{ searchInfo }}</h2>
</template>

<script setup>
import { ref } from 'vue'

const searchInfo = ref("薯条")
</script>