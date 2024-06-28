<template>
<div class="out" ref="outer">
    <div class="in">
        <slot></slot>
    </div>
</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router';

const outer = ref() //路由更新时重置滚动位置
const watcher = watch(useRoute(), () => {if(outer.value) {outer.value.scrollTo(0,0)}})
</script>

<style scoped>
.out
{
    overflow: auto;
}

.in
{
    height: calc(100vh - var(--bar-height));
    min-height: calc(var(--min-view-height) - var(--bar-height));
    margin: auto;
}
</style>
