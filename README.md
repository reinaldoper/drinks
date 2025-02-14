# Projeto de Drinks

Este projeto contém duas páginas que consomem APIs de drinks e renderizam os resultados na tela usando Bootstrap para estilização.

## Páginas

### 1. Página de Drinks Margarita

- **Arquivo:** `main.js`
- **API Consumida:** `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
- **Descrição:** Esta página exibe uma lista de drinks Margarita. Cada drink é exibido em um cartão que contém o nome do drink, a imagem, a categoria, o tipo de copo, as instruções e os ingredientes.

### 2. Página de Drinks Alcoólicos

- **Arquivo:** `apiAlcoholicRender.js`
- **API Consumida:** `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
- **Descrição:** Esta página exibe uma lista de drinks alcoólicos. Cada drink é exibido em um cartão que contém o nome do drink e a imagem.

## Como Executar

1. **Clone o repositório:**
   ```sh
   git clone <URL>
   cd <NOME_DO_REPOSITORIO>
   ```

### Dependências

- Bootstrap: Para estilização dos componentes.
- Fetch API: Para consumir as APIs de drinks.

### Exemplo de Uso

#### Página de Drinks Margarita

- Abra index.html no navegador.
- Clique no botão "Load Drinks".
- A lista de drinks Margarita será exibida na tela.

#### Página de Drinks Alcoólicos

- Abra alcolic.html no navegador.
- Clique no botão "Load Drinks".
- A lista de drinks alcoólicos será exibida na tela.

#### Página de Drinks Cocktails

- Abra cocktailGlassRender.html no navegador.
- Clique no botão "Load Drinks".
- A lista de drinks alcoólicos será exibida na tela.


### Estrutura do Projeto

.
├── js
│   ├── apiAlcoholic.js
│   ├── apiAlcoholicRender.js
│   ├── apiMargarita.js
│   ├── main.js
│   └── navbar.js
├── styles
│   └── style.css
├── index.html
├── alcolic.html
├── cocktailGlassRender.html
└── README.md


## Qualidade do código:

[![DeepScan grade](https://deepscan.io/api/teams/26116/projects/28843/branches/929790/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=26116&pid=28843&bid=929790)