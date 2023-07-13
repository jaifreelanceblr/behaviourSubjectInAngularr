import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Customer, data, nextdata } from "./customer-data";

@Injectable({
    providedIn: 'root'
})
export class CustomerService{

    getCustomers() : Observable<Customer[]>{
        return of(data);
    }

    getNextCustomer() : Observable<Customer[]>{
        return of(nextdata)
    }
}