/*Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

/*
Напишите функцию printList(list). Выведите односвязный список в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.*/

function printListRecur(list) {
  if (list.next) printListRecur(list.next);
  console.log(list.value);
}
printListRecur(list);

function printListLoop(list) {
  let obj = list,
    arr = [];
  while (obj) {
    arr.push(obj.value);
    obj = obj.next;
  }

  // arr.reverse().forEach((e) => console.log(e));
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printListLoop(list);
