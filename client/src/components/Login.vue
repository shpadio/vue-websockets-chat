<template>
  <div class="card">
    <div class="card-title">
      Enter your username
    </div>
    <div class="card-input">
      <input v-model="inputValue" placeholder="" />
    </div>
    <div class="card-button">
      <button @click="loginFunc()">Continue</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { login } from "../api/login";

const inputValue = ref("");

async function loginFunc() {
  return await login(inputValue.value);
}


</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 500px;
  height: 300px;
  margin: auto;
  border: 3px #ff9c9c solid;
  border-radius: 10px;
}

.card-title {
  font-size: 24px;
  font-family: Damascus, monospace;
}

.card-input {
  height: 30px;
  width: fit-content;
  border: 2px solid slateblue;
  border-radius: 5px;
  font-size: 20px;
}

.card-button {
  width: fit-content;
  padding: 5px;
  height: 30px;
  border: aqua;
  border-radius: 5px;
  background: #3a6ff5;
  color: #464444;
}

.card-button:hover {
  border: #0a8888;
  background: #8daeff;
  color: #ffffff;
}

</style>
