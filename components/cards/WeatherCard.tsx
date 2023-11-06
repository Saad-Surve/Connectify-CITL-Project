"use client"
import { Card, CardHeader, Image } from "@nextui-org/react"

const WeatherCard = (weather:any) => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col md:gap-3 !items-center">
        <Image
        width={100}
        height={100}
            alt="Card background"
            src={weather.weather.current.condition.icon}
        />
        <p className="text-large md:text-[2.2rem] text-black uppercase font-bold">Temperature:{weather.weather.current.temp_c} &#176; C</p>
        <p className="text-large md:text-[2.2rem] text-black uppercase font-bold">Humidity:{weather.weather.current.humidity}</p>
        <p className="text-large md:text-[2.2rem] text-black uppercase font-bold">Condition:{weather.weather.current.condition.text}</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/assets/aky.webp"
      />
    </Card>
  )
}

export default WeatherCard