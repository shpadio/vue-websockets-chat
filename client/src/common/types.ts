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
    isUserLogged: (id: string) => boolean;
  },
  mutations: {
    connect: () => void;
    login: (user: TUser) => void;
    addMessage: (message: TMessage) => void;
  },
}