import { createStore } from "vuex";
import { TRoomState, TSocketState } from "../common/types";


export const socketState: TSocketState = {
  connected: false
};

export const roomState: TRoomState = {
  title: "",
  messages: [],
  users: []
};

export const store = createStore({
  state: {
    sockets: socketState,
    room: roomState
  },

  getters: {
    isUserLogged(state, id: string) {
      return state.room.users.find((user) => user.id === id);
    }
  },

  mutations: {
    connect(state) {
      state.sockets.connected = true;
    },
    login(state, user) {
      state.room.users.push(user);
    },
    addMessage(state, message) {
      state.room.messages = [...state.room.messages, message];
    }
  }

});

