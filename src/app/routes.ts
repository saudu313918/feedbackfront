import { RouterModule, Routes } from '@angular/router';
import { DisplayinfoComponent } from './faculty/basic_forms/displayinfo/displayinfo.component';
import { InfoComponent } from './faculty/basic_forms/info/info.component';
import { A11Component } from './faculty/part_a/a11/a11.component';
import { A12Component } from './faculty/part_a/a12/a12.component';
import { A13Component } from './faculty/part_a/a13/a13.component';
import { A14Component } from './faculty/part_a/a14/a14.component';
import { A15Component } from './faculty/part_a/a15/a15.component';
import { A16Component } from './faculty/part_a/a16/a16.component';
import { A17Component } from './faculty/part_a/a17/a17.component';
import { B11Component } from './faculty/part_a/b11/b11.component';
import { B12Component } from './faculty/part_a/b12/b12.component';
import { B13Component } from './faculty/part_a/b13/b13.component';
import { B14Component } from './faculty/part_a/b14/b14.component';
import { B15Component } from './faculty/part_a/b15/b15.component';
import { B16Component } from './faculty/part_a/b16/b16.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from "./sidebar/sidebar/sidebar.component";
import { AuthGuard } from "./_helpers/auth.guard";
export const appRoutes: Routes = [
  { path: '', component: SidebarComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'front',component: FrontpageComponent},
  { path: 'home', component: SidebarComponent},
  { path:'login', component:LoginComponent },
  { path:'user/info', component: InfoComponent},
  { path:'user/info/dislpay', component: DisplayinfoComponent},
  { path:'user/info/part/a/1', component: A11Component},
  { path:'user/info/part/a/2', component: A12Component},
  { path:'user/info/part/a/3', component: A13Component},
  { path:'user/info/part/a/4', component: A14Component},
  { path:'user/info/part/a/5', component: A15Component},
  { path:'user/info/part/a/6', component: A16Component},
  { path:'user/info/part/a/7', component: A17Component},

  // PART A.B
  { path:'user/info/part/b/1', component: B11Component},
  { path:'user/info/part/b/2', component: B12Component},
  { path:'user/info/part/b/3', component: B13Component},
  { path:'user/info/part/b/4', component: B14Component},
  { path:'user/info/part/b/5', component: B15Component},
  { path:'user/info/part/b/6', component: B16Component},








];
