import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Store/Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class NgAuthService {

  constructor(private http: HttpClient) { }
  baseApiUrl = 'http://localhost:3000/user'

  UserRegisteration(userdata:User){
    return this.http.post(this.baseApiUrl,userdata);
  }
}
