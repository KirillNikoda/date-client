import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ILogin} from "../interfaces/ILogin";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/account/';

  constructor(private http: HttpClient) {}

  login(model: ILogin) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
