<template>
  <div class="home">
    <!-- <Header /> -->
    <!-- <button class="bgn-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
      Button
    </button> -->
    <h1>tailwindcss template</h1>
    <button class="btn-blue">
      Button 1
    </button>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import '@/assets/styles/main.css'

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
