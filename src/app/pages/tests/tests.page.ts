import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/shared/models/question';
import { QuestionsSection } from 'src/app/shared/models/questions-section';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  questions: QuestionsSection[] = [];

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(async res => {
      res.docs.forEach(questionDoc => {
        this.questions.push(<QuestionsSection> questionDoc.data());
      });

    })
  }

  goToTest(questionsUnit: QuestionsSection) {
    this.questionsService.changeTestQuestions(questionsUnit);
    this.router.navigate(["/test"]);
  }

}
