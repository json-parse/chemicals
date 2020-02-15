import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router: Router, private ngRedux: NgRedux<IAppState>){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.ngRedux.getState().user.isLoggedIn===true && this.ngRedux.getState().user.user==='gate'){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
}
