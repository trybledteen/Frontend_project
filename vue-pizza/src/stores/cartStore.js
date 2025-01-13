import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  
  getters: {
    totalSum: (state) => {
      return state.cartItems.reduce((total, item) => {
        return total + (item.price * (item.quantity || 1))
      }, 0)
    }
  },

  actions: {
    toggleCartItem(pizza) {
      const existingItem = this.cartItems.find(item => item.id === pizza.id)
      if (existingItem) {
        this.cartItems = this.cartItems.filter(item => item.id !== pizza.id)
      } else {
        this.cartItems.push({
          ...pizza,
          quantity: 1
        })
      }
    },

    removeFromCart(pizzaId) {
      this.cartItems = this.cartItems.filter(item => item.id !== pizzaId)
    },

    increaseQuantity(pizzaId) {
      const item = this.cartItems.find(item => item.id === pizzaId)
      if (item) {
        item.quantity++
      }
    },

    decreaseQuantity(pizzaId) {
      const item = this.cartItems.find(item => item.id === pizzaId)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        } else {
          this.removeFromCart(pizzaId)
        }
      }
    },

    clearCart() {
      this.cartItems = []
    }
  }
})