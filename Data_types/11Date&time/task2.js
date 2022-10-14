/*Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.*/

let date = new Date(2012, 0, 3); // 3 Jan 2012
function getWeekDay(date) {
  return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][date.getDay()];
}
console.log(getWeekDay(date)); // should output "TU"
