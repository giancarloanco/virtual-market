import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://127.0.0.1:8000/c_user";

  constructor(private http: HttpClient) { }

  get_user(user_id: number) {
    return this.http.get(this.url + '/' + user_id.toString());
  }
  
  get_users() {
    //return this.http.get('http://127.0.0.1:8000/c_user?format-json');
    return this.http.get(this.url);
  }
}
