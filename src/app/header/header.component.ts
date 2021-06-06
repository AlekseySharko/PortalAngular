import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onBurgerClick() {
    let navList = document.querySelector('.header-nav-list');
    navList?.classList.toggle('header-nav-list-toggle');
  }
}
