# [React-Poke-Pagination](https://heroic-dieffenbachia-76f10f.netlify.app/)

## Deploy

Você pode acessar a versão implantada deste projeto [aqui](https://heroic-dieffenbachia-76f10f.netlify.app/).

## Imagens

![Imagem da página inicial do projeto](https://github.com/NikisGabriel/poke-pagination-react/tree/main/documents/poke-pagination-react)
![Imagem do menu de navegação aberto](https://github.com/NikisGabriel/poke-pagination-react/tree/main/documents/poke-pagination-react-menu.png)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o Node.js e o Git em sua máquina.

## Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/NikisGabriel/poke-pagination-react.git
   ```

2. Navegue até a pasta da aplicação:

   ```bash
   cd poke-pagination-react
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Tecnologias Utilizadas

- JavaScript
- TypeScript
- Git
- Vite
- React
- Styled-components
- React Router
- Axios

## API Externa

Este projeto consome a API externa Poké API para dados dos itens paginados. [Poké API ](https://pokeapi.co/)

## Padrões de Codificação

- **Nomenclatura:**

  - Componentes: Utilizam o padrão PascalCase.
  - Contextos: Utilizam o padrão PascalCase com o sufixo "Context".
  - Provedores: Seguem o padrão PascalCase com o sufixo "Provider".
  - Funções: Seguem o padrão camelCase.
  - Constantes e variáveis: Seguem o padrão camelCase.

- **Estrutura de Arquivos:**
  - `src`: Contém o código-fonte da aplicação.
    - `assets`: Inclui recursos estáticos como imagens, fontes, etc.
    - `components`: Reúne componentes React reutilizáveis.
    - `contexts`: Contém Contexts e Providers do React para compartilhamento de estados.
    - `routes`: Mantém os componentes containers que encapsulam as principais lógicas.
    - `style`: Contém os estilos reutilizáveis da aplicação.
    - `App.tsx`: O componente raiz da aplicação React, responsável pelo roteamento com React Router.
    - `main.tsx`: Ponto de entrada principal da aplicação, responsável por configurar os principais Providers.
  - `index.html`: A página principal da aplicação.
  - `vite.config.ts`: Configurações do Vite.
  - `tsconfig.json`: Configurações do TypeScript.
  - `documents`: Pasta destinada à documentação do projeto.
  - `package.json`: Arquivo para gerenciamento de dependências e informações do projeto.

## Possíveis Atualizações

Entre as ideias de atualização para o projeto, estão:

- Melhora da responsividade.
- Correções no sistema de roteamento de páginas.
- Melhoras nos padrões de escrita de código.

## Observações

Este projeto foi um dos primeiros desenvolvidos de forma independente. Foi criado com foco em estudos, especialmente explorando a criação de um sistema de paginação, está bem comentado tentando passar a visão da lógica para realização da paginação, mas se encontra bem obsoleto em aspectos como o emprego de bons padrões e escalabilidade.
