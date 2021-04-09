import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-a15',
  templateUrl: './a15.component.html',
  styleUrls: ['./a15.component.css']
})
export class A15Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_a15= new FormGroup({
    program_title:new FormControl('',Validators.required),
    duration:new FormControl('',Validators.required),
    no_students_attended:new FormControl('',Validators.required),
    docs_a15:new FormControl('',Validators.required),

  })

}
