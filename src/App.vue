<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex>
          <NavBar></NavBar>
          <router-view></router-view>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: '/',
    components: {
      NavBar
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
.white-text{
  color: white
}
</style>
