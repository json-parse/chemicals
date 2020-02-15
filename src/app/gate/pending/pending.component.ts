import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entities';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../redux/store';
import { StorageActions } from 'src/app/redux/storage.actions';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  entries: Entry[];
  isLoading: boolean;

  constructor(private ngRedux: NgRedux<IAppState>, private storageActions : StorageActions) { }

  ngOnInit() {
    this.storageActions.getEntries();

    this.ngRedux.select(state => state.storage).subscribe(res => {
      this.entries = res.pendingEntries;
      this.isLoading = res.isLoading;
    });
  }

  onBtnClicked(ticketid) {
    this.storageActions.removeEntry(ticketid);
    console.log(ticketid);
  }

}
