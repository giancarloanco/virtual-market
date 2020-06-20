import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_id: string;

  product_data: any;

  num_items: string;

  user_id: any;
  user_data: any;
  user_name: string;

  ask: string;

  btn_login(){
    this.router.navigate(['/login'])
  }

  btn_ask() {
    this.products_service.create_comment("Vendedor Admin", this.ask, this.product_data['name'], this.user_name).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)

    )
  }

  btn_add_to_cart() {
    localStorage.setItem('current_product', JSON.stringify(this.product_data));
    localStorage.setItem('num', this.num_items);
    this.router.navigate(['/cart']);
  }

  read_product_internal() {
    this.product_id = localStorage.getItem("current_product");
  }

  async read_product() {
    this.products_service.get_product(this.product_id).subscribe(
      res => {
        this.product_data = res;
      },
      err => console.log(err)
    )
  }

  async read_user() {
    this.user_id = localStorage.getItem("user_id");
    this.users_service.get_user(this.user_id).subscribe(
      res => {
        this.user_data = res;
        this.user_name = this.user_data["first_name"] + " " + this.user_data["last_name"];
        console.log(this.user_name)
      },
      err => console.log(err)
    );

  }

  constructor(private router: Router, private products_service: ProductsService, private users_service: UsersService) { }

  ngOnInit(): void {
    this.read_user();
    this.read_product_internal();
    this.read_product();
    this.num_items = "1";
  }

}

