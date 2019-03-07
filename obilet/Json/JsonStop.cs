using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Json
{
    public class JsonStop
    {
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        [JsonProperty(PropertyName = "station")]
        public string Station { get; set; }

        [JsonProperty(PropertyName = "time")]
        public DateTime Time { get; set; }

        [JsonProperty(PropertyName = "is-origin")]
        public bool IsOrigin { get; set; }

        [JsonProperty(PropertyName = "is-destination")]
        public bool IsDestination { get; set; }
    }
}