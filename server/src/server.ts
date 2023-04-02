import express from 'express';
import * as http from "http";
import * as process from "process";
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8090;

export const io = new Server(server,{

})

io.on('connection', (socket) => {
    console.log(`${socket} is connected`)
})

server.listen(port, () => `Server is running on ${port}`)
