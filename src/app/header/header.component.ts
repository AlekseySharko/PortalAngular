import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggleValue:boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.toggleValue = false;
  }
}
