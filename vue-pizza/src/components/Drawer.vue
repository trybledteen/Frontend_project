<script>
import DrawerHead from './DrawerHead.vue'
import CartItemList from './CartItemList.vue'
import { useCartStore } from '../stores/cartStore'
import { useOrdersStore } from '../stores/orderStore'

export default {
  components: {
    DrawerHead,
    CartItemList
  },
  data() {
    return {
      cartStore: useCartStore(),
      ordersStore: useOrdersStore()
    }
  },
  methods: {
    handleOrder() {
      this.ordersStore.addOrder(this.cartStore.cartItems, this.cartStore.totalSum)
      this.cartStore.clearCart()
    }
  }
}
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="bg-neutral-400 w-96 h-full fixed right-0 top-0 z-20 p-8">
      <DrawerHead />
      <CartItemList />
      
      <div class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Suma:</span>
          <div class="flex-1 border-b border-dashed border-neutral-500"></div>
          <b>{{ cartStore.totalSum.toFixed(2) }} €</b>
        </div>
        <button
          :disabled="cartStore.cartItems.length === 0"
          @click="handleOrder"
          class="mt-4 transition bg-lime-600 w-full rounded-xl py-3 text-gray-300 disabled:bg-neutral-500 hover:bg-lime-700 cursor-pointer"
        >
          Uskutočniť objednávku
        </button>
      </div>
    </div>
  </div>
</template>