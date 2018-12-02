import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    username: "" , 
    password : ""
  }
  constructor(private _login: LoginService) { }

  ngOnInit() {
  }
  loginSubmit() {
    // console.log(this.login)
    this._login.loginUser(this.login).subscribe(data => console.log(data))
  }

}
