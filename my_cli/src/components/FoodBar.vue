<template>
<div class="bar">
    <div class="left img">
        <img :src="food.foodImg" :alt="food.fooddName">
    </div>
    <div class="left detail">
        <h4>{{ food.foodName }}</h4>
        <h6>{{ food.foodExplain }}</h6>
        <div class="left margin-1"><h5>￥{{ food.foodPrice }}</h5></div>
        <div class="right add margin-1">
            <add @updateCount="updateFood" ref="addButton"></add>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import add from '@/components/AddButton.vue'

const prop = defineProps(['food'])
const emit = defineEmits(['updateFood'])
defineExpose({clearFood})

const updateFood = (count) => {
    emit('updateFood', {id: prop.food.foodId, name: prop.food.foodName, price: prop.food.foodPrice, count: count})
}
const addButton = ref("")

function clearFood(){
    addButton.value.clearCount()
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