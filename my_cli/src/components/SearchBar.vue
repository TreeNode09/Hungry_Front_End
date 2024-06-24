<template>
<input form="text" v-model="searchText" placeholder="输入商家名称、美食名称..." @keyup.enter="searchInfo">
</template>

<script setup>
const searchText = ''
function searchInfo(){

}
</script>