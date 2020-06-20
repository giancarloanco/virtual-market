import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //url = "http://127.0.0.1:8000/product";

  url = "http://127.0.0.1:4000/api/";

  constructor(private http: HttpClient) { }

  create_product(name: string, price: string, category: string, description: string, form: File) {
    const fd_product = new FormData();
    fd_product.append('name', name);
    fd_product.append('price', price);
    fd_product.append('category', category);
    fd_product.append('description', description);
    fd_product.append('image', form);
    return this.http.post(this.url + 'product', fd_product);
  }

  get_product(product_id: string) {
    return this.http.get(this.url + 'product/' + product_id);
    //return this.http.get(this.url + '/' + product_id.toString());
  }
  
  get_products() {
    return this.http.get(this.url + 'product');
    //return this.http.get(this.url);
  }

  get_sales() {
    return this.http.get(this.url + 'sales');
  }

  create_sale(name_product: string, price: string, num_items: string, name_seller: string, name_buyer: string) {
    return this.http.post(this.url + 'sales', { name_product, price, num_items, name_seller, name_buyer } );
  }

  create_comment(id_user: string, comment: string, id_product: string, id_client: string) {
    return this.http.post(this.url + 'comments', { id_user, comment, id_product, id_client } );
  }

  get_comments() {
    return this.http.get(this.url + 'comments');
  }
}
