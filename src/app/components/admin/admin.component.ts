import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminDataF
  constructor(private adminData: LoginService , private _router : Router) { }

  ngOnInit() {
    this.adminDataF=  this.adminData.getAdminData()
    // console.log( this.adminDataF)
  }
  logoutA() {
    this.adminData.logoutAdmin()
    this._router.navigate(['/core/login'])
  }
}
