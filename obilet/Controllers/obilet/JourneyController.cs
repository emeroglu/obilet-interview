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
        [Route("obilet/Journey/GetBusJourneys")]
        public HttpResponseMessage Get_Bus_Journeys()
        {            
            string body = Request.Content.ReadAsStringAsync().Result;

            GetBusJourneysRequestModel request = JsonConvert.DeserializeObject<GetBusJourneysRequestModel>(body);            
            
            GetBusJourneysResponseModel response = Get_Bus_Journeys_Implementation(request);

            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new StringContent(response.ToString(), Encoding.UTF8, ContentTypes.Json);
            return result;

        }
        protected GetBusJourneysResponseModel Get_Bus_Journeys_Implementation(GetBusJourneysRequestModel request)
        {
            HttpPostAgent<GetBusJourneysRequestModel, GetBusJourneysResponseModel> agent = new HttpPostAgent<GetBusJourneysRequestModel, GetBusJourneysResponseModel>();
            agent.Url = Config.Get_Bus_Journeys;
            agent.Body = request;

            return agent.Send();
        }
    }
}