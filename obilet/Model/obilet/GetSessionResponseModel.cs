using Newtonsoft.Json;
using obilet.Model.obilet.Abstract;

namespace obilet.Model.obilet
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