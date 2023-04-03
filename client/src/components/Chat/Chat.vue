<template>
  <div class="card">
    <div class="chat-messages__container">
      <message v-for="message in messages" :message="message"></message>
    </div>
    <div class="chat-input__container">
      <div class="chat-input">
        <input>
      </div>
      <div class="chat-send-button">
        <button>send</button>
      </div>
      <div class="chat-send-button">
        <button @click="connect">connect</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import Message from "./Message.vue";
import { TMessage } from "../../common/types";

const messages: TMessage[] = [{ username: "HAsbik", text: "Hello, world!", time: Date.now() }, {
  username: "ya",
  text: "Hello, world!",
  time: Date.now()
}, { username: "HAsbik", text: "Hello, world!", time: Date.now() }];

import { socket } from "../../api/socket";

function connect() {
  console.log(socket, "socket");
  socket.connect();
}

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 70%;
  width: 30%;
  margin: auto;
  border: 3px #ff9c9c solid;
  border-radius: 10px;
}

.chat-messages__container {
  width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.chat-input__container {
  display: flex;
  flex-direction: row;
  height: 30px;
  width: fit-content;
  border-radius: 5px;
  font-size: 20px;
  margin-bottom: 30px;
}

.chat-input {
  border: 2px solid #6a5acd;
}

.chat-send-button {

}
</style>
