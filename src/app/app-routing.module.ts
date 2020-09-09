import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/CustomerList';
import { CustomerupdateComponent } from './customerupdate/customerupdate.component';

import { CustomerAddComponent } from './customer-add/customer-add.component';

const routes: Routes = [{path:'',component:CustomerListComponent},
{path:'Edit',component:CustomerupdateComponent},
{path:'Add',component:CustomerAddComponent},
{path:'Home',component:CustomerListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
