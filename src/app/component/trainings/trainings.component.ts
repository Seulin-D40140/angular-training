import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  
  constructor( public cartservice : CartService , private router : Router,
                private apiservice : ApiService) { }
  
  listTrainings : Training[] = []
  error = null
  ngOnInit(): void 
  {
    this.getAllTrainings()
   }

  getAllTrainings()
  {
    this.apiservice.getTrainings().subscribe(
      {
        next : (data) => {this.listTrainings = data},
        error : (err) => {this.error = err.message},
        complete : () => {this.error = null}
      })
  }

  onAddToCart( training: Training)
  {
    this.cartservice.addTraining(training)
    this.router.navigateByUrl('cart');
  }
}
