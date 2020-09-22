import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/shared/models/question';
import { QuestionsSection } from 'src/app/shared/models/questions-section';
import { Test } from 'src/app/shared/models/test';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  test: Test;
  testQuestions: QuestionsSection;
  currentQuestion = null;
  currentIndex = 0;
  selectedAnswer: number;

  showError: boolean = false;
  showCorrect: boolean = false;


  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.questionsService.testQuestions$.subscribe(testQuestions => {
      this.testQuestions = testQuestions;
      this.currentQuestion = this.testQuestions.questions[0];
      this.currentIndex = 0;
      this.test = new Test(this.testQuestions);
    });
  }

  onAnswerSelected(selected: number) {
    if (!this.test.answeredQuestions.includes(this.currentQuestion)) {
      this.selectedAnswer = selected;
      if (selected != this.currentQuestion.correctAnswer) {
        this.showError = true;
        this.test.failedQuestions.push({
          question: this.currentQuestion,
          selectedAnswer: this.selectedAnswer
        });
      } else
        this.test.correctQuestions.push(this.currentQuestion);

      this.showCorrect = true;
      this.test.answeredQuestions.push(this.currentQuestion);
    }
  }

  onQuestionSelected(question: Question, selected: number) {
    if (this.test.answeredQuestions.includes(question)) {
      if (this.test.correctQuestions.includes(question))
        this.showError = false
      else {
        this.showError = true;
        this.selectedAnswer = this.test.failedQuestions
          .find(failedQuestion => failedQuestion.question == question)
          .selectedAnswer;
      }

      this.showCorrect = true;
    } else {
      this.showCorrect = false;
      this.showError = false;
      this.selectedAnswer = null;
    }
    this.currentQuestion = question;
    this.currentIndex = selected;
  }

  onQuestionChanged(changeValue: number) {
    this.currentIndex += changeValue;
    this.currentQuestion = this.testQuestions.questions[this.currentIndex];

    this.onQuestionSelected(this.currentQuestion, this.currentIndex);
  }

  isCorrectQuestion(question) {
    return this.test.correctQuestions.includes(question);
  }

  isFailedQuestion(question) {
    return this.test.failedQuestions.find(failedQuestion => failedQuestion.question == question);
  }

  finishTest() {
    this.router.navigate(["/profile"])
  }

}
