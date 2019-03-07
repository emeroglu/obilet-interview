using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Json
{
    public class JsonJourney
    {
        [JsonProperty(PropertyName = "kind")]
        public string Kind { get; set; }

        [JsonProperty(PropertyName = "code")]
        public string Code { get; set; }

        [JsonProperty(PropertyName = "stops")]
        public List<JsonStop> Stops { get; set; }

        [JsonProperty(PropertyName = "origin")]
        public string Origin { get; set; }

        [JsonProperty(PropertyName = "destination")]
        public string Destination { get; set; }

        [JsonProperty(PropertyName = "departure")]
        public DateTime Departure { get; set; }

        [JsonProperty(PropertyName = "arrival")]
        public DateTime Arrival { get; set; }

        [JsonProperty(PropertyName = "currency")]
        public string Currency { get; set; }

        [JsonProperty(PropertyName = "duration")]
        public TimeSpan Duration { get; set; }

        [JsonProperty(PropertyName = "original-price")]
        public int OriginalPrice { get; set; }

        [JsonProperty(PropertyName = "internet-price")]
        public int InternetPrice { get; set; }

        [JsonProperty(PropertyName = "booking")]
        public List<string> Booking { get; set; }

        [JsonProperty(PropertyName = "bus-name")]
        public string BusName { get; set; }

        [JsonProperty(PropertyName = "policy")]
        public JsonPolicy Policy { get; set; }

        [JsonProperty(PropertyName = "features")]
        public List<string> Features { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "available")]
        public bool Available { get; set; }
    }
}