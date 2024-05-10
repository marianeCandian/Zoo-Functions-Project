# Zoo Functions

Este é um projeto desenvolvido no curso de Desenvolvimento de Software da Trybe. O objetivo é praticar conceitos de JavaScript ES6 como funções de alta ordem (HOFs), spread operator, parâmetro rest, object destructuring e default destructuring.

O projeto consiste em simular um sistema de relatório de um zoológico. O sistema possui informações a respeito dos animais presentes no zoológico, colaboradores, horários de funcionamento e uma tabela de preços que varia de acordo com a idade das pessoas que o visitam.

Foi desenvolvido um conjunto de funções capazes de recuperar vários tipos de informações acerca do zoológico e de seu funcionamento, utilizando os conceitos de JavaScript.

## Tecnologias utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- JavaScript ES6
- Jest
- Testes de cobertura
- let
- const
- arrow functions
- template literals
- spread operator
- parâmetro rest
- object destructuring
- array destructuring;
- default destructuring
- abbreviation object literal
- default params
- higher order functions
- Node.js

## Instalação do projeto localmente

Para instalar este projeto na sua máquina localmente siga estes passos

1. Clone este repositório usando 

```javascript
  git clone git@github.com:brenolg/Zoo-Functions-JS.git
```

2. Instale as dependências usando 

```javascript
  npm install
```
3. Execute os testes usando 

```javascript
  npm test
```
## Requisitos do projeto

1. Implemente a função `getSpeciesByIds` que busca as espécies de animais por id
2. Implemente a função `getAnimalsOlderThan` que verifica se todos os animais de uma espécie possuem a idade mínima especificada
3. Implemente a função `getEmployeeByName` que busca as pessoas colaboradoras a partir do primeiro ou último nome
4. Crie a gestão das pessoas colaboradoras de acordo com o respectivo gerente
5. Implemente a função `countAnimals` que contabiliza a quantidade de espécies de animais residentes no zoológico
6. Obtenha ao menos 80% de cobertura de testes na função `handlerElephants`
7. Obtenha ao menos 90% de cobertura de testes na função `handlerElephants`
8. Implemente a função `calculateEntry` que calcula o valor total da entrada
9. Implemente a função `getOldestFromFirstSpecies` para encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora
10. Implemente a função `getEmployeesCoverage` para retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável
11. Obtenha ao menos 85% de cobertura de testes na função `getOpeningHours`
12. Obtenha ao menos 95% de cobertura de testes na função `getOpeningHours`

## Agradecimentos

Agradeço à Trybe pela oportunidade de aprender sobre JavaScript ES6 neste projeto.
