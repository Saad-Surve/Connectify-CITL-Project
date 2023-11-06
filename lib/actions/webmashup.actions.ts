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

    const response = await axios.request(options);
    return response.data;
}
async function getNewsData() {
    const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: {
          q:"news india",
          cc: "in",
          freshness: "Day",
          textFormat: "Raw",
          safeSearch: "Off",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": "43de42a3d6msh884781a135634b1p17c5efjsna54bd644d065",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };
    const response = await axios.request(options);
    return response.data;
}

export async function mashup(){
    const news = await getNewsData();
    const weather = await getWeatherData(19.1364, 72.8296);
    return {news, weather};
}