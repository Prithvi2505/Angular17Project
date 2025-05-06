import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  registerForm = new FormGroup( {
    id : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email : new FormControl('',Validators.compose([ Validators.required,Validators.email])),
    role: new FormControl(''),
  })
  userData:any;
  constructor(private router: Router, private auth : AuthService){
    sessionStorage.clear();
  }
  ngOnInit() {
    
  }
  proceedRegistration(){
    if(this.registerForm.valid){
      this.auth.proceedRegister(this.registerForm.value).subscribe(res => {
        alert("Registered successfully")
      })
    }
    else {
      alert("please enter valid data")
    }
  }

  proceedLogin() {
    if(this.loginForm.valid){
      this.auth.getByCode(this.loginForm.value.username).subscribe( res => {
        this.userData = res;
        if(this.userData.password === this.loginForm.value.password){
          sessionStorage.setItem('username',this.userData.id)
          sessionStorage.setItem('userRole', this.userData.role)
          this.router.navigate(['home'])
        }
        else{
          alert("Wrong Credentials")
        }
      })
    }
    else{
      alert("Wrong Credentials")
    }
  }

}
