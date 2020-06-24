<template>
  <div id="navigation">
    <ul>
      <li><router-link class="navLink" to='/'>Home</router-link></li>
      <li><router-link class="navLink" to='/cart'>Cart</router-link></li>
      <li>Account</li>
      <li>About Us</li>
    </ul>
    <div class="search">
      <input type="text" placeholder="Search for books, supplies, and more!" />
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script/>

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
      border-radius: 20px;
      background-color: #efefef;
      font-family: "Segoe UI", Tahoma;
      font-size: 1rem;
    }
    i {
      position: absolute;
      right: 20px;
      top: 15px;
      font-size: 1.6rem;
      color: #aaa;
      cursor: pointer;
    }
  }
}
.navLink {
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