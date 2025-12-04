let a=[1,2];
a.push(3);
a.pop();
a.pop();
console.log(a);
let y=[1,2,3];
console.log(y.length);
let x=["a","b","c"]
console.log(x.includes("b"));
let user ={
    name:"john",
    age:25,
};
console.log(Object.keys(user));
console.log(Object.values(user));
user.city = "Delhi";
console.log(user);

const add = (a,b) =>{ //arrow function
  return a+b;
};

let result= add(5,10);
console.log(result);
const animals = ["cat", "dog", "bird"];

animals.forEach((animal) => {
  console.log(animal);
});
// const numbers = [1, 2, 3];
// const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]
const numbers = [5, 10, 15, 20];

const filtered = numbers.filter((num) => num > 10);

console.log(filtered); // [15, 20]



