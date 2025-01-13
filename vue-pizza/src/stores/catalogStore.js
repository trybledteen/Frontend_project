import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    pizzas: [
      {
        id: 1,
        title: "Pizza Capricciosa",
        description: "pomodoro, šunka, šampióny, syr Mozzarella",
        imageUrl: "/pizza/1-Capricciosa.png",
        price: 10.00,
        isFavorite: false

      },
      {
        id: 2,
        title: "Pizza Diviola",
        description: "pomodoro, pikantný salám, feferóny, syr Mozzarella",
        imageUrl: "/pizza/2-Diviola.png",
        price: 10.00,
        isFavorite: false

      },
      {
        id: 3,
        title: "Pizza Gorgo e spinaci",
        description: "smotanový základ, baby špenát, syr Gorgonzola",
        imageUrl: "/pizza/3-Gorgo e spinaci.png",
        price: 10.90,
        isFavorite: false

      },
      {
        id: 4,
        title: "Pizza Hawai",
        description: "pomodoro, šunka, ananás, syr Mozzarella",
        imageUrl: "/pizza/4-Hawai.png",
        price: 9.50,
        isFavorite: false

      },
      {
        id: 5,
        title: "Pizza Margherita",
        description: "smotanový základ, pomodoro, kukurica, syr Mozzarella",
        imageUrl: "/pizza/5-Margherita.png",
        price: 8.40,
        isFavorite: false

      },
      {
        id: 6,
        title: "Pizza Nitra",
        description: "pomodoro, šunka, šampióny, kukurica, olivy, syr Mozzarella",
        imageUrl: "/pizza/6-Nitra.png",
        price: 10.40,
        isFavorite: false

      },
      {
        id: 7,
        title: "Pizza Primavera",
        description: "pomodoro, syr Mozzarela bufala, cherry paradajky, bazalkové pesto, rukola",
        imageUrl: "/pizza/7-Primavera.png",
        price: 10.40,
        isFavorite: false

      },
      {
        id: 8,
        title: "Pizza Prosciutto e funghi",
        description: "pomodoro, syr Mozzarella, šunka, šampiňóny, syr Mozzarela bufala",
        imageUrl: "/pizza/8-Prosciutto e funghi.png",
        price: 9.50,
        isFavorite: false

      },
      {
        id: 9,
        title: "Pizza Prosciutto",
        description: "pomodoro, šunka, syr Mozzarella, syr Mozzarela bufala",
        imageUrl: "/pizza/9-Prosciutto.png",
        price: 8.90,
        isFavorite: false

      },
      {
        id: 10,
        title: "Pizza Quatro formaggi",
        description: "pomodoro, syr Mozzarella, syr Gorgonzola, syr Eidam, syr Grana padano",
        imageUrl: "/pizza/10-Quatro formaggi.png",
        price: 10.40,
        isFavorite: false

      },
      {
        id: 11,
        title: "Pizza Sedliacka",
        description: "Pomodoro, slanina, šunka syr, klobása, cibula, feferóny",
        imageUrl: "/pizza/11-Sedliacka.png",
        price: 10.90,
        isFavorite: false

      },
      {
        id: 12,
        title: "Pizza Vegetariana",
        description: "pomodoro, šampióny, cuketa, kukurica, olivy, rukola, syr Mozzarella",
        imageUrl: "/pizza/12-Vegetariana.png",
        price: 10.90,
        isFavorite: false

      }
    ]
  }),

  getters: {
    getAllPizzas: (state) => state.pizzas
  }
})