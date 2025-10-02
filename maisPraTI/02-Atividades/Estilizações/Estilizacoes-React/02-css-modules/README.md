# Implementação padrão CSS-Module

Esta implementação utiliza o padrão de estilização CSS-Module com pré-processamento SCSS.

## Principais Recursos

- Utiliza o padrão de estilização CSS-Module de escopo local, evitando conflitos em nome de classe;
- Implementa design responsivo com consultas de media-querys;
- Suporte para: Tema escuro e Produtos Favoritos com persistência em localStorage;
- Estrutura baseada em componentes com componentes reutilizáveis;
- Focus ring para acessibilidade;
- Estados de carregamento tipo Skeleton para evitar mudanças bruscas de layout.

## Estrutura

- `src/assets/` - Recursos de imagem;
- `src/components/` - Componentes React;
- `src/hooks/` - Hook Personalizado para lidar com o LocalStorage;
- `src/styles/` - Contém todos os arquivos CSS-Module.

## Abordagem de Estilização

- Estilos específicos em arquivos modulares tipo CSS-Module de escopo local em cada componente;

## Componentes

- Barra de navegação com alternância de tema persistente ;
- ProductGrid com colunas responsivas;
- ProductCard com imagem, título com ellipsis , preço, icone de rating persistente;
- Botão com variantes solid,outline e ghost;
- Componentes de carregamento tipo Skeleton.

## Executando o Aplicativo

1. No terminal, acessar a pasta do projeto e do sub-projeto, conforme o tipo de estilização desejada;
2. Digitar: npm install - para instalar os pacotes necessários;
3. Digitar: npm start - para rodar o projeto no navegador.
