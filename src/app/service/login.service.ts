import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class LoginService {
  host = "http://localhost:3000"
  constructor(private http: HttpClient) {}
  loginUser(user): Observable<any> {
    return this.http.post(`${this.host}/api/login`, user)
  }
  setAdminData(user) {
    localStorage.setItem("admin", JSON.stringify(user))
  }
  checkAdmin() {
    return localStorage.getItem("admin")!!
  }
  getAdminData() {
    return this.checkAdmin
      ? JSON.parse(localStorage.getItem("admin"))
      : "Not login be admin."
  }
  logoutAdmin() {
    return localStorage.removeItem("admin")
  }
}
