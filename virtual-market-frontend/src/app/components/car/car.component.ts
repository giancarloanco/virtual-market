import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  user_id: any;
  user_data: any;
  user_name: string;

  prod_data: any;

  prod_num: string;
  
  btn_login() {
    this.router.navigate(['/login'])
  }

  btn_add() {
    let temp = parseInt(this.prod_num)
    temp = temp + 1; 
    this.prod_num = temp.toString();

    let temp2 = parseInt(this.prod_data['price'])
    temp2 = temp2 * temp;
    this.prod_data['price'] = temp2.toString();
  }

  btn_payment() {
    localStorage.setItem('current_product', JSON.stringify(this.prod_data));
    localStorage.setItem('num', this.prod_num);

    this.router.navigate(['/payment']);

  }


  read_product_data_internal() {
    this.prod_data = JSON.parse(localStorage.getItem("current_product"));
    this.prod_num = localStorage.getItem("num")
  }

  async read_user() {
    this.user_id = localStorage.getItem("user_id");
    this.users_service.get_user(this.user_id).subscribe(
      res => {
        this.user_data = res;
        this.user_name = this.user_data["first_name"] + " " + this.user_data["last_name"];
      },
      err => console.log(err)
    );

  }

  constructor(private router: Router, private products_service: ProductsService, private users_service: UsersService) { }


  ngOnInit(): void {
    this.read_user();
    this.read_product_data_internal();
  }

}
