<template>
<div class="out">
    <div class="in">
        <slot></slot>
    </div>
</div>
</template>

<style scoped>
.in
{
    height: calc(100vh - var(--bar-height));
    min-height: calc(var(--min-view-height) - var(--bar-height));
    margin: auto;
}
</style>
