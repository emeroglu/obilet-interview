using Newtonsoft.Json;
using obilet.Agents;
using obilet.Api_Model;
using obilet.Json;
using obilet.Repository;
using System.IO;
using System.Text;
using System.Web.Mvc;

namespace obilet.Controllers
{
    public class JourneyController : Controller
    {
        [HttpPost]
        public void Get_Bus_Locations()
        {
            StreamReader reader = new StreamReader(Request.InputStream, Encoding.UTF8);
            string body = reader.ReadToEnd();
            reader.Close();

            GetBusLocationsRequestModel request = JsonConvert.DeserializeObject<GetBusLocationsRequestModel>(body);

            new HttpPostAgent<GetBusLocationsRequestModel, GetBusLocationsResponseModel>()
            {
                Url = Config.Get_Bus_Locations,
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