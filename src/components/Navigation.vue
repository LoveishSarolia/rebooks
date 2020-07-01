<template>
  <div id="navigation">
    <ul>
      <li>
        <router-link class="nav-link" to='/'>
          Home
        </router-link>
      </li>
      <li>
        <span>
          <router-link class="nav-link" to='/cart'>
            Cart ({{ cartCount }})
          </router-link>
        </span>
      </li>
      <li>Account</li>
      <li>
        <router-link class="nav-link" to='/about'>
          About
        </router-link>
      </li>    
    </ul>
    <div class="search">
      <input type="text" placeholder="Search for books by Title"/>
      <i class="fas fa-search"></i>
    </div>
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
#navigation {
  display: flex;
  width: 100%;
  margin-bottom: 50px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
    li {
      font-size: 2rem;
      font-weight: bold;
      padding: 2px 10px;
      cursor: pointer;
      &:hover {
        color: #efefef;
      }
    }
  }
  .search {
    position: relative;
    width: 100%;
    max-width: 400px;
    input {
      border: none;
      outline: none;
      width: calc(100% - 80px);
      padding: 15px 60px 15px 20px;
      margin: 0;
      border-radius: 10px;
      background-color: #efefef;
      font-family: "Segoe UI", Tahoma;
      font-size: 1rem;
    }
    i {
      position: absolute;
      right: 20px;
      top: 12px;
      font-size: 1.6rem;
      color: #3c3e3e;
      cursor: pointer;
    }
    ::placeholder {
      color: #3c3e3e;
    }
  }
}
.nav-link {
  font-size: 2rem;
  font-weight: bold;
  padding: 2px 10px;
  cursor: pointer;  
  &:link, &:visited {
    color: #3c3e3e;
  };
  &:hover {
    color: #ffffff;
  };
}
</style>