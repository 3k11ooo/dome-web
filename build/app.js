"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ws_1 = __importDefault(require("ws"));
const app = (0, express_1.default)();
const wss = new ws_1.default.Server({ port: 8000 });
// cors
app.use((0, cors_1.default)());
// サーバの強化追加
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// websocket 挫折挫折あー挫折
// wss.on('connection', (ws:any) => {
//     console.log('connect');
//     // ws.on('message',  (message: string) => {
//     //     console.log('received: %s', message);
//     //     ws.send('something');
//     // });
//     ws.on('message', (message: any) => {
//         console.log(message);
//     })
//     // ws.on("close", () => {
//     //     console.log("Closed.");
//     // });
//     ws.send('something');
// });
// ポート
const port = process.env.PORT || 3000;
// ルーティング 
const router = require('./routes/');
app.use('/api/', router);
// 3000番ポートでAPIサーバ起動
app.listen(3000, () => {
    console.log('ポート3000番で起動しました。 >> http://localhost:3000');
});
