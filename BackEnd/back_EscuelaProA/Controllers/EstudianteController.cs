using back_mascota.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace back_mascota.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "GET, POST, PUT, DELETE, OPTIONS")]
    public class EstudianteController : ApiController
    {
        // GET: api/Estudiante
        public IEnumerable<Estudiante> Get()
        {
            GestorEstudiante gEstudiante = new GestorEstudiante();
            return gEstudiante.getEstudiante();
        }

        // GET: api/Estudiante/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Estudiante
        public bool Post([FromBody]Estudiante estudiante)
        {
            GestorEstudiante gEstudiante = new GestorEstudiante();
            bool res = gEstudiante.addEstudiante(estudiante);

            return res;
        }

        // PUT: api/Estudiante/5
        public bool Put(int id, [FromBody]Estudiante estudiante)
        {
            GestorEstudiante gEstudiante = new GestorEstudiante();
            bool res = gEstudiante.updateEstudiante(id, estudiante);

            return res;
        }

        // DELETE: api/Estudiante/5
        public bool Delete(int id)
        {
            GestorEstudiante gEstudiante = new GestorEstudiante();
            bool res = gEstudiante.deleteEstudiante(id);

            return res;
        }
    }
}
