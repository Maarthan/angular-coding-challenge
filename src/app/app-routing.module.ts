import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path:'adduser',component:AddUserComponent },
  { path:'home',component:HomePageComponent },
  { path:'update',component:UpdateUserComponent },
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'**',component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
