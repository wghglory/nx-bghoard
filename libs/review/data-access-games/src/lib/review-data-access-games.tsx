import { useState, useEffect } from 'react';
import { Game } from '@nx-bghoard/api-interfaces';

export function useGames() {
  const [games, setGame] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then(r => r.json())
      .then(setGame);
  }, []);

  return games;
}
