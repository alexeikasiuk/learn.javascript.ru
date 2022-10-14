/*Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.*/

function getSecondsToTomorrow() {
  let date = new Date(),
    hr = date.getHours(),
    mn = date.getMinutes(),
    sc = date.getSeconds();
  return 86400 - ((hr * 60 + mn) * 60 + sc);
}

console.log(getSecondsToTomorrow());
