import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../services/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user_id: any;
  user_data: any;
  user_name: string;

  products_list: any;  

  header_path = 'assets/img/products/';

  source_header: string;

  header_products = ["assets/img/products/huevos.jpg", "assets/img/products/palta.jpg"];

  show_user = {display: 'none'};
  show_login_button = {display: 'block'};

  current_index_header: number;

  header_button_text = "Iniciar Sesión";

  btn_next() {
    this.current_index_header = (this.current_index_header + 1) % this.header_products.length;
  }

  btn_login(){
    this.router.navigate(['/login'])
  }

  btn_view_detail(id_product){
    localStorage.setItem('current_product', id_product);
    this.router.navigate(['/product'])
  }

  btn_add_to_cart(id_product){
    localStorage.setItem('current_product', id_product);
    this.router.navigate(['/cart'])
  }

  complete_paths() {
    for (let i=0; i<this.products_list.length; i++) {
      this.products_list[i]["type"] = this.header_path + this.products_list[i]["type"];
    }
  }

  async load_products() {
    this.products_service.get_products().subscribe(
      res => {
        this.products_list = res;
        //this.complete_paths();
        console.log(this.products_list)
      },
      err => console.log(err)
    );

  }

  is_user() {
    if (this.user_name === "") {
      this.show_user = {display: 'none'};
      this.show_login_button = {display: 'block'}; 
      this.header_button_text = "Iniciar Sesión";
    }
    else {
      this.show_user = {display: 'block'};
      this.show_login_button = {display: 'none'};
      this.header_button_text = "Cerrar Sesión";
    }
  }

  async read_user() {
    this.user_id = localStorage.getItem("user_id");
    this.users_service.get_user(this.user_id).subscribe(
      res => {
        this.user_data = res;
        this.user_name = this.user_data["first_name"] + " " + this.user_data["last_name"];
        this.is_user();
      },
      err => console.log(err)
    );

  }

  constructor(private router: Router, private products_service: ProductsService, private users_service: UsersService) { }

  ngOnInit(): void {
    this.read_user();
    this.load_products();
    this.current_index_header = 0;
    
    //this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('');
  //@Output('search') searchEmitter = new EventEmitter<string>()>;
}

