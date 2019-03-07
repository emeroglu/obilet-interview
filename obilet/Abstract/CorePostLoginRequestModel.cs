using Newtonsoft.Json;
using obilet.Json;
using System;

namespace obilet.Abstract
{
    public class CorePostLoginRequestModel<DataModelType> : CoreRequestModel
    {
        [JsonProperty(PropertyName = "device-session")]        
        public JsonSession Session { get; set; }

        [JsonProperty(PropertyName = "data", NullValueHandling = NullValueHandling.Ignore)]
        public DataModelType Data { get; set; }

        [JsonConverter(typeof(CoreDateTimeConverter))]
        [JsonProperty(PropertyName = "date")]
        public DateTime Date { get; set; }

        [JsonProperty(PropertyName = "language")]
        public string Language { get; set; }
    }    
}