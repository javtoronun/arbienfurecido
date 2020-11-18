import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Storage } from "@ionic/storage";
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';
import { SuggestionsService } from 'src/app/services/suggestions.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { SuggestionChat } from 'src/app/shared/models/suggestion-chat';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  suggestionChat: SuggestionChat;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storage: Storage,
    private alertController: AlertController,
    private toastController: ToastController,
    private suggestionsService: SuggestionsService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    try {
      const userID = await this.storage.get("userID");

      const suggestionChatRef = await this.suggestionsService.getSuggestionChat(userID);

      this.suggestionChat = new SuggestionChat(suggestionChatRef.docs[0]?.data(), userID);

      console.log(this.suggestionChat)

      if (!suggestionChatRef.docs[0])
        await this.suggestionsService.addSuggestionChat(this.suggestionChat, userID);

      await this.userService.getUser(userID);

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

  async openSuggestionsChat() {
    const modal = await this.modalController.create({
      component: ChatComponent,
      componentProps: {
        "suggestionChat": this.suggestionChat
      }
    });

    await modal.present();
  }

}
