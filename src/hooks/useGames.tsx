import { useQuery } from "@tanstack/react-query";
import { fetchGames , fetchGamesType } from "../api/api";
import { GameType } from "@/types/Game";



export const useGames = (query = "") => {
  return useQuery({
    queryFn: () => fetchGames(query),
    queryKey: ["games",{query}],
    staleTime: Infinity,
    gcTime: 0,
  });
};


export const useGamesTypeNew = (type: GameType = GameType.NEW) => {
  return useQuery({
    queryFn: () => fetchGamesType(type),
    queryKey: ["games",{type}],
    staleTime: Infinity,
    gcTime: 0,
  });
};


export const useGamesTypeSlot = (type: GameType = GameType.SLOTS) => {
  return useQuery({
    queryFn: () => fetchGamesType(type),
    queryKey: ["games",{type}],
    staleTime: Infinity,
    gcTime: 0,
  });
};


export const useGamesTypeLive = (type: GameType = GameType.LIVE) => {
  return useQuery({
    queryFn: () => fetchGamesType(type),
    queryKey: ["games",{type}],
    staleTime: Infinity,
    gcTime: 0,
  });
};
