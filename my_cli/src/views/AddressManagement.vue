<!-- src/views/AddressManagement.vue -->
<template>
  <div>
    <h1>管理收货地址</h1>
    <button @click="addAddress">添加地址</button>
    <ul>
      <li v-for="(address, index) in addresses" :key="index">
        <span>{{ address }}</span>
        <button @click="editAddress(index)">编辑</button>
        <button @click="removeAddress(index)">删除</button>
      </li>
    </ul>
    <div v-if="isEditing">
      <h2>{{ editIndex === -1 ? '添加地址' : '编辑地址' }}</h2>
      <input v-model="currentAddress" placeholder="输入地址">
      <button @click="saveAddress">保存</button>
      <button @click="cancelEdit">取消</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const addresses = ref([]);
const currentAddress = ref('');
const isEditing = ref(false);
const editIndex = ref(-1);

function addAddress() {
  currentAddress.value = '';
  isEditing.value = true;
  editIndex.value = -1;
}

function editAddress(index) {
  currentAddress.value = addresses.value[index];
  isEditing.value = true;
  editIndex.value = index;
}

function removeAddress(index) {
  addresses.value.splice(index, 1);
}

function saveAddress() {
  if (editIndex.value === -1) {
    addresses.value.push(currentAddress.value);
  } else {
    addresses.value[editIndex.value] = currentAddress.value;
  }
  isEditing.value = false;
}

function cancelEdit() {
  isEditing.value = false;
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin-left: 10px;
}

input {
  margin: 10px 0;
}
</style>
