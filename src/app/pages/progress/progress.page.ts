import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Test } from 'src/app/shared/models/test';
import { QuestionsSection } from 'src/app/shared/models/questions-section';
import { QuestionsService } from 'src/app/services/questions.service';

import { AlertController } from '@ionic/angular';

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
    private questionsService: QuestionsService,
    private alertController: AlertController
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

  async resetProgress() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reiniciar progreso',
      message: '¿Estás seguro de querer reiniciar las estadísticas de tú progreso? Todas pasarán a 0%',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: async () => {
            console.log('Confirm Okay');
            await this.userService.resetTests();
          }
        }
      ] 
    });

    await alert.present();
  }

}
