using Newtonsoft.Json;
using obilet.Controllers.obilet;
using obilet.Model.Assignment;
using obilet.Model.Assignment.Json;
using obilet.Model.obilet;
using obilet.Repository;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace obilet.Controllers.Assignment
{
    public partial class AssignmentController : obiletController
    {
        [Route("auth/new-session")]
        public HttpResponseMessage New_Session()
        {
            GetSessionResponseModel obilet = Get_Session_Implementation();

            NewSessionResponseModel result = new NewSessionResponseModel()
            {
                Meta = new JsonMeta()
                {
                    Status = "success",
                    Message = "Everything is fine"
                },
                Data = new NewSessionDataModel()
                {
                    SessionKey = obilet.Data.SessionID,
                    DeviceKey = obilet.Data.DeviceID
                }
            };

            string content = JsonConvert.SerializeObject(result);

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(content, Encoding.UTF8, ContentTypes.Json);
            return response;
        }
    }
}
