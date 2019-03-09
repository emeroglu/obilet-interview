using obilet.Repository;
using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web.Mvc;

namespace obilet.Controllers.Proxy
{
    public class ProxyController : Controller
    {
        [HttpPost]
        public void Redirect()
        {
            string api = "https://v2-api.obilet.com/api";
            string path = Request.RawUrl.ToString().Split(new string[] { "/Proxy/Redirect" }, StringSplitOptions.None).Last();
            string url = api + path;

            StreamReader reader = new StreamReader(Request.InputStream, Encoding.UTF8);
            string body = reader.ReadToEnd();
            reader.Close();

            HttpClient httpClient = new HttpClient();

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, url);
            request.Content = new StringContent(body);

            request.Headers.Clear();

            foreach (string key in Request.Headers.Keys)
            {
                if (key.ToLower() == "content-type")
                {
                    request.Headers.Accept.Clear();
                    request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue(Request.Headers[key]));

                    request.Content.Headers.ContentType = new MediaTypeHeaderValue(Request.Headers[key]);
                }
                else if (key.ToLower() == "authorization")
                {                    
                    request.Headers.Authorization = new AuthenticationHeaderValue("Basic", Request.Headers[key].Split(' ').Last());
                }
            }

            string result = httpClient.SendAsync(request).Result.Content.ReadAsStringAsync().Result;

            Response.ContentType = ContentTypes.Json;
            Response.Write(result);
        }


    }
}
