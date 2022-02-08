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
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 hover:bg-orange-100">
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
        <td>Data 4</td>
        <td>Data 5</td>
        <td>Data 6</td>
        <td class="hidden sm:block"></td>
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

<style></style>
