import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://127.0.0.1:8000/product";

  constructor(private http: HttpClient) { }

  get_product(product_id: number) {
    return this.http.get(this.url + '/' + product_id.toString());
  }
  
  get_products() {
    return this.http.get(this.url);
  }
}
