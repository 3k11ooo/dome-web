# dome-web
Expressで簡単なAPIを作ってみた

## バージョンを適当に羅列
npm: '8. 11. 0'

node: '16. 15. 1'

Express: '4. 18. 2'

## ポート

3000

## 主なAPIのエンドポイントと説明

#### GET

/api/test

オブジェクトを返します。
quizAnswer: ITest = {
  quiz: false,
  answer1: 0,
  answer2: 0,
  answer3: 0,
}

#### POST

/api/test

オブジェクトの数値を増やせます。

#### DELETE

/api/test

初期化です。

## 起動方法

npm run watch:src
