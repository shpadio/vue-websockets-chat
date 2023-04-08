import { io, Socket } from "socket.io-client";
import { SERVER_URL } from "../common/constants";
import { TMessage } from "../common/types";
import { store } from "../store/store";


class SocketApi {
  socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;

  };

  sendMessage(message: string) {
    this.socket.send(message);
  }
}

export const socket: Socket = io(SERVER_URL);

socket.on("connect", () => {
  store.commit("connect");
  console.log("connected on client!");
});

socket.on("message", (message: TMessage) => {
  debugger;
  console.log(message, "message from server");
  store.commit("addMessage", message);
});


export const socketApi = new SocketApi(socket);
