# NextPlay 🎬 (O Novo TV Time)

> MVP desenvolvido para a disciplina de Web Development — FIAP (Sprint 3 / CP1 - 2TRI).

Plataforma web responsiva voltada à descoberta ágil de filmes e combate à fadiga de decisão, desenvolvida em React seguindo rigorosamente a metodologia *Spec-Driven Development (SDD)*.

---

## 👥 Equipe de Desenvolvimento
* *Bruno Bastos* — RM: 569434
* *Arthur Sgarbi* — RM: 569774
* *Pedro Oliveira* — RM: 572468

---

## 🔗 Links do Projeto
* *Deploy na Vercel:* https://cp4-web-next-play.vercel.app
* *Repositório no GitHub:* https://github.com/PedroOliDev/Cp4-Web-NextPlay.git

---

## 📌 Problema e Oportunidade
Com o encerramento das atividades do aplicativo TV Time, usuários ao redor do mundo perderam sua principal ferramenta de acompanhamento e catalogação de conteúdo. Somado a isso, o excesso de catálogos fragmentados em diversos serviços de streaming gera o "paradoxo da escolha": usuários passam dezenas de minutos navegando sem conseguir decidir o que assistir.

## 💡 Solução Proposta
O *NextPlay* é uma aplicação web focada em descoberta simplificada e objetiva. A plataforma consome dados em tempo real de tendências do cinema e oferece a funcionalidade da *Roleta Aleatória*, que seleciona instantaneamente um título bem avaliado para o usuário assistir, permitindo salvá-lo em uma lista de interesses pessoal persistida no navegador.

---

## 🚀 Funcionalidades Principais
* *Descoberta Semanal:* Listagem atualizada dos filmes em alta consumindo a API pública do TMDB via requisições assíncronas.
* *Roleta Aleatória ("Surpreenda-me"):* Algoritmo que seleciona um filme aleatório do catálogo utilizando Math.floor() e Math.random().
* *Exibição de Avaliações:* Notas das produções tratadas e arredondadas com a biblioteca matemática Math.round().
* *Detalhes do Conteúdo:* Rota dinâmica (/detalhes/:id) via useParams trazendo sinopse, capa e dados completos da produção.
* *Minha Lista (Watchlist):* Gerenciamento de filmes favoritos com persistência local no navegador via localStorage.
* *Tratamento de Rotas Inexistentes:* Rota de fallback (*) para páginas 404.

---

## 🛠️ Tecnologias Utilizadas
* *Vite + React (JavaScript puro - .jsx):* Setup ágil sem uso de TypeScript.
* *React Router DOM (v6+):* Roteamento moderno utilizando createBrowserRouter, <RouterProvider>, <Outlet/>, useParams e navegação declarativa com <Link>.
* *CSS Puro:* Estilização componentizada e global do zero, sem uso de bibliotecas utilitárias (Tailwind/Bootstrap).
* *Lucide React:* Biblioteca de ícones vetoriais leves.
* *TMDB API:* The Movie Database API para fornecimento dos dados de filmes e pôsteres.

---

## 🌐 API Utilizada
A aplicação integra com a API oficial do *The Movie Database (TMDB)*:
* *Endpoints consumidos:*
  * Tendências da semana: [https://api.themoviedb.org/3/trending/movie/week](https://api.themoviedb.org/3/trending/movie/week)
  * Detalhes do filme: [https://api.themoviedb.org/3/movie/](https://api.themoviedb.org/3/movie/){movie_id}
  * Base de imagens (CDN): [https://image.tmdb.org/t/p/w500](https://image.tmdb.org/t/p/w500)
* *Implementação técnica:* Requisições via API fetch nativa encapsuladas em funções async/await com tratamento de exceções em blocos try/catch.

---

## 📁 Estrutura do Projeto (Spec-Driven Development)

text
proximo-tv-time/
├── docs/
│   ├── references/
│   │   ├── imagens/             # Capturas das referências visuais
│   │   └── references.md        # Justificativas de UX (Netflix, Letterboxd, Spotify)
│   ├── requirements.md          # User stories, escopo e regras de negócio
│   └── architecture.md          # Mapeamento de rotas, componentes e estados
├── src/
│   ├── components/              # Header, Footer, MovieCard, RatingBadge
│   ├── pages/                   # RootLayout, Home, Roleta, Detalhes, Watchlist, PageNotFound
│   ├── index.css                # Estilização global
│   └── main.jsx                 # Configuração do createBrowserRouter
├── .env                         # Variáveis de ambiente (API Key)
├── .gitignore
├── INTEGRANTES.TXT              # Identificação dos membros da equipe
├── package.json
└── README.md


---

## 🤖 Declaração do Uso de Inteligência Artificial
Seguindo as diretrizes de *Spec-Driven Development (SDD)* da disciplina, ferramentas de Inteligência Artificial foram empregadas estritamente como suporte no planejamento e geração da documentação inicial (requirements.md e architecture.md). Todas as decisões técnicas, restrições arquiteturais e estéticas foram governadas pela equipe, proibindo ferramentas fora do escopo de aula (como Axios, Redux ou TypeScript) e garantindo que os componentes fossem desenvolvidos exclusivamente com a stack lecionada (useState, useEffect, fetch, createBrowserRouter e Math).

---

## 🔑 Autenticação e Credenciais de Teste
A aplicação não requer cadastro, login ou senhas para acesso. Toda a experiência de salvar filmes é vinculada localmente ao navegador do usuário via localStorage.

---

## ⚙️ Instruções de Instalação e Execução

### Pré-requisitos
* *Node.js* (versão 18 ou superior) instalado na máquina.
* Gerenciador de pacotes *npm*.

### 1. Clonar o repositório
bash
git clone https://github.com/PedroOliDev/Cp4-Web-NextPlay.git



### 2. Configurar as variáveis de ambiente
Crie um arquivo chamado .env na raiz do projeto (mesmo nível do package.json) e insira a sua chave da API do TMDB:
env
VITE_TMDB_API_KEY=coloque_sua_chave_do_tmdb_aqui( você tera que criar a sua chave por questões de segurança nao podemos colocar a nossa)


### 3. Instalar as dependências
bash
npm install


### 4. Executar em ambiente de desenvolvimento
bash
npm run dev

Acesse http://localhost:5173 no navegador.
