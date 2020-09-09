import { Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/Models/Customer';
import { Router } from '@angular/router';
import {CustomerDataService} from '../DataService/CustomerDataService'
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.sass']
})
export class CustomerAddComponent implements OnInit {
  
  @Input()  cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempcust:Customer;
  @Input() objemp :Customer=new Customer();;
  @ViewChild('closeBtn') cb: ElementRef;
constructor(private dataservice:CustomerDataService,private route:Router) {
 
 }
 
  ngOnInit() {
  // this.ResetValues();
  }

  ResetValues(){  
   
   
  }  
 
  Register(regForm:NgForm){  
   
    this.objtempcust=new Customer();
    this.objtempcust.email=regForm.value.email;
    this.objtempcust.firstname=regForm.value.firstname;
    this.objtempcust.lastname=regForm.value.lastname;
    this.objtempcust.gender=regForm.value.gender;
    
  this.dataservice.AddCustomer(this.objtempcust).subscribe(res=>{
    alert("Customer Added successfully");
    this.TakeHome();
}
  )
  
  
  } 
  TakeHome(){
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}
