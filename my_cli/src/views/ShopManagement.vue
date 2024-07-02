<template>
  <div class="shop-management">
    <h1>店铺管理</h1>

    <!-- 店铺信息 -->
    <div class="shop-info">
      <h2>店铺信息</h2>
      <div class="shop-info-item">
        <label>店铺名称:</label>
        <input v-model="business.businessName" placeholder="店铺名称" />
      </div>
      <div class="shop-info-item">
        <label>店铺图片:</label>
        <img :src="business.businessImg" :alt="business.businessName">
      </div>
      <div class="shop-info-item">
        <label>店铺地址:</label>
        <input v-model="business.businessAddress" placeholder="店铺地址" />
      </div>
      <button @click="saveShopInfo">保存店铺信息</button>
    </div>

    <!-- 食品管理 -->
    <div class="food-management">
      <h2>食品管理</h2>
      <button @click="addFood">新增食品</button>
      <ul>
        <li v-for="(food, index) in foods" :key="index" class="food-item">
          <img :src="food.foodImg" :alt="food.foodName">
          <span>{{ food.foodName }}</span>
          <span>{{ food.foodPrice }} 元</span>
          <button @click="editFood(index)">编辑</button>
          <button @click="removeFood(index)">删除</button>
        </li>
      </ul>
      <div v-if="isEditing" class="food-edit">
        <h2>{{ editIndex === -1 ? '新增食品' : '编辑食品' }}</h2>
<!--        <img :src="currentFood.foodImg" :alt="currentFood.foodName">-->
        <input @change="uploadPhoto($event)" type="file" class="kyc-passin">
        <img :src="currentFood.foodImg" alt="">
        <input v-model="currentFood.foodName" placeholder="食品名称" />
        <input v-model="currentFood.foodPrice" placeholder="食品价格" type="number" />
        <button @click="saveFood">保存</button>
        <button @click="cancelEdit">取消</button>
      </div>
    </div>

    <!-- 店铺设置 -->
    <div class="shop-settings">
      <h2>店铺设置</h2>
      <label>
        起送费:
        <input v-model="business.startPrice" type="number" />
      </label>
      <label>
        配送费:
        <input v-model="business.deliveryPrice" type="number" />
      </label>
      <button @click="saveSettings">保存设置</button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import axios from "axios";

const business = ref({});
const businessId = "10001";
const foods = ref([]);
const currentFood = ref({});
const isEditing = ref(false);
const editIndex = ref(-1);
onMounted(() =>{
  axios.get(`http://localhost:8001/business/getInfo/${businessId}`

  ).then(response => {business.value = response.data.data
    console.log(business.value)})
      .catch(error => {alert(error)})
  axios.get(`http://localhost:8001/food/${businessId}`

  ).then(response => {foods.value = response.data.data
    console.log(foods.value)})
      .catch(error => {alert(error)})
})

function addFood() {
  currentFood.value = { foodName: '', foodImg: '', foodPrice: 0 };
  isEditing.value = true;
  editIndex.value = -1;
}

function editFood(index) {
  currentFood.value = { ...foods.value[index] };
  isEditing.value = true;
  editIndex.value = index;
}

function removeFood(index) {
  foods.value.splice(index, 1);
}

function saveFood() {
  if (editIndex.value === -1) {
    foods.value.push({ ...currentFood.value });
  } else {
    foods.value[editIndex.value] = { ...currentFood.value };
  }
  isEditing.value = false;
}

function cancelEdit() {
  isEditing.value = false;
}

function saveShopInfo() {
  alert('店铺信息已保存');
}

function saveSettings() {
  alert('店铺设置已保存');
}

function uploadPhoto (e) {
  // 利用fileReader对象获取file
  var file = e.target.files[0];
  var filesize = file.size;
  if (filesize > 2101440) {
    // 图片大于2MB

  }
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
    currentFood.value.foodImg=e.target.result
    currentFood.value.foodPrice = 3.0
    console.log(currentFood.value)
  }
}
</script>

<style scoped>
.shop-management {
  padding: 20px;
}

.shop-info,
.food-management,
.shop-settings {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.shop-info-item,
.food-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.shop-info-item label,
.food-item span {
  margin-right: 10px;
}

button {
  margin-left: 10px;
}

input {
  margin: 5px 0;
  display: block;
}
</style>
