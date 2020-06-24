<template>
  <div id="navigation-mobile">
    <div class="search">
      <input type="text" placeholder="Search..." />
      <i class="fas fa-search"></i>
    </div>
    <ul>
      <li><router-link class="navLink" to='/'>Home</router-link></li>
      <li><router-link class="navLink" to='/cart'>Cart</router-link></li>
      <li>Account</li>
      <li>About Us</li>    </ul>
    <div class="social-media">
      <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-facebook"></i>
    </div>
  </div>
</template>

<script/>

<style lang="scss" scoped>
#navigation-mobile {
  padding: 20px 0 0 0;
  ul {
    list-style: none;
    width: 200px;
    padding-left: 40px;
    li {
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: #111;
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
      color: white;
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
    }
  }
}
.navLink {
  font-size: 2rem;
  font-weight: bold;
  padding: 2px 10px;
  cursor: pointer;
  &:link, &:visited {
    color: #ffffff;
  };
  &:hover {
    color: #3c3e3e;
  }
}
</style>