import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../shared/models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Test } from '../shared/models/test';
import { Storage } from '@ionic/storage';

import { firestore } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user: Observable<User> = new Observable<User>();

  testsSource: BehaviorSubject<Test[]> = new BehaviorSubject(null);
  tests$: Observable<Test[]> = this.testsSource.asObservable();

  constructor(
    private afFirestore: AngularFirestore,
    private storage: Storage
  ) {
    this.usersCollection = afFirestore.collection<User>("users");
    this.users = this.usersCollection.valueChanges();
  }

  createUser(id: string, user: User) {
    return this.usersCollection.doc(id).set(user);
  }

  async getUser(userID: string) {
    console.log(userID)
    this.user = this.usersCollection.doc<User>(userID).valueChanges();
  }

  async addFinishedTest(test: Test) {
    return this.usersCollection.doc(await this.storage.get("userID"))
      .update({ finishedTests: firestore.FieldValue.arrayUnion(Object.assign({}, test)) })
  }

  changeTests(tests: Test[]) {
    this.testsSource.next(tests);
  }

  async resetTests() {
    return this.usersCollection.doc(await this.storage.get("userID"))
      .update({ finishedTests: [] })
  }
}
