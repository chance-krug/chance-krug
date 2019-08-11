<template>
  <div id="app">
    <NavBar></NavBar>
    <img alt="Vue logo" src="./assets/Logo1.png">
    <HelloWorld msg="Welcome to my personal website. Currently under construction. Please come back soon to see the finished version!"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import BootstrapVue from 'bootstrap-vue';
  import HelloWorld from './components/HelloWorld.vue'
  import NavBar from "@/components/NavBar";


  Vue.use(BootstrapVue);

export default {
  name: 'app',
  components: {
    NavBar, HelloWorld

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
