<template>
   <main id = "app">
    <cripto-header/>
    <cripto-table/>
  </main>
</template>

<script>
import CriptoHeader from "@/components/cripto-header";
import CriptoTable from "@/components/cripto-table"

export default {
  name: "app",
  components: { CriptoHeader, CriptoTable }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>