using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;

namespace obilet.Model.Assignment
{
    public class NewSessionResponseModel: CoreResponseModel<NewSessionDataModel>
    {

    }

    public class NewSessionDataModel
    {
        [JsonProperty(PropertyName = "sessionKey")]
        public string SessionKey { get; set; }

        [JsonProperty(PropertyName = "deviceKey")]
        public string DeviceKey { get; set; }
    }
}