/*European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.*/

let date = new Date(2012, 0, 3); // 3 Jan 2012

function getLocalDay(date) {
  return [7, 1, 2, 3, 4, 5, 6][date.getDay()];
}
console.log(getLocalDay(date)); // tuesday, should show 2
