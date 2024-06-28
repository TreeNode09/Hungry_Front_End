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
    <food v-for="food in foods" :food="food" @updateFood="updateFood" ref="foodList"></food>
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
import { ref } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import food from '@/components/FoodBar.vue'
import cart from '@/components/CartFoodBar.vue'

const business = JSON.parse(useRoute().query.business)
const foods = ref([
    {id: 1, img: require("@/assets/images/薯霸王薯条.jpg"), name: "小薯条", explain: "好吃", prize: 11.99},
    {id: 2, img: require("@/assets/images/薯霸王薯条.jpg"), name: "中薯条", explain: "免费中薯！", prize: 0.00},
    {id: 3, img: require("@/assets/images/薯霸王薯条.jpg"), name: "大薯条", explain: "非常好吃", prize: 24.99},
    {id: 4, img: require("@/assets/images/薯霸王薯条.jpg"), name: "超级薯条", explain: "超级好吃", prize: 34.99},
    {id: 5, img: require("@/assets/images/薯霸王薯条.jpg"), name: "超级薯条", explain: "超级好吃", prize: 34.99,},
    {id: 6, img: require("@/assets/images/薯霸王薯条.jpg"), name: "超级薯条", explain: "超级好吃", prize: 34.99},
    {id: 7, img: require("@/assets/images/薯霸王薯条.jpg"), name: "超级薯条", explain: "超级好吃", prize: 34.99},
    {id: 8, img: require("@/assets/images/薯霸王薯条.jpg"), name: "超级薯条", explain: "超级好吃", prize: 34.99},
    {id: 9, img: require("@/assets/images/薯霸王薯条.jpg"), name: "超级薯条", explain: "超级好吃", prize: 34.99}
])
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