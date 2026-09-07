import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import RatingBadge from '../components/RatingBadge';

export default function Detalhes() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        if (!apiKey || apiKey === 'sua_chave_aqui') {
          throw new Error('Chave da API do TMDB não configurada.');
        }

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar detalhes do filme');
        }

        const data = await response.json();
        setMovieDetails(data);
        
        // Verifica se já está salvo no localStorage
        const savedList = JSON.parse(localStorage.getItem('nextplay_watchlist')) || [];
        const exists = savedList.some(movie => movie.id === data.id);
        setIsSaved(exists);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const toggleSave = () => {
    const savedList = JSON.parse(localStorage.getItem('nextplay_watchlist')) || [];
    
    if (isSaved) {
      // Remover
      const newList = savedList.filter(m => m.id !== movieDetails.id);
      localStorage.setItem('nextplay_watchlist', JSON.stringify(newList));
      setIsSaved(false);
    } else {
      // Adicionar (salvamos apenas os dados essenciais para os cards na watchlist)
      const movieToSave = {
        id: movieDetails.id,
        title: movieDetails.title,
        poster_path: movieDetails.poster_path,
        vote_average: movieDetails.vote_average
      };
      savedList.push(movieToSave);
      localStorage.setItem('nextplay_watchlist', JSON.stringify(savedList));
      setIsSaved(true);
    }
  };

  if (loading) return <div className="message">Carregando detalhes...</div>;
  if (error) return <div className="message error">{error}</div>;
  if (!movieDetails) return null;

  const imageUrl = movieDetails.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=Sem+Poster';

  return (
    <div className="details-container">
      <img src={imageUrl} alt={movieDetails.title} className="details-poster" />
      <div className="details-info">
        <h2 className="details-title">{movieDetails.title}</h2>
        <div className="flex items-center gap-2 mt-2">
          {movieDetails.vote_average > 0 && <RatingBadge voteAverage={movieDetails.vote_average} />}
          <span className="text-muted">
            {movieDetails.release_date ? movieDetails.release_date.split('-')[0] : 'Ano desconhecido'}
          </span>
          <span className="text-muted">|</span>
          <span className="text-muted">{movieDetails.runtime} min</span>
        </div>
        
        <p className="details-overview">{movieDetails.overview || 'Sinopse não disponível em português.'}</p>
        
        <button 
          className={isSaved ? "btn-secondary" : "btn-primary"} 
          onClick={toggleSave}
        >
          {isSaved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
          {isSaved ? 'Remover da Minha Lista' : 'Salvar na Minha Lista'}
        </button>
      </div>
    </div>
  );
}
