import express from "express";
import * as http from "http";
import * as process from "process";
import { Server } from "socket.io";
import cors from "cors";
import loginRouter from "../src/routes/login";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/login", loginRouter);

const server = http.createServer(app);
const port = process.env.PORT || 8090;


export type TMessage = {
  username: string;
  time: number
  text: string
}


export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

io.on("connection", (socket) => {
  console.log(`${socket} is connected`);
  socket.on("message", (message: string) => {
    console.log(message, "mess");
    const payload: TMessage = { username: "Kto to", text: message, time: Date.now() };
    socket.broadcast.emit("message", payload);
  });
});

server.listen(port, () => {
  `Server is running on ${port}`;
});