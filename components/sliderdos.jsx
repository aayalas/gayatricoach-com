import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function SliderDos(props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 2 }).map((_, index) => (
          <>
          <CarouselItem>
            <div className="">
              <Card>
                <CardContent className="flex aspect-rectangle items-center justify-center px-1 py-0">
                <img
                  src={`slides/1.png?v=${index}`}
                  // src='slides/1.png'
                  alt="image 1"
                  className="h-full w-full object-cover rounded-[20px]"
                />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-rectangle items-center justify-center px-1 py-0">
                    <img
                      src={`slides/2.png?v=${index}`}
                      // src='slides/2.png'
                      alt="image 1"
                      className="h-full w-full object-cover rounded-[20px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            {/* <CarouselItem>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-rectangle items-center justify-center px-1 py-0">
                    <img
                      src={`slides/3.png?v=${index}`}
                      // src='slides/2.png'
                      alt="image 1"
                      className="h-full w-full object-cover rounded-[20px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem> */}
            {/* <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-rectangle items-center justify-center p-6">
                    <img
                      src={`slides/4.png?v=${index}`}
                      // src='slides/2.png'
                      alt="image 1"
                      className="h-full w-full object-cover rounded-[20px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem> */}
            </>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="ghost" />
      <CarouselNext variant="ghost" />
    </Carousel>
  )
}


