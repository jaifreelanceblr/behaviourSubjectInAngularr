import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Customer } from 'src/app/customer-data';
import { data } from  './customer-data'
import { CustomerService } from './customer-service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html' 
})
export class CustomerComponent implements OnInit {

  private customer = new BehaviorSubject<Customer[]>([]);
  readonly customer$: Observable<Customer[]> = this.customer.asObservable();
  
  constructor( private service : CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
      return this.service.getCustomers()
        .pipe()
        .subscribe(result => {
          this.customer.next(result)
        })
  }

  getNextSetofCustomers() {
    return this.service.getNextCustomer()
      .pipe()
      .subscribe(result => {
        this.customer.next(this.customer.value.concat(result))
      })
  }

  nextSet(){
    this.getNextSetofCustomers();
  }
}
