import { Component } from '@angular/core';
import { AuthserviceService } from './service/authservice.service';
import { Router } from '@angular/router';
import { User } from "./models/users";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sportology';
  constructor(){
    
  }
}

