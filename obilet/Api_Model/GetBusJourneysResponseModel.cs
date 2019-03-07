using obilet.Abstract;
using obilet.Json;
using System.Collections.Generic;

namespace obilet.Api_Model
{
    public class GetBusJourneysResponseModel : CoreResponseModel<GetBusJourneysDataModel>
    {        
        
    }

    public class GetBusJourneysDataModel : List<JsonBusJourney>
    {
        
    }
}