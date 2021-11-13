import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '@app/components/components.module';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    HomeComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PagesModule { }
