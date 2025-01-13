<script>
import CartItem from './CartItem.vue'
import { useCartStore } from '../stores/cartStore'

export default {
  components: {
    CartItem
  },
  data() {
    return {
      cartStore: useCartStore()
    }
  }
}
</script>

<template>
  <div class="flex flex-col flex-1 gap-4 justify-between">
    <CartItem 
      v-for="item in cartStore.cartItems" 
      :key="item.id"
      :item="item"
    />
  </div>
</template>