import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './comp/location/location.component';
import { LoginComponent } from './comp/login/login.component';
import { RankComponent } from './components/rank/rank.component';
import { CoreComponent } from './components/core/core.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddComponent } from './components/admin/add/add.component';
import { DelteComponent } from './components/admin/delte/delte.component';
import { EditComponent } from './components/admin/edit/edit.component';

const routes: Routes = [
  {
    path : "core" ,
    component : CoreComponent , 
   children : [{
    path : "location",
    component : LocationComponent
  },{
    path: "login",
    component : LoginComponent
  } , {
    path : "rank",
    component: RankComponent
  }]
  },
  {
    path : "admin" ,
    component : AdminComponent,
    children : [{
      path : 'add' , 
      component : AddComponent
    },{
      path : 'list' ,
      component : DelteComponent
    } , {
      path : "edit" ,
      component : EditComponent
    }]
  }
   , {
  path : "**" ,
  redirectTo : "/core/location"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
