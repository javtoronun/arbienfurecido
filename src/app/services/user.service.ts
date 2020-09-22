import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user: Observable<User> = new Observable<User>();


  constructor(
    private afFirestore: AngularFirestore
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
}
