using Newtonsoft.Json;
using obilet.Model.Assignment.Json;

namespace obilet.Model.Assignment.Abstract
{
    public class CorePostLoginRequestModel<DataModelType>
    {
        [JsonProperty(PropertyName = "auth")]
        public JsonAuth Auth { get; set; }

        [JsonProperty(PropertyName = "data")]
        public DataModelType Data { get; set; }
    }
}