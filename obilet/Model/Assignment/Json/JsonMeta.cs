using Newtonsoft.Json;

namespace obilet.Model.Assignment.Json
{
    public class JsonMeta
    {
        [JsonProperty(PropertyName = "status")]
        public string Status { get; set; }

        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }
    }
}