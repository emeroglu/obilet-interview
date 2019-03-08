using Newtonsoft.Json;
using obilet.Model.obilet.Abstract;
using System;

namespace obilet.Model.obilet
{
    public class GetBusJourneysRequestModel : CorePostLoginRequestModel<GetBusJourneysRequestDataModel>
    {
        
    }

    public class GetBusJourneysRequestDataModel
    {
        [JsonProperty(PropertyName = "origin-id")]
        public int OriginID { get; set; }

        [JsonProperty(PropertyName = "destination-id")]
        public int DestinationID { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "departure-date")]
        public DateTime DepartureDate { get; set; }
    }
}