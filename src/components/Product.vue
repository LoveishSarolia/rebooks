<template>
  <div>
    <section class="wrapper">
      <div class="flex-col">
        <img class="flex-col2" :src="imagePath(product)" alt="">
        <div class="flex-col2">
          <h2>{{ product.name }}</h2>
          <button @click="addToCart" class="button button-color">Add to Cart</button>
          <p>Price: ${{ product.price }}</p>
          <p>Condition: {{ product.details.condition }}</p>
          <p><em>Seller: {{ product.details.seller }}</em></p>
          <h3>Details</h3>
          <ul class="align">
            <li>Publisher: {{ product.details.publisher }}</li>
            <li>Edition: {{ product.details.edition }}</li>
            <li v-if="product.details.extraInfo">Additional Information: {{ product.details.extraInfo }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.isbn)
    }
  },
  methods: {
    imagePath(product) {
      let img = require(`../assets/img/products/${product.image}`);
      return img
    },
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.isbn)
    }
  }
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: flex-start;
  @media only screen and (max-width: 415px) {
    display: block;
    margin: 0 auto;
  }
}
.flex-col2 {
  width: 50%;
  padding: 50px 50px 0 0;
  text-align: left;
  @media only screen and (max-width: 415px) {
    display: block;
    margin: 0 auto;
    padding: 0px 0px 0 0;
    text-align: center;
  }  
}
.button {
  padding: 0.5rem 0.75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.15s ease;
}
.button-color {
  background-color: #2c3e50;
  color: #ffffff;
  &:hover, &:focus {
    background-color:#42b983
  }
}
a {
    text-decoration: none;
}
a:link, a:visited {
  color: #111;
}
a:hover {
    color: #ffffff;
}
.align {
  text-align: left;
  margin-left: 25px;
}
</style>