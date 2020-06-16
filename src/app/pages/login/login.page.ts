import { Credentials } from './../../shared/models/credentials';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MenuController, ToastController, NavController } from '@ionic/angular';

import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public menuCtrl: MenuController,
    public afAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    private authService: AuthService) { }

  ngOnInit() {
    // Disable side menu
    this.menuCtrl.enable(false);
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async login() {
    console.log(this.loginForm.value);
    try{
      let credentials:Credentials = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
        cpassword: ''
      }
      const res = await this.authService.login(credentials);
      // Redirect 
      this.navCtrl.navigateForward('/profile');
    }catch(error){
      if(error.code === 'auth/invalid-email') {
        this.presentToast('Formato de correo electrónico invalido');
      }else {
        this.presentToast('Correo electrónico o contraseña inválidos');
      }
      console.error(error);
    }
  }

}
