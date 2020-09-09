import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { CustomerDataService } from '../DataService/CustomerDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/Models/Customer';
@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.sass']
})
export class CustomerupdateComponent implements OnInit {

  constructor(private dataservice: CustomerDataService, private route: Router) {

  }
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn') cb: ElementRef;
  ngOnInit() {
  }

  @Input() reset: boolean = false;
  @ViewChild('regForm') myForm: NgForm;
  @Input() isReset: boolean = false;
  objtempcust: Customer;
  @Input() objemp: Customer = new Customer();

  EditCustomer(regForm: NgForm) {


    this.dataservice.EditCustomer(this.objemp).subscribe(res => {
      alert("Customer updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();

    },
    )}

}
