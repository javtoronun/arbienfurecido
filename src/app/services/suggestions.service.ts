import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  private suggestionsCollection: AngularFirestoreCollection<any>;

  constructor(
    private afFirestore: AngularFirestore,
    private storage: Storage
  ) {
    this.suggestionsCollection = afFirestore.collection<any>("suggestions");
  }

  async getSuggestionChat(userID) {
    console.log(userID)
    return this.suggestionsCollection.ref.where("_user", "==", userID).get();
  }

  async addSuggestionChat(newSuggestionChat, userID) {
    return this.suggestionsCollection.doc(userID).set({...newSuggestionChat});
  }

  listenChat(chatID) {
    return this.suggestionsCollection.doc(chatID).valueChanges();
  }

  async addMessageToChat(chatID, newMessage) {
    return this.suggestionsCollection.doc(chatID).update({
      messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
    });
  }
}
