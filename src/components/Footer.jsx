export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} NextPlay. Desenvolvido para FIAP (CP4).</p>
      <p className="mt-2 text-muted">Dados fornecidos por The Movie Database (TMDB).</p>
    </footer>
  );
}
