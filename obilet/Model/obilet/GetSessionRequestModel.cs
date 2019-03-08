using Newtonsoft.Json;
using obilet.Model.obilet.Abstract.Json;

namespace obilet.Model.obilet
{
    public class GetSessionRequestModel
    {
        [JsonProperty(PropertyName = "type")]
        public int Type { get; set; }

        [JsonProperty(PropertyName = "connection")]
        public JsonConnection Connection { get; set; }

        [JsonProperty(PropertyName = "browser")]
        public JsonBrowser Browser { get; set; }
    }
}