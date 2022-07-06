import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UpdateComponent } from './component/update/update.component';
import { ViewComponent } from './component/view/view.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'navbar',component:NavbarComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'form',component:FormComponent},
    {path:'viewlist',component:ViewComponent},
    {path:'update',component:UpdateComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
