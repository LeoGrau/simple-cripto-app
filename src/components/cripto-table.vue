<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-gray-400">
        <th></th>
        <th><span>Ranking</span></th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in assets"
        v-bind:key="asset.id"
        class="border-b border-gray-200 hover:bg-orange-100"
      >
        <td>
          <img
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
          />
        </td>
        <td>{{ asset.name }}</td>
        <td>{{ asset.rank }}</td>
        <td>{{ asset.symbol }}</td>
        <td>{{ asset.supply }}</td>
        <td>{{ asset.marketCapUsd }}</td>
        <td>{{ asset.volumeUsd24Hr }}</td>
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
thead {
  display: auto;
}
</style>
