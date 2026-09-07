import { Link } from 'react-router-dom';
import { Film, Shuffle, Bookmark } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <Film size={28} />
        NextPlay
      </Link>
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Início
        </Link>
        <Link to="/roleta" className="nav-link flex items-center gap-2">
          <Shuffle size={18} />
          Roleta
        </Link>
        <Link to="/minha-lista" className="nav-link flex items-center gap-2">
          <Bookmark size={18} />
          Minha Lista
        </Link>
      </nav>
    </header>
  );
}
