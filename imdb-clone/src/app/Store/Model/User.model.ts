import { EntityState } from "@ngrx/entity";

export interface User {
    id:string,
    email:string,
    password:string,
    role?:string
}

export interface UserModel extends EntityState<User>{
    
}