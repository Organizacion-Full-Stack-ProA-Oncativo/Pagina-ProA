import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Estudiante } from '../models/estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http:HttpClient) {}

  url:string = "https://localhost:44358/api/Estudiante";

  getEstudiante() {
    return this.http.get(this.url);
  }

  addEstudiante(estudiante:Estudiante):Observable<Estudiante> {
    return this.http.post<Estudiante>(this.url, estudiante);
  }


  updateEstudiante(id:number, estudiante:Estudiante):Observable<Estudiante> {
    return this.http.put<Estudiante>(this.url + `/${id}`, estudiante);
  }

  deleteEstudiante(id:number) {
    return this.http.delete(this.url + `/${id}`);
  }
}