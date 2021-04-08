import { Component, OnInit } from '@angular/core';
import { User } from "./../../models/users";
import { first } from 'rxjs/operators';
import { UserserviceService } from "./../../service/userservice.service";
import { AuthserviceService } from './../../service/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  loading = false;
    users: User[];
    currentUser: User;
    constructor(private userService: UserserviceService,
      private router: Router,
      private authenticationService: AuthserviceService) { 
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
  
  }

  

  