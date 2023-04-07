<template>
  <div :class=[messageStyle]>
    <div class="message__user">
      {{ username }}
    </div>
    <div class="message__body">
      <div class="message__text">
        {{ text }}
      </div>
      <div class="message__time">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loginState } from "../../api/login";

interface IMessageProps {
  message: TMessage;
}

import { TMessage } from "../../common/types";

const props = defineProps<IMessageProps>();
const { message: { username, text, time } } = props;
const isAuthor = username === loginState.username;

const messageStyle = isAuthor ? "message_is-author" : "message";

</script>

<style scoped>
.message {
  background: slateblue;
  color: aliceblue;
  font-size: 18px;
  border: 1px solid ivory;
  border-radius: 5px;
  position: relative;
  right: 60px;
  margin: 5px;
}

.message_is-author {
  background: slateblue;
  color: aliceblue;
  font-size: 18px;
  border: 1px solid ivory;
  border-radius: 5px;
  position: relative;
  left: 250px;
  margin: 5px;
}

.message__body {
  display: flex;
  flex-direction: row;
}

.message__user {
}

.message__text {
}

.message__time {
}
</style>
