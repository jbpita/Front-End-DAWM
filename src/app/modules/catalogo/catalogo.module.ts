import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PresProductoComponent } from './components/pres-producto/pres-producto/pres-producto.component';
import { BuscadoresComponent } from './components/buscadores/buscadores.component';


@NgModule({
  declarations: [
    CatalogoComponent,
    PresProductoComponent,
    BuscadoresComponent,
    
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    SharedModule
  ]
})
export class CatalogoModule { }
