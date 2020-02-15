import { Entry } from '../entities';
import * as Actions from './user.actions';
import deepFreeze from 'deep-freeze';
import { userReducer, USER_INITIAL_STATE } from './user.reducer';
import { UserState } from './store';

describe('Testing user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      isLoggedIn: false,
      user: ''
    });
  });

  it('should login sucessfully', () => {
    expect(userReducer(USER_INITIAL_STATE, { type: Actions.LOGIN, user: 'gate'})).toEqual({
      isLoggedIn: true,
      user: 'gate'
    });
  });

  it('should logout sucessfully', () => {
    let stateBefore = {
        isLoggedIn: true,
        user: 'gate'
    } as UserState; 
    deepFreeze(stateBefore);

    expect(userReducer(stateBefore, { type: Actions.LOGOUT })).toEqual({
      isLoggedIn: false,
      user: ''
    } as UserState);
  });

});
