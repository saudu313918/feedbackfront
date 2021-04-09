import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-a12',
  templateUrl: './a12.component.html',
  styleUrls: ['./a12.component.css']
})
export class A12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  part_a12= new FormGroup({
    subject:new FormControl('',Validators.required),
    attendence_percentage:new FormControl('',Validators.required),
    docs_a12:new FormControl('',Validators.required),
 
})

}
