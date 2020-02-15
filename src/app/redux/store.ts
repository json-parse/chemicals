import { Entry } from '../entities';
import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
import { storageReducer } from './storage.reducer';

export class UserState{
  isLoggedIn: boolean;
  user: string;
}

export class StorageState{
  tempTicket: Entry[];
  pendingEntries: Entry[];
  isLoading: boolean;
}

export class IAppState{
    user?: UserState;
    storage?: StorageState;
}

export const rootReducer = combineReducers<IAppState>({ 
  user: userReducer,
  storage: storageReducer
} as any)