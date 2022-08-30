const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      if (!acc[curr.name]) {
        acc[curr.name] = curr.residents.length;
      }
      return acc;
    }, {});
  }
  const especies = species.find((specie) => animal.specie === specie.name);
  const speciesBySex = especies.residents.filter((resident) => resident.sex === animal.sex);
  return (animal.sex) ? speciesBySex.length : especies.residents.length;
}

// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
