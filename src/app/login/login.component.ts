import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mail: string = '';
  password: string = '';
  incorrectPassword: boolean = false;
  incorrectMail: boolean = false;
  entrance = false;
  constructor(public authService: AuthService) {}
    
  

  ngOnInit(): void { }
  login(): void {
    let user_str = localStorage.getItem("userinfo")
    if (user_str !== null) {
    } else {
      return
    }
    let user = JSON.parse(user_str);
    if (this.mail === user['mail']) {

    } else {
      this.incorrectMail = true;
      return;
    }
    if (this.password === user['password']) {
    } else {
      this.incorrectPassword = true;
      return;
    }
    this.authService.login();
    alert("Вы успешно вошли")
  }
}


