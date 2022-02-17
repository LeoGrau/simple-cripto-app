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
        <td class = "hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in assets"
        v-bind:key="asset.id"
        class="border-b border-gray-200 hover:bg-orange-100"
      >
        <td class = "flex justify-center">
            <img class = "w-10 h-10"
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
          />
        </td>
        <td> <strong> #{{ asset.rank }} </strong></td>
        <td>
          <router-link
          class = "hover:underline text-green-500" 
          :to = "{ name: 'coin-detail', params: { id: asset.id } }">
            {{ asset.name }}
          </router-link>
          <small class = "ml-1 text-gray-500"> {{ asset.symbol }} </small>
        </td>
        <!-- <td>$ {{ Number(asset.priceUsd).toLocaleString('en-US', {maximumFractionDigits:2})  }}</td> -->
        <td> {{ asset.priceUsd | dollar }}</td>
        <!-- <td>$ {{ Number(asset.marketCapUsd).toLocaleString('en-US', {maximumFractionDigits:2}) }}</td> -->
        <td> {{ asset.marketCapUsd | dollar }} </td>
        <!-- <td>{{ Number(asset.changePercent24Hr).toLocaleString('en-US', {maximumFractionDigits:2}) }}</td> -->
        <td v-bind:class = "asset.changePercent24Hr.includes('-')? 'text-red-600' : 'text-green-600'"
        > {{ asset.changePercent24Hr | percentage }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CriptoTable",
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
  table {
    width: 50%;
    margin-top: 60px;
  }

  th {
    padding: 10px;
  }
</style>

