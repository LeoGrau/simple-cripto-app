<template>
  <main>
    <div class="flex justify-center">
      <bounce-loader
        :loading="isLoading"
        :color="`#68d391`"
        :size="100"
      ></bounce-loader>
    </div>
    <cripto-table v-if="!isLoading" v-bind:assets="assets" />
  </main>
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
        isLoading: false,
        assets: [],
      };
    }
  },

  created() {
    this.isLoading = false;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
