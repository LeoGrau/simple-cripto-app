<template>
  <header class="shadow w-screen">
    <nav class="flex justify-between bg-green-400 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <CriptoIcon class="mr-2" />
        <router-link
          class="font-semibold text-xl tracking-tight"
          :to="{ name: 'home' }"
          >CriptoApp</router-link
        >
      </div>
      <div
        class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
      >
        <div class="text-sm lg:flex-grow"></div>
      </div>
      <ul class="flex items-end">
        <router-link
          v-for="link in links"
          :key="link.title"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          :to = "link.to"
        > {{ link.title }} </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
import CriptoIcon from "@/components/cripto-icon.vue";

export default {
  name: "CriptoHeader",
  components: {
    CriptoIcon,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
