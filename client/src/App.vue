<template class="app">
  <login v-if="false" />
  <chat v-else />
</template>

<script setup lang="ts">
import Login from "./components/Login.vue";
import Chat from "./components/Chat/Chat.vue";
import { computed } from "vue";
import { store } from "./store/store";

const userId = computed(() => store.user.id);
const isLogged = computed(() => store.getters.isUserLogged(userId)).value;
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
