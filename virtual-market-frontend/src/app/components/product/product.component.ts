import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   constructor(private router: Router, private products_service: ProductsService) { }

  btn_login(){
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}

