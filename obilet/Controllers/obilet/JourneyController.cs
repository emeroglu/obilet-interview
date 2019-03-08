using Newtonsoft.Json;
using obilet.Agents;
using obilet.Model.obilet;
using obilet.Repository;
using System.IO;
using System.Text;
using System.Web.Mvc;

namespace obilet.Controllers.obilet
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

        [HttpPost]
        public void Get_Bus_Journeys()
        {
            StreamReader reader = new StreamReader(Request.InputStream, Encoding.UTF8);
            string body = reader.ReadToEnd();
            reader.Close();

            GetBusJourneysRequestModel request = JsonConvert.DeserializeObject<GetBusJourneysRequestModel>(body);

            new HttpPostAgent<GetBusJourneysRequestModel, GetBusJourneysResponseModel>()
            {
                Url = Config.Get_Bus_Journeys,
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