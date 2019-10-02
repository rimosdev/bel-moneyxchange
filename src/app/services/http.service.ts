import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export const http_options ={
  headers: new HttpHeaders()
                          .set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private options = {
    headers: new HttpHeaders()
  };

  constructor(private http: HttpClient) {
  }
  
  
  get<T>(url): Observable<T> {
    return this.http.get<T>(url, this.options)
  }

  post<T>(url, data): Observable<T> {
    return this.http.post<T>(url, data, this.options)
  }

  put<T>(url, data) {
    return this.http.put<T>(url, data, this.options)
  }

  delete<T>(url) {
    return this.http.delete<T>(url, this.options)
  }

}
