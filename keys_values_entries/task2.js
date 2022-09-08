/*Напишите функцию count(obj), которая возвращает количество свойств объекта:*/

let user = {
  name: "John",
  age: 30,
};

function count(arr) {
  return Object.keys(arr).length;
}

console.log(count(user)); // 2

/*Постарайтесь сделать код как можно короче.
P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».*/
