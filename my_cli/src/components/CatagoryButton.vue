<template>
<div class="inline">
    <button :style="{ '--hover-color': catagoryStyle.color }">
        <div class="center">
            <div class="icon">
                <img :src="catagoryStyle.img" :alt="catagoryStyle.name">
            </div>
            <div class="name">
                <h5>{{ catagoryStyle.name }}</h5>
            </div>
        </div>
    </button>
</div>
   
</template>

<script setup>
defineProps(['catagoryStyle'])
</script>

<style scoped>
.inline
{
    display: inline-block;
}

button
{
    color: var(--green-main);

    width: 170px;
    height: 130px;
    margin-top: 20px;
    margin-right: 20px;

    transition: all 0.2s;
}

button:hover
{
    color: #fff;

    background-color: var(--hover-color);
}

.icon
{
    overflow: hidden;

    height: 65px;
    margin-bottom: 5px;
}

img
{
    height: 100%;
    transform: translateX(100px);
    filter: drop-shadow(var(--green-main) -100px 0px 0px);
}

button:hover img
{
    filter: drop-shadow(#fff -100px 0px 0px);
}

h5
{
    font-weight: 600;
}
</style>