import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = 
[
  { path : 'trainings', component : TrainingsComponent },
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
