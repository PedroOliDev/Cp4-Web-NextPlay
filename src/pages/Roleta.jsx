import { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';
import MovieCard from '../components/MovieCard';

export default function Roleta() {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRated = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        if (!apiKey || apiKey === 'sua_chave_aqui') {
          throw new Error('Chave da API do TMDB não configurada.');
        }

        // Busca filmes populares/bem avaliados para a roleta
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar filmes');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRated();
  }, []);

  const handleSpinRoulette = () => {
    if (movies.length > 0) {
      // Uso OBRIGATÓRIO dos operadores matemáticos
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  };

  if (loading) return <div className="message">Preparando a roleta...</div>;
  if (error) return <div className="message error">{error}</div>;

  return (
    <div className="roleta-container">
      <h2 className="text-center">Indeciso do que assistir?</h2>
      <p className="text-center text-muted mt-2">
        Gire a roleta e nós escolheremos um ótimo filme para você.
      </p>
      
      <button className="btn-primary mt-4" onClick={handleSpinRoulette}>
        <Shuffle size={20} />
        Girar a Roleta
      </button>

      {randomMovie && (
        <div className="roleta-featured">
          <h3 className="text-center mt-4">Sua sugestão de hoje é:</h3>
          <div className="mt-2">
            <MovieCard movie={randomMovie} />
          </div>
        </div>
      )}
    </div>
  );
}
