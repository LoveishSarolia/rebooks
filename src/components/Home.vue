<template>
    <section class="wrapper">
      <h1>Rebooks</h1>
      <h2>Shop for Textbooks</h2>
      <ul class="featured-items">
        <li v-for="product in featuredProducts" :key="product.isbn" class="featured-items__item">
          <router-link :to="{name: 'product', params: {isbn: product.isbn}}">
            <img class="product-image" :src="imagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
          </router-link>
            <p><em>${{ product.price }}</em></p>
        </li>
      </ul>
    </section>
</template>


<script>
import productData from "../store.js";
export default {
  name: 'home',
  data() {
    return {
      products: productData.state.products,
      featuredProducts: productData.getters.featuredProducts
    }
  },
  methods: {
    productLink(product) {
      let link = `/products/${product.isbn}`;
      return link
    },
    imagePath(product) {
      let img = require(`../assets/img/products/${product.image}`);
      return img
    }
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
  font-size: 250%;
}
h2 {
  text-align: center;
  font-size: 150%;
}
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 0.25rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
}
</style>