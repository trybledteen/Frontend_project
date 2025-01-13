<script>
import { useOrdersStore } from '../stores/orderStore'

export default {
  data() {
    return {
      ordersStore: useOrdersStore()
    }
  },

}
</script>

<template>
  <div>
    <div class="mb-4 text-sm text-gray-500">
      Počet objednávok: {{ ordersStore.orders.length }}
    </div>
    
    <div v-if="ordersStore.orders.length === 0" class="text-center text-gray-500">
      Zatiaľ nemáte žiadne objednávky
    </div>
        
    <div v-else class="space-y-6">
      <div v-for="order in ordersStore.orders" :key="order.id" 
           class="bg-neutral-500 p-6 rounded-xl">
          
        <div class="flex justify-between mb-4">
          <span class="text-gray-300">Objednávka #{{ order.id }}</span>
          <span class="text-gray-300">{{ order.date }}</span>
        </div>
                
        <div class="space-y-2">
          <div v-for="item in order.items" :key="`${order.id}-${item.id}`"
               class="flex justify-between text-gray-200">
            <div class="flex flex-col">
              <span class="font-medium">{{ item.productName }}</span>
              <span class="text-sm text-gray-400">Množstvo: {{ item.quantity }}</span>
            </div>
            <span>{{ (item.price * item.quantity).toFixed(2) }} €</span>
          </div>
        </div>
            
        <div class="mt-4 pt-4 border-t border-neutral-400 flex justify-between">
          <div class="px-3 py-1 rounded bg-yellow-600 text-sm text-white">
            {{ order.status }}
          </div>
          <span class="font-bold text-gray-200">
            Celkom: {{ order.totalSum.toFixed(2) }} €
          </span>
        </div>
      </div>
    </div>
  </div>
</template>