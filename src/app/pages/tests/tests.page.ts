import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/shared/models/question';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  questions: Question[] = [];

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(async res => {
      res.docs.forEach(questionDoc => {
        this.questions.push(<Question> questionDoc.data());
      });

    })
  }

  goToTest(questionUnit: Question) {
    this.questionsService.changeTestQuestions(questionUnit);
    this.router.navigate(["/test"]);
  }

}
