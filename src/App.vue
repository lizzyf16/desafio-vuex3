<template>
  <nav class="my-3">
    <h1 class="text-center">Tienda 32 Bits</h1>
  </nav>
  <CompTabla/>
</template>
<script>
import CompTabla from "./components/CompTabla.vue"
export default{
name: "App",
components:{
  CompTabla
}
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
