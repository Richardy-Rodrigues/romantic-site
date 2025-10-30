"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "../_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_components/ui/carousel";

import ft1 from "@/assets/images/ft1.jpeg";
import ft2 from "@/assets/images/ft2.jpeg";
import ft3 from "@/assets/images/ft3.jpeg";
import ft4 from "@/assets/images/ft4.jpeg";
import ft5 from "@/assets/images/ft5.jpeg";

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  const images = [ft1, ft2, ft3, ft4, ft5];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: images.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl font-semibold">
                    <img src={images[index]} alt="Images" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
