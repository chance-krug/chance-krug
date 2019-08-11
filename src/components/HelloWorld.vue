<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>
      Hello, and welcome to my personal portfolio site. I am currently in the development process so please come back soon to view the finished product!
      <br><br>
      Thank you,
      <br><br>
      Chance Krug
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
