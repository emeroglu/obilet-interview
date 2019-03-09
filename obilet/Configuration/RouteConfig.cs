using System.Web.Mvc;
using System.Web.Routing;

namespace obilet.Configuration
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Route",
                url: "{controller}/{action}/{p1}/{p2}",
                defaults: new { controller = "Proxy", action = "Redirect" }
            );
        }
    }
}