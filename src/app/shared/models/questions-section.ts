import { Question } from './question';

export interface QuestionsSection {

  _id: string;
  section: string;
  questions: Question[];

}
