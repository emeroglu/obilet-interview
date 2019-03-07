using System;
using System.Collections.Generic;

namespace obilet.Repository
{
    public class Cache
    {
        public static DateTime Start;
        public static DateTime Last_Alive;
        public static DateTime Last_Refresh;

        public static string Style;
        public static string Script;
        public static Dictionary<string, string> Modules;
    }
}