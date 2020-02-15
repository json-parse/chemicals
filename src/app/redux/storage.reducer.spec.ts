import { StorageState } from './store';
import { Entry } from '../entities';
import { StorageActions } from './storage.actions';
import deepFreeze from 'deep-freeze';
import { storageReducer } from './storage.reducer';

describe('Testing storage reducer', () => {
  it('should return the initial state', () => {
    expect(storageReducer(undefined, {})).toEqual({
      tempTicket: [] as Entry[],
      pendingEntries: [] as Entry[],
      isLoading: false
    });
  });

  it('should add temporary ticket', () => {
    let stateBefore = {
        tempTicket: [] as Entry[],
        pendingEntries: [] as Entry[]
    } as StorageState; 
    deepFreeze(stateBefore);

    expect(storageReducer(stateBefore, { type: StorageActions.ADD_WH_SUCCESS, payload: [{
      type: 1,
      quantity: 32,
      warehouse: 1,
      inOut: 1
    }] })).toEqual({
      tempTicket: [
        {
          type: 1,
          quantity: 32,
          warehouse: 1,
          inOut: 1,
          date: new Date()
        }
      ] as Entry[],
      pendingEntries: [] as Entry[]
    } as StorageState);
  });

  it('should add to pending storage', () => {
    let stateBefore = {
        tempTicket: [
          {
            type: 1,
            quantity: 32,
            warehouse: 1,
            inOut: 1,
            date: null
          }
        ],
        pendingEntries: [],
        isLoading: false
    } as StorageState; 
    deepFreeze(stateBefore);

    const payload = {
      type: 1,
      quantity: 32,
      warehouse: 1,
      inOut: 1,
      date: null
    };

    expect(storageReducer(stateBefore, { type: StorageActions.ADD_STORAGE_PENDING_SUCCESS, payload })).toEqual({
      tempTicket: [
        {
          type: 1,
          quantity: 32,
          warehouse: 1,
          inOut: 1,
          date: null
        }
      ],
      pendingEntries: [
        {
          type: 1,
          quantity: 32,
          warehouse: 1,
          inOut: 1,
          date: null
        }
      ],
      isLoading: false
    } as StorageState);
  });

  it('should remove from pending storage', () => {
    let stateBefore = {
        tempTicket: [],
        pendingEntries: [
          {
            _id: '5d03a2fddbc7e5707843cb49',
            type: 1,
            quantity: 32,
            warehouse: 1,
            inOut: 1,
            date: null
          }
        ],
        isLoading: false
    } as StorageState; 
    deepFreeze(stateBefore);

    expect(storageReducer(stateBefore, { type: StorageActions.REMOVE_STORAGE_PENDING_SUCCESS, payload: '5d03a2fddbc7e5707843cb49' })).toEqual({
      tempTicket: [],
      pendingEntries: [],
      isLoading: false
    } as StorageState);
  });

});
