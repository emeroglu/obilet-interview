using Newtonsoft.Json;
using obilet.Abstract;

namespace obilet.Api_Model
{
    public class GetSessionResponseModel : CoreResponseModel<GetSessionDataModel>
    {
        
    }

    public class GetSessionDataModel: CoreDataModel
    {
        [JsonProperty(PropertyName = "session-id")]
        public string SessionID { get; set; }

        [JsonProperty(PropertyName = "device-id")]
        public string DeviceID { get; set; }

        [JsonProperty(PropertyName = "affiliate")]
        public string Affiliate { get; set; }
    }
}