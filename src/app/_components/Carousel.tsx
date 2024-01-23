import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

export function CarouselComponent(props: {
  items: { heading: string; text: string }[];
}) {
  return (
    <div className="">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full  "
      >
        <CarouselContent>
          {props.items.map((item, idx) => (
            <CarouselItem key={idx} className=" h-48 md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card className="h-48 ">
                  <CardContent className=" flex aspect-square flex-col items-center gap-3 p-6">
                    <span className="text-3xl font-semibold text-blue-400">
                      {item.heading}
                    </span>
                    <p className="text-l font-medium">{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-10" />
        <CarouselNext className="-right-10" />
      </Carousel>
    </div>
  );
}
