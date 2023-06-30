using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_mascota.Models
{
    public class TipoMascota
    {
        public int idTipo { get; set; }
        public string nombre { get; set; }

        public TipoMascota() { }

        public TipoMascota(int id, string Nombre)
        {
            idTipo = id;
            nombre = Nombre;
        }
    }
}