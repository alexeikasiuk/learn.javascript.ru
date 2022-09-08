/*Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.*/

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  let map = new Map();
  arr.forEach((e) => map.set(e.split("").sort().join("").toLowerCase(), e));
  return Array.from(map.values());
}
console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

/*Из каждой группы анаграмм должно остаться только одно слово, не важно какое.*/
