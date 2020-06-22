<template>
    <section class="wrapper">
      <h2>Shop for Textbooks</h2>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items__item">
          <router-link :to="{ name: 'product', params: { id: product.id}}">
            <img class="product-image" :src="imagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>${{ product.price }}</em></p>
          </router-link>
        </li>
      </ul>
    </section>
</template>


<script>
import productData from "../extra/products.js";
export default {
  name: 'home',
  data() {
    return {
      products: productData.state.products,
    }
  },
  methods: {
    imagePath(product) {
      console.log('>product>!!!!!!!!!',product);
      let photo = require(`../assets/img/products/${product.image[0]}`);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', photo);
      return photo
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
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
