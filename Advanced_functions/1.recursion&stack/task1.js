/*Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:
*/

// loop
function sumTo1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//recursion
function sumTo2(n) {
  return n == 1 ? n : n + sumTo2(n - 1);
}

//Math
function sumTo3(n) {
  return (n * (n + 1)) / 2;
}

let start = new Date().getTime();
console.log(sumTo1(10000));
console.log('loop', new Date().getTime() - start);

start = new Date().getTime();
console.log(sumTo2(10000));
console.log('recursion', new Date().getTime() - start);

start = new Date().getTime();
console.log(sumTo3(10000));
console.log('Math', new Date().getTime() - start);
/*P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?*/
