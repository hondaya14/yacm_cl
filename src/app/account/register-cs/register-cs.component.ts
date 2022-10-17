import {Component, OnInit} from '@angular/core';
import {AccountService} from "../account.service";


@Component({
  selector: 'app-register-cs',
  templateUrl: './register-cs.component.html',
  styleUrls: ['./register-cs.component.css']
})
export class RegisterCsComponent implements OnInit {
  ldap: LdapInfo = new LdapInfo();
  infoInvalid: boolean = false;
  hide: boolean = true;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  debug() {
    console.log(this.ldap);
    console.log(JSON.stringify(this.ldap));
  }

  register() {
    this.infoInvalid = !this.ldap.checkInfo();
    if (this.infoInvalid) return
    this.accountService.registerCS(JSON.stringify(this.ldap)).subscribe(result => console.log(result));
    // console.log('post: ' + url + '\nbody:' + '\n' + JSON.stringify(this.ldap), option);
    // this.http.post(url, JSON.stringify(this.ldap));
  }
}

class LdapInfo {
  lastName: string;
  firstName: string;
  accountName: string;
  password: string;

  constructor() {
    this.lastName = '';
    this.firstName = '';
    this.accountName = '';
    this.password = '';
  }

  checkInfo() {
    return this.checkName(this.lastName)
      && this.checkName(this.firstName)
      && this.checkName(this.accountName)
      && this.lastName.length > 0 && this.firstName.length > 0 && this.accountName.length > 0
      && this.checkPassword();
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
