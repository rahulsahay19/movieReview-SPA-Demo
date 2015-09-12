using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Movie_Review_Demo.Startup))]
namespace Movie_Review_Demo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
