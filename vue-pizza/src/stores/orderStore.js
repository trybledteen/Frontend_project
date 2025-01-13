import { defineStore } from 'pinia'

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    orders: []
  }),

  actions: {
    addOrder(cartItems, totalSum) {
      if (!Array.isArray(cartItems) || typeof totalSum !== 'number') {
        return
      }
      const plainCartItems = cartItems.map(item => ({
        id: item.id,
        title: item.title,
        productName: item.productName || item.title,
        price: item.price,
        quantity: item.quantity
      }))

      this.orders.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        items: plainCartItems,
        totalSum: Number(totalSum),
        status: 'Spracováva sa'
      })
    }
  }
})