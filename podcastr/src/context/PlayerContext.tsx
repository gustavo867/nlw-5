import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: string;
  url: string;
};

type PlayerContextData = {
  episodeList: Episode[];
  setEpisodeList: Dispatch<SetStateAction<Episode[]>>;
  currentEpisodeIndex: number;
  setCurrentEpisodeIndex: Dispatch<SetStateAction<number>>;
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  hasPrevious: boolean;
  hasNext: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  play(episode: Episode): void;
  togglePlay(): void;
  playList(list: Episode[], index: number): void;
  playNext(): void;
  playPrevious(): void;
  toggleLoop(): void;
  toggleShuffle: () => void;
  clearPlayerState(): void;
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
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number) {
    setCurrentEpisodeIndex(index);
    setEpisodeList(list);
    setIsPlaying(true);
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  function togglePlay() {
    setIsPlaying((state) => !state);
  }

  function toggleLoop() {
    setIsLooping((state) => !state);
  }

  function toggleShuffle() {
    setIsShuffling((state) => !state);
  }

  function playNext() {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      );

      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex((state) => state + 1);
    }
  }

  function playPrevious() {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex((state) => state - 1);
    }
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
      playList,
      playNext,
      playPrevious,
      hasPrevious,
      hasNext,
      toggleLoop,
      isLooping,
      toggleShuffle,
      isShuffling,
      clearPlayerState,
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
      playList,
      playNext,
      playPrevious,
      hasPrevious,
      hasNext,
      toggleLoop,
      isLooping,
      toggleShuffle,
      isShuffling,
      clearPlayerState,
    ]
  );

  return (
    <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};
