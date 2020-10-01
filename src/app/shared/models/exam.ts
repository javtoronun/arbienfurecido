import { Question } from './question';
import { QuestionsSection } from './questions-section';

export class Exam {

  questionsSections: QuestionsSection[];
  numQuestions: number;
  randQuestions: Question[];

  constructor() {
    this.questionsSections = [];
    this.numQuestions = 20;
    this.randQuestions = [];
  }

}
