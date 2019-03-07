using Newtonsoft.Json;
using obilet.Json;
using System;

namespace obilet.Abstract
{
    public class CorePostLoginRequestModel : CoreRequestModel
    {
        [JsonProperty(PropertyName = "device-session")]        
        public JsonSession Session { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }

        [JsonProperty(PropertyName = "language")]
        public string Language { get; set; }
    }    
}