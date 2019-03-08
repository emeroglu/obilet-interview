using Newtonsoft.Json;

namespace obilet.Model.obilet.Abstract.Json
{
    public class JsonConnection
    {
        [JsonProperty(PropertyName = "ip-address")]
        public string IP { get; set; }

        [JsonProperty(PropertyName = "port")]
        public string Port { get; set; }
    }
}