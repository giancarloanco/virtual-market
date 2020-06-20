import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user_id: any;
  user_data: any;
  user_name: string;

  prod_data: any
  prod_items: string;

  show_card_payment = {display: 'none'};
  show_success = {display: 'none'};

  total_price: string;

  btn_login(){
    this.router.navigate(['/login'])
  }

  selector_change(selectedValue: string) {
    if (selectedValue === "0") {
      this.show_card_payment = {display: 'none'};
    }
    else {
      this.show_card_payment = {display: 'block'};
    }
  }

  async btn_pay() {
    this.show_success = {display: 'block'};
    console.log(this.prod_data)

    this.products_service.create_sale(this.prod_data['name'], this.prod_data['price'], this.prod_items, this.user_name, "Vendedor Admin").subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)

    );

  }

  read_product_data_internal() {
    this.prod_data = JSON.parse(localStorage.getItem("current_product"));
    this.prod_items = localStorage.getItem("num")
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

    this.total_price = this.prod_data['price']
  }

}
