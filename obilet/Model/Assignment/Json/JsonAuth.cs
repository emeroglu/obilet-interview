using Newtonsoft.Json;

namespace obilet.Model.Assignment.Json
{
    public class JsonAuth
    {
        [JsonProperty(PropertyName = "sessionKey")]
        public string SessionKey { get; set; }

        [JsonProperty(PropertyName = "deviceKey")]
        public string DeviceKey { get; set; }
    }
}