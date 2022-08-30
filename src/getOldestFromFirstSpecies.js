const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((elemento) => id.includes(elemento.id)).responsibleFor[0];
  return Object.values(species.find((specie) => specie.id === idAnimal).residents
    .reduce((acc, curr) => {
      if (acc.age > curr.age) {
        return acc;
      }
      return curr;
    }));
}

module.exports = getOldestFromFirstSpecies;
