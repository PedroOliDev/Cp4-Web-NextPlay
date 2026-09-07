import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [trendingList, setTrendingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        if (!apiKey || apiKey === 'sua_chave_aqui') {
          throw new Error('Chave da API do TMDB não configurada.');
        }

        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar filmes');
        }

        const data = await response.json();
        setTrendingList(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) return <div className="message">Carregando filmes...</div>;
  if (error) return <div className="message error">{error}</div>;

  return (
    <div>
      <h2>Em Alta na Semana</h2>
      <div className="movie-grid">
        {trendingList.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
