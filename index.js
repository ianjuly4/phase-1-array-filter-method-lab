// Code your solution he
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, searchString) {
  const searchLowerCase = searchString.toLowerCase();
  const filteredDrivers = drivers.filter(driver => {
    const driverLowerCase = driver.toLowerCase();
    return driverLowerCase.includes(searchLowerCase);
  });

  return filteredDrivers;
}
const searchName = 'bob';

const filteredDrivers = findMatching(drivers, searchName);
console.log(filteredDrivers);


function fuzzyMatch(drivers, searchString) {
  const searchFirstLetter = searchString[0]
  const driversFiltered = drivers.filter(driver => {
    const driverFirstLetter = driver[0];
    return driverFirstLetter.includes(searchFirstLetter);
  });

  return driversFiltered;
}
const nameSearch = 'bob';

const driversFiltered = fuzzyMatch(drivers, nameSearch);
console.log(filteredDrivers);


function matchName(drivers, name) {
  const elementFiltered = drivers.filter(driver => driver.name === name);
  return elementFiltered;
}
const elementName = 'bob';



const elementFiltered = matchName(drivers,elementName);
console.log(elementFiltered)

