import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { HorariosComponent } from './horarios/horarios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PreinscripcionesComponent } from './preinscripciones/preinscripciones.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AlumnosComponent } from './alumnos/alumnos.component';


@NgModule({
  declarations: [
    InicioComponent,
    HorariosComponent,
    GaleriaComponent,
    NoticiasComponent,
    PreinscripcionesComponent,
    ProfesoresComponent,
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InicioComponent,
    HorariosComponent,
    GaleriaComponent,
    NoticiasComponent,
    PreinscripcionesComponent,
    ProfesoresComponent,
    AlumnosComponent
  ]

})
export class PagesModule { }
