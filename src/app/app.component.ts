import { Component, OnInit } from '@angular/core';
import { User } from './_models/user.interface';
import { AccountService } from './_services/account.service';

interface IUser {
  id: number;
  userName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  public title: string = 'my app';
  public users: IUser[] = [];

  ngOnInit() {
    this.setCurrentUser()
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') as string);
    this.accountService.setCurrentUser(user);
  }
}
