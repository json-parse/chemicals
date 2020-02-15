import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GateComponent } from './gate/gate.component';
import { AvailabilityComponent } from './gate/availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { WarehouseGuard } from './guards/warehouse.guard';
import { LoginComponent } from './login/login.component';
import { Wh1Component } from './warehouses/wh1/wh1.component';
import { Wh2Component } from './warehouses/wh2/wh2.component';
import { StorageLocationComponent } from './gate/storage-location/storage-location.component';
import { PendingComponent } from './gate/pending/pending.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gate', 
    component: GateComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AvailabilityComponent
      },
      {
        path: 'location',
        component: StorageLocationComponent
      }
    ]
  },

  {
    path: 'pending',
    component: PendingComponent,
    canActivate: [AuthGuard]
  },

  { path: 'wh1', 
  component: Wh1Component,
  canActivate: [WarehouseGuard]
  },

  { path: 'wh2', 
  component: Wh2Component,
  canActivate: [WarehouseGuard]
  },
  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //[RouterModule.forRoot(routes, {enableTracing: true})]
  exports: [RouterModule]
})
export class AppRoutingModule { }