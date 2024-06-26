<template>
<div class="left order">
    <div class="business margin-2">
        <div class="left">
            <img :src="business.img" :alt="business.name">
        </div>
        <div class="left">
            <h2>{{ business.name }}</h2>
            <h6>￥{{ business.start }}起送，配送费￥{{ business.delivery }}</h6>
            <h6>地址：{{ business.address }}</h6>
            <h6>介绍：{{ business.explain }}</h6>
        </div>
    </div>
    <food v-for="food in foods" :food="food"></food>
</div>
<div class="right cart">
    <h2 class="margin-1">购物车</h2>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import food from '@/components/FoodBar.vue'

const business = JSON.parse(useRoute().query.business)
const foods = ref([
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "小薯条", explain: "好吃", prize: 11.99},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "中薯条", explain: "免费中薯！", prize: 0.00},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "大薯条", explain: "非常好吃", prize: 24.99},
    {img: require("@/assets/images/薯霸王薯条.jpg"), name: "超级薯条", explain: "超级好吃", prize: 34.99}
])
const orderedFood = ref([])
</script>

<style scoped>
.order
{
    width: calc(100% - 300px);
}

.business img
{
    width: 150px;
    height: 150px;
    margin-right: 10px;
    border-radius: 10px;
}

.cart
{
    width: 300px;
    height: 100%;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}

.cart > h2
{
    padding-left: 20px;
    border-bottom: 1px solid #ccc;
}
</style>