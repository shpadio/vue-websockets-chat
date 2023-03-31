import express from 'express';
import * as http from "http";
import * as process from "process";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8090;

server.listen(port, () => `Server is running on ${port}`)
