<script setup lang="ts">
import Login from "./components/Login.vue";
import Chat from "./components/Chat/Chat.vue";
const isLogged = true;
</script>

<template class="app">
    <login v-if="!isLogged"/>
    <chat v-else/>
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
