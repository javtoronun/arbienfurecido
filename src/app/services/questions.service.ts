import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { QuestionsSection } from '../shared/models/questions-section';
import { Question } from '../shared/models/question';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questionsCollection: AngularFirestoreCollection<QuestionsSection>;
  questionsSections: Observable<QuestionsSection[]>;
  testQuestionsSource: BehaviorSubject<QuestionsSection> = new BehaviorSubject(null)
  testQuestions$: Observable<QuestionsSection> = this.testQuestionsSource.asObservable();

  constructor(
    private afFirestore: AngularFirestore
  ) {
    this.questionsCollection = afFirestore.collection<QuestionsSection>("questions");
    this.questionsSections = this.questionsCollection.valueChanges();
  }

  addQuestionToSection(newQuestion: Question, section: number) {
    let docID = section < 10 ? "000" + section : "00" + section;

    return this.questionsCollection.doc(docID).update({
      questions: firebase.firestore.FieldValue.arrayUnion(newQuestion)
    });
  }

  getQuestions() {
    return this.questionsCollection.get();
  }

  changeTestQuestions(questionsUnit: QuestionsSection) {
    this.testQuestionsSource.next(questionsUnit);
  }

}
