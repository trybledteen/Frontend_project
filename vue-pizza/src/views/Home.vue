<script>
import CardList from '@/components/CardList.vue';

export default {
  name: 'HomePage',
  components: {
    CardList
  }
}
</script>

<template>
  <div class="p-10">
    <h2 class="text-3xl font-bold mb-8">Pizza</h2>
    <CardList />
  </div>
</template>