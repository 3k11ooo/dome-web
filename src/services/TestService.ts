//インターフェース
export interface ITest {
  quiz:boolean,
  ans_red: number,
  ans_blue: number,
  ans_green: number,
}

let quizAnswer: ITest = {
  quiz: false,
  ans_red: 0,
  ans_blue: 0,
  ans_green: 0,
}


//クラス
export class TestService {
  // quiz answerのカウントアップ
  public async pTest(num: number): Promise<ITest> {
    if(quizAnswer.quiz != false){
      switch(num){
        case 1:
          quizAnswer.ans_red++;
          break;
        case 2:
          quizAnswer.ans_blue++;
          break;
        case 3:
          quizAnswer.ans_green++;
          break;
        default:
          break;
      }
    }
    return quizAnswer;
  }

  //  quiz初期化
  public async defaultQuiz(quiz: boolean): Promise<ITest> {
    quizAnswer.quiz = quiz;
    quizAnswer.ans_red = 0;
    quizAnswer.ans_blue = 0;
    quizAnswer.ans_green = 0;
    return quizAnswer;
  }
  
  // quiz answerのデータ取得
  public async test(): Promise<ITest> {
    return quizAnswer;
  }
}