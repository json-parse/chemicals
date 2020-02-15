import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { LOGIN } from '../redux/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    console.log('isLoggedIn', this.ngRedux.getState().user.isLoggedIn);
  }

  onSubmit(){
    if (this.loginForm.valid) {
      this.ngRedux.dispatch({ type: LOGIN, user: this.loginForm.value.username});
      
      console.log('isLoggedIn', this.ngRedux.getState().user.isLoggedIn);
      
      if(this.ngRedux.getState().user.user === "gate"){
        this.router.navigate(['gate']);
      }else if(this.ngRedux.getState().user.user === "wh1"){
        this.router.navigate(['wh1']);
      }else if(this.ngRedux.getState().user.user === "wh2"){
        this.router.navigate(['wh2']);
      }else{
        this.router.navigate(['login']);
      }
      
    }
  }

}
