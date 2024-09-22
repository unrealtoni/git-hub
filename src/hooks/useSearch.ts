import { Platform } from "./usePlatforms";
import useData from "./useData";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useSearch = () => useData<Game>("/search");

export default useSearch;
