<script>
export default {
  props: {
    id: Number,
    imageUrl: String,
    title: String,
    description: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickAdd: Function,
    onClickFavorite: Function
  }
}
</script>

<template>
  <div class="relative bg-neutral-500 border border-zinc-500 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl">
    <img 
      :src="!isFavorite ? '/like-2.svg' : '/like-1.svg'"
      alt="Like"
      class="absolute top-8 left-8"
      @click="onClickFavorite"
    />
    <img :src="imageUrl" :alt="title" class="w-60 h-50">
    <p class="mt-3">{{ title }}</p>
    <p class="text-zinc-800 mt-3">{{ description }}</p>
    
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-zinc-800">Cena</span>
        <b>{{ price }} €</b>
      </div>
      <img 
        :src="!isAdded ? '/plus1.svg' : '/plus2.svg'" 
        alt="Plus" 
        @click="onClickAdd"
      />
    </div>
  </div>
</template>