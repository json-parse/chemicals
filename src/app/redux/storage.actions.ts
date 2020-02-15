import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { IAppState } from "./store";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { Entry } from "../entities";

@Injectable({ providedIn: "root" })
export class StorageActions {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private api: ApiService,
    private router: Router,
  ) {}

static ADD_WH_SUCCESS = 'ADD_WH_SUCCESS';
static ADD_WH_ERROR = 'ADD_WH_ERROR';
static ADD_WH_LOADING = 'ADD_WH_LOADING';

static ADD_STORAGE_PENDING_SUCCESS = 'ADD_STORAGE_PENDING_SUCCESS';
static ADD_STORAGE_PENDING_ERROR = 'ADD_STORAGE_PENDING_ERROR';
static ADD_STORAGE_PENDING_LOADING = 'ADD_STORAGE_PENDING_LOADING';

static REMOVE_STORAGE_PENDING_SUCCESS = 'REMOVE_STORAGE_PENDING_SUCCESS';
static REMOVE_STORAGE_PENDING_ERROR = 'REMOVE_STORAGE_PENDING_ERROR';
static REMOVE_STORAGE_PENDING_LOADING = 'REMOVE_STORAGE_PENDING_LOADING';

static UPDATE_STORAGE_PENDING_SUCCESS = 'UPDATE_STORAGE_PENDING_SUCCESS';
static UPDATE_STORAGE_PENDING_ERROR = 'UPDATE_STORAGE_PENDING_ERROR';
static UPDATE_STORAGE_PENDING_LOADING = 'UPDATE_STORAGE_PENDING_LOADING';

static GET_STORAGE_PENDING_SUCCESS = 'GET_STORAGE_PENDING_SUCCESS';
static GET_STORAGE_PENDING_ERROR = 'GET_STORAGE_PENDING_ERROR';
static GET_STORAGE_PENDING_LOADING = 'GET_STORAGE_PENDING_LOADING';

  getEntries(): void {
    this.ngRedux.dispatch({type: StorageActions.GET_STORAGE_PENDING_LOADING});
    this.api.loadData().subscribe(result => {
        this.ngRedux.dispatch({
          type: StorageActions.GET_STORAGE_PENDING_SUCCESS,
          payload: result.filter(entry => entry.selector === 'maite')})
      }, error => {
        this.ngRedux.dispatch({
          type: StorageActions.GET_STORAGE_PENDING_ERROR,
          payload: error
        });
      });
  }

  createEntries(entries: Entry[]): void {
      entries.forEach(entry => {
          entry.selector = "maite";
          this.ngRedux.dispatch({
            type: StorageActions.ADD_STORAGE_PENDING_LOADING
          });

        this.api.createPending(entry).subscribe(
            result => {
              this.ngRedux.dispatch({
                type: StorageActions.ADD_STORAGE_PENDING_SUCCESS,
                payload: entry
              });
              this.router.navigate(['/pending']); 
            },
            error => {
              this.ngRedux.dispatch({
                type: StorageActions.ADD_STORAGE_PENDING_ERROR,
                payload: error
              });
            }
          );
      })

  }

  removeEntry(_id: String): void {
    this.ngRedux.dispatch({
        type: StorageActions.REMOVE_STORAGE_PENDING_LOADING
      });

    this.api.deletePending(_id).subscribe(
      result => {
        this.ngRedux.dispatch({
          type: StorageActions.REMOVE_STORAGE_PENDING_SUCCESS,
          payload: _id
        });
      },
      error => {
        this.ngRedux.dispatch({
          type: StorageActions.REMOVE_STORAGE_PENDING_ERROR,
          payload: error
        });
      }
    );
  }

  createMsg(msg: Entry): void {
        this.ngRedux.dispatch({
          type: StorageActions.UPDATE_STORAGE_PENDING_LOADING,
          payload: msg
        });

      this.api.createComment(msg).subscribe(
          result => {
            this.ngRedux.dispatch({
              type: StorageActions.UPDATE_STORAGE_PENDING_SUCCESS,
              payload: msg
            });
          },
          error => {
            this.ngRedux.dispatch({
              type: StorageActions.UPDATE_STORAGE_PENDING_ERROR,
              payload: error
            });
          }
        );


}

}