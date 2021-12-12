import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppComponent } from './app.component';
import { AdmiModule } from './admi/admi.module';
import { AdmiConsoleComponent } from './admi/admi-console/admi-console.component';
import { FormProductoComponent } from './admi/form-producto/form-producto.component';
import { StadisticComponent } from './admi/stadistic/stadistic.component';
import { FormMarcaComponent } from './admi/form-marca/form-marca.component';
import { UserComponent } from './admi/user/user.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AdmiModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    GoogleChartsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
