import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements OnInit {
  @Input() valueToInput:{i:number} = {i: 1};
  constructor() { }

  ngOnInit(): void {
  }

}
