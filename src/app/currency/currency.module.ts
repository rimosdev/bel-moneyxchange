import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [CurrencyListComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    CommonsModule
  ]
})
export class CurrencyModule { }
