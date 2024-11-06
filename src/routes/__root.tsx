import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import  { createContext, useState   } from 'react';
import { Flame, Search , Cannabis, GalleryVerticalEnd, Speech } from 'lucide-react';


    interface ButtonContextType {
    isToggled: boolean;
    setIsToggled: (isToggled: boolean) => void;
  }
    
 export const ButtonContext = createContext<ButtonContextType>({ 
    isToggled: false, 
    setIsToggled: () => void 0 
  });

export const Route = createRootRoute({
  component: () => {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);  // Toggle the state between true and false
      };
    return (
        <>
  <div className="max-w-sm flex gap-x-4  py-3 px-6  text-nowrap whitespace-nowrap mx-[15px] overflow-x-auto ...">
    <button
      onClick={handleToggle}
      className="flex flex-col items-center justify-center w-[60px] h-[30px] border-gray-300 text-[11px] font-bold space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <Search size={16} color={`#4290f5`} strokeWidth={0.5} absoluteStrokeWidth  />
      SEARCH
    </button>
    
    <Link
      to="/"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <Flame size={16} color={'#f54e42'} strokeWidth={0.5} absoluteStrokeWidth  />
      START
    </Link>

    <Link
      to="/new"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
    
      <Cannabis size={16} color={'#03fc7f'} strokeWidth={0.5} absoluteStrokeWidth  />
      NEW
    </Link>

    <Link
      to="/slot"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <GalleryVerticalEnd size={16} color={'#f54e42'} strokeWidth={0.5} absoluteStrokeWidth  />
      SLOTS
    </Link>

    <Link
      to="/live"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <Speech size={16} color={'#f54e42'} strokeWidth={0.5} absoluteStrokeWidth  />
      LIVE
    </Link>

    <Link
      to="/jackpot"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <Flame size={16} color={'#f54e42'} strokeWidth={0.5} absoluteStrokeWidth  />
      JACKPOTS
    </Link>

    <Link
      to="/tables"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <Flame size={16} color={'#f54e42'} strokeWidth={0.5} absoluteStrokeWidth  />
      TABLES GAMES
    </Link>

    <Link
      to="/bingo"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <Flame size={16} color={'#f54e42'} strokeWidth={0.5} absoluteStrokeWidth  />
      BINGO
    </Link>

    <Link
      to="/others"
      className="[&.active]:font-bold flex flex-col items-center justify-center  w-[60px] h-[30px] border-gray-300 text-[11px]  space-y-1 hover:bg-violet-300 rounded-lg hover:p-3"
    >
      <Flame size={16} color={'#f54e42'} strokeWidth={0.5} absoluteStrokeWidth  />
      OTHERS
    </Link>
  </div>

  <hr className="my-1 font-bold" />





  <ButtonContext.Provider value={{ isToggled, setIsToggled }}>
  <Outlet />
</ButtonContext.Provider>
  
  
 
  
  <TanStackRouterDevtools />
  <ReactQueryDevtools />

</>
    );
  },
});