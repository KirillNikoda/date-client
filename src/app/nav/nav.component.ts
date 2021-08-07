import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {
    username: '',
    password: ''
  };

  constructor(public accountService: AccountService) {}

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  logout() {
    this.accountService.logout();
  }
}
