import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {
  valueToOutput:{i:number} = {i: 3};
  constructor() { }

  ngOnInit(): void {
  }

}