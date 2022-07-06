import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  insert!:FormGroup
  id!:number

  constructor(private customerservice:CustomerService,private route :ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.insert = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      phone_number: new FormControl(''),
      city: new FormControl(''),
      flowers: new FormControl(''),
      gift: new FormControl(''),
    })
    this.getbyid();
  }

  public insertdara(){
    this.customerservice.createCustomer(this.insert.value).subscribe(data=>{
      console.log(data)
    })
  }

  public getbyid(){
    this.customerservice.getCustomerById(this.id).subscribe(data=>{
      console.log(data)
      this.insert = new FormGroup({
        first_name: new FormControl(data.first_name),
        last_name: new FormControl(data.last_name),
        phone_number: new FormControl(data.phone_number),
        city: new FormControl(data.city),
        flowers: new FormControl(data.flowers),
        gift: new FormControl(data.gift),
      })
    })
  }
  public update(){
    this.customerservice.updateCustomer(this.id,this.insert.value).subscribe(data=>{
      console.log(data)
    })
  } 

  submit(){
    console.log(this.insert.value);
    this.insertdara();
    this.update();
    this.insert.reset()
  }

}
