import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Endpoint} from "../constant/constant";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  registerMail(body: any): Observable<any> {
    let url: string = environment.serverURI + Endpoint.registerMail;
    return this.http.post(url, body, this.httpOption);
  }

  registerCS(body: any): Observable<any> {
    let url: string = environment.serverURI + Endpoint.registerCS;
    console.log('post: ' + url + '\nbody:' + '\n' + body);
    return this.http.post(url, body, this.httpOption);
  }
}
