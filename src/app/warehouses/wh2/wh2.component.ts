import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../redux/store';
import { Entry } from 'src/app/entities';
import { StorageActions } from 'src/app/redux/storage.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wh2',
  templateUrl: './wh2.component.html',
  styleUrls: ['./wh2.component.css']
})
export class Wh2Component implements OnInit {
  nr: number = 2;
  entries: Entry[] = [];
  commentForm: FormGroup;
  isLoading: boolean;

  constructor(private ngRedux: NgRedux<IAppState>, private storageActions: StorageActions, private fb: FormBuilder) { }

  ngOnInit() {
    this.storageActions.getEntries();

    this.ngRedux.select(state => state.storage).subscribe(res => {
      this.entries = res.pendingEntries;
      this.isLoading = res.isLoading;
    });
    
    this.commentForm = this.fb.group({
      msg: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]]
    });
  }

  completed(entry: Entry){
   //this.ngRedux.dispatch({ type: REMOVE_STORAGE_PENDING_SUCCESS, id: entry.id});
   this.storageActions.removeEntry(entry._id);
    console.log(entry);
  }

  onSubmit(entry: Entry) {
    if (this.commentForm.valid) {
      entry.message = this.commentForm.value.msg;
      console.log(entry);
      this.storageActions.createMsg(entry);
    }
  }

}
