<script>
import FavoritesList from '../components/FavoritesList.vue'
import { useFavoritesStore } from '../stores/favoriteStore'

export default {
  name: 'FavoritesPage',
  components: {
    FavoritesList
  },
  computed: {
    favorites() {
      const favoritesStore = useFavoritesStore()
      return favoritesStore.favorites
    }
  }
}
</script>

<template>
  <div class="p-10">
    <h2 class="text-3xl font-bold mb-8">Záložky</h2>
    <div v-if="favorites.length === 0" class="text-center text-gray-500 text-xl mt-10">
      Zatiaľ nemáte žiadne obľúbené položky
    </div>
    <FavoritesList v-else />
  </div>
</template>

