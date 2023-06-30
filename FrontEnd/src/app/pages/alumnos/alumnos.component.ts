import { Component } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  estudiante:Estudiante = new Estudiante();
  datatable:any = [];

  constructor(private estudianteService:EstudianteService) {

  }

  ngOnInit(): void {
    this.onDataTable();
   }
 
   onDataTable(){
     this.estudianteService.getEstudiante().subscribe(res => {
       this.datatable = res;
       console.log(res);
     });
   }
 
   onAddEstudiante(estudiante:Estudiante):void {
     this.estudianteService.addEstudiante(estudiante).subscribe(res => {
       if(res) {
         alert(`El estudiante ${estudiante.nombre} se ha registrado con exito.`)
         this.clear();
         this.onDataTable();
       } else {
         alert('Error.')
       }
     });
   }
 
   onUpdateEstudiante(estudiante:Estudiante):void {
     this.estudianteService.updateEstudiante(estudiante.id, estudiante).subscribe(res => {
       if(res) {
         alert(`El estudiante ${estudiante.nombre} se ha modificado con exito.`)
         this.clear();
         this.onDataTable();
       } else {
         alert('Error.')
       } 
     });
   }
 
   onDeleteEstudiante(id:number):void{
     this.estudianteService.deleteEstudiante(id).subscribe(res => {
       if(res) {
         alert(`El estudiante se ha eliminado con exito.`)
         this.clear();
         this.onDataTable();
       } else {
         alert('Error.')
       } 
     });
   }
 
 
   onSetData(select:any) {
     this.estudiante.id = select.id_estudiante;
     this.estudiante.nombre = select.nombre;
     this.estudiante.apellido = select.apellido;
     this.estudiante.correo_electronico = select.correo_electronico;
     this.estudiante.numero_telefono = select.numero_telefono;
   }
 
   clear() {
     this.estudiante.id = 0;
     this.estudiante.nombre = "";
     this.estudiante.apellido = "";
     this.estudiante.correo_electronico = "";
     this.estudiante.numero_telefono = 0;
    }
}
