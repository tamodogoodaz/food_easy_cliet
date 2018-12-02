import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './comp/location/location.component';

import { FormsModule } from "@angular/forms";
import { LoginComponent } from './comp/login/login.component';
import { RankComponent } from './components/rank/rank.component';
import { CoreComponent } from './components/core/core.component'
import { ChartModule } from 'angular-highcharts';
import { AdminComponent } from './components/admin/admin.component';
import { AddComponent } from './components/admin/add/add.component';
import { DelteComponent } from './components/admin/delte/delte.component';
import { EditComponent } from './components/admin/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LoginComponent,
    RankComponent,
    CoreComponent,
    AdminComponent,
    AddComponent,
    DelteComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
