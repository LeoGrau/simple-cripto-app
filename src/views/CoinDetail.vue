<template>
  <div class="flex-col">
    <div class="flex justify-center">
      <bounce-loader
        :loading="isLoading"
        :color="`#68d391`"
        :size="100"
      ></bounce-loader>
    </div>
    <template v-if="asset.id && !isLoading">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <img
            class="w-20 h-20 mr-5"
            v-bind:src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
          />
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span>{{ asset.priceUsd | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span>{{ min | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>{{ max | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>{{ avg | dollar }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span>{{ asset.changePercent24Hr | percentage }}</span>
            </li>
          </ul>
        </div>

        <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cambiar
          </button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
      <line-chart
        class="my-10"
        :colors="['orange']"
        :min="min"
        :max="max"
        :data="history.map((h) => [h.date, parseFloat(h.priceUsd).toFixed(2)])"
      ></line-chart>
      <h3 class="text-xl my-10">Mejores Ofertas de Cambio</h3>
      <table class="w-full">
        <tr
          v-for="market in markets"
          v-bind:key="`${market.exchangeId}-${market.priceUsd}`"
          class="border-b"
        >
          <td>
            <b>{{ market.exchangeId }}</b>
          </td>
          <td>{{ market.priceUsd | dollar }}</td>
          <td>{{ market.baseSymbol }} / {{ market.quoteSymbol }}</td>
          <td>
            <!-- <cripto-button v-if="market.url" @click="getWebSite(market)">
              <slot>Obtener link</slot>
            </cripto-button> -->
            <cripto-button
              :is-loading="market.isLoading || false"
              v-if="!market.url"
              v-on:bclick="getWebSite(market)"
            >
              Link
            </cripto-button>
            <a v-else class="hover:underline text-green-600" target="_blank">
              {{ market.url }}
            </a>
          </td>
        </tr>
      </table>
    </template>
  </div>
</template>

<script>
import CriptoButton from "@/components/cripto-button";
import api from "@/api.js";
export default {
  name: "CoinDetail",
  components: {
    CriptoButton,
  },
  data() {
    return {
      isLoading: false,
      asset: {},
      history: [],
      markets: [],
    };
  },

  created() {
    this.getCoin();
  },

  methods: {
    getCoin() {   
      this.isLoading = true;   
      const id = this.$route.params.id;

      Promise.all([
        api.getAsset(id),
        api.getAssetHistory(id),
        api.getMarkets(id),
      ])
        .then(([asset, history, markets]) => {
          this.asset = asset;
          this.history = history;
          this.markets = markets;
        })
        .finally(() => (this.isLoading = false));
    },
    getWebSite(market) {
      this.$set(market, "isLoading", true);
      return api
        .getExchange(market.exchangeId)
        .then((res) => {
          this.$set(market, "url", res.exchangeUrl);
        })
        .finally(() => {
          this.$set(market, "isLoading", false);
        });
    },
  },
  computed: {
    min() {
      return Math.min(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },
    max() {
      return Math.max(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
      );
    },
    avg() {
      return (
        this.history.reduce((a, b) => a + parseFloat(b.priceUsd), 0) /
        this.history.length
      );
    },
  },
};
</script>

<style></style>
