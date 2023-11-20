import NewsCard from "@/components/cards/NewsCard";
import WeatherCard from "@/components/cards/WeatherCard";
import { mashup } from "@/lib/actions/webmashup.actions";

async function Page() {
    const data = await mashup()
    // use the navigator api to get values of latitude and longitude and set it to two const variables


    return(
        <>  
            <div className="flex flex-col mb-20">
                <span className="text-[1.8rem] font-bold mb-10">Current Weather:</span>
                {data?<WeatherCard weather={data.weather} />:''}
            </div>

            <div className="flex flex-col mb-10">
                <span className="text-[1.8rem] font-bold mb-10">Current Trending News:</span>
                {/* @ts-ignore */}
                {data?.news?.value?.map((newsItem:any)=>{
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