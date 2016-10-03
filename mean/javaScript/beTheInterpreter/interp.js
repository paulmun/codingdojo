//EXAMPLE////////////////////////////////////

//EXAMPLE PROBLEM
var hello = "interesting";
function example() {
  var hello = "hi!";
  console.log(hello);
}
example();
console.log(hello);

//EXAMPLE SOLUTION
//declarations get hoisted
var hello;                 
function example() {       
  var hello;               
  hello = "hi";            
  console.log(hello);       
}
//assignments and invocation maintain order
hello = "interesting";     
example();                        
console.log(hello);

//EXAMPLE////////////////////////////////////



//PROBLEM 1////////////////////////////////////

//PROBLEM 1
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

//SOLUTION 1
var first_variable = "Yipee I was first!";

function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

console.log(first_variable);
console.log(first_variable);

//PROBLEM 1////////////////////////////////////



//PROBLEM 2////////////////////////////////////

//PROBLEM 2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

//SOLUTION 2
var food = "Chicken";

function eat() {
  var food = "gone";
  food = "half-chicken";
  console.log(food);
  console.log(food);
}

eat();
console.log(food);

//PROBLEM 2////////////////////////////////////



//PROBLEM 3////////////////////////////////////

//PROBLEM 3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

//SOLUTION 3
var new_word = "NEW!";

function lastFunc() {
  new_word = "old";
}

console.log(new_word);

//PROBLEM 3////////////////////////////////////