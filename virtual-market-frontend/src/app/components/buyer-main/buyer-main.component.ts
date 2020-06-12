import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-buyer-main',
  templateUrl: './buyer-main.component.html',
  styleUrls: ['./buyer-main.component.css']
})
export class BuyerMainComponent implements OnInit {

  show_resume = {display: 'block'};
  show_purchases = {display: 'none'};
  show_comments = {display: 'none'};

  user_id: any;
  user_data: any;
  user_name: string;

  purchases = [["1", "Papa Negra Andina x kg.", "S/ 2.00", "Agro1", "assets/img/products/prod1.jpg"], ["2", "Plátano de Seda x kg.", "S/ 2.50", "Agro1", "assets/img/products/prod2.jpg"]]

  comments = [["1", "Papa Negra Andina x kg.", "Agro1", "Cuánto tiempo tarda el envío?"], ["2", "Plátano de Seda x kg.", "Agro1", "El delivery llega hasta Miraflores?"]]

  waiting_comments: number;
  num_purchases: number;

  css_show_resume() {
    this.show_resume = {display: 'block'};
    this.show_purchases = {display: 'none'};
    this.show_comments = {display: 'none'};
  }

  css_show_purchases() {
    this.show_resume = {display: 'none'};
    this.show_purchases = {display: 'block'};
    this.show_comments = {display: 'none'};
  }

  css_show_comments() {
    this.show_resume = {display: 'none'};
    this.show_purchases = {display: 'none'};
    this.show_comments = {display: 'block'};
  }

  btn_show_resume() {
    this.css_show_resume();
  }

  btn_show_purchases() {
    this.css_show_purchases();
  }

  btn_show_comments() {
    this.css_show_comments();
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

  constructor(private products_service: ProductsService, private users_service: UsersService) { }

  ngOnInit(): void {
    this.read_user();
    this.waiting_comments = this.comments.length;
    this.num_purchases = this.purchases.length;
  }

}
