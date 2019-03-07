using Newtonsoft.Json;
using obilet.Abstract;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace obilet.Agents
{
    public class HttpPostAgent<ResponseModelType>
    {        
        public string Url { get; set; }
        public object Body { get; set; }

        public Action<ResponseModelType> OnSuccess { get; set; }

        public void Send()
        {
            string result = SendAsync().Result;

            ResponseModelType response = JsonConvert.DeserializeObject<ResponseModelType>(result);

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