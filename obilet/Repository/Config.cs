using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace obilet.Repository
{
    public class Config
    {
        public static string IP;
        public static string Port;

        public static string Date_Format = "yyyy-MM-dd HH:mm:ss";

        public static string Basic_Token = "ZEdocGMybHpZV0p5WVc1a2JtVjNZbWx1";

        public static string API = "https://v2-api.obilet.com/api";

        public static string Get_Session = API + "/client/getsession";
        public static string Get_Bus_Locations = API + "/location/getbuslocations";
        public static string Get_Bus_Journeys = API + "/journey/getbusjourneys";        

    }
}