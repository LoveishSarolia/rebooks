import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        name: "Organic Chemistry Textbook",
        featured: true,
        isbn: 9781292160450,
        price: 75,
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
        featured: true,
        isbn: 9780357042922,
        price: 150,
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
        name: "Conceptual Physics Textbook",
        featured: true,
        isbn: 9780321909107,
        price: 50,
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
      {
        name: "Biology Textbook",
        featured: true,
        isbn: 9780131662551,
        price: 20,
        category: "Textbooks",
        quantity: 1,
        details: {
          publisher: "Prentice-Hall",
          edition: 1,
          seller: "Advaith S.",
          condition: "Used - Acceptable",
          extraInfo: "Pages ripped out and tear stains on random pages"
        },
        image: [
          '9780131662551.jpg'
        ]
      },
      /*{
        name: "World Geography Textbook",
        featured: false,
        isbn: 9780547484792,
        price: 40,
        category: "Textbooks",
        quantity: 1,
        details: {
          publisher: "Holt McDougal",
          edition: 1,
          seller: "Mitch D.",
          condition: "Used - Like New",
          extraInfo: undefined
        },
        image: [
          '9780547484792.jpg'
        ]
      },
      {
        name: "Microeconomic Theory Textbook",
        featured: true,
        isbn: 9788131717257,
        price: 25,
        category: "Textbooks",
        quantity: 1,
        details: {
          publisher: "Pearson",
          edition: 5,
          seller: "Loveish S.",
          condition: "Used - Like New",
          extraInfo: "Opened twice"
        },
        image: [
          '9788131717257.jpg'
        ]
      },
      {
        name: "Gender Studies Textbook",
        featured: false,
        isbn: 9781138788800,
        price: 25,
        category: "Textbooks",
        quantity: 1,
        details: {
          publisher: "Routledge",
          edition: 1,
          seller: "Joshua S.",
          condition: "Used - Like New",
          extraInfo: undefined
        },
        image: [
          '9781138788800.jpg'
        ]
      } */
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