import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-b11',
  templateUrl: './b11.component.html',
  styleUrls: ['./b11.component.css']
})
export class B11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_b11= new FormGroup({
    prev_qualification:new FormControl('',Validators.required),
    qualification_status:new FormControl('',Validators.required),
    present_qualification:new FormControl('',Validators.required),
    doc_b11:new FormControl('',Validators.required),

  });

}
