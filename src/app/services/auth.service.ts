import { Credentials } from './../shared/models/credentials';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  private authState = new BehaviorSubject(null);

  constructor(
    public afAuth: AngularFireAuth,
    private storage: Storage
    ) {
      this.user = this.authState.asObservable();
    }

  /**
   * Register user in the application
   * @param credentials: credential object
   */
  async signUp(credentials: Credentials) {
    return await this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }
  /**
   * Login user in the application
   * @param credentials: credential object
   */
  async login(credentials: Credentials) {
    const res = await this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
    await this.storage.set("userID", res.user.uid);

    return res;
  }

  async signOut(){
    // Remove token key
    // User state to null
    this.storage.remove("userID");
    // Redirect to login
  }

  async isLoggedIn() {
    return (undefined != await this.storage.get("userID"));
  }
}
