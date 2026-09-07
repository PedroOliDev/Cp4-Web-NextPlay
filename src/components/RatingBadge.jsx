import { Star } from 'lucide-react';

export default function RatingBadge({ voteAverage }) {
  // Uso OBRIGATÓRIO de Math.round() conforme especificado
  const roundedRating = Math.round(voteAverage * 10) / 10;
  
  return (
    <div className="rating-badge">
      <Star size={14} fill="#fbbf24" color="#fbbf24" />
      <span>{roundedRating}</span>
    </div>
  );
}
