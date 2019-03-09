using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;
using obilet.Model.Assignment.Json;
using System.Collections.Generic;

namespace obilet.Model.Assignment
{
    public class LocationsResponseModel : CoreResponseModel<LocationsDataModel>
    {

    }

    public class LocationsDataModel
    {
        [JsonProperty(PropertyName = "locations")]
        public List<JsonLocation> Locations { get; set; }
    }
}