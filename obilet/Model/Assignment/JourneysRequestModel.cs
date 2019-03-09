using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;
using System;

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
        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }
    }
}