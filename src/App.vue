<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }" tag="a">Home</router-link> |
      <router-link :to="{ name: 'about' }" tag="a">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: 200;
    color: black;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
