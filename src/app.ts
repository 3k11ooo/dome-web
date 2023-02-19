import express from 'express';
import cors from 'cors';
import websocket from 'ws';

const app: express.Express = express();
const wss = new websocket.Server({ port: 8000 });

// cors
app.use(cors());

// サーバの強化追加
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

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
const router: express.Router = require('./routes/');
app.use('/api/', router)


// 3000番ポートでAPIサーバ起動
app.listen(3000,()=>{
    console.log('ポート3000番で起動しました。 >> http://localhost:3000')
})

