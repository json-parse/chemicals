import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './redux/store';
import { LOGOUT } from './redux/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Toxic Chemical';
  user: string;
  constructor(private router: Router, private ngRedux: NgRedux<IAppState>){
  }

  ngOnInit() {
    this.ngRedux.select(state => state.user.user).subscribe(res => {
      this.user = res;
    });
  }

  logout(){
    this.ngRedux.dispatch({ type: LOGOUT });
    this.router.navigate(['/login']);
  }
}
