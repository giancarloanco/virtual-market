import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_id: string;
  users_list: any;

  show_wrong_user = { display: 'none' };

  search_in_users(email: string, password: string): string {
    for (let i=0; i<this.users_list.length; i++) {
      if ((email == this.users_list[i]["email"]) && (password == this.users_list[i]["password"])) {
        this.user_id = this.users_list[i]["id"];
        return this.users_list[i]["category"];
      }
    }

    let not_found = "none"

    return not_found;
  }

  wrong_user() {
    this.show_wrong_user = { display: 'block' };
    (<HTMLInputElement>document.getElementById("password")).value = '';
  }

  login(user_name: HTMLInputElement, user_password: HTMLInputElement) {
    if (this.search_in_users(user_name.value, user_password.value) == "2") {
      localStorage.setItem('user_id', this.user_id);
      this.router.navigate(['/seller'])
    }
    else if (this.search_in_users(user_name.value, user_password.value) == "3") {
      localStorage.setItem('user_id', this.user_id);
      this.router.navigate(['/buyer'])
    }
    else {
      this.wrong_user();
      return false;
    }

  }

  async read_users() {
    this.users_service.get_users().subscribe(
      res => {
        this.users_list = res;
      },
      err => console.log(err)
    );

  }

  constructor(private router: Router, private users_service: UsersService) { }

  ngOnInit(): void {
    this.read_users();

  }

}
