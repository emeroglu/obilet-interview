using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;

namespace obilet.Model.Assignment
{
    public class LocationsRequestModel : CorePostLoginRequestModel<LocationsRequestDataModel>
    {

    }    

    public class LocationsRequestDataModel
    {
        [JsonProperty(PropertyName = "query")]
        public string Query { get; set; }
    }
}