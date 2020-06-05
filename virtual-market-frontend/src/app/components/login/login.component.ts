import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  test_user = [["seller1", "seller2020", "seller"], ["buyer1", "buyer2020", "buyer"]]

  show_wrong_user = { display: 'none' };

  search_in_users(name: string, password: string): string {
    for (let i=0; i<this.test_user.length; i++) {
      if ((name == this.test_user[i][0]) && (password == this.test_user[i][1])) {
        return this.test_user[i][2];
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
    if (this.search_in_users(user_name.value, user_password.value) == "seller") {
      this.router.navigate(['/seller'])
    }
    else if (this.search_in_users(user_name.value, user_password.value) == "buyer") {
      this.router.navigate(['/buyer'])
    }
    else {
      this.wrong_user();
      return false;
    }

  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
