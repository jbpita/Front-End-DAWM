import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    InicioSesionRoutingModule,
    ReactiveFormsModule
  ]
})
export class InicioSesionModule { }
