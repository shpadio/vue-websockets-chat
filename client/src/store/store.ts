import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { TAppState, TAppStore, TMessage, TRoomState, TSocketState } from "../common/types";


export const socketState: TSocketState = {
  connected: false
};

export const roomState: TRoomState = {
  title: "",
  messages: [],
  users: []
};


export const key: InjectionKey<Store<TAppState>> = Symbol();

export const store = createStore<TAppState>({
  state: {
    sockets: socketState,
    room: roomState,
    user: { id: "", username: "" }
  },
  getters: {
    isUserLogged: (state) => (id: string): boolean => {
      return state.user.id === id;
    },
    getMessages(state): TMessage[] {
      return state.room.messages;
    },
    getUsername: (state): string => {
      return state.user.username;
    }
  },
  mutations: {
    connect(state) {
      state.sockets.connected = true;
    },
    login(state, user) {
      console.log("here login in mutations!");
      state.user = user;
      state.room.users.push(user);
    },
    addMessage(state, message) {
      state.room.messages = [...state.room.messages, message];
    }
  }
});

