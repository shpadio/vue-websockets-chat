import { io, Socket } from "socket.io-client";
import { reactive } from "vue";
import { SERVER_URL } from "../common/constants";

type TSocketState = {
  connected: boolean;
}

const state: TSocketState = reactive({
  connected: false
});

export const socket: Socket = io(SERVER_URL);

socket.on("connect", () => {
  state.connected = true;
  console.log("connected on client!");

});
