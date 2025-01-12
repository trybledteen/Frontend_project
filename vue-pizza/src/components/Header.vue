<script>
import { useCartStore } from '../stores/cartStore'

export default {
  data() {
    return {
      cartStore: useCartStore()
    }
  },
  methods: {
    handleCartClick() {
      this.$emit('open-drawer')
    }
  }
}
</script>

<template>
  <header class="flex justify-between border-b border-zinc-500 px-10 py-4">
    <router-link to="/" class="flex items-center gap-4">
      <img src="/logo.png" alt="Logo" class="w-20"/>
      <div>
        <h2 class="text-xl font-bold uppercase">Pizzeria</h2>
        <p class="text-slate-950">Najlepšia pizzeria v Nitre</p>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li
        class="flex items-center cursor-pointer gap-3 text-zinc-800 hover:text-black"
        @click="handleCartClick"
      >
        <img src="/cart.svg" alt="Cart"/>
        <b>{{ cartStore.totalSum.toFixed(2) }} €</b>
      </li>

      <li class="text-zinc-800 hover:text-black">
        <router-link to="/favorites" class="flex items-center cursor-pointer gap-3">
          <img src="/heart.svg" alt="Favorites"/>
          <span>Záložky</span>
        </router-link>
      </li>

      <li class="text-zinc-800 hover:text-black">
        <router-link to="/profile" class="flex items-center cursor-pointer gap-3">
          <img src="/profile.svg" alt="Profile"/>
          <span>Profil</span>
        </router-link>
      </li>
    </ul>
  </header>
</template>