import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';


const routes: Routes = [{
   path: '',
   component: Assignment1Component
},{
  path:'bms',
  component: Assignment2Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
