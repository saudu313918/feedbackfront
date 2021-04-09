import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-a16',
  templateUrl: './a16.component.html',
  styleUrls: ['./a16.component.css']
})
export class A16Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  part_a16= new FormGroup({
    duty_type:new FormControl('',Validators.required),
    responsibility:new FormControl('',Validators.required),
    duty_completed:new FormControl('',Validators.required),
    docs_a16:new FormControl('',Validators.required),

  })

}
