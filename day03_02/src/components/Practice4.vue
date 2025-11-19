<script setup>
import { computed, reactive } from 'vue';
const cart = reactive([
  { name: 'item1', price: 500, count: 0 },
  { name: 'item2', price: 1000, count: 0 },
]);
const totalPrice = computed(() => {
  // return (cart[0].price * cart[0].count) + (cart[1].price * cart[1].count);
  return cart.reduce((sum, item) => sum + item.price * item.count, 0);
});
</script>
<template>
  <div>
    <input type="number" v-model.number="cart[0].count" /><br />
    <input type="number" v-model.number="cart[1].count" />
    <p>총 금액: {{ totalPrice }}</p>
  </div>
</template>
