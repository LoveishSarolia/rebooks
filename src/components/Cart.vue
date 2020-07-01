<template>
  <div class="wrapper">
    <h1>Cart</h1>
    <div class="flex-col">
    <ul class="cart-contents">
      <li class="flex-col cart-contents__item" v-for="item in cart" :key="item">
        <img :src="imagePath(item)" class="thumbnail" alt="">
        <div class="flex-col cart-contents__item-extras">
          <div>
            <p><b>{{ item.name }}</b></p> 
            <p><em>Condition: {{ item.details.condition }}</em></p>
            <p>ISBN: {{ item.isbn }}</p>
            <p>Publisher: {{ item.details.publisher }}</p>
            <p>Edition: {{ item.details.edition }}</p>
          </div>
          <p>${{ item.price }}</p>
          <button @click="removeFromCart(item.isbn)"
          class="button cart-contents__button-remove">
          Remove
          </button>
        </div>
      </li>
    </ul>
    <section class="total-screen">
      <ul class="total-screen__list">
        <li class="total-screen__item">
          <p class="total-screen__item-label">{{ cartCount }} items</p>
        </li>
        <li class="total-screen__item">
          <p class="total-screen__item-label">Subtotal</p>
          <p>${{ cartSubtotal }}</p>
        </li>
        <li class="total-screen__item">
          <p class="total-screen__item-label">Tax ({{ salesTaxPercentage }})</p>
          <p>${{ salesTaxApplied }}</p>
        </li>
        <li class="total-screen__item">
          <p class="total-screen__item-label">Total</p>
          <p>${{ total }}</p>
        </li>
      </ul>
      <button :disabled="!cartCount" 
        class="button button-color total-screen__button">
        Check Out
      </button>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {
      salesTax: 0.053
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    cartCount() {
      return this.cart.length
    },
    cartSubtotal() {
      return this.cart.reduce((total, item) => total + item.price, 0)
    },
    salesTaxPercentage() {
      return `${this.salesTax * 100}%`
    },
    salesTaxApplied() {
      if (this.cartCount > 0) {
        return (this.cartSubtotal * this.salesTax).toFixed(2)
      } else {
      return '0'
      }
    },
    total() {
      if (this.cartCount > 0) {
        return Number(this.cartSubtotal) + Number(this.salesTaxApplied)
      } else {
      return '0'
      }
    }
  },
  methods: {
    imagePath(product) {
      let img = require(`../assets/img/products/${product.image}`);
      return img
    },
    removeFromCart(productID) {
      this.$store.dispatch('removeFromCart', productID)
    }
  }
};
</script>

<style lang="scss">
.cart-contents {
  width: 90%;
  margin-right: 1rem;
  @media only screen and (max-width: 415px) {
    display: block;
    margin: 10 auto;
  }
}
.cart-contents__item {
  width: 100%;
  border-bottom: 1px solid #2c3e50;
}
.cart-contents__item-extras {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-contents__button-remove {
  margin-top: 0.5rem;
  &:hover {
    color: red;
  }
}
.thumbnail {
  max-width: 50px;
  margin-top: 1rem;
}
.total-screen {
  background: #dcecfd91;
  padding: 0 1rem 1rem;
  min-width: 33%;
  border-radius: 10px;
}
.total-screen__list {
  margin: 0;
}
.total-screen__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.total-screen__item-label {
  font-weight: bold;
  margin-right: 1rem;
}
.total-screen__button {
  width: 100%;
}
ul {
  @media only screen and (max-width: 415px) {
    padding-inline-start: 0;
  }

}
</style>