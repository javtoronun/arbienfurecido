import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Storage } from "@ionic/storage";
import { AuthService } from 'src/app/services/auth.service';

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
    private storage: Storage
  ) { }

  async ngOnInit() {
    try {

      await this.userService.getUser(await this.storage.get("userID"));

      this.userService.user.subscribe(async user => {
        this.user = user;
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

}
