<template>
<div class="out">
    <div class="center">
        <h1><span style="color: var(--green-main)">H</span>ungry? 帮你找吃的。</h1>
        <div class="options">
            <button class="login" @click="toLogin"><div class="center">登录</div></button>
            <button class="register" @click="toRegister"><div class="center">注册</div></button>
        </div>
    </div>   
</div>
</template>

<script setup>

</script>

<style>
.options > button
{
    display: inline-block;

    width: calc(50% - 20px);
    margin: 0 10px;
}

.login
{
    color: #fff;

    background-color: var(--green-main);
}

.register:hover
{
    background-color: var(--green-main);
}
</style>