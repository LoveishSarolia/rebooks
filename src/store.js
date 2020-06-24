import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        name: "Organic Chemistry Textbook",
        isbn: 9781292160450,
        price: 75,
        dateAdded: "Fri Jun 19 2020 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Textbooks",
        quantity: 1,
        details: {
          publisher: "Pearson",
          edition: 8,
          seller: "Morgan E.",
          condition: "Used - Good",
          extraInfo: "Spine is ripped but still bound"
        },
        image: [
          '9781292160450.jpg'
        ]
      },
      {
        name: "Multivariable Calculus Textbook",
        isbn: 9780357042922,
        price: 150,
        dateAdded: "Sat Jun 20 2020 16:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Textbooks",
        quantity: 1,
        details: {
          publisher: "Cengage Learning",
          edition: 9,
          seller: "Hamilton W.",
          condition: "Used - Very Good",
          extraInfo: undefined
        },
        image: [
          '9780357042922.jpg'
        ]
      },
      {
        name: "Physics Textbook",
        isbn: 9780321909107,
        price: 50,
        dateAdded: "Fri Jun 19 2020 10:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Textbooks",
        quantity: 1,
        details: {
          publisher: "Pearson",
          edition: 12,
          seller: "Nicholas R.",
          condition: "Used - Acceptable",
          extraInfo: "Cover is scuffed and some pages have coffee stains"
        },
        image: [
          '9780321909107.jpg'
        ]
      },
    ]
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(Number(payload))
    },
    decrementInventory(state, payload) {
      let product = state.products.find(product => product.isbn === Number(payload))
      product.quantity--;
    },
    removeFromCart(state, payload) {
      let deleteIndex = state.cart.indexOf(Number(payload));
      state.cart.splice(deleteIndex, 1)
    },
    incrementInventory(state, payload) {
      let product = state.products.find(product => product.isbn === Number(payload))
      product.quantity++;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
      commit('decrementInventory', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('incrementInventory', payload)
    }
  },
  getters: {
    product: (state) => (isbn) => {
      return state.products.filter(p => p.isbn === Number(isbn))[0]
    },
    cart: (state) => {
      return state.cart.map(
        productID => state.products.find(
          product => product.isbn === productID
        )
      )
    }
  }
});