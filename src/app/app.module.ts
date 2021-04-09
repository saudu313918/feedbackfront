import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { NavbarComponent } from './sidebar/navbar/navbar.component';
import { appRoutes } from './routes';
import { RouterModule } from "@angular/router";
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { fakeBackendProvider } from "./_helpers/fake-backend";
import { JwtInterceptor } from './../app/_helpers/jwt.interceptor';
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { InfoComponent } from './faculty/basic_forms/info/info.component';
import { DisplayinfoComponent } from './faculty/basic_forms/displayinfo/displayinfo.component';
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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FrontpageComponent,
    LoginComponent,
    InfoComponent,
    DisplayinfoComponent,
    A11Component,
    A12Component,
    A13Component,
    A14Component,
    A15Component,
    A16Component,
    A17Component,
    B11Component,
    B12Component,
    B13Component,
    B14Component,
    B15Component,
    B16Component,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
