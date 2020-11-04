import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

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

  async addSuggestion(newSuggestion) {
    return this.suggestionsCollection.add({ _user: await this.storage.get("userID"), suggestion: newSuggestion });
  }
}
