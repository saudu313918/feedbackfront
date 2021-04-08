import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from "./sidebar/sidebar/sidebar.component";
import { AuthGuard } from "./_helpers/auth.guard";
export const appRoutes: Routes = [
  { path: '', component: SidebarComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'front',component: FrontpageComponent},
  { path: 'home', component: SidebarComponent},
  { path:'login', component:LoginComponent }
  
  
];
