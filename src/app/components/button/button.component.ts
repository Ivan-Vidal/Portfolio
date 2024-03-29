import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

@Input() label! : string
@Input() type! : 'raised' | 'flat';
@Input() rote! : string
  constructor() { }

  ngOnInit(): void {
  }

}
