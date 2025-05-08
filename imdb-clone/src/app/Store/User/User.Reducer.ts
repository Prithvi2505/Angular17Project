import { createReducer,on } from "@ngrx/store";
import { UserState } from "./User.state";
import { duplicateUserSuccess } from "./User.action";


const _userReducer = createReducer(UserState,
    on(duplicateUserSuccess,(state,action) => {
        return {...state,isDuplicate:action.isduplicate}
    })
)

export function Userreducer(state:any,action:any){
    return _userReducer(state,action);

}