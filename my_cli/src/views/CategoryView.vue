<template>
<header :style="{ '--bar-color': categoryStyle.color }">
    <div class="center">
        <img :src="categoryStyle.img" :alt="categoryStyle.name">
    </div>
    <div>
        <h2 class="white">推荐商家：{{ categoryStyle.name }}</h2>
    </div>
</header>
<business v-for="result in results" :result="result"></business>
<h4 class="margin-2">没找到想吃的？尝试搜索：</h4>
<search class="margin-1 search-bar"></search>
</template>
  
<script setup>
import { ref } from 'vue'
import search from '@/components/SearchBar.vue'
import business from '@/components/BusinessBar.vue'

const categoryStyle = ref({type: 6, img: require("@/assets/icons/三明治_sandwich.svg"), name: "速食简餐", color: "var(--yellow-green-main)"})
const results = ref([
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "薯霸王薯条", class: "美式快餐", start: 20, delivery: 5, businessId: 1, address: "湖北省武汉市洪山区珞瑜路1037号", explain: "免费中薯！"}
])

</script>
  
<style scoped>
header
{
    display: flex;
    flex-direction: column;
    overflow: hidden;

    height: 200px;
    padding-left: 20px;
    margin-bottom: 20px;

    background: linear-gradient(rgba(0,0,0,0), var(--bar-color))
}

header img
{
    width: 100px;
    height: 100px;

    transform: translateY(-200px);
    filter: drop-shadow(#fff 0px 200px 0px);
}

.search-bar
{
    margin-bottom: 20px;
}
</style>