import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  
  btn_login(){
    this.router.navigate(['/login'])
  }


  constructor(private router: Router, private products_service: ProductsService) { }


  ngOnInit(): void {
  }

}
