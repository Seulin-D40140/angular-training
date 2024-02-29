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

  listTrainings = 
    [
      {id:1 , name:'java' , description:'formation java se 8 sur 5 jours' , price:1500 , quantity:1},
      {id:2 , name:'dotnet' , description:'formation dotnet sur 3 jours' , price:1000 , quantity:1},
      {id:3 , name:'python' , description:'formation python sur 5 jours' , price:1500 , quantity:1}
    ]
  
  getListTraining()
  {
    return this.listTrainings
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
  }

  addTraining(training: Training)
  {
    let existTriningInCart = this.listCart.find( tr => tr.id == training.id)
    if(existTriningInCart)
    {
      existTriningInCart.quantity += training.quantity
      console.log("q act :" + existTriningInCart.quantity + " q ajout : " + training.quantity)
    }
    else
    {
      this.listCart.push(training)
    }
  }
}
