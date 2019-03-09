using Newtonsoft.Json;
using obilet.Agents;
using obilet.Model.obilet;
using obilet.Repository;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace obilet.Controllers.obilet
{
    public partial class obiletController : ApiController
    {
        [HttpPost]
        [Route("obilet/Journey/GetBusLocations")]
        public HttpResponseMessage Get_Bus_Locations()
        {
            string body = Request.Content.ReadAsStringAsync().Result;

            GetBusLocationsRequestModel request = JsonConvert.DeserializeObject<GetBusLocationsRequestModel>(body);                        

            GetBusLocationsResponseModel response = Get_Bus_Locations_Implementation(request);

            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new StringContent(response.ToString(), Encoding.UTF8, ContentTypes.Json);
            return result;

        }
        protected GetBusLocationsResponseModel Get_Bus_Locations_Implementation(GetBusLocationsRequestModel request)
        {
            HttpPostAgent<GetBusLocationsRequestModel, GetBusLocationsResponseModel> agent = new HttpPostAgent<GetBusLocationsRequestModel, GetBusLocationsResponseModel>();
            agent.Url = Config.Get_Bus_Locations;
            agent.Body = request;

            return agent.Send();
        }
    }
}