import express, { Router } from 'express'

var router: Router = express.Router();

router.get('/', function(req, res) {
    res.send({ text:"こんにちは！" });
});

export default router;