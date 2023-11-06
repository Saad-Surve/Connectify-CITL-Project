import NewsCard from "@/components/cards/NewsCard";
import WeatherCard from "@/components/cards/WeatherCard";
import { mashup } from "@/lib/actions/webmashup.actions";

async function Page() {
    const data = await mashup()
    // use the navigator api to get values of latitude and longitude and set it to two const variables


    return(
        <>  
            <div className="flex flex-col">
                <span className="text-[1.8rem] font-bold">Current Weather:</span>
                <WeatherCard weather={data.weather} />
            </div>

            <div className="flex flex-col ">
                <span className="text-[1.8rem] font-bold">Current Trending News:</span>
                {data.news.value.map((newsItem:any)=>{
                    return (
                        <div>
                            <NewsCard news={newsItem} />
                        </div>
                    )

                
                
                })}
            </div>
        </>
    )
}
export default Page;