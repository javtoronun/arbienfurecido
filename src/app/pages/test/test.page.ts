import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/shared/models/question';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  testQuestions: Question;

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {
    this.questionsService.testQuestions$.subscribe(testQuestions => {
      this.testQuestions = testQuestions;
      console.log(this.testQuestions)
    });
  }

}
