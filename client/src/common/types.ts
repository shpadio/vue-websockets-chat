export type TMessage = {
  username: string;
  time: number
  text: string
}

export type TUser = {
  id: string;
  username: string;
}

export type TRoomState = {
  title: string;
  messages: TMessage[]
  users: TUser[]
}

export type TSocketState = {
  connected: boolean;
}

export type TAppState = {
  sockets: TSocketState,
  room: TRoomState,
  user: TUser,

}

export type TAppStore = {
  state: TAppState,
  getters: {
    isUserLogged: (state: TAppState, id: string) => boolean;
  },
  mutations: {
    connect: (state: TAppState) => void;
    login: (state: TAppState, user: TUser) => void;
    addMessage: (state: TAppState, message: TMessage) => void;
  },
}