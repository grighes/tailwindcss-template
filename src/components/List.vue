<template>
  <div class="container">
    <h1>mixins</h1>
    <input type="text" v-model="filterText">
    <ul>
      <li v-for="(fruit, index) in filteredFruits" :key="index">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from '../fruitMixin';

export default {
  mixins: [fruitMixin]
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>