const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(visitantes) {
  const child = visitantes.filter((visitante) => visitante.age < 18).length;
  const adult = visitantes.filter((visitante) => visitante.age >= 18 && visitante.age < 50).length;
  const senior = visitantes.filter((visitante) => visitante.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (!entrants || !entrants[0]) {
    return 0;
  }
  {
    const retorno = countEntrants(entrants);
    return (retorno.child * 20.99 + retorno.adult * 49.99 + retorno.senior * 24.99);
  }
}

// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
