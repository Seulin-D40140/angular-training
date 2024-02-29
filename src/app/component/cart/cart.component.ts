import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  
  constructor( private cartcervice : CartService) { }


  ngOnInit(): void { }

  displayListCart()
  {
    return this.cartcervice.getListCart()
  }
  
  removeFromCart(training : Training)
  {
    this.cartcervice.removeTrainingFromCart(training)
  }
}
