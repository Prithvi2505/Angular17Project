import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }

  setToken(token:string):void {
    localStorage.setItem('token',token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  isadmin({username,password}:any):Observable<any>{
    if(username == 'admin' && password=='admin'){
      this.setToken('aasdfghjklqwertyuiopZxcvbnm');
      return of({name: 'admin',email:'admin@gmail.com'});
    }
    return throwError(new Error('failed to login'));
  }


}

