using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace obilet.Model.obilet.Abstract.Json
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

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "departure")]
        public DateTime Departure { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "arrival")]
        public DateTime Arrival { get; set; }

        [JsonProperty(PropertyName = "currency")]
        public string Currency { get; set; }

        [JsonProperty(PropertyName = "duration", NullValueHandling = NullValueHandling.Ignore)]
        public TimeSpan Duration { get; set; }

        [JsonProperty(PropertyName = "original-price")]
        public decimal OriginalPrice { get; set; }

        [JsonProperty(PropertyName = "internet-price")]
        public decimal InternetPrice { get; set; }

        [JsonProperty(PropertyName = "booking")]
        public List<string> Booking { get; set; }

        [JsonProperty(PropertyName = "bus-name")]
        public string BusName { get; set; }

        [JsonProperty(PropertyName = "policy")]
        public JsonPolicy Policy { get; set; }

        [JsonProperty(PropertyName = "features")]
        public List<string> Features { get; set; }

        [JsonProperty(PropertyName = "description", NullValueHandling = NullValueHandling.Ignore)]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "available", NullValueHandling = NullValueHandling.Ignore)]
        public bool Available { get; set; }
    }
}