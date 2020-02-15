import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from 'src/app/entities';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  @Input() ticketInput: Entry;
 @Output() btnClicked: EventEmitter<any> = new EventEmitter<any>();
 
  constructor() { }

  ngOnInit() {
  }
  onDeleteBtnClick(ticketid) {
    this.btnClicked.emit(ticketid);
  }

}
