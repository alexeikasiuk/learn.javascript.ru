/*Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(arr) {
  let sum = 0;

  for (let e of Object.values(arr)) {
    sum += e;
  }
  return sum;
}

console.log(sumSalaries(salaries)); // 650
