using Newtonsoft.Json;
using obilet.Model.Assignment.Abstract;
using obilet.Model.Assignment.Json;
using System.Collections.Generic;

namespace obilet.Model.Assignment
{
    public class JourneysResponseModel : CoreResponseModel<JourneysDataModel>
    {

    }

    public class JourneysDataModel
    {
        [JsonProperty(PropertyName = "journeys")]
        public List<JsonJourney> Journeys { get; set; }
    }
}