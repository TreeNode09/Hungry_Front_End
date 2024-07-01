<template>
<button :style="{ '--hover-color': identity.color }" :class="{checked: identity.isChecked}">
{{ identity.buttonName }}
</button>
</template>

<script setup>
const prop = defineProps(['identity'])
</script>

<style scoped>
button
{
    display: inline-block;

    width: 100px;
    margin-right: 10px;
}

button:hover
{
    background-color: var(--hover-color);
}

.checked
{
    border: 4px solid var(--hover-color);
}
</style>