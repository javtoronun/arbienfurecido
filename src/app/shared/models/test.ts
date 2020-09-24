import { Question } from './question';
import { QuestionsSection } from './questions-section';

export class Test {

  correctQuestions: Question[];
  failedQuestions: {
    question: Question,
    selectedAnswer: number
  }[];
  answeredQuestions: Question[];
  totalQuestions: number;
  section: string;

  constructor(testQuestions: QuestionsSection) {
    this.correctQuestions = [];
    this.failedQuestions = [];
    this.answeredQuestions = [];
    this.totalQuestions = testQuestions.questions.length;
    this.section = testQuestions.section;
  }

}
