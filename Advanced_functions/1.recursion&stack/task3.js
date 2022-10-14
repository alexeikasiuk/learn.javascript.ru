/*Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:*/

//slow
function fibSlow(n) {
  return n <= 1 ? n : fibSlow(n - 1) + fibSlow(n - 2);
}

//fast
function fibFast(n) {
  let a = 1,
    b = 1,
    sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}

let start = new Date().getTime();
console.log('fibF 3 = ', fibFast(3)); // 2
console.log(new Date().getTime() - start);

start = new Date().getTime();
console.log('fibF 7 = ', fibFast(7)); // 13
console.log(new Date().getTime() - start);

start = new Date().getTime();
console.log('fibF 77 = ', fibFast(77)); // 5527939700884757
console.log(new Date().getTime() - start);

start = new Date().getTime();
console.log('fibS 3 = ', fibSlow(3)); // 2
console.log(new Date().getTime() - start);

start = new Date().getTime();
console.log('fibS 7 = ', fibSlow(7)); // 13
console.log(new Date().getTime() - start);

// start = new Date().getTime();
// console.log('fibS 77 = ', fibSlow(77)); // 5527939700884757
// console.log(new Date().getTime() - start);
/*P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.*/
