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
        [Route("File/Init")]
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
        [Route("File/Style/{version}")]
        public string Style(string version)
        {
            string styles = "";

            if (Cache.Style == "")
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

                styles = styles.Replace("{version}", version);

                Cache.Style = styles;
            }
            else
            {
                styles = Cache.Style;
            }

            Response.ContentType = ContentTypes.Stylesheet;            
            Response.Cache.SetCacheability(HttpCacheability.Private);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(31568000));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return styles;
        }

        [HttpGet]
        [Route("File/Script/{version}")]
        public string Script(string version)
        {
            string script = "";

            if (Cache.Script == "")
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
            else
            {
                script = Cache.Script;
            }

            Response.ContentType = ContentTypes.Javascript;            
            Response.Cache.SetCacheability(HttpCacheability.Private);
            Response.Cache.SetMaxAge(TimeSpan.FromSeconds(31568000));
            Response.Cache.SetRevalidation(HttpCacheRevalidation.None);

            return script;
        }

        [HttpGet]
        [Route("File/Module/{version}/{module}")]
        public string Module(string version, string module)
        {
            string script = "";            

            if (Cache.Modules.Keys.Contains(module))
            {
                script = Cache.Modules[module];
            }
            else
            {
                List<string> config;

                FileStream stream;
                StreamReader reader;

                stream = new FileStream(Server.MapPath("/Files/js/modules/" + module.ToLower() + "/config.json"), FileMode.Open, FileAccess.Read);
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