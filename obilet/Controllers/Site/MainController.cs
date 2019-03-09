using obilet.Repository;
using System;
using System.Web;
using System.Web.Mvc;

namespace obilet.Controllers.Site
{
    public class MainController : Controller
    {
        [HttpGet]
        [Route("")]
        public string Index()
        {
            string html = "";

            html += "<html>";
            html += "   <head>";
            html += "       <meta charset='UTF-8' />";
            html += "       <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, users-scalable=0'>";
            html += "   </head>";
            html += "   <body>";
            html += "       <script type='text/javascript' src='/File/Init'></script>";
            html += "   </body>";
            html += "</html>";

            html = html.Replace("       <", "<").Replace("   <", "<");

            Response.ContentType = ContentTypes.Html;
            Response.Cache.SetCacheability(HttpCacheability.Private);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(31568000));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return html;
        }
    }
}