using Newtonsoft.Json;

namespace obilet.Model.Assignment.Json
{
    public class JsonJourney
    {        
        [JsonProperty(PropertyName = "departureTime")]
        public string DepartureTime { get; set; }
        
        [JsonProperty(PropertyName = "arrivalTime")]
        public string ArrivalTime { get; set; }

        [JsonProperty(PropertyName = "origin")]
        public JsonLocation Origin { get; set; }

        [JsonProperty(PropertyName = "destination")]
        public JsonLocation Destination { get; set; }        

        [JsonProperty(PropertyName = "price")]
        public string Price { get; set; }
        
    }
}