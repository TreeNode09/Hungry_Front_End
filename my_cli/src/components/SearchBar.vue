<template>
<input form="text" v-model="searchText" placeholder="输入商家名称、美食名称..." @keyup.enter="searchInfo">
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'

const emit = defineEmits(['update'])
const searchText = ref('')

function searchInfo(){
    if(searchText.value !== ''){
        router.push({
            path: '/search',
            query: {text: searchText.value}
        })
        emit('update')
    }
}
</script>