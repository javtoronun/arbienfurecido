import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/shared/models/question';
import { QuestionsSection } from 'src/app/shared/models/questions-section';
import { Test } from 'src/app/shared/models/test';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { Storage } from "@ionic/storage";

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
  showQuestions: boolean = false;

  isAdmin: boolean;
  questionEditable: boolean = false;

  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;

  finishedTest: boolean = false;

  constructor(
    private userService: UserService,
    private questionsService: QuestionsService,
    private router: Router,
    private storage: Storage
  ) { }

  async ngOnInit() {

    this.isAdmin = await this.storage.get("isAdmin");

    this.questionsService.testQuestions$.subscribe(testQuestions => {
      this.testQuestions = testQuestions;
      this.currentQuestion = this.testQuestions.questions[0];
      this.currentIndex = 0;
      testQuestions.questions.forEach(question => {
        let correctAnswer = question.answers[question.correctAnswer];
        let shuffledAnswers = shuffle(question.answers);
        question.correctAnswer = shuffledAnswers.indexOf(correctAnswer);
        question.answers = shuffledAnswers;
      });
      this.answerA = this.currentQuestion.answers[0];
      this.answerB = this.currentQuestion.answers[1];
      this.answerC = this.currentQuestion.answers[2];
      this.answerD = this.currentQuestion.answers[3];
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
    this.answerA = question.answers[0];
    this.answerB = question.answers[1];
    this.answerC = question.answers[2];
    this.answerD = question.answers[3];
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

  async finishTest() {
    const res = await this.userService.addFinishedTest(this.test);
    console.log(res)
    this.finishedTest = true;
  }

  async goToProfilePage() {
    this.router.navigate(["/profile"])    
  }

  async onCorrectAnswerChange(i) {
    this.currentQuestion.correctAnswer = i;
    await this.questionsService.updateQuestion(this.testQuestions);
  }

  async onAnswerChange(i, newAnswer) {
    this.currentQuestion.answers[i] = newAnswer;
    await this.questionsService.updateQuestion(this.testQuestions);
  }

  async onSaveQuestionChange() {
    await this.questionsService.updateQuestion(this.testQuestions);
  }

}

function shuffle(arra1): any[] {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
