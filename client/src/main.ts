import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueSocketIO from "vue-socket.io";


// const socketIO: VueSocketIO<any> = new VueSocketIO({
//     debug: true,
//     connection: 'http://localhost:8090',
//     vuex: {
//         // store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     // options: {}
// })




createApp(App)
    // .use(socketIO)
    .mount('#app')
