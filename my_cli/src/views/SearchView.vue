<template>
<h2 class="margined">搜索结果：{{ searchInfo }}</h2>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'

const searchInfo = useRoute().query.text
</script>