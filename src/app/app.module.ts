import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdmiModule } from './admi/admi.module';
import { AdmiConsoleComponent } from './admi/admi-console/admi-console.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdmiModule,
    RouterModule.forRoot([
      {path: 'admi-console' , component: AdmiConsoleComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
