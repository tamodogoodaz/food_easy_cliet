import { Component, OnInit } from "@angular/core"
import { LoginService } from "../../service/login.service"
import { Router } from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login = {
    username: "",
    password: ""
  }
  wrongPassword: boolean = false
  constructor(private _login: LoginService, private _router: Router) {}

  ngOnInit() {}
  loginSubmit() {
    this._login.loginUser(this.login).subscribe(data => {
      if (data.length) {
        this.wrongPassword = false

        this._login.setAdminData(data[0])
        this._router.navigate(["/admin/list"])
        this.wrongPassword = false
      }
      this.wrongPassword = true
    })
  }
}
