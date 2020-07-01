<template>
  <div id="app">
    <NavigationMobile />
    <div class="home" :class="{'open':showNav}">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView"
          @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
        </div>
        <Navigation v-if="!mobileView" />
      </div>
      <router-view></router-view>
      <footer class="footer">
        <div class="container">
          <div class="columns">
            <div class="content">
              <p>©2020 — <strong>Rebooks</strong></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import NavigationMobile from "./components/NavigationMobile.vue";
export default {
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: {
    Navigation,
    NavigationMobile
  },
  created () {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
* {
  font-size: 1rem;
}
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #aec6cf;
}
#app {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
  overflow: auto;
}
.top-bar {
  display: flex;
  width: 100%;
}
#navigation-icon {
  padding: 10px 10px 10px;
  margin-right: 10px;
  cursor: pointer;
  i {
    font-size: 2rem;
  }
}
.home {
  position: absolute;
  top: 10px;
  width: calc(100% - 60px);
  height: calc(100vh - 60px);
  padding: 20px;
  background-color: #aec6cf;
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.open {
  transform: translateX(300px);
}
footer {
  background-color: #aec6cf !important;
  color: #3c3c3c;  
  margin-top: auto;
  flex: 0 1 auto !important; 
  min-height: 36px;
  .content {
    flex: 1 0 auto;  
    text-align: center !important;
  }
}
</style>
