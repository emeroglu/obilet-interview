using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Json
{    
    public class JsonConnection
    {
        [JsonProperty(PropertyName = "ip-address")]
        public string IP { get; set; }

        [JsonProperty(PropertyName = "port")]
        public string Port { get; set; }
    }
}