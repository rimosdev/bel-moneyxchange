import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule, MatInputModule } from '@angular/material';

import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './components/exchange/exchange.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    NgxCurrencyModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ]
})
export class ExchangeModule { }
