# Arquitetura e Mapeamento do MVP NextPlay

## 1. Roteamento (react-router-dom)
O app utilizará `createBrowserRouter` configurado na raiz (`main.jsx`).

| Caminho da Rota | Componente Renderizado | Descrição |
|-----------------|------------------------|-----------|
| `/` | `Home.jsx` | Lista de filmes em alta (Trending). |
| `/roleta` | `Roleta.jsx` | Sorteio aleatório de um filme em alta/bem avaliado. |
| `/detalhes/:id` | `Detalhes.jsx` | Visão detalhada de um filme e opção de favoritar. |
| `/minha-lista` | `Watchlist.jsx` | Lista de filmes salvos no `localStorage`. |
| `*` | `PageNotFound.jsx` | Rota de captura (404) para páginas não encontradas. |

*Nota: Todas as rotas acima são filhas do `RootLayout.jsx`, que renderiza o `Header`, `Footer` e o `<Outlet />`.*

## 2. Componentes Estruturais (Pasta `/components`)
- **Header.jsx**: Barra superior de navegação com links para `/`, `/roleta` e `/minha-lista`.
- **Footer.jsx**: Rodapé simples.
- **MovieCard.jsx**: Representação visual do filme em listas e grids. Recebe `movie` via props.
- **RatingBadge.jsx**: Exibe a nota do filme arredondada, demonstrando o uso de `Math.round()`.

## 3. Estados e Efeitos (Hooks Utilizados)
| Componente/Página | Estado (`useState`) | Efeitos e Lógicas Associadas |
|-------------------|---------------------|------------------------------|
| `Home.jsx` | `trendingList` | `useEffect` chama a API (`/trending/movie/week`) e popula o estado. |
| `Roleta.jsx` | `randomMovie` | `useEffect` busca uma lista. Um clique no botão ativa `Math.floor(Math.random() * array.length)` e atribui 1 filme ao estado. |
| `Detalhes.jsx` | `movieDetails`, `isSaved` | Busca os dados pelo ID (`useParams`). Controla o estado de `isSaved` validando contra o `localStorage`. |
| `Watchlist.jsx` | `savedMovies` | Lê o `localStorage` no monte (`useEffect`) e os exibe. |

## 4. Persistência e API
- A persistência (Watchlist) é mantida puramente através das funções síncronas do navegador: `localStorage.getItem('nextplay_watchlist')` e `localStorage.setItem('nextplay_watchlist', JSON.stringify(array))`.
- As chamadas externas para a API do TMDB são feitas com a função nativa `fetch` (ex: `fetch(url)`), implementadas via funções `async/await` aninhadas dentro de blocos `try/catch`.
