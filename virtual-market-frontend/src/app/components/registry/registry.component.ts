import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  name_prod: string;
  last_name: string;
  email_prod: string;
  password_prod: string;
  address_prod: string;
  phone_user: string;
  show_success = {display: 'none'};

  btn_create_product() {
    this.show_success = {display: 'block'};
    this.users_service.create_user(this.name_prod, this.last_name, this.email_prod, this.phone_user, this.password_prod, "2", this.address_prod, "Arequipa").subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );


  }

  constructor(private users_service: UsersService) { }

  ngOnInit(): void {
  }

}
