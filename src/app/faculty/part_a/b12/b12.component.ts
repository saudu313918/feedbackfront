import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-b12',
  templateUrl: './b12.component.html',
  styleUrls: ['./b12.component.css']
})
export class B12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_b12= new FormGroup({
    title:new FormControl('',Validators.required),
    duration:new FormControl('',Validators.required),
    funding:new FormControl('',Validators.required),
    funding_amt:new FormControl('',Validators.required),
    participants:new FormControl('',Validators.required),
    docs_b12:new FormControl('',Validators.required),

  });

}
