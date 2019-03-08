using obilet.Repository;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace obilet.Controllers.Site
{
    public class FileController: Controller
    {
        [HttpGet]
        public string Init()
        {
            string compilation = "";

            compilation += "let version = '" + Cache.Last_Refresh.Ticks + "';\r\n\r\n";
            compilation += "let $window = window;\r\n";
            compilation += "let $global = $window;\r\n\r\n";

            FileStream stream;
            StreamReader reader;            

            stream = new FileStream(Server.MapPath("/Files/config.json"), FileMode.Open, FileAccess.Read);
            reader = new StreamReader(stream);

            List<string> config = new JavaScriptSerializer().Deserialize<List<string>>(reader.ReadToEnd());

            stream.Flush();
            stream.Close();

            stream.Dispose();
            reader.Dispose();

            foreach (string s in config)
            {
                stream = new FileStream(Server.MapPath(s), FileMode.Open, FileAccess.Read);
                reader = new StreamReader(stream);

                compilation += reader.ReadToEnd() + "\r\n\r\n";

                stream.Flush();
                stream.Close();

                stream.Dispose();
                reader.Dispose();
            }

            stream = new FileStream(Server.MapPath("/Files/init.js"), FileMode.Open, FileAccess.Read);
            reader = new StreamReader(stream);

            compilation += reader.ReadToEnd();

            stream.Flush();
            stream.Close();

            stream.Dispose();
            reader.Dispose();

            Response.ContentType = ContentTypes.Javascript;
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(0));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return compilation;
        }

        [HttpGet]
        public string Style(string p1)
        {
            string styles = "";

            if (Cache.Style != "")
            {
                styles = Cache.Style;
            }
            else
            {
                List<string> listStyles = new List<string>();
                
                listStyles.Add("/Files/css/main.css");

                FileStream stream;
                StreamReader reader;

                foreach (string style in listStyles)
                {
                    stream = new FileStream(Server.MapPath(style), FileMode.Open, FileAccess.Read);
                    reader = new StreamReader(stream);

                    styles += reader.ReadToEnd() + "\r\n\r\n";

                    stream.Flush();
                    stream.Close();

                    stream.Dispose();
                    reader.Dispose();
                }

                styles = styles.Replace("{version}", p1);

                Cache.Style = styles;
            }

            Response.ContentType = ContentTypes.Stylesheet;            
            Response.Cache.SetCacheability(HttpCacheability.Private);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(31568000));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return styles;
        }

        [HttpGet]
        public string Script(string p1)
        {
            string script = "";

            if (Cache.Script != "")
            {
                script = Cache.Script;
            }
            else
            {
                List<string> config;

                FileStream stream;
                StreamReader reader;

                stream = new FileStream(Server.MapPath("/Files/js/config.json"), FileMode.Open, FileAccess.Read);
                reader = new StreamReader(stream);

                config = new JavaScriptSerializer().Deserialize<List<string>>(reader.ReadToEnd());

                stream.Flush();
                stream.Close();

                stream.Dispose();
                reader.Dispose();

                foreach (string s in config)
                {
                    stream = new FileStream(Server.MapPath(s), FileMode.Open, FileAccess.Read);
                    reader = new StreamReader(stream);

                    script += reader.ReadToEnd() + "\r\n\r\n";

                    stream.Flush();
                    stream.Close();

                    stream.Dispose();
                    reader.Dispose();
                }

                Cache.Script = script;
            }

            Response.ContentType = ContentTypes.Javascript;            
            Response.Cache.SetCacheability(HttpCacheability.Private);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(31568000));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return script;
        }

        [HttpGet]
        public string Module(string p1, string p2)
        {
            string script = "";
            string module = p2.ToLower();

            if (Cache.Modules.Keys.Contains(module))
            {
                script = Cache.Modules[module];
            }
            else
            {
                List<string> config;

                FileStream stream;
                StreamReader reader;

                stream = new FileStream(Server.MapPath("/Files/js/modules/" + module + "/config.json"), FileMode.Open, FileAccess.Read);
                reader = new StreamReader(stream);

                config = new JavaScriptSerializer().Deserialize<List<string>>(reader.ReadToEnd());

                stream.Flush();
                stream.Close();

                stream.Dispose();
                reader.Dispose();

                foreach (string s in config)
                {
                    stream = new FileStream(Server.MapPath(s), FileMode.Open, FileAccess.Read);
                    reader = new StreamReader(stream);

                    script += reader.ReadToEnd() + "\r\n\r\n";

                    stream.Flush();
                    stream.Close();

                    stream.Dispose();
                    reader.Dispose();
                }

                Cache.Modules[module] = script;
            }

            Response.ContentType = ContentTypes.Javascript;            
            Response.Cache.SetCacheability(HttpCacheability.Private);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(31568000));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return script;
        }

    }
}