<script setup lang="ts">
import Login from "./components/Login.vue";
import Chat from "./components/Chat/Chat.vue";
import {state} from './common/state'
import {onMounted} from "vue";
import {test} from "./api/login";

onMounted(async () => {
  await test('')
})

</script>

<template class="app">
    <login v-if="!state.isLogged"/>
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
