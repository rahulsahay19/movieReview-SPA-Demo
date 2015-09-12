using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using Movie_Review_API.Models;
using Newtonsoft.Json;

namespace ngCommerce.WEB_API.Models
{
    public class movieRepo
    {
        /// <summary>
        /// Creates a new movie with default values
        /// </summary>
        /// <returns></returns>
        internal movies Create()
        {
            //Null Container for the time being
            movies movies = new movies();

            return movies;
        }

        /// <summary>
        /// Retrieves the list of movies.
        /// </summary>
        /// <returns></returns>
        internal List<movies> fetchMovies()
        {
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/movies.json");

            var json = System.IO.File.ReadAllText(filePath);

            var movies = JsonConvert.DeserializeObject<List<movies>>(json);

            return movies;
        }

        /// <summary>
        /// Saves a new movie.
        /// </summary>
        /// <param name="movie"></param>
        /// <returns></returns>
        internal movies Save(movies movie)
        {
            // Read in the existing movies
            var movies = this.fetchMovies();

            // Assign a new Id
            var maxId = movies.Max(p => p.id);
            movie.id = maxId + 1;
            movies.Add(movie);

            WriteToFile(movies);
            return movie;
        }

        /// <summary>
        /// Updates an existing movie
        /// </summary>
        /// <param name="id"></param>
        /// <param name="movie"></param>
        /// <returns></returns>
        internal movies Save(int id, movies movie)
        {
            // Read in the existing products
            var movies = this.fetchMovies();

            // Locate and replace the item
            var itemIndex = movies.FindIndex(p => p.id == movie.id);
            if (itemIndex > 0)
            {
                movies[itemIndex] = movie;
            }
            else
            {
                return null;
            }

            WriteToFile(movies);
            return movie;
        }


        private bool WriteToFile(List<movies> movies)
        {
            // Write out the Json
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/movies.json");

            var json = JsonConvert.SerializeObject(movies, Formatting.Indented);
            System.IO.File.WriteAllText(filePath, json);

            return true;
        }

    }
}