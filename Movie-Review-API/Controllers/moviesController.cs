using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Movie_Review_API.Models;
using ngCommerce.WEB_API.Models;

namespace Movie_Review_API.Controllers
{
    public class moviesController : ApiController
    {
        // GET api/movies
        public IEnumerable<movies> Get()
        {
            var moviesRepo = new movieRepo();
            return moviesRepo.fetchMovies();
        }

        // GET api/movies/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/movies
        public void Post([FromBody]string value)
        {
        }

        // PUT api/movies/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/movies/5
        public void Delete(int id)
        {
        }
    }
}
