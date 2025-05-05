// src/app/guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const isLoggedIn = auth.isLoggedIn(); // assuming it's a method
  if(!isLoggedIn){
    router.navigate(['login']);
  return false; // return true if logged in, false otherwise
  }
  return isLoggedIn;
};
