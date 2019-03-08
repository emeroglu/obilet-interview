using Newtonsoft.Json;

namespace obilet.Model.obilet.Abstract.Json
{
    public class JsonFeature
    {
        [JsonProperty(PropertyName = "id")]
        public int ID { get; set; }

        [JsonProperty(PropertyName = "priority", NullValueHandling = NullValueHandling.Ignore)]
        public int Priority { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "description", NullValueHandling = NullValueHandling.Ignore)]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "is-promoted")]
        public bool IsPromoted { get; set; }

        [JsonProperty(PropertyName = "back-color", NullValueHandling = NullValueHandling.Ignore)]
        public string BackColor { get; set; }

        [JsonProperty(PropertyName = "fore-color", NullValueHandling = NullValueHandling.Ignore)]
        public string ForeColor { get; set; }
    }
}