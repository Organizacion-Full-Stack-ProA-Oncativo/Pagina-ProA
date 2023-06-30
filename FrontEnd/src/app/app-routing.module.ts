import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PreinscripcionesComponent } from './pages/preinscripciones/preinscripciones.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';

const routes: Routes = [ {path: 'inicio', component: InicioComponent},
{path: 'horarios', component: HorariosComponent},
{path: 'galeria', component: GaleriaComponent},
{path: 'noticias', component: NoticiasComponent},
{path: 'preinscripciones', component: PreinscripcionesComponent},
{path: 'profesores', component: ProfesoresComponent},
{path: 'alumnos', component: AlumnosComponent},
{path: '', redirectTo: '/inicio', pathMatch: 'full'},
]


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
