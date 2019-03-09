using Newtonsoft.Json.Converters;

namespace obilet.Model.Assignment.Abstract
{
    public class CoreDateTimeConverter : IsoDateTimeConverter
    {
        public CoreDateTimeConverter()
        {
            base.DateTimeFormat = "yyyy-MM-dd HH:mm:ss";
        }
    }
}