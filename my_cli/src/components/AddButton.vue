<template>
<button v-if="count > 0" @click="remove">
    <img src="@/assets/icons/减少_reduce-one.svg" alt="减少一个">
</button>
<h5 v-if="count > 0">{{ count }}</h5>
<button @click="add">
    <img src="@/assets/icons/添加_add-one.svg" alt="添加一个">
</button>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

function add(){
    count.value++
}

function remove(){
    count.value--
}
</script>



<style scoped>
button
{   
    overflow: hidden;

    width: 26px;
    height: 26px;
    padding: 0;
    margin-left: 10px;
    box-shadow: none;
}

img
{
    width: 100%;
    height: 100%;

    transform: translateX(-100px);
    filter: drop-shadow(var(--green-dim) 100px 0px 0px);
}

h5
{
    margin-left: 10px;
}
</style>