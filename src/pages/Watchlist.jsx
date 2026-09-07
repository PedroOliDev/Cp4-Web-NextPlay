import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function Watchlist() {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('nextplay_watchlist')) || [];
    setSavedMovies(list);
  }, []);

  return (
    <div>
      <h2>Minha Lista</h2>
      {savedMovies.length === 0 ? (
        <div className="message mt-4">
          Você ainda não salvou nenhum filme. Explore e adicione à sua lista!
        </div>
      ) : (
        <div className="movie-grid">
          {savedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
