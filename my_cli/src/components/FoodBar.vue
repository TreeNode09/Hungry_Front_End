<template>
<div class="bar">
    <div class="left img">
        <img :src="food.img" :alt="food.name">
    </div>
    <div class="left detail">
        <h4>{{ food.name }}</h4>
        <h6>{{ food.explain }}</h6>
        <div class="left margin-1"><h5>￥{{ food.prize }}</h5></div>
        <div class="right add margin-1"><add></add></div>
    </div>
</div>
</template>

<script setup>
import add from '@/components/AddButton.vue'
defineProps(['food'])
</script>

<style scoped>
.bar
{
    display: inline-block;

    width: calc((100% - 40px) / 2);
    padding: 20px;
    margin-top: 20px;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

.img
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

.detail
{   
    width: calc(100% - 120px);
}

.add
{
    display: flex;

    height: 32px;
}
</style>