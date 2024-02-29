import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  
  constructor( public cartservice : CartService , private router : Router) { }
  
  ngOnInit(): void { }
  

  displayTrainings()
  {
    return this.cartservice.getListTraining()
  }  

  onAddToCart( training: Training)
  {
    console.log(training.name + " , quantity : " + training.quantity)
    this.cartservice.addTraining(training)
    this.router.navigateByUrl('cart');
  }
}
