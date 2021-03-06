import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes:Routes = [
   { path:'home', component:HomeComponent },
   { path:'pricing', component:PricingComponent },
   { path:'**', redirectTo:'/home', pathMatch:'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash:false } )
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
