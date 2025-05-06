import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck {
  isadmin = false;
  isnav = false;
  constructor(private auth:AuthService,private router:Router) {}

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if(currenturl=="/login"){
      this.isnav = false;
    }
    else{
      this.isnav = true
    }

    if(this.auth.getUserRole() === 'admin'){
      this.isadmin = true;
    }
    else{
      this.isadmin = false;
    }

  }
}
