import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/service/Customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  router: any;

  constructor( private cutomerservice:CustomerService) { }
  customers!:Customer[]

  ngOnInit(): void {
    this.getdata()
  }
  public getdata(){
    this.cutomerservice.getcustomer().subscribe(data=>{
      this.customers = data;
       console.log(data);
    })
  }
  delete(id:number){
    this.cutomerservice.deleteCustomer(id).subscribe(data=>{
      console.log(data)
      this.getdata();
    })
  }  

  update(id:number){
    this.cutomerservice.getCustomerById(id).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/update',{id}])
    })
  }

}
