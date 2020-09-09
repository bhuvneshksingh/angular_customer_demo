import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/CustomerList';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CustomerDataService} from '../app/DataService/CustomerDataService'
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerupdateComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
