using Newtonsoft.Json;

namespace obilet.Json
{
    public class JsonSession
    {
        [JsonProperty(PropertyName = "session-id")]
        public string SessionID { get; set; }

        [JsonProperty(PropertyName = "device-id")]
        public string DeviceID { get; set; }
    }
}