// src/app/guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgAuthService } from '../services/ng-auth.service';
import { UserInfo } from '../Store/Model/User.model';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const service = inject(NgAuthService)
  const router = inject(Router);
  const userinfo:UserInfo = service.GetUserDataFromLocalStroage();
  // if(auth.isLoggedIn()){
  //   return true;
  // }
  // else {
  //   router.navigate(['/login']);
  //   return false;
  // }

  if(userinfo.id!='' && userinfo.id !=null){
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }


};
