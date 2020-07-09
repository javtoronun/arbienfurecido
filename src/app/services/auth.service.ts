import { Credentials } from './../shared/models/credentials';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;
  private authState = new BehaviorSubject(null);

  constructor(
    public afAuth: AngularFireAuth
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
    return await this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  async signOut(){
    // Remove token key
    // User state to null
    // Redirect to login

  }
}
