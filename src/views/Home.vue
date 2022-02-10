<template>
  <cripto-table v-bind:assets = "assets"></cripto-table>
</template>

<script>
// @ is an alias to /src
import api from "@/api.js";
import CriptoTable from "@/components/cripto-table.vue";

export default {
  name: "Home",
  components: {
    CriptoTable,
  },

  data() {
    {
      return {
        assets: []
      };
    }
  },

  created() {
    api.getAssets().then(assets => this.assets = assets);
  },
};
</script>
