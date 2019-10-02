import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';

const routes: Routes = [
  { path: '', children: [
    { path: 'list', component: CurrencyListComponent },
    { path: 'add', component: CurrencyListComponent },
    { path: 'edit/:id', component: CurrencyListComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
