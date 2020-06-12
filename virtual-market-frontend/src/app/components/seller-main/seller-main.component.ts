import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-seller-main',
  templateUrl: './seller-main.component.html',
  styleUrls: ['./seller-main.component.css']
})
export class SellerMainComponent implements OnInit {
  
  show_resume = {display: 'block'};
  show_sales = {display: 'none'};
  show_publications = {display: 'none'};
  show_comments = {display: 'none'};

  user_id: any;
  user_data: any;
  user_name: string;

  publications = [["1", "Papa Negra Andina x kg.", "S/ 2.00", "assets/img/products/prod1.jpg"], ["2", "Plátano de Seda x kg.", "S/ 2.50", "assets/img/products/prod2.jpg"]]

  sales = [["1", "Luis A.", "Papa Negra Andina", "S/ 10.00"], ["2", "Pedro B.", "Plátano de Seda", "S/ 5.50"], ["3", "Arturo C.", "Papa Negra Andina", "S/ 6.00"], ["4", "Jose D.", "Varios", "S/ 20.00"]]

  comments = [["1", "Luis A.", "Cuánto tiempo tarda el envío?"], ["2", "Pedro B.", "El delivery llega hasta Miraflores?"]]

  waiting_comments: number;

  css_show_resume() {
    this.show_resume = {display: 'block'};
    this.show_sales = {display: 'none'};
    this.show_publications = {display: 'none'};
    this.show_comments = {display: 'none'};
  }

  css_show_publications() {
    this.show_resume = {display: 'none'};
    this.show_sales = {display: 'none'};
    this.show_publications = {display: 'block'};
    this.show_comments = {display: 'none'};
  }

  css_show_sales() {
    this.show_resume = {display: 'none'};
    this.show_sales = {display: 'block'};
    this.show_publications = {display: 'none'};
    this.show_comments = {display: 'none'};
  }

  css_show_comments() {
    this.show_resume = {display: 'none'};
    this.show_sales = {display: 'none'};
    this.show_publications = {display: 'none'};
    this.show_comments = {display: 'block'};
  }

  btn_show_resume() {
    this.css_show_resume();
  }

  btn_show_publications() {
    this.css_show_publications();
  }

  btn_show_sales() {
    this.css_show_sales();
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
    
  }

}
