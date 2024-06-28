<template>
<div class="bar">
    <div class="left"><h6>{{ food.name }} x{{ food.count }}</h6></div>
    <h5 class="right">￥{{ food.totalPrize }}</h5>
</div>
</template>

<script setup>
const prop = defineProps(['food'])
</script>

<style scoped>
.bar
{
    height: 40px;
}
</style>