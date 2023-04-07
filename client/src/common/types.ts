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
