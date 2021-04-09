import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-b15',
  templateUrl: './b15.component.html',
  styleUrls: ['./b15.component.css']
})
export class B15Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_b15= new FormGroup({
    institute_name:new FormControl('',Validators.required),
    institute_type:new FormControl('',Validators.required),
    association_name:new FormControl('',Validators.required),
    docs_b15:new FormControl('',Validators.required),
  });

}
