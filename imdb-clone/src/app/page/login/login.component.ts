import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })


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

  constructor(private router: Router, private auth : AuthService){}

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
    if(this.loginObj.username == 'admin'){
      if(this.loginForm.valid){
        this.auth.isadmin(this.loginForm.value).subscribe(
          (result) => {
            this.router.navigate(['admin']);
          },
          (err:Error) => {
            alert(err.message)
          }
        )
      }

    }
    else if(isUserExist != undefined){
      console.log(this.loginObj.username, this.loginObj.password)
      this.router.navigate(['/home']);
    }
    else {
      alert("Your credentials are wrong")
    }
  }

}
