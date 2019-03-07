using Newtonsoft.Json.Converters;

namespace obilet.Abstract
{
    public class CoreDateTimeConverter : IsoDateTimeConverter
    {
        public CoreDateTimeConverter()
        {
            base.DateTimeFormat = "yyyy-MM-ddTHH:mm:ss";
        }
    }
}