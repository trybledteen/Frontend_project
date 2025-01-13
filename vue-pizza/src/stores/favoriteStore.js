import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),

  actions: {
    toggleFavorite(pizza) {
      const existingIndex = this.favorites.findIndex(item => item.id === pizza.id)
      if (existingIndex !== -1) {
        this.favorites.splice(existingIndex, 1)
      } else {
        this.favorites.push(pizza)
      }
    },

    isFavorite(pizzaId) {
      return this.favorites.some(item => item.id === pizzaId)
    }
  }
})