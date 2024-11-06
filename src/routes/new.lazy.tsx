import { createLazyFileRoute } from '@tanstack/react-router'
import { useGamesTypeNew } from "../hooks/useGames";
import { Game } from '@/types/Game';
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useState } from 'react';

export const Route = createLazyFileRoute('/new')({
  component: RouteComponent,
})

function RouteComponent() {

const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});
 const { data: games, isLoading } = useGamesTypeNew();

 if (isLoading) return <div>Loading...</div>;

 const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites: { [key: number]: boolean }) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <>
    <section className='space-y-1 p-3 overflow-x:hidden'>    
        
    <ul className="w-full grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {games?.map((game: Game) => (
        <li key={game.id} className="flex flex-col relative basis-1/4">
          <Card className="shadow-none border-none">
            <CardContent className="p-0">
              <img
                src={game.image}
                className="w-full h-30 object-cover rounded-sm md:w-60 md:w-20"
                alt={game.name}
              />
            </CardContent>
          </Card>

          <Button
            onClick={() => toggleFavorite(game.id)}
            className={`absolute ${buttonVariants({ variant: "invisible" })} top-0 right-0 bg-transparent text-white w-[30px] h-[30px] pb-[19px] pl-[18px] pt-2 pr-2 -mr-[0.5px] half-color-diagonal active:bg-transparent focus:outline-none`}
          >
            <span
              className={`relative z-10 text-xl ${
                favorites[game.id] ? "text-yellow-400 " : "text-white"
              }`}
            >
              <Star  />
            </span>
          </Button>
        </li>
      ))}
    </ul>
    </section>  
 
  </>
  )
}
