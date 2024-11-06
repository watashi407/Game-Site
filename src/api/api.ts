import { Game, GameType , GameProvider } from "../types/Game";

export const games = [
    {
      id: 1,
      name: "Sugar Rush",
      description: "An action-adventure game set in a post-apocalyptic world.",
      image: "/images/games/1.png",
      type: GameType.NEW,
      provider: GameProvider.EVERY_MATRIX
    },
    {
      id: 2,
      name: "Big Bro Wolf",
      description: "A story of a Greek god and his son in a land of Norse mythology.",
      image: "/images/games/2.png",
      type: GameType.SLOTS,
      provider: GameProvider.EVERY_MATRIX
    },
    {
      id: 3,
      name: "Shaolin Crew",
      description: "An epic tale of life in America’s unforgiving heartland.",
      image: "/images/games/3.png",
      type: GameType.NEW,
      provider: GameProvider.EVOLUTION
    },
    {
      id: 4,
      name: "Book of the Egypt",
      description: "An open-world, action-adventure story set in Night City.",
      image: "/images/games/4.png",
      type: GameType.LIVE,
      provider: GameProvider.GAME_ART
    },
    {
      id: 5,
      name: "Crocrodile Biltz",
      description: "A post-apocalyptic RPG where machines roam the land.",
      image: "/images/games/5.png",
      type: GameType.TABLES_GAMES,
      provider: GameProvider.PLAYSON 
    },
    {
      id: 6,
      name: "Anocada wild 2 powerplay jackpot",
      description: "A thrilling story of the iconic superhero swinging through NYC.",
      image: "/images/games/6.png",
      type: GameType.TABLES_GAMES,
      provider: GameProvider.PLAYTECH
    },
    {
      id: 7,
      name: "maya Jackpot",
      description: "A thrilling story of the iconic superhero swinging through NYC.",
      image: "/images/games/7.png",
      type: GameType.LIVE,
      provider: GameProvider.PLAY_N_GO
    },
    {
      id: 8,
      name: "Beach Life",
      description: "A thrilling story of the iconic superhero swinging through NYC.",
      image: "/images/games/8.png",
      type: GameType.SLOTS,
      provider: GameProvider.PRAGMATIC_PLAY
    },
    {
      id: 9,
      name: "Spider-Man",
      description: "A thrilling story of the iconic superhero swinging through NYC.",
      image: "/images/games/9.png",
      type: GameType.OTHERS,
      provider: GameProvider.RED_TIGER
    },
    {
      id: 10,
      name: "Inca Jackpot",
      description: "A thrilling story of the iconic superhero swinging through NYC.",
      image: "/images/games/10.png",
      type: GameType.LIVE,
      provider: GameProvider.RELAX_GAMING 
    },
    {
      id: 11,
      name: "Spider-Man",
      description: "A thrilling story of the iconic superhero swinging through NYC.",
      image: "/images/games/11.png",
      type: GameType.SLOTS,
      provider: GameProvider.XPANS
    },
    {
      id: 12,
      name: "Spider-Man",
      description: "A thrilling story of the iconic superhero swinging through NYC.",
      image: "/images/games/12.png",
      type: GameType.SLOTS,
      provider: GameProvider.EZUGI_SMART_MOVE
    },
  ];
  

  export const fetchGames = async (query = ""): Promise<Game[]> => {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const filterdGames = games.filter((todo) =>
      todo.name.toLowerCase().includes(query.toLowerCase())
    );

  
    return [...filterdGames];
  };


  export const fetchGamesType = async (type = ""): Promise<Game[]> => {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const filterdGames = games.filter((todo) =>
      todo.type.toLowerCase().includes(type.toLowerCase())
    );

  
    return [...filterdGames];
  };
