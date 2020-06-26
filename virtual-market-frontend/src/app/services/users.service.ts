import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://127.0.0.1:8000/c_user";

  constructor(private http: HttpClient) { }

  get_user(user_id: string) {
    return this.http.get("http://127.0.0.1:4000/api/users/" + user_id);
    //return this.http.get(this.url + '/' + user_id.toString());
  }
  
  get_users() {
    //return this.http.get('http://127.0.0.1:8000/c_user?format-json');
    //return this.http.get(this.url);
    return this.http.get("http://127.0.0.1:4000/api/users");
  }

  create_user(first_name: string, last_name: string, email: string, phone: string, password: string, category: string, address_1: string, address_2: string) {
    return this.http.post("http://127.0.0.1:4000/api/users", { first_name, last_name, email, phone, password, category, address_1, address_2 } );
  }
}
