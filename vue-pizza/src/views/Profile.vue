<script>
import OrdersList from '../components/OrdersList.vue'

export default {
  name: 'ProfilePage',
  components: {
    OrdersList
  }
}
</script>
<template>
  <div class="p-10">
    <h2 class="text-3xl font-bold mb-8">Moje objednávky</h2>
    <OrdersList />
  </div>
</template>