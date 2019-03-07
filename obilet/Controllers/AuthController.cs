using obilet.Agents;
using obilet.Api_Model;
using obilet.Json;
using obilet.Repository;
using System.Web.Mvc;

namespace obilet.Controllers
{
    public class AuthController : Controller
    {

        [HttpGet]
        public void Get_Session()
        {
            GetSessionRequestModel request = new GetSessionRequestModel()
            {
                Type = 1,
                Connection = new JsonConnection()
                {
                    IP = Config.IP,
                    Port = Config.Port
                },
                Browser = new JsonBrowser()
                {
                    Name = Request.Browser.Browser.ToString(),
                    Version = Request.Browser.Version.ToString()
                }
            };            

            new HttpPostAgent()
            {
                Url = Config.Get_Session,
                Body = request,
                OnSuccess = (response) =>
                {
                    Response.ContentType = ContentTypes.Json;                    
                    Response.Write(response);
                }
            }
            .Send();       
        }

    }
}