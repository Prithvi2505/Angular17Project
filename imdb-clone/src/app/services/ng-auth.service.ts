import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserCred, UserInfo } from '../Store/Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class NgAuthService {

  constructor(private http: HttpClient) { }
  baseApiUrl = 'http://localhost:3000/user'

  UserRegisteration(userdata:User){
    return this.http.post(this.baseApiUrl,userdata);
  }
  UserLogin(userdata:UserCred){
    return this.http.get<UserInfo[]>(this.baseApiUrl+`?id=${userdata.id}&password=${userdata.password}`);
  }
  SetUserToLocalStorage(userdata:UserInfo){
    localStorage.setItem('userdata',JSON.stringify(userdata))
  }
  GetUserDataFromLocalStroage(){
    let _obj:UserInfo={
      id:'',
      email:'',
      role:''
    }
    if(localStorage.getItem('userdata') != null){
      let jsonstring =localStorage.getItem('userdata') as string;
      _obj = JSON.parse(jsonstring);
      return _obj;
    }
    else {
      return _obj;
    }
  }
   isLoggedIn() {
    return localStorage.getItem('userdata') != null;
  }

  getUserRole() {
    if(localStorage.getItem('userdata')!= null){
      let jsonstring =localStorage.getItem('userdata') as string;
      let userdata = JSON.parse(jsonstring);
      return userdata.role;
    } return undefined;
  }

  DuplicateId(id:string){
    return this.http.get<UserInfo[]>(this.baseApiUrl+`?id=${id}`)
  }

}
