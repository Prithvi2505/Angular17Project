import { NgAuthService } from "../../services/ng-auth.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { beginRegister } from "./User.action";
import { catchError, exhaustMap,map,of } from "rxjs";
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
    
}