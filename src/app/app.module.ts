import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ExchangeService } from './services/exchange.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService, ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
