# Pokemart
<p align="center">![Page Preview](/docs/preview-page.png)</p>
<p align="center">[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://pokemart.now.sh)</p>

## Descrição do Projeto
[Pokemart](https://pokemart.now.sh) é uma aplicação que simula uma loja virtual de Pokémon. O objetivo do desenvolvimento da loja é o de colocar em prática conhecimentos obtidos ao longo do trinamento [Hiring Coders](https://hiringcoders.gama.academy) promovido pela [Gama Academy](https://gama.academy).

## O Desafio
Para o desafio foi solicitado que os desafiantes consumissem a API [PokéAPI](https://pokeapi.co). Os requisitos para a implementação da loja foram:
 - [x] Definir preços aleatórios porém mantendo a consistência com relação ao carrinho de compras
 - [x] Catálogo de produtos
 - [x] Carrinho lateral
 - [x] Resumo do carrinho
 - [ ] Barra de busca para filtrar os Pokémon
 - [x] Botão de finalizar compra, reiniciando o processo de compra
 - [x] Modal de "Obrigado" ao finalizar compra
 - [x] Salvar os dados da compra do usuário localmente para não perdê-las ao atualizar a página

### Tecnologias e Dependências
Toda a aplicação fora construida utilizando a biblioteca [ReactJS](https://reactjs.org) inteiramente programada com [TypeScript](https://www.typescriptlang.org).

* [axios](https://github.com/axios/axios) 
* [react-router-dom](https://github.com/ReactTraining/react-router)
* [styled-components](https://styled-components.com)
* [node-sass](https://github.com/sass/node-sass)
* [normalize.css](https://necolas.github.io/normalize.css/)
* [meterial-ui](https://material-ui.com)
* [react-icons](https://react-icons.github.io/react-icons/)

### Ambiente de Desenvolvimento
Se desejar rodar a aplicação localmente, siga os seguintes procedimentos:

Clonando o repositório:
```sh
$ git clone https://github.com/sineto/gama-pokemart
```

Instalando dependências:
```sh
$ cd gama-pokemart
$ yarn install # ou npm install
```

Rodando o servidor React:
```sh
$ yarn start
```

## Todos
- [ ] Reduzir *props drilling*
- [ ] Header: Condicionar visibilidade do contador de items
- [ ] Carrinho: Input em cada item para usuário setar quantidade de manualmente (ao invés de somente usando os botões `+` e `-`)
- [ ] Verificar lentidão na requisição dos recursos da API
