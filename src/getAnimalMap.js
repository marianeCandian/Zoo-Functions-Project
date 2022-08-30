const data = require('../data/zoo_data');

const { species } = data;

const findSpeciesByLocation = (any) => species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  acc[curr.location].push(curr.name);
  return acc;
}, {});

const findAnimalByName = (filteredArray, options) => {
  const result = filteredArray.reduce((acc, curr) => {
    let foundAnimal = species.find((especie) => especie.name === curr).residents;
    const animalObject = {};
    animalObject[curr] = [];
    if (options.sex) {
      foundAnimal = foundAnimal.filter((animal) => animal.sex === options.sex);
    }
    foundAnimal.forEach((e) => animalObject[curr].push(e.name));
    if (options.sorted === true) {
      animalObject[curr].sort();
    }
    acc.push(animalObject);
    return acc;
  }, []);
  return result;
};

const filterAnimalsByName = (options) => {
  const { NE: nEast, NW: nWest, SE: sEast, SW: sWest } = findSpeciesByLocation(species);

  return {
    NE: findAnimalByName(nEast, options),
    NW: findAnimalByName(nWest, options),
    SE: findAnimalByName(sEast, options),
    SW: findAnimalByName(sWest, options),
  };
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return findSpeciesByLocation();
  } return filterAnimalsByName(options);
}

// console.log(getAnimalMap({ sorted: true}));
module.exports = getAnimalMap;
