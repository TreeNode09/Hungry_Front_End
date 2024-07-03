<!-- src/views/AddressManagement.vue -->
<template>
<h2 class="margin-1">管理收货地址</h2>
<ul>
  <li v-for="(info, index) in infos" :key="index" :class="{selected: isDefault[index]}">
    <div v-if="isEditing[index]" class="left">
      <input placeholder="收货地址" v-model="newInfo.address" class="address">
      <small><span v-if="addressEmpty">请输入收货地址</span></small>

        <div class="info-line margin-1">
          <input placeholder="收货人" v-model="newInfo.name" class="name">
          <select v-model="newInfo.sex">
            <option value="先生" selected>先生</option>
            <option value="女士">女士</option>
          </select>
          <input type="tel" placeholder="收货人电话" v-model="newInfo.tel" class="tel">

          <small>
            <span v-if="nameEmpty" class="name-error">请输入收货人姓名</span>
            <span v-if="telEmpty">请输入收货人电话</span>
          </small>
        </div>
      </div>
      
    <div v-else class="left">
      <div class="saved">
        <input type="checkbox" v-model="isDefault[index]" @click="setDefault(index)">
        <h4>{{ info.address }}</h4>
      </div>
      <h6>{{ info.name }} {{ info.sex }}  {{ info.tel }}</h6>
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
const newInfo = ref({address: '', name: '', sex: '先生', tel: ''})
const isEditing = ref([])
const isNew = ref(false)
const isDefault = ref([])

const addressEmpty = ref(false)
const nameEmpty = ref(false)
const telEmpty = ref(false)

function addInfo() {
  infos.value.push({})
  isEditing.value.push(true)
  isDefault.value.push(false)
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
  console.log(infos.value[index])
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
  infos.value.splice(index, 1)
  //delete?

  isEditing.value.splice(index, 1)
}

function setDefault(index){
  for(var i = 0; i < isDefault.value.length; i++){
    isDefault.value[i] = false
  }
  isDefault.value[index] = true
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
  height: auto;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;

  transition: all 0.2s;
}

li.selected
{
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

li > .left
{
  width: calc(100% - 240px);
}

li > .left > .info-line > .name
{
  display: inline-block;

  width: 200px;
}

li > .left > .info-line > .tel
{
  display: inline-block;

  width: calc(100% - 320px);
  margin-left: 10px;
}

small > .name-error
{
  display: inline-block;
  width: 320px;
}

li > .left > .saved
{
  display: flex;
}

li > .left > .saved > h4
{
  display: inline-block;

  padding: 9px 0;
}

li > .left > h6
{
  margin-left: 50px;
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
