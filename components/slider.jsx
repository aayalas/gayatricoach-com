import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { useTranslations } from 'next-intl';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Slider() {
  const t = useTranslations('Testi');

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
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-rectangle items-center justify-center p-6">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <p>"{t('t1')}"</p>
                  <p className="font-bold">S.V.</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-rectangle items-center justify-center p-6">
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                    <p>"{t('t2')}"</p>
                    <p className="font-bold">L.T.</p>
                  </CardContent>
                </Card>
              </div>
          </CarouselItem>
          <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-rectangle items-center justify-center p-6">
                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                    <p>"{t('t3')}"</p>
                    <p className="font-bold">R.M.</p>
                  </CardContent>
                </Card>
              </div>
          </CarouselItem>
        </>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="ghost"/>
      <CarouselNext variant="ghost"/>
    </Carousel>
  )
}
