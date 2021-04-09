import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-b16',
  templateUrl: './b16.component.html',
  styleUrls: ['./b16.component.css']
})
export class B16Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  part_b16= new FormGroup({
    responsibility:new FormControl('',Validators.required),
    level:new FormControl('',Validators.required),
    nature:new FormControl('',Validators.required),
    docs_b16:new FormControl('',Validators.required),
  });

}
