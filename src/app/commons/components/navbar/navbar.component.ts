import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() menu_items: any [];
  @Output() onLogout = new EventEmitter();
  expanded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toogleMenu() {
    this.expanded = !this.expanded;
  }

  hideMenu() {
    this.expanded = false;
  }

  logOut() {
    console.log('Logout');
    this.onLogout.emit(true);
  }

}
