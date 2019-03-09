using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Model.Assignment.Json
{
    public class JsonJourney
    {
        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "departure")]
        public DateTime Departure { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "arrival")]
        public DateTime Arrival { get; set; }

        [JsonProperty(PropertyName = "origin")]
        public JsonLocation Origin { get; set; }

        [JsonProperty(PropertyName = "destination")]
        public JsonLocation Destination { get; set; }

        [JsonProperty(PropertyName = "currency")]
        public string Currency { get; set; }

        [JsonProperty(PropertyName = "originalPrice")]
        public decimal OriginalPrice { get; set; }

        [JsonProperty(PropertyName = "internetPrice")]
        public decimal InternetPrice { get; set; }
    }
}