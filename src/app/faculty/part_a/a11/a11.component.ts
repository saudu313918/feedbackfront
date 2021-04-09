import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-a11',
  templateUrl: './a11.component.html',
  styleUrls: ['./a11.component.css']
})
export class A11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_a11= new FormGroup({
    subject:new FormControl('',Validators.required),
    semister:new FormControl('',Validators.required),
    classess_assigned:new FormControl('',Validators.required),
    classes_conducted:new FormControl('',Validators.required),
    docs_a11:new FormControl('',Validators.required)
})

}
