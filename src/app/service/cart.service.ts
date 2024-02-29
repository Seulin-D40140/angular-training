import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})

 

export class CartService {
  
  
  listCustomer : Customer[] | undefined;


  constructor() { }

  listCart : Training[] = []

  

  getListCart()
  {
	  return this.listCart
  }

  removeTrainingFromCart(training : Training)
  {
    let existTriningInCart = this.listCart.find( tr => tr.id == training.id)
    if(existTriningInCart && existTriningInCart.quantity > 1)
    {
      existTriningInCart.quantity--
    }
    else
    {
      this.listCart.splice(this.listCart.indexOf(training) , 1 )
    }
  }

  addTraining(training: Training)
  {
    let existTriningInCart = this.listCart.find( tr => tr.id == training.id)
    if(existTriningInCart)
    {
      existTriningInCart.quantity += training.quantity
    }
    else
    {
      this.listCart.push(training)
    }
  }
}
