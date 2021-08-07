import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component } from '@angular/core';

interface IUser {
  id: number;
  userName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  constructor(private readonly http: HttpClient) {}

  public title: string = 'my app';
  public users: IUser[] = [];

  public ngAfterContentInit() {
    this.http.get('https://localhost:5001/api/users').subscribe(
      (data: any) => (this.users = data),
      (error) => console.log(error)
    );
  }
}
