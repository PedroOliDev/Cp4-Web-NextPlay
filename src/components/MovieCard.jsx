import { Link } from 'react-router-dom';
import RatingBadge from './RatingBadge';

export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=Sem+Poster';

  return (
    <Link to={`/detalhes/${movie.id}`} className="movie-card">
      <div className="movie-poster-wrapper">
        <img src={imageUrl} alt={movie.title} className="movie-poster" />
        {movie.vote_average > 0 && <RatingBadge voteAverage={movie.vote_average} />}
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
      </div>
    </Link>
  );
}
