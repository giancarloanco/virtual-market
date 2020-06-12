import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from "../../services/products.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products_list: any;  
  header_path = 'assets/img/products/';

  btn_login(){
    this.router.navigate(['/login'])
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

  constructor(private router: Router, private products_service: ProductsService) { }

  ngOnInit(): void {
    this.load_products();
    
    //this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('');
  //@Output('search') searchEmitter = new EventEmitter<string>()>;
}

