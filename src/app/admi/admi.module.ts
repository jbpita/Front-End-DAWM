import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdmiConsoleComponent } from './admi-console/admi-console.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { SidebarOptionComponent } from './sidebar-option/sidebar-option.component';



@NgModule({
  declarations: [
    AdmiConsoleComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    FormProductoComponent,
    SidebarOptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AdmiConsoleComponent,
  ]
})
export class AdmiModule { }
