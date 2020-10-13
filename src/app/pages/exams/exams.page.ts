import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsSection } from 'src/app/shared/models/questions-section';
import { QuestionsService } from 'src/app/services/questions.service';
import { Exam } from 'src/app/shared/models/exam';
import { Question } from 'src/app/shared/models/question';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {

  questionsSections: QuestionsSection[] = [];

  exam: Exam = new Exam();

  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(async res => {
      res.docs.forEach(questionDoc => {
        this.questionsSections.push(<QuestionsSection> questionDoc.data());
      });

    })
  }

  goToTest(questionsUnit?: QuestionsSection) {
    this.exam.randQuestions = [];
    this.exam.questionsSections.forEach(questionsSection => {
      let questions = [];
      questionsSection.questions.forEach(question => {
        questions.push(question);
      });
      questions = shuffle(questions);
        this.exam.randQuestions = this.exam.randQuestions.concat(questions);
    })
    this.exam.randQuestions = (shuffle(this.exam.randQuestions)).slice(0, this.exam.numQuestions);
    this.questionsService.changeTestQuestions({ section: "Examen", questions: this.exam.randQuestions });
    this.router.navigate(["/test"]);
  }

  onSelectChanged() {
    console.log("todas")
    if (this.exam.questionsSections.includes(null))
      this.exam.questionsSections = this.questionsSections;
  }

}

function shuffle(arra1): Question[] {
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
