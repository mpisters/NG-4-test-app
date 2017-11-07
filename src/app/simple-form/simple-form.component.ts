import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
   templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();
   public onClick(event, value) {
        console.log(event)
        console.log(value)
    }

  constructor() { }

  ngOnInit() {
  }

}
