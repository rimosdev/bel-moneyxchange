import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'exchange', pathMatch: 'full' },
  { path: 'exchange', loadChildren: './exchange/exchange.module#ExchangeModule' },
  { path: 'currencies', loadChildren: './currency/currency.module#CurrencyModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
