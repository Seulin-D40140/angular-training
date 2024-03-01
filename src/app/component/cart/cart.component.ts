import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  
  listCart : Training[]  | undefined
  
  constructor( private cartservice : CartService , private router : Router) { }


  ngOnInit(): void { 
    this.cartservice.listCart = this.cartservice.getLocalStorage('training')
   }

  displayListCart()
  {
    return this.cartservice.getListCart()
  }
  
  removeFromCart(training : Training)
  {
    this.cartservice.removeTrainingFromCart(training)
  }

  validateCart()
  {
    this.cartservice.validationCart()
  }
}
