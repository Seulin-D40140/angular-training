import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { CartComponent } from './component/cart/cart.component';
import { CustomerComponent } from './component/customer/customer.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';

const routes: Routes = 
[
  { path : 'trainings', component : TrainingsComponent },
  { path : 'Customer', component : CustomerComponent },
  { path : 'authentification' , component : AuthentificationComponent },
  { path : 'cart', component : CartComponent },
  { path : '', redirectTo: 'trainings' , pathMatch: "full" },
  { path : '**', redirectTo: '404' }

];

@NgModule(
{
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
