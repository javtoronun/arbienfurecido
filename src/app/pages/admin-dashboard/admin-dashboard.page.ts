import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { QuestionsSection } from 'src/app/shared/models/questions-section';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from 'src/app/shared/models/question';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  questionsSections: QuestionsSection[];

  questionForm = new FormGroup({
    section: new FormControl('', Validators.required),
    question: new FormControl('', Validators.required),
    answers: new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
      new FormControl('', Validators.required)
    ]),
    correctAnswer: new FormControl('', Validators.required),
  });

  constructor(
    private menuCtrl: MenuController,
    private questionsService: QuestionsService,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    // Disable side menu
    this.menuCtrl.enable(false);
    this.questionsService.questionsSections.subscribe(questionsSections => {
      console.log(questionsSections)
      this.questionsSections = questionsSections;
    })
  }

  async addQuestion() {
    console.log(this.questionForm)
    let newQuestion: Question = {
      question: this.questionForm.value.question,
      answers: this.questionForm.value.answers,
      correctAnswer: this.questionForm.value.correctAnswer
    };

    try {
      await this.questionsService.addQuestionToSection(newQuestion, this.questionForm.value.section);

      this.presentToast("La pregunta se ha añadido correctamente");
    } catch(err) {
      console.log(err)
      this.presentToast("Ha ocurrido un error, vuelve a intentarlo");
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


}
