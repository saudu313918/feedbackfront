import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-a14',
  templateUrl: './a14.component.html',
  styleUrls: ['./a14.component.css']
})
export class A14Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_a14= new FormGroup({
    subject:new FormControl('',Validators.required),
    Innovation_type:new FormControl('',Validators.required),
    Innovation_material:new FormControl('',Validators.required),
    docs_b14:new FormControl('',Validators.required),

})

}
