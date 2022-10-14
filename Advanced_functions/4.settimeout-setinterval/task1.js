/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.*/

//srtTimeout
function printNumber(from, to) {
  let cur = from;

  function f() {
    console.log(cur);
    if (cur < to) setTimeout(f, 1000);
    cur++;
  }

  f();
}

printNumber(0, 5);

//setInterval
function printNumber2(from, to) {
  let cur = from;

  function f() {
    console.log(cur);
    if (cur == to) clearInterval(timerId);
    cur++;
  }

  f();
  let timerId = setInterval(f, 1000);
}

printNumber2(10, 15);
