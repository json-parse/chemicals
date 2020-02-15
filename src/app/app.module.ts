import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule, MatBadgeModule, MatExpansionModule, MatRadioModule, MatCardModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatSelectModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailabilityComponent } from './gate/availability/availability.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GateComponent } from './gate/gate.component';
import { AuthGuard } from './guards/auth.guard';
import { WarehouseGuard } from './guards/warehouse.guard';
import { LoginComponent } from './login/login.component';
import { Wh1Component } from './warehouses/wh1/wh1.component';
import { Wh2Component } from './warehouses/wh2/wh2.component';
import { StorageLocationComponent } from './gate/storage-location/storage-location.component';
import { TypePipe } from './pipes/type.pipe';
import { InOutPipe } from './pipes/in-out.pipe';
import { PendingComponent } from './gate/pending/pending.component';
import { TicketsComponent } from './gate/pending/tickets/tickets.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from "@angular-redux/router";
import { IAppState, rootReducer } from './redux/store';
import { WarehousePipe } from './pipes/warehouse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MsgbtnPipe } from './pipes/msgbtn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    PageNotFoundComponent,
    GateComponent,
    LoginComponent,
    Wh1Component,
    Wh2Component,
    StorageLocationComponent,
    TypePipe,
    InOutPipe,
    PendingComponent,
    TicketsComponent,
    WarehousePipe,
    MsgbtnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule, MatBadgeModule, MatExpansionModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatGridListModule, MatSelectModule,
    NgReduxModule,
    HttpClientModule,
    NgReduxRouterModule.forRoot()
  ],
  providers: [AuthGuard, WarehouseGuard],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension, ngReduxRouter: NgReduxRouter){
    ngRedux.configureStore(rootReducer, {}, [], [devTools.isEnabled() ? devTools.enhancer(): f => f]);
    ngReduxRouter.initialize();
  }
}
 