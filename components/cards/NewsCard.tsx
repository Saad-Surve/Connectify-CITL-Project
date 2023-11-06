"use client"
import React from "react";
import {Card, CardBody, Image, Button} from "@nextui-org/react";
import Link from "next/link";

export default function NewsCard(news:any) {
  return (
    <>
        <Card
        isBlurred
        className="border-none bg-background/60 mb-5 dark:bg-default-100/50 "
        shadow="sm"
        >
        <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            
                <Image
                alt="Album cover"
                className="object-cover"
                height="100rem"
                shadow="md"
                src={news.news.image?.thumbnail.contentUrl||'assets/news.jpg'}
                width="100rem"
                />
           

            <div className="flex flex-col col-span-11 md:col-span-11">
                <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-large text-foreground/90">{news.news.name}</h3>
                    <p className="text-small text-foreground/80"></p>
                    <h1 className="text-primary-500 font-medium mt-2"><Link href={news.news.url}>{news.news.provider[0].name}</Link></h1>
                </div>
                
                </div>

               
            </div>
            </div>
        </CardBody>
        </Card>   
    </>
    
  );
}
