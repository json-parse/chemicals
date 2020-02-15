import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../redux/store';
import { StorageActions } from '../../redux/storage.actions';
import { Entry } from 'src/app/entities';

export interface Direction {
  value: number;
  viewValue: string;
}

export interface Type {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})

export class AvailabilityComponent implements OnInit {

  ticketForm: FormGroup;
  chemicals: FormArray;

  directions: Direction[] = [
    {value: 0, viewValue: 'Arrival'},
    {value: 1, viewValue: 'Despatch'}
  ];

  types: Type[] = [
    {value: 0, viewValue: 'A'},
    {value: 1, viewValue: 'B'},
    {value: 2, viewValue: 'C'}
  ];

  constructor(private router: Router, private fb: FormBuilder, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ticketForm = this.fb.group({
      inOut: ['', Validators.required],
      chemicals: this.fb.array([ this.createItem() ])
    });

    this.chemicals = this.ticketForm.get('chemicals') as FormArray;
  }

  createItem(): FormGroup{
    return this.fb.group({
      type: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }
  addItem(): void {
    this.chemicals.push(this.createItem());
  }

  removeItem(): void{
    this.chemicals.removeAt(this.chemicals.length-1);
  }

  onSubmit(){

    if (this.ticketForm.valid){
      let tempTicket = this.chemicals.value;
      tempTicket.forEach((element: Entry) => {
        element.warehouse = 1; //to remove when api implemented
        element.inOut = this.ticketForm.value.inOut;
      });

      this.ngRedux.dispatch({ type: StorageActions.ADD_WH_SUCCESS, payload: tempTicket });
      console.log("ticket", this.ngRedux.getState().storage.tempTicket);

      this.router.navigate(['/gate/location']);
    }
  }

}
