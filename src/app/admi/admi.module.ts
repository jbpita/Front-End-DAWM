import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmiConsoleComponent } from './admi-console/admi-console.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    AdmiConsoleComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdmiConsoleComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class AdmiModule { }
