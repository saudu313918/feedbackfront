import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-b14',
  templateUrl: './b14.component.html',
  styleUrls: ['./b14.component.css']
})
export class B14Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_b14= new FormGroup({
    industry:new FormControl('',Validators.required),
    industry_type:new FormControl('',Validators.required),
    association_type:new FormControl('',Validators.required),
    beneficiaries_no:new FormControl('',Validators.required),
    docs_b14:new FormControl('',Validators.required),

  });

}
