import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-b13',
  templateUrl: './b13.component.html',
  styleUrls: ['./b13.component.css']
})
export class B13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    part_b13= new FormGroup({
    title:new FormControl('',Validators.required),
    duration:new FormControl('',Validators.required),
    organizer:new FormControl('',Validators.required),
    docs_b13:new FormControl('',Validators.required),

  });

}
