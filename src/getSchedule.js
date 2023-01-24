const data = require('../data/zoo_data');

const { species, hours } = data;

const findAnimal = (animal) => species.find((specie) => specie.name === animal).availability;

const arraySpecies = species.map((specie) => specie.name);

const day = (schedule, scheduleTarget) => {
  const dayObject = {};
  dayObject[scheduleTarget] = schedule[scheduleTarget];
  return dayObject;
};

const mondayClosed = () => {
  const alerta = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return alerta;
};

const dayWeek = Object.keys(hours);

const schedule = dayWeek.reduce((acc, curr) => {
  acc[curr] = {
    officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
    exhibition: species.filter((animal) => animal
      .availability.includes(curr)).map((element) => element.name),
  };
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return mondayClosed();

  if (dayWeek.includes(scheduleTarget)) return day(schedule, scheduleTarget);

  if (arraySpecies.includes(scheduleTarget)) return findAnimal(scheduleTarget);

  return Object.assign(schedule, mondayClosed());
}

module.exports = getSchedule;
