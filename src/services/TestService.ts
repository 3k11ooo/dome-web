//インターフェース
export interface ITest {
  quiz:boolean,
  answer1: number,
  answer2: number,
  answer3: number,
}

let quizAnswer: ITest = {
  quiz: false,
  answer1: 0,
  answer2: 0,
  answer3: 0,
}

//クラス
export class TestService {
  // quiz answerのカウントアップ
  public async pTest(num: number): Promise<ITest> {
    if(quizAnswer.quiz != false){
      switch(num){
        case 1:
          quizAnswer.answer1++;
          break;
        case 2:
          quizAnswer.answer2++;
          break;
        case 3:
          quizAnswer.answer3++;
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
    quizAnswer.answer1 = 0;
    quizAnswer.answer2 = 0;
    quizAnswer.answer3 = 0;
    return quizAnswer;
  }
  
  // quiz answerのデータ取得
  public async test(): Promise<ITest> {
    return quizAnswer;
  }
}