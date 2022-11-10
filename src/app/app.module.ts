import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contador } from './contador/contador.component';
import { ListaComponent } from './lista/lista.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MainPageComponent } from './brawl-stars/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    Contador,
    ListaComponent,
    MainPageComponent
   
    
  ],
  imports: [
    BrowserModule,
    AlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
