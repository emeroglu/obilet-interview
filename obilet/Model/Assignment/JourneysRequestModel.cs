using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Model.Assignment
{
    public class JourneysRequestModel : CorePostLoginRequestModel<JourneysRequestDataModel>
    {
        
    }

    public class JourneysRequestDataModel
    {
        [JsonProperty(PropertyName = "originId")]
        public int OriginID { get; set; }

        [JsonProperty(PropertyName = "destinationId")]
        public int DestinationID { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "departureDate")]
        public DateTime DepartureDate { get; set; }
    }
}