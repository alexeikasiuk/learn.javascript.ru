//Turn the user into JSON and then read it back into another variable.

let user = {
  name: 'John Smith',
  age: 35,
};

let json = JSON.stringify(user);
console.log(json);

let customer = JSON.parse(json);
console.log(customer);
