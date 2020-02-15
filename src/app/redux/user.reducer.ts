import { IAppState, UserState } from "./store";
import { LOGIN, LOGOUT } from "./user.actions";
import { tassign } from "tassign";

export const USER_INITIAL_STATE: UserState = {
    isLoggedIn: false,
    user: ''
}

export function userReducer(state: UserState = USER_INITIAL_STATE, action: any){
    switch(action.type){
        case LOGIN: 
        return tassign(state, { isLoggedIn: true, user: action.user });
        
        case LOGOUT: 
        return USER_INITIAL_STATE;
    }
    return state;
}