using obilet.App_Start;
using obilet.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace obilet
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            DateTime now = DateTime.Now;

            Cache.Start = now;
            Cache.Last_Alive = now;
            Cache.Last_Refresh = now;

            Cache.Script = "";
            Cache.Modules = new Dictionary<string, string>();
        }
        
    }
}