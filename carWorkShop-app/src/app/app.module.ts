import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MechanicComponent } from './mechanic/mechanic.component';
import { OrderComponent } from './order/order.component';
import { MechanicListComponent } from './mechanic-list/mechanic-list.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MechanicComponent,
    OrderComponent,
    MechanicListComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
