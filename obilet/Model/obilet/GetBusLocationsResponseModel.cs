using obilet.Model.obilet.Abstract;
using obilet.Model.obilet.Abstract.Json;
using System.Collections.Generic;

namespace obilet.Model.obilet
{
    public class GetBusLocationsResponseModel : CoreResponseModel<GetBusLocationsDataModel>
    {        
        
    }

    public class GetBusLocationsDataModel : List<JsonBusLocation>
    {
        
    }
}