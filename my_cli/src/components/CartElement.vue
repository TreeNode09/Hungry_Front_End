<template>
<div class="bar">
    <div class="left"><h6>{{ food.name }} x{{ food.count }}</h6></div>
    <div class="right"><h5>￥{{ (food.prize * food.count).toFixed(2) }}</h5></div>
</div>
</template>

<script setup>
const prop = defineProps(['food'])
</script>

<style scoped>
.bar
{
    height: 50px;
    padding: 5px 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
</style>