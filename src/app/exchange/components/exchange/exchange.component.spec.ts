import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeComponent } from './exchange.component';
import { CommonModule } from '@angular/common';
import { ExchangeRoutingModule } from '../../exchange-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { NgxCurrencyModule } from 'ngx-currency';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        HttpClientModule,
        BrowserAnimationsModule,        
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Calculate currency exchange 100 EUR to USD',async ()=> {
    // Arrange
    let exchange_component = component;
    exchange_component.curr.from = 'EUR';
    exchange_component.curr.to = 'USD';
    exchange_component.exchangeForm.get('exchange_from').setValue('100');
    // Act
    await exchange_component.calculate();
    const calculated = exchange_component.rate.to;
    exchange_component.exchangeForm.get('exchange_to').setValue(calculated);
    const esperado = 100 * +exchange_component.rates['USD'];
    // Assert
    expect(calculated).toEqual(esperado);
  });

  fit('Calculate currency exchange NaN EUR to USD - toBeNull',async ()=> {
    // Arrange
    let exchange_component = component;
    exchange_component.curr.from = 'EUR';
    exchange_component.curr.to = 'USD';
    exchange_component.exchangeForm.get('exchange_from').setValue('100EUROS');
    // Act
    await exchange_component.calculate();
    const calculated = exchange_component.rate.to;
    exchange_component.exchangeForm.get('exchange_to').setValue(calculated);
    const esperado = null;
    // Assert
    expect(calculated).toEqual(esperado);
  });

  fit('Calculate currency exchange void EUR to USD - toBeNull',async ()=> {
    // Arrange
    let exchange_component = component;
    exchange_component.curr.from = 'EUR';
    exchange_component.curr.to = 'USD';
    exchange_component.exchangeForm.get('exchange_from').setValue('');
    // Act
    await exchange_component.calculate();
    const calculated = exchange_component.rate.to;
    exchange_component.exchangeForm.get('exchange_to').setValue(calculated);
    const esperado = null;
    // Assert
    expect(calculated).toEqual(esperado);
  });

  
});
