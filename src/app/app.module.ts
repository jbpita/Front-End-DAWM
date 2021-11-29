import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdmiModule } from './admi/admi.module';
import { AdmiConsoleComponent } from './admi/admi-console/admi-console.component';
import { FormProductoComponent } from './admi/form-producto/form-producto.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdmiModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'admi-console' , component: AdmiConsoleComponent, children: [
        {path: 'form-product', component:  FormProductoComponent},
      ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
