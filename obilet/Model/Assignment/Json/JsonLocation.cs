using Newtonsoft.Json;

namespace obilet.Model.Assignment.Json
{
    public class JsonLocation
    {
        [JsonProperty(PropertyName = "id")]
        public int ID { get; set; }        

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
    }
}