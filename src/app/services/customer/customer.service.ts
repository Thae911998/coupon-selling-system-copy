import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  BASE_URL = "http://localhost:8080/api/customers";

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(`${this.BASE_URL}`, {
      responseType: 'json'
    });
  }

  editUserFund(data:any) {
    let dataToSend = data.fund;
    return this.http.post(`${this.BASE_URL}/${data.id}`,  dataToSend);
  }

}