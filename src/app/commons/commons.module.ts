import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { DataGridComponent } from './components/data-grid/data-grid.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    DataGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    DataGridComponent
  ]
})
export class CommonsModule { }
