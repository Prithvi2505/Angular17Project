import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck {
  isadmin = false;
  constructor(private auth:AuthService) {}

  ngDoCheck(): void {

    if(this.auth.getUserRole() === 'admin'){
      this.isadmin = true;
    }
    else{
      this.isadmin = false;
    }

  }
}
