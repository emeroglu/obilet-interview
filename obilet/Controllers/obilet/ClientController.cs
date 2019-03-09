using obilet.Agents;
using obilet.Model.obilet;
using obilet.Model.obilet.Abstract.Json;
using obilet.Repository;
using System.Collections;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;

namespace obilet.Controllers.obilet
{
    public partial class obiletController : ApiController
    {
        [HttpPost]
        [Route("obilet/Client/GetSession")]
        public HttpResponseMessage GetSession()
        {            
            string result = Get_Session_Implementation().ToString();

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(result, Encoding.UTF8, ContentTypes.Json);
            return response;
        }
        protected GetSessionResponseModel Get_Session_Implementation()
        {
            string useragent = HttpContext.Current.Request.UserAgent;
            HttpBrowserCapabilities browser = new HttpBrowserCapabilities { Capabilities = new Hashtable { { string.Empty, useragent } } };
            BrowserCapabilitiesFactory factory = new BrowserCapabilitiesFactory();
            factory.ConfigureBrowserCapabilities(new NameValueCollection(), browser);

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
                    Name = browser.Browser,
                    Version = browser.Version
                }
            };

            HttpPostAgent<GetSessionRequestModel, GetSessionResponseModel> agent = new HttpPostAgent<GetSessionRequestModel, GetSessionResponseModel>();
            agent.Url = Config.Get_Session;
            agent.Body = request;            

            return agent.Send();
        }

    }
}