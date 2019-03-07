using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Json
{
    public class JsonPolicy
    {
        [JsonProperty(PropertyName = "max-seats", NullValueHandling = NullValueHandling.Ignore)]
        public int MaxSeats { get; set; }

        [JsonProperty(PropertyName = "max-single", NullValueHandling = NullValueHandling.Ignore)]
        public int MaxSingle { get; set; }

        [JsonProperty(PropertyName = "max-single-males", NullValueHandling = NullValueHandling.Ignore)]
        public int MaxSingleMales { get; set; }

        [JsonProperty(PropertyName = "max-single-females", NullValueHandling = NullValueHandling.Ignore)]
        public int MaxSingleFemales { get; set; }

        [JsonProperty(PropertyName = "mixed-genders")]
        public bool MixedGenders { get; set; }

        [JsonProperty(PropertyName = "gov-id")]
        public bool GovID { get; set; }

        [JsonProperty(PropertyName = "lht")]
        public bool LHT { get; set; }
    }
}