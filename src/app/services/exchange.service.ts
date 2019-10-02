import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { DataFixerResponse } from '../interfaces/data-fixer-response';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http_service: HttpService) { }

  getRates(currency: string): Observable<DataFixerResponse> {
    console.log('CURRENCY: ', currency);
    return this.http_service.get<DataFixerResponse>(environment.endpoints.currencies[currency]);
  }
}
