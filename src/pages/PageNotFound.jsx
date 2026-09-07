import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="text-center mt-4">
      <h2>404 - Página não encontrada</h2>
      <p className="text-muted mt-2">A página que você está procurando não existe.</p>
      <Link to="/" className="btn-primary mt-4">
        Voltar para a Home
      </Link>
    </div>
  );
}
