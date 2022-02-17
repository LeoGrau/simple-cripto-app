<template>
  <header class="shadow w-screen">
    <nav class="flex justify-between bg-green-400 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <CriptoIcon class="mr-2" />
        <router-link class="font-semibold text-xl tracking-tight" :to = "{name: 'home'}">CriptoApp</router-link>
      </div>
      <div
        class="hidden sm:block w-full blok flex-grow lg:flex lg:items-center lg:wauto"
      >
        <div class="text-sm lg:flex-grow"></div>
      </div>
      <ul class="flex items-end">
        <router-link class = "mr-3 text-gray-200 font-semibold" to="/"> Home </router-link>
        <router-link class = "mr-3 text-gray-200 font-semibold" to="/about"> About </router-link>
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
};
</script>
