<template>
  <div class="shop-management">
    <h1>店铺管理</h1>

    <!-- 店铺信息 -->
    <div class="shop-info">
      <h2>店铺信息</h2>
      <div class="shop-info-item">
        <label>店铺名称:</label>
        <input v-model="shopInfo.name" placeholder="店铺名称" />
      </div>
      <div class="shop-info-item">
        <label>店铺图片:</label>
        <input v-model="shopInfo.image" placeholder="店铺图片URL" />
      </div>
      <div class="shop-info-item">
        <label>店铺地址:</label>
        <input v-model="shopInfo.address" placeholder="店铺地址" />
      </div>
      <button @click="saveShopInfo">保存店铺信息</button>
    </div>

    <!-- 食品管理 -->
    <div class="food-management">
      <h2>食品管理</h2>
      <button @click="addFood">新增食品</button>
      <ul>
        <li v-for="(food, index) in foods" :key="index" class="food-item">
          <img :src="food.image" alt="food.name" width="100" />
          <span>{{ food.name }}</span>
          <span>{{ food.price }} 元</span>
          <button @click="editFood(index)">编辑</button>
          <button @click="removeFood(index)">删除</button>
        </li>
      </ul>
      <div v-if="isEditing" class="food-edit">
        <h2>{{ editIndex === -1 ? '新增食品' : '编辑食品' }}</h2>
        <input v-model="currentFood.name" placeholder="食品名称" />
        <input v-model="currentFood.image" placeholder="食品图片URL" />
        <input v-model="currentFood.price" placeholder="食品价格" type="number" />
        <button @click="saveFood">保存</button>
        <button @click="cancelEdit">取消</button>
      </div>
    </div>

    <!-- 店铺设置 -->
    <div class="shop-settings">
      <h2>店铺设置</h2>
      <label>
        起送费:
        <input v-model="deliverySettings.minFee" type="number" />
      </label>
      <label>
        最大配送距离:
        <input v-model="deliverySettings.maxDistance" type="number" />
      </label>
      <button @click="saveSettings">保存设置</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const shopInfo = ref({
  name: '我的店铺',
  image: 'http://example.com/shop.jpg',
  address: '某某街道123号',
});

const foods = ref([
  { name: '食品A', image: 'http://example.com/imageA.jpg', price: 10 },
  { name: '食品B', image: 'http://example.com/imageB.jpg', price: 20 },
]);

const currentFood = ref({ name: '', image: '', price: 0 });
const isEditing = ref(false);
const editIndex = ref(-1);

const deliverySettings = ref({
  minFee: 5,
  maxDistance: 10,
});

function addFood() {
  currentFood.value = { name: '', image: '', price: 0 };
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
