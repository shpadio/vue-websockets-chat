<script setup lang="ts">
import Login from "./components/Login.vue";
import Chat from "./components/Chat/Chat.vue";
import { computed } from "vue";


</script>

<template class="app">
  <login v-if="!this.$store.getters.isUserLogged(user)" />
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
