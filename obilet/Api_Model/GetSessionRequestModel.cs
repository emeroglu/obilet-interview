using Newtonsoft.Json;
using obilet.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Api_Model
{
    public class GetSessionRequestModel
    {
        [JsonProperty(PropertyName = "type")]
        public int Type { get; set; }

        [JsonProperty(PropertyName = "connection")]
        public JsonConnection Connection { get; set; }

        [JsonProperty(PropertyName = "browser")]
        public JsonBrowser Browser { get; set; }
    }
}