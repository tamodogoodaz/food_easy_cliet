import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  adminDataName
  adminInput  = false
  constructor(private loginData : LoginService) { }

  ngOnInit() {
    const adminIs = this.loginData.checkAdmin()
    if(adminIs) {
      this.adminDataName = `Admin : ${this.loginData.getAdminData().name}`
      this.adminInput = true
    }else{
      this.adminDataName = ""
    }
  }

}
