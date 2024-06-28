<!-- src/components/OrderHistory.vue -->
<template>
  <div>
    <h2>Order History</h2>
    <div v-if="orders.length === 0">No orders found</div>
    <ul v-else>
      <li v-for="(order, index) in orders" :key="index">
        Product: {{ order.product }} | Amount: {{ order.amount }}
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getOrders', 'getError']),
    orders() {
      return this.getOrders;
    },
    error() {
      return this.getError;
    }
  },
  methods: {
    ...mapActions(['fetchOrders']),
  },
  created() {
    this.fetchOrders();
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
