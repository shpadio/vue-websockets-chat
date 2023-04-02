import {io, Socket} from 'socket.io-client'
import {reactive} from "vue";


const state = reactive({
    connected: false
})

const URL = 'localhost:8090'

export const socket: Socket = io(URL)

socket.on('connect', () => {
    state.connected = true
    console.log('connected on client!')

})
