<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th><span>Ranking</span></th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in assets"
        v-bind:key="asset.id"
        class="border-b border-gray-200 hover:bg-orange-100"
      >
        <td >
          <div class = "flex flex-col justify-center items-center">
             <img
            class="w-6 h-6 row-span-2"
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
          />
          </div>
        </td>
        <td>
          <strong> #{{ asset.rank }} </strong>
        </td>
        <td>
          <router-link
            class="hover:underline text-green-500"
            :to="{ name: 'coin-detail', params: { id: asset.id } }"
          >
            {{ asset.name }}
          </router-link>
          <small class="ml-1 text-gray-500"> {{ asset.symbol }} </small>
        </td>
        <!-- <td>$ {{ Number(asset.priceUsd).toLocaleString('en-US', {maximumFractionDigits:2})  }}</td> -->
        <td>{{ asset.priceUsd | dollar }}</td>
        <!-- <td>$ {{ Number(asset.marketCapUsd).toLocaleString('en-US', {maximumFractionDigits:2}) }}</td> -->
        <td>{{ asset.marketCapUsd | dollar }}</td>
        <!-- <td>{{ Number(asset.changePercent24Hr).toLocaleString('en-US', {maximumFractionDigits:2}) }}</td> -->
        <td
          v-bind:class="
            asset.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ asset.changePercent24Hr | percentage }}
        </td>
        <td class="hidden sm:block">
          <cripto-button @bclick="goToCoin(asset.id)">
            <span> Detalle </span>
          </cripto-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CriptoButton from "@/components/cripto-button.vue";

export default {
  name: "CriptoTable",
  components: { CriptoButton },
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 60px;
}

th {
  padding: 10px;
}
</style>
