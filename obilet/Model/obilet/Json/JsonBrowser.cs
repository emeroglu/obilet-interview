using Newtonsoft.Json;

namespace obilet.Model.obilet.Abstract.Json
{
    public class JsonBrowser
    {
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "version")]
        public string Version { get; set; }
    }
}