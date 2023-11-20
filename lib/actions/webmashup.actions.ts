"use server"
import axios from 'axios';

export async function getWeatherData(latitude:number, longitute : number) {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${latitude},${longitute}`},
        headers: {
          'X-RapidAPI-Key': '43de42a3d6msh884781a135634b1p17c5efjsna54bd644d065',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      let response;
      try {
        
        response = await axios.request(options);
      } catch (error) {
        response={data:null}
        console.error(error)
      }

    return response.data;
}
async function getNewsData() {
    const options = {
        method: "GET",
        url: "https://api.bing.microsoft.com/v7.0/news/search",
        params: {
          q:"news india",
          freshness: "Day",
          textFormat: "Raw",
          safeSearch: "Off",
        },
        headers: {
          "Ocp-Apim-Subscription-Key": "597845d7f20a4178a9a2d902d2342a5f",
        },
      };
      let response;
      try {
        
        response = await axios.request(options);
        console.log(response)
      } catch (error) {
        response={data:null}
        console.error(error)
      }
      return response.data
}

export async function mashup(){
    const news = await getNewsData();
    const weather = await getWeatherData(19.1364, 72.8296);
    return {news, weather};
}