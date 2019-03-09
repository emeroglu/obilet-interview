using System.Web.Mvc;
using System.Web.Routing;

namespace obilet.Configuration
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapMvcAttributeRoutes();
        }
    }
}