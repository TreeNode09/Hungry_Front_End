<template>
<div class="out white">
    <div class="in">
        <div class="left">
            <h3><span class="title">H</span>ungry?</h3>
        </div>
        <div class="right">
            <h6 v-if="login">欢迎，{{ username }}</h6>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

//判断是否登录，登录则显示欢迎信息
const login = true
const username = ref("炕洋芋")
</script>

<style scoped>
.out
{
    height: var(--bar-height);

    background: linear-gradient(0.25turn, var(--green-main), var(--green-dim));
}

h3, h6
{
    line-height: var(--bar-height);
}

.title
{
    color: var(--green-pale);
}
</style>