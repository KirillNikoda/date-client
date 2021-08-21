import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  login() {
    this.accountService.login(this.model).subscribe(
      (_) => {
        this.router.navigateByUrl('/members');
        this.model.username = '';
        this.model.password = '';
      },
      ({ error }) => {
        console.log(error);
        this.toastr.error(error);
      }
    );
  }

  edit() {
    this.router.navigateByUrl('/member/edit');
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
