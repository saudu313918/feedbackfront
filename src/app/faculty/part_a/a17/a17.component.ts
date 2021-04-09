import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-a17',
  templateUrl: './a17.component.html',
  styleUrls: ['./a17.component.css']
})
export class A17Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_a17= new FormGroup({
    batch:new FormControl('',Validators.required),
    no_of_students:new FormControl('',Validators.required),
    meetings_planned:new FormControl('',Validators.required),
    meetings_conducted:new FormControl('',Validators.required),
    docs_a17:new FormControl('',Validators.required),


  });
}
