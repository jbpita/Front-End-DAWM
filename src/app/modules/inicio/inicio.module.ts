import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InsigniasComponent } from './components/insignias/insignias.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { EquipoComponent } from './components/equipo/equipo.component';



@NgModule({
  declarations: [
    InicioComponent,
    InsigniasComponent,
    MarcasComponent,
    ServicioComponent,
    EquipoComponent,

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
