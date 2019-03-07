using Newtonsoft.Json;

namespace obilet.Json
{
    public class JsonBusLocation
    {
        [JsonProperty(PropertyName = "id")]
        public int ID { get; set; }

        [JsonProperty(PropertyName = "parent-id", NullValueHandling = NullValueHandling.Ignore)]
        public int ParentID { get; set; }

        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }

        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "geo-location")]
        public JsonLocation Location { get; set; }

        [JsonProperty(PropertyName = "zoom")]
        public string Zoom { get; set; }

        [JsonProperty(PropertyName = "tz-code")]
        public string TimezoneCode { get; set; }

        [JsonProperty(PropertyName = "weather-code")]
        public string WeatherCode { get; set; }

        [JsonProperty(PropertyName = "rank", NullValueHandling = NullValueHandling.Ignore)]
        public int Rank { get; set; }

        [JsonProperty(PropertyName = "reference-code")]
        public string ReferenceCode { get; set; }

        [JsonProperty(PropertyName = "keywords")]
        public string Keywords { get; set; }
    }
}