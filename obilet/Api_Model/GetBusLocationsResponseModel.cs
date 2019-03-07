using obilet.Abstract;
using obilet.Json;
using System.Collections.Generic;

namespace obilet.Api_Model
{
    public class GetBusLocationsResponseModel : CoreResponseModel<GetBusLocationsDataModel>
    {        
        
    }

    public class GetBusLocationsDataModel : List<JsonBusLocation>
    {
        
    }
}