import { Credentials } from './../../shared/models/credentials';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, NavController } from '@ionic/angular';

import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cpassword: new FormControl('', Validators.required),
  });

  constructor(public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    private authService: AuthService,
    private userService: UserService
  ) { }

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

  async signUp() {
    try{

      let credentials:Credentials = {
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value,
        cpassword: this.registerForm.get('cpassword').value
      }
      let user: User = {
        email: credentials.email,
        admin: false,
        username: this.registerForm.get("username").value,
        finishedTests: []
      }

      if(credentials.password !== credentials.cpassword) {
        this.presentToast('Las contraseñas no coinciden');
      } else {
        // Save it
        const res = await this.authService.signUp(credentials);
        await this.userService.createUser(res.user.uid, user);
        this.navCtrl.navigateForward('/login'); // Redirect
        console.log(res);
      }
    }catch(error) {
      if(error.code === 'auth/invalid-email') {
        this.presentToast('Formato de correo electrónico inválido');
      } else if(error.code === 'auth/weak-password') {
        this.presentToast('La contraseña debe contener al menos 6 carácteres');
      } else {
        this.presentToast('Se ha producido un error al registrarse');
      }
      console.error(error);
    }
  }

}
