import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { AdmiConsoleComponent } from './admi-console/admi-console.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { SidebarOptionComponent } from './sidebar-option/sidebar-option.component';
import { StadisticComponent } from './stadistic/stadistic.component';
import { FormMarcaComponent } from './form-marca/form-marca.component';
import { GraphicStadisticComponent } from './graphic-stadistic/graphic-stadistic.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    AdmiConsoleComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    FormProductoComponent,
    SidebarOptionComponent,
    StadisticComponent,
    FormMarcaComponent,
    GraphicStadisticComponent,
    UserComponent,
    ListaProductosComponent,
    ReporteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    AdmiConsoleComponent,
    SharedModule
  ]
})
export class AdmiModule { }
