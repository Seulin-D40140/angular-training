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
  
  listTrainings : Training[] = []

  ngOnInit(): void {
    this.listTrainings = 
    [
      {id:1 , name:'java' , description:'formation java se 8 sur 5 jours' , price:1500 , quantity:1},
      {id:2 , name:'dotnet' , description:'formation dotnet sur 3 jours' , price:1000 , quantity:1},
      {id:3 , name:'python' , description:'formation python sur 5 jours' , price:1500 , quantity:1}
    ] 
   }

  onAddToCart( training: Training)
  {
    this.cartservice.addTraining(training)
    this.router.navigateByUrl('cart');
  }
}
