import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { Customer } from '../model/customer.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

 

export class CartService {
  
  
  listCustomer : Customer[] | undefined;
  


  constructor( private router : Router) { }

  listCart : Training[] = []
  
  
  getLocalStorage(key : string)
  {
      let data = localStorage.getItem(key)||""
      return JSON.parse(data)
  }

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
    localStorage.setItem('training' , JSON.stringify(this.listCart))
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
    localStorage.setItem('training' , JSON.stringify(this.listCart))
  }

  getCustomer()
  {
    if( localStorage.getItem('user') != null)
    {
      return localStorage.getItem('user')
    }
    else
    {
      return ""
    }
  }


  validationCart()
  {
    if(this.listCart.length > 0)
    {
      this.router.navigateByUrl('Customer');
    }
  }
}
