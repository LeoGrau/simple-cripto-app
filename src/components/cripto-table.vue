<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class = "{ up: this.sortOrder == 1, down: this.sortOrder == -1}">
          <span class = "underline cursor-pointer" @click = "changeSortOrder" >Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in filteredAssets"
        v-bind:key="asset.id"
        class="border-b border-gray-200 hover:bg-orange-100"
      >
        <td>
          <div class="flex flex-col justify-center items-center">
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
          {{ (asset.changePercent24Hr)/100 | percentage }} 
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
  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },
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
    changeSortOrder() {
      this.sortOrder = this.sortOrder == 1? -1: 1;
    }
  },
  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder == 1 ? -1 : 1;
      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
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

.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}

</style>
