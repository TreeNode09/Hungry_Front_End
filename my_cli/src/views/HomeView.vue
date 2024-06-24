<template>
<h2 class="head">你想做什么？</h2>
<div class="left catagory white">
    <h2><span style="color: var(--green-pale)">探</span><span>索美食</span></h2>
    <h4>在数以百计的商家中发现精彩，寻找感兴趣的美食，探索更多可能。</h4>
    <catagory 
        v-for="catagoryStyle in catagoryStyles"
        :catagoryStyle="catagoryStyle"
    ></catagory>
</div>
<div class="right white">
    <div class="search">
        <h2><span style="color: var(--yellow-green-pale)">查</span><span>找</span></h2>
        <h4>查找我们的内容，立即购买。</h4>
    </div>
    <div class="user">
        <h2>用户中心</h2>
        <h4>管理信息，个性化点餐体验。</h4>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue' 
import catagory from '@/components/CatagoryButton.vue'

const catagoryStyles = ref([
    {img: require("@/assets/icons/三明治_sandwich.svg"), name: "速食简餐", color: "var(--yellow-green-main)", link: "商家选择页面"},
    {img: require("@/assets/icons/火锅_hot-pot-one.svg"), name: "地方小吃", color: "var(--turquoise-main)", link: "商家选择页面"},
    {img: require("@/assets/icons/面条_noodles.svg"), name: "米粉面馆", color: "var(--red-main)", link: "商家选择页面"},
    {img: require("@/assets/icons/汉堡_hamburger-one.svg"), name: "汉堡披萨", color: "var(--yellow-dim)", link: "商家选择页面"},
    {img: require("@/assets/icons/碗_bowl-one.svg"), name: "包子粥铺", color: "var(--orange-pale)", link: "商家选择页面"},
    {img: require("@/assets/icons/火鸡_turkey.svg"), name: "炸鸡炸串", color: "var(--yellow-main)", link: "商家选择页面"},
    {img: require("@/assets/icons/牛角面包_croissant.svg"), name: "早餐", color: "var(--orange-main)", link: "商家选择页面"},
    {img: require("@/assets/icons/冰激凌_icecream-four.svg"), name: "甜品饮品", color: "var(--pink-main)", link: "商家选择页面"}
])
</script>

<style scoped>
.head
{
    margin-top: 10px;
}

.catagory, .search, .user
{
    border-radius: 10px;
    border-width: 0;
    padding: 20px 0 20px 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);  
}

.catagory
{
    width: calc(60% - 20px);
    
    background: linear-gradient(var(--green-main), rgba(0,0,0,0));
}

.catagory > h4
{
    padding-right: 20px;
}

.right
{
    width: 40%;
}

.search
{
    margin-bottom: 20px;

    background: linear-gradient(0.25turn, var(--yellow-green-main), rgba(0,0,0,0));
}

.user
{
    background: linear-gradient(var(--yellow-main), rgba(0,0,0,0));
}
</style>
