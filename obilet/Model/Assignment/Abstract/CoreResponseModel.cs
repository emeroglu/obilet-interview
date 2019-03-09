using Newtonsoft.Json;
using obilet.Model.Assignment.Json;

namespace obilet.Model.Assignment.Abstract
{
    public class CoreResponseModel<DataModelType>
    {
        [JsonProperty(PropertyName = "meta")]
        public JsonMeta Meta { get; set; }

        [JsonProperty(PropertyName = "data")]
        public DataModelType Data { get; set; }
    }
}