using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace obilet.Model.obilet.Abstract.Json
{
    public class JsonJourney
    {
        [JsonProperty(PropertyName = "kind", NullValueHandling = NullValueHandling.Ignore)]
        public string Kind { get; set; }

        [JsonProperty(PropertyName = "code", NullValueHandling = NullValueHandling.Ignore)]
        public string Code { get; set; }

        [JsonProperty(PropertyName = "stops", NullValueHandling = NullValueHandling.Ignore)]
        public List<JsonStop> Stops { get; set; }

        [JsonProperty(PropertyName = "origin", NullValueHandling = NullValueHandling.Ignore)]
        public string Origin { get; set; }

        [JsonProperty(PropertyName = "destination", NullValueHandling = NullValueHandling.Ignore)]
        public string Destination { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "departure", NullValueHandling = NullValueHandling.Ignore)]
        public DateTime Departure { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "arrival", NullValueHandling = NullValueHandling.Ignore)]
        public DateTime Arrival { get; set; }

        [JsonProperty(PropertyName = "currency", NullValueHandling = NullValueHandling.Ignore)]
        public string Currency { get; set; }

        [JsonProperty(PropertyName = "duration", NullValueHandling = NullValueHandling.Ignore)]
        public TimeSpan Duration { get; set; }

        [JsonProperty(PropertyName = "original-price", NullValueHandling = NullValueHandling.Ignore)]
        public decimal OriginalPrice { get; set; }

        [JsonProperty(PropertyName = "internet-price", NullValueHandling = NullValueHandling.Ignore)]
        public decimal InternetPrice { get; set; }

        [JsonProperty(PropertyName = "booking", NullValueHandling = NullValueHandling.Ignore)]
        public List<string> Booking { get; set; }

        [JsonProperty(PropertyName = "bus-name", NullValueHandling = NullValueHandling.Ignore)]
        public string BusName { get; set; }

        [JsonProperty(PropertyName = "policy", NullValueHandling = NullValueHandling.Ignore)]
        public JsonPolicy Policy { get; set; }

        [JsonProperty(PropertyName = "features", NullValueHandling = NullValueHandling.Ignore)]
        public List<string> Features { get; set; }

        [JsonProperty(PropertyName = "description", NullValueHandling = NullValueHandling.Ignore)]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "available", NullValueHandling = NullValueHandling.Ignore)]
        public bool Available { get; set; }
    }
}