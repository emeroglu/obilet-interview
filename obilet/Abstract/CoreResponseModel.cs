using Newtonsoft.Json;
using obilet.Enum;

namespace obilet.Abstract
{
    public class CoreResponseModel
    {
        [JsonProperty(PropertyName = "status")]
        public ResponseStates Status { get; set; }

        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }

        [JsonProperty(PropertyName = "user-message")]
        public string UserMessage { get; set; }

        [JsonProperty(PropertyName = "api-request-id")]
        public string ApiRequestId { get; set; }

        [JsonProperty(PropertyName = "controller")]
        public string Controller { get; set; }
    }
}