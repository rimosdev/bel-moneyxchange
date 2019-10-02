import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bel-moneyxchange';
  menu_items = [
    { url: '/exchange', title: 'Exchange' },
    { url: '/currencies/list', title: 'Currencies' }
  ];
}
