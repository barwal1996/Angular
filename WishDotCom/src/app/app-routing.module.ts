import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdServiceCanActivate} from './Service/auth-gaurd.service';



const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:"register",component:RegistrationComponent,canActivate:[AuthGaurdServiceCanActivate]},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent,canActivate:[AuthGaurdServiceCanActivate]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
