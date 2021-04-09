import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  infoForm= new FormGroup({
      name:new FormControl('',Validators.required),
      designation:new FormControl('',Validators.required),
      department:new FormControl('',Validators.required),
      academic_year:new FormControl('',Validators.required)

  })

}
