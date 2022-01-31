import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarritoComponent,
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarritoModule { }
