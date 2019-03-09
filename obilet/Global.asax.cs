using obilet.Repository;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Mvc;

namespace obilet
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            AreaRegistration.RegisterAllAreas();            
            GlobalConfiguration.Configure(WebApiConfig.Register);

            DateTime now = DateTime.Now;

            Config.IP = FindIpAddress().ToString();
            Config.Port = "80";

            Cache.Start = now;
            Cache.Last_Alive = now;
            Cache.Last_Refresh = now;

            Cache.Script = "";
            Cache.Modules = new Dictionary<string, string>();
        }

        private IPAddress FindIpAddress()
        {
            IPHostEntry hostEntry = Dns.GetHostEntry(Dns.GetHostName());

            foreach (IPAddress ip in hostEntry.AddressList)
            {                                
                if (ip.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
                {                    
                    return ip;
                }
            }

            return null;
        }

    }
}