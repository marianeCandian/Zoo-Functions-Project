const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((funcionario) => funcionario.managers.includes(managerId))
    .map((pessoas) => `${pessoas.firstName} ${pessoas.lastName}`);
}

// console.log(getRelatedEmployees('stephanieId'));

module.exports = { isManager, getRelatedEmployees };
