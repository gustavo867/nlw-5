import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from "react";

type Episode = {
  title: string;
  members: string;
  thumbail: string;
  duration: string;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  setEpisodeList: Dispatch<SetStateAction<Episode[]>>;
  currentEpisodeIndex: number;
  setCurrentEpisodeIndex: Dispatch<SetStateAction<number>>;
  play(episode: Episode): void;
  isPlaying: boolean;
  togglePlay(): void;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
};

type Children = {
  children?: ReactNode;
};

export const PlayerContext = createContext<PlayerContextData>(
  {} as PlayerContextData
);

export function PlayerProvider({ children }: Children) {
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying((state) => !state);
  }

  const values = useMemo(
    () => ({
      episodeList,
      setEpisodeList,
      currentEpisodeIndex,
      setCurrentEpisodeIndex,
      play,
      isPlaying,
      togglePlay,
      setIsPlaying,
    }),
    [
      episodeList,
      setEpisodeList,
      play,
      currentEpisodeIndex,
      setCurrentEpisodeIndex,
      isPlaying,
      togglePlay,
      setIsPlaying,
    ]
  );

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
}
