<!-- src/views/AddressManagement.vue -->
<template>
<h2 class="margin-1">管理收货地址{{ newInfo }}</h2>
<ul>
  <li v-for="(info, index) in infos" :key="index">
    <div v-if="isEditing[index]" class="left" :class="{selected: selectedIndex === index}">
      <input placeholder="收货地址" v-model="newInfo.address" class="address">
      <small><span v-if="addressEmpty">请输入收货地址</span></small>

      <div class="name-info margin-1">
        <input placeholder="收货人" v-model="newInfo.name" class="name">
        <select v-model="newInfo.sex">
          <option value="先生" selected>先生</option>
          <option value="女士">女士</option>
        </select>
        <small><span v-if="nameEmpty">请输入收货人姓名</span></small>
      </div>

      <div class="tel-info margin-1">
        <input type="tel" placeholder="收货人电话" v-model="newInfo.tel" class="tel">
        <small><span v-if="telEmpty">请输入收货人电话</span></small>
      </div>
    </div>
    <div v-else class="left">
      <input type="checkbox" v-model="isDefault[index]">
      <h4>{{ info.address }}</h4>
      <h6>{{ info.name }} {{ info.sex }} {{ info.tel }}</h6>
    </div>

    <div v-if="isEditing[index]" class="right">
      <button @click="saveEdit(index)"><div class="center">保存</div></button>
      <button @click="cancelEdit(index)"><div class="center">取消</div></button>
    </div>
    <div v-else class="right">
      <button @click="editInfo(index)"><div class="center">编辑</div></button>
      <button @click="removeInfo(index)" class="delete"><div class="center">删除</div></button>
    </div>
  </li>
</ul>
<button v-if="!isNew" @click="addInfo" class="margin-1"><div class="center">添加地址</div></button>
<div v-if="infos.length === 0" class="out">
  <h2 class="center">你尚未添加任何地址。</h2>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const infos = ref([])
const newInfo = ref({address: '', name: '', sex: '', tel: ''})
const isEditing = ref([])
const isNew = ref(false)

const addressEmpty = ref(false)
const nameEmpty = ref(false)
const telEmpty = ref(false)

function addInfo() {
  infos.value.push({})
  isEditing.value.push(true)
  isNew.value = true
}

function saveEdit(index) {
  if(newInfo.value.address === '') {addressEmpty.value = true}
  else {addressEmpty.value = false}
  if(newInfo.value.name === '') {nameEmpty.value = true}
  else {nameEmpty.value = false}
  if(newInfo.value.tel === '') {telEmpty.value = true}
  else {telEmpty.value = false}

  if(addressEmpty.value || nameEmpty.value || telEmpty.value) {return}

  infos.value[index] = {address: newInfo.value.address, name: newInfo.value.name, sex: newInfo.value.sex, tel: newInfo.value.tel}
  //post

  isEditing.value[index] = false
  if(isNew.value) {
    newInfo.value.address = ''
    isNew.value = false
  }
}

function cancelEdit(index) {
  isEditing.value[index] = false
  if(isNew.value) {
    infos.value.splice(index, 1)
    isEditing.value.splice(index, 1)
    isNew.value = false
  }
}

function editInfo(index) {
  isEditing.value[index] = true
}

function removeInfo(index) {
  addresses.value.splice(index, 1)
  //delete?

  isEditing.value.splice(index, 1)
}

onMounted(() => {
  //get
  })
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

li > .left
{
  width: calc(100% - 240px);
}

li > .left > .name-info
{
  display: inline-block;

  width: 300px;
}

li > .left > .name-info > input
{
  display: inline-block;

  width: calc(100% - 120px);
}

li > .left > .tel-info
{
  display: inline-block;

  width: 200px;
}

li h4
{
  padding: 9px 0;
}



button {
  width: 100px;
  margin-right: 10px;
}

button.delete:hover
{
  background-color: var(--red-main);
}
</style>
