using Newtonsoft.Json;
using obilet.Abstract;
using obilet.Json;
using System;

namespace obilet.Api_Model
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