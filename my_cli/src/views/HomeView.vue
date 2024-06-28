<template>
<h2 class="margin-1">你想做什么？</h2>
<div class="left catagory white">
    <h2><span style="color: var(--green-pale)">探</span><span>索美食</span></h2>
    <h6>在数以百计的商家中发现精彩，寻找感兴趣的美食，探索更多可能。</h6>
    <catagory v-for="catagoryStyle in catagoryStyles" :catagoryStyle="catagoryStyle"
    @click="toCatagory(catagoryStyle)"
    ></catagory>
</div>
<div class="right white">
    <div class="search">
        <h2><span style="color: var(--yellow-green-pale)">查</span><span>找</span></h2>
        <h6>查找我们的内容，立即购买。</h6>
        <search class="margin-2"></search>
    </div>
    <div class="user">
        <h2>用户中心</h2>
        <h6>管理信息，个性化点餐体验。</h6>
        <button>
            <img src="@/assets/icons/我的_me.svg" alt="编辑个人信息">
            <span>编辑个人信息</span>
        </button>
        <button>
            <img src="@/assets/icons/本地_local-two.svg" alt="管理收货地址">
            <span>管理收货地址</span>
        </button>
        <button>
            <img src="@/assets/icons/历史记录_history.svg" alt="查看历史订单">
            <span>查看历史订单</span>
        </button>
        <button class="exit">
            <img src="@/assets/icons/开关_power.svg" alt="退出登录">
            <span>退出登录</span>
        </button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue' 
import { useRouter } from 'vue-router';
import catagory from '@/components/CatagoryButton.vue'
import search from '@/components/SearchBar.vue'

const catagoryStyles = ref([
    {type: 6, img: require("@/assets/icons/三明治_sandwich.svg"), name: "速食简餐", id: 6,color: "var(--yellow-green-main)", },
    {type: 7, img: require("@/assets/icons/火锅_hot-pot-one.svg"), name: "地方小吃", id: 7,color: "var(--turquoise-main)"},
    {type: 8, img: require("@/assets/icons/面条_noodles.svg"), name: "米粉面馆", id: 8, color: "var(--red-main)"},
    {type: 4, img: require("@/assets/icons/汉堡_hamburger-one.svg"), name: "汉堡披萨", id: 4,color: "var(--yellow-dim)"},
    {type: 9, img: require("@/assets/icons/碗_bowl-one.svg"), name: "包子粥铺", id: 9,color: "var(--orange-pale)"},
    {type: 10, img: require("@/assets/icons/火鸡_turkey.svg"), name: "炸鸡炸串", id: 10,color: "var(--yellow-main)"},
    {type: 2, img: require("@/assets/icons/牛角面包_croissant.svg"), name: "早餐", id: 2,color: "var(--orange-main)"},
    {type: 5, img: require("@/assets/icons/冰激凌_icecream-four.svg"), name: "甜品饮品", id: 5,color: "var(--pink-main)"}
])

const router = useRouter();

const toCatagory = (catagoryStyle) => {
    router.push({
        path: "/catagory",
        query: {type: catagoryStyle.id}
    })
}

</script>

<style scoped>
.catagory, .search, .user
{
    border-radius: 10px;
    border-width: 0;
    
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);  
}

.catagory
{
    width: calc(60% - 20px);
    padding: 20px 0 20px 20px;

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
    padding: 20px;

    background: linear-gradient(0.25turn, var(--yellow-green-main), rgba(0,0,0,0));
}

.user
{
    padding: 20px;
    margin-top: 20px;

    background: linear-gradient(var(--yellow-main), rgba(0,0,0,0));
}

.user > button
{
    color: var(--yellow-dim);

    width: 100%;
    padding-left: 10px;
    margin-top: 20px;
}

.user > button > img
{
    width: 24px;
    height: 24px;
    margin: auto 0;
    
    transform: translateX(-100px);
    filter: drop-shadow(var(--yellow-main) 100px 0px 0px);
}

.user > button > span
{
    padding-left: 10px;
    margin: auto 0;
}

.user > button:hover
{
    color: #fff;

    background-color: var(--yellow-dim);
}

.user > button:hover > img
{
    filter: drop-shadow(#fff 100px 0px 0px);
}

button.exit
{
    color: var(--red-main);
}

button.exit > img
{
    filter: drop-shadow(var(--red-main) 100px 0px 0px);
}
button.exit:hover
{
    background-color: var(--red-main);
}
</style>
