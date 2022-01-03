import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdmiModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'admi-console' , component: AdmiConsoleComponent, children: [
        {path: 'form-product', component:  FormProductoComponent},
        {path: 'form-marca', component:  FormMarcaComponent},
        {path: 'stadistic' , component: StadisticComponent},
        {path: 'user' , component: UserComponent}
      ]}
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
