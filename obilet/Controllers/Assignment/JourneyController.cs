using Newtonsoft.Json;
using obilet.Controllers.obilet;
using obilet.Model.Assignment;
using obilet.Model.Assignment.Json;
using obilet.Model.obilet;
using obilet.Repository;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace obilet.Controllers.Assignment
{
    public partial class AssignmentController : obiletController
    {
        [HttpPost]
        [Route("journey/possible-locations")]
        public HttpResponseMessage PossibleLocations()
        {
            string body = Request.Content.ReadAsStringAsync().Result;

            LocationsRequestModel locationsRequestModel = JsonConvert.DeserializeObject<LocationsRequestModel>(body);

            GetBusLocationsRequestModel getBusLocationsRequestModel = new GetBusLocationsRequestModel();
            getBusLocationsRequestModel.Session = new Model.obilet.Abstract.Json.JsonSession();
            getBusLocationsRequestModel.Session.DeviceID = locationsRequestModel.Auth.DeviceKey;
            getBusLocationsRequestModel.Session.SessionID = locationsRequestModel.Auth.SessionKey;
            getBusLocationsRequestModel.Date = DateTime.Now;
            getBusLocationsRequestModel.Language = "tr-TR";
            getBusLocationsRequestModel.Data = null;

            GetBusLocationsResponseModel getBusLocationsResponseModel = Get_Bus_Locations_Implementation(getBusLocationsRequestModel);

            LocationsDataModel locationsDataModel = new LocationsDataModel();
            locationsDataModel.Locations = new List<JsonLocation>();

            foreach (Model.obilet.Abstract.Json.JsonBusLocation busLocation in getBusLocationsResponseModel.Data)
            {
                locationsDataModel.Locations.Add(new JsonLocation()
                {
                    ID = busLocation.ID,
                    ParentID = busLocation.ParentID,
                    Name = busLocation.Name
                });
            }

            LocationsResponseModel result = new LocationsResponseModel()
            {
                Meta = new JsonMeta()
                {
                    Status = "success",
                    Message = "Everything is fine"
                },
                Data = locationsDataModel
            };

            string content = JsonConvert.SerializeObject(result);

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(content, Encoding.UTF8, ContentTypes.Json);
            return response;
        }

        [HttpPost]
        [Route("journey/journeys")]
        public HttpResponseMessage Journeys()
        {
            string body = Request.Content.ReadAsStringAsync().Result;

            JourneysRequestModel journeysRequestModel = JsonConvert.DeserializeObject<JourneysRequestModel>(body);

            GetBusJourneysRequestModel getBusJourneysRequestModel = new GetBusJourneysRequestModel();
            getBusJourneysRequestModel.Session = new Model.obilet.Abstract.Json.JsonSession();
            getBusJourneysRequestModel.Session.DeviceID = journeysRequestModel.Auth.DeviceKey;
            getBusJourneysRequestModel.Session.SessionID = journeysRequestModel.Auth.SessionKey;
            getBusJourneysRequestModel.Date = DateTime.Now;
            getBusJourneysRequestModel.Language = "tr-TR";
            getBusJourneysRequestModel.Data = new GetBusJourneysRequestDataModel();
            getBusJourneysRequestModel.Data.OriginID = journeysRequestModel.Data.OriginID;
            getBusJourneysRequestModel.Data.DestinationID = journeysRequestModel.Data.DestinationID;
            getBusJourneysRequestModel.Data.DepartureDate = journeysRequestModel.Data.DepartureDate;

            GetBusJourneysResponseModel getBusJourneysResponseModel = Get_Bus_Journeys_Implementation(getBusJourneysRequestModel);

            JourneysDataModel journeysDataModel = new JourneysDataModel();
            journeysDataModel.Journeys = new List<JsonJourney>();

            foreach (Model.obilet.Abstract.Json.JsonBusJourney busJourney in getBusJourneysResponseModel.Data)
            {
                journeysDataModel.Journeys.Add(new JsonJourney()
                {
                    Departure = busJourney.Journey.Departure,
                    Arrival = busJourney.Journey.Arrival,
                    Origin = new JsonLocation()
                    {
                        ID = busJourney.OriginLocationID,
                        ParentID = null,
                        Name = busJourney.OriginLocation
                    },
                    Destination = new JsonLocation()
                    {
                        ID = busJourney.DestinationLocationID,
                        ParentID = null,
                        Name = busJourney.DestinationLocation
                    },
                    Currency = busJourney.Journey.Currency,
                    OriginalPrice = busJourney.Journey.OriginalPrice,
                    InternetPrice = busJourney.Journey.InternetPrice
                });
            }

            JourneysResponseModel journeysResponseModel = new JourneysResponseModel()
            {
                Meta = new JsonMeta()
                {
                    Status = "success",
                    Message = "Everything is fine"
                },
                Data = journeysDataModel
            };

            string content = JsonConvert.SerializeObject(journeysResponseModel);

            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(content, Encoding.UTF8, ContentTypes.Json);
            return response;
        }
    }
}
