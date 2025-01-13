<script>
import { useCartStore } from '../stores/cartStore'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cartStore: useCartStore()
    }
  },
  computed: {
    formattedPrice() {
      return (this.item.price * (this.item.quantity || 1)).toFixed(2)
    }
  }
}
</script>

<template>
  <div class="flex items-center border border-zinc-500 p-4 rounded-xl gap-4">
    <img 
      class="w-16 h-16" 
      :src="item.imageUrl" 
      :alt="item.title"
    >
    <div class="flex flex-col">
      <p>{{ item.title }}</p>

      <div class="flex justify-between mt-2">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-2 mr-4">
            <button 
              @click="cartStore.decreaseQuantity(item.id)"
              class="w-6 h-6 flex items-center justify-center border border-zinc-500 rounded hover:bg-neutral-500 transition"
            >
              -
            </button>
            <span>{{ item.quantity || 1 }}</span>
            <button 
              @click="cartStore.increaseQuantity(item.id)"
              class="w-6 h-6 flex items-center justify-center border border-zinc-500 rounded hover:bg-neutral-500 transition"
            >
              +
            </button>
          </div>
          <b>{{ formattedPrice }} €</b>
        </div>
        <img 
          class="opacity-40 hover:opacity-20 cursor-pointer transition absolute right-12" 
          src="/close.svg" 
          @click="cartStore.removeFromCart(item.id)"
        />
      </div>
    </div>
  </div>
</template>