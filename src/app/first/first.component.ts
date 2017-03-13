import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: '<app-room-calendar yearMonth="201705" ></app-room-calendar>',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
