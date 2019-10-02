import { Component, OnInit } from '@angular/core';
import { Currency, Rate } from 'src/app/interfaces/currency';
import { environment } from 'src/environments/environment';
import { ExchangeService } from 'src/app/services/exchange.service';
import { DataFixerValues } from 'src/app/interfaces/data-fixer-response';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CurrencyPipe, getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  is_loading: boolean = true; // false when values loaded
  currencies: Currency[]; // Array of currencies available
  curr: Currency; // Currency selected
  error_message: string;
  rates: DataFixerValues[]; // Array of rates availables (recived from ApiRest)
  rate: Rate = {from: null, to: null}; // object of values to change: from and to
  exchangeForm: FormGroup; // reastive form
  has_persistence: boolean = false; // When false, it have to load Api Rest rates
  persistence_interval: number;
  persistence_interval_event;

  constructor(private exchange_service: ExchangeService, private formBuilder: FormBuilder) {
    this.persistence_interval = environment.persistence_interval; // Set time (seconds) interval to persistence
    this.currencies = environment.currencies; // Get list of currency availables
  }

  ngOnInit() {
    this.createForm();
    this.exchangeForm.get('selected_currency').setValue(environment.currencies[0].id);
    this.curr = this.currencies.find( curr => curr.id == this.exchangeForm.get('selected_currency').value );
    console.log(this.curr);
    this.is_loading = false;
  }

  createForm() {
    this.exchangeForm = this.formBuilder.group({
      exchange_from: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      exchange_to: new FormControl(
        ""
      ),
      selected_currency: new FormControl(
        ""
      ),
    });
  }

  isCurrencyChanged() {
    return !(this.rate.from == this.exchangeForm.get('exchange_from').value && this.rate.to == this.exchangeForm.get('exchange_to').value);
  }

  setCurrencyValues() {
    this.rate.from = this.exchangeForm.get('exchange_from').value;
    this.rate.to = this.exchangeForm.get('exchange_to').value;
  }

  getRates() {
    const promise = new Promise((resolve, reject) => {
      console.log('Get rates for ' + this.curr.from);
      this.exchange_service.getRates(this.curr.from).subscribe(data => {
        if( data.success ) {
          this.rates = data.rates;
          // console.log('List rates from Api: ', this.rates);
        }
        else {
          this.error_message = data.error.info;
        }
        resolve(data);
      }, error => {
        this.error_message = 'Error';
        console.log('Error: ', error);
        reject(error);
      });
    });
    return promise;
  }

  getCurrencySymbol(value) {
    return getCurrencySymbol(value, 'narrow');
  }

  async calculate() {
    // Set values for the form
    this.setCurrencyValues();
    if(this.rate.from && !isNaN(this.rate.from)) { // If has from value
      console.log('calculate currencies');
      if(!this.has_persistence) { // If doesn't have persistence, execute httpRequest
        clearInterval(this.persistence_interval_event);
        await this.getRates();
        this.has_persistence = true; // save concurrency for X seconds
        this.persistence_interval_event = setInterval(()=> { // Clear persistence for X seconds
          console.log('Removing persistence');
          this.has_persistence = false;
        }, this.persistence_interval);
      }
      // Do calc rate conversion
      this.rate.to = this.rate.from * +this.rates[this.curr.to];
    }
    else {
      this.rate.to = null;
      console.log('Format error');
    }
  }

}
