import { NgAuthService } from "../../services/ng-auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { beginLogin, beginRegister, duplicateUser, duplicateUserSuccess } from "./User.action";
import { catchError, exhaustMap,map,of, switchMap } from "rxjs";
import { Router } from "@angular/router";
import { showalert } from "../Common/App.Action";
import { Injectable } from "@angular/core";

@Injectable()
export class UserEffects {
    constructor(private action$:Actions,private service:NgAuthService,private router: Router){}

    _userRegister = createEffect(() => 
    this.action$.pipe(
        ofType(beginRegister),
        exhaustMap((action) => {
            return this.service.UserRegisteration(action.userdata).pipe(
                map(() => {
                    return showalert({message:"Registered successfully", resulttype:"pass"})
                }),
                catchError((_error) => of(showalert({message:"Registeration Failed",resulttype:"fail"})))
            )
        })
    )

    )
    _userLogin = createEffect(() => 
    this.action$.pipe(
        ofType(beginLogin),
        exhaustMap((action) => {
            return this.service.UserLogin(action.usercred).pipe(
                map((data) => {
                    if(data.length>0){
                        const _userdata =data[0]
                        this.service.SetUserToLocalStorage(_userdata)
                         this.router.navigate(['/home']);
                         return showalert({message:"Login Successfully :)", resulttype:"pass"})
                    }
                    return showalert({message:"Invalid Credentials , Please try again !!!",resulttype:"fail"})
                }),
                catchError((_error) => of(showalert({message:"Invalid Credentials , Please try again !!!",resulttype:"fail"})))
            )
        })
    )
    )
    _duplicateUser = createEffect(() => 
        this.action$.pipe(
            ofType(duplicateUser),
            switchMap((action) => {
                return this.service.DuplicateId(action.id).pipe(
                    switchMap((data) => {
                        if(data.length > 0){
                            return of(duplicateUserSuccess({isduplicate:true}),showalert({message:"User Id Already Exist ", resulttype:"fail"}))
                        }
                        return of(duplicateUserSuccess({isduplicate:false}))
                    }),
                    catchError((_error) => of(showalert({message:"Registeration Failed",resulttype:"fail"})))
                )
            })
        )
    
        )
    
}