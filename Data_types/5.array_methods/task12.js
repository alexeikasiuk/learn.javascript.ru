/* Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/

function unique(arr) {
  let array = [];
  new Set(arr).forEach((e) => array.push(e));
  /*
   for (let i of arr) {
    if (!array.includes(i)) {
      array.push(i);
    }
  }
  */
  return array;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
