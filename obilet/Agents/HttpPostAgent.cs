using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Script.Serialization;

namespace obilet.Agents
{
    public class HttpPostAgent
    {        
        public string Url { get; set; }
        public object Body { get; set; }

        public Action<string> OnSuccess { get; set; }

        public void Send()
        {
            string response = SendAsync().Result;

            OnSuccess(response);
        }

        private async Task<string> SendAsync()
        {
            string body = JsonConvert.SerializeObject(Body);

            StringContent content = new StringContent(body);
            content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            return await Agency.HttpClient.PostAsync(Url, content).Result.Content.ReadAsStringAsync();            
        }
    }
}