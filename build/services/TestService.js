"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
let quizAnswer = {
    quiz: false,
    answer1: 0,
    answer2: 0,
    answer3: 0,
};
//クラス
class TestService {
    // quiz answerのカウントアップ
    pTest(num) {
        return __awaiter(this, void 0, void 0, function* () {
            if (quizAnswer.quiz != false) {
                switch (num) {
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
        });
    }
    //  quiz初期化
    defaultQuiz(quiz) {
        return __awaiter(this, void 0, void 0, function* () {
            quizAnswer.quiz = quiz;
            quizAnswer.answer1 = 0;
            quizAnswer.answer2 = 0;
            quizAnswer.answer3 = 0;
            return quizAnswer;
        });
    }
    // quiz answerのデータ取得
    test() {
        return __awaiter(this, void 0, void 0, function* () {
            return quizAnswer;
        });
    }
}
exports.TestService = TestService;
