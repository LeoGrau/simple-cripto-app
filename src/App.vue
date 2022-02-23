<template>
  <main id="app">
    <cripto-header :links = "links" />
    <router-view class="container px-5 sm:px-20 py-20" />
  </main>
</template>

<script>
import CriptoHeader from "@/components/cripto-header";

export default {
  name: "app",
  components: { CriptoHeader },
  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coin-detail", params: { id: "bitcoin" } },
        },
        {
          title: "ETH",
          to: { name: "coin-detail", params: { id: "ethereum" } },
        },
        {
          title: "XRP",
          to: { name: "coin-detail", params: { id: "ripple" } },
        },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: auto;
}
</style>
