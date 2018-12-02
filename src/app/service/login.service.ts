import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  host = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  loginUser(user) {
    return this.http.post(`${this.host}/api/login` , user)
  }
}
