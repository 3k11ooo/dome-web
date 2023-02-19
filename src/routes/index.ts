import express from 'express';
import cors from 'cors';
import { TestService } from '../services/TestService';

const app: express.Express = express();

app.use(cors());


// ルーティングする
const router: express.Router = express.Router();

// routerにルーティングの動作を記述する

// GET localhost:3000/api/helloWorld
router.get('/helloWorld', (req, res) => {
    res.status(200).json({ message: 'Hello, world' });
});

// GET localhost:3000/api/test
router.get('/test', (req, res, next) => {
  const service = new TestService();
  service
  .test()
  .then(result => res.status(200).json(result))
  .catch(next);
});

// POST localhost:3000/api/test
router.post('/test', (req:express.Request, res:express.Response, next) => {
  console.log(req.body);
  const service = new TestService();
  if(req.body.quiz){
    switch(req.body.quiz){
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
  else{
    const ansNum = req.body.answer;
    const service = new TestService();
    service
    .pTest(ansNum)
    .then(result => res.status(200).json(result))
    .catch(next);
  }
});

// DELETE localhost:3000/api/test
router.delete('/test', (req:express.Request, res:express.Response, next) => {
  const service = new TestService();
  service
  .defaultQuiz(false)
  .then(result => res.status(200).json(result))
  .catch(next);
})

// -------------------------------------------------
//  以下、何のルーティングにもマッチしないorエラー
// -------------------------------------------------

// いずれのルーティングにもマッチしない(==NOT FOUND)
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