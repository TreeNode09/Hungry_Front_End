<!-- src/views/AddressManagement.vue -->
<template>
<h2 class="margin-1">管理收货地址</h2>
<ul>
  <li v-for="(address, index) in addresses" :key="index">
    <div v-if="isEditing[index]" class="left"><input placeholder="输入你的地址" v-model="newAddress"></div>
    <div v-else class="left"><h4>{{ address }}</h4></div>

    <div v-if="isEditing[index]" class="right">
      <button @click="saveEdit(index)"><div class="center">保存</div></button>
      <button @click="cancelEdit(index)"><div class="center">取消</div></button>
    </div>
    <div v-else class="right">
      <button @click="editAddress(index)"><div class="center">编辑</div></button>
      <button @click="removeAddress(index)"><div class="center">删除</div></button>
    </div>
  </li>
</ul>
<button v-if="!isNew" @click="addAddress" class="margin-1"><div class="center">添加地址</div></button>
</template>

<script setup>
import { ref } from 'vue'

const addresses = ref([])
const newAddress = ref('')
const isEditing = ref([])
const isNew = ref(false)

function addAddress() {
  addresses.value.push('')
  isEditing.value.push(true)
  isNew.value = true
}

function saveEdit(index) {
  addresses.value[index] = newAddress.value
  isEditing.value[index] = false
  if(isNew.value) {
    newAddress.value = ''
    isNew.value = false
  }
}

function cancelEdit(index) {
  isEditing.value[index] = false
  if(isNew.value) {
    addresses.value.splice(index, 1)
    isNew.value = false
  }
}

function editAddress(index) {
  isEditing.value[index] = true
}

function removeAddress(index) {
  addresses.value.splice(index, 1)
  isEditing.value.splice(index, 1)
}
</script>

<style scoped>
.right > button
{
  display: inline-block;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  height: 80px;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
}

li h4
{
  padding: 9px 0;
}

button {
  width: 100px;
  margin-right: 10px;
}
</style>
