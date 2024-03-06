import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { Customer } from '../model/customer.model';

@Injectable(
{
  providedIn: 'root'
})

 

export class CartService 
{
  listCustomer : Customer[] | undefined;
  
  constructor() { }

  listTrainings : Training[] = []
  user = new Customer ( "" , "" , "" , "" , "")
  
  getLocalStorageTrainings()
  {
      let data = localStorage.getItem('trainings')|| ""
      return this.listTrainings = JSON.parse(data)
  }

  getLocalStorageUser()
  {
      let data = localStorage.getItem('user')||""
      return this.user = JSON.parse(data)
  }

  getListCart()
  {
	  return this.listTrainings
  }

  removeTrainingFromCart(training : Training)
  {
    let existTriningInCart = this.listTrainings.find( tr => tr.id == training.id)
    if(existTriningInCart && existTriningInCart.quantity > 1)
    {
      existTriningInCart.quantity--
    }
    else
    {
      this.listTrainings.splice(this.listTrainings.indexOf(training) , 1 )
    }
    localStorage.setItem('trainings' , JSON.stringify(this.listTrainings))
  }

  addTraining(training: Training)
  {
    let existTriningInCart = this.listTrainings.find( tr => tr.id == training.id)
    if(existTriningInCart)
    {
      existTriningInCart.quantity += training.quantity
    }
    else
    {
      this.listTrainings.push(training)
    }
    localStorage.setItem('trainings' , JSON.stringify(this.listTrainings))
  }

  getuser ()
  {
    return this.user
  }

  setLocalStorage()
  {
    localStorage.setItem('user' , JSON.stringify(this.user))
  }

  calculTotal()
  {
    return this.listTrainings.reduce((sum , e ) => sum += e.price*e.quantity,0)
  }

  getCart() : Training [] | undefined {   
    this.listTrainings = this.getLocalStorageTrainings() 
    if(this.listTrainings.length > 0)
    return Array.from(this.listTrainings.values());
    else return undefined;
  }
}
