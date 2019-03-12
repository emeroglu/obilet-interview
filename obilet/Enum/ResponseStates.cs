using System.Runtime.Serialization;

namespace obilet.Enum
{
    public enum ResponseStates
    {
        [EnumMember(Value = "Success")]
        Success,

        [EnumMember(Value = "InvalidDepartureDate")]
        InvalidDepartureDate,

        [EnumMember(Value = "InvalidRoute")]
        InvalidRoute,

        [EnumMember(Value = "InvalidLocation")]
        InvalidLocation,

        [EnumMember(Value = "Timeout")]
        Timeout,

        [EnumMember(Value = "Unknown")]
        Unknown
    }
}