import { createLazyFileRoute } from '@tanstack/react-router';
import { useGames } from "../hooks/useGames";
import React, { useState, useEffect, useContext } from 'react';
import { ButtonContext } from './__root';
import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { BookHeart, Star } from "lucide-react";
import { Game } from "@/types/Game";


export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
});



function RouteComponent() {
  const context  = useContext(ButtonContext)
  const { isToggled } = context ?? {};
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const { data: games, isLoading } = useGames(debouncedSearch);

  // Debounce the search query to avoid making an API call for each keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search); // Set debounced value after a delay
    }, 700); // 500ms debounce delay

    return () => {
      clearTimeout(timer); // Clean up the timeout when the component re-renders or search changes
    };
  }, [search]); // Run this effect every time the search query changes

  if (isLoading) return <div>Loading...</div>;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value); // Update search state when input changes
  };

  const clearSearch = () => {
    setSearch(''); // Clear the search input
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <>
    <section className='space-y-1 p-3 overflow-x:hidden'>
      <div className="flex search-container relative items-center justify-center">
        {isToggled && (
          <>
          <div className="relative m-4">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search for games..."
              className="p-2 border rounded-md pr-10"
            />
     
            {search && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-sm"
              >
                &times;
              </button>
            )}
          </div>
          <Button className='bg-slate-'>
            <BookHeart size={16} strokeWidth={0.5} absoluteStrokeWidth />
          </Button>
          </>
        )}
      </div>

      {/* Render games list */}
      
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
  );
}
