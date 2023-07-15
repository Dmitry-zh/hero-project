import { useCallback, useState } from 'react';

const useFightTurn = () => {
  const [turn, setTurn] = useState(0);

  const incrementTurn = useCallback(() => {
    setTurn((prev) => prev + 1);
  }, [setTurn]);

  return {
    turn,
    incrementTurn
  };
};

export { useFightTurn };
