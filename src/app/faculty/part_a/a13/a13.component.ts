import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-a13',
  templateUrl: './a13.component.html',
  styleUrls: ['./a13.component.css']
})
export class A13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


   
  part_a13= new FormGroup({
    subject:new FormControl('',Validators.required),
    average_result:new FormControl('',Validators.required),
    percentage_result:new FormControl('',Validators.required),
    docs_a13:new FormControl('',Validators.required),

})

}
