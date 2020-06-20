import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { ProductsService } from "../../services/products.service";
import { Router } from "@angular/router"

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  user_id: any;
  user_data: any;
  user_name: string;

  image_product: File;

  name_prod: string;
  price_prod: string;
  category_prod: string;
  description_prod: string;

  select_image(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.image_product = <File>event.target.files[0];
    }
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

  async create_product() {
    this.products_service.create_product(this.name_prod, this.price_prod, this.category_prod, this.description_prod, this.image_product).subscribe(
      res => {
        console.log(res);
        setTimeout(() =>  window.location.reload(), 500);
        this.router.navigate(['/seller']);

      }, err => console.log(err)
    );
  }

  constructor(private products_service: ProductsService, private users_service: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.read_user();
  }

}
