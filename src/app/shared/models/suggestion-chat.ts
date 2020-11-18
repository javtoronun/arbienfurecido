import { v4 as uuidv4 } from 'uuid';

export class SuggestionChat {

  _user: string;
  messages: {
    text: string,
    from: number, // 0 -> support, 1 -> user
    timestamp: any
  }[];

  constructor(data, userID) {
    this._user = userID;
    this.messages = data?.messages || [{
      text: '¿Hay alguna pregunta incorrecta? ¿Tienes alguna sugerencia para la aplicación? ¡Agradecemos la colaboración!',
      from: 0,
      timestamp: new Date()
    }];
  }
}
