import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router, private http:HttpClient) { }
  apiurl = 'http://localhost:3000/user';

  getAll() {
    return this.http.get(this.apiurl)
  }
  getByCode(code:any){
    return this.http.get(this.apiurl+'/'+ code);
  }

  proceedRegister(inputData: any) {
    return this.http.post(this.apiurl,inputData)
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }

  getUserRole() {
    return sessionStorage.getItem('userRole')!= null ? sessionStorage.getItem('userRole')?.toString() : '';
  }

}

