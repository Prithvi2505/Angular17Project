import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  signupUser: any = [];
  signupObj: any = {
    username:'',
    email:'',
    password: '',
  };
  loginObj:any = {
    username: '',
    password: '',
  }

  constructor(private router: Router){}

  ngOnInit() {
   const localData = localStorage.getItem('signupUser');
   if(localData != null){
    this.signupUser = JSON.parse(localData)
   }
    
  }

  onSignup(){
   this.signupUser.push(this.signupObj);
   localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
   this.signupObj =  {
    username:'',
    email:'',
    password: '',
   }
  }
  onLogin(){
    const isUserExist = this.signupUser.find((m: any) => 
      m.username === this.loginObj.username && m.password === this.loginObj.password
    );
    
    if(isUserExist != undefined){
      console.log(this.loginObj.username, this.loginObj.password)
      this.router.navigate(['/home']);
    }
    else {
      alert("Your credentials are wrong")
    }
  }

}
