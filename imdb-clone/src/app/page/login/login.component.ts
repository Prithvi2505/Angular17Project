import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { showalert } from '../../Store/Common/App.Action';
import { User, UserCred } from '../../Store/Model/User.model';
import { beginLogin, beginRegister, duplicateUser } from '../../Store/User/User.action';
import { isDuplicateUser } from '../../Store/User/User.Selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

    isDuplicate = false;
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
  constructor(private router: Router, private auth : AuthService,private store:Store){
    sessionStorage.clear();
  }
  ngOnInit() {
    localStorage.clear()
  }
  proceedRegistration(){
    if(this.registerForm.valid){
      // this.auth.proceedRegister(this.registerForm.value).subscribe(res => {
      //   alert("Registered successfully")
      // })
      const _userobj:User ={
        id: this.registerForm.value.id as string,
        password: this.registerForm.value.password as string,
        email: this.registerForm.value.email as string,
        role:'user'
      }
      if(!this.isDuplicate){
      this.store.dispatch(beginRegister({userdata:_userobj}))
      this.store.dispatch(showalert({message:"Registered Successfully", resulttype:'pass'}))
    }
    else{
      this.store.dispatch(showalert({message:"User Already exist", resulttype:'fail'}))
    }
    }
    else {
      this.store.dispatch(showalert({message:"Failed to register",resulttype:'fail'}))
    }
  }

  proceedLogin(){
    if(this.loginForm.valid){
      const _obj:UserCred ={
        id : this.loginForm.value.username as string,
        password: this.loginForm.value.password as string,
      }
      this.store.dispatch(beginLogin({usercred:_obj}))
    }
  }

  funcDuplicateUser(){
    const id = this.registerForm.value.id as string;
    if(id!=''){
      this.store.dispatch(duplicateUser({id:id}));
      this.store.select(isDuplicateUser).subscribe(item => {
        const isexist = item ;
        if(isexist){
          this.isDuplicate =true;
          this.registerForm.controls.id.reset();
          this.registerForm.controls.email.reset();
          this.registerForm.controls.password.reset();
        }
      })
    }
  }

  // proceedLogin() {
  //   if(this.loginForm.valid){
  //     // this.auth.getByCode(this.loginForm.value.username).subscribe( res => {
  //     //   this.userData = res;
  // //       if(this.userData.password === this.loginForm.value.password){
  // //         sessionStorage.setItem('username',this.userData.id)
  // //         sessionStorage.setItem('userRole', this.userData.role)
  // //         this.router.navigate(['home'])
  // //       }
  // //       else{
  // //         alert("Wrong Credentials")
  // //       }
  // //     })
  // //   }
  // //   else{
  // //     alert("Wrong Credentials")
  // //   }

  
  // }

}
