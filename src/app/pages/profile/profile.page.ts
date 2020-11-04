import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Storage } from "@ionic/storage";
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';
import { SuggestionsService } from 'src/app/services/suggestions.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storage: Storage,
    private alertController: AlertController,
    private toastController: ToastController,
    private suggestionsService: SuggestionsService,
  ) { }

  async ngOnInit() {
    try {

      await this.userService.getUser(await this.storage.get("userID"));

      this.userService.user.subscribe(async user => {
        this.user = user;
        await this.storage.set("username", user.username);
        console.log(this.user)
        if (this.user) {
          this.userService.changeTests(this.user.finishedTests);
          await this.storage.set("isAdmin", user.admin);
        }
      });

    } catch(err) {
      console.log(err)
    }


  }

  async sendSuggestion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enviar sugerencia',
      message: '¿Hay alguna pregunta incorrecta? ¿Tienes alguna sugerencia para la aplicación? ¡Agradecemos la colaboración!',
      inputs: [
        {
          name: 'suggestion',
          type: 'text',
          placeholder: 'Escribe aquí la sugerencia'
        },
      ],
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Enviar',
          handler: async (data) => {
            console.log('Confirm Okay');
            if (data.suggestion) {
              await this.suggestionsService.addSuggestion(data.suggestion);
              const toast = await this.toastController.create({
                message: '¡Gracias por tu sugerencia! La revisaremos en breve compañero',
                duration: 2000
              });
              toast.present();
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
