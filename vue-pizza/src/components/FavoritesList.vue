<script>
import Card from './Card.vue'
import { useFavoritesStore } from '../stores/favoriteStore'
import { useCartStore } from '../stores/cartStore'

export default {
  components: {
    Card
  },
  data() {
    return {
      favoritesStore: useFavoritesStore(),
      cartStore: useCartStore()
    }
  },
  methods: {
    onClickFavorite(pizza) {
      this.favoritesStore.toggleFavorite(pizza)
    },
    onClickAdd(pizza) {
      this.cartStore.toggleCartItem(pizza)
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="pizza in favoritesStore.favorites || []"
      :key="pizza.id"
      :id="pizza.id"
      :title="pizza.title"
      :description="pizza.description"
      :imageUrl="pizza.imageUrl"
      :price="pizza.price"
      :isFavorite="favoritesStore.isFavorite(pizza.id)"
      :isAdded="cartStore.cartItems.some(item => item.id === pizza.id)"
      :onClickFavorite="() => onClickFavorite(pizza)"
      :onClickAdd="() => onClickAdd(pizza)"
    />
  </div>
</template>