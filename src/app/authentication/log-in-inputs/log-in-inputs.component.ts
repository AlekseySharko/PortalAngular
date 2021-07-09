import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-inputs',
  templateUrl: './log-in-inputs.component.html'
})
export class LogInInputsComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }
  //Make returning to the previous route on success
  ngOnInit(): void {
  }

}
