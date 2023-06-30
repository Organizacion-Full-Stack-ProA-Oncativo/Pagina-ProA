using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_mascota.Models
{
    public class Estudiante
    {
        public int id_estudiante { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string correo_electronico { get; set; }
        public int numero_telefono { get; set; }
        public int Id { get; }
        public string Desc { get; }

        public Estudiante() { }

        public Estudiante(int id, string Nombre, string apell, string correo, int telefono)
        {
            id_estudiante = id;
            nombre = Nombre;
            apellido = apell;
            correo_electronico = correo;
            numero_telefono = telefono;
        }

        public Estudiante(string Nombre, string apell, string correo, int telefono)
        {
            nombre = Nombre;
            apellido = apell;
            correo_electronico = correo;
            numero_telefono = telefono;
        }

        public Estudiante(int id, string nombre, string apell, string correo)
        {
            id_estudiante = id;
            this.nombre = nombre;
            this.apellido = apell;
            correo_electronico = correo;
        }
    }

    
}