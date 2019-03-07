using System.Web.Mvc;
using System.Web.Routing;

namespace obilet.App_Start
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Route",
                url: "{controller}/{action}",
                defaults: new { controller = "Main", action = "Index" }
            );

            routes.MapRoute(
                name: "Route 2",
                url: "{controller}/{action}/{p1}"
            );

            routes.MapRoute(
                name: "Route 3",
                url: "{controller}/{action}/{p1}/{p2}"
            );
        }
    }
}
