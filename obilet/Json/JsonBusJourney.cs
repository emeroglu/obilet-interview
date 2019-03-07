using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Json
{
    public class JsonBusJourney
    {
        [JsonProperty(PropertyName = "id")]
        public int ID { get; set; }

        [JsonProperty(PropertyName = "partner-id")]
        public int PartnerID { get; set; }

        [JsonProperty(PropertyName = "partner-name")]
        public string PartnerName { get; set; }

        [JsonProperty(PropertyName = "route-id")]
        public int RouteID { get; set; }

        [JsonProperty(PropertyName = "bus-type")]
        public string BusType { get; set; }

        [JsonProperty(PropertyName = "total-seats")]
        public int TotalSeats { get; set; }

        [JsonProperty(PropertyName = "available-seats")]
        public int AvailableSeats { get; set; }

        [JsonProperty(PropertyName = "journey")]
        public JsonJourney Journey { get; set; }

        [JsonProperty(PropertyName = "features")]
        public List<JsonFeature> Features { get; set; }

        [JsonProperty(PropertyName = "origin-location")]
        public string OriginLocation { get; set; }

        [JsonProperty(PropertyName = "destination-location")]
        public string DestinationLocation { get; set; }

        [JsonProperty(PropertyName = "is-active")]
        public bool IsActive { get; set; }

        [JsonProperty(PropertyName = "origin-location-id")]
        public int OriginLocationID { get; set; }

        [JsonProperty(PropertyName = "destination-location-id")]
        public int DestinationLocationID { get; set; }

        [JsonProperty(PropertyName = "is-promoted")]
        public bool IsPromoted { get; set; }

        [JsonProperty(PropertyName = "cancellation-offset")]
        public int CancellationOffset { get; set; }

        [JsonProperty(PropertyName = "has-bus-shuttle")]
        public bool HasBusShuttle { get; set; }

        [JsonProperty(PropertyName = "disable-sales-without-gov-id")]
        public bool DisableSalesWithoutGovID { get; set; }

        [JsonProperty(PropertyName = "display-offset")]
        public TimeSpan DisplayOffset { get; set; }

        [JsonProperty(PropertyName = "partner-rating")]
        public decimal PartnerRating { get; set; }
    }
}