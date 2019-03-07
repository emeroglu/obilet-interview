using obilet.Repository;
using System.Net.Http;
using System.Net.Http.Headers;

namespace obilet.Agents
{
    public class Agency
    {
        private static HttpClient httpClient;
        public static HttpClient HttpClient
        {
            get
            {
                if (httpClient == null)
                {
                    httpClient = new HttpClient();                    
                    httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue(ContentTypes.Json));
                    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Config.Basic_Token);
                }

                return httpClient;
            }
        }
    }
}