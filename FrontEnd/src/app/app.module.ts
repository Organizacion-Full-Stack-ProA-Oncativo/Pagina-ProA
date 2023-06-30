import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PreinscripcionesComponent } from './pages/preinscripciones/preinscripciones.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    HorariosComponent,
    GaleriaComponent,
    NoticiasComponent,
    PreinscripcionesComponent,
    ProfesoresComponent,
    AlumnosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
