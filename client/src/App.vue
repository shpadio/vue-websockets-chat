<script setup lang="ts">
import Login from "./components/Login.vue";
import Chat from "./components/Chat/Chat.vue";
import { loginState } from "./api/login";

</script>

<template class="app">
  <login v-if="!loginState.isLogged" />
  <chat v-else />
</template>

<style scoped>
.app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
