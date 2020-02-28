const sandwich = {
	bread: "Ntake",
	meat: "Minced",
	cheese: "swiss",
	toppings: ["lettuce", "tomato", "cabagge"],
}

//object destructuring
let {cheese, toppings} = sandwich
cheese = "Ugandan"
toppings =  "Salads"

console.log(sandwich.cheese, sandwich.toppings)
console.log(cheese, toppings)

//Array destructuring
let [lettuce, tomatto] = sandwich.toppings
console.log(lettuce, tomatto)

//functions in javascript
const myfunc = function(){
	console.log(" Iam a function")
}

function myfunc1(){
	console.log("Iam a function too")
}