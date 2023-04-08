import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { TAppState, TAppStore, TRoomState, TSocketState } from "../common/types";


export const socketState: TSocketState = {
  connected: false
};

export const roomState: TRoomState = {
  title: "",
  messages: [],
  users: []
};


export const key: InjectionKey<Store<TAppState>> = Symbol();

export const store = createStore({
  state: {
    sockets: socketState,
    room: roomState,
    user: { id: "", username: "" }
  },
  getters: {
    isUserLogged: (state, id: string) => {
      console.log("is logged!");
      return state.user.id === id;
    }
  },
  mutations: {
    connect(state) {
      state.sockets.connected = true;
    },
    login(state, user) {
      state.user = user;
      state.room.users.push(user);
    },
    addMessage(state, message) {
      state.room.messages = [...state.room.messages, message];
    }
  }
});

