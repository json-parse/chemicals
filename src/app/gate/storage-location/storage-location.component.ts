import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/entities';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../redux/store';
import { StorageActions } from '../../redux/storage.actions';

@Component({
  selector: 'app-storage-location',
  templateUrl: './storage-location.component.html',
  styleUrls: ['./storage-location.component.css']
})
export class StorageLocationComponent implements OnInit {
  entries: Entry[];
  inOrOut: number;
  isLoading: boolean;

  constructor(private ngRedux: NgRedux<IAppState>, private storageActions: StorageActions) { }

  ngOnInit() {
    this.ngRedux.select(state => state.storage.tempTicket).subscribe(res => {
      this.entries = res;
      this.inOrOut = res[0].inOut;
    });
  }

  addPending(){
    this.storageActions.createEntries(this.entries);
    this.ngRedux.select(state => state.storage.isLoading).subscribe(res => {
      this.isLoading = res;
    });
    console.log('is it loading', this.isLoading);
  }

}