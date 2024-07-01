<template>
<div class="left order">
    <div class="business margin-2">
        <div class="left">
            <img :src="business.businessImg" :alt="business.name">
        </div>
        <div class="left">
            <h2>{{ business.businessName }}</h2>
            <h6>￥{{ business.startPrice }}起送，配送费￥{{ business.deliveryPrice }}</h6>
            <h6>地址：{{ business.businessAddress }}</h6>
            <h6>介绍：{{ business.businessExplain }}</h6>
        </div>
    </div>
    <food v-for="food in foods" :key="food.id" :food="food" @updateFood="updateFood" ref="foodList"></food>
</div>
<div class="right cart">
    <header>
        <div class="left"><h2 class="margin-1">购物车</h2></div>
        <div class="right">
            <button v-if="isEmpty" class="disabled"><div class="center">清空</div></button>
            <button v-else @click="emptyCart"><div class="center">清空</div></button>
        </div>
    </header>
    <div class="detail">
        <cart v-for="cartFood in cartFoods" :food="cartFood"></cart>
    </div>
    <footer>
        <button v-if="isEmpty" class="center disabled"><div class="center">确认订单</div></button>
        <button v-else class="center" @click="toPay"><div class="center">确认订单</div></button>
    </footer>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import food from '@/components/FoodBar.vue'
import cart from '@/components/CartFoodBar.vue'
import axios from "axios";

const business = JSON.parse(sessionStorage.getItem("business"))
const foods = ref([])
onMounted(() =>{
  axios.get(`http://localhost:8001/food/${business.businessId}`

  ).then(response => {foods.value = response.data.data
  console.log(foods.value)})
      .catch(error => {alert(error)})
})
const cartFoods = ref([])
const isEmpty = ref(true)   //购物车是否为空，控制购物车按钮样式

const foodList = ref([])

function updateFood(newFood){
    for(var i = 0; i < cartFoods.value.length; i++){
        if(newFood.id === cartFoods.value[i].id){
            cartFoods.value[i].count = newFood.count
            if(cartFoods.value[i].count === 0){
                cartFoods.value.splice(i, 1)
                if(cartFoods.value.length === 0){
                    isEmpty.value = true
                }
            }
            return
        }
    }
    cartFoods.value.push(newFood)
    isEmpty.value = false
    return
}

function emptyCart(){
    cartFoods.value = []
    isEmpty.value = true
    for(var i = 0; i < foodList.value.length; i++){
        foodList.value[i].clearFood()
    }
}

const toPay = () => {
    router.push({
        path: '/pay',
        query: {}
    })
}
</script>

<style scoped>
.order
{
    overflow-y: auto;

    width: calc(100% - 300px);
    height: calc(100% - 5px);
}

.business
{
    margin-bottom: 20px;
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

header
{
    border-bottom: 1px solid #ccc;
}

header > .left > h2
{
    padding-left: 20px;
    padding-bottom: 10px;
}

header > .right > button
{
    color: var(--red-main);

    width: 100px;
    margin-top: 15px;
    margin-right: 20px;
}

header > .right > button:hover
{
    color: #fff;

    background-color: var(--red-main);
}

.cart > .detail
{
    overflow: auto;

    height: calc(100% - 150px);
}

footer
{
    display: flex;

    padding-top: 10px;
}

footer > button
{
    color: var(--green-dim);

    width: 200px;
}

footer > button:hover
{
    color: #fff;

    background-color: var(--green-main);
}

header > .right > button.disabled,
footer > button.disabled
{
    color: #ccc;

    pointer-events: none;
}
</style>