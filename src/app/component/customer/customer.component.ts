import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public cartservice : CartService , private router : Router) { }

  ngOnInit(): void 
  {
    this.cartservice.user = this.cartservice.getLocalStorage('user')
  }
  
  onSaveCustomer(customer : Customer)
  {
    console.log(customer) 
  }

  returnToCart()
  {
    this.router.navigateByUrl('cart');
  }

  getCustomer()
  {
    return this.cartservice.getuser()
  }

}
