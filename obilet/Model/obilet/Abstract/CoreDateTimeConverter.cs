using Newtonsoft.Json.Converters;

namespace obilet.Model.obilet.Abstract
{
    public class CoreDateTimeConverter : IsoDateTimeConverter
    {
        public CoreDateTimeConverter()
        {
            base.DateTimeFormat = "yyyy-MM-ddTHH:mm:ss";
        }
    }
}