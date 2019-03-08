using obilet.Model.obilet.Abstract;
using obilet.Model.obilet.Abstract.Json;
using System.Collections.Generic;

namespace obilet.Model.obilet
{
    public class GetBusJourneysResponseModel : CoreResponseModel<GetBusJourneysDataModel>
    {        
        
    }

    public class GetBusJourneysDataModel : List<JsonBusJourney>
    {
        
    }
}