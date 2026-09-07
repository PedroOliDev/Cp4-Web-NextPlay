# Spec-Driven Development: Requisitos

## Problema
O TV Time foi descontinuado ou apresenta problemas, deixando usuários sem uma plataforma rápida e fácil para registrar e descobrir filmes. 

## Solução (NextPlay)
Uma plataforma ágil e focada em descobrir novos filmes. O NextPlay contará com uma "Roleta" que sorteia um filme para o usuário assistir, além de permitir favoritar títulos para ver depois.

## Público-alvo
Cinéfilos, estudantes e pessoas buscando dicas rápidas do que assistir hoje à noite.

## User Stories
1. **Ver em alta**: Como usuário, quero ver os filmes que estão em alta (trending) na Home, para saber o que está popular no momento.
2. **Roleta aleatória**: Como usuário indeciso, quero clicar no menu "Roleta" e receber a sugestão de apenas UM filme bem avaliado escolhido aleatoriamente.
3. **Detalhes**: Como usuário, quero clicar em um filme para ver mais detalhes sobre ele (sinopse, nota, etc).
4. **Favoritar**: Como usuário, quero poder adicionar e remover filmes da minha "Minha Lista" e vê-los em uma página separada, com as informações persistindo mesmo ao recarregar a aba.

## Critérios de Aceitação (Técnicos)
1. Construído em Vite + React (JavaScript, `.jsx`), sem TypeScript.
2. Apenas Componentes Funcionais, com passagem de props e children.
3. Roteamento com `react-router-dom` v6 (`createBrowserRouter`, `RouterProvider`).
4. Chamadas de API usando APENAS `fetch` nativo, `async/await` e `try/catch`.
5. Gerenciamento de estado apenas com `useState` e `useEffect`.
6. Persistência de "Watchlist" utilizando `localStorage`.
7. OBRIGATÓRIO o uso das funções da classe `Math` (`Math.random()`, `Math.floor()`, `Math.round()`).
8. Estilização utilizando CSS puro.
9. Uso da biblioteca `lucide-react` para ícones.
