import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Currency } from 'src/app/interfaces/currency';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {
  _data: Currency[];
  _keys;
  _title: string = 'Mooney Exchange';
  constructor() {
    this._data = environment.currencies;
    this._keys = ['from', 'to'];
  }

  ngOnInit() {
  }

}
