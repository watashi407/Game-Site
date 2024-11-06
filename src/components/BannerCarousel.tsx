'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent  } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useGames } from "@/hooks/useGames"
import { Game } from "@/types/Game"





export function CarouselPlugin() {

  const { data: games } = useGames();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className='mt-[2rem] px-3'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="p-0">
        {games?.map((game: Game) => (
          <CarouselItem key={game.id}   className='w-full flex justify-center items-center p-0'>
                <div className='p-1 w-[600px]'>
                  <Card className='h-[200px] p-0'>
                    <CardContent className='flex items-center justify-center p-0'>
                        <img
                    src={game.image}
                    className="w-full object-cover  md:w-60 md:w-20"
                    alt={game.name}
                  />
                    </CardContent>
                  </Card>
                </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
