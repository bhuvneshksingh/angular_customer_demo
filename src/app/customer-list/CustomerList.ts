import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerDataService } from '../DataService/CustomerDataService'
import { Customer } from 'src/Models/Customer'
import { Router } from '@angular/router';
import { CustomerupdateComponent } from '../customerupdate/customerupdate.component';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass']
})
export class CustomerListComponent implements OnInit {


  custlist: Customer[];
  dataavailbale: Boolean = false;
  tempcust: Customer

  constructor(private dataservce: CustomerDataService, private route: Router) {

  }

  ngOnInit() {
    this.LoadData();

  }

  LoadData() {

    this.dataservce.getCustomer().subscribe((tempdate) => {
      this.custlist = tempdate;
      console.log(this.custlist);
      if (this.custlist.length > 0) {
        this.dataavailbale = true;
      }
      else {
        this.dataavailbale = false;
      }


    }
    )
      , err => {
        console.log(err);
      }
  }
  deleteconfirmation(id: string) {

    if (confirm("Are you sure you want to delete this ?")) {
      this.tempcust = new Customer();
      this.tempcust.id = id;
      this.dataservce.DeleteCustomer(this.tempcust).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }
  @ViewChild('cust.dd') addcomponent: CustomerAddComponent
  @ViewChild('regForm') editcomponent: CustomerupdateComponent



  loadAddnew() {
    this.addcomponent.objemp.email = ""
    this.addcomponent.objemp.firstname = ""
    this.addcomponent.objemp.lastname = ""
    this.addcomponent.objemp.id = ""
    this.addcomponent.objemp.gender = 0
  }

  loadnewForm(id: string, firstname: string, lastname: string, email: string, gender: number) {
    console.log(gender);
    this.editcomponent.objemp.email = email
    this.editcomponent.objemp.firstname = firstname
    this.editcomponent.objemp.lastname = lastname
    this.editcomponent.objemp.id = id
    this.editcomponent.objemp.gender = gender

  }

  RefreshData() {
    this.LoadData();
  }

}
