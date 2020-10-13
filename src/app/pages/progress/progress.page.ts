import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Test } from 'src/app/shared/models/test';
import { QuestionsSection } from 'src/app/shared/models/questions-section';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  questionsSections: QuestionsSection[] = [];
  tests: Test[];

  constructor(
    private userService: UserService,
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(async res => {
      res.docs.forEach(questionDoc => {
        this.questionsSections.push(<QuestionsSection> questionDoc.data());
      });
    });
    this.userService.tests$.subscribe(tests => {
      this.tests = tests;
      console.log(this.tests)
    });
  }

  getSectionSuccess(section: string) {
    let success = 0;
    let answered = 0;

    this.tests.forEach(test => {
      if (test.section == section) {
        success += test.correctQuestions.length;
        answered += test.answeredQuestions.length;
      }
    });

    if (answered != 0)
      return (success/answered * 100).toFixed(1) + "%";
    else
     return "0%";
  }

  getSuccessRateColor(section: string) {
    let success = 0;
    let answered = 0;

    this.tests.forEach(test => {
      if (test.section == section) {
        success += test.correctQuestions.length;
        answered += test.answeredQuestions.length;
      }
    })

    let color = "grey";

    if (answered > 0) {
      let successRate = success/answered

      if (successRate < 0.5)
        color = "red";
      else if (successRate < 0.9)
        color = "yellow";
      else
        color = "green";
    }

    return color;
  }

}
