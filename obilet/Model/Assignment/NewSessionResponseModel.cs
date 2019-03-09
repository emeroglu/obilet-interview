using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;

namespace obilet.Model.Assignment
{
    public class NewSessionResponseModel: CoreResponseModel<NewSessionDataModel>
    {

    }

    public class NewSessionDataModel
    {
        [JsonProperty(PropertyName = "session_key")]
        public string SessionKey { get; set; }

        [JsonProperty(PropertyName = "device_key")]
        public string DeviceKey { get; set; }
    }
}