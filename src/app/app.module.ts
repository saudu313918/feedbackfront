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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FrontpageComponent,
    LoginComponent,
    
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
