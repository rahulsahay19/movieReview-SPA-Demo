using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Movie_Review_API.Models
{
    public class movies
    {
        public int id { get; set; }
        public string movieName { get; set; }
        public string releaseYear { get; set; }
        public string directorName { get; set; }
        public int noOfReviews { get; set; }
    }
}