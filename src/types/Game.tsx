// // validation.ts
// import { z } from "zod";

// export const GameSchema = z.object({
//   id: z.number(),
//   name: z.string(),
//   description: z.string(),
// });

// export const GamesSchema = z.array(GameSchema);

// export type Game = z.infer<typeof GameSchema>;
// export type Games = z.infer<typeof GamesSchema>;
import { AnySearchSchema } from '@tanstack/react-router';

export type GamesListProps = {
  search: AnySearchSchema;
}


export enum GameType {
  START = "START",
  NEW = "NEW",
  SLOTS = "SLOTS",
  LIVE = "LIVE",
  JACKPOTS = "JACKPOTS",
  TABLES_GAMES = "TABLES GAMES",  
  OTHERS = "OTHERS",
}

export enum GameProvider {
  // Additional Game Providers
  EVERY_MATRIX = "EVERY_MATRIX",
  EVOLUTION = "EVOLUTION",
  XPANS = "XPANS",
  EZUGI_SMART_MOVE = "EZUGI_SMART_MOVE",
  GAME_ART = "GAME_ART",
  HABANERO = "HABANERO",
  HACKSAW_GAMING = "HACKSAW_GAMING",
  INBET_GAMES = "INBET_GAMES",
  MPLAY = "MPLAY",
  NETENT = "NETENT",
  PG = "PG",
  PLAY_N_GO = "PLAY_N_GO",
  PRAGMATIC_PLAY = "PRAGMATIC_PLAY",
  PLAYSON = "PLAYSON",
  PLAYTECH = "PLAYTECH",
  RED_TIGER = "RED_TIGER",
  RELAX_GAMING = "RELAX_GAMING",
}



export type Game = {
  id: number;
  name: string;
  description: string;
  image: string;
  type?: GameType;
  provider?: GameProvider; 
};