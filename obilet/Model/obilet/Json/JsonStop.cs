using Newtonsoft.Json;
using System;

namespace obilet.Model.obilet.Abstract.Json
{
    public class JsonStop
    {
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "station")]
        public string Station { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "time", NullValueHandling = NullValueHandling.Ignore)]
        public DateTime Time { get; set; }

        [JsonProperty(PropertyName = "is-origin")]
        public bool IsOrigin { get; set; }

        [JsonProperty(PropertyName = "is-destination")]
        public bool IsDestination { get; set; }
    }
}