import { createEntityAdapter } from "@ngrx/entity";
import { User, UserModel } from "../Model/User.model";

export const UserAdapter = createEntityAdapter<User>();

export const UserState:UserModel = UserAdapter.getInitialState({
    isDuplicate: false
});