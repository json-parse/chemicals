import { StorageState } from "./store";
import { tassign } from "tassign";
import {StorageActions} from "./storage.actions";
import { Entry } from "../entities";

export const STORAGE_INITIAL_STATE: StorageState = {
    tempTicket: [],
    pendingEntries: [],
    isLoading: false
}

export function storageReducer(state: StorageState = STORAGE_INITIAL_STATE, action: any){
    switch(action.type){
        case StorageActions.GET_STORAGE_PENDING_LOADING:
        return tassign(state, {isLoading: true});

        case StorageActions.GET_STORAGE_PENDING_SUCCESS: 
        console.log('database', action.payload);
        return tassign(state, {pendingEntries: action.payload, isLoading: false});

        case StorageActions.GET_STORAGE_PENDING_ERROR:
        console.log('error', action.payload);
        return tassign(state, {isLoading: false});

        case StorageActions.ADD_WH_SUCCESS: 
          //let idcounter = state.pendingEntries.length;
        action.payload.forEach((entry: Entry) => {
            // entry.id = idcounter +1;
            // idcounter++;
        entry.date = new Date();
        });
        return tassign(state, {tempTicket: action.payload});

        case StorageActions.ADD_STORAGE_PENDING_LOADING:
        return tassign(state, {isLoading: true});
        
        case StorageActions.ADD_STORAGE_PENDING_SUCCESS:
        return tassign(state, { 
          pendingEntries: [...state.pendingEntries, action.payload], isLoading: false});

        case StorageActions.ADD_STORAGE_PENDING_ERROR:
        console.log('error', action.payload);
        return tassign(state, {isLoading: false});

        case StorageActions.UPDATE_STORAGE_PENDING_LOADING:
        return tassign(state, {isLoading: true});

        case StorageActions.UPDATE_STORAGE_PENDING_SUCCESS:
          let item = state.pendingEntries.find(i => i._id === action.payload._id);
          let index = state.pendingEntries.indexOf(item);
          let beforeItems = state.pendingEntries.slice(0, index);
          let afterItems = state.pendingEntries.slice(index+1);
        return tassign(state, { 
        pendingEntries: [...beforeItems, action.payload, ...afterItems], isLoading: false});

        case StorageActions.UPDATE_STORAGE_PENDING_ERROR:
        console.log('error', action.payload);
        return tassign(state, {isLoading: false});

        case StorageActions.REMOVE_STORAGE_PENDING_LOADING:
        return tassign(state, {isLoading: true});
        
        case StorageActions.REMOVE_STORAGE_PENDING_SUCCESS:
        return tassign(state, {
        pendingEntries: state.pendingEntries.filter(t => t._id !== action.payload), isLoading: false});
        
        case StorageActions.REMOVE_STORAGE_PENDING_ERROR:
        console.log('error', action.payload);
        return tassign(state, {isLoading: false}); 
    }
    return state;
}