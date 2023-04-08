<template class="app">
  <login v-if="!isLogged" />
  <chat v-else />
</template>

<script setup lang="ts">
import Login from "./components/Login.vue";
import Chat from "./components/Chat/Chat.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "./store/store";

const store = useStore(key);
const isLogged = computed(() => store.getters.isUserLogged());


</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
