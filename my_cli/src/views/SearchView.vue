<template>
<h2 class="margin-1">搜索结果：{{ searchInfo }}</h2>
<search></search>
<bussiness v-for="result in results" :result="result"></bussiness>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import search from '@/components/SearchBar.vue'
import bussiness from '@/components/BusinessBar.vue'

const searchInfo = ref(useRoute().query.text)
const results = ref([
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"}
])
</script>