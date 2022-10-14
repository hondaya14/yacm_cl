import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register-mail',
  templateUrl: './register-mail.component.html',
  styleUrls: ['./register-mail.component.css']
})
export class RegisterMailComponent implements OnInit {
  hide: boolean = true;
  mail: MailAccountInfo = new MailAccountInfo();
  infoInvalid: boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  debug() {
    console.log();
  }

  register() {
    this.infoInvalid = !this.mail.checkInfo();
    if (this.infoInvalid) return
    let endpoint: string = 'register_cs'
    let url: string = 'http://localhost:4000' + endpoint;
    this.http.post(url, JSON.stringify(this.mail));
  }
}

class MailAccountInfo {
  userName: string;
  password: string;
  passwordInvalid: boolean;

  constructor() {
    this.userName = '';
    this.password = '';
    this.passwordInvalid = false;
  }


  checkInfo() {
    return this.checkName(this.userName) && this.userName.length > 0 && this.checkPassword();
  }

  checkName(checkStr: string) {
    const re = new RegExp(/^[0-9a-zA-Z]+$/);
    return re.test(checkStr);
  }

  checkPassword() {
    const re = new RegExp(/^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d]{8,}$/);
    return re.test(this.password);
  }


}
