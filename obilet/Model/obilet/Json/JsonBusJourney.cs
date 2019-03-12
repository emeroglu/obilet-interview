using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace obilet.Model.obilet.Abstract.Json
{
    public class JsonBusJourney
    {
        [JsonProperty(PropertyName = "id", NullValueHandling = NullValueHandling.Ignore)]
        public int ID { get; set; }

        [JsonProperty(PropertyName = "partner-id", NullValueHandling = NullValueHandling.Ignore)]
        public int PartnerID { get; set; }

        [JsonProperty(PropertyName = "partner-name", NullValueHandling = NullValueHandling.Ignore)]
        public string PartnerName { get; set; }

        [JsonProperty(PropertyName = "route-id", NullValueHandling = NullValueHandling.Ignore)]
        public int RouteID { get; set; }

        [JsonProperty(PropertyName = "bus-type", NullValueHandling = NullValueHandling.Ignore)]
        public string BusType { get; set; }

        [JsonProperty(PropertyName = "total-seats", NullValueHandling = NullValueHandling.Ignore)]
        public int TotalSeats { get; set; }

        [JsonProperty(PropertyName = "available-seats", NullValueHandling = NullValueHandling.Ignore)]
        public int AvailableSeats { get; set; }

        [JsonProperty(PropertyName = "journey", NullValueHandling = NullValueHandling.Ignore)]
        public JsonJourney Journey { get; set; }

        [JsonProperty(PropertyName = "features", NullValueHandling = NullValueHandling.Ignore)]
        public List<JsonFeature> Features { get; set; }

        [JsonProperty(PropertyName = "origin-location", NullValueHandling = NullValueHandling.Ignore)]
        public string OriginLocation { get; set; }

        [JsonProperty(PropertyName = "destination-location", NullValueHandling = NullValueHandling.Ignore)]
        public string DestinationLocation { get; set; }

        [JsonProperty(PropertyName = "is-active", NullValueHandling = NullValueHandling.Ignore)]
        public bool IsActive { get; set; }

        [JsonProperty(PropertyName = "origin-location-id", NullValueHandling = NullValueHandling.Ignore)]
        public int OriginLocationID { get; set; }

        [JsonProperty(PropertyName = "destination-location-id", NullValueHandling = NullValueHandling.Ignore)]
        public int DestinationLocationID { get; set; }

        [JsonProperty(PropertyName = "is-promoted", NullValueHandling = NullValueHandling.Ignore)]
        public bool IsPromoted { get; set; }

        [JsonProperty(PropertyName = "cancellation-offset", NullValueHandling = NullValueHandling.Ignore)]
        public int CancellationOffset { get; set; }

        [JsonProperty(PropertyName = "has-bus-shuttle", NullValueHandling = NullValueHandling.Ignore)]
        public bool HasBusShuttle { get; set; }

        [JsonProperty(PropertyName = "disable-sales-without-gov-id", NullValueHandling = NullValueHandling.Ignore)]
        public bool DisableSalesWithoutGovID { get; set; }

        [JsonProperty(PropertyName = "display-offset", NullValueHandling = NullValueHandling.Ignore)]
        public TimeSpan DisplayOffset { get; set; }

        [JsonProperty(PropertyName = "partner-rating", NullValueHandling = NullValueHandling.Ignore)]
        public decimal PartnerRating { get; set; }
    }
}