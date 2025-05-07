import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgAuthService } from '../../services/ng-auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck {
  isadmin = false;
  isnav = false;
  isloggedIn = false;
  constructor(private auth:AuthService,private router:Router,private service :NgAuthService) {}

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if(currenturl=="/login"){
      this.isnav = false;
    }
    else{
      this.isnav = true
    }

    if(this.service.getUserRole() === 'admin'){
      this.isadmin = true;
    }
    else{
      this.isadmin = false;
    }
    if(this.service.isLoggedIn()){
      this.isloggedIn = true;
    }
    else {
      this.isloggedIn = false
    }

  }

  logout(){
    this.isloggedIn = false;
    this.router.navigate(['/login']);
  }

}
