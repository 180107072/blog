import { useRef, isValidElement, cloneElement } from "react";
import { useElapsedTime } from "use-elapsed-time";
import { Characters, Props } from "@/types";
import { getCharactersData, getRandomCharacter } from "@/utils/random-reveal";

type RandomRevealProps = {
  duration?: number;
  children: string;
};

export const useRandomReveal = ({ duration, children }: RandomRevealProps) => {
  const prevTimeRef = useRef<number>();
  const charactersRef = useRef<Characters>([]);

  const { elapsedTime } = useElapsedTime({
    isPlaying: true,
    updateInterval: 0.001,
    duration,
  });

  if (prevTimeRef.current === elapsedTime) {
    return charactersRef.current;
  }

  prevTimeRef.current = elapsedTime;
  charactersRef.current = [];

  const charactersData = getCharactersData({ duration, children });

  for (let i = 0; i < charactersData.length; i++) {
    const { character, revealTime } = charactersData[i];
    if (character === " ") charactersRef.current.push(" ");
    const nextCharacter =
      elapsedTime >= revealTime ? character : getRandomCharacter();

    charactersRef.current.push(nextCharacter);
  }

  return charactersRef.current;
};
