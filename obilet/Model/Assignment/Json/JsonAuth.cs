using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Model.Assignment.Json
{
    public class JsonAuth
    {
        [JsonProperty(PropertyName = "sessionKey")]
        public string SessionKey { get; set; }

        [JsonProperty(PropertyName = "deviceKey")]
        public string DeviceKey { get; set; }
    }
}