<template>
<div class="bar" @click="toOrder()">
    <div class="left">
        <img :src="result.img" :alt="result.name">
    </div>
    <div class="left">
        <h6>{{ result.class }}</h6>
        <h4>{{ result.name }}</h4>
        <h6 class="margin-1">￥{{ result.start }}起送，配送费￥{{ result.delivery }}</h6>
    </div>
</div>
</template>

<script setup>
import router from '@/router'

const prop = defineProps(['result'])

function toOrder(){
    router.push({
        path: '/order',
        query: {business: JSON.stringify(prop.result)}
    })
}
</script>

<style scoped>
.bar
{
    display: inline-block;

    width: calc((100% - 40px) / 2);
    padding: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

.left
{
    overflow: hidden;
}

img
{
    width: 100px;
    height: 100px;
    margin-right: 20px;

    border-radius: 10px;;
}
</style>