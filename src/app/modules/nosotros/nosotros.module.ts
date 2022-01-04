import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TeamsComponent } from './components/teams/teams.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';


@NgModule({
  declarations: [
    NosotrosComponent,
    ServiciosComponent,
    TeamsComponent,
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
 
  ]
})
export class NosotrosModule { }
