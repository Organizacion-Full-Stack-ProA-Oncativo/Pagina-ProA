using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace back_mascota.Models
{
    public class GestorEstudiante
    {

        public List<Estudiante> getEstudiante()
        {
            List<Estudiante> lista = new List<Estudiante>();
            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "estudiante_all";
                cmd.CommandType = CommandType.StoredProcedure;

                SqlDataReader dr = cmd.ExecuteReader();

                while(dr.Read())
                {
                    int id_estudiante = dr.GetInt32(0);
                    string nombre = dr.GetString(1).Trim();
                    string apell = dr.GetString(2);
                    string correo_electronico = dr.GetString(3).Trim();
                    int numero_telefono = dr.GetInt32(4);

                    Estudiante estudiante = new Estudiante(id_estudiante, nombre, apell, correo_electronico, numero_telefono);


                    lista.Add(estudiante);
                }

                dr.Close();
                conn.Close();
            }

            return lista;
        }

        public bool addEstudiante(Estudiante estudiante)
        {
            bool res = false;

            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                cmd.CommandText = "estudiante_add";
                cmd.CommandType = CommandType.StoredProcedure;


                cmd.Parameters.AddWithValue("@nombre", estudiante.nombre);
                cmd.Parameters.AddWithValue("@apellido", estudiante.apellido);
                cmd.Parameters.AddWithValue("@correo_electronico", estudiante.correo_electronico);
                cmd.Parameters.AddWithValue("@numero_telefono", estudiante.numero_telefono);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch(Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }

                return res;
            }
        }

        public bool updateEstudiante(int id, Estudiante estudiante)
        {
            bool res = false;

            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                cmd.CommandText = "estudiante_update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@nombre", estudiante.nombre);
                cmd.Parameters.AddWithValue("@apellido", estudiante.apellido);
                cmd.Parameters.AddWithValue("@correo_electronico", estudiante.correo_electronico);
                cmd.Parameters.AddWithValue("@numero_telefono", estudiante.numero_telefono);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }

                return res;
            }
        }

        public bool deleteEstudiante(int id)
        {
            bool res = false;

            string strConn = ConfigurationManager.ConnectionStrings["BDLocal"].ToString();

            using (SqlConnection conn = new SqlConnection(strConn))
            {
                SqlCommand cmd = conn.CreateCommand();
                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                cmd.CommandText = "estudiante_delete";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", id);

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                    res = true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    res = false;
                    throw;
                }
                finally
                {
                    cmd.Parameters.Clear();
                    conn.Close();
                }

                return res;
            }
        }
    }
}