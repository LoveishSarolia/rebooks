<template>
  <div class="wrapper">
    <h1>Cart</h1>
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
          <p><b>${{ item.price }}</b></p>
          <button @click="removeFromCart(item.isbn)"
          class="button cart-contents__button-remove">
          Remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'cart',
  computed: {
    cart() {
      return this.$store.getters.cart
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

<style>
.cart-contents {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
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
.thumbnail{
  max-width: 50px;
  margin-top: 0.5rem;
}
</style>