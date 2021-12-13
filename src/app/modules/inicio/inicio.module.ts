import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InsigniasComponent } from './components/insignias/insignias.component';



@NgModule({
  declarations: [
    InicioComponent,
    InsigniasComponent,

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
