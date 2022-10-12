import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-register-cs',
  templateUrl: './register-cs.component.html',
  styleUrls: ['./register-cs.component.css']
})
export class RegisterCsComponent implements OnInit {
  ldap: LdapInfo = new LdapInfo();
  hide: boolean = true;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  debug() {
    console.log(this.ldap);
    console.log(JSON.stringify(this.ldap));
  }

  register() {
    let endpoint: string = 'register_cs'
    let url: string = 'http://localhost:4000' + endpoint;
    this.http.post(url, JSON.stringify(this.ldap));
  }
}

class LdapInfo {
  lastName: string;
  firstName: string;
  accountName: string;
  password: string;

  constructor() {
    this.lastName = ''
    this.firstName = ''
    this.accountName = ''
    this.password = ''
  }


}

