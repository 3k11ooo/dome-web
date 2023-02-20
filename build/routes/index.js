"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const TestService_1 = require("../services/TestService");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// ルーティングする
const router = express_1.default.Router();
// routerにルーティングの動作を記述する
// GET localhost:3000/api/helloWorld
router.get('/helloWorld', (req, res) => {
    res.status(200).json({ message: 'Hello, world' });
});
// GET localhost:3000/api/test
router.get('/test', (req, res, next) => {
    const service = new TestService_1.TestService();
    service
        .test()
        .then(result => res.status(200).json(result))
        .catch(next);
});
// POST localhost:3000/api/test
router.post('/test', (req, res, next) => {
    console.log(req.body);
    const service = new TestService_1.TestService();
    if (req.body.quiz) {
        switch (req.body.quiz) {
            case true:
                service
                    .defaultQuiz(true)
                    .then(() => res.status(200).send('初期化しました。クイズ開始です！'))
                    .catch(next);
                break;
            case false:
                service
                    .defaultQuiz(false)
                    .then(() => res.status(200).send('初期化しました。クイズ終了です！'))
                    .catch(next);
                break;
        }
    }
    else {
        const ansNum = req.body.answer;
        const service = new TestService_1.TestService();
        service
            .pTest(ansNum)
            .then(result => res.status(200).json(result))
            .catch(next);
    }
});
// DELETE localhost:3000/api/test
router.delete('/test', (req, res, next) => {
    const service = new TestService_1.TestService();
    service
        .defaultQuiz(false)
        .then(result => res.status(200).json(result))
        .catch(next);
});
// いずれのルーティングにもマッチしない
app.use((req, res) => {
    res.status(404);
    res.render('error', {
        param: {
            status: 404,
            message: 'not found'
        },
    });
});
//routerをモジュールとして扱う準備
module.exports = router;
