import { createAction, props } from "@ngrx/store"
import { User, UserCred } from "../Model/User.model"

export const BEGIN_REGISTER ='[auth] begin register';
export const BEGIN_LOGIN ='[auth] begin Login';
export const LOGIN_SUCCESS = '[auth] login success';


export const beginRegister = createAction(BEGIN_REGISTER,props<{userdata:User}>());
export const beginLogin = createAction(BEGIN_LOGIN,props<{usercred:UserCred}>());
export const loginSuccess = createAction(LOGIN_SUCCESS);