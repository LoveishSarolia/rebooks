<template>
  <div id="navigation-mobile">
    <div class="search">
      <input type="text" placeholder="Search..." />
      <i class="fas fa-search"></i>
    </div>
    <ul>
      <li>
        <router-link class="nav-link" to='/'>
          Home
        </router-link>
      </li>
      <li>
        <span>
          <router-link class="nav-link" to='/cart/'>
            Cart ({{ cartCount }})
          </router-link>
        </span>
      </li>
      <!-- <li>Account</li> -->
      <li>
        <router-link class="nav-link" to='/about'>
          About
        </router-link>
      </li>    
    </ul>
    <!--
    <div class="social-media">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-facebook"></i>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    cartCount () {
      return this.$store.state.cart.length
    }
  }
}
</script>

<style lang="scss" scoped>
#navigation-mobile {
  padding: 20px 0 0 0;
  ul {
    list-style: none;
    width: 200px;
    padding-left: 40px;
    li {
      color: #ffffff;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: #3c3e3e;
      }
    }
  }
  .search {
    position: relative;
    width: 240px;
    margin-bottom: 20px;
    padding-left: 20px;
    input {
      border: none;
      outline: none;
      width: 180px;
      padding: 10px 50px 10px 20px;
      margin: 0;
      border-radius: 10px;
      background-color: #3c3e3e;
      font-family: "Segoe UI", Tahoma;
      font-size: 1rem;
      color: #ffffff;
    }
    i {
      position: absolute;
      right: 5px;
      top: 7px;
      font-size: 1.6rem;
      color: #ffffff;
      cursor: pointer;
    }
    ::placeholder {
      color: #ffffff;
    }
  }
  .social-media {
    position: absolute;
    left: 40px;
    bottom: 20px;
    i {
      margin: 0 20px 0 0;
      color: #ffffff;
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
.nav-link {
  font-size: 2rem;
  font-weight: bold;
  padding: 2px;
  cursor: pointer;
  &:link, &:visited {
    color: #ffffff;
  };
  &:hover {
    color: #3c3e3e;
  }
}
</style>