using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_mascota
{
    public class Raza
    {
        public int idRaza { get; set; }
        public string nombre { get; set; }
        public int idTipo { get; set; }

        public Raza() { }

        public Raza(int id, string Nombre, int tipo) {
            idRaza = id;
            nombre = Nombre;
            idTipo = tipo;
        }
    }
}