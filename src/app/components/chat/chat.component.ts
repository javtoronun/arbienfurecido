import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuggestionChat } from 'src/app/shared/models/suggestion-chat';
import { SuggestionsService } from 'src/app/services/suggestions.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  @Input() suggestionChat: SuggestionChat;

  suggestionText: string;

  constructor(
    private modalController: ModalController,
    private suggestionsService: SuggestionsService
  ) { }

  ngOnInit() {
    console.log(this.suggestionChat)
    this.suggestionsService.listenChat(this.suggestionChat._user).subscribe((chat: SuggestionChat) => {
      this.suggestionChat.messages = chat.messages;
    });
  }

  async onSendSuggestion() {
    if (this.suggestionText) {
      const newMessage = {
        text: this.suggestionText,
        from: 1,
        timestamp: new Date()
      }
      this.suggestionText = undefined;
      await this.suggestionsService.addMessageToChat(this.suggestionChat._user, newMessage);
    }
  }

  async closeChat() {
    await this.modalController.dismiss();
  }

}
